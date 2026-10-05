import { CHEV, facts, srcBlock } from "./format.ts";
import { byId, layer, moreRow, need, trendJump, trendText } from "./dom.ts";
import { page, pageCycle } from "./history.ts";
import { boltSvg, calendarSvg, circulationSvg, moodSvg, slidersSvg, stethoscopeSvg, weatherSvg } from "./marks.ts";
import { catHeadCard, sheetRenderers } from "./render-core.ts";
import { marketCycles, sp500AnnualReturns } from "./data.ts";
import { cycLabel, cycleModel, openCycle } from "./model.ts";
import { categoriesShown, keyed, ROSTER, ROSTER_BY } from "./roster.ts";
import type { CycleModel } from "./model.ts";

// ---- Her chart: every reading, cycle by cycle, against her own normal ranges ----
type Norm = { lo: number; hi: number; fence: number; floor: number };
export type Lab = { id: string; name: string; cat: string; unit: string; good?: "up" | "down"; per: (number | null)[]; norm: Norm | null; now: Norm | null };
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
function cycleLab(id: string, name: string, good: "up" | "down" | undefined, f: (v: Visit) => number): Lab {
  var per = visits().map(f);
  return { id:id, name:name, cat:"cycle", unit:" yr", good:good, per:per, norm:normOf(per.slice(0, closedCount())), now:null };
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
  return { id:R.id, name:R.name, cat:R.cat, unit:unit, good:R.good, per:per, now:readingsNorm(seen),
    norm:normOf(per.slice(0, closedCount()).filter(function(v): v is number { return v != null; })) };
}
var labCache: Lab[] | null = null;
export function labs(){
  return labCache || (labCache = [
    cycleLab("length", "Length", undefined, function(v){ return v.years; }),
    cycleLab("bull", "Bull years", "up", function(v){ return v.bull; }),
    cycleLab("bleed", "Bleed", "down", function(v){ return v.bleed; })
  ].concat(ROSTER.map(readingLab)));
}
function normAt(l: Lab, i: number){ return marketCycles[i].ongoing && l.now ? l.now : l.norm; }
function state(l: Lab, i: number){
  var v = l.per[i], n = normAt(l, i);
  if (v == null || !n || l.cat === "cycle" && marketCycles[i].ongoing) return "";
  return v > n.fence ? "high" : v < n.floor ? "low" : "";
}
export function yearsWord(v: number){ var q = Math.round(v * 4); return (Math.floor(q / 4) || q % 4 === 0 ? String(Math.floor(q / 4)) : "") + ["", "¼", "½", "¾"][q % 4]; }
export function fmt(l: Lab, v: number){
  var a = Math.abs(v), dp = a >= 100 ? 0 : !l.unit && a < 3 ? 2 : 1;
  return l.cat === "cycle" ? yearsWord(v) + l.unit : (v < 0 ? "−" : "") + a.toFixed(dp) + l.unit;
}
var TIERS = [{ key:"abnormal", title:"Risk", cls:"t-abnormal" }, { key:"borderline", title:"Attention", cls:"t-borderline" }, { key:"optimal", title:"Normal", cls:"t-optimal" }];
function tier(l: Lab, i: number){
  var v = l.per[i] as number, n = normAt(l, i) as Norm, up = v > n.hi, down = v < n.lo;
  return !up && !down || up && l.good === "up" || down && l.good === "down" ? "optimal" : state(l, i) ? "abnormal" : "borderline";
}
function catTitle(key: string){ return key === "cycle" ? "Cycle" : categoriesShown().filter(function(c){ return c.key === key; })[0].title; }
function side(l: Lab, i: number){ var v = l.per[i] as number, n = normAt(l, i) as Norm; return v > n.hi ? "to-up" : v < n.lo ? "to-down" : "to-level"; }
function findWords(l: Lab){
  var R = ROSTER_BY[l.id];
  return [l.name, catTitle(l.cat)].concat(R ? [R.head, R.group || "", R.term || "", R.cardUnit || ""] : []).join(" ").toLowerCase().replace(/"/g, "");
}
function rowTag(l: Lab){ return ROSTER_BY[l.id] ? 'button class="lab-row" type="button" data-open="' + l.id + '" data-title="' + l.name + '"' : 'div class="lab-row"'; }
function labItem(l: Lab, i: number){
  var n = normAt(l, i) as Norm, tag = ROSTER_BY[l.id] ? "button" : "div", t = TIERS.filter(function(t){ return t.key === tier(l, i); })[0];
  return '<li class="lab-item ' + side(l, i) + ' ' + t.cls + '" data-find="' + findWords(l) + '"><' + rowTag(l) + '><div><b>' + l.name + '</b><small class="lab-where">' + t.title + '</small></div>' +
    '<div class="lab-res"><b>' + fmt(l, l.per[i] as number) + '<i class="lab-to" aria-hidden="true"></i></b>' +
    '<small>' + (fmt(l, n.lo) === fmt(l, n.hi) ? fmt(l, n.lo) : fmt(l, n.lo) + " – " + fmt(l, n.hi)) + '</small></div></' + tag + '></li>';
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
  return '<span class="lab-score"><span><b>Health score</b><small>' + scoreTier(s.v) + ' against ' + word(closedCount()) + ' closed cycles</small></span>' +
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
function judged(i: number){ return labs().filter(function(l){ return l.per[i] != null && normAt(l, i) && !(l.cat === "cycle" && marketCycles[i].ongoing); }); }
function score(i: number){ var j = judged(i), ok = j.filter(function(l){ return tier(l, i) === "optimal"; }).length; return { v:Math.round(100 * ok / j.length), ok:ok, of:j.length }; }
function outside(i: number){ return labs().filter(function(l){ var st = state(l, i); return st === "high" || st === "low"; }); }
export function listWords(xs: string[]){ return xs.length > 1 ? xs.slice(0, -1).join(", ") + " and " + xs[xs.length - 1] : xs[0] || ""; }
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
  return '<h4>How Cycle Health reads</h4>' + facts([
    "For a closed cycle each reading is its average over the cycle’s years, from its first bull year to its last bear year. For the cycle in progress it is the latest reading, judged against every reading of her closed cycles rather than their averages, because a single reading swings wider than an average does. Bull years are the calendar years the S&amp;P&nbsp;500’s total return closed up; the bleed is the run of bear years that closes the cycle.",
    "Each reading is sorted the way a blood test is. Normal (apricot) is the middle half of her closed cycles. Attention (yellow) is outside that middle half but within Tukey’s fences, one and a half times its span beyond it. Risk (red) is past a fence, the standard rule for an outlier. Under each result its tier is named, Normal, Attention or Risk, and the triangle by the figure points up when it is above its range, down when below. A result outside its range on the side that is good for that reading stays Normal: higher is good for growth, the S&amp;P&nbsp;500, consumer demand, the equity risk premium, confidence, the federal budget, productivity growth and bull years; lower is good for Shiller CAPE, the Buffett indicator, volatility, federal debt, interest payments, households’ debt service, the unemployment rate and the bleed. Temperature, interest rates, pressure, pulse, volume and a cycle’s length are judged on both sides, because either way can be a strain.",
    "Each normal range rests on the closed cycles that have the reading: a reading that begins late, like Volatility (1986) or Pressure and Households (2005), has only a few, and its range weighs less for it.",
    "Her health score is the share of the readings judged in a cycle that are normal, out of 100; each reading counts once. The score itself is judged the same way against the scores of her closed cycles: Normal from the lowest quarter of them up, Attention below that, Risk past the lower fence. The cycle’s own length, bull years and bleed are judged only once it has closed.",
    "Her Cycle Health describes her history, not what comes next."
  ]) + srcBlock([FENCE_SRC]);
}
export function chartDoor(m: CycleModel){
  var i = marketCycles.indexOf(m.era);
  return i < 0 ? "" : trendJump(' data-chart-cycle="' + m.era.name + '"', stethoscopeSvg(), "Cycle Health", trendText(visitNote(i)) + scoreBox(i));
}
var HOME_ID = "chart-home";
function drawChart(id: string){
  var host = byId(id), c = pageCycle(id);
  if (!host || !c) return;
  var i = marketCycles.indexOf(c), j = judged(i);
  host.innerHTML = finder(id, i, j) +
    '<div class="labs">' + bySystem(i, j) + '<p class="search-none" hidden>No reading matches.</p>' + moreRow(chartDetail()) + '</div>';
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
