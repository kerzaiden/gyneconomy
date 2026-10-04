import AI from "../data/ai-insights.json" with { type: "json" };
import { moreRow, trendBox } from "./dom.ts";
import { sparkleSvg } from "./marks.ts";
import { marketCycles } from "./data.ts";
import { cycleModel, moodTrack, QUARTER_END_MONTH, seasonTitle } from "./model.ts";
import { wheelMeta } from "./refresh-season.ts";
import { keyed, ROSTER_BY } from "./roster.ts";
import { fmt, labs, listWords, yearsWord } from "./cycle-analysis.ts";
import type { Lab } from "./cycle-analysis.ts";

// ---- AI Insights: Claude's dated reading of the open cycle, with today's closest past moments ----
type Echo = { q: string; cycle: Cycle; gap: number; then: number[] };

var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var ECHO_FROM = 1970;

function openIdx(){ return marketCycles.findIndex(function(c){ return !!c.ongoing; }); }
function labOf(id: string){ return labs().filter(function(l){ return l.id === id; })[0]; }
function figure(id: string){
  var l = labOf(id), v = l && l.per[openIdx()];
  return v == null ? "—" : l.cat === "cycle" ? yearsWord(v) : fmt(l, v);
}
function fill(text: string){
  var figs = AI.figures as Record<string, string>;
  return text.replace(/\{(\w+)\}/g, function(_, k: string){ return figs[k] ? figure(figs[k]) : "{" + k + "}"; });
}
function quartersOf(k: string){
  var y = k.slice(0, 4);
  if (/ Q\d$/.test(k)) return [k];
  if (k.length === 7) return [y + " Q" + Math.ceil(+k.slice(5) / 3)];
  return ["Q1", "Q2", "Q3", "Q4"].map(function(q){ return y + " " + q; });
}
function quarterly(id: string){
  var sum: Record<string, number> = {}, n: Record<string, number> = {};
  keyed(ROSTER_BY[id].hist).forEach(function(d){
    if (d.v == null) return;
    quartersOf(d.k).forEach(function(q){ sum[q] = (sum[q] || 0) + (d.v as number); n[q] = (n[q] || 0) + 1; });
  });
  var out: Record<string, number> = {};
  for (var q in sum) out[q] = sum[q] / n[q];
  return out;
}
function cycleOfYear(y: number){ return marketCycles.filter(function(c){ return y >= c.from && y <= (c.to || y); })[0]; }
var panelCache: ReturnType<typeof buildPanel> | null = null;
function panel(){ return panelCache || (panelCache = buildPanel()); }
function buildPanel(){
  var ids = AI.echo, series = ids.map(quarterly), open = marketCycles[openIdx()], rows: { q: string; v: number[] }[] = [];
  Object.keys(series[0]).sort().forEach(function(q){
    var v = series.map(function(s){ return s[q]; });
    if (+q.slice(0, 4) >= ECHO_FROM && v.every(function(x){ return x != null; })) rows.push({ q:q, v:v });
  });
  var now = ids.map(function(id){ return labOf(id).per[openIdx()] as number; });
  var scale = ids.map(function(_, i){
    var vs = rows.map(function(r){ return r.v[i]; }), m = vs.reduce(function(a, b){ return a + b; }, 0) / vs.length;
    return { m:m, s:Math.sqrt(vs.reduce(function(a, b){ return a + (b - m) * (b - m); }, 0) / vs.length) };
  });
  return { rows:rows.filter(function(r){ return +r.q.slice(0, 4) < open.from; }), now:now, scale:scale };
}
function zGaps(p: ReturnType<typeof buildPanel>, v: number[]){ return v.map(function(x, i){ return (x - p.now[i]) / p.scale[i].s; }); }
var echoCache: Echo[] | null = null;
export function echoes(){
  if (echoCache) return echoCache;
  var p = panel(), best: Record<string, Echo> = {};
  p.rows.forEach(function(r){
    var g = zGaps(p, r.v), gap = Math.sqrt(g.reduce(function(a, b){ return a + b * b; }, 0) / g.length), c = cycleOfYear(+r.q.slice(0, 4));
    if (c && (!best[c.name] || gap < best[c.name].gap)) best[c.name] = { q:r.q, cycle:c, gap:gap, then:r.v };
  });
  echoCache = Object.keys(best).map(function(k){ return best[k]; }).sort(function(a, b){ return a.gap - b.gap; });
  return echoCache;
}
function thenWords(e: Echo){
  var seg = cycleModel(e.cycle).track.filter(function(s){ return s.q === e.q; })[0];
  var month = e.q.slice(0, 4) + "-" + QUARTER_END_MONTH[e.q.slice(5)];
  var mood = moodTrack().filter(function(x){ return x.m === month; })[0];
  var season = seg ? seasonTitle(wheelMeta[seg.season]) : "";
  return [season, mood && mood.word ? "Mrs. Market in " + mood.word : ""].filter(Boolean).join(", ");
}
function pairWords(l: Lab, then: number, now: number){ return l.name + " (" + fmt(l, then) + " then, " + fmt(l, now) + " now)"; }
function echoLine(e: Echo){
  var p = panel(), g = zGaps(p, e.then), order = g.map(function(x, i){ return i; }).sort(function(a, b){ return Math.abs(g[a]) - Math.abs(g[b]); });
  var say = function(i: number){ return pairWords(labOf(AI.echo[i]), e.then[i], p.now[i]); };
  var then = thenWords(e);
  return '<li class="ai-echo"><span class="ai-echo-when"><b>' + e.q + '</b> · ' + e.cycle.name + '</span>' +
    (then ? '<small>Then: ' + then + '.</small>' : "") +
    '<small>Alike: ' + listWords(order.slice(0, 2).map(say)) + '. Apart: ' + say(order[order.length - 1]) + '.</small></li>';
}
function asOfWords(){
  var d = AI.asOf.split("-").map(Number);
  return d[2] + " " + MONTH_NAMES[d[1] - 1] + " " + d[0];
}
function aiDetail(){
  var p = panel(), list = echoes().slice(0, 8);
  return '<p>' + AI.by + ' wrote this reading from the app’s own data of ' + asOfWords() + '. Every figure in it is read live from the readings, so the numbers move with the data while the words wait for the next release.</p>' +
    '<p>The closest moments are found by matching today’s readings of (' + listWords(AI.echo.map(function(id){ return labOf(id).name; })) + ') against every quarter since ' + ECHO_FROM + ' before this cycle, ' + p.rows.length + ' in all. Each reading is scaled by its own spread over the record, each counts equally, and the quarter with the smallest average gap is the closest; each cycle shows its closest quarter. This is the nearest-neighbour method of analog matching; the choice of readings and the equal weights are Claude’s.</p>' +
    '<p>' + list.map(function(e){ return e.q + ' · ' + e.cycle.name + ': gap ' + e.gap.toFixed(2); }).join('<br>') + '</p>';
}
export function aiInsights(){
  return trendBox(sparkleSvg(), "AI Insights", '<p class="ai-lede">' + fill(AI.lede) + '</p>' +
    AI.sections.map(function(s){ return '<div class="ai-sec"><div class="ai-h">' + s.title + '</div><p class="ai-p">' + fill(s.text) + '</p></div>'; }).join("") +
    '<div class="ai-sec"><div class="ai-h">Closest moments</div><p class="ai-p">' + AI.echoIntro + '</p><ul class="ai-echoes">' + echoes().slice(0, 3).map(echoLine).join("") + '</ul></div>' +
    '<p class="ai-by">Written by ' + AI.by + ' from the app’s data of ' + asOfWords() + '.</p>' + moreRow(aiDetail()));
}
