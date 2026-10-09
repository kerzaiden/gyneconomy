import { fedFundsHistory, fedMoves } from "./history-fred.ts";
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
  var span = to - from + 1, bands = "", labels = "";
  phases.forEach(function(p, k){
    var a = Math.max(monthIdx(p.m), from), b = k + 1 < phases.length ? monthIdx(phases[k + 1].m) : to + 1;
    if (b <= from || a > to) return;
    var cls = p.s > 0 ? "fp-tight" : "fp-ease", word = p.s > 0 ? "Tightening" : "Easing", w = (Math.min(b, to + 1) - a) / span;
    bands += '<span class="fp-band ' + cls + '" style="left:' + pct((a - from) / span) + ';width:' + pct(w) + '"></span>';
    if (w >= 0.18) labels += '<span class="fp-ph ' + cls + '" style="left:' + pct((a - from) / span + w / 2) + '">' + word + '</span>';
  });
  return { bands: bands, labels: labels };
}
function yearsHtml(from: number, to: number){
  var span = to - from + 1, y0 = Math.floor(from / 12), y1 = Math.floor(to / 12), step = Math.ceil((y1 - y0 + 1) / 6), out = "";
  for (var y = y0; y <= y1; y += step) out += '<span class="fp-year" style="left:' + pct(Math.max(0, y * 12 - from) / span) + '">' + y + '</span>';
  return out;
}
function plotSvg(lines: Pt[][], from: number, to: number, peak: Pt | null, open: boolean){
  var all = ([] as Pt[]).concat.apply([], lines).map(function(p){ return p.v; });
  var lo = Math.min(0, Math.min.apply(null, all)), hi = Math.max.apply(null, all), span = to - from + 1;
  var x = function(i: number){ return (i - from + 0.5) / span * VIEW_W; }, y = function(v: number){ return INSET + (VIEW_H - 2 * INSET) * (1 - (v - lo) / ((hi - lo) || 1)); };
  var zero = lo < 0 ? '<line class="fp-zero" x1="0" x2="' + VIEW_W + '" y1="' + y(0).toFixed(1) + '" y2="' + y(0).toFixed(1) + '" vector-effect="non-scaling-stroke"/>' : "";
  var mark = peak ? '<line class="fp-ov-line" x1="' + x(peak.i).toFixed(1) + '" x2="' + x(peak.i).toFixed(1) + '" y1="0" y2="' + y(peak.v).toFixed(1) + '" vector-effect="non-scaling-stroke"/>' : "";
  var paths = ["fp-prices", "fp-rate"].map(function(cls, k){ return '<path class="fp-line ' + cls + '" d="' + curve(lines[k], x, y) + '" vector-effect="non-scaling-stroke"/>'; }).join("");
  var dot = peak ? '<span class="fp-ov' + (open ? " fp-open" : "") + '" style="left:' + pct(x(peak.i) / VIEW_W) + ';top:' + pct(y(peak.v) / VIEW_H) + '"></span>' : "";
  return '<svg viewBox="0 0 ' + VIEW_W + ' ' + VIEW_H + '" preserveAspectRatio="none" aria-hidden="true">' + zero + mark + paths + '</svg>' + dot;
}
function level(cls: string, name: string, state: string, value: string){ return '<li class="' + cls + '"><b>' + name + '</b><span class="fp-state">' + state + '</span><span class="fp-val">' + value + '</span></li>'; }
function rateAt(m: CycleModel, toM: string){
  if (m.ongoing) return fedFundsRange();
  var upTo = fedFundsHistory.filter(function(d){ return d.m <= toM; });
  return upTo.length ? upTo[upTo.length - 1].v.toFixed(2) + "%" : "";
}
function levelsHtml(m: CycleModel, at: Phase | null, peak: MonthPoint | null, toM: string){
  var r = m.reading, rate = rateAt(m, toM);
  var trend = r.cpiDirection === "rising" ? "Rising" : r.cpiDirection === "falling" ? "Falling" : "Steady";
  return '<ul class="fp-levels">' + (at && rate ? level("fp-rate", "Fed funds rate", at.s > 0 ? "Tightening" : "Easing", rate) : "") +
    level("fp-prices", "Prices", trend, inflationFigure(r.cpiNow) + "%") +
    (peak ? level("fp-prices fp-peak" + (m.ongoing ? " fp-so-far" : ""), m.ongoing ? "Peak (so far)" : "Peak", monthName(peak.m), peak.v.toFixed(1) + "%") : "") + '</ul>';
}
function endMonthOf(m: CycleModel){
  if (!m.ongoing) return m.endMonth;
  var ff = fedFundsHistory[fedFundsHistory.length - 1];
  return ff && ff.m > m.endMonth ? ff.m : m.endMonth;
}
function peakLabel(at: number){
  return '<span class="fp-ov-label' + (at > 0.92 ? " fp-end" : at < 0.08 ? " fp-start" : "") + '" style="left:' + pct(at) + '">Peak</span>';
}
function fedPhasesCard(m: CycleModel){
  var fromM = m.era.from + "-01", toM = endMonthOf(m), from = monthIdx(fromM), to = monthIdx(toM), phases = fedPhases();
  var peak = cyclePeak(fromM, toM), b = bandsHtml(phases, from, to), at = phaseAt(phases, toM);
  var lines = [monthPoints(inflationHistory, from, to), monthPoints(fedFundsHistory, from, to)];
  var top = peak ? lines[0].filter(function(p){ return Math.floor(p.i / 3) === Math.floor(monthIdx((peak as MonthPoint).m) / 3); })[0] || null : null;
  var ov = top ? peakLabel((top.i - from + 0.5) / (to - from + 1)) : "";
  return (ov ? '<div class="fp-marks">' + ov + '</div>' : "") + '<div class="fp-plot">' + b.bands + plotSvg(lines, from, to, top, !!m.ongoing) + '</div><div class="fp-years">' + yearsHtml(from, to) + '</div>' +
    '<div class="fp-phases">' + b.labels + '</div>' + levelsHtml(m, at, peak, toM);
}
export function fedEnvironment(m: CycleModel){
  var rate = ROSTER_BY["sheet-sign-hormones"];
  return dxSys(" fp", dxHead(orbitSvg(), "Interest Rates Environment", ' data-open="' + rate.id + '" data-title="' + rate.name + '"') + fedPhasesCard(m));
}
