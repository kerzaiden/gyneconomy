import { discountHistory, fedFundsHistory, fedMoves } from "./history-fred.ts";
import { fedFundsRange, now } from "./data.ts";
import { inflationHistory } from "./refresh-season.ts";
import { cpiDirectionAt, cycleModel, nowModel } from "./model.ts";
import { CHEV, MONTHS_SHORT, isoDay, monthLabel } from "./format.ts";
import { orbitSvg } from "./marks.ts";
import { dxHead, dxSys } from "./render-core.ts";
import { tabBar } from "./history.ts";
import { ROSTER_BY } from "./roster.ts";
import type { CycleModel } from "./model.ts";

type Phase = { m: string; s: number };
type Pt = { i: number; v: number };

// ---- The Fed's phases and the inflation peak ----
function monthIdx(k: string){ return Number(k.slice(0, 4)) * 12 + Number(k.slice(5, 7)) - 1; }
export function fedPhases(){
  var out: Phase[] = [];
  function add(m: string, v: number){ var s = v > 0 ? 1 : -1; if (!out.length || out[out.length - 1].s !== s) out.push({ m: m, s: s }); }
  fedMoves.forEach(function(d){ add(d.m, d.v); });
  var day = isoDay(now.fedFunds.asOf), move = Number(String(now.fedFunds.lastMove).replace("−", "-"));
  var last = fedMoves.length ? fedMoves[fedMoves.length - 1].m : "";
  if (day && move && day.slice(0, 7) > last) add(day.slice(0, 7), move);
  return out;
}
var runsCache: { key: string; starts: Record<string, string> } | null = null;
function runStarts(){
  var last = inflationHistory[inflationHistory.length - 1], key = inflationHistory.length + ":" + (last ? last.m + last.v : "");
  if (!runsCache || runsCache.key !== key) runsCache = { key: key, starts: findRuns() };
  return runsCache.starts;
}
function findRuns(){
  var run: MonthPoint[] = [], starts: Record<string, string> = {};
  function close(){ if (run.length){ var first = run[0].m; run.forEach(function(c){ starts[c.m] = first; }); } run = []; }
  inflationHistory.forEach(function(c){ if (cpiDirectionAt(c.m) === "falling") close(); else run.push(c); });
  close();
  return starts;
}
export function cyclePeak(from: string, to: string){
  var starts = runStarts(), months = inflationHistory.filter(function(c){ return c.m >= from && c.m <= to; }), k = 0;
  while (k < months.length - 1 && !(starts[months[k].m] >= from)) k++;
  return months.slice(k).reduce(function(a: MonthPoint | null, b){ return !a || b.v > a.v ? b : a; }, null);
}

// ---- The phases chart ----
var VIEW_W = 1000, VIEW_H = 300, ROOM = 1, POINTS = 12, CURL = 0.4, WAVE = 14;
function monthPoints(list: MonthPoint[], from: number, to: number){
  var at: Record<number, number> = {}, sigma = Math.max(1, (to - from + 1) / WAVE), out: Pt[] = [];
  list.forEach(function(d){ var i = monthIdx(d.m); if (i <= to) at[i] = d.v; });
  for (var k = 0; k <= POINTS; k++){
    var c = from + (to - from) * k / POINTS, w = 0, sum = 0;
    for (var i = Math.floor(c - 3 * sigma); i <= Math.ceil(c + 3 * sigma); i++) if (at[i] != null){ var g = Math.exp(-(i - c) * (i - c) / (2 * sigma * sigma)); w += g; sum += g * at[i]; }
    if (w) out.push({ i: c, v: sum / w });
  }
  return out;
}
function slopes(p: number[][]){
  return p.map(function(b, k){
    var a = p[Math.max(k - 1, 0)], c = p[Math.min(k + 1, p.length - 1)], s0 = (b[1] - a[1]) / ((b[0] - a[0]) || 1), s1 = (c[1] - b[1]) / ((c[0] - b[0]) || 1);
    return s0 * s1 <= 0 ? 0 : Math.sign(s0) * Math.min(Math.abs(s0 + s1) / 2, 3 * Math.abs(s0), 3 * Math.abs(s1));
  });
}
function segments(pts: Pt[], x: (i: number) => number, y: (v: number) => number){
  var p = pts.map(function(d){ return [x(d.i), y(d.v)]; }), m = slopes(p), out: number[][] = [];
  for (var k = 0; k < p.length - 1; k++){
    var b = p[k], c = p[k + 1], h = (c[0] - b[0]) * CURL;
    out.push([b[0], b[1], b[0] + h, b[1] + m[k] * h, c[0] - h, c[1] - m[k + 1] * h, c[0], c[1]]);
  }
  return out;
}
function curve(segs: number[][]){
  if (!segs.length) return "";
  return "M" + segs[0][0].toFixed(1) + " " + segs[0][1].toFixed(1) + segs.map(function(g){ return " C" + g.slice(2).map(function(n){ return n.toFixed(1); }).join(" "); }).join("");
}
var TAG = { h: 22, plotH: 150 };
type Tag = { ax: number; ay: number; dx: number; dy: number; w: number };
function tagSpan(cls: string, text: string, t: Tag){
  return '<span class="fp-tag ' + cls + '" style="left:' + pct(t.ax) + ';top:' + pct(t.ay) + ';width:' + t.w + 'px;margin:' + t.dy + 'px 0 0 ' + t.dx + 'px">' + text + '</span>';
}
function levelTags(sc: Scale){
  return ruleLevels(sc).filter(function(v){ return sc.y(v) / VIEW_H > TAG.h / TAG.plotH; }).map(function(v){
    var text = (v < 0 ? "\u2212" : "") + Math.abs(v) + "%";
    return tagSpan("fp-level-tag", text, { ax: 0, ay: sc.y(v) / VIEW_H, w: 6 + 6 * text.length, dx: 5, dy: -TAG.h });
  }).join("");
}
function pct(n: number){ return (n * 100).toFixed(2) + "%"; }
var GRID_STEPS = [1, 2, 5, 10];
type Scale = { y: (v: number) => number; lo: number; hi: number; step: number };
function levelScale(lines: Pt[][]): Scale {
  var all = ([] as Pt[]).concat.apply([], lines).map(function(p){ return p.v; });
  var lo = Math.min.apply(null, all) - ROOM, hi = Math.max.apply(null, all) + ROOM;
  var step = GRID_STEPS.filter(function(s){ return (hi - lo) / s <= 6; })[0] || 20;
  return { lo: lo, hi: hi, step: step, y: function(v: number){ return VIEW_H * (1 - (v - lo) / (hi - lo)); } };
}
function ruleLevels(sc: Scale){
  var out: number[] = [];
  for (var v = Math.ceil(sc.lo / sc.step) * sc.step; v <= sc.hi; v += sc.step) out.push(v);
  return out;
}
function rulesHtml(sc: Scale){
  var y = sc.y;
  return ruleLevels(sc).map(function(v){ return '<i class="fp-rule" style="top:' + pct(y(v) / VIEW_H) + '"></i>'; }).join("");
}
function axisMark(left: number | null, text: string){ return '<span class="fp-year' + (left == null ? ' fp-end"' : '" style="left:' + pct(left) + '"') + '>' + text + '</span>'; }
function axisTicks(from: number, to: number){
  var span = to - from + 1, out = "";
  if (span <= 13) for (var i = from; i < to - 1; i += 3) out += axisMark((i - from) / span, MONTHS_SHORT[i % 12]);
  else for (var y = Math.ceil(from / 12), step = Math.ceil((Math.floor(to / 12) - y) / 4); (y * 12 - from) / span < 0.7; y += step) out += axisMark((y * 12 - from) / span, String(y));
  return out;
}
function yearsHtml(from: number, to: number, open: boolean){
  return axisTicks(from, to) + axisMark(null, open ? "Today" : MONTHS_SHORT[to % 12] + " " + Math.floor(to / 12));
}
function fillDefs(){
  return '<defs>' + ["fp-rate", "fp-prices"].map(function(cls){ return '<linearGradient id="' + cls + '-fill" class="' + cls + '" x1="0" y1="0" x2="0" y2="1"><stop class="fp-fill-top" offset="0"/><stop class="fp-fill-low" offset="1"/></linearGradient>'; }).join("") + '</defs>';
}
function areaPath(segs: number[][], cls: string){
  if (!segs.length) return "";
  return '<path class="fp-area" fill="url(#' + cls + '-fill)" d="' + curve(segs) + ' L' + segs[segs.length - 1][6].toFixed(1) + ' ' + VIEW_H + ' L' + segs[0][0].toFixed(1) + ' ' + VIEW_H + ' Z"/>';
}
function lineSvg(segs: number[][], cls: string){ return '<path class="fp-line ' + cls + '" d="' + curve(segs) + '" vector-effect="non-scaling-stroke"/>'; }
function plotSvg(lines: Pt[][], from: number, to: number){
  var sc = levelScale(lines), y = sc.y;
  var x = function(i: number){ return (i - from) / Math.max(to - from, 1) * VIEW_W; };
  var segs = lines.map(function(l){ return segments(l, x, y); });
  var paths = fillDefs() + areaPath(segs[1], "fp-rate") + areaPath(segs[0], "fp-prices") + lineSvg(segs[1], "fp-rate") + lineSvg(segs[0], "fp-prices");
  return '<svg viewBox="0 0 ' + VIEW_W + ' ' + VIEW_H + '" preserveAspectRatio="none" aria-hidden="true">' + paths + '</svg>' + levelTags(sc);
}
function turnsHtml(from: number, to: number){
  return fedPhases().map(function(p){ return monthIdx(p.m); }).filter(function(i){ return i > from && i < to; }).map(function(i){ return '<i class="fp-turn" style="left:' + pct((i - from) / (to - from)) + '"></i>'; }).join("");
}
function stripHtml(at: number, from: number, to: number){
  return at < 0 ? "" : '<span class="fp-strip" style="left:' + pct((at - from) / Math.max(to - from, 1)) + '"></span>';
}
function rateSeries(toM: string){ return fedFundsHistory.length && toM >= fedFundsHistory[0].m ? fedFundsHistory : discountHistory; }
function key(cls: string, name: string){ return '<li class="' + cls + '">' + name + '</li>'; }
function legendHtml(toM: string){
  return '<ul class="fp-legend">' + key("fp-key-line fp-rate", rateSeries(toM) === discountHistory ? "Discount rates" : "Interest rates") + key("fp-key-line fp-prices", "Prices") + key("fp-key-peak", "Inflation") + '</ul>';
}
var PHASES = "When the Fed tightens, it raises rates to cool borrowing and spending, and prices often keep rising until shortly before the last hike. When it eases, it cuts rates to make credit cheap again. Money is only tight while the rate runs above prices.";
function footnoteHtml(m: CycleModel){
  var rate = ROSTER_BY["sheet-sign-hormones"];
  return '<p class="fp-note">' + PHASES + ' <button type="button" class="fp-more" data-open="' + rate.id + '" data-title="' + rate.name + '" data-rate-cycle="' + m.era.name + '">Learn more' + CHEV + '</button></p>';
}
export function ratesStory(c: Cycle){
  var m = c.ongoing ? nowModel : cycleModel(c), peak = cyclePeak(c.from + "-01", endMonthOf(m));
  return c.rates.replace("{peak}", peak ? peak.v.toFixed(1) + "%" : "").replace("{month}", peak ? monthLabel(peak.m).replace(" ", "\u00a0") : "");
}
function endMonthOf(m: CycleModel){
  if (!m.ongoing) return m.endMonth;
  var ff = fedFundsHistory[fedFundsHistory.length - 1];
  return ff && ff.m > m.endMonth ? ff.m : m.endMonth;
}
var RANGES = [["1y", "1Y"], ["5y", "5Y"], ["cycle", "Cycle"]];
function windowFrom(range: string, cycleFrom: number, to: number){ return range === "1y" ? to - 11 : range === "5y" ? to - 59 : cycleFrom; }
function closingRate(m: CycleModel, toM: string){
  if (m.ongoing) return fedFundsRange().replace("%", "");
  var d = rateSeries(toM).filter(function(p){ return p.m <= toM; }).pop();
  return d ? d.v.toFixed(2) : "";
}
function heroHtml(m: CycleModel, toM: string){ return '<div class="fp-hero"><b class="fp-fig">' + closingRate(m, toM) + '<small>%</small></b></div>'; }
function ratesCard(m: CycleModel, host: string, range: string){
  var toM = endMonthOf(m), to = monthIdx(toM), cycleFrom = monthIdx(m.era.from + "-01"), from = windowFrom(range, cycleFrom, to);
  var peak = cyclePeak(m.era.from + "-01", toM), at = peak ? monthIdx(peak.m) : -1, top = peak && at >= from ? at : -1;
  var lines = [monthPoints(inflationHistory, from, to), monthPoints(rateSeries(toM), from, to)];
  return heroHtml(m, toM) + tabBar('data-range-for="' + host + '"', RANGES, range, "data-range", "thin") + plotHtml(lines, from, to, top, m) + legendHtml(toM) + footnoteHtml(m);
}
function plotHtml(lines: Pt[][], from: number, to: number, top: number, m: CycleModel){
  return '<div class="fp-plot"><span class="fp-clip">' + rulesHtml(levelScale(lines)) + turnsHtml(from, to) + stripHtml(top, from, to) + '</span>' + plotSvg(lines, from, to) + '</div><div class="fp-years">' + yearsHtml(from, to, !!m.ongoing) + '</div>';
}
export function fedEnvironment(m: CycleModel, host: string, range: string){
  return dxSys(" fp", dxHead(orbitSvg(), "Interest Rates") + ratesCard(m, host, range));
}
