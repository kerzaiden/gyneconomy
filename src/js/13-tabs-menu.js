  // ---- RENDER: About Gyneconomy — the season model and the framework ----
  function renderSeasonRows(){
    var meta = wheelMeta[currentSeason];

    var seasonRules = [
      {key:"winter",          growth:"Contraction", temp:"Cold",    zones:{below:1},  range:"Below the range — cold"},
      {key:"springdeflation", growth:"Expansion",   temp:"Cooling", zones:{within:1, below:1}, range:"Cooling — within or below the range"},
      {key:"spring",          growth:"Expansion",   temp:"Heating", zones:{within:1, below:1}, range:"Heating — within or below the range"},
      {key:"summer",          growth:"Expansion",   temp:"Hot",     zones:{above:1},  range:"Above the range — hot"},
      {key:"autumn",          growth:"Contraction", temp:"Cooling", zones:{within:1, above:1}, range:"Cooling — within or above the range"},
      {key:"lateautumn",      growth:"Contraction", temp:"Heating", zones:{within:1, above:1}, range:"Heating — within or above the range"}
    ];
    function rangePos(v){
      if (v < 1) return 0.28 * Math.max(0, Math.min(1, (v + 1) / 2));
      if (v <= 3) return 0.28 + 0.40 * (v - 1) / 2;
      return 0.68 + 0.32 * Math.min(1, (v - 3) / 4);
    }
    var SNOWFLAKE = '<svg class="cold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1"/><path d="M12 2l-2.5 2.5M12 2l2.5 2.5M12 22l-2.5-2.5M12 22l2.5-2.5M2 12l2.5-2.5M2 12l2.5 2.5M22 12l-2.5-2.5M22 12l-2.5 2.5"/></svg>';
    var FLAME = '<svg class="hot" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22c4.4 0 7-2.9 7-6.6 0-3.2-2-5.3-3.6-7.2-.6 1.4-1.4 2.2-2.4 2.6.3-3-1-6.3-4-8.8-.2 3-1.6 4.6-3 6.3C4.6 10.1 5 12 5 15.4 5 19.1 7.6 22 12 22z"/><path d="M12 22c-1.9 0-3-1.4-3-3 0-1.5.9-2.4 1.8-3.4.6 1 1.4 1.5 2.2 1.7.4-1 .3-2.1.1-3.1 1.5 1.3 1.9 2.7 1.9 4.2 0 1.8-1.1 3.6-3 3.6z"/></svg>';
    function rangeBarHtml(zones, dotValue){
      return '<span class="range-bar">' +
        ["below","within","above"].map(function(z){
          var w = zones[z] || 0;
          return '<b class="' + z + (w ? ' on' : '') + '"></b>';
        }).join("") +
        (dotValue != null ? '<i style="left:' + (rangePos(dotValue) * 100).toFixed(1) + '%" title="CPI ' + dotValue.toFixed(1) + '% today"></i>' : '') +
      '</span>';
    }
    put("seasons-rows", '<div class="lag-row lag-row-head"><span>Season</span><span class="cell">Growth</span><span class="cell">Temperature</span><span class="meta"></span><span>Target range</span></div>' +
      seasonRules.map(function(r){
        var m = wheelMeta[r.key], now = r.key === currentSeason;
        return '<div class="lag-row ' + seasonGroup(r.key) + (now ? ' now' : '') + '"><span>' + m.name + (m.theme ? ' — ' + m.theme : '') + (now ? ' <em>now</em>' : '') + '</span><span class="cell">' + r.growth + '</span><span class="cell">' + r.temp + '</span><span class="meta">' + r.growth + ' · ' + r.temp + '</span>' +
          '<span class="range-cell" title="' + r.range + (now ? ' · CPI ' + cpiNow.toFixed(1) + '% today' : '') + '">' + SNOWFLAKE + rangeBarHtml(r.zones, now ? cpiNow : null) + FLAME + '</span></div>';
      }).join(""));
    put("seasons-kicker", "The Season Model" + expandBtn(
      '<h4>The Season Model</h4><p class="caption">' + seasonWhy + '</p><p class="caption" style="margin-top:10px;">Growth is the direction of real GDP — expansion when it is rising, contraction when it is falling, and a flat quarter continues whichever of the two came before it. Each quarter is measured against the same quarter a year earlier, and the direction is the trend through the last six of those readings. Temperature is where inflation sits against a 1–3% band — hot above it, cold below it, warm within it — and, where it matters, which way it is moving. The band is fixed and editorial: the Fed\u2019s stated objective is a point, 2% on the PCE price index, so the 1–3% band is this board\u2019s symmetric tolerance around that point, read on CPI (the convention some other central banks, such as the Bank of England and the Reserve Bank of Australia, make explicit). Nothing here is drawn live from the Fed. Growth direction is a fitted trend through the last eight quarters of year-over-year real GDP growth; the price direction is a fitted trend through the last twelve monthly CPI readings. Expansion is growth rising; contraction is growth falling. Flat growth continues whichever of the two the economy was already in, rather than counting as a fresh expansion — so a flat quarter after several quarters of falling growth still reads as contraction. In expansion, hot is Summer; otherwise direction alone decides, regardless of whether prices sit within the range or already below it: heating is Spring — reflation, cooling is Spring — deflation (Sep 18, 2026: this replaces the Goldilocks Zone, which no longer distinguishes direction in that space). In contraction, cold is Winter; otherwise direction alone decides, regardless of whether prices sit within the range or already above it: cooling is Autumn — disinflation, heating or steady is Autumn — stagflation (Sep 19, 2026: made symmetric with expansion, even though a contraction with prices still heating inside the range is historically rare). The target range is 1–3%, a point either side of the Fed’s 2% objective.</p>'));

    put("framework-rows", '<div class="lag-row lag-row-head"><span>Sign</span><span>In the body</span><span>In the economy</span><span>Timing</span></div>' +
      frameworkRows.map(function(r){ return '<div class="lag-row"><span>' + r.indicator + '</span><span>' + r.body + '</span><span>' + r.economy + '</span><span>' + r.category + '</span></div>'; }).join(""));
    put("framework-kicker", "The framework" + expandBtn(
      '<h4>The Seasonal Behaviour framework</h4>' +
      '<p class="caption">The manuscript’s own indicator table: seven signs the body gives across a cycle, each paired with the economic reading that behaves the same way, and each sorted by timing. Leading signs move before the turn — rising estrogen and the change in cervical fluid come days before ovulation, just as credit growth and the yield curve move before the economy does (the yield curve and consumer expectations are both formal components of the Conference Board’s Leading Economic Index). Coincident signs report the present: desire peaks in the fertile window itself, as risk appetite shows in current positioning. Lagging signs confirm afterwards: basal temperature rises only after ovulation, as inflation and unemployment register a turn only once it is underway.</p>' +
      srcBlock([
        {t:"Conference Board — Leading Economic Index components", u:"https://www.conference-board.org/topics/us-leading-indicators"},
        {t:"Schularick & Taylor — Credit Booms Gone Bust (NBER w15512)", u:"https://www.nber.org/papers/w15512"},
        {t:"StatPearls — Fertility Awareness-Based Methods (NCBI)", u:"https://www.ncbi.nlm.nih.gov/books/NBK546666/"}
      ])));
  }
  GYN.step("renderSeasonRows", renderSeasonRows, "render"); renderSeasonRows();

  // ---- TAB NAVIGATION (Cycle / Analysis / Search / Portfolio) ----
  function renderTopbar(){
    var btns = Array.prototype.slice.call(document.querySelectorAll(".tab-btn"));
    var panels = Array.prototype.slice.call(document.querySelectorAll(".tab-panel"));
    var tabTitles = { cycle:"Current Cycle", analysis:"Analysis", search:"Search", portfolio:"Portfolio" };
    var topTitle = byId("topbar-title");
    btns.forEach(function(btn){
      btn.addEventListener("click", function(){
        if (btn.classList.contains("active")){
          if (btn.getAttribute("data-tab") === "analysis"){ if (metricPageReset) metricPageReset(); if (calendarReset) calendarReset(); }
          if (btn.getAttribute("data-tab") === "cycle" && metricPageReset) metricPageReset();
          return;
        }
        btns.forEach(function(b){ b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
        panels.forEach(function(p){ p.hidden = true; });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
        var tab = btn.getAttribute("data-tab"), target = document.querySelector('.tab-panel[data-tab="' + tab + '"]');
        if (target) target.hidden = false;
        if (metricPageReset) metricPageReset();
        topTitle.textContent = tabTitles[tab] || "Gyneconomy";
        topbarBack = null;
        byId("topbar-back").hidden = true;
        if (tab === "cycle"){ target.insertBefore(cycleViewEl, byId("today-analysis")); placeCharts(); showCycle(currentEra); }
        if (tab === "analysis" && calendarReset) calendarReset();
        if (tab === "analysis") settleStrips();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }
  GYN.step("renderTopbar", renderTopbar, "wire"); renderTopbar();

  // ---- MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape ----
  function wireContactForm(){
    var menu = byId("more-menu"), open = byId("menu-btn"), back = byId("menu-back");
    var prevOverflow = "";
    function slideIn(el){ el.hidden = false; void el.offsetWidth; el.classList.add("in"); }
    function slideOut(el, done){
      el.classList.remove("in");
      var fired = false;
      function finish(e){
        if (e && e.propertyName && e.propertyName !== "transform") return;
        if (fired) return; fired = true;
        el.removeEventListener("transitionend", finish); el.hidden = true; if (done) done();
      }
      el.addEventListener("transitionend", finish);
      setTimeout(finish, 420);
    }
    function show(){ slideIn(menu); open.setAttribute("aria-expanded", "true"); prevOverflow = document.body.style.overflow; document.body.style.overflow = "hidden"; back.focus(); }
    function hide(){
      if (menu.hidden) return;
      open.setAttribute("aria-expanded", "false");
      open.focus();
      slideOut(menu, function(){ document.body.style.overflow = prevOverflow; });
    }
    open.addEventListener("click", show);
    back.addEventListener("click", hide);
    function fromHash(){ if (location.hash === "#menu"){ show(); if (history.replaceState) history.replaceState(null, "", location.pathname + location.search); } }
    fromHash(); window.addEventListener("hashchange", fromHash);

    // ---- the Sources screen, built on first open from window.__sources (the same grouping as sources.html) ----
    var built = false;
    var groups = [
      ["Season, growth & the cycle", /CPIAUCSL|DFEDTARU|worldbank|spglobal|slickcharts|stern\.nyu|GDPC1|oecd\.org|eurostat|ftportfolios|fisherinvestments|yardeni/],
      ["Yield curve & recession record", /treasury\.gov\/resource|T10Y2Y|T10Y3M|series\/GS\d|TB3MS|nber\.org\/research|newyorkfed|bostonfed/],
      ["Labor, inflation & the Fed", /empsit|dol\.gov|cpi\.PDF|monetary2026|UNRATE|census\.gov|fomccalendars|opub\/mlr/],
      ["Real-time signs — credit, industry, money", /prnewswire|ismworld|tradingeconomics|BAMLH0A0HYM2|ice\.com|series\/M2V|series\/M2SL/],
      ["Sentiment", /VIXCLS|VXVCLS|cboe\.com|series\/SP500|series\/DJIA|DGS10/],
      ["Valuations", /NCBEILQ027S|series\/GDP$|shillerdata|multpl|fortune\.com|berkshirehathaway/],
      ["Financial resilience", /cbo\.gov|GFDEGDQ188S|GFDGDPA188S|FYPUGDA188S|FYOIGDA188S|FYFSGDA188S|whitehouse\.gov|fiscaldata|prod2_|PRS85006092|OPHNFB/]
    ];
    function buildSources(){
      var src = window.__sources, seen = {}, items = [];
      function add(x){ if (!x || seen[x.u]) return; seen[x.u] = true; items.push(x); }
      src.all.forEach(add); src.cards.forEach(function(c){ c.src.forEach(add); }); src.annual.forEach(add); src.gdp.forEach(add);
      var buckets = groups.map(function(){ return []; }), rest = [];
      items.forEach(function(x){ for (var i = 0; i < groups.length; i++){ if (groups[i][1].test(x.u)){ buckets[i].push(x); return; } } rest.push(x); });
      if (rest.length){ groups.push(["Other", null]); buckets.push(rest); }
      put("sources-groups", groups.map(function(g, i){
        if (!buckets[i].length) return "";
        return '<h3 class="menu-section">' + g[0] + '</h3><div class="menu-card">' + buckets[i].map(function(x){
          return '<a class="menu-row" href="' + x.u + '" target="_blank" rel="noopener"><span class="menu-label">' + x.t.replace(/&/g, "&amp;").replace(/</g, "&lt;") + '</span>' +
            '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg></a>';
        }).join("") + '</div>';
      }).join(""));
      built = true;
    }
    var openSheet = null, openRow = null;
    function showSheet(name, row){
      var el = byId("sheet-" + name); if (!el) return;
      if (name === "sources" && !built) buildSources();
      el.scrollTop = 0; slideIn(el); openSheet = el; openRow = row;
      var b = el.querySelector("[data-sheet-back]"); if (b) b.focus();
    }
    function hideSheet(){
      if (!openSheet) return;
      var el = openSheet, row = openRow; openSheet = null; openRow = null;
      if (row) row.focus();
      slideOut(el);
    }
    menu.addEventListener("click", function(e){ var row = e.target.closest && e.target.closest(".menu-row[data-sheet]"); if (row) showSheet(row.getAttribute("data-sheet"), row); });
    document.addEventListener("click", function(e){ if (e.target.closest && e.target.closest("[data-sheet-back]")) hideSheet(); });
    document.addEventListener("keydown", function(e){ if (e.key !== "Escape") return; if (openSheet) hideSheet(); else hide(); });

    // ---- Contact: hand the note to the visitor's mail app. The address is assembled here, at send time, from its ----
    (function(){
      var form = byId("contact-form"), hint = byId("contact-hint");
      var parts = ["kerzaiden", "gmail", "com"];
      form.addEventListener("submit", function(e){
        e.preventDefault();
        var title = byId("contact-title").value.trim(), msg = byId("contact-message").value.trim();
        if (!msg){ hint.textContent = "Write a message first."; hint.classList.add("err"); byId("contact-message").focus(); return; }
        hint.classList.remove("err"); hint.textContent = "Opening your mail app\u2026";
        var to = parts[0] + "@" + parts[1] + "." + parts[2];
        var subject = "Gyneconomy" + (title ? " \u2014 " + title : "");
        window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(msg);
        setTimeout(function(){ hint.textContent = "If nothing opened, this device has no mail app set up."; }, 2500);
      });
    })();
  }
  GYN.step("wireContactForm", wireContactForm, "wire"); wireContactForm();
})();