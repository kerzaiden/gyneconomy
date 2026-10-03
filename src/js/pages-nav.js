import { capeFmt1, CHEV, dropWhatIsShown, factsFrom, fmtSigned, hiCard, highlightsHtml, mean, monthLabel, ordinal, qAtIndex, qLabel, yearOf } from "./format.js";
import { allSources, byId, byIdMaybe, elFrom, focusQuiet, layer, moreRow, put } from "./dom.js";
import { GYN } from "./live.js";
import { divergeChart, histBar, histTip, trendOf, trendPill } from "./charts.js";
import { calendarTodayY, cpiYoYHistory, gdpQuarterlyYoY } from "./refresh-season.js";
import { CAPE_FAIR, capeHistory, DEF_FROM_YEAR, deficitHistory, DSR_FROM_YEAR, DSR_MEAN, dsrHistory, dsrNow, gdpSrc, m2Yoy, PULSE_PRE2008, SAV_FROM_YEAR, SAV_OFFSET, savHistory, savNow, sp500AnnualReturnSource, unempHistory, valRow, valuation } from "./data.js";
import { currentEra, cycleMonths, cycleQtrIdx, cycleSlice, nowModel, totalGrowthYears, totalRiseIn } from "./model.js";
import { attachHistory, defFrom, headSigma, histControls, histHead, histNote, mWindowFrom, pageCycle, pageCycles, pageMode, pageRange, pickerOpen, qWindowFrom, refitHistory, timelineSpan, timelineWindow } from "./history.js";
import { coincident, deficitBlock, dsrInfoHtml, growthInfoHtml, householdsNow, indOf, lagging, phaseClass, rowReadings, savInfoHtml, tempCaptionFull, tempInfo, tempLeadShown } from "./readings.js";
import { cpiHistoryChart, deficitChart, gdpHistoryChart, householdsChart, m2Step, unempHistoryChart } from "./history-charts.js";
import { CATEGORIES, categoriesShown, peekOf, ROSTER, ROSTER_BY, rosterFor, TIMING } from "./roster.js";
import { cardDetailHtml, collapseEmptyBlocks, detailClose, gdpPeek, heldHighlights, metricSheet, registerTiming, seatPageFoot, setHeldHighlights, setOpenIndicatorsPage, sheetRenderers, subjectIcon, subjectRow, tempPeek, timingMembers, timingPill } from "./render-core.js";
import { cycleViewEl, eraPageBack, setMetricPageReset, setTopbar } from "./render-pages.js";
import { appendPicks, catPicks, catSheet, groupId, indicatorPeeks } from "./indicators.js";
import { eraOpen } from "./era.js";
import { INSIGHT } from "./insights.js";
import { growthDetail } from "./dial-cycle.js";

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
      (function(){ var h = heldHighlights; setHeldHighlights(""); return h; })();
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
    analysis: { panel:analysisPanel, bar:function(){ return eraOpen ? [eraOpen.name, eraPageBack] : ["Analysis", null]; },
                hide:function(){ return [byId(eraOpen ? "calendar-cycle" : "calendar-list")]; } },
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
  setMetricPageReset(closeMetricPage);

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
  setOpenIndicatorsPage(function(tab){
    var btn = document.querySelector('.tab-btn[data-tab="search"]');
    if (btn && !btn.classList.contains("active")) btn.click();
    input.value = ""; state.q = ""; state.kind = tab || "all"; apply();
  });
  apply();
}
/* ---- THE CYCLE TAB: cards and categories ---- */
var PAIR_ART = {
  "sheet-sign-pulse": function(ind){ return { pulse:{ rate:ind.meter.value, ref:PULSE_PRE2008 } }; },
  "sheet-sign-volume": function(){
    return { cols:m2Yoy.filter(function(x){ return x != null; }), colBase:0, colRule:true, colClass:function(v){ return "m2-col " + m2Step(v); } };
  }
};
function placeSignPair(){
  var pair = ROSTER.filter(function(R){ return R.door === "pair"; }).map(function(R){
    var ind = indOf(R);
    if (!ind) return "";
    var card = PAIR_ART[R.id](ind);
    card.value = ind.metric; card.word = ind.tag.text; card.state = ind.tag.state;
    return peekOf(R.id, card);
  }).join("");
  if (!pair) return;
  var after = byId("sheet-sign-sentiment");
  if (!after || !after.parentNode) return;
  var row = document.createElement("div");
  row.className = "peek-row"; row.id = "peek-row-signs";
  row.innerHTML = pair;
  after.parentNode.insertBefore(row, after.nextSibling);

  var horm = document.querySelector('.sign-row[data-subject="hormones"]');
  var hormSheet = byId("sheet-sign-hormones");
  if (horm && hormSheet && horm.parentNode === row.parentNode){
    row.parentNode.insertBefore(horm, row);
    horm.parentNode.insertBefore(hormSheet, horm.nextSibling);
  }
}
function swapSentimentActivity(){
  var sent = document.querySelector('.sign-row[data-open="sheet-sign-sentiment"]');
  var act  = document.querySelector('.sign-row[data-open="sheet-sign-activity"]');
  var sentSheet = byId("sheet-sign-sentiment");
  var actSheet  = byId("sheet-sign-activity");
  if (!sent || !act || !sentSheet || !actSheet) return;
  var mSent = document.createComment("sentiment slot"), mAct = document.createComment("activity slot");
  sent.parentNode.insertBefore(mSent, sent);
  act.parentNode.insertBefore(mAct, act);
  mSent.parentNode.insertBefore(act, mSent);
  act.parentNode.insertBefore(actSheet, act.nextSibling);
  mAct.parentNode.insertBefore(sent, mAct);
  sent.parentNode.insertBefore(sentSheet, sent.nextSibling);
  mSent.parentNode.removeChild(mSent);
  mAct.parentNode.removeChild(mAct);
}
function buildCategories(){
  var host = byId("today-analysis"); if (!host) return;
  CATEGORIES.forEach(function(c){
    var sheet = catSheet("sheet-cat-" + c.key, c.key);
    var items = document.createElement("div"); items.className = "cat-list";
    appendPicks(items, catPicks(c), c.key);
    sheet.appendChild(items);
    var tog = INSIGHT[c.key] ? INSIGHT[c.key]() : "";
    if (tog) sheet.insertAdjacentHTML("beforeend", tog);
    host.appendChild(sheet);
  });
  ["peek-row", "peek-row-signs", "signs-list"].forEach(function(id){
    var el = byId(id);
    if (el && !el.querySelector("*") && el.parentNode) el.parentNode.removeChild(el);
  });
}
function renderPeekAndCategories(){
  var host = byId("peek-row"); if (!host) return null;
  var tempInd = indOf(ROSTER_BY["sheet-metric-temp"]);
  var r = nowModel.reading, era = nowModel.era;
  var gq = gdpQuarterlyYoY.filter(function(d){ return parseInt(d.q.slice(0, 4), 10) >= era.from; });
  var capeNow = valRow("cape").meter.value, buffNow = valRow("buffett").meter.value;
  var capeLast = capeHistory[capeHistory.length - 1];
  if (capeLast.y === calendarTodayY) capeLast.v = capeNow; else capeHistory.push({ y:calendarTodayY, v:capeNow });
  host.innerHTML =
    tempPeek(r, tempInd.metric, nowModel.cpi) + gdpPeek(r, gq) +
    peekOf("sheet-metric-valuation", { value:capeNow.toFixed(1) + "\u00d7", word:valuation.tag.text,
               state:valuation.tag.state,
               cols:capeHistory.map(function(d){ return d.v; }), colBase:CAPE_FAIR,
               colClass:function(v){ return "dv-bar " + (v > CAPE_FAIR ? "over" : "under"); } }) +
    peekOf("sheet-metric-households", { value:dsrNow.toFixed(1) + "/" + savNow.toFixed(1),
               word:householdsNow.word, state:householdsNow.state,
               cols:savHistory.slice(SAV_OFFSET), colBase:0,
               colClass:function(){ return "hh-col"; } }) +
    indicatorPeeks();

  placeSignPair();
  swapSentimentActivity();
  buildCategories();

  return { host:host, tempInd:tempInd, r:r, gq:gq, capeNow:capeNow, buffNow:buffNow };
}
/* ---- THE INNER PAGES ---- */
function actCycleMonths(c){
  var to = c.to || calendarTodayY, a = -1, b = -1;
  unempHistory.forEach(function(d, i){
    var y = parseInt(d.m.slice(0, 4), 10);
    if (y >= c.from && y <= to){ if (a === -1) a = i; b = i + 1; }
  });
  return a === -1 ? null : [a, b];
}
function householdsHighlights(){
  var peak = Math.max.apply(null, dsrHistory), peakAt = qAtIndex(DSR_FROM_YEAR, dsrHistory.indexOf(peak));
  var offPeak = (1 - dsrNow / peak) * 100;
  var lower = savHistory.map(function(v, i){ return { v:v, i:i }; })
                        .filter(function(d){ return d.v <= savNow && d.i < savHistory.length - 1; });
  var run = lower.filter(function(d){ var y = SAV_FROM_YEAR + Math.floor(d.i / 4); return y >= 2005 && y <= 2008; });
  var years = SAV_FROM_YEAR + Math.floor((savHistory.length - 1) / 4) - SAV_FROM_YEAR;
  var hhLede = '<p class="hi-lede">Two halves of one household: what it owes every month, and what is left ' +
    'after. The bill is the load the body carries; the cushion is what it has stored against a month that ' +
    'goes wrong.</p>';
  var billTxt = "Households pay " + dsrNow.toFixed(1) + "% of what they take home to service debt, against " +
    DSR_MEAN.toFixed(1) + "% on average since " + DSR_FROM_YEAR + " and a peak of " + peak.toFixed(1) + "% in " +
    peakAt + ". That is " + offPeak.toFixed(0) + "% below the peak, and flat for two years.";
  var keptTxt = "What is left over is " + savNow.toFixed(1) + "% of income — only " + lower.length +
    " quarters in the " + years + " years since " + SAV_FROM_YEAR + " have been lower, and " + run.length +
    " of them ran from 2005 to early 2008. The bill is not the strain here; the cushion is.";
  return highlightsHtml([hhLede, hiCard("The bill", "", billTxt),
                         hiCard("The cushion", householdsNow.state, keptTxt)]);
}
function redrawSheet(id){
  var h = byId("metric-page"), d = sheetRenderers[id];
  if (d) d(h && h.clientWidth ? h.clientWidth : 340);
}
function registerTempGdpPages(){
  sheetRenderers["sheet-metric-temp"] = function(W){
    var r = pageRange["sheet-metric-temp"], cyc = pageCycle("sheet-metric-temp");
    put("temp-rangebar", histControls("sheet-metric-temp", { series:cpiYoYHistory }));
    put("temp-head", histHead("sheet-metric-temp"));
    var hist = byId("temp-history"); hist.hidden = false;
    var win;
    if (cyc){
      var span = cycleMonths(cyc);
      win = span ? cpiYoYHistory.slice(span[0], span[1]) : [];
      hist.innerHTML = cpiHistoryChart(hist.clientWidth || W, span ? span[0] : 0,
                                       { to:span ? span[1] : undefined, cycle:true });
      attachHistory(hist, "temp-hist-tooltip", "cpiHistoryChart");
      put("temp-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true,
                  { rising:"heating", falling:"cooling" }));
    } else {
      var from = mWindowFrom(cpiYoYHistory.length, r); win = cpiYoYHistory.slice(from);
      hist.innerHTML = cpiHistoryChart(hist.clientWidth || W, from);
      attachHistory(hist, "temp-hist-tooltip", "cpiHistoryChart");
      put("temp-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true,
                  { rising:"heating", falling:"cooling" }));
    }
    var tri = totalRiseIn(win);
      headSigma("sheet-metric-temp", tri ? fmtSigned(tri.total, 0) + "%" : null);
  };
  sheetRenderers["sheet-metric-gdp"] = function(W){
    var r = pageRange["sheet-metric-gdp"];
    put("gdp-rangebar", histControls("sheet-metric-gdp", { series:gdpQuarterlyYoY }));
    put("gdp-head", histHead("sheet-metric-gdp"));
    histNote("sheet-metric-gdp", growthInfoHtml());
    var hist = byId("gdp-history"); hist.hidden = false;
    var gCyc = pageCycle("sheet-metric-gdp");
    var gSpan = gCyc ? cycleSlice(gdpQuarterlyYoY, gCyc) : null;
    var gFrom = gSpan ? gSpan[0] : qWindowFrom(gdpQuarterlyYoY.length, r);
    var gTo = gSpan ? gSpan[1] : undefined;
    var win = gdpQuarterlyYoY.slice(gFrom, gTo);
    hist.innerHTML = gdpHistoryChart(hist.clientWidth || W, gFrom, { to:gTo, cycle:!!gSpan });
    attachHistory(hist, "gdp-hist-tooltip", "gdpHistoryChart");
    var gy0 = yearOf(win[0]), gy1 = yearOf(win[win.length - 1]), gt = totalGrowthYears(gy0, gy1);
    headSigma("sheet-metric-gdp", gt ? fmtSigned(gt.total, 0) + "%" : null);
    put("gdp-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "quarter"), null, true,
                { rising:"quickening", falling:"slowing" }));
  };

}
function registerActivityPowerDeficitPages(){
  sheetRenderers["sheet-sign-activity"] = function(W){
    var id = "sheet-sign-activity", bar = byId("act-rangebar");
    if (!bar) return;
    bar.innerHTML = histControls(id, { series:unempHistory });
    var hist = byId("act-history"); if (!hist) return;
    var cyc = pageCycle(id);
    var span = cyc ? actCycleMonths(cyc) : null;
    var from = span ? span[0] : mWindowFrom(unempHistory.length, pageRange[id]);
    var to = span ? span[1] : undefined;
    hist.innerHTML = unempHistoryChart(hist.clientWidth || W, from, { to:to, cycle:!!span });
    attachHistory(hist, "act-hist-tooltip", "unempHistoryChart");
    var win = unempHistory.slice(from, to).filter(function(d){ return d.v != null; });
    put("act-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true,
                               { rising:"loosening", falling:"tightening" }));
  };
  sheetRenderers["sheet-marker-deficit"] = function(W){
    var sheet = byId("sheet-marker-deficit"); if (!sheet) return;
    if (!byIdMaybe("deficit-record")) sheet.insertAdjacentHTML("afterbegin", deficitBlock());
    sheetRenderers["deficit-range"](W);
  };
  sheetRenderers["deficit-range"] = function(W){
    var host = byId("deficit-record"); if (!host) return;
    var key = pageRange["deficit-range"], defCyc = pageCycle("deficit-range");
    var defIdx = defCyc ? [Math.max(0, defCyc.from - DEF_FROM_YEAR),
                           Math.min(deficitHistory.length, (defCyc.to || calendarTodayY) - DEF_FROM_YEAR + 1)] : null;
    var from = defIdx ? defIdx[0] : defFrom(key), defTo = defIdx ? defIdx[1] : undefined;
    var bar = put("deficit-rangebar", histControls("deficit-range",
      { depth:deficitHistory.length }));
    host.innerHTML = deficitChart(host.clientWidth || W, from, defTo);
    put("deficit-records", "");
    attachHistory(host, "deficit-hist-tooltip", "deficitChart");
    put("deficit-trend", trendPill(
      trendOf(deficitHistory.slice(from, defTo), "points", "year"), null, true,
      { rising:"improving", falling:"widening" }));
  };
}
function registerHouseholdsValuationPages(){
  sheetRenderers["sheet-metric-households"] = function(W){
    var id = "sheet-metric-households";
    var hhCyc = pageCycle(id, DSR_FROM_YEAR);
    var idx = hhCyc ? cycleQtrIdx(DSR_FROM_YEAR, hhCyc, dsrHistory.length) : null;
    var from = idx ? idx[0] : qWindowFrom(dsrHistory.length, pageRange[id]);
    var to = idx ? idx[1] : dsrHistory.length;
    var host = byId("households-chart"); if (!host) return;
    histNote(id, dsrInfoHtml() + savInfoHtml());
    host.innerHTML =
      histBar(histControls(id, { depth:Math.floor(dsrHistory.length / 4) }, DSR_FROM_YEAR)) +
      '<div class="page-chart">' + histHead(id) +
      householdsChart(W, from, to) +
      trendPill(trendOf(savHistory.slice(SAV_OFFSET + from, SAV_OFFSET + to), "points", "quarter"),
                "Saving", true, { rising:"keeping more", falling:"keeping less" }) +
      histTip("households-hist-tooltip") + '</div>';
    var box = host.querySelector(".page-chart");
    refitHistory(box, function(w){ return householdsChart(w, from, to); });
    attachHistory(box, "households-hist-tooltip", "householdsChart");
    var hl = put("households-highlights", householdsHighlights());
  };
  sheetRenderers["sheet-metric-valuation"] = function(W){
    var r = pageRange["sheet-metric-valuation"], vlCyc = pageCycle("sheet-metric-valuation");
    var vlSpan = vlCyc ? cycleSlice(capeHistory, vlCyc) : null;
    var vals = vlSpan ? capeHistory.slice(vlSpan[0], vlSpan[1]) : timelineWindow(capeHistory, r);
    var capeTrend = trendOf(vals.map(function(d){ return d.v; }), "\u00d7", "year");
    put("valuation-chart", histBar(histControls("sheet-metric-valuation", { series:capeHistory })) +
      '<div class="page-chart">' + histHead("sheet-metric-valuation") +
      divergeChart({
        vals:vals, mid:CAPE_FAIR, midLabel:"fair value, " + CAPE_FAIR + "\u00d7", fmt:capeFmt1,
        tickFmt:function(v){ return v + "\u00d7"; },
        fit:capeTrend.fit,
        alt:"Shiller CAPE against its long-run fair value, each January" +
            (r === "max" ? " since " + capeHistory[0].y : " of the last " + timelineSpan(r) + " years") +
            ", with the fitted trend across the readings in view"
      }, W) +
      trendPill(capeTrend, null, true) +
      histTip("valuation-hist-tooltip") + '</div>');
    var vBox = document.querySelector("#valuation-chart .page-chart");
    refitHistory(vBox, function(w){
      return divergeChart({ vals:vals, mid:CAPE_FAIR, midLabel:"fair value, " + CAPE_FAIR + "\u00d7",
                            fmt:capeFmt1, tickFmt:function(v){ return v + "\u00d7"; }, fit:capeTrend.fit,
                            alt:"Shiller CAPE against its long-run fair value, each January" }, w);
    });
    attachHistory(vBox, "valuation-hist-tooltip", "divergeChart");
  };
}
function wireMetricPageControls(){
  document.addEventListener("click", function(e){
    if (!e.target.closest) return;
    var sel = e.target.closest(".cycsel"), id = sel && sel.getAttribute("data-cycles-for");
    if (id && e.target.closest("[data-picker-toggle]")){ pickerOpen[id] = !pickerOpen[id]; redrawSheet(id); return; }
    var opt = e.target.closest(".cycsel-opt");
    if (id && opt && (id in pageCycles)){
      pageCycles[id] = opt.getAttribute("data-cycle");
      pickerOpen[id] = false;
      redrawSheet(id); return;
    }
    for (var k in pickerOpen) if (pickerOpen[k] && k !== id){ pickerOpen[k] = false; redrawSheet(k); }
  });
  document.addEventListener("click", function(e){
    var seg = e.target.closest && e.target.closest(".range-seg"); if (!seg) return;
    var mid = seg.parentNode.getAttribute("data-mode-for");
    if (mid && (mid in pageMode)){
      pageMode[mid] = seg.getAttribute("data-mode");
      var mHost = byId("metric-page"), mDraw = sheetRenderers[mid];
      if (mDraw) mDraw(mHost && mHost.clientWidth ? mHost.clientWidth : 340);
      return;
    }
    var id = seg.parentNode.getAttribute("data-range-for");
    if (!(id in pageRange)) return;
    pageRange[id] = seg.getAttribute("data-range");
    var host = byId("metric-page");
    var draw = sheetRenderers[id]; if (draw) draw(host && host.clientWidth ? host.clientWidth : 340);
  });

}
function valuationHighlights(capeNow, buffNow){
  var vs = capeHistory.map(function(d){ return d.v; });
  var richer = capeHistory.filter(function(d){ return d.v > capeNow; });
  var cards = [];
  cards.unshift('<p class="hi-lede">Valuations are what buyers pay for a dollar of earnings, smoothed over ' +
    'ten years. Paying far above the long-run price is appetite running ahead of what the body is actually ' +
    'producing.</p>');
  cards.push(hiCard("Shiller CAPE", valuation.tag.state, richer.length === 0
    ? "At " + capeFmt1(capeNow) + ", richer than every January reading since " + capeHistory[0].y + "."
    : "At " + capeFmt1(capeNow) + ", the " + ordinal(richer.length + 1) + " richest reading since " + capeHistory[0].y +
      " \u2014 only " + richer.map(function(d){ return d.y + " (" + capeFmt1(d.v) + ")"; }).join(" and ") + " ran higher."));
  put("valuation-highlights", highlightsHtml(cards, "", moreRow('<h4>Valuations</h4>' + factsFrom(valuation.impression))));
}
function tempHighlights(tempInd, r){
  var cyc = nowModel.cpi, hot = cyc.filter(function(d){ return d.v > 3; }).length;
  var peak = cyc.reduce(function(a, b){ return b.v > a.v ? b : a; });
  var cards = ['<p class="hi-lede">A temperature is the one number that says whether something inside is ' +
    'running too hot, and in an economy that number is prices. 2% is its 37°C — the reading only ' +
    'means anything measured against the level the system is meant to hold.</p>'];
  cards.push(hiCard("Temperature", tempInd ? tempInd.tag.state : "warning",
    "Across the " + cyc.length + " months of the " + currentEra.name + ", CPI has run above 3% in " + hot +
    " of them, and peaked at " + peak.v.toFixed(1) + "% in " + monthLabel(peak.m) + "."));
  cards.push(hiCard("Where it sits now", tempInd ? tempInd.tag.state : "warning",
    "The current cycle\u2019s average is " + mean(cyc.map(function(d){ return d.v; })).toFixed(1) + "%, against a 2% target. Today\u2019s " +
    r.cpiNow.toFixed(1) + "% is " + (r.cpiNow > 3 ? "above" : r.cpiNow < 1 ? "below" : "inside") + " the 1\u20133% range."));
  put("temp-highlights", highlightsHtml(cards, "", moreRow(tempInfo + (function(){
      var rest = dropWhatIsShown(tempCaptionFull, tempLeadShown);
      return rest ? factsFrom(rest) : "";
    })())));
}
function gdpHighlights(r, gq){
  var cycAvg = mean(gq.map(function(d){ return d.v; }));
  var contractions = gq.filter(function(d){ return d.v < 0; }).length;
  var cards = ['<p class="hi-lede">Growth is the build-up: how much more the economy made this year than ' +
    'last. A body spends the first half of its cycle building something it has not used yet, and an ' +
    'economy does the same with output.</p>'];
  cards.push(hiCard("Growth", phaseClass(r.regime),
    "Across the " + gq.length + " quarters of the " + currentEra.name + ", growth has averaged " + cycAvg.toFixed(1) +
    "% a year" + (contractions ? " and turned negative in " + contractions + " of them." : ", and has not turned negative in any of them.")));
  cards.push(hiCard("The latest quarter", phaseClass(r.regime),
    qLabel(r.gdpLatest.q) + " came in at " + r.gdpLatest.v.toFixed(1) + "%, " +
    (r.gdpLatest.v >= cycAvg ? "above" : "below") + " this cycle\u2019s own average, and the season model reads the trend as " +
    r.regime + "."));
  put("gdp-highlights", highlightsHtml(cards, "", moreRow(growthDetail)));
}
function renderMetricPages(ctx){
  registerTempGdpPages();
  registerActivityPowerDeficitPages();
  registerHouseholdsValuationPages();
  wireMetricPageControls();
  valuationHighlights(ctx.capeNow, ctx.buffNow);
  tempHighlights(ctx.tempInd, ctx.r);
  gdpHighlights(ctx.r, ctx.gq);
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
  window.__sources = { all: allSources, cards: coincident.concat(lagging).map(function(c){ return {name:c.bodyTerm, src:c.src}; }), annual: sp500AnnualReturnSource, gdp: gdpSrc };
}
