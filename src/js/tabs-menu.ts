import { facts, ledeHtml, srcBlock, titleCase } from "./format.ts";
import { byId, expandBtn, layer, need, put, rovingKeys, ui, viewMore } from "./dom.ts";
import { GYN } from "./live.ts";
import { wheelMeta } from "./refresh-season.ts";
import { CLOCK_SRC, frameworkRows, HOLD_BAND, marketCycles } from "./data.ts";
import { cpiNow, currentEra, currentSeason, inflationFigure, PEAK_TREND, PEAK_YEARS, recessionRecord, seasonGroup, seasonWhy } from "./model.ts";
import { cycleView, one, settleAll, showCycle } from "./dial-cycle.ts";
import { sourceIndex } from "./pages-nav.ts";

type SourceGroup = [string, RegExp | null];

// ---- RENDER: About Gyneconomy — the season model and the framework ----
function seasonGrid(){
  var cell = function(group: string, span: number, name: string, kinds: string[]){
    return '<div class="sg-cell ' + group + (span > 1 ? ' wide' : '') + '"><b>' + name + '</b>' + kinds.map(function(k){ return '<small>' + k + '</small>'; }).join("") + '</div>';
  };
  var head = function(name: string, sub: string){ return '<div class="sg-head"><b>' + name + '</b><small>' + sub + '</small></div>'; };
  return '<div class="season-grid">' + '<span></span>' + head("Cold", "below 1%") + head("In range", "1\u20133%") + head("Hot", "above 3%") +
    head("Expansion", "at or above potential") + cell("spring", 2, "Spring", ["Reflation \u00b7 heating", "Deflation \u00b7 cooling"]) + cell("summer", 1, "Summer", ["Inflation"]) +
    head("Contraction", "below potential") + cell("winter", 1, "Winter", ["Deflation"]) + cell("autumn", 2, "Autumn", ["Stagflation \u00b7 heating", "Disinflation \u00b7 cooling"]) +
  '</div>';
}
function recessionLine(){
  var r = recessionRecord();
  return "<b>Against the record</b>: since " + r.from + ", " + (r.autumn + r.winter) + " of the " + r.total + " quarters of the " + r.recessions + " NBER recessions fell in Autumn or Winter (" + r.autumn + " Autumn, " + r.winter + " Winter), seasons that hold " + r.share + "% of all quarters.";
}
function seasonModelNote(){
  return '<h4>The Season Model</h4>' + ledeHtml("Two growth regimes, three price levels and three price directions: 18 combinations, six seasons.") + seasonGrid() + facts([
    "<b>Growth gap</b>: real GDP growth over a year against potential growth, the Investment Clock\u2019s question (Merrill Lynch, 2004): is growth above or below its trend? Potential is the Congressional Budget Office\u2019s estimate since 1950 and the " + PEAK_YEARS[0] + "\u2013" + PEAK_YEARS[1] + " peak-to-peak trend (" + PEAK_TREND.toFixed(1) + "% a year) before it. Before 1948 GDP is annual, so seasons are read a year at a time.",
    "<b>Sensitivity</b>: a difference within \u00b1" + HOLD_BAND + " points keeps the prior regime, the average revision to a year\u2019s growth (BEA, 2018).",
    "<b>Price level</b>: inflation on CPI before 2000 and PCE since, against the model\u2019s 1\u20133% band, a point either side of the Fed\u2019s 2% target.",
    "<b>Direction</b>: the twelve-month trend of inflation. It decides only the transition seasons, Spring and Autumn. A trend that moves less than about a quarter point over the year is steady and keeps the prior direction.",
    recessionLine(),
    seasonWhy
  ]) + srcBlock([CLOCK_SRC[0]]);
}
function rangePos(v: number){
  if (v < 1) return 0.28 * Math.max(0, Math.min(1, (v + 1) / 2));
  if (v <= 3) return 0.28 + 0.40 * (v - 1) / 2;
  return 0.68 + 0.32 * Math.min(1, (v - 3) / 4);
}
function cycleModelLine(){
  var closed = marketCycles.filter(function(c){ return !c.ongoing; }), years = closed.reduce(function(a, c){ return a + c.to - c.from + 1; }, 0);
  return "A cycle begins with its first bull year and ends with the bear year that closes it. Since " + marketCycles[0].from + " the market has completed " + closed.length + " cycles, " + (years / closed.length).toFixed(1) + " years long on average, and the app measures today against every one of them.";
}
function wireIdea(){
  viewMore(need("idea-more"), [].slice.call(need("idea-prose").querySelectorAll("p[hidden]")));
}
function renderSeasonRows(){

  var seasonRules = [
    {key:"springdeflation", growth:"Expansion",  temp:"Cooling", zones:{within:1, below:1}, range:"Cooling — within or below the range"},
    {key:"spring",          growth:"Expansion",  temp:"Heating", zones:{within:1, below:1}, range:"Heating — within or below the range"},
    {key:"summer",          growth:"Expansion",  temp:"Hot",     zones:{above:1},  range:"Above the range — hot"},
    {key:"autumn",          growth:"Contraction", temp:"Cooling", zones:{within:1, above:1}, range:"Cooling — within or above the range"},
    {key:"lateautumn",      growth:"Contraction", temp:"Heating", zones:{within:1, above:1}, range:"Heating — within or above the range"},
    {key:"winter",          growth:"Contraction", temp:"Cold",    zones:{below:1},  range:"Below the range — cold"}
  ];
  var SNOWFLAKE = '<svg class="cold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1"/><path d="M12 2l-2.5 2.5M12 2l2.5 2.5M12 22l-2.5-2.5M12 22l2.5-2.5M2 12l2.5-2.5M2 12l2.5 2.5M22 12l-2.5-2.5M22 12l-2.5 2.5"/></svg>';
  var FLAME = '<svg class="hot" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22c4.4 0 7-2.9 7-6.6 0-3.2-2-5.3-3.6-7.2-.6 1.4-1.4 2.2-2.4 2.6.3-3-1-6.3-4-8.8-.2 3-1.6 4.6-3 6.3C4.6 10.1 5 12 5 15.4 5 19.1 7.6 22 12 22z"/><path d="M12 22c-1.9 0-3-1.4-3-3 0-1.5.9-2.4 1.8-3.4.6 1 1.4 1.5 2.2 1.7.4-1 .3-2.1.1-3.1 1.5 1.3 1.9 2.7 1.9 4.2 0 1.8-1.1 3.6-3 3.6z"/></svg>';
  function rangeBarHtml(zones: { below?: number; within?: number; above?: number }, dotValue: number | null){
    return '<span class="range-bar">' +
      ["below","within","above"].map(function(z){
        var w = zones[z as keyof typeof zones] || 0;
        return '<b class="' + z + (w ? ' on' : '') + '"></b>';
      }).join("") +
      (dotValue != null ? '<i style="left:' + (rangePos(dotValue) * 100).toFixed(1) + '%" title="PCE ' + dotValue.toFixed(1) + '% today"></i>' : '') +
    '</span>';
  }
  put("seasons-rows", seasonRules.map(function(r){
      var m = wheelMeta[r.key as Season], now = r.key === currentSeason;
      return '<div class="lag-row ' + seasonGroup(r.key) + (now ? ' now' : '') + '"><span>' + m.name + (m.theme ? ' — ' + m.theme : '') + (now ? ' <em>now</em>' : '') + '</span><span class="cell">' + r.growth + '</span><span class="cell">' + r.temp + '</span><span class="meta">' + r.growth + ' · ' + r.temp + '</span>' +
        '<span class="range-cell" title="' + r.range + (now ? ' · PCE ' + inflationFigure(cpiNow) + '% today' : '') + '">' + SNOWFLAKE + rangeBarHtml(r.zones, now ? cpiNow : null) + FLAME + '</span></div>';
    }).join(""));
  put("cycle-model-line", cycleModelLine());
  put("seasons-kicker", "The Season Model" + expandBtn(
    seasonModelNote()));

  put("framework-rows", '<div class="lag-row lag-row-head"><span>Sign</span><span>In the body</span><span>In the economy</span><span>Timing</span></div>' +
    frameworkRows.map(function(r){ return '<div class="lag-row"><span>' + r.indicator + '</span><span>' + r.body + '</span><span>' + r.economy + '</span><span>' + r.category + '</span></div>'; }).join(""));
  put("framework-kicker", "The framework" + expandBtn(
    '<h4>The Seasonal Behaviour Framework</h4>' +
    ledeHtml("Every reading in this app is one of the book\u2019s seven signs, each paired with its bodily counterpart and sorted by when it speaks.") + facts([
      "<b>Leading</b> signs turn first: rising estrogen and the change in cervical fluid come days before ovulation, as credit growth and the yield curve move before the economy. The yield curve and consumer expectations are both components of the Conference Board\u2019s Leading Economic Index.",
      "<b>Coincident</b> signs report the present: desire peaks in the fertile window itself, as appetite shows in what households are buying now.",
      "<b>Lagging</b> signs confirm afterwards: basal temperature rises only after ovulation, as inflation and unemployment register a turn only once it is underway."
    ]) +
    srcBlock([
      {t:"Conference Board — Leading Economic Index components", u:"https://www.conference-board.org/topics/us-leading-indicators"},
      {t:"Schularick & Taylor — Credit Booms Gone Bust (NBER w15512)", u:"https://www.nber.org/papers/w15512"},
      {t:"StatPearls — Fertility Awareness-Based Methods (NCBI)", u:"https://www.ncbi.nlm.nih.gov/books/NBK546666/"}
    ])));
}
// ---- TAB NAVIGATION (Cycle / Analysis / Herstory / Portfolio) ----
function renderTopbar(){
  var btns = Array.prototype.slice.call(document.querySelectorAll(".tab-btn"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".tab-panel"));
  var tabTitles = { cycle:"Current Cycle", analysis:"Herstory", chart:"Analysis", portfolio:"Portfolio" };
  var topTitle = need("topbar-title");
  btns.forEach(function(btn){
    btn.addEventListener("click", function(){
      if (btn.classList.contains("active")){
        if (btn.getAttribute("data-tab") === "analysis"){ GYN.fire("metricPageReset"); GYN.fire("calendarReset"); }
        if (btn.getAttribute("data-tab") !== "analysis") GYN.fire("metricPageReset");
        return;
      }
      btns.forEach(function(b){ b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
      panels.forEach(function(p: HTMLElement){ p.hidden = true; });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      var tab = btn.getAttribute("data-tab"), target = document.querySelector<HTMLElement>('.tab-panel[data-tab="' + tab + '"]');
      if (target) target.hidden = false;
      GYN.fire("metricPageReset");
      GYN.fire("calendarReset");
      topTitle.textContent = tabTitles[tab as keyof typeof tabTitles] || "Gyneconomy";
      ui.topbarBack = null;
      need("topbar-back").hidden = true;
      if (tab === "cycle" && target){ target.insertBefore(cycleView(), byId("today-analysis")); showCycle(currentEra); }
      settleAll();
      window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  });
}
function wireTabKeys(){ rovingKeys(one(".tabbar"), ".tab-btn", "aria-selected"); }
// ---- MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape ----
function wireMenu(){
  var menu = need("more-menu"), open = need("menu-btn"), back = need("menu-back");
  var prevOverflow = "", locked = false;
  function slideIn(el: HTMLElement){ if (el.__cancelOut) el.__cancelOut(); el.hidden = false; void el.offsetWidth; el.classList.add("in"); }
  function slideOut(el: HTMLElement, done?: () => void){
    el.classList.remove("in");
    var fired = false;
    function finish(e?: TransitionEvent){
      if (e && e.propertyName && e.propertyName !== "transform") return;
      if (fired) return; fired = true;
      el.removeEventListener("transitionend", finish); el.hidden = true; if (done) done();
    }
    el.addEventListener("transitionend", finish);
    var t = setTimeout(finish, 420);
    el.__cancelOut = function(){ fired = true; clearTimeout(t); el.removeEventListener("transitionend", finish); el.__cancelOut = null; };
  }
  function show(){ slideIn(menu); open.setAttribute("aria-expanded", "true"); if (!locked){ prevOverflow = document.body.style.overflow; locked = true; } document.body.style.overflow = "hidden"; back.focus(); }
  function hide(){
    if (menu.hidden) return;
    open.setAttribute("aria-expanded", "false");
    open.focus();
    slideOut(menu, function(){ document.body.style.overflow = prevOverflow; locked = false; });
  }
  open.addEventListener("click", show);
  back.addEventListener("click", hide);
  function fromHash(){ if (location.hash === "#menu"){ show(); if (history.replaceState) history.replaceState(null, "", location.pathname + location.search); } }
  fromHash(); window.addEventListener("hashchange", fromHash);

  // ---- the Sources screen, built on first open from sourceIndex (the same grouping as sources.html) ----
  var built = false;
  var groups: SourceGroup[] = [
    ["Season, growth & the cycle", /CPIAUC(?:SL|NS)|PCEPI|DFEDTARU|worldbank|spglobal|slickcharts|stern\.nyu|GDPC1|GDPPOT|0118-revisions-to-gdp|A191RL1A225NBEA|measuringworth|eurostat|ftportfolios|fisherinvestments|yardeni/],
    ["Yield curve & recession record", /treasury\.gov\/resource|T10Y2Y|T10Y3M|series\/GS\d|TB3MS|nber\.org\/research|ycfaq|bostonfed/],
    ["Labor, inflation & the Fed", /empsit|dol\.gov|cpi\.PDF|monetary2026|UNRATE|PAYEMS|RSAFS|bls\.gov\/ces|census\.gov|fomccalendars|opub\/mlr|series\/FEDFUNDS$|johntayl/],
    ["Real-time signs — credit, industry, money", /prnewswire|ismworld|tradingeconomics|ice\.com|series\/M2V|series\/M2SL/],
    ["Sentiment", /oecd\.org|DDURRA3M086SBEA|bea\.gov\/data\/income|VIXCLS|VXOCLS|chase\.com|td\.com\/ca|VXVCLS|cboe\.com|series\/SP500|series\/DJIA|DGS10/],
    ["Valuations", /NCBEILQ027S|series\/GDP$|shillerdata|multpl|sec\.gov|ssga\.com|fortune\.com|berkshirehathaway/],
    ["Credit & delinquencies", /finra\.org|releases\/chargeoff|DRALACBS/], ["Financial resilience", /cbo\.gov|GFDEGDQ188S|GFDGDPA188S|FYPUGDA188S|A091RC1Q027SBEA|GFDEBTN|FYFSGDA188S|whitehouse\.gov|fiscaldata|prod2_|PRS85006092|OPHNFB|bls\.gov\/productivity/]
  ];
  function buildSources(){
    var src = sourceIndex, seen: Record<string, boolean> = {}, items: Src[] = [];
    function add(x: Src){ if (!x || seen[x.u]) return; seen[x.u] = true; items.push(x); }
    src.all.forEach(add); src.cards.forEach(function(c){ c.src.forEach(add); }); src.annual.forEach(add); src.gdp.forEach(add);
    var buckets = groups.map(function(): Src[] { return []; }), rest: Src[] = [];
    items.forEach(function(x){ for (var i = 0; i < groups.length; i++){ var re = groups[i][1]; if (re && String(x.u).search(re) >= 0){ buckets[i].push(x); return; } } rest.push(x); });
    if (rest.length){ groups.push(["Other", null]); buckets.push(rest); }
    put("sources-groups", groups.map(function(g, i){
      if (!buckets[i].length) return "";
      return '<h3 class="menu-section">' + titleCase(g[0]) + '</h3><div class="menu-card">' + buckets[i].map(function(x){
        return '<a class="menu-row" href="' + x.u + '" target="_blank" rel="noopener"><span class="menu-label">' + x.t.replace(/&/g, "&amp;").replace(/</g, "&lt;") + '</span>' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg></a>';
      }).join("") + '</div>';
    }).join(""));
    built = true;
  }
  var openSheet: HTMLElement | null = null, openRow: HTMLElement | null = null;
  function showSheet(name: string, row: HTMLElement){
    var el = byId("sheet-" + name); if (!el) return;
    if (name === "sources" && !built) buildSources();
    el.scrollTop = 0; slideIn(el); openSheet = el; openRow = row;
    var b = el.querySelector<HTMLElement>("[data-sheet-back]"); if (b) b.focus();
  }
  function hideSheet(){
    if (!openSheet) return;
    var el = openSheet, row = openRow; openSheet = null; openRow = null;
    if (row) row.focus();
    slideOut(el);
  }
  menu.addEventListener("click", function(e){ var row = (e.target as Element).closest && (e.target as Element).closest<HTMLElement>(".menu-row[data-sheet]"), name = row && row.getAttribute("data-sheet"); if (row && name != null) showSheet(name, row); });
  document.addEventListener("click", function(e){ if ((e.target as Element).closest && (e.target as Element).closest("[data-sheet-back]")) hideSheet(); });
  layer(2, { open:function(){ return !!openSheet; }, close:hideSheet, box:function(){ return openSheet; } });
  layer(3, { open:function(){ return !menu.hidden && menu.classList.contains("in"); }, close:hide, box:function(){ return menu; } });

  // ---- Contact: hand the note to the visitor's mail app. The address is assembled here, at send time, from its ----
  (function(){
    var form = need("contact-form"), hint = need("contact-hint");
    var parts = ["kerzaiden", "gmail", "com"];
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var title = (byId("contact-title") as HTMLInputElement).value.trim(), msg = (byId("contact-message") as HTMLTextAreaElement).value.trim();
      if (!msg){ hint.textContent = "Write a message first."; hint.classList.add("err"); need("contact-message").focus(); return; }
      hint.classList.remove("err"); hint.textContent = "Opening your mail app\u2026";
      var to = parts[0] + "@" + parts[1] + "." + parts[2];
      var subject = "Gyneconomy" + (title ? " \u2014 " + title : "");
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(msg);
      setTimeout(function(){ hint.textContent = "If nothing opened, this device has no mail app set up."; }, 2500);
    });
  })();
}

export function bootTabsMenu(){
  GYN.step("renderSeasonRows", renderSeasonRows, "render");
  renderSeasonRows();
  GYN.step("wireIdea", wireIdea, "wire");
  wireIdea();
  GYN.step("renderTopbar", renderTopbar, "wire");
  renderTopbar();
  GYN.step("wireTabKeys", wireTabKeys, "wire");
  wireTabKeys();
  GYN.step("wireMenu", wireMenu, "wire");
  wireMenu();
}
