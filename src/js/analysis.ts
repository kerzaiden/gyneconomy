import { CHEV } from "./format.ts";
import { addSources, need, ui, viewMore } from "./dom.ts";
import { GYN, repaintLive } from "./live.ts";
import { marketCycles, sp500AnnualReturnSource, typicalCycleSrc } from "./data.ts";
import { currentEra, cycLabel, eraGrowth, eraInflation, eraMarketTotal, nowModel } from "./model.ts";
import { page } from "./history.ts";
import { econChips } from "./render-core.ts";
import { setTopbar } from "./render-pages.ts";
import { cycleView, marketStripHtml, renderCycleView, seasonStripHtml, settleStrips, showCycle } from "./dial-cycle.ts";

type Strip = ReturnType<typeof seasonStripHtml>;

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
    var btn = need("cycle-more");
    if (!btn || rows.length <= PREVIEW_CYCLES){ if (btn) btn.hidden = true; return; }
    viewMore(btn, rows.slice(PREVIEW_CYCLES));
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
    setTopbar("Herstory", null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  list.addEventListener("click", function(e){ var row = (e.target as Element).closest && (e.target as Element).closest(".era-row"); if (row) open(parseInt(row.getAttribute("data-era") || "", 10)); });
  list.addEventListener("keydown", function(e){ if ((e.key === "Enter" || e.key === " ") && (e.target as Element).classList.contains("era-row")){ e.preventDefault(); open(parseInt((e.target as Element).getAttribute("data-era") || "", 10)); } });
  GYN.on("calendarReset", function(){ leaveEra(); detail.hidden = true; listWrap.hidden = false; ui.topbarBack = null; need("topbar-back").hidden = true; });
  addSources(sp500AnnualReturnSource); addSources(typicalCycleSrc);
}
// ---- A closed cycle, shown on the Cycle tab's own page ----
var taHome: { parent: ParentNode; next: ChildNode | null } | null = null, modeHome: NonNullable<typeof page.mode> | null = null;
function parentOf(n: Node): ParentNode { var p = n.parentNode; if (!p) throw new Error("a node sits outside the page"); return p; }
function eraShow(era: Cycle | null){
  if (era && !modeHome){ modeHome = {}; for (var k in page.mode) modeHome[k] = page.mode![k]; }
  for (var id in page.cycles){ page.cycles![id] = era ? era.name : null; page.mode![id] = era ? "cycles" : modeHome ? modeHome[id] : page.mode![id]; }
  if (!era) modeHome = null;
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
