# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,903 lines**, about 636 KB, roughly **180 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `46e5b1f` on 2026-09-30.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,561 | the whole stylesheet, every token and rule |
| **Markup** | 1,562–2,029 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 2,030–8,870 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,871–8,903 | </body></html> |

Counts: **365** top-level functions, **187** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 2,030_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,032 | `byId` | `function byId(` |
| 2,040 | `byIdMaybe` | `function byIdMaybe(` |
| 2,041 | `put` | `function put(` |
| 2,046 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 2,048_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,049 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 2,050 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 2,051 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 2,052 | `hubTodayHtml` | `function hubTodayHtml(` |
| 2,056 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 2,061_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,062 | `wheelMeta` | `var wheelMeta =` |
| 2,070 | `seasonOverride` | `var seasonOverride =` |
| 2,071 | `cycleNowNote` | `var cycleNowNote =` |
| 2,073 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 2,151 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 2,192 | `gdpLevels` | `var gdpLevels =` |
| 2,201 | `fedFundsHistory` | `var fedFundsHistory =` |
| 2,202 | `fearCurveHistory` | `var fearCurveHistory =` |
| 2,204 | `fiscalHistory` | `var fiscalHistory =` |
| 2,210 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 2,212 | `treasuryQuarterly` | `var treasuryQuarterly =` |

### Live data without a render refactor

_line 2,222_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,227 | `merge` | `function merge(` |
| 2,234 | `LIVE` | `function LIVE(` |
| 2,248 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,251_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,253 | `paintReading` | `function paintReading(` |
| 2,270 | `repaintFearCurve` | `function repaintFearCurve(` |
| 2,276 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,284 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,289 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,293 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,298_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,299 | `READINGS` | `var READINGS =` |
| 2,355 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,356 | `KINDS` | `var KINDS =` |
| 2,357 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,371 | `receive` | `function receive(` |
| 2,387 | `liveAsOf` | `var liveAsOf =` |
| 2,388 | `fmtAsOf` | `function fmtAsOf(` |
| 2,393 | `applyLive` | `function applyLive(` |
| 2,406 | `shapeOk` | `function shapeOk(` |
| 2,413 | `repaintPolicy` | `function repaintPolicy(` |
| 2,419 | `GYN` | `var GYN =` |
| 2,446 | `refreshLiveData` | `function refreshLiveData(` |
| 2,464 | `fetchSiteData` | `function fetchSiteData(` |
| 2,480 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,485_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,486 | `yieldCurve` | `var yieldCurve =` |
| 2,492 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,493 | `curveAsOf` | `function curveAsOf(` |
| 2,498 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,499 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,504 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,506_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,507 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,508 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,509 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,510 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,511 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,513_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,514 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,520 | `uninvLagToday` | `var uninvLagToday =` |
| 2,525 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,531 | `gdpPeers` | `var gdpPeers =` |
| 2,572 | `gdpSrc` | `var gdpSrc =` |
| 2,573 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,579 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,608_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,610 | `productivityReading` | `var productivityReading =` |

### The deficit, year by year

_line 2,621_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,622 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,623 | `deficitHistory` | `var deficitHistory =` |
| 2,626 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,627 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,629 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,638_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,639 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,649_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,650 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,653 | `timelineSpan` | `function timelineSpan(` |
| 2,658 | `timelineFor` | `function timelineFor(` |
| 2,669 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,675_ · 32 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,676 | `windowScale` | `function windowScale(` |
| 2,691 | `windowYears` | `function windowYears(` |
| 2,699 | `refName` | `function refName(` |
| 2,703 | `histReadEnsure` | `function histReadEnsure(` |
| 2,724 | `seatBandReading` | `function seatBandReading(` |
| 2,740 | `histReadFill` | `function histReadFill(` |
| 2,790 | `histAxisEnds` | `function histAxisEnds(` |
| 2,801 | `histLegend` | `function histLegend(` |
| 2,861 | `refitHistory` | `function refitHistory(` |
| 2,871 | `wireHistHover` | `function wireHistHover(` |
| 2,908 | `mWindowFrom` | `function mWindowFrom(` |
| 2,912 | `qWindowFrom` | `function qWindowFrom(` |
| 2,916 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,917 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,919 | `DEF_1983` | `var DEF_1983 =` |
| 2,920 | `defFrom` | `function defFrom(` |
| 2,925 | `deficitChart` | `function deficitChart(` |
| 2,993 | `deficitBlock` | `function deficitBlock(` |
| 3,033 | `buffettHistory` | `var buffettHistory =` |
| 3,035 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 3,036 | `hyDates` | `var hyDates =` |
| 3,037 | `hyOas` | `var hyOas =` |
| 3,038 | `checkDesireWindow` | `function checkDesireWindow(` |
| 3,045 | `hyAt` | `function hyAt(` |
| 3,049 | `hyLabel` | `function hyLabel(` |
| 3,050 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 3,051 | `hyNum` | `function hyNum(` |
| 3,052 | `hyWindowFrom` | `function hyWindowFrom(` |
| 3,060 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 3,070 | `capeHistory` | `var capeHistory =` |
| 3,072 | `longCycleSrc` | `var longCycleSrc =` |
| 3,088 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 3,102_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,103 | `sentiment` | `var sentiment =` |
| 3,119 | `valuation` | `var valuation =` |
| 3,140 | `valRow` | `function valRow(` |
| 3,145 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 3,148 | `coincident` | `var coincident =` |
| 3,193 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 3,199 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 3,200 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 3,201 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 3,203_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,204 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 3,205 | `m2vHistory` | `var m2vHistory =` |
| 3,221 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,275 | `desireHistoryChart` | `function desireHistoryChart(` |
| 3,315 | `PBAR_GAP` | `var PBAR_GAP =` |
| 3,316 | `panelBar` | `function panelBar(` |

### the history card's head

_line 3,347_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,348 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,349 | `DOTS` | `var DOTS =` |
| 3,351 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,366 | `headPickRow` | `function headPickRow(` |
| 3,372 | `histHead` | `function histHead(` |
| 3,387 | `headNoteIdx` | `var headNoteIdx =` |
| 3,388 | `headMenuHtml` | `function headMenuHtml(` |
| 3,413 | `headMenuFor` | `var headMenuFor =` |
| 3,414 | `headSubFor` | `var headSubFor =` |
| 3,415 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,446 | `nameWithMark` | `function nameWithMark(` |
| 3,452 | `panelRow` | `function panelRow(` |
| 3,465 | `panelFromMeter` | `function panelFromMeter(` |
| 3,473 | `meterFlagged` | `function meterFlagged(` |
| 3,480 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,503 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,517 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,530 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,549 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,563 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,582 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,613 | `desireBlock` | `function desireBlock(` |
| 3,625 | `volumeBlock` | `function volumeBlock(` |
| 3,638 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,654 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,661_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,662 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,663 | `m2Level` | `var m2Level =` |
| 3,684 | `m2Yoy` | `var m2Yoy =` |
| 3,685 | `M2_NORM` | `var M2_NORM =` |
| 3,687 | `volumeVerdict` | `function volumeVerdict(` |
| 3,695 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,696 | `unempHistory` | `var unempHistory =` |
| 3,702 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,711 | `NROU_NOW` | `var NROU_NOW =` |
| 3,712 | `unempState` | `function unempState(` |
| 3,718 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,772_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,773 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,782 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,840 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,841 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,842 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,843_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,845 | `householdsChart` | `function householdsChart(` |
| 3,894 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,949 | `GDP_NORM` | `var GDP_NORM =` |
| 3,950 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 3,951 | `gdpNowQ` | `var gdpNowQ =` |
| 3,952 | `gdpMeter` | `var gdpMeter =` |
| 3,955 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,977 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 4,030 | `m2GrowthChart` | `function m2GrowthChart(` |
| 4,077 | `checkMoneyStock` | `function checkMoneyStock(` |
| 4,085 | `velocityVerdict` | `function velocityVerdict(` |
| 4,093 | `derivePulseTag` | `function derivePulseTag(` |
| 4,099 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 4,129_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,130 | `seasonReading` | `var seasonReading =` |
| 4,174 | `frameworkRows` | `var frameworkRows =` |
| 4,184 | `vixRow` | `var vixRow =` |
| 4,185 | `vixWordOf` | `var vixWordOf =` |
| 4,189 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 4,199_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,200 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 4,209_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,210 | `calendarTodayY` | `var calendarTodayY =` |
| 4,212 | `vix3mClose` | `var vix3mClose =` |
| 4,213 | `fearCurve` | `function fearCurve(` |
| 4,218 | `curveVerdict` | `function curveVerdict(` |
| 4,223 | `valuationVerdict` | `function valuationVerdict(` |
| 4,231 | `sparkHtml` | `function sparkHtml(` |
| 4,250 | `lastN` | `function lastN(` |

### The range bar

_line 4,252_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,253 | `modeBar` | `function modeBar(` |
| 4,260 | `pickerOpen` | `var pickerOpen =` |
| 4,261 | `cycleByName` | `function cycleByName(` |
| 4,265 | `openCycle` | `function openCycle(` |
| 4,269 | `cycleSlice` | `function cycleSlice(` |
| 4,277 | `totalGrowthYears` | `function totalGrowthYears(` |
| 4,285 | `cycleMonths` | `function cycleMonths(` |
| 4,293 | `histControls` | `function histControls(` |
| 4,302 | `cycLabel` | `function cycLabel(` |
| 4,306 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 4,311 | `cyclePicker` | `function cyclePicker(` |
| 4,330 | `rangeBar` | `function rangeBar(` |
| 4,337 | `trendOf` | `function trendOf(` |
| 4,352 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,356 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,367_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,368 | `yearOf` | `function yearOf(` |
| 4,369 | `mean` | `function mean(` |

### The record rows

_line 4,370_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,371 | `headSigma` | `function headSigma(` |
| 4,376 | `atQuarter` | `function atQuarter(` |
| 4,377 | `atMonth` | `function atMonth(` |
| 4,378 | `cycleAverages` | `function cycleAverages(` |
| 4,385 | `ordinal` | `function ordinal(` |
| 4,386 | `hiCard` | `function hiCard(` |
| 4,389 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component

_line 4,403_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,404 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 4,410 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,417 | `moreRow` | `function moreRow(` |
| 4,423 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,424 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,430_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,431 | `xLabelOf` | `function xLabelOf(` |
| 4,441 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,459_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,460 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,468 | `vGrid` | `function vGrid(` |
| 4,472 | `COL_FILL` | `var COL_FILL =` |
| 4,473 | `colPath` | `function colPath(` |
| 4,478 | `colWidth` | `function colWidth(` |
| 4,483 | `AXIS` | `var AXIS =` |
| 4,484 | `histFrame` | `function histFrame(` |
| 4,491 | `xLabel` | `function xLabel(` |
| 4,494 | `crossLine` | `function crossLine(` |
| 4,497 | `zeroRule` | `function zeroRule(` |
| 4,500 | `meanRule` | `function meanRule(` |
| 4,501 | `pendingGeom` | `var pendingGeom =` |
| 4,502 | `publishGeom` | `function publishGeom(` |
| 4,503 | `attachHistory` | `function attachHistory(` |
| 4,512 | `histBar` | `function histBar(` |
| 4,515 | `histTip` | `function histTip(` |
| 4,516 | `avgRule` | `function avgRule(` |
| 4,519 | `vhOpen` | `function vhOpen(` |
| 4,520 | `chartAxes` | `function chartAxes(` |
| 4,550 | `divergeChart` | `function divergeChart(` |
| 4,584 | `pairChart` | `function pairChart(` |

### The inner pages' chart (kept for nothing — see above)

_line 4,612_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,614 | `maxIn` | `function maxIn(` |
| 4,619 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,620 | `PEEK_W` | `var PEEK_W =` |
| 4,621 | `PEEK_H` | `var PEEK_H =` |
| 4,622 | `colPeek` | `function colPeek(` |
| 4,640 | `meterPeek` | `function meterPeek(` |
| 4,657 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,662 | `pressureZone` | `function pressureZone(` |
| 4,668 | `HZN_BACK` | `var HZN_BACK =` |
| 4,669 | `hznLast` | `function hznLast(` |
| 4,670 | `hznBack` | `function hznBack(` |
| 4,671 | `horizonWord` | `function horizonWord(` |
| 4,691 | `HZN_METERS` | `var HZN_METERS =` |
| 4,699 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,720 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,725 | `RISK_RISK` | `var RISK_RISK =` |
| 4,730 | `riskCell` | `function riskCell(` |
| 4,731 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,761 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,786_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,787 | `pulseClipN` | `var pulseClipN =` |
| 4,788 | `beatPath` | `function beatPath(` |
| 4,805 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,819 | `pulsePeek` | `function pulsePeek(` |
| 4,822 | `pulseBlock` | `function pulseBlock(` |
| 4,839 | `CHEV` | `var CHEV =` |
| 4,840 | `peekCard` | `function peekCard(` |
| 4,859 | `dropSvg` | `function dropSvg(` |
| 4,861 | `volumeSvg` | `function volumeSvg(` |
| 4,865 | `gaugeSvg` | `function gaugeSvg(` |
| 4,869 | `diamondSvg` | `function diamondSvg(` |
| 4,873 | `sproutSvg` | `function sproutSvg(` |
| 4,881 | `markSvg` | `function markSvg(` |
| 4,884 | `hormoneSvg` | `function hormoneSvg(` |
| 4,889 | `flameSvg` | `function flameSvg(` |
| 4,892 | `gearSvg` | `function gearSvg(` |
| 4,900 | `thermoSvg` | `function thermoSvg(` |
| 4,903 | `trendUpSvg` | `function trendUpSvg(` |
| 4,905 | `ecgSvg` | `function ecgSvg(` |
| 4,907 | `circulationSvg` | `function circulationSvg(` |
| 4,908 | `weatherSvg` | `function weatherSvg(` |
| 4,916 | `moodSvg` | `function moodSvg(` |
| 4,920 | `boltSvg` | `function boltSvg(` |
| 4,921 | `houseSvg` | `function houseSvg(` |
| 4,924 | `sunriseSvg` | `function sunriseSvg(` |
| 4,928 | `umbrellaSvg` | `function umbrellaSvg(` |
| 4,932 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 4,938_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,939 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,940 | `dsrHistory` | `var dsrHistory =` |
| 4,941 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,942 | `savHistory` | `var savHistory =` |
| 4,945 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,954 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,955 | `dsrNow` | `var dsrNow =` |
| 4,956 | `savNow` | `var savNow =` |
| 4,957 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,958 | `householdsWord` | `function householdsWord(` |
| 4,965 | `householdsNow` | `var householdsNow =` |
| 4,966 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 4,967 | `dsrMeter` | `var dsrMeter =` |
| 4,970 | `savMeter` | `var savMeter =` |
| 4,973 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,990 | `savInfoHtml` | `function savInfoHtml(` |
| 5,008 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 5,015 | `curveNow` | `var curveNow =` |
| 5,016 | `curveTag` | `var curveTag =` |
| 5,017 | `curveSub` | `var curveSub =` |
| 5,018 | `curvePct` | `function curvePct(` |
| 5,019 | `curveNoteFull` | `var curveNoteFull =` |
| 5,034 | `curveDetailHtml` | `function curveDetailHtml(` |
| 5,038 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 5,044 | `marketCycles` | `var marketCycles =` |
| 5,072 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 5,074_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,075 | `typicalCycleYears` | `var typicalCycleYears =` |
| 5,076 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 5,081_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,082 | `slopeOf` | `function slopeOf(` |
| 5,087 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 5,088 | `readSeason` | `function readSeason(` |
| 5,107 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 5,108 | `qLabel` | `function qLabel(` |
| 5,123 | `regimeTrack` | `function regimeTrack(` |
| 5,143 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 5,145_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,146 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 5,147 | `seasonTitle` | `function seasonTitle(` |
| 5,148 | `monthLabel` | `function monthLabel(` |
| 5,149 | `cycleModel` | `function cycleModel(` |
| 5,186 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,194 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,200 | `nowModel` | `var nowModel =` |
| 5,201 | `readingNow` | `var readingNow =` |
| 5,202 | `cpiNow` | `var cpiNow =` |
| 5,203 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,204 | `currentSeason` | `var currentSeason =` |
| 5,205 | `seasonWhy` | `var seasonWhy =` |
| 5,207 | `seasonGroup` | `function seasonGroup(` |
| 5,209 | `arcGauge` | `function arcGauge(` |
| 5,243 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,254 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,255 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,256 | `spreadLabel` | `function spreadLabel(` |
| 5,260 | `policyFacts` | `function policyFacts(` |
| 5,267 | `policyFactRows` | `function policyFactRows(` |
| 5,273 | `allSources` | `var allSources =` |
| 5,287 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,299_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,300 | `SVG_NS` | `var SVG_NS =` |
| 5,301 | `svgEl` | `function svgEl(` |
| 5,306 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,340_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,341 | `clampPct` | `function clampPct(` |
| 5,343 | `infoIcon` | `function infoIcon(` |
| 5,348 | `detailTexts` | `var detailTexts =` |
| 5,349 | `detailSlots` | `var detailSlots =` |
| 5,350 | `detailSlot` | `function detailSlot(` |
| 5,360 | `valuationPanelHtml` | `var valuationPanelHtml =` |
| 5,361 | `_growthPanel` | `var _growthPanel =` |
| 5,362 | `growthPanelHtml` | `function growthPanelHtml(` |
| 5,368 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 5,376 | `facts` | `function facts(` |
| 5,377 | `factsFrom` | `function factsFrom(` |
| 5,381 | `expandBtn` | `function expandBtn(` |
| 5,385 | `sheetRenderers` | `var sheetRenderers =` |
| 5,386 | `pageMode` | `var pageMode =` |
| 5,391 | `pageCycles` | `var pageCycles =` |
| 5,396 | `pageRange` | `var pageRange =` |
| 5,402 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,431_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,434 | `meterHtml` | `function meterHtml(` |
| 5,458 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,459_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,460 | `subjectRow` | `function subjectRow(` |
| 5,470 | `subjectIcon` | `function subjectIcon(` |
| 5,471 | `srcHtml` | `function srcHtml(` |
| 5,472 | `TIMING` | `var TIMING =` |
| 5,478 | `timingMark` | `function timingMark(` |
| 5,486 | `timingPill` | `function timingPill(` |
| 5,495 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,503 | `seatPageFoot` | `function seatPageFoot(` |
| 5,515 | `timingMembers` | `var timingMembers =` |
| 5,516 | `registerTiming` | `function registerTiming(` |
| 5,518 | `headHtml` | `function headHtml(` |
| 5,526 | `heldHighlights` | `var heldHighlights =` |
| 5,527 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,555_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,556 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,557 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,565 | `withLatestPoint` | `function withLatestPoint(` |
| 5,570 | `pressureMaturities` | `function pressureMaturities(` |
| 5,594 | `registerFlowPages` | `function registerFlowPages(` |
| 5,653 | `renderPressureRow` | `function renderPressureRow(` |
| 5,661 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,680 | `ylmColumns` | `function ylmColumns(` |
| 5,700 | `ylmFitLine` | `function ylmFitLine(` |
| 5,712 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,858_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,859 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,896_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,897 | `spreadSeries` | `function spreadSeries(` |
| 5,941 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 6,066_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,067 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 6,093_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,094 | `drawHznHead` | `function drawHznHead(` |
| 6,109 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 6,171_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,172 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 6,188_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,189 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 6,288_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,289 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,362_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,363 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,423_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,424 | `totalRiseIn` | `function totalRiseIn(` |
| 6,434 | `eraInflation` | `function eraInflation(` |
| 6,445 | `eraGrowth` | `function eraGrowth(` |
| 6,461 | `fmtSigned` | `function fmtSigned(` |
| 6,462 | `regimeArrow` | `function regimeArrow(` |
| 6,463 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,464 | `growthShown` | `function growthShown(` |
| 6,465 | `growthShownCap` | `function growthShownCap(` |
| 6,466 | `regimeState` | `function regimeState(` |
| 6,467 | `phaseClass` | `function phaseClass(` |
| 6,468 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,473 | `cycleViewEl` | `var cycleViewEl =` |
| 6,474 | `tempCard` | `var tempCard =` |
| 6,475 | `placeCharts` | `function placeCharts(` |
| 6,480 | `shownEra` | `var shownEra =` |
| 6,481 | `calendarReset` | `var calendarReset =` |
| 6,482 | `metricPageReset` | `var metricPageReset =` |
| 6,483 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,484 | `topbarBack` | `var topbarBack =` |
| 6,485 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,492_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,493 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,574_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,575 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,593_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,594 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,615_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,617 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,618 | `hubSet` | `function hubSet(` |
| 6,629 | `quarterPopup` | `function quarterPopup(` |
| 6,652 | `hubShowDefault` | `function hubShowDefault(` |
| 6,660 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,666 | `hubShowYear` | `function hubShowYear(` |
| 6,676 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: the cycle's months, against the 2% target

_line 6,757_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,758 | `tempState` | `var tempState =` |
| 6,759 | `chartLink` | `var chartLink =` |
| 6,760 | `m2Step` | `function m2Step(` |
| 6,763 | `heatStep` | `function heatStep(` |
| 6,767 | `drawTempFit` | `function drawTempFit(` |
| 6,782 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 6,924_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,925 | `drawGrowth` | `function drawGrowth(` |
| 7,038 | `wireResize` | `function wireResize(` |
| 7,044 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 7,056_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,057 | `renderCycleView` | `function renderCycleView(` |
| 7,091 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws

_line 7,099_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,100 | `peerChosen` | `function peerChosen(` |
| 7,101 | `peerReaches` | `function peerReaches(` |
| 7,129 | `shownEraModel` | `var shownEraModel =` |
| 7,130 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 7,132_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,133 | `stripGroupName` | `var stripGroupName =` |
| 7,134 | `seasonStripHtml` | `function seasonStripHtml(` |
| 7,162 | `marketStripHtml` | `function marketStripHtml(` |
| 7,196 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 7,197 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 7,226_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,227 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 7,233 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 7,238 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 7,239 | `debtSvg` | `function debtSvg(` |
| 7,240 | `interestSvg` | `function interestSvg(` |
| 7,242 | `budgetSvg` | `function budgetSvg(` |
| 7,244 | `lede` | `function lede(` |
| 7,245 | `periodOf` | `function periodOf(` |
| 7,246 | `qLast` | `function qLast(` |
| 7,247 | `meterWord` | `function meterWord(` |
| 7,248 | `splitSpecs` | `function splitSpecs(` |
| 7,268 | `splitMid` | `function splitMid(` |
| 7,269 | `splitInfo` | `function splitInfo(` |
| 7,273 | `quarterTicks` | `function quarterTicks(` |
| 7,278 | `drawSplit` | `function drawSplit(` |
| 7,297 | `mountSplit` | `function mountSplit(` |
| 7,313 | `splitPeek` | `function splitPeek(` |
| 7,321 | `indicatorPeeks` | `function indicatorPeeks(` |
| 7,329 | `deficitPeek` | `function deficitPeek(` |
| 7,335 | `catSheet` | `function catSheet(` |
| 7,340 | `groupId` | `function groupId(` |
| 7,341 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 7,342 | `seatGroups` | `function seatGroups(` |
| 7,345 | `groupSheet` | `function groupSheet(` |
| 7,355 | `appendPicks` | `function appendPicks(` |
| 7,363 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 7,381_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,382 | `buffettInsight` | `function buffettInsight(` |
| 7,397 | `debtInsight` | `function debtInsight(` |
| 7,412 | `interestInsight` | `function interestInsight(` |
| 7,427 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 7,458 | `orderMetricSheets` | `function orderMetricSheets(` |
| 7,483 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 7,593_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,594 | `partsOf` | `function partsOf(` |
| 7,603 | `discOf` | `function discOf(` |
| 7,606 | `authored` | `function authored(` |
| 7,607 | `registerRoster` | `function registerRoster(` |
| 7,641 | `indRow` | `function indRow(` |
| 7,645 | `IND_ORDER` | `var IND_ORDER =` |
| 7,646 | `indGroupRow` | `function indGroupRow(` |
| 7,651 | `indRows` | `function indRows(` |
| 7,665 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 7,674_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,675 | `NAV` | `var NAV =` |
| 7,676 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,770_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,771 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,819_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,820 | `fmtDay` | `function fmtDay(` |
| 7,821 | `qPretty` | `function qPretty(` |
| 7,822 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,823 | `peekArt` | `function peekArt(` |
| 7,824 | `indPeriod` | `function indPeriod(` |
| 7,833 | `catItem` | `function catItem(` |
| 7,887 | `insightCirculation` | `function insightCirculation(` |
| 7,920 | `insightWeather` | `function insightWeather(` |
| 7,963 | `CAT_MINI` | `var CAT_MINI =` |
| 7,966 | `placeSignPair` | `function placeSignPair(` |
| 7,998 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 8,014 | `buildCategories` | `function buildCategories(` |
| 8,056 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 8,098_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,099 | `capeFmt1` | `function capeFmt1(` |
| 8,100 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 8,101 | `GDP_STOPS` | `var GDP_STOPS =` |
| 8,102 | `VAL_STOPS` | `var VAL_STOPS =` |
| 8,103 | `DEF_STOPS` | `var DEF_STOPS =` |
| 8,104 | `qShort` | `function qShort(` |
| 8,105 | `yoyPairs` | `function yoyPairs(` |
| 8,115 | `actCycleMonths` | `function actCycleMonths(` |
| 8,123 | `householdsHighlights` | `function householdsHighlights(` |
| 8,142 | `redrawSheet` | `function redrawSheet(` |
| 8,146 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 8,213 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 8,252 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 8,303 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 8,333 | `valuationHighlights` | `function valuationHighlights(` |
| 8,346 | `tempHighlights` | `function tempHighlights(` |
| 8,363 | `gdpHighlights` | `function gdpHighlights(` |
| 8,378 | `renderMetricPages` | `function renderMetricPages(` |
| 8,389 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 8,402_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,403 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 8,404 | `cycleDataOn` | `function cycleDataOn(` |
| 8,405 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 8,425 | `wireCycleData` | `function wireCycleData(` |
| 8,440 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 8,485_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,486 | `eraOpen` | `var eraOpen =` |
| 8,487 | `kT` | `function kT(` |
| 8,491 | `eraReading` | `function eraReading(` |
| 8,503 | `eraFig` | `function eraFig(` |
| 8,510 | `eraValue` | `function eraValue(` |
| 8,516 | `eraRange` | `function eraRange(` |
| 8,521 | `eraMini` | `function eraMini(` |
| 8,526 | `eraCard` | `function eraCard(` |
| 8,545 | `eraShow` | `function eraShow(` |
| 8,555 | `enterEra` | `function enterEra(` |
| 8,562 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,569_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,570 | `rosterGroups` | `function rosterGroups(` |
| 8,598 | `__roster` | `var __roster =` |
| 8,599 | `readingRoster` | `function readingRoster(` |
| 8,620 | `readFig` | `function readFig(` |
| 8,625 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,632_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,633 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,657 | `placeWords` | `function placeWords(` |
| 8,661 | `symptomNote` | `function symptomNote(` |
| 8,668 | `symptomRow` | `function symptomRow(` |
| 8,675 | `cycleTrack` | `function cycleTrack(` |
| 8,690 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,698_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,699 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,748_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,749 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,780_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,781 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 2,223–2,226 | `LIVE_CACHE` | Live data without a render refactor |
| 4,677–4,690 | `horizonRead` | The inner pages' chart (kept for nothing — see above) |
| 5,109–5,122 | `seasonTrackAll` | The season, computed |
| 5,138–5,142 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 8,233 |
| `desire-range` | 5,645 |
| `fear-range` | 6,333 |
| `hormones-range` | 6,221 |
| `hzn-range` | 6,134 |
| `pressure-range` | 2,291 |
| `pulse-range` | 5,612 |
| `sheet-marker-deficit` | 8,230 |
| `sheet-metric-gdp` | 8,173 |
| `sheet-metric-households` | 8,254 |
| `sheet-metric-temp` | 8,147 |
| `sheet-metric-valuation` | 8,275 |
| `sheet-sign-activity` | 8,215 |
| `sheet-sign-desire` | 5,646 |
| `sheet-sign-horizon` | 6,135 |
| `sheet-sign-hormones` | 6,222 |
| `sheet-sign-pressure` | 5,850 |
| `sheet-sign-pulse` | 5,611 |
| `sheet-sign-sentiment` | 6,334 |
| `sheet-sign-volume` | 5,629 |
| `volume-range` | 5,630 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 8,237 |
| `desire-range` | 5,634 |
| `fear-range` | 6,301 |
| `hzn-range` | 6,119 |
| `pressure-range` | 5,819 |
| `pulse-range` | 5,598 |
| `sheet-metric-gdp` | 8,174 |
| `sheet-metric-temp` | 8,148 |
| `sheet-metric-valuation` | 8,276 |
| `volume-range` | 5,616 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,352 |
| `sheet-metric-gdp` | 3,353 |
| `sheet-sign-activity` | 3,354 |
| `sheet-metric-valuation` | 3,355 |
| `sheet-metric-households` | 3,356 |
| `deficit-range` | 3,357 |
| `volume-range` | 3,358 |
| `pulse-range` | 3,359 |
| `hzn-range` | 3,360 |
| `desire-range` | 3,361 |
| `fear-range` | 3,362 |
| `hormones-range` | 3,363 |
| `pressure-range` | 3,364 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 158 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 247 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 285 | season strip |
| 312 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 379 | tab bar (app-style segmented navigation) |
| 414 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 430 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 543 | journal (editorial content tab) |
| 549 | content tab: reading companion |
| 598 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 802 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 817 | the reading, after the blood-panel design Keren sent: title, then the figure, flagged in |
| 821 | the panel bar. Keren, V479: "if there's a normal range, I would want to see it in a consistent |
| 827 | one row, as the panel Keren sent lays a marker out: name and figure on the left, the spectrum |
| 837 | the reading's own container, below the history (Keren, V520). `seatBandReading` moves whatever the page |
| 938 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 1,012 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,218 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,237 | The symptoms: a cycle's years against today |
| 1,314 | hero: yield curve |
| 1,347 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,366 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,391 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,399 | long cycle (structural layer) |
| 1,413 | indicator grid |
| 1,439 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 1,453 | info icon + popover (progressive disclosure for longer notes) |
| 1,467 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,550 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (135), which is what the renderers fill:

| Line | id |
|---|---|
| 1,566 | `topbar-back` |
| 1,569 | `topbar-title` |
| 1,570 | `menu-btn` |
| 1,584 | `main` |
| 1,587 | `cycle-view` |
| 1,590 | `cycle-kicker` |
| 1,593 | `cycle-dial` |
| 1,595 | `season-wheel-hub-date` |
| 1,596 | `season-wheel-hub-theme` |
| 1,597 | `season-wheel-hub-detail` |
| 1,603 | `temp-card` |
| 1,605 | `temp-kicker` |
| 1,606 | `temp-sub` |
| 1,609 | `temp-svg` |
| 1,610 | `temp-tooltip` |
| 1,612 | `temp-stats` |
| 1,615 | `growth-card` |
| 1,616 | `growth-kicker` |
| 1,616 | `growth-phase` |
| 1,616 | `growth-sub` |
| 1,617 | `growth-svg` |
| 1,617 | `growth-tooltip` |
| 1,618 | `growth-stats` |
| 1,623 | `today-analysis` |
| 1,624 | `peek-row` |
| 1,625 | `sheet-metric-temp` |
| 1,626 | `temp-timing` |
| 1,627 | `temp-chart` |
| 1,628 | `temp-rangebar` |
| 1,630 | `temp-head` |
| 1,631 | `slot-temp` |
| 1,632 | `temp-history` |
| 1,633 | `temp-hist-tooltip` |
| 1,634 | `temp-trend` |
| 1,636 | `temp-highlights` |
| 1,638 | `sheet-metric-gdp` |
| 1,639 | `gdp-timing` |
| 1,640 | `gdp-chart` |
| 1,641 | `gdp-rangebar` |
| 1,643 | `gdp-head` |
| 1,644 | `slot-growth` |
| 1,645 | `gdp-history` |
| 1,646 | `gdp-hist-tooltip` |
| 1,647 | `gdp-yoy` |
| 1,648 | `gdp-trend` |
| 1,649 | `gdp-panel` |
| 1,653 | `subj-ring-gdp` |
| 1,655 | `subj-label-gdp` |
| 1,656 | `subj-value-gdp` |
| 1,657 | `subj-say-gdp` |
| 1,658 | `subj-spark-gdp` |
| 1,663 | `subj-ctx-gdp` |
| 1,666 | `gdp-highlights` |
| 1,670 | `sheet-marker-deficit` |
| 1,672 | `sheet-metric-households` |
| 1,673 | `households-timing` |
| 1,674 | `households-chart` |
| 1,675 | `households-highlights` |
| 1,678 | `sheet-metric-valuation` |
| 1,679 | `valuation-timing` |
| 1,680 | `valuation-head` |
| 1,681 | `valuation-chart` |
| 1,684 | `subj-ring-valuation` |
| 1,687 | `subj-value-valuation` |
| 1,688 | `subj-say-valuation` |
| 1,693 | `subj-ctx-valuation` |
| 1,697 | `valuation-title` |
| 1,699 | `valuation-tag` |
| 1,704 | `valuation-highlights` |
| 1,711 | `subj-value-hormones` |
| 1,712 | `subj-say-hormones` |
| 1,718 | `hormones-history` |
| 1,719 | `hormones-insights` |
| 1,728 | `subj-value-horizon` |
| 1,729 | `subj-say-horizon` |
| 1,730 | `subj-spark-horizon` |
| 1,736 | `hzn-timeline` |
| 1,738 | `hzn-head` |
| 1,739 | `spread-history-shell` |
| 1,740 | `spread-history-svg` |
| 1,741 | `spread-history-tooltip` |
| 1,743 | `hzn-trend` |
| 1,745 | `horizon-insights` |
| 1,754 | `subj-value-pressure` |
| 1,755 | `subj-say-pressure` |
| 1,761 | `pressure-timeline` |
| 1,763 | `pressure-head` |
| 1,764 | `ylm-shell` |
| 1,765 | `ylm-svg` |
| 1,766 | `ylm-tooltip` |
| 1,768 | `ylm-trend` |
| 1,770 | `pressure-insights` |
| 1,777 | `subj-ring-sentiment` |
| 1,780 | `subj-value-sentiment` |
| 1,781 | `subj-say-sentiment` |
| 1,782 | `subj-spark-sentiment` |
| 1,788 | `fear-history` |
| 1,789 | `curve-highlights` |
| 1,795 | `signs-list` |
| 1,801 | `calendar-list` |
| 1,808 | `cycle-data` |
| 1,810 | `cycle-legend` |
| 1,811 | `cycle-list` |
| 1,812 | `cycle-more` |
| 1,813 | `cycle-more-label` |
| 1,818 | `calendar-cycle` |
| 1,819 | `calendar-cycle-slot` |
| 1,840 | `search-home` |
| 1,842 | `search-input` |
| 1,844 | `search-list` |
| 1,848 | `more-menu` |
| 1,851 | `menu-back` |
| 1,865 | `sources-open` |
| 1,873 | `appearance-current` |
| 1,879 | `sheet-howto` |
| 1,922 | `sheet-book` |
| 1,953 | `seasons-kicker` |
| 1,955 | `seasons-rows` |
| 1,958 | `framework-kicker` |
| 1,961 | `framework-rows` |
| 1,971 | `sheet-appearance` |
| 1,979 | `theme-toggle` |
| 1,986 | `sheet-contact` |
| 1,995 | `contact-form` |
| 1,996 | `contact-title` |
| 1,997 | `contact-message` |
| 1,999 | `contact-hint` |
| 2,000 | `contact-send` |
| 2,006 | `sheet-sources` |
| 2,009 | `sources-back` |
| 2,014 | `asof-text` |
| 2,015 | `sources-groups` |
| 2,021 | `detail-backdrop` |
| 2,023 | `detail-modal-close` |
| 2,024 | `detail-modal-body` |

## Finding things fast

| To find | grep for |
|---|---|
| a figure's literal value | `var <name> = ` — the data objects are all top-level vars in the DATA section |
| what a history page draws | `HIST_HEAD` for its head, then `sheetRenderers["<id>"]` for its renderer |
| where a band comes from | the constant name, then read its `(i)` text — every band states its provenance |
| a season decision | `readSeason(`, `seasonTrackAll`, `cycleModel(` |
| why something looks the way it does | `docs/DECISIONS.md` for Keren's decisions, `docs/ARCHITECTURE.md` for the reasons, `git log -S` for the history |
| a live-data wiring | `LIVE("` — one line per document, each directly under its literal |
| a CSS rule's only home | the class name; rules under `.detail-modal`, `.metric-sheet`, `.sign-detail` are scoped and must be restated for a new host |

