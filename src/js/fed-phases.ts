import { discountHistory, fedFundsHistory, fedMoves } from "./history-fred.ts";
import { now, fedFundsRange } from "./data.ts";
import { inflationHistory } from "./refresh-season.ts";
import { cpiDirectionAt, inflationFigure } from "./model.ts";
import { isoDay, MONTHS_SHORT } from "./format.ts";
import { orbitSvg } from "./marks.ts";
import { dxHead, dxSys } from "./render-core.ts";
import { ROSTER_BY } from "./roster.ts";
import type { CycleModel } from "./model.ts";

type Phase = { m: string; s: number };
type Pt = { i: number; v: number };

// ---- The Fed's phases and the inflation peak ----
function monthIdx(k: string){ return Number(k.slice(0, 4)) * 12 + Number(k.slice(5, 7)) - 1; }
function monthName(k: string){ return MONTHS_SHORT[Number(k.slice(5, 7)) - 1] + " " + k.slice(0, 4); }
export function fedPhases(){
  var out: Phase[] = [];
  function add(m: string, v: number){ var s = v > 0 ? 1 : -1; if (!out.length || out[out.length - 1].s !== s) out.push({ m: m, s: s }); }
  fedMoves.forEach(function(d){ add(d.m, d.v); });
  var day = isoDay(now.fedFunds.asOf), move = Number(String(now.fedFunds.lastMove).replace("−", "-"));
  var last = fedMoves.length ? fedMoves[fedMoves.length - 1].m : "";
  if (day && move && day.slice(0, 7) > last) add(day.slice(0, 7), move);
  return out;
}
function phaseAt(phases: Phase[], m: string){
  var at: Phase | null = null;
  phases.forEach(function(p){ if (p.m <= m) at = p; });
  return at as Phase | null;
}
function topOf(run: MonthPoint[]){ return run.reduce(function(a, b){ return b.v > a.v ? b : a; }).m; }
var runsCache: { key: string; tops: Record<string, string> } | null = null;
function runTops(){
  var last = inflationHistory[inflationHistory.length - 1], key = inflationHistory.length + ":" + (last ? last.m + last.v : "");
  if (!runsCache || runsCache.key !== key) runsCache = { key: key, tops: findRuns() };
  return runsCache.tops;
}
function findRuns(){
  var run: MonthPoint[] = [], tops: Record<string, string> = {};
  function close(){ if (run.length){ var top = topOf(run); run.forEach(function(c){ tops[c.m] = top; }); } run = []; }
  inflationHistory.forEach(function(c){ if (cpiDirectionAt(c.m) === "falling") close(); else run.push(c); });
  close();
  return tops;
}
export function cyclePeak(from: string, to: string){
  var tops = runTops(), months = inflationHistory.filter(function(c){ return c.m >= from && c.m <= to; }), k = 0;
  while (k < months.length - 1 && !(tops[months[k].m] >= from)) k++;
  return months.slice(k).reduce(function(a: MonthPoint | null, b){ return !a || b.v > a.v ? b : a; }, null);
}

// ---- The phases chart ----
var VIEW_W = 1000, VIEW_H = 300, INSET = 18;
function monthPoints(list: MonthPoint[], from: number, to: number){
  var sums: Record<number, number[]> = {};
  list.forEach(function(d){ var i = monthIdx(d.m); if (i >= from && i <= to) (sums[Math.floor(i / 3)] = sums[Math.floor(i / 3)] || []).push(d.v); });
  return Object.keys(sums).map(Number).sort(function(a, b){ return a - b; }).map(function(q){
    return { i: Math.min(Math.max(q * 3 + 1, from), to), v: sums[q].reduce(function(a, b){ return a + b; }, 0) / sums[q].length };
  });
}
function curve(pts: Pt[], x: (i: number) => number, y: (v: number) => number){
  var p = pts.map(function(d){ return [x(d.i), y(d.v)]; });
  if (p.length < 2) return "";
  var d = "M" + p[0][0].toFixed(1) + " " + p[0][1].toFixed(1);
  for (var k = 0; k < p.length - 1; k++){
    var a = p[Math.max(k - 1, 0)], b = p[k], c = p[k + 1], e = p[Math.min(k + 2, p.length - 1)];
    d += " C" + [b[0] + (c[0] - a[0]) / 6, b[1] + (c[1] - a[1]) / 6, c[0] - (e[0] - b[0]) / 6, c[1] - (e[1] - b[1]) / 6, c[0], c[1]].map(function(n){ return n.toFixed(1); }).join(" ");
  }
  return d;
}
function pct(n: number){ return (n * 100).toFixed(2) + "%"; }
function bandsHtml(phases: Phase[], from: number, to: number){
  var span = to - from + 1, bands = "";
  phases.forEach(function(p, k){
    var a = Math.max(monthIdx(p.m), from), b = k + 1 < phases.length ? monthIdx(phases[k + 1].m) : to + 1;
    if (b <= from || a > to) return;
    bands += '<span class="fp-band ' + stanceClass(p) + '" style="left:' + pct((a - from) / span) + ';width:' + pct((Math.min(b, to + 1) - a) / span) + '"></span>';
  });
  return bands;
}
function stanceClass(p: Phase | null){ return p ? (p.s > 0 ? "fp-tight" : "fp-ease") : "fp-quiet"; }
function monthKey(i: number){ return Math.floor(i / 12) + "-" + String(i % 12 + 1).padStart(2, "0"); }
var gradients = 0;
function rateStroke(phases: Phase[], from: number, to: number, id: string){
  var span = to - from + 1, cls = stanceClass(phaseAt(phases, monthKey(from))), stops = '<stop class="' + cls + '" offset="0"/>';
  phases.forEach(function(p){
    var i = monthIdx(p.m), at = ((i - from) / span).toFixed(4);
    if (i <= from || i > to) return;
    stops += '<stop class="' + cls + '" offset="' + at + '"/>';
    cls = stanceClass(p);
    stops += '<stop class="' + cls + '" offset="' + at + '"/>';
  });
  return '<linearGradient id="' + id + '" gradientUnits="userSpaceOnUse" x1="0" x2="' + VIEW_W + '" y1="0" y2="0">' + stops + '<stop class="' + cls + '" offset="1"/></linearGradient>';
}
function yearsHtml(from: number, to: number){
  var span = to - from + 1, y0 = Math.floor(from / 12), y1 = Math.floor(to / 12), step = Math.ceil((y1 - y0 + 1) / 6), out = "";
  for (var y = y0; y <= y1; y += step) out += '<span class="fp-year" style="left:' + pct(Math.max(0, y * 12 - from) / span) + '">' + y + '</span>';
  return out;
}
var TAG_W = 92, TAG_H = 32, TAG_DX = 17, TAG_DY = 8;
function lineYAt(p: number[][], px: number){
  for (var k = 0; k < p.length - 1; k++) if (p[k][0] <= px && px <= p[k + 1][0]) return p[k][1] + (p[k + 1][1] - p[k][1]) * (px - p[k][0]) / ((p[k + 1][0] - p[k][0]) || 1);
  return null;
}
function tagHits(paths: number[][][], x0: number, y0: number){
  if (x0 < 0 || x0 + TAG_W > VIEW_W || y0 < -TAG_H || y0 + TAG_H > VIEW_H) return 99;
  var hits = 0;
  for (var px = x0; px <= x0 + TAG_W; px += 8) paths.forEach(function(p){ var v = lineYAt(p, px); if (v != null && v >= y0 - 6 && v <= y0 + TAG_H + 6) hits++; });
  return hits;
}
function tagSide(paths: number[][][], px: number, py: number){
  var best = { side: "fp-r fp-a", hits: Infinity };
  ["fp-r fp-a", "fp-l fp-a", "fp-r fp-b", "fp-l fp-b"].forEach(function(side){
    var x0 = side.indexOf("fp-r") === 0 ? px + TAG_DX : px - TAG_DX - TAG_W, y0 = side.indexOf("fp-a") > 0 ? py - TAG_DY - TAG_H : py + TAG_DY, hits = tagHits(paths, x0, y0);
    if (hits < best.hits) best = { side: side, hits: hits };
  });
  return best.side;
}
function plotSvg(lines: Pt[][], from: number, to: number, peak: Pt | null, open: boolean, phases: Phase[]){
  var all = ([] as Pt[]).concat.apply([], lines).map(function(p){ return p.v; });
  var lo = Math.min(0, Math.min.apply(null, all)), hi = Math.max.apply(null, all), span = to - from + 1, id = "fp-grad-" + (++gradients);
  var x = function(i: number){ return (i - from + 0.5) / span * VIEW_W; }, y = function(v: number){ return INSET + (VIEW_H - 2 * INSET) * (1 - (v - lo) / ((hi - lo) || 1)); };
  var zero = lo < 0 ? '<line class="fp-zero" x1="0" x2="' + VIEW_W + '" y1="' + y(0).toFixed(1) + '" y2="' + y(0).toFixed(1) + '" vector-effect="non-scaling-stroke"/>' : "";
  var paths = '<path class="fp-line fp-prices" d="' + curve(lines[0], x, y) + '" vector-effect="non-scaling-stroke"/><path class="fp-line fp-rate" style="stroke:url(#' + id + ')" d="' + curve(lines[1], x, y) + '" vector-effect="non-scaling-stroke"/>';
  var at = peak ? 'left:' + pct(x(peak.i) / VIEW_W) + ';top:' + pct(y(peak.v) / VIEW_H) : "";
  var side = peak ? tagSide(lines.map(function(l){ return l.map(function(d){ return [x(d.i), y(d.v)]; }); }), x(peak.i), y(peak.v)) : "";
  var dot = peak ? '<span class="fp-ov' + (open ? " fp-open" : "") + '" style="' + at + '"></span><span class="fp-ov-tag ' + side + '" style="' + at + '">Peak</span>' : "";
  return '<svg viewBox="0 0 ' + VIEW_W + ' ' + VIEW_H + '" preserveAspectRatio="none" aria-hidden="true"><defs>' + rateStroke(phases, from, to, id) + '</defs>' + zero + paths + '</svg>' + dot;
}
function level(cls: string, name: string, state: string, value: string){ return '<li class="' + cls + '"><b>' + name + '</b><span class="fp-state">' + state + '</span><span class="fp-val">' + value + '</span></li>'; }
function rateSeries(toM: string){ return fedFundsHistory.length && toM >= fedFundsHistory[0].m ? fedFundsHistory : discountHistory; }
function rateAt(m: CycleModel, toM: string){
  if (m.ongoing) return fedFundsRange();
  var upTo = rateSeries(toM).filter(function(d){ return d.m <= toM; });
  return upTo.length ? upTo[upTo.length - 1].v.toFixed(2) + "%" : "";
}
function levelsHtml(m: CycleModel, at: Phase | null, peak: MonthPoint | null, toM: string){
  var r = m.reading, rate = rateAt(m, toM);
  var trend = r.cpiDirection === "rising" ? "Rising" : r.cpiDirection === "falling" ? "Falling" : "Steady";
  return '<ul class="fp-levels">' + (at && rate ? level("fp-rate " + stanceClass(at), rateSeries(toM) === fedFundsHistory ? "Fed funds rate" : "Discount rate", at.s > 0 ? "Tightening" : "Easing", rate) : "") +
    level("fp-prices", "Prices", trend, inflationFigure(r.cpiNow) + "%") +
    (peak ? level("fp-prices fp-peak" + (m.ongoing ? " fp-so-far" : ""), m.ongoing ? "Peak (so far)" : "Peak", monthName(peak.m), peak.v.toFixed(1) + "%") : "") + '</ul>';
}
function endMonthOf(m: CycleModel){
  if (!m.ongoing) return m.endMonth;
  var ff = fedFundsHistory[fedFundsHistory.length - 1];
  return ff && ff.m > m.endMonth ? ff.m : m.endMonth;
}
function fedPhasesCard(m: CycleModel){
  var fromM = m.era.from + "-01", toM = endMonthOf(m), from = monthIdx(fromM), to = monthIdx(toM), phases = fedPhases();
  var peak = cyclePeak(fromM, toM), at = phaseAt(phases, toM);
  var lines = [monthPoints(inflationHistory, from, to), monthPoints(rateSeries(toM), from, to)];
  var top = peak ? lines[0].filter(function(p){ return Math.floor(p.i / 3) === Math.floor(monthIdx((peak as MonthPoint).m) / 3); })[0] || null : null;
  return '<div class="fp-plot">' + bandsHtml(phases, from, to) + plotSvg(lines, from, to, top, !!m.ongoing, phases) + '</div><div class="fp-years">' + yearsHtml(from, to) + '</div>' + levelsHtml(m, at, peak, toM);
}
export function fedEnvironment(m: CycleModel){
  var rate = ROSTER_BY["sheet-sign-hormones"];
  return dxSys(" fp", dxHead(orbitSvg(), "Interest Rates Environment", ' data-open="' + rate.id + '" data-title="' + rate.name + '"') + fedPhasesCard(m));
}
