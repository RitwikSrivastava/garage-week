Install Dependencies - 

npm install axios cheerio fuse.js

npm install @babel/core @babel/cli @babel/preset-env

############################################################################
Local tools version- 

Java 11

node 16.19.0

node server.js

############################################################################

API's mocked in this repo : 

// API endpoint to get mock Google Search Console data for the given domain.
'/api/gsc-data/:domain'

// Expose the performKeywordGapAnalysis as an API
'/api/keyword-gap-analysis/:domain'


// API endpoint to get Site Ranking For Keywords as an API
'/api/site-ranking'


//  API to get competitor keywords
'/api/competitor-keywords/:domain'

############################################################################

Sample data used are stored inside mockKeywords

############################################################################

How is Keyword Gap analysis is performed - 

1. Collect Competitor Keywords:
   
   a. Fetches keywords associated with each competitor using the /api/competitor-keywords/:domain endpoint.
   
   b. Applies a filter (filterBrandName) to exclude keywords containing specified brand names (brandNames).
3. Retrieves the rankings of the specified domain for the collected unique competitor keywords using getSiteRankingForKeywords(domain, uniqueCompetitorKeywords).
4. Build keywordGap object to store the comparative analysis data.
5. Keyword Gap analysis returns a JSON response containing the constructed keywordGap object, providing insights into keyword rankings disparity between the specified domain and its competitors. 
6. A seperate API endpoint to get mock Google Search Console data for the given domain.'/api/gsc-data/:domain' . 
