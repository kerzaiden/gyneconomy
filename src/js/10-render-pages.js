
  // ---- RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y ----
  function spreadSeries(){
    return {
      "3m": {
        title: "10-Year minus 3-Month spread since 2005",
        lede: "Every U.S. recession since the late 1960s has followed an inversion of this spread — the Fed's own preferred near-term recession gauge. History says the recession tends to start only after the curve un-inverts, not while it's still inverted.",
        data: t10y3mHistory,
        detail: '<h4>10-Year minus 3-Month spread, 2005–2026</h4>' +
          '<p class="caption">Quarterly averages, not daily — so a very brief inversion (like the single-day dip on Mar 22, 2019) can be smoothed away. The point is each cycle’s shape, not every daily wiggle. Gray bands are NBER-dated recessions.</p>' +
          '<p class="caption" style="margin-top:10px;">One episode often described as a false alarm, September 1998 (the Russia default/LTCM crisis), is a closer call than that: the spread came down to +0.12 points but never actually crossed zero, so it isn’t a true exception — the popular “1998 near-miss” story more likely refers to other spreads or to credit markets, not this one. The current cycle inverted in October 2022 — the deepest (−1.89 points on May 4, 2023) and longest in the daily series’ record, which starts in 1982 — and un-inverted in a choppy transition: the monthly average first reached zero in December 2024, dipped negative again in March–April and June–August 2025, and has held positive since September 2025 (the last negative daily close was October 16, 2025). See “Time from un-inversion to recession, historically” below for what past cycles suggest happens next.</p>' +
          srcBlock([
            {t:"FRED — 10Y minus 3M spread", u:"https://fred.stlouisfed.org/series/T10Y3M"},
            {t:"FRED — 10-Year Treasury Rate (GS10)", u:"https://fred.stlouisfed.org/series/GS10"},
            {t:"FRED — 3-Month Treasury Bill Rate (TB3MS)", u:"https://fred.stlouisfed.org/series/TB3MS"},
            {t:"NBER — US Business Cycle Expansions and Contractions", u:"https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions"},
            {t:"NY Fed — Yield Curve as a Leading Indicator, FAQ (PDF)", u:"https://www.newyorkfed.org/medialibrary/media/research/capital_markets/ycfaq.pdf"}
          ]),
        sources: [
          {t:"FRED — 10-Year Treasury Rate (GS10)", u:"https://fred.stlouisfed.org/series/GS10"},
          {t:"FRED — 3-Month Treasury Bill Rate (TB3MS)", u:"https://fred.stlouisfed.org/series/TB3MS"},
          {t:"NBER — US Business Cycle Expansions and Contractions", u:"https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions"},
          {t:"NY Fed — Yield Curve as a Leading Indicator, FAQ (PDF)", u:"https://www.newyorkfed.org/medialibrary/media/research/capital_markets/ycfaq.pdf"}
        ]
      },
      "2y": {
        title: "10-Year minus 2-Year spread since 2005",
        lede: "The version of this signal most widely quoted in financial media — it inverted about three months before the 3-month version did.",
        data: t10y2yHistory,
        detail: '<h4>10-Year minus 2-Year spread, 2005–2026</h4>' +
          '<p class="caption">Quarterly averages of the FRED T10Y2Y series, recomputed and cross-checked against the underlying 10-year and 2-year constant-maturity series (GS10, GS2). Gray bands are NBER-dated recessions.</p>' +
          '<p class="caption" style="margin-top:10px;">It inverted July 6, 2022 (first negative daily close on FRED’s series) — about three months before the 3-month version did — and un-inverted in early September 2024 (touched zero on August 27, then held positive from September 6), its first sustained positive reading in over two years. It has preceded the same recessions the 3-month spread has, though exact inversion and un-inversion dates differ slightly between the two, cycle to cycle. The “Time from un-inversion to recession” panel below uses the 3-month spread specifically, since it has the longer, more rigorously documented track record.</p>' +
          srcBlock([
            {t:"FRED — 10Y minus 2Y spread", u:"https://fred.stlouisfed.org/series/T10Y2Y"},
            {t:"FRED — 10-Year Treasury Rate (GS10)", u:"https://fred.stlouisfed.org/series/GS10"},
            {t:"FRED — 2-Year Treasury Rate (GS2)", u:"https://fred.stlouisfed.org/series/GS2"},
            {t:"NBER — US Business Cycle Expansions and Contractions", u:"https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions"},
            {t:"NY Fed — Yield Curve as a Leading Indicator, FAQ (PDF)", u:"https://www.newyorkfed.org/medialibrary/media/research/capital_markets/ycfaq.pdf"}
          ]),
        sources: [
          {t:"FRED — 10Y minus 2Y spread", u:"https://fred.stlouisfed.org/series/T10Y2Y"},
          {t:"FRED — 2-Year Treasury Rate (GS2)", u:"https://fred.stlouisfed.org/series/GS2"}
        ]
      }
    };
  }
  function renderSpreadHistory(){
    var svg = byId("spread-history-svg");
    var W = 780, H = 220, padL = AXIS.L, padR = AXIS.R, padT = AXIS.T + AXIS.LEG + AXIS.READ, padB = 30;
    var innerW = W - padL - padR, innerH = H - padT - padB;
    var minV = -2, maxV = 4;
    var el = svgEl;
    var tooltip = byId("spread-history-tooltip");

    var series = spreadSeries();
    addSources(series["3m"].sources); addSources(series["2y"].sources);

    function qIndex(data, q){ for (var i=0;i<data.length;i++){ if (data[i].q === q) return i; } return -1; }
    function x(i, n){ var h = innerW / (2 * Math.max(1, n)); return padL + h + (innerW - 2 * h) * i / (n - 1); }
    function y(v){ return padT + innerH - ((v - minV) / (maxV - minV)) * innerH; }

    function draw(key, from, to){
      var s = series[key];
      var data = s.data;
      if (from != null) data = data.slice(from, to == null ? undefined : to);
      if (data.length < 2) data = s.data;
      var shell = svg.parentNode;
      W = Math.max(270, Math.round((shell && shell.clientWidth) || 360));
      H = W < 430 ? 268 : 300;
      innerW = W - padL - padR; innerH = H - padT - padB;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      svg.innerHTML = "";

      t10y3mRecessions.forEach(function(r){
        var i0 = qIndex(data, r.from), i1 = qIndex(data, r.to);
        if (i0 < 0 || i1 < 0) return;
        svg.appendChild(el("rect", { x:x(i0,data.length), y:padT, width: Math.max(2, x(i1,data.length) - x(i0,data.length)), height: innerH, class:"spread-history-band" }));
      });

      var yTop = padT, yBot = padT + innerH, xR = W - padR;
      appendSvgMarkup(svg, chartAxes({
        x0:padL, x1:xR, top:(yTop - AXIS.LEG - AXIS.READ), bot:yBot, y:y, noGridAt:0,
        ticks:[-2, -1, 0, 1, 2, 3, 4],
        fmt:function(v){ return (v > 0 ? "+" : v < 0 ? "\u2212" : "") + Math.abs(v) + "%"; }
      }));
      svg.appendChild(el("line", { x1:padL - AXIS.L, x2:xR + AXIS.R, y1:y(0), y2:y(0), class:"spread-history-zero" }));

      var y0q = parseInt(data[0].q.slice(0, 4), 10), y1q = parseInt(data[data.length - 1].q.slice(0, 4), 10);
      var xLabelYears = windowYears(y0q, y1q, 6);
      var xMarks = "";
      data.forEach(function(d, i){
        var m = d.q.match(/^(\d{4}) Q1$/);
        if (m && xLabelYears.indexOf(parseInt(m[1], 10)) !== -1){
          var xp = x(i, data.length);
          xMarks += vGrid(xp, yTop, yBot) +
            xLabel(xp.toFixed(1), m[1], H - AXIS.FOOT);
        }
      });
      appendSvgMarkup(svg, xMarks);

      var zeroY = y(0);
      var colW = colWidth(innerW / Math.max(1, data.length));
      data.forEach(function(d, i){
        var cx = x(i, data.length);
        svg.appendChild(el("path", {
          d: colPath(cx, zeroY, y(d.v), colW),
          "stroke-width": colW.toFixed(2),
          class: "hzn-col hcol" + (d.v < 0 ? " inv" : "")
        }));
      });

      var crosshair = el("line", { x1:0, x2:0, y1:padT, y2:H - padB, class:"hist-cross" });
      svg.appendChild(crosshair);
      var hoverDot = el("circle", { r:4.5, class:"curve-dot end", opacity:0 });
      svg.appendChild(hoverDot);
      var hit = el("rect", { x:padL, y:0, width:innerW, height:H, class:"hero-hit" });
      svg.appendChild(hit);
      var shell = byId("spread-history-shell");
      if (shell){
        shell.__geom = { vals:data, n:data.length, W:W, T:yTop, B:yBot,
                         L:x(0, data.length), R:x(data.length - 1, data.length),
                         at:function(d){ return qLabel(d.q); },
                         fmt:function(v){ return (v >= 0 ? "+" : "\u2212") + Math.abs(v).toFixed(2) + " pts"; },
                         refs:[{ label:"NBER recession", swatch:"var(--border-strong)" },
                               { label:"Normal",         swatch:"var(--good)" },
                               { label:"Inverted",       swatch:"var(--critical)" }] };
        histReadEnsure(shell);
        histLegend(shell);
        histReadFill(shell, null);
      }
      var onCol = null;
      function showAt(i){
        var d = data[i];
        var px = x(i,data.length);
        crosshair.setAttribute("x1", px); crosshair.setAttribute("x2", px); crosshair.setAttribute("opacity", 1);
        hoverDot.setAttribute("opacity", 0);
        svg.classList.add("hovering");
        if (onCol) onCol.classList.remove("on");
        onCol = svg.querySelectorAll(".hcol")[i];
        if (onCol) onCol.classList.add("on");
        if (shell) histReadFill(shell, d, i);
      }
      function hide(){
        crosshair.setAttribute("opacity", 0); hoverDot.setAttribute("opacity", 0);
        svg.classList.remove("hovering");
        if (onCol){ onCol.classList.remove("on"); onCol = null; }
        if (shell) histReadFill(shell, null);
      }
      attachHoverTracking(hit, svg, W, padL, innerW, data.length, showAt, hide);

      SPREAD_DETAIL = s.detail;
    }

    Object.keys(series).forEach(function(k){
      var sr = series[k];
      sr.detail = sr.detail.replace("</h4>", '</h4><p class="caption">' + sr.lede + "</p>");
    });

    document.querySelectorAll(".spread-toggle-btn").forEach(function(btn){
      btn.addEventListener("click", function(){
        document.querySelectorAll(".spread-toggle-btn").forEach(function(b){ b.classList.remove("active"); b.setAttribute("aria-selected","false"); });
        btn.classList.add("active"); btn.setAttribute("aria-selected","true");
        draw(btn.getAttribute("data-series"));
      });
    });

    drawSpreadWindow = draw;
    draw("3m");
  }
  GYN.step("renderSpreadHistory", renderSpreadHistory, "mixed"); renderSpreadHistory();

  // ---- RENDER: un-inversion-to-recession historical lag panel ----
  function deriveUninversionDetail(){

    var rowsHtml = '<div class="lag-rows"><div class="lag-row lag-row-head"><span>Cycle</span><span>Un-inverted</span><span>Recession began</span><span>Lag</span></div>' +
      uninvLagCycles.map(function(c){
        return '<div class="lag-row"><span>' + c.cycle + '</span><span>' + c.uninv + '</span><span>' + c.recession + '</span><span>' + c.lag + '</span></div>';
      }).join('') + '</div>';

    var detail = '<h4>Time from un-inversion to recession: the historical record</h4>' +
      '<p class="caption">Not a model and not a survey — this is what actually happened in each of the last four comparable U.S. cycles, read straight off the Federal Reserve’s own 10-year-minus-3-month spread series on FRED (daily closes and monthly averages) and dated against NBER’s official recession start months. Where the daily and monthly series disagree on the exact month, a range is shown: from the first month the monthly average turned positive to the month of the last negative daily close.</p>' +
      rowsHtml +
      '<p class="caption">Range: 1–10 months. Average and median: about 4–5 months.</p>' +
      '<p class="caption" style="margin-top:10px;">Today, the 3-month spread is ' + uninvLagToday.months + ' months past its December 2024 un-inversion (the first month the monthly average reached zero) — already twice the longest precedent above. Counted instead from when it settled durably positive without re-dipping negative (' + uninvLagToday.altFrom + '), that’s ' + uninvLagToday.altMonths + ' months — still beyond every precedent here. Four data points is a small sample, and it gets smaller still: the four U.S. recessions before 1989 (1969–70 through 1981–82) followed the opposite pattern — the recession started before the curve’s final un-inversion, sometimes by close to a year — a genuinely different regime, not folded into the average above. One further correction from the popular telling: September 1998 (Russia/LTCM) is often cited as an inversion with no recession, but the spread never actually went negative that month (+0.12 points) — so it isn’t really a counter-example. Treat all of this as a historical comparison, not a forecast.</p>' +
      srcBlock([
        {t:"NBER — US Business Cycle Expansions and Contractions", u:"https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions"},
        {t:"NY Fed — Yield Curve as a Leading Indicator, FAQ (PDF)", u:"https://www.newyorkfed.org/medialibrary/media/research/capital_markets/ycfaq.pdf"},
        {t:"FRED — 10Y minus 3M spread, daily (T10Y3M)", u:"https://fred.stlouisfed.org/series/T10Y3M"},
        {t:"FRED — 10Y minus 3M spread, monthly average (T10Y3MM)", u:"https://fred.stlouisfed.org/series/T10Y3MM"},
        {t:"Predicting Recessions Using the Yield Curve (Federal Reserve Bank of Boston)", u:"https://www.bostonfed.org/publications/current-policy-perspectives/2020/predicting-recessions-using-the-yield-curve.aspx"}
      ]);
    UNINV_DETAIL = detail;
    addSources([
      {t:"Predicting Recessions Using the Yield Curve (Federal Reserve Bank of Boston)", u:"https://www.bostonfed.org/publications/current-policy-perspectives/2020/predicting-recessions-using-the-yield-curve.aspx"}
    ]);
  }
  GYN.step("deriveUninversionDetail", deriveUninversionDetail, "derive"); deriveUninversionDetail();

  /* ---- RENDER: Horizon — the spread's own page ---- */
  function drawHznHead(){
    var H = HIST_HEAD["hzn-range"];
    H.mark  = sunriseSvg;
    H.title = spreadLabel(spreadPick) + " Treasury Spread";
    H.menu = function(){
      return [
        { key:"spreads", label:"Spreads", on:true, value:spreadLabel(spreadPick),
          rows:HZN_SPREADS.map(function(r){
            return headPickRow(spreadPick === r.key, "data-hzn-spread", r.key, r.label);
          }).join("") }
      ];
    };
    HIST_NOTE["hzn-range"] = horizonInfoHtml(spreadPick);
    put("hzn-head", histHead("hzn-range"));
  }
  function renderHorizonPage(){
    var host = byId("hzn-timeline"); if (!host) return;
    var HZN_STOPS = ["5y", "10y", "max"];
    var hznY0 = parseInt(t10y3mHistory[0].q.slice(0, 4), 10);
    function hznData(){ return spreadPick === "2y" ? t10y2yHistory : t10y3mHistory; }
    function drawHzn(){
      var data = hznData();
      var cyc = pageMode["hzn-range"] === "cycles" ? (cycleByName(pageCycles["hzn-range"]) || openCycle()) : null;
      if (cyc && cyc.from < hznY0) cyc = openCycle();
      var idx = cyc ? cycleQtrIdx(hznY0, cyc, data.length) : null;
      var from = idx ? idx[0] : qWindowFrom(data.length, pageRange["hzn-range"]);
      var to = idx ? idx[1] : data.length;
      host.innerHTML = histControls("hzn-range",
        { depth:Math.floor(data.length / 4), stops:HZN_STOPS }, hznY0);
      if (drawSpreadWindow) drawSpreadWindow(spreadPick, from, to);
      var tr = byId("hzn-trend");
      if (tr){
        var w = [];
        data.slice(from, to).forEach(function(d){ if (d.v != null) w.push(d.v); });
        tr.innerHTML = trendPill(trendOf(w, "points", "quarter"), null, true,
          { rising:"steepening", falling:"flattening" });
      }
      drawHznHead();
    }
    GYN.on("pickSpread", function(code){ spreadPick = code; drawHzn(); });
    sheetRenderers["hzn-range"] = drawHzn;
    sheetRenderers["sheet-sign-horizon"] = drawHzn;
    drawHzn();

    var r = horizonRead;
    var sgn = function(v){ return (v >= 0 ? "+" : "−") + Math.abs(v).toFixed(2); };
    var moved = function(v){ return (v >= 0 ? "risen " : "fallen ") + Math.abs(v).toFixed(2) + " points"; };
    var fromLong = r.dLong >= -r.dShort;
    var ins = byId("horizon-insights");
    if (ins){
      var cards = [];
      cards.push('<p class="hi-lede">A lender who wants more for ten years than for three months expects ' +
        'growth ahead; one who takes less expects the opposite, and pays to say so. This is the body’s ' +
        'forecast of its own next season — a mood, not a measurement taken off it.</p>');
      cards.push(hiCard(r.word, r.state,
        "The spread has " + (r.dSpread >= 0 ? "widened " : "narrowed ") + Math.abs(r.dSpread).toFixed(2) +
        " points over four quarters, from " + sgn(r.was) + " to " + sgn(r.q.v) + " — the 10-year " +
        (r.dLong >= 0 ? "up " : "down ") + Math.abs(r.dLong).toFixed(2) + ", the 3-month " +
        (r.dShort >= 0 ? "up " : "down ") + Math.abs(r.dShort).toFixed(2) + ". More of that came from the " +
        (fromLong ? "long end, which is growth being priced rather than relief about the Fed."
                  : "short end, which is a central bank cutting into a slowdown rather than confidence in growth.") +
        " Which end moved is the reading: on a chart the two look identical."));
      cards.push(hiCard("The short end", "",
        "Against the 2-year the curve averages " + sgn(r.q2.v) + "; against 3-month cash, " + sgn(r.q.v) +
        ". Both subtract from the same 10-year, so the difference is the short end alone — the 2-year " +
        "prices where the Fed is going, the bill only where it has been."));
      var facts =
        '<div class="aux-stat"><span>Time from un-inversion' + expandBtn(UNINV_DETAIL) + '</span><b>' +
          uninvLagToday.months + ' months</b></div>' +
        '<div class="aux-stat wordy"><span>Last inverted</span><b>Oct 2022 – Dec 2024</b></div>' +
        '<div class="aux-stat wordy"><span>Deepest point</span><b>−1.89 pts · May 4, 2023</b></div>';
      ins.innerHTML = '<section class="highlights insights"><div class="hi-head">Insights</div>' +
        cards.join("") + facts + '</section>';
    }
  }
  GYN.step("renderHorizonPage", renderHorizonPage, "render"); renderHorizonPage();

  // ---- RENDER: Valuation (slow) ----
  function renderValuationTag(){
    var tagEl = byId("valuation-tag");
    tagEl.className = "tag " + valuation.tag.state + " longcycle-tag";
    tagEl.textContent = valuation.tag.text;
    valuationPanelHtml = valuation.rows.map(function(row){
      var detail = '<h4>' + row.marker + '</h4><div class="marker-sub">' + row.sub + '</div>' + factsFrom(row.note);
      return panelRow({ name:row.marker, info:row.key === "cape" ? detail : null, head:row.key === "cape" ? "sheet-metric-valuation" : null,
                        open:row.key === "buffett" ? { id:"sheet-metric-buffett", title:"Buffett indicator" } : null,
                        metric:row.flagValue,
                        flagged:meterFlagged(row.meter), bar:panelFromMeter(row.meter) });
    }).join("");
    addSources(valuation.src);
  }
  GYN.step("renderValuationTag", renderValuationTag, "render"); renderValuationTag();

  // ---- RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row ----
  function renderLongCycleTag(){
    var powerSub = "what the 3 markers below leave in reserve";
    var stressDetail = '<h4>Power supply</h4><div class="marker-sub">' + powerSub + '</div>' + factsFrom(stressNoteFull);
    powerPageNote = stressDetail;
    var stressRowHtml = panelRow({
      name:"Power supply", head:"sheet-metric-power",
      info:'<h4>Power supply</h4><div class="marker-sub">' + powerSub + '</div>' + stressDetail,
      metric:powerScore + "%", flagged:meterFlagged(powerMeter), bar:panelFromMeter(powerMeter) });
    var rowsHtml = labPanel.map(function(row){
      var detail = '<h4>' + row.marker + '</h4><div class="marker-sub">' + row.sub + '</div>' + factsFrom(row.note);
      return panelRow({ name:row.marker, info:row.opens ? null : detail, open:row.opens || null,
                        metric:row.flagValue, flagged:meterFlagged(row.meter),
                        bar:panelFromMeter(row.meter) });
    }).join("");
    powerPanelHtml = stressRowHtml + rowsHtml;
    var flaggedCount = labPanel.filter(function(r){ return !!r.flagState; }).length;
    byId("longcycle-tag").textContent = flaggedCount + " marker" + (flaggedCount === 1 ? "" : "s") + " flagged";
    addSources(longCycleSrc);
  }
  GYN.step("renderLongCycleTag", renderLongCycleTag, "render"); renderLongCycleTag();

  /* ---- RENDER: Hormones ---- */
  function renderHormones(){
    var host = byId("hormones-history"); if (!host || !fedFundsHistory.length) return;
    var HORM_STOPS = ["5y", "10y", "25y", "max"];
    var FF_Y0 = parseInt(fedFundsHistory[0].m.slice(0, 4), 10);
    function ffCycleMonths(c){
      var to = c.to || calendarTodayY, a = -1, b = -1;
      fedFundsHistory.forEach(function(d, i){
        var y = parseInt(d.m.slice(0, 4), 10);
        if (y >= c.from && y <= to){ if (a === -1) a = i; b = i + 1; }
      });
      return a === -1 ? null : [a, b];
    }
    function draw(){
      var bar = byId("hormones-history"); if (!bar) return;
      var id = "hormones-range";
      var cyc = pageMode[id] === "cycles" ? (cycleByName(pageCycles[id]) || openCycle()) : null;
      var span = cyc ? ffCycleMonths(cyc) : null;
      var from = span ? span[0] : mWindowFrom(fedFundsHistory.length, pageRange[id]);
      var to = span ? span[1] : undefined;
      var win = fedFundsHistory.slice(from, to);
      bar.innerHTML =
        histBar(histControls(id, { series:fedFundsHistory, stops:HORM_STOPS }, FF_Y0)) +
        '<div class="page-chart">' + histHead(id) +
        fedFundsHistoryChart(bar.clientWidth || 340, from, { to:to, cycle:!!span }) +
        histTip("hormones-hist-tooltip") +
        '<div id="hormones-trend"></div></div>';
      put("hormones-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"),
                                      null, true, { rising:"tightening", falling:"easing" }));
      var box = bar.querySelector(".page-chart");
      refitHistory(box, function(w){ return fedFundsHistoryChart(w, from, { to:to, cycle:!!span }); });
      attachHistory(box, "hormones-hist-tooltip", "fedFundsHistoryChart");
    }
    sheetRenderers["hormones-range"] = draw;
    sheetRenderers["sheet-sign-hormones"] = draw;
    draw();

    HIST_NOTE["hormones-range"] = '<h4>Effective federal funds rate</h4>' + factsFrom(
      "The rate banks actually charge each other overnight, averaged by month. It is the price the whole " +
      "yield curve is quoted against, which is why it reads first on this page and the Treasury levels below " +
      "read second. The FOMC does not set this number; it sets a TARGET RANGE and steers the rate into it, " +
      "so the two are different figures and the page says which is which: the range is the decision, the " +
      "chart is where money traded. Target " + fedFundsRange() + ", set " + fedFunds.asOf +
      (fedFunds.vote ? " on a " + fedFunds.vote + " vote" : "") + "; the effective rate ran at " +
      fedFundsHistory[fedFundsHistory.length - 1].v.toFixed(2) + "% through " +
      atMonth(fedFundsHistory[fedFundsHistory.length - 1]) + ", which is not a contradiction but a date " +
      "\u2014 that month ran partly under the previous target. " +
      "The record is " + fedFundsHistory.length + " months deep, from July 1954. Its peak is 19.10% in June " +
      "1981, under Volcker; its floor is 0.05% in April 2020, and 0.16% in December 2008. A chart that holds " +
      "both is the reason this one stands on zero rather than on its own minimum. " +
      "Source: Federal Reserve H.15 via FRED, series FEDFUNDS.")

    /* ---- Keren, V609: "can you put that into insights? The hormones page doesn't have an insight section. ---- */
    function ffPeaks(){
      var out = [], mode = "up", ext = fedFundsHistory[0];
      fedFundsHistory.forEach(function(d){
        if (mode === "up"){
          if (d.v >= ext.v) ext = d;
          else if (ext.v - d.v >= 1.5){ out.push(ext); mode = "down"; ext = d; }
        } else {
          if (d.v <= ext.v) ext = d;
          else if (d.v - ext.v >= 1.5){ mode = "up"; ext = d; }
        }
      });
      return out;
    }
    var pk = ffPeaks(), yOf = function(d){ return d.m.slice(0, 4); };
    var ins = byId("hormones-insights");
    if (ins && pk.length > 2){
      var last = pk[pk.length - 1], prev = pk[pk.length - 2];
      var top = pk.reduce(function(a, d){ return d.v > a.v ? d : a; });
      var run = 0;
      for (var i = pk.indexOf(top) + 1; i < pk.length; i++){ if (pk[i].v < pk[i - 1].v) run++; else break; }
      var cards = [];
      cards.push('<p class="hi-lede">Interest rates are the hormone: one signal, secreted on purpose, that the ' +
        'whole body then runs at the tempo of. Nothing on this page is measured off the economy \u2014 this is the ' +
        'instruction it was given.</p>');
      cards.push(hiCard("Two clocks", "",
        "The rate climbs through an expansion, peaks at the top and collapses at the turn, which is the CYCLE: " +
        pk.length + " peaks since " + yOf(pk[0]) + ". Underneath runs a second clock \u2014 from the " +
        top.v.toFixed(2) + "% of " + yOf(top) + ", " + run + " peaks in a row came in lower than the one before, " +
        "until " + yOf(last) + " broke the run at " + last.v.toFixed(2) + "% against " + prev.v.toFixed(2) + "%."));
      cards.push(hiCard("Rise, peak, withdraw", "",
        "That shape is progesterone\u2019s: it rises through the second half of a cycle, peaks, and then falls \u2014 " +
        "and it is the FALLING that starts the shedding, not the height. Read the chart for the withdrawal " +
        "rather than the level, because the cuts come after the top, never before it."));
      ins.innerHTML = '<section class="highlights insights"><div class="hi-head">Insights</div>' +
        cards.join("") + '<div id="policy-facts" class="aux-group">' + policyFactRows() + '</div></section>';
    }

    var dir = /^\+/.test(fedFunds.lastMove) ? "Tightening"
            : /^[-\u2212]/.test(fedFunds.lastMove) ? "Easing" : "On hold";
    var rowVal = put("subj-value-hormones", fedFundsRange() +
      '<span class="unit">Fed funds target</span><span class="tag norm">' + dir + '</span>');
    var rowSay = byId("subj-say-hormones");
    if (rowSay) rowSay.outerHTML = colPeek(fedFundsHistory.map(function(d){ return d.v; }),
                                           function(){ return "ff-col"; }, 0, true);
  }
  GYN.step("renderHormones", renderHormones, "build"); renderHormones();

  // ---- RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of ----
  function renderFearCurve(){
    HIST_NOTE["fear-range"] = curveDetailHtml();

    var FEAR_STOPS = ["5y", "10y", "max"];
    var FEAR_Y0 = fearCurveHistory.length ? parseInt(fearCurveHistory[0].m.slice(0, 4), 10) : 0;
    function drawFearHistory(){
      var host = byId("fear-history"); if (!host || !fearCurveHistory.length) return;
      var cyc = pageMode["fear-range"] === "cycles"
              ? (cycleByName(pageCycles["fear-range"]) || openCycle()) : null;
      if (cyc && cyc.from < FEAR_Y0) cyc = openCycle();
      var span = cyc ? cycleSlice(fearCurveHistory, cyc) : null;
      var vals = span ? fearCurveHistory.slice(span[0], span[1])
                      : timelineWindow(fearCurveHistory, pageRange["fear-range"]);
      if (!vals.length) vals = fearCurveHistory.slice(-12);
      var fit = trendOf(vals.map(function(d){ return d.v; }), "points", "month");
      var years = windowYears(parseInt(vals[0].m.slice(0, 4), 10),
                              parseInt(vals[vals.length - 1].m.slice(0, 4), 10), 5);
      function opts(){
        return { vals:vals, mid:1, midLabel:"flat, 1.00",
          fmt:function(v){ return v.toFixed(2); },
          tickFmt:function(v){ return v.toFixed(2); },
          at:atMonth,
          xLabel:function(d){
            var y = parseInt(d.m.slice(0, 4), 10);
            return (d.m.slice(5) === "01" && years.indexOf(y) !== -1) ? "\u2019" + String(y).slice(2) : "";
          },
          fit:fit.fit,
          alt:"The VIX curve against flat, monthly. Above 1.00 the near month costs more than the quarter, " +
              "which is an inverted curve."
        };
      }
      host.innerHTML =
        histBar(histControls("fear-range",
          { series:fearCurveHistory, stops:FEAR_STOPS }, FEAR_Y0)) +
        '<div class="page-chart">' + histHead("fear-range") +
        divergeChart(opts(), host.clientWidth || 340) +
        histTip("fear-hist-tooltip") +
        '<div id="fear-trend"></div></div>';
      var ft = byId("fear-trend");
      put("fear-trend", trendPill(fit, null, true, { rising:"inverting", falling:"steepening" }));
      var box = host.querySelector(".page-chart");
      refitHistory(box, function(w){ return divergeChart(opts(), w); });
      attachHistory(box, "fear-hist-tooltip", "divergeChart");
    }
    sheetRenderers["fear-range"] = drawFearHistory;
    sheetRenderers["sheet-sign-sentiment"] = drawFearHistory;
    drawFearHistory();

    var hl = byId("curve-highlights");
    if (hl){
      var m = vixRow.meter, lo = m.optimal.from, hiB = m.optimal.to, v = m.value;
      var where = v < lo ? "below its usual band" : v > hiB ? "above its usual band" : "inside its usual band";
      var fearLede = '<p class="hi-lede">Fear is the flinch, not the injury. The VIX prices the next month ' +
        'and the 3-month VIX the next quarter, so their ratio says whether the market is bracing for ' +
        'something now or for something later.</p>';
      var curveTxt = curveNow == null
        ? "No reading today \u2014 one of the two legs is missing, so the shape cannot be computed. The previous reading stands."
        : "The near month is priced at " + v.toFixed(2) + " against " + vix3mClose.toFixed(2) + " three months out, a ratio of " +
          curveNow.toFixed(2) + ". " + (curveNow >= 1
            ? "INVERTED: insuring the next month costs more than insuring the next quarter, which is what a market braced for something immediate looks like in prices — and inversions cluster near bottoms."
            : "That is the curve’s ordinary shape, the far month dearer than the near one; the further below 1.00, the less the market is paying to be wrong about the weeks just ahead.");
      var vixTxt = "At " + v.toFixed(2) + " the VIX sits " + where + " of " + lo + " to " + hiB +
        ", against a record low of " + m.min + " and a high of " + m.max + ". It is the slower of the two " +
        "gauges: credit usually cracks before equity volatility does.";
      hl.innerHTML = highlightsHtml([
        fearLede,
        hiCard("What the shape is saying", curveTag.state, curveTxt),
        hiCard("What is priced" + expandBtn(factsFrom(vixRow.note)), vixInd.tag.state, vixTxt)]);
    }
    addSources(sentiment.src);
  }
  GYN.step("renderFearCurve", renderFearCurve, "build"); renderFearCurve();

  // ---- RENDER: Analysis subjects — one headline figure per collapsible section ----
  function renderSubjectRows(){
    function ring(key, pct, state){
      put("subj-ring-" + key, vitalRingSvg(pct, state));
    }
    function dot(key, state){
      put("subj-ring-" + key, '<div class="subject-dot"><span class="dot ' + state + '"></span></div>');
    }
    function iconMark(key, state, svg){
      put("subj-ring-" + key, '<div class="subject-icon"><span class="' + state + '">' + svg + '</span></div>');
    }
    function spark(key, html){ put("subj-spark-" + key, html || ""); }
    function say(key, text){ var el = byId("subj-say-" + key); if (el) el.textContent = text || ""; }
    function set(key, valueHtml, contextHtml){
      put("subj-value-" + key, valueHtml);
      var c = byIdMaybe("subj-ctx-" + key); if (c) c.innerHTML = contextHtml || "";
    }
    function worst(states){
      var order = ["good","warning","serious","critical"];
      return states.reduce(function(w, st){ return order.indexOf(st) > order.indexOf(w) ? st : w; }, "good");
    }

    iconMark("resilience", powerWord.state, boltSvg());
    set("resilience", powerScore + '<span class="unit">%</span><span class="tag ' + powerWord.state + '">' + powerWord.word + '</span>', "");
    say("resilience", longCycleImpressionShort);

    var cycGrowth = eraGrowth(currentEra), cycYears = cycGrowth.years;
    iconMark("gdp", regimeState(nowModel.reading.regime), sproutSvg());
    set("gdp", fmtSigned(cycGrowth.total, 0) + '<span class="unit">% · cycle total growth</span>', "");
    say("gdp", "Compounded over " + cycYears.length + " closed years of the " + currentEra.name + ", and the latest quarter is still " +
      (nowModel.reading.regime === "expansion" ? "expanding" : "contracting") + ".");
    spark("gdp", sparkHtml(lastN(gdpQuarterlyYoY, 16, "v"), "yearly rate \u00b7 4 years", regimeState(nowModel.reading.regime)));

    var hzLabel = document.querySelector('[data-subject="horizon"] .subject-label');
    put(hzLabel, '<span class="peek-mark">' + sunriseSvg() + '</span>Horizon' + CHEV);
    set("horizon", (horizonRead.spread >= 0 ? "+" : "\u2212") + Math.abs(horizonRead.spread).toFixed(2) +
      '<span class="unit">pts \u00b7 10Y \u2212 3M</span>' +
      '<span class="tag ' + horizonRead.state + '">' + horizonRead.word + '</span>', "");
    say("horizon", "");
    (function(){
      var slot = put("subj-spark-horizon", colPeek(
        t10y3mHistory.map(function(d){ return d.v; }).filter(function(v){ return v != null; }),
        function(v){ return "hzn-col " + (v < 0 ? "neg" : "pos"); }, 0, true));
    })();

    put("subj-ring-sentiment", vitalRingSvg(curvePct(curveNow), "accent", curveNow == null ? "Fear curve: no reading"
        : "Fear curve at " + curveNow.toFixed(2) + ", where 1.00 is flat"));
    (function(){
      var lab = document.querySelector('[data-subject="sentiment"] .subject-label');
      put(lab, '<span class="peek-mark mood-mark">' + umbrellaSvg() +
        '</span>Fear');
    })();
    set("sentiment", (curveNow == null ? "\u2014" : curveNow.toFixed(2)) +
      '<span class="unit">VIX \u00f7 3M</span><span class="tag ' + curveTag.state + '">' + curveTag.text + '</span>', "");
    say("sentiment", "");
    spark("sentiment", "");

    iconMark("valuation", worst(valuation.rows.map(function(r){ return r.flagState || "good"; })), diamondSvg());
    set("valuation", valRow("cape").flagValue + '<span class="unit">CAPE</span><span class="tag ' + valuation.tag.state + '">' + valuation.tag.text + '</span>', "");
    say("valuation", valuation.shortImpression);

  }
  GYN.step("renderSubjectRows", renderSubjectRows, "build"); renderSubjectRows();

  // ---- Per-cycle growth helpers (the cycle view and the Calendar list both use them) ----
  function totalRiseIn(vals){
    var years = [], rates = [];
    vals.forEach(function(d){
      var y = parseInt(d.m.slice(0, 4), 10);
      if (y !== calendarTodayY && d.m.slice(5) === "12"){ years.push(y); rates.push(d.v); }
    });
    if (!years.length) return null;
    var factor = rates.reduce(function(f, g){ return f * (1 + g / 100); }, 1);
    return { years:years, total:(factor - 1) * 100 };
  }
  function eraInflation(cyc){
    var years = [], rates = [];
    for (var y = cyc.from; y <= (cyc.to || calendarTodayY); y++){
      if (y === calendarTodayY) continue;
      var dec = cpiYoYHistory.filter(function(d){ return d.m === y + "-12"; })[0];
      if (dec){ years.push(y); rates.push(dec.v); }
    }
    var factor = rates.reduce(function(f, g){ return f * (1 + g / 100); }, 1);
    return { years:years, rates:rates, total:(factor - 1) * 100 };
  }

  function eraGrowth(cyc){
    var years = [];
    for (var y = cyc.from; y <= (cyc.to || calendarTodayY); y++){
      if (y !== calendarTodayY && usRealGdpGrowth[y] !== undefined) years.push(y);
    }
    var rates = years.map(function(y){ return usRealGdpGrowth[y]; });
    var growthFactor = rates.reduce(function(f, g){ return f * (1 + g / 100); }, 1);
    var n = rates.length;
    var cagr = n ? (Math.pow(growthFactor, 1 / n) - 1) * 100 : 0;
    var xs = rates.map(function(_, i){ return i; }), mx = (n - 1) / 2, my = rates.reduce(function(a, b){ return a + b; }, 0) / (n || 1);
    var num = 0, den = 0;
    xs.forEach(function(x, i){ num += (x - mx) * (rates[i] - my); den += (x - mx) * (x - mx); });
    var slope = den ? num / den : 0;
    var trend = slope > 0.1 ? "rising" : slope < -0.1 ? "falling" : "flat";
    return { years: years, rates: rates, cagr: cagr, total: (growthFactor - 1) * 100, slope: slope, trend: trend, avg: my };
  }
  function fmtSigned(v, dp){ return (v >= 0 ? "+" : "\u2212") + Math.abs(v).toFixed(dp); }
  function regimeArrow(regime){ return regime === "contraction" ? "\u2193 " : "\u2191 "; }
  var GROWTH_SHOWN = { expansion:"expanding", contraction:"contracting", steady:"steady" };
  function growthShown(reg){ return GROWTH_SHOWN[reg] || reg; }
  function growthShownCap(reg){ var w = growthShown(reg); return w.charAt(0).toUpperCase() + w.slice(1); }
  function regimeState(regime){ return regime === "contraction" ? "warning" : "good"; }
  function phaseClass(regime){ return regime === "contraction" ? "phase-down" : "phase-up"; }
  function eraMarketTotal(cyc){
    var endY = cyc.ongoing ? calendarTodayY : cyc.to, level = 1, any = false;
    for (var y = cyc.from; y <= endY; y++) if (sp500AnnualReturns[y] != null){ level *= 1 + sp500AnnualReturns[y] / 100; any = true; }
    return any ? (level - 1) * 100 : null;
  }
  var cycleViewEl = byId("cycle-view");
  var tempCard = byId("temp-card"), growthCard = byId("growth-card");
  function placeCharts(){
    byId("slot-temp").appendChild(tempCard);
    byId("slot-growth").appendChild(growthCard);
  }
  placeCharts();
  var shownEra = null;
  var calendarReset = null;
  var metricPageReset = null;
  var openIndicatorsPage = null;
  var topbarBack = null;
  function setTopbar(title, onBack){
    byId("topbar-title").textContent = title;
    topbarBack = onBack || null;
    byId("topbar-back").hidden = !onBack;
  }
  byId("topbar-back").addEventListener("click", function(){ if (topbarBack) topbarBack(); });
