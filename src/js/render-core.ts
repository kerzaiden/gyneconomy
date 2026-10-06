import { auxStat, CHEV, dropWhatIsShown, factsFrom, fmtAsOf, fmtSigned, hiCard, mean, qLabel, srcBlock, tagFor, titleCase } from "./format.ts";
import { addSources, byId, detailTexts, focusQuiet, layer, moreRow, need, onScreen, put, svgEl, ui } from "./dom.ts";
import { GYN } from "./live.ts";
import { AXIS, chartAxes, colWidth, crossLine, fitGroup, histFrame, publishGeom, trendOf, trendPill } from "./charts.ts";
import { dataCompiledLabel, wheelMeta } from "./refresh-season.ts";
import { curveAsOf, curveAt, curveSpread, fedFundsRange, M2_FROM_YEAR, M2V_FROM_YEAR, m2vHistory, m2Yoy, now, sp500AnnualReturns, sp500Years, t10y3mHistory, t10yYieldHistory, t2yYieldHistory, t30yYieldHistory, t3mYieldHistory, t5yYieldHistory } from "./data.ts";
import { cycleQtrIdx, cycleSlice, openCycle, quarterRegime, seasonGroup, seasonTitle } from "./model.ts";
import { attachHistory, headPickRow, HIST_NOTE, histControls, histHead, page, pageCycle, qWindowFrom } from "./history.ts";
import { DATED_UNIT, growthShownCap, horizonInfoHtml, indOf, marketCol, marketWord, phaseClass, pressureZone } from "./readings.ts";
import { heatStep, m2GrowthChart, velocityHistoryChart } from "./history-charts.ts";
import { peekOf, ROSTER_BY, rosterFor, TIMING } from "./roster.ts";
import type { ModelReading, TrackSeg } from "./model.ts";
type YieldPt = { q: string; v: number | null; latest?: boolean };
type Maturity = { code: string; name: string; data: YieldPt[]; on: boolean; detail: string };
type Plot = (i: number) => number;

// ---- RENDER: range bars + card helpers ----
export function metricSheet(id: string){
  var sheet = document.createElement("div");
  sheet.className = "metric-sheet"; sheet.id = id; sheet.hidden = true;
  return sheet;
}
export var sheetRenderers: Record<string, (W?: number) => void> = {};
export function drawsPage(id: string, draw: () => void){ sheetRenderers[id] = draw; if (ROSTER_BY[id].hk) sheetRenderers[ROSTER_BY[id].hk] = draw; }
export function needInd(id: string): Indicator { var ind = indOf(ROSTER_BY[id]); if (!ind) throw new Error("no reading for " + id); return ind; }
export function openOf(src: Element): string { var o = src.getAttribute("data-open"); if (o == null) throw new Error("a card with no data-open"); return o; }
function levelHeadings(body: HTMLElement){
  var box = body.closest(".detail-modal"); if (!box) return;
  box.removeAttribute("aria-labelledby");
  Array.prototype.forEach.call(body.querySelectorAll("h4"), function(h, i){
    h.setAttribute("aria-level", i ? "3" : "2");
    if (!i && box){ h.id = "detail-modal-title"; box.setAttribute("aria-labelledby", h.id); }
  });
}
function wireDetailModal(){
  var backdrop = need('detail-backdrop');
  var body = need('detail-modal-body');
  function openFrom(idx: string | null, btn: HTMLElement){
    body.innerHTML = detailTexts[idx as unknown as number];
    levelHeadings(body);
    var sheet = btn && btn.closest && btn.closest(".metric-sheet");
    var chip = sheet && sheet.querySelector(".timing-row");
    if (chip) body.appendChild(chip.cloneNode(true));
    if (!backdrop.classList.contains('show')) opener = btn;
    backdrop.classList.add('show');
    need('detail-modal-close').focus({ preventScroll:true });
  }
  var opener: HTMLElement | null = null;
  function close(){
    if (!backdrop.classList.contains('show')) return;
    backdrop.classList.remove('show'); body.innerHTML = "";
    var from = opener; opener = null;
    if (from && !onScreen(from) && from.closest){ var wrap = from.closest('.bh-more-wrap'); from = wrap && wrap.querySelector<HTMLElement>('.bh-more'); }
    focusQuiet(from);
  }
  detailClose = close;
  layer(1, { open:function(){ return backdrop.classList.contains('show'); }, close:close,
             box:function(){ return backdrop.querySelector('.detail-modal'); } });
  document.addEventListener('click', function(e){
    var btn = (e.target as Element).closest && (e.target as Element).closest<HTMLElement>('.expand-btn, .details-link, .more-row, .bh-opt');
    if (btn){ if (btn.closest('summary')) e.preventDefault();
      openFrom(btn.getAttribute('data-detail-idx'), btn); e.stopPropagation(); return; }
    if (e.target === backdrop) close();
  });
  need('detail-modal-close').addEventListener('click', close);
}
export var detailClose: (() => void) | null = null;
// ---- A season strip and the economy's chips, shared by the cycle list and the Diagnosis's years ----
export type StripRun = { g: string; n: number; from: string; to: string; seasons: Record<string, boolean> };
var stripGroupName: Record<string, string> = { winter:"Winter", spring:"Spring", summer:"Summer", autumn:"Autumn" };
export function strip(cls: string, label: string, inner: string){
  return '<span class="strip' + cls + '" role="img" aria-label="' + label + '">' + inner + '</span>';
}
export function stripDots(n: number, title: string){
  return n ? '<span class="strip-dots" style="flex:' + n + ' 1 0" title="' + title + '">' + new Array(n + 1).join("<i></i>") + '</span>' : "";
}
export function stripTrack(n: number, title: string){
  return n ? '<span class="strip-track" style="flex:' + n + ' 1 0" title="' + title + '"></span>' : "";
}
export function seasonRuns(segs: TrackSeg[]){
  var runs: StripRun[] = [];
  segs.forEach(function(seg){
    var g = seasonGroup(seg.season), last = runs[runs.length - 1];
    if (!last || last.g !== g) runs.push(last = { g:g, n:0, from:seg.q, to:seg.q, seasons:{} });
    last.n++; last.to = seg.q; last.seasons[seg.season] = true;
  });
  return runs;
}
export function seasonPills(runs: StripRun[], whole: boolean){
  return runs.map(function(r){
    var names = Object.keys(r.seasons).map(function(k){ return seasonTitle(wheelMeta[k as Season]); }).join(" · ");
    return '<span class="strip-run ' + r.g + (r.n === 1 && !whole ? ' one' : '') + '" style="' +
      'flex:' + r.n + ' 1 0' + '" title="' + stripGroupName[r.g] + ' · ' + (r.n === 1 ? qLabel(r.from) : qLabel(r.from) + ' – ' + qLabel(r.to)) + ' · ' + names + '"></span>';
  }).join("");
}
export type MarketRun = { dir: string; ytd: boolean | undefined; q: number; from: number; to: number };
export function marketPills(runs: MarketRun[]){
  return runs.map(function(r){
    var when = r.from === r.to ? String(r.from) : r.from + "–" + r.to;
    return '<span class="strip-run mkt-' + r.dir + (r.ytd ? " ytd" : "") + (r.q <= 1 ? " one" : "") + '" style="' +
      "flex:" + Math.max(r.q, 1) + " 1 0" + '" title="' + when + " · S&P 500 " +
      (r.dir === "up" ? "up" : "down") + (r.ytd ? " so far" : "") + '"></span>';
  }).join("");
}
export function seasonRunsLabel(runs: StripRun[]){
  return runs.map(function(r){ return stripGroupName[r.g] + ' ' + r.n + (r.n === 1 ? ' quarter' : ' quarters'); }).join(', ');
}
export function econChips(growth: number | null, prices: number | null, market: number | null, digits: number, soFar: boolean, cls: string){
  function chip(label: string, v: number | null, unit: string){ return v == null ? "" : '<span class="chip"><i>' + label + '</i>' + fmtSigned(v, digits) + '%' + unit + '</span>'; }
  return '<span class="era-foot' + cls + '"><span class="era-econ">' + chip("Growth", growth, "") + chip("Prices", prices, "") +
    chip("S&amp;P 500", market, soFar ? '<span class="unit"> so far</span>' : "") + '</span></span>';
}
export function dxHead(mark: string, title: string, open?: string){
  var inner = '<span class="dx-mark" aria-hidden="true">' + mark + '</span>' + titleCase(title);
  return open ? '<button type="button" class="dx-sys-head"' + open + '>' + inner + CHEV + '</button>' : '<div class="dx-sys-head">' + inner + '</div>';
}
export function dxSys(cls: string, inner: string){ return '<section class="dx-sys' + cls + '">' + inner + '</section>'; }
export function catHeadCard(cls: string, key: string, head: { tag: string; cls: string; attrs: string; name: string; aside: string }, body: string){
  return '<section class="' + cls + ' ind-card cat-' + key + '"><' + head.tag + ' class="' + head.cls + 'cat-head"' + head.attrs + '><span class="ind-cat-name">' + head.name + '</span>' +
    head.aside + '</' + head.tag + '>' + body + '</section>';
}
function timingMark(kind: string){
  var cx = kind === "lagging" ? 4.4 : kind === "leading" ? 15.6 : 10;
  return '<svg viewBox="0 0 20 12" aria-hidden="true">' +
    '<path class="tm-line" d="M2.6,6 H17.4"/><path class="tm-now" d="M10,2 V10"/>' +
    (kind === "structural" ? '<path class="tm-span" d="M4.4,6 H15.6"/>'
                           : '<circle class="tm-dot" cx="' + cx + '" cy="6" r="2.7"/>') +
    '</svg>';
}
export function timingPill(kind: string){
  var t = TIMING[kind as keyof typeof TIMING]; if (!t) return "";
  return '<div class="timing-row">' +
    '<span class="timing ' + kind + '">' + timingMark(kind) + '<b>' + t.label + '</b></span></div>';
}
export function collapseEmptyBlocks(sheet: HTMLElement | null){
  if (!sheet || sheet.hidden || !sheet.offsetHeight) return;
  Array.prototype.forEach.call(sheet.children, function(kid){
    if (kid.classList.contains("page-foot")) return;
    if (!kid.offsetHeight) kid.style.display = "none";
    else if (kid.style.display === "none") kid.style.display = "";
  });
}
export function seatPageFoot(sheet: HTMLElement | null){
  if (!sheet) return;
  var chip = sheet.querySelector(".timing-row"); if (!chip) return;
  var foot = sheet.querySelector(".page-foot");
  if (!foot){ foot = document.createElement("div"); foot.className = "page-foot"; sheet.appendChild(foot); }
  if (chip.parentNode !== foot) foot.appendChild(chip);
  var more = sheet.querySelector(".more-row"), hl = sheet.querySelector(".highlights");
  var home = hl || foot;
  if (more && more.parentNode !== home) home.appendChild(more);
  if (sheet.lastElementChild !== foot) sheet.appendChild(foot);
}
function headHtml(ind: Indicator, noMark?: boolean){
  var mk = noMark ? "" : '<span class="head-mark" aria-hidden="true"><span class="head-mark-disc">' +
    rosterFor(ind).mark() + '</span></span>';
  return '<div class="card-head">' + mk + '<div class="card-titles"><span class="body-term">' + ind.bodyTerm + '</span><span class="econ-term">' + ind.econTerm + '</span></div><span class="tag ' + tagFor(ind).state + '">' + tagFor(ind).text + '</span></div>';
}
export function cardDetailHtml(ind: Indicator, opts?: IndicatorPage){
  opts = opts || {};
  var facts = ([] as AuxFact[]).concat(ind.facts || [], ind.aux || []);
  var chartHtml = opts.chart ? opts.chart(ind) : '';
  var bloodTest = opts.bare ? '' :
    ((opts.noHead ? '' : headHtml(ind, opts.noMark) +
      '<div class="metric-row"><span class="metric mono">' + ind.metric + '</span><span class="metric-sub">' + ind.metricSub + '</span></div>'));
  if (bloodTest && opts.bloodCard) bloodTest = '<div class="page-chart blood-card">' + bloodTest + '</div>';
  return (opts.chartFirst ? chartHtml + bloodTest : bloodTest + chartHtml) +
  (function(){
    var lede = ind.lead != null ? ind.lead : (ind.shortCaption != null ? ind.shortCaption : (ind.caption || ""));
    var figs = facts.map(auxStat).join("");
    if (!lede && !figs) return "";
    var block = '<section class="highlights"><div class="hi-head">Insights</div>' +
      (lede ? '<div class="hi-card"><p>' + lede + '</p></div>' : "") + figs + '</section>';
    if (opts.deferHighlights){ ui.heldHighlights = block; return ""; }
    return block;
  })() +
    (function(){
      if (opts.bare || ind.info) return ind.info && !opts.bare ? moreRow(ind.info()) : "";
      var rest = dropWhatIsShown(ind.caption, ind.lead || ind.shortCaption || "");
      return rest ? moreRow('<h4>' + titleCase(ind.bodyTerm) + '</h4><div class="marker-sub">' + ind.econTerm + '</div>' + factsFrom(rest)) : "";
    })();
}
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
        '<p class="caption">The single most-referenced benchmark in the credit market. A 30-year fixed mortgage sounds like a 30-year commitment, but between moves and refinances its real average lifespan runs closer to 7–10 years — which is why mortgage rates track this maturity rather than the 30-year bond. Most investment-grade corporate bonds are also quoted as this yield plus a spread, and it\'s the standard discount-rate proxy used in stock valuation.</p>' +
        srcBlock([{t:"FRED — 10-Year Treasury Rate (GS10)", u:"https://fred.stlouisfed.org/series/GS10"}])},
    {code:"30y", name:"30-Year", data: t30yYieldHistory, on:true,
      detail: '<h4>30-Year Treasury</h4>' +
        '<p class="caption">Reflects the compensation investors demand for the genuine uncertainty of the longest possible horizon — economists call this the term premium. It anchors the longest corporate and government bonds. The line has a real gap in 2005: the Treasury suspended the 30-year bond from October 2001 to February 2006, and no 30-year constant-maturity yield was published from February 2002 until it returned — shown here as a break rather than a guessed figure.</p>' +
        srcBlock([{t:"FRED — 30-Year Treasury Rate (GS30)", u:"https://fred.stlouisfed.org/series/GS30"}])}
  ];
}
function registerFlowPages(){
  function drawVelocityRecord(){
    var host = byId("pulse-record");
    if (!host || !host.clientWidth) return;
    var key = page.range["pulse-range"];
    var pulCyc = pageCycle("pulse-range");
    var pulIdx = pulCyc ? cycleQtrIdx(M2V_FROM_YEAR, pulCyc, m2vHistory.length) : null;
    put("pulse-timeline", histControls("pulse-range",
      { depth:Math.floor(m2vHistory.length / 4) }));
    var vFrom = pulIdx ? pulIdx[0] : qWindowFrom(m2vHistory.length, key), vTo = pulIdx ? pulIdx[1] : undefined;
    host.innerHTML = velocityHistoryChart(host.clientWidth, vFrom, vTo);
    attachHistory(host, "pulse-hist-tooltip", "velocityHistoryChart");
    put("pulse-trend", trendPill(
      trendOf(m2vHistory.slice(vFrom, vTo), "points", "quarter"),
      null, true, { rising:"accelerating", falling:"decelerating" }));
  }
  drawsPage("sheet-sign-pulse", drawVelocityRecord);
  function drawM2Record(){
    var host = byId("m2-record");
    if (!host || !host.clientWidth) return;
    var len = m2Yoy.length - 4, key = page.range["volume-range"];
    var volCyc = pageCycle("volume-range");
    var volIdx = volCyc ? cycleQtrIdx(M2_FROM_YEAR + 1, volCyc, len) : null;
    put("volume-timeline", histControls("volume-range",
      { depth:Math.floor(len / 4) }));
    var mFrom = volIdx ? volIdx[0] : qWindowFrom(len, key), mTo = volIdx ? volIdx[1] : undefined;
    host.innerHTML = m2GrowthChart(host.clientWidth, mFrom, mTo);
    attachHistory(host, "m2-hist-tooltip", "m2GrowthChart");
    put("volume-trend", trendPill(
      trendOf(m2Yoy.slice(4).slice(mFrom, mTo).filter(function(v){ return v != null; }), "points", "quarter"),
      null, true, { rising:"expanding", falling:"contracting" }));
  }
  drawsPage("sheet-sign-volume", drawM2Record);
  (function(){
    var t: ReturnType<typeof setTimeout> | undefined; window.addEventListener("resize", function(){
      clearTimeout(t); t = setTimeout(function(){ drawVelocityRecord(); drawM2Record(); }, 150);
    });
  })();
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
function pressureHead(maturities: Maturity[], mat: Maturity | undefined, title: string, note: string){
  var H = page.head["pressure-range"], spread = pressureView === "spread";
  H.title = spread ? spreadLabel(spreadPick) + " Treasury Spread" : title;
  H.menu = function(){
    return [
      { key:"levels", label:"Treasury yields", on:!spread, value:(mat || {} as Partial<Maturity>).name || "",
        rows:maturities.map(function(m){
          return headPickRow(!spread && mat === m, "data-ylm-mat", m.code, m.name);
        }).join("") },
      { key:"spreads", label:"Treasury spreads", on:spread, value:spreadLabel(spreadPick),
        rows:HZN_SPREADS.map(function(r){
          return headPickRow(spread && spreadPick === r.key, "data-hzn-spread", r.key, r.label);
        }).join("") }
    ];
  };
  HIST_NOTE["pressure-range"] = spread ? horizonInfoHtml(spreadPick) : note;
  put("pressure-head", histHead("pressure-range"));
}
function showPressureView(spread: boolean){
  ([["ylm-shell", !spread], ["spread-history-shell", spread]] as [string, boolean][]).forEach(function(p){
    var e = byId(p[0]); if (e) e.hidden = !p[1];
  });
}
function renderPressurePage(){
  var svg = need("ylm-svg");
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

    shell = byId("ylm-shell");
    attachHistory(shell, "ylm-tooltip", "ylm");
  }

  var matPick = "10y";
  GYN.on("pickSeries", function(bar: unknown, code: string){
    matPick = code; pressureView = "yield"; maturities.forEach(function(m){ m.on = (m.code === matPick); });
    drawPressure();
  });
  GYN.on("pickSpread", function(code: string){ spreadPick = code; pressureView = "spread"; drawPressure(); });
  registerFlowPages();

  function matOf(code: string){ return maturities.filter(function(m){ return m.code === code; })[0]; }
  function matTitle(){ var m = matOf(matPick); return (m ? m.name : "") + " U.S. Treasury"; }
  function matDetail(){ var m = matOf(matPick); return m ? m.detail : ""; }

  function drawYlm(){
    withLatest();
    var ylmY0 = parseInt(quarters[0].slice(0, 4), 10);
    var ylmCyc = pageCycle("pressure-range", ylmY0);
    var ylmSpan = ylmCyc ? cycleSlice(maturities[0].data, ylmCyc) : null;
    ylmFrom = ylmSpan ? ylmSpan[0] : qWindowFrom(quarters.length, page.range["pressure-range"]);
    ylmTo   = ylmSpan ? ylmSpan[1] : quarters.length;
    put("pressure-timeline", histControls("pressure-range",
      { depth:Math.floor(quarters.length / 4) }, ylmY0));
    render();
    var yTrend = byId("ylm-trend");
    if (yTrend){
      var w: number[] = [], mt = matOf(matPick);
      if (mt) mt.data.slice(ylmFrom, ylmTo).forEach(function(d){ if (d.v != null) w.push(d.v); });
      yTrend.innerHTML = trendPill(trendOf(w, "points", "quarter"), null, true,
        { rising:"climbing", falling:"easing" });
    }
  }
  function drawPressureHead(){ pressureHead(maturities, matOf(matPick), matTitle(), '<h4>' + titleCase(matTitle()) + '</h4>' + factsFrom(matDetail())); }
  function drawPressure(){
    var spread = pressureView === "spread" && GYN.has("drawSpreadView");
    showPressureView(spread);
    if (spread) GYN.fire("drawSpreadView"); else { drawYlm(); renderPressureInsights(); }
    drawPressureHead();
  }
  drawsPage("sheet-sign-pressure", drawPressure);

  maturities.forEach(function(m){ m.on = (m.code === matPick); });
}
// ---- Pressure's Insights ----
function renderPressureInsights(){
  var ins = byId("pressure-insights"); if (!ins || !t10yYieldHistory.length) return;
  var y10 = curveAt("10Y");
  var seen = t10yYieldHistory.filter(function(d){ return d.v != null; });
  var hi = seen.reduce(function(a, d){ return d.v > a.v ? d : a; });
  var lo = seen.reduce(function(a, d){ return d.v < a.v ? d : a; });
  var cyc = openCycle(), span = cycleSlice(t10yYieldHistory, cyc);
  var inCycle = span ? t10yYieldHistory.slice(span[0], span[1]).filter(function(d){ return d.v != null; }) : [];
  var cycAvg = inCycle.length ? mean(inCycle.map(function(d){ return d.v; })) : null;
  var pct = function(v: number){ return v.toFixed(2) + "%"; };
  var cards = [];
  cards.push('<p class="hi-lede">Blood pressure is what the flow meets in the vessels — the force every organ ' +
    'downstream lives under. Here it is the yield on the ten-year Treasury: the price the economy’s one ' +
    'risk-free borrower pays for a decade of money, and the level everything else is priced off.</p>');
  cards.push(hiCard("The Risk-Free Loan", "",
    "A thirty-year mortgage prices off this yield, because between moves and refinances a mortgage lives " +
    "seven to ten years; investment-grade companies borrow at it plus a spread; and it is the discount rate " +
    "a stock’s future earnings are measured against. Interest rates are the overnight rate the Fed sets" +
    (now.fedFunds && now.fedFunds.lo != null ? " (" + fedFundsRange() + ")" : "") +
    "; this is that rate as the market re-prices it ten years out" +
    (y10 != null ? " — " + pct(y10) + " today" : "") + "."));
  cards.push(hiCard("Pressure on the Borrower", "",
    "When it rises, every borrower feels it, and the Treasury first: this is the rate the government rolls " +
    "its debt over at, so a higher ten-year today is a higher interest burden a year from now — the Interest " +
    "payments reading, under Activity. " +
    (cycAvg != null ? "This cycle has averaged " + pct(cycAvg) + (y10 != null ? " against " + pct(y10) + " today" : "") + ". " : "") +
    "Since " + t10yYieldHistory[0].q.slice(0, 4) + " the quarterly record runs from " + pct(lo.v) + " in " + lo.q +
    " to " + pct(hi.v) + " in " + hi.q + "."));
  cards.push(hiCard("Level, Not Slope", "",
    "This page opens on the LEVEL. The gap between this yield and the three-month bill is under Treasury spreads in the \u22ef menu, " +
    "because that gap is the market’s forecast of the next few years rather than a pressure it is under " +
    "now. Read them together: a high level with a flat or inverted curve is a body under strain that expects " +
    "relief; a low level with a steep curve is one at rest that expects to work."));
  ins.innerHTML = '<section class="highlights insights"><div class="hi-head">Insights</div>' + cards.join("") + '</section>';
}
export function catList(html: string){ return '<div class="cat-list">' + html + '</div>'; }
export function marketPeek(y: number, from: number){
  var v = sp500AnnualReturns[y], w = v == null ? null : marketWord(v);
  return w && peekOf("sheet-sign-market", { value:fmtSigned(v, 1) + "%", word:w.text, state:w.state, colBase:0, colRule:true,
    cols:sp500Years.filter(function(d){ return d.y >= from && d.y <= y; }).map(function(d){ return d.v; }), colClass:marketCol });
}
export var spreadPick = "3m", pressureView = "yield";
var HZN_SPREADS = [{ key:"3m", label:"10Y − 3M" }, { key:"2y", label:"10Y − 2Y" }];
function spreadLabel(key: string){
  var r = HZN_SPREADS.filter(function(x){ return x.key === key; })[0];
  return r ? r.label : HZN_SPREADS[0].label;
}
function peekArt(src: Element){ return src.querySelector(".peek-chart"); }
export function catCard(src: Element, when: string){
  var open = openOf(src), item = document.createElement("button");
  item.type = "button"; item.className = "cat-item";
  item.setAttribute("data-open", open);
  item.setAttribute("data-title", src.getAttribute("data-title") || "");
  var head = document.createElement("div"); head.className = "ci-head";
  var glyph = src.querySelector(".peek-mark svg"), holder = document.createElement("span");
  holder.className = "peek-mark"; if (glyph) holder.appendChild(glyph);
  head.appendChild(holder);
  var nm = document.createElement("span"); nm.className = "ci-name";
  var kick = src.querySelector(".peek-kicker");
  nm.textContent = kick ? kick.textContent!.replace(/\s+/g, " ").trim()
                        : (src.getAttribute("data-title") || "");
  head.appendChild(nm);
  var body = document.createElement("div"); body.className = "ci-body";
  var read = document.createElement("div"); read.className = "ci-read";
  var val = src.querySelector(".peek-value");
  if (val){
    var unit = val.querySelector(".peek-unit, .unit");
    if (unit){
      var m = DATED_UNIT.exec(unit.textContent!.trim());
      if (m){ unit.textContent = m[1]; if (!when) when = m[2]; }
    }
    val.className = "ci-value";
    if (unit) unit.className = "ci-unit";
    read.appendChild(val);
  }
  var word = src.querySelector(".peek-word");
  if (!word || !word.textContent!.trim()) word = (val && val.querySelector(".tag")) || document.createElement("span");
  word.classList.add("ci-word"); read.appendChild(word);
  body.appendChild(read);
  var mini = peekArt(src);
  if (mini){ var slot = document.createElement("div"); slot.className = "ci-mini";
             slot.appendChild(mini); body.appendChild(slot); }
  var wh = document.createElement("span"); wh.className = "ci-when"; wh.textContent = when;
  head.appendChild(wh);
  var chev = document.createElement("span");
  chev.innerHTML = CHEV;
  var mark = chev.firstChild; if (mark) head.appendChild(mark);
  item.appendChild(head); item.appendChild(body);
  return item;
}
export function tempWord(r: ModelReading){
  return (r.cpiHot ? "Hot" : r.cpiCold ? "Cold" : "Warm") + " \u00b7 " +
    (r.cpiDirection === "rising" ? "heating" : r.cpiDirection === "falling" ? "cooling" : "steady");
}
export function gdpFigure(r: ModelReading){ return fmtSigned(r.gdpLatest.v, 1) + "%"; }
export function tempPeek(r: ModelReading, value: string, cpi: MonthPoint[]){
  return peekOf("sheet-metric-temp", { value:value, word:tempWord(r), state:heatStep(r.cpiNow),
    cols:cpi.map(function(d){ return d.v; }), colClass:function(v: number){ return "temp-col " + heatStep(v); } });
}
export function gdpPeek(r: ModelReading, gq: QuarterPoint[]){
  return peekOf("sheet-metric-gdp", { value:gdpFigure(r),
    word:growthShownCap(r), state:phaseClass(r.regime), cols:gq.map(function(d){ return d.v; }),
    colClass:function(v: number, i: number){ return "gdp-col " + (v < 0 ? "below" : quarterRegime(gq[i]) === "contraction" ? "neg" : "pos"); } });
}

export function bootRenderCore(){
  GYN.step("wireDetailModal", wireDetailModal, "wire");
  wireDetailModal();
  // ---- RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab) ----
  need("asof-text").textContent = "Data compiled " + dataCompiledLabel;
  GYN.step("renderPressurePage", renderPressurePage, "mixed");
  renderPressurePage();
  GYN.step("renderPressureInsights", renderPressureInsights, "render");
  renderPressureInsights();
}
