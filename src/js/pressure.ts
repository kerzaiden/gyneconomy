import { factsFrom, fmtAsOf, fmtSigned, hiCard, highlightsHtml, lede, mean, metered, srcBlock, titleCase } from "./format.ts";
import { addSources, need, svgEl } from "./dom.ts";
import { GYN } from "./live.ts";
import { AXIS, chartAxes, colWidth, crossLine, fitGroup, histFrame, publishGeom, trendOf, trendPill } from "./charts.ts";
import { curveAsOf, curveAt, curveSpread, fedFundsRange, M2_FROM_YEAR, PULSE_PRE2008, M2V_FROM_YEAR, m2vHistory, m2Yoy, now, t10y3mHistory, t10yYieldHistory, t2yYieldHistory, t30yYieldHistory, t3mYieldHistory, t5yYieldHistory } from "./data.ts";
import { cycleQtrIdx, cycleSlice, openCycle } from "./model.ts";
import { headPickRow, histControls, page, pageCycle, qWindowFrom } from "./history.ts";
import { indOf, pressureTendency, pressureZone, pulseBlock, pulseInfoHtml, volumeInfoHtml } from "./readings.ts";
import { chartShell, defineReading, indicatorInsight, redrawReading } from "./reading.ts";
import { ROSTER_BY } from "./roster.ts";
import { m2GrowthChart, velocityHistoryChart } from "./history-charts.ts";
import { rhythmCard, rhythmInfo } from "./rhythm.ts";
type YieldPt = { q: string; v: number | null; latest?: boolean };
type Maturity = { code: string; name: string; data: YieldPt[]; on: boolean; detail: string };
type Plot = (i: number) => number;

// ---- RENDER: Pressure — U.S. Treasury yields, one maturity at a time ----
var CURVE_KEY: Record<string, string> = { "3m":"3M", "2y":"2Y", "5y":"5Y", "10y":"10Y", "30y":"30Y" };
function latestYieldPoint(){
  var iso = curveAsOf(), mm = /^(\d{4})-(\d{2})-\d{2}$/.exec(iso);
  var v: Record<string, number | null> = {}, all = !!mm;
  Object.keys(CURVE_KEY).forEach(function(c){ v[c] = curveAt(CURVE_KEY[c]); if (v[c] == null) all = false; });
  if (!all || !mm) return null;
  return { q:mm[1] + " Q" + Math.ceil(Number(mm[2]) / 3), label:fmtAsOf(iso), v:v, spread:curveSpread() };
}
function withLatestPoint(base: YieldPt[], pt: YieldPt | null){
  var data = base.slice(), last = data[data.length - 1];
  if (pt && last.q === pt.q) data[data.length - 1] = pt; else if (pt && pt.q > last.q) data.push(pt);
  return data;
}
function tendencyNote(){
  var T = pressureTendency, pt = function(v: number){ return v.toFixed(2); };
  return " The word reads it like a barometer, by which way it moves: " + T.word.toLowerCase() + ", " + fmtSigned(T.d, 2) +
    " points in the quarterly average over the last four quarters. A shipping forecast grades a barometer steady, rising " +
    "or falling, and quickly when the move is large; nothing grades a yield that way, so the cut-offs come from this " +
    "record: steady within " + pt(T.still) + " points, quickly past " + pt(T.fast) + ", the lower and upper quartiles of " +
    "every four-quarter move since " + T.from + ". A barometer is corrected to sea level before two readings can be " +
    "compared, and a yield’s sea level is the neutral rate, the rate that neither presses on growth nor lifts it; nobody " +
    "can observe it, so the Fed’s economists estimate it.";
}
function pressureMaturities(): Maturity[]{
  return [
    {code:"3m", name:"3-Month", data: t3mYieldHistory, on:true,
      detail: '<h4>3-Month Treasury</h4>' +
        '<p class="caption">This tracks the Federal Reserve\'s own overnight policy rate almost directly — when the Fed raises or cuts, this yield moves within days. It\'s the reference rate behind savings accounts, CDs, money-market funds, and most variable-rate consumer debt like credit cards and many lines of credit. Quarterly average of the discount-basis TB3MS series, which reads a touch below the investment-basis short yield shown on the curve above — a real definitional gap, not an inconsistency.</p>' +
        srcBlock([{t:"FRED — 3-Month Treasury Bill Rate (TB3MS)", u:"https://fred.stlouisfed.org/series/TB3MS"}])},
    {code:"2y", name:"2-Year", data: t2yYieldHistory, on:true,
      detail: '<h4>2-Year Treasury</h4>' +
        '<p class="caption">Reflects the market\'s own forecast of where the Fed\'s policy rate will average over the next couple of years — it often moves before the Fed actually acts, on rate-cut or rate-hike expectations. It\'s the closest single number to "what markets think the Fed will do next." Auto loans and shorter-duration corporate borrowing tend to price off this end of the curve.</p>' +
        srcBlock([{t:"FRED — 2-Year Treasury Rate (GS2)", u:"https://fred.stlouisfed.org/series/GS2"}])},
    {code:"5y", name:"5-Year", data: t5yYieldHistory, on:true,
      detail: '<h4>5-Year Treasury</h4>' +
        '<p class="caption">Sits in the middle of the curve, blending near-term Fed-policy expectations with a longer view on growth and inflation. It\'s the benchmark for medium-duration borrowing — 5-year adjustable-rate mortgages, mid-length corporate bonds, and many business loans.</p>' +
        srcBlock([{t:"FRED — 5-Year Treasury Rate (GS5)", u:"https://fred.stlouisfed.org/series/GS5"}])},
    {code:"10y", name:"10-Year", data: t10yYieldHistory, on:true,
      detail: '<h4>10-Year Treasury</h4>' +
        '<p class="caption">The single most-referenced benchmark in the credit market. A 30-year fixed mortgage sounds like a 30-year commitment, but between moves and refinances its real average lifespan runs closer to 7–10 years — which is why mortgage rates track this maturity rather than the 30-year bond. Most investment-grade corporate bonds are also quoted as this yield plus a spread, and it\'s the standard discount-rate proxy used in stock valuation.' + tendencyNote() + '</p>' +
        srcBlock([{t:"FRED — 10-Year Treasury Rate (GS10)", u:"https://fred.stlouisfed.org/series/GS10"},
          {t:"Met Office — Shipping forecast glossary (pressure tendency)", u:"https://www.metoffice.gov.uk/weather/guides/coast-and-sea/glossary"},
          {t:"Federal Reserve Bank of New York — Measuring the Natural Rate of Interest", u:"https://www.newyorkfed.org/research/policy/rstar"}])},
    {code:"30y", name:"30-Year", data: t30yYieldHistory, on:true,
      detail: '<h4>30-Year Treasury</h4>' +
        '<p class="caption">Reflects the compensation investors demand for the genuine uncertainty of the longest possible horizon — economists call this the term premium. It anchors the longest corporate and government bonds. The line has a real gap in 2005: the Treasury suspended the 30-year bond from October 2001 to February 2006, and no 30-year constant-maturity yield was published from February 2002 until it returned — shown here as a break rather than a guessed figure.</p>' +
        srcBlock([{t:"FRED — 30-Year Treasury Rate (GS30)", u:"https://fred.stlouisfed.org/series/GS30"}])}
  ];
}
function flowRow(term: string){ var ind = indOf({ term:term }); if (!ind) throw new Error("no " + term + " reading"); return ind; }
function defineFlow(){
  defineReading("sheet-sign-pulse", {
    face:function(){ var ind = flowRow("Pulse"); return [ind.metric, ind.tag ? ind.tag.text : ""]; },
    info:function(){ return pulseInfoHtml(flowRow("Pulse")) + rhythmInfo(); },
    controls:function(){ return histControls("pulse-range", { depth:Math.floor(m2vHistory.length / 4) }); },
    history:function(){
      var key = page.range["pulse-range"], cyc = pageCycle("pulse-range"), idx = cyc ? cycleQtrIdx(M2V_FROM_YEAR, cyc, m2vHistory.length) : null;
      var from = idx ? idx[0] : qWindowFrom(m2vHistory.length, key), to = idx ? idx[1] : undefined;
      return { geom:"velocityHistoryChart", wrap:"vh-host hscroll", scroll:true, chart:function(w: number){ return velocityHistoryChart(w, from, to); },
        trend:trendPill(trendOf(m2vHistory.slice(from, to), "points", "quarter"), null, true, { rising:"accelerating", falling:"decelerating" }) };
    },
    aside:function(){ var ind = flowRow("Pulse"); return pulseBlock(metered(ind.meter), PULSE_PRE2008, ind); },
    insight:function(){ return indicatorInsight(ROSTER_BY["sheet-sign-pulse"], flowRow("Pulse"), function(v){ return v.toFixed(2) + "\u00d7"; }, rhythmCard()); },
    src:flowRow("Pulse").src
  });
  defineReading("sheet-sign-volume", {
    face:function(){ var ind = flowRow("Volume"); return [ind.metric, ind.tag ? ind.tag.text : ""]; },
    info:function(){ return volumeInfoHtml(flowRow("Volume")); },
    controls:function(){ return histControls("volume-range", { depth:Math.floor((m2Yoy.length - 4) / 4) }); },
    history:function(){
      var len = m2Yoy.length - 4, key = page.range["volume-range"], cyc = pageCycle("volume-range");
      var idx = cyc ? cycleQtrIdx(M2_FROM_YEAR + 1, cyc, len) : null;
      var from = idx ? idx[0] : qWindowFrom(len, key), to = idx ? idx[1] : undefined;
      return { geom:"m2GrowthChart", wrap:"vh-host", chart:function(w: number){ return m2GrowthChart(w, from, to); },
        trend:trendPill(trendOf(m2Yoy.slice(4).slice(from, to).filter(function(v){ return v != null; }), "points", "quarter"), null, true,
          { rising:"expanding", falling:"contracting" }) };
    },
    insight:function(){ return indicatorInsight(ROSTER_BY["sheet-sign-volume"], flowRow("Volume"), function(v){ return fmtSigned(v, 1) + "%"; }); },
    src:flowRow("Volume").src
  });
}
function ylmYearMarks(svg: Element, quarters: string[], ylmFrom: number, ylmTo: number, x: Plot, padT: number, H: number, padB: number){
  var el = svgEl;
  var firstYear = parseInt(quarters[ylmFrom].slice(0, 4), 10);
  var lastYear = parseInt(quarters[ylmTo - 1].slice(0, 4), 10);
  var step = Math.max(1, Math.round((lastYear - firstYear) / 4));
  var xLabelYears: number[] = [];
  for (var yv = firstYear + (ylmFrom ? step : 0); yv <= lastYear; yv += step) xLabelYears.push(yv);
  quarters.forEach(function(q, i){
    if (i < ylmFrom || i >= ylmTo) return;
    var m = q.match(/^(\d{4}) Q1$/);
    if (m && xLabelYears.indexOf(parseInt(m[1],10)) !== -1){
      svg.insertBefore(el("path", { class:"bt-vgrid",
        d:"M" + x(i).toFixed(1) + "," + padT + "L" + x(i).toFixed(1) + "," + (H - padB) }), svg.firstChild);
      var xl = el("text", {x:x(i), y:H - AXIS.FOOT, class:"bt-xl", "text-anchor":"middle"});
      xl.textContent = m[1];
      svg.appendChild(xl);
    }
  });
}
function ylmColumns(svg: Element, maturities: Maturity[], quarters: string[], ylmFrom: number, ylmTo: number, x: Plot, y: Plot, colW: number, latestSpread: number | null){
  var el = svgEl;
  var spreadAt: Record<string, number | null> = {};
  t10y3mHistory.forEach(function(d){ spreadAt[d.q] = d.v; });
  var lastCol = maturities[0].data[quarters.length - 1];
  if (lastCol && lastCol.latest && latestSpread != null) spreadAt[lastCol.q] = latestSpread;
  maturities.forEach(function(mat){
    if (!mat.on) return;
    var y0 = y(0);
    mat.data.forEach(function(d, i){
      if (i < ylmFrom || i >= ylmTo || d.v == null) return;
      var sp = spreadAt[quarters[i]];
      var zone = sp == null ? "normal" : pressureZone(sp).key;
      svg.appendChild(el("path", {
        class:"yl-col hcol " + zone, "stroke-width":colW.toFixed(2), "stroke-linecap":"butt",
        d:"M" + x(i).toFixed(2) + "," + y0.toFixed(2) + "V" + y(d.v).toFixed(2)
      }));
    });
  });
}
function ylmFitLine(svg: Element, maturities: Maturity[], ylmFrom: number, ylmTo: number, x: Plot, y: Plot, W: number, padL: number, padR: number){
  var fitVals: number[] = [];
  maturities.forEach(function(m){
    if (!m.on) return;
    m.data.forEach(function(d, i){ if (i >= ylmFrom && i < ylmTo && d.v != null) fitVals.push(d.v); });
  });
  var ylmFit = trendOf(fitVals, "points", "quarter").fit;
  if (ylmFit && ylmFit.n > 1)
    svg.insertAdjacentHTML("beforeend", fitGroup(
      { fit:ylmFit, fmt:function(v: number){ return v.toFixed(2) + "%"; } },
      x(ylmFrom), x(ylmTo - 1), y, W, padL, padR));
}
function pressureHead(maturities: Maturity[], mat: Maturity | undefined, title: string){
  var H = page.head["pressure-range"];
  H.title = title;
  H.menu = function(){
    return [
      { key:"levels", label:"Treasury yields", on:true, value:(mat || {} as Partial<Maturity>).name || "",
        rows:maturities.map(function(m){
          return headPickRow(mat === m, "data-ylm-mat", m.code, m.name);
        }).join("") }
    ];
  };
}
function definePressure(){
  var svg: Element;
  var F = histFrame(), W = F.W, H = F.H, padL = F.L, padR = W - F.R, padT = F.T, padB = H - F.B;
  var innerW = W - padL - padR, innerH = H - padT - padB;
  var el = svgEl;

  var quarters = t3mYieldHistory.map(function(d){ return d.q; });

  var maturities = pressureMaturities();

  var latestLabel = "", latestSpread: number | null = null;
  var bases = maturities.map(function(m){ return m.data; });
  function withLatest(){
    var L = latestYieldPoint();
    latestLabel = L ? L.label : ""; latestSpread = L ? L.spread : null;
    maturities.forEach(function(m, i){ m.data = withLatestPoint(bases[i], L && { q:L.q, v:L.v[m.code], latest:true }); });
    quarters = maturities[0].data.map(function(d){ return d.q; });
  }
  function colLabel(i: number){ var d = maturities[0].data[i]; return d && d.latest ? latestLabel : quarters[i]; }

  addSources([
    {t:"FRED — 5-Year Treasury Rate (GS5)", u:"https://fred.stlouisfed.org/series/GS5"},
    {t:"FRED — 30-Year Treasury Rate (GS30)", u:"https://fred.stlouisfed.org/series/GS30"}
  ]);

  var ylmFrom = 0, ylmTo = quarters.length;
  function ylmCount(){ return ylmTo - ylmFrom; }
  function x(i: number){
    var half = innerW / (2 * Math.max(1, ylmCount()));
    return padL + half + ((innerW - 2 * half) * (i - ylmFrom)) / ((ylmCount() - 1) || 1);
  }
  var minV: number, maxV: number;
  function computeScale(){
    var vals: number[] = [];
    maturities.forEach(function(m){
      if (!m.on) return;
      m.data.forEach(function(d, i){ if (i >= ylmFrom && i < ylmTo && d.v != null) vals.push(d.v); });
    });
    if (!vals.length) vals = [0, 6];
    minV = 0;
    maxV = Math.ceil(Math.max.apply(null, vals) / 1) * 1;
    if (maxV <= minV) maxV = minV + 1;
  }
  function y(v: number){ return padT + innerH - ((v - minV) / (maxV - minV)) * innerH; }

  function render(){
    svg = need("ylm-svg");
    var shell = svg.parentElement;
    F = histFrame(shell && shell.clientWidth); W = F.W; H = F.H;
    innerW = W - padL - padR; innerH = H - padT - padB;
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    computeScale();
    svg.innerHTML = "";

    var steps = maxV - minV <= 6 ? (maxV - minV) : 6, ylmTicks = [];
    for (var s = 0; s <= steps; s++) ylmTicks.push(minV + ((maxV - minV) * s) / steps);
    svg.insertAdjacentHTML("beforeend", chartAxes({ ticks:ylmTicks, y:y, x0:padL, x1:(W - padR), top:(padT - AXIS.LEG - AXIS.READ), bot:(H - padB),
      base:y(0), noGridAt:0, fmt:function(v: number){ return v.toFixed(0) + "%"; } }));
    svg.classList.add("hist-svg");
    svg.insertAdjacentHTML("beforeend",
      crossLine(padT, (H - padB)));
    var picked = matOf(matPick);
    publishGeom("ylm", { L:x(ylmFrom), R:x(ylmTo - 1), T:padT, B:(H - padB), W:W,
                     n:ylmCount(), at:function(d: unknown, i: number){ return colLabel(ylmFrom + i); },
                     fmt:function(v: number){ return v.toFixed(2) + "%"; },
                     refs:[{ label:"Inverted", swatch:"var(--critical)" },
                           { label:"Normal",   swatch:"var(--gold)" }],
                     vals:(picked ? picked.data.slice(ylmFrom, ylmTo).map(function(d){
                            return d.v == null ? null : { v:d.v }; }) : []) });

    ylmYearMarks(svg, quarters, ylmFrom, ylmTo, x, padT, H, padB);

    // ---- The picked maturity is drawn as COLUMNS (Keren, V394 — see ylmFrom), shaded by the 10-year-minus ----
    ylmColumns(svg, maturities, quarters, ylmFrom, ylmTo, x, y, colWidth(innerW / Math.max(1, ylmCount())), latestSpread);

    ylmFitLine(svg, maturities, ylmFrom, ylmTo, x, y, W, padL, padR);

    var crosshair = el("line", {x1:0, x2:0, y1:padT, y2:H - padB, class:"crosshair"});
    svg.appendChild(crosshair);
    var hit = el("rect", {x:padL, y:0, width:innerW, height:H, class:"hero-hit"});
    svg.appendChild(hit);
  }

  var matPick = "10y";
  GYN.on("pickSeries", function(bar: unknown, code: string){
    matPick = code; maturities.forEach(function(m){ m.on = (m.code === matPick); });
    redrawReading("sheet-sign-pressure");
  });

  function matOf(code: string){ return maturities.filter(function(m){ return m.code === code; })[0]; }
  function matTitle(){ var m = matOf(matPick); return (m ? m.name : "") + " U.S. Treasury"; }
  function matDetail(){ var m = matOf(matPick); return m ? m.detail : ""; }

  function ylmWindow(){
    withLatest();
    var ylmY0 = parseInt(quarters[0].slice(0, 4), 10);
    var ylmCyc = pageCycle("pressure-range", ylmY0);
    var ylmSpan = ylmCyc ? cycleSlice(maturities[0].data, ylmCyc) : null;
    ylmFrom = ylmSpan ? ylmSpan[0] : qWindowFrom(quarters.length, page.range["pressure-range"]);
    ylmTo   = ylmSpan ? ylmSpan[1] : quarters.length;
    return ylmY0;
  }
  maturities.forEach(function(m){ m.on = (m.code === matPick); });
  var ylmY0 = ylmWindow();
  defineReading("sheet-sign-pressure", {
    face:function(){ var y = curveAt("10Y"); return [y == null ? "\u2014" : y.toFixed(2) + "%", pressureTendency.word]; },
    info:function(){ return '<h4>' + titleCase(matTitle()) + '</h4>' + factsFrom(matDetail()); },
    controls:function(){ return histControls("pressure-range", { depth:Math.floor(quarters.length / 4) }, ylmY0); },
    history:function(){
      ylmY0 = ylmWindow();
      pressureHead(maturities, matOf(matPick), matTitle());
      var w: number[] = [], mt = matOf(matPick);
      if (mt) mt.data.slice(ylmFrom, ylmTo).forEach(function(d){ if (d.v != null) w.push(d.v); });
      return { geom:"ylm", paint:render,
        chart:function(){ return chartShell("ylm", "US Treasury yield levels by maturity, quarterly, 2005 to 2026"); },
        trend:trendPill(trendOf(w, "points", "quarter"), null, true, { rising:"climbing", falling:"easing" }) };
    },
    insight:pressureInsights
  });
}
// ---- Pressure's Insights ----
function pressureInsights(){
  var y10 = curveAt("10Y");
  var seen = t10yYieldHistory.filter(function(d){ return d.v != null; });
  var hi = seen.reduce(function(a, d){ return d.v > a.v ? d : a; });
  var lo = seen.reduce(function(a, d){ return d.v < a.v ? d : a; });
  var cyc = openCycle(), span = cycleSlice(t10yYieldHistory, cyc);
  var inCycle = span ? t10yYieldHistory.slice(span[0], span[1]).filter(function(d){ return d.v != null; }) : [];
  var cycAvg = inCycle.length ? mean(inCycle.map(function(d){ return d.v; })) : null;
  var pct = function(v: number){ return v.toFixed(2) + "%"; };
  var cards = [];
  cards.push(lede('Blood pressure is what the flow meets in the vessels — the force every organ ' +
    'downstream lives under. Here it is the yield on the ten-year Treasury: the price the economy’s one ' +
    'risk-free borrower pays for a decade of money, and the level everything else is priced off.'));
  cards.push(hiCard("The Risk-Free Loan", "",
    "A thirty-year mortgage prices off this yield, because between moves and refinances a mortgage lives " +
    "seven to ten years; investment-grade companies borrow at it plus a spread; and it is the discount rate " +
    "a stock’s future earnings are measured against. The Federal funds rate is the overnight rate the Fed sets" +
    (now.fedFunds && now.fedFunds.lo != null ? " (" + fedFundsRange() + ")" : "") +
    "; this is that rate as the market re-prices it ten years out" +
    (y10 != null ? " — " + pct(y10) + " today" : "") + "."));
  cards.push(hiCard("Pressure on the Borrower", "",
    "When it rises, every borrower feels it, and the Treasury first: this is the rate the government rolls " +
    "its debt over at, so a higher ten-year today is a higher interest burden a year from now — the Interest " +
    "payments reading, under Debt. " +
    (cycAvg != null ? "This cycle has averaged " + pct(cycAvg) + (y10 != null ? " against " + pct(y10) + " today" : "") + ". " : "") +
    "Since " + t10yYieldHistory[0].q.slice(0, 4) + " the quarterly record runs from " + pct(lo.v) + " in " + lo.q +
    " to " + pct(hi.v) + " in " + hi.q + "."));
  cards.push(hiCard("Level, Not Slope", "",
    "This page reads the LEVEL. The gap between this yield and the three-month bill is the Treasury spreads reading, under it, " +
    "because that gap is the market’s forecast of the next few years rather than a pressure it is under " +
    "now. Read them together: a high level with a flat or inverted curve is a body under strain that expects " +
    "relief; a low level with a steep curve is one at rest that expects to work."));
  return highlightsHtml(cards);
}
export function defineMarketReadings(){
  definePressure(); defineFlow();
}
