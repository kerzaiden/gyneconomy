import AI from "../data/ai-insights.json" with { type: "json" };
import { learnMore, moreDoor, trendBox, trendText } from "./dom.ts";
import { dxHead, dxSys } from "./render-core.ts";
import { bookSvg, diceSvg, sparkleSvg } from "./marks.ts";
import { marketCycles } from "./data.ts";
import type { CycleModel } from "./model.ts";
import { keyed, ROSTER_BY } from "./roster.ts";
import { aiParts, IND, labs, riskLabs } from "./cycle-analysis.ts";

// ---- AI Insights: every cycle's story, its risk factors against their own record, and Claude's dated reading of each element ----
var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function labOf(id: string){ return labs().filter(function(l){ return l.id === id; })[0]; }
function asOfWords(){
  var d = AI.asOf.split("-").map(Number);
  return d[2] + " " + MONTH_NAMES[d[1] - 1] + " " + d[0];
}
function keyWords(k: string){ var m = /^(\d{4})-(\d{2})/.exec(k); return m ? MONTH_NAMES[+m[2] - 1] + " " + m[1] : /^\d{4} Q\d$/.test(k) ? k.slice(5) + " " + k.slice(0, 4) : k; }
function keyYear(k: string){ return +k.slice(0, 4); }
function standing(R: RosterRow, i: number){
  var c = marketCycles[i], l = labOf(R.id), end = c.ongoing ? Infinity : c.to, up = (l.per[i] as number) > (l.norm as { hi: number }).hi;
  var past = function(a: number, b: number){ return up ? a >= b : a <= b; };
  var h = keyed(R.hist).filter(function(d){ return d.v != null && keyYear(d.k) <= end; }) as { k: string; v: number }[];
  var mine = h.filter(function(d){ return keyYear(d.k) >= c.from; });
  var at = c.ongoing ? mine[mine.length - 1] : mine.reduce(function(a, d){ return a && past(a.v, d.v) ? a : d; }, mine[0]);
  var prior = at ? h.slice(0, h.indexOf(at)) : [];
  if (!at || prior.length < 12) return null;
  var beyond = prior.filter(function(d){ return past(d.v, at.v); }), last = beyond[beyond.length - 1];
  var rec = prior.reduce(function(a, d){ return past(a.v, d.v) ? a : d; }), most = up ? "Highest" : "Lowest";
  var words = !last ? most + " on record, which starts in " + keyWords(h[0].k)
    : (keyYear(last.k) <= keyYear(at.k) - 2 ? most + " since " + keyWords(last.k) + "; its" : "Its") + " " + (up ? "high" : "low") + " since " + keyWords(h[0].k) + " is " + l.print(rec.v) + ", in " + keyWords(rec.k);
  return { R:R, v:l.print(at.v), when:keyWords(at.k), words:words, record:!last, to:up ? "to-up" : "to-down" };
}
function riskDoor(t: string){ return ' data-open="' + IND + '" data-title="Elements" data-ind-cat="" data-ind-tier="' + t + '"'; }
export function riskFactors(m: CycleModel){ return dxSys("", dxHead(diceSvg(), "Risk Factors", riskDoor("abnormal")) + risksPic(m)); }
function riskRows(i: number, t: string){
  return riskLabs(i, t).map(function(l){ return ROSTER_BY[l.id]; }).filter(Boolean).map(function(R){ return standing(R, i); })
    .filter(function(x): x is NonNullable<ReturnType<typeof standing>> { return x != null; }).sort(function(a, b){ return Number(b.record) - Number(a.record); })
    .map(function(x){
      return '<button type="button" class="ai-rank ' + x.to + ' t-' + t + '"' + riskDoor(t) + '><span>' + x.R.name + ' <small class="ai-when">' + x.when + '</small></span><b>' + x.v + '<i class="lab-to" aria-hidden="true"></i></b><small>' + x.words + '.</small></button>';
    }).join("");
}
function risksPic(m: CycleModel){
  var i = marketCycles.indexOf(m.era), rows = riskRows(i, "abnormal"), n = riskLabs(i, "borderline").length;
  return '<div class="ai-pic">' + (rows || '<small class="ai-cap">Nothing reads as Risk ' + (m.ongoing ? "today" : "in this cycle") + '.</small>') +
    (n ? moreDoor(riskDoor("borderline"), n + (n > 1 ? " readings need" : " reading needs") + " attention") : "") + '</div>';
}
function byLine(cls: string){ return '<p class="ai-by' + cls + '">Updated ' + asOfWords() + '.</p>'; }
function storyOf(m: CycleModel){ return m.ongoing ? AI.lede : m.era.blurb; }
function clampBody(t: string, by: string){ return trendText(t, "ai-clamp") + by + learnMore(' data-story-more aria-expanded="false"', "Read more"); }
export function storyCard(m: CycleModel){ return trendBox(bookSvg(), "Cycle Story", clampBody(storyOf(m), m.ongoing ? byLine(" story-by") : "")); }
export function elementInsight(cat: string, cycle: string, title: string){
  var t = ((AI.elements as Record<string, Record<string, string>>)[cycle] || {})[cat];
  return t ? trendBox(sparkleSvg(), title + " Insights", clampBody(t, byLine(" story-by"))) : "";
}
export function lendAiParts(){ aiParts.risks = riskFactors; aiParts.insight = elementInsight; }
