// ---- Pulse strips ----
import { AXIS, beatPath, chartAxes, histFrame, publishGeom, vGrid, vhOpen, xLabel, yLabel } from "./charts.ts";
import { M2_FLOOD, M2V_FROM_YEAR, m2vHistory, m2Yoy } from "./data.ts";
import { fmtSigned, qAtIndex, quartile } from "./format.ts";

export var PULSE_BEATS = 5, PULSE_FENCE = 1.5, PULSE_FAR = 3, PULSE_VEL = 34;
var fences: number[] | null = null;
function pulseMove(i: number){ return (m2vHistory[i] / m2vHistory[i - 1] - 1) * 100; }
export function pulseFences(){
  if (fences) return fences;
  var moves: number[] = [];
  for (var i = 1; i < m2vHistory.length; i++) moves.push(pulseMove(i));
  var q1 = quartile(moves, 0.25), q3 = quartile(moves, 0.75), k = q3 - q1;
  return fences = [q1 - PULSE_FAR * k, q1 - PULSE_FENCE * k, q3 + PULSE_FENCE * k];
}
export function pulseBeat(i: number){
  if (i < 1) return "";
  var m = pulseMove(i), f = pulseFences();
  return m < f[0] ? "flat" : (m < f[1] || m > f[2]) ? "odd" : "";
}
function f1(v: number){ return v.toFixed(1); }
export function pulseStroke(i: number){
  var g = m2Yoy[i];
  return g == null ? null : Math.max(-1, Math.min(1, g / M2_FLOOD));
}
type StripRow = { y: number; top: number; h: number; from: number; end: number; X: (q: number) => number };
function stripQuarter(r: StripRow, q: number, x: number, limit: number){
  var i = (r.y - M2V_FROM_YEAR) * 4 + q, xa = r.X(q), xb = r.X(q + 1), kind = pulseBeat(i);
  var p = (r.X(4) - r.X(0)) / (PULSE_BEATS * m2vHistory[i]), stroke = pulseStroke(i), amp = Math.min(34, r.h * 0.6) * (stroke == null ? 0.5 : stroke);
  var cy = r.top + r.h * 0.64, d: string[] = [];
  if (stroke == null) kind = kind || "blank";
  x = Math.max(x, xa);
  if (kind === "flat"){ d.push("M" + f1(xa) + "," + f1(cy) + "H" + f1(xb)); x = xb; }
  while (kind !== "flat" && x < xb && x + p * 0.55 <= limit){ d.push(beatPath(x, x, cy, p, amp) + "H" + f1(x + p)); x += p; }
  if (x < xb){ d.push("M" + f1(x) + "," + f1(cy) + "H" + f1(xb)); x = xb; }
  return { x:x, svg:'<path class="ps-beat hcol' + (kind ? " " + kind : "") + '" d="' + d.join("") + '"/>' };
}
function stripRow(r: StripRow){
  var out: string[] = [], x = r.X(0), sum = 0, n = 0, base = (r.y - M2V_FROM_YEAR) * 4, last = -1;
  for (var q = 0; q < 4; q++) if (base + q >= r.from && base + q < r.end) last = q;
  for (q = 0; q < 4; q++){
    var i = base + q;
    if (i < r.from || i >= r.end){ x = Math.max(x, r.X(q + 1)); continue; }
    var s = stripQuarter(r, q, x, r.X(last + 1));
    out.push(s.svg); x = s.x; sum += m2vHistory[i]; n++;
  }
  var id = "psclip" + r.y, w = r.X(last + 1) - r.X(0);
  out = ['<clipPath id="' + id + '"><rect x="' + f1(r.X(0)) + '" y="' + f1(r.top - r.h) + '" width="' + f1(w) + '" height="' + f1(r.h * 3) + '"/></clipPath><g clip-path="url(#' + id + ')">' + out.join("") + '</g>'];
  var mid = r.top + r.h / 2 + 3.5;
  out.push(yLabel(r.X(0) - (AXIS.L + AXIS.RAIL) / 2, mid, r.y, "middle"));
  out.push(yLabel(r.X(4) + PULSE_VEL, mid, (sum / n).toFixed(2) + "\u00d7", "end"));
  return out.join("");
}
function stripPaper(L: number, R: number, T: number, B: number, h: number){
  var m = (R - L) / 20, minor: string[] = [], major: string[] = [];
  var rules: string[] = [];
  for (var k = 0; k <= 20; k++) if (k % 5) minor.push("M" + f1(L + k * m) + "," + f1(T) + "V" + f1(B)); else rules.push(vGrid(L + k * m, T, B));
  for (var top = T; top < B - 0.5; top += h){
    major.push("M" + f1(L) + "," + f1(top) + "H" + f1(R));
    for (var y = top + m; y < top + h - 1; y += m) minor.push("M" + f1(L) + "," + f1(y) + "H" + f1(R));
  }
  major.push("M" + f1(L) + "," + f1(B) + "H" + f1(R));
  return '<path class="ekg-minor" d="' + minor.join("") + '"/><path class="ekg-major" d="' + major.join("") + '"/>' + rules.join("");
}
export function pulseStripsChart(Wpx: number, from: number, to?: number | null){
  from = from || 0;
  var F = histFrame(Wpx), L = F.L, R = F.R - PULSE_VEL, T = F.T - AXIS.LEG, B = F.B, end = to == null ? m2vHistory.length : to;
  var y0 = M2V_FROM_YEAR + Math.floor(from / 4), y1 = M2V_FROM_YEAR + Math.floor((end - 1) / 4), rows = y1 - y0 + 1, h = (B - T) / rows;
  var X = function(q: number){ return L + (R - L) * q / 4; }, out: string[] = [];
  out.push(chartAxes({ ticks:[], y:function(){ return B; }, x0:L, x1:F.R, base:B, top:(T - AXIS.READ), bot:B, fmt:String }));
  out.push(stripPaper(L, R, T, B, h));
  ["Q1", "Q2", "Q3", "Q4"].forEach(function(t, q){ out.push(xLabel(f1((X(q) + X(q + 1)) / 2), t, B + 17)); });
  for (var y = y0; y <= y1; y++) out.push(stripRow({ y:y, top:T + h * (y - y0), h:h, from:from, end:end, X:X }));
  var cell = function(i: number){ var k = from + i; return { row:Math.floor(k / 4) + M2V_FROM_YEAR - y0, q:k % 4 }; };
  publishGeom("pulseStripsChart", { L:L, R:R, T:T, B:B, W:F.W, n:end - from,
    at:function(d: unknown, i: number){ var g = m2Yoy[from + i]; return qAtIndex(M2V_FROM_YEAR, from + i) + (g == null ? "" : " \u00b7 M2 " + fmtSigned(g, 1) + "%"); },
    fmt:function(v: number){ return v.toFixed(3) + "\u00d7"; },
    xOf:function(i: number){ return (X(cell(i).q) + X(cell(i).q + 1)) / 2; },
    pick:function(x: number, yy: number){
      var row = Math.floor((yy - T) / h), q = Math.floor((x - L) / (R - L) * 4), i = (y0 + row - M2V_FROM_YEAR) * 4 + q - from;
      return row < 0 || row >= rows || q < 0 || q > 3 || i < 0 || i >= end - from ? null : i;
    },
    vals:m2vHistory.slice(from, end).map(function(v: number){ return { v:v }; }) });
  return vhOpen(F.W, F.H) + 'aria-label="Money velocity\u2019s heartbeat, one strip per year from ' + y0 + ' to ' + y1 +
    ', ' + PULSE_BEATS + ' beats for each turnover of the money stock, so the beats sit further apart in slower years, each as tall as the money stock grew and upside down when it shrank; ' +
    'a quarter whose fall was far out of the record flatlines">' + out.join("") + '</svg>';
}
export function stripsInfo(){
  var f = pulseFences(), pct = function(v: number){ return (v > 0 ? "+" : "\u2212") + Math.abs(v).toFixed(2) + "%"; };
  var flats: string[] = [];
  for (var i = 1; i < m2vHistory.length; i++) if (pulseBeat(i) === "flat") flats.push(qAtIndex(M2V_FROM_YEAR, i));
  return '<p class="caption follow"><b>The history is an EKG strip for each year</b>, its quarters across. A beat is a fifth of one turnover of the money stock, ' +
    'so a year at 1.4\u00d7 carries 7 beats and the gaps widen as money slows; the figure at the end of each strip is that year\u2019s average velocity. ' +
    'Five beats a turnover is Claude\u2019s choice, made for legibility (Keren found ten too crowded).</p>' +
    '<p class="caption follow"><b>A beat\u2019s height is the money stock\u2019s growth</b>, the stroke volume behind each turnover: M2 against a year earlier, ' +
    'full height at ' + M2_FLOOD.toFixed(1) + '%, where Volume starts to read Flooding, and no higher. A shrinking stock beats upside down, as in 2023. ' +
    M2V_FROM_YEAR + ' has no year-earlier stock and beats at half height in grey.</p>' +
    '<p class="caption follow"><b>A red quarter moved past Tukey\u2019s outlier fence</b> (1.5 times the interquartile range) of every quarterly change since ' +
    M2V_FROM_YEAR + ', ' + pct(f[1]) + ' or ' + pct(f[2]) + '. <b>A quarter flatlines</b> when its fall passed Tukey\u2019s far-out fence (3 times the range), ' +
    pct(f[0]) + ': ' + flats.join(" and ") + '.</p>';
}
