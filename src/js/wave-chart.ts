import { MONTHS_SHORT } from "./format.ts";

export type WaveSeries = { list: MonthPoint[]; color: string; fill: number; bold?: boolean };
export type WaveBand = { from: number; to: number };
export type WaveKey = { name: string; kind: "line" | "band" | "blank"; color?: string };
export type WaveChart = { series: WaveSeries[]; bands: WaveBand[]; band?: string; from: number; to: number; open: boolean };
type Pt = { i: number; v: number };
type Scale = { y: (v: number) => number; lo: number; hi: number; step: number };

// ---- The wave chart ----
var KEY_CLASS = { line: "wave-key-line", band: "wave-key-band", blank: "wave-key-blank" };
var VIEW_W = 1000, VIEW_H = 300, ROOM = 1, POINTS = 60, CURL = 0.45, WAVE = 10, LEVEL = { h: 22, plotH: 150 }, GRID_STEPS = [1, 2, 5, 10];
export function monthIdx(k: string){ return Number(k.slice(0, 4)) * 12 + Number(k.slice(5, 7)) - 1; }
function pct(n: number){ return (n * 100).toFixed(2) + "%"; }
function lineTone(color: string){ return "--line:var(--" + color + ")"; }
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
  return ruleLevels(sc).map(function(v){ return '<i class="wave-rule" style="top:' + pct(sc.y(v) / VIEW_H) + '"></i>'; }).join("");
}
function levelTags(sc: Scale){
  return ruleLevels(sc).filter(function(v){ return sc.y(v) / VIEW_H > LEVEL.h / LEVEL.plotH; }).map(function(v){
    var text = (v < 0 ? "−" : "") + Math.abs(v) + "%";
    return '<span class="wave-level" style="top:' + pct(sc.y(v) / VIEW_H) + ';width:' + (6 + 6 * text.length) + 'px">' + text + '</span>';
  }).join("");
}
function axisMark(left: number | null, text: string){ return '<span class="wave-year' + (left == null ? ' wave-end"' : '" style="left:' + pct(left) + '"') + '>' + text + '</span>'; }
function axisTicks(from: number, to: number){
  var span = to - from + 1, out = "";
  if (span <= 13) for (var i = from; i < to - 1; i += 3) out += axisMark((i - from) / span, MONTHS_SHORT[i % 12]);
  else for (var y = Math.ceil(from / 12), step = Math.ceil((Math.floor(to / 12) - y) / 4); (y * 12 - from) / span < 0.7; y += step) out += axisMark((y * 12 - from) / span, String(y));
  return out;
}
function axisHtml(from: number, to: number, open: boolean){
  return '<div class="wave-axis">' + axisTicks(from, to) + axisMark(null, open ? "Today" : MONTHS_SHORT[to % 12] + " " + Math.floor(to / 12)) + '</div>';
}
function fillId(s: WaveSeries){ return "wave-fill-" + s.color + "-" + Math.round(s.fill * 100); }
function fillDefs(series: WaveSeries[]){
  return '<defs>' + series.map(function(s){ return '<linearGradient id="' + fillId(s) + '" style="' + lineTone(s.color) + ';--fill:' + s.fill + '" x1="0" y1="0" x2="0" y2="1"><stop class="wave-fill-top" offset="0"/><stop class="wave-fill-low" offset="1"/></linearGradient>'; }).join("") + '</defs>';
}
function areaPath(segs: number[][], s: WaveSeries){
  if (!segs.length) return "";
  return '<path class="wave-area" fill="url(#' + fillId(s) + ')" d="' + curve(segs) + ' L' + segs[segs.length - 1][6].toFixed(1) + ' ' + VIEW_H + ' L' + segs[0][0].toFixed(1) + ' ' + VIEW_H + ' Z"/>';
}
function lineSvg(segs: number[][], s: WaveSeries){ return '<path class="wave-line' + (s.bold ? ' wave-bold' : '') + '" style="' + lineTone(s.color) + '" d="' + curve(segs) + '" vector-effect="non-scaling-stroke"/>'; }
function plotSvg(series: WaveSeries[], lines: Pt[][], sc: Scale, from: number, to: number){
  var x = function(i: number){ return (i - from) / Math.max(to - from, 1) * VIEW_W; };
  var segs = lines.map(function(l){ return segments(l, x, sc.y); });
  var paths = fillDefs(series) + segs.map(function(g, k){ return areaPath(g, series[k]); }).join("") + segs.map(function(g, k){ return lineSvg(g, series[k]); }).join("");
  return '<svg viewBox="0 0 ' + VIEW_W + ' ' + VIEW_H + '" preserveAspectRatio="none" aria-hidden="true">' + paths + '</svg>';
}
function bandsHtml(bands: WaveBand[], from: number, to: number){
  return bands.map(function(b){ return { a: Math.max(b.from, from), z: Math.min(b.to, to) }; }).filter(function(b){ return b.z > b.a; }).map(function(b){
    return '<i class="wave-band" style="left:' + pct((b.a - from) / (to - from)) + ';width:' + pct((b.z - b.a) / (to - from)) + '"></i>';
  }).join("");
}
export function waveChart(o: WaveChart){
  var lines = o.series.map(function(s){ return monthPoints(s.list, o.from, o.to); }), sc = levelScale(lines);
  return '<div class="wave-plot" style="--band:var(--' + (o.band || "seg-track") + ')"><span class="wave-clip">' + bandsHtml(o.bands, o.from, o.to) + rulesHtml(sc) + '</span>' + plotSvg(o.series, lines, sc, o.from, o.to) + levelTags(sc) + '</div>' + axisHtml(o.from, o.to, o.open);
}
export function waveLegend(keys: WaveKey[], band?: string){
  return '<ul class="wave-legend" style="--band:var(--' + (band || "seg-track") + ')">' + keys.map(function(k){ return '<li class="' + KEY_CLASS[k.kind] + '"' + (k.color ? ' style="' + lineTone(k.color) + '"' : "") + '>' + k.name + '</li>'; }).join("") + '</ul>';
}
