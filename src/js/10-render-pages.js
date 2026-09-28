
  // ---------------- RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y ----------------
  function renderSpreadHistory(){
    var svg = document.getElementById("spread-history-svg");
    // Version 496: recomputed per draw from the host's width (see draw). A fixed 780-unit viewBox scaled to
    // a phone made this the smallest chart in the app, with labels shrunk by the same factor.
    var W = 780, H = 220, padL = AXIS.L, padR = AXIS.R, padT = AXIS.T + AXIS.LEG + AXIS.READ, padB = 30;   // +LEG: the legend strip at the head of the frame, as every other history has (V571)
    var innerW = W - padL - padR, innerH = H - padT - padB;
    var minV = -2, maxV = 4;
    var el = svgEl;
    var tooltip = document.getElementById("spread-history-tooltip");

    var series = {
      "3m": {
        title: "10-Year minus 3-Month spread since 2005",
        lede: "Every U.S. recession since the late 1960s has followed an inversion of this spread — the Fed's own preferred near-term recession gauge. History says the recession tends to start only after the curve un-inverts, not while it's still inverted.",
        data: t10y3mHistory,
        detail: '<h4>10-Year minus 3-Month spread, 2005–2026</h4>' +
          '<p class="caption">Quarterly averages, not daily — so a very brief inversion (like the single-day dip on Mar 22, 2019) can be smoothed away. The point is each cycle’s shape, not every daily wiggle. Gray bands are NBER-dated recessions.</p>' +
          '<p class="caption" style="margin-top:10px;">One episode often described as a false alarm, September 1998 (the Russia default/LTCM crisis), is a closer call than that: the spread came down to +0.12 points but never actually crossed zero, so it isn’t a true exception — the popular “1998 near-miss” story more likely refers to other spreads or to credit markets, not this one. The current cycle inverted in October 2022 — the deepest (−1.89 points on May 4, 2023) and longest in the daily series’ record, which starts in 1982 — and un-inverted in a choppy transition: the monthly average first reached zero in December 2024, dipped negative again in March–April and June–August 2025, and has held positive since September 2025 (the last negative daily close was October 16, 2025). See “Time from un-inversion to recession, historically” below for what past cycles suggest happens next.</p>' +
          '<div class="src">' + srcHtml([
            {t:"FRED — 10Y minus 3M spread", u:"https://fred.stlouisfed.org/series/T10Y3M"},
            {t:"FRED — 10-Year Treasury Rate (GS10)", u:"https://fred.stlouisfed.org/series/GS10"},
            {t:"FRED — 3-Month Treasury Bill Rate (TB3MS)", u:"https://fred.stlouisfed.org/series/TB3MS"},
            {t:"NBER — US Business Cycle Expansions and Contractions", u:"https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions"},
            {t:"NY Fed — Yield Curve as a Leading Indicator, FAQ (PDF)", u:"https://www.newyorkfed.org/medialibrary/media/research/capital_markets/ycfaq.pdf"}
          ]) + '</div>',
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
          '<div class="src">' + srcHtml([
            {t:"FRED — 10Y minus 2Y spread", u:"https://fred.stlouisfed.org/series/T10Y2Y"},
            {t:"FRED — 10-Year Treasury Rate (GS10)", u:"https://fred.stlouisfed.org/series/GS10"},
            {t:"FRED — 2-Year Treasury Rate (GS2)", u:"https://fred.stlouisfed.org/series/GS2"},
            {t:"NBER — US Business Cycle Expansions and Contractions", u:"https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions"},
            // V493: the reading's note cites this model on both spreads now that the two (i)s are merged, so
            // the source has to be reachable from both — it was on the 3M list only.
            {t:"NY Fed — Yield Curve as a Leading Indicator, FAQ (PDF)", u:"https://www.newyorkfed.org/medialibrary/media/research/capital_markets/ycfaq.pdf"}
          ]) + '</div>',
        sources: [
          {t:"FRED — 10Y minus 2Y spread", u:"https://fred.stlouisfed.org/series/T10Y2Y"},
          {t:"FRED — 2-Year Treasury Rate (GS2)", u:"https://fred.stlouisfed.org/series/GS2"}
        ]
      }
    };
    // Both series' sources are listed on the "view all sources" page regardless of which is toggled on-screen.
    addSources(series["3m"].sources); addSources(series["2y"].sources);

    function qIndex(data, q){ for (var i=0;i<data.length;i++){ if (data[i].q === q) return i; } return -1; }
    // V569: half a slot in at each end, the Version 567 rule — the last column was landing 1.5px from the
    // frame's right edge where every other history clears it by four to fourteen
    function x(i, n){ var h = innerW / (2 * Math.max(1, n)); return padL + h + (innerW - 2 * h) * i / (n - 1); }
    function y(v){ return padT + innerH - ((v - minV) / (maxV - minV)) * innerH; }

    /* Version 472: the spread windows. Everything in here is indexed against `data` and its length \u2014 the
       recession bands through qIndex, the x labels, both area fills, the line and the un-inversion marker \u2014 so
       handing it a SLICE is all the windowing it needs, and the two lookups that can now fall outside the view
       return -1 and are skipped rather than drawn at a nonsense x. */
    function draw(key, from, to){
      var s = series[key];
      var data = s.data;
      if (from != null) data = data.slice(from, to == null ? undefined : to);
      if (data.length < 2) data = s.data;
      // Version 496: measure first, like every other history (the V303 rule this chart never followed)
      var shell = svg.parentNode;
      W = Math.max(270, Math.round((shell && shell.clientWidth) || 360));
      H = W < 430 ? 268 : 300;
      innerW = W - padL - padR; innerH = H - padT - padB;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      svg.innerHTML = "";

      // Recession bands first, behind everything else — the same NBER dates regardless of which spread is shown
      t10y3mRecessions.forEach(function(r){
        var i0 = qIndex(data, r.from), i1 = qIndex(data, r.to);
        if (i0 < 0 || i1 < 0) return;   // a recession outside the window is not drawn at the edge of it
        svg.appendChild(el("rect", { x:x(i0,data.length), y:padT, width: Math.max(2, x(i1,data.length) - x(i0,data.length)), height: innerH, class:"spread-history-band" }));
      });

      /* Version 522, Keren: "every other history container has this square boxed-in grid, like in the Apple
         Health app, and Horizon looks different \u2014 unify the design." It did look different, and for a reason
         worth naming: this chart draws node by node while the other nine build a string, so when Version 442
         gave the app one frame and one vertical rule (`chartAxes`, `vGrid`) this was the chart that could not
         call them. It calls them now, through `appendSvgMarkup`. What arrives with them is the whole shared
         look: the frame rect, dashed rows at `--grid`, mono y labels ENDING at the plot's left edge rather
         than starting at the svg's, and a dashed vertical rule under every year label.
         The zero line stays its own heavier solid rule, and keeps its dashed row suppressed (`noGridAt`),
         because a dashed rule under a solid one reads as two \u2014 the same reason the deficit chart passes it. */
      var yTop = padT, yBot = padT + innerH, xR = W - padR;
      appendSvgMarkup(svg, chartAxes({
        x0:padL, x1:xR, top:(yTop - AXIS.LEG - AXIS.READ), bot:yBot, y:y, noGridAt:0,
        ticks:[-2, -1, 0, 1, 2, 3, 4],
        fmt:function(v){ return (v > 0 ? "+" : v < 0 ? "\u2212" : "") + Math.abs(v) + "%"; }
      }));
      // V571: across the FRAME, so the 0% in the rail has its rule like every other number there
      svg.appendChild(el("line", { x1:padL - AXIS.L, x2:xR + AXIS.R, y1:y(0), y2:y(0), class:"spread-history-zero" }));

      // X labels: Q1 of every third year or so, the years following the window (Version 472), each with the
      // app's own vertical rule under it (Version 442) \u2014 which is the other half of what made this grid look
      // unlike the rest: horizontal rows, and nothing crossing them.
      var y0q = parseInt(data[0].q.slice(0, 4), 10), y1q = parseInt(data[data.length - 1].q.slice(0, 4), 10);
      var xLabelYears = windowYears(y0q, y1q, 6);
      var xMarks = "";
      data.forEach(function(d, i){
        var m = d.q.match(/^(\d{4}) Q1$/);
        if (m && xLabelYears.indexOf(parseInt(m[1], 10)) !== -1){
          var xp = x(i, data.length);
          xMarks += vGrid(xp, yTop, yBot) +
            '<text class="bt-xl" x="' + xp.toFixed(1) + '" y="' + (H - AXIS.FOOT) + '" text-anchor="middle">' +
            m[1] + '</text>';
        }
      });
      appendSvgMarkup(svg, xMarks);

      /* Version 496, Keren: "I prefer bars, because you can colour the bars and have more meaning in the
         colour." Here that is not only consistency — the whole reading of this series is which side of zero a
         quarter falls on, and a column standing out of the zero line says that in its length and its colour at
         once. The area fill said it too, but a fill has no per-quarter unit: nothing to hover, nothing to light
         up, and nothing to carry the `.hcol` class every other history's hover depends on. */
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

      /* Version 570: the un-inversion marker is gone entirely. Version 569 kept the line and moved its label
         to the legend; Keren: "the colour already shows that the graph goes from inverted to normal, so I
         don't need it again." She is right — the quarter the columns change colour IS the un-inversion, drawn
         by the data rather than annotated on top of it, and a rule through the plot saying the same thing was
         the last of the duplicate furniture this component has been shedding since Version 556. */

      // Hover crosshair + tooltip (same idiom as the yield-curve chart above) — rebuilt fresh each draw, so no
      // stale listeners survive a toggle switch (svg.innerHTML = "" above already detached the old hit rect).
      // V569: .hist-cross, not this chart's own .crosshair — one class, so the resting reading's thread and
      // the hovered one look the same here as on every other history, and the stylesheet owns both weights
      var crosshair = el("line", { x1:0, x2:0, y1:padT, y2:H - padB, class:"hist-cross" });
      svg.appendChild(crosshair);
      var hoverDot = el("circle", { r:4.5, class:"curve-dot end", opacity:0 });
      svg.appendChild(hoverDot);
      var hit = el("rect", { x:padL, y:0, width:innerW, height:H, class:"hero-hit" });
      svg.appendChild(hit);
      /* Version 495: this chart writes the shared readout above it like every other history. It never used
         `wireHistHover` — it tracks its own pointer because its x-scale is its own — so it carries its own
         geometry object in the shape that readout expects, and the floating tooltip goes the way the others
         went. */
      var shell = document.getElementById("spread-history-shell");
      if (shell){
        /* V569: the geometry the shared readout and legend need. This chart tracks its own pointer, so it
           handed over only `vals` — which left the plate with no column to sit over (it fell to the left edge,
           outside the frame, where Keren found it) and left the legend with nothing to measure. The numbers
           are the ones the chart just drew with, so the plate rides the same columns the hover lights. */
        shell.__geom = { vals:data, n:data.length, W:W, T:yTop, B:yBot,
                         L:x(0, data.length), R:x(data.length - 1, data.length),
                         at:function(d){ return qLabel(d.q); },
                         fmt:function(v){ return (v >= 0 ? "+" : "\u2212") + Math.abs(v).toFixed(2) + " pts"; },
                         /* V570: the colour key moves up here from its own row under the chart. It is the
                            same three entries, in the same colours, in the place every other history keeps
                            its key — which is both consistent and a row of the page's height given back. */
                         refs:[{ label:"NBER recession", swatch:"var(--border-strong)" },
                               { label:"Normal",         swatch:"var(--good)" },
                               { label:"Inverted",       swatch:"var(--critical)" }] };
        histReadEnsure(shell);
        histLegend(shell);
        histReadFill(shell, null);
      }
      /* Version 496: with columns, the hover is the one every other history uses — the plot dims and the
         column under the pointer keeps its full colour (the V383 rule), which a dot riding a line could not do
         because there is no longer a line to ride. */
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

      SPREAD_DETAIL = s.detail;   // V470: the band's title offers it; this chart no longer has a head of its own
    }

    // the lede opens the note it introduces — spliced in, so the sentence exists once in the source
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

    drawSpreadWindow = draw;   // V472: the band drives it, so the window and the series both live outside
    draw("3m");
  }
  GYN.step("renderSpreadHistory", renderSpreadHistory, "mixed"); renderSpreadHistory();

  // ---------------- RENDER: un-inversion-to-recession historical lag panel ----------------
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
      '<div class="src">' + srcHtml([
        {t:"NBER — US Business Cycle Expansions and Contractions", u:"https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions"},
        {t:"NY Fed — Yield Curve as a Leading Indicator, FAQ (PDF)", u:"https://www.newyorkfed.org/medialibrary/media/research/capital_markets/ycfaq.pdf"},
        {t:"FRED — 10Y minus 3M spread, daily (T10Y3M)", u:"https://fred.stlouisfed.org/series/T10Y3M"},
        {t:"FRED — 10Y minus 3M spread, monthly average (T10Y3MM)", u:"https://fred.stlouisfed.org/series/T10Y3MM"},
        {t:"Predicting Recessions Using the Yield Curve (Federal Reserve Bank of Boston)", u:"https://www.bostonfed.org/publications/current-policy-perspectives/2020/predicting-recessions-using-the-yield-curve.aspx"}
      ]) + '</div>';
    /* Version 471, Keren: "instead of Insights and Highlights, just put time from un-inversion above Fed funds
       target \u2014 inside the lines, with how long it has been on the right, and the (i) for the table." Version 470
       gave this a paragraph in an Insights card and a second section above the facts; she is right that it did not
       need either. It is a fact with a figure, which is the row `.aux-stat` already is, and the argument behind it
       \u2014 four cycles, one to ten months, what today's count is measured from \u2014 was always in the (i). The page ends
       on one list of five facts and no prose at all. */
    UNINV_DETAIL = detail;
    addSources([
      {t:"Predicting Recessions Using the Yield Curve (Federal Reserve Bank of Boston)", u:"https://www.bostonfed.org/publications/current-policy-perspectives/2020/predicting-recessions-using-the-yield-curve.aspx"}
    ]);
  }
  GYN.step("deriveUninversionDetail", deriveUninversionDetail, "derive"); deriveUninversionDetail();

  /* ---------------- RENDER: Horizon — the spread's own page (Version 473) ----------------
     Everything drawn here was on the Pressure page until this version and is MOVED, not rebuilt (the Version 314
     rule, for the fifth time): the same svg, the same tooltip, the same `drawSpreadWindow` closure the chart
     installed, the same un-inversion (i). What is new is the order of the two controls — the window first, then
     which spread — and the reason for the verdict, which is the part a relocated chart could not bring with it.
     This runs AFTER the lag panel, because the first thing its Highlights ask for is `UNINV_DETAIL`. */
  function renderHorizonPage(){
    var host = document.getElementById("hzn-timeline"); if (!host) return;
    var HZN_STOPS = ["5y", "10y", "max"];   // the V263 rule: 25Y is unanswerable on a series that starts in 2005
    var hznY0 = parseInt(t10y3mHistory[0].q.slice(0, 4), 10);
    function hznData(){ return spreadPick === "2y" ? t10y2yHistory : t10y3mHistory; }
    function drawHzn(){
      var data = hznData();
      var cyc = pageMode["hzn-range"] === "cycles" ? (cycleByName(pageCycles["hzn-range"]) || openCycle()) : null;
      if (cyc && cyc.from < hznY0) cyc = openCycle();
      var idx = cyc ? cycleQtrIdx(hznY0, cyc, data.length) : null;
      var from = idx ? idx[0] : qWindowFrom(data.length, pageRange["hzn-range"]);
      var to = idx ? idx[1] : data.length;
      /* V598: ONE control row for the page, written whichever reading is on — the levels and the spread are
         two readings of one series of quarters, so a second ruler would be the collision V473 named. The head
         is written by drawTreasuryHead after this returns, because it names whichever reading is showing. */
      host.innerHTML = histControls("hzn-range",
        { depth:Math.floor(data.length / 4), stops:HZN_STOPS }, hznY0);
      if (drawSpreadWindow) drawSpreadWindow(spreadPick, from, to);
      var tr = document.getElementById("hzn-trend");
      if (tr){
        var w = [];
        data.slice(from, to).forEach(function(d){ if (d.v != null) w.push(d.v); });
        // Version 431's pairing rule: the two words of a trend have to be two ends of ONE pair. A curve steepens
        // and flattens; it does not steepen and slow.
        tr.innerHTML = trendPill(trendOf(w, "points", "quarter"), null, true,
          { rising:"steepening", falling:"flattening" });
      }
      var hp = document.getElementById("hzn-panel");
      // V492: the row follows the picker, because on this page the control chooses WHICH spread is being read
      if (hp) hp.innerHTML = horizonPanelHtml(spreadPick);
      // V493: the title and its (i) are gone — the reading below carries both now.
    }
    /* V598: both pickers go through the page's one renderer, which lives in 09-render-core beside the levels
       chart. This half is published under its own key and looked up there at call time — the V596 seam. */
    window.__pickSpread = function(code){
      spreadPick = code; tsyView = "spread";
      if (window.__treasuryView) window.__treasuryView(); else drawHzn();
    };
    sheetRenderers["hzn-spread"] = drawHzn;
    drawHzn();

    var r = horizonRead;
    var sgn = function(v){ return (v >= 0 ? "+" : "−") + Math.abs(v).toFixed(2); };
    var moved = function(v){ return (v >= 0 ? "risen " : "fallen ") + Math.abs(v).toFixed(2) + " points"; };
    var fromLong = r.dLong >= -r.dShort;
    var ins = document.getElementById("horizon-insights");
    if (ins){
      var cards = [];
      cards.push('<p class="hi-lede">A slope is not a measurement, it is a forecast. A lender who wants more for ' +
        'ten years than for three months expects growth and inflation ahead; one who will take LESS for the longer ' +
        'loan expects the opposite, and has said so by accepting a worse price for waiting. That is the whole reason ' +
        'this reading sits in Mood: the two rates themselves are the pressure, measured, and the gap between them is ' +
        'what the market thinks of what comes next.</p>');
      cards.push(hiCard(r.word, r.state,
        "Over four quarters the spread has " + (r.dSpread >= 0 ? "widened " : "narrowed ") +
        Math.abs(r.dSpread).toFixed(2) + " points, from " + sgn(r.was) + " to " + sgn(r.q.v) + ". The 10-year has " +
        moved(r.dLong) + " and the 3-month has " + moved(r.dShort) + ", so more of the move comes from the " +
        (fromLong ? "LONG end than from the short" : "SHORT end than from the long") + " — " + (fromLong
          ? "the market pricing growth and inflation ahead, which is optimism about the economy rather than relief " +
            "about the Fed."
          : "a central bank cutting into a slowdown, which is hope for rescue rather than confidence in growth.") +
        " The distinction is the whole reading: on a chart the two look identical, and in 2008 and in 2021 they meant " +
        "opposite things. So the word comes from which end moved, never from the slope alone."));
      cards.push(hiCard("The two horizons", "",
        "The two spreads on this page are pulling apart \u2014 measured on quarterly averages, so a touch behind the reading above. Against 3-month cash the curve averaged " + sgn(r.q.v) +
        ", " + (r.dSpread >= 0 ? "wider" : "narrower") + " by " + Math.abs(r.dSpread).toFixed(2) +
        " points over the year; against the 2-year it averaged " + sgn(r.q2.v) + ", " +
        (r.d2 >= 0 ? "wider" : "narrower") + " by " + Math.abs(r.d2).toFixed(2) +
        ". Both subtract from the same 10-year, so the whole difference is at the short end: the 2-year prices " +
        "where the Fed is going, the 3-month bill only where it has already been. A curve can be steepening " +
        "against cash and flattening against the near future at the same time, which is worth knowing when a " +
        "headline says “the curve” and names neither."));
      ins.innerHTML = '<section class="highlights insights"><div class="hi-head">Insights</div>' +
        cards.join("") + '</section>';
    }
    /* The un-inversion clock comes with the spread. Version 471 put it above Fed funds target at Keren's ask,
       when both were on one page; it is a fact about the SHAPE of the curve, so it travels with the shape, and
       the (i) it opens — four cycles, one to ten months, what today's count is measured from — travels with it. */
    var hi = document.getElementById("horizon-highlights");
    if (hi) hi.innerHTML = '<section class="highlights">' +
      '<div class="aux-stat"><span>Time from un-inversion' + expandBtn(UNINV_DETAIL) + '</span><b>' +
        uninvLagToday.months + ' months</b></div>' +
      '<div class="aux-stat wordy"><span>Last inverted</span><b>Oct 2022 – Dec 2024</b></div>' +
      '<div class="aux-stat wordy"><span>Deepest point</span><b>−1.89 pts · May 4, 2023</b></div>' +
      '</section>';
  }
  GYN.step("renderHorizonPage", renderHorizonPage, "render"); renderHorizonPage();

  // ---------------- RENDER: Valuation (slow) — split off Sentiment in Version 231 ----------------
  function renderValuationTag(){
    var tagEl = document.getElementById("valuation-tag");
    tagEl.className = "tag " + valuation.tag.state + " longcycle-tag";
    tagEl.textContent = valuation.tag.text;
    // V491: built ONCE here rather than per draw — the renderer places the finished string, because
    // `panelRow` pushes into `detailTexts` and a per-draw build would grow that array on every window change.
    valuationPanelHtml = valuation.rows.map(function(row){
      var detail = '<h4>' + row.marker + '</h4><div class="marker-sub">' + row.sub + '</div>' + factsFrom(row.note);
      // V518: the chart on this page draws CAPE, so CAPE's note is the page's and travels to the head's ⋯;
      // the Buffett Indicator is a second reading in the stack and keeps its own (i).
      return panelRow({ name:row.marker, info:detail, head:row.key === "cape" ? "sheet-metric-valuation" : null,
                        metric:row.flagValue,
                        flagged:meterFlagged(row.meter), bar:panelFromMeter(row.meter) });
    }).join("");
    addSources(valuation.src);
  }
  GYN.step("renderValuationTag", renderValuationTag, "render"); renderValuationTag();

  // ---------------- RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row ----------------
  // Each row shows its full reference-range bar inline (marker, meter, flag); the (i) button next to the marker
  // name opens the fuller written note in the shared detail modal — text only there, since the bar is already visible.
  function renderLongCycleTag(){
    var powerSub = "what the 3 markers below leave in reserve";
    var stressDetail = '<h4>Power supply</h4><div class="marker-sub">' + powerSub + '</div>' + factsFrom(stressNoteFull);
    powerPageNote = stressDetail;   // the Economic power page's own long form, read by its Highlights (Version 287)
    var stressRowHtml = panelRow({
      name:"Power supply", head:"sheet-metric-power",
      info:'<h4>Power supply</h4><div class="marker-sub">' + powerSub + '</div>' + stressDetail,
      metric:powerScore + "%", flagged:meterFlagged(powerMeter), bar:panelFromMeter(powerMeter) });
    var rowsHtml = labPanel.map(function(row){
      // the sub line and the short note go into the (i) with the rest — on a row this tight they were the
      // third and fourth things competing for a column that holds a name and a figure
      var detail = '<h4>' + row.marker + '</h4><div class="marker-sub">' + row.sub + '</div>' + factsFrom(row.note);
      return panelRow({ name:row.marker, info:row.opens ? null : detail, open:row.opens || null,
                        metric:row.flagValue, flagged:meterFlagged(row.meter),
                        bar:panelFromMeter(row.meter) });
    }).join("");
    powerPanelHtml = stressRowHtml + rowsHtml;   // V491: placed by the renderer, inside the history container
    var flaggedCount = labPanel.filter(function(r){ return !!r.flagState; }).length;
    document.getElementById("longcycle-tag").textContent = flaggedCount + " marker" + (flaggedCount === 1 ? "" : "s") + " flagged";
    addSources(longCycleSrc);
  }
  GYN.step("renderLongCycleTag", renderLongCycleTag, "render"); renderLongCycleTag();

  /* ---------------- RENDER: Hormones (V592) ----------------
     Keren: "let's add a fourth category in circulation called hormones. And hormones will be interest rates."
     The anatomy is the argument. A hormone is a chemical MESSENGER: it is secreted deliberately, it reaches
     everything downstream, and the whole cycle runs at the tempo it sets. That is the policy rate exactly \u2014
     and it is the distinction this app was missing, because Pressure measures what the market CHARGES (the
     Treasury curve) and nothing measured what the Fed SETS.
     Two figures live here and they are not the same thing, so the page is careful to say which is which: the
     TARGET RANGE is the decision, and the chart plots the EFFECTIVE rate, which is where money actually
     traded. They differ right now \u2014 3.75\u20134.00% set on Sep 16 against 3.63% effective through August \u2014 and
     that is not a contradiction but a date: August ran under the previous target. This is the V294 rule, the
     one Keren caught on Pressure ("you write 10-year 4.94 and I see inside the container 10-year 4.70"): two
     numbers for one thing is a fault, two numbers for two things has to be LABELLED. */
  function renderHormones(){
    var host = document.getElementById("hormones-history"); if (!host || !fedFundsHistory.length) return;
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
      var bar = document.getElementById("hormones-history"); if (!bar) return;
      var id = "hormones-range";
      var cyc = pageMode[id] === "cycles" ? (cycleByName(pageCycles[id]) || openCycle()) : null;
      var span = cyc ? ffCycleMonths(cyc) : null;
      var from = span ? span[0] : mWindowFrom(fedFundsHistory.length, pageRange[id]);
      var to = span ? span[1] : undefined;
      var win = fedFundsHistory.slice(from, to);
      bar.innerHTML =
        '<div class="hist-bar">' + histControls(id, { series:fedFundsHistory, stops:HORM_STOPS }, FF_Y0) + '</div>' +
        '<div class="page-chart">' + histHead(id) +
        fedFundsHistoryChart(bar.clientWidth || 340, from, { to:to, cycle:!!span }) +
        '<div class="gdp-tooltip mono hist-tip" id="hormones-hist-tooltip" hidden></div>' +
        '<div id="hormones-trend"></div></div>';
      var tr = document.getElementById("hormones-trend");
      // V431's pairing rule: two words of a trend are two ends of ONE pair. A rate tightens and eases.
      if (tr) tr.innerHTML = trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"),
                                       null, true, { rising:"tightening", falling:"easing" });
      // the refit first, the wiring second \u2014 the V591 lesson: refitHistory replaces the svg, legend and all
      var box = bar.querySelector(".page-chart");
      refitHistory(box, function(w){ return fedFundsHistoryChart(w, from, { to:to, cycle:!!span }); });
      if (box){ box.__geom = lastHistGeom; wireHistHover(box, "hormones-hist-tooltip"); }
    }
    sheetRenderers["hormones-range"] = draw;
    /* V598: one chart, so one opener again — the pair V596 composed in 09-render-core existed only while this
       page also held the Treasury curve, which has gone to Horizon. */
    sheetRenderers["sheet-sign-hormones"] = draw;
    draw();

    /* V596: the head's ⋯ had nothing behind it, which the suite caught the moment this page entered the
       checked list — V592 gave the reading a head and a title and never wrote its note. Every figure here is
       the series the chart draws (FEDFUNDS, monthly since July 1954) or the FOMC's own published decision;
       the band is the record itself, which is why there is no shaded zone on the chart. */
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

    /* The FOMC's own facts — the target, the last move and its vote, the next meeting — and the page's
       only list. V592 left them on Pressure deliberately, because they were that page's one list and taking
       them would have left it a chart and nothing else; the merge is what makes the question moot, and this is
       the loose end that version wrote down closing. They belong to the reading that IS the policy rate.
       Version 471's rule still holds for the list itself: no lede above it, because every clause of one would
       be a sentence about the two charts it sits under. */
    var ph = document.getElementById("hormones-highlights");
    if (ph) ph.innerHTML = '<section class="highlights">' +
      policyFacts().map(function(f){
        return '<div class="aux-stat' + (f.wordy ? " wordy" : "") + '"><span>' + f.label + '</span><b>' +
               f.value + '</b></div>';
      }).join("") + '</section>';

    /* The row's figure is the TARGET, because that is the decision; the word is the direction of the last
       move, which is a published fact rather than a judgement about the level. */
    var dir = /^\+/.test(fedFunds.lastMove) ? "Tightening"
            : /^[-\u2212]/.test(fedFunds.lastMove) ? "Easing" : "On hold";
    /* Written straight to the element: `set` and `say` are local to renderSubjectRows, and this page renders
       from its own step. The row is the same shape either way \u2014 figure, unit, tag. */
    var rowVal = document.getElementById("subj-value-hormones");
    if (rowVal) rowVal.innerHTML = fedFundsRange() +
      '<span class="unit">Fed funds target</span><span class="tag norm">' + dir + '</span>';
    /* The miniature every other Circulation row carries: the last two years of the EFFECTIVE rate, standing on
       zero like the chart it opens. Without it this row was the only one on the page with an empty right-hand
       side \u2014 the same hole V475 fixed for Desire on Mood. */
    var rowSay = document.getElementById("subj-say-hormones");
    if (rowSay) rowSay.outerHTML = colPeek(fedFundsHistory.map(function(d){ return d.v; }),
                                           function(){ return "ff-col"; }, 0, true);
  }
  GYN.step("renderHormones", renderHormones, "build"); renderHormones();

  /* ---------------- RENDER: Pressure (V597) ----------------
     The reading is a NET PERCENTAGE, so its word comes from the Fed\u2019s own magnitude vocabulary rather than
     from a band anyone here chose. Footnote 3 of the release, verbatim: "basically unchanged" is 0 to 5
     percent inclusive; "modest" is above 5 and up to 10; "moderate" is above 10 and up to 20; "significant"
     is above 20 and below 50; "major" is 50 or more. The sign supplies the direction. THE BAND PROVENANCE
     RULE, satisfied by the source itself \u2014 which is why this reading gets a five-step word where Hormones,
     whose level has no published vocabulary, gets only a direction.
     The state is ONE-SIDED, the V488 lesson: tight credit is a condition and loose credit is not, so a
     two-sided band here would flag the healthy end as a fault. */
  function lendingWord(v){
    var a = Math.abs(v), dir = v > 0 ? "tightening" : "easing";
    if (a <= 5)  return { text:"Basically unchanged", state:"good" };
    if (a <= 10) return { text:"Modest " + dir,       state:v > 0 ? "warning" : "good" };
    if (a <= 20) return { text:"Moderate " + dir,     state:v > 0 ? "warning" : "good" };
    if (a <  50) return { text:"Significant " + dir,  state:v > 0 ? "serious" : "good" };
    return             { text:"Major " + dir,         state:v > 0 ? "critical" : "good" };
  }
  function renderPressure(){
    var host = document.getElementById("pressure-history"); if (!host || !lendingStandardsHistory.length) return;
    var PRESS_STOPS = ["5y", "10y", "25y", "max"];
    var LS_Y0 = parseInt(lendingStandardsHistory[0].q.slice(0, 4), 10);
    function draw(){
      var bar = document.getElementById("pressure-history"); if (!bar) return;
      var id = "pressure-range";
      var cyc = pageMode[id] === "cycles" ? (cycleByName(pageCycles[id]) || openCycle()) : null;
      var span = cyc ? cycleSlice(lendingStandardsHistory, cyc) : null;
      var from = span ? span[0] : qWindowFrom(lendingStandardsHistory.length, pageRange[id]);
      var to = span ? span[1] : undefined;
      var win = lendingStandardsHistory.slice(from, to);
      bar.innerHTML =
        '<div class="hist-bar">' + histControls(id, { series:lendingStandardsHistory, stops:PRESS_STOPS }, LS_Y0) + '</div>' +
        '<div class="page-chart">' + histHead(id) +
        lendingHistoryChart(bar.clientWidth || 340, from, { to:to, cycle:!!span }) +
        '<div class="gdp-tooltip mono hist-tip" id="pressure-hist-tooltip" hidden></div>' +
        '<div id="pressure-trend"></div></div>';
      var tr = document.getElementById("pressure-trend");
      // V431\u2019s pairing rule: two words of a trend are two ends of ONE pair. A channel narrows and widens.
      if (tr) tr.innerHTML = trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "quarter"),
                                       null, true, { rising:"narrowing", falling:"widening" });
      // the refit first, the wiring second \u2014 the V591 lesson: refitHistory replaces the svg, legend and all
      var box = bar.querySelector(".page-chart");
      refitHistory(box, function(w){ return lendingHistoryChart(w, from, { to:to, cycle:!!span }); });
      if (box){ box.__geom = lastHistGeom; wireHistHover(box, "pressure-hist-tooltip"); }
    }
    sheetRenderers["pressure-range"] = draw;
    sheetRenderers["sheet-sign-pressure"] = draw;
    draw();

    HIST_NOTE["pressure-range"] = '<h4>Banks tightening lending standards</h4>' + factsFrom(
      "The net percentage of banks that tightened their standards on commercial and industrial loans to " +
      "large and middle-market firms, minus those that eased them, every quarter since the survey began. " +
      "It is the RESISTANCE the circulating money meets: the policy rate is what the Fed sets, and this is " +
      "how wide the banks leave the channel it has to travel through. Zero is not a chosen midpoint but the " +
      "definition \u2014 as many banks easing as tightening \u2014 which is why this chart carries a zero rule and " +
      "no band. The words come from the survey\u2019s own footnote: up to 5 percent is basically unchanged, " +
      "above 5 modest, above 10 moderate, above 20 significant, and 50 or more major. " +
      "The record runs " + lendingStandardsHistory.length + " quarters from " + lendingStandardsHistory[0].q +
      ". Its peak is +83.6% in 2008 Q4 and its floor \u221232.4% in 2021 Q3; the four highest quarters in the " +
      "series are 2008 Q4, 2020 Q3, 2009 Q1 and 2001 Q1, which is every recession in the record. That is " +
      "why this reading sits on the front of the app rather than inside it: a tightening shows nothing in " +
      "Growth or Activity for three or four quarters, by which time it has already happened. " +
      "Source: Board of Governors of the Federal Reserve System, Senior Loan Officer Opinion Survey on Bank " +
      "Lending Practices, series DRTSCILM.");

    var last = lendingStandardsHistory[lendingStandardsHistory.length - 1];
    var w = lendingWord(last.v);
    /* Written straight to the element, as renderHormones does: `set` and `say` are local to
       renderSubjectRows and this page renders from its own step. */
    var rowVal = document.getElementById("subj-value-pressure");
    if (rowVal) rowVal.innerHTML = (last.v > 0 ? "+" : last.v < 0 ? "\u2212" : "") + Math.abs(last.v).toFixed(1) +
      '<span class="unit">net % tightening</span><span class="tag ' + w.state + '">' + w.text + '</span>';
    var rowSay = document.getElementById("subj-say-pressure");
    if (rowSay) rowSay.outerHTML = colPeek(lendingStandardsHistory.map(function(d){ return d.v; }),
                                           function(v){ return "ls-col " + (v > 0 ? "tight" : ""); }, 0, true);
  }
  GYN.step("renderPressure", renderPressure, "build"); renderPressure();

  // ---------------- RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of ----------------
  function renderFearCurve(){
    /* V593, Keren: "I'm still seeing the meter component. We need to drop it." The half-dial went. It was the
       page's reading of the curve TODAY, and the history under it now carries the same number in its readout
       plate, on a picture that also says where today sits against nineteen years of it \u2014 which is the V582
       argument on Temperature, one reading stated once.
       Its two companions are not lost. The DATE is the history's own, and rides in the readout. The NOTE \u2014
       "there's info next to the title, put the info in the three dots in the history panel as convention" \u2014 is
       filed to HIST_NOTE, which is where every other page's note lives and what the \u22ef opens: the V518 rule,
       one string read from one place. That also retires the last (i) sitting beside a title on this page. */
    HIST_NOTE["fear-range"] = curveDetailHtml();

    /* The VIX under the gauge — the curve's own near leg, so the two belong together. It renders with
       shortCaption emptied so the shared builder emits no Highlights of its own (the Version 378
       escape): this page has ONE Highlights block and the VIX's note is a card in it. */
    /* V591, Keren: "I think we can get rid of the meter in the fear page, right? Because we inserted a
       history component." Right, and for the reason that took the meter off Temperature in V582: the page was
       stating one thing four times. What goes is the VIX row \u2014 a level against its usual band \u2014 and what
       stays says more: the gauge reads the curve now, the history draws it back to 2007, and Highlights'
       second card is entirely about the VIX, giving 14.21, the 13\u201320 band, the 9.14 record low and the 82.69
       high in a sentence that can hold all four where a track can hold one.
       Worth naming the one thing it costs, because it is not the same redundancy Temperature had: the history
       draws the RATIO and the meter read the LEVEL, so the VIX level stops being a figure on this page and
       survives as prose. That is the right trade on a page called Fear, where the curve is the reading and the
       VIX is the leg it is computed from \u2014 but it is a trade, not a deletion of a duplicate. */

    /* V590, Keren: "make a history component in the fear page that will show the curve \u2014 check how we did
       the inverted yield curve and apply the same."
       divergeChart is that treatment: bars hanging off a reference line, coloured by which side they fall. On
       Valuations the line is CAPE's fair value; here it is 1.00, and the app's own CSS already reads the two
       sides correctly without a new colour \u2014 .dv-bar.over is the serious ink and .under the good, which is
       exactly inverted against normal. The threshold needs no defending: it is the definition of the shape
       rather than a level anyone chose, the sentence curveVerdict() already carries.
       The series is fearCurveHistory, monthly from December 2007 \u2014 VXVCLS begins then, so that is the first
       month the ratio can be computed at all. Its last point is the number the gauge above shows, because
       both round to three decimals off the same two legs. */
    var FEAR_STOPS = ["5y", "10y", "max"];
    var FEAR_Y0 = fearCurveHistory.length ? parseInt(fearCurveHistory[0].m.slice(0, 4), 10) : 0;
    function drawFearHistory(){
      var host = document.getElementById("fear-history"); if (!host || !fearCurveHistory.length) return;
      /* A cycle that opened before this series did cannot be windowed onto it, so the page falls back to the
         open cycle rather than drawing an empty chart \u2014 the rule Horizon states for the same 2005 problem. */
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
      /* One options object, built once and handed to BOTH the first draw and the refit. Writing them twice is
         how the first pass lost its x labels: the refit rebuilt without `xLabel`, so the years were drawn and
         then silently replaced by a chart that had none. */
      function opts(){
        return { vals:vals, mid:1, midLabel:"flat, 1.00",
          fmt:function(v){ return v.toFixed(2); },
          /* Two decimals, because one lies at some steps: the record window steps by 0.25, and a gridline
             drawn at 0.75 and labelled "0.8" is a number that is not where it says it is. */
          tickFmt:function(v){ return v.toFixed(2); },
          at:atMonth,
          // a monthly series labels the January of each year the window can afford to name
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
        '<div class="hist-bar">' + histControls("fear-range",
          { series:fearCurveHistory, stops:FEAR_STOPS }, FEAR_Y0) + '</div>' +
        '<div class="page-chart">' + histHead("fear-range") +
        divergeChart(opts(), host.clientWidth || 340) +
        '<div class="gdp-tooltip mono hist-tip" id="fear-hist-tooltip" hidden></div>' +
        '<div id="fear-trend"></div></div>';
      var ft = document.getElementById("fear-trend");
      // Version 431's pairing rule: two words of a trend must be two ends of ONE pair. A curve inverts and steepens.
      if (ft) ft.innerHTML = trendPill(fit, null, true, { rising:"inverting", falling:"steepening" });
      /* The refit comes FIRST and the wiring second, which is the order every other page uses and the reason
         this chart first drew with no legend: refitHistory replaces the svg's outerHTML, so a legend injected
         before it is thrown away with the element it was injected into \u2014 and lastHistGeom is the refit's
         geometry, not the first draw's, so reading __geom before it pins the hover to a chart that is gone. */
      var box = host.querySelector(".page-chart");
      refitHistory(box, function(w){ return divergeChart(opts(), w); });
      if (box){ box.__geom = lastHistGeom; wireHistHover(box, "fear-hist-tooltip"); }
    }
    sheetRenderers["fear-range"] = drawFearHistory;
    /* V593: and on OPEN. Without this the chart kept its build-time drawing, made while the sheet was hidden
       and had no width, so its viewBox was 298 inside an element rendering at 320 \u2014 the whole picture scaled
       up 1.07, which is why the legend looked oversized and crowded to the right edge. Every other history
       registers its sheet this way; this one only registered its range control. */
    sheetRenderers["sheet-sign-sentiment"] = drawFearHistory;
    drawFearHistory();

    var hl = document.getElementById("curve-highlights");
    if (hl){
      var m = vixRow.meter, lo = m.optimal.from, hiB = m.optimal.to, v = m.value;
      var where = v < lo ? "below its usual band" : v > hiB ? "above its usual band" : "inside its usual band";
      var curveTxt = curveNow == null
        ? "No reading today \u2014 one of the two legs is missing, so the shape cannot be computed. The previous reading stands."
        : "The near month is priced at " + v.toFixed(2) + " against " + vix3mClose.toFixed(2) + " three months out, a ratio of " +
          curveNow.toFixed(2) + ". " + (curveNow >= 1
            ? "The curve is INVERTED: insuring the next month costs more than insuring the next quarter, which is what a market braced for something immediate looks like in prices. Read contrarian, inversions are uncomfortable and they cluster near bottoms."
            : "That is the curve's ordinary shape \u2014 the far month costs more, as it should. The further below 1.00 it sits, the less the market is paying to be wrong about the weeks just ahead.") +
          " The threshold is the definition of the shape, not a level anyone chose.";
      var vixTxt = vixInd.shortCaption + " At " + v.toFixed(2) + " it sits " + where + " of " + lo +
        " to " + hiB + ", against a record low of " + m.min + " and a high of " + m.max +
        ". It is the slower of the two fear gauges: credit usually cracks before equity volatility does.";
      hl.innerHTML = highlightsHtml([
        hiCard("What the shape is saying", curveTag.state, curveTxt),
        hiCard("What is priced" + expandBtn(factsFrom(vixRow.note)), vixInd.tag.state, vixTxt)]);
    }
    addSources(sentiment.src);
  }
  GYN.step("renderFearCurve", renderFearCurve, "build"); renderFearCurve();


  // ---------------- RENDER: Analysis subjects — one headline figure per collapsible section ----------------
  // Each summary shows the single number a reader would want before deciding to expand. All values are read from
  // the same objects the section itself renders from, so a summary can't drift from its section.
  function renderSubjectRows(){
    function ring(key, pct, state){
      document.getElementById("subj-ring-" + key).innerHTML = vitalRingSvg(pct, state);
    }
    function dot(key, state){
      document.getElementById("subj-ring-" + key).innerHTML = '<div class="subject-dot"><span class="dot ' + state + '"></span></div>';
    }
    function iconMark(key, state, svg){ // an icon on its wash instead of a dot (Version 213)
      document.getElementById("subj-ring-" + key).innerHTML = '<div class="subject-icon"><span class="' + state + '">' + svg + '</span></div>';
    }
    function spark(key, html){ var el = document.getElementById("subj-spark-" + key); if (el) el.innerHTML = html || ""; }
    function say(key, text){ var el = document.getElementById("subj-say-" + key); if (el) el.textContent = text || ""; }
    function set(key, valueHtml, contextHtml){
      document.getElementById("subj-value-" + key).innerHTML = valueHtml;
      // a page may have no context paragraph at all — Sentiment's went in Version 282
      var c = document.getElementById("subj-ctx-" + key); if (c) c.innerHTML = contextHtml || "";
    }
    function worst(states){
      var order = ["good","warning","serious","critical"];
      return states.reduce(function(w, st){ return order.indexOf(st) > order.indexOf(w) ? st : w; }, "good");
    }

    // Economic power — the composite, read as what is left in the battery (Version 229): the mark is the battery at that
    // charge, the number is the reserve, the word is energyFromReserve()'s. The word tile that said the same thing in the
    // vitals strip is gone, so this row is the one place the reading lives.
    iconMark("resilience", powerWord.state, boltSvg());
    // Version 361, Keren: the context line went. It said what the table underneath it says in full — the
    // table IS the three structural markers, each with its own flag — so it was a caption introducing a thing
    // that introduces itself. `.subject-body > .subject-context:empty` hides the paragraph, so passing "" is
    // the whole removal; the element stays for any page that still wants one.
    set("resilience", powerScore + '<span class="unit">%</span><span class="tag ' + powerWord.state + '">' + powerWord.word + '</span>', "");
    say("resilience", longCycleImpressionShort);

    // GDP growth — the US headline plus whichever other countries are on by default in the chart below (so
    // this preview never name-drops a country the chart itself isn't showing).
    // the cycle's own figure (Version 215, Keren: "we are looking at things from a cycle point of view"): the row carries
    // the total growth over the cycle's closed years and its direction — the latest quarter reads at the chart's end line
    var cycGrowth = eraGrowth(currentEra), cycYears = cycGrowth.years;
    // green in expansion, red in contraction (Keren, Version 216): the mark and the tag beside it now say the same thing,
    // so the colour is explained rather than alarming — which is what made it read wrong in 215, when the tag was missing
    iconMark("gdp", regimeState(nowModel.reading.regime), sproutSvg());
    // no context line (Version 211): the countries are the reader's to choose in the chart's dropdown, so naming one here
    // read as a second headline
    // the direction as the row's tag, the way every other subject row carries its verdict (Version 216)
    // the row says the figure; the direction is a tag inside the panel, and the mark already carries its colour here
    set("gdp", fmtSigned(cycGrowth.total, 0) + '<span class="unit">% · cycle total growth</span>', "");
    say("gdp", "Compounded over " + cycYears.length + " closed years of the " + currentEra.name + ", and the latest quarter is still " +
      (nowModel.reading.regime === "expansion" ? "expanding" : "contracting") + ".");
    // year-on-year growth, quarter by quarter, for the last four years (Version 252)
    spark("gdp", sparkHtml(lastN(gdpQuarterlyYoY, 16, "v"), "yearly rate \u00b7 4 years", regimeState(nowModel.reading.regime)));

    /* V596: Pressure's row is gone with the reading. What stood here was the 10Y/3M pair, the cuff ring that
       scored the 10-year on a 0–6% band, levelZone's High/Normal/Low, and — unread since V470 — a
       `pressEl` block behind `if (null)`. The pair is not restated anywhere: the maturity chart on the Hormones
       page draws every leg of it, which is the V294 reason the context line came off this row in the first
       place. The FOMC list moved to renderHormones, where the reading it describes now lives. */

    /* ================= Version 473: Horizon's row =================
       The figure is today's spread in points — the same subtraction the two numbers above it invite and that
       Pressure deliberately does not perform, because the pair is a measurement and the difference is a forecast.
       Different unit, different claim, different category: 4.96/4.17 in percent on Circulation, +0.79 in points
       on Mood. The verdict rides INSIDE the figure as a tag, the way Fear & Greed's does, so the two Mood
       readings that disagree with each other are written the same way; the category list strips both pills to a
       plain word (the Version 457 rule) and the roster keeps the colour. */
    var hzLabel = document.querySelector('[data-subject="horizon"] .subject-label');
    if (hzLabel) hzLabel.innerHTML = '<span class="peek-mark">' + sunriseSvg() + '</span>Horizon' + CHEV;
    set("horizon", (horizonRead.spread >= 0 ? "+" : "\u2212") + Math.abs(horizonRead.spread).toFixed(2) +
      '<span class="unit">pts \u00b7 10Y \u2212 3M</span>' +
      '<span class="tag ' + horizonRead.state + '">' + horizonRead.word + '</span>', "");
    say("horizon", "");
    (function(){
      // the last twelve quarters either side of zero, on the purple rule Version 312 asked for: a diverging peek
      // is the one case where the reader needs to be told where the line is
      var slot = document.getElementById("subj-spark-horizon");
      if (slot) slot.innerHTML = colPeek(
        t10y3mHistory.map(function(d){ return d.v; }).filter(function(v){ return v != null; }),
        function(v){ return "hzn-col " + (v < 0 ? "neg" : "pos"); }, 0, true);
    })();

    // Sentiment — the Fear & Greed score and where it puts her on the ring (Version 231)
    // The row shows a miniature of the gauge its page opens, which is the rule every other preview follows since
    // Version 260 — and it replaces a face that was drawing an emotion rather than a reading (Keren, Sep 20, 2026:
    // "you can drop the faces and line chart in the preview"). Version 277.
    document.getElementById("subj-ring-sentiment").innerHTML =
      vitalRingSvg(curvePct(curveNow), "accent", curveNow == null ? "Fear curve: no reading"
        : "Fear curve at " + curveNow.toFixed(2) + ", where 1.00 is flat");
    // the mood goes where a sign's mark goes — beside its name (Version 342)
    (function(){
      // the row does not exist yet — the builder converts the markup a moment later and MOVES the summary's
      // children into it, so an edit made here survives the move (the Version 314 lesson)
      var lab = document.querySelector('[data-subject="sentiment"] .subject-label');
      // V524, Keren: the heart, freed when Pulse took the trace. The half-dial of V465 named the INSTRUMENT
      // the index is published as; the heart names what the instrument measures, which is the reading itself.
      /* V584, Keren: "change the name of the category from fear curve to fear. And the icon should be an
         umbrella, meaning fear of winter, basically." The category is the FEELING; the curve is one instrument
         that measures it, and naming the category after the instrument was the same fault V524 fixed when it
         took the half-dial's name off this row. The umbrella is the app's own \u2014 the VIX has worn it since
         V467 \u2014 and it is the right glyph twice over: what you carry because winter might come. */
      if (lab) lab.innerHTML = '<span class="peek-mark mood-mark">' + umbrellaSvg() +
        '</span>Fear';
    })();
    // no context line (Version 232, Keren: "I already have the data below the cycle") — it only re-listed the table
    // the sentence taken off the row goes where it was always meant to be read — on the page, in full (Keren,
    // Version 277: "either put it in the inner page or if it already exists drop it"; it did not exist there)
    set("sentiment", (curveNow == null ? "\u2014" : curveNow.toFixed(2)) +
      '<span class="unit">VIX \u00f7 3M</span><span class="tag ' + curveTag.state + '">' + curveTag.text + '</span>', "");
    say("sentiment", "");
    // CNN publishes its own look-back with the index — a month ago, a week ago, today. Three real points, no more,
    // and the builder refuses to draw fewer (Version 252).
    // no sparkline and no sentence on this row: three points is not a line worth drawing, and the sentence it
    // carried is the panel's own impression, which the page states in full a tap away (Keren, Version 277)
    spark("sentiment", "");

    // Valuation — the two gauges, each against its own record (Version 231); the mark is a piggy bank at the fill their
    // flags imply, neither flagged being cheap and both being richly priced (Version 245)
    iconMark("valuation", worst(valuation.rows.map(function(r){ return r.flagState || "good"; })), diamondSvg());
    set("valuation", valRow("cape").flagValue + '<span class="unit">CAPE</span><span class="tag ' + valuation.tag.state + '">' + valuation.tag.text + '</span>', "");
    say("valuation", valuation.shortImpression);

  }
  GYN.step("renderSubjectRows", renderSubjectRows, "build"); renderSubjectRows();

  // ---------------- Per-cycle growth helpers (the cycle view and the Calendar list both use them) ----------------
  // Per-cycle growth = US real GDP over the cycle's CLOSED years (the in-progress year is excluded, as it is for
  // the peak-year marker): the compound annual rate (fair across cycles of different length), the total expansion,
  // and a rising/falling verdict from the least-squares slope of the yearly rates (within ±0.1 pp/yr is "flat").
  // The same aggregation, for prices (Version 275). December's year-over-year reading IS that calendar year's
  // inflation, so compounding the Decembers across a cycle's closed years gives what the cycle actually did to the
  // price of everything — the exact counterpart of eraGrowth's total expansion, computed the same way, with the
  // in-progress year excluded for the same reason. A rate a reader sees every month says "3.4% this year"; only the
  // compounded total says "everything costs a sixth more than when this cycle opened".
  // Version 423: the same compounding as eraInflation, over whatever months are in view rather than over a cycle,
  // so the row can follow a 5Y or 25Y window too. December to December, skipping the year in progress because it
  // has no December yet \u2014 which is why the open cycle's total reads 2022\u20132025 and not 2022\u20132026.
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
  function fmtSigned(v, dp){ return (v >= 0 ? "+" : "") + v.toFixed(dp); }
  // Growth in the book's words (Version 216): the direction of growth is expansion or contraction, never "rising" or
  // "falling" on screen. Since Version 220 the word itself always comes from the season model's reading — r.regime, the
  // direction of the six-quarter fit — so the chart's colour, the panel's tag and the season on the dial cannot disagree.
  // These only dress it. (Function declarations, not vars: the subject summaries above call them before this line runs.)
  function regimeArrow(regime){ return regime === "contraction" ? "\u2193 " : "\u2191 "; }
  // Version 304, Keren: the word on screen is "expanding", not "expansion" \u2014 and "contracting" the other way.
  // A participle says the body is DOING something, which is what this whole board is for; an abstract noun names
  // a state the reader has to attach to her. The MODEL's own value is untouched \u2014 it stays "expansion" and
  // "contraction", because the season logic, the ring and the analysis table all compare against those strings,
  // and renaming a value to change a label is how a display tweak turns into a data bug. Only the label moves.
  var GROWTH_SHOWN = { expansion:"expanding", contraction:"contracting", steady:"steady" };
  function growthShown(reg){ return GROWTH_SHOWN[reg] || reg; }
  function growthShownCap(reg){ var w = growthShown(reg); return w.charAt(0).toUpperCase() + w.slice(1); }
  function regimeState(regime){ return regime === "contraction" ? "warning" : "good"; }
  // How the phase is COLOURED (Version 261) — separate from regimeState, which still answers "how worrying is this"
  // for the places that genuinely want a severity (the drawer row's mark). Which part of the cycle she is in is a
  // category, and categories do not get the alarm palette.
  function phaseClass(regime){ return regime === "contraction" ? "phase-down" : "phase-up"; }
  // the S&P 500's compounded total return across a cycle (its years to date for the open one)
  function eraMarketTotal(cyc){
    var endY = cyc.ongoing ? calendarTodayY : cyc.to, level = 1, any = false;
    for (var y = cyc.from; y <= endY; y++) if (sp500AnnualReturns[y] != null){ level *= 1 + sp500AnnualReturns[y] / 100; any = true; }
    return any ? (level - 1) * 100 : null;
  }
  // ================================================================================================
  // THE CYCLE VIEW — one component, rendered for one cycle at a time (renderCycleView(model)). The Cycle tab
  // shows it for the current cycle; the Calendar tab's list opens it for any of the five. Its blocks, top to
  // bottom: the cycle card with the dial · the dial legend · the Temperature chart · the Growth and Rates rings ·
  // the Action / Feeling / Energy word tiles · the yearly GDP growth chart · the S&P 500 year cards. Every block
  // reads the model only, so a change here applies to every cycle.
  // ================================================================================================
  var cycleViewEl = document.getElementById("cycle-view");
  // The Temperature and Growth charts (Version 206): on the Cycle tab they sit in today's drawers — Temperature in Lagging, Growth
  // in GDP growth — each standing alone; a cycle opened from the Calendar takes the two cards back into the cycle view, where
  // they follow the dial as before.
  var tempCard = document.getElementById("temp-card"), growthCard = document.getElementById("growth-card");
  function placeCharts(where){
    if (where === "drawers"){ document.getElementById("slot-temp").appendChild(tempCard); document.getElementById("slot-growth").appendChild(growthCard); }
    else { cycleViewEl.appendChild(tempCard); cycleViewEl.appendChild(growthCard); } // the strip they used to sit above left in Version 240
  }
  placeCharts("drawers");
  var shownEra = null; // which cycle the view currently shows
  var calendarReset = null;   // set by the Calendar block below
  var metricPageReset = null; // set by the peek block below — closes an open metric page
  var openIndicatorsPage = null; // set there too — opens the Indicators page on a named tab (Version 329)
  // The top bar's back arrow is shared (Version 256): the Calendar's open cycle and a metric page both use it, so it
  // has one listener and a slot for whatever is currently open. Two listeners would both fire on every press.
  var topbarBack = null;
  function setTopbar(title, onBack){
    document.getElementById("topbar-title").textContent = title;
    topbarBack = onBack || null;
    document.getElementById("topbar-back").hidden = !onBack;
  }
  document.getElementById("topbar-back").addEventListener("click", function(){ if (topbarBack) topbarBack(); });
