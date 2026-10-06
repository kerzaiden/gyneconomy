import { CHEV, facts, srcBlock } from "./format.ts";
import { byId, detailSlot, layer, moreRow, need, trendJump, trendText } from "./dom.ts";
import { page, pageCycle } from "./history.ts";
import { boltSvg, calendarSvg, chartSvg, circulationSvg, moodSvg, orbitSvg, slidersSvg, weatherSvg } from "./marks.ts";
import { catHeadCard, sheetRenderers } from "./render-core.ts";
import { marketCycles, sp500AnnualReturns } from "./data.ts";
import { cardFace, cardValue, eraFig } from "./era.ts";
import { calendarTodayY } from "./refresh-season.ts";
import { cycLabel, cycleModel, nowModel, openCycle } from "./model.ts";
import { fedPhasesCard } from "./fed-phases.ts";
import { categoriesShown, keyed, ROSTER, ROSTER_BY } from "./roster.ts";
import type { CycleModel } from "./model.ts";

// ---- Her chart: every reading, cycle by cycle, against her own normal ranges ----
type Norm = { lo: number; hi: number; fence: number; floor: number };
export type Lab = { id: string; name: string; cat: string; good?: "up" | "down"; soFar?: boolean; per: (number | null)[]; norm: Norm | null; settled?: boolean; now: Norm | null; print: (v: number) => string; span: (lo: number, hi: number) => string };
type Visit = { years: number; bull: number; bleed: number };

var NUM = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
var FENCE_SRC: Src = { t:"NIST/SEMATECH e-Handbook of Statistical Methods — What are outliers in the data? (Tukey’s fences)", u:"https://www.itl.nist.gov/div898/handbook/prc/section1/prc16.htm" };
var FIGO_SRC: Src = { t:"Munro, Critchley & Fraser — The two FIGO systems for normal and abnormal uterine bleeding symptoms: 2018 revisions (normal length and regularity)", u:"https://obgyn.onlinelibrary.wiley.com/doi/10.1002/ijgo.12666" };
var BASELINE = 3;

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
  for (var y = c.from; y <= (m.ongoing ? Math.min(m.endYear, calendarTodayY - 1) : m.endYear); y++) if (sp500AnnualReturns[y] != null) signs.push(sp500AnnualReturns[y] >= 0);
  while (bleed < signs.length && !signs[signs.length - 1 - bleed]) bleed++;
  return { years:m.elapsedYears, bull:signs.filter(Boolean).length, bleed:bleed };
}
var visitCache: Visit[] | null = null;
function visits(){ return visitCache || (visitCache = marketCycles.map(function(c){ return visitOf(cycleModel(c)); })); }
function present(vs: (number | null)[]){ return vs.filter(function(v): v is number { return v != null; }); }
function regularity(i: number){
  if (i < BASELINE) return null;
  var ys = visits().slice(i - BASELINE, i).map(function(v){ return v.years; });
  return Math.max.apply(null, ys) - Math.min.apply(null, ys);
}
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
  var g = eraFig(cardFace(R.id).text), pc = R.pair ? "%" : "", f = function(v: number){ return g(v) + pc; };
  if (!R.flip) return { print:function(v: number){ return f(v); }, span:spanOf(function(v){ return f(v); }) };
  var word = function(v: number){ return v > 0 ? " surplus" : " deficit"; }, print = function(v: number){ return f(Math.abs(v)) + word(v); };
  return { print:print, span:function(lo: number, hi: number){
    var a = [Math.abs(lo), Math.abs(hi)].sort(function(x, y){ return x - y; });
    return (lo > 0) !== (hi > 0) ? print(lo) + " – " + print(hi) : f(a[0]) === f(a[1]) ? print(lo) : f(a[0]) + " – " + f(a[1]) + word(hi);
  } };
}
function readingLab(R: RosterRow): Lab {
  var seen = cycleReadings(R), open = function(i: number){ return !!marketCycles[i].ongoing; }, p = cardPrint(R);
  var per = seen.map(function(vs, i){ return !vs.length ? null : open(i) ? cardValue(R) : vs.reduce(function(a, b){ return a + b; }, 0) / vs.length; });
  return { id:R.id, name:R.name, cat:R.cat, good:R.good, soFar:R.soFar, per:per, now:readingsNorm(seen), print:p.print, span:p.span,
    norm:normOf(per.slice(0, closedCount()).filter(function(v): v is number { return v != null; })) };
}
var labCache: Lab[] | null = null;
export function forgetLabs(){ labCache = null; visitCache = null; }
function cycleLabs(){
  return [
    cycleLab("length", "Length", undefined, function(v){ return v.years; }),
    cycleLab("bull", "Bull years", "up", function(v){ return v.bull; }),
    cycleLab("bleed", "Bleed", "down", function(v){ return v.bleed; }),
    cycleLab("regularity", "Variation", "down", function(_, i){ return regularity(i); }, true)
  ];
}
export function labs(){ return labCache || (labCache = cycleLabs().concat(ROSTER.map(readingLab))); }
function normAt(l: Lab, i: number){ return marketCycles[i].ongoing && l.now ? l.now : l.norm; }
function unread(l: Lab, i: number){ return l.cat === "cycle" && !!marketCycles[i].ongoing && !l.settled; }
function state(l: Lab, i: number){
  var v = l.per[i], n = normAt(l, i);
  if (v == null || !n || unread(l, i)) return "";
  return v > n.fence ? "high" : v < n.floor ? "low" : "";
}
export function yearsWord(v: number){ var q = Math.round(v * 4); return (Math.floor(q / 4) || q % 4 === 0 ? String(Math.floor(q / 4)) : "") + ["", "¼", "½", "¾"][q % 4]; }
export function fmt(l: Lab, v: number){ return l.print(v); }
var TIERS = [{ key:"abnormal", title:"Risk", cls:"t-abnormal" }, { key:"borderline", title:"Attention", cls:"t-borderline" }, { key:"optimal", title:"Normal", cls:"t-optimal" }];
function tier(l: Lab, i: number){
  var v = l.per[i] as number, n = normAt(l, i) as Norm, up = v > n.hi, down = v < n.lo;
  return !up && !down || up && l.good === "up" || down && l.good === "down" ? "optimal" : state(l, i) ? "abnormal" : "borderline";
}
function catTitle(key: string){ return key === "cycle" ? "Regularity" : categoriesShown().filter(function(c){ return c.key === key; })[0].title; }
function side(l: Lab, i: number){ var v = l.per[i] as number, n = normAt(l, i) as Norm; return v > n.hi ? "to-up" : v < n.lo ? "to-down" : "to-level"; }
function findWords(l: Lab){
  var R = ROSTER_BY[l.id];
  return [l.name, catTitle(l.cat)].concat(R ? [R.head, R.group || "", R.term || "", R.cardUnit || ""] : []).join(" ").toLowerCase().replace(/"/g, "");
}
function rowTag(l: Lab){ return ROSTER_BY[l.id] ? 'button class="lab-row" type="button" data-open="' + l.id + '" data-title="' + l.name + '"' : 'div class="lab-row"'; }
function labItem(l: Lab, i: number){
  var n = normAt(l, i) as Norm, tag = ROSTER_BY[l.id] ? "button" : "div", t = TIERS.filter(function(t){ return t.key === tier(l, i); })[0];
  return '<li class="lab-item ' + side(l, i) + ' ' + t.cls + '" data-find="' + findWords(l) + '"><' + rowTag(l) + '><div><b>' + l.name + '</b><small class="lab-where">' + t.title + '</small></div>' +
    '<div class="lab-res"><b>' + fmt(l, l.per[i] as number) + (l.soFar && marketCycles[i].ongoing ? " so far" : "") + '<i class="lab-to" aria-hidden="true"></i></b>' +
    '<small>' + l.span(n.lo, n.hi) + '</small></div></' + tag + '></li>';
}
function ring(v: number){
  var r = 21, c = 2 * Math.PI * r;
  return '<svg class="lab-ring" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="' + r + '"/><circle class="on" cx="26" cy="26" r="' + r + '" stroke-dasharray="' + (c * v / 100).toFixed(1) + ' ' + c.toFixed(1) + '"/></svg>';
}
function scoreTier(v: number){
  var past: number[] = [];
  for (var k = 0; k < closedCount(); k++) past.push(score(k).v);
  var n = normOf(past) as Norm;
  return v >= n.lo ? "Normal" : v >= n.floor ? "Attention" : "Risk";
}
function scoreBox(i: number){
  var s = score(i);
  return '<span class="lab-score"><span><b>Health Score</b><small>' + scoreTier(s.v) + ' against ' + word(closedCount()) + ' closed cycles</small></span>' +
    '<span class="lab-score-v">' + ring(s.v) + '<span>' + s.v + '</span></span></span>';
}
var CAT_MARK: Record<string, () => string> = { cycle:calendarSvg, weather:weatherSvg, mood:moodSvg, circulation:circulationSvg, energy:boltSvg };
function labSec(k: string, ls: Lab[], i: number){
  var title = catTitle(k);
  var name = '<span class="lab-mark">' + CAT_MARK[k]() + '</span>' + title + ' <small>(' + ls.length + ')</small>';
  return catHeadCard("lab-sec plain", k, { tag:"div", cls:"lab-head ", attrs:"",
    name:k === "cycle" ? name : '<button type="button" class="lab-cat" data-open="sheet-cat-' + k + '" data-title="' + title + '">' + name + '</button>',
    aside:'<button type="button" class="lab-fold" aria-expanded="true" aria-label="Fold ' + title + '">' + CHEV + '</button>' },
    '<ul>' + ls.map(function(l){ return labItem(l, i); }).join("") + '</ul>');
}
function bySystem(i: number, j: Lab[]){
  var rank = TIERS.map(function(t){ return t.key; });
  return ["cycle"].concat(categoriesShown().map(function(c){ return c.key; })).map(function(k){
    var ls = j.filter(function(l){ return l.cat === k; }).sort(function(a, b){ return rank.indexOf(tier(a, i)) - rank.indexOf(tier(b, i)); });
    return ls.length ? labSec(k, ls, i) : "";
  }).join("");
}
type Find = { tier: string; q: string; raw: string; sub: string };
var finds: Record<string, Find> = {};
function findOf(id: string){ return finds[id] || (finds[id] = { tier:"all", q:"", raw:"", sub:"" }); }
var LENS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.4 15.4L20.5 20.5"/></svg>';
function tierOpts(i: number, j: Lab[]){
  return [["all", "All", j.length]].concat(TIERS.map(function(t){ return [t.key, t.title, j.filter(function(l){ return tier(l, i) === t.key; }).length]; }));
}
function menuRows(id: string, i: number, j: Lab[]){
  var f = findOf(id), cur = marketCycles[i];
  if (f.sub === "cycle") return '<button type="button" class="lab-back" data-lab-sub="">' + CHEV + '<span>Cycle</span></button><div class="lab-sep"></div>' +
    marketCycles.slice().reverse().map(function(c){
      var L = cycLabel(c);
      return '<button type="button" role="menuitemradio" aria-checked="' + (c === cur) + '" data-lab-cycle="' + c.name + '"><span>' + L.name + '</span><small>' + L.years + '</small></button>';
    }).join("");
  return tierOpts(i, j).map(function(o){
    return '<button type="button" role="menuitemradio" aria-checked="' + (o[0] === f.tier) + '" data-lab-tier="' + o[0] + '"><span>' + o[1] + '</span><small>' + o[2] + '</small></button>';
  }).join("") + '<div class="lab-sep"></div><button type="button" class="lab-sub" data-lab-sub="cycle"><span>Cycle</span><small>' + cycLabel(cur).name + '</small>' + CHEV + '</button>';
}
function filterTags(id: string, i: number, j: Lab[]){
  var f = findOf(id), c = marketCycles[i], on = tierOpts(i, j).filter(function(o){ return o[0] === f.tier; })[0];
  var tags = (c === openCycle() ? [] : [cycLabel(c).name]).concat(f.tier === "all" ? [] : [String(on[1])]);
  return tags.length ? '<span>' + tags.join(" · ") + '</span>' : "";
}
function finder(id: string, i: number, j: Lab[]){
  var f = findOf(id);
  return '<div class="lab-find"><div class="search-field">' + LENS +
    '<input type="search" class="lab-q" placeholder="Search indicators" aria-label="Search indicators" autocomplete="off" spellcheck="false" value="' + f.raw.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;") + '">' +
    '<button type="button" class="lab-filter" aria-haspopup="true" aria-expanded="false" aria-label="Filter the results">' + slidersSvg() + filterTags(id, i, j) + '</button></div>' +
    '<div class="lab-menu" role="menu" hidden>' + menuRows(id, i, j) + '</div></div>';
}
function narrow(host: HTMLElement, id: string){
  var f = findOf(id), any = false;
  Array.prototype.forEach.call(host.querySelectorAll(".lab-sec"), function(sec: HTMLElement){
    var seen = false;
    Array.prototype.forEach.call(sec.querySelectorAll(".lab-item"), function(li: HTMLElement){
      var ok = (f.tier === "all" || li.classList.contains("t-" + f.tier)) && (li.getAttribute("data-find") || "").indexOf(f.q) !== -1;
      li.hidden = !ok; seen = seen || ok;
    });
    sec.hidden = !seen; any = any || seen;
  });
  var none = host.querySelector<HTMLElement>(".search-none"); if (none) none.hidden = any;
  var secs = host.querySelector<HTMLElement>(".home-secs"), labsBox = host.querySelector<HTMLElement>(".labs"), idle = !f.q && f.tier === "all";
  if (secs && labsBox){ secs.hidden = !idle; labsBox.hidden = idle; }
}
function menuOf(host: Element){ return host.querySelector<HTMLElement>(".lab-menu"); }
function showMenu(host: Element, open: boolean){
  var menu = menuOf(host), btn = host.querySelector<HTMLElement>(".lab-filter"); if (!menu || !btn) return;
  menu.hidden = !open; btn.setAttribute("aria-expanded", String(open));
}
function redraw(host: HTMLElement, id: string){
  findOf(id).sub = "";
  var draw = sheetRenderers[id]; if (draw) draw();
  var btn = host.querySelector<HTMLElement>(".lab-filter"); if (btn) btn.focus();
}
function pickTier(host: HTMLElement, id: string, seg: Element){
  findOf(id).tier = seg.getAttribute("data-lab-tier") || "all";
  redraw(host, id);
}
function pickCycle(host: HTMLElement, id: string, seg: Element){
  page.cycles[id] = seg.getAttribute("data-lab-cycle");
  redraw(host, id);
}
function fillMenu(host: HTMLElement, id: string, sub: string){
  var c = pageCycle(id), menu = menuOf(host); if (!c || !menu) return null;
  var i = marketCycles.indexOf(c);
  findOf(id).sub = sub;
  menu.innerHTML = menuRows(id, i, judged(i));
  return menu;
}
function openSub(host: HTMLElement, id: string, seg: Element){
  var menu = fillMenu(host, id, seg.getAttribute("data-lab-sub") || "");
  var first = menu && menu.querySelector<HTMLElement>('[aria-checked="true"], button'); if (first) first.focus();
}
function toggleMenu(host: HTMLElement, id: string){
  var menu = menuOf(host); if (!menu) return;
  if (menu.hidden) fillMenu(host, id, "");
  showMenu(host, menu.hidden);
}
export function riskLabs(i: number){ return judged(i).filter(function(l){ return tier(l, i) === "abnormal"; }); }
function judged(i: number){ return labs().filter(function(l){ return l.per[i] != null && normAt(l, i) && !unread(l, i); }); }
function score(i: number){ var j = judged(i), ok = j.filter(function(l){ return tier(l, i) === "optimal"; }).length; return { v:Math.round(100 * ok / j.length), ok:ok, of:j.length }; }
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
function methodFacts(){
  return ["<b>Regularity</b> follows FIGO’s two measures of a regular cycle: its length, and its variation, the spread from the shortest to the longest of the " + word(BASELINE) + " cycles before it."];
}
function chartDetail(){
  return '<p>Averages are based on her ' + closedCount() + ' closed cycles since ' + marketCycles[0].from + '.</p>' + facts([
    "<b>Each result</b> is a closed cycle’s average, or the open cycle’s latest reading, the figure on its card. Bull years and bleed count only calendar years that have closed.", depthWords(),
    "<b>Normal</b> is the middle half of her closed cycles, <b>Attention</b> lies outside it, <b>Risk</b> lies past Tukey’s fence, the standard outlier rule.",
    "<b>Good side:</b> a result outside its range on its good side stays Normal, such as high growth or low debt.",
    "<b>Health Score</b> is the share of results that are Normal, out of 100."
  ].concat(methodFacts(), ["<b>History, not forecast:</b> it describes her past, not what comes next."])) + srcBlock([FENCE_SRC, FIGO_SRC]);
}
export function cycleScore(m: CycleModel){ var i = marketCycles.indexOf(m.era); return i < 0 ? "" : scoreBox(i); }
export function chartDoor(m: CycleModel){
  var i = marketCycles.indexOf(m.era);
  return i < 0 ? "" : trendJump(' data-chart-cycle="' + m.era.name + '"', chartSvg(), "Cycle Statistics", trendText(m.era.story, "ai-clamp") + scoreBox(i));
}
var HOME_ID = "chart-home";
function homeHead(mark: string, title: string){ return '<div class="dx-sys-head"><span class="dx-mark" aria-hidden="true">' + mark + '</span>' + title + '</div>'; }
function statRow(name: string, v: number, of: number, side: string, page: string, cls?: string){
  var inner = '<span class="lab-score-v">' + ring(Math.min(100, 100 * v / of)) + '</span><span class="stat-main"><small>' + name + '</small><b>' + yearsWord(v) + ' years</b></span>';
  return page ? '<button type="button" class="lab-score stat-row details-link' + (cls ? " " + cls : "") + '" data-detail-idx="' + detailSlot(page) + '">' + inner + '<span class="stat-side">' + side + CHEV + '</span></button>'
    : '<span class="lab-score stat-row' + (cls ? " " + cls : "") + '">' + inner + '</span>';
}
function closedVisits(){ return visits().slice(0, closedCount()); }
function meanOf(vs: number[]){ return vs.reduce(function(a, b){ return a + b; }, 0) / vs.length; }
function sdOf(vs: number[]){ var m = meanOf(vs); return Math.sqrt(vs.reduce(function(s, v){ return s + (v - m) * (v - m); }, 0) / (vs.length - 1)); }
function lengths(){ return closedVisits().map(function(v){ return v.years; }); }
function typical(v: number){ var n = normOf(lengths()) as Norm; return v >= n.floor && v <= n.fence; }
var INFO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5" stroke-linecap="round"/></svg>';
var TICK = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function lengthBars(){
  var vs = visits(), W = 340, H = 150, top = Math.max.apply(null, vs.map(function(v){ return v.years; })), bw = W / vs.length;
  return '<svg class="len-bars" viewBox="0 0 ' + W + ' ' + (H + 22) + '" role="img" aria-label="Each cycle\u2019s length in years">' + vs.map(function(v, i){
    var h = H * v.years / top, x = i * bw + 2, c = marketCycles[i], cls = c.ongoing ? "now" : typical(v.years) ? "ok" : "odd";
    return '<rect class="' + cls + '" x="' + x.toFixed(1) + '" y="' + (H - h).toFixed(1) + '" width="' + (bw - 4).toFixed(1) + '" height="' + h.toFixed(1) + '" rx="3"/>' +
      '<text x="' + (x + (bw - 4) / 2).toFixed(1) + '" y="' + (H + 14) + '">' + String(c.from).slice(2) + '</text>';
  }).join("") + '</svg>';
}
function lengthPage(){
  var n = normOf(lengths()) as Norm, odd = marketCycles.filter(function(c, i){ return !c.ongoing && !typical(visits()[i].years); }).map(function(c){ return cycLabel(c).name; });
  return '<h3>Her cycle length</h3><p>Each bar is one cycle, from its first bull year to the bear year that closes it; the last is the cycle in progress.</p>' +
    '<p>A typical cycle lasts ' + yearsWord(n.floor) + ' to ' + yearsWord(n.fence) + ' years: inside Tukey’s fences around the middle half of her ' + lengths().length + ' closed cycles, the standard rule for an outlier. ' + listWords(odd) + ' ran longer.</p>' +
    '<p class="len-key"><i class="ok"></i>Typical <i class="odd"></i>Atypical</p>' + lengthBars() + srcBlock([FENCE_SRC]);
}
function variationPage(){
  var L = lengths(), m = meanOf(L), sd = sdOf(L), vs = closedVisits(), lo = L.indexOf(Math.min.apply(null, L)), hi = L.indexOf(Math.max.apply(null, L));
  var inside = L.filter(function(v){ return Math.abs(v - m) <= sd; }).length, last = marketCycles[closedCount() - 1];
  return '<h3>Her cycle variation</h3><p>' + (typical(L[L.length - 1]) ? 'Typical' : 'Atypical') + ': her latest closed cycle, the ' + last.name + ', lasted ' + yearsWord(L[L.length - 1]) + ' years, ' + (typical(L[L.length - 1]) ? 'within' : 'outside') + ' the range her record allows.</p>' +
    '<p><b>Shortest:</b> ' + yearsWord(vs[lo].years) + ' years, the ' + marketCycles[lo].name + '. <b>Longest:</b> ' + yearsWord(vs[hi].years) + ' years, the ' + marketCycles[hi].name + '.</p>' +
    '<h4>How it’s calculated</h4><p>Variation is the standard deviation of her cycle lengths: how far, on average, a cycle lands from her ' + yearsWord(m) + '-year mean. ' + word(inside) + ' of her ' + L.length + ' cycles fall within one standard deviation of it.</p>' +
    '<p class="len-sum"><b>' + yearsWord(m) + '</b> ± <b>' + yearsWord(sd) + '</b> years</p>';
}
function statsHome(){
  var vs = closedVisits(), L = lengths(), B = vs.map(function(v){ return v.bleed; }), longest = Math.max.apply(null, L), ok = typical(L[L.length - 1]);
  return '<section class="dx-sys">' + homeHead(calendarSvg(), "Cycle Statistics") + '<p class="stat-lede">Averages are based on her ' + L.length + ' closed cycles since ' + marketCycles[0].from + '.</p>' +
    statRow("Cycle length", meanOf(L), longest, INFO + 'More info', lengthPage()) +
    statRow("Cycle variation", sdOf(L), longest, '<span class="stat-tick' + (ok ? '' : ' odd') + '">' + TICK + '</span>' + (ok ? 'Typical' : 'Atypical'), variationPage()) +
    statRow("Period flow", meanOf(B), Math.max.apply(null, B), "", "", "flow") + '</section>';
}
function insightSec(k: string, ls: Lab[], i: number){
  var title = catTitle(k);
  return catHeadCard("lab-sec plain", k, { tag:"button", cls:"lab-head lab-cat ", attrs:' type="button" data-open="sheet-cat-' + k + '" data-title="' + title + '"',
    name:'<span class="lab-mark">' + CAT_MARK[k]() + '</span>' + title + ' <small>(' + ls.length + ')</small>', aside:CHEV },
    '<ul>' + ls.map(function(l){ return labItem(l, i); }).join("") + '</ul>');
}
function insightsHome(i: number){
  var j = judged(i), rank = TIERS.map(function(t){ return t.key; });
  return categoriesShown().map(function(c){
    var ls = j.filter(function(l){ return l.cat === c.key; }).sort(function(a, b){ return rank.indexOf(tier(a, i)) - rank.indexOf(tier(b, i)); });
    return ls.length ? insightSec(c.key, ls, i) : "";
  }).join("");
}
function homeSections(i: number){
  return '<div class="lab-score-box">' + scoreBox(i) + '</div>' + statsHome() + '<section class="dx-sys fp">' + homeHead(orbitSvg(), "Interest Environment") + fedPhasesCard(nowModel) + '</section>' +
    '<h3 class="stat-title">Insights</h3>' + insightsHome(i);
}
function drawChart(id: string){
  var host = byId(id), c = pageCycle(id);
  if (!host || !c) return;
  var i = marketCycles.indexOf(c), j = judged(i);
  host.innerHTML = finder(id, i, j) + (id === HOME_ID ? '<div class="home-secs">' + homeSections(i) + '</div>' : '') +
    '<div class="labs"' + (id === HOME_ID ? ' hidden' : '') + '>' + bySystem(i, j) + '<p class="search-none" hidden>No reading matches.</p>' + moreRow(chartDetail()) + '</div>';
  narrow(host, id);
}
function fold(t: Element){
  var btn = t.closest && t.closest(".lab-fold");
  if (btn) btn.setAttribute("aria-expanded", String(btn.getAttribute("aria-expanded") !== "true"));
}
function wireFinder(host: HTMLElement, id: string){
  page.mode[id] = "cycles";
  page.cycles[id] = null;
  sheetRenderers[id] = function(){ drawChart(id); };
  host.addEventListener("click", function(e){
    var t = e.target as Element, seg = t.closest && t.closest("[data-lab-tier]"), cyc = t.closest && t.closest("[data-lab-cycle]"), sub = t.closest && t.closest("[data-lab-sub]");
    if (seg) pickTier(host, id, seg);
    else if (cyc) pickCycle(host, id, cyc);
    else if (sub) openSub(host, id, sub);
    else if (t.closest && t.closest(".lab-filter")) toggleMenu(host, id);
    else fold(t);
  });
  host.addEventListener("input", function(e){
    var q = e.target as HTMLInputElement; if (!q.classList.contains("lab-q")) return;
    var f = findOf(id); f.raw = q.value; f.q = q.value.trim().toLowerCase(); narrow(host, id);
  });
}
function openMenus(){ return Array.prototype.filter.call(document.querySelectorAll(".lab-menu"), function(m: HTMLElement){ return !m.hidden; }) as HTMLElement[]; }
function shutMenus(){ openMenus().forEach(function(m){ var host = m.closest(".lab-find"); if (host) showMenu(host, false); }); }
export function buildCycleChart(){
  wireFinder(need(HOME_ID), HOME_ID);
  layer(0, { open:function(){ return openMenus().length > 0; }, close:shutMenus });
  document.addEventListener("click", function(e){ var t = e.target as Element; if (t.isConnected && !(t.closest && t.closest(".lab-find"))) shutMenus(); });
  document.addEventListener("click", function(e){
    var door = (e.target as Element).closest && (e.target as Element).closest("[data-chart-cycle]"); if (!door) return;
    need("tab-chart").click();
    page.cycles[HOME_ID] = door.getAttribute("data-chart-cycle");
    drawChart(HOME_ID);
  });
  need("tab-chart").addEventListener("click", function(){ drawChart(HOME_ID); });
  drawChart(HOME_ID);
}
