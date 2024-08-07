// Mock data for competitor keywords
const mockCompetitorKeywords = {
    'petplace.com': [
        { keyword: 'pet health tips', search_volume: 44000, position: 5 },
        { keyword: 'best dog food', search_volume: 43000, position: 6 },
        { keyword: 'cat grooming tips', search_volume: 41000, position: 7 },
        { keyword: 'pet insurance reviews', search_volume: 39000, position: 8 },
        { keyword: 'how to train a puppy', search_volume: 36000, position: 9 },
        { keyword: 'pet adoption guide', search_volume: 34000, position: 10 },
        { keyword: 'pet friendly hotels', search_volume: 32000, position: 11 },
        { keyword: 'best pet toys', search_volume: 49000, position: 1 },
        { keyword: 'senior pet care', search_volume: 43000, position: 5 },
        { keyword: 'pet dental care', search_volume: 41000, position: 6 }
    ],
    'petcoach.co': [
        { keyword: 'pet health tips', search_volume: 47000, position: 2 },
        { keyword: 'best dog food', search_volume: 46000, position: 3 },
        { keyword: 'cat grooming tips', search_volume: 44000, position: 4 },
        { keyword: 'pet insurance reviews', search_volume: 42000, position: 5 },
        { keyword: 'how to train a puppy', search_volume: 39000, position: 6 },
        { keyword: 'pet adoption guide', search_volume: 37000, position: 7 },
        { keyword: 'pet friendly hotels', search_volume: 35000, position: 8 },
        { keyword: 'best pet toys', search_volume: 33000, position: 9 },
        { keyword: 'senior pet care', search_volume: 31000, position: 10 },
        { keyword: 'pet dental care', search_volume: 29000, position: 11 }
    ],
    'cats.com': [
        { keyword: 'pet health tips', search_volume: 46000, position: 3 },
        { keyword: 'best dog food', search_volume: 45000, position: 4 },
        { keyword: 'cat grooming tips', search_volume: 43000, position: 5 },
        { keyword: 'pet insurance reviews', search_volume: 41000, position: 6 },
        { keyword: 'how to train a puppy', search_volume: 38000, position: 7 },
        { keyword: 'pet adoption guide', search_volume: 36000, position: 8 },
        { keyword: 'pet friendly hotels', search_volume: 34000, position: 9 },
        { keyword: 'best pet toys', search_volume: 32000, position: 10 },
        { keyword: 'senior pet care', search_volume: 30000, position: 11 },
        { keyword: 'pet dental care', search_volume: 28000, position: 12 }
    ],
    'vin.com': [
        { keyword: 'pet health tips', search_volume: 45000, position: 4 },
        { keyword: 'best dog food', search_volume: 44000, position: 5 },
        { keyword: 'cat grooming tips', search_volume: 42000, position: 6 },
        { keyword: 'pet insurance reviews', search_volume: 40000, position: 7 },
        { keyword: 'how to train a puppy', search_volume: 37000, position: 8 },
        { keyword: 'pet adoption guide', search_volume: 35000, position: 9 },
        { keyword: 'pet friendly hotels', search_volume: 33000, position: 10 },
        { keyword: 'best pet toys', search_volume: 31000, position: 11 },
        { keyword: 'senior pet care', search_volume: 29000, position: 12 },
        { keyword: 'pet dental care', search_volume: 27000, position: 13 }
    ],
    'merckvetmanual.com': [
        { keyword: 'pet health tips', search_volume: 50000, position: 1 },
        { keyword: 'best dog food', search_volume: 48000, position: 2 },
        { keyword: 'cat grooming tips', search_volume: 45000, position: 3 },
        { keyword: 'pet insurance reviews', search_volume: 43000, position: 4 },
        { keyword: 'how to train a puppy', search_volume: 40000, position: 5 },
        { keyword: 'pet adoption guide', search_volume: 38000, position: 6 },
        { keyword: 'pet friendly hotels', search_volume: 36000, position: 7 },
        { keyword: 'best pet toys', search_volume: 34000, position: 8 },
        { keyword: 'senior pet care', search_volume: 32000, position: 9 },
        { keyword: 'pet dental care', search_volume: 30000, position: 10 }
    ],
    'medi-vet.com': [
        { keyword: 'pet health tips', search_volume: 43000, position: 6 },
        { keyword: 'best dog food', search_volume: 42000, position: 7 },
        { keyword: 'cat grooming tips', search_volume: 40000, position: 8 },
        { keyword: 'pet insurance reviews', search_volume: 38000, position: 9 },
        { keyword: 'how to train a puppy', search_volume: 35000, position: 10 },
        { keyword: 'pet adoption guide', search_volume: 33000, position: 11 },
        { keyword: 'pet friendly hotels', search_volume: 31000, position: 12 },
        { keyword: 'best pet toys', search_volume: 39000, position: 7 },
        { keyword: 'senior pet care', search_volume: 41000, position: 6 },
        { keyword: 'pet dental care', search_volume: 43000, position: 5 }
    ],
    'vetrxdirect.com': [
        { keyword: 'pet health tips', search_volume: 42000, position: 7 },
        { keyword: 'best dog food', search_volume: 41000, position: 8 },
        { keyword: 'cat grooming tips', search_volume: 39000, position: 9 },
        { keyword: 'pet insurance reviews', search_volume: 37000, position: 10 },
        { keyword: 'how to train a puppy', search_volume: 34000, position: 11 },
        { keyword: 'pet adoption guide', search_volume: 32000, position: 12 },
        { keyword: 'pet friendly hotels', search_volume: 30000, position: 13 },
        { keyword: 'best pet toys', search_volume: 42500, position: 5 },
        { keyword: 'senior pet care', search_volume: 44000, position: 4 },
        { keyword: 'pet dental care', search_volume: 45000, position: 3 }
    ],
    'wagwalking.com': [
        { keyword: 'pet health tips', search_volume: 41000, position: 8 },
        { keyword: 'best dog food', search_volume: 40000, position: 9 },
        { keyword: 'cat grooming tips', search_volume: 38000, position: 10 },
        { keyword: 'pet insurance reviews', search_volume: 36000, position: 11 },
        { keyword: 'how to train a puppy', search_volume: 33000, position: 12 },
        { keyword: 'pet adoption guide', search_volume: 31000, position: 13 },
        { keyword: 'pet friendly hotels', search_volume: 29000, position: 14 },
        { keyword: 'best pet toys', search_volume: 45000, position: 3 },
        { keyword: 'senior pet care', search_volume: 46000, position: 2 },
        { keyword: 'pet dental care', search_volume: 49000, position: 1 }
    ]
};

// Mock data for site overview
const mockSiteOverviews = [
    {
        domain: 'petcoach.co',
        domain_rating: 75,
        backlinks: 1800,
        organic_keywords: 2800
    },
    {
        domain: 'cats.com',
        domain_rating: 70,
        backlinks: 1600,
        organic_keywords: 2500
    },
    {
        domain: 'vin.com',
        domain_rating: 68,
        backlinks: 1500,
        organic_keywords: 2400
    },
    {
        domain: 'merckvetmanual.com',
        domain_rating: 80,
        backlinks: 2000,
        organic_keywords: 3200
    },
    {
        domain: 'medi-vet.com',
        domain_rating: 72,
        backlinks: 1700,
        organic_keywords: 2600
    },
    {
        domain: 'vetrxdirect.com',
        domain_rating: 78,
        backlinks: 1900,
        organic_keywords: 3000
    },
    {
        domain: 'wagwalking.com',
        domain_rating: 76,
        backlinks: 1850,
        organic_keywords: 2900
    }
];

// Mock function to fetch competitor keywords
async function getMockCompetitorKeywords(competitor) {
    return mockCompetitorKeywords[competitor] || [];
}

// Mock function to fetch site overview
async function getMockSiteOverview(site) {
    return mockSiteOverview;
}
