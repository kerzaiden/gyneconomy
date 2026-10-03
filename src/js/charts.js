import { CHEV, clampPct } from "./format.js";

// ---- Content tab: reading companion ----
// ---- The range bar ----
export function trendOf(vals, unit, period){
  period = period || "period";
  if (!vals || vals.length < 8) return { word:"unavailable", span:"", flat:true };
  var n = vals.length, sx = 0, sy = 0, sxy = 0, sxx = 0;
  vals.forEach(function(v, i){ sx += i; sy += v; sxy += i * v; sxx += i * i; });
  var slope = (n * sxy - sx * sy) / ((n * sxx - sx * sx) || 1);
  var dir = slope > 0 ? "rising" : "falling";
  var total = Math.abs(slope) * (n - 1);
  var lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals), spread = (hi - lo) || 1;
  var fit = { slope:slope, intercept:(sy - slope * sx) / n, n:n };
  var perYear = period === "month" ? 12 : period === "quarter" ? 4 : period === "day" ? 252 : 1;
  var span = "across " + Math.max(1, Math.round(n / perYear)) + "Y";
  if (total < spread * 0.1) return { word:"flat", span:span, flat:true, fit:fit };
  return { word:dir, span:span, flat:false, fit:fit };
}
var TREND_ARROW = {
  rising:  '<svg class="tp-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 11.5L7 7l3 3 3.2-4.2"/><path d="M13.2 9V5.8H10"/></svg>',
  falling: '<svg class="tp-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 4.5L7 9l3-3 3.2 4.2"/><path d="M13.2 7v3.2H10"/></svg>'
};
export function trendPill(t, key, toggles, words){
  var word = (words && words[t.word]) || t.word;
  var inner = '<span class="tp-k">' + (key || "Trend") + '</span>' +
    '<span class="tp-v' + (t.flat ? " quiet" : "") + '">' + (TREND_ARROW[t.word] || "") + word +
      (t.span ? ' <em>' + t.span + '</em>' : '') + '</span>';
  var none = t.word === "unavailable";
  if (!toggles || !t.fit) return '<div class="trendpill' + (none ? " none" : "") + '">' + inner + '</div>';
  return '<button type="button" class="trendpill can-toggle" aria-pressed="false" ' +
    'aria-label="Show the trend on the chart">' + inner + '</button>';
}
// ---- Insights: what the series says about today, computed ----
/* ---- The record rows ---- */
// ---- The cycle average component ----
// ---- The inner pages' charts ----
function xLabelOf(o, d, i, all){
  if (o.xLabel) return o.xLabel(d, i);
  if (d.y == null) return "";
  if (all && all.length){
    var ys = o._years || (o._years = windowYears(all[0].y, all[all.length - 1].y, 5));
    return ys.indexOf(d.y) === -1 ? "" : "\u2019" + String(d.y).slice(2);
  }
  return d.y % 10 ? "" : "\u2019" + String(d.y).slice(2);
}
export function fitLine(vals, per, fmt, x0, x1, y, W, padL, padR){
  var fit = trendOf(vals, "points", per).fit;
  return fit && fit.n > 1 ? fitGroup({ fit:fit, fmt:fmt }, x0, x1, y, W, padL, padR) : "";
}
export function fitGroup(o, x0, x1, y, W, padL, padR){
  var f = o.fit, v0 = f.intercept, v1 = f.intercept + f.slope * (f.n - 1);
  var y0 = parseFloat(y(v0)), y1 = parseFloat(y(v1));
  var down = y1 > y0;
  function lab(v, x, yy, above, anchor){
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
/* ---- The history component's axes ---- */
export function vGrid(x, top, bot){
  return '<path class="bt-vgrid" d="M' + (+x).toFixed(1) + ',' + (+top).toFixed(1) +
         'L' + (+x).toFixed(1) + ',' + (+bot).toFixed(1) + '"/>';
}
var COL_FILL = 0.68;
export function colPath(cx, y0, y1, sw){
  var lo = Math.min(y0, y1), hi = Math.max(y0, y1), r = sw / 2, x = (+cx).toFixed(1);
  if (hi - lo <= sw){ var mid = ((lo + hi) / 2).toFixed(1); return "M" + x + "," + mid + "L" + x + "," + mid; }
  return "M" + x + "," + (hi - r).toFixed(1) + "L" + x + "," + (lo + r).toFixed(1);
}
export function colWidth(slot){
  if (!(slot > 0)) return 1;
  if (slot < 1.5) return slot;
  return Math.min(20, slot * COL_FILL);
}
export var AXIS = { L:37, R:6, T:10, LEG:20, RAIL:5, FOOT:8, READ:61 };
export function histFrame(Wpx){
  var W = Math.max(270, Math.round(Wpx || 360));
  var narrow = W < 430;
  var H = narrow ? 335 : 375;
  return { W:W, narrow:narrow, H:H, L:AXIS.L, R:W - AXIS.R,
           T:AXIS.T + AXIS.LEG + AXIS.READ, B:H - 17 - AXIS.FOOT };
}
export function xLabel(x, text, y){
  return '<text class="bt-xl" x="' + x + '" y="' + y + '" text-anchor="middle">' + text + '</text>';
}
export function crossLine(top, bot){
  return '<line class="hist-cross" x1="0" x2="0" y1="' + top + '" y2="' + bot + '"/>';
}
export function zeroRule(L, R, y){
  return '<path class="m2-zero" d="M' + (L - AXIS.L) + ',' + y.toFixed(1) + 'H' + (R + AXIS.R) + '"/>';
}
export function meanRule(L, R, y){ return '<path class="vh-mean" d="M' + L + ',' + y.toFixed(1) + 'H' + R + '"/>'; }
export var pendingGeom = null;
export function publishGeom(name, g){ g.src = name; pendingGeom = g; return g; }
export function histBar(inner, id){
  return '<div class="hist-bar"' + (id ? ' id="' + id + '"' : '') + '>' + (inner || '') + '</div>';
}
export function histTip(id){ return '<div class="gdp-tooltip mono hist-tip" id="' + id + '" hidden></div>'; }
export function avgRule(x0, x1, y){
  return '<path class="temp-avg" d="M' + x0 + ',' + y + 'H' + x1 + '"/>';
}
export function vhOpen(W, H){ return '<svg class="vh-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" '; }
export function chartAxes(o){
  var out = [], ticks = o.ticks;
  if (!ticks){
    var step = o.step || [0.1, 0.25, 0.5, 1, 2, 5, 10, 20, 25, 50, 100].filter(function(k){
      return (o.hi - o.lo) / k <= 4.5; })[0] || 200;
    ticks = [];
    for (var v = Math.ceil(o.lo / step) * step; v <= o.hi + 1e-9; v += step) ticks.push(v);
  }
  var fx0 = o.x0 - AXIS.L, fx1 = o.x1 + AXIS.R;
  if (o.top != null && o.bot != null){
    out.push('<rect class="bt-frame" x="' + fx0.toFixed(1) + '" y="' + (+o.top).toFixed(1) + '" width="' +
             (fx1 - fx0).toFixed(1) + '" height="' + (o.bot - o.top).toFixed(1) + '"/>');
    out.push('<path class="bt-grid" d="M' + (o.x0 - AXIS.RAIL) + ',' + (+o.top).toFixed(1) +
             'L' + (o.x0 - AXIS.RAIL) + ',' + (+o.bot).toFixed(1) + '"/>');
  }
  ticks.forEach(function(v){
    var ty = parseFloat(o.y(v));
    if (o.skipNear != null && Math.abs(ty - o.skipNear) < 12) return;
    if ((o.noGridAt == null || Math.abs(v - o.noGridAt) > 1e-9) &&
        (o.base == null || Math.abs(ty - parseFloat(o.base)) > 0.5))
      out.push('<path class="bt-grid" d="M' + fx0.toFixed(1) + ',' + ty.toFixed(1) + 'L' + fx1.toFixed(1) + ',' + ty.toFixed(1) + '"/>');
    var ly = ty - 5;
    out.push('<text class="bt-yl" x="' + ((fx0 + o.x0 - AXIS.RAIL) / 2).toFixed(1) + '" y="' + ly.toFixed(1) +
             '" text-anchor="middle">' + o.fmt(v) + '</text>');
  });
  if (o.base != null)
    out.push('<path class="bt-axis" d="M' + fx0.toFixed(1) + ',' + o.base + 'L' + fx1.toFixed(1) + ',' + o.base + '"/>');
  return out.join("");
}
export function divergeChart(o, W){
  W = Math.max(280, W || 340);
  var F = histFrame(W), H = F.H;
  var padL = F.L, padR = W - F.R, padT = F.T, padB = H - F.B, iw = W - padL - padR, ih = H - padT - padB;
  var vs = o.vals.map(function(d){ return d.v; });
  var lo = Math.min.apply(null, vs.concat([o.mid])), hi = Math.max.apply(null, vs.concat([o.mid]));
  var above = (hi - o.mid) * 1.06, below = (o.mid - lo) * 1.12, unit = ih / ((above + below) || 1);
  var midY = padT + above * unit;
  function y(v){ return (midY - (v - o.mid) * unit).toFixed(1); }
  var n = o.vals.length, slot = iw / n, sw = colWidth(slot);
  var out = [chartAxes({ lo:o.mid - below, hi:o.mid + above, y:y, x0:padL, x1:(W - padR), top:(padT - AXIS.LEG - AXIS.READ), bot:(padT + ih),
                         base:(padT + ih), skipNear:midY, step:o.step, fmt:(o.tickFmt || o.fmt) })];
  out.push('<path class="dv-mid" d="M' + padL + ',' + midY.toFixed(1) + 'L' + (W - padR) + ',' + midY.toFixed(1) + '"/>');
  o.vals.forEach(function(d, i){
    var cx = (padL + slot * (i + 0.5)).toFixed(1), y1 = parseFloat(y(d.v));
    if (Math.abs(y1 - midY) < 0.6) y1 = midY + (d.v >= o.mid ? -0.6 : 0.6);
    out.push('<path class="dv-bar hcol ' + (d.v > o.mid ? "over" : "under") + (o.goodAbove ? " good-above" : "") + '" stroke-width="' + sw.toFixed(1) + '" d="' + colPath(cx, midY, y1, sw) + '"/>');
  });
  var dAvg = o.vals.reduce(function(a, d){ return a + d.v; }, 0) / (n || 1);
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
                   vals:o.vals, at:(o.at || function(d){ return String(d.y); }), fmt:o.fmt });
  return '<div class="dchart"><svg class="hist-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + (o.alt || "") + '">' + out.join("") + '</svg></div>';
}
// ---- A series' highest reading within a span ----
var PEEK_MARKS = 12;
var PEEK_W = 80;
var PEEK_H = 42;
export function colPeek(all, classOf, base, rule){
  if (!all || !all.length) return "";
  var from = Math.max(0, all.length - PEEK_MARKS), vals = all.slice(from);
  var classAt = function(v, i){ return classOf(v, i + from); };
  var W = PEEK_W, H = PEEK_H, padT = 6, padB = 3, zero = base == null ? 0 : base;
  var hi = zero + (Math.max.apply(null, vals.concat([zero])) - zero) * 1.06, lo = zero + (Math.min(zero, Math.min.apply(null, vals)) - zero) * 1.06;
  var slot = W / vals.length, sw = Math.max(1.6, Math.min(7, slot * COL_FILL));
  function y(v){ return (padT + (H - padT - padB) * (1 - (v - lo) / ((hi - lo) || 1))).toFixed(1); }
  var out = [];
  if (rule) out.push('<path class="peek-base" d="M0,' + y(zero) + 'H' + W + '"/>');
  vals.forEach(function(v, i){
    var cx = (slot * (i + 0.5)).toFixed(1);
    var last = i === vals.length - 1;
    out.push('<path class="' + classAt(v, i) + (last ? " now" : " past") + '" stroke-width="' + sw.toFixed(1) + '" d="M' + cx + ',' + y(zero) + 'L' + cx + ',' + y(v) + '"/>');
  });
  return '<span class="peek-chart heat"><svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" aria-hidden="true">' + out.join("") + '</svg></span>';
}
function meterPeek(m, state){
  var W = PEEK_W, H = PEEK_H, sw = 13, cy = H / 2, x0 = sw / 2, x1 = W - sw / 2;
  function at(v){ return x0 + (x1 - x0) * Math.max(0, Math.min(1, (v - m.min) / ((m.max - m.min) || 1))); }
  var o = m.optimal || {};
  var lo = o.from != null ? o.from : (o.gte != null ? o.gte : m.min);
  var hi = o.to != null ? o.to : (o.lte != null ? o.lte : m.max);
  var a = at(lo), c = at(hi);
  if (c - a < sw) c = a + sw;
  var hx = at(m.value);
  return '<span class="peek-chart meterpeek"><svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" aria-hidden="true">' +
    '<path class="mp-track" stroke-width="' + sw + '" d="M' + x0 + ',' + cy + 'H' + x1 + '"/>' +
    '<path class="mp-band" stroke-width="' + sw + '" d="M' + a.toFixed(1) + ',' + cy + 'H' + c.toFixed(1) + '"/>' +
    '<circle class="mp-here ' + state + '" cx="' + hx.toFixed(1) + '" cy="' + cy + '" r="7.5"/>' +
    '<circle class="mp-core ' + state + '" cx="' + hx.toFixed(1) + '" cy="' + cy + '" r="3"/>' +
  '</svg></span>';
}
export function windowYears(fromYear, toYear, want){
  if (toYear <= fromYear) return [fromYear];
  var raw = (toYear - fromYear) / Math.max(1, want - 1);
  var step = [1, 2, 5, 10, 15, 20, 25, 50].filter(function(x){ return x >= raw; })[0] || 50;
  var out = [], y = Math.ceil(fromYear / step) * step;
  for (; y <= toYear; y += step) out.push(y);
  return out.length ? out : [toYear];
}
function refName(t){
  var w = String(t || "Reference").split(",")[0].trim();
  return w.charAt(0).toUpperCase() + w.slice(1);
}
export var PULSE_WINDOW = 5;
var PULSE_WINDOW_PEEK = 3;
var pulseClipN = 0;
function beatPath(x0, x1, y, period, amp){
  var f = function(n){ return n.toFixed(1); };
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
export function pulseTraceSvg(rate, ref, W, H, amp, cls, years){
  var id = "pulseclip" + (++pulseClipN);
  var span = years || PULSE_WINDOW;
  var lanes = ref == null
    ? [{ r:rate, y:H * 0.52, c:"pt-now" }]
    : [{ r:ref, y:H * 0.76, c:"pt-ref" }, { r:rate, y:H * 0.30, c:"pt-now" }];
  var paths = lanes.map(function(L){
    var beats = Math.max(0.5, L.r * span);
    return '<path class="' + L.c + '" d="' + beatPath(0, W, L.y, W / beats, amp) + '"/>';
  }).join("");
  return '<svg class="pt-svg ' + (cls || "") + '" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" aria-hidden="true">' +
    '<defs><clipPath id="' + id + '"><rect x="0" y="0" width="' + W + '" height="' + H + '"/></clipPath></defs>' +
    '<g clip-path="url(#' + id + ')">' + paths + '</g></svg>';
}
export function pulsePeek(rate, ref){
  return '<span class="peek-chart pulsepeek">' + pulseTraceSvg(rate, ref, PEEK_W, PEEK_H, 8, "", PULSE_WINDOW_PEEK) + '</span>';
}
export function peekCard(o){
  var art = o.ring != null ? vitalRingSvg(o.ring, o.state, null, "peek-chart peek-ring")
          : o.pulse ? pulsePeek(o.pulse.rate, o.pulse.ref)
          : o.meter ? meterPeek(o.meter, o.state)
          : o.cols ? colPeek(o.cols, o.colClass, o.colBase, o.colRule)
          : "";
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
export function vitalRingSvg(pct, state, label, cls){
  var r = 46, c = 2 * Math.PI * r;
  var offset = c * (1 - clampPct(pct, 0, 100) / 100);
  return '<svg class="vital-ring' + (cls ? " " + cls : "") + '" viewBox="0 0 120 120"' +
    (label ? ' role="img" aria-label="' + label + '"' : ' aria-hidden="true"') + '>' +
    '<circle class="vital-ring-track" cx="60" cy="60" r="' + r + '"></circle>' +
    '<circle class="vital-ring-fill ' + state + '" cx="60" cy="60" r="' + r + '" ' +
      'stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + offset.toFixed(1) + '"></circle>' +
  '</svg>';
}
export function attachHoverTracking(hit, svg, W, padL, innerW, count, onIndex, onHide){
  var rect = null, lastTouch = 0, shownIdx = -1, viaTouch = false;
  function refresh(){ rect = svg.getBoundingClientRect(); }
  function indexFromClientX(clientX){
    var relX = (clientX - rect.left) / rect.width * W;
    return Math.max(0, Math.min(count - 1, Math.round(((relX - padL) / innerW) * (count - 1))));
  }
  function hide(){ shownIdx = -1; viaTouch = false; onHide(); }
  function recentTouch(){ return Date.now() - lastTouch < 800; }
  hit.addEventListener("mouseenter", function(){ if (!recentTouch()) refresh(); });
  hit.addEventListener("mousemove", function(evt){
    if (recentTouch()) return;
    if (!rect) refresh();
    shownIdx = indexFromClientX(evt.clientX); viaTouch = false; onIndex(shownIdx);
  });
  hit.addEventListener("mouseleave", function(){ if (!viaTouch) hide(); });
  hit.addEventListener("touchstart", function(evt){
    lastTouch = Date.now(); refresh();
    var i = indexFromClientX(evt.touches[0].clientX);
    if (viaTouch && i === shownIdx){ hide(); return; }
    shownIdx = i; viaTouch = true; onIndex(i);
  }, {passive:true});
  hit.addEventListener("touchmove", function(evt){
    lastTouch = Date.now(); if (!rect) refresh();
    var i = indexFromClientX(evt.touches[0].clientX);
    if (i !== shownIdx){ shownIdx = i; viaTouch = true; onIndex(i); }
  }, {passive:true});
  hit.addEventListener("touchend", function(){ lastTouch = Date.now(); }, {passive:true});
  hoverAwayAdd({ hit:hit, touch:function(evt){ if (viaTouch && evt.target !== hit && !hit.contains(evt.target)) hide(); },
                 scroll:function(){ if (viaTouch) hide(); } });
}
var hoverAway = null;
function hoverAwayAdd(h){
  if (!hoverAway){
    hoverAway = [];
    document.addEventListener("touchstart", function(evt){ hoverAwayLive().forEach(function(x){ x.touch(evt); }); }, {passive:true});
    window.addEventListener("scroll", function(){ hoverAwayLive().forEach(function(x){ x.scroll(); }); }, {passive:true});
  }
  hoverAway.push(h);
}
function hoverAwayLive(){ return (hoverAway = hoverAway.filter(function(x){ return x.hit.isConnected; })); }
