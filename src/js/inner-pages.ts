import { capeFmt1, dropWhatIsShown, factsFrom, fmtSigned, hiCard, highlightsHtml, lede, mean, metered, monthLabel, ordinal, qAtIndex, qLabel, stateOf, tagFor, titleCase, yearOf } from "./format.ts";
import { addSources, byId, focusQuiet, layer, moreRow } from "./dom.ts";
import { divergeChart, trendOf, trendPill } from "./charts.ts";
import { calendarTodayY, inflationHistory, gdpQuarterlyYoY } from "./refresh-season.ts";
import { CAPE_FAIR, capeHistory, DEFICIT_LINE, DEF_FROM_YEAR, deficitHistory, DSR_FROM_YEAR, DSR_MEAN, dsrHistory, dsrNow, fileRow, labRow, longCycleSrc, now, SAV_FROM_YEAR, SAV_OFFSET, savHistory, savNow, syncCapeHistory, unempHistory } from "./data.ts";
import { currentEra, cycleQtrIdx, cycleSlice, growthWord, inflationFigure, nowModel, potentialGap, totalGrowthYears, totalRiseIn } from "./model.ts";
import { controlKeys, defFrom, histControls, mWindowFrom, page, pageCycle, pickerOpen, qWindowFrom, timelineSpan, timelineWindow } from "./history.ts";
import { activityInfoHtml, deficitInfoHtml, dsrInfoHtml, gdpWord, growthInfoHtml, householdsNow, lagging, phaseClass, savInfoHtml, tempInfo, temperatureInfoHtml } from "./readings.ts";
import { cpiHistoryChart, deficitChart, gdpHistoryChart, householdsChart, unempHistoryChart } from "./history-charts.ts";
import { gdpFigure, sheetRenderers, tempWord } from "./render-core.ts";
import { growthDetail } from "./dial-cycle.ts";
import { meterWord } from "./indicators.ts";
import { defineReading, indicatorInsight, recordInsight, recordPoints } from "./reading.ts";
import { ROSTER_BY } from "./roster.ts";

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
  var hhLede = lede('Two halves of one household: what it owes every month, and what is left ' +
    'after. The bill is the load the body carries; the cushion is what it has stored against a month that ' +
    'goes wrong.');
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
function lagRow(term: string){ var ind = lagging.filter(function(x){ return x.bodyTerm === term; })[0]; if (!ind) throw new Error("no " + term + " reading"); return ind; }
function monthWindow(id: string, series: MonthPoint[]){
  var cyc = pageCycle(id), span = cyc ? cycleSlice(series, cyc) : null;
  return span ? { from:span[0], to:span[1] as number | undefined, cycle:true } : { from:mWindowFrom(series.length, page.range[id]), to:undefined, cycle:false };
}
function defineTemp(){
  var id = "sheet-metric-temp";
  defineReading(id, {
    face:function(){ return [lagRow("Temperature").metric, tempWord(nowModel.reading)]; },
    info:function(){ return temperatureInfoHtml(lagRow("Temperature")); },
    controls:function(){ return histControls(id, { series:inflationHistory }); },
    history:function(){
      var w = monthWindow(id, inflationHistory), win = inflationHistory.slice(w.from, w.to), tri = totalRiseIn(win);
      return { geom:"cpiHistoryChart", wrap:"vh-host", sigma:tri ? fmtSigned(tri.total, 0) + "%" : null,
        chart:function(W: number){ return cpiHistoryChart(W, w.from, { to:w.to, cycle:w.cycle }); },
        trend:trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true, { rising:"heating", falling:"cooling" }) };
    },
    insight:tempHighlights
  });
}
function defineGdp(){
  var id = "sheet-metric-gdp";
  defineReading(id, {
    face:function(){ return [gdpFigure(nowModel.reading), gdpWord(nowModel.reading)]; },
    info:growthInfoHtml,
    controls:function(){ return histControls(id, { series:gdpQuarterlyYoY }); },
    history:function(){
      var cyc = pageCycle(id), span = cyc ? cycleSlice(gdpQuarterlyYoY, cyc) : null;
      var from = span ? span[0] : qWindowFrom(gdpQuarterlyYoY.length, page.range[id]), to = span ? span[1] : undefined;
      var win = gdpQuarterlyYoY.slice(from, to), gt = totalGrowthYears(yearOf(win[0]), yearOf(win[win.length - 1]));
      return { geom:"gdpHistoryChart", wrap:"vh-host", sigma:gt ? fmtSigned(gt.total, 0) + "%" : null,
        chart:function(W: number){ return gdpHistoryChart(W, from, { to:to, cycle:!!span }); },
        trend:trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "quarter"), null, true, { rising:"accelerating", falling:"slowing" }) };
    },
    insight:gdpHighlights
  });
}
function defineActivity(){
  var id = "sheet-sign-activity";
  defineReading(id, {
    face:function(){ var ind = lagRow("Activity"); return [ind.metric, ind.tag ? ind.tag.text : ""]; },
    info:function(){ return activityInfoHtml(lagRow("Activity")); },
    controls:function(){ return histControls(id, { series:unempHistory }); },
    history:function(){
      var cyc = pageCycle(id), span = cyc ? actCycleMonths(cyc) : null;
      var from = span ? span[0] : mWindowFrom(unempHistory.length, page.range[id]), to = span ? span[1] : undefined;
      var win = unempHistory.slice(from, to).filter(function(d){ return d.v != null; });
      return { geom:"unempHistoryChart", wrap:"vh-host",
        chart:function(W: number){ return unempHistoryChart(W, from, { to:to, cycle:!!span }); },
        trend:trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true, { rising:"loosening", falling:"tightening" }) };
    },
    insight:function(){ return indicatorInsight(ROSTER_BY[id], lagRow("Activity"), function(v){ return v.toFixed(1) + "%"; }); }
  });
}
function defineDeficit(){
  var id = "sheet-marker-deficit", key = "deficit-range";
  defineReading(id, {
    face:function(){ var row = labRow(id); return [row.flagValue, meterWord(row.meter)]; },
    info:deficitInfoHtml,
    controls:function(){ return histControls(key, { depth:deficitHistory.length }); },
    history:function(){
      var cyc = pageCycle(key), idx = cyc ? [Math.max(0, cyc.from - DEF_FROM_YEAR), Math.min(deficitHistory.length, (cyc.to || calendarTodayY) - DEF_FROM_YEAR + 1)] : null;
      var from = idx ? idx[0] : defFrom(page.range[key]), to = idx ? idx[1] : undefined;
      return { geom:"deficitChart", wrap:"vh-host", chart:function(W: number){ return deficitChart(W, from, to); },
        trend:trendPill(trendOf(deficitHistory.slice(from, to), "points", "year"), null, true, { rising:"improving", falling:"widening" }) };
    },
    insight:function(){ return recordInsight(recordPoints(ROSTER_BY[id]), { lede:labRow(id).shortNote || "", fmt:function(v){ return fmtSigned(v, 1) + "%"; },
      mid:-DEFICIT_LINE, line:"the 50-year average of " + fmtSigned(-DEFICIT_LINE, 1) + "%" }); }, src:longCycleSrc
  });
}
function defineHouseholds(){
  var id = "sheet-metric-households";
  defineReading(id, {
    face:function(){ return [dsrNow.toFixed(1) + "/" + savNow.toFixed(1), householdsNow.word]; },
    info:function(){ return dsrInfoHtml() + savInfoHtml(); },
    controls:function(){ return histControls(id, { depth:Math.floor(dsrHistory.length / 4) }, DSR_FROM_YEAR); },
    history:function(){
      var cyc = pageCycle(id, DSR_FROM_YEAR), idx = cyc ? cycleQtrIdx(DSR_FROM_YEAR, cyc, dsrHistory.length) : null;
      var from = idx ? idx[0] : qWindowFrom(dsrHistory.length, page.range[id]), to = idx ? idx[1] : dsrHistory.length;
      return { geom:"householdsChart", chart:function(W: number){ return householdsChart(W, from, to); },
        trend:trendPill(trendOf(savHistory.slice(SAV_OFFSET + from, SAV_OFFSET + to), "points", "quarter"), "Saving", true, { rising:"keeping more", falling:"keeping less" }) };
    },
    insight:householdsHighlights
  });
}
function valuationInfo(){ var cape = fileRow("cape"); return '<h4>' + titleCase(cape.marker) + '</h4><div class="marker-sub">' + cape.sub + '</div>' + factsFrom(cape.note); }
function defineValuation(){
  var id = "sheet-metric-valuation";
  defineReading(id, {
    face:function(){ return [fileRow("cape").flagValue, (now.valuation.tag || { text:"" }).text]; },
    info:valuationInfo,
    controls:function(){ return histControls(id, { series:capeHistory }); },
    history:function(){
      var r = page.range[id], cyc = pageCycle(id), span = cyc ? cycleSlice(capeHistory, cyc) : null;
      var vals = span ? capeHistory.slice(span[0], span[1]) : timelineWindow(capeHistory, r);
      var capeTrend = trendOf(vals.map(function(d){ return d.v; }), "\u00d7", "year");
      return { geom:"divergeChart", trend:trendPill(capeTrend, null, true), chart:function(W: number){
        return divergeChart({ vals:vals, mid:CAPE_FAIR, midLabel:"fair value, " + CAPE_FAIR + "\u00d7", fmt:capeFmt1,
          tickFmt:function(v){ return v + "\u00d7"; }, fit:capeTrend.fit,
          alt:"Shiller CAPE against its long-run fair value, each January" +
              (r === "max" ? " since " + capeHistory[0].y : " of the last " + timelineSpan(r) + " years") +
              ", with the fitted trend across the readings in view" }, W);
      } };
    },
    insight:valuationHighlights, src:now.valuation.src
  });
}
export function defineInnerReadings(){
  syncCapeHistory();
  defineTemp(); defineGdp(); defineActivity(); defineDeficit(); defineHouseholds(); defineValuation();
  addSources(now.valuation.src);
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
function valuationHighlights(){
  var capeNow = metered(fileRow("cape").meter);
  var richer = capeHistory.filter(function(d): d is YearPoint { return d.v != null && d.v > capeNow; });
  var cards = [lede('Valuations are what buyers pay for a dollar of earnings, smoothed over ' +
    'ten years. Paying far above the long-run price is appetite running ahead of what the body is actually ' +
    'producing.')];
  cards.push(hiCard("Shiller CAPE", stateOf(tagFor(now.valuation)), richer.length === 0
    ? "At " + capeFmt1(capeNow) + ", richer than every January reading since " + capeHistory[0].y + "."
    : "At " + capeFmt1(capeNow) + ", the " + ordinal(richer.length + 1) + " richest reading since " + capeHistory[0].y +
      " \u2014 only " + richer.map(function(d){ return d.y + " (" + capeFmt1(d.v) + ")"; }).join(" and ") + " ran higher."));
  return highlightsHtml(cards, "", moreRow('<h4>Valuations</h4>' + factsFrom(now.valuation.impression)));
}
function tempHighlights(){
  var tempInd = lagRow("Temperature"), r = nowModel.reading, cyc = nowModel.cpi, hot = cyc.filter(function(d){ return d.v > 3; }).length;
  var peak = cyc.reduce(function(a, b){ return b.v > a.v ? b : a; });
  var cards = [lede('A temperature is the one number that says whether something inside is ' +
    'running too hot, and in an economy that number is prices. 2% is its 37°C — the reading only ' +
    'means anything measured against the level the system is meant to hold.')];
  cards.push(hiCard("Temperature", tempInd ? stateOf(tagFor(tempInd)) : "warning",
    "Across the " + cyc.length + " months of the " + currentEra.name + ", prices have run above 3% in " + hot +
    " of them, and peaked at " + peak.v.toFixed(1) + "% in " + monthLabel(peak.m) + "."));
  cards.push(hiCard("Where It Sits Now", tempInd ? stateOf(tagFor(tempInd)) : "warning",
    "The current cycle\u2019s average is " + mean(cyc.map(function(d){ return d.v; })).toFixed(1) + "%, against a 2% target. Today\u2019s " +
    inflationFigure(r.cpiNow) + "% is " + (r.cpiNow > 3 ? "above" : r.cpiNow < 1 ? "below" : "inside") + " the 1\u20133% range."));
  var rest = dropWhatIsShown(tempInd.caption || "", tempInd.lead || tempInd.shortCaption || "");
  return highlightsHtml(cards, "", moreRow(tempInfo + (rest ? factsFrom(rest) : "")));
}
function gdpHighlights(){
  var r = nowModel.reading, gq = gdpQuarterlyYoY.filter(function(d){ return parseInt(d.q.slice(0, 4), 10) >= nowModel.era.from; });
  var cycAvg = mean(gq.map(function(d){ return d.v; })), contractions = gq.filter(function(d){ return d.v < 0; }).length;
  var cards = [lede('Growth is the build-up: how much more the economy made this year than ' +
    'last. A body spends the first half of its cycle building something it has not used yet, and an ' +
    'economy does the same with output.')];
  cards.push(hiCard("Growth", phaseClass(r.regime),
    "Across the " + gq.length + " quarters of the " + currentEra.name + ", growth has averaged " + cycAvg.toFixed(1) +
    "% a year" + (contractions ? " and turned negative in " + contractions + " of them." : ", and has not turned negative in any of them.")));
  cards.push(hiCard("The Latest Quarter", phaseClass(r.regime),
    qLabel(r.gdpLatest.q) + " came in at " + r.gdpLatest.v.toFixed(1) + "%, " +
    (r.gdpLatest.v >= cycAvg ? "above" : "below") + " this cycle\u2019s own average and " + potentialGap(r) + " the economy\u2019s potential of " + r.potential.toFixed(1) + "%, so the season model reads the economy as " +
    growthWord(r) + "."));
  return highlightsHtml(cards, "", moreRow(growthDetail));
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
export function wirePageControls(){
  wireMetricPageControls();
  wireControlKeys();
}
