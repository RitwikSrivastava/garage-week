const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const mockSiteOverviews = require('./mockSiteOverviews');
const mockKeywords = require('./mockKeywords');
const brandNames = ['petplace', 'petcoach', 'cats', 'vin', 'merckvetmanual', 'medi-vet'];
const competitors = ['petcoach.co', 'cats.com', 'vin.com', 'merckvetmanual.com', 'medi-vet.com'];

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Mock API to get site overview
app.get('/api/site-overview/:domain', (req, res) => {
    const { domain } = req.params;
    const overview = mockSiteOverviews[domain];
    if (overview) {
        res.json(overview);
    } else {
        res.status(404).json({ error: 'Domain not found' });
    }
});

// Mock API to get competitor keywords
app.get('/api/competitor-keywords/:domain', (req, res) => {
    const { domain } = req.params;
    const keywords = mockKeywords[domain];
    if (keywords) {
        res.json(keywords);
    } else {
        res.status(404).json({ error: 'Domain not found' });
    }
});


async function filterBrandName(keyword) {
    // filter out brand name keywords
    if (brandNames.some(brand => keyword.includes(brand))) {
        return false;
    }

    try {
        const response = await axios.get(`https://www.petplace.com/search?query=${encodeURIComponent(keyword)}`);
        const html = response.data;

        const $ = cheerio.load(html);

        // if there's no results then "NO Results found" will be displayed in the body.
        const noResults = $("body").text().includes("No results found");

        // If "No results found" is found, filter it.
        return !noResults;
    } catch (error) {
        console.error(`Error searching for keyword "${keyword}":`, error);
        // In case of an error, assume the keyword is valid to avoid false negatives
        return true;
    }
}

// Function to get the position of the site for given keywords
async function getSiteRankingForKeywords(domain, keywords) {
    const siteKeywords = (await axios.get(`http://127.0.0.1:${PORT}/api/competitor-keywords/${domain}`)).data;
    const keywordRanking = {};

    for (const keyword of keywords) {
        const siteKeyword = siteKeywords.find(sk => sk.keyword === keyword);
        if (siteKeyword) {
            keywordRanking[keyword] = siteKeyword.position;
        } else {
            keywordRanking[keyword] = null; // No ranking for this keyword
        }
    }

    return keywordRanking;
}

// Expose getSiteRankingForKeywords as an API
app.post('/api/site-ranking', async (req, res) => {
    const { domain, keywords } = req.body;
    try {
        const rankings = await getSiteRankingForKeywords(domain, keywords);
        res.json(rankings);
    } catch (error) {
        res.status(500).json({ error: 'Error getting site rankings' });
    }
});

// Perform keyword gap analysis
async function performKeywordGapAnalysis(domain) {
    const keywordGap = {};

    // Collect all unique competitor keywords
    const allCompetitorKeywords = new Set();

    for (const competitor of competitors) {
        const competitorKeywords = (await axios.get(`http://127.0.0.1:${PORT}/api/competitor-keywords/${competitor}`)).data;
        competitorKeywords.forEach(keyword => {
            if (filterBrandName(keyword.keyword)) {
                allCompetitorKeywords.add(keyword.keyword);
            }
        });
    }

    const uniqueCompetitorKeywords = Array.from(allCompetitorKeywords);

    // Get the ranking of the site for unique competitor keywords
    const siteKeywordRankings = await getSiteRankingForKeywords(domain, uniqueCompetitorKeywords);

    // Populate keywordGap with the data
    for (const competitor of competitors) {
        const competitorKeywords = (await axios.get(`http://127.0.0.1:${PORT}/api/competitor-keywords/${competitor}`)).data;
        competitorKeywords.forEach(keyword => {
            if (!keywordGap[keyword.keyword]) {
                keywordGap[keyword.keyword] = {
                    keyword: keyword.keyword,
                    [domain]: { position: siteKeywordRankings[keyword.keyword] },
                    [competitor]: { position: keyword.position }
                };
            } else {
                keywordGap[keyword.keyword][competitor] = { position: keyword.position };
            }
        });
    }

    return keywordGap;
}

// Expose the performKeywordGapAnalysis as an API
app.get('/api/keyword-gap-analysis/:domain', async (req, res) => {
    const { domain } = req.params;
    try {
        const keywordGap = await performKeywordGapAnalysis(domain);
        res.json(keywordGap);
    } catch (error) {
        res.status(500).json({ error: 'Error performing keyword gap analysis' });
    }
});

const gscmockResponse = {
    "rows": [
        { "keys": ["pet health tips"], "clicks": 1500, "impressions": 6000, "ctr": 0.25, "position": 4 },
        { "keys": ["best dog food"], "clicks": 1200, "impressions": 5000, "ctr": 0.24, "position": 3 },
        { "keys": ["cat grooming tips"], "clicks": 800, "impressions": 4000, "ctr": 0.2, "position": 6 },
        { "keys": ["pet insurance reviews"], "clicks": 1100, "impressions": 4500, "ctr": 0.24, "position": 5 },
        { "keys": ["how to train a puppy"], "clicks": 1300, "impressions": 5500, "ctr": 0.24, "position": 2 },
        { "keys": ["pet adoption guide"], "clicks": 1000, "impressions": 5000, "ctr": 0.2, "position": 7 },
        { "keys": ["pet friendly hotels"], "clicks": 900, "impressions": 4300, "ctr": 0.21, "position": 8 },
        { "keys": ["best pet toys"], "clicks": 950, "impressions": 4800, "ctr": 0.2, "position": 9 },
        { "keys": ["senior pet care"], "clicks": 800, "impressions": 4100, "ctr": 0.19, "position": 10 },
        { "keys": ["pet dental care"], "clicks": 850, "impressions": 4200, "ctr": 0.2, "position": 11 }
    ]
};

// API endpoint to get mock Google Search Console data
app.get('/api/gsc-data/:domain', (req, res) => {
    res.json(gscmockResponse);
});

app.post('/api/competitors-keywords-data', async (req, res) => {
    const { competitors } = req.body;

    try {
        const competitorsData = {};
        for (const competitor of competitors) {
            const keywordsData = (await axios.get(`http://127.0.0.1:${PORT}/api/competitor-keywords/${competitor}`)).data;
            competitorsData[competitor] = keywordsData.map(keyword => ({
                keyword: keyword.keyword,
                searchVolume: keyword.searchVolume, // assuming mockKeywords has searchVolume
                position: keyword.position
            }));
        }
        res.json(competitorsData);
    } catch (error) {
        res.status(500).json({ error: 'Error getting competitors keywords data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
