(() => {
  "use strict";

  const data = window.ANCHOR_DATA;
  if (!data) {
    document.body.innerHTML = '<main class="empty-state"><h1>Dashboard data could not be loaded.</h1><p>Keep the data folder next to index.html.</p></main>';
    return;
  }

  const state = { view: "overview", category: "All", tier: "All", search: "", cityCount: 10 };
  const categoryMap = Object.fromEntries(data.categories.map((item) => [item.name, item]));
  const formatInt = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  const formatPct = (value) => `${value.toFixed(1)}%`;
  const formatIndex = (value) => value.toFixed(0);
  const total = (items, getter) => items.reduce((sum, item) => sum + getter(item), 0);
  const categoryRaw = (item) => item.outlets;
  const maxCategoryRaw = Math.max(...data.categories.map(categoryRaw));

  data.categories.forEach((item) => {
    item.index = categoryRaw(item) / maxCategoryRaw * 100;
    item.qsrShare = item.qsrOutlets / item.outlets * 100;
    item.top5Share = item.top5Outlets / item.listedChainOutlets * 100;
  });

  data.brands.forEach((brand) => {
    const category = categoryMap[brand.category];
    brand.raw = brand.outlets;
    brand.applications = category.applications;
  });
  const maxBrandRaw = Math.max(...data.brands.map((brand) => brand.raw));
  [...data.brands].sort((a, b) => b.raw - a.raw).forEach((brand, index) => {
    brand.rank = index + 1;
    brand.index = brand.raw / maxBrandRaw * 100;
    brand.tier = brand.rank <= 3 ? "A" : brand.rank <= 8 ? "B" : brand.rank <= 12 ? "C" : "D";
  });

  const selectedCategories = () => state.category === "All" ? data.categories : data.categories.filter((item) => item.name === state.category);
  const filteredBrands = () => data.brands
    .filter((brand) => state.category === "All" || brand.category === state.category)
    .filter((brand) => state.tier === "All" || brand.tier === state.tier)
    .filter((brand) => brand.name.toLowerCase().includes(state.search.toLowerCase()))
    .sort((a, b) => b.raw - a.raw);

  function renderKpis() {
    const categories = selectedCategories();
    const outlets = total(categories, (item) => item.outlets);
    const qsrOutlets = total(categories, (item) => item.qsrOutlets);
    const brands = filteredBrands();
    const categoryLabel = state.category === "All" ? "Treats addressable outlets" : `${state.category} outlets`;
    const kpis = [
      { label: categoryLabel, value: formatInt.format(outlets), note: "2026Q2 market universe" },
      { label: "QSR concentration", value: formatPct(qsrOutlets / outlets * 100), note: "Primary execution channel" },
      { label: "Visible sample brands", value: formatInt.format(brands.length), note: "After current filters" },
      { label: "Dairy material signal", value: "17.3%", note: "Menu ingredient share" },
      { label: "Sweet + creamy", value: "52.9%", note: "Directional application fit" }
    ];
    document.querySelector("#kpiStrip").innerHTML = kpis.map((kpi) => `
      <div class="kpi"><span class="kpi-label">${kpi.label}</span><strong class="kpi-value">${kpi.value}</strong><span class="kpi-note">${kpi.note}</span></div>
    `).join("");
  }

  function barRow(label, value, max, display, colorClass = "") {
    const width = max ? Math.max(0, value / max * 100) : 0;
    return `<div class="bar-row"><span class="label">${label}</span><div class="bar-track" aria-hidden="true"><div class="bar-fill ${colorClass}" style="width:${width.toFixed(2)}%"></div></div><span class="bar-value">${display}</span></div>`;
  }

  function renderOverview() {
    const categories = selectedCategories();
    const maxIndex = Math.max(...categories.map((item) => item.index));
    document.querySelector("#categoryBars").innerHTML = categories.map((item, index) => barRow(
      item.name,
      item.index,
      maxIndex,
      `<strong>${formatInt.format(item.outlets)}</strong><small>Index ${formatIndex(item.index)}</small>`,
      index === 1 ? "cyan" : index === 2 ? "gray" : ""
    )).join("");

    const channels = data.channels.map((item) => ({
      name: item.name,
      value: total(categories, (category) => item[category.name.toLowerCase()])
    })).sort((a, b) => b.value - a.value);
    const maxChannel = Math.max(...channels.map((item) => item.value));
    document.querySelector("#channelBars").innerHTML = channels.map((item, index) => barRow(
      item.name,
      item.value,
      maxChannel,
      formatInt.format(item.value),
      index === 0 ? "" : "gray"
    )).join("");

    renderCities();
    const insight = state.category === "All"
      ? "Beverage provides the largest market scale; pastry and dessert strengthen dairy application relevance."
      : `${state.category} has ${formatInt.format(categories[0].outlets)} listed outlets and ${formatPct(categories[0].qsrShare)} QSR concentration.`;
    document.querySelector("#overviewInsight").textContent = insight;
  }

  function cityValue(city) {
    if (state.category === "All") return city.beverage + city.pastry + city.dessert;
    return city[state.category.toLowerCase()];
  }

  function renderCities() {
    const cities = [...data.cities].sort((a, b) => cityValue(b) - cityValue(a)).slice(0, state.cityCount);
    const max = Math.max(...cities.map(cityValue));
    document.querySelector("#cityBars").innerHTML = cities.map((city) => {
      const selectedTotal = cityValue(city);
      const scale = selectedTotal / max * 100;
      const beverageShare = state.category === "All" ? city.beverage / selectedTotal * scale : state.category === "Beverage" ? scale : 0;
      const pastryShare = state.category === "All" ? city.pastry / selectedTotal * scale : state.category === "Pastry" ? scale : 0;
      const dessertShare = state.category === "All" ? city.dessert / selectedTotal * scale : state.category === "Dessert" ? scale : 0;
      return `<div class="city-row"><span class="city-name">${city.name}</span><div class="stacked-track" aria-label="${city.name}: ${formatInt.format(selectedTotal)} outlets"><span class="beverage" style="width:${beverageShare}%"></span><span class="pastry" style="width:${pastryShare}%"></span><span class="dessert" style="width:${dessertShare}%"></span></div><span class="city-total">${formatInt.format(selectedTotal)}</span></div>`;
    }).join("");
    document.querySelector("#cityCountToggle").textContent = state.cityCount === 10 ? "Show top 20" : "Show top 10";
  }

  function renderCategoryView() {
    const categories = selectedCategories();
    document.querySelector("#categoryCards").innerHTML = categories.map((item) => `
      <article class="category-card" data-category="${item.name}">
        <div class="category-name"><strong>${item.name}</strong><small>${(item.outlets / 215960 * 100).toFixed(1)}% of Treats</small></div>
        <div class="metric-cell"><span>Listed outlets</span><strong>${formatInt.format(item.outlets)}</strong></div>
        <div class="metric-cell"><span>QSR share</span><strong>${formatPct(item.qsrShare)}</strong></div>
        <div class="metric-cell"><span>Market scale index</span><strong>${formatIndex(item.index)}</strong></div>
        <div class="metric-cell"><span>Top-5 sample share</span><strong>${formatPct(item.top5Share)}</strong></div>
        <div class="application-cell"><span>ANCHOR APPLICATION PLAY</span><strong>${item.applications.join(" · ")}</strong></div>
      </article>
    `).join("");

    document.querySelector("#topBrandsByCategory").innerHTML = categories.map((category) => {
      const brands = data.brands.filter((brand) => brand.category === category.name).sort((a, b) => b.outlets - a.outlets).slice(0, 5);
      return `<div class="mini-group"><h3>${category.name}</h3><div class="brand-chip-list">${brands.map((brand) => `<span class="brand-chip">${brand.name} · ${formatInt.format(brand.outlets)}</span>`).join("")}</div></div>`;
    }).join("");

    const topCities = [...data.cities].sort((a, b) => cityValue(b) - cityValue(a)).slice(0, 6);
    const max = Math.max(...topCities.map(cityValue));
    document.querySelector("#cityMix").innerHTML = topCities.map((city) => {
      const value = cityValue(city);
      return `<div class="mix-row"><div class="mix-head"><strong>${city.name}</strong><span>${formatInt.format(value)}</span></div><div class="bar-track"><div class="bar-fill" style="width:${value / max * 100}%"></div></div></div>`;
    }).join("");
  }

  function renderSignals(containerId, items, accent) {
    const max = Math.max(...items.map((item) => item.share));
    document.querySelector(containerId).innerHTML = items.map((item, index) => barRow(
      item.name,
      item.share,
      max,
      formatPct(item.share),
      index === accent ? "cyan" : index > 4 ? "gray" : ""
    )).join("");
  }

  function renderFit() {
    renderSignals("#materialSignals", data.signals.material, 2);
    renderSignals("#flavorSignals", data.signals.flavor, 1);
    renderSignals("#processSignals", data.signals.process, 1);
    document.querySelector("#assumptionTable").innerHTML = selectedCategories().map((item) => `
      <tr><td><strong>${item.name}</strong></td><td>${formatInt.format(item.outlets)}</td><td>${formatPct(item.qsrShare)}</td><td>${formatPct(item.top5Share)}</td><td><strong>Market sizing</strong></td><td>${item.otmStatus}</td></tr>
    `).join("");
  }

  function renderTargets() {
    const brands = filteredBrands();
    document.querySelector("#targetTableTitle").textContent = `${brands.length} ${brands.length === 1 ? "brand" : "brands"} ranked`;
    const body = document.querySelector("#targetTableBody");
    if (!brands.length) {
      body.innerHTML = '<tr><td colspan="8"><div class="empty-state"><strong>No brands match these filters.</strong><br>Reset filters or broaden the search.</div></td></tr>';
      return;
    }
    body.innerHTML = brands.map((brand) => `
      <tr tabindex="0" data-brand="${brand.name.replaceAll('"', "&quot;")}">
        <td>${brand.rank}</td>
        <td><strong>${brand.name}</strong></td>
        <td><span class="category-label">${brand.category}</span></td>
        <td class="num">${formatInt.format(brand.outlets)}</td>
        <td class="num"><span class="index-cell"><span class="mini-index"><span style="width:${brand.index}%"></span></span><strong>${formatIndex(brand.index)}</strong></span></td>
        <td><span class="tier tier-${brand.tier.toLowerCase()}">${brand.tier}</span></td>
        <td>${brand.applications[0]}</td>
        <td><span class="data-input">ANCHOR DATA INTEGRATION</span></td>
      </tr>
    `).join("");
    body.querySelectorAll("tr[data-brand]").forEach((row) => {
      row.addEventListener("click", () => openBrand(row.dataset.brand));
      row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openBrand(row.dataset.brand); }
      });
    });
  }

  function openBrand(name) {
    const brand = data.brands.find((item) => item.name === name);
    if (!brand) return;
    const category = categoryMap[brand.category];
    document.querySelector("#brandDialogContent").innerHTML = `
      <div class="dialog-content">
        <div class="eyebrow">TARGET DETAIL · SAMPLE RANK ${brand.rank}</div>
        <h2 class="dialog-title">${brand.name}</h2>
        <div class="dialog-subtitle">${brand.category} · national chain sample · 2026Q2</div>
        <div class="dialog-score"><div><span>Outlet scale index</span><strong>${formatIndex(brand.index)}</strong></div><div><span>Market scale band</span><strong>${brand.tier}</strong></div><div><span>Listed outlets</span><strong>${formatInt.format(brand.outlets)}</strong></div></div>
        <dl class="detail-grid">
          <dt>Market signal</dt><dd>${formatInt.format(brand.outlets)} listed outlets in the GAOYAN brand sample</dd>
          <dt>OTM development</dt><dd>Market sizing complete · integrate Anchor inputs to quantify account opportunity</dd>
          <dt>Model basis</dt><dd>Original OTM formula combining revenue proxy and Anchor addressable spend</dd>
          <dt>Application play</dt><dd>${brand.applications.join(" · ")}</dd>
          <dt>Coverage pathway</dt><dd>Match with Anchor and distributor outlet masters</dd>
          <dt>Account ownership</dt><dd>Assign through the Anchor sales workflow</dd>
          <dt>PHP opportunity</dt><dd>Quantify with Anchor sales and product inputs</dd>
        </dl>
        <div class="next-action"><span>RECOMMENDED NEXT ACTION</span><strong>Validate distributor coverage, match the outlet master, and assign an account owner before converting this rank into a call plan.</strong></div>
      </div>`;
    const dialog = document.querySelector("#brandDialog");
    if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", "");
  }

  function renderCollaborationInputs() {
    document.querySelector("#collaborationTable").innerHTML = data.collaborationInputs.map((item) => `<tr><td><strong>${item.field}</strong></td><td><span class="data-input">${item.status.toUpperCase()}</span></td><td>${item.use}</td></tr>`).join("");
  }

  function renderFilterSummary() {
    const category = state.category === "All" ? "All categories" : state.category;
    const tier = state.tier === "All" ? "All market scale bands" : `Scale band ${state.tier}`;
    const search = state.search ? ` · Search “${state.search}”` : "";
    document.querySelector("#filterSummary").textContent = `${category} · ${tier}${search}`;
  }

  function renderAll() {
    renderFilterSummary();
    renderKpis();
    renderOverview();
    renderCategoryView();
    renderFit();
    renderTargets();
    renderCollaborationInputs();
  }

  function activateView(view) {
    state.view = view;
    document.querySelectorAll("[data-view-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.viewPanel === view));
    document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
    window.scrollTo(0, 0);
  }

  function exportTargets() {
    const rows = filteredBrands();
    const escapeCsv = (value) => `"${String(value).replaceAll('"', '""')}"`;
    const header = ["outlet_rank", "brand", "category", "listed_outlets", "market_scale_index", "scale_band", "recommended_applications", "activation_path"];
    const lines = rows.map((brand) => [brand.rank, brand.name, brand.category, brand.outlets, formatIndex(brand.index), brand.tier, brand.applications.join(" | "), "Anchor data integration"].map(escapeCsv).join(","));
    const blob = new Blob([[header.join(","), ...lines].join("\n")], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Anchor_PH_priority_brand_opportunities.csv";
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }

  document.querySelectorAll(".nav-item").forEach((button) => button.addEventListener("click", () => activateView(button.dataset.view)));
  document.querySelectorAll(".jump-button").forEach((button) => button.addEventListener("click", () => activateView(button.dataset.jump)));
  document.querySelector("#categoryFilter").addEventListener("change", (event) => { state.category = event.target.value; renderAll(); });
  document.querySelector("#tierFilter").addEventListener("change", (event) => { state.tier = event.target.value; renderAll(); });
  document.querySelector("#brandSearch").addEventListener("input", (event) => { state.search = event.target.value.trim(); renderAll(); });
  document.querySelector("#resetFilters").addEventListener("click", () => {
    state.category = "All"; state.tier = "All"; state.search = "";
    document.querySelector("#categoryFilter").value = "All";
    document.querySelector("#tierFilter").value = "All";
    document.querySelector("#brandSearch").value = "";
    renderAll();
  });
  document.querySelector("#cityCountToggle").addEventListener("click", () => { state.cityCount = state.cityCount === 10 ? 20 : 10; renderCities(); });
  document.querySelector("#exportTargets").addEventListener("click", exportTargets);

  renderAll();
})();
