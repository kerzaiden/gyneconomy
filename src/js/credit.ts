import { atMonth, fmtSigned, hiCard, lede, qPretty, srcBlock, titleCase } from "./format.ts";
import { colPeek } from "./charts.ts";
import { creditGapHistory, delinquencyHistory, marginHistory } from "./history-fred.ts";

// ---- Credit and debt: the credit gap, margin debt and delinquencies ----
type CreditPoint = { m?: string; q?: string; v: number };
type CreditWord = { state: State; text: string; says: string };
export type CreditReading = Indicator & { tag: Tag; info: () => string; span: string; lead: string; caption: string; page: IndicatorPage; wordSays: string };
type CreditSpec = {
  id: string; term: string; econ: string; unit: string; series: CreditPoint[]; mid: number; line: string; optimal?: Band; ends?: Meter["ends"];
  fmt: (v: number) => string; word: (v: number) => CreditWord; about: string; band: string; lede: string; src: Src[];
};
export type CreditPage = { line: string; fmt: (v: number) => string; tick: (v: number) => string; src: Src[]; lede: string; series: CreditPoint[] };

export var GAP_BUILD = 2, GAP_BOOM = 10, MARGIN_LINE = 0, DELINQUENCY_TO = 2025;
export var GAP_SRC: Src[] = [
  { t:"Bank for International Settlements — Credit-to-GDP gaps, United States, private non-financial sector, quarterly", u:"https://data.bis.org/topics/CREDIT_GAPS" },
  { t:"Basel Committee on Banking Supervision — Guidance for national authorities operating the countercyclical capital buffer, Dec 2010 (the 2 and 10 point lines)", u:"https://www.bis.org/publ/bcbs187.htm" },
  { t:"Mathias Drehmann and Kostas Tsatsaronis — The credit-to-GDP gap and countercyclical capital buffers: questions and answers, BIS Quarterly Review, Mar 2014", u:"https://www.bis.org/publ/qtrpdf/r_qt1403g.htm" }
];
export var MARGIN_SRC: Src[] = [
  { t:"FINRA — Margin Statistics: debit balances in customers’ securities margin accounts, monthly", u:"https://www.finra.org/rules-guidance/key-topics/margin-accounts/margin-statistics" }
];
export var DELINQUENCY_SRC: Src[] = [
  { t:"Federal Reserve — Charge-Off and Delinquency Rates on Loans and Leases at Commercial Banks, all loans, seasonally adjusted", u:"https://www.federalreserve.gov/releases/chargeoff/" },
  { t:"FRED — Delinquency Rate on All Loans, All Commercial Banks (DRALACBS)", u:"https://fred.stlouisfed.org/series/DRALACBS" }
];
export var DELINQUENCY_MEAN: number;

function avgSpan(){ return delinquencyHistory[0].q.slice(0, 4) + "\u2013" + DELINQUENCY_TO; }
function pointLabel(d: CreditPoint){ return d.m ? atMonth(d as MonthPoint) : qPretty(d.q); }
function gapWord(v: number): CreditWord {
  if (v >= GAP_BOOM) return { state:"serious", text:"Credit boom",
    says:"at or above 10 points over trend, where Basel III asks banks to hold the full countercyclical buffer" };
  if (v >= GAP_BUILD) return { state:"warning", text:"Build-up",
    says:"between 2 and 10 points over trend, where Basel III starts the countercyclical buffer" };
  return { state:"good", text:"No build-up", says:"below 2 points over trend, where Basel III asks for no buffer" };
}
function marginWord(v: number): CreditWord {
  if (v >= MARGIN_LINE) return { state:"norm", text:"Borrowing more",
    says:"above zero: investors owe their brokers more than a year earlier" };
  return { state:"norm", text:"Borrowing less", says:"below zero: investors owe their brokers less than a year earlier" };
}
function delinquencyWord(v: number): CreditWord {
  var avg = DELINQUENCY_MEAN.toFixed(2) + "%";
  if (v >= DELINQUENCY_MEAN) return { state:"warning", text:"Above average",
    says:"above its " + avgSpan() + " average of " + avg + ": more loans are going unpaid than usual" };
  return { state:"good", text:"Below average", says:"below its " + avgSpan() + " average of " + avg + ": fewer loans are going unpaid than usual" };
}
function specs(): CreditSpec[] {
  var pts = function(v: number){ return fmtSigned(v, 1) + " pt"; };
  return [
    { id:"sheet-sign-credit-gap", term:"Credit gap", econ:"Credit gap", unit:"over trend", series:creditGapHistory, mid:GAP_BUILD, line:"Basel’s first line",
      optimal:{ lte:GAP_BUILD, label:"≤ 2 pt" }, ends:{ high:"Build-up" }, fmt:pts, word:gapWord, src:GAP_SRC,
      about:"What households and companies owe, as a share of GDP, against its own long-run trend. The Bank for International Settlements " +
        "publishes the gap itself; the app does not compute it. The trend is a one-sided filter, so each quarter is judged only by the quarters before it.",
      band:"<b>The lines are Basel III’s.</b> Below 2 points banks hold no countercyclical buffer; from 2 the buffer starts, and at 10 it is full. " +
        "The gap was chosen because it ran high before most banking crises.",
      lede:"Private borrowing against the size of the economy, measured against its own trend. A wide gap is credit running ahead of what the body produces: the bubble before a crunch." },
    { id:"sheet-sign-margin", term:"Margin debt", econ:"Margin debt", unit:"YoY", series:marginHistory, mid:MARGIN_LINE, line:"No change",
      fmt:function(v){ return fmtSigned(v, 0) + "%"; }, word:marginWord, src:MARGIN_SRC,
      about:"Margin debt is money investors borrow from their brokers to buy shares, with the shares as collateral. When prices fall, brokers call " +
        "for cash or sell the shares, and the forced selling deepens the fall. The figure is FINRA’s total of debit balances in margin accounts, " +
        "against the same month a year earlier.",
      band:"<b>Zero is the only line.</b> Above it investors are borrowing more to own stocks than a year ago; below it they are paying it back.",
      lede:"Money borrowed to buy stocks, against the same month a year earlier: the market’s own appetite for credit." },
    { id:"sheet-metric-delinquency", term:"Delinquency rate", econ:"Delinquency rate", unit:"of bank loans", series:delinquencyHistory, mid:DELINQUENCY_MEAN,
      line:avgSpan() + " average", optimal:{ lte:DELINQUENCY_MEAN, label:"≤ " + DELINQUENCY_MEAN.toFixed(2) + "%" }, ends:{ high:"Above average" },
      fmt:function(v){ return v.toFixed(2) + "%"; }, word:delinquencyWord, src:DELINQUENCY_SRC,
      about:"The share of all loans at US commercial banks that are 30 days or more past due, or no longer accruing interest, as the Federal Reserve " +
        "reports it each quarter. It is debt failing to be paid: the point where the burden breaks.",
      band:"<b>The line is the record’s own average</b>, every quarter from " + avgSpan() + ". No convention sets a band for delinquencies, so the line is derived from the record and no other is drawn.",
      lede:"The share of bank loans running late. It rises once borrowers can no longer carry what they owe." }
  ];
}
function readingOf(S: CreditSpec): CreditReading {
  var h = S.series, last = h[h.length - 1];
  var lo = h.reduce(function(a, d){ return d.v < a.v ? d : a; }), hi = h.reduce(function(a, d){ return d.v > a.v ? d : a; });
  var word = S.word(last.v), at = pointLabel(last);
  var span = S.fmt(lo.v) + " (" + pointLabel(lo) + ") to " + S.fmt(hi.v) + " (" + pointLabel(hi) + ")";
  var r: CreditReading = {
    bodyTerm:S.term, econTerm:S.econ, metricSub:S.unit + ", " + at, metric:S.fmt(last.v), tag:{ state:word.state, text:word.text }, wordSays:word.says,
    meter:{ min:lo.v, max:hi.v, value:last.v, optimal:S.optimal, ends:S.ends }, span:span, lead:"",
    page:{ chart:function(){ return '<div id="' + S.id + '-chart"></div><div id="' + S.id + '-highlights"></div>'; } },
    caption:at + ", " + S.econ.toLowerCase() + " at " + S.fmt(last.v) + ", " + word.says + ". The track runs over the record since " + pointLabel(h[0]) + ": " + span + ".",
    info:function(){
      return '<h4>' + titleCase(S.econ) + '</h4>' +
        '<p class="caption">The reading is <b>' + word.text + '</b>: ' + S.fmt(last.v) + ', ' + word.says + ' (' + r.metricSub + '). The record runs ' + span + '.</p>' +
        '<p class="caption follow">' + S.about + '</p><p class="caption follow">' + S.band + '</p>' + srcBlock(S.src);
    }
  };
  Object.defineProperty(r, "peek", { get:function(){
    return colPeek(h.map(function(d){ return d.v - S.mid; }), function(v){ return "dv-bar " + (v > 0 ? "over" : "under"); }, 0, true);
  } });
  return r;
}
export var creditReadings: Record<string, CreditReading> = {};
export var creditPages: Record<string, CreditPage> = {};
export function creditInsight(s: { series: readonly Point[]; mid: number; name: string; row: { flagState?: Tone } }, P: CreditPage){
  var h = P.series, last = h[h.length - 1], above = h.filter(function(d){ return d.v >= s.mid; }).length;
  var side = function(d: CreditPoint){ return d.v >= s.mid; }, cross: CreditPoint | null = null;
  for (var i = h.length - 1; i > 0 && !cross; i--) if (side(h[i]) !== side(h[i - 1])) cross = h[i];
  var higher = h.filter(function(d){ return d.v > last.v; }).length;
  return [lede(P.lede),
    hiCard("The Latest Reading", s.row.flagState || "", pointLabel(last) + " read " + P.fmt(last.v) + ", " + (side(last) ? "above" : "below") + " the line at " +
      P.fmt(s.mid) + (cross ? ", where it has been since " + pointLabel(cross) + "." : ".")),
    hiCard("Against the Record", "", higher + " of its " + h.length + " readings since " + pointLabel(h[0]) + " ran higher, and " + above + " sat at or above the line.")];
}
export function bootCredit(){
  var closed = delinquencyHistory.filter(function(d){ return +d.q.slice(0, 4) <= DELINQUENCY_TO; });
  DELINQUENCY_MEAN = Math.round(closed.reduce(function(a, d){ return a + d.v; }, 0) / closed.length * 100) / 100;
  specs().forEach(function(S){
    creditReadings[S.id] = readingOf(S);
    creditPages[S.id] = { line:S.line, fmt:S.fmt, tick:S.fmt, src:S.src, lede:S.lede, series:S.series };
  });
}
