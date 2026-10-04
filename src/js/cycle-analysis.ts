import { CHEV, facts, srcBlock } from "./format.ts";
import { byId, moreRow, trendDoor, trendText, ui } from "./dom.ts";
import { cycleControls, page, pageCycle, tabBar } from "./history.ts";
import { boltSvg, calendarSvg, chartSvg, circulationSvg, moodSvg, weatherSvg } from "./marks.ts";
import { histBar } from "./charts.ts";
import { catHeadCard, metricSheet, sheetRenderers } from "./render-core.ts";
import { marketCycles, sp500AnnualReturns } from "./data.ts";
import { cycleModel } from "./model.ts";
import { categoriesShown, keyed, ROSTER } from "./roster.ts";
import type { CycleModel } from "./model.ts";

// ---- Her chart: every reading, cycle by cycle, against her own normal ranges ----
type Norm = { lo: number; hi: number; fence: number; floor: number };
type Lab = { id: string; name: string; cat: string; unit: string; per: (number | null)[]; norm: Norm | null; now: Norm | null };
type Visit = { years: number; bull: number; bleed: number };

var NUM = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
var FENCE_SRC: Src = { t:"NIST/SEMATECH e-Handbook of Statistical Methods — What are outliers in the data? (Tukey’s fences)", u:"https://www.itl.nist.gov/div898/handbook/prc/section1/prc16.htm" };

function quartile(vs: number[], p: number){
  var s = vs.slice().sort(function(a, b){ return a - b; }), i = (s.length - 1) * p, lo = Math.floor(i);
  return s[lo] + (s[Math.ceil(i)] - s[lo]) * (i - lo);
}
function normOf(vs: number[]): Norm | null {
  if (vs.length < 2) return null;
  var lo = quartile(vs, 0.25), hi = quartile(vs, 0.75);
  return { lo:lo, hi:hi, fence:hi + 1.5 * (hi - lo), floor:lo - 1.5 * (hi - lo) };
}
function closedCount(){ return marketCycles.filter(function(c){ return !c.ongoing; }).length; }
function visitOf(m: CycleModel): Visit {
  var c = m.era, signs: boolean[] = [], bleed = 0;
  for (var y = c.from; y <= m.endYear; y++) if (sp500AnnualReturns[y] != null) signs.push(sp500AnnualReturns[y] >= 0);
  while (bleed < signs.length && !signs[signs.length - 1 - bleed]) bleed++;
  return { years:m.elapsedYears, bull:signs.filter(Boolean).length, bleed:bleed };
}
var visitCache: Visit[] | null = null;
function visits(){ return visitCache || (visitCache = marketCycles.map(function(c){ return visitOf(cycleModel(c)); })); }
function cycleLab(id: string, name: string, f: (v: Visit) => number): Lab {
  var per = visits().map(f);
  return { id:id, name:name, cat:"cycle", unit:" yr", per:per, norm:normOf(per.slice(0, closedCount())), now:null };
}
function cycleReadings(R: RosterRow){
  var h = keyed(R.hist).filter(function(d){ return d.v != null; }), first = +h[0].k.slice(0, 4);
  return marketCycles.map(function(c){
    return first > c.from ? [] : h.filter(function(d){ var y = +d.k.slice(0, 4); return y >= c.from && (c.ongoing || y <= c.to); }).map(function(d){ return d.v as number; });
  });
}
function readingsNorm(seen: number[][]){
  return normOf(([] as number[]).concat.apply([], seen.slice(0, closedCount())));
}
function readingLab(R: RosterRow): Lab {
  var seen = cycleReadings(R), open = function(i: number){ return !!marketCycles[i].ongoing; };
  var per = seen.map(function(vs, i){ return !vs.length ? null : open(i) ? vs[vs.length - 1] : vs.reduce(function(a, b){ return a + b; }, 0) / vs.length; });
  var unit = /velocity|index|CAPE/.test(R.cardUnit || "") ? "" : "%";
  return { id:R.id, name:R.name, cat:R.cat, unit:unit, per:per, now:readingsNorm(seen),
    norm:normOf(per.slice(0, closedCount()).filter(function(v): v is number { return v != null; })) };
}
var labCache: Lab[] | null = null;
function labs(){
  return labCache || (labCache = [
    cycleLab("length", "Length", function(v){ return v.years; }),
    cycleLab("bull", "Bull years", function(v){ return v.bull; }),
    cycleLab("bleed", "Bleed", function(v){ return v.bleed; })
  ].concat(ROSTER.map(readingLab)));
}
function normAt(l: Lab, i: number){ return marketCycles[i].ongoing && l.now ? l.now : l.norm; }
function state(l: Lab, i: number){
  var v = l.per[i], n = normAt(l, i);
  if (v == null || !n || l.cat === "cycle" && marketCycles[i].ongoing) return "";
  return v > n.fence ? "high" : v < n.floor ? "low" : "";
}
function yearsWord(v: number){ var q = Math.round(v * 4); return (Math.floor(q / 4) || q % 4 === 0 ? String(Math.floor(q / 4)) : "") + ["", "¼", "½", "¾"][q % 4]; }
function fmt(l: Lab, v: number){
  var a = Math.abs(v), dp = a >= 100 ? 0 : !l.unit && a < 3 ? 2 : 1;
  return l.cat === "cycle" ? yearsWord(v) + l.unit : (v < 0 ? "−" : "") + a.toFixed(dp) + l.unit;
}
var TIERS = [{ key:"abnormal", title:"Risk", cls:"t-abnormal" }, { key:"borderline", title:"Attention", cls:"t-borderline" }, { key:"optimal", title:"Normal", cls:"t-optimal" }];
function tier(l: Lab, i: number){
  var v = l.per[i] as number, n = normAt(l, i) as Norm;
  return state(l, i) ? "abnormal" : v > n.hi || v < n.lo ? "borderline" : "optimal";
}
function catTitle(key: string){ return key === "cycle" ? "Cycle" : categoriesShown().filter(function(c){ return c.key === key; })[0].title; }
function where(l: Lab, i: number){
  var v = l.per[i] as number, n = normAt(l, i) as Norm, side = v > n.hi ? "above" : v < n.lo ? "below" : "";
  return !side ? "In range" : state(l, i) ? "Far " + side + " range" : cap(side) + " range";
}
function side(l: Lab, i: number){ var v = l.per[i] as number, n = normAt(l, i) as Norm; return v > n.hi ? "to-up" : v < n.lo ? "to-down" : "to-level"; }
function labItem(l: Lab, i: number){
  var n = normAt(l, i) as Norm;
  return '<li class="lab-item ' + side(l, i) + ' ' + TIERS.filter(function(t){ return t.key === tier(l, i); })[0].cls + '"><div><b>' + l.name + '</b><small class="lab-where">' + where(l, i) + '</small></div>' +
    '<div class="lab-res"><b>' + fmt(l, l.per[i] as number) + '</b>' +
    '<small>' + (fmt(l, n.lo) === fmt(l, n.hi) ? fmt(l, n.lo) : fmt(l, n.lo) + " – " + fmt(l, n.hi)) + '</small></div></li>';
}
function ring(v: number){
  var r = 21, c = 2 * Math.PI * r;
  return '<svg class="lab-ring" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="' + r + '"/><circle class="on" cx="26" cy="26" r="' + r + '" stroke-dasharray="' + (c * v / 100).toFixed(1) + ' ' + c.toFixed(1) + '"/></svg>';
}
function scoreBox(i: number){
  var s = score(i);
  return '<span class="lab-score"><span><b>Health score</b><small>' + s.of + ' readings</small></span>' +
    '<span class="lab-score-v">' + ring(s.v) + '<span>' + s.v + '</span></span></span>';
}
var CAT_MARK: Record<string, () => string> = { cycle:calendarSvg, weather:weatherSvg, mood:moodSvg, circulation:circulationSvg, energy:boltSvg };
function labSec(k: string, ls: Lab[], i: number){
  var ok = ls.filter(function(l){ return tier(l, i) === "optimal"; }).length;
  return catHeadCard("lab-sec", k, { tag:"button", cls:"lab-head ", attrs:' type="button" aria-expanded="true"', name:'<span class="lab-mark">' + CAT_MARK[k]() + '</span>' + catTitle(k) + ' <small>(' + ls.length + ')</small>',
    aside:'<span class="lab-tally">' + ok + "/" + ls.length + " in range</span>" + CHEV },
    '<ul>' + ls.map(function(l){ return labItem(l, i); }).join("") + '</ul>');
}
function bySystem(i: number, j: Lab[]){
  var rank = TIERS.map(function(t){ return t.key; });
  return ["cycle"].concat(categoriesShown().map(function(c){ return c.key; })).map(function(k){
    var ls = j.filter(function(l){ return l.cat === k; }).sort(function(a, b){ return rank.indexOf(tier(a, i)) - rank.indexOf(tier(b, i)); });
    return ls.length ? labSec(k, ls, i) : "";
  }).join("");
}
var shown = { tier:"all" };
function tierTabs(i: number, j: Lab[]){
  var segs = [["all", "All " + j.length]].concat(TIERS.map(function(t){ return [t.key, t.title + " " + j.filter(function(l){ return tier(l, i) === t.key; }).length]; }));
  return tabBar('aria-label="Filter the results"', segs, shown.tier, "data-lab-tier");
}
function pickTier(sheet: HTMLElement, seg: Element){
  shown.tier = seg.getAttribute("data-lab-tier") || "all";
  sheet.setAttribute("data-show", shown.tier);
  Array.prototype.forEach.call(sheet.querySelectorAll("[data-lab-tier]"), function(b: HTMLElement){
    var on = b === seg;
    b.classList.toggle("on", on); b.setAttribute("aria-selected", String(on)); b.tabIndex = on ? 0 : -1;
  });
}
function judged(i: number){ return labs().filter(function(l){ return l.per[i] != null && normAt(l, i) && !(l.cat === "cycle" && marketCycles[i].ongoing); }); }
function score(i: number){ var j = judged(i), ok = j.filter(function(l){ return tier(l, i) === "optimal"; }).length; return { v:Math.round(100 * ok / j.length), ok:ok, of:j.length }; }
function outside(i: number){ return labs().filter(function(l){ var st = state(l, i); return st === "high" || st === "low"; }); }
function listWords(xs: string[]){ return xs.length > 1 ? xs.slice(0, -1).join(", ") + " and " + xs[xs.length - 1] : xs[0] || ""; }
function word(n: number){ return NUM[n] || String(n); }
function cap(t: string){ return t.charAt(0).toUpperCase() + t.slice(1); }

function visitNote(i: number){
  var c = marketCycles[i], v = visits()[i], open = !!c.ongoing, len = labs()[0], n = len.norm as Norm;
  var head = "The " + c.name + (open ? " is " + yearsWord(v.years) + " years old: " : " ran " + yearsWord(v.years) + " years: ") + word(v.bull) + " bull year" + (v.bull === 1 ? "" : "s") +
    (v.bleed ? " and a bleed of " + word(v.bleed) : open ? ", no bleed yet" : "") + ". Her normal cycle runs " + yearsWord(n.lo) + " to " + yearsWord(n.hi) + " years. ";
  var named = function(st: string){ return outside(i).filter(function(l){ return state(l, i) === st; }).map(function(l){ return l.name; }); };
  var high = named("high"), low = named("low");
  var parts = (high.length ? [listWords(high) + " ran far above her normal"] : []).concat(low.length ? [listWords(low) + " far below it"] : []);
  return head + (parts.length ? cap(parts.join("; ")) + "." : "Nothing ran far outside her normal" + (open ? " so far." : "."));
}
function chartDetail(){
  return '<h4>How the health chart reads</h4>' + facts([
    "For a closed cycle each reading is its average over the cycle’s years, from its first bull year to its last bear year. For the cycle in progress it is the latest reading, judged against every reading of her closed cycles rather than their averages, because a single reading swings wider than an average does. Bull years are the calendar years the S&amp;P&nbsp;500’s total return closed up; the bleed is the run of bear years that closes the cycle.",
    "Each reading is sorted the way a blood test is. Normal (green) is the middle half of her closed cycles. Attention (yellow) is outside that middle half but within Tukey’s fences, one and a half times its span beyond it. Risk (red) is past a fence, the standard rule for an outlier. Under each result, as on a lab report, In range, Above range or Below range says where it sits, and Far above or Far below marks Risk; the triangle by the figure points the same way. Each category heading counts its results in range.",
    "Each normal range rests on the closed cycles that have the reading: a reading that begins late, like Volatility (1986) or Pressure and Households (2005), has only a few, and its range weighs less for it.",
    "Her health score is the share of the readings judged in a cycle that are normal, out of 100; each reading counts once. The cycle’s own length, bull years and bleed are judged only once it has closed.",
    "Her health chart describes her history, not what comes next."
  ]) + srcBlock([FENCE_SRC]);
}
var CHART_ID = "sheet-cycle-chart", CHART_NAME = "Health chart";
export function chartDoor(m: CycleModel){
  var i = marketCycles.indexOf(m.era);
  return i < 0 ? "" : trendDoor(CHART_ID, CHART_NAME, chartSvg(), CHART_NAME, trendText(visitNote(i)) + scoreBox(i));
}
function drawChart(){
  var sheet = byId(CHART_ID), c = pageCycle(CHART_ID);
  if (!sheet || !c) return;
  sheet.setAttribute("data-show", shown.tier);
  var i = marketCycles.indexOf(c), j = judged(i);
  sheet.innerHTML = histBar(cycleControls(CHART_ID) + tierTabs(i, j)) +
    '<div class="labs">' + bySystem(i, j) + moreRow(chartDetail()) + '</div>';
}
function fold(t: Element){
  var head = t.closest && t.closest(".lab-head");
  if (head) head.setAttribute("aria-expanded", String(head.getAttribute("aria-expanded") !== "true"));
}
export function buildCycleChart(home: HTMLElement){
  page.mode[CHART_ID] = "cycles";
  page.cycles[CHART_ID] = null;
  var sheet = metricSheet(CHART_ID);
  home.appendChild(sheet);
  sheet.addEventListener("click", function(e){
    var seg = (e.target as Element).closest && (e.target as Element).closest("[data-lab-tier]");
    if (seg) pickTier(sheet, seg); else fold(e.target as Element);
  });
  home.addEventListener("click", function(e){
    if ((e.target as Element).closest && (e.target as Element).closest('[data-open="' + CHART_ID + '"]')) page.cycles[CHART_ID] = ui.eraOpen ? ui.eraOpen.name : null;
  });
  sheetRenderers[CHART_ID] = drawChart;
}
