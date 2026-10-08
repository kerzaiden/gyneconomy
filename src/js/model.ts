import { fmtSigned, qLabel, yearOf } from "./format.ts";
import { addSources } from "./dom.ts";
import { confidenceHistory, potentialYoYHistory, sp500MonthlyHistory, volatilityHistory } from "./history-fred.ts";
import { calendarTodayY, inflationHistory, DATA_COMPILED, gdpQuarterlyYoY, seasonOverride } from "./refresh-season.ts";
export type ModelReading = { season: Season; regime: string; cpiNow: number; cpiSlope: number; cpiDirection: string; heading: string; cpiHot: boolean; cpiCold: boolean; potential: number; gdpLatest: QuarterPoint; annual: boolean };
type TrackEntry = { i?: number; q: string; y: number; qn: string; reading: ModelReading };
export type TrackSeg = { q: string; season: Season; from: number; to: number; reading: ModelReading; isNow?: boolean };
type MoodPoint = { k: string; v: number | null };
export type Mood = { m: string; valuations: number; calm: number; confidence: number; market: number; score: number; pct?: number | null; change?: number | null; ago?: Mood | null; word?: string | null };
import { buffettHistory, capeHistory, gdpSrc, HOLD_BAND, marketCycles, NBER_RECESSIONS, now, sp500AnnualReturns, typicalCycleYears, usRealGdpGrowth } from "./data.ts";

// ---- The season, computed ----
function monthIndex(k: string){ return Number(k.slice(0, 4)) * 12 + Number(k.slice(5, 7)); }
function cpiTrend(points: MonthPoint[]){
  var xs = points.map(function(d){ return monthIndex(d.m); }), n = xs.length;
  var mx = xs.reduce(function(a, b){ return a + b; }, 0) / n, my = points.reduce(function(a, d){ return a + d.v; }, 0) / n, num = 0, den = 0;
  points.forEach(function(d, i){ num += (xs[i] - mx) * (d.v - my); den += (xs[i] - mx) * (xs[i] - mx); });
  return den ? num / den : 0;
}
function cpiYear(endMonth: string){
  var to = monthIndex(endMonth);
  return inflationHistory.filter(function(c){ var i = monthIndex(c.m); return i > to - 12 && i <= to; });
}
function cpiDirectionOf(slope: number){ return slope > 0.02 ? "rising" : slope < -0.02 ? "falling" : "steady"; }
export function cpiDirectionAt(endMonth: string){
  var c12 = cpiYear(endMonth);
  return c12.length < 11 ? null : cpiDirectionOf(cpiTrend(c12));
}
export var PEAK_YEARS = [1929, 1948];
export var PEAK_TREND: number;
var potentialByQ: Record<string, number>;
function regimeOf(g: number, p: number, prevRegime?: string | null){
  return g > p + HOLD_BAND ? "expansion" : g < p - HOLD_BAND ? "contraction" : (prevRegime || (g >= p ? "expansion" : "contraction"));
}
function readSeason(cpi12: MonthPoint[], gdp: QuarterPoint, potential: number, prevRegime?: string | null, annual?: boolean, prevHeading?: string | null): ModelReading {
  var cpiNow = cpi12[cpi12.length - 1].v;
  var cpiSlope = cpiTrend(cpi12);
  var cpiDirection = cpiDirectionOf(cpiSlope), heading = cpiDirection === "steady" ? (prevHeading || cpiDirection) : cpiDirection;
  var cpiHot = cpiNow > 3.0, cpiCold = cpiNow < 1.0;
  var regime = regimeOf(gdp.v, potential, prevRegime), season: Season;
  if (regime === "expansion") season = cpiHot ? "summer" : heading === "falling" ? "springdeflation" : "spring";
  else season = cpiCold ? "winter" : heading === "rising" ? "lateautumn" : "autumn";
  return { season:season, regime:regime, cpiNow:cpiNow, cpiSlope:cpiSlope, cpiDirection:cpiDirection, heading:heading, cpiHot:cpiHot, cpiCold:cpiCold,
           potential:potential, gdpLatest:gdp, annual:!!annual };
}
export function potentialOf(q: string){
  if (potentialByQ[q] != null) return potentialByQ[q];
  var first = potentialYoYHistory[0], last = potentialYoYHistory[potentialYoYHistory.length - 1];
  return q < first.q ? PEAK_TREND : last.v;
}
function peakTrend(){
  var level = 1, n = PEAK_YEARS[1] - PEAK_YEARS[0];
  for (var y = PEAK_YEARS[0] + 1; y <= PEAK_YEARS[1]; y++) level *= 1 + usRealGdpGrowth[y] / 100;
  return (Math.pow(level, 1 / n) - 1) * 100;
}
export var QUARTER_END_MONTH: Record<string, string> = {Q1:"03", Q2:"06", Q3:"09", Q4:"12"};
function closingReading(endYear: number){
  var e = seasonTrack.filter(function(x){ return x.y <= endYear; }).pop();
  if (!e) throw new Error("no season reading by " + endYear); return e.reading;
}
export function quarterRegime(d: QuarterPoint){ return regimeByQ[d.q] || (d.v >= 0 ? "expansion" : "contraction"); }
function qIndex(q: string){ return +q.slice(0, 4) * 4 + +q.slice(6) - 1; }
export function recessionRecord(){
  var inRec: Record<number, number> = {}, caught = 0, quarters = 0, total = 0;
  NBER_RECESSIONS.forEach(function(r, n){
    var hit = false;
    for (var i = qIndex(r[0]) + 1; i <= qIndex(r[1]); i++){ inRec[i] = n + 1; total++; if (regimeAt(i) === "contraction"){ quarters++; hit = true; } }
    if (hit) caught++;
  });
  var first = qIndex(NBER_RECESSIONS[0][0]) - 4, last = qIndex(seasonTrack[seasonTrack.length - 1].q), runs = 0, alarms = 0;
  for (var i = first; i <= last; i++){
    if (regimeAt(i) !== "contraction" || regimeAt(i - 1) === "contraction") continue;
    var end = i; while (end < last && regimeAt(end + 1) === "contraction") end++;
    runs++;
    var near = false; for (var j = i; j <= end + 4; j++) if (inRec[j]) near = true;
    if (!near) alarms++;
  }
  var group: Record<string, string> = {}, inAW = { autumn:0, winter:0 }, base = 0, n = 0;
  seasonTrack.forEach(function(e){ if (e) group[e.q] = seasonGroup(e.reading.season); });
  for (var k = first + 5; k <= last; k++){
    var g = group[Math.floor(k / 4) + " Q" + (k % 4 + 1)];
    if (!g) continue;
    n++; if (g === "autumn" || g === "winter"){ base++; if (inRec[k]) inAW[g]++; }
  }
  return { from:+NBER_RECESSIONS[0][0].slice(0, 4), recessions:NBER_RECESSIONS.length, caught:caught, quarters:quarters, total:total, runs:runs, alarms:alarms,
    autumn:inAW.autumn, winter:inAW.winter, share:Math.round(100 * base / n) };
}
function regimeAt(i: number){ return regimeByQ[Math.floor(i / 4) + " Q" + (i % 4 + 1)]; }
export function seasonTitle(meta: { name: string; theme?: string | null }){ return meta.theme ? meta.name + " · " + meta.theme.toLowerCase() : meta.name; }
export function cycleReturns(from: number, to: number){
  var level = 1, peakRet = -Infinity, peakYear: number | null = null, cumByYear: Record<string, number> = {};
  for (var py = from; py <= to; py++){
    var pr = sp500AnnualReturns[py]; if (pr == null) continue;
    level *= 1 + pr / 100;
    cumByYear[py] = (level - 1) * 100;
    if (pr > peakRet){ peakRet = pr; peakYear = py; }
  }
  return { peakYear:peakYear, cumByYear:cumByYear };
}
export function cycleModel(era: Cycle){
  var ongoing = !!era.ongoing;
  var endYear = era.ongoing ? calendarTodayY : era.to;
  var elapsedYears = era.ongoing ? (calendarTodayY - era.from) + cycleYtdFraction : (era.to - era.from + 1);
  var yearIndex = era.ongoing ? Math.floor(elapsedYears) + 1 : (era.to - era.from + 1);
  var dialYears = Math.max(typicalCycleYears, Math.ceil(elapsedYears));
  var endMonth = ongoing ? inflationHistory[inflationHistory.length - 1].m : era.to + "-12";
  var cpi = inflationHistory.filter(function(c){ return c.m >= era.from + "-01" && c.m <= endMonth; });
  var cpi12 = cpiYear(endMonth);
  var gdpEnd = -1;
  gdpQuarterlyYoY.forEach(function(d, i){ if (parseInt(d.q.slice(0, 4), 10) <= endYear) gdpEnd = i; });
  var prevEntry = seasonTrackAll[gdpEnd - 1], gq = gdpQuarterlyYoY[gdpEnd];
  var reading = ongoing
    ? readSeason(cpi12, gq, potentialOf(gq.q), prevEntry && prevEntry.reading.regime, false, prevEntry && prevEntry.reading.heading)
    : (seasonTrackAll[gdpEnd] ? seasonTrackAll[gdpEnd].reading : closingReading(endYear));
  var season = (ongoing && seasonOverride) || reading.season;
  var track: TrackSeg[] = [];
  seasonTrack.forEach(function(entry){
    if (entry.y < era.from || entry.y > endYear) return;
    var qi = ({Q1:0, Q2:1, Q3:2, Q4:3} as Record<string, number>)[entry.qn];
    track.push({ q:entry.q, season:entry.reading.season, from:(entry.y - era.from) + qi / 4, to:(entry.y - era.from) + (qi + 1) / 4, reading:entry.reading });
  });
  var last = track[track.length - 1];
  if (ongoing && last){
    if (last.to < elapsedYears) track.push({ q:"since " + last.q, season:season, from:last.to, to:elapsedYears, reading:reading, isNow:true });
    else { last.to = Math.min(last.to, elapsedYears); last.season = season; last.isNow = true; }
  }
  var years = cycleReturns(era.from, endYear);
  return { era:era, ongoing:ongoing, endYear:endYear, elapsedYears:elapsedYears, yearIndex:yearIndex, dialYears:dialYears, peakYear:years.peakYear, cumByYear:years.cumByYear,
           endMonth:endMonth, cpi:cpi, reading:reading, season:season, track:track, growth:eraGrowth(era) };
}
var seasonRuleSentence: Record<Season, string> = {
  spring:"Growth above potential with prices heating, within or below the range, is reflation — Spring.",
  springdeflation:"Growth above potential with prices cooling, within or below the range, is Spring — deflation.",
  summer:"Growth above potential with prices above the range — hot — is inflation, Summer.",
  autumn:"Growth below potential with prices cooling, within or above the range, is disinflation — Autumn.",
  lateautumn:"Growth below potential with prices heating, within or above the range, is Autumn — stagflation.",
  winter:"Growth below potential with prices below the range — cold — is deflation, Winter."
};
export function potentialGap(r: ModelReading){
  var gap = r.gdpLatest.v - r.potential;
  return Math.abs(gap) <= HOLD_BAND ? "within " + HOLD_BAND + " points of" : gap > 0 ? "above" : "below";
}
function seasonWhyFor(m: CycleModel){
  var r = m.reading;
  return "Today growth is " + growthWord(r) + ": real GDP grew " + fmtSigned(r.gdpLatest.v, 1) + "% on a year earlier (" + qLabel(r.gdpLatest.q) + "), " + potentialGap(r) + " its potential of " + r.potential.toFixed(1) + "%. Prices are " +
    pricesWord(r) + " " + (r.cpiHot ? "above" : r.cpiCold ? "below" : "within") + " the range (inflation " + inflationFigure(r.cpiNow) + "%). " +
    seasonRuleSentence[m.season] + (seasonOverride ? " (Season pinned by hand this build.)" : "");
}
function pricesWord(r: ModelReading){
  var word = function(d: string){ return d === "rising" ? "heating" : d === "falling" ? "cooling" : "steady"; };
  return word(r.cpiDirection) + (r.heading !== r.cpiDirection ? ", so still " + word(r.heading) : "");
}
export function inflationFigure(v: number){
  var s = (Math.round(v * 10) / 10 || 0).toFixed(1);
  if ((v > 3 && Number(s) <= 3) || (v < 1 && Number(s) >= 1)) s = v.toFixed(2);
  return s.replace("-", "\u2212");
}
export function growthWord(r: ModelReading){
  return r.regime === "contraction" ? "below potential" : "above potential";
}
export function cycleNowNote(m: CycleModel){
  var r = m.reading, w = growthWord(r), n = Math.round(m.elapsedYears);
  var years = (["Less than a year", "One year", "Two years", "Three years", "Four years", "Five years", "Six years", "Seven years", "Eight years", "Nine years", "Ten years"][n] || n + " years");
  var growth = r.gdpLatest.v < 0 ? "output is shrinking" : "the economy is growing " + w;
  var prices = "prices are " + (r.cpiHot ? "running hot" : r.cpiCold ? "running cold" : "inside the range") +
    (r.cpiDirection === "rising" ? " and heating" : r.cpiDirection === "falling" ? " and cooling" : "");
  return years + " into an AI-driven bull run, " + growth + ", and " + prices + ".";
}
export function seasonOfQ(q: string){ return seasonByQ[q] || ""; }
export function seasonGroup(key: string){ return key === "springdeflation" ? "spring" : key === "lateautumn" ? "autumn" : key; }
// ---- The diagnosis: how she feels, and what has followed ----
export function rankToDate(prior: (number | null)[], v: number | null | undefined){
  if (v == null || prior.length < 12) return null;
  return 100 * prior.filter(function(x){ return x != null && x < v; }).length / prior.length;
}
export function diagnoseToday(){
  var x = moodToday();
  return x && x.word ? { stage:x.word, season:currentSeason, month:x.m } : null;
}
// ---- Her mood: one range from Depression to Mania ----
function rankIn(list: MoodPoint[], m: string, v?: number | null){
  var i = -1;
  list.forEach(function(d, j){ if (d.k <= m) i = j; });
  return i < 0 ? null : rankToDate(list.slice(0, i).map(function(d){ return d.v; }), v != null ? v : list[i].v);
}
var moodLists: { cape: MoodPoint[]; buffett: MoodPoint[]; vix: MoodPoint[]; confidence: MoodPoint[] } | null = null;
function moodSeries(){
  if (moodLists) return moodLists;
  var monthly = function(h: MonthPoint[]){ return h.map(function(d){ return { k:d.m, v:d.v }; }); };
  moodLists = { cape:capeHistory.map(function(d){ return { k:d.y + "-01", v:d.v }; }),
    buffett:buffettHistory.map(function(d){ return { k:d.q.slice(0, 4) + "-" + QUARTER_END_MONTH[d.q.slice(5)], v:d.v }; }),
    vix:monthly(volatilityHistory), confidence:monthly(confidenceHistory) };
  return moodLists;
}
function moodAt(m: string, vixNow?: number | null): Mood | null {
  var L = moodSeries(), cape = rankIn(L.cape, m), buf = rankIn(L.buffett, m), vix = rankIn(L.vix, m, vixNow), conf = rankIn(L.confidence, m);
  if (cape == null || buf == null || vix == null || conf == null) return null;
  var val = (cape + buf) / 2, calm = 100 - vix;
  return { m:m, valuations:val, calm:calm, confidence:conf, market:(val + calm) / 2, score:(val + calm + conf) / 3 };
}
export var MOOD_TURN = 3;
var MOOD_RISING: [string, number][] = [["Despair", 0], ["Depression", 5], ["Hope", 24], ["Optimism", 51], ["Excitement", 75], ["Thrill", 92], ["Euphoria", 100]];
var MOOD_FALLING: [string, number][] = [["Despair", 0], ["Panic", 9], ["Desperation", 30], ["Fear", 52], ["Denial", 74], ["Anxiety", 91], ["Euphoria", 100]];
function moodWord(pct: number | null, change: number | null){
  if (pct == null || change == null) return null;
  return (change > 0 ? MOOD_RISING : MOOD_FALLING).reduce(function(a, s){ return Math.abs(+s[1] - pct) < Math.abs(+a[1] - pct) ? s : a; })[0];
}
function moodRead(x: Mood, before: Mood[]){
  var ago = before[before.length - MOOD_TURN];
  x.pct = rankToDate(before.map(function(p){ return p.score; }), x.score);
  x.change = ago ? x.score - ago.score : null; x.ago = ago || null;
  x.word = moodWord(x.pct, x.change);
  return x;
}
var moodCache: Mood[] | null = null;
export function moodTrack(){
  if (moodCache) return moodCache;
  var t = sp500MonthlyHistory.map(function(d){ return moodAt(d.m); }).filter(function(x){ return x; }) as Mood[];
  moodCache = t.map(function(x, i){ return moodRead(x, t.slice(0, i)); });
  return moodCache;
}
export function moodToday(){
  var x = moodAt(sp500MonthlyHistory[sp500MonthlyHistory.length - 1].m, now.vixRow!.meter.value);
  return x && moodSince(x);
}
function moodSince(x: Mood){ return moodRead(x, moodTrack().filter(function(p){ return p.m < x.m; })); }
export function cycleStory(c: Cycle){
  var from = c.from + "-01", to = c.to ? c.to + "-12" : "9999-12", count: Record<string, number> = {};
  var t = moodTrack().filter(function(x): x is Mood & { word: string; pct: number } { return !!x.word && x.pct != null && x.m >= from && x.m <= to; });
  if (t.length < 2) return null;
  var hi = t[0], lo = t[0];
  t.forEach(function(x){ if (x.pct > hi.pct) hi = x; if (x.pct < lo.pct) lo = x; count[x.word] = (count[x.word] || 0) + 1; });
  var most = Object.keys(count).sort(function(a, b){ return count[b] - count[a]; }).slice(0, 2);
  var now = c.ongoing && moodToday();
  return { first:t[0], last:now && now.word ? now : t[t.length - 1], hi:hi, lo:lo, most:most.map(function(w){ return { word:w, n:count[w] }; }) };
}
// ---- Cycles by name ----
export function cycleOfYear(y: number): Cycle | undefined { return marketCycles.filter(function(c){ return y >= c.from && y <= (c.to || y); })[0]; }
export function cycleByName(nm: string | null | undefined){
  for (var i = 0; i < marketCycles.length; i++) if (marketCycles[i].name === nm) return marketCycles[i];
  return null;
}
export function openCycle(){
  for (var i = 0; i < marketCycles.length; i++) if (marketCycles[i].ongoing) return marketCycles[i];
  return marketCycles[marketCycles.length - 1];
}
export function cycleSlice(series: Point[], c: Cycle){
  var to = c.to || calendarTodayY, a = -1, b = -1;
  series.forEach(function(d, i){
    var y = yearOf(d);
    if (y >= c.from && y <= to){ if (a === -1) a = i; b = i + 1; }
  });
  return a === -1 ? null : [a, b];
}
export function totalGrowthYears(y0: number, y1: number){
  var years: number[] = [], rates: number[] = [];
  for (var y = y0; y <= y1; y++)
    if (y !== calendarTodayY && usRealGdpGrowth[y] !== undefined){ years.push(y); rates.push(usRealGdpGrowth[y]); }
  if (!years.length) return null;
  var factor = rates.reduce(function(fa, g){ return fa * (1 + g / 100); }, 1);
  return { years:years, total:(factor - 1) * 100 };
}
export function cycLabel(c: Cycle){
  return { name:c.ongoing ? "Current cycle" : c.name.replace(" Cycle", ""),
           years:c.from + "\u2013" + (c.to || "Today") };
}
export function cycleQtrIdx(y0: number, cyc: Cycle, len: number){
  var to = cyc.to || calendarTodayY;
  var a = Math.max(0, (cyc.from - y0) * 4), b = Math.min(len, (to - y0 + 1) * 4);
  return b > a ? [a, b] : null;
}
export function totalRiseIn(vals: MonthPoint[]){
  var years: number[] = [], rates: number[] = [];
  vals.forEach(function(d){
    var y = parseInt(d.m.slice(0, 4), 10);
    if (y !== calendarTodayY && d.m.slice(5) === "12"){ years.push(y); rates.push(d.v); }
  });
  if (!years.length) return null;
  var factor = rates.reduce(function(f, g){ return f * (1 + g / 100); }, 1);
  return { years:years, total:(factor - 1) * 100 };
}
export function yearInflation(y: number){
  var dec = y === calendarTodayY ? null : inflationHistory.filter(function(d){ return d.m === y + "-12"; })[0];
  return dec ? dec.v : null;
}
export function yearGrowth(y: number){
  return y !== calendarTodayY && usRealGdpGrowth[y] !== undefined ? usRealGdpGrowth[y] : null;
}
export function yearSoFar(y: number){
  var g = gdpQuarterlyYoY.filter(function(d){ return yearOf(d) === y; }), c = inflationHistory.filter(function(d){ return +d.m.slice(0, 4) === y; });
  return { growth:g.length ? g[g.length - 1].v : null, prices:c.length ? c[c.length - 1].v : null };
}
export function eraInflation(cyc: Cycle){
  var years: number[] = [], rates: number[] = [];
  for (var y = cyc.from; y <= (cyc.to || calendarTodayY); y++){
    var v = yearInflation(y);
    if (v != null){ years.push(y); rates.push(v); }
  }
  var factor = rates.reduce(function(f, g){ return f * (1 + g / 100); }, 1);
  return { years:years, rates:rates, total:(factor - 1) * 100 };
}
export function eraGrowth(cyc: Cycle){
  var years: number[] = [];
  for (var y = cyc.from; y <= (cyc.to || calendarTodayY); y++){
    if (yearGrowth(y) != null) years.push(y);
  }
  var rates = years.map(function(y){ return yearGrowth(y) as number; });
  var growthFactor = rates.reduce(function(f, g){ return f * (1 + g / 100); }, 1);
  var n = rates.length;
  var cagr = n ? (Math.pow(growthFactor, 1 / n) - 1) * 100 : 0;
  var xs = rates.map(function(_, i){ return i; }), mx = (n - 1) / 2, my = rates.reduce(function(a, b){ return a + b; }, 0) / (n || 1);
  var num = 0, den = 0;
  xs.forEach(function(x, i){ num += (x - mx) * (rates[i] - my); den += (x - mx) * (x - mx); });
  var slope = den ? num / den : 0;
  var trend = slope > 0.1 ? "rising" : slope < -0.1 ? "falling" : "flat";
  return { years: years, rates: rates, cagr: cagr, total: (growthFactor - 1) * 100, slope: slope, trend: trend, avg: my };
}
export function eraMarketTotal(cyc: Cycle){
  var cum = cycleReturns(cyc.from, cyc.ongoing ? calendarTodayY : cyc.to!).cumByYear, years = Object.keys(cum);
  return years.length ? cum[years[years.length - 1]] : null;
}

export function forgetMood(){ moodLists = null; moodCache = null; }

export type CycleModel = ReturnType<typeof cycleModel>;
export var cycleYtdFraction: number, nowModel: CycleModel, cpiNow: number, currentSeason: Season, seasonWhy: string, currentEra: Cycle;
var seasonTrackAll: TrackEntry[], seasonTrackYears: TrackEntry[], seasonTrack: TrackEntry[], regimeByQ: Record<string, string>, seasonByQ: Record<string, string>, readingNow: ModelReading;

function seasonYears(){
  var firstY = parseInt(gdpQuarterlyYoY[0].q, 10), out: TrackEntry[] = [], prevRegime: string | undefined, prevHeading: string | undefined;
  Object.keys(usRealGdpGrowth).map(Number).sort(function(a, b){ return a - b; }).forEach(function(y){
    var c12 = cpiYear(y + "-12");
    if (y >= firstY || c12.length < 11 || c12[c12.length - 1].m !== y + "-12") return;
    var r = readSeason(c12, { q:String(y), v:usRealGdpGrowth[y] }, PEAK_TREND, prevRegime, true, prevHeading);
    prevRegime = r.regime; prevHeading = r.heading;
    ["Q1", "Q2", "Q3", "Q4"].forEach(function(qn){ out.push({ q:y + " " + qn, y:y, qn:qn, reading:r }); });
  });
  return out;
}
function seasonQuarters(prevRegime?: string, prevHeading?: string){
  var out: TrackEntry[] = [];
  gdpQuarterlyYoY.forEach(function(d, i){
    var y = parseInt(d.q.slice(0, 4), 10), qn = d.q.slice(5);
    var c12 = cpiYear(y + "-" + QUARTER_END_MONTH[qn]);
    if (c12.length < 11) return;
    var r = readSeason(c12, d, potentialOf(d.q), prevRegime, false, prevHeading);
    prevRegime = r.regime; prevHeading = r.heading;
    out[i] = { i:i, q:d.q, y:y, qn:qn, reading:r };
  });
  return out;
}
export function bootModel(){
  currentEra = marketCycles.filter(function(c){ return calendarTodayY >= c.from && calendarTodayY <= (c.to || calendarTodayY); })[0] || marketCycles[marketCycles.length - 1];
  potentialByQ = {};
  potentialYoYHistory.forEach(function(d: QuarterPoint){ potentialByQ[d.q] = d.v; });
  PEAK_TREND = peakTrend();
  seasonTrackYears = seasonYears();
  var lastYear = seasonTrackYears[seasonTrackYears.length - 1];
  seasonTrackAll = seasonQuarters(lastYear && lastYear.reading.regime, lastYear && lastYear.reading.heading);
  seasonTrack = seasonTrackYears.concat(seasonTrackAll.filter(Boolean));
  seasonByQ = {};
  seasonTrack.forEach(function(e){ if (e) seasonByQ[e.q] = seasonGroup(e.reading.season); });
  regimeByQ = (function(){
    var out: Record<string, string> = {};
    seasonTrack.forEach(function(e){ if (e) out[e.q] = e.reading.regime; });
    return out;
  })();
  // ---- One cycle, as the cycle view reads it ----
  cycleYtdFraction = (+DATA_COMPILED - +new Date(calendarTodayY, 0, 1)) / (+new Date(calendarTodayY + 1, 0, 1) - +new Date(calendarTodayY, 0, 1));
  nowModel = cycleModel(currentEra);
  readingNow = nowModel.reading;
  cpiNow = readingNow.cpiNow;
  currentSeason = nowModel.season;
  seasonWhy = seasonWhyFor(nowModel);
  addSources(gdpSrc);
}
