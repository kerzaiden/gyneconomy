import { fmtSigned, pointLabel, qAtIndex, srcBlock, titleCase } from "./format.ts";
import { colPeek } from "./charts.ts";
import { consumerCreditHistory, delinquencyHistory, marginHistory } from "./history-fred.ts";
import { DSR_FROM_YEAR, DSR_MEAN, dsrHistory, SAV_FROM_YEAR, SAV_HIGH, SAV_LOW, SAV_MID, SAV_THIN, savHistory } from "./data.ts";
import { activitySpecs } from "./activity.ts";
import { concentrationSpecs } from "./concentration.ts";

// ---- Credit, households and debt: consumer credit, margin debt, the saving rate, debt payments and delinquencies ----
export type CreditReading = Indicator & { tag: Tag; info: () => string; span: string; lead: string; caption: string; wordSays: string };
export type CreditPage = { goodAbove?: boolean; line: string; fmt: (v: number) => string; tick: (v: number) => string; src: Src[]; lede: string; series: CreditPoint[] };

export var CONSUMER_LINE = 0, MARGIN_LINE = 0, DELINQUENCY_TO = 2025;
export var CONSUMER_SRC: Src[] = [
  { t:"Federal Reserve — G.19 Consumer Credit, monthly: revolving (credit cards) and nonrevolving (auto and student loans) credit owed by households, mortgages excluded", u:"https://www.federalreserve.gov/releases/g19/current/" },
  { t:"FRED — Total Consumer Credit Owned and Securitized (TOTALSL)", u:"https://fred.stlouisfed.org/series/TOTALSL" },
  { t:"The Conference Board — Lagging Economic Index, whose components include consumer installment credit outstanding to personal income", u:"https://www.conference-board.org/topics/us-leading-indicators" }
];
export var MARGIN_SRC: Src[] = [
  { t:"FINRA — Margin Statistics: debit balances in customers’ securities margin accounts, monthly", u:"https://www.finra.org/rules-guidance/key-topics/margin-accounts/margin-statistics" }
];
export var SAVING_SRC: Src[] = [
  { t:"BEA via FRED \u2014 Personal Saving Rate, quarterly since 1947 (PSAVERT)", u:"https://fred.stlouisfed.org/series/PSAVERT" }
];
export var DEBT_PAYMENTS_SRC: Src[] = [
  { t:"Federal Reserve via FRED \u2014 Household Debt Service Payments as a Percent of Disposable Personal Income (TDSP)", u:"https://fred.stlouisfed.org/series/TDSP" },
  { t:"Jord\u00e0, Schularick and Taylor \u2014 When Credit Bites Back: Leverage, Business Cycles, and Crises (NBER Working Paper 17621, 2011)", u:"https://www.nber.org/papers/w17621" }
];
export var DELINQUENCY_SRC: Src[] = [
  { t:"Federal Reserve — Charge-Off and Delinquency Rates on Loans and Leases at Commercial Banks, all loans, seasonally adjusted", u:"https://www.federalreserve.gov/releases/chargeoff/" },
  { t:"FRED — Delinquency Rate on All Loans, All Commercial Banks (DRALACBS)", u:"https://fred.stlouisfed.org/series/DRALACBS" }
];
export var DELINQUENCY_MEAN: number;
export var savingPoints: QuarterPoint[] = savHistory.map(function(v, i){ return { q:qAtIndex(SAV_FROM_YEAR, i), v:v }; });
export var debtPaymentPoints: QuarterPoint[] = dsrHistory.map(function(v, i){ return { q:qAtIndex(DSR_FROM_YEAR, i), v:v }; });

function avgSpan(){ return delinquencyHistory[0].q.slice(0, 4) + "\u2013" + DELINQUENCY_TO; }
function consumerWord(v: number): CreditWord {
  if (v >= CONSUMER_LINE) return { state:"norm", text:"Borrowing more",
    says:"above zero: households owe more on cards, cars and student loans than a year earlier" };
  return { state:"norm", text:"Borrowing less", says:"below zero: households owe less on cards, cars and student loans than a year earlier" };
}
function marginWord(v: number): CreditWord {
  if (v >= MARGIN_LINE) return { state:"norm", text:"Borrowing more",
    says:"above zero: investors owe their brokers more than a year earlier" };
  return { state:"norm", text:"Borrowing less", says:"below zero: investors owe their brokers less than a year earlier" };
}
function savingWord(v: number): CreditWord {
  var band = " the " + SAV_LOW.toFixed(1) + "\u2013" + SAV_HIGH.toFixed(1) + "% that held in eight quarters of ten since " + SAV_FROM_YEAR;
  if (v < SAV_THIN) return { state:"serious", text:"Saving very little", says:"below the lowest twentieth of its quarters since " + SAV_FROM_YEAR + ": households keep almost nothing of what they earn" };
  if (v < SAV_LOW) return { state:"warning", text:"Saving little", says:"below" + band + ": households keep less of what they earn than usual" };
  if (v <= SAV_HIGH) return { state:"good", text:"Saving steadily", says:"within" + band };
  return { state:"norm", text:"Saving a lot", says:"above" + band + ": households are keeping more of what they earn than usual" };
}
function debtPaymentsWord(v: number): CreditWord {
  var avg = DSR_MEAN.toFixed(1) + "%";
  if (v > DSR_MEAN) return { state:"warning", text:"Above average", says:"above its " + DSR_FROM_YEAR + " onward average of " + avg + ": debt takes more of what households take home than usual" };
  return { state:"good", text:"Below average", says:"below its " + DSR_FROM_YEAR + " onward average of " + avg + ": debt takes less of what households take home than usual" };
}
function householdSpecs(): CreditSpec[] {
  var pct = function(v: number){ return v.toFixed(1) + "%"; };
  return [
    { id:"sheet-sign-saving", goodAbove:true, term:"Saving rate", econ:"Saving rate", unit:"of income", series:savingPoints, mid:SAV_MID, line:"Median since " + SAV_FROM_YEAR,
      optimal:{ from:SAV_LOW, to:SAV_HIGH, label:SAV_LOW.toFixed(1) + "\u2013" + SAV_HIGH.toFixed(1) + "%" }, ends:{ low:"Saving little" }, fmt:pct, word:savingWord, src:SAVING_SRC,
      about:"What is left of households\u2019 income after tax and spending, as a share of that income, as the Bureau of Economic Analysis reports it each quarter: " +
        "the personal saving rate the news quotes.",
      band:"<b>The band is computed, not chosen</b>: the tenth to ninetieth percentile of every quarter since " + SAV_FROM_YEAR + ", and the line is their median. " +
        "No convention sets a normal saving rate. Below the band households have little set aside for a month that goes wrong.",
      lede:"What households keep of what they earn: the cushion against a bad month." },
    { id:"sheet-metric-debt-payments", term:"Debt payments", econ:"Debt payments", unit:"of income", series:debtPaymentPoints, mid:DSR_MEAN, line:"Average since " + DSR_FROM_YEAR,
      optimal:{ lte:DSR_MEAN, label:"\u2264 " + DSR_MEAN.toFixed(1) + "%" }, ends:{ high:"Above average" }, fmt:pct, word:debtPaymentsWord, src:DEBT_PAYMENTS_SRC,
      about:"What households pay each quarter in required payments on mortgages, credit cards and loans, as a share of what they take home, " +
        "as the Federal Reserve estimates it: its household debt service ratio, taken across every household and measured against income after tax. It counts the payments, not the debt owed: a larger debt at a lower rate can cost the same each month. Much of today\u2019s mortgage debt was fixed at the low rates of 2020\u201321, so the bill is light partly because that debt is cheap, not only because households owe less. When debt grows much faster than income, downturns run deeper and longer, as after 2007 (Jord\u00e0, Schularick and Taylor).",
      band:"<b>The line is the series\u2019 own average since " + DSR_FROM_YEAR + "</b>. No convention sets a band, so the line is derived from the record and " +
        "only above it is flagged: a light debt bill is not a condition.",
      lede:"The share of take-home pay that goes to paying debts: the load households carry each month." }
  ];
}
function delinquencyWord(v: number): CreditWord {
  var avg = DELINQUENCY_MEAN.toFixed(2) + "%";
  if (v >= DELINQUENCY_MEAN) return { state:"warning", text:"Above average",
    says:"above its " + avgSpan() + " average of " + avg + ": more loans are going unpaid than usual" };
  return { state:"good", text:"Below average", says:"below its " + avgSpan() + " average of " + avg + ": fewer loans are going unpaid than usual" };
}
function specs(): CreditSpec[] {
  return [
    { id:"sheet-sign-consumer-credit", term:"Consumer credit", econ:"Consumer credit", unit:"YoY", series:consumerCreditHistory, mid:CONSUMER_LINE, line:"No change",
      fmt:function(v){ return fmtSigned(v, 1) + "%"; }, word:consumerWord, src:CONSUMER_SRC,
      about:"Consumer credit is what households owe on credit cards, car loans and student loans, mortgages excluded, as the Federal Reserve " +
        "reports it each month (G.19). The figure is the total against the same month a year earlier.",
      band:"<b>Zero is the only line.</b> Above it households are borrowing more to spend than a year ago; below it they are paying it down. " +
        "No convention sets a band for its growth.",
      lede:"What households owe on cards, cars and student loans, against the same month a year earlier: borrowing to spend." },
    { id:"sheet-sign-margin", term:"Margin debt", econ:"Margin debt", unit:"YoY", series:marginHistory, mid:MARGIN_LINE, line:"No change",
      fmt:function(v){ return fmtSigned(v, 0) + "%"; }, word:marginWord, src:MARGIN_SRC,
      about:"Margin debt is money investors borrow from their brokers to buy shares, with the shares as collateral. When prices fall, brokers call " +
        "for cash or sell the shares, and the forced selling deepens the fall. The figure is FINRA’s total of debit balances in margin accounts, " +
        "against the same month a year earlier.",
      band:"<b>Zero is the only line.</b> Above it investors are borrowing more to own stocks than a year ago; below it they are paying it back.",
      lede:"Money borrowed to buy stocks, against the same month a year earlier: the market’s own appetite for credit." },
    { id:"sheet-metric-delinquency", term:"Default risk", econ:"Default risk", unit:"of bank loans", series:delinquencyHistory, mid:DELINQUENCY_MEAN,
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
  specs().concat(householdSpecs(), activitySpecs(), concentrationSpecs()).forEach(function(S){
    creditReadings[S.id] = readingOf(S);
    creditPages[S.id] = { goodAbove:S.goodAbove, line:S.line, fmt:S.fmt, tick:S.fmt, src:S.src, lede:S.lede, series:S.series };
  });
}
