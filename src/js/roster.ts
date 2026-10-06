import { qAtIndex } from "./format.ts";
import { GYN, LIVE_NAMES } from "./live.ts";
import { bagSvg, boltSvg, budgetSvg, circulationSvg, clockSvg, debtSvg, diamondSvg, ecgSvg, flameSvg, gaugeSvg, heartSvg, houseSvg, interestSvg, marketSvg, personSvg, sproutSvg, thermoSvg, volatilitySvg } from "./marks.ts";
import { confidenceHistory, durablesHistory, fedFundsHistory, premiumHistory, fiscalHistory, grossDebtQuarterly, productivityHistory, volatilityHistory } from "./history-fred.ts";
import { inflationHistory, gdpQuarterlyYoY } from "./refresh-season.ts";
import { BUFFETT_LINE, buffettHistory, CAPE_FAIR, capeHistory, CONFIDENCE_LINE, DEBT_LINE, DEF_FROM_YEAR, DEFICIT_LINE, deficitHistory, DESIRE_LINE, DSR_FROM_YEAR, dsrHistory, INTEREST_LINE, M2_FROM_YEAR, M2V_FROM_YEAR, m2vHistory, m2Yoy, PREMIUM_LINE, PRODUCTIVITY_SLOWDOWN, SAV_FROM_YEAR, savHistory, sp500Years, t10yYieldHistory, unempHistory, TEMP_BAND_HI, TEMP_BAND_LO } from "./data.ts";
import { page } from "./history.ts";

// ---- The roster: every reading, declared once ----
export type Category = { key: string; title: string; shown: number; onDial?: boolean };
export var TIMING: Record<RosterTiming, { label: string }> = {
  structural: { label:"Structural" },
  leading:    { label:"Leading" },
  coincident: { label:"Coincident" },
  lagging:    { label:"Lagging" }
};
export var CATEGORIES: Category[] = [
  { key:"weather", title:"Weather", shown:0, onDial:true },
  { key:"circulation", title:"Circulation", shown:2 },
  { key:"mood", title:"Mood", shown:1 },
  { key:"energy", title:"Activity", shown:3 }
];
export var GROUP_MARK: Record<string, () => string> = { "Stress":boltSvg };
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
export function rosterFor(ind: { bodyTerm: string }): RosterRow { return ROSTER.filter(function(R){ return R.term === ind.bodyTerm; })[0]; }
function checkRoster(){
  var bad: string[] = [], seen: Record<string, number> = {}, live: Record<string, number> = {}, groups: string[] = [];
  ROSTER.forEach(function(R, i){
    var prev = ROSTER[i - 1];
    if (seen[R.id]) bad.push(R.id + ": declared twice");
    seen[R.id] = 1;
    if (!CATEGORIES.some(function(c){ return c.key === R.cat; })) bad.push(R.id + ": no category " + R.cat);
    if (!TIMING[R.timing]) bad.push(R.id + ": no timing " + R.timing);
    if (typeof R.mark !== "function") bad.push(R.id + ": no mark");
    if (R.group && !(prev && prev.group === R.group)){
      if (groups.indexOf(R.group) !== -1) bad.push(R.id + ": " + R.group + " is split");
      groups.push(R.group);
    }
    (R.live || []).forEach(function(n){ live[n] = 1; if (LIVE_NAMES.indexOf(n) === -1) bad.push(R.id + ": no live reading " + n); });
  });
  LIVE_NAMES.forEach(function(n){ if (!live[n]) bad.push(n + ": arrives live and no reading shows it"); });
  if (bad.length && window.console) console.warn("roster: " + bad.join(", "));
}
export function periodOf(row: { shortNote?: string }){ return (/^(FY\d{4}|Q[1-4] \d{4})/.exec(row.shortNote || "") || [])[1] || ""; }
export function categoriesShown(){ return CATEGORIES.slice().sort(function(a, b){ return a.shown - b.shown; }); }

export var ROSTER: RosterRow[];

function declareRoster(): RosterRow[] {
  return [
    { id:"sheet-metric-temp", name:"Temperature", cat:"weather", sub:"Economic Season", timing:"lagging", mark:thermoSvg, door:"peek", slot:"temp", term:"Temperature",
      head:"CPI and PCE Inflation", hist:{ s:inflationHistory, k:"m" }, cardUnit:"PCE, YoY",
      normal:{ lo:TEMP_BAND_LO, hi:TEMP_BAND_HI, why:"the Season Model\u2019s band, a point either side of the Fed\u2019s 2% target" } },
    { id:"sheet-metric-gdp", name:"Growth", cat:"weather", sub:"Economic Season", good:"up", timing:"coincident", mark:sproutSvg, door:"peek", slot:"gdp",
      head:"Real GDP", hist:{ s:gdpQuarterlyYoY, k:"q" }, cardUnit:"YoY" },
    { id:"sheet-sign-market", name:"S&P 500", cat:"weather", sub:"Market", good:"up", timing:"leading", mark:marketSvg, door:"row", term:"S&P 500",
      head:"S&P 500, Total Return by Year", hist:{ s:sp500Years, k:"y" }, mid:0, cardUnit:"total return" },
    { id:"sheet-sign-hormones", name:"Interest rates", cat:"circulation", sub:"Pressure", timing:"leading", mark:heartSvg, door:"subject", hk:"hormones-range",
      head:"Federal Funds Rate", hist:{ s:fedFundsHistory, k:"m" }, cardUnit:"Fed funds target", live:["fedFunds"] },
    { id:"sheet-sign-pressure", name:"US 10-year Treasury", cat:"circulation", sub:"Pressure", timing:"leading", mark:gaugeSvg, door:"subject", hk:"pressure-range",
      head:"", stops:["5y", "10y", "max"], hist:{ s:t10yYieldHistory, k:"q" }, cardUnit:"10-year Treasury", live:["yieldCurve"] },
    { id:"sheet-sign-pulse", name:"Pulse", cat:"circulation", sub:"Money", timing:"coincident", mark:ecgSvg, door:"pair", term:"Pulse", hk:"pulse-range",
      head:"Velocity of Money (M2)", hist:{ s:m2vHistory, k:"qi", y0:M2V_FROM_YEAR },
      cardUnit:"M2 velocity", live:["coincident"] },
    { id:"sheet-sign-volume", name:"Volume", cat:"circulation", sub:"Money", timing:"leading", mark:circulationSvg, door:"pair", term:"Volume", hk:"volume-range",
      head:"M2 Money Stock", hist:{ s:m2Yoy, k:"qi", y0:M2_FROM_YEAR }, cardUnit:"M2, YoY", live:["coincident"] },
    { id:"sheet-metric-valuation", name:"Shiller CAPE", cat:"mood", sub:"Valuations", good:"down", group:"Valuations", timing:"structural", mark:diamondSvg, door:"peek",
      slot:"valuation", head:"Shiller CAPE, Against Fair Value", hist:{ s:capeHistory, k:"y" }, mid:CAPE_FAIR, cardUnit:"CAPE", live:["valuation", "capeValue"] },
    { id:"sheet-metric-buffett", name:"Buffett indicator", cat:"mood", sub:"Valuations", good:"down", group:"Valuations", timing:"structural", mark:diamondSvg, door:"split",
      head:"Buffett Indicator, Market Value ÷ GDP", hist:{ s:buffettHistory, k:"q" }, mid:BUFFETT_LINE,
      cardUnit:"of GDP", live:["valuation"] },
    { id:"sheet-sign-sentiment", name:"Fear", cat:"mood", sub:"Sentiment", good:"down", timing:"leading", mark:volatilitySvg, door:"subject", hk:"fear-range",
      head:"Cboe Volatility Index (VIX)", hist:{ s:volatilityHistory, k:"m" }, cardUnit:"VIX", live:["sentiment", "vixClose", "vix3mClose"] },
    { id:"sheet-sign-desire", name:"Consumer demand", cat:"mood", sub:"Desire", good:"up", group:"Desire", timing:"coincident", mark:flameSvg, door:"row", term:"Desire",
      head:"Consumer Demand", hist:{ s:durablesHistory, k:"m" }, mid:DESIRE_LINE,
      cardUnit:"demand, YoY" },
    { id:"sheet-sign-premium", name:"Equity risk premium", cat:"mood", sub:"Desire", good:"up", group:"Desire", timing:"structural", mark:flameSvg, door:"row",
      term:"Equity risk premium", head:"Shiller Excess CAPE Yield", hist:{ s:premiumHistory, k:"m" }, mid:PREMIUM_LINE,
      cardUnit:"over bonds" },
    { id:"sheet-sign-confidence", name:"Confidence", cat:"mood", sub:"Sentiment", good:"up", timing:"leading", mark:bagSvg, door:"row", term:"Confidence",
      head:"OECD Consumer Confidence", hist:{ s:confidenceHistory, k:"m" }, mid:CONFIDENCE_LINE,
      cardUnit:"OECD index" },
    { id:"sheet-metric-debt", name:"Federal debt", cat:"energy", sub:"Stress", good:"down", group:"Stress", timing:"structural", mark:debtSvg, door:"split",
      head:"Gross Federal Debt, Share of GDP", hist:{ s:grossDebtQuarterly, k:"q" }, mid:DEBT_LINE, cardUnit:"of GDP" },
    { id:"sheet-metric-interest", name:"Interest payments", cat:"energy", sub:"Stress", good:"down", group:"Stress", timing:"structural", mark:interestSvg,
      door:"split", head:"Net Interest, Share of GDP", hist:{ s:fiscalHistory.interest, k:"y" }, mid:INTEREST_LINE,
      cardUnit:"of GDP" },
    { id:"sheet-marker-deficit", name:"Federal budget", cat:"energy", sub:"Stress", good:"up", group:"Stress", timing:"structural", mark:budgetSvg, door:"split",
      hk:"deficit-range", slot:"deficit", head:"Federal Deficit or Surplus, Share of GDP", hist:{ s:deficitHistory, k:"yi", y0:DEF_FROM_YEAR },
      flip:true, mid:DEFICIT_LINE, cardUnit:"deficit, of GDP" },
    { id:"sheet-metric-households", name:"Households", cat:"energy", sub:"Stress", good:"down", group:"Stress", timing:"structural", mark:houseSvg, door:"peek", slot:"households",
      head:"Debt Service, Share of Income", stops:["5y", "10y", "max"], hist:{ s:dsrHistory, k:"qi", y0:DSR_FROM_YEAR },
      pair:{ s:savHistory, k:"qi", y0:SAV_FROM_YEAR }, cardUnit:"% paid / kept" },
    { id:"sheet-sign-activity", name:"Unemployment rate", cat:"energy", sub:"Work", good:"down", timing:"lagging", mark:personSvg, door:"row",
      term:"Activity", head:"Unemployment Rate", hist:{ s:unempHistory, k:"m" } },
    { id:"sheet-sign-productivity-growth", name:"Productivity growth", cat:"energy", sub:"Work", good:"up", timing:"structural", mark:clockSvg,
      door:"row", term:"Productivity growth", head:"Output per Hour, Year over Year", hist:{ s:productivityHistory, k:"q" },
      mid:PRODUCTIVITY_SLOWDOWN }
  ];
}
export function bootRoster(){
  ROSTER = declareRoster();
  ROSTER.forEach(function(R){ ROSTER_BY[R.id] = R; });
  page.mode = pageState(function(R){ return R.cycles === false ? undefined : "cycles"; });
  page.cycles = pageState(function(R){ return R.cycles === false ? undefined : null; });
  page.range = pageState(function(R){ return R.range || "10y"; });
  page.stops = pageState(function(R){ return R.stops || ["5y", "10y", "25y", "max"]; });
  page.head = pageState(function(R){ return { mark:R.mark, title:R.head }; });
  page.y0 = pageState(function(R){ var d = R.hist ? keyed(R.hist).filter(function(x){ return x.v != null; })[0] : null; return d ? +String(d.k).slice(0, 4) : undefined; });
  GYN.step("checkRoster", checkRoster, "check");
  checkRoster();
  GYN.ROSTER = ROSTER;
}
