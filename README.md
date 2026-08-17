# Anchor Philippines OTM Market Opportunity Dashboard

This portable, offline-first dashboard combines Philippines Treats market intelligence, the original OTM methodology and an Anchor activation framework.

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
- Category Opportunity: category scale, top brands and application plays.
- Anchor Fit Diagnostics: material, flavor and process signals plus visible model assumptions.
- Target Explorer: 15 priority chain samples ranked by outlet scale and mapped to Anchor applications.
- Methodology & Data: the original OTM formula, data foundation and collaboration inputs.

## OTM formula retained from the original methodology

`OTM Score = Revenue Proxy × Anchor Addressable Spend Ratio`

`Revenue Proxy = Outlet Count × Meals per Day × Avg Price per Meal × Days of Operating`

`Meals per Day = Segment Baseline × Traffic Signal Index × Location Adjustment`

`Traffic Signal Index = 50% Review Volume Index + 50% Rating Index`

`Anchor Addressable Spend Ratio = Category Spend Ratio × Anchor Fit Coefficient`

The visible outlet scale index is `listed outlets ÷ largest listed-outlet count × 100`. OTM opportunity is developed through joint calibration of Philippines market inputs and Anchor commercial inputs.

## Data files

- `data/category_summary.csv`: category market data and model inputs.
- `data/channels.csv`: channel structure.
- `data/cities.csv`: top 20 cities.
- `data/brand_sample.csv`: 15-brand priority sample.
- `data/signals.csv`: ingredient, flavor and process signals.
- `data/source_ledger.csv`: model source documentation.
- `data/model.js`: runtime data used by the offline dashboard.

## Collaboration inputs

1. Anchor customer sales by customer/outlet and SKU.
2. Distributor outlet master and coverage status.
3. Anchor SKU-to-application mapping.
4. Account owner, pipeline stage and last-contact date.
5. Stable outlet ID, address and city.

With these inputs, the dashboard can separate served versus white-space outlets, calibrate PHP opportunity, recommend products, assign ownership and create a route-level action queue.

## Recommended use

Use the dashboard to align market priorities, calibrate the OTM model and connect the opportunity to Anchor account activation.
