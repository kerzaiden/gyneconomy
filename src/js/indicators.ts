import { atMonth, factsFrom, fmtAsOf, fmtSigned, hiCard, highlightsHtml, lede, maxIn, metered, qPretty, srcBlock, yearOf, titleCase } from "./format.ts";
import { addSources, byId, put } from "./dom.ts";
import { divergeChart, histBar, histTip, trendOf, trendPill, windowYears } from "./charts.ts";
import { debtDollarsQuarterly, debtToday, grossDebtQuarterly, interestDollarsQuarterly, interestQuarterly } from "./history-fred.ts";
import { calendarTodayY } from "./refresh-season.ts";
import { buffettHistory, CONFIDENCE_SRC, DEBT_DOLLAR_SRC, DESIRE_SRC, PREMIUM_SRC, fileRow, labRow, longCycleSrc, now, PRODUCTIVITY_SRC, sp500AnnualReturnSource } from "./data.ts";
import { currentEra, cycleSlice } from "./model.ts";
import { attachHistory, histControls, histHead, histNote, page, pageCycle, refitHistory, timelineWindow } from "./history.ts";
import { confidenceReading, confidenceRecord, desireReading, desireRecord, marketReading, meterFlagged, premiumReading, premiumRecord, productivityReading } from "./readings.ts";
import { ROSTER } from "./roster.ts";
import { metricSheet, sheetRenderers, timingPill } from "./render-core.ts";
import { creditInsight, creditPages, creditReadings } from "./credit.ts";

type SeriesPt = Point & { v: number };
type SplitRow = { sub: string; note: string; meter: Meter; flagValue: string; flagState?: Tone; shortNote?: string };
type SplitPage = { after?: string; row: SplitRow; line: string; fmt: (v: number) => string; tick?: (v: number) => string; at?: (d: SeriesPt) => string;
  src: Src[]; band?: string; goodAbove?: boolean; info?: () => string; insight: (s: SplitSpec) => string[] };
type SplitSpec = SplitPage & { id: string; name: string; mid: number; timing: string; series: SeriesPt[]; midLabel: string };

// ---- The split indicators: one page each ----
var BUFFETT_2001 = [
  { t:"Warren Buffett — Warren Buffett on the Stock Market, Fortune, Dec 10 2001 (the 70–80% line)",
    u:"https://fortune.com/2001/12/10/warren-buffett-stock-market/" },
  { t:"Berkshire Hathaway — the same Fortune article, Dec 10 2001 (PDF)",
    u:"https://www.berkshirehathaway.com/2001ar/FortuneMagazine%20DEC%2010%202001.pdf" }
];
function dollars(billions: number){ return billions >= 1000 ? "$" + (billions / 1000).toFixed(billions < 10000 ? 2 : 1) + " trillion" : "$" + Math.round(billions) + " billion"; }
function midOf(R: RosterRow): number { if (R.mid == null) throw new Error(R.id + " has no middle line"); return R.mid; }
export function meterWord(m: Meter){ return meterFlagged(m) ? (m.ends && m.ends.high) || "High" : (m.ends && m.ends.zone) || "In range"; }
function splitPages(): Record<string, SplitPage> {
  var tenth = function(v: number){ return v.toFixed(1) + "%"; };
  return withCredit({
    "sheet-metric-buffett": { after:"sheet-metric-valuation", row:fileRow("buffett"), line:"Buffett’s line",
      fmt:function(v){ return Math.round(v) + "%"; }, src:BUFFETT_2001.concat(now.valuation.src.slice(0, 2)),
      band:"The line at 80% is Buffett’s own: “If the percentage relationship falls to the 70% or 80% area, " +
           "buying stocks is likely to work very well for you” (Fortune, Dec 10 2001).",
      insight:buffettInsight },
    "sheet-metric-debt": { after:"sheet-metric-buffett", row:labRow("sheet-metric-debt"), line:"50-year average",
      fmt:tenth, at:function(d){ var b = debtDollarsQuarterly.filter(function(x){ return x.q === d.q; })[0]; return qPretty(d.q) + (b ? " \u00b7 " + dollars(b.v) : ""); }, tick:function(v){ return Math.round(v) + "%"; }, src:longCycleSrc.slice(0, 3).concat(DEBT_DOLLAR_SRC), insight:debtInsight },
    "sheet-metric-interest": { after:"sheet-metric-debt", row:labRow("sheet-metric-interest"), line:"50-year average",
      fmt:tenth, at:function(d){ var b = interestDollarsQuarterly.filter(function(x){ return x.q === d.q; })[0]; return qPretty(d.q) + (b ? " \u00b7 " + dollars(b.v) + " a year" : ""); }, src:[longCycleSrc[4], longCycleSrc[10]], insight:interestInsight },
    "sheet-sign-productivity-growth": productivityPage(tenth),
    "sheet-sign-desire": desirePage(), "sheet-sign-premium": premiumPage(), "sheet-sign-confidence": confidencePage(),
    "sheet-sign-market": marketPage()
  });
}
type PageReading = { info: () => string; metricSub: string; caption: string; meter: Meter; metric: string; tag: { state?: Tone } };
var signedPct = function(v: number){ return v ? fmtSigned(v, 1) + "%" : "0%"; }, wholePct = function(v: number){ return Math.round(v) + "%"; };
function readingPage(r: PageReading, o: Omit<SplitPage, "row" | "info">): SplitPage {
  return Object.assign({ goodAbove:true, info:r.info, row:{ sub:r.metricSub, note:r.caption, meter:r.meter, flagValue:r.metric, flagState:r.tag.state } }, o);
}
function confidencePage(){
  return readingPage(confidenceReading, { line:"OECD average", fmt:function(v){ return v.toFixed(1); }, tick:function(v){ return String(Math.round(v)); },
    src:CONFIDENCE_SRC, insight:confidenceInsight });
}
function desirePage(){ return readingPage(desireReading, { line:"No change", fmt:signedPct, tick:wholePct, src:DESIRE_SRC, insight:desireInsight }); }
function premiumPage(){ return readingPage(premiumReading, { line:"No premium", fmt:signedPct, tick:wholePct, src:PREMIUM_SRC, insight:premiumInsight }); }
function marketPage(){
  return readingPage(marketReading, { line:"No change", fmt:signedPct, tick:wholePct, at:function(d){ return String(d.y); },
    src:sp500AnnualReturnSource, insight:marketInsight });
}
function withCredit(o: Record<string, SplitPage>){
  Object.keys(creditPages).forEach(function(id){
    var P = creditPages[id];
    o[id] = readingPage(creditReadings[id], { goodAbove:!!P.goodAbove, line:P.line, fmt:P.fmt, tick:P.tick, src:P.src, insight:function(s){ return creditInsight(s, P); } });
  });
  return o;
}
function productivityPage(tenth: (v: number) => string){
  return readingPage(productivityReading, { line:"slowdown average", fmt:tenth, src:PRODUCTIVITY_SRC, insight:productivityInsight });
}
export function splitRow(R: RosterRow): SplitRow { var P = splitPages()[R.id]; return P ? P.row : labRow(R.id); }
function splitSpec(R: RosterRow, P: SplitPage): SplitSpec {
  var s: SplitSpec = Object.create(R);
  for (var k in P) (s as Record<string, unknown>)[k] = P[k as keyof SplitPage];
  s.series = (R.hist as { s: readonly Point[] }).s as SeriesPt[]; s.midLabel = P.line + ", " + (P.tick || P.fmt)(midOf(R));
  return s;
}
function splitInfo(s: SplitSpec){
  return s.info ? s.info() : '<h4>' + titleCase(s.name) + '</h4><div class="marker-sub">' + s.row.sub + '</div>' + factsFrom(s.row.note) +
    (s.band ? '<p>' + s.band + '</p>' : "") + srcBlock(s.src);
}
function periodTicks(vals: SeriesPt[]){
  if (!vals.length || !(vals[0].q || vals[0].m)) return null;
  var ys = windowYears(yearOf(vals[0]), yearOf(vals[vals.length - 1]), 5);
  return function(d: SeriesPt){ var k = d.q || d.m || ""; return /(Q1|-01)$/.test(k) && ys.indexOf(yearOf(d)) !== -1 ? "’" + k.slice(2, 4) : ""; };
}
function periodOfSeries(d: SeriesPt){ return d.m ? "month" : d.q ? "quarter" : "year"; }
function drawSplit(s: SplitSpec, W?: number){
  var id = s.id, cyc = pageCycle(id);
  var span = cyc ? cycleSlice(s.series, cyc) : null;
  var vals = span ? s.series.slice(span[0], span[1]) : timelineWindow(s.series, page.range[id]);
  var tr = trendOf(vals.map(function(d){ return d.v; }), "points", periodOfSeries(s.series[0]));
  var chart = function(w?: number){
    return divergeChart({ vals:vals, mid:s.mid, midLabel:s.midLabel, fmt:s.fmt, tickFmt:s.tick || s.fmt, fit:tr.fit, goodAbove:s.goodAbove,
      xLabel:periodTicks(vals), at:s.at || function(d: SeriesPt){ return d.m ? atMonth(d as MonthPoint) : d.q ? qPretty(d.q) : "FY" + d.y; },
      alt:s.name + " against " + s.midLabel + ", with the fitted trend across the readings in view" }, w);
  };
  put(id + "-chart", histBar(histControls(id, { series:s.series })) +
    '<div class="page-chart">' + histHead(id) + chart(W) + trendPill(tr, null, true) +
    histTip(id + "-tip") + '</div>');
  var box = document.querySelector<HTMLElement>("#" + id + "-chart .page-chart");
  refitHistory(box, chart);
  attachHistory(box, id + "-tip", "divergeChart");
}
function mountSplit(s: SplitSpec){
  if (!document.getElementById(s.id)){
    var sheet = metricSheet(s.id);
    sheet.innerHTML = '<div id="' + s.id + '-timing">' + timingPill(s.timing) + '</div>' +
      '<div id="' + s.id + '-chart"></div><div id="' + s.id + '-highlights"></div>';
    var after = s.after ? byId(s.after) : null;
    if (after && after.parentNode) after.parentNode.insertBefore(sheet, after.nextSibling);
  }
  histNote(s.id, splitInfo(s));
  sheetRenderers[s.id] = function(W?: number){ drawSplit(s, W); };
  put(s.id + "-highlights", highlightsHtml(s.insight(s), "", ""));
  addSources(s.src);
}
function seatSplits(pages: Record<string, SplitPage>, todo: RosterRow[]){
  while (todo.length){
    var left = todo.filter(function(R){ var a = pages[R.id].after; return a && !document.getElementById(a); });
    if (left.length === todo.length) throw new Error("no page to seat " + left.map(function(R){ return R.id; }).join(", ") + " after");
    todo.forEach(function(R){ if (left.indexOf(R) === -1) mountSplit(splitSpec(R, pages[R.id])); });
    todo = left;
  }
}
export function mountSplits(){
  var pages = splitPages();
  seatSplits(pages, ROSTER.filter(function(R){ return pages[R.id]; }));
  if (ROSTER.some(function(R){ return R.door === "split" && !pages[R.id]; })) addSources(longCycleSrc);
}
// ---- The split indicators' insights ----
function buffettInsight(s: SplitSpec){
  var now = metered(s.row.meter), bv = buffettHistory.map(function(d){ return d.v; });
  var bPrev = maxIn(buffettHistory, 1970, currentEra.from - 1), bDot = maxIn(buffettHistory, 2000, 2007);
  var richer = bv.filter(function(v){ return v > now; }).length;
  var above = buffettHistory.filter(function(d){ return d.v > s.mid; });
  return [lede('The price of the whole stock market set against the size of the economy that has to ' +
      'earn it. A reading far above the line is a body valued for more than it produces.'),
    hiCard("Where It Sits", s.row.flagState || "serious", richer === 0 && bPrev && bDot
      ? "At " + Math.round(now) + "% of GDP it is the highest of the " + bv.length + " quarters since " + yearOf(buffettHistory[0]) +
        " — above the previous record of " + Math.round(bPrev.v) + "% (" + bPrev.q + ") and far above the dot-com peak of " +
        Math.round(bDot.v) + "% (" + bDot.q + ")."
      : "At " + Math.round(now) + "% of GDP, " + richer + " of the " + bv.length + " quarters since " + yearOf(buffettHistory[0]) + " ran higher."),
    hiCard("Against Buffett’s Line", "warning", "It has sat above " + s.mid + "% in " + above.length + " of the " + bv.length +
      " quarters, the last time below it in " + (buffettHistory.filter(function(d){ return d.v <= s.mid; }).pop() || {}).q + ".")];
}
function debtInsight(s: SplitSpec){
  var now = metered(s.row.meter), rec = maxIn(grossDebtQuarterly, 1966, calendarTodayY); if (!rec) throw new Error("no gross debt record");
  var under = grossDebtQuarterly.filter(function(d){ return d.v <= s.mid; }).pop();
  var era = grossDebtQuarterly.filter(function(d){ return yearOf(d) === currentEra.from; })[0];
  var cards = [lede('What the government owes, measured against what the whole economy makes in a year. The larger the debt, the less room the body has to borrow when something goes wrong.'),
    hiCard("In Dollars", s.row.flagState || "serious", dollars(debtToday.v) + " owed on " + fmtAsOf(debtToday.d) + ", by the Treasury\u2019s Debt to the Penny."),
    hiCard("Against the Record", s.row.flagState || "serious", "At " + now.toFixed(1) + "% of GDP, " +
      (now >= rec.v ? "the highest reading since the quarterly series began in 1966." :
        (rec.v - now).toFixed(1) + " points below the record of " + rec.v.toFixed(1) + "% in " + rec.q + ".")),
    hiCard("Against the 70% Line", "warning", under
      ? "Last at or under " + s.mid + "% in " + under.q + "; every quarter since has run above it." : "Above " + s.mid + "% throughout.")];
  if (era) cards.push(hiCard("Since This Cycle Opened", "serious", "The " + currentEra.name + " began at " + era.v.toFixed(1) +
    "% (" + era.q + "); the change since is " + fmtSigned(now - era.v, 1) + " points."));
  return cards;
}
function productivityInsight(s: SplitSpec){
  var h = s.series, last = h[h.length - 1], above = h.filter(function(d){ return d.v >= s.mid; }).length;
  var hi = h.reduce(function(a, d){ return d.v > a.v ? d : a; }), lo = h.reduce(function(a, d){ return d.v < a.v ? d : a; });
  return [lede('Output per hour worked, against the same quarter a year earlier. An economy can grow by working ' +
      'more hours or by getting more from each one, and only the second kind compounds.'),
    hiCard("The Latest Quarter", s.row.flagState || "", qPretty(last.q) + " ran at " + fmtSigned(last.v, 1) + "%, " +
      (last.v >= s.mid ? "above" : "below") + " the " + s.mid.toFixed(1) + "% line."),
    hiCard("Against the Record", "", "The series runs from " + fmtSigned(lo.v, 1) + "% (" + qPretty(lo.q) + ") to " +
      fmtSigned(hi.v, 1) + "% (" + qPretty(hi.q) + "); " + above + " of its " + h.length + " quarters sat at or above the line.")];
}
type LineWords = { lede: string; verb: string; line: string; fig: (v: number) => string; rec: { lo: MonthPoint; hi: MonthPoint }; tail: (above: number, h: SeriesPt[]) => string };
function lineInsight(s: SplitSpec, o: LineWords){
  var h = s.series, last = h[h.length - 1], above = h.filter(function(d){ return d.v >= s.mid; }).length;
  var side = function(d: SeriesPt){ return d.v >= s.mid; }, cross: SeriesPt | null = null;
  for (var i = h.length - 1; i > 0 && !cross; i--) if (side(h[i]) !== side(h[i - 1])) cross = h[i];
  return [lede(o.lede),
    hiCard("The Latest Month", s.row.flagState || "", atMonth(last as MonthPoint) + " " + o.verb + " " + o.fig(last.v) + ", " +
      (side(last) ? "above" : "below") + " " + o.line + (cross ? ", where it has been since " + atMonth(cross as MonthPoint) + "." : ".")),
    hiCard("Against the Record", "", "The series runs from " + o.fig(o.rec.lo.v) + " (" + atMonth(o.rec.lo) + ") to " +
      o.fig(o.rec.hi.v) + " (" + atMonth(o.rec.hi) + "); " + o.tail(above, h))];
}
function signedFig(v: number){ return fmtSigned(v, 1) + "%"; }
function confidenceInsight(s: SplitSpec){
  return lineInsight(s, { lede:'How households feel about their own finances, jobs and the economy ahead, scaled by the OECD so that 100 ' +
      'is the long-term average. Confident households spend; worried ones save.', verb:"read", line:"the 100 line",
    fig:function(v){ return v.toFixed(1); }, rec:confidenceRecord,
    tail:function(above, h){ return above + " of its " + h.length + " months sat at or above 100."; } });
}
function desireInsight(s: SplitSpec){
  return lineInsight(s, { lede:'What households spend on the things they could put off: cars, furniture, appliances, electronics. ' +
      'Demand against the same month a year earlier, after prices, so above the line her appetite is high, below it low.', verb:"ran at", line:"zero",
    fig:signedFig, rec:desireRecord, tail:function(above, h){ return above + " of its " + h.length + " months sat at or above zero."; } });
}
function premiumInsight(s: SplitSpec){
  return lineInsight(s, { lede:'What stocks earn over safe bonds: the earnings yield of the CAPE less the real 10-year Treasury yield. ' +
      'The thinner the premium, the less investors ask for the risk of owning stocks, and the stronger their appetite for it.', verb:"read", line:"zero",
    fig:signedFig, rec:premiumRecord, tail:function(above, h){
      var last = h[h.length - 1], thinner = h.filter(function(d){ return d.v < last.v; }).length;
      return thinner + " of its " + h.length + " months ran thinner, and " + above + " sat at or above zero."; } });
}
var ORDINAL = ["", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"];
function marketInsight(s: SplitSpec){
  var h = s.series, last = h[h.length - 1], bull = h.filter(function(d){ return d.v >= 0; }), r = marketReading;
  var bear = h.filter(function(d){ return d.v < 0; }), lastBear = bear[bear.length - 1], run = 0;
  for (var i = h.length - 1; i >= 0 && h[i].v >= 0; i--) run++;
  return [lede('What the whole stock market returned each year, dividends included. A year above the line is a bull year ' +
      'and one below it a bear year, the same years the dial\u2019s inner band colours.'),
    hiCard(last.y + (r.open ? " so far" : ""), s.row.flagState || "", fmtSigned(last.v, 1) + "%, " +
      (last.v >= 0 ? "a bull year" : "a bear year") + (run > 1 ? ", the " + (ORDINAL[run] || run + "th") + " bull year in a row." : ".") +
      (lastBear && last.v >= 0 ? " The last bear year was " + lastBear.y + ", at " + fmtSigned(lastBear.v, 1) + "%." : "")),
    hiCard("Against the Record", "", "Of the " + h.length + " years since " + h[0].y + ", " + bull.length + " were bull years and " +
      bear.length + " bear years. The best was " + r.hi.y + " at " + fmtSigned(r.hi.v, 1) + "%, the worst " + r.lo.y + " at " + fmtSigned(r.lo.v, 1) + "%.")];
}
function interestInsight(s: SplitSpec){
  var hist = interestQuarterly, last = hist[hist.length - 1], paid = interestDollarsQuarterly[interestDollarsQuarterly.length - 1];
  var rec = hist.reduce(function(a, d){ return d.v > a.v ? d : a; }), higher = hist.filter(function(d){ return d.v > last.v; }).length;
  var above = hist.filter(function(d){ return d.v > s.mid; }).length, top = interestDollarsQuarterly.every(function(d){ return d.v <= paid.v; });
  return [lede('The yearly cost of carrying the debt. Money spent on interest is energy the body has ' +
      'already used, paid again every year.'),
    hiCard("In Dollars", "", qPretty(paid.q) + ", the federal government paid interest at " + dollars(paid.v) + " a year" + (top ? ", the most it has ever paid." : ".")),
    hiCard("Against the Record", s.row.flagState || "", "As a share of GDP, " + last.v.toFixed(1) + "% " + (higher ? "sits below " + higher + " of the " + hist.length +
      " quarters since " + qPretty(hist[0].q) + "; the record is " + rec.v.toFixed(1) + "% in " + qPretty(rec.q) + "." : "is the highest since " + qPretty(hist[0].q) + ".") +
      " " + above + " quarters ran above the " + s.mid.toFixed(1) + "% line.")];
}
