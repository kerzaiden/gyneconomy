import { CHEV } from "./format.js";
import { allSources, byId, elFrom, focusQuiet, layer, put, ui } from "./dom.js";
import { GYN } from "./live.js";
import { gdpSrc, sp500AnnualReturnSource } from "./data.js";
import { coincident, lagging, rowReadings } from "./readings.js";
import { categoriesShown, ROSTER, ROSTER_BY, rosterFor, TIMING } from "./roster.js";
import { cardDetailHtml, collapseEmptyBlocks, detailClose, metricSheet, registerTiming, seatPageFoot, sheetRenderers, subjectIcon, subjectRow, timingMembers, timingPill } from "./render-core.js";
import { cycleViewEl, setTopbar } from "./render-pages.js";
import { groupId } from "./indicators.js";
import { renderMetricPages } from "./inner-pages.js";
import { renderPeekAndCategories } from "./cycle-tab.js";

function convertLeadingSigns(){
  ROSTER.filter(function(R){ return R.door === "subject"; }).forEach(function(R){
    var key = R.id.replace("sheet-sign-", ""), det = document.querySelector('.subject[data-subject="' + key + '"]'); if (!det) return;
    var sum = det.querySelector(".subject-summary"), body = det.querySelector(".subject-body");
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
    det.parentNode.insertBefore(row, det);
    det.parentNode.insertBefore(sheet, det);
    det.parentNode.removeChild(det);
  });
}
function orderMetricSheets(){
  var slotted = ROSTER.filter(function(R){ return R.slot; });
  slotted.forEach(function(R){ put(R.slot + "-timing", timingPill(R.timing)); });
  slotted.forEach(function(R){
    var sheet = byId(R.id); if (!sheet) return;
    function rank(el){
      var k = el.id || "";
      if (/-timing$/.test(k)) return 0;
      if (/-head$/.test(k)) return 1;
      if (/-chart$/.test(k) || /^slot-/.test(k)) return 2;
      if (/-highlights$/.test(k)) return 4;
      return 3;
    }
    Array.prototype.slice.call(sheet.children)
      .map(function(el, i){ return { el:el, r:rank(el), i:i }; })
      .sort(function(a, b){ return a.r - b.r || a.i - b.i; })
      .forEach(function(x){ sheet.appendChild(x.el); });
  });
  Array.prototype.forEach.call(document.querySelectorAll(".metric-sheet"), seatPageFoot);
}
function renderSignsList(){
  var host = byId("signs-list");
  function signSubject(ind){
    var R = rosterFor(ind), id = R.id, key = id.replace("sheet-sign-", ""), pg = ind.page || {}, timing = R.timing;
    var svg = R.mark();
    var row = elFrom(subjectRow({
      subject:"sign-" + key, open:id, title:R.name,
      icon: subjectIcon(ind.tag.state, svg),
      text: '<div class="subject-label">' + ind.bodyTerm + ' \u00b7 ' + ind.econTerm + '</div>' +
            '<div class="subject-value">' + ind.metric + '<span class="unit">' + ind.metricSub + '</span></div>' +
            '<div class="subject-verdict"><span class="tag ' + ind.tag.state + '">' + ind.tag.text + '</span></div>' +
            (ind.peek || "")
    }));
    var d = metricSheet(id);
    d.innerHTML = (timing ? timingPill(timing) : "") + '<div class="sign-detail"></div>';
    d.querySelector(".sign-detail").innerHTML = cardDetailHtml(ind, pg) + (pg.after ? pg.after(ind) : "") +
      (function(){ var h = ui.heldHighlights; ui.heldHighlights = ""; return h; })();
    registerTiming(timing, {
      title:R.name, sub:ind.econTerm, metric:ind.metric, metricSub:ind.metricSub,
      tag:ind.tag, icon:subjectIcon(ind.tag.state, svg),
      target:id
    });
    if (pg.peeked){ host.appendChild(d); return d; }
    if (pg.seat) pg.seat(ind, d); else { host.appendChild(row); host.appendChild(d); }
    return d;
  }
  rowReadings().forEach(function(ind){ signSubject(ind); });

  convertLeadingSigns();
  orderMetricSheets();
}
/* ---- THE ROSTER'S OWN PIECES ---- */
function partsOf(el, unitSel){
  if (!el) return { v:"", u:"", w:"", s:"" };
  var c = el.cloneNode(true), u = c.querySelector(unitSel), t = c.querySelector(".tag");
  var unit = u ? u.textContent.trim() : "", word = t ? t.textContent.trim() : "";
  var st = t ? (t.className.match(/good|warning|serious|critical/) || [""])[0] : "";
  if (u) u.parentNode.removeChild(u);
  if (t) t.parentNode.removeChild(t);
  return { v:c.textContent.trim(), u:unit, w:word, s:st };
}
function authored(sel, key){ return document.querySelector(sel) || (window.__CAT_SNAP || {})[key] || null; }
function registerRoster(){
  ROSTER.filter(function(R){ return R.door === "peek" && !R.term; }).forEach(function(R){
    var card = authored('.peek[data-open="' + R.id + '"]', R.id); if (!card) return;
    var pv = partsOf(card.querySelector(".peek-value"), ".peek-unit");
    var st = (card.className.match(/good|warning|serious|critical/) || [""])[0];
    registerTiming(R.timing, {
      title:R.name, metric:pv.v, unit:pv.u,
      word:(card.querySelector(".peek-word") || {}).textContent || "",
      state:st, icon:subjectIcon(st || "norm", R.mark()), target:R.id
    });
  });
  ROSTER.filter(function(R){ return R.door === "subject"; }).forEach(function(R){
    var row = authored('.sign-row[data-open="' + R.id + '"]', R.id); if (!row) return;
    var rv = partsOf(row.querySelector(".subject-value"), ".unit");
    var say = ((row.querySelector(".subject-say") || {}).textContent || "").trim();
    registerTiming(R.timing, {
      title:R.name, sub:R.name, metric:rv.v, unit:rv.u,
      word:rv.w || say, state:rv.s, icon:subjectIcon(rv.s || "norm", R.mark()), target:R.id
    });
  });
}
function indRow(e, kind){
  return subjectRow({ cls:"ind-row kind-" + kind, open:e.target, title:e.title, icon:e.icon,
    text:'<div class="ind-line"><span class="ind-name">' + e.title + '</span><span class="subject-value ind-fig">' + e.metric + '</span></div>' });
}
function indGroupRow(groups, rows, item, e, kind, find){
  var grp = item.parentNode.getAttribute("data-group"), gm = item.parentNode.__mark;
  if (!groups[grp]){ groups[grp] = { title:grp, icon:gm ? subjectIcon("norm", gm()) : e.icon, kinds:{}, terms:[grp] }; rows.push(groups[grp]); }
  groups[grp].kinds[kind] = 1; groups[grp].terms.push(find[e.title]);
}
function catMembers(sheet){
  var out = [];
  Array.prototype.forEach.call(sheet.querySelectorAll(".cat-item[data-open]"), function(card){
    var grp = card.hasAttribute("data-preview") && byId(card.getAttribute("data-open"));
    out.push.apply(out, grp ? [].slice.call(grp.querySelectorAll(".cat-item[data-open]")) : [card]);
  });
  return out;
}
function indRows(sheet, find){
  var rows = [], groups = {};
  catMembers(sheet).forEach(function(item){
    var target = item.getAttribute("data-open"), inGroup = item.parentNode.hasAttribute("data-group");
    IND_ORDER.forEach(function(kind){ timingMembers[kind].forEach(function(e){
      if (e.target === target) inGroup ? indGroupRow(groups, rows, item, e, kind, find) : rows.push(indRow(e, kind));
    }); });
  });
  return rows.map(function(r){
    if (typeof r === "string") return r;
    find[r.title] = r.terms.join(" ").toLowerCase();
    return indRow({ target:groupId(r.title), title:r.title, icon:r.icon, metric:"" }, Object.keys(r.kinds).join(" kind-") + " ind-grp");
  });
}
function indCategoryHtml(c, find){
  var key = c.key, sheet = byId("sheet-cat-" + key);
  if (!sheet) return "";
  var rows = indRows(sheet, find);
  return '<section class="ind-cat ind-card cat-' + key + '"><button type="button" class="ind-cat-head" data-open="sheet-cat-' + key +
    '" data-title="' + c.title + '"><span class="ind-cat-name">' + c.title + '</span>' + CHEV + '</button>' + rows.join("") + '</section>';
}
/* ---- THE NAVIGATION CONTROLLER ---- */
var NAV = { open: null, panel: null };
function buildNav(){
  // ---- The metric page ----
  var cyclePanel = document.querySelector('.tab-panel[data-tab="cycle"]');
  var analysisPanel = document.querySelector('.tab-panel[data-tab="analysis"]');
  var metricPage = document.createElement("div");
  metricPage.id = "metric-page"; metricPage.hidden = true;
  cyclePanel.appendChild(metricPage);
  var PAGE_HOME = {
    cycle:    { panel:cyclePanel,    bar:function(){ return ["Current Cycle", null]; },
                hide:function(){ return [cycleViewEl, byId("today-analysis")]; } },
    analysis: { panel:analysisPanel, bar:function(){ return ui.eraOpen ? [ui.eraOpen.name, ui.eraPageBack] : ["Analysis", null]; },
                hide:function(){ return [byId(ui.eraOpen ? "calendar-cycle" : "calendar-list")]; } },
    search:   { panel:document.querySelector('.tab-panel[data-tab="search"]'), bar:function(){ return ["Search", null]; },
                hide:function(){ return [byId("search-home")]; } }
  };
  var homeCtx = PAGE_HOME.cycle;
  var openSheet = null, openHome = null, returnScroll = 0;
  var pageStack = [], openers = [];

  function homeFromPage(keepScroll){
    if (!openSheet) return;
    openHome.appendChild(openSheet); openSheet.hidden = true;
    openSheet = null; openHome = null;
    metricPage.hidden = true;
    homeCtx.hide().forEach(function(n){ if (n) n.hidden = false; });
    setTopbar.apply(null, homeCtx.bar());
    if (keepScroll) return;
    var y = returnScroll;
    window.requestAnimationFrame(function(){ window.scrollTo({ top:y, behavior:"auto" }); });
  }
  function closeMetricPage(){ pageStack.length = 0; openers.length = 0; homeFromPage(); }
  function backFromPage(){
    var prev = pageStack.pop(), from = openers.pop();
    if (!prev) closeMetricPage();
    else {
      homeFromPage(true);
      openMetricPage(byId(prev.id), prev.title, true);
      window.requestAnimationFrame(function(){ window.scrollTo({ top:prev.scroll, behavior:"auto" }); });
    }
    if (!focusQuiet(from)) focusQuiet(byId("topbar-title"));
  }
  layer(4, { open:function(){ return !!openSheet; }, close:backFromPage });
  ui.metricPageReset = closeMetricPage;

  function openMetricPage(el, title, returning, homeKey){
    if (!el) return;
    seatPageFoot(el);
    if (!returning && openSheet !== el) openers.push(document.activeElement);
    if (!returning && openSheet && openSheet !== el)
      pageStack.push({ id:openSheet.id, title:byId("topbar-title").textContent, scroll:window.scrollY || 0 });
    var wasOpen = !!openSheet;
    homeFromPage(true);
    if (!wasOpen) returnScroll = window.scrollY || 0;
    if (!wasOpen && !returning){
      homeCtx = PAGE_HOME[homeKey] || PAGE_HOME.cycle;
      homeCtx.panel.appendChild(metricPage);
    }
    openSheet = el; openHome = el.parentNode;
    homeCtx.hide().forEach(function(n){ if (n) n.hidden = true; });
    el.hidden = false; metricPage.appendChild(el); metricPage.hidden = false;
    setTopbar(title, backFromPage);
    if (!returning) window.scrollTo({ top:0, behavior:"auto" });
    var draw = sheetRenderers[el.id]; if (draw) draw(metricPage.clientWidth);
    collapseEmptyBlocks(el);
    if (!returning) focusQuiet(byId("topbar-title"));
  }
  [cyclePanel, byId("detail-modal-body")].forEach(function(host){ host.addEventListener("click", function(e){
    var btn = e.target.closest && e.target.closest("[data-open]"), tab = host === cyclePanel ? "cycle" : cycleViewEl.closest(".tab-panel").getAttribute("data-tab"); if (!btn) return;
    if (detailClose) detailClose(); openMetricPage(byId(btn.getAttribute("data-open")), btn.getAttribute("data-title"), false, tab);
  }); });
  ["analysis", "search"].forEach(function(key){
    var panel = PAGE_HOME[key].panel, go = function(el){ openMetricPage(byId(el.getAttribute("data-open")), el.getAttribute("data-title"), false, key); };
    panel.addEventListener("click", function(e){ var btn = e.target.closest && e.target.closest("[data-open]"); if (btn) go(btn); });
    panel.addEventListener("keydown", function(e){
      var row = (e.key === "Enter" || e.key === " ") && e.target.closest && e.target.closest("[data-open]");
      if (row){ e.preventDefault(); go(row); }
    });
  });
  metricPage.addEventListener("click", function(e){
    var btn = e.target.closest && e.target.closest(".trendpill.can-toggle"); if (!btn) return;
    var box = btn.closest(".page-chart, .spread-history"); if (!box) return;
    var on = btn.getAttribute("aria-pressed") !== "true";
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    box.classList.toggle("trend-on", on);
  });
  cyclePanel.addEventListener("keydown", function(e){
    if (e.key !== "Enter" && e.key !== " ") return;
    var row = e.target.closest && e.target.closest(".sign-row, tr[data-open]"); if (!row) return;
    e.preventDefault();
    openMetricPage(byId(row.getAttribute("data-open")), row.getAttribute("data-title"));
  });
  NAV.open = openMetricPage;
  NAV.panel = analysisPanel;
}
/* ---- ALL INDICATORS ---- */
function buildSearch(){
  var host = byId("search-list"), input = byId("search-input"); if (!host || !input) return;
  var IND_TABS = [{ key:"all", label:"All" }].concat(IND_ORDER.map(function(k){ return { key:k, label:TIMING[k].label }; }));
  var find = {}, state = { kind:"all", q:"" };
  IND_ORDER.forEach(function(kind){ timingMembers[kind].forEach(function(e){
    find[e.title] = [e.title, e.sub, e.metricSub, ROSTER_BY[e.target].group].join(" ").toLowerCase();
  }); });
  host.innerHTML =
    '<div class="rangebar ind-tabs" role="tablist" aria-label="Filter by timing">' +
      IND_TABS.map(function(t, i){
        return '<button type="button" class="range-seg' + (i ? "" : " on") + '" role="tab" ' +
          'aria-selected="' + (i ? "false" : "true") + '" data-ind-tab="' + t.key + '">' + t.label + '</button>';
      }).join("") +
    '</div><p class="ind-hint" hidden></p>' + categoriesShown().map(function(c){ return indCategoryHtml(c, find); }).join("") +
    '<p class="search-none" hidden>No reading matches.</p>';
  function apply(){
    var kind = state.kind, q = state.q, hint = host.querySelector(".ind-hint");
    Array.prototype.forEach.call(host.querySelectorAll(".ind-tabs .range-seg"), function(b){
      var on = b.getAttribute("data-ind-tab") === kind;
      b.classList.toggle("on", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
    hint.hidden = !TIMING[kind];
    hint.textContent = TIMING[kind] ? TIMING[kind].label + ": " + TIMING[kind].hint + "." : "";
    Array.prototype.forEach.call(host.querySelectorAll(".ind-cat"), function(c){
      var cat = c.querySelector(".ind-cat-name").textContent.toLowerCase().indexOf(q) === 0;
      Array.prototype.forEach.call(c.querySelectorAll(".ind-row"), function(r){
        r.hidden = !((kind === "all" || r.classList.contains("kind-" + kind)) &&
                     (!q || cat || (find[r.getAttribute("data-title")] || "").indexOf(q) !== -1));
      });
      c.hidden = !c.querySelector(".ind-row:not([hidden])");
    });
    host.querySelector(".search-none").hidden = !!host.querySelector(".ind-row:not([hidden])");
  }
  host.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest(".ind-tabs .range-seg"); if (!b) return;
    state.kind = b.getAttribute("data-ind-tab"); apply();
  });
  input.addEventListener("input", function(){ state.q = input.value.trim().toLowerCase(); apply(); });
  ui.openIndicatorsPage = function(tab){
    var btn = document.querySelector('.tab-btn[data-tab="search"]');
    if (btn && !btn.classList.contains("active")) btn.click();
    input.value = ""; state.q = ""; state.kind = tab || "all"; apply();
  };
  apply();
}
function renderPagesAndNav(){
  var ctx = renderPeekAndCategories();
  if (!ctx) return;
  renderMetricPages(ctx);
  buildNav();
  registerRoster();
  buildSearch();
}
// ---- The Diagnosis: under the dial, today or at a cycle's close ----

var IND_ORDER;

export function bootPagesNav(){
  GYN.step("renderSignsList", renderSignsList, "build");
  renderSignsList();
  IND_ORDER = Object.keys(TIMING);
  GYN.step("renderPagesAndNav", renderPagesAndNav, "render");
  renderPagesAndNav();
  window.__sources = { all: allSources, cards: [].concat(coincident, lagging).map(function(c){ return {name:c.bodyTerm, src:c.src}; }), annual: sp500AnnualReturnSource, gdp: gdpSrc };
}
