import { CHEV } from "./format.ts";

type Fit = { slope: number; intercept: number; n: number };
type Trend = { word: string; span: string; flat: boolean; fit?: Fit };
type YScale = (v: number) => number | string;
type FitOpts = { fit?: Fit; fmt: (v: number) => string };
type XLabelOpts = { xLabel?: ((d: never, i: number) => string) | null; _years?: number[] };
type AxesOpts = { ticks?: number[]; step?: number; lo?: number; hi?: number; fmt: (v: number) => string; y: YScale; x0: number; x1: number; top?: number | null; bot?: number | null; skipNear?: number | null; noGridAt?: number | null; base?: number | string | null };
type DivergeDatum = { v: number | null; y?: number; [k: string]: unknown };
type DivergeOpts = XLabelOpts & FitOpts & { vals: DivergeDatum[]; mid: number; midLabel?: string; tickFmt?: (v: number) => string; step?: number; goodAbove?: boolean; at?: ChartGeom["at"]; alt?: string };
export type HistFrame = { W: number; narrow: boolean; H: number; L: number; R: number; T: number; B: number };

// ---- The range bar ----
export function trendOf(vals: (number | null)[] | null | undefined, unit?: string, period?: string): Trend {
  period = period || "period";
  if (!vals || vals.length < 8) return { word:"unavailable", span:"", flat:true };
  var n = vals.length, sx = 0, sy = 0, sxy = 0, sxx = 0;
  vals.forEach(function(v, i){ var x = v == null ? 0 : v; sx += i; sy += x; sxy += i * x; sxx += i * i; });
  var slope = (n * sxy - sx * sy) / ((n * sxx - sx * sx) || 1);
  var dir = slope > 0 ? "rising" : "falling";
  var total = Math.abs(slope) * (n - 1);
  var lo = Math.min.apply(null, vals as number[]), hi = Math.max.apply(null, vals as number[]), spread = (hi - lo) || 1;
  var fit = { slope:slope, intercept:(sy - slope * sx) / n, n:n };
  var perYear = period === "month" ? 12 : period === "quarter" ? 4 : period === "day" ? 252 : 1;
  var span = "across " + Math.max(1, Math.round(n / perYear)) + "Y";
  if (total < spread * 0.1) return { word:"flat", span:span, flat:true, fit:fit };
  return { word:dir, span:span, flat:false, fit:fit };
}
var TREND_ARROW: Record<string, string> = {
  rising:  '<svg class="tp-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 11.5L7 7l3 3 3.2-4.2"/><path d="M13.2 9V5.8H10"/></svg>',
  falling: '<svg class="tp-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 4.5L7 9l3-3 3.2 4.2"/><path d="M13.2 7v3.2H10"/></svg>'
};
export function trendPill(t: Trend, key?: string | null, toggles?: boolean, words?: Record<string, string> | null){
  var word = (words && words[t.word]) || t.word;
  var inner = '<span class="tp-k">' + (key || "Trend") + '</span>' +
    '<span class="tp-v' + (t.flat ? " quiet" : "") + '">' + (TREND_ARROW[t.word] || "") + word +
      (t.span ? ' <em>' + t.span + '</em>' : '') + '</span>';
  var none = t.word === "unavailable";
  if (!toggles || !t.fit) return '<div class="trendpill' + (none ? " none" : "") + '">' + inner + '</div>';
  return '<button type="button" class="trendpill can-toggle" aria-pressed="false" ' +
    'aria-label="Show the trend on the chart">' + inner + '</button>';
}
// ---- The inner pages' charts ----
function yearsAcross(all: { y?: number }[]){ var a = all[0].y, b = all[all.length - 1].y; if (a == null || b == null) throw new Error("a dated chart has an undated end"); return windowYears(a, b, 5); }
function xLabelOf(o: XLabelOpts, d: { y?: number }, i: number, all?: { y?: number }[]){
  if (o.xLabel) return o.xLabel(d as never, i);
  if (d.y == null) return "";
  if (all && all.length){
    var ys = o._years || (o._years = yearsAcross(all));
    return ys.indexOf(d.y) === -1 ? "" : "\u2019" + String(d.y).slice(2);
  }
  return d.y % 10 ? "" : "\u2019" + String(d.y).slice(2);
}
export function fitLine(vals: (number | null)[], per: string, fmt: (v: number) => string, x0: number, x1: number, y: YScale, W: number, padL: number, padR: number){
  var fit = trendOf(vals, "points", per).fit;
  return fit && fit.n > 1 ? fitGroup({ fit:fit, fmt:fmt }, x0, x1, y, W, padL, padR) : "";
}
export function fitGroup(o: FitOpts, x0: number, x1: number, y: YScale, W: number, padL: number, padR: number){
  var f = o.fit; if (!f) return ""; var v0 = f.intercept, v1 = f.intercept + f.slope * (f.n - 1);
  var y0 = parseFloat(y(v0) as string), y1 = parseFloat(y(v1) as string);
  var down = y1 > y0;
  function lab(v: number, x: number, yy: number, above: boolean, anchor: string){
    var txt = o.fmt(v), w = txt.length * 7.4 + 8, ly = above ? yy - 17 : yy + 5;
    var lx = anchor === "end" ? x - w : x;
    return '<rect class="chart-label-plate" x="' + lx.toFixed(1) + '" y="' + ly.toFixed(1) + '" width="' + w.toFixed(1) + '" height="15" rx="3"/>' +
      '<text class="fit-lab mono" x="' + (lx + w / 2).toFixed(1) + '" y="' + (ly + 11.4).toFixed(1) + '" text-anchor="middle">' + txt + '</text>';
  }
  return '<g class="fit">' +
    '<path class="fit-line" d="M' + x0.toFixed(1) + ',' + y0.toFixed(1) + 'L' + x1.toFixed(1) + ',' + y1.toFixed(1) + '"/>' +
    lab(v0, padL + 1, y0, !down, "start") +
    lab(v1, W - padR - 1, y1, down, "end") +
  '</g>';
}
// ---- The history component's axes ----
export function vGrid(x: number | string, top: number | string, bot: number | string){
  return '<path class="bt-vgrid" d="M' + (+x).toFixed(1) + ',' + (+top).toFixed(1) +
         'L' + (+x).toFixed(1) + ',' + (+bot).toFixed(1) + '"/>';
}
var COL_FILL = 0.68;
export function colPath(cx: number | string, y0: number, y1: number, sw: number){
  var lo = Math.min(y0, y1), hi = Math.max(y0, y1), r = sw / 2, x = (+cx).toFixed(1);
  if (hi - lo <= sw){ var mid = ((lo + hi) / 2).toFixed(1); return "M" + x + "," + mid + "L" + x + "," + mid; }
  return "M" + x + "," + (hi - r).toFixed(1) + "L" + x + "," + (lo + r).toFixed(1);
}
export function colWidth(slot: number){
  if (!(slot > 0)) return 1;
  if (slot < 1.5) return slot;
  return Math.min(20, slot * COL_FILL);
}
export var AXIS = { L:37, R:6, T:10, LEG:20, RAIL:5, FOOT:8, READ:61 };
export function histFrame(Wpx?: number | null): HistFrame {
  var W = Math.max(270, Math.round(Wpx || 360));
  var narrow = W < 430;
  var H = narrow ? 335 : 375;
  return { W:W, narrow:narrow, H:H, L:AXIS.L, R:W - AXIS.R,
           T:AXIS.T + AXIS.LEG + AXIS.READ, B:H - 17 - AXIS.FOOT };
}
export function xLabel(x: number | string, text: string | number, y: number | string){
  return '<text class="bt-xl" x="' + x + '" y="' + y + '" text-anchor="middle">' + text + '</text>';
}
export function crossLine(top: number | string, bot: number | string){
  return '<line class="hist-cross" x1="0" x2="0" y1="' + top + '" y2="' + bot + '"/>';
}
export function zeroRule(L: number, R: number, y: number){
  return '<path class="m2-zero" d="M' + (L - AXIS.L) + ',' + y.toFixed(1) + 'H' + (R + AXIS.R) + '"/>';
}
export function meanRule(L: number, R: number, y: number){ return '<path class="vh-mean" d="M' + L + ',' + y.toFixed(1) + 'H' + R + '"/>'; }
export var pendingGeom: ChartGeom | null = null;
export function publishGeom(name: string, g: ChartGeom){ g.src = name; pendingGeom = g; return g; }
export function histBar(inner?: string | null, id?: string | null){
  return '<div class="hist-bar"' + (id ? ' id="' + id + '"' : '') + '>' + (inner || '') + '</div>';
}
export function histTip(id: string){ return '<div class="gdp-tooltip mono hist-tip" id="' + id + '" hidden></div>'; }
export function avgRule(x0: number | string, x1: number | string, y: number | string){
  return '<path class="temp-avg" d="M' + x0 + ',' + y + 'H' + x1 + '"/>';
}
export function vhOpen(W: number, H: number){ return '<svg class="vh-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" '; }
function autoTicks(o: AxesOpts){
  var lo = o.lo, hi = o.hi; if (lo == null || hi == null) throw new Error("an axis has neither ticks nor a range"); var span = hi - lo;
  var step = o.step || [0.1, 0.25, 0.5, 1, 2, 5, 10, 20, 25, 50, 100].filter(function(k){
    return span / k <= 4.5; })[0] || 200;
  var ticks: number[] = [];
  for (var v = Math.ceil(lo / step) * step; v <= hi + 1e-9; v += step) ticks.push(v);
  return ticks;
}
export function chartAxes(o: AxesOpts){
  var out: string[] = [], ticks = o.ticks || autoTicks(o);
  while (ticks.length > 2 && ticks.some(function(t, i){ return i > 0 && o.fmt(t) === o.fmt(ticks[i - 1]); }))
    ticks = ticks.filter(function(t, i){ return i % 2 === 0; });
  var fx0 = o.x0 - AXIS.L, fx1 = o.x1 + AXIS.R;
  if (o.top != null && o.bot != null){
    out.push('<rect class="bt-frame" x="' + fx0.toFixed(1) + '" y="' + (+o.top).toFixed(1) + '" width="' +
             (fx1 - fx0).toFixed(1) + '" height="' + (o.bot - o.top).toFixed(1) + '"/>');
    out.push('<path class="bt-grid" d="M' + (o.x0 - AXIS.RAIL) + ',' + (+o.top).toFixed(1) +
             'L' + (o.x0 - AXIS.RAIL) + ',' + (+o.bot).toFixed(1) + '"/>');
  }
  ticks.forEach(function(v){
    var ty = parseFloat(o.y(v) as string);
    if (o.skipNear != null && Math.abs(ty - o.skipNear) < 12) return;
    if ((o.noGridAt == null || Math.abs(v - o.noGridAt) > 1e-9) &&
        (o.base == null || Math.abs(ty - parseFloat(o.base as string)) > 0.5))
      out.push('<path class="bt-grid" d="M' + fx0.toFixed(1) + ',' + ty.toFixed(1) + 'L' + fx1.toFixed(1) + ',' + ty.toFixed(1) + '"/>');
    var ly = ty - 5;
    out.push('<text class="bt-yl" x="' + ((fx0 + o.x0 - AXIS.RAIL) / 2).toFixed(1) + '" y="' + ly.toFixed(1) +
             '" text-anchor="middle">' + o.fmt(v) + '</text>');
  });
  if (o.base != null)
    out.push('<path class="bt-axis" d="M' + fx0.toFixed(1) + ',' + o.base + 'L' + fx1.toFixed(1) + ',' + o.base + '"/>');
  return out.join("");
}
export function divergeChart(o: DivergeOpts, W?: number){
  W = Math.max(280, W || 340);
  var F = histFrame(W), H = F.H;
  var padL = F.L, padR = W - F.R, padT = F.T, padB = H - F.B, iw = W - padL - padR, ih = H - padT - padB;
  var vs = o.vals.map(function(d){ return d.v; });
  var lo = Math.min.apply(null, (vs as number[]).concat([o.mid])), hi = Math.max.apply(null, (vs as number[]).concat([o.mid]));
  var above = (hi - o.mid) * 1.06, below = (o.mid - lo) * 1.12, unit = ih / ((above + below) || 1);
  var midY = padT + above * unit;
  function y(v: number){ return (midY - (v - o.mid) * unit).toFixed(1); }
  var n = o.vals.length, slot = iw / n, sw = colWidth(slot);
  var out = [chartAxes({ lo:o.mid - below, hi:o.mid + above, y:y, x0:padL, x1:(W - padR), top:(padT - AXIS.LEG - AXIS.READ), bot:(padT + ih),
                         base:(padT + ih), skipNear:midY, step:o.step, fmt:(o.tickFmt || o.fmt) })];
  out.push('<path class="dv-mid" d="M' + padL + ',' + midY.toFixed(1) + 'L' + (W - padR) + ',' + midY.toFixed(1) + '"/>');
  o.vals.forEach(function(d, i){
    var v = d.v == null ? 0 : d.v, cx = (padL + slot * (i + 0.5)).toFixed(1), y1 = parseFloat(y(v));
    if (Math.abs(y1 - midY) < 0.6) y1 = midY + (v >= o.mid ? -0.6 : 0.6);
    out.push('<path class="dv-bar hcol ' + (v > o.mid ? "over" : "under") + (o.goodAbove ? " good-above" : "") + '" stroke-width="' + sw.toFixed(1) + '" d="' + colPath(cx, midY, y1, sw) + '"/>');
  });
  var dAvg = o.vals.reduce(function(a, d){ return a + (d.v == null ? 0 : d.v); }, 0) / (n || 1);
  out.push(avgRule(padL, (W - padR), y(dAvg)));
  if (o.fit && o.fit.n > 1) out.push(fitGroup(o, padL + slot * 0.5, padL + slot * (n - 0.5), y, W, padL, padR));
  o.vals.forEach(function(d, i){
    var lab = xLabelOf(o, d, i, o.vals); if (!lab) return;
    out.unshift(vGrid(padL + slot * (i + 0.5), padT, padT + ih));
    out.push(xLabel((padL + slot * (i + 0.5)).toFixed(1), lab, (H - AXIS.FOOT)));
  });
  out.push(crossLine(padT, (padT + ih)));
  publishGeom("divergeChart", { L:(padL + slot * 0.5), R:(padL + slot * (n - 0.5)), T:padT, B:(padT + ih), W:W, n:n,
                   refs:(o.mid != null ? [{ label:"Average", v:dAvg }, { label:refName(o.midLabel), v:o.mid, dash:true, cls:"dv-mid" }]
                                      : [{ label:"Average", v:dAvg }]),
                   vals:o.vals, at:(o.at || function(d: DivergeDatum){ return String(d.y); }), fmt:o.fmt });
  return '<div class="dchart"><svg class="hist-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + (o.alt || "") + '">' + out.join("") + '</svg></div>';
}
// ---- A series' highest reading within a span ----
var PEEK_MARKS = 12;
var PEEK_W = 80;
var PEEK_H = 42;
export function colPeek(all: readonly (number | null)[] | null | undefined, classOf: (v: number, i: number) => string, base?: number | null, rule?: boolean){
  if (!all || !all.length) return "";
  var from = Math.max(0, all.length - PEEK_MARKS), vals = all.slice(from) as number[];
  var classAt = function(v: number, i: number){ return classOf(v, i + from); };
  var W = PEEK_W, H = PEEK_H, padT = 6, padB = 3, zero = base == null ? 0 : base;
  var hi = zero + (Math.max.apply(null, vals.concat([zero])) - zero) * 1.06, lo = zero + (Math.min(zero, Math.min.apply(null, vals)) - zero) * 1.06;
  var slot = W / vals.length, sw = Math.max(1.6, Math.min(7, slot * COL_FILL));
  function y(v: number){ return (padT + (H - padT - padB) * (1 - (v - lo) / ((hi - lo) || 1))).toFixed(1); }
  var out: string[] = [];
  if (rule) out.push('<path class="peek-base" d="M0,' + y(zero) + 'H' + W + '"/>');
  vals.forEach(function(v, i){
    var cx = (slot * (i + 0.5)).toFixed(1);
    var last = i === vals.length - 1;
    out.push('<path class="' + classAt(v, i) + (last ? " now" : " past") + '" stroke-width="' + sw.toFixed(1) + '" d="M' + cx + ',' + y(zero) + 'L' + cx + ',' + y(v) + '"/>');
  });
  return '<span class="peek-chart heat"><svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" aria-hidden="true">' + out.join("") + '</svg></span>';
}
export function windowYears(fromYear: number, toYear: number, want: number): number[] {
  if (toYear <= fromYear) return [fromYear];
  var raw = (toYear - fromYear) / Math.max(1, want - 1);
  var step = [1, 2, 5, 10, 15, 20, 25, 50].filter(function(x){ return x >= raw; })[0] || 50;
  var out: number[] = [], y = Math.ceil(fromYear / step) * step;
  for (; y <= toYear; y += step) out.push(y);
  return out.length ? out : [toYear];
}
function refName(t?: string | null){
  var w = String(t || "Reference").split(",")[0].trim();
  return w.charAt(0).toUpperCase() + w.slice(1);
}
export var PULSE_WINDOW = 5;
var pulseClipN = 0;
function beatPath(x0: number, x1: number, y: number, period: number, amp: number){
  var f = function(n: number){ return n.toFixed(1); };
  var d = ["M" + f(x0) + "," + f(y)], x = x0, p = period, A = amp;
  while (x < x1 + p){
    d.push("H" + f(x + p * 0.08));
    d.push("Q" + f(x + p * 0.15) + "," + f(y - A * 0.24) + " " + f(x + p * 0.22) + "," + f(y));
    d.push("H" + f(x + p * 0.30));
    d.push("L" + f(x + p * 0.345) + "," + f(y + A * 0.15));
    d.push("L" + f(x + p * 0.400) + "," + f(y - A));
    d.push("L" + f(x + p * 0.455) + "," + f(y + A * 0.34));
    d.push("L" + f(x + p * 0.500) + "," + f(y));
    d.push("H" + f(x + p * 0.60));
    d.push("Q" + f(x + p * 0.71) + "," + f(y - A * 0.36) + " " + f(x + p * 0.82) + "," + f(y));
    x += p;
  }
  return d.join("");
}
export function pulseTraceSvg(rate: number | null, ref: number | null | undefined, W: number, H: number, amp: number, cls?: string, years?: number){
  var id = "pulseclip" + (++pulseClipN);
  var span = years || PULSE_WINDOW;
  var lanes = ref == null
    ? [{ r:rate, y:H * 0.52, c:"pt-now" }]
    : [{ r:ref, y:H * 0.76, c:"pt-ref" }, { r:rate, y:H * 0.30, c:"pt-now" }];
  var paths = lanes.map(function(L){
    var beats = Math.max(0.5, (L.r == null ? 0 : L.r) * span);
    return '<path class="' + L.c + '" d="' + beatPath(0, W, L.y, W / beats, amp) + '"/>';
  }).join("");
  return '<svg class="pt-svg ' + (cls || "") + '" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" aria-hidden="true">' +
    '<defs><clipPath id="' + id + '"><rect x="0" y="0" width="' + W + '" height="' + H + '"/></clipPath></defs>' +
    '<g clip-path="url(#' + id + ')">' + paths + '</g></svg>';
}
export function peekCard(o: PeekCardOpts){
  var art = o.cols && o.colClass ? colPeek(o.cols, o.colClass, o.colBase, o.colRule) : "";
  return '<button type="button" class="peek ' + o.state + '" data-open="' + o.target +
    '" data-title="' + (o.title || o.kicker) + '" aria-label="' + (o.title || o.kicker) + ', ' + o.value + ' ' + o.unit + ' \u2014 open">' +
    '<span class="peek-text">' +
      '<span class="peek-kicker">' +
        (o.mark ? '<span class="peek-mark ' + o.state + '">' + o.mark + '</span>' : '') +
        o.kicker + CHEV + '</span>' +
      art +
      '<span class="peek-value">' + o.value + '<span class="peek-unit">' + o.unit + '</span></span>' +
      '<span class="peek-word">' + o.word + '</span>' +
    '</span>' +
  '</button>';
}
