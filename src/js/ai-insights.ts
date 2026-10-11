import { byIdMaybe, learnMore, need, put, trendBox, trendDoor, trendHead, trendText } from "./dom.ts";
import { dxSys, metricSheet, sheetRenderers } from "./render-core.ts";
import { bookSvg, weatherSvg } from "./marks.ts";
import { marketCycles, now } from "./data.ts";
import { cycLabel, cycleByName, openCycle } from "./model.ts";
import type { CycleModel } from "./model.ts";
import { categoriesShown, ROSTER_BY } from "./roster.ts";
import { CAT_MARK, IND, riskCard } from "./cycle-analysis.ts";

// ---- Today: the Weather Report and the cycle's story; every cycle page: its Cycle Story and its risk factors against their own record ----
export var STORY_ID = "sheet-story";
var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var shown = { cycle:"" };
function dateWords(iso: string){ var d = iso.split("-").map(Number); return (d[2] ? d[2] + " " : "") + MONTH_NAMES[d[1] - 1] + " " + d[0]; }
function riskDoor(t: string, c: Cycle){ return ' data-open="' + IND + '" data-title="Elements" data-ind-cat="" data-ind-tier="' + t + '" data-ind-cycle="' + c.name + '"'; }
function riskFactors(c: Cycle){
  return riskCard(marketCycles.indexOf(c), riskDoor("abnormal", c), "Nothing reads as Risk " + (c.ongoing ? "today" : "in this cycle") + ".");
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
  return trendDoor(STORY_ID, "Cycle Story", bookSvg(), "Cycle Story",
    lead(m.era.name, cycLabel(m.era).years) +
    trendText(storyOf(m.era), "ai-clamp") + learnMore(undefined, "Read the story"), ' data-story-cycle="' + m.era.name + '"');
}
function elements(){
  return dxSys(" wr-els", categoriesShown().map(function(c){
    var t = now.report.elements[c.key];
    return t ? '<div class="wr-el">' + trendHead(CAT_MARK[c.key](), c.title, "") + trendText(prose(t)) + '</div>' : "";
  }).join(""));
}
function storyBox(c: Cycle){ return trendBox(bookSvg(), "Cycle Story", trendText(storyOf(c))); }
function todayHtml(){
  var r = now.report, c = openCycle();
  return trendBox(weatherSvg(), "Weather Report", lead(r.headline, edition()) + trendText(r.lede)) +
    riskFactors(c) + elements();
}
function storyHtml(c: Cycle){ return dxSys(" wr-top", '<h2 class="wr-title">' + c.name + '</h2><p class="wr-date">' + cycLabel(c).years + '</p>') + riskFactors(c) + storyBox(c); }
export function drawToday(){ put("today-home", todayHtml()); }
function drawStory(){ put(STORY_ID + "-body", storyHtml(cycleByName(shown.cycle) || openCycle())); }
export function redrawReport(){ drawToday(); var s = byIdMaybe(STORY_ID); if (s && !s.hidden) drawStory(); }
function pickStory(e: Event){
  var b = (e.target as Element).closest && (e.target as Element).closest("[data-story-cycle]");
  if (b) shown.cycle = b.getAttribute("data-story-cycle") || "";
}
export function mountReport(){
  var sheet = metricSheet(STORY_ID);
  sheet.innerHTML = '<div class="wr-page" id="' + STORY_ID + '-body"></div>';
  need("panel-cycle").appendChild(sheet);
  sheetRenderers[STORY_ID] = drawStory;
  document.addEventListener("click", pickStory, true);
  drawToday();
}
