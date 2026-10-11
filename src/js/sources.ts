import { allSources, detailTexts } from "./dom.ts";
import { CLOCK_SRC, FED_TARGET_SRC, FENCE_SRC, gdpSrc, typicalCycleSrc } from "./data.ts";
import { categoriesShown, ROSTER } from "./roster.ts";
import { READING } from "./reading.ts";
import { indOf } from "./readings.ts";
import { catInsight } from "./insights.ts";
import { DIAG_SRC } from "./diagnosis.ts";
import { WEATHER_SRC } from "./portfolio.ts";
import { SD_SRC } from "./cycle-analysis.ts";

// ---- The Sources screen: each reading's own citations, by category and subcategory, then the model's ----
export type Shelf = { title: string; src: Src[] };
export var FRAMEWORK_SRC: Src[] = [
  {t:"Conference Board — Leading Economic Index components", u:"https://www.conference-board.org/topics/us-leading-indicators"},
  {t:"Schularick & Taylor — Credit Booms Gone Bust (NBER w15512)", u:"https://www.nber.org/papers/w15512"},
  {t:"StatPearls — Fertility Awareness-Based Methods (NCBI)", u:"https://www.ncbi.nlm.nih.gov/books/NBK546666/"}
];
function cited(html: string, seen?: Record<string, boolean>): Src[] {
  var out: Src[] = [], open = seen || {}, m: RegExpExecArray | null;
  var link = /<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, more = /data-detail-idx="(\d+)"/g;
  while ((m = link.exec(html))) out.push({ t:m[2], u:m[1].replace(/&amp;/g, "&") });
  while ((m = more.exec(html))) if (!open[m[1]]){ open[m[1]] = true; out = out.concat(cited(detailTexts[+m[1]] || "", open)); }
  return out;
}
function readingSources(R: RosterRow): Src[] {
  var r = READING[R.id], ind = R.term ? indOf(R) : undefined;
  return (r && r.src || []).concat(ind && ind.src || [], R.src || [],
    r ? cited(r.info() + r.insight() + (r.aside ? r.aside() : "")) : []);
}
function readingShelves(): Shelf[] {
  var out: Shelf[] = [];
  categoriesShown().forEach(function(c){
    out.push({ title:c.title, src:cited(catInsight(c.key)) });
    ROSTER.filter(function(R){ return R.cat === c.key; }).forEach(function(R){
      var last = out[out.length - 1], title = c.title + " · " + R.sub;
      if (last.title !== title) out.push(last = { title:title, src:[] });
      last.src = last.src.concat(readingSources(R));
    });
  });
  return out;
}
function modelShelves(): Shelf[] {
  return [
    { title:"The Season Model", src:[CLOCK_SRC[0], FED_TARGET_SRC].concat(gdpSrc) },
    { title:"Cycles", src:typicalCycleSrc.concat(DIAG_SRC) },
    { title:"Portfolio", src:WEATHER_SRC.concat(CLOCK_SRC) },
    { title:"The Framework", src:FRAMEWORK_SRC },
    { title:"Methods", src:[FENCE_SRC, SD_SRC] }
  ];
}
export function sourceShelves(): Shelf[] {
  var seen: Record<string, boolean> = {}, shelves = readingShelves().concat(modelShelves(), [{ title:"Other", src:allSources }]);
  return shelves.map(function(s){
    return { title:s.title, src:s.src.filter(function(x){ if (!x || !x.u || seen[x.u]) return false; seen[x.u] = true; return true; }) };
  }).filter(function(s){ return s.src.length > 0; });
}
