window.ANCHOR_DATA = {
  meta: {
    client: "Anchor Philippines",
    market: "Philippines",
    period: "2026Q2",
    scenario: "Base planning case",
    currency: "PHP",
    estimateAsOf: "17 Aug 2026",
    source: "GAOYAN Philippines BI dashboard / Philippines Treats source extract",
    scope: "Philippines Treats market opportunity, OTM base-case sizing and Anchor activation framework.",
    estimateBasis: "BI outlet counts combined with category-level planning assumptions. Estimates are annual opportunity proxies, not current Anchor sales."
  },
  marketL1: [
    { name: "Others", outlets: 234988 },
    { name: "Treats", outlets: 215960 },
    { name: "Asian Dining", outlets: 119043 },
    { name: "Asian Fast Food", outlets: 80339 },
    { name: "Non-Asian Fast Food", outlets: 51229 },
    { name: "Non-Asian Dining", outlets: 15428 }
  ],
  categories: [
    {
      name: "Beverage", outlets: 134184, qsrOutlets: 108757, listedChainOutlets: 15903, top5Outlets: 2957,
      segmentBaseline: 160, trafficSignal: 1.00, locationAdjustment: 1.00, avgPricePhp: 150, operatingDays: 350,
      categorySpendRatio: 0.030, anchorFit: 1.10, confidence: "Medium",
      rationale: "High-frequency beverage occasion; conservative PHP 150 spend proxy and moderate dairy wallet.",
      applications: ["Whipping cream", "Cream cheese", "Butter-based beverages"]
    },
    {
      name: "Pastry", outlets: 60117, qsrOutlets: 58817, listedChainOutlets: 8699, top5Outlets: 2723,
      segmentBaseline: 120, trafficSignal: 1.00, locationAdjustment: 1.00, avgPricePhp: 300, operatingDays: 350,
      categorySpendRatio: 0.035, anchorFit: 1.15, confidence: "Medium",
      rationale: "Lower daily volume than beverages, but higher spend and stronger butter, cream and cream-cheese relevance.",
      applications: ["Butter", "Whipping cream", "Cream cheese"]
    },
    {
      name: "Dessert", outlets: 21659, qsrOutlets: 20989, listedChainOutlets: 4537, top5Outlets: 1382,
      segmentBaseline: 125, trafficSignal: 1.00, locationAdjustment: 1.00, avgPricePhp: 200, operatingDays: 350,
      categorySpendRatio: 0.040, anchorFit: 1.20, confidence: "Medium",
      rationale: "Moderate volume and spend, with the strongest modeled dairy intensity across the three Treats categories.",
      applications: ["Whipping cream", "Cream cheese", "Butter"]
    }
  ],
  channels: [
    { name: "QSR", beverage: 108757, pastry: 58817, dessert: 20989 },
    { name: "Pubs / Bars / Bistro", beverage: 12968, pastry: 16, dessert: 1 },
    { name: "Others", beverage: 9283, pastry: 577, dessert: 362 },
    { name: "FSR", beverage: 2755, pastry: 544, dessert: 208 },
    { name: "Fixed-Point", beverage: 354, pastry: 156, dessert: 93 },
    { name: "Mobile", beverage: 51, pastry: 6, dessert: 1 },
    { name: "Travel", beverage: 16, pastry: 1, dessert: 5 }
  ],
  cities: [
    { name: "Quezon", beverage: 6929, pastry: 3008, dessert: 1384 },
    { name: "Manila", beverage: 3764, pastry: 1405, dessert: 728 },
    { name: "Davao", beverage: 3484, pastry: 1689, dessert: 614 },
    { name: "Caloocan", beverage: 2857, pastry: 1336, dessert: 555 },
    { name: "Cebu", beverage: 3009, pastry: 1108, dessert: 528 },
    { name: "Taguig", beverage: 2266, pastry: 967, dessert: 449 },
    { name: "Bacolod", beverage: 2494, pastry: 772, dessert: 245 },
    { name: "Pasig", beverage: 1907, pastry: 934, dessert: 471 },
    { name: "Antipolo", beverage: 1808, pastry: 874, dessert: 349 },
    { name: "Cagayan De Oro", beverage: 1657, pastry: 819, dessert: 268 },
    { name: "Paranaque", beverage: 1591, pastry: 765, dessert: 332 },
    { name: "Makati", beverage: 1751, pastry: 570, dessert: 272 },
    { name: "Dasmarinas", beverage: 1541, pastry: 684, dessert: 276 },
    { name: "Las Pinas", beverage: 1408, pastry: 668, dessert: 292 },
    { name: "Bacoor", beverage: 1431, pastry: 641, dessert: 288 },
    { name: "Marikina", beverage: 1428, pastry: 654, dessert: 253 },
    { name: "Angeles", beverage: 1468, pastry: 471, dessert: 238 },
    { name: "Valenzuela", beverage: 1301, pastry: 592, dessert: 269 },
    { name: "Imus", beverage: 1260, pastry: 593, dessert: 268 },
    { name: "San Jose Del Monte", beverage: 1260, pastry: 557, dessert: 261 }
  ],
  brands: [
    { name: "BigBrew", category: "Beverage", outlets: 1257 },
    { name: "PICKUP COFFEE", category: "Beverage", outlets: 550 },
    { name: "Starbucks", category: "Beverage", outlets: 486 },
    { name: "KKOPI.Tea", category: "Beverage", outlets: 341 },
    { name: "Don Macchiatos", category: "Beverage", outlets: 323 },
    {
      name: "Goldilocks", category: "Pastry", outlets: 745,
      referenceOutlet: {
        name: "Goldilocks - SM Mall of Asia Foodshop",
        shopId: "3396122",
        rating: 4.4652,
        reviews: 181,
        reviewPercentile: 94.26,
        reviewIndex: 1.50,
        ratingPercentile: 32.91,
        ratingIndex: 1.00,
        trafficSignal: 1.25,
        avgPricePhp: 450,
        segmentBaseline: 120,
        locationAdjustment: 1.00,
        operatingDays: 350,
        categorySpendRatio: 0.035,
        anchorFit: 1.15
      }
    },
    { name: "Dunkin'", category: "Pastry", outlets: 730 },
    { name: "Red Ribbon", category: "Pastry", outlets: 463 },
    { name: "Mister Donut", category: "Pastry", outlets: 422 },
    { name: "Julie's Bakeshop", category: "Pastry", outlets: 363 },
    { name: "Aice Ice Cream", category: "Dessert", outlets: 355 },
    { name: "Don Benito's", category: "Dessert", outlets: 351 },
    { name: "Famous Belgian Waffles", category: "Dessert", outlets: 253 },
    { name: "Selecta Ice Cream Shop", category: "Dessert", outlets: 248 },
    { name: "Avocadoria", category: "Dessert", outlets: 175 }
  ],
  signals: {
    material: [
      { name: "Beverage & Dessert", share: 21.7025 },
      { name: "Vegetables / Fruits", share: 18.7800 },
      { name: "Dairy Product", share: 17.2772 },
      { name: "Rice / Flour", share: 14.7353 },
      { name: "Seasoning", share: 14.6458 },
      { name: "Meat", share: 5.8383 },
      { name: "Poultry", share: 4.2865 },
      { name: "Aquaculture", share: 2.7343 }
    ],
    flavor: [
      { name: "Sweet", share: 27.7535 },
      { name: "Creamy", share: 25.1217 },
      { name: "Vegetables / Fruits", share: 11.5616 },
      { name: "Bitter", share: 9.5777 },
      { name: "Herb & Spice", share: 6.9414 },
      { name: "Fragrant", share: 6.6003 },
      { name: "Savory", share: 6.0044 },
      { name: "Hot & Spicy", share: 3.8929 },
      { name: "Sour", share: 2.5464 }
    ],
    process: [
      { name: "Baked", share: 31.3632 },
      { name: "Blended", share: 24.7076 },
      { name: "Fried", share: 12.2149 },
      { name: "Rolled", share: 5.8261 },
      { name: "Steamed", share: 5.7464 },
      { name: "Brewed", share: 3.3452 },
      { name: "Stir-Fried", share: 3.1107 },
      { name: "Boiled", share: 2.8765 }
    ]
  },
  collaborationInputs: [
    { field: "Philippines segment baseline", status: "Base estimate available", use: "160 Beverage · 120 Pastry · 125 Dessert meals/day" },
    { field: "Peer-group rating/review export", status: "Validated example", use: "Goldilocks SM MOA traffic signal = 1.25; category base case = 1.00" },
    { field: "Operating days and location rule", status: "Base estimate available", use: "350 days/year · neutral location factor 1.00" },
    { field: "Category spend ratio", status: "Base estimate available", use: "3.0% Beverage · 3.5% Pastry · 4.0% Dessert" },
    { field: "Anchor fit coefficient", status: "Base estimate available", use: "1.10 Beverage · 1.15 Pastry · 1.20 Dessert" },
    { field: "Anchor customer sales", status: "Calibration input", use: "Replace the planning estimate with account-specific wallet and white-space" },
    { field: "Distributor outlet coverage", status: "Activation input", use: "Separate covered and white-space outlets" },
    { field: "SKU / application mapping", status: "Activation input", use: "Recommend product and recipe by account" },
    { field: "Account owner and stage", status: "Activation input", use: "Turn the OTM ranking into an executable call plan" },
    { field: "Outlet ID / address", status: "Activation input", use: "Enable deduplication, mapping and route planning" }
  ]
};
