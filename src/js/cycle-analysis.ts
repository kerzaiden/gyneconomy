import { CHEV, facts, qLabel, quartile, srcBlock } from "./format.ts";
import { byId, detailSlot, focusQuiet, moreDoor, moreRow, need, ui } from "./dom.ts";
import { GYN } from "./live.ts";
import { setTopbar } from "./render-pages.ts";
import { page, pageCycle, tabBar } from "./history.ts";
import { histFrame } from "./charts.ts";
import { boltSvg, calendarSvg, chartSvg, circulationSvg, flameSvg, moodSvg, slidersSvg, sproutSvg, weatherSvg } from "./marks.ts";
import { catHeadCard, dxHead, dxSys, metricSheet, sheetRenderers } from "./render-core.ts";
import { marketCycles, sp500AnnualReturns } from "./data.ts";
import { eraFig, todayValue } from "./era.ts";
import { todayFace } from "./reading.ts";
import { calendarTodayY, DATA_COMPILED } from "./refresh-season.ts";
import { currentSeason, cycLabel, cycleByName, cycleModel, cycleOfYear, nowModel, openCycle, seasonGroup, seasonOfQ } from "./model.ts";
import { fedEnvironment } from "./fed-phases.ts";
import { catInsight } from "./insights.ts";
import { categoriesShown, keyed, ROSTER, ROSTER_BY, SUB_MARK } from "./roster.ts";
import type { CycleModel } from "./model.ts";

// ---- Her chart: every reading, cycle by cycle, against her own normal ranges ----
type Norm = { lo: number; hi: number; fence: number; floor: number };
export type Lab = { id: string; name: string; cat: string; good?: "up" | "down"; per: (number | null)[]; norm: Norm | null; settled?: boolean; now: Norm | null; print: (v: number) => string; span: (lo: number, hi: number) => string };
type Visit = { years: number; bull: number; bleed: number };

var NUM = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
var FENCE_SRC: Src = { t:"NIST/SEMATECH e-Handbook of Statistical Methods — What are outliers in the data? (Tukey’s fences)", u:"https://www.itl.nist.gov/div898/handbook/prc/section1/prc16.htm" };
var SD_SRC: Src = { t:"NIST/SEMATECH e-Handbook of Statistical Methods — Measures of Scale (standard deviation)", u:"https://www.itl.nist.gov/div898/handbook/eda/section3/eda356.htm" };

function normOf(vs: number[]): Norm | null {
  if (vs.length < 2) return null;
  var lo = quartile(vs, 0.25), hi = quartile(vs, 0.75);
  return { lo:lo, hi:hi, fence:hi + 1.5 * (hi - lo), floor:lo - 1.5 * (hi - lo) };
}
function closedCount(){ return marketCycles.filter(function(c){ return !c.ongoing; }).length; }
function len(v: Visit){ return v.years; }
function flow(v: Visit){ return v.bleed; }
function visitOf(m: CycleModel): Visit {
  var c = m.era, signs: boolean[] = [], bleed = 0;
  for (var y = c.from; y <= (m.ongoing ? Math.min(m.endYear, calendarTodayY - 1) : m.endYear); y++) if (sp500AnnualReturns[y] != null) signs.push(sp500AnnualReturns[y] >= 0);
  while (bleed < signs.length && !signs[signs.length - 1 - bleed]) bleed++;
  return { years:m.elapsedYears, bull:signs.filter(Boolean).length, bleed:bleed };
}
var visitCache: Visit[] | null = null;
function visits(){ return visitCache || (visitCache = marketCycles.map(function(c){ return visitOf(cycleModel(c)); })); }
function present(vs: (number | null)[]){ return vs.filter(function(v): v is number { return v != null; }); }
function sdOf(vs: number[]){ var m = meanOf(vs); return Math.sqrt(vs.reduce(function(a, v){ return a + (v - m) * (v - m); }, 0) / (vs.length - 1)); }
function drift(i: number){ return Math.abs(visits()[i].years - meanOf(lengths())); }
function cycleLab(id: string, name: string, good: "up" | "down" | undefined, f: (v: Visit, i: number) => number | null, settled?: boolean): Lab {
  var per = visits().map(f), print = function(v: number){ return yearsWord(v) + " yr"; };
  return { id:id, name:name, cat:"cycle", good:good, settled:settled, per:per, norm:normOf(present(per.slice(0, closedCount()))), now:null, print:print, span:spanOf(print) };
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
function spanOf(print: (v: number) => string){
  return function(lo: number, hi: number){ return print(lo) === print(hi) ? print(lo) : print(lo) + " – " + print(hi); };
}
function cardPrint(R: RosterRow){
  var g = eraFig(todayFace(R).text), f = g;
  return { print:function(v: number){ return f(v); }, span:spanOf(function(v){ return f(v); }) };
}
function readingLab(R: RosterRow): Lab {
  var seen = cycleReadings(R), open = function(i: number){ return !!marketCycles[i].ongoing; }, p = cardPrint(R);
  var per = seen.map(function(vs, i){ return !vs.length ? null : open(i) ? todayValue(R) : vs.reduce(function(a, b){ return a + b; }, 0) / vs.length; });
  var pin = function(n: Norm | null){ return n && R.normal ? { lo:R.normal.lo, hi:R.normal.hi, fence:n.fence, floor:n.floor } : n; };
  return { id:R.id, name:R.name, cat:R.cat, good:R.good, per:per, now:pin(readingsNorm(seen)), print:p.print, span:p.span,
    norm:pin(normOf(per.slice(0, closedCount()).filter(function(v): v is number { return v != null; }))) };
}
var labCache: Lab[] | null = null;
export function forgetLabs(){ labCache = null; visitCache = null; whenCache = {}; }
function cycleLabs(){
  return [
    cycleLab("length", "Length", undefined, function(v){ return v.years; }, true),
    cycleLab("bull", "Bull years", "up", function(v){ return v.bull; }),
    cycleLab("bleed", "Period flow", "down", function(v){ return v.bleed; })
  ];
}
export function labs(){ return labCache || (labCache = cycleLabs().concat(ROSTER.map(readingLab))); }
function normAt(l: Lab, i: number){ return marketCycles[i].ongoing && l.now ? l.now : l.norm; }
function unread(l: Lab, i: number){ return l.cat === "cycle" && !!marketCycles[i].ongoing && !l.settled; }
type At = { v: (l: Lab) => number | null; n: (l: Lab) => Norm | null; open: boolean; skip: (l: Lab) => boolean; tag: (l: Lab) => string };
function atCycle(i: number): At {
  return { v:function(l){ return l.per[i]; }, n:function(l){ return normAt(l, i); }, open:!!marketCycles[i].ongoing, skip:function(l){ return unread(l, i); }, tag:function(){ return ""; } };
}
function atWhen(w: string): At {
  var open = w === nowWhen(w.length > 4);
  return { v:function(l){ return whenValue(l, w, open); }, n:function(l){ return l.cat === "cycle" ? null : l.now; }, open:open, skip:function(){ return false; },
    tag:function(l){ return !open && w.length > 4 && yearly(l) ? " \u00b7 " + w.slice(0, 4) : ""; } };
}
export function nowWhen(quarter: boolean){ return calendarTodayY + (quarter ? " Q" + (Math.floor(DATA_COMPILED.getMonth() / 3) + 1) : ""); }
function yearly(l: Lab){ var R = ROSTER_BY[l.id]; return !!R && (R.hist.k === "y" || R.hist.k === "yi"); }
var whenCache: Record<string, Record<string, number>> = {};
function whenValue(l: Lab, w: string, open: boolean){
  var R = ROSTER_BY[l.id];
  if (!R) return null;
  if (open) return todayValue(R);
  var by = whenCache[l.id] || (whenCache[l.id] = whenMeans(R));
  return by[w] ?? (yearly(l) ? by[w.slice(0, 4)] ?? null : null);
}
function quarterKey(k: string){ return k.indexOf("Q") !== -1 ? k : k.length === 7 ? k.slice(0, 4) + " Q" + Math.ceil(+k.slice(5) / 3) : ""; }
function whenMeans(R: RosterRow){
  var by: Record<string, number[]> = {}, out: Record<string, number> = {};
  keyed(R.hist).forEach(function(d){
    if (d.v == null) return;
    [d.k.slice(0, 4), quarterKey(d.k)].forEach(function(k){ if (k) (by[k] = by[k] || []).push(d.v as number); });
  });
  Object.keys(by).forEach(function(k){ out[k] = meanOf(by[k]); });
  return out;
}
type PeriodRow = { key: string; name: string; aside: string; caption: string };
var whenOk: Record<string, boolean> = {};
function hasWhen(w: string){ return whenOk[w] ?? (whenOk[w] = w <= nowWhen(w.length > 4) && judged(atWhen(w)).length > 0); }
function periodRows(id: string): PeriodRow[] {
  var mode = page.mode[id], out: PeriodRow[] = [];
  if (mode === "cycles") return marketCycles.map(function(c){ var L = cycLabel(c); return { key:c.name, name:c.name, aside:L.years, caption:L.years }; });
  for (var y = marketCycles[0].from; y <= calendarTodayY; y++) (mode === "quarters" ? [1, 2, 3, 4].map(function(n){ return y + " Q" + n; }) : [String(y)]).forEach(function(w){
    var c = cycleOfYear(+w.slice(0, 4)) as Cycle;
    if (hasWhen(w)) out.push({ key:w, name:w.length > 4 ? qLabel(w) : w, aside:c.name.replace(" Cycle", ""), caption:"Year " + (+w.slice(0, 4) - c.from + 1) + " of the " + c.name });
  });
  return out;
}
function state(l: Lab, at: At){
  var v = at.v(l), n = at.n(l);
  if (v == null || !n || at.skip(l)) return "";
  return v > n.fence ? "high" : v < n.floor ? "low" : "";
}
export function yearsWord(v: number){ var q = Math.round(v * 4); return (Math.floor(q / 4) || q % 4 === 0 ? String(Math.floor(q / 4)) : "") + ["", "¼", "½", "¾"][q % 4]; }
export function fmt(l: Lab, v: number){ return l.print(v); }
var TIERS = [{ key:"abnormal", title:"Risk", cls:"t-abnormal" }, { key:"borderline", title:"Attention", cls:"t-borderline" }, { key:"optimal", title:"Normal", cls:"t-optimal" }];
function tier(l: Lab, at: At){
  var v = at.v(l) as number, n = at.n(l) as Norm, up = v > n.hi, down = v < n.lo;
  return l.id === "length" ? (v <= n.fence && (at.open || v >= n.floor) ? "optimal" : "abnormal") : !up && !down || up && l.good === "up" || down && l.good === "down" ? "optimal" : state(l, at) ? "abnormal" : "borderline";
}
function catTitle(key: string){ return categoriesShown().filter(function(c){ return c.key === key; })[0].title; }
function side(l: Lab, at: At){ var v = at.v(l) as number, n = at.n(l) as Norm; return v > n.hi ? "to-up" : v < n.lo ? "to-down" : "to-level"; }
function findWords(l: Lab){
  var R = ROSTER_BY[l.id];
  return [l.name, catTitle(l.cat)].concat(R ? [R.head, R.group || "", R.sub, R.term || "", R.cardUnit || ""] : []).join(" ").toLowerCase().replace(/"/g, "");
}
function rowTag(l: Lab){ return ROSTER_BY[l.id] ? 'button class="lab-row" type="button" data-open="' + l.id + '" data-title="' + l.name + '"' : 'div class="lab-row"'; }
function cardWord(l: Lab, at: At){
  var R = ROSTER_BY[l.id], t = R && at.open ? todayFace(R).word : "";
  return t ? t + " \u00b7 " : "";
}
function labItem(l: Lab, at: At){
  var n = at.n(l) as Norm, tag = ROSTER_BY[l.id] ? "button" : "div", t = TIERS.filter(function(t){ return t.key === tier(l, at); })[0];
  return '<li class="lab-item ' + side(l, at) + ' ' + t.cls + '" data-find="' + findWords(l) + '"><' + rowTag(l) + '><div><b>' + l.name + '</b><small class="lab-where">' + cardWord(l, at) + t.title + at.tag(l) + '</small></div>' +
    '<div class="lab-res"><b>' + fmt(l, at.v(l) as number) + '<i class="lab-to" aria-hidden="true"></i></b>' +
    '<small>' + l.span(n.lo, n.hi) + '</small></div></' + tag + '></li>';
}
function ring(v: number){
  var r = 21, c = 2 * Math.PI * r;
  return '<svg class="lab-ring" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="' + r + '"/><circle class="on" cx="26" cy="26" r="' + r + '" stroke-dasharray="' + (c * v / 100).toFixed(1) + ' ' + c.toFixed(1) + '"/></svg>';
}
function pastScores(){ return marketCycles.slice(0, closedCount()).map(function(_, k){ return score(k).v; }); }
function scoreTier(v: number){
  var n = normOf(pastScores()) as Norm;
  return v >= n.lo ? "Normal" : v >= n.floor ? "Attention" : "Risk";
}
function scoreRing(v: number, label: string){ return '<span class="lab-score-v">' + ring(v) + label + '</span>'; }
function scoreTile(tag: string, cls: string, attrs: string, inner: string){ return '<' + tag + ' class="lab-score' + cls + '"' + attrs + '>' + inner + '</' + tag + '>';
}
export var CAT_MARK: Record<string, () => string> = { weather:weatherSvg, activity:sproutSvg, mood:moodSvg, desire:flameSvg, circulation:circulationSvg, stress:boltSvg };
function foldSec(k: string, title: string, name: string, ls: Lab[], at: At){
  return catHeadCard("lab-sec plain", k, { tag:"div", cls:"lab-head ", attrs:"", name:name,
    aside:'<button type="button" class="lab-fold" aria-expanded="true" aria-label="Fold ' + title + '">' + countTag(ls.length) + CHEV + '</button>' },
    '<ul>' + ls.map(function(l){ return labItem(l, at); }).join("") + '</ul>');
}
function labSec(k: string, ls: Lab[], at: At){
  var title = catTitle(k), name = catName(k);
  return foldSec(k, title, '<button type="button" class="lab-cat" data-ind-cat="' + k + '">' + name + '</button>', ls, at);
}
function subSec(k: string, sub: string, ls: Lab[], at: At){
  return foldSec(k, sub, markName(SUB_MARK[sub], sub), ls, at);
}
function bySub(k: string, ls: Lab[], at: At){
  var subs: string[] = [];
  ROSTER.forEach(function(R){ if (R.cat === k && subs.indexOf(R.sub) === -1) subs.push(R.sub); });
  return subs.map(function(sub){
    var own = ls.filter(function(l){ return ROSTER_BY[l.id].sub === sub; });
    return own.length ? subSec(k, sub, own, at) : "";
  }).join("");
}
function bySystem(at: At, j: Lab[], cat: string){
  return categoriesShown().map(function(c){ return c.key; }).map(function(k){
    var ls = j.filter(function(l){ return l.cat === k; });
    return !ls.length ? "" : k === cat ? bySub(k, ls, at) : labSec(k, ls, at);
  }).join("");
}
type Find = { tier: string; q: string; raw: string; cat: string };
var finds: Record<string, Find> = {};
function findOf(id: string){ return finds[id] || (finds[id] = { tier:"all", q:"", raw:"", cat:"" }); }
var LENS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.4 15.4L20.5 20.5"/></svg>';
function tierOpts(at: At, j: Lab[]){
  return [["all", "All", j.length]].concat(TIERS.map(function(t){ return [t.key, t.title, j.filter(function(l){ return tier(l, at) === t.key; }).length]; }));
}
function filterTag(id: string){
  var f = findOf(id), tags = (f.cat ? [catTitle(f.cat)] : []).concat(f.tier === "all" ? [] : [TIERS.filter(function(t){ return t.key === f.tier; })[0].title]);
  return tags.length ? '<span>' + tags.join(" \u00b7 ") + '</span>' : "";
}
function finder(id: string, slot: number){
  var f = findOf(id);
  return '<div class="lab-find">' + searchShell("div", "", "", '<input type="search" class="lab-q" placeholder="Search elements" aria-label="Search elements" autocomplete="off" spellcheck="false" value="' + f.raw.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;") + '">' +
    filterDoor("lab-filter", slot, ' aria-label="Filter"', slidersSvg() + filterTag(id))) + '</div>';
}
function stepBtn(row: PeriodRow | undefined, cls: string, label: string){
  return '<button type="button" class="period-arrow' + cls + '" data-pick-period="' + (row ? row.key : "") + '" aria-label="' + label + (row ? ", " + row.name : "") + '"' + (row ? "" : " disabled") + '>' + CHEV + '</button>';
}
function stepper(id: string, rows: PeriodRow[], slot: number){
  var keys = rows.map(function(r){ return r.key; }), i = keys.indexOf(pickedKey(id)), r = rows[i] || rows[rows.length - 1];
  return '<div class="period-step">' + stepBtn(rows[i - 1], " back", "Earlier") +
    filterDoor("period-now", slot, "", '<b>' + r.name + '</b><small>' + r.caption + '</small>') +
    stepBtn(rows[i + 1], "", "Later") + '</div>';
}
function filterDoor(cls: string, slot: number, attrs: string, inner: string){
  return '<button type="button" class="' + cls + ' details-link" data-detail-idx="' + slot + '"' + attrs + '>' + inner + '</button>';
}
function sheetSec(title: string, inner: string, aside?: string){ return '<div class="ind-sec"><h5>' + title + (aside ? '<em>' + aside + '</em>' : "") + '</h5>' + inner + '</div>'; }
function calBtn(k: string, key: string, cls: string, label: string, inner: string){
  return '<button type="button" class="' + cls + (k === key ? " on" : "") + '" data-pick-period="' + k + '" aria-pressed="' + (k === key) + '" aria-label="' + label + '">' + inner + '</button>';
}
function calOff(cls: string, inner: string){ return '<span class="' + cls + ' is-off">' + inner + '</span>'; }
function calQuarter(q: string, key: string){
  var g = seasonOfQ(q) || (q === nowWhen(true) ? seasonGroup(currentSeason) : "");
  return hasWhen(q) ? calBtn(q, key, "cal-q " + g, qLabel(q) + ", " + cap(g), q.slice(5)) : calOff("cal-q", "");
}
function calYear(y: number, key: string){
  var w = String(y), qs = [1, 2, 3, 4].map(function(n){ return calQuarter(w + " Q" + n, key); }).join("");
  return '<div class="cal-year' + (key === w ? " in" : "") + '">' + (hasWhen(w) ? calBtn(w, key, "cal-y", w, w) : calOff("cal-y", w)) + qs + '</div>';
}
function calCycle(c: Cycle, key: string){
  var years = cycLabel(c).years, rows = "";
  for (var y = c.to || calendarTodayY; y >= c.from; y--) rows += calYear(y, key);
  return calBtn(c.name, key, "cal-band", c.name + ", " + years, '<b>' + c.name + '</b><small>' + years + '</small>') + rows;
}
function periodCal(key: string){
  return '<div class="period-cal">' + marketCycles.slice().reverse().map(function(c){ return calCycle(c, key); }).join("") + '</div>' +
    '<p class="cal-key">' + ["winter", "spring", "summer", "autumn"].map(function(g){ return '<span class="' + g + '"><i></i>' + cap(g) + '</span>'; }).join("") + '</p>';
}
function shown(id: string, at: At, j: Lab[]){ var f = findOf(id); return j.filter(function(l){ return (!f.cat || l.cat === f.cat) && (f.tier === "all" || tier(l, at) === f.tier); }).length; }
function filterSheet(id: string, at: At, j: Lab[], rows: PeriodRow[]){
  var f = findOf(id), key = pickedKey(id), n = shown(id, at, j), keys = categoriesShown().map(function(c){ return c.key; }).filter(function(k){ return j.some(function(l){ return l.cat === k; }); });
  return '<div class="ind-filter"><div class="ind-filter-head"><h4>Filter</h4><button type="button" class="ind-reset" data-pick-reset="">Reset</button></div>' +
    sheetSec("Period", periodCal(key), (rows.filter(function(r){ return r.key === key; })[0] || { name:key }).name) +
    sheetSec("Category", tabBar('aria-label="Category"', [["", "All"]].concat(keys.map(function(k){ return [k, catTitle(k)]; })), f.cat, "data-pick-cat", "ind-cats")) +
    sheetSec(RESULT, tabBar('aria-label="' + RESULT + '"', tierOpts(at, j).map(function(o){ return [String(o[0]), o[1] + ' <small>' + o[2] + '</small>']; }), f.tier, "data-pick-tier")) +
    '<button type="button" class="ind-show" data-ind-show="">Show ' + n + ' reading' + (n === 1 ? "" : "s") + '</button></div>';
}
var RESULT = "Result", sheetHtml: Record<string, string> = {};
function narrow(host: HTMLElement, id: string){
  var f = findOf(id), any = false;
  Array.prototype.forEach.call(host.querySelectorAll(".lab-sec"), function(sec: HTMLElement){
    var seen = false, inCat = !f.cat || sec.classList.contains("cat-" + f.cat);
    Array.prototype.forEach.call(sec.querySelectorAll(".lab-item"), function(li: HTMLElement){
      var ok = inCat && (f.tier === "all" || li.classList.contains("t-" + f.tier)) && (li.getAttribute("data-find") || "").indexOf(f.q) !== -1;
      li.hidden = !ok; seen = seen || ok;
    });
    sec.hidden = !seen; any = any || seen;
  });
  var none = host.querySelector<HTMLElement>(".search-none"); if (none) none.hidden = any;
}
export function riskLabs(i: number, key?: string){ var at = atCycle(i); return judged(at).filter(function(l){ return tier(l, at) === (key || "abnormal"); }); }
function judged(at: At){ return labs().filter(function(l){ return at.v(l) != null && at.n(l) && !at.skip(l); }); }
function score(i: number){ var at = atCycle(i), j = judged(at), ok = j.filter(function(l){ return tier(l, at) === "optimal"; }).length; return { v:Math.round(100 * ok / j.length), ok:ok, of:j.length }; }
export function listWords(xs: string[]){ return xs.length > 1 ? xs.slice(0, -1).join(", ") + " and " + xs[xs.length - 1] : xs[0] || ""; }
function word(n: number){ return NUM[n] || String(n); }
function cap(t: string){ return t.charAt(0).toUpperCase() + t.slice(1); }

function depthWords(){
  var all = closedCount(), by: Record<number, string[]> = {};
  labs().forEach(function(l){
    var k = l.per.slice(0, all).filter(function(v){ return v != null; }).length;
    if (k < all) (by[k] = by[k] || []).push(l.name);
  });
  var ks = Object.keys(by).map(Number).sort(function(a, b){ return a - b; });
  return "<b>Depth:</b> a range rests on the closed cycles its record reaches. " + (ks.length ? cap(ks.map(function(k){ return listWords(by[k]) + " on " + word(k); }).join("; ")) + "; the rest on all " + word(all) + "." : "Every range rests on all " + word(all) + ".");
}
function pinnedFacts(){
  return ROSTER.filter(function(R){ return R.normal; }).map(function(R){
    var b = R.normal as { lo: number; hi: number; why: string };
    return "<b>" + R.name + "</b>\u2019s Normal is " + b.lo + "\u2013" + b.hi + "%, " + b.why + "; its Risk still lies past the fence of its own record.";
  }).join(" ");
}
function methodFacts(){
  return ["<b>Length</b> is Typical inside Tukey’s fences of her closed cycles; <b>variation</b> is the standard deviation of their lengths."];
}
function chartDetail(){
  return '<p>Averages are based on her ' + closedCount() + ' closed cycles since ' + marketCycles[0].from + '.</p>' + facts([
    "<b>Each result</b> is a closed cycle’s average, or the open cycle’s latest reading, the figure on its card. Bull years and bleed count only calendar years that have closed.", "<b>A year or a quarter</b> is its average, or the latest reading while it is still open, judged as the open cycle is: against the middle half of every reading her closed cycles hold. A reading kept only by the year shows its year’s figure in a quarter, and says which.", depthWords(),
    "<b>Normal</b> is the middle half of her closed cycles, <b>Attention</b> lies outside it, <b>Risk</b> lies past Tukey’s fence, the standard outlier rule.",
    pinnedFacts(),
    "<b>Good side:</b> a result outside its range on its good side stays Normal, such as high growth or low debt.",
    "<b>Health Score</b> is the share of results that are Normal, out of 100."
  ].concat(methodFacts(), ["<b>History, not forecast:</b> it describes her past, not what comes next."])) + srcBlock([FENCE_SRC, SD_SRC]);
}
export function chartDoor(m: CycleModel){
  return marketCycles.indexOf(m.era) < 0 ? "" : moreDoor(' data-chart-cycle="' + m.era.name + '"', "Cycle Analysis", chartSvg());
}
var HOME_ID = "chart-home";
function statRow(name: string, v: number, of: number, side: string, page: string, cls?: string, text?: string){
  var inner = statBody(scoreRing(Math.min(100, 100 * v / of), ""), '<small>' + name + '</small><b>' + (text || yearsText(v)) + '</b>', page ? side : null);
  var c = " stat-row" + (cls ? " " + cls : "");
  return page ? scoreTile("button", c + " details-link", ' type="button" data-detail-idx="' + detailSlot(page) + '"', inner) : scoreTile("span", c, "", inner);
}
function statBody(lead: string, main: string, side: string | null){
  return lead + '<span class="stat-main">' + main + '</span>' + (side == null ? "" : '<span class="stat-side">' + side + CHEV + '</span>');
}
function yearsText(v: number){ return yearsWord(v) + (Math.round(v * 4) === 4 ? ' year' : ' years'); }
function meanOf(vs: number[]){ return vs.reduce(function(a, b){ return a + b; }, 0) / vs.length; }
function lengths(){ return visits().slice(0, closedCount()).map(function(v){ return v.years; }); }
function typical(v: number, open?: boolean){ var n = normOf(lengths()) as Norm; return v <= n.fence && (open || v >= n.floor); }
function flows(){ return visits().slice(0, closedCount()).map(flow); }
function flowTypical(v: number){ return v <= (normOf(flows()) as Norm).fence; }
function verdict(ok: boolean){ return mark(ok ? " ok" : " odd", ok ? "Typical" : "Atypical"); }
var TICK = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function tone(ok: boolean){ return ok ? "t-ok" : "t-odd"; }
function mark(cls: string, name: string){ return '<span class="stat-tick' + cls + '">' + TICK + '</span>' + name; }
var TYPICAL_KEY = '<p class="len-key"><i class="ok"></i>Typical <i class="odd"></i>Atypical</p>';
var HEALTH_KEY = '<p class="len-key"><i class="ok"></i>Normal <i class="warn"></i>Attention <i class="odd"></i>Risk</p>';
var RELATIVE = '<p>Typical is relative: it is read against the market’s own past cycles, not a fixed standard.</p>';
function healthPage(i: number){
  var s = score(i), t = scoreTier(s.v), n = normOf(pastScores()) as Norm;
  return '<h3>Health Score</h3><p>' + t + ': ' + s.v + ' out of 100, the share of the ' + s.of + ' results that are Normal. It is judged against the scores of the ' + closedCount() + ' closed cycles: Normal from ' + Math.ceil(n.lo) + ', Risk below ' + Math.max(0, Math.ceil(n.floor)) + ', past Tukey’s fence.</p><p>Normal is relative: it is read against the market’s own past cycles, not a fixed standard.</p>' +
    HEALTH_KEY + cycleBars(marketCycles.map(function(_, k){ return score(k).v; }), function(v){ return healthTone(v)[0]; }, [i], "Each cycle\u2019s health score out of 100") + srcBlock([FENCE_SRC]);
}
function healthTone(v: number){ return ({ Normal:["ok", "t-ok"], Attention:["warn", "t-warn"], Risk:["odd", "t-odd"] } as Record<string, string[]>)[scoreTier(v)]; }
function healthRow(i: number){
  var v = score(i).v, k = healthTone(v);
  return '<div class="lab-score-box">' + statRow("Health Score", v, 100, mark(" " + k[0], scoreTier(v)), healthPage(i), k[1], String(v)) + '</div>';
}
function cycleBars(vs: (number | null)[], cls: (v: number, i: number) => string, at: number[], label: string){
  var F = histFrame(), W = F.W, H = F.B - F.T, top = Math.max.apply(null, present(vs)), bw = W / vs.length;
  return '<svg class="len-bars" viewBox="0 ' + F.T + ' ' + W + ' ' + (H + 22) + '" role="img" aria-label="' + label + '">' + vs.map(function(v, i){
    var h = v == null ? 0 : H * v / top, x = i * bw + 2, c = marketCycles[i];
    return (v == null ? '' : '<rect class="' + cls(v, i) + '" x="' + x.toFixed(1) + '" y="' + (F.B - h).toFixed(1) + '" width="' + (bw - 4).toFixed(1) + '" height="' + h.toFixed(1) + '" rx="3"/>') +
      '<text' + (at.indexOf(i) !== -1 ? ' class="this"' : '') + ' x="' + (x + (bw - 4) / 2).toFixed(1) + '" y="' + (F.B + 14) + '">' + String(c.from).slice(2) + '</text>';
  }).join("") + '</svg>';
}
function barClass(ok: boolean, i: number){ return marketCycles[i].ongoing ? "now" : ok ? "ok" : "odd"; }
function lengthPage(i: number){
  var n = normOf(lengths()) as Norm, v = visits()[i].years, open = !!marketCycles[i].ongoing, odd = marketCycles.filter(function(c, k){ return !c.ongoing && !typical(visits()[k].years); }).map(function(c){ return cycLabel(c).name; });
  return '<h3>Cycle length</h3><p>' + (typical(v, open) ? 'Typical' : 'Atypical') + ': the ' + marketCycles[i].name + (open ? ' has run ' : ' ran ') + yearsWord(v) + ' years. The ' + lengths().length + ' closed cycles since ' + marketCycles[0].from + ' average ' + yearsWord(meanOf(lengths())) + ' years. A typical one lasts ' + yearsWord(n.floor) + ' to ' + yearsWord(n.fence) + ' years: inside Tukey’s fences around the middle half of the closed cycles, the standard rule for an outlier.' + (odd.length ? ' ' + listWords(odd) + ' ran longer.' : '') + '</p>' +
    RELATIVE + TYPICAL_KEY + cycleBars(visits().map(len), function(x, k){ return barClass(typical(x), k); }, [i], "Each cycle\u2019s length in years") + srcBlock([FENCE_SRC]);
}
function driftWord(i: number){ var d = visits()[i].years - meanOf(lengths()); return Math.round(Math.abs(d) * 4) === 0 ? "On average" : (d < 0 ? "\u2212" : "+") + yearsText(Math.abs(d)); }
function variationPage(i: number){
  var L = lengths(), sd = sdOf(L), c = marketCycles[i], d = visits()[i].years - meanOf(L), off = Math.round(Math.abs(d) * 4) === 0 ? 'right on the average' : yearsWord(Math.abs(d)) + ' years ' + (d < 0 ? 'under' : 'over') + ' the average';
  return '<h3>Cycle variation</h3><p>' + (typical(visits()[i].years, c.ongoing) ? 'Typical' : 'Atypical') + ': market cycles run ' + yearsWord(meanOf(L)) + ' years, give or take ' + yearsWord(sd) + ', the standard deviation of the ' + L.length + ' closed cycles since ' + marketCycles[0].from + '. The ' + c.name + (c.ongoing ? ' has run ' : ' ran ') + yearsWord(visits()[i].years) + ' years, ' + off + '. Typical or not is read as for cycle length, inside Tukey’s fences.</p>' +
    RELATIVE + '<p>Each bar is how far a cycle ran from the average.</p>' + cycleBars(marketCycles.map(function(_, k){ return drift(k); }), function(x, k){ return barClass(typical(visits()[k].years), k); }, [i], "How far each cycle ran from the average length, in years") + srcBlock([SD_SRC, FENCE_SRC]);
}
function flowPage(i: number){
  var F = flows(), n = normOf(F) as Norm, v = visits()[i].bleed, ok = flowTypical(v);
  return '<h3>Period flow</h3><p>' + (ok ? 'Typical' : 'Atypical') + ': the ' + marketCycles[i].name + ' closed on ' + word(v) + ' down year' + (v === 1 ? '' : 's') + ' of the S&amp;P 500. The ' + F.length + ' closed cycles since ' + marketCycles[0].from + ' average ' + yearsWord(meanOf(F)) + ' years. A typical flow lasts at most ' + yearsText(n.fence) + ': inside Tukey’s fence above the middle half of the closed cycles, the standard rule for an outlier.' + (n.lo === n.hi ? ' The middle half all bled exactly ' + yearsText(n.lo) + ', so the fence sits there.' : '') + '</p>' +
    RELATIVE + TYPICAL_KEY + cycleBars(visits().map(flow), function(x, k){ return barClass(flowTypical(x), k); }, [i], "Each cycle\u2019s period flow in years") + srcBlock([FENCE_SRC]);
}
function statsHome(i: number){
  var x = visits()[i], open = !!marketCycles[i].ongoing, closed = visits().slice(0, closedCount()), ok = typical(x.years, open), wet = flowTypical(x.bleed);
  return dxSys("", dxHead(calendarSvg(), "Cycle Statistics") + '<p class="stat-note"><b>' + marketCycles[i].name + '</b>, ' + cycLabel(marketCycles[i]).years + '. Typical is judged against ' + closedCount() + ' closed market cycles since ' + marketCycles[0].from + '.</p>' + healthRow(i) +
    statRow("Cycle length", x.years, meanOf(closed.map(len)), verdict(ok), lengthPage(i), tone(ok)) +
    statRow("Cycle variation", drift(i), sdOf(lengths()), verdict(ok), variationPage(i), tone(ok), driftWord(i)) +
    (open ? "" : statRow("Period flow", x.bleed, meanOf(closed.map(flow)), verdict(wet), flowPage(i), tone(wet))));
}
function insightSec(k: string, ls: Lab[]){
  return scoreTile("button", " stat-row insight-row cat-" + k, ' type="button" data-open="' + IND + '" data-title="Elements" data-ind-cat="' + k + '"', statBody('<span class="insight-mark">' + CAT_MARK[k]() + '</span>', '<b>' + catTitle(k) + '</b>', countTag(ls.length)));
}
function catName(k: string){ return markName(CAT_MARK[k], catTitle(k)); }
function markName(mark: () => string, name: string){ return '<span class="lab-mark">' + mark() + '</span>' + name; }
function countTag(n: number){ return '<small class="lab-n" aria-label="' + n + ' readings">' + n + '</small>'; }
function insightsHome(i: number){
  var j = judged(atCycle(i));
  return categoriesShown().map(function(c){
    var ls = j.filter(function(l){ return l.cat === c.key; });
    return ls.length ? insightSec(c.key, ls) : "";
  }).join("");
}
function homeSections(i: number){
  var c = marketCycles[i], m = c.ongoing ? nowModel : cycleModel(c);
  return statsHome(i) + fedEnvironment(m) +
    dxSys("", dxHead("", "Elements", IND_ALL) + insightsHome(i));
}
function whenPicked(id: string){
  var c = cycleByName(page.cycles[id]) || openCycle(), w = page.when[id], y = w ? +w.slice(0, 4) : c.ongoing ? calendarTodayY : c.to;
  return page.mode[id] === "calendar" ? String(y) : w && w.length > 4 ? w : y === calendarTodayY ? nowWhen(true) : y + " Q4";
}
function pickedKey(id: string){ var c = pageCycle(id); return page.mode[id] === "cycles" ? (c as Cycle).name : whenPicked(id); }
function periodAt(id: string){
  var c = pageCycle(id);
  return page.mode[id] !== "cycles" ? atWhen(whenPicked(id)) : c ? atCycle(marketCycles.indexOf(c)) : null;
}
function drawChart(id: string){
  var host = byId(id), c = pageCycle(id), at = periodAt(id);
  if (host && c && id === HOME_ID){ host.innerHTML = '<div class="home-secs">' + homeSections(marketCycles.indexOf(c)) + '</div>'; return; }
  if (!host || !at) return;
  var j = judged(at).filter(function(l){ return l.cat !== "cycle"; }), rows = periodRows(id), slot = detailSlot(sheetHtml[id] = filterSheet(id, at, j, rows));
  host.innerHTML = stepper(id, rows, slot) + finder(id, slot) + '<div class="labs"><div class="lab-box">' + bySystem(at, j, findOf(id).cat) + '</div><p class="search-none" hidden>No reading matches.</p>' + moreRow(catInsight(findOf(id).cat) || chartDetail()) + '</div>';
  narrow(host, id);
}
export var IND = "sheet-find";
var IND_ALL = ' data-open="' + IND + '" data-title="Elements" data-ind-cat=""';
function searchShell(tag: string, cls: string, attrs: string, inner: string){ return '<' + tag + ' class="search-field' + cls + '"' + attrs + '>' + LENS + inner + '</' + tag + '>'; }
function pickCat(t: Element, id: string){
  var b = t.closest && t.closest("[data-ind-cat]"); if (!b) return false;
  findOf(IND).cat = b.getAttribute("data-ind-cat") || ""; findOf(IND).tier = b.getAttribute("data-ind-tier") || "all";
  if (b.hasAttribute("data-ind-cycle")){ page.mode[IND] = "cycles"; page.cycles[IND] = b.getAttribute("data-ind-cycle"); page.when[IND] = undefined; }
  if (id === IND) drawChart(IND); else if (id === HOME_ID){ page.mode[IND] = "cycles"; page.cycles[IND] = page.cycles[HOME_ID]; page.when[IND] = undefined; }
  return true;
}
function buildFind(){ var sheet = metricSheet(IND); need("panel-chart").appendChild(sheet); wireFinder(sheet, IND); drawChart(IND); }
function fold(t: Element){
  var btn = t.closest && t.closest(".lab-fold");
  if (btn) btn.setAttribute("aria-expanded", String(btn.getAttribute("aria-expanded") !== "true"));
}
function wireFinder(host: HTMLElement, id: string){
  page.mode[id] = "cycles";
  page.cycles[id] = null;
  sheetRenderers[id] = function(){ drawChart(id); };
  host.addEventListener("click", function(e){
    var t = e.target as Element;
    if (!pickCat(t, id)) fold(t);
  });
  host.addEventListener("input", function(e){
    var q = e.target as HTMLInputElement; if (!q.classList.contains("lab-q")) return;
    var f = findOf(id); f.raw = q.value; f.q = q.value.trim().toLowerCase(); narrow(host, id);
  });
}
function setPeriod(id: string, k: string){
  page.mode[id] = cycleByName(k) ? "cycles" : k.length > 4 ? "quarters" : "calendar";
  if (page.mode[id] === "cycles"){ page.cycles[id] = k; page.when[id] = undefined; return; }
  page.when[id] = k; page.cycles[id] = (cycleOfYear(+k.slice(0, 4)) as Cycle).name;
}
function pick(id: string, b: Element){
  var cat = b.getAttribute("data-pick-cat"), tr = b.getAttribute("data-pick-tier"), f = findOf(id);
  if (b.hasAttribute("data-pick-reset")){ page.mode[id] = "cycles"; page.cycles[id] = null; page.when[id] = undefined; f.cat = ""; f.tier = "all"; }
  else if (cat != null) f.cat = cat; else if (tr != null) f.tier = tr;
  else setPeriod(id, b.getAttribute("data-pick-period") || "");
}
function refreshSheet(id: string, sel: string){
  var body = byId("detail-modal-body"); if (!body || !body.querySelector(".ind-filter")) return;
  body.innerHTML = sheetHtml[id]; centreList(body);
  focusQuiet(body.querySelector<HTMLElement>(sel));
}
var PICKS = ["data-pick-reset", "data-pick-period", "data-pick-cat", "data-pick-tier"];
function centreList(body: HTMLElement){
  var list = body.querySelector<HTMLElement>(".period-cal"), on = list && list.querySelector<HTMLElement>(".on");
  if (list && on) list.scrollTop += on.getBoundingClientRect().top - list.getBoundingClientRect().top - (list.clientHeight - on.offsetHeight) / 2;
}
function wirePicks(){
  document.addEventListener("click", function(e){
    var t = e.target as Element, on = t.closest && t.closest(PICKS.map(function(a){ return "[" + a + "]"; }).join(", "));
    if (t.closest && t.closest(".lab-filter, .period-now")) centreList(need("detail-modal-body"));
    if (t.closest && t.closest("[data-ind-show]")) need("detail-modal-close").click();
    if (!on) return;
    var attr = PICKS.filter(function(a){ return (on as Element).hasAttribute(a); })[0];
    pick(IND, on); drawChart(IND); refreshSheet(IND, "[" + attr + '="' + on.getAttribute(attr) + '"]');
  });
}
function openWhen(w: string, cat: string){
  page.mode[IND] = w.length > 4 ? "quarters" : "calendar"; page.when[IND] = w; page.cycles[IND] = (cycleOfYear(+w.slice(0, 4)) as Cycle).name;
  findOf(IND).cat = cat;
  drawChart(IND);
}
function wireCatDoors(){
  document.addEventListener("click", function(e){
    var t = e.target as Element, door = t.closest && t.closest('[data-open="' + IND + '"][data-ind-cat]'), at = t.closest && t.closest("[data-ind-when]");
    if (at) openWhen(at.getAttribute("data-ind-when") || "", at.getAttribute("data-ind-cat") || ""); else if (door && !door.closest("#" + HOME_ID)) pickCat(door, IND);
  });
}
function crossToChart(){
  var era = ui.eraOpen, y = window.scrollY || 0;
  need("tab-chart").click();
  if (era) setTopbar("Analysis", (ui.chartBack = function(){ GYN.fire("eraReturn", (era as Cycle).from, y); }));
}
function rateCycle(e: Event){
  var b = (e.target as Element).closest && (e.target as Element).closest("[data-rate-cycle]"), k = b && ROSTER_BY[b.getAttribute("data-open") || ""].hk;
  if (b && k){ page.mode[k] = "cycles"; page.cycles[k] = b.getAttribute("data-rate-cycle"); }
}
export function buildCycleChart(){
  wireFinder(need(HOME_ID), HOME_ID); buildFind(); wireCatDoors(); wirePicks();
  document.addEventListener("click", function(e){
    var door = (e.target as Element).closest && (e.target as Element).closest("[data-chart-cycle]"); if (!door) return;
    crossToChart();
    page.cycles[HOME_ID] = page.cycles[IND] = door.getAttribute("data-chart-cycle");
    drawChart(HOME_ID);
  });
  need("tab-chart").addEventListener("click", function(){ page.cycles[HOME_ID] = null; drawChart(HOME_ID); });
  document.addEventListener("click", rateCycle, true);
  drawChart(HOME_ID);
}
