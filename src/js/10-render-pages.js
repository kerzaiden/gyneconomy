
  // ---------------- RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y ----------------
  function renderSpreadHistory(){
    var svg = byId("spread-history-svg");
    // W and H are placeholders: draw() sets them from the host's width
    var W = 780, H = 220, padL = AXIS.L, padR = AXIS.R, padT = AXIS.T + AXIS.LEG + AXIS.READ, padB = 30;   // +LEG: the legend strip at the head of the frame, as every other history has
    var innerW = W - padL - padR, innerH = H - padT - padB;
    var minV = -2, maxV = 4;
    var el = svgEl;
    var tooltip = byId("spread-history-tooltip");

    var series = {
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
            // the reading's note cites this model on both spreads, so the source has to be reachable from both
            {t:"NY Fed — Yield Curve as a Leading Indicator, FAQ (PDF)", u:"https://www.newyorkfed.org/medialibrary/media/research/capital_markets/ycfaq.pdf"}
          ]),
        sources: [
          {t:"FRED — 10Y minus 2Y spread", u:"https://fred.stlouisfed.org/series/T10Y2Y"},
          {t:"FRED — 2-Year Treasury Rate (GS2)", u:"https://fred.stlouisfed.org/series/GS2"}
        ]
      }
    };
    // Both series' sources are listed on the "view all sources" page regardless of which is toggled on-screen.
    addSources(series["3m"].sources); addSources(series["2y"].sources);

    function qIndex(data, q){ for (var i=0;i<data.length;i++){ if (data[i].q === q) return i; } return -1; }
    // half a slot in at each end, so the first and last columns clear the frame as on every other history
    function x(i, n){ var h = innerW / (2 * Math.max(1, n)); return padL + h + (innerW - 2 * h) * i / (n - 1); }
    function y(v){ return padT + innerH - ((v - minV) / (maxV - minV)) * innerH; }

    /* The spread windows. Everything in here is indexed against `data` and its length — the recession bands
       through qIndex, the x labels, the columns and the hover — so handing it a SLICE is all the windowing it
       needs, and a recession lookup that falls outside the view returns -1 and is skipped rather than drawn
       at a nonsense x. */
    function draw(key, from, to){
      var s = series[key];
      var data = s.data;
      if (from != null) data = data.slice(from, to == null ? undefined : to);
      if (data.length < 2) data = s.data;
      // measure first, like every other history: a fixed viewBox scaled to a phone shrinks every label with it
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

      /* Keren, V522: "every other history container has this square boxed-in grid, like in the Apple Health
         app, and Horizon looks different — unify the design." This chart draws node by node while the others
         build a string, so it takes the shared frame and vertical rule (`chartAxes`, `vGrid`) through
         `appendSvgMarkup`: the frame rect, dashed rows at `--grid`, mono y labels ENDING at the plot's left
         edge, and a dashed vertical rule under every year label.
         The zero line stays its own heavier solid rule, and keeps its dashed row suppressed (`noGridAt`),
         because a dashed rule under a solid one reads as two — the same reason the deficit chart passes it. */
      var yTop = padT, yBot = padT + innerH, xR = W - padR;
      appendSvgMarkup(svg, chartAxes({
        x0:padL, x1:xR, top:(yTop - AXIS.LEG - AXIS.READ), bot:yBot, y:y, noGridAt:0,
        ticks:[-2, -1, 0, 1, 2, 3, 4],
        fmt:function(v){ return (v > 0 ? "+" : v < 0 ? "\u2212" : "") + Math.abs(v) + "%"; }
      }));
      // across the FRAME, so the 0% in the rail has its rule like every other number there
      svg.appendChild(el("line", { x1:padL - AXIS.L, x2:xR + AXIS.R, y1:y(0), y2:y(0), class:"spread-history-zero" }));

      // X labels: Q1 of every third year or so, the years following the window, each with the app's own
      // vertical rule under it
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

      /* Keren, V496: "I prefer bars, because you can colour the bars and have more meaning in the colour."
         The whole reading of this series is which side of zero a quarter falls on, and a column standing out
         of the zero line says that in its length and its colour at once. A column is also a per-quarter unit:
         something to hover, to light up, and to carry the `.hcol` class every other history's hover depends on. */
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

      /* No un-inversion marker. Keren, V570: "the colour already shows that the graph goes from inverted to
         normal, so I don't need it again." The quarter the columns change colour IS the un-inversion. */

      // Hover crosshair + tooltip (same idiom as the yield-curve chart above) — rebuilt fresh each draw, so no
      // stale listeners survive a toggle switch (svg.innerHTML = "" above already detached the old hit rect).
      // .hist-cross, not a class of this chart's own, so the resting reading's thread and the hovered one look
      // the same here as on every other history, and the stylesheet owns both weights
      var crosshair = el("line", { x1:0, x2:0, y1:padT, y2:H - padB, class:"hist-cross" });
      svg.appendChild(crosshair);
      var hoverDot = el("circle", { r:4.5, class:"curve-dot end", opacity:0 });
      svg.appendChild(hoverDot);
      var hit = el("rect", { x:padL, y:0, width:innerW, height:H, class:"hero-hit" });
      svg.appendChild(hit);
      /* This chart writes the shared readout above it like every other history, but it does not use
         `wireHistHover` — it tracks its own pointer because its x-scale is its own — so it carries its own
         geometry object in the shape that readout expects. */
      var shell = byId("spread-history-shell");
      if (shell){
        /* The geometry the shared readout and legend need: without L/R the plate has no column to sit over
           (it falls to the left edge, outside the frame) and the legend has nothing to measure. The numbers
           are the ones the chart just drew with, so the plate rides the same columns the hover lights. */
        shell.__geom = { vals:data, n:data.length, W:W, T:yTop, B:yBot,
                         L:x(0, data.length), R:x(data.length - 1, data.length),
                         at:function(d){ return qLabel(d.q); },
                         fmt:function(v){ return (v >= 0 ? "+" : "\u2212") + Math.abs(v).toFixed(2) + " pts"; },
                         /* the colour key, in the place every other history keeps its key */
                         refs:[{ label:"NBER recession", swatch:"var(--border-strong)" },
                               { label:"Normal",         swatch:"var(--good)" },
                               { label:"Inverted",       swatch:"var(--critical)" }] };
        histReadEnsure(shell);
        histLegend(shell);
        histReadFill(shell, null);
      }
      /* The hover every other history uses: the plot dims and the column under the pointer keeps its full
         colour. */
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

      SPREAD_DETAIL = s.detail;   // the band's title offers it; this chart has no head of its own
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

    drawSpreadWindow = draw;   // the band drives it, so the window and the series both live outside
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
      srcBlock([
        {t:"NBER — US Business Cycle Expansions and Contractions", u:"https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions"},
        {t:"NY Fed — Yield Curve as a Leading Indicator, FAQ (PDF)", u:"https://www.newyorkfed.org/medialibrary/media/research/capital_markets/ycfaq.pdf"},
        {t:"FRED — 10Y minus 3M spread, daily (T10Y3M)", u:"https://fred.stlouisfed.org/series/T10Y3M"},
        {t:"FRED — 10Y minus 3M spread, monthly average (T10Y3MM)", u:"https://fred.stlouisfed.org/series/T10Y3MM"},
        {t:"Predicting Recessions Using the Yield Curve (Federal Reserve Bank of Boston)", u:"https://www.bostonfed.org/publications/current-policy-perspectives/2020/predicting-recessions-using-the-yield-curve.aspx"}
      ]);
    /* A fact with a figure: Horizon's Insights show it as an `.aux-stat` row (see renderHorizonPage), and the
       argument behind it — four cycles, one to ten months, what today's count is measured from — is this (i). */
    UNINV_DETAIL = detail;
    addSources([
      {t:"Predicting Recessions Using the Yield Curve (Federal Reserve Bank of Boston)", u:"https://www.bostonfed.org/publications/current-policy-perspectives/2020/predicting-recessions-using-the-yield-curve.aspx"}
    ]);
  }
  GYN.step("deriveUninversionDetail", deriveUninversionDetail, "derive"); deriveUninversionDetail();

  /* ---------------- RENDER: Horizon — the spread's own page ----------------
     Reuses, rather than rebuilds, what renderSpreadHistory installed: the same svg, the same tooltip, the same
     `drawSpreadWindow` closure, the same un-inversion (i). The two controls read the window first, then which
     spread. This runs AFTER the lag panel, because the first thing its Insights ask for is `UNINV_DETAIL`. */
  /* Horizon's head: one menu group, the two spreads. Keren, V639: "the spreads are the Horizon because it's
     what the market sees long-term versus short-term" — the Treasury levels are Pressure's. The title READS
     ITS OWN MENU ROW rather than spelling the pair a second way — one label, one source. */
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
    var HZN_STOPS = ["5y", "10y", "max"];   // no 25Y: it needs 25 years of data, and this series starts in 2005
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
        // the two words of a trend have to be two ends of ONE pair. A curve steepens and flattens; it does not
        // steepen and slow.
        tr.innerHTML = trendPill(trendOf(w, "points", "quarter"), null, true,
          { rising:"steepening", falling:"flattening" });
      }
      // the head's title names the picked spread, so it is redrawn with the chart
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
    /* Keren, V603: "you have a lot of text in the insight container, and you have a short version of the
       insights — time from un-inversion, last inverted, deepest point. Merge that into the insight and make
       the text short and concise." One section: prose first and the facts under it, the shape every other
       page uses. Every number is computed from `horizonRead`. Which spread "the curve" means is answered by
       the ⋯ menu, which switches to the other one. */
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
      /* The un-inversion clock and the last inversion's shape: facts ABOUT the reading above them, so they
         read under it. The (i) travels with the clock — four cycles, one to ten months, what today's count is
         measured from. */
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

  // ---------------- RENDER: Valuation (slow) ----------------
  function renderValuationTag(){
    var tagEl = byId("valuation-tag");
    tagEl.className = "tag " + valuation.tag.state + " longcycle-tag";
    tagEl.textContent = valuation.tag.text;
    // built ONCE here rather than per draw — the renderer places the finished string, because
    // `panelRow` pushes into `detailTexts` and a per-draw build would grow that array on every window change.
    valuationPanelHtml = valuation.rows.map(function(row){
      var detail = '<h4>' + row.marker + '</h4><div class="marker-sub">' + row.sub + '</div>' + factsFrom(row.note);
      // the chart on this page draws CAPE, so CAPE's note is the page's and travels to the head's ⋯;
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
    powerPageNote = stressDetail;   // the Economic power page's own long form, read by its Highlights
    var stressRowHtml = panelRow({
      name:"Power supply", head:"sheet-metric-power",
      info:'<h4>Power supply</h4><div class="marker-sub">' + powerSub + '</div>' + stressDetail,
      metric:powerScore + "%", flagged:meterFlagged(powerMeter), bar:panelFromMeter(powerMeter) });
    var rowsHtml = labPanel.map(function(row){
      // the sub line and the short note go into the (i) with the rest — on a row this tight they would be the
      // third and fourth things competing for a column that holds a name and a figure
      var detail = '<h4>' + row.marker + '</h4><div class="marker-sub">' + row.sub + '</div>' + factsFrom(row.note);
      return panelRow({ name:row.marker, info:row.opens ? null : detail, open:row.opens || null,
                        metric:row.flagValue, flagged:meterFlagged(row.meter),
                        bar:panelFromMeter(row.meter) });
    }).join("");
    powerPanelHtml = stressRowHtml + rowsHtml;   // placed by the renderer, inside the history container
    var flaggedCount = labPanel.filter(function(r){ return !!r.flagState; }).length;
    byId("longcycle-tag").textContent = flaggedCount + " marker" + (flaggedCount === 1 ? "" : "s") + " flagged";
    addSources(longCycleSrc);
  }
  GYN.step("renderLongCycleTag", renderLongCycleTag, "render"); renderLongCycleTag();

  /* ---------------- RENDER: Hormones ----------------
     Keren, V592: "let's add a fourth category in circulation called hormones. And hormones will be interest
     rates." A hormone is a chemical MESSENGER: secreted deliberately, it reaches everything downstream, and
     the whole cycle runs at the tempo it sets. That is the policy rate: Pressure measures what the market
     CHARGES (the Treasury curve), this measures what the Fed SETS.
     Two figures live here and they are not the same thing, so the page says which is which: the TARGET RANGE
     is the decision, and the chart plots the EFFECTIVE rate, which is where money actually traded. When they
     differ that is not a contradiction but a date: the latest month can have run under the previous target.
     Keren, V294: "you write 10-year 4.94 and I see inside the container 10-year 4.70" — two numbers for one
     thing is a fault, two numbers for two things has to be LABELLED. */
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
      // two words of a trend are two ends of ONE pair (see drawHzn). A rate tightens and eases.
      put("hormones-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"),
                                      null, true, { rising:"tightening", falling:"easing" }));
      // the refit first, the wiring second: refitHistory replaces the svg, legend and all (see drawFearHistory)
      var box = bar.querySelector(".page-chart");
      refitHistory(box, function(w){ return fedFundsHistoryChart(w, from, { to:to, cycle:!!span }); });
      attachHistory(box, "hormones-hist-tooltip", "fedFundsHistoryChart");
    }
    sheetRenderers["hormones-range"] = draw;
    /* one chart, so one opener */
    sheetRenderers["sheet-sign-hormones"] = draw;
    draw();

    /* The head's ⋯ note. Every figure here is the series the chart draws (FEDFUNDS, monthly since July 1954)
       or the FOMC's own published decision; the band is the record itself, which is why there is no shaded
       zone on the chart. */
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

    /* ---- Keren, V609: "can you put that into insights? The hormones page doesn't have an insight section.
       And the current federal funds target, last Fed move, first hike and next decision — you can put that in
       insights." The shape every other page has: the biology in two sentences, then the cards, then the
       FOMC's own facts underneath.
       Every figure below is COMPUTED, including the peaks. A claim about the record is read off the record
       or it is not made — which also means it stays true the year a new peak arrives. */
    function ffPeaks(){
      /* A peak is a high that the rate then gave back by at least 1.5 points before rising again. The swing
         has to be big enough to ignore the month-to-month wobble of the 1970s and small enough to catch 2019's
         2.42% top; 1.5 points is the width that does both across all 866 months. */
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
      // how many peaks in a row came in under the one before, counting back from the record high
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
      /* The FOMC's own facts, under the prose that explains them (the shape Horizon's Insights have).
         `#policy-facts` is their own host inside the section, so the live repaint can rewrite the four rows
         after an FOMC decision without touching a word of the cards above them. */
      ins.innerHTML = '<section class="highlights insights"><div class="hi-head">Insights</div>' +
        cards.join("") + '<div id="policy-facts" class="aux-group">' + policyFactRows() + '</div></section>';
    }


    /* The row's figure is the TARGET, because that is the decision; the word is the direction of the last
       move, which is a published fact rather than a judgement about the level. */
    var dir = /^\+/.test(fedFunds.lastMove) ? "Tightening"
            : /^[-\u2212]/.test(fedFunds.lastMove) ? "Easing" : "On hold";
    /* Written straight to the element: `set` and `say` are local to renderSubjectRows, and this page renders
       from its own step. The row is the same shape either way — figure, unit, tag. */
    var rowVal = put("subj-value-hormones", fedFundsRange() +
      '<span class="unit">Fed funds target</span><span class="tag norm">' + dir + '</span>');
    /* The miniature every other Circulation row carries: the last two years of the EFFECTIVE rate, standing on
       zero like the chart it opens. Without it this row would be the only one on the page with an empty
       right-hand side. */
    var rowSay = byId("subj-say-hormones");
    if (rowSay) rowSay.outerHTML = colPeek(fedFundsHistory.map(function(d){ return d.v; }),
                                           function(){ return "ff-col"; }, 0, true);
  }
  GYN.step("renderHormones", renderHormones, "build"); renderHormones();

  /* Pressure is the Treasury yields, drawn by `renderPressurePage` in 09-render-core. The Senior Loan Officer
     Survey reading that once stood here is at tag v638-fewer-words. */

  // ---------------- RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of ----------------
  function renderFearCurve(){
    /* Keren, V593: "I'm still seeing the meter component. We need to drop it." No meter: the history's
       readout carries today's number and its date, on a picture that also says where today sits against the
       whole record — one reading stated once.
       The NOTE (Keren, V593: "there's info next to the title, put the info in the three dots in the history
       panel as convention") is filed to HIST_NOTE, where every other page's note lives and what the ⋯
       opens: one string read from one place, and no (i) beside a title on this page. */
    HIST_NOTE["fear-range"] = curveDetailHtml();

    /* Keren, V591: "I think we can get rid of the meter in the fear page, right? Because we inserted a
       history component." No VIX row: this page has ONE Highlights block, and its second card is the VIX —
       the level, its usual band, the record low and high, in a sentence that can hold all four where a track
       can hold one. What it costs: the history draws the RATIO and the meter read the LEVEL, so the VIX level
       is prose here, not a figure. That is the right trade on a page called Fear, where the curve is the
       reading and the VIX is the leg it is computed from. */

    /* Keren, V590: "make a history component in the fear page that will show the curve — check how we did
       the inverted yield curve and apply the same."
       divergeChart is that treatment: bars hanging off a reference line, coloured by which side they fall. On
       Valuations the line is CAPE's fair value; here it is 1.00, and the app's own CSS already reads the two
       sides correctly without a new colour — .dv-bar.over is the serious ink and .under the good, which is
       exactly inverted against normal. The threshold needs no defending: it is the definition of the shape
       rather than a level anyone chose, the sentence curveVerdict() already carries.
       The series is fearCurveHistory, monthly from December 2007 — VXVCLS begins then, so that is the first
       month the ratio can be computed at all. Its last point is today's reading, because both round to three
       decimals off the same two legs. */
    var FEAR_STOPS = ["5y", "10y", "max"];
    var FEAR_Y0 = fearCurveHistory.length ? parseInt(fearCurveHistory[0].m.slice(0, 4), 10) : 0;
    function drawFearHistory(){
      var host = byId("fear-history"); if (!host || !fearCurveHistory.length) return;
      /* A cycle that opened before this series did cannot be windowed onto it, so the page falls back to the
         open cycle rather than drawing an empty chart — as Horizon does for its 2005 start. */
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
      /* One options object, handed to BOTH the first draw and the refit. Written twice they drift: a refit
         built without `xLabel` silently replaces a labelled chart with one that has no years. */
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
        histBar(histControls("fear-range",
          { series:fearCurveHistory, stops:FEAR_STOPS }, FEAR_Y0)) +
        '<div class="page-chart">' + histHead("fear-range") +
        divergeChart(opts(), host.clientWidth || 340) +
        histTip("fear-hist-tooltip") +
        '<div id="fear-trend"></div></div>';
      var ft = byId("fear-trend");
      // two words of a trend are two ends of ONE pair (see drawHzn). A curve inverts and steepens.
      put("fear-trend", trendPill(fit, null, true, { rising:"inverting", falling:"steepening" }));
      /* The refit comes FIRST and the wiring second, the order every other page uses: refitHistory replaces
         the svg's outerHTML, so a legend injected before it is thrown away with the element it was injected
         into — and lastHistGeom is the refit's geometry, not the first draw's, so reading __geom before it
         pins the hover to a chart that is gone. */
      var box = host.querySelector(".page-chart");
      refitHistory(box, function(w){ return divergeChart(opts(), w); });
      attachHistory(box, "fear-hist-tooltip", "divergeChart");
    }
    sheetRenderers["fear-range"] = drawFearHistory;
    /* and on OPEN, as every other history registers its sheet: the build-time drawing is made while the
       sheet is hidden and has no width, so its viewBox would not match the width it renders at and the whole
       picture, legend and all, would scale. */
    sheetRenderers["sheet-sign-sentiment"] = drawFearHistory;
    drawFearHistory();

    var hl = byId("curve-highlights");
    if (hl){
      var m = vixRow.meter, lo = m.optimal.from, hiB = m.optimal.to, v = m.value;
      var where = v < lo ? "below its usual band" : v > hiB ? "above its usual band" : "inside its usual band";
      /* the lede every Insights carries — what the reading IS in the body, in two sentences. */
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


  // ---------------- RENDER: Analysis subjects — one headline figure per collapsible section ----------------
  // Each summary shows the single number a reader would want before deciding to expand. All values are read from
  // the same objects the section itself renders from, so a summary can't drift from its section.
  function renderSubjectRows(){
    function ring(key, pct, state){
      put("subj-ring-" + key, vitalRingSvg(pct, state));
    }
    function dot(key, state){
      put("subj-ring-" + key, '<div class="subject-dot"><span class="dot ' + state + '"></span></div>');
    }
    function iconMark(key, state, svg){ // an icon on its wash instead of a dot
      put("subj-ring-" + key, '<div class="subject-icon"><span class="' + state + '">' + svg + '</span></div>');
    }
    function spark(key, html){ put("subj-spark-" + key, html || ""); }
    function say(key, text){ var el = byId("subj-say-" + key); if (el) el.textContent = text || ""; }
    function set(key, valueHtml, contextHtml){
      put("subj-value-" + key, valueHtml);
      /* A page may have no context paragraph at all — Sentiment and Horizon have none — so this reach is
         DECLARED optional rather than guarded and hoped for. Everything else uses `byId`, whose misses are
         recorded. */
      var c = byIdMaybe("subj-ctx-" + key); if (c) c.innerHTML = contextHtml || "";
    }
    function worst(states){
      var order = ["good","warning","serious","critical"];
      return states.reduce(function(w, st){ return order.indexOf(st) > order.indexOf(w) ? st : w; }, "good");
    }

    // Economic power — the composite, read as what is left in the battery: the mark is a bolt on the word's wash, the
    // number is the reserve, the word is energyFromReserve()'s. This row is the one place the reading lives.
    iconMark("resilience", powerWord.state, boltSvg());
    // Keren, V361: no context line. The table underneath IS the three structural markers, each with its own
    // flag, so a caption would introduce a thing that introduces itself. `.subject-body > .subject-context:empty`
    // hides the paragraph, so passing "" is the whole removal; the element stays for any page that wants one.
    set("resilience", powerScore + '<span class="unit">%</span><span class="tag ' + powerWord.state + '">' + powerWord.word + '</span>', "");
    say("resilience", longCycleImpressionShort);

    // GDP growth — the cycle's own figure (Keren, V215: "we are looking at things from a cycle point of view"): the row
    // carries US total growth over the cycle's closed years and its direction — the latest quarter reads at the chart's end line
    var cycGrowth = eraGrowth(currentEra), cycYears = cycGrowth.years;
    // green in expansion, red in contraction (Keren, V216): the mark and the row's own words ("still expanding" /
    // "contracting") say the same thing, so the colour is explained rather than alarming
    iconMark("gdp", regimeState(nowModel.reading.regime), sproutSvg());
    // no context line: the countries are the reader's to choose in the chart's dropdown, so naming one here reads as a
    // second headline. The row says the figure; the direction is a tag inside the panel, and the mark carries its colour
    set("gdp", fmtSigned(cycGrowth.total, 0) + '<span class="unit">% · cycle total growth</span>', "");
    say("gdp", "Compounded over " + cycYears.length + " closed years of the " + currentEra.name + ", and the latest quarter is still " +
      (nowModel.reading.regime === "expansion" ? "expanding" : "contracting") + ".");
    // year-on-year growth, quarter by quarter, for the last four years
    spark("gdp", sparkHtml(lastN(gdpQuarterlyYoY, 16, "v"), "yearly rate \u00b7 4 years", regimeState(nowModel.reading.regime)));

    /* ================= Horizon's row =================
       The figure is today's spread in points — the subtraction Pressure deliberately does not perform, because
       the pair is a measurement and the difference is a forecast. Different unit, different claim, different
       category: percent on Circulation, points on Mood. The verdict rides INSIDE the figure as a tag, the way
       Fear's does, so the two Mood readings are written the same way; the category list strips both pills to a
       plain word and the roster keeps the colour. */
    var hzLabel = document.querySelector('[data-subject="horizon"] .subject-label');
    put(hzLabel, '<span class="peek-mark">' + sunriseSvg() + '</span>Horizon' + CHEV);
    set("horizon", (horizonRead.spread >= 0 ? "+" : "\u2212") + Math.abs(horizonRead.spread).toFixed(2) +
      '<span class="unit">pts \u00b7 10Y \u2212 3M</span>' +
      '<span class="tag ' + horizonRead.state + '">' + horizonRead.word + '</span>', "");
    say("horizon", "");
    (function(){
      // the last twelve quarters either side of zero, on the purple rule (Keren, V312: "put a purple line so I can
      // understand what is above the line and what is below"): a diverging peek is the one case that needs it
      var slot = put("subj-spark-horizon", colPeek(
        t10y3mHistory.map(function(d){ return d.v; }).filter(function(v){ return v != null; }),
        function(v){ return "hzn-col " + (v < 0 ? "neg" : "pos"); }, 0, true));
    })();

    // Sentiment — the fear curve on the ring. The row shows a miniature of the reading its page opens, the rule
    // every other preview follows, not a face drawing an emotion (Keren, V277: "you can drop the faces and line
    // chart in the preview").
    put("subj-ring-sentiment", vitalRingSvg(curvePct(curveNow), "accent", curveNow == null ? "Fear curve: no reading"
        : "Fear curve at " + curveNow.toFixed(2) + ", where 1.00 is flat"));
    // the mood goes where a sign's mark goes — beside its name
    (function(){
      // the row does not exist yet — the builder converts the markup a moment later and MOVES the summary's
      // children into it, so an edit made here survives the move
      var lab = document.querySelector('[data-subject="sentiment"] .subject-label');
      /* Keren, V584: "change the name of the category from fear curve to fear. And the icon should be an
         umbrella, meaning fear of winter, basically." The category is the FEELING; the curve is one instrument
         that measures it, so the category is not named after the instrument. The umbrella is the app's own —
         the VIX wears it too — and it is what you carry because winter might come. */
      put(lab, '<span class="peek-mark mood-mark">' + umbrellaSvg() +
        '</span>Fear');
    })();
    // no context line (Keren, V232: "I already have the data below the cycle") — it only re-listed the table
    // the row's sentence is read on the page, in full (Keren, V277: "either put it in the inner page or if it
    // already exists drop it")
    set("sentiment", (curveNow == null ? "\u2014" : curveNow.toFixed(2)) +
      '<span class="unit">VIX \u00f7 3M</span><span class="tag ' + curveTag.state + '">' + curveTag.text + '</span>', "");
    say("sentiment", "");
    // no sparkline and no sentence on this row: the sentence is the panel's own impression, which the page states
    // in full a tap away (Keren, V277, above)
    spark("sentiment", "");

    // Valuation — the two gauges, each against its own record; the mark wears the worst of their two flags
    iconMark("valuation", worst(valuation.rows.map(function(r){ return r.flagState || "good"; })), diamondSvg());
    set("valuation", valRow("cape").flagValue + '<span class="unit">CAPE</span><span class="tag ' + valuation.tag.state + '">' + valuation.tag.text + '</span>', "");
    say("valuation", valuation.shortImpression);

  }
  GYN.step("renderSubjectRows", renderSubjectRows, "build"); renderSubjectRows();

  // ---------------- Per-cycle growth helpers (the cycle view and the Calendar list both use them) ----------------
  // Per-cycle growth = US real GDP over the cycle's CLOSED years (the in-progress year is excluded, as it is for
  // the peak-year marker): the compound annual rate (fair across cycles of different length), the total expansion,
  // and a rising/falling verdict from the least-squares slope of the yearly rates (within ±0.1 pp/yr is "flat").
  // eraInflation is the same aggregation for prices: December's year-over-year reading IS that calendar year's
  // inflation, so compounding the Decembers across a cycle's closed years gives what the cycle did to the price of
  // everything — the counterpart of eraGrowth's total expansion, in-progress year excluded for the same reason.
  // totalRiseIn: the same compounding over whatever months are in view rather than over a cycle, so the row can
  // follow a 5Y or 25Y window too. December to December, skipping the year in progress because it has no December yet.
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
  /* The minus is the real one, U+2212, not a hyphen, as on every other figure in this app: a hyphen is
     narrower than the plus and out of line in a monospaced column. Set here rather than at the call sites,
     because this is the one function they all go through. */
  function fmtSigned(v, dp){ return (v >= 0 ? "+" : "\u2212") + Math.abs(v).toFixed(dp); }
  // Growth in the book's words: the direction of growth is expansion or contraction, never "rising" or "falling" on
  // screen. The word itself always comes from the season model's reading — r.regime, the direction of the six-quarter
  // fit — so the chart's colour, the panel's tag and the season on the dial cannot disagree.
  // These only dress it. (Function declarations, not vars: the subject summaries above call them before this line runs.)
  function regimeArrow(regime){ return regime === "contraction" ? "\u2193 " : "\u2191 "; }
  // Keren, V304: the word on screen is "expanding", not "expansion" — and "contracting" the other way.
  // A participle says the body is DOING something, which is what this whole board is for; an abstract noun names
  // a state the reader has to attach to her. The MODEL's own value is untouched — it stays "expansion" and
  // "contraction", because the season logic, the ring and the analysis table all compare against those strings,
  // and renaming a value to change a label is how a display tweak turns into a data bug. Only the label moves.
  var GROWTH_SHOWN = { expansion:"expanding", contraction:"contracting", steady:"steady" };
  function growthShown(reg){ return GROWTH_SHOWN[reg] || reg; }
  function growthShownCap(reg){ var w = growthShown(reg); return w.charAt(0).toUpperCase() + w.slice(1); }
  function regimeState(regime){ return regime === "contraction" ? "warning" : "good"; }
  // How the phase is COLOURED — separate from regimeState, which still answers "how worrying is this"
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
  var cycleViewEl = byId("cycle-view");
  /* The Temperature and Growth charts live in today's drawers — Temperature in Lagging, Growth in GDP growth —
     each standing alone; a cycle opened from Analysis does not pull them into its view (see renderCycleView). */
  var tempCard = byId("temp-card"), growthCard = byId("growth-card");
  function placeCharts(){
    byId("slot-temp").appendChild(tempCard);
    byId("slot-growth").appendChild(growthCard);
  }
  placeCharts();
  var shownEra = null; // which cycle the view currently shows
  var calendarReset = null;   // set by the Calendar block below
  var metricPageReset = null; // set by the peek block below — closes an open metric page
  var openIndicatorsPage = null; // set there too — opens the Indicators page on a named tab
  // The top bar's back arrow is shared: the Calendar's open cycle and a metric page both use it, so it
  // has one listener and a slot for whatever is currently open. Two listeners would both fire on every press.
  var topbarBack = null;
  function setTopbar(title, onBack){
    byId("topbar-title").textContent = title;
    topbarBack = onBack || null;
    byId("topbar-back").hidden = !onBack;
  }
  byId("topbar-back").addEventListener("click", function(){ if (topbarBack) topbarBack(); });
