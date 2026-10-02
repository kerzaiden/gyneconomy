  // ---- Content tab: reading companion ----
  var seasonReading = {
    summer: {
      body: "Peak fertility. Estrogen has crested and the LH surge has done its work; energy and desire are at their highest and everything in the body is built for going out and taking chances. Temperature dips briefly at ovulation and only then begins to climb.",
      economy: "Overheat. Growth is still running but inflation sits above target, so the central bank is leaning against it.",
      next: "Autumn — disinflation. Temperature (CPI) rolls over and the pressure comes off. The turn shows up first in the leading signs (credit, the curve, sentiment) and is confirmed months later by the lagging ones (temperature, activity).",
      watch: ["Temperature (CPI) and whether the Fed moves at its next meeting", "Cervical fluid — the 10Y–3M curve flattening or re-inverting", "Sentiment and valuation stretched at the same time (VIX calm, CAPE rich)"],
      fromTheBook: []
    },
    autumn: {
      body: "Early luteal. Progesterone takes over from estrogen; temperature is up and stays up, energy is steady but turns inward, and the body settles into consolidation rather than display.",
      economy: "Disinflation. Growth is slowing and prices are cooling, though still at or above target. Rates stop rising and eventually fall, and the curve steepens.",
      next: "Autumn — stagflation, if prices turn back up while growth keeps slowing; or Winter, if prices fall below target first.",
      watch: ["Activity — unemployment starting to drift up", "Hormones — credit growth and lending standards", "Whether temperature keeps falling or gets stuck above target"],
      fromTheBook: []
    },
    lateautumn: {
      body: "Late luteal. Energy is falling, mood tightens, temperature is still elevated, and the body is preparing to shed — the premenstrual stretch, uncomfortable and unmistakable.",
      economy: "Stagflation. Growth is slowing while inflation stays sticky, so policy is boxed in: easing feeds the heat, tightening deepens the slowdown.",
      next: "Winter — the bleed. Historically the leading signs have already turned by now (an inverted or un-inverting curve, widening credit spreads); the bleed itself confirms months later in prices and activity.",
      watch: ["Cervical fluid — the curve un-inverting after an inversion (the Analysis tab's lag panel has the record)", "Desire — high-yield spreads widening", "Sentiment — cracking (VIX spikes)"],
      fromTheBook: []
    },
    winter: {
      body: "Menstruation — groundation. Shedding, rest and the lowest energy of the cycle. The lining that was built up releases; the body is not failing, it is clearing the way.",
      economy: "Deflation, or close to it. Output contracts, prices and rates fall, and the bleed shows up on the Calendar as a down year for the market.",
      next: "Spring, once policy has loosened enough for credit to begin flowing again and growth turns up — reflation if prices have already begun heating back up, or a further stretch of Spring – deflation if they are still cooling as growth turns.",
      watch: ["Hormones — money supply and lending growth turning up", "Cervical fluid — the curve steepening sharply as short rates fall", "The Calendar — the next year closing up after the down year"],
      fromTheBook: []
    },
    springdeflation: {
      body: "",
      economy: "",
      next: "",
      watch: [],
      fromTheBook: []
    },
    spring: {
      body: "Follicular. Estrogen rises, the lining rebuilds, and energy returns day by day. Nothing is at its peak yet, but the direction is unmistakable.",
      economy: "Reflation. Growth is rising and prices have begun to rise with it, still below or within target — the comfortable stretch before anything overheats.",
      next: "Summer — inflation, once prices rise through the top of the target range while growth keeps rising.",
      watch: ["Temperature — inflation approaching the top of its range", "Cervical fluid — the curve steepening as growth is priced in", "Sentiment and valuation starting to stretch"],
      fromTheBook: []
    }
  };
  var frameworkRows = [
    {indicator:"Hormones", body:"Rising estrogen / LH surge", economy:"Credit — money supply, lending growth", category:"Leading"},
    {indicator:"Cervical fluid", body:"Cervical mucus change", economy:"Credit spreads / yield curve", category:"Leading"},
    {indicator:"Psychology", body:"Emotional state", economy:"Investor sentiment, asset valuations", category:"Leading"},
    {indicator:"Effort", body:"Energy", economy:"Capital — GDP, profits", category:"Coincident"},
    {indicator:"Desire", body:"Desire / libido", economy:"Risk tolerance", category:"Coincident"},
    {indicator:"Activity", body:"Physical activity", economy:"Labor / employment", category:"Lagging"},
    {indicator:"Temperature", body:"Basal body temperature", economy:"Inflation", category:"Lagging"}
  ];

  var vixRow = sentiment.rows[0];
  var VIX_CALM = 20, VIX_FEAR = 30;
  var VIX_CONVENTION = [
    {t:"Chase \u2014 What Is the VIX and How To Use It (below 20 stability, above 30 fear and uncertainty)", u:"https://www.chase.com/personal/investments/learning-and-insights/article/what-is-the-vix"},
    {t:"TD Direct Investing \u2014 Understanding VIX or Volatility Index (the same lines at 20 and 30)", u:"https://www.td.com/ca/en/investing/direct-investing/articles/understanding-vix"}
  ];
  function volatilityTag(){
    var v = vixRow.meter.value;
    return v < VIX_CALM ? { text:"Calm", state:"good" }
         : v <= VIX_FEAR ? { text:"Elevated", state:"warning" }
                         : { text:"Fearful", state:"critical" };
  }

  // ---- Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring ----
  var tempInfo = '<h4>Temperature</h4>' +
    ledeHtml("Her basal temperature: CPI against the 2% the Fed aims at, month by month through this cycle.") +
    facts([
      '<b>Hot above the band, warm inside it, cold below</b> \u2014 red, teal, blue.',
      'The Fed\u2019s goal is a single point, 2% on the PCE index. The <b>1\u20133% band</b> is this board\u2019s own tolerance around it, drawn on CPI because that is the series most readers know.',
      'One of the two readings a season is computed from: the level, and the direction of the last twelve months.',
      'It confirms heat that has already built rather than predicting it.'
    ]);

  // ---- Daily Feeling/Energy readout (Cycle tab) ----
  var calendarTodayY = DATA_COMPILED.getFullYear();

  var vix3mClose = LIVE("vix3mClose", 17.61);
  function fearCurve(){
    var near = vixRow && vixRow.meter && vixRow.meter.value;
    if (typeof near !== "number" || typeof vix3mClose !== "number" || !(vix3mClose > 0)) return null;
    return Math.round((near / vix3mClose) * 1000) / 1000;
  }
  function curveVerdict(r){
    return r == null   ? { text:"No reading", state:"norm" }
         : r >= 1      ? { text:"Inverted",   state:"serious" }
                       : { text:"Normal",     state:"good" };
  }
  function valuationVerdict(v){
    var r = v / CAPE_FAIR;
    return r < 0.75 ? { text:"Highly undervalued", state:"warning" }
         : r < 0.95 ? { text:"Undervalued",        state:"good" }
         : r < 1.15 ? { text:"Fairly valued",      state:"good" }
         : r < 1.60 ? { text:"Overvalued",         state:"warning" }
                    : { text:"Highly overvalued",  state:"serious" };
  }

  // ---- The range bar ----
  function modeBar(id, active, extra){
    return '<div class="rangebar" role="tablist" data-mode-for="' + id + '">' +
      [["cycles", "Cycles"], ["calendar", "Years"]].concat(extra || []).map(function(m){
        return '<button type="button" class="range-seg' + (m[0] === active ? " on" : "") + '" role="tab" ' +
          'aria-selected="' + (m[0] === active ? "true" : "false") + '" data-mode="' + m[0] + '">' + m[1] + '</button>';
      }).join("") + '</div>';
  }
  var pickerOpen = {};
  function cycleByName(nm){
    for (var i = 0; i < marketCycles.length; i++) if (marketCycles[i].name === nm) return marketCycles[i];
    return null;
  }
  function openCycle(){
    for (var i = 0; i < marketCycles.length; i++) if (marketCycles[i].ongoing) return marketCycles[i];
    return marketCycles[marketCycles.length - 1];
  }
  function cycleSlice(series, c){
    var to = c.to || calendarTodayY, a = -1, b = -1;
    series.forEach(function(d, i){
      var y = yearOf(d);
      if (y >= c.from && y <= to){ if (a === -1) a = i; b = i + 1; }
    });
    return a === -1 ? null : [a, b];
  }
  function totalGrowthYears(y0, y1){
    var years = [], rates = [];
    for (var y = y0; y <= y1; y++)
      if (y !== calendarTodayY && usRealGdpGrowth[y] !== undefined){ years.push(y); rates.push(usRealGdpGrowth[y]); }
    if (!years.length) return null;
    var factor = rates.reduce(function(fa, g){ return fa * (1 + g / 100); }, 1);
    return { years:years, total:(factor - 1) * 100 };
  }
  function cycleMonths(c){
    var to = c.to || calendarTodayY, a = -1, b = -1;
    cpiYoYHistory.forEach(function(d, i){
      var y = parseInt(d.m.slice(0, 4), 10);
      if (y >= c.from && y <= to){ if (a === -1) a = i; b = i + 1; }
    });
    return a === -1 ? null : [a, b];
  }
  function histControls(id, tl, minYear, extra){
    var mode = pageMode[id], on = mode === "cycles";
    var known = mode === "cycles" || mode === "calendar";
    return '<div class="hist-controls">' +
      modeBar(id, mode, extra) +
      (!known ? "" : on ? cyclePicker(id, pageCycles[id], minYear)
                        : rangeBar(id, timelineFor({ series:tl.series, depth:tl.depth, stops:PAGE_STOPS[id] }), pageRange[id])) +
    '</div>';
  }
  function pageCycle(id, y0){
    var c = pageMode[id] === "cycles" ? (cycleByName(pageCycles[id]) || openCycle()) : null;
    return c && c.from < y0 ? openCycle() : c;
  }
  function cycLabel(c){
    return { name:c.ongoing ? "Current cycle" : c.name.replace(" Cycle", ""),
             years:c.from + "\u2013" + (c.to || "Today") };
  }
  function cycleQtrIdx(y0, cyc, len){
    var to = cyc.to || calendarTodayY;
    var a = Math.max(0, (cyc.from - y0) * 4), b = Math.min(len, (to - y0 + 1) * 4);
    return b > a ? [a, b] : null;
  }
  function cyclePicker(id, picked, minYear){
    var rows = marketCycles.slice().reverse()
      .filter(function(c){ return minYear == null || c.from >= minYear; });
    var cur = cycleByName(picked) || openCycle();
    if (rows.indexOf(cur) === -1) cur = rows[0] || cur;
    var CL = cycLabel(cur), open = !!pickerOpen[id];
    return '<div class="cycsel' + (open ? " open" : "") + '" data-cycles-for="' + id + '">' +
      '<button type="button" class="cycsel-btn" data-picker-toggle="1" aria-haspopup="listbox" aria-expanded="' +
        (open ? "true" : "false") + '"><span class="cycsel-nm">' + CL.name + '</span>' +
        '<span class="cycsel-yr">' + CL.years + '</span>' + CHEV + '</button>' +
      '<div class="cycsel-menu" role="listbox"' + (open ? "" : " hidden") + '>' +
      rows.map(function(c){
        var sel = c.name === cur.name, L = cycLabel(c);
        return '<button type="button" class="cycsel-opt' + (sel ? " on" : "") + '" role="option" aria-selected="' +
          (sel ? "true" : "false") + '" data-cycle="' + c.name + '">' +
          '<span class="cycsel-tick" aria-hidden="true"></span><span class="cycsel-nm">' + L.name +
          '</span><span class="cycsel-yr">' + L.years + '</span></button>';
      }).join("") + '</div></div>';
  }
  function rangeBar(id, ranges, active){
    if (!ranges || ranges.length < 2) return "";
    return '<div class="rangebar" role="tablist" data-range-for="' + id + '">' + ranges.map(function(r){
      return '<button type="button" class="range-seg' + (r.key === active ? " on" : "") + '" role="tab" ' +
        'aria-selected="' + (r.key === active ? "true" : "false") + '" data-range="' + r.key + '">' + r.label + '</button>';
    }).join("") + '</div>';
  }
  function trendOf(vals, unit, period){
    period = period || "period";
    if (!vals || vals.length < 8) return { word:"unavailable", span:"", flat:true };
    var n = vals.length, sx = 0, sy = 0, sxy = 0, sxx = 0;
    vals.forEach(function(v, i){ sx += i; sy += v; sxy += i * v; sxx += i * i; });
    var slope = (n * sxy - sx * sy) / ((n * sxx - sx * sx) || 1);
    var dir = slope > 0 ? "rising" : "falling";
    var total = Math.abs(slope) * (n - 1);
    var lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals), spread = (hi - lo) || 1;
    var fit = { slope:slope, intercept:(sy - slope * sx) / n, n:n };
    var perYear = period === "month" ? 12 : period === "quarter" ? 4 : period === "day" ? 252 : 1;
    var span = "across " + Math.max(1, Math.round(n / perYear)) + "Y";
    if (total < spread * 0.1) return { word:"flat", span:span, flat:true, fit:fit };
    return { word:dir, span:span, flat:false, fit:fit };
  }
  var TREND_ARROW = {
    rising:  '<svg class="tp-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 11.5L7 7l3 3 3.2-4.2"/><path d="M13.2 9V5.8H10"/></svg>',
    falling: '<svg class="tp-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 4.5L7 9l3-3 3.2 4.2"/><path d="M13.2 7v3.2H10"/></svg>'
  };
  function trendPill(t, key, toggles, words){
    var word = (words && words[t.word]) || t.word;
    var inner = '<span class="tp-k">' + (key || "Trend") + '</span>' +
      '<span class="tp-v' + (t.flat ? " quiet" : "") + '">' + (TREND_ARROW[t.word] || "") + word +
        (t.span ? ' <em>' + t.span + '</em>' : '') + '</span>';
    var none = t.word === "unavailable";
    if (!toggles || !t.fit) return '<div class="trendpill' + (none ? " none" : "") + '">' + inner + '</div>';
    return '<button type="button" class="trendpill can-toggle" aria-pressed="false" ' +
      'aria-label="Show the trend on the chart">' + inner + '</button>';
  }

  // ---- Insights: what the series says about today, computed ----
  function yearOf(d){ return d.y != null ? d.y : parseInt((d.q || d.m).slice(0, 4), 10); }
  function mean(a){ return a.reduce(function(x, y){ return x + y; }, 0) / a.length; }
  /* ---- The record rows ---- */
  function headSigma(id, text){
    var el = byId("bh-sigma-" + id); if (!el) return;
    el.textContent = text == null ? "" : "(Σ" + text + ")";
    el.hidden = text == null;
  }
  function atQuarter(d){ return d.q; }
  function atMonth(d){ return MONTHS_SHORT[parseInt(d.m.slice(5, 7), 10) - 1] + " " + d.m.slice(0, 4); }
  function ordinal(n){ var t = n % 100, o = ["th","st","nd","rd"][(t - 20) % 10] || ["th","st","nd","rd"][t] || "th"; return n + o; }
  function hiCard(name, state, text, body){
    return '<div class="hi-card"><span class="hi-name ' + state + '">' + name + '</span>' + (text ? '<p>' + text + '</p>' : "") + (body || "") + '</div>';
  }
  // ---- The cycle average component ----
  function dropWhatIsShown(full, shown){
    if (!full || !shown) return full || "";
    var norm = function(x){ return x.replace(/\s+/g, " ").trim(); }, seen = norm(shown);
    var parts = full.split(/(?<=[.!?])\s+/), i = 0;
    while (i < parts.length && parts[i] && seen.indexOf(norm(parts[i])) !== -1) i++;
    return i ? parts.slice(i).join(" ").replace(/^\s+/, "") : full;
  }
  function moreRow(fullHtml, label){
    if (!fullHtml) return "";
    var idx = detailSlot(fullHtml);
    return '<button type="button" class="more-row" data-detail-idx="' + idx + '">' +
      '<span>' + (label || "More details") + '</span>' + CHEV + '</button>';
  }
  var tempCaptionFull = "", tempLeadShown = "";
  function highlightsHtml(cards, cyclesHtml, moreHtml, head){
    if (!cards.length && !cyclesHtml && !moreHtml) return "";
    return '<section class="highlights insights"><div class="hi-head">' + (head || "Insights") + '</div>' + cards.join("") +
      (cyclesHtml || "") + (moreHtml || "") + '</section>';
  }

  // ---- The inner pages' charts ----
  function xLabelOf(o, d, i, all){
    if (o.xLabel) return o.xLabel(d, i);
    if (d.y == null) return "";
    if (all && all.length){
      var ys = o._years || (o._years = windowYears(all[0].y, all[all.length - 1].y, 5));
      return ys.indexOf(d.y) === -1 ? "" : "\u2019" + String(d.y).slice(2);
    }
    return d.y % 10 ? "" : "\u2019" + String(d.y).slice(2);
  }

  function fitLine(vals, per, fmt, x0, x1, y, W, padL, padR){
    var fit = trendOf(vals, "points", per).fit;
    return fit && fit.n > 1 ? fitGroup({ fit:fit, fmt:fmt }, x0, x1, y, W, padL, padR) : "";
  }
  function fitGroup(o, x0, x1, y, W, padL, padR){
    var f = o.fit, v0 = f.intercept, v1 = f.intercept + f.slope * (f.n - 1);
    var y0 = parseFloat(y(v0)), y1 = parseFloat(y(v1));
    var down = y1 > y0;
    function lab(v, x, yy, above, anchor){
      var txt = o.fmt(v), w = txt.length * 7.4 + 8, ly = above ? yy - 17 : yy + 5;
      var lx = anchor === "end" ? x - w : x;
      return '<rect class="chart-label-plate" x="' + lx.toFixed(1) + '" y="' + ly.toFixed(1) + '" width="' + w.toFixed(1) + '" height="15" rx="3"/>' +
        '<text class="fit-lab mono" x="' + (lx + w / 2).toFixed(1) + '" y="' + (ly + 11.4).toFixed(1) + '" text-anchor="middle">' + txt + '</text>';
    }
    return '<g class="fit">' +
      '<path class="fit-line" d="M' + x0.toFixed(1) + ',' + y0.toFixed(1) + 'L' + x1.toFixed(1) + ',' + y1.toFixed(1) + '"/>' +
      lab(v0, padL + 1, y0, !down, "start") +
      lab(v1, W - padR - 1, y1, down, "end") +
    '</g>';
  }


  /* ---- The history component's axes ---- */
  function appendSvgMarkup(svg, markup){
    if (!markup) return;
    var doc = new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg">' + markup + '</svg>', "image/svg+xml");
    var root = doc.documentElement;
    var kids = Array.prototype.slice.call(root.childNodes);
    for (var i = 0; i < kids.length; i++) svg.appendChild(document.importNode(kids[i], true));
  }
  function vGrid(x, top, bot){
    return '<path class="bt-vgrid" d="M' + (+x).toFixed(1) + ',' + (+top).toFixed(1) +
           'L' + (+x).toFixed(1) + ',' + (+bot).toFixed(1) + '"/>';
  }
  var COL_FILL = 0.68;
  function colPath(cx, y0, y1, sw){
    var lo = Math.min(y0, y1), hi = Math.max(y0, y1), r = sw / 2, x = (+cx).toFixed(1);
    if (hi - lo <= sw){ var mid = ((lo + hi) / 2).toFixed(1); return "M" + x + "," + mid + "L" + x + "," + mid; }
    return "M" + x + "," + (hi - r).toFixed(1) + "L" + x + "," + (lo + r).toFixed(1);
  }
  function colWidth(slot){
    if (!(slot > 0)) return 1;
    if (slot < 1.5) return slot;
    return Math.min(20, slot * COL_FILL);
  }
  var AXIS = { L:37, R:6, T:10, LEG:20, RAIL:5, FOOT:8, READ:61 };
  function histFrame(Wpx){
    var W = Math.max(270, Math.round(Wpx || 360));
    var narrow = W < 430;
    var H = narrow ? 335 : 375;
    return { W:W, narrow:narrow, H:H, L:AXIS.L, R:W - AXIS.R,
             T:AXIS.T + AXIS.LEG + AXIS.READ, B:H - 17 - AXIS.FOOT };
  }
  function xLabel(x, text, y){
    return '<text class="bt-xl" x="' + x + '" y="' + y + '" text-anchor="middle">' + text + '</text>';
  }
  function crossLine(top, bot){
    return '<line class="hist-cross" x1="0" x2="0" y1="' + top + '" y2="' + bot + '"/>';
  }
  function zeroRule(L, R, y){
    return '<path class="m2-zero" d="M' + (L - AXIS.L) + ',' + y.toFixed(1) + 'H' + (R + AXIS.R) + '"/>';
  }
  function meanRule(L, R, y){ return '<path class="vh-mean" d="M' + L + ',' + y.toFixed(1) + 'H' + R + '"/>'; }
  var pendingGeom = null;
  function publishGeom(name, g){ g.src = name; pendingGeom = g; return g; }
  function attachHistory(host, tipId, expect){
    if (!host) return null;
    var g = pendingGeom;
    if (expect && (!g || g.src !== expect))
      (window.__geomMiss = window.__geomMiss || []).push(expect + " wanted, " + (g ? g.src : "none") + " pending");
    host.__geom = g;
    if (tipId) wireHistHover(host, tipId);
    return g;
  }
  function histBar(inner, id){
    return '<div class="hist-bar"' + (id ? ' id="' + id + '"' : '') + '>' + (inner || '') + '</div>';
  }
  function histTip(id){ return '<div class="gdp-tooltip mono hist-tip" id="' + id + '" hidden></div>'; }
  function avgRule(x0, x1, y){
    return '<path class="temp-avg" d="M' + x0 + ',' + y + 'H' + x1 + '"/>';
  }
  function vhOpen(W, H){ return '<svg class="vh-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" '; }
  function chartAxes(o){
    var out = [], ticks = o.ticks;
    if (!ticks){
      var step = o.step || [0.1, 0.25, 0.5, 1, 2, 5, 10, 20, 25, 50, 100].filter(function(k){
        return (o.hi - o.lo) / k <= 4.5; })[0] || 200;
      ticks = [];
      for (var v = Math.ceil(o.lo / step) * step; v <= o.hi + 1e-9; v += step) ticks.push(v);
    }
    var fx0 = o.x0 - AXIS.L, fx1 = o.x1 + AXIS.R;
    if (o.top != null && o.bot != null){
      out.push('<rect class="bt-frame" x="' + fx0.toFixed(1) + '" y="' + (+o.top).toFixed(1) + '" width="' +
               (fx1 - fx0).toFixed(1) + '" height="' + (o.bot - o.top).toFixed(1) + '"/>');
      out.push('<path class="bt-grid" d="M' + (o.x0 - AXIS.RAIL) + ',' + (+o.top).toFixed(1) +
               'L' + (o.x0 - AXIS.RAIL) + ',' + (+o.bot).toFixed(1) + '"/>');
    }
    ticks.forEach(function(v){
      var ty = parseFloat(o.y(v));
      if (o.skipNear != null && Math.abs(ty - o.skipNear) < 12) return;
      if ((o.noGridAt == null || Math.abs(v - o.noGridAt) > 1e-9) &&
          (o.base == null || Math.abs(ty - parseFloat(o.base)) > 0.5))
        out.push('<path class="bt-grid" d="M' + fx0.toFixed(1) + ',' + ty.toFixed(1) + 'L' + fx1.toFixed(1) + ',' + ty.toFixed(1) + '"/>');
      var ly = ty - 5;
      out.push('<text class="bt-yl" x="' + ((fx0 + o.x0 - AXIS.RAIL) / 2).toFixed(1) + '" y="' + ly.toFixed(1) +
               '" text-anchor="middle">' + o.fmt(v) + '</text>');
    });
    if (o.base != null)
      out.push('<path class="bt-axis" d="M' + fx0.toFixed(1) + ',' + o.base + 'L' + fx1.toFixed(1) + ',' + o.base + '"/>');
    return out.join("");
  }

  function divergeChart(o, W){
    W = Math.max(280, W || 340);
    var F = histFrame(W), H = F.H;
    var padL = F.L, padR = W - F.R, padT = F.T, padB = H - F.B, iw = W - padL - padR, ih = H - padT - padB;
    var vs = o.vals.map(function(d){ return d.v; });
    var lo = Math.min.apply(null, vs.concat([o.mid])), hi = Math.max.apply(null, vs.concat([o.mid]));
    var above = (hi - o.mid) * 1.06, below = (o.mid - lo) * 1.12, unit = ih / ((above + below) || 1);
    var midY = padT + above * unit;
    function y(v){ return (midY - (v - o.mid) * unit).toFixed(1); }
    var n = o.vals.length, slot = iw / n, sw = colWidth(slot);
    var out = [chartAxes({ lo:o.mid - below, hi:o.mid + above, y:y, x0:padL, x1:(W - padR), top:(padT - AXIS.LEG - AXIS.READ), bot:(padT + ih),
                           base:(padT + ih), skipNear:midY, step:o.step, fmt:(o.tickFmt || o.fmt) })];
    out.push('<path class="dv-mid" d="M' + padL + ',' + midY.toFixed(1) + 'L' + (W - padR) + ',' + midY.toFixed(1) + '"/>');
    o.vals.forEach(function(d, i){
      var cx = (padL + slot * (i + 0.5)).toFixed(1), y1 = parseFloat(y(d.v));
      if (Math.abs(y1 - midY) < 0.6) y1 = midY + (d.v >= o.mid ? -0.6 : 0.6);
      out.push('<path class="dv-bar hcol ' + (d.v > o.mid ? "over" : "under") + (o.goodAbove ? " good-above" : "") + '" stroke-width="' + sw.toFixed(1) + '" d="' + colPath(cx, midY, y1, sw) + '"/>');
    });
    var dAvg = o.vals.reduce(function(a, d){ return a + d.v; }, 0) / (n || 1);
    out.push(avgRule(padL, (W - padR), y(dAvg)));
    if (o.fit && o.fit.n > 1) out.push(fitGroup(o, padL + slot * 0.5, padL + slot * (n - 0.5), y, W, padL, padR));
    o.vals.forEach(function(d, i){
      var lab = xLabelOf(o, d, i, o.vals); if (!lab) return;
      out.unshift(vGrid(padL + slot * (i + 0.5), padT, padT + ih));
      out.push(xLabel((padL + slot * (i + 0.5)).toFixed(1), lab, (H - AXIS.FOOT)));
    });
    out.push(crossLine(padT, (padT + ih)));
    publishGeom("divergeChart", { L:(padL + slot * 0.5), R:(padL + slot * (n - 0.5)), T:padT, B:(padT + ih), W:W, n:n,
                     refs:(o.mid != null ? [{ label:"Average", v:dAvg }, { label:refName(o.midLabel), v:o.mid, dash:true, cls:"dv-mid" }]
                                        : [{ label:"Average", v:dAvg }]),
                     vals:o.vals, at:(o.at || function(d){ return String(d.y); }), fmt:o.fmt });
    return '<div class="dchart"><svg class="hist-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + (o.alt || "") + '">' + out.join("") + '</svg></div>';
  }


  // ---- A series' highest reading within a span ----

  function maxIn(series, from, to){
    var vs = series.filter(function(d){ var y = yearOf(d); return y >= from && y <= to; });
    return vs.length ? vs.reduce(function(a, b){ return b.v > a.v ? b : a; }) : null;
  }

  var PEEK_MARKS = 12;
  var PEEK_W = 80;
  var PEEK_H = 42;
  function colPeek(all, classOf, base, rule){
    if (!all || !all.length) return "";
    var from = Math.max(0, all.length - PEEK_MARKS), vals = all.slice(from);
    var classAt = function(v, i){ return classOf(v, i + from); };
    var W = PEEK_W, H = PEEK_H, padT = 6, padB = 3, zero = base == null ? 0 : base;
    var hi = zero + (Math.max.apply(null, vals.concat([zero])) - zero) * 1.06, lo = zero + (Math.min(zero, Math.min.apply(null, vals)) - zero) * 1.06;
    var slot = W / vals.length, sw = Math.max(1.6, Math.min(7, slot * COL_FILL));
    function y(v){ return (padT + (H - padT - padB) * (1 - (v - lo) / ((hi - lo) || 1))).toFixed(1); }
    var out = [];
    if (rule) out.push('<path class="peek-base" d="M0,' + y(zero) + 'H' + W + '"/>');
    vals.forEach(function(v, i){
      var cx = (slot * (i + 0.5)).toFixed(1);
      var last = i === vals.length - 1;
      out.push('<path class="' + classAt(v, i) + (last ? " now" : " past") + '" stroke-width="' + sw.toFixed(1) + '" d="M' + cx + ',' + y(zero) + 'L' + cx + ',' + y(v) + '"/>');
    });
    return '<span class="peek-chart heat"><svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" aria-hidden="true">' + out.join("") + '</svg></span>';
  }

  function meterPeek(m, state){
    var W = PEEK_W, H = PEEK_H, sw = 13, cy = H / 2, x0 = sw / 2, x1 = W - sw / 2;
    function at(v){ return x0 + (x1 - x0) * Math.max(0, Math.min(1, (v - m.min) / ((m.max - m.min) || 1))); }
    var o = m.optimal || {};
    var lo = o.from != null ? o.from : (o.gte != null ? o.gte : m.min);
    var hi = o.to != null ? o.to : (o.lte != null ? o.lte : m.max);
    var a = at(lo), c = at(hi);
    if (c - a < sw) c = a + sw;
    var hx = at(m.value);
    return '<span class="peek-chart meterpeek"><svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" aria-hidden="true">' +
      '<path class="mp-track" stroke-width="' + sw + '" d="M' + x0 + ',' + cy + 'H' + x1 + '"/>' +
      '<path class="mp-band" stroke-width="' + sw + '" d="M' + a.toFixed(1) + ',' + cy + 'H' + c.toFixed(1) + '"/>' +
      '<circle class="mp-here ' + state + '" cx="' + hx.toFixed(1) + '" cy="' + cy + '" r="7.5"/>' +
      '<circle class="mp-core ' + state + '" cx="' + hx.toFixed(1) + '" cy="' + cy + '" r="3"/>' +
    '</svg></span>';
  }

  var PRESSURE_ZONES = [
    { key:"inverted", label:"Inverted", from:-2,  to:0 },
    { key:"normal",   label:"Normal",   from:0,   to:2.5 },
    { key:"steep",    label:"Steep",    from:2.5, to:4 }
  ];
  function pressureZone(v){
    for (var i = 0; i < PRESSURE_ZONES.length; i++){
      if (v < PRESSURE_ZONES[i].to || i === PRESSURE_ZONES.length - 1) return PRESSURE_ZONES[i];
    }
    return PRESSURE_ZONES[PRESSURE_ZONES.length - 1];
  }
  var HZN_BACK = 4;
  function hznLast(a){ for (var i = a.length - 1; i >= 0; i--) if (a[i].v != null) return { i:i, v:a[i].v }; return null; }
  function hznBack(a, from, back){ for (var i = from - back; i >= 0; i--) if (a[i].v != null) return a[i].v; return null; }
  function horizonWord(sp, dLong, dShort, dSpread){
    if (sp < -0.10) return { word:"Pessimistic", state:"critical" };
    if (sp <  0.25) return { word:"Undecided",   state:"warning" };
    if (dSpread <= 0.05) return { word:"Guarded", state:"warning" };
    return dLong >= -dShort ? { word:"Optimistic", state:"good" } : { word:"Hopeful", state:"good" };
  }
  var horizonRead = (function(){
    var pick = function(m){ var h = yieldCurve.filter(function(d){ return d.m === m; })[0]; return h ? h.y : null; };
    var sp = pick("10Y") - pick("3M");
    var sN = hznLast(t10y3mHistory), lN = hznLast(t10yYieldHistory), tN = hznLast(t3mYieldHistory);
    var tN2 = hznLast(t10y2yHistory);
    var dSpread = sN.v - hznBack(t10y3mHistory, sN.i, HZN_BACK);
    var dLong   = lN.v - hznBack(t10yYieldHistory, lN.i, HZN_BACK);
    var dShort  = tN.v - hznBack(t3mYieldHistory, tN.i, HZN_BACK);
    var w = horizonWord(sp, dLong, dShort, dSpread);
    return { spread:sp, q:sN, q2:tN2, dSpread:dSpread, dLong:dLong, dShort:dShort,
             was:hznBack(t10y3mHistory, sN.i, HZN_BACK), was2:hznBack(t10y2yHistory, tN2.i, HZN_BACK),
             d2:tN2.v - hznBack(t10y2yHistory, tN2.i, HZN_BACK),
             word:w.word, state:w.state };
  })();
  var HZN_METERS = {
    "3m": { min:-1.48, max:3.61, value:horizonRead.spread,
            optimal:{ gte:0, label:"0 and above" }, ends:{ low:"Inverted" } },
    "2y": { min:-0.77, max:2.80,
            value:(function(){ var p = function(m){ var h = yieldCurve.filter(function(d){ return d.m === m; })[0]; return h ? h.y : 0; };
                               return p("10Y") - p("2Y"); })(),
            optimal:{ gte:0, label:"0 and above" }, ends:{ low:"Inverted" } }
  };
  function horizonInfoHtml(pick){
    var m = HZN_METERS[pick], shortLeg = pick === "2y" ? "2-year" : "3-month";
    return '<h4>10-year minus ' + shortLeg + '</h4>' +
      '<p class="caption">What the long end of the curve pays over the short end, in percentage points. It is a ' +
        'forecast rather than a measurement: the long rate is the market’s own average of where it expects the ' +
        'short rate to be for the next ten years, so a curve that slopes down is a market expecting cuts, and a ' +
        'market expecting cuts is a market expecting trouble. The ends of the track are this series’ quarterly ' +
        'record, ' + m.min.toFixed(2) + ' and +' + m.max.toFixed(2) + ' points; the deepest single DAY of the ' +
        'last inversion was −1.89, in May 2023, below the quarterly low because a quarter is an average.</p>' +
      '<p class="caption" style="margin-top:10px;"><b>The line at zero is definitional, not drawn</b> — it is ' +
        'where an upward-sloping curve becomes an inverted one, and it is the threshold the New York Fed’s own ' +
        'recession model is built on, using this exact pair of maturities. That model’s FAQ states that an ' +
        'inversion has preceded every U.S. recession on record since 1960, with a single false signal in 1967. ' +
        'The band is one-sided because a steeper curve is not a worse one: there is nothing to flag above zero.</p>' +
      '<p class="caption" style="margin-top:10px;">Read the caution with the signal, because it is the same ' +
        'source’s. The New York Fed is explicit that it is the <b>level</b> of the spread that forecasts, not the ' +
        'crossing — in two episodes in the 1990s the spread fell to 42 and then 12 basis points without ever ' +
        'inverting, and nothing followed. A reading just above zero is not the all-clear the colour suggests, ' +
        'which is why the word this page gives a spread under 0.25 is <b>Undecided</b>.</p>' +
      String(SPREAD_DETAIL || "").replace(/^\s*<h4>[\s\S]*?<\/h4>/, "");
  }
  var RISK_REWARD = [
    { key:"low",  label:"Low",      at:function(v){ return v < 4; } },
    { key:"mod",  label:"Moderate", at:function(v){ return v >= 4 && v <= 10; } },
    { key:"high", label:"High",     at:function(v){ return v > 10; } }
  ];
  var RISK_RISK = [
    { key:"low",  label:"Low",      at:function(v){ return v < 20; } },
    { key:"mod",  label:"Moderate", at:function(v){ return v >= 20 && v <= 30; } },
    { key:"high", label:"High",     at:function(v){ return v > 30; } }
  ];
  function riskCell(bands, v){ var i = 0; bands.forEach(function(b, k){ if (b.at(v)) i = k; }); return i; }
  function riskMatrixBlock(oas, cape){
    var wi = riskCell(RISK_REWARD, oas), ri = riskCell(RISK_RISK, cape);
    var ylabs = [], cells = [];
    for (var r = RISK_RISK.length - 1; r >= 0; r--){
      ylabs.push('<span class="rm-y' + (r === ri ? " on" : "") + '">' + RISK_RISK[r].label + '</span>');
      for (var c = 0; c < RISK_REWARD.length; c++){
        var here = (r === ri && c === wi);
        cells.push('<span class="rm-c s' + (r + (RISK_REWARD.length - 1 - c)) + (here ? " here" : "") + '" title="' +
          RISK_RISK[r].label + ' risk · ' + RISK_REWARD[c].label + ' reward">' +
          (here ? '<i class="rm-mark"></i>' : "") + '</span>');
      }
    }
    var xlabs = RISK_REWARD.map(function(b, i){
      return '<span class="rm-x' + (i === wi ? " on" : "") + '">' + b.label + '</span>';
    }).join("");
    return '<div class="page-chart riskmx">' +
      '<div class="spread-history-head"><h4>Risk / Reward</h4>' + expandBtn(riskMatrixNote) + '</div>' +
      '<div class="rm-frame"><span class="rm-axis rm-axis-y">Risk</span>' +
        '<div class="rm-grid">' +
          '<div class="rm-ylabs">' + ylabs.join("") + '</div>' +
          '<div class="rm-cells">' + cells.join("") + '</div>' +
          '<span></span><div class="rm-xlabs">' + xlabs + '</div>' +
        '</div></div>' +
      '<div class="rm-axis rm-axis-x">Reward</div>' +
      '<p class="pt-note"><b>' + RISK_RISK[ri].label + ' risk</b> (CAPE ' + cape.toFixed(1) + '×) · ' +
        '<b>' + RISK_REWARD[wi].label + ' reward</b> (' + oas.toFixed(2) + '% spread). ' +
        'Risk: CAPE under 20 / 20–30 / over 30. Reward: spread under 4% / 4–10% / over 10%. ' +
        'The grid places the two readings against each other. It does not forecast.</p>' +
    '</div>';
  }
  var riskMatrixNote =
    '<h4>Risk / Reward</h4>' +
    '<p class="caption">Two readings already on this board, placed against each other because neither answers the ' +
      'other’s question alone. <b>Risk</b> is CAPE, from the Valuations page — how much price sits on a decade of ' +
      'earnings, and so how much there is to give back. <b>Reward</b> is the extra yield demanded to hold junk ' +
      'debt — Desire’s own figure, read forwards: a wide spread is a lot of compensation for the risk, a tight ' +
      'one is very little. This is the same figure the card above tags as high appetite, seen from the other ' +
      'side: <b>high appetite is what a low-reward market looks like from the inside.</b></p>' +
    '<p class="caption" style="margin-top:10px;">How to read it. The two readings are placed against each ' +
      'other rather than divided into a single figure, so what you get is a position on two axes rather than one ' +
      'number. It is also not <b>Value at Risk</b>, which is a different and far more precise measure — the loss ' +
      'not exceeded with a stated probability over a stated horizon. This grid has no distribution, no ' +
      'confidence level and no horizon.</p>' +
    '<p class="caption" style="margin-top:10px;">The bands. A spread under 4% is the euphoric zone (the record ' +
      'low is 2.41%, June 2007), over 10% the distressed one (the record high 21.82%, December 2008), and ' +
      'between them is ordinary. CAPE’s 20 and 30 are round numbers sitting close to the terciles of this ' +
      'app’s own 1970–2026 history (16.9 and 26.5); they split those fifty-seven years twenty-four, ' +
      'twenty-one and twelve.</p>' +
    '<p class="caption" style="margin-top:10px;">No cell carries a rating. The wash deepens toward high risk and ' +
      'low reward because being paid least when there is most to lose is arithmetic about two readings — a ' +
      'description of where you are standing, not a claim about what happens next. The honest way to say more ' +
      'would be to shade each cell by what followed historically, as the un-inversion panel on the Pressure page ' +
      'does; that needs a long spread history, and FRED now serves this series on a rolling three-year window, ' +
      'so the past years cannot be binned.</p>';
