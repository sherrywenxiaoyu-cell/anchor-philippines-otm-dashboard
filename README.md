# Anchor Philippines OTM Market Opportunity Dashboard

This portable, offline-first dashboard combines Philippines Treats market intelligence, the original OTM methodology and a transparent Anchor base planning case.

## Open the dashboard

### Simplest option

Double-click `index.html`. The dashboard data is bundled as a local script, so the core experience works without internet access or a web server.

### Recommended on macOS

Double-click `Start Anchor Philippines Dashboard.command`. It starts a server bound only to `127.0.0.1` and opens the dashboard in your default browser.

If macOS blocks the launcher, right-click it, choose **Open**, then confirm once.

### Recommended on Windows

Double-click `Start Anchor Philippines Dashboard.cmd`. Python 3 is required for the launcher; if Python is unavailable, double-click `index.html` instead.

## What is inside

- Executive Overview: market size, QSR concentration, annual sample OTM and city clusters.
- Category Opportunity: category scale, OTM per outlet, top brands and application plays.
- Anchor Fit Diagnostics: material, flavor and process signals plus visible category assumptions.
- Target Explorer: 15 priority chain samples ranked by estimated annual OTM and mapped to Anchor applications.
- Methodology & Data: the original OTM formula, data foundation and collaboration inputs.

## OTM formula retained from the original methodology

`OTM Score = Revenue Proxy × Anchor Addressable Spend Ratio`

`Revenue Proxy = Outlet Count × Meals per Day × Avg Price per Meal × Days of Operating`

`Meals per Day = Segment Baseline × Traffic Signal Index × Location Adjustment`

`Traffic Signal Index = 50% Review Volume Index + 50% Rating Index`

`Anchor Addressable Spend Ratio = Category Spend Ratio × Anchor Fit Coefficient`

The visible OTM index is `brand estimated annual OTM ÷ highest estimated annual OTM in the sample × 100`.

## Base planning assumptions

| Category | Meals/day | Avg price | Days | Traffic | Location | Category spend ratio | Anchor fit | OTM/outlet/year |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Beverage | 160 | PHP 150 | 350 | 1.00 | 1.00 | 3.0% | 1.10 | PHP 277,200 |
| Pastry | 120 | PHP 300 | 350 | 1.00 | 1.00 | 3.5% | 1.15 | PHP 507,150 |
| Dessert | 125 | PHP 200 | 350 | 1.00 | 1.00 | 4.0% | 1.20 | PHP 420,000 |

The 15-brand sample produces an annual OTM planning estimate of PHP 2.781B. This is an addressable-spend proxy, not current Anchor sales or a committed revenue forecast.

The Goldilocks SM Mall of Asia reference outlet uses the validated traffic signal of 1.25 and the BI price-band midpoint of PHP 450. Its estimated annual OTM is PHP 950,906. The higher outlet-specific values are not applied across all 745 Goldilocks outlets.

## Data files

- `data/category_summary.csv`: category market data, planning assumptions and derived OTM per outlet.
- `data/channels.csv`: channel structure.
- `data/cities.csv`: top 20 cities.
- `data/brand_sample.csv`: 15-brand priority sample with derived annual OTM estimates.
- `data/signals.csv`: ingredient, flavor and process signals.
- `data/source_ledger.csv`: model source documentation.
- `data/model.js`: runtime data used by the offline dashboard.

## Collaboration inputs

1. Anchor customer sales by customer/outlet and SKU.
2. Distributor outlet master and coverage status.
3. Anchor SKU-to-application mapping.
4. Account owner, pipeline stage and last-contact date.
5. Stable outlet ID, address and city.

These inputs replace category-level estimates with customer-specific values, separate served versus white-space outlets, recommend products, assign ownership and create a route-level action queue.

## Recommended use

Use the dashboard to align market priorities and discuss a complete base planning case. Before setting account targets, calibrate meals/day, average spend, dairy wallet and fit with Anchor sales, operator purchasing and distributor coverage.
