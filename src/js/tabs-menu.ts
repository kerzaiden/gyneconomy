import { facts, legendKey, listed, numberWord, srcBlock } from "./format.ts";
import { byId, layer, need, put, rovingKeys, ui, viewMore } from "./dom.ts";
import { GYN } from "./live.ts";
import { wheelMeta } from "./refresh-season.ts";
import { CLOCK_SRC, FED_TARGET_SRC, frameworkRows, gdpSrc, marketCycles, typicalCycleSrc } from "./data.ts";
import { currentEra, currentSeason, recessionRecord, seasonGroup } from "./model.ts";
import { cycleView, one, settleAll, showCycle } from "./dial-cycle.ts";
import { FRAMEWORK_SRC, sourceShelves } from "./sources.ts";
import { WINDOW } from "./cycle-analysis.ts";
import { categoriesShown, ROSTER, TIMING } from "./roster.ts";

// ---- RENDER: About Gyneconomy — the season model and the framework ----
function recessionLine(){
  var r = recessionRecord();
  return "<b>Against the record</b>: since " + r.from + ", " + (r.autumn + r.winter) + " of " + r.total + " NBER recession quarters fell in Autumn or Winter, seasons that hold " + r.share + "% of all quarters.";
}
function seasonCell(group: string, span: number, kinds: string[]){
  var now = seasonGroup(currentSeason) === group;
  return '<div class="sg-cell ' + group + (span > 1 ? ' wide' : '') + (now ? ' now' : '') + '">' + (now ? '<em>Now</em>' : '') +
    '<b>' + wheelMeta[group as Season].name + '</b>' + kinds.map(function(k){ return '<small>' + k + '</small>'; }).join("") + '</div>';
}
function seasonGrid(){
  var head = function(name: string, sub: string){ return '<div class="sg-head"><b>' + name + '</b><small>' + sub + '</small></div>'; };
  var row = function(name: string){ return '<div class="sg-row">' + name + '</div>'; };
  var heating = function(k: Season){ return wheelMeta[k].theme + ' <span aria-label="heating">\u2192</span>'; };
  var cooling = function(k: Season){ return '<span aria-label="cooling">\u2190</span> ' + wheelMeta[k].theme; };
  return '<div class="season-grid"><span></span>' + head("Cold", "below 1%") + head("Warm", "1\u20133%") + head("Hot", "above 3%") +
    row("Expansion") + seasonCell("spring", 2, [heating("spring"), cooling("springdeflation")]) + seasonCell("summer", 1, [wheelMeta.summer.theme]) +
    row("Contraction") + seasonCell("winter", 1, [wheelMeta.winter.theme]) + seasonCell("autumn", 2, [heating("lateautumn") + "*", cooling("autumn")]) + '</div>';
}
function cycleModelLine(){
  var closed = marketCycles.filter(function(c){ return !c.ongoing; }), years = closed.reduce(function(a, c){ return a + c.to - c.from + 1; }, 0);
  return "A cycle begins with its first bull year and ends with the bear year that closes it. Since " + marketCycles[0].from + " the market has completed " + closed.length + " cycles, " + (years / closed.length).toFixed(1) + " years long on average. Each cycle is measured against all of them; its readings against the last " + numberWord(WINDOW) + ", since " + marketCycles[closed.length - WINDOW].from + ".";
}
var PEAK_MARK = '<svg viewBox="-7 -7 14 14" aria-hidden="true"><circle r="5.2" fill="var(--surface)" stroke="var(--ovulate)" stroke-width="2"></circle><circle r="1.9" fill="var(--ovulate)"></circle></svg>';
function renderCycleModel(){
  put("cycle-model-line", cycleModelLine());
  put("cycle-model-key", legendKey([["mkt-up", "Bull year", "the market closed up"], ["mkt-down", "Bear year", "the market closed down"],
    ["mkt-up ytd", "Year in progress", "not yet closed"], ["", "Peak year", "the cycle\u2019s highest return", PEAK_MARK]], { shape:"bar", cls:"legend-rows", row:"legend-row" }));
  put("cycle-model-notes", '<p>Published histories agree: a bull market and the bear market that ends it have run about 5 to 6\u00bd years since the 1940s. A typical length, not a forecast.</p>' + srcBlock(typicalCycleSrc));
}
function wireIdea(){
  viewMore(need("idea-more"), [].slice.call(need("idea-prose").querySelectorAll("p[hidden]")));
}
function renderSeasonRows(){
  put("seasons-grid", seasonGrid());
  put("seasons-notes", facts([
    "<b>Expansion</b>: real GDP growth at or above its potential, the CBO\u2019s since 1950.",
    "<b>Contraction</b>: growth below its potential.",
    "<b>Arrows</b>: \u2192 prices heating, \u2190 prices cooling. Spring and Autumn are transitions, so their direction names them; Summer and Winter hold whatever the direction.",
    "<b>*Stagflation</b> only while prices are hot, above 3%, and not cooling. Warm prices in a contraction are Disinflation, heating or cooling.",
    recessionLine()
  ]) + srcBlock([CLOCK_SRC[0], FED_TARGET_SRC, gdpSrc[gdpSrc.length - 1]]));
  renderCycleModel();

  put("framework-rows", '<div class="lag-row lag-row-head"><span>Sign</span><span>In the body</span><span>In the economy</span><span>Timing</span></div>' +
    frameworkRows.map(function(r){ return '<div class="lag-row"><span>' + r.indicator + '</span><span>' + r.body + '</span><span>' + r.economy + '</span><span>' + r.category + '</span></div>'; }).join(""));
  put("framework-notes", '<p>Every reading in this app is one of the book\u2019s seven signs, paired with its bodily counterpart: leading signs turn first, coincident ones report the present, lagging ones confirm afterwards.</p>' + srcBlock(FRAMEWORK_SRC));
}
// ---- How to Read: where each reading sits and when it speaks, from the roster ----
function placeLine(c: { key: string; title: string }){
  var rows = ROSTER.filter(function(R){ return R.cat === c.key; }), subs: string[] = [];
  rows.forEach(function(R){ if (subs.indexOf(R.sub) === -1) subs.push(R.sub); });
  return '<p><b>' + c.title + '</b>: ' + subs.map(function(sub){
    return sub + ' holds ' + listed(rows.filter(function(R){ return R.sub === sub; }).map(function(R){ return R.name + ' (' + TIMING[R.timing].label.toLowerCase() + ')'; }));
  }).join('; ') + '.</p>';
}
function timingLine(){
  var inOrder = categoriesShown().reduce(function(a: RosterRow[], c){ return a.concat(ROSTER.filter(function(R){ return R.cat === c.key; })); }, []);
  var says: Record<RosterTiming, string> = { leading:"signs turn first", coincident:"signs report the present", lagging:"signs confirm afterwards", structural:"markers move slowly, by design" };
  return '<p>' + (Object.keys(says) as RosterTiming[]).map(function(t){
    return '<b>' + TIMING[t].label + '</b> ' + says[t] + ': ' + listed(inOrder.filter(function(R){ return R.timing === t; }).map(function(R){ return R.name; })) + '.';
  }).join(' ') + '</p>';
}
function renderHowto(){ put("howto-places", categoriesShown().map(placeLine).join("") + timingLine()); }
// ---- TAB NAVIGATION (Today / Cycle / Analysis / Portfolio) ----
function renderTopbar(){
  var btns = Array.prototype.slice.call(document.querySelectorAll(".tab-btn"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".tab-panel"));
  var tabTitles = { today:"Today", cycle:"Current Cycle", chart:"Analysis", portfolio:"Portfolio" };
  var topTitle = need("topbar-title");
  btns.forEach(function(btn){
    btn.addEventListener("click", function(){
      if (btn.classList.contains("active")){
        GYN.fire("metricPageReset");
        if (btn.getAttribute("data-tab") === "chart") GYN.fire("calendarReset");
        return;
      }
      btns.forEach(function(b){ b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
      panels.forEach(function(p: HTMLElement){ p.hidden = true; });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      var tab = btn.getAttribute("data-tab"), target = document.querySelector<HTMLElement>('.tab-panel[data-tab="' + tab + '"]');
      if (target) target.hidden = false;
      GYN.fire("metricPageReset");
      GYN.fire("calendarReset");
      topTitle.textContent = tabTitles[tab as keyof typeof tabTitles] || "Gyneconomy";
      ui.topbarBack = null;
      need("topbar-back").hidden = true;
      if (tab === "cycle" && target){ target.insertBefore(cycleView(), byId("today-analysis")); showCycle(currentEra); }
      settleAll();
      window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  });
}
function wireTabKeys(){ rovingKeys(one(".tabbar"), ".tab-btn", "aria-selected"); }
function wireTabDoors(){
  document.addEventListener("click", function(e){
    var door = (e.target as Element).closest && (e.target as Element).closest("[data-go-tab]");
    var tab = door && document.querySelector<HTMLElement>('.tab-btn[data-tab="' + door.getAttribute("data-go-tab") + '"]');
    if (tab) tab.click();
  });
}
// ---- MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape ----
function wireMenu(){
  var menu = need("more-menu"), open = need("menu-btn"), back = need("menu-back");
  var prevOverflow = "", locked = false;
  function slideIn(el: HTMLElement){ if (el.__cancelOut) el.__cancelOut(); el.hidden = false; void el.offsetWidth; el.classList.add("in"); }
  function slideOut(el: HTMLElement, done?: () => void){
    el.classList.remove("in");
    var fired = false;
    function finish(e?: TransitionEvent){
      if (e && e.propertyName && e.propertyName !== "transform") return;
      if (fired) return; fired = true;
      el.removeEventListener("transitionend", finish); el.hidden = true; if (done) done();
    }
    el.addEventListener("transitionend", finish);
    var t = setTimeout(finish, 420);
    el.__cancelOut = function(){ fired = true; clearTimeout(t); el.removeEventListener("transitionend", finish); el.__cancelOut = null; };
  }
  function show(){ slideIn(menu); open.setAttribute("aria-expanded", "true"); if (!locked){ prevOverflow = document.body.style.overflow; locked = true; } document.body.style.overflow = "hidden"; back.focus(); }
  function hide(){
    if (menu.hidden) return;
    open.setAttribute("aria-expanded", "false");
    open.focus();
    slideOut(menu, function(){ document.body.style.overflow = prevOverflow; locked = false; });
  }
  open.addEventListener("click", show);
  back.addEventListener("click", hide);
  function fromHash(){ if (location.hash === "#menu"){ show(); if (history.replaceState) history.replaceState(null, "", location.pathname + location.search); } }
  fromHash(); window.addEventListener("hashchange", fromHash);

  // ---- the Sources screen, built on first open from each reading's own citations (the same list as sources.html) ----
  var built = false;
  function buildSources(){
    put("sources-groups", sourceShelves().map(function(g){
      return '<h3 class="menu-section">' + g.title + '</h3><div class="menu-card">' + g.src.map(function(x){
        return '<a class="menu-row" href="' + x.u.replace(/&/g, "&amp;") + '" target="_blank" rel="noopener"><span class="menu-label">' + x.t + '</span>' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg></a>';
      }).join("") + '</div>';
    }).join(""));
    built = true;
  }
  var openSheet: HTMLElement | null = null, openRow: HTMLElement | null = null, sheetLocked = false;
  function showSheet(name: string, row: HTMLElement){
    var el = byId("sheet-" + name); if (!el) return;
    if (name === "sources" && !built) buildSources();
    var fromPage = !menu.contains(row), at = row.getAttribute("data-sheet-at"), b = el.querySelector<HTMLElement>("[data-sheet-back]");
    if (fromPage && !locked){ prevOverflow = document.body.style.overflow; document.body.style.overflow = "hidden"; sheetLocked = true; }
    if (b) b.setAttribute("aria-label", fromPage ? "Back" : "Back to the menu");
    slideIn(el); openSheet = el; openRow = row;
    var to = at ? byId(at) : null, bar = el.querySelector<HTMLElement>(".topbar");
    el.scrollTop = to ? to.offsetTop - (bar ? bar.offsetHeight : 0) - 12 : 0;
    if (b) b.focus({ preventScroll:true });
  }
  function hideSheet(){
    if (!openSheet) return;
    var el = openSheet, row = openRow; openSheet = null; openRow = null;
    if (sheetLocked){ document.body.style.overflow = prevOverflow; sheetLocked = false; }
    if (row) row.focus();
    slideOut(el);
  }
  document.addEventListener("click", function(e){ var row = (e.target as Element).closest && (e.target as Element).closest<HTMLElement>("[data-sheet]"), name = row && row.getAttribute("data-sheet"); if (row && name != null) showSheet(name, row); });
  document.addEventListener("click", function(e){ if ((e.target as Element).closest && (e.target as Element).closest("[data-sheet-back]")) hideSheet(); });
  layer(2, { open:function(){ return !!openSheet; }, close:hideSheet, box:function(){ return openSheet; } });
  layer(3, { open:function(){ return !menu.hidden && menu.classList.contains("in"); }, close:hide, box:function(){ return menu; } });

  // ---- Contact: hand the note to the visitor's mail app. The address is assembled here, at send time, from its ----
  (function(){
    var form = need("contact-form"), hint = need("contact-hint");
    var parts = ["kerzaiden", "gmail", "com"];
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var title = (byId("contact-title") as HTMLInputElement).value.trim(), msg = (byId("contact-message") as HTMLTextAreaElement).value.trim();
      if (!msg){ hint.textContent = "Write a message first."; hint.classList.add("err"); need("contact-message").focus(); return; }
      hint.classList.remove("err"); hint.textContent = "Opening your mail app\u2026";
      var to = parts[0] + "@" + parts[1] + "." + parts[2];
      var subject = "Gyneconomy" + (title ? " \u2014 " + title : "");
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(msg);
      setTimeout(function(){ hint.textContent = "If nothing opened, this device has no mail app set up."; }, 2500);
    });
  })();
}

function bootGuide(){
  GYN.step("renderSeasonRows", renderSeasonRows, "render");
  renderSeasonRows();
  GYN.step("renderHowto", renderHowto, "render");
  renderHowto();
  GYN.step("wireIdea", wireIdea, "wire");
  wireIdea();
}
export function bootTabsMenu(){
  bootGuide();
  GYN.step("renderTopbar", renderTopbar, "wire");
  renderTopbar();
  GYN.step("wireTabKeys", wireTabKeys, "wire");
  wireTabKeys();
  GYN.step("wireTabDoors", wireTabDoors, "wire");
  wireTabDoors();
  GYN.step("wireMenu", wireMenu, "wire");
  wireMenu();
}
