import { CHEV } from "./format.ts";
import { addSources, need, ui } from "./dom.ts";
import { GYN, repaintLive } from "./live.ts";
import { colPeek, pulsePeek, vitalRingSvg } from "./charts.ts";
import { calendarTodayY } from "./refresh-season.ts";
import { marketCycles, sp500AnnualReturnSource, typicalCycleSrc } from "./data.ts";
import { currentEra, cycLabel, eraGrowth, eraInflation, eraMarketTotal, nowModel } from "./model.ts";
import { page } from "./history.ts";
import { CATEGORIES } from "./roster.ts";
import { econChips } from "./render-core.ts";
import { setTopbar } from "./render-pages.ts";
import { eraFig, kT, prettyK, readingRoster, rosterRows, upTo } from "./era.ts";
import { replaceCategory } from "./category-analysis.ts";
import { cycleView, marketStripHtml, renderCycleView, seasonStripHtml, settleStrips, showCycle } from "./dial-cycle.ts";

type Strip = ReturnType<typeof seasonStripHtml>;
type EraRow = ReturnType<typeof readingRoster>[number];
type EraNone = { none: true; word: string };
type EraSeen = { none?: undefined; row: EraRow; v: number; raw: number; lo: number; hi: number; when: string; second: number | null; peek: number[] };

// ---- RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it ----
function cycleRowsHtml(){
  var strips: Record<number, Strip> = {};
  marketCycles.forEach(function(c){ strips[c.from] = seasonStripHtml(c); });
  return marketCycles.slice().reverse().map(function(cyc){
    var total = eraMarketTotal(cyc), strip = strips[cyc.from];
    var head = '<span class="era-name">' + cyc.name + '</span>' +
      '<span class="era-years">' + cycLabel(cyc).years + ' <b>(' + strip.years + 'Y)</b></span>' + CHEV;
    var bands = strip.strip + marketStripHtml(cyc, strip.span, strip.done);
    var foot = econChips(eraGrowth(cyc).total, eraInflation(cyc).total, total, 0, !!cyc.ongoing, "");
    return '<div class="era-row" role="button" tabindex="0" data-era="' + cyc.from + '"><div class="era-head">' + head + '</div>' +
          '<div class="era-bands">' + bands + '</div>' + foot + '</div>';
  }).join('');
}
function renderCycleList(){
  var list = need("cycle-list");
  list.innerHTML = cycleRowsHtml();
  settleStrips();
  var PREVIEW_CYCLES = 99;
  (function(){
    var rows: HTMLElement[] = [].slice.call(list.querySelectorAll(".era-row"));
    var btn = need("cycle-more"), label = need("cycle-more-label");
    if (!btn || rows.length <= PREVIEW_CYCLES){ if (btn) btn.hidden = true; return; }
    var extra = rows.slice(PREVIEW_CYCLES), open = false;
    function apply(){
      extra.forEach(function(r){ r.hidden = !open; });
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      label.textContent = open ? "View less" : "View more";
    }
    apply();
    btn.addEventListener("click", function(){ open = !open; apply(); });
  })();

  var listWrap = need("calendar-list"), detail = need("calendar-cycle");
  function open(from: number){
    var era = marketCycles.filter(function(c){ return c.from === from; })[0];
    if (!era) return;
    if (era.ongoing){
      var tab = document.querySelector<HTMLElement>('.tab-btn[data-tab="cycle"]');
      if (tab){ tab.click(); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    }
    enterEra(era, detail);
    listWrap.hidden = true; detail.hidden = false;
    setTopbar(era.name, (ui.eraPageBack = back));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function back(){
    leaveEra(); detail.hidden = true; listWrap.hidden = false;
    setTopbar("Analysis", null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  list.addEventListener("click", function(e){ var row = (e.target as Element).closest && (e.target as Element).closest(".era-row"); if (row) open(parseInt(row.getAttribute("data-era") || "", 10)); });
  list.addEventListener("keydown", function(e){ if ((e.key === "Enter" || e.key === " ") && (e.target as Element).classList.contains("era-row")){ e.preventDefault(); open(parseInt((e.target as Element).getAttribute("data-era") || "", 10)); } });
  GYN.on("calendarReset", function(){ leaveEra(); detail.hidden = true; listWrap.hidden = false; ui.topbarBack = null; need("topbar-back").hidden = true; });
  addSources(sp500AnnualReturnSource); addSources(typicalCycleSrc);
}
// ---- A closed cycle, shown on the Cycle tab's own page ----
var taHome: { parent: ParentNode; next: ChildNode | null } | null = null, modeHome: NonNullable<typeof page.mode> | null = null;
function eraReading(r: EraRow, era: Cycle): EraNone | EraSeen {
  var from = era.from, to = era.to || calendarTodayY;
  var span = r.seen.filter(function(d){ var y = +d.k.slice(0, 4); return y >= from && y <= to; });
  if (!span.length) return { none:true, word:"Not measured before " + prettyK(r, r.first.k) };
  var end = span[span.length - 1], sign = r.flip ? -1 : 1, vs = span.map(function(d){ return sign * d.v; });
  var second = r.pair ? upTo(r.pair, end.k).pop() : null;
  return { row:r, v:sign * end.v, raw:end.v, lo:Math.min.apply(null, vs), hi:Math.max.apply(null, vs), when:prettyK(r, end.k),
           second:second && kT(second.k) >= from ? second.v : null,
           peek:upTo(r.peek || r.seen, end.k).map(function(d){ return sign * d.v; }) };
}
function eraValue(val: Element, t: TodaySnapshot, r: EraRow, e: EraSeen){
  val.innerHTML = t.value;
  var unit = val.querySelector(".ci-unit"), surplus = r.flip && e.v < 0;
  lead(val).nodeValue = figOf(t)(surplus ? -e.v : e.v, r.pair ? e.second : null);
  if (unit && (r.eraUnit || surplus)) unit.textContent = surplus ? "surplus, of GDP" : r.eraUnit as string;
}
function eraRange(t: TodaySnapshot, r: EraRow, e: EraSeen){
  if (e.lo === e.hi) return "Flat all cycle";
  var f = figOf(t), pc = r.pair ? "%" : "";
  return (r.pair ? "Paid " : "") + f(e.lo) + pc + " to " + f(e.hi) + pc + " over the cycle";
}
function eraMini(t: TodaySnapshot, r: EraRow, e: EraSeen){
  if (r.ring && /vital-ring/.test(t.mini)) return vitalRingSvg(r.ring(e.v), "accent", r.name + " at " + e.v.toFixed(2));
  if (r.pulse && /pulsepeek/.test(t.mini)) return pulsePeek(e.v, r.pulse);
  return colPeek(e.peek, function(){ return "era-col"; }, r.mid, r.rule);
}
function lead(val: Element): ChildNode { var n = val.firstChild; if (!n) throw new Error("a card's value is empty"); return n; }
function figOf(t: TodaySnapshot){ if (t.text == null) throw new Error("a card had no figure text"); return eraFig(t.text); }
function part(item: Element, sel: string): Element { var n = item.querySelector(sel); if (!n) throw new Error("the card " + item.getAttribute("data-open") + " has no " + sel); return n; }
function parentOf(n: Node): ParentNode { var p = n.parentNode; if (!p) throw new Error("a node sits outside the page"); return p; }
function eraCard(item: Element, r: EraRow | undefined, era: Cycle | null){
  var val = part(item, ".ci-value"), when = part(item, ".ci-when"), mini = item.querySelector(".ci-mini");
  var word = item.querySelector(".ci-word");
  var t = item.__today || (item.__today = { value:val.innerHTML, text:lead(val).nodeValue, word:word ? word.innerHTML : null,
                                      when:when.textContent!, mini:mini ? mini.innerHTML : "" });
  if (!era){
    val.innerHTML = t.value; when.textContent = t.when; item.__today = null;
    if (mini) mini.innerHTML = t.mini;
    if (word && t.word == null) word.remove(); else if (word && t.word != null) word.innerHTML = t.word;
    return;
  }
  var e: EraNone | EraSeen = r ? eraReading(r, era) : { none:true, word:"No history in the app" };
  if (!word){ word = document.createElement("span"); word.className = "ci-word"; parentOf(val).appendChild(word); }
  when.textContent = e.none ? "" : e.when;
  if (mini) mini.innerHTML = e.none ? "" : eraMini(t, e.row, e);
  if (e.none){ val.innerHTML = "\u2014"; word.textContent = e.word; return; }
  eraValue(val, t, e.row, e); word.textContent = eraRange(t, e.row, e);
}
function eraCards(era: Cycle | null){
  var rows = rosterRows();
  Array.prototype.forEach.call(document.querySelectorAll(".cat-sheet .cat-item[data-open]"), function(item: Element){
    eraCard(item, rows[item.getAttribute("data-preview") || item.getAttribute("data-open") || ""], era);
  });
}
function eraShow(era: Cycle | null){
  eraCards(era);
  if (era && !modeHome){ modeHome = {}; for (var k in page.mode) modeHome[k] = page.mode![k]; }
  for (var id in page.cycles){ page.cycles![id] = era ? era.name : null; page.mode![id] = era ? "cycles" : modeHome ? modeHome[id] : page.mode![id]; }
  if (!era) modeHome = null;
  CATEGORIES.forEach(replaceCategory);
}
function enterEra(era: Cycle, page: HTMLElement){
  var ta = need("today-analysis");
  if (!taHome) taHome = { parent:parentOf(ta), next:ta.nextSibling };
  ui.eraOpen = era; showCycle(era);
  page.appendChild(cycleView()); page.appendChild(ta);
  eraShow(era);
}
function leaveEra(){
  if (!ui.eraOpen) return;
  var ta = need("today-analysis"), home = taHome; if (!home) throw new Error("the analysis has no home to return to");
  home.parent.insertBefore(ta, home.next); home.parent.insertBefore(cycleView(), ta);
  ui.eraOpen = null; eraShow(null); showCycle(currentEra); repaintLive();
}
export function bootAnalysis(){
  GYN.step("renderCycleList", renderCycleList, "wire");
  renderCycleList();
  renderCycleView(nowModel);
}
