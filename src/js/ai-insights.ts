import AI from "../data/ai-insights.json" with { type: "json" };
import { learnMore, moreRow, trendBox, trendText } from "./dom.ts";
import { dxHead, dxSys, seasonPills, seasonRuns, seasonRunsLabel, strip } from "./render-core.ts";
import { bookSvg, clockSvg, diceSvg, sparkleSvg } from "./marks.ts";
import { marketCycles } from "./data.ts";
import { cycleModel, cycleOfYear, moodTrack, QUARTER_END_MONTH, rankToDate, seasonTitle } from "./model.ts";
import type { CycleModel, TrackSeg } from "./model.ts";
import { wheelMeta } from "./refresh-season.ts";
import { keyed, ROSTER_BY } from "./roster.ts";
import { aiParts, fmt, labs, listWords, riskLabs } from "./cycle-analysis.ts";
import type { Lab } from "./cycle-analysis.ts";

// ---- AI Insights: every cycle's story, its risk factors, and on the open cycle Claude's dated reading of each element and today's closest past moments ----
var ECHO_WINDOW = 8;
function echoWindowWord(){ return ["four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"][ECHO_WINDOW - 4] || String(ECHO_WINDOW); }
type Echo = { q: string; i: number; cycle: Cycle; gap: number; per: number[]; then: number[] };

var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var ECHO_FROM = 1970;

function openIdx(){ return marketCycles.findIndex(function(c){ return !!c.ongoing; }); }
function labOf(id: string){ return labs().filter(function(l){ return l.id === id; })[0]; }
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
function lastQuarter(id: string){
  return Math.max.apply(null, keyed(ROSTER_BY[id].hist).filter(function(d){ return d.v != null; }).map(function(d){ return d.k.length === 4 ? +d.k * 4 : qIdx(quartersOf(d.k)[0]); }));
}
function qIdx(q: string){ return +q.slice(0, 4) * 4 + +q.slice(6) - 1; }
function qName(i: number){ return Math.floor(i / 4) + " Q" + (i % 4 + 1); }
function carried(s: Record<string, number>, to: number){
  var out: Record<number, number> = {}, last = -1;
  Object.keys(s).forEach(function(q){ out[qIdx(q)] = s[q]; last = Math.max(last, qIdx(q)); });
  for (var i = last + 1; i <= to; i++) out[i] = out[last];
  return out;
}
var panelCache: ReturnType<typeof buildPanel> | null = null;
function panel(){ return panelCache || (panelCache = buildPanel()); }
function buildPanel(){
  var ids = AI.echo, raw = ids.map(quarterly), nowI = Math.max.apply(null, ids.map(lastQuarter));
  var series = raw.map(function(s){ return carried(s, nowI); }), now = ids.map(function(id){ return labOf(id).per[openIdx()] as number; });
  var rows: Record<number, number[]> = {};
  for (var i = ECHO_FROM * 4; i <= nowI; i++){
    var v = i === nowI ? now : series.map(function(s){ return s[i]; });
    if (v.every(function(x){ return x != null; })) rows[i] = v;
  }
  var all = Object.keys(rows).map(function(k){ return rows[+k]; });
  var scale = ids.map(function(_, r){
    var vs = all.map(function(v){ return v[r]; }), m = vs.reduce(function(a, b){ return a + b; }, 0) / vs.length;
    return Math.sqrt(vs.reduce(function(a, b){ return a + (b - m) * (b - m); }, 0) / vs.length);
  });
  return { rows:rows, now:now, nowI:nowI, scale:scale, open:marketCycles[openIdx()].from * 4 };
}
function pathGap(p: ReturnType<typeof buildPanel>, k: number){
  var per = p.scale.map(function(){ return 0; });
  for (var j = 0; j < ECHO_WINDOW; j++){
    var a = p.rows[k - j], b = p.rows[p.nowI - j];
    if (!a || !b) return null;
    a.forEach(function(x, r){ var z = (x - b[r]) / p.scale[r]; per[r] += z * z / ECHO_WINDOW; });
  }
  return { gap:Math.sqrt(per.reduce(function(x, y){ return x + y; }, 0) / per.length), per:per.map(Math.sqrt) };
}
var echoCache: Echo[] | null = null;
export function forgetEchoes(){ panelCache = null; echoCache = null; }
export function echoes(){
  if (echoCache) return echoCache;
  var p = panel(), seen: Echo[] = [];
  Object.keys(p.rows).map(Number).filter(function(k){ return k < p.open; }).map(function(k){
    var g = pathGap(p, k);
    return g && { q:qName(k), i:k, cycle:cycleOfYear(Math.floor(k / 4)), gap:g.gap, per:g.per, then:p.rows[k] };
  }).filter(function(e): e is Echo { return !!e && !!e.cycle; }).sort(function(a, b){ return a.gap - b.gap; }).forEach(function(e){
    if (seen.every(function(s){ return Math.abs(s.i - e.i) >= ECHO_WINDOW; })) seen.push(e);
  });
  echoCache = seen;
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
  var p = panel(), order = e.per.map(function(x, i){ return i; }).sort(function(a, b){ return e.per[a] - e.per[b]; });
  var say = function(i: number){ return pairWords(labOf(AI.echo[i]), e.then[i], p.now[i]); };
  var then = thenWords(e);
  return '<li class="ai-echo"><span class="ai-echo-when"><b>' + e.q + '</b> · ' + e.cycle.name + '</span>' +
    (then ? '<small>Then: ' + then + '.</small>' : "") + pathStrip("Then", e.i) + pathStrip("Now", p.nowI) +
    '<small>Alike: ' + listWords(order.slice(0, 2).map(say)) + '. Apart: ' + say(order[order.length - 1]) + '.</small></li>';
}
function asOfWords(){
  var d = AI.asOf.split("-").map(Number);
  return d[2] + " " + MONTH_NAMES[d[1] - 1] + " " + d[0];
}
function aiDetail(){
  var p = panel(), list = echoes().slice(0, 8), names = listWords(AI.echo.map(function(id){ return labOf(id).name; }));
  return '<p>A moment is matched by how it got here, not by one quarter alone: the last ' + echoWindowWord() + ' quarters of ' + names + ', two years, against every run of ' + echoWindowWord() + ' quarters since ' + ECHO_FROM + ' that ends before this cycle began, ' + Object.keys(p.rows).filter(function(k){ return +k < p.open && pathGap(p, +k); }).length + ' in all. Each reading is scaled by its own spread over the record and each counts equally; the run with the smallest average gap, quarter by quarter, is the closest. Moments closer together than ' + echoWindowWord() + ' quarters are one episode, so each episode shows once, by its closest quarter. This is analog matching on a path (nearest neighbours over a window); the readings, the equal weights and the window are Claude’s choices.</p>' +
    '<p>' + list.map(function(e){ return e.q + ' · ' + e.cycle.name + ': gap ' + e.gap.toFixed(2); }).join('<br>') + '</p>';
}
function rankAt(R: RosterRow, i: number){
  var c = marketCycles[i], end = c.ongoing ? Infinity : c.to;
  var h = keyed(R.hist).filter(function(d){ return d.v != null && +d.k.slice(0, 4) <= end; }).map(function(d){ return d.v as number; });
  return { R:R, pct:c.ongoing ? rankToDate(h.slice(0, -1), h[h.length - 1]) : rankToDate(h, labOf(R.id).per[i]) };
}
function pic(inner: string, cap: string){ return '<div class="ai-pic">' + inner + '<small class="ai-cap">' + cap + '</small></div>'; }
export function riskFactors(m: CycleModel){ return dxSys("", dxHead(diceSvg(), "Risk Factors") + risksPic(m)); }
function risksPic(m: CycleModel){
  var i = marketCycles.indexOf(m.era), when = m.ongoing ? "today" : "in this cycle";
  var risks = riskLabs(i).map(function(l){ return ROSTER_BY[l.id]; }).filter(Boolean);
  var rows = risks.map(function(R){ return rankAt(R, i); }).filter(function(x): x is { R: RosterRow; pct: number } { return x.pct != null; }).sort(function(a, b){ return b.pct - a.pct; });
  return !rows.length ? pic("", "Nothing in Cycle Statistics reads as Risk " + when + ".") : pic(rows.map(function(x){
    return '<div class="ai-rank"><span>' + x.R.name + '</span><span class="ai-track"><i style="left:' + x.pct.toFixed(1) + '%"></i></span><b>' + Math.round(x.pct) + '%</b></div>';
  }).join(""), "Every result Cycle Statistics reads as Risk " + when + ", past a fence of her closed cycles, placed against " + (m.ongoing ? "its own whole record: the share of past readings below it." : "its record to the cycle’s end: the share of readings below it."));
}
var trackCache: Record<string, TrackSeg> | null = null;
function segAt(q: string){
  if (!trackCache){
    var all: Record<string, TrackSeg> = {};
    marketCycles.forEach(function(c){ cycleModel(c).track.forEach(function(seg){ if (!seg.isNow) all[seg.q] = seg; }); });
    trackCache = all;
  }
  return trackCache[q];
}
function pathStrip(label: string, end: number){
  var segs: TrackSeg[] = [];
  for (var i = end - ECHO_WINDOW + 1; i <= end; i++){ var seg = segAt(qName(i)); if (seg) segs.push(seg); }
  var runs = seasonRuns(segs);
  return '<span class="ai-path"><small>' + label + '</small>' + strip("", seasonRunsLabel(runs), seasonPills(runs, true)) + '</span>';
}
function para(html: string){ return '<p class="ai-p">' + html + '</p>'; }
function byLine(cls: string){ return '<p class="ai-by' + cls + '">Written by ' + AI.by + ' from the app’s data of ' + asOfWords() + '.</p>'; }
function storyOf(m: CycleModel){ return m.ongoing ? AI.lede : m.era.blurb; }
export function storyCard(m: CycleModel){
  return trendBox(bookSvg(), "Cycle Story", trendText(storyOf(m), "ai-clamp") + (m.ongoing ? byLine(" story-by") : "") + learnMore(' data-story-more aria-expanded="false"', "Read more"));
}
export function wireStory(host: HTMLElement){
  var btn = host.querySelector<HTMLElement>("[data-story-more]"), text = host.querySelector<HTMLElement>(".ai-clamp"), card = btn && btn.closest<HTMLElement>(".trend-card");
  if (!btn || !text || !card) return;
  var fit = function(){ if ((text as HTMLElement).clientHeight) (btn as HTMLElement).hidden = !((text as HTMLElement).scrollHeight > (text as HTMLElement).clientHeight + 1 || (card as HTMLElement).classList.contains("is-open") || !!(card as HTMLElement).querySelector(".story-by")); };
  fit();
  if (typeof ResizeObserver !== "undefined") new ResizeObserver(fit).observe(text);
  btn.addEventListener("click", function(){
    var open = (card as HTMLElement).classList.toggle("is-open");
    (btn as HTMLElement).textContent = open ? "Read less" : "Read more"; (btn as HTMLElement).setAttribute("aria-expanded", String(open));
  });
}
export function elementInsight(cat: string){
  var t = (AI.elements as Record<string, string>)[cat];
  return t ? trendBox(sparkleSvg(), "AI Insights", para(t) + byLine(" insight-by")) : "";
}
export function closestMoments(){
  return dxSys("", dxHead(clockSvg(), "Closest Moments") + para(AI.echoIntro) + '<ul class="ai-echoes">' + echoes().slice(0, 3).map(echoLine).join("") + '</ul>') + moreRow(aiDetail());
}
export function lendAiParts(){ aiParts.risks = riskFactors; aiParts.moments = closestMoments; aiParts.insight = elementInsight; }
