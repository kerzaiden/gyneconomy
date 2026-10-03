import { atMonth, factsFrom, fmtSigned, hiCard, highlightsHtml, lede, maxIn, qPretty, srcBlock, yearOf } from "./format.js";
import { addSources, byId, put } from "./dom.js";
import { divergeChart, histBar, histTip, trendOf, trendPill, windowYears } from "./charts.js";
import { fiscalHistory, grossDebtQuarterly } from "./history-fred.js";
import { calendarTodayY } from "./refresh-season.js";
import { buffettHistory, CONFIDENCE_SRC, labRow, longCycleSrc, PRODUCTIVITY_SRC, sp500AnnualReturnSource, valRow, valuation } from "./data.js";
import { currentEra, cycleSlice } from "./model.js";
import { attachHistory, histControls, histHead, histNote, pageCycle, pageRange, refitHistory, timelineWindow } from "./history.js";
import { confidenceReading, confidenceRecord, marketReading, meterFlagged, productivityReading } from "./readings.js";
import { GROUP_MARK, keyed, peekOf, periodOf, ROSTER } from "./roster.js";
import { catItem, catList, metricSheet, registerTiming, sheetRenderers, subjectIcon, timingPill } from "./render-core.js";

// ---- The split indicators: one card and one page each ----
var BUFFETT_2001 = [
  { t:"Warren Buffett — Warren Buffett on the Stock Market, Fortune, Dec 10 2001 (the 70–80% line)",
    u:"https://fortune.com/2001/12/10/warren-buffett-stock-market/" },
  { t:"Berkshire Hathaway — the same Fortune article, Dec 10 2001 (PDF)",
    u:"https://www.berkshirehathaway.com/2001ar/FortuneMagazine%20DEC%2010%202001.pdf" }
];
function meterWord(m){ return meterFlagged(m) ? (m.ends && m.ends.high) || "High" : (m.ends && m.ends.zone) || "In range"; }
function splitPages(){
  var tenth = function(v){ return v.toFixed(1) + "%"; };
  return {
    "sheet-metric-buffett": { after:"sheet-metric-valuation", row:valRow("buffett"), line:"Buffett’s line",
      fmt:function(v){ return Math.round(v) + "%"; }, src:BUFFETT_2001.concat(valuation.src.slice(0, 2)),
      band:"The line at 80% is Buffett’s own: “If the percentage relationship falls to the 70% or 80% area, " +
           "buying stocks is likely to work very well for you” (Fortune, Dec 10 2001).",
      insight:buffettInsight },
    "sheet-metric-debt": { after:"sheet-metric-buffett", row:labRow("sheet-metric-debt"), line:"50-year average",
      fmt:tenth, tick:function(v){ return Math.round(v) + "%"; }, src:longCycleSrc.slice(0, 3), insight:debtInsight },
    "sheet-metric-interest": { after:"sheet-metric-debt", row:labRow("sheet-metric-interest"), line:"50-year average",
      fmt:tenth, src:[longCycleSrc[0], longCycleSrc[4]], insight:interestInsight },
    "sheet-sign-productivity-growth": productivityPage(tenth),
    "sheet-sign-confidence": confidencePage(),
    "sheet-sign-market": marketPage()
  };
}
function confidencePage(){
  var r = confidenceReading;
  return { goodAbove:true, line:"OECD average", fmt:function(v){ return v.toFixed(1); }, tick:function(v){ return String(Math.round(v)); },
    src:CONFIDENCE_SRC, insight:confidenceInsight, info:r.info,
    row:{ sub:r.metricSub, note:r.caption, meter:r.meter, flagValue:r.metric, flagState:r.tag.state } };
}
function marketPage(){
  var r = marketReading, pct = function(v){ return v ? fmtSigned(v, 1) + "%" : "0%"; };
  return { goodAbove:true, line:"No change", fmt:pct, tick:function(v){ return Math.round(v) + "%"; }, at:function(d){ return String(d.y); },
    src:sp500AnnualReturnSource, insight:marketInsight, info:r.info,
    row:{ sub:r.metricSub, note:r.caption, meter:r.meter, flagValue:r.metric, flagState:r.tag.state } };
}
function productivityPage(tenth){
  var r = productivityReading;
  return { goodAbove:true, line:"slowdown average", fmt:tenth, src:PRODUCTIVITY_SRC, insight:productivityInsight, info:r.info,
    row:{ sub:r.metricSub, note:r.caption, meter:r.meter, flagValue:r.metric, flagState:r.tag.state } };
}
function splitSpec(R, P){
  var s = Object.create(R);
  for (var k in P) s[k] = P[k];
  s.series = R.hist.s; s.midLabel = P.line + ", " + (P.tick || P.fmt)(R.mid);
  return s;
}
function splitInfo(s){
  return s.info ? s.info() : '<h4>' + s.name + '</h4><div class="marker-sub">' + s.row.sub + '</div>' + factsFrom(s.row.note) +
    (s.band ? '<p>' + s.band + '</p>' : "") + srcBlock(s.src);
}
function periodTicks(vals){
  if (!vals.length || !(vals[0].q || vals[0].m)) return null;
  var ys = windowYears(yearOf(vals[0]), yearOf(vals[vals.length - 1]), 5);
  return function(d){ var k = d.q || d.m; return /(Q1|-01)$/.test(k) && ys.indexOf(yearOf(d)) !== -1 ? "’" + k.slice(2, 4) : ""; };
}
function periodOfSeries(d){ return d.m ? "month" : d.q ? "quarter" : "year"; }
function drawSplit(s, W){
  var id = s.id, cyc = pageCycle(id);
  var span = cyc ? cycleSlice(s.series, cyc) : null;
  var vals = span ? s.series.slice(span[0], span[1]) : timelineWindow(s.series, pageRange[id]);
  var tr = trendOf(vals.map(function(d){ return d.v; }), "points", periodOfSeries(s.series[0]));
  var chart = function(w){
    return divergeChart({ vals:vals, mid:s.mid, midLabel:s.midLabel, fmt:s.fmt, tickFmt:s.tick || s.fmt, fit:tr.fit, goodAbove:s.goodAbove,
      xLabel:periodTicks(vals), at:s.at || function(d){ return d.m ? atMonth(d) : d.q ? qPretty(d.q) : "FY" + d.y; },
      alt:s.name + " against " + s.midLabel + ", with the fitted trend across the readings in view" }, w);
  };
  put(id + "-chart", histBar(histControls(id, { series:s.series })) +
    '<div class="page-chart">' + histHead(id) + chart(W) + trendPill(tr, null, true) +
    histTip(id + "-tip") + '</div>');
  var box = document.querySelector("#" + id + "-chart .page-chart");
  refitHistory(box, chart);
  attachHistory(box, id + "-tip", "divergeChart");
}
function mountSplit(s){
  if (!document.getElementById(s.id)){
    var sheet = metricSheet(s.id);
    sheet.innerHTML = '<div id="' + s.id + '-timing">' + timingPill(s.timing) + '</div>' +
      '<div id="' + s.id + '-chart"></div><div id="' + s.id + '-highlights"></div>';
    var after = byId(s.after);
    if (after && after.parentNode) after.parentNode.insertBefore(sheet, after.nextSibling);
  }
  histNote(s.id, splitInfo(s));
  sheetRenderers[s.id] = function(W){ drawSplit(s, W); };
  put(s.id + "-highlights", highlightsHtml(s.insight(s), "", ""));
  addSources(s.src);
}
function splitPeek(R, row){
  registerTiming(R.timing, { title:R.name, sub:R.group, metric:row.flagValue, unit:R.cardUnit,
    word:meterWord(row.meter), state:row.flagState || "norm", icon:subjectIcon(row.flagState || "norm", R.mark()),
    target:R.id });
  return peekOf(R.id, { value:row.flagValue, word:meterWord(row.meter), state:row.flagState || "norm", colBase:R.mid,
    cols:keyed(R.hist).map(function(d){ return R.flip ? -d.v : d.v; }), colClass:function(v){ return "dv-bar " + (v > R.mid ? "over" : "under"); } });
}
export function indicatorPeeks(){
  var pages = splitPages(), alone = ROSTER.filter(function(R){ return R.door === "split" && !pages[R.id]; });
  return ROSTER.map(function(R){
    var s = pages[R.id] && splitSpec(R, pages[R.id]);
    if (s) mountSplit(s);
    return s && R.door === "split" ? splitPeek(R, s.row) : "";
  }).join("") + alone.map(deficitPeek).join("");
}
function deficitPeek(R){
  addSources(longCycleSrc);
  return splitPeek(R, labRow(R.id));
}
export function catSheet(id, key){
  var sheet = metricSheet(id);
  sheet.className += " cat-sheet cat-" + key;
  return sheet;
}
export function groupId(name){ return "sheet-grp-" + name.toLowerCase().replace(/\s+/g, "-"); }
function groupCard(grp, name){
  var first = grp.firstChild, card = first.cloneNode(true);
  card.setAttribute("data-preview", first.getAttribute("data-open"));
  card.setAttribute("data-open", groupId(name)); card.setAttribute("data-title", name);
  card.querySelector(".ci-name").textContent = name;
  if (grp.__mark) card.querySelector(".peek-mark").innerHTML = grp.__mark();
  return card;
}
function groupSheet(grp, name, key, items){
  items.appendChild(groupCard(grp, name));
  var sheet = catSheet(groupId(name), key);
  sheet.innerHTML = catList("");
  sheet.firstChild.appendChild(grp);
  byId("today-analysis").appendChild(sheet);
}
export function appendPicks(items, picks, key){
  picks.forEach(function(p){
    if (typeof p === "string"){ var el = document.querySelector(p); if (el) items.appendChild(catItem(el, key)); return; }
    var grp = document.createElement("div"); grp.className = "cat-group"; grp.setAttribute("data-group", p.group); grp.__mark = p.mark;
    p.picks.forEach(function(sel){ var el = document.querySelector(sel); if (el) grp.appendChild(catItem(el, key)); });
    if (grp.children.length) groupSheet(grp, p.group, key, items);
  });
}
function doorSel(R){ return (R.door === "subject" || R.door === "row" ? ".sign-row" : ".peek") + '[data-open="' + R.id + '"]'; }
export function catPicks(c){
  var picks = [];
  ROSTER.forEach(function(R){
    if (R.cat !== c.key) return;
    var last = picks[picks.length - 1];
    if (!R.group) picks.push(doorSel(R));
    else if (last && last.group === R.group) last.picks.push(doorSel(R));
    else picks.push({ group:R.group, mark:GROUP_MARK[R.group], picks:[doorSel(R)] });
  });
  return picks;
}
// ---- The split indicators' insights ----
function buffettInsight(s){
  var now = s.row.meter.value, bv = buffettHistory.map(function(d){ return d.v; });
  var bPrev = maxIn(buffettHistory, 1970, currentEra.from - 1), bDot = maxIn(buffettHistory, 2000, 2007);
  var richer = bv.filter(function(v){ return v > now; }).length;
  var above = buffettHistory.filter(function(d){ return d.v > s.mid; });
  return [lede('The price of the whole stock market set against the size of the economy that has to ' +
      'earn it. A reading far above the line is a body valued for more than it produces.'),
    hiCard("Where it sits", s.row.flagState || "serious", richer === 0
      ? "At " + Math.round(now) + "% of GDP it is the highest of the " + bv.length + " quarters since " + yearOf(buffettHistory[0]) +
        " — above the previous record of " + Math.round(bPrev.v) + "% (" + bPrev.q + ") and far above the dot-com peak of " +
        Math.round(bDot.v) + "% (" + bDot.q + ")."
      : "At " + Math.round(now) + "% of GDP, " + richer + " of the " + bv.length + " quarters since " + yearOf(buffettHistory[0]) + " ran higher."),
    hiCard("Against Buffett’s line", "warning", "It has sat above " + s.mid + "% in " + above.length + " of the " + bv.length +
      " quarters, the last time below it in " + (buffettHistory.filter(function(d){ return d.v <= s.mid; }).pop() || {}).q + ".")];
}
function debtInsight(s){
  var now = s.row.meter.value, rec = maxIn(grossDebtQuarterly, 1966, calendarTodayY);
  var under = grossDebtQuarterly.filter(function(d){ return d.v <= s.mid; }).pop();
  var era = grossDebtQuarterly.filter(function(d){ return yearOf(d) === currentEra.from; })[0];
  var cards = [lede('What the government owes, measured against what the whole economy makes in a ' +
    'year. The larger the debt, the less room the body has to borrow when something goes wrong.'),
    hiCard("Against the record", s.row.flagState || "serious", "At " + now.toFixed(1) + "% of GDP, " +
      (now >= rec.v ? "the highest reading since the quarterly series began in 1966." :
        (rec.v - now).toFixed(1) + " points below the record of " + rec.v.toFixed(1) + "% in " + rec.q + ".")),
    hiCard("Against the 70% line", "warning", under
      ? "Last at or under " + s.mid + "% in " + under.q + "; every quarter since has run above it." : "Above " + s.mid + "% throughout.")];
  if (era) cards.push(hiCard("Since this cycle opened", "serious", "The " + currentEra.name + " began at " + era.v.toFixed(1) +
    "% (" + era.q + "); the change since is " + fmtSigned(now - era.v, 1) + " points."));
  return cards;
}
function productivityInsight(s){
  var h = s.series, last = h[h.length - 1], above = h.filter(function(d){ return d.v >= s.mid; }).length;
  var hi = h.reduce(function(a, d){ return d.v > a.v ? d : a; }), lo = h.reduce(function(a, d){ return d.v < a.v ? d : a; });
  return [lede('Output per hour worked, against the same quarter a year earlier. An economy can grow by working ' +
      'more hours or by getting more from each one, and only the second kind compounds.'),
    hiCard("The latest quarter", s.row.flagState || "", qPretty(last.q) + " ran at " + fmtSigned(last.v, 1) + "%, " +
      (last.v >= s.mid ? "above" : "below") + " the " + s.mid.toFixed(1) + "% line."),
    hiCard("Against the record", "", "The series runs from " + fmtSigned(lo.v, 1) + "% (" + qPretty(lo.q) + ") to " +
      fmtSigned(hi.v, 1) + "% (" + qPretty(hi.q) + "); " + above + " of its " + h.length + " quarters sat at or above the line.")];
}
function confidenceInsight(s){
  var h = s.series, last = h[h.length - 1], above = h.filter(function(d){ return d.v >= s.mid; }).length;
  var side = function(d){ return d.v >= s.mid; }, cross = null;
  for (var i = h.length - 1; i > 0 && !cross; i--) if (side(h[i]) !== side(h[i - 1])) cross = h[i];
  return [lede('How households feel about their own finances, jobs and the economy ahead, scaled by the OECD so that 100 ' +
      'is the long-term average. Confident households spend; worried ones save.'),
    hiCard("The latest month", s.row.flagState || "", atMonth(last) + " read " + last.v.toFixed(1) + ", " +
      (side(last) ? "above" : "below") + " the 100 line" + (cross ? ", where it has been since " + atMonth(cross) + "." : ".")),
    hiCard("Against the record", "", "The series runs from " + confidenceRecord.lo.v.toFixed(1) + " (" + atMonth(confidenceRecord.lo) + ") to " +
      confidenceRecord.hi.v.toFixed(1) + " (" + atMonth(confidenceRecord.hi) + "); " + above + " of its " + h.length + " months sat at or above 100.")];
}
var ORDINAL = ["", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"];
function marketInsight(s){
  var h = s.series, last = h[h.length - 1], bull = h.filter(function(d){ return d.v >= 0; }), r = marketReading;
  var bear = h.filter(function(d){ return d.v < 0; }), lastBear = bear[bear.length - 1], run = 0;
  for (var i = h.length - 1; i >= 0 && h[i].v >= 0; i--) run++;
  return [lede('What the whole stock market returned each year, dividends included. A year above the line is a bull year ' +
      'and one below it a bear year, the same years the dial\u2019s inner band colours.'),
    hiCard(last.y + (r.open ? " so far" : ""), s.row.flagState || "", fmtSigned(last.v, 1) + "%, " +
      (last.v >= 0 ? "a bull year" : "a bear year") + (run > 1 ? ", the " + (ORDINAL[run] || run + "th") + " bull year in a row." : ".") +
      (lastBear && last.v >= 0 ? " The last bear year was " + lastBear.y + ", at " + fmtSigned(lastBear.v, 1) + "%." : "")),
    hiCard("Against the record", "", "Of the " + h.length + " years since " + h[0].y + ", " + bull.length + " were bull years and " +
      bear.length + " bear years. The best was " + r.hi.y + " at " + fmtSigned(r.hi.v, 1) + "%, the worst " + r.lo.y + " at " + fmtSigned(r.lo.v, 1) + "%.")];
}
function interestInsight(s){
  var now = s.row.meter.value, hist = fiscalHistory.interest, last = hist[hist.length - 1];
  var rec = hist.reduce(function(a, d){ return d.v > a.v ? d : a; });
  var above = hist.filter(function(d){ return d.v > s.mid; }).length;
  return [lede('The yearly cost of carrying the debt. Money spent on interest is energy the body has ' +
      'already used, paid again every year.'),
    hiCard("Against the record", s.row.flagState || "critical", "The " + (periodOf(s.row) || "latest") + " reading of " +
      now.toFixed(1) + "% " + (now > rec.v ? "is above every fiscal year since FY" + hist[0].y + "; the previous peak was " +
        rec.v.toFixed(1) + "% in FY" + rec.y + "." : "compares with a record of " + rec.v.toFixed(1) + "% in FY" + rec.y + ".")),
    hiCard("The last actual year", "warning", "FY" + last.y + " closed at " + last.v.toFixed(1) + "% of GDP. Of the " +
      hist.length + " fiscal years on record, " + above + " ran above the " + s.mid.toFixed(1) + "% line.")];
}
