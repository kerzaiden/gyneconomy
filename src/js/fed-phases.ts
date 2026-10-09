import { discountHistory, fedFundsHistory, fedMoves } from "./history-fred.ts";
import { now } from "./data.ts";
import { inflationHistory } from "./refresh-season.ts";
import { cpiDirectionAt, cycleModel, nowModel } from "./model.ts";
import { isoDay, monthLabel } from "./format.ts";
import { learnMore } from "./dom.ts";
import { orbitSvg } from "./marks.ts";
import { dxHead, dxSys } from "./render-core.ts";
import { tabBar } from "./history.ts";
import { ROSTER_BY } from "./roster.ts";
import { monthIdx, waveChart, waveLegend } from "./wave-chart.ts";
import type { CycleModel } from "./model.ts";
import type { WaveBand } from "./wave-chart.ts";

type Phase = { m: string; s: number };

// ---- The Fed's turns and the inflation peak ----
function movesToDate(){
  var moves = fedMoves.slice(), day = isoDay(now.fedFunds.asOf), move = Number(String(now.fedFunds.lastMove).replace("\u2212", "-"));
  var last = moves.length ? moves[moves.length - 1].m : "";
  if (day && move && day.slice(0, 7) > last) moves.push({ m: day.slice(0, 7), v: move });
  return moves;
}
export function fedPhases(){
  var out: Phase[] = [];
  movesToDate().forEach(function(d){ var s = d.v > 0 ? 1 : -1; if (!out.length || out[out.length - 1].s !== s) out.push({ m: d.m, s: s }); });
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

// ---- The Interest Rates card ----
function tightBands(): WaveBand[] {
  var ph = fedPhases();
  return ph.map(function(p, k){ return { s: p.s, from: monthIdx(p.m), to: k + 1 < ph.length ? monthIdx(ph[k + 1].m) : Infinity }; }).filter(function(p){ return p.s > 0; });
}
function rateSeries(toM: string){ return fedFundsHistory.length && toM >= fedFundsHistory[0].m ? fedFundsHistory : discountHistory; }
var LEGEND = waveLegend([{ name: "Easing", kind: "blank" }, { name: "Tightening", kind: "band" }, { name: "Rates", kind: "line", color: "gold" }, { name: "Prices", kind: "line", color: "season-summer" }]);
var PHASES = "When the Fed tightens, it raises rates to cool borrowing and spending, and prices often keep rising until shortly before the last hike. When it eases, it cuts rates to make credit cheap again. Money is only tight while the rate runs above prices.";
function footnoteHtml(m: CycleModel){
  var rate = ROSTER_BY["sheet-sign-hormones"];
  return '<p class="fp-note">' + PHASES + ' ' + learnMore(' data-open="' + rate.id + '" data-title="' + rate.name + '" data-rate-cycle="' + m.era.name + '"') + '</p>';
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
function ratesCard(m: CycleModel, host: string, range: string){
  var toM = endMonthOf(m), to = monthIdx(toM), cycleFrom = monthIdx(m.era.from + "-01"), from = windowFrom(range, cycleFrom, to);
  var series = [{ list: rateSeries(toM), color: "gold", fill: 0.45 }, { list: inflationHistory, color: "season-summer", fill: 0.32, bold: true }];
  return tabBar('data-range-for="' + host + '"', RANGES, range, "data-range", "thin") + waveChart({ series: series, bands: tightBands(), from: from, to: to, open: !!m.ongoing }) + LEGEND + footnoteHtml(m);
}
export function fedEnvironment(m: CycleModel, host: string, range: string){
  return dxSys(" fp", dxHead(orbitSvg(), "Interest Rates") + ratesCard(m, host, range));
}
