import { allSources, byId, focusQuiet, layer, need, ui } from "./dom.ts";
import { GYN } from "./live.ts";
import { gdpSrc, sp500AnnualReturnSource } from "./data.ts";
import { coincident, lagging } from "./readings.ts";
import { collapseEmptyBlocks, detailClose, seatPageFoot, sheetRenderers } from "./render-core.ts";
import { defineMarketReadings } from "./pressure.ts";
import { cycleViewEl, defineSubjectReadings, setTopbar } from "./render-pages.ts";
import { cycleView } from "./dial-cycle.ts";
import { defineInnerReadings, wirePageControls } from "./inner-pages.ts";
import { defineSplits } from "./indicators.ts";
import { mountReadings } from "./reading.ts";
type SourceIndex = { all: Src[]; cards: { name: string; src: Src[] }[]; annual: Src[]; gdp: Src[] };
export var sourceIndex: SourceIndex = { all: [], cards: [], annual: [], gdp: [] };

type OpenPage = (el: HTMLElement | null, title: string | null, returning?: boolean, homeKey?: string | null) => void;
type PageHome = { panel: HTMLElement; bar: () => [string, (() => void) | null]; hide: () => (HTMLElement | null | undefined)[] };

function openTarget(el: Element){ var id = el.getAttribute("data-open"); return id ? byId(id) : null; }
function tabPanel(tab: string){ return need("panel-" + tab); }
function scrollSoon(y: number){ window.requestAnimationFrame(function(){ window.scrollTo({ top:y, behavior:"auto" }); }); }
function viewTab(){ var p = cycleView().closest(".tab-panel"); if (!p) throw new Error("the cycle view sits in no tab panel"); return p.getAttribute("data-tab"); }
function renderSignsList(){
  defineSplits();
  defineInnerReadings();
  defineSubjectReadings();
  defineMarketReadings();
  mountReadings(need("signs-list"));
  Array.prototype.forEach.call(document.querySelectorAll(".metric-sheet"), seatPageFoot);
}
// ---- THE NAVIGATION CONTROLLER ----
var NAV: { open: OpenPage | null; panel: HTMLElement | null } = { open: null, panel: null };
var BACK = { depth: 0, skip: false };
function backPush(){ try { history.pushState({ gyn: BACK.depth + 1 }, ""); BACK.depth++; } catch (e) {} }
function backClear(){ if (!BACK.depth) return; BACK.skip = true; history.go(-BACK.depth); BACK.depth = 0; }
function backPopped(){ if (BACK.skip){ BACK.skip = false; return false; } if (!BACK.depth) return false; BACK.depth--; return true; }
function plainHome(tab: string, title: string): PageHome {
  return { panel:tabPanel(tab), bar:function(){ return [title, null]; }, hide:function(){ return [byId(tab + "-home")]; } };
}
function buildNav(){
  // ---- The metric page ----
  var cyclePanel = tabPanel("cycle");
  var analysisPanel = tabPanel("analysis");
  var metricPage = document.createElement("div");
  metricPage.id = "metric-page"; metricPage.hidden = true;
  cyclePanel.appendChild(metricPage);
  var PAGE_HOME: Record<string, PageHome> = {
    cycle:    { panel:cyclePanel,    bar:function(){ return ["Current Cycle", null]; },
                hide:function(){ return [cycleViewEl, byId("today-analysis")]; } },
    analysis: { panel:analysisPanel, bar:function(){ return ui.eraOpen ? [ui.eraOpen.name, ui.eraPageBack] : ["Herstory", null]; },
                hide:function(){ return [byId(ui.eraOpen ? "calendar-cycle" : "calendar-list")]; } },
    chart:    { panel:tabPanel("chart"), bar:function(){ return ["Analysis", ui.chartBack]; }, hide:function(){ return [byId("chart-home")]; } }, portfolio:plainHome("portfolio", "Portfolio")
  };
  var homeCtx = PAGE_HOME.cycle;
  var openSheet: HTMLElement | null = null, openHome: ParentNode | null = null, returnScroll = 0;
  var pageStack: { id: string; title: string | null; scroll: number }[] = [], openers: (HTMLElement | SVGElement | null)[] = [];

  function homeFromPage(keepScroll?: boolean){
    if (!openSheet) return; if (!openHome) throw new Error("the open page has no home");
    openHome.appendChild(openSheet); openSheet.hidden = true;
    openSheet = null; openHome = null;
    metricPage.hidden = true;
    homeCtx.hide().forEach(function(n){ if (n) n.hidden = false; });
    var bar = homeCtx.bar(); setTopbar(bar[0], bar[1]);
    if (keepScroll) return;
    scrollSoon(returnScroll);
  }
  function closeMetricPage(){ backClear(); pageStack.length = 0; openers.length = 0; homeFromPage(); }
  function backFromPage(popped?: boolean){
    if (popped !== true && BACK.depth){ history.back(); return; }
    var prev = pageStack.pop(), from = openers.pop();
    if (!prev) closeMetricPage();
    else {
      homeFromPage(true);
      openMetricPage(byId(prev.id), prev.title, true);
      scrollSoon(prev.scroll);
    }
    if (!focusQuiet(from)) focusQuiet(byId("topbar-title"));
  }
  layer(4, { open:function(){ return !!openSheet; }, close:backFromPage });
  window.addEventListener("popstate", function(){ if (backPopped() && openSheet) backFromPage(true); });
  GYN.on("metricPageReset", closeMetricPage);

  function openMetricPage(el: HTMLElement | null, title: string | null, returning?: boolean, homeKey?: string | null){
    if (!el) return;
    seatPageFoot(el);
    if (!returning && openSheet !== el){ openers.push(document.activeElement as HTMLElement | null); backPush(); }
    if (!returning && openSheet && openSheet !== el)
      pageStack.push({ id:openSheet.id, title:need("topbar-title").textContent, scroll:window.scrollY || 0 });
    var wasOpen = !!openSheet;
    homeFromPage(true);
    if (!wasOpen) returnScroll = window.scrollY || 0;
    if (!wasOpen && !returning){
      homeCtx = PAGE_HOME[homeKey as string] || PAGE_HOME.cycle;
      homeCtx.panel.appendChild(metricPage);
    }
    openSheet = el; openHome = el.parentNode;
    homeCtx.hide().forEach(function(n){ if (n) n.hidden = true; });
    el.hidden = false; metricPage.appendChild(el); metricPage.hidden = false;
    setTopbar(title || "", function(){ backFromPage(); });
    if (!returning) window.scrollTo({ top:0, behavior:"auto" });
    var draw = sheetRenderers[el.id]; if (draw) draw(metricPage.clientWidth);
    collapseEmptyBlocks(el);
    if (!returning) focusQuiet(byId("topbar-title"));
  }
  [cyclePanel, need("detail-modal-body")].forEach(function(host){ host.addEventListener("click", function(e){
    var btn = (e.target as Element).closest && (e.target as Element).closest("[data-open]"), tab = host === cyclePanel ? "cycle" : viewTab(); if (!btn) return;
    if (detailClose) detailClose(); openMetricPage(openTarget(btn), btn.getAttribute("data-title"), false, tab);
  }); });
  ["analysis", "chart", "portfolio"].forEach(function(key){
    var panel = PAGE_HOME[key].panel, go = function(el: Element){ openMetricPage(openTarget(el), el.getAttribute("data-title"), false, key); };
    panel.addEventListener("click", function(e){ var btn = (e.target as Element).closest && (e.target as Element).closest("[data-open]"); if (btn) go(btn); });
    panel.addEventListener("keydown", function(e){
      var row = (e.key === "Enter" || e.key === " ") && (e.target as Element).closest && (e.target as Element).closest("[data-open]");
      if (row){ e.preventDefault(); go(row); }
    });
  });
  metricPage.addEventListener("click", function(e){
    var btn = (e.target as Element).closest && (e.target as Element).closest(".trendpill.can-toggle"); if (!btn) return;
    var box = btn.closest(".page-chart"); if (!box) return;
    var on = btn.getAttribute("aria-pressed") !== "true";
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    box.classList.toggle("trend-on", on);
  });
  cyclePanel.addEventListener("keydown", function(e){
    if (e.key !== "Enter" && e.key !== " ") return;
    var row = (e.target as Element).closest && (e.target as Element).closest("tr[data-open]"); if (!row) return;
    e.preventDefault();
    openMetricPage(openTarget(row), row.getAttribute("data-title"));
  });
  NAV.open = openMetricPage;
  NAV.panel = analysisPanel;
}
function renderPagesAndNav(){
  wirePageControls();
  buildNav();
}
// ---- The Diagnosis: under the dial, today or at a cycle's close ----

export function bootPagesNav(){
  GYN.step("renderSignsList", renderSignsList, "build");
  renderSignsList();
  GYN.step("renderPagesAndNav", renderPagesAndNav, "build");
  renderPagesAndNav();
  sourceIndex = { all: allSources, cards: ([] as Indicator[]).concat(coincident, lagging).map(function(c){ return {name:c.bodyTerm, src:c.src || []}; }), annual: sp500AnnualReturnSource, gdp: gdpSrc };
}
