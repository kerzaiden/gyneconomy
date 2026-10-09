import { discountHistory, fedFundsHistory, fedMoves } from "./history-fred.ts";
import { now } from "./data.ts";
import { inflationHistory } from "./refresh-season.ts";
import { cpiDirectionAt, cycleModel, nowModel } from "./model.ts";
import { CHEV, isoDay, monthLabel } from "./format.ts";
import { orbitSvg } from "./marks.ts";
import { dxHead, dxSys } from "./render-core.ts";
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
var VIEW_W = 1000, VIEW_H = 300, ROOM = 1, SIDE = 24;
function monthPoints(list: MonthPoint[], from: number, to: number){
  var sums: Record<number, number[]> = {};
  list.forEach(function(d){ var i = monthIdx(d.m); if (i >= from && i <= to) (sums[Math.floor(i / 3)] = sums[Math.floor(i / 3)] || []).push(d.v); });
  return Object.keys(sums).map(Number).sort(function(a, b){ return a - b; }).map(function(q){
    return { i: Math.min(Math.max(q * 3 + 1, from), to), v: sums[q].reduce(function(a, b){ return a + b; }, 0) / sums[q].length };
  });
}
function segments(pts: Pt[], x: (i: number) => number, y: (v: number) => number){
  var p = pts.map(function(d){ return [x(d.i), y(d.v)]; }), out: number[][] = [];
  for (var k = 0; k < p.length - 1; k++){
    var a = p[Math.max(k - 1, 0)], b = p[k], c = p[k + 1], e = p[Math.min(k + 2, p.length - 1)];
    out.push([b[0], b[1], b[0] + (c[0] - a[0]) / 6, b[1] + (c[1] - a[1]) / 6, c[0] - (e[0] - b[0]) / 6, c[1] - (e[1] - b[1]) / 6, c[0], c[1]]);
  }
  return out;
}
function curve(segs: number[][]){
  if (!segs.length) return "";
  return "M" + segs[0][0].toFixed(1) + " " + segs[0][1].toFixed(1) + segs.map(function(g){ return " C" + g.slice(2).map(function(n){ return n.toFixed(1); }).join(" "); }).join("");
}
function sample(segs: number[][]){
  var out: number[][] = [];
  segs.forEach(function(g){
    for (var t = 0; t <= 1; t += 0.05){
      var u = 1 - t, w = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
      out.push([w[0] * g[0] + w[1] * g[2] + w[2] * g[4] + w[3] * g[6], w[0] * g[1] + w[1] * g[3] + w[2] * g[5] + w[3] * g[7]]);
    }
  });
  return out;
}
var TAG = { h: 16, gap: 8, clear: 3, plotW: 300, plotH: 150 };
var TAG_SIDES = [[1, 0], [-1, 0], [0, -1], [0, 1], [1, -1], [-1, -1], [1, 1], [-1, 1]];
type Tag = { ax: number; ay: number; dx: number; dy: number; w: number };
function sideTag(ax: number, ay: number, w: number, side: number[]): Tag {
  var g = side[0] && side[1] ? TAG.gap / 2 : TAG.gap;
  return { ax: ax, ay: ay, w: w, dx: side[0] > 0 ? g : side[0] < 0 ? -g - w : -w / 2, dy: side[1] > 0 ? g : side[1] < 0 ? -g - TAG.h : -TAG.h / 2 };
}
function tagHits(t: Tag, pts: number[][]){
  var x0 = t.ax * TAG.plotW + t.dx, y0 = t.ay * TAG.plotH + t.dy;
  if (x0 < 0 || y0 < 0 || x0 + t.w > TAG.plotW || y0 + TAG.h > TAG.plotH) return Infinity;
  return pts.filter(function(q){ return q[0] > x0 - TAG.clear && q[0] < x0 + t.w + TAG.clear && q[1] > y0 - TAG.clear && q[1] < y0 + TAG.h + TAG.clear; }).length;
}
function curvePts(segs: number[][][]){
  return ([] as number[][]).concat.apply([], segs.map(sample)).map(function(q){ return [q[0] / VIEW_W * TAG.plotW, q[1] / VIEW_H * TAG.plotH]; });
}
function tagHtml(cls: string, text: string, tags: Tag[], segs: number[][][]){
  var pts = curvePts(segs);
  return tagSpan(cls, text, tags.map(function(c){ return { t: c, n: tagHits(c, pts) }; }).reduce(function(a, c){ return c.n < a.n ? c : a; }).t);
}
function tagSpan(cls: string, text: string, t: Tag){
  return '<span class="fp-tag ' + cls + '" style="left:' + pct(t.ax) + ';top:' + pct(t.ay) + ';width:' + t.w + 'px;margin:' + t.dy + 'px 0 0 ' + t.dx + 'px">' + text + '</span>';
}
function peakTag(segs: number[][][], px: number, py: number){
  return tagHtml("fp-peak-tag", "Peak", TAG_SIDES.map(function(side){ return sideTag(px / VIEW_W, py / VIEW_H, 36, side); }), segs);
}
function peakZone(px: number, py: number){
  var out: number[][] = [], cx = px / VIEW_W * TAG.plotW, cy = py / VIEW_H * TAG.plotH;
  for (var dx = -44; dx <= 44; dx += 4) for (var dy = -24; dy <= 24; dy += 4) out.push([cx + dx, cy + dy]);
  return out;
}
function levelTags(segs: number[][][], sc: Scale, bands: Band[], keep: number[][]){
  var pts = curvePts(segs).concat(keep), y = sc.y;
  var marks = ruleLevels(sc).map(function(v){ var text = (v < 0 ? "\u2212" : "") + Math.abs(v) + "%"; return { v: v, text: text, w: 6 + 6 * text.length }; });
  var wide = Math.max.apply(null, marks.map(function(k){ return k.w; }).concat(0));
  var tries = bands.filter(function(b){ return b.w * TAG.plotW >= wide + 10; }).map(function(b){
    return marks.map(function(k){ var t = { ax: b.l, ay: y(k.v) / VIEW_H, w: k.w, dx: 5, dy: -TAG.h }; return tagHits(t, pts) ? "" : tagSpan("fp-level-tag", k.text, t); });
  });
  return tries.reduce(function(a, c){ return c.filter(Boolean).length > a.filter(Boolean).length ? c : a; }, [] as string[]).join("");
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
type Band = { l: number; w: number; cls: string };
function bandSpans(phases: Phase[], from: number, to: number){
  var span = to - from + 1, out: Band[] = [];
  phases.forEach(function(p, k){
    var a = Math.max(monthIdx(p.m), from), b = k + 1 < phases.length ? monthIdx(phases[k + 1].m) : to + 1;
    if (b > from && a <= to) out.push({ l: (a - from) / span, w: (Math.min(b, to + 1) - a) / span, cls: stanceClass(p) });
  });
  return out;
}
function bandsHtml(bands: Band[], rules: string){
  return bands.map(function(b){ return '<span class="fp-band ' + b.cls + '" style="left:' + pct(b.l) + ';width:' + pct(b.w) + '">' + rules + '</span>'; }).join("");
}
function stanceClass(p: Phase){ return p.s > 0 ? "fp-tight" : "fp-ease"; }
function yearsHtml(from: number, to: number){
  var span = to - from + 1, y0 = Math.floor(from / 12), y1 = Math.floor(to / 12), step = Math.ceil((y1 - y0 + 1) / 6), out = "";
  for (var y = y0; y <= y1; y += step) out += '<span class="fp-year" style="left:' + pct(Math.max(0, y * 12 - from) / span) + '">' + y + '</span>';
  return out;
}
function plotSvg(lines: Pt[][], from: number, to: number, peak: Pt | null, open: boolean, bands: Band[]){
  var span = to - from + 1, sc = levelScale(lines), y = sc.y;
  var x = function(i: number){ return SIDE + (i - from + 0.5) / span * (VIEW_W - 2 * SIDE); };
  var segs = lines.map(function(l){ return segments(l, x, y); });
  var paths = ["fp-prices", "fp-rate"].map(function(cls, k){ return '<path class="fp-line ' + cls + '" d="' + curve(segs[k]) + '" vector-effect="non-scaling-stroke"/>'; }).join("");
  return '<svg viewBox="0 0 ' + VIEW_W + ' ' + VIEW_H + '" preserveAspectRatio="none" aria-hidden="true">' + paths + '</svg>' + levelTags(segs, sc, bands, peak ? peakZone(x(peak.i), y(peak.v)) : []) + (peak ? '<span class="fp-peak-dot' + (open ? " fp-open" : "") + '" style="left:' + pct(x(peak.i) / VIEW_W) + ';top:' + pct(y(peak.v) / VIEW_H) + '"></span>' + peakTag(segs, x(peak.i), y(peak.v)) : "");
}
function rateSeries(toM: string){ return fedFundsHistory.length && toM >= fedFundsHistory[0].m ? fedFundsHistory : discountHistory; }
function key(cls: string, name: string){ return '<li class="' + cls + '">' + name + '</li>'; }
function legendHtml(){
  return '<ul class="fp-legend">' + key("fp-key-band fp-tight", "Tightening") + key("fp-key-band fp-ease", "Easing") +
    key("fp-key-line fp-rate", "Rates") + key("fp-key-line fp-prices", "Prices") + '</ul>';
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
function fedPhasesCard(m: CycleModel){
  var fromM = m.era.from + "-01", toM = endMonthOf(m), from = monthIdx(fromM), to = monthIdx(toM), bands = bandSpans(fedPhases(), from, to);
  var peak = cyclePeak(fromM, toM);
  var lines = [monthPoints(inflationHistory, from, to), monthPoints(rateSeries(toM), from, to)];
  var top = peak ? lines[0].filter(function(p){ return Math.floor(p.i / 3) === Math.floor(monthIdx((peak as MonthPoint).m) / 3); })[0] || null : null;
  return '<div class="fp-plot">' + bandsHtml(bands, rulesHtml(levelScale(lines))) + plotSvg(lines, from, to, top, !!m.ongoing, bands) + '</div><div class="fp-years">' + yearsHtml(from, to) + '</div>' + legendHtml() + footnoteHtml(m);
}
export function fedEnvironment(m: CycleModel){
  return dxSys(" fp", dxHead(orbitSvg(), "Interest Rates Environment") + fedPhasesCard(m));
}
