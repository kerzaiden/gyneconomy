import { atMonth, factsFrom, hiCard, highlightsHtml, qLabel, srcBlock } from "./format.js";
import { addSources, appendSvgMarkup, byId, byIdMaybe, expandBtn, put, svgEl, ui } from "./dom.js";
import { GYN } from "./live.js";
import { attachHoverTracking, AXIS, chartAxes, colPath, colPeek, colWidth, divergeChart, fitLine, histBar, histFrame, histTip, trendOf, trendPill, vGrid, windowYears, xLabel } from "./charts.js";
import { fedFundsHistory, volatilityHistory } from "./history-fred.js";
import { calendarTodayY } from "./refresh-season.js";
import { curveNoteFull, fedFundsRange, now, t10y2yHistory, t10y3mHistory, t10y3mRecessions, uninvLagCycles, uninvLagToday, valRow, VIX_CALM, VIX_CONVENTION, VIX_FEAR, VOL_JOIN } from "./data.js";
import { cycleQtrIdx, cycleSlice } from "./model.js";
import { attachHistory, HIST_NOTE, histControls, histHead, histLegend, histNote, histReadEnsure, histReadFill, mWindowFrom, page, pageCycle, qWindowFrom, refitHistory, timelineWindow } from "./history.js";
import { curveVerdict, fearCurve, horizonRead, policyFactRows, volatilityDetailHtml, volatilityRing, volatilityTag } from "./readings.js";
import { fedFundsHistoryChart } from "./history-charts.js";
import { drawsPage, spreadPick } from "./render-core.js";

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
  var F = histFrame(), W = F.W, H = F.H, padL = F.L, padR = W - F.R, padT = F.T, padB = H - F.B;
  var innerW = W - padL - padR, innerH = H - padT - padB;
  var minV = -2, maxV = 4;
  var el = svgEl;
  var tooltip = byId("spread-history-tooltip");

  var series = spreadSeries();
  addSources(series["3m"].sources); addSources(series["2y"].sources);

  function qIndex(data, q){ for (var i=0;i<data.length;i++){ if (data[i].q === q) return i; } return -1; }
  function x(i, n){ var h = innerW / (2 * Math.max(1, n)); return padL + h + (innerW - 2 * h) * i / (n - 1); }
  function y(v){ return padT + innerH - ((v - minV) / (maxV - minV)) * innerH; }
  function pts(v){ return (v >= 0 ? "+" : "\u2212") + Math.abs(v).toFixed(2) + " pts"; }

  function draw(key, from, to){
    var s = series[key];
    var data = s.data;
    if (from != null) data = data.slice(from, to == null ? undefined : to);
    if (data.length < 2) data = s.data;
    var shell = svg.parentElement;
    F = histFrame(shell && shell.clientWidth); W = F.W; H = F.H;
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
    appendSvgMarkup(svg, fitLine(data.map(function(d){ return d.v; }), "quarter", pts, x(0, data.length), x(data.length - 1, data.length), y, W, padL, padR));

    var crosshair = el("line", { x1:0, x2:0, y1:padT, y2:H - padB, class:"hist-cross" });
    svg.appendChild(crosshair);
    var hoverDot = el("circle", { r:4.5, class:"curve-dot end", opacity:0 });
    svg.appendChild(hoverDot);
    var hit = el("rect", { x:padL, y:0, width:innerW, height:H, class:"hero-hit" });
    svg.appendChild(hit);
    shell = byId("spread-history-shell");
    if (shell){
      shell.__geom = { vals:data, n:data.length, W:W, T:yTop, B:yBot,
                       L:x(0, data.length), R:x(data.length - 1, data.length),
                       at:function(d){ return qLabel(d.q); },
                       fmt:pts,
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
      crosshair.setAttribute("x1", String(px)); crosshair.setAttribute("x2", String(px)); crosshair.setAttribute("opacity", "1");
      hoverDot.setAttribute("opacity", "0");
      svg.classList.add("hovering");
      if (onCol) onCol.classList.remove("on");
      onCol = svg.querySelectorAll(".hcol")[i];
      if (onCol) onCol.classList.add("on");
      if (shell) histReadFill(shell, d, i);
    }
    function hide(){
      crosshair.setAttribute("opacity", "0"); hoverDot.setAttribute("opacity", "0");
      svg.classList.remove("hovering");
      if (onCol){ onCol.classList.remove("on"); onCol = null; }
      if (shell) histReadFill(shell, null);
    }
    attachHoverTracking(hit, svg, W, padL, innerW, data.length, showAt, hide);

    ui.spreadDetail = s.detail;
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

  ui.drawSpreadWindow = draw;
  draw("3m");
}
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
  ui.uninvDetail = detail;
  addSources([
    {t:"Predicting Recessions Using the Yield Curve (Federal Reserve Bank of Boston)", u:"https://www.bostonfed.org/publications/current-policy-perspectives/2020/predicting-recessions-using-the-yield-curve.aspx"}
  ]);
}
// ---- RENDER: the Treasury spreads, inside Pressure ----
function renderHorizonPage(){
  var host = byId("pressure-timeline"); if (!host) return;
  var hznY0 = parseInt(t10y3mHistory[0].q.slice(0, 4), 10);
  function hznData(){ return spreadPick === "2y" ? t10y2yHistory : t10y3mHistory; }
  function drawHzn(){
    var data = hznData();
    var cyc = pageCycle("pressure-range", hznY0);
    var idx = cyc ? cycleQtrIdx(hznY0, cyc, data.length) : null;
    var from = idx ? idx[0] : qWindowFrom(data.length, page.range["pressure-range"]);
    var to = idx ? idx[1] : data.length;
    host.innerHTML = histControls("pressure-range",
      { depth:Math.floor(data.length / 4) }, hznY0);
    if (ui.drawSpreadWindow) ui.drawSpreadWindow(spreadPick, from, to);
    var tr = byId("ylm-trend");
    if (tr){
      var w = [];
      data.slice(from, to).forEach(function(d){ if (d.v != null) w.push(d.v); });
      tr.innerHTML = trendPill(trendOf(w, "points", "quarter"), null, true,
        { rising:"steepening", falling:"flattening" });
    }
    put("pressure-insights", spreadInsights());
  }
  ui.drawSpreadView = drawHzn;
}
function spreadInsights(){
  var r = horizonRead;
  var sgn = function(v){ return (v >= 0 ? "+" : "−") + Math.abs(v).toFixed(2); };
  var fromLong = r.dLong >= -r.dShort;
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
    '<div class="aux-stat"><span>Time from un-inversion' + expandBtn(ui.uninvDetail) + '</span><b>' +
      uninvLagToday.months + ' months</b></div>' +
    '<div class="aux-stat wordy"><span>Last inverted</span><b>Oct 2022 – Dec 2024</b></div>' +
    '<div class="aux-stat wordy"><span>Deepest point</span><b>−1.89 pts · May 4, 2023</b></div>';
  return '<section class="highlights insights"><div class="hi-head">Insights</div>' +
    cards.join("") + facts + '</section>';
}
// ---- RENDER: Valuation (slow) ----
function renderValuationTag(){
  var cape = valRow("cape");
  histNote("sheet-metric-valuation", '<h4>' + cape.marker + '</h4><div class="marker-sub">' + cape.sub + '</div>' + factsFrom(cape.note));
  addSources(now.valuation.src);
}
/* ---- RENDER: Hormones ---- */
function renderHormones(){
  var host = byId("hormones-history"); if (!host || !fedFundsHistory.length) return;
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
    var cyc = pageCycle(id);
    var span = cyc ? ffCycleMonths(cyc) : null;
    var from = span ? span[0] : mWindowFrom(fedFundsHistory.length, page.range[id]);
    var to = span ? span[1] : undefined;
    var win = fedFundsHistory.slice(from, to);
    bar.innerHTML =
      histBar(histControls(id, { series:fedFundsHistory }, FF_Y0)) +
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
  drawsPage("sheet-sign-hormones", draw);
  draw();

  HIST_NOTE["hormones-range"] = '<h4>Effective federal funds rate</h4>' + factsFrom(
    "The rate banks actually charge each other overnight, averaged by month. It is the price the whole " +
    "yield curve is quoted against, which is why it reads first on this page and the Treasury levels below " +
    "read second. The FOMC does not set this number; it sets a TARGET RANGE and steers the rate into it, " +
    "so the two are different figures and the page says which is which: the range is the decision, the " +
    "chart is where money traded. Target " + fedFundsRange() + (now.fedFunds.asOf ? ", set " + now.fedFunds.asOf : "") +
    (now.fedFunds.vote ? " on a " + now.fedFunds.vote + " vote" : "") + "; the effective rate ran at " +
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
        if (d.v > ext.v) ext = d;
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

  var dir = /^\+/.test(now.fedFunds.lastMove) ? "Tightening"
          : /^[-\u2212]/.test(now.fedFunds.lastMove) ? "Easing" : "On hold";
  put("subj-value-hormones", fedFundsRange() +
    '<span class="unit">Fed funds target</span><span class="tag norm">' + dir + '</span>');
  var rowSay = byId("subj-say-hormones");
  if (rowSay) rowSay.outerHTML = colPeek(fedFundsHistory.map(function(d){ return d.v; }),
                                         function(){ return "ff-col"; }, 0, true);
}
// ---- RENDER: Volatility — the VIX since 1986, and the shape of its curve today ----
function renderVolatility(){
  HIST_NOTE["fear-range"] = volatilityDetailHtml();
  var VOL_Y0 = volatilityHistory.length ? parseInt(volatilityHistory[0].m.slice(0, 4), 10) : 0;
  function drawVolatility(){
    var host = byId("fear-history"); if (!host || !volatilityHistory.length) return;
    var cyc = pageCycle("fear-range", VOL_Y0);
    var span = cyc ? cycleSlice(volatilityHistory, cyc) : null;
    var vals = span ? volatilityHistory.slice(span[0], span[1])
                    : timelineWindow(volatilityHistory, page.range["fear-range"]);
    if (!vals.length) vals = volatilityHistory.slice(-12);
    var fit = trendOf(vals.map(function(d){ return d.v; }), "points", "month");
    var years = windowYears(parseInt(vals[0].m.slice(0, 4), 10),
                            parseInt(vals[vals.length - 1].m.slice(0, 4), 10), 5);
    var line = VIX_CALM;
    function opts(){
      return { vals:vals, mid:line, midLabel:"calm below " + line,
        fmt:function(v){ return v.toFixed(1); },
        tickFmt:function(v){ return String(Math.round(v)); },
        at:function(d){ return atMonth(d) + (d.m < VOL_JOIN ? " \u00b7 VXO" : ""); },
        xLabel:function(d){
          var y = parseInt(d.m.slice(0, 4), 10);
          return (d.m.slice(5) === "01" && years.indexOf(y) !== -1) ? "\u2019" + String(y).slice(2) : "";
        },
        fit:fit.fit,
        alt:"The VIX, monthly average of daily closes, against the convention\u2019s calm line at " + line +
            "; before 1990 the VXO, Cboe\u2019s original VIX."
      };
    }
    host.innerHTML =
      histBar(histControls("fear-range",
        { series:volatilityHistory }, VOL_Y0)) +
      '<div class="page-chart">' + histHead("fear-range") +
      divergeChart(opts(), host.clientWidth || 340) +
      histTip("fear-hist-tooltip") +
      '<div id="fear-trend"></div></div>';
    put("fear-trend", trendPill(fit, null, true));
    var box = host.querySelector(".page-chart");
    refitHistory(box, function(w){ return divergeChart(opts(), w); });
    attachHistory(box, "fear-hist-tooltip", "divergeChart");
    volatilityHighlights(VOL_Y0);
  }
  drawsPage("sheet-sign-sentiment", drawVolatility);
  drawVolatility();
  addSources(now.sentiment.src.concat(VIX_CONVENTION));
}
function volatilityHighlights(y0){
  var hl = byId("curve-highlights"); if (!hl || !volatilityHistory.length) return;
  var m = now.vixRow.meter, v = m.value, tag = volatilityTag();
  var top = volatilityHistory.reduce(function(a, d){ return d.v > a.v ? d : a; });
  var vixOnly = volatilityHistory.filter(function(d){ return d.m >= VOL_JOIN; });
  var vixTop = vixOnly.reduce(function(a, d){ return d.v > a.v ? d : a; }, vixOnly[0]);
  var higher = volatilityHistory.filter(function(d){ return d.v > v; }).length;
  var r = fearCurve(), shape = curveVerdict(r);
  var lede = '<p class="hi-lede">Volatility is how hard the market is shaking. The VIX prices the next thirty ' +
    'days of it, so it climbs with fear and sinks with calm \u2014 read it the other way round, because panic ' +
    'gathers near bottoms and complacency near tops.</p>';
  var nowTxt = "At " + v.toFixed(2) + " the VIX reads " + tag.text.toLowerCase() + ": by convention below " + VIX_CALM +
    " is calm, " + VIX_CALM + " to " + VIX_FEAR + " elevated and above " + VIX_FEAR + " fearful. Its daily record low is " +
    m.min + " and its high " + m.max + ".";
  var recTxt = higher + " of the " + volatilityHistory.length + " months since " + y0 +
    " averaged higher than today. The most shaken month was " + atMonth(top) + " at " + top.v.toFixed(1) +
    (top.m < VOL_JOIN ? " on the VXO" + (vixTop ? ", and on the VIX itself " + atMonth(vixTop) + " at " + vixTop.v.toFixed(1) : "") : "") + ".";
  var shapeTxt = r == null
    ? "No reading today \u2014 the three-month leg is missing, so the shape cannot be computed."
    : "The next month is priced at " + v.toFixed(2) + " against " + now.vix3mClose.toFixed(2) + " three months out, a ratio of " +
      r.toFixed(2) + ". " + (r >= 1
        ? "Inverted: insuring the next month costs more than insuring the next quarter, which is what a market braced for something immediate looks like \u2014 and inversions cluster near bottoms."
        : "That is the ordinary shape, the far month dearer than the near one; the further below 1.00, the less the market is paying to be wrong about the weeks just ahead.");
  hl.innerHTML = highlightsHtml([lede,
    hiCard("Where it sits" + expandBtn(factsFrom(now.vixRow.note)), tag.state, nowTxt),
    hiCard("Against the record", "", recTxt),
    hiCard("What the shape is saying" + expandBtn(factsFrom(curveNoteFull)), shape.state, shapeTxt)]);
}
// ---- RENDER: Analysis subjects — one headline figure per collapsible section ----
function renderSubjectRows(){
  function spark(key, html){ put("subj-spark-" + key, html || ""); }
  function say(key, text){ var el = byId("subj-say-" + key); if (el) el.textContent = text || ""; }
  function set(key, valueHtml, contextHtml){
    put("subj-value-" + key, valueHtml);
    var c = byIdMaybe("subj-ctx-" + key); if (c) c.innerHTML = contextHtml || "";
  }



  put("subj-ring-sentiment", volatilityRing());
  var volTag = volatilityTag();
  set("sentiment", now.vixRow.flagValue +
    '<span class="unit">VIX</span><span class="tag ' + volTag.state + '">' + volTag.text + '</span>', "");
  say("sentiment", "");
  spark("sentiment", "");


}
// ---- Per-cycle growth helpers (the cycle view and the Calendar list both use them) ----
export function setTopbar(title, onBack){
  byId("topbar-title").textContent = title;
  ui.topbarBack = onBack || null;
  byId("topbar-back").hidden = !onBack;
}

export var cycleViewEl;

export function bootRenderPages(){
  GYN.step("renderSpreadHistory", renderSpreadHistory, "mixed");
  renderSpreadHistory();
  GYN.step("deriveUninversionDetail", deriveUninversionDetail, "derive");
  deriveUninversionDetail();
  GYN.step("renderHorizonPage", renderHorizonPage, "render");
  renderHorizonPage();
  GYN.step("renderValuationTag", renderValuationTag, "render");
  renderValuationTag();
  GYN.step("renderHormones", renderHormones, "build");
  renderHormones();
  GYN.step("renderVolatility", renderVolatility, "build");
  renderVolatility();
  GYN.step("renderSubjectRows", renderSubjectRows, "build");
  renderSubjectRows();
  cycleViewEl = byId("cycle-view");
  byId("topbar-back").addEventListener("click", function(){ if (ui.topbarBack) ui.topbarBack(); });
}
