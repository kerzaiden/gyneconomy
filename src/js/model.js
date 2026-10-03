import { monthLabel, qLabel, yearOf } from "./format.js";
import { addSources } from "./dom.js";
import { confidenceHistory, sp500MonthlyHistory, volatilityHistory } from "./history-fred.js";
import { calendarTodayY, cpiYoYHistory, DATA_COMPILED, gdpQuarterlyYoY, seasonOverride } from "./refresh-season.js";
import { buffettHistory, capeHistory, gdpSrc, marketCycles, now, sp500AnnualReturns, typicalCycleYears, usRealGdpGrowth } from "./data.js";

// ---- The season, computed ----
function slopeOf(vals){
  var n = vals.length, mx = (n - 1) / 2, my = vals.reduce(function(a, b){ return a + b; }, 0) / n, num = 0, den = 0;
  vals.forEach(function(v, i){ num += (i - mx) * (v - my); den += (i - mx) * (i - mx); });
  return den ? num / den : 0;
}
function monthIndex(k){ return Number(k.slice(0, 4)) * 12 + Number(k.slice(5, 7)); }
function cpiTrend(points){
  if (!points.every(function(d){ return typeof d.m === "string"; })) return slopeOf(points.map(function(d){ return d.v; }));
  var xs = points.map(function(d){ return monthIndex(d.m); }), n = xs.length;
  var mx = xs.reduce(function(a, b){ return a + b; }, 0) / n, my = points.reduce(function(a, d){ return a + d.v; }, 0) / n, num = 0, den = 0;
  points.forEach(function(d, i){ num += (xs[i] - mx) * (d.v - my); den += (xs[i] - mx) * (xs[i] - mx); });
  return den ? num / den : 0;
}
function cpiYear(endMonth){
  var to = monthIndex(endMonth);
  return cpiYoYHistory.filter(function(c){ var i = monthIndex(c.m); return i > to - 12 && i <= to; });
}
var GROWTH_WINDOW = 8;
function readSeason(cpi12, gdp8, prevRegime, quartersPerStep){
  var cpiNow = cpi12[cpi12.length - 1].v;
  var cpiSlope = cpiTrend(cpi12);
  var cpiDirection = cpiSlope > 0.02 ? "rising" : cpiSlope < -0.02 ? "falling" : "steady";
  var cpiHot = cpiNow > 3.0, cpiCold = cpiNow < 1.0;
  var growthSlopeQ = slopeOf(gdp8.map(function(d){ return d.v; })) / (quartersPerStep || 1);
  var growthTrend = growthSlopeQ > 0.025 ? "rising" : growthSlopeQ < -0.025 ? "falling" : "flat";
  var regime = growthTrend === "falling" ? "contraction" : growthTrend === "rising" ? "expansion" : (prevRegime || "expansion");
  var cooling = cpiDirection === "falling", season;
  if (regime === "expansion"){
    if (cpiHot) season = "summer";
    else season = cooling ? "springdeflation" : "spring";
  } else {
    if (cpiCold) season = "winter";
    else season = cooling ? "autumn" : "lateautumn";
  }
  return { season:season, regime:regime, cpiNow:cpiNow, cpiSlope:cpiSlope, cpiDirection:cpiDirection, cpiHot:cpiHot, cpiCold:cpiCold,
           growthSlopeQ:growthSlopeQ, growthTrend:growthTrend, gdpLatest:gdp8[gdp8.length - 1], annual:quartersPerStep === 4 };
}
export var QUARTER_END_MONTH = {Q1:"03", Q2:"06", Q3:"09", Q4:"12"};
var SEASON_YEARS = 2;
function closingReading(endYear){
  var e = seasonTrack.filter(function(x){ return x.y <= endYear; }).pop();
  return e ? e.reading : null;
}
export function quarterRegime(d){ return regimeByQ[d.q] || (d.v >= 0 ? "expansion" : "contraction"); }
export function seasonTitle(meta){ return meta.theme ? meta.name + " · " + meta.theme.toLowerCase() : meta.name; }
export function cycleReturns(from, to){
  var level = 1, peakRet = -Infinity, peakYear = null, cumByYear = {};
  for (var py = from; py <= to; py++){
    var pr = sp500AnnualReturns[py]; if (pr == null) continue;
    level *= 1 + pr / 100;
    cumByYear[py] = (level - 1) * 100;
    if (pr > peakRet){ peakRet = pr; peakYear = py; }
  }
  return { peakYear:peakYear, cumByYear:cumByYear };
}
export function cycleModel(era){
  var ongoing = !!era.ongoing;
  var endYear = ongoing ? calendarTodayY : era.to;
  var elapsedYears = ongoing ? (calendarTodayY - era.from) + cycleYtdFraction : (era.to - era.from + 1);
  var yearIndex = ongoing ? Math.floor(elapsedYears) + 1 : (era.to - era.from + 1);
  var dialYears = Math.max(typicalCycleYears, Math.ceil(elapsedYears));
  var endMonth = ongoing ? cpiYoYHistory[cpiYoYHistory.length - 1].m : era.to + "-12";
  var cpi = cpiYoYHistory.filter(function(c){ return c.m >= era.from + "-01" && c.m <= endMonth; });
  var cpi12 = cpiYear(endMonth);
  var gdpEnd = -1;
  gdpQuarterlyYoY.forEach(function(d, i){ if (parseInt(d.q.slice(0, 4), 10) <= endYear) gdpEnd = i; });
  var prevEntry = seasonTrackAll[gdpEnd - 1];
  var reading = ongoing
    ? readSeason(cpi12, gdpQuarterlyYoY.slice(gdpEnd - GROWTH_WINDOW + 1, gdpEnd + 1), prevEntry && prevEntry.reading.regime)
    : (seasonTrackAll[gdpEnd] ? seasonTrackAll[gdpEnd].reading : gdpEnd < GROWTH_WINDOW - 1 ? closingReading(endYear) : readSeason(cpi12, gdpQuarterlyYoY.slice(gdpEnd - GROWTH_WINDOW + 1, gdpEnd + 1), prevEntry && prevEntry.reading.regime));
  var season = (ongoing && seasonOverride) || reading.season;
  var track = [];
  seasonTrack.forEach(function(entry){
    if (entry.y < era.from || entry.y > endYear) return;
    var qi = {Q1:0, Q2:1, Q3:2, Q4:3}[entry.qn];
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
var seasonRuleSentence = {
  spring:"Expansion with prices heating, within or below the range, is reflation — Spring.",
  springdeflation:"Expansion with prices cooling, within or below the range, is Spring — deflation.",
  summer:"Expansion with prices above the range — hot — is inflation, Summer.",
  autumn:"Contraction with prices cooling, within or above the range, is disinflation — Autumn.",
  lateautumn:"Contraction with prices heating, within or above the range, is Autumn — stagflation.",
  winter:"Contraction with prices below the range — cold — is deflation, Winter."
};
function seasonWhyFor(m){
  var r = m.reading, was = m.ongoing ? "is" : "was";
  return (m.ongoing ? "Computed from two readings, both shown below: " : "Read at the cycle's close, " + monthLabel(m.endMonth) + (r.annual ? ", from annual growth, the only GDP record before 1947: " : ", the same way today's is: ")) +
    "the economy " + was + " in " + r.regime + " (real GDP " +
    r.gdpLatest.v.toFixed(1) + "% " + (r.annual ? "in " + r.gdpLatest.q + ", trend " + r.growthTrend + " over the prior two years, " : "year over year in " + qLabel(r.gdpLatest.q) + ", trend " + r.growthTrend + " over the " + (m.ongoing ? "past" : "prior") + " eight quarters, ") + (r.growthSlopeQ * 4 >= 0 ? "+" : "") + (r.growthSlopeQ * 4).toFixed(1) + " points a year), and prices " + (m.ongoing ? "are" : "were") + " " + (r.cpiDirection === "rising" ? "heating" : r.cpiDirection === "falling" ? "cooling" : "steady") + " and " + (r.cpiHot ? "above" : r.cpiCold ? "below" : "within") + " the target range (CPI " + r.cpiNow.toFixed(1) + "%). " + seasonRuleSentence[m.season] + (m.ongoing && seasonOverride ? " (Season pinned by hand this build.)" : "");
}
export function seasonGroup(key){ return key === "springdeflation" ? "spring" : key === "lateautumn" ? "autumn" : key; }
// ---- The diagnosis: how she feels, and what has followed ----
function rankToDate(prior, v){
  if (v == null || prior.length < 12) return null;
  return 100 * prior.filter(function(x){ return x < v; }).length / prior.length;
}
var marketCache = null;
export function marketMonths(){
  if (marketCache) return marketCache;
  var spAt = {};
  sp500MonthlyHistory.forEach(function(d, i){ spAt[d.m] = i; });
  marketCache = { sp:sp500MonthlyHistory, spAt:spAt };
  return marketCache;
}
export function yearAfter(S, m){
  var i = S.spAt[m];
  return i != null && i + 12 < S.sp.length ? S.sp[i + 12].v / S.sp[i].v - 1 : null;
}
export function diagnoseToday(){
  var x = moodToday();
  return x && x.word ? { stage:x.word, season:currentSeason, month:x.m } : null;
}
// ---- Her mood: one range from Depression to Mania ----
function rankIn(list, m, v){
  var i = -1;
  list.forEach(function(d, j){ if (d.k <= m) i = j; });
  return i < 0 ? null : rankToDate(list.slice(0, i).map(function(d){ return d.v; }), v != null ? v : list[i].v);
}
var moodLists = null;
function moodSeries(){
  if (moodLists) return moodLists;
  var monthly = function(h){ return h.map(function(d){ return { k:d.m, v:d.v }; }); };
  moodLists = { cape:capeHistory.map(function(d){ return { k:d.y + "-01", v:d.v }; }),
    buffett:buffettHistory.map(function(d){ return { k:d.q.slice(0, 4) + "-" + QUARTER_END_MONTH[d.q.slice(5)], v:d.v }; }),
    vix:monthly(volatilityHistory), confidence:monthly(confidenceHistory) };
  return moodLists;
}
function moodAt(m, vixNow){
  var L = moodSeries(), cape = rankIn(L.cape, m), buf = rankIn(L.buffett, m), vix = rankIn(L.vix, m, vixNow), conf = rankIn(L.confidence, m);
  if (cape == null || buf == null || vix == null || conf == null) return null;
  var val = (cape + buf) / 2, calm = 100 - vix;
  return { m:m, valuations:val, calm:calm, confidence:conf, market:(val + calm) / 2, score:(val + calm + conf) / 3 };
}
export var MOOD_TURN = 3;
var MOOD_RISING = [["Despair", 0], ["Depression", 5], ["Hope", 24], ["Optimism", 51], ["Excitement", 75], ["Thrill", 92], ["Euphoria", 100]];
var MOOD_FALLING = [["Despair", 0], ["Panic", 9], ["Desperation", 30], ["Fear", 52], ["Denial", 74], ["Anxiety", 91], ["Euphoria", 100]];
function moodWord(pct, change){
  if (pct == null || change == null) return null;
  return (change > 0 ? MOOD_RISING : MOOD_FALLING).reduce(function(a, s){ return Math.abs(+s[1] - pct) < Math.abs(+a[1] - pct) ? s : a; })[0];
}
function moodRead(x, before){
  var ago = before[before.length - MOOD_TURN];
  x.pct = rankToDate(before.map(function(p){ return p.score; }), x.score);
  x.change = ago ? x.score - ago.score : null; x.ago = ago || null;
  x.word = moodWord(x.pct, x.change);
  return x;
}
var moodCache = null;
export function moodTrack(){
  if (moodCache) return moodCache;
  var t = sp500MonthlyHistory.map(function(d){ return moodAt(d.m); }).filter(function(x){ return x; });
  moodCache = t.map(function(x, i){ return moodRead(x, t.slice(0, i)); });
  return moodCache;
}
export function moodToday(){
  var x = moodAt(sp500MonthlyHistory[sp500MonthlyHistory.length - 1].m, now.vixRow.meter.value);
  return x && moodRead(x, moodTrack().filter(function(p){ return p.m < x.m; }));
}
export function cycleStory(c){
  var from = c.from + "-01", to = c.to ? c.to + "-12" : "9999-12", count = {};
  var t = moodTrack().filter(function(x){ return x.word && x.m >= from && x.m <= to; });
  if (t.length < 2) return null;
  var hi = t[0], lo = t[0];
  t.forEach(function(x){ if (x.pct > hi.pct) hi = x; if (x.pct < lo.pct) lo = x; count[x.word] = (count[x.word] || 0) + 1; });
  var most = Object.keys(count).sort(function(a, b){ return count[b] - count[a]; }).slice(0, 2);
  var now = c.ongoing && moodToday();
  return { first:t[0], last:now && now.word ? now : t[t.length - 1], hi:hi, lo:lo, most:most.map(function(w){ return { word:w, n:count[w] }; }) };
}
// ---- Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts ----
export function cycleSpanYears(){
  return (currentEra && currentEra.from) ? (calendarTodayY - currentEra.from + 1) : 5;
}
export function cycleByName(nm){
  for (var i = 0; i < marketCycles.length; i++) if (marketCycles[i].name === nm) return marketCycles[i];
  return null;
}
export function openCycle(){
  for (var i = 0; i < marketCycles.length; i++) if (marketCycles[i].ongoing) return marketCycles[i];
  return marketCycles[marketCycles.length - 1];
}
export function cycleSlice(series, c){
  var to = c.to || calendarTodayY, a = -1, b = -1;
  series.forEach(function(d, i){
    var y = yearOf(d);
    if (y >= c.from && y <= to){ if (a === -1) a = i; b = i + 1; }
  });
  return a === -1 ? null : [a, b];
}
export function totalGrowthYears(y0, y1){
  var years = [], rates = [];
  for (var y = y0; y <= y1; y++)
    if (y !== calendarTodayY && usRealGdpGrowth[y] !== undefined){ years.push(y); rates.push(usRealGdpGrowth[y]); }
  if (!years.length) return null;
  var factor = rates.reduce(function(fa, g){ return fa * (1 + g / 100); }, 1);
  return { years:years, total:(factor - 1) * 100 };
}
export function cycleMonths(c){
  var to = c.to || calendarTodayY, a = -1, b = -1;
  cpiYoYHistory.forEach(function(d, i){
    var y = parseInt(d.m.slice(0, 4), 10);
    if (y >= c.from && y <= to){ if (a === -1) a = i; b = i + 1; }
  });
  return a === -1 ? null : [a, b];
}
export function cycLabel(c){
  return { name:c.ongoing ? "Current cycle" : c.name.replace(" Cycle", ""),
           years:c.from + "\u2013" + (c.to || "Today") };
}
export function cycleQtrIdx(y0, cyc, len){
  var to = cyc.to || calendarTodayY;
  var a = Math.max(0, (cyc.from - y0) * 4), b = Math.min(len, (to - y0 + 1) * 4);
  return b > a ? [a, b] : null;
}
export function totalRiseIn(vals){
  var years = [], rates = [];
  vals.forEach(function(d){
    var y = parseInt(d.m.slice(0, 4), 10);
    if (y !== calendarTodayY && d.m.slice(5) === "12"){ years.push(y); rates.push(d.v); }
  });
  if (!years.length) return null;
  var factor = rates.reduce(function(f, g){ return f * (1 + g / 100); }, 1);
  return { years:years, total:(factor - 1) * 100 };
}
export function eraInflation(cyc){
  var years = [], rates = [];
  for (var y = cyc.from; y <= (cyc.to || calendarTodayY); y++){
    if (y === calendarTodayY) continue;
    var dec = cpiYoYHistory.filter(function(d){ return d.m === y + "-12"; })[0];
    if (dec){ years.push(y); rates.push(dec.v); }
  }
  var factor = rates.reduce(function(f, g){ return f * (1 + g / 100); }, 1);
  return { years:years, rates:rates, total:(factor - 1) * 100 };
}
export function eraGrowth(cyc){
  var years = [];
  for (var y = cyc.from; y <= (cyc.to || calendarTodayY); y++){
    if (y !== calendarTodayY && usRealGdpGrowth[y] !== undefined) years.push(y);
  }
  var rates = years.map(function(y){ return usRealGdpGrowth[y]; });
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
export function eraMarketTotal(cyc){
  var cum = cycleReturns(cyc.from, cyc.ongoing ? calendarTodayY : cyc.to).cumByYear, years = Object.keys(cum);
  return years.length ? cum[years[years.length - 1]] : null;
}

export function forgetMood(){ moodLists = null; moodCache = null; }

export var cycleYtdFraction, nowModel, cpiNow, currentSeason, seasonWhy, currentEra;
var seasonTrackAll, seasonTrackYears, seasonTrack, regimeByQ, readingNow, cpiDirection, cpiHot, cpiCold, growthSlopeQ, growthTrendNow, gdpLatest;

export function bootModel(){
  currentEra = marketCycles.filter(function(c){ return calendarTodayY >= c.from && calendarTodayY <= (c.to || calendarTodayY); })[0] || marketCycles[marketCycles.length - 1];
  seasonTrackAll = (function(){
    var out = [], prevRegime;
    gdpQuarterlyYoY.forEach(function(d, i){
      if (i < GROWTH_WINDOW - 1) return;
      var y = parseInt(d.q.slice(0, 4), 10), qn = d.q.slice(5);
      var qEnd = y + "-" + QUARTER_END_MONTH[qn];
      var c12 = cpiYear(qEnd);
      if (c12.length < 11) return;
      var r = readSeason(c12, gdpQuarterlyYoY.slice(i - GROWTH_WINDOW + 1, i + 1), prevRegime);
      prevRegime = r.regime;
      out[i] = { i:i, q:d.q, y:y, qn:qn, reading:r };
    });
    return out;
  })();
  seasonTrackYears = (function(){
    var first = seasonTrackAll.filter(Boolean)[0], out = [], prevRegime;
    Object.keys(usRealGdpGrowth).map(Number).sort(function(a, b){ return a - b; }).forEach(function(y){
      if (y > first.y) return;
      var g = [];
      for (var k = y - SEASON_YEARS + 1; k <= y; k++) if (usRealGdpGrowth[k] != null) g.push({ q:String(k), v:usRealGdpGrowth[k] });
      var c12 = cpiYear(y + "-12");
      if (g.length < SEASON_YEARS || c12.length < 11 || c12[c12.length - 1].m !== y + "-12") return;
      var r = readSeason(c12, g, prevRegime, 4);
      prevRegime = r.regime;
      ["Q1", "Q2", "Q3", "Q4"].forEach(function(qn){
        if (y < first.y || qn < first.qn) out.push({ q:y + " " + qn, y:y, qn:qn, reading:r });
      });
    });
    return out;
  })();
  seasonTrack = seasonTrackYears.concat(seasonTrackAll.filter(Boolean));
  regimeByQ = (function(){
    var out = {};
    seasonTrack.forEach(function(e){ if (e) out[e.q] = e.reading.regime; });
    return out;
  })();
  // ---- One cycle, as the cycle view reads it ----
  cycleYtdFraction = (+DATA_COMPILED - +new Date(calendarTodayY, 0, 1)) / (+new Date(calendarTodayY + 1, 0, 1) - +new Date(calendarTodayY, 0, 1));
  nowModel = cycleModel(currentEra);
  readingNow = nowModel.reading;
  cpiNow = readingNow.cpiNow;
  cpiDirection = readingNow.cpiDirection;
  cpiHot = readingNow.cpiHot;
  cpiCold = readingNow.cpiCold;
  growthSlopeQ = readingNow.growthSlopeQ;
  growthTrendNow = readingNow.growthTrend;
  gdpLatest = readingNow.gdpLatest;
  currentSeason = nowModel.season;
  seasonWhy = seasonWhyFor(nowModel);
  addSources(gdpSrc);
}
