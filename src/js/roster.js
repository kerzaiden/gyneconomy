import { MONTHS_SHORT, prettyKey, qAtIndex } from "./format.js";
import { GYN, LIVE_NAMES, liveIsoOf } from "./live.js";
import { bagSvg, boltSvg, budgetSvg, circulationSvg, clockSvg, debtSvg, diamondSvg, ecgSvg, flameSvg, gaugeSvg, heartSvg, houseSvg, interestSvg, marketSvg, personSvg, sproutSvg, thermoSvg, volatilitySvg } from "./marks.js";
import { peekCard } from "./charts.js";
import { confidenceHistory, fedFundsHistory, fiscalHistory, grossDebtQuarterly, productivityHistory, volatilityHistory } from "./history-fred.js";
import { cpiYoYHistory, dataCompiledLabel, gdpQuarterlyYoY } from "./refresh-season.js";
import { buffettHistory, CAPE_FAIR, capeHistory, CONFIDENCE_LINE, curveAsOf, DEF_FROM_YEAR, deficitHistory, DSR_FROM_YEAR, dsrHistory, hyAt, hyOas, hyQuarters, labRow, M2_FROM_YEAR, M2V_FROM_YEAR, m2vHistory, m2Yoy, now, PRODUCTIVITY_SLOWDOWN, PULSE_PRE2008, SAV_FROM_YEAR, savHistory, sp500Years, t10yYieldHistory, unempHistory } from "./data.js";
import { page } from "./history.js";
import { desireRow, indPeriod, vixPct } from "./readings.js";

// ---- The roster: every reading, declared once ----
export var TIMING = {
  structural: { label:"Structural", hint:"the slow ground a cycle moves on" },
  leading:    { label:"Leading",    hint:"moves before the cycle turns" },
  coincident: { label:"Coincident", hint:"turns with the cycle" },
  lagging:    { label:"Lagging",    hint:"confirms a turn after it has happened" }
};
export var CATEGORIES = [
  { key:"weather", title:"Weather", shown:0, onDial:true },
  { key:"circulation", title:"Circulation", shown:2 },
  { key:"mood", title:"Mood", shown:1, inTrend:true },
  { key:"energy", title:"Energy", shown:3 }
];
export var GROUP_MARK = { "Stress":boltSvg };
export var ROSTER_BY = {};
function pageState(of){
  var o = {};
  ROSTER.forEach(function(R){ var v = R.head == null ? undefined : of(R); if (v !== undefined) o[R.hk || R.id] = v; });
  return o;
}
export function keyed(h){
  if (typeof h === "function") return h();
  return h.s.map(function(d, i){
    return h.k === "qi" ? { k:qAtIndex(h.y0, i), v:d } : h.k === "yi" ? { k:String(h.y0 + i), v:d }
         : { k:h.k === "y" ? String(d.y) : d[h.k], v:d.v };
  });
}
function hyMonths(){
  return hyOas.map(function(v, i){ var a = hyAt(i); return { k:a.y + "-" + ("0" + a.m).slice(-2), v:v }; });
}
function lastDate(R){ var h = keyed(R.hist); return prettyKey(h[h.length - 1].k); }
function compiledDay(){ return dataCompiledLabel; }
function isoLabel(iso){
  var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
  return m ? MONTHS_SHORT[Number(m[2]) - 1] + " " + Number(m[3]) + ", " + m[1] : "";
}
export function paintWhen(sheet){
  var R = ROSTER_BY[sheet], when = cardDate(R);
  if (!when) return;
  Array.prototype.forEach.call(document.querySelectorAll('[data-open="' + sheet + '"] .ci-when'), function(w){ w.textContent = when; });
}
function desireWhen(){
  var m = /(\w{3}) (\d{1,2}),? (\d{4})$/.exec(String((desireRow() || {}).metricSub || ""));
  return isoLabel(liveIsoOf("hyOasNow")) || (m ? m[1] + " " + m[2] + ", " + m[3] : "");
}
function labPeriod(R){ return periodOf(labRow(R.id)); }
export function rosterFor(ind){ return ROSTER.filter(function(R){ return R.term === ind.bodyTerm; })[0]; }
export function peekOf(id, o){
  var R = ROSTER_BY[id];
  o.kicker = R.name; o.mark = R.mark(); o.unit = R.cardUnit; o.target = id;
  return peekCard(o);
}
export function cardDate(R){ return R && R.when ? R.when(R) : ""; }
function checkRoster(){
  var bad = [], seen = {}, live = {}, groups = [];
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
export function periodOf(row){ return (/^(FY\d{4}|Q[1-4] \d{4})/.exec(row.shortNote || "") || [])[1] || ""; }
export function categoriesShown(){ return CATEGORIES.slice().sort(function(a, b){ return a.shown - b.shown; }); }

export var ROSTER;

export function bootRoster(){
  ROSTER = [
    { id:"sheet-metric-temp", name:"Temperature", cat:"weather", timing:"lagging", mark:thermoSvg, door:"peek", slot:"temp", term:"Temperature",
      head:"CPI", hist:{ s:cpiYoYHistory, k:"m" }, when:lastDate, cardUnit:"CPI, YoY" },
    { id:"sheet-metric-gdp", name:"Growth", cat:"weather", timing:"coincident", mark:sproutSvg, door:"peek", slot:"gdp",
      head:"Real GDP", hist:{ s:gdpQuarterlyYoY, k:"q" }, when:lastDate, cardUnit:"YoY" },
    { id:"sheet-sign-market", name:"S&P 500", cat:"weather", timing:"leading", mark:marketSvg, door:"row", term:"S&P 500",
      head:"S&P 500, Total Return by Year", hist:{ s:sp500Years, k:"y" }, mid:0, when:lastDate, cardUnit:"total return" },
    { id:"sheet-sign-hormones", name:"Interest rates", cat:"circulation", timing:"leading", mark:heartSvg, door:"subject", hk:"hormones-range",
      head:"Federal Funds Rate", hist:{ s:fedFundsHistory, k:"m" }, rule:true, eraUnit:"Fed funds rate",
      when:function(){ return now.fedFunds.asOf; }, live:["fedFunds"] },
    { id:"sheet-sign-pressure", name:"Pressure", cat:"circulation", timing:"leading", mark:gaugeSvg, door:"subject", hk:"pressure-range",
      head:"", stops:["5y", "10y", "max"], hist:{ s:t10yYieldHistory, k:"q" }, rule:true, when:function(){ return isoLabel(curveAsOf()); }, live:["yieldCurve"] },
    { id:"sheet-sign-pulse", name:"Pulse", cat:"circulation", timing:"coincident", mark:ecgSvg, door:"pair", term:"Pulse", hk:"pulse-range",
      head:"Velocity of Money (M2)", hist:{ s:m2vHistory, k:"qi", y0:M2V_FROM_YEAR }, pulse:PULSE_PRE2008, when:lastDate,
      cardUnit:"M2 velocity", live:["coincident"] },
    { id:"sheet-sign-volume", name:"Volume", cat:"circulation", timing:"leading", mark:circulationSvg, door:"pair", term:"Volume", hk:"volume-range",
      head:"M2 Money Stock", hist:{ s:m2Yoy, k:"qi", y0:M2_FROM_YEAR }, rule:true,
      when:function(R){ return indPeriod(R) || lastDate(R); }, cardUnit:"M2, YoY", live:["coincident"] },
    { id:"sheet-metric-valuation", name:"Shiller CAPE", cat:"mood", group:"Valuations", timing:"structural", mark:diamondSvg, door:"peek",
      slot:"valuation", head:"Shiller CAPE, Against Fair Value", hist:{ s:capeHistory, k:"y" }, pre:"Jan ", last:"today", mid:CAPE_FAIR,
      when:lastDate, cardUnit:"CAPE", live:["valuation", "capeValue"] },
    { id:"sheet-metric-buffett", name:"Buffett indicator", cat:"mood", group:"Valuations", timing:"structural", mark:diamondSvg, door:"split",
      head:"Buffett Indicator, Market Value ÷ GDP", hist:{ s:buffettHistory, k:"q" }, mid:80, when:lastDate,
      cardUnit:"of GDP", live:["valuation"] },
    { id:"sheet-sign-sentiment", name:"Volatility", cat:"mood", timing:"leading", mark:volatilitySvg, door:"subject", hk:"fear-range",
      head:"Cboe Volatility Index (VIX)", hist:{ s:volatilityHistory, k:"m" }, ring:vixPct, miniSel:".subject-ring > svg",
      when:function(){ return isoLabel(liveIsoOf("vixClose")) || compiledDay(); }, live:["sentiment", "vixClose", "vix3mClose"] },
    { id:"sheet-sign-desire", name:"Desire", cat:"mood", timing:"coincident", mark:flameSvg, door:"row", term:"Desire", hk:"desire-range",
      head:"High-Yield Spread over Treasuries", range:"max", cycles:false, stops:["1y", "max"], hist:hyMonths, peek:hyQuarters,
      when:desireWhen, live:["coincident", "hyOasNow"] },
    { id:"sheet-sign-confidence", name:"Confidence", cat:"mood", timing:"leading", mark:bagSvg, door:"row", term:"Confidence",
      head:"OECD Consumer Confidence", hist:{ s:confidenceHistory, k:"m" }, mid:CONFIDENCE_LINE, when:lastDate,
      cardUnit:"OECD index" },
    { id:"sheet-metric-debt", name:"Federal debt", cat:"energy", group:"Stress", timing:"structural", mark:debtSvg, door:"split",
      head:"Gross Federal Debt, Share of GDP", hist:{ s:grossDebtQuarterly, k:"q" }, mid:70, when:labPeriod, cardUnit:"of GDP" },
    { id:"sheet-metric-interest", name:"Interest payments", cat:"energy", group:"Stress", timing:"structural", mark:interestSvg,
      door:"split", head:"Net Interest, Share of GDP", hist:{ s:fiscalHistory.interest, k:"y" }, mid:2, when:labPeriod,
      cardUnit:"of GDP" },
    { id:"sheet-marker-deficit", name:"Federal budget", cat:"energy", group:"Stress", timing:"structural", mark:budgetSvg, door:"split",
      hk:"deficit-range", slot:"deficit", head:"Federal Deficit or Surplus, Share of GDP", hist:{ s:deficitHistory, k:"yi", y0:DEF_FROM_YEAR },
      flip:true, mid:3.8, when:labPeriod, cardUnit:"deficit, of GDP" },
    { id:"sheet-metric-households", name:"Households", cat:"energy", group:"Stress", timing:"structural", mark:houseSvg, door:"peek", slot:"households",
      head:"Debt Service, Share of Income", stops:["5y", "10y", "max"], hist:{ s:dsrHistory, k:"qi", y0:DSR_FROM_YEAR },
      pair:{ s:savHistory, k:"qi", y0:SAV_FROM_YEAR }, peek:"pair", when:lastDate, cardUnit:"% paid / kept" },
    { id:"sheet-sign-activity", name:"Unemployment rate", cat:"energy", timing:"lagging", mark:personSvg, door:"row",
      term:"Activity", head:"Unemployment Rate", hist:{ s:unempHistory, k:"m" } },
    { id:"sheet-sign-productivity-growth", name:"Productivity growth", cat:"energy", timing:"structural", mark:clockSvg,
      door:"row", term:"Productivity growth", head:"Output per Hour, Year over Year", hist:{ s:productivityHistory, k:"q" },
      mid:PRODUCTIVITY_SLOWDOWN, when:lastDate }
  ];
  ROSTER.forEach(function(R){ ROSTER_BY[R.id] = R; });
  page.mode = pageState(function(R){ return R.cycles === false ? undefined : "cycles"; });
  page.cycles = pageState(function(R){ return R.cycles === false ? undefined : null; });
  page.range = pageState(function(R){ return R.range || "10y"; });
  page.stops = pageState(function(R){ return R.stops || ["5y", "10y", "25y", "max"]; });
  page.head = pageState(function(R){ return { mark:R.mark, title:R.head }; });
  GYN.step("checkRoster", checkRoster, "check");
  checkRoster();
  GYN.ROSTER = ROSTER;
}
