import { auxStat, hiCard, highlightsHtml, lede, pointLabel } from "./format.ts";
import { addSources, byIdMaybe, put } from "./dom.ts";
import { histBar, histTip } from "./charts.ts";
import { attachHistory, headSigma, histHead, histNote, refitHistory } from "./history.ts";
import { keyed, ROSTER } from "./roster.ts";
import { drawsPage, metricSheet, sheetRenderers, timingPill } from "./render-core.ts";

// ---- One reading: its figure, its words, its page ----
export type Face = { text: string; word: string };
export type History = { chart: (w: number) => string; geom: string; trend: string; wrap?: string; sigma?: string | null; paint?: (box: HTMLElement) => void };
export type Reading = {
  face: () => [string, string];
  info: () => string;
  controls: () => string;
  history: (W: number) => History;
  insight: () => string;
  aside?: () => string;
  asOf?: () => string;
  src?: Src[];
};
export var READING: Record<string, Reading> = {};
export function defineReading(id: string, r: Reading){ READING[id] = r; }
export function readingFor(id: string): Reading {
  var r = READING[id];
  if (!r) throw new Error("no reading declared for " + id);
  return r;
}
export function todayFace(R: RosterRow): Face {
  var f = readingFor(R.id).face();
  return { text:f[0], word:f[1] };
}
function historyHtml(R: RosterRow, h: History, W: number){
  var svg = h.chart(W);
  return '<div class="page-chart">' + histHead(R.hk || R.id) + (h.wrap ? '<div class="' + h.wrap + '">' + svg + '</div>' : svg) +
    h.trend + histTip(R.id + "-tip") + '</div>';
}
function drawReading(R: RosterRow, W?: number){
  var r = readingFor(R.id), w = W || 340, h = r.history(w);
  put(R.id + "-chart", histBar(r.controls()) + historyHtml(R, h, w) + (r.aside ? r.aside() : ""));
  var box = document.querySelector<HTMLElement>("#" + R.id + "-chart .page-chart");
  if (h.paint && box) h.paint(box); else refitHistory(box, h.chart);
  attachHistory(box, R.id + "-tip", h.geom);
  if (h.sigma !== undefined) headSigma(R.hk || R.id, h.sigma);
  paintInsight(R);
}
export function chartShell(id: string, label: string, cls?: string){
  return '<div class="chart-shell" id="' + id + '-shell"><svg id="' + id + '-svg"' + (cls ? ' class="' + cls + '"' : "") + ' role="img" aria-label="' + label + '"></svg></div>';
}
export function paintInsight(R: RosterRow){ put(R.id + "-highlights", readingFor(R.id).insight()); }
export function mountReadings(host: HTMLElement){
  ROSTER.forEach(function(R){
    var r = readingFor(R.id), sheet = metricSheet(R.id);
    sheet.classList.add("cat-" + R.cat);
    sheet.innerHTML = timingPill(R.timing) + '<div id="' + R.id + '-chart"></div><div id="' + R.id + '-highlights"></div>';
    host.appendChild(sheet);
    histNote(R.hk || R.id, r.info);
    drawsPage(R.id, function(W?: number){ drawReading(R, W); });
    paintInsight(R);
    if (r.src) addSources(r.src);
  });
}
export function redrawReading(id: string){
  var d = sheetRenderers[id], host = byIdMaybe("metric-page");
  if (d) d(host && host.clientWidth ? host.clientWidth : 340);
}
// ---- One record, read the same way on every page ----
export type RecordPoint = Point & { v: number; d?: string };
export type RecordWords = { lede: string; fmt: (v: number) => string; mid: number; state?: Tone; band?: [number, number]; line?: string; facts?: string; more?: string };
export function recordPoints(R: RosterRow): RecordPoint[] {
  var h = R.hist as HistSpec;
  if (h.k === "qi" || h.k === "yi") return keyed(h).filter(function(d){ return d.v != null; })
    .map(function(d){ return h.k === "qi" ? { q:d.k, v:d.v as number } : { y:+d.k, v:d.v as number }; });
  return (h.s as RecordPoint[]).filter(function(d){ return d.v != null; });
}
export function recordInsight(h: readonly RecordPoint[], o: RecordWords){
  var last = h[h.length - 1], b = o.band, line = o.line || (b ? "the band at " + o.fmt(b[0]) + "\u2013" + o.fmt(b[1]) : o.mid === 0 ? "zero" : "the line at " + o.fmt(o.mid));
  var side = function(d: RecordPoint){ return b ? (d.v < b[0] ? "below" : d.v > b[1] ? "above" : "inside") : d.v === o.mid ? "on" : d.v > o.mid ? "above" : "below"; };
  var held = function(d: RecordPoint){ return b ? side(d) === "inside" : d.v >= o.mid; }, cross: RecordPoint | null = null;
  var leg = function(d: RecordPoint){ return b ? side(d) : String(d.v >= o.mid); };
  for (var i = h.length - 1; i > 0 && !cross; i--) if (leg(h[i]) !== leg(h[i - 1])) cross = h[i];
  var higher = h.filter(function(d){ return d.v > last.v; }).length, n = h.filter(held).length;
  return highlightsHtml([lede(o.lede),
    hiCard("The Latest Reading", o.state || "", pointLabel(last) + " read " + o.fmt(last.v) + ", " + side(last) + " " + line +
      (cross && side(last) !== "on" ? ", where it has been since " + pointLabel(cross) + "." : ".")),
    hiCard("Against the Record", "", higher + " of its " + h.length + " readings since " + pointLabel(h[0]) + " ran higher, and " + n +
      (b ? " sat inside the band." : " sat at or above the line.")), o.more || ""], o.facts || "");
}
export function indicatorInsight(R: RosterRow, ind: Indicator, fmt: (v: number) => string, more?: string){
  var caption = String(ind.caption || ""), first = ind.shortCaption || (/^[\s\S]*?[.!?](?=\s|$)/.exec(caption) || [caption])[0], band = ind.meter.optimal;
  if (!band || !("from" in band)) throw new Error(R.id + " has no band to read its record against");
  return recordInsight(recordPoints(R), { lede:first, fmt:fmt, mid:R.mid || 0, band:[band.from, band.to], line:"the band at " + band.label,
    state:ind.tag ? ind.tag.state : "", more:more,
    facts:([] as AuxFact[]).concat(ind.facts || [], ind.aux || []).map(auxStat).join("") });
}
