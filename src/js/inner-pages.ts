import { capeFmt1, dropWhatIsShown, factsFrom, fmtSigned, hiCard, highlightsHtml, mean, monthLabel, ordinal, qAtIndex, qLabel, stateOf, tagFor, yearOf } from "./format.ts";
import { byId, byIdMaybe, focusQuiet, layer, moreRow, need, put } from "./dom.ts";
import { divergeChart, histBar, histTip, trendOf, trendPill } from "./charts.ts";
import { calendarTodayY, inflationHistory, gdpQuarterlyYoY } from "./refresh-season.ts";
import { CAPE_FAIR, capeHistory, DEF_FROM_YEAR, deficitHistory, DSR_FROM_YEAR, DSR_MEAN, dsrHistory, dsrNow, now, SAV_FROM_YEAR, SAV_OFFSET, savHistory, savNow, unempHistory } from "./data.ts";
import { currentEra, cycleQtrIdx, cycleSlice, growthWord, inflationFigure, nowModel, potentialGap, totalGrowthYears, totalRiseIn } from "./model.ts";
import { attachHistory, controlKeys, defFrom, headSigma, histControls, histHead, histNote, mWindowFrom, page, pageCycle, pickerOpen, qWindowFrom, refitHistory, timelineSpan, timelineWindow } from "./history.ts";
import { deficitBlock, dsrInfoHtml, growthInfoHtml, householdsNow, phaseClass, savInfoHtml, tempCaptionFull, tempInfo, tempLeadShown } from "./readings.ts";
import { cpiHistoryChart, deficitChart, gdpHistoryChart, householdsChart, unempHistoryChart } from "./history-charts.ts";
import { sheetRenderers } from "./render-core.ts";
import { growthDetail } from "./dial-cycle.ts";

type MetricCtx = { capeNow: number; buffNow: number | null; tempInd: Indicator | undefined; r: typeof nowModel.reading; gq: QuarterPoint[] };
// ---- THE INNER PAGES ----
function actCycleMonths(c: Cycle){
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
  return highlightsHtml([hhLede, hiCard("The Bill", "", billTxt),
                         hiCard("The Cushion", householdsNow.state, keptTxt)]);
}
function redrawSheet(id: string){
  var h = byId("metric-page"), d = sheetRenderers[id], keys = controlKeys(document.activeElement);
  if (d) d(h && h.clientWidth ? h.clientWidth : 340);
  Array.prototype.forEach.call(document.querySelectorAll("#metric-page .trend-on"), function(b){
    var p = b.querySelector(".trendpill.can-toggle");
    if (!p || p.getAttribute("aria-pressed") !== "true") b.classList.remove("trend-on");
  });
  keys.some(function(k){ return focusQuiet(document.querySelector<HTMLElement>(k)); });
}
function registerTempGdpPages(){
  sheetRenderers["sheet-metric-temp"] = function(W = 0){
    var r = page.range["sheet-metric-temp"], cyc = pageCycle("sheet-metric-temp");
    put("temp-rangebar", histControls("sheet-metric-temp", { series:inflationHistory }));
    put("temp-head", histHead("sheet-metric-temp"));
    var hist = need("temp-history"); hist.hidden = false;
    var win;
    if (cyc){
      var span = cycleSlice(inflationHistory, cyc);
      win = span ? inflationHistory.slice(span[0], span[1]) : [];
      hist.innerHTML = cpiHistoryChart(hist.clientWidth || W, span ? span[0] : 0,
                                       { to:span ? span[1] : undefined, cycle:true });
      attachHistory(hist, "temp-hist-tooltip", "cpiHistoryChart");
      put("temp-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true,
                  { rising:"heating", falling:"cooling" }));
    } else {
      var from = mWindowFrom(inflationHistory.length, r); win = inflationHistory.slice(from);
      hist.innerHTML = cpiHistoryChart(hist.clientWidth || W, from);
      attachHistory(hist, "temp-hist-tooltip", "cpiHistoryChart");
      put("temp-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true,
                  { rising:"heating", falling:"cooling" }));
    }
    var tri = totalRiseIn(win);
      headSigma("sheet-metric-temp", tri ? fmtSigned(tri.total, 0) + "%" : null);
  };
  sheetRenderers["sheet-metric-gdp"] = function(W = 0){
    var r = page.range["sheet-metric-gdp"];
    put("gdp-rangebar", histControls("sheet-metric-gdp", { series:gdpQuarterlyYoY }));
    histNote("sheet-metric-gdp", growthInfoHtml());
    put("gdp-head", histHead("sheet-metric-gdp"));
    var hist = need("gdp-history"); hist.hidden = false;
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
                { rising:"expanding", falling:"contracting" }));
  };

}
function registerActivityPowerDeficitPages(){
  sheetRenderers["sheet-sign-activity"] = function(W = 0){
    var id = "sheet-sign-activity", bar = byId("act-rangebar");
    if (!bar) return;
    bar.innerHTML = histControls(id, { series:unempHistory });
    var hist = byId("act-history"); if (!hist) return;
    var cyc = pageCycle(id);
    var span = cyc ? actCycleMonths(cyc) : null;
    var from = span ? span[0] : mWindowFrom(unempHistory.length, page.range[id]);
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
  sheetRenderers["deficit-range"] = function(W = 0){
    var host = byId("deficit-record"); if (!host) return;
    var key = page.range["deficit-range"], defCyc = pageCycle("deficit-range");
    var defIdx = defCyc ? [Math.max(0, defCyc.from - DEF_FROM_YEAR),
                           Math.min(deficitHistory.length, (defCyc.to || calendarTodayY) - DEF_FROM_YEAR + 1)] : null;
    var from = defIdx ? defIdx[0] : defFrom(key), defTo = defIdx ? defIdx[1] : undefined;
    put("deficit-rangebar", histControls("deficit-range",
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
  sheetRenderers["sheet-metric-households"] = function(W = 0){
    var id = "sheet-metric-households";
    var hhCyc = pageCycle(id, DSR_FROM_YEAR);
    var idx = hhCyc ? cycleQtrIdx(DSR_FROM_YEAR, hhCyc, dsrHistory.length) : null;
    var from = idx ? idx[0] : qWindowFrom(dsrHistory.length, page.range[id]);
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
    var box = host.querySelector<HTMLElement>(".page-chart");
    refitHistory(box, function(w){ return householdsChart(w, from, to); });
    attachHistory(box, "households-hist-tooltip", "householdsChart");
    put("households-highlights", householdsHighlights());
  };
  sheetRenderers["sheet-metric-valuation"] = function(W){
    var r = page.range["sheet-metric-valuation"], vlCyc = pageCycle("sheet-metric-valuation");
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
    var vBox = document.querySelector<HTMLElement>("#valuation-chart .page-chart");
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
    if (!(e.target as Element).closest) return;
    var sel = (e.target as Element).closest(".cycsel"), id = sel && sel.getAttribute("data-cycles-for");
    if (id && (e.target as Element).closest("[data-picker-toggle]")){ pickerOpen[id] = !pickerOpen[id]; redrawSheet(id); return; }
    var opt = (e.target as Element).closest(".cycsel-opt");
    if (id && opt && (id in page.cycles)){
      page.cycles[id] = opt.getAttribute("data-cycle");
      pickerOpen[id] = false;
      redrawSheet(id); return;
    }
    for (var k in pickerOpen) if (pickerOpen[k] && k !== id){ pickerOpen[k] = false; redrawSheet(k); }
  });
  document.addEventListener("click", function(e){
    var seg = (e.target as Element).closest && (e.target as Element).closest(".range-seg"); if (!seg) return;
    var mid = (seg.parentNode as Element).getAttribute("data-mode-for"), md = seg.getAttribute("data-mode");
    if (mid && md != null && (mid in page.mode)){
      page.mode[mid] = md;
      redrawSheet(mid);
      return;
    }
    var id = (seg.parentNode as Element).getAttribute("data-range-for"), rg = seg.getAttribute("data-range");
    if (id == null || rg == null || !(id in page.range)) return;
    page.range[id] = rg;
    redrawSheet(id);
  });

}
function valuationHighlights(capeNow: number, buffNow: number | null){
  var richer = capeHistory.filter(function(d): d is YearPoint { return d.v != null && d.v > capeNow; });
  var cards = [];
  cards.unshift('<p class="hi-lede">Valuations are what buyers pay for a dollar of earnings, smoothed over ' +
    'ten years. Paying far above the long-run price is appetite running ahead of what the body is actually ' +
    'producing.</p>');
  cards.push(hiCard("Shiller CAPE", stateOf(tagFor(now.valuation)), richer.length === 0
    ? "At " + capeFmt1(capeNow) + ", richer than every January reading since " + capeHistory[0].y + "."
    : "At " + capeFmt1(capeNow) + ", the " + ordinal(richer.length + 1) + " richest reading since " + capeHistory[0].y +
      " \u2014 only " + richer.map(function(d){ return d.y + " (" + capeFmt1(d.v) + ")"; }).join(" and ") + " ran higher."));
  put("valuation-highlights", highlightsHtml(cards, "", moreRow('<h4>Valuations</h4>' + factsFrom(now.valuation.impression))));
}
function tempHighlights(tempInd: Indicator | undefined, r: typeof nowModel.reading){
  var cyc = nowModel.cpi, hot = cyc.filter(function(d){ return d.v > 3; }).length;
  var peak = cyc.reduce(function(a, b){ return b.v > a.v ? b : a; });
  var cards = ['<p class="hi-lede">A temperature is the one number that says whether something inside is ' +
    'running too hot, and in an economy that number is prices. 2% is its 37°C — the reading only ' +
    'means anything measured against the level the system is meant to hold.</p>'];
  cards.push(hiCard("Temperature", tempInd ? stateOf(tagFor(tempInd)) : "warning",
    "Across the " + cyc.length + " months of the " + currentEra.name + ", prices have run above 3% in " + hot +
    " of them, and peaked at " + peak.v.toFixed(1) + "% in " + monthLabel(peak.m) + "."));
  cards.push(hiCard("Where It Sits Now", tempInd ? stateOf(tagFor(tempInd)) : "warning",
    "The current cycle\u2019s average is " + mean(cyc.map(function(d){ return d.v; })).toFixed(1) + "%, against a 2% target. Today\u2019s " +
    inflationFigure(r.cpiNow) + "% is " + (r.cpiNow > 3 ? "above" : r.cpiNow < 1 ? "below" : "inside") + " the 1\u20133% range."));
  put("temp-highlights", highlightsHtml(cards, "", moreRow(tempInfo + (function(){
      var rest = dropWhatIsShown(tempCaptionFull, tempLeadShown);
      return rest ? factsFrom(rest) : "";
    })())));
}
function gdpHighlights(r: typeof nowModel.reading, gq: QuarterPoint[]){
  var cycAvg = mean(gq.map(function(d){ return d.v; }));
  var contractions = gq.filter(function(d){ return d.v < 0; }).length;
  var cards = ['<p class="hi-lede">Growth is the build-up: how much more the economy made this year than ' +
    'last. A body spends the first half of its cycle building something it has not used yet, and an ' +
    'economy does the same with output.</p>'];
  cards.push(hiCard("Growth", phaseClass(r.regime),
    "Across the " + gq.length + " quarters of the " + currentEra.name + ", growth has averaged " + cycAvg.toFixed(1) +
    "% a year" + (contractions ? " and turned negative in " + contractions + " of them." : ", and has not turned negative in any of them.")));
  cards.push(hiCard("The Latest Quarter", phaseClass(r.regime),
    qLabel(r.gdpLatest.q) + " came in at " + r.gdpLatest.v.toFixed(1) + "%, " +
    (r.gdpLatest.v >= cycAvg ? "above" : "below") + " this cycle\u2019s own average and " + potentialGap(r) + " the economy\u2019s potential of " + r.potential.toFixed(1) + "%, so the season model reads the economy as " +
    growthWord(r) + "."));
  put("gdp-highlights", highlightsHtml(cards, "", moreRow(growthDetail)));
}
function shutPickers(){
  var open = Object.keys(pickerOpen).filter(function(k){ return pickerOpen[k]; });
  open.forEach(function(k){ pickerOpen[k] = false; redrawSheet(k); });
  var btn = open.length && document.querySelector<HTMLElement>("[data-cycles-for=\"" + open[0] + "\"] [data-picker-toggle]");
  if (btn) focusQuiet(btn);
}
function wireControlKeys(){
  layer(0, { open:function(){ return Object.keys(pickerOpen).some(function(k){ return pickerOpen[k]; }); }, close:shutPickers });
  document.addEventListener("keydown", function(e){
    var t = e.target as HTMLElement, sel = t.closest && t.closest(".cycsel"), bar = t.closest && t.closest(".rangebar");
    var step = { ArrowUp:-1, ArrowDown:1, ArrowLeft:-1, ArrowRight:1 }[e.key] || 0;
    if (!step && e.key !== "Home" && e.key !== "End") return;
    var id = sel && sel.getAttribute("data-cycles-for"); if (sel && id != null){
      var opts = Array.prototype.slice.call(sel.querySelectorAll(".cycsel-opt"));
      if (!pickerOpen[id]){ if (e.key === "ArrowDown"){ e.preventDefault(); var tog = sel.querySelector<HTMLElement>("[data-picker-toggle]"); if (tog) tog.click(); focusQuiet(document.querySelector<HTMLElement>("[data-cycles-for=\"" + id + "\"] .cycsel-opt.on")); } return; }
      var i = opts.indexOf(t);
      var j = e.key === "Home" ? 0 : e.key === "End" ? opts.length - 1 : i < 0 ? 0 : Math.max(0, Math.min(opts.length - 1, i + step));
      e.preventDefault(); focusQuiet(opts[j]); return;
    }
    if (!bar || !t.classList.contains("range-seg")) return;
    var segs = Array.prototype.slice.call(bar.querySelectorAll(".range-seg")), k = segs.indexOf(t);
    var m = e.key === "Home" ? 0 : e.key === "End" ? segs.length - 1 : (k + step + segs.length) % segs.length;
    e.preventDefault(); if (m !== k){ segs[m].focus(); segs[m].click(); }
  });
}
export function renderMetricPages(ctx: MetricCtx){
  registerTempGdpPages();
  registerActivityPowerDeficitPages();
  registerHouseholdsValuationPages();
  wireMetricPageControls();
  wireControlKeys();
  valuationHighlights(ctx.capeNow, ctx.buffNow);
  tempHighlights(ctx.tempInd, ctx.r);
  gdpHighlights(ctx.r, ctx.gq);
}
