// ---- Pulse strips ----
import { AXIS, beatPath, chartAxes, histFrame, publishGeom, vGrid, vhOpen, xLabel, yLabel } from "./charts.ts";
import { M2_FLOOD, M2V_FROM_YEAR, m2vHistory, m2Yoy } from "./data.ts";
import { fmtSigned, qAtIndex, quartile } from "./format.ts";

export var PULSE_BEATS = 5, PULSE_VIEW = 4, PULSE_PEEK = 0.4, PULSE_FENCE = 1.5, PULSE_FAR = 3, PULSE_GUTTER = 10;
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
type StripRow = { y: number; top: number; h: number; sq: number; from: number; end: number; X: (q: number) => number };
function stripQuarter(r: StripRow, q: number, x: number, limit: number){
  var i = (r.y - M2V_FROM_YEAR) * 4 + q, xa = r.X(q), xb = r.X(q + 1), kind = pulseBeat(i);
  var p = (r.X(4) - r.X(0)) / (PULSE_BEATS * m2vHistory[i]), stroke = pulseStroke(i), amp = Math.min(30, r.sq * 0.5) * r.h / r.sq * (stroke == null ? 0.5 : stroke);
  var cy = r.top + r.h / 2, d: string[] = [];
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
  var lx = r.X(0) - (AXIS.L + PULSE_GUTTER + AXIS.RAIL) / 2, mid = r.top + r.h / 2;
  out.push(yLabel(lx, mid - 2, r.y, "middle", "ps-year"));
  out.push(yLabel(lx, mid + 11, (sum / n).toFixed(2) + "\u00d7", "middle"));
  return out.join("");
}
function stripPaper(L: number, R: number, T: number, B: number, h: number){
  var m = (R - L) / 20, fx = L - AXIS.L - PULSE_GUTTER, minor: string[] = [], major: string[] = [];
  var rules: string[] = [];
  for (var k = 0; k <= 20; k++) if (k % 5) minor.push("M" + f1(L + k * m) + "," + f1(T) + "V" + f1(B)); else rules.push(vGrid(L + k * m, T, B));
  for (var top = T; top < B - 0.5; top += h){
    major.push("M" + f1(fx) + "," + f1(top) + "H" + f1(R));
    for (var d = m / 2; d < h / 2 - 1; d += m) minor.push("M" + f1(L) + "," + f1(top + h / 2 - d) + "H" + f1(R) + "M" + f1(L) + "," + f1(top + h / 2 + d) + "H" + f1(R));
  }
  major.push("M" + f1(fx) + "," + f1(B) + "H" + f1(R));
  return '<path class="ekg-minor" d="' + minor.join("") + '"/><path class="ekg-major" d="' + major.join("") + '"/>' + rules.join("");
}
export var strips = { off:0 };
export function pulseStripsChart(Wpx: number, from: number, to?: number | null){
  from = from || 0;
  var end = to == null ? m2vHistory.length : to, y0 = M2V_FROM_YEAR + Math.floor(from / 4), y1 = M2V_FROM_YEAR + Math.floor((end - 1) / 4), rows = y1 - y0 + 1;
  var F = histFrame(Wpx), sq = (F.R - F.L - PULSE_GUTTER) * 3 / 20, L = F.L + PULSE_GUTTER, R = F.R, T = F.T - AXIS.LEG, B = F.B, h = Math.max(sq, (B - T) / (rows > PULSE_VIEW ? PULSE_VIEW + PULSE_PEEK : rows)), full = rows * h;
  var X = function(q: number){ return L + (R - L) * q / 4; }, out: string[] = [], body: string[] = [stripPaper(L, R, T, T + full, h)];
  strips.off = 0;
  out.push(chartAxes({ ticks:[], y:function(){ return B; }, x0:L, x1:F.R, base:B, top:(T - AXIS.READ), bot:B, fmt:String, gutter:AXIS.L + PULSE_GUTTER }));
  ["Q1", "Q2", "Q3", "Q4"].forEach(function(t, q){ out.push(xLabel(f1((X(q) + X(q + 1)) / 2), t, B + 17)); });
  for (var y = y0; y <= y1; y++) body.push(stripRow({ y:y, top:T + h * (y1 - y), h:h, sq:sq, from:from, end:end, X:X }));
  out.push('<clipPath id="psview"><rect x="0" y="' + f1(T) + '" width="' + F.W + '" height="' + f1(B - T) + '"/></clipPath><g clip-path="url(#psview)"><g class="ps-rows">' + body.join("") + '</g></g>');
  var cell = function(i: number){ return { q:(from + i) % 4 }; };
  publishGeom("pulseStripsChart", { L:L, R:R, T:T, B:B, W:F.W, n:end - from,
    at:function(d: unknown, i: number){ var g = m2Yoy[from + i]; return qAtIndex(M2V_FROM_YEAR, from + i) + (g == null ? "" : " \u00b7 M2 " + fmtSigned(g, 1) + "%"); },
    fmt:function(v: number){ return v.toFixed(3) + "\u00d7"; },
    xOf:function(i: number){ return (X(cell(i).q) + X(cell(i).q + 1)) / 2; },
    pick:function(x: number, yy: number){
      var row = Math.floor((yy + strips.off - T) / h), q = Math.floor((x - L) / (R - L) * 4), i = (y1 - row - M2V_FROM_YEAR) * 4 + q - from;
      return yy < T || yy > B || row < 0 || row >= rows || q < 0 || q > 3 || i < 0 || i >= end - from ? null : i;
    },
    vals:m2vHistory.slice(from, end).map(function(v: number){ return { v:v }; }) });
  return vhOpen(F.W, F.H) + 'data-view="' + f1(T) + ' ' + f1(B - T) + ' ' + f1(full) + ' ' + f1(h) + '" aria-label="Money velocity\u2019s heartbeat, one strip per year from ' + y0 + ' to ' + y1 +
    ', ' + PULSE_BEATS + ' beats for each turnover of the money stock, so the beats sit further apart in slower years, each as tall as the money stock grew and upside down when it shrank; ' +
    'a quarter whose fall was far out of the record flatlines">' + out.join("") + '</svg>';
}
function stripView(svg: SVGSVGElement){
  var v = (svg.getAttribute("data-view") || "").split(" ").map(Number), k = svg.getBoundingClientRect().width / svg.viewBox.baseVal.width;
  return { top:v[0], view:v[1], full:v[2], h:v[3], k:k };
}
function stripScrolled(el: HTMLElement, rows: Element, V: ReturnType<typeof stripView>){
  strips.off = el.scrollTop / V.k;
  rows.setAttribute("transform", "translate(0 " + f1(-strips.off) + ")");
  el.classList.toggle("at-end", el.scrollTop + el.clientHeight >= el.scrollHeight - 1);
}
function stripFollow(el: HTMLElement, svg: SVGSVGElement, V: ReturnType<typeof stripView>){
  var on = svg.querySelector(".hcol.on") as SVGGraphicsElement | null;
  if (!on) return;
  var b = on.getBBox(), top = V.top + Math.floor((b.y + b.height / 2 - V.top) / V.h) * V.h - V.top;
  if (top < strips.off) el.scrollTop = top * V.k; else if (top + V.h > strips.off + V.view) el.scrollTop = (top + V.h - V.view) * V.k;
}
export function stripScroller(box: HTMLElement){
  var svg = box.querySelector("svg.vh-svg") as SVGSVGElement | null, rows = svg && svg.querySelector(".ps-rows"), old = box.querySelector(".ps-scroll");
  if (old) old.remove();
  strips.off = 0;
  if (!svg || !rows) return;
  var V = stripView(svg), el = document.createElement("div"), host = svg.parentElement as HTMLElement;
  if (!(V.full > V.view + 1) || !V.k) return;
  el.className = "ps-scroll";
  el.style.top = f1(svg.getBoundingClientRect().top - host.getBoundingClientRect().top - host.clientTop + V.top * V.k) + "px";
  el.style.height = f1(V.view * V.k) + "px";
  el.innerHTML = '<div style="height:' + f1(V.full * V.k) + 'px"></div><div class="ps-fade"></div>';
  host.appendChild(el);
  el.addEventListener("scroll", function(){ stripScrolled(el, rows as Element, V); });
  box.addEventListener("keydown", function(){ setTimeout(function(){ if (el.isConnected) stripFollow(el, svg as SVGSVGElement, V); }, 0); });
}
export function stripsInfo(){
  var f = pulseFences(), pct = function(v: number){ return (v > 0 ? "+" : "\u2212") + Math.abs(v).toFixed(2) + "%"; };
  var flats: string[] = [];
  for (var i = 1; i < m2vHistory.length; i++) if (pulseBeat(i) === "flat") flats.push(qAtIndex(M2V_FROM_YEAR, i));
  return '<p class="caption follow"><b>The history is an EKG strip for each year</b>, the newest on top and its quarters across. A beat is a fifth of one turnover of the money stock, ' +
    'so a year at 1.4\u00d7 carries 7 beats and the gaps widen as money slows; the figure under each year is its average velocity, in turnovers a year. ' +
    'Five beats a turnover is Claude\u2019s choice, made for legibility (Keren found ten too crowded).</p>' +
    '<p class="caption follow"><b>A beat\u2019s height is the money stock\u2019s growth</b>, the stroke volume behind each turnover: M2 against a year earlier, ' +
    'full height at ' + M2_FLOOD.toFixed(1) + '%, where Volume starts to read Flooding, and no higher. A shrinking stock beats upside down, as in 2023. ' +
    M2V_FROM_YEAR + ' has no year-earlier stock and beats at half height in grey.</p>' +
    '<p class="caption follow"><b>A red quarter moved past Tukey\u2019s outlier fence</b> (1.5 times the interquartile range) of every quarterly change since ' +
    M2V_FROM_YEAR + ', ' + pct(f[1]) + ' or ' + pct(f[2]) + '. <b>A quarter flatlines</b> when its fall passed Tukey\u2019s far-out fence (3 times the range), ' +
    pct(f[0]) + ': ' + flats.join(" and ") + '.</p>';
}
