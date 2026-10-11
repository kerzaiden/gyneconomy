import { learnMore, put, trendBox, trendHead, trendText } from "./dom.ts";
import { dxSys } from "./render-core.ts";
import { bookSvg, weatherSvg } from "./marks.ts";
import { marketCycles, now } from "./data.ts";
import { cycLabel, openCycle } from "./model.ts";
import type { CycleModel } from "./model.ts";
import { categoriesShown, ROSTER_BY } from "./roster.ts";
import { CAT_MARK, IND, riskCard } from "./cycle-analysis.ts";

// ---- Today: the Weather Report and its risk factors; every cycle page: its Cycle Story, read in place ----
var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function dateWords(iso: string){ var d = iso.split("-").map(Number); return (d[2] ? d[2] + " " : "") + MONTH_NAMES[d[1] - 1] + " " + d[0]; }
function riskDoor(t: string, c: Cycle){ return ' data-open="' + IND + '" data-title="Elements" data-ind-cat="" data-ind-tier="' + t + '" data-ind-cycle="' + c.name + '"'; }
function riskFactors(c: Cycle){
  return riskCard(marketCycles.indexOf(c), riskDoor("abnormal", c), "Nothing reads as Risk today.");
}
function prose(t: string){
  return t.replace(/\[([^\]]+)\]\((sheet-[a-z0-9-]+)\)/g, function(_, label: string, id: string){
    var R = ROSTER_BY[id];
    return R ? '<button type="button" class="wr-link" data-open="' + id + '" data-title="' + R.name + '">' + label + '</button>' : label;
  });
}
function edition(){ return dateWords(now.report.asOf); }
function storyOf(c: Cycle){ return c.ongoing ? now.report.story : c.blurb; }
function lead(head: string, by: string){ return '<span class="wr-head">' + head + '</span><span class="wr-by">' + by + '</span>'; }
export function storyCard(m: CycleModel){
  return trendBox(bookSvg(), '<span>' + m.era.name + ' Story <span class="trend-when">\u00b7 ' + cycLabel(m.era).years + '</span></span>',
    trendText(storyOf(m.era), "ai-clamp") + learnMore(' aria-expanded="false" data-story-more="1"', "Read more"));
}
export function wireStory(host: HTMLElement){
  var btn = host.querySelector<HTMLElement>("[data-story-more]"), text = btn && btn.previousElementSibling as HTMLElement | null;
  if (!btn || !text) return;
  var b = btn, t = text, open = false;
  function fit(){ if (!open && t.clientHeight) b.hidden = t.scrollHeight <= t.clientHeight + 1; }
  b.addEventListener("click", function(){
    open = !open;
    t.classList.toggle("ai-clamp", !open);
    b.setAttribute("aria-expanded", String(open));
    b.textContent = open ? "Read less" : "Read more";
  });
  fit();
  if (typeof ResizeObserver === "function") new ResizeObserver(fit).observe(t);
}
function elements(){
  return dxSys(" wr-els", categoriesShown().map(function(c){
    var t = now.report.elements[c.key];
    return t ? '<div class="wr-el">' + trendHead(CAT_MARK[c.key](), c.title, "") + trendText(prose(t)) + '</div>' : "";
  }).join(""));
}
function todayHtml(){
  var r = now.report, c = openCycle();
  return trendBox(weatherSvg(), "Weather Report", lead(r.headline, edition()) + trendText(r.lede)) +
    riskFactors(c) + elements();
}
export function drawToday(){ put("today-home", todayHtml()); }
