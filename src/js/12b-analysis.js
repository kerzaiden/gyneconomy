
  // ---- RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it ----
  var CYCLE_DATA_KEY = "gyn.cycleData", YEAR_W = 36, ALIKE = 5;
  function cycleDataOn(){ try { return localStorage.getItem(CYCLE_DATA_KEY) === "1"; } catch (e) { return false; } }
  function cycleRowsHtml(on){
    var strips = {};
    marketCycles.forEach(function(c){ strips[c.from] = seasonStripHtml(c); });
    return marketCycles.slice().reverse().map(function(cyc){
      var total = eraMarketTotal(cyc), strip = strips[cyc.from];
      var head = '<span class="era-name">' + cyc.name + '</span>' +
        '<span class="era-years">' + cycLabel(cyc).years + ' <b>(' + strip.years + 'Y)</b></span>' + CHEV;
      var bands = strip.strip + marketStripHtml(cyc, strip.span, strip.done);
      var foot = '<div class="era-foot"><span class="era-econ">' +
        '<span class="chip"><i>Growth</i>' + fmtSigned(eraGrowth(cyc).total, 0) + '%</span>' +
        '<span class="chip"><i>Prices</i>' + fmtSigned(eraInflation(cyc).total, 0) + '%</span>' +
        (total != null ? '<span class="chip"><i>S&amp;P 500</i>' + fmtSigned(total, 0) + '%' + (cyc.ongoing ? '<span class="unit"> so far</span>' : '') + '</span>' : '') +
        '</span></div>';
      return on
        ? '<div class="era-row data" data-era="' + cyc.from + '"><button type="button" class="era-head era-open" data-era="' +
            cyc.from + '">' + head + '</button>' + cycleTrack(cyc, strip, bands) + foot + '</div>'
        : '<div class="era-row" role="button" tabindex="0" data-era="' + cyc.from + '"><div class="era-head">' + head + '</div>' +
            '<div class="era-bands">' + bands + '</div>' + foot + '</div>';
    }).join('');
  }
  function wireCycleData(list){
    var btn = byId("cycle-data"), legend = byId("cycle-legend");
    function apply(on){
      if (btn) btn.setAttribute("aria-checked", on ? "true" : "false");
      list.innerHTML = cycleRowsHtml(on);
      if (legend){ legend.hidden = !on; legend.innerHTML = on ? symptomLegend() : ""; }
      settleStrips();
    }
    if (btn) btn.addEventListener("click", function(){
      var on = btn.getAttribute("aria-checked") !== "true";
      try { localStorage.setItem(CYCLE_DATA_KEY, on ? "1" : "0"); } catch (e) {}
      apply(on);
    });
    apply(!!btn && cycleDataOn());
  }
  function renderCycleList(){
    var list = byId("cycle-list");
    wireCycleData(list);
    var PREVIEW_CYCLES = 99;
    (function(){
      var rows = [].slice.call(list.querySelectorAll(".era-row"));
      var btn = byId("cycle-more"), label = byId("cycle-more-label");
      if (!btn || rows.length <= PREVIEW_CYCLES){ if (btn) btn.hidden = true; return; }
      var extra = rows.slice(PREVIEW_CYCLES), open = false;
      function apply(){
        extra.forEach(function(r){ r.hidden = !open; });
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        label.textContent = open ? "View less" : "View more";
      }
      apply();
      btn.addEventListener("click", function(){ open = !open; apply(); });
    })();

    var listWrap = byId("calendar-list"), detail = byId("calendar-cycle");
    function open(from){
      var era = marketCycles.filter(function(c){ return c.from === from; })[0];
      if (!era) return;
      if (era.ongoing){
        var tab = document.querySelector('.tab-btn[data-tab="cycle"]');
        if (tab){ tab.click(); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
      }
      enterEra(era, detail);
      listWrap.hidden = true; detail.hidden = false;
      setTopbar(era.name, back);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function back(){
      leaveEra(); detail.hidden = true; listWrap.hidden = false;
      setTopbar("Analysis", null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    list.addEventListener("click", function(e){ var row = e.target.closest && e.target.closest(".era-row:not(.data), .era-open"); if (row) open(parseInt(row.getAttribute("data-era"), 10)); });
    list.addEventListener("keydown", function(e){ if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("era-row")){ e.preventDefault(); open(parseInt(e.target.getAttribute("data-era"), 10)); } });
    calendarReset = function(){ leaveEra(); detail.hidden = true; listWrap.hidden = false; topbarBack = null; byId("topbar-back").hidden = true; };
    addSources(sp500AnnualReturnSource); addSources(typicalCycleSrc);
  }
  GYN.step("renderCycleList", renderCycleList, "wire"); renderCycleList();

  renderCycleView(nowModel);

  // ---- A closed cycle, shown on the Cycle tab's own page ----
  var eraOpen = null, taHome = null, modeHome = null;
  function kT(k){
    var s = String(k), m = /-(\d\d)/.exec(s), q = /Q([1-4])/.exec(s);
    return +s.slice(0, 4) + (m ? (m[1] - 1) / 12 : q ? (q[1] - 1) / 4 : 0);
  }
  function eraReading(r, era){
    var from = era.from, to = era.to || calendarTodayY;
    var span = r.seen.filter(function(d){ var y = +d.k.slice(0, 4); return y >= from && y <= to; });
    if (!span.length) return { none:true, word:"Not measured before " + prettyK(r, r.first.k) };
    var end = span[span.length - 1], sign = r.flip ? -1 : 1, endT = kT(end.k) + 1e-6;
    var vs = span.map(function(d){ return sign * d.v; });
    var upTo = function(list){ return list.filter(function(d){ return d.v != null && kT(d.k) <= endT; }); };
    var second = r.pair ? upTo(r.pair).pop() : null;
    return { v:sign * end.v, lo:Math.min.apply(null, vs), hi:Math.max.apply(null, vs), when:prettyK(r, end.k),
             second:second && kT(second.k) >= from ? second.v : null,
             peek:upTo(r.peek || r.seen).map(function(d){ return sign * d.v; }) };
  }
  function eraFig(today){
    var tok = /[+\-\u2212]?\d[\d,]*(?:\.(\d+))?/.exec(today) || ["", ""];
    var dp = tok[1] ? tok[1].length : 0, pre = today.slice(0, today.indexOf(tok[0])).replace("\u2248", "");
    var suf = (/[^\d]*$/.exec(today) || [""])[0], signed = /^[+\-\u2212]/.test(tok[0]);
    function one(x){ var a = Math.abs(x).toFixed(dp); return (+a === 0 ? "" : x < 0 ? "\u2212" : signed ? "+" : "") + a; }
    return function(x, y){ return pre + one(x) + (y != null ? "/" + one(y) : suf); };
  }
  function eraValue(val, t, r, e){
    val.innerHTML = t.value;
    var unit = val.querySelector(".ci-unit"), surplus = r.flip && e.v < 0;
    val.firstChild.nodeValue = eraFig(t.text)(surplus ? -e.v : e.v, r.pair ? e.second : null);
    if (unit && (r.eraUnit || surplus)) unit.textContent = surplus ? "surplus, of GDP" : r.eraUnit;
  }
  function eraRange(t, r, e){
    if (e.lo === e.hi) return "Flat all cycle";
    var f = eraFig(t.text), pc = r.pair ? "%" : "";
    return (r.pair ? "Paid " : "") + f(e.lo) + pc + " to " + f(e.hi) + pc + " over the cycle";
  }
  function eraMini(t, r, e){
    if (r.ring && /vital-ring/.test(t.mini)) return vitalRingSvg(r.ring(e.v), "accent", r.name + " at " + e.v.toFixed(2));
    if (r.pulse && /pulsepeek/.test(t.mini)) return pulsePeek(e.v, r.pulse);
    return colPeek(e.peek, function(){ return "era-col"; }, r.base, r.rule);
  }
  function eraCard(item, r, era){
    var val = item.querySelector(".ci-value"), when = item.querySelector(".ci-when"), mini = item.querySelector(".ci-mini");
    var word = item.querySelector(".ci-word");
    if (!item.__today) item.__today = { value:val.innerHTML, text:val.firstChild.nodeValue, word:word ? word.innerHTML : null,
                                        when:when.textContent, mini:mini ? mini.innerHTML : "" };
    var t = item.__today;
    if (!era){
      val.innerHTML = t.value; when.textContent = t.when;
      if (mini) mini.innerHTML = t.mini;
      if (word && t.word == null) word.parentNode.removeChild(word); else if (word) word.innerHTML = t.word;
      return;
    }
    var e = r ? eraReading(r, era) : { none:true, word:"No history in the app" };
    if (!word){ word = document.createElement("span"); word.className = "ci-word"; val.parentNode.appendChild(word); }
    when.textContent = e.none ? "" : e.when;
    if (mini) mini.innerHTML = e.none ? "" : eraMini(t, r, e);
    if (e.none){ val.innerHTML = "\u2014"; word.textContent = e.word; return; }
    eraValue(val, t, r, e); word.textContent = eraRange(t, r, e);
  }
  function eraShow(era){
    var rows = rosterRows();
    Array.prototype.forEach.call(document.querySelectorAll(".cat-sheet .cat-item[data-open]"), function(item){
      eraCard(item, rows[item.getAttribute("data-open")], era);
    });
    if (era && !modeHome){ modeHome = {}; for (var k in pageMode) modeHome[k] = pageMode[k]; }
    for (var id in pageCycles){ pageCycles[id] = era ? era.name : null; pageMode[id] = era ? "cycles" : modeHome ? modeHome[id] : pageMode[id]; }
    if (!era) modeHome = null;
  }
  function enterEra(era, page){
    var ta = byId("today-analysis");
    if (!taHome) taHome = { parent:ta.parentNode, next:ta.nextSibling };
    eraOpen = era; showCycle(era);
    page.appendChild(cycleViewEl); page.appendChild(ta);
    eraShow(era);
  }
  function leaveEra(){
    if (!eraOpen) return;
    var ta = byId("today-analysis");
    taHome.parent.insertBefore(ta, taHome.next); taHome.parent.insertBefore(cycleViewEl, ta);
    eraOpen = null; eraShow(null); showCycle(currentEra);
  }

  /* ---- THE ROSTER AS SERIES ---- */
  function rosterGroups(byM, byQ, byY, qFrom, hyList){
    return [
      { key:"weather", label:"Weather", mark:weatherSvg, rows:[
        { name:"Temperature", open:"sheet-metric-temp", mark:thermoSvg,   list:byM(cpiYoYHistory),           dp:1, unit:"%" },
        { name:"Growth", open:"sheet-metric-gdp",      mark:sproutSvg,   list:byQ(gdpQuarterlyYoY),         dp:1, unit:"%" }
      ]},
      { key:"circulation", label:"Circulation", mark:circulationSvg, rows:[
        { name:"Hormones", open:"sheet-sign-hormones",    mark:hormoneSvg,  list:byM(fedFundsHistory),         dp:2, unit:"%", rule:true, eraUnit:"Fed funds rate" },
        { name:"Pressure", open:"sheet-sign-pressure",    mark:gaugeSvg,    list:byQ(t10yYieldHistory),        dp:2, unit:"%", rule:true },
        { name:"Pulse", open:"sheet-sign-pulse",       mark:ecgSvg,      list:qFrom(m2vHistory, M2V_FROM_YEAR),   dp:2, pulse:PULSE_PRE2008 },
        { name:"Volume", open:"sheet-sign-volume",      mark:volumeSvg,   list:qFrom(m2Yoy, M2_FROM_YEAR),         dp:1, unit:"%", rule:true }
      ]},
      { key:"mood", label:"Mood", mark:moodSvg, rows:[
        { name:"Shiller CAPE", open:"sheet-metric-valuation", mark:diamondSvg, list:byY(capeHistory),  dp:1, pre:"Jan ", last:"today", base:CAPE_FAIR },
        { name:"Buffett indicator", open:"sheet-metric-buffett", mark:diamondSvg, list:byQ(buffettHistory), dp:0, unit:"%", base:splitMid("sheet-metric-buffett") },
        { name:"Volatility", open:"sheet-sign-sentiment",  mark:volatilitySvg, list:byM(volatilityHistory),       dp:1, ring:vixPct },
        { name:"Desire", open:"sheet-sign-desire",      mark:flameSvg,    list:hyList,                       dp:2, unit:"%", peek:hyQuarterEnds() },
        { name:"Horizon", open:"sheet-sign-horizon",     mark:sunriseSvg,  list:byQ(t10y3mHistory),           dp:2, signed:true, rule:true }
      ]},
      { key:"energy", label:"Energy", mark:boltSvg, rows:[
        { name:"Federal debt", open:"sheet-metric-debt", mark:debtSvg,     list:byQ(grossDebtQuarterly),      dp:0, unit:"%", base:splitMid("sheet-metric-debt") },
        { name:"Interest payments", open:"sheet-metric-interest", mark:interestSvg, list:byY(fiscalHistory.interest), dp:1, unit:"%", base:splitMid("sheet-metric-interest") },
        { name:"Federal budget", open:"sheet-marker-deficit", mark:budgetSvg, list:deficitHistory.map(function(v, i){ return { k:String(DEF_FROM_YEAR + i), v:v }; }), dp:1, unit:"%", signed:true, flip:true, base:DEF_PEEK_BASE },
        { name:"Households", open:"sheet-metric-households",  mark:houseSvg,    list:qFrom(dsrHistory, DSR_FROM_YEAR),   dp:1, unit:"%", pair:qFrom(savHistory, SAV_FROM_YEAR), peek:qFrom(savHistory, SAV_FROM_YEAR) },
        { name:"Unemployment rate", open:"sheet-sign-activity",    mark:trendUpSvg,  list:byM(unempHistory),            dp:1, unit:"%" }
      ].concat(typeof productivityHistory === "undefined" || !productivityHistory.length ? [] :
        [{ name:"Productivity growth", open:"sheet-sign-productivity-growth", mark:clockSvg, list:byQ(productivityHistory), dp:1, unit:"%" }])}
    ];
  }
  var __roster = null;
  function readingRoster(){
    if (__roster) return __roster;
    var byM = function(a){ return a.map(function(d){ return { k:d.m, v:d.v }; }); };
    var byQ = function(a){ return a.map(function(d){ return { k:d.q, v:d.v }; }); };
    var byY = function(a){ return a.map(function(d){ return { k:String(d.y), v:d.v }; }); };
    var qFrom = function(a, y0){ return a.map(function(v, i){
      return { k:(y0 + Math.floor(i / 4)) + " Q" + (i % 4 + 1), v:v }; }); };
    var hyList = hyOas.map(function(v, i){ var a = hyAt(i);
      return { k:a.y + "-" + ("0" + a.m).slice(-2), v:v }; });
    var GRPS = rosterGroups(byM, byQ, byY, qFrom, hyList);
    GRPS.forEach(function(g){ g.rows.forEach(function(r){
      var seen = r.list.filter(function(d){ return d.v != null; });
      var sorted = seen.map(function(d){ return d.v; }).sort(function(a, b){ return a - b; });
      r.place = function(v){
        var lo = 0, hi = sorted.length;
        while (lo < hi){ var mid = (lo + hi) >> 1; if (sorted[mid] < v) lo = mid + 1; else hi = mid; }
        return sorted.length > 1 ? 100 * lo / (sorted.length - 1) : 50;
      };
      r.first = seen[0]; r.now = seen[seen.length - 1]; r.seen = seen;
    }); });
    GRPS.byOpen = {};
    GRPS.forEach(function(g){ g.rows.forEach(function(r){ GRPS.byOpen[r.open] = r; }); });
    return (__roster = GRPS);
  }
  function readFig(r, v){
    var a = Math.abs(v).toFixed(r.dp);
    var sign = +a === 0 ? "" : v < 0 ? "\u2212" : r.signed ? "+" : "";
    return sign + a + (r.unit ? '<span class="unit">' + r.unit + '</span>' : "");
  }
  function prettyK(r, k){
    if (r.pre) return r.pre + k;
    if (/^\d{4}-\d{2}$/.test(k)) return MONTHS_SHORT[+k.slice(5) - 1] + " " + k.slice(0, 4);
    if (/^\d{4} Q[1-4]$/.test(k)) return k.slice(5) + " " + k.slice(0, 4);
    return k;
  }

  // ---- RENDER: the symptoms — the years of a cycle a reading sat where it sits today ----
  function cycleSymptoms(cyc, years){
    var rows = [], quiet = [], absent = [];
    readingRoster().forEach(function(g){ g.rows.forEach(function(r){
      var now = r.place(r.now.v), measured = false;
      var cells = years.map(function(y){
        if (y >= calendarTodayY || y > (cyc.to || calendarTodayY)) return { y:y, state:y === calendarTodayY && cyc.ongoing ? "now" : "ahead" };
        var best = null;
        r.seen.forEach(function(d){
          if (+d.k.slice(0, 4) !== y) return;
          var gap = Math.abs(r.place(d.v) - now);
          if (!best || gap < best.gap) best = { d:d, gap:gap };
        });
        if (!best) return { y:y, state:"na" };
        measured = true;
        return { y:y, state:best.gap <= ALIKE ? "on" : "off", best:best.d };
      });
      var hits = cells.filter(function(c){ return c.state === "on"; });
      if (hits.length) rows.push({ g:g, r:r, cells:cells, hits:hits });
      else (measured ? quiet : absent).push(r.name);
    }); });
    var foot = (quiet.length ? "Not alike in any year: " + quiet.join(", ") + ". " : "") +
      (absent.length ? "Not measured then: " + absent.join(", ") + "." : "");
    return { rows:rows, foot:foot.trim() };
  }
  function placeWords(r, v){
    var p = Math.round(r.place(v)), since = " since " + prettyK(r, r.first.k);
    return p >= 100 ? "the highest reading" + since : p <= 0 ? "the lowest reading" + since : "higher than " + p + "% of readings" + since;
  }
  function symptomNote(cyc, row){
    var r = row.r;
    return '<h4>' + r.name + ' \u00b7 ' + cyc.name + '</h4>' +
      '<p>Now ' + readFig(r, r.now.v) + ' (' + (r.last || prettyK(r, r.now.k)) + '), ' + placeWords(r, r.now.v) + '. ' +
      'A year is marked when a reading taken in it sat within ' + ALIKE + ' points of that place in the same record.</p>' +
      facts(row.hits.map(function(c){ return prettyK(r, c.best.k) + ': ' + readFig(r, c.best.v) + ', ' + placeWords(r, c.best.v); }));
  }
  function symptomRow(cyc, row, cols){
    var r = row.r;
    return '<button type="button" class="sx-row" style="' + cols + '" data-detail-idx="' + detailSlot(symptomNote(cyc, row)) +
      '" aria-label="' + r.name + ': alike in ' + row.hits.map(function(c){ return c.y; }).join(", ") + '">' +
      row.cells.map(function(c){ return '<i class="' + c.state + (c.state === "on" ? " cat-" + row.g.key : "") + '"></i>'; }).join("") +
      '<b>' + r.name + '</b></button>';
  }
  function cycleTrack(cyc, strip, bands){
    var years = [];
    for (var i = 0; i < Math.ceil(strip.span / 4); i++) years.push(cyc.from + i);
    var sx = cycleSymptoms(cyc, years), end = cyc.to || calendarTodayY;
    var cols = 'grid-template-columns:repeat(' + years.length + ',' + YEAR_W + 'px) minmax(96px,1fr)';
    var yrs = years.map(function(y){
      var down = sp500AnnualReturns[y] != null && sp500AnnualReturns[y] < 0;
      return '<span class="' + (y === calendarTodayY && cyc.ongoing ? "now" : y > end ? "ahead" : down ? "down" : "") + '">' + y + '</span>';
    }).join("");
    return '<div class="cyc-track"><div class="cyc-scale" style="grid-template-columns:' + years.length * YEAR_W + 'px minmax(96px,1fr)">' +
      '<div style="width:' + (strip.span * YEAR_W / 4) + 'px">' + bands + '</div><span></span></div>' +
      '<div class="sx-yrs" style="' + cols + '">' + yrs + '<span></span></div>' +
      sx.rows.map(function(row){ return symptomRow(cyc, row, cols); }).join("") + '</div>' +
      (sx.foot ? '<p class="sx-foot">' + sx.foot + '</p>' : "");
  }
  function symptomLegend(){
    return '<p>A dot marks a year when a reading sat about where it sits today. Tap a row for the numbers.</p>' +
      '<div class="sx-keys">' + readingRoster().map(function(g){
        return '<span><i class="cat-' + g.key + '"></i>' + g.label + '</span>';
      }).join("") + '<span><i class="sx-off"></i>Not alike</span><span><i class="sx-now"></i>This year</span>' +
      '<span><b class="sx-down">Red year</b>S&amp;P 500 fell</span></div>';
  }
