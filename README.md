# Anchor Philippines OTM Dashboard v0

This is a portable, offline-first prototype for prioritizing the Philippines Treats market for Anchor. It uses observed 2026Q2 market data and a transparent relative opportunity index. It does not contain Anchor sales, distributor coverage, outlet-level addresses, account owners, or calibrated PHP opportunity.

## Open the dashboard

### Simplest option

Double-click `index.html`. The dashboard data is bundled as a local script, so the core experience works without internet access or a web server.

### Recommended on macOS

Double-click `Start Anchor Philippines Dashboard.command`. It starts a server bound only to `127.0.0.1` and opens the dashboard in your default browser.

If macOS blocks the launcher, right-click it, choose **Open**, then confirm once.

### Recommended on Windows

Double-click `Start Anchor Philippines Dashboard.cmd`. Python 3 is required for the launcher; if Python is unavailable, double-click `index.html` instead.

## What is inside

- Executive Overview: market size, QSR concentration, category priority and city clusters.
- Category Opportunity: category economics proxy, top observed brands and application plays.
- Anchor Fit Diagnostics: material, flavor and process signals plus visible model assumptions.
- Target Explorer: 15 observed chain samples ranked with a relative index and percentile tier.
- Methodology & Data: formula, tier interpretation, audit trail, limitations and client data contract.

## OTM v0 formula

`raw score = observed outlets × relative revenue weight × Anchor fit factor`

`relative index = raw score ÷ highest raw score in the comparison set × 100`

The index is a prioritization tool, not a financial forecast. Tier A is the top 20% of the 15-brand sample; Tier B is the next 30%; Tier C is the next 30%; Tier D is the remaining 20%.

## Data files

- `data/category_summary.csv`: category observations and model assumptions.
- `data/channels.csv`: observed channel structure.
- `data/cities.csv`: top 20 observed cities.
- `data/brand_sample.csv`: observed 15-brand sample.
- `data/signals.csv`: ingredient, flavor and process signals.
- `data/source_ledger.csv`: observed versus modeled audit trail.
- `data/model.js`: runtime data used by the offline dashboard.

## Required inputs for v1

1. Anchor customer sales by customer/outlet and SKU.
2. Distributor outlet master and coverage status.
3. Anchor SKU-to-application mapping.
4. Account owner, pipeline stage and last-contact date.
5. Stable outlet ID, address and city.

With these inputs, v1 can separate served versus white-space outlets, calibrate PHP opportunity, recommend products, assign ownership and create a route-level action queue.

## Important boundary

Use v0 for workshop prioritization and data alignment. Do not use it as a sales forecast, a definitive customer list or a coverage audit.
