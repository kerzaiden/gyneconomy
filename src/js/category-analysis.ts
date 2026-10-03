import { auxStat, facts } from "./format.ts";
import { moreRow, ui } from "./dom.ts";
import { cpiYoYHistory, gdpQuarterlyYoY } from "./refresh-season.ts";
import { fedFundsHistory, grossDebtQuarterly, productivityHistory, sp500MonthlyHistory } from "./history-fred.ts";
import { M2_FROM_YEAR, M2V_FROM_YEAR, m2vHistory, m2Yoy, marketCycles, unempHistory } from "./data.ts";
import { currentEra, moodToday, moodTrack, QUARTER_END_MONTH, rankToDate } from "./model.ts";
import { AXIS, chartAxes, histFrame, vGrid, vhOpen, xLabel } from "./charts.ts";
import { CATEGORIES, ROSTER } from "./roster.ts";
import { INSIGHT } from "./insights.ts";

// ---- Category analysis: one composite per category, against past cycles ----
type Pt = { k: string; v: number | null };
type Member = { up: boolean; what: string; points: () => Pt[] };
type Track = Record<number, number>;
type Match = { c: Cycle; p: number[]; r: number };
type Read = { key: string; title: string; era: Cycle; cur: number[]; rows: Match[]; crit: number; since: number; made: string[] };

var QM = ["03", "06", "09", "12"];
function months(h: { m: string; v: number | null }[]): Pt[]{ return h.map(function(d){ return { k:d.m, v:d.v }; }); }
function quarters(h: { q: string; v: number | null }[]): Pt[]{
  return h.map(function(d){ return { k:d.q.slice(0, 4) + "-" + QUARTER_END_MONTH[d.q.slice(5)], v:d.v }; });
}
function byQuarter(vals: (number | null)[], y0: number): Pt[]{
  return vals.map(function(v, i){ return { k:(y0 + Math.floor(i / 4)) + "-" + QM[i % 4], v:v }; });
}
function spYear(): Pt[]{
  return sp500MonthlyHistory.slice(12).map(function(d, i){ return { k:d.m, v:(d.v / sp500MonthlyHistory[i].v - 1) * 100 }; });
}
var MEMBERS: Record<string, Member> = {
  "sheet-metric-temp":{ up:true, what:"prices (CPI over the year)", points:function(){ return months(cpiYoYHistory); } },
  "sheet-metric-gdp":{ up:true, what:"growth (real GDP over the year)", points:function(){ return quarters(gdpQuarterlyYoY); } },
  "sheet-sign-market":{ up:true, what:"the S&P 500’s change over twelve months", points:spYear },
  "sheet-sign-hormones":{ up:false, what:"the Fed funds rate, upside down", points:function(){ return months(fedFundsHistory); } },
  "sheet-sign-pulse":{ up:true, what:"velocity (Pulse)", points:function(){ return byQuarter(m2vHistory, M2V_FROM_YEAR); } },
  "sheet-sign-volume":{ up:true, what:"M2 over the year (Volume)", points:function(){ return byQuarter(m2Yoy, M2_FROM_YEAR); } },
  "sheet-metric-debt":{ up:false, what:"federal debt against GDP (Stress), upside down", points:function(){ return quarters(grossDebtQuarterly); } },
  "sheet-sign-activity":{ up:false, what:"the unemployment rate, upside down", points:function(){ return months(unempHistory); } },
  "sheet-sign-productivity-growth":{ up:true, what:"productivity growth", points:function(){ return quarters(productivityHistory); } }
};
var SCORES: Record<string, { what: string; points: () => Pt[] }> = {
  mood:{ what:"her mood score: valuations, calm (the VIX upside down) and confidence, the Mood page’s own reading", points:function(){
    var today = moodToday();
    return moodTrack().map(function(x){ return { k:x.m, v:x.score }; }).concat(today ? [{ k:today.m, v:today.score }] : []); } }
};
function qIndex(k: string){ return +k.slice(0, 4) * 4 + Math.floor((+k.slice(5, 7) - 1) / 3); }
function rankTrack(pts: Pt[], up: boolean): Track {
  var out: Track = {}, prior: number[] = [];
  pts.forEach(function(d){
    if (d.v == null) return;
    var r = rankToDate(prior, d.v);
    if (r != null) out[qIndex(d.k)] = up ? r : 100 - r;
    prior.push(d.v);
  });
  return out;
}
function plainTrack(pts: Pt[]): Track {
  var out: Track = {};
  pts.forEach(function(d){ if (d.v != null) out[qIndex(d.k)] = d.v; });
  return out;
}
function membersOf(key: string){ return ROSTER.filter(function(R){ return R.cat === key && MEMBERS[R.id]; }).map(function(R){ return MEMBERS[R.id]; }); }
var trackCache: Record<string, Track> = {};
function composite(key: string): Track {
  if (trackCache[key]) return trackCache[key];
  if (SCORES[key]) return plainTrack(SCORES[key].points());
  var tracks = membersOf(key).map(function(m){ return rankTrack(m.points(), m.up); }), out: Track = {};
  if (!tracks.length) return (trackCache[key] = out);
  Object.keys(tracks[0]).forEach(function(q){
    var vs = tracks.map(function(t){ return t[+q]; });
    if (vs.every(function(v){ return v != null; })) out[+q] = vs.reduce(function(a, b){ return a + b; }, 0) / vs.length;
  });
  return (trackCache[key] = out);
}
function path(t: Track, from: number, k?: number){
  var out: number[] = [], q = from * 4;
  while (t[q] != null && (k == null || out.length < k)){ out.push(t[q]); q++; }
  return out;
}
function corrOfMoves(a: number[], b: number[]){
  var da = a.slice(1).map(function(v, i){ return v - a[i]; }), db = b.slice(1).map(function(v, i){ return v - b[i]; });
  var n = da.length, ma = da.reduce(function(s, v){ return s + v; }, 0) / n, mb = db.reduce(function(s, v){ return s + v; }, 0) / n;
  var sab = 0, saa = 0, sbb = 0;
  da.forEach(function(v, i){ sab += (v - ma) * (db[i] - mb); saa += (v - ma) * (v - ma); sbb += (db[i] - mb) * (db[i] - mb); });
  return saa && sbb ? sab / Math.sqrt(saa * sbb) : 0;
}
var T05 = [12.706, 4.303, 3.182, 2.776, 2.571, 2.447, 2.365, 2.306, 2.262, 2.228, 2.201, 2.179, 2.160, 2.145, 2.131,
  2.120, 2.110, 2.101, 2.093, 2.086, 2.080, 2.074, 2.069, 2.064, 2.060, 2.056, 2.052, 2.048, 2.045, 2.042];
export function criticalR(pairs: number){
  var df = pairs - 2;
  if (df < 1) return 2;
  var t = df <= 30 ? T05[df - 1] : df < 40 ? 2.042 : df < 60 ? 2.021 : df < 120 ? 2.000 : 1.980;
  return t / Math.sqrt(df + t * t);
}
function analyse(key: string, era: Cycle): Read | null {
  var t = composite(key), cat = CATEGORIES.filter(function(c){ return c.key === key; })[0];
  var cur = path(t, era.from, era.ongoing ? undefined : (era.to - era.from + 1) * 4), k = cur.length;
  if (!cat || k < 4) return null;
  var rows = marketCycles.filter(function(c){ return c !== era && !c.ongoing && (c.to - c.from + 1) * 4 >= k; }).map(function(c){
    var p = path(t, c.from, k);
    return p.length === k ? { c:c, p:p, r:corrOfMoves(cur, p) } : null;
  }).filter(Boolean) as Match[];
  rows.sort(function(a, b){ return b.r - a.r; });
  var since = Math.floor(Math.min.apply(null, Object.keys(t).map(Number)) / 4);
  var made = SCORES[key] ? [SCORES[key].what] : membersOf(key).map(function(m){ return m.what; });
  return { key:key, title:cat.title, era:era, cur:cur, rows:rows, crit:criticalR(k - 1), since:since, made:made };
}
function sayMove(d: Read){
  var a = Math.round(d.cur[0]), b = Math.round(d.cur[d.cur.length - 1]);
  var verb = d.era.ongoing ? (b > a ? "has risen" : b < a ? "has fallen" : "has held") : (b > a ? "rose" : b < a ? "fell" : "held");
  return (d.era.ongoing ? "Since the " + d.era.name + " opened, " : "Across the " + d.era.name + ", ") +
    d.title + " " + verb + (a === b ? " at " + a : " from " + a + " to " + b) + " out of 100.";
}
function sayMatch(d: Read){
  if (!d.rows.length) return " No other cycle on record is long enough to compare.";
  var best = d.rows[0], k = d.cur.length, last = d.cur[k - 1];
  var below = d.rows.every(function(m){ return m.p[k - 1] > last; }), above = d.rows.every(function(m){ return m.p[k - 1] < last; });
  var edge = below || above ? " At this point of a cycle it sits " + (below ? "lower" : "higher") + " than any of the " + d.rows.length + " cycles it can be set against." : "";
  return (best.r >= d.crit ? " Quarter by quarter it has moved like the " + best.c.name + "." :
    " No other cycle has moved closely like it; the nearest is the " + best.c.name + ".") + edge;
}
function chartHtml(d: Read){
  var F = histFrame(360), L = F.L, R = F.R, T = F.T, B = F.B, k = d.cur.length;
  var X = function(i: number){ return L + (R - L) * i / Math.max(1, k - 1); };
  var Y = function(v: number){ return B - (B - T) * v / 100; };
  var line = function(p: number[], cls: string){
    return '<path class="ca-line' + cls + '" d="' + p.map(function(v, i){ return (i ? "L" : "M") + X(i).toFixed(1) + "," + Y(v).toFixed(1); }).join("") + '"/>';
  };
  var out = [chartAxes({ ticks:[0, 50, 100], y:Y, x0:L, x1:R, top:T - AXIS.LEG - AXIS.READ, bot:B,
    fmt:function(v: number){ return v === 0 ? "Low" : v === 50 ? "Mid" : "High"; } })];
  var step = k > 24 ? 8 : 4;
  for (var i = 0; i < k; i += step){ out.push(vGrid(X(i), T, B)); out.push(xLabel(X(i).toFixed(1), "Year " + (i / 4 + 1), B + 17)); }
  d.rows.slice(1).forEach(function(m){ out.push(line(m.p, "")); });
  if (d.rows.length) out.push(line(d.rows[0].p, " near"));
  out.push(line(d.cur, " now"));
  out.push('<circle class="ca-dot" cx="' + X(k - 1).toFixed(1) + '" cy="' + Y(d.cur[k - 1]).toFixed(1) + '" r="5"/>');
  var keyY = T - AXIS.READ / 2;
  out.push('<text class="ca-key now" x="' + L + '" y="' + keyY + '">' + d.era.name + '</text>');
  if (d.rows.length) out.push('<text class="ca-key near" x="' + R + '" y="' + keyY + '" text-anchor="end">' + d.rows[0].c.name + '</text>');
  return vhOpen(F.W, F.H) + 'aria-label="' + d.title + ' through the ' + d.era.name + ', set against the other cycles at the same point.">' + out.join("") + '</svg>';
}
function rowsHtml(d: Read){
  return d.rows.slice(0, 3).map(function(m){
    return auxStat({ label:m.c.name, value:m.r.toFixed(2) + " · " + (m.r >= d.crit ? "close" : "loose") });
  }).join("");
}
function detail(d: Read){
  return (INSIGHT[d.key] ? INSIGHT[d.key]() : "") + '<h4>How the analysis reads</h4>' + facts([
    "The line is " + d.title + " as one reading, from " + d.since + ": " + d.made.join(", ") + ".",
    "Each reading is ranked against its own record up to that month, from 0 (its lowest) to 100 (its highest), turned so that a high rank always means more of what the category measures, and the ranks are averaged. It is the method of her mood score.",
    "Every cycle is drawn from the quarter it opened, so the lines share a start. The " + d.era.name + " is set against every other cycle that ran at least as long and has the record to draw it.",
    "Two cycles are matched on their moves quarter by quarter (the correlation of the changes), so two cycles that merely both rose do not count as alike. A match is close when it passes the standard test at 5% significance for that many quarters (" + d.crit.toFixed(2) + " here); below it, it is loose.",
    "The other cycles are drawn only as far as this one has run. This is a description of the record, not a forecast."
  ]);
}
export function analysisHtml(key: string){
  var d = analyse(key, ui.eraOpen || currentEra);
  if (!d) return '<div class="cat-analysis" hidden></div>';
  return '<div class="cat-analysis"><div class="ca-name">' + d.title + ' analysis</div>' +
    '<p class="ca-say">' + sayMove(d) + sayMatch(d) + '</p>' + chartHtml(d) + rowsHtml(d) + moreRow(detail(d)) + '</div>';
}
export function replaceCategory(c: { key: string }){
  var box = document.querySelector("#sheet-cat-" + c.key + " .cat-analysis");
  if (box) box.outerHTML = analysisHtml(c.key);
}
