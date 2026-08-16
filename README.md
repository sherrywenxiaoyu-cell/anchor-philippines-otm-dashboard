# Anchor Philippines BI Market View + OTM Readiness v0.1

This is a portable, offline-first view of observed Philippines Treats BI data plus an audited OTM readiness page. It no longer applies the earlier substitute formula based on revenue weights and Anchor fit assumptions. The original OTM formula is retained, but no Philippines OTM score is calculated until the required model and Anchor inputs are approved.

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
- Category Opportunity: observed category scale, top brands and application plays.
- Anchor Fit Diagnostics: material, flavor and process signals plus visible model assumptions.
- Target Explorer: 15 observed chain samples ranked only by BI outlet count; the normalized scale index is explicitly not OTM.
- Methodology & Data: the original OTM formula, pending inputs, audit trail, limitations and client data contract.

## OTM formula retained from the original methodology

`OTM Score = Revenue Proxy × Anchor Addressable Spend Ratio`

`Revenue Proxy = Outlet Count × Meals per Day × Avg Price per Meal × Days of Operating`

`Meals per Day = Segment Baseline × Traffic Signal Index × Location Adjustment`

`Traffic Signal Index = 50% Review Volume Index + 50% Rating Index`

`Anchor Addressable Spend Ratio = Category Spend Ratio × Anchor Fit Coefficient`

The dashboard does not calculate this score yet. The visible outlet scale index is only `listed outlets ÷ largest listed-outlet count × 100`; it is labeled as BI scale and must not be interpreted as OTM.

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

Use v0.1 for BI market orientation and OTM data alignment. Do not use it as an OTM result, sales forecast, definitive customer list or coverage audit.
