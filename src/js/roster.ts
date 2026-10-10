import { qAtIndex } from "./format.ts";
import { GYN, LIVE_NAMES, READINGS } from "./live.ts";
import { bagSvg, debtSvg, homeSvg, diamondSvg, diceSvg, factorySvg, gaugeSvg, heartSvg, marketSvg, personSvg, thermoSvg, volatilitySvg } from "./marks.ts";
import { confidenceHistory, payrollsHistory, retailHistory, consumerCreditHistory, delinquencyHistory, durablesHistory, marginHistory, fedFundsHistory, premiumHistory, grossDebtQuarterly, productivityHistory, volatilityHistory, mortgageHistory } from "./history-fred.ts";
import { inflationHistory, gdpQuarterlyYoY } from "./refresh-season.ts";
import { BUFFETT_LINE, buffettHistory, CAPE_FAIR, capeHistory, CONFIDENCE_LINE, DEBT_LINE, DEF_FROM_YEAR, DEFICIT_LINE, deficitHistory, DESIRE_LINE, DSR_MEAN, M2_FROM_YEAR, M2V_FROM_YEAR, m2vHistory, m2Yoy, PREMIUM_LINE, PRODUCTIVITY_SLOWDOWN, SAV_MID, sp500Years, t10y3mHistory, t10yYieldHistory, unempHistory, TEMP_BAND_HI, TEMP_BAND_LO } from "./data.ts";
import { page } from "./history.ts";
import { CONSUMER_LINE, debtPaymentPoints, DELINQUENCY_MEAN, MARGIN_LINE, savingPoints } from "./credit.ts";
import { GAP_LINE, growthGapHistory, PAYROLLS_LINE, RETAIL_LINE } from "./activity.ts";
import { CONCENTRATION_MEAN, topTenHistory } from "./concentration.ts";

// ---- The roster: every reading, declared once ----
type Category = { key: string; title: string; shown: number; onDial?: boolean };
export var TIMING: Record<RosterTiming, { label: string }> = {
  structural: { label:"Structural" },
  leading:    { label:"Leading" },
  coincident: { label:"Coincident" },
  lagging:    { label:"Lagging" }
};
export var CATEGORIES: Category[] = [
  { key:"weather", title:"Weather", shown:0, onDial:true },
  { key:"activity", title:"Activity", shown:1 },
  { key:"circulation", title:"Circulation", shown:4 },
  { key:"mood", title:"Mood", shown:2 },
  { key:"desire", title:"Desire", shown:3 },
  { key:"stress", title:"Stress", shown:5 }
];
export var SUB_MARK: Record<string, () => string> = {
  "Economic Season":thermoSvg, "Market":marketSvg, "Labor":personSvg, "Output":factorySvg, "Pressure":gaugeSvg, "Money":heartSvg,
  "Households":homeSvg, "Government":debtSvg, "Valuations":diamondSvg, "Sentiment":volatilitySvg, "Demand":bagSvg, "Risk":diceSvg
};
export var ROSTER_BY: Record<string, RosterRow> = {};
function pageState<T>(of: (R: RosterRow) => T | undefined): Record<string, T> {
  var o: Record<string, T> = {};
  ROSTER.forEach(function(R){ var v = R.head == null ? undefined : of(R); if (v !== undefined) o[R.hk || R.id] = v; });
  return o;
}
export function keyed(h: HistSpec): Keyed[] {
  return (h.s as readonly (number | null | Point)[]).map(function(d, i){
    return h.k === "qi" ? { k:qAtIndex(h.y0, i), v:d as number | null } : h.k === "yi" ? { k:String(h.y0 + i), v:d as number | null }
         : { k:h.k === "y" ? String((d as Point).y) : (d as Point)[h.k] as string, v:(d as Point).v };
  });
}
function runsOf(R: RosterRow){ return [R.cat, R.cat + "/" + R.sub, R.group]; }
function splitRun(R: RosterRow, prev: RosterRow | undefined, runs: string[], bad: string[]){
  runsOf(R).forEach(function(k, d){
    if (!k || (prev && runsOf(prev)[d] === k)) return;
    if (runs.indexOf(k) !== -1) bad.push(R.id + ": " + k + " is split");
    runs.push(k);
  });
}
function checkRoster(){
  var bad: string[] = [], seen: Record<string, number> = {}, live: Record<string, number> = {}, runs: string[] = [];
  ROSTER.forEach(function(R, i){
    var prev = ROSTER[i - 1];
    if (seen[R.id]) bad.push(R.id + ": declared twice");
    seen[R.id] = 1;
    if (!CATEGORIES.some(function(c){ return c.key === R.cat; })) bad.push(R.id + ": no category " + R.cat);
    if (!TIMING[R.timing]) bad.push(R.id + ": no timing " + R.timing);
    if (typeof SUB_MARK[R.sub] !== "function") bad.push(R.id + ": no mark for " + R.sub);
    splitRun(R, prev, runs, bad);
    (R.live || []).forEach(function(n){ live[n] = 1; if (LIVE_NAMES.indexOf(n) === -1) bad.push(R.id + ": no live reading " + n); });
  });
  LIVE_NAMES.forEach(function(n){ if (!live[n] && !READINGS[n].words) bad.push(n + ": arrives live and no reading shows it"); });
  if (bad.length && window.console) console.warn("roster: " + bad.join(", "));
}
export function categoriesShown(){ return CATEGORIES.slice().sort(function(a, b){ return a.shown - b.shown; }); }

export var ROSTER: RosterRow[];

function declareRoster(): RosterRow[] {
  return [
    { id:"sheet-metric-temp", name:"Temperature", cat:"weather", sub:"Economic Season", timing:"lagging", term:"Temperature",
      head:"CPI and PCE Inflation", hist:{ s:inflationHistory, k:"m" }, cardUnit:"PCE, YoY",
      normal:{ lo:TEMP_BAND_LO, hi:TEMP_BAND_HI, why:"the Season Model\u2019s band, a point either side of the Fed\u2019s 2% target" } },
    { id:"sheet-sign-growth-gap", name:"Growth gap", cat:"weather", sub:"Economic Season", good:"up", timing:"coincident",
      term:"Growth gap", head:"GDP Growth vs Potential", hist:{ s:growthGapHistory, k:"q" }, mid:GAP_LINE, cardUnit:"vs potential" },
    { id:"sheet-sign-hormones", name:"Federal funds rate", cat:"weather", sub:"Economic Season", timing:"leading", hk:"hormones-range",
      head:"Federal Funds Rate", hist:{ s:fedFundsHistory, k:"m" }, cardUnit:"Fed funds target", live:["fedFunds"] },
    { id:"sheet-sign-market", name:"S&P 500", cat:"weather", sub:"Market", good:"up", timing:"leading", term:"S&P 500",
      head:"S&P 500, Total Return by Year", hist:{ s:sp500Years, k:"y" }, mid:0, cardUnit:"total return" },
    { id:"sheet-sign-activity", name:"Unemployment rate", cat:"activity", sub:"Labor", good:"down", timing:"lagging",
      term:"Activity", head:"Unemployment Rate", hist:{ s:unempHistory, k:"m" } },
    { id:"sheet-sign-payrolls", name:"Job growth", cat:"activity", sub:"Labor", good:"up", timing:"coincident",
      term:"Job growth", head:"Nonfarm Payrolls, YoY", hist:{ s:payrollsHistory, k:"m" }, mid:PAYROLLS_LINE, cardUnit:"YoY" },
    { id:"sheet-metric-gdp", name:"GDP growth", cat:"activity", sub:"Output", good:"up", timing:"coincident",
      head:"Real GDP", hist:{ s:gdpQuarterlyYoY, k:"q" }, cardUnit:"YoY" },
    { id:"sheet-sign-productivity-growth", name:"Productivity growth", cat:"activity", sub:"Output", good:"up", timing:"structural",
      term:"Productivity growth", head:"Output per Hour, YoY", hist:{ s:productivityHistory, k:"q" },
      mid:PRODUCTIVITY_SLOWDOWN },
    { id:"sheet-sign-pressure", name:"US 10-year Treasury", cat:"circulation", sub:"Pressure", timing:"leading", hk:"pressure-range",
      head:"", stops:["5y", "10y", "max"], hist:{ s:t10yYieldHistory, k:"q" }, cardUnit:"10-year Treasury", live:["yieldCurve"] },
    { id:"sheet-sign-spreads", name:"Treasury spreads", cat:"circulation", sub:"Pressure", timing:"leading", hk:"spreads-range",
      head:"", hist:{ s:t10y3mHistory, k:"q" }, mid:0, cardUnit:"10Y \u2212 3M, points", live:["yieldCurve"] },
    { id:"sheet-sign-mortgage", name:"30-year mortgage rate", cat:"circulation", sub:"Pressure", timing:"leading", hk:"mortgage-range",
      head:"30-Year Fixed Mortgage Rate", hist:{ s:mortgageHistory, k:"m" }, cardUnit:"30-year fixed, monthly average" },
    { id:"sheet-sign-pulse", name:"Pulse", cat:"circulation", sub:"Money", timing:"coincident", term:"Pulse", hk:"pulse-range",
      head:"Velocity of Money (M2)", hist:{ s:m2vHistory, k:"qi", y0:M2V_FROM_YEAR },
      cardUnit:"M2 velocity", live:["coincident"] },
    { id:"sheet-sign-volume", name:"Volume", cat:"circulation", sub:"Money", timing:"leading", term:"Volume", hk:"volume-range",
      head:"M2 Money Stock", hist:{ s:m2Yoy, k:"qi", y0:M2_FROM_YEAR }, cardUnit:"M2, YoY", live:["coincident"] },
    { id:"sheet-sign-saving", name:"Savings rate", cat:"stress", sub:"Households", good:"up", group:"Households", timing:"structural",
      term:"Savings rate", head:"Personal Savings Rate, Share of Income", hist:{ s:savingPoints, k:"q" }, mid:SAV_MID, cardUnit:"of income" },
    { id:"sheet-metric-debt-payments", name:"Debt-to-income ratio", cat:"stress", sub:"Households", good:"down", group:"Households", timing:"structural",
      term:"Debt-to-income ratio", head:"Debt Payments ÷ Disposable Income", hist:{ s:debtPaymentPoints, k:"q" }, mid:DSR_MEAN, cardUnit:"of income" },
    { id:"sheet-sign-margin", name:"Margin debt", cat:"stress", sub:"Households", group:"Households", timing:"leading",
      term:"Margin debt", head:"Margin Debt, YoY", hist:{ s:marginHistory, k:"m" }, mid:MARGIN_LINE, cardUnit:"YoY" },
    { id:"sheet-metric-debt", name:"Federal debt", cat:"stress", sub:"Government", good:"down", group:"Government", timing:"structural",
      head:"Gross Federal Debt, Share of GDP", hist:{ s:grossDebtQuarterly, k:"q" }, mid:DEBT_LINE, cardUnit:"of GDP" },
    { id:"sheet-marker-deficit", name:"Federal budget", cat:"stress", sub:"Government", good:"up", group:"Government", timing:"structural",
      hk:"deficit-range", head:"Federal Deficit or Surplus, Share of GDP", hist:{ s:deficitHistory, k:"yi", y0:DEF_FROM_YEAR },
      flip:true, mid:DEFICIT_LINE, cardUnit:"deficit, of GDP" },
    { id:"sheet-metric-valuation", name:"Shiller CAPE", cat:"mood", sub:"Valuations", good:"down", group:"Valuations", timing:"structural",
      head:"Shiller CAPE, Against Fair Value", hist:{ s:capeHistory, k:"y" }, mid:CAPE_FAIR, cardUnit:"CAPE", live:["valuation", "capeValue"] },
    { id:"sheet-metric-buffett", name:"Buffett indicator", cat:"mood", sub:"Valuations", good:"down", group:"Valuations", timing:"structural",
      head:"Buffett Indicator, Market Value ÷ GDP", hist:{ s:buffettHistory, k:"q" }, mid:BUFFETT_LINE,
      cardUnit:"of GDP", live:["valuation"] },
    { id:"sheet-sign-sentiment", name:"Fear", cat:"mood", sub:"Sentiment", good:"down", timing:"leading", hk:"fear-range",
      head:"Cboe Volatility Index (VIX)", hist:{ s:volatilityHistory, k:"m" }, cardUnit:"VIX", live:["sentiment", "vixClose", "vix3mClose"] },
    { id:"sheet-sign-confidence", name:"Confidence", cat:"mood", sub:"Sentiment", good:"up", timing:"leading", term:"Confidence",
      head:"OECD Consumer Confidence", hist:{ s:confidenceHistory, k:"m" }, mid:CONFIDENCE_LINE,
      cardUnit:"OECD index" },
    { id:"sheet-sign-desire", name:"Discretionary spending", cat:"desire", sub:"Demand", good:"up", group:"Demand", timing:"coincident", term:"Desire",
      head:"Discretionary Spending", hist:{ s:durablesHistory, k:"m" }, mid:DESIRE_LINE,
      cardUnit:"durables, YoY" },
    { id:"sheet-sign-retail", name:"Retail sales", cat:"desire", sub:"Demand", good:"up", group:"Demand", timing:"coincident",
      term:"Retail sales", head:"Retail Sales, YoY", hist:{ s:retailHistory, k:"m" }, mid:RETAIL_LINE, cardUnit:"YoY" },
    { id:"sheet-sign-consumer-credit", name:"Consumer credit", cat:"desire", sub:"Demand", group:"Demand", timing:"lagging",
      term:"Consumer credit", head:"Consumer Credit, YoY", hist:{ s:consumerCreditHistory, k:"m" }, mid:CONSUMER_LINE, cardUnit:"YoY" },
    { id:"sheet-sign-concentration", name:"Concentration risk", cat:"desire", sub:"Risk", good:"down", group:"Risk", timing:"structural",
      term:"Concentration risk", head:"S&P 500, Top 10 Share of Market Cap", hist:{ s:topTenHistory, k:"q" }, mid:CONCENTRATION_MEAN,
      cardUnit:"top ten of the S&P 500" },
    { id:"sheet-sign-premium", name:"Equity risk premium", cat:"desire", sub:"Risk", good:"up", group:"Risk", timing:"structural",
      term:"Equity risk premium", head:"Shiller Excess CAPE Yield", hist:{ s:premiumHistory, k:"m" }, mid:PREMIUM_LINE,
      cardUnit:"over bonds" },
    { id:"sheet-metric-delinquency", name:"Default risk", cat:"desire", sub:"Risk", good:"down", group:"Risk", timing:"lagging",
      term:"Default risk", head:"Bank Loans Past Due", hist:{ s:delinquencyHistory, k:"q" }, mid:DELINQUENCY_MEAN, cardUnit:"of bank loans" }
  ];
}
export function bootRoster(){
  ROSTER = declareRoster();
  ROSTER.forEach(function(R){ ROSTER_BY[R.id] = R; });
  page.mode = pageState(function(){ return "cycles"; });
  page.cycles = pageState(function(){ return null; });
  page.range = pageState(function(){ return "10y"; });
  page.stops = pageState(function(R){ return R.stops || ["5y", "10y", "25y", "max"]; });
  page.head = pageState(function(R){ return { mark:SUB_MARK[R.sub], title:R.head }; });
  page.y0 = pageState(function(R){ var d = R.hist ? keyed(R.hist).filter(function(x){ return x.v != null; })[0] : null; return d ? +String(d.k).slice(0, 4) : undefined; });
  GYN.step("checkRoster", checkRoster, "check");
  checkRoster();
  GYN.ROSTER = ROSTER;
}
