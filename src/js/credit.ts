import { fmtSigned, pointLabel, srcBlock, titleCase } from "./format.ts";
import { colPeek } from "./charts.ts";
import { delinquencyHistory, marginHistory } from "./history-fred.ts";
import { activitySpecs } from "./activity.ts";
import { concentrationSpecs } from "./concentration.ts";

// ---- Credit and debt: margin debt and delinquencies ----
export type CreditReading = Indicator & { tag: Tag; info: () => string; span: string; lead: string; caption: string; wordSays: string };
export type CreditPage = { goodAbove?: boolean; line: string; fmt: (v: number) => string; tick: (v: number) => string; src: Src[]; lede: string; series: CreditPoint[] };

export var MARGIN_LINE = 0, DELINQUENCY_TO = 2025;
export var MARGIN_SRC: Src[] = [
  { t:"FINRA — Margin Statistics: debit balances in customers’ securities margin accounts, monthly", u:"https://www.finra.org/rules-guidance/key-topics/margin-accounts/margin-statistics" }
];
export var DELINQUENCY_SRC: Src[] = [
  { t:"Federal Reserve — Charge-Off and Delinquency Rates on Loans and Leases at Commercial Banks, all loans, seasonally adjusted", u:"https://www.federalreserve.gov/releases/chargeoff/" },
  { t:"FRED — Delinquency Rate on All Loans, All Commercial Banks (DRALACBS)", u:"https://fred.stlouisfed.org/series/DRALACBS" }
];
export var DELINQUENCY_MEAN: number;

function avgSpan(){ return delinquencyHistory[0].q.slice(0, 4) + "\u2013" + DELINQUENCY_TO; }
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
  return [
    { id:"sheet-sign-margin", term:"Margin debt", econ:"Margin debt", unit:"YoY", series:marginHistory, mid:MARGIN_LINE, line:"No change",
      fmt:function(v){ return fmtSigned(v, 0) + "%"; }, word:marginWord, src:MARGIN_SRC,
      about:"Margin debt is money investors borrow from their brokers to buy shares, with the shares as collateral. When prices fall, brokers call " +
        "for cash or sell the shares, and the forced selling deepens the fall. The figure is FINRA’s total of debit balances in margin accounts, " +
        "against the same month a year earlier.",
      band:"<b>Zero is the only line.</b> Above it investors are borrowing more to own stocks than a year ago; below it they are paying it back.",
      lede:"Money borrowed to buy stocks, against the same month a year earlier: the market’s own appetite for credit." },
    { id:"sheet-metric-delinquency", term:"Delinquencies", econ:"Delinquencies", unit:"of bank loans", series:delinquencyHistory, mid:DELINQUENCY_MEAN,
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
export function bootCredit(){
  var closed = delinquencyHistory.filter(function(d){ return +d.q.slice(0, 4) <= DELINQUENCY_TO; });
  DELINQUENCY_MEAN = Math.round(closed.reduce(function(a, d){ return a + d.v; }, 0) / closed.length * 100) / 100;
  specs().concat(activitySpecs(), concentrationSpecs()).forEach(function(S){
    creditReadings[S.id] = readingOf(S);
    creditPages[S.id] = { goodAbove:S.goodAbove, line:S.line, fmt:S.fmt, tick:S.fmt, src:S.src, lede:S.lede, series:S.series };
  });
}
