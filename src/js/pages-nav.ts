import { allSources, byId, elFrom, focusQuiet, layer, need, put, ui } from "./dom.ts";
import { GYN } from "./live.ts";
import { gdpSrc, sp500AnnualReturnSource } from "./data.ts";
import { coincident, lagging, rowReadings } from "./readings.ts";
import { ROSTER, rosterFor } from "./roster.ts";
import { cardDetailHtml, collapseEmptyBlocks, detailClose, metricSheet, seatPageFoot, sheetRenderers, subjectIcon, subjectRow, timingPill } from "./render-core.ts";
import { cycleViewEl, setTopbar } from "./render-pages.ts";
import { cycleView } from "./dial-cycle.ts";
import { renderMetricPages } from "./inner-pages.ts";
import { renderPeekAndCategories } from "./cycle-tab.ts";
export type SourceIndex = { all: Src[]; cards: { name: string; src: Src[] }[]; annual: Src[]; gdp: Src[] };
export var sourceIndex: SourceIndex = { all: [], cards: [], annual: [], gdp: [] };

type OpenPage = (el: HTMLElement | null, title: string | null, returning?: boolean, homeKey?: string | null) => void;
type PageHome = { panel: HTMLElement; bar: () => [string, (() => void) | null]; hide: () => (HTMLElement | null | undefined)[] };

function convertLeadingSigns(){
  ROSTER.filter(function(R){ return R.door === "subject"; }).forEach(function(R){
    var key = R.id.replace("sheet-sign-", ""), det = document.querySelector('.subject[data-subject="' + key + '"]'); if (!det) return;
    var sum = det.querySelector(".subject-summary"), body = det.querySelector(".subject-body"); if (!sum || !body) throw new Error("the subject " + key + " lacks its summary or body");
    var id = R.id;
    var row = document.createElement("div");
    row.className = "subject sign-row";
    row.setAttribute("data-subject", key);
    row.setAttribute("role", "button"); row.tabIndex = 0;
    row.setAttribute("data-open", id); row.setAttribute("data-title", R.name);
    var face = document.createElement("div"); face.className = "subject-summary";
    while (sum.firstChild) face.appendChild(sum.firstChild);
    var lab = face.querySelector(".subject-label");
    if (lab) lab.innerHTML = '<span class="peek-mark">' + R.mark() + '</span>' + lab.innerHTML;
    row.appendChild(face);
    var sheet = metricSheet(id);
    sheet.innerHTML = timingPill(R.timing);
    while (body.firstChild) sheet.appendChild(body.firstChild);
    det.before(row, sheet);
    det.remove();
  });
}
function sheetRank(el: Element){
  var k = el.id || "";
  if (/-timing$/.test(k)) return 0;
  if (/-head$/.test(k)) return 1;
  if (/-chart$/.test(k) || /^slot-/.test(k)) return 2;
  if (/-highlights$/.test(k)) return 4;
  return 3;
}
function orderSheet(sheet: HTMLElement){
  Array.prototype.slice.call(sheet.children)
    .map(function(el, i){ return { el:el, r:sheetRank(el), i:i }; })
    .sort(function(a, b){ return a.r - b.r || a.i - b.i; })
    .forEach(function(x){ sheet.appendChild(x.el); });
}
function rowFrom(html: string): Element { var n = elFrom(html); if (!n) throw new Error("a subject row drew nothing"); return n; }
function tagOf(ind: Indicator): Tag & { state: Tone } {
  var t = ind.tag; if (!t || t.state === undefined) throw new Error("the reading " + ind.bodyTerm + " has no tag state"); return { text:t.text, state:t.state };
}
function openTarget(el: Element){ var id = el.getAttribute("data-open"); return id ? byId(id) : null; }
function tabPanel(tab: string){ return need("panel-" + tab); }
function scrollSoon(y: number){ window.requestAnimationFrame(function(){ window.scrollTo({ top:y, behavior:"auto" }); }); }
function viewTab(){ var p = cycleView().closest(".tab-panel"); if (!p) throw new Error("the cycle view sits in no tab panel"); return p.getAttribute("data-tab"); }
function orderMetricSheets(){
  var slotted = ROSTER.filter(function(R){ return R.slot; });
  slotted.forEach(function(R){ put(R.slot + "-timing", timingPill(R.timing)); });
  slotted.forEach(function(R){
    var sheet = byId(R.id); if (sheet) orderSheet(sheet);
  });
  Array.prototype.forEach.call(document.querySelectorAll(".metric-sheet"), seatPageFoot);
}
function renderSignsList(){
  var host = need("signs-list");
  function signSubject(ind: Indicator){
    var R = rosterFor(ind), id = R.id, key = id.replace("sheet-sign-", ""), pg: IndicatorPage = ind.page || {}, timing = R.timing;
    var svg = R.mark(), tag = tagOf(ind);
    var row = rowFrom(subjectRow({
      subject:"sign-" + key, open:id, title:R.name,
      icon: subjectIcon(tag.state, svg),
      text: '<div class="subject-label">' + ind.bodyTerm + ' \u00b7 ' + ind.econTerm + '</div>' +
            '<div class="subject-value">' + ind.metric + '<span class="unit">' + ind.metricSub + '</span></div>' +
            '<div class="subject-verdict">' + (tag.text ? '<span class="tag ' + tag.state + '">' + tag.text + '</span>' : '') + '</div>' +
            (ind.peek || "")
    }));
    var d = metricSheet(id);
    d.innerHTML = (timing ? timingPill(timing) : "") + '<div class="sign-detail"></div>';
    put(d.querySelector(".sign-detail"), cardDetailHtml(ind, pg) + (pg.after ? pg.after(ind) : "") +
      (function(){ var h = ui.heldHighlights; ui.heldHighlights = ""; return h; })());
    if (pg.peeked){ host.appendChild(d); return d; }
    if (pg.seat) pg.seat(ind, d); else { host.appendChild(row); host.appendChild(d); }
    return d;
  }
  rowReadings().forEach(function(ind){ signSubject(ind); });

  convertLeadingSigns();
  orderMetricSheets();
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
    chart:    plainHome("chart", "Analysis"), portfolio:plainHome("portfolio", "Portfolio")
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
    var box = btn.closest(".page-chart, .spread-history"); if (!box) return;
    var on = btn.getAttribute("aria-pressed") !== "true";
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    box.classList.toggle("trend-on", on);
  });
  cyclePanel.addEventListener("keydown", function(e){
    if (e.key !== "Enter" && e.key !== " ") return;
    var row = (e.target as Element).closest && (e.target as Element).closest(".sign-row, tr[data-open]"); if (!row) return;
    e.preventDefault();
    openMetricPage(openTarget(row), row.getAttribute("data-title"));
  });
  NAV.open = openMetricPage;
  NAV.panel = analysisPanel;
}
function renderPagesAndNav(){
  var ctx = renderPeekAndCategories();
  if (!ctx) return;
  renderMetricPages(ctx);
  buildNav();
}
// ---- The Diagnosis: under the dial, today or at a cycle's close ----

export function bootPagesNav(){
  GYN.step("renderSignsList", renderSignsList, "build");
  renderSignsList();
  GYN.step("renderPagesAndNav", renderPagesAndNav, "render");
  renderPagesAndNav();
  sourceIndex = { all: allSources, cards: ([] as Indicator[]).concat(coincident, lagging).map(function(c){ return {name:c.bodyTerm, src:c.src || []}; }), annual: sp500AnnualReturnSource, gdp: gdpSrc };
}
