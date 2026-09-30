# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,690 lines**, about 623 KB, roughly **177 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `0424374` on 2026-09-30.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,488 | the whole stylesheet, every token and rule |
| **Markup** | 1,489–1,955 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,956–8,657 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,658–8,690 | </body></html> |

Counts: **362** top-level functions, **185** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,956_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,958 | `byId` | `function byId(` |
| 1,966 | `byIdMaybe` | `function byIdMaybe(` |
| 1,967 | `put` | `function put(` |
| 1,972 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,974_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,975 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,976 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,977 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,978 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,982 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,987_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,988 | `wheelMeta` | `var wheelMeta =` |
| 1,996 | `seasonOverride` | `var seasonOverride =` |
| 1,997 | `cycleNowNote` | `var cycleNowNote =` |
| 1,999 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 2,077 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 2,118 | `gdpLevels` | `var gdpLevels =` |
| 2,127 | `fedFundsHistory` | `var fedFundsHistory =` |
| 2,128 | `fearCurveHistory` | `var fearCurveHistory =` |
| 2,130 | `fiscalHistory` | `var fiscalHistory =` |
| 2,136 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 2,138 | `treasuryQuarterly` | `var treasuryQuarterly =` |

### Live data without a render refactor

_line 2,148_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,153 | `merge` | `function merge(` |
| 2,160 | `LIVE` | `function LIVE(` |
| 2,174 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,177_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,179 | `paintReading` | `function paintReading(` |
| 2,196 | `repaintFearCurve` | `function repaintFearCurve(` |
| 2,202 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,210 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,215 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,219 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,224_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,225 | `READINGS` | `var READINGS =` |
| 2,281 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,282 | `KINDS` | `var KINDS =` |
| 2,283 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,297 | `receive` | `function receive(` |
| 2,313 | `liveAsOf` | `var liveAsOf =` |
| 2,314 | `fmtAsOf` | `function fmtAsOf(` |
| 2,319 | `applyLive` | `function applyLive(` |
| 2,332 | `shapeOk` | `function shapeOk(` |
| 2,339 | `repaintPolicy` | `function repaintPolicy(` |
| 2,345 | `GYN` | `var GYN =` |
| 2,372 | `refreshLiveData` | `function refreshLiveData(` |
| 2,390 | `fetchSiteData` | `function fetchSiteData(` |
| 2,406 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,411_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,412 | `yieldCurve` | `var yieldCurve =` |
| 2,418 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,419 | `curveAsOf` | `function curveAsOf(` |
| 2,424 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,425 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,430 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,432_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,433 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,434 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,435 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,436 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,437 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,439_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,440 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,446 | `uninvLagToday` | `var uninvLagToday =` |
| 2,451 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,457 | `gdpPeers` | `var gdpPeers =` |
| 2,498 | `gdpSrc` | `var gdpSrc =` |
| 2,499 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,505 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,534_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,536 | `productivityReading` | `var productivityReading =` |

### The deficit, year by year

_line 2,549_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,550 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,551 | `deficitHistory` | `var deficitHistory =` |
| 2,554 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,555 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,557 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,566_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,567 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,577_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,578 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,581 | `timelineSpan` | `function timelineSpan(` |
| 2,586 | `timelineFor` | `function timelineFor(` |
| 2,597 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,603_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,604 | `windowScale` | `function windowScale(` |
| 2,619 | `windowYears` | `function windowYears(` |
| 2,627 | `refName` | `function refName(` |
| 2,631 | `histReadEnsure` | `function histReadEnsure(` |
| 2,651 | `histReadFill` | `function histReadFill(` |
| 2,701 | `histAxisEnds` | `function histAxisEnds(` |
| 2,712 | `histLegend` | `function histLegend(` |
| 2,772 | `refitHistory` | `function refitHistory(` |
| 2,782 | `wireHistHover` | `function wireHistHover(` |
| 2,819 | `mWindowFrom` | `function mWindowFrom(` |
| 2,823 | `qWindowFrom` | `function qWindowFrom(` |
| 2,827 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,828 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,830 | `DEF_1983` | `var DEF_1983 =` |
| 2,831 | `defFrom` | `function defFrom(` |
| 2,836 | `deficitChart` | `function deficitChart(` |
| 2,904 | `deficitBlock` | `function deficitBlock(` |
| 2,944 | `buffettHistory` | `var buffettHistory =` |
| 2,946 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,947 | `hyDates` | `var hyDates =` |
| 2,948 | `hyOas` | `var hyOas =` |
| 2,949 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,956 | `hyAt` | `function hyAt(` |
| 2,960 | `hyLabel` | `function hyLabel(` |
| 2,961 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 2,962 | `hyNum` | `function hyNum(` |
| 2,963 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,971 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,981 | `capeHistory` | `var capeHistory =` |
| 2,983 | `longCycleSrc` | `var longCycleSrc =` |
| 2,999 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 3,013_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,014 | `sentiment` | `var sentiment =` |
| 3,030 | `valuation` | `var valuation =` |
| 3,051 | `valRow` | `function valRow(` |
| 3,056 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 3,059 | `coincident` | `var coincident =` |
| 3,104 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 3,110 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 3,111 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 3,112 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 3,114_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,115 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 3,116 | `m2vHistory` | `var m2vHistory =` |
| 3,132 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,186 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,227_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,228 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,229 | `DOTS` | `var DOTS =` |
| 3,231 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,246 | `headPickRow` | `function headPickRow(` |
| 3,252 | `histHead` | `function histHead(` |
| 3,267 | `headNoteIdx` | `var headNoteIdx =` |
| 3,268 | `headMenuHtml` | `function headMenuHtml(` |
| 3,293 | `headMenuFor` | `var headMenuFor =` |
| 3,294 | `headSubFor` | `var headSubFor =` |
| 3,295 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,326 | `nameWithMark` | `function nameWithMark(` |
| 3,332 | `histNote` | `function histNote(` |
| 3,333 | `meterFlagged` | `function meterFlagged(` |
| 3,340 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,363 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,377 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,390 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,395 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,410 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,424 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,443 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,474 | `desireBlock` | `function desireBlock(` |
| 3,485 | `volumeBlock` | `function volumeBlock(` |
| 3,497 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,509 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,516_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,517 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,518 | `m2Level` | `var m2Level =` |
| 3,539 | `m2Yoy` | `var m2Yoy =` |
| 3,540 | `M2_NORM` | `var M2_NORM =` |
| 3,542 | `volumeVerdict` | `function volumeVerdict(` |
| 3,550 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,551 | `unempHistory` | `var unempHistory =` |
| 3,557 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,566 | `NROU_NOW` | `var NROU_NOW =` |
| 3,567 | `unempState` | `function unempState(` |
| 3,573 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,627_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,628 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,637 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,695 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,696 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,697 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,698_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,700 | `householdsChart` | `function householdsChart(` |
| 3,749 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,804 | `GDP_NORM` | `var GDP_NORM =` |
| 3,805 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 3,806 | `gdpNowQ` | `var gdpNowQ =` |
| 3,807 | `gdpMeter` | `var gdpMeter =` |
| 3,810 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,832 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,885 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,932 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,940 | `velocityVerdict` | `function velocityVerdict(` |
| 3,948 | `derivePulseTag` | `function derivePulseTag(` |
| 3,954 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,984_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,985 | `seasonReading` | `var seasonReading =` |
| 4,029 | `frameworkRows` | `var frameworkRows =` |
| 4,039 | `vixRow` | `var vixRow =` |
| 4,040 | `vixWordOf` | `var vixWordOf =` |
| 4,044 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 4,054_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,055 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 4,064_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,065 | `calendarTodayY` | `var calendarTodayY =` |
| 4,067 | `vix3mClose` | `var vix3mClose =` |
| 4,068 | `fearCurve` | `function fearCurve(` |
| 4,073 | `curveVerdict` | `function curveVerdict(` |
| 4,078 | `valuationVerdict` | `function valuationVerdict(` |
| 4,086 | `sparkHtml` | `function sparkHtml(` |
| 4,105 | `lastN` | `function lastN(` |

### The range bar

_line 4,107_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,108 | `modeBar` | `function modeBar(` |
| 4,115 | `pickerOpen` | `var pickerOpen =` |
| 4,116 | `cycleByName` | `function cycleByName(` |
| 4,120 | `openCycle` | `function openCycle(` |
| 4,124 | `cycleSlice` | `function cycleSlice(` |
| 4,132 | `totalGrowthYears` | `function totalGrowthYears(` |
| 4,140 | `cycleMonths` | `function cycleMonths(` |
| 4,148 | `histControls` | `function histControls(` |
| 4,157 | `cycLabel` | `function cycLabel(` |
| 4,161 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 4,166 | `cyclePicker` | `function cyclePicker(` |
| 4,185 | `rangeBar` | `function rangeBar(` |
| 4,192 | `trendOf` | `function trendOf(` |
| 4,207 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,211 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,222_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,223 | `yearOf` | `function yearOf(` |
| 4,224 | `mean` | `function mean(` |

### The record rows

_line 4,225_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,226 | `headSigma` | `function headSigma(` |
| 4,231 | `atQuarter` | `function atQuarter(` |
| 4,232 | `atMonth` | `function atMonth(` |
| 4,233 | `cycleAverages` | `function cycleAverages(` |
| 4,240 | `ordinal` | `function ordinal(` |
| 4,241 | `hiCard` | `function hiCard(` |
| 4,244 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component

_line 4,258_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,259 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 4,265 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,272 | `moreRow` | `function moreRow(` |
| 4,278 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,279 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,285_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,286 | `xLabelOf` | `function xLabelOf(` |
| 4,296 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,314_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,315 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,323 | `vGrid` | `function vGrid(` |
| 4,327 | `COL_FILL` | `var COL_FILL =` |
| 4,328 | `colPath` | `function colPath(` |
| 4,333 | `colWidth` | `function colWidth(` |
| 4,338 | `AXIS` | `var AXIS =` |
| 4,339 | `histFrame` | `function histFrame(` |
| 4,346 | `xLabel` | `function xLabel(` |
| 4,349 | `crossLine` | `function crossLine(` |
| 4,352 | `zeroRule` | `function zeroRule(` |
| 4,355 | `meanRule` | `function meanRule(` |
| 4,356 | `pendingGeom` | `var pendingGeom =` |
| 4,357 | `publishGeom` | `function publishGeom(` |
| 4,358 | `attachHistory` | `function attachHistory(` |
| 4,367 | `histBar` | `function histBar(` |
| 4,370 | `histTip` | `function histTip(` |
| 4,371 | `avgRule` | `function avgRule(` |
| 4,374 | `vhOpen` | `function vhOpen(` |
| 4,375 | `chartAxes` | `function chartAxes(` |
| 4,405 | `divergeChart` | `function divergeChart(` |
| 4,439 | `pairChart` | `function pairChart(` |

### The inner pages' chart (kept for nothing — see above)

_line 4,467_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,469 | `maxIn` | `function maxIn(` |
| 4,474 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,475 | `PEEK_W` | `var PEEK_W =` |
| 4,476 | `PEEK_H` | `var PEEK_H =` |
| 4,477 | `colPeek` | `function colPeek(` |
| 4,495 | `meterPeek` | `function meterPeek(` |
| 4,512 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,517 | `pressureZone` | `function pressureZone(` |
| 4,523 | `HZN_BACK` | `var HZN_BACK =` |
| 4,524 | `hznLast` | `function hznLast(` |
| 4,525 | `hznBack` | `function hznBack(` |
| 4,526 | `horizonWord` | `function horizonWord(` |
| 4,546 | `HZN_METERS` | `var HZN_METERS =` |
| 4,554 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,575 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,580 | `RISK_RISK` | `var RISK_RISK =` |
| 4,585 | `riskCell` | `function riskCell(` |
| 4,586 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,616 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,641_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,642 | `pulseClipN` | `var pulseClipN =` |
| 4,643 | `beatPath` | `function beatPath(` |
| 4,660 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,674 | `pulsePeek` | `function pulsePeek(` |
| 4,677 | `pulseBlock` | `function pulseBlock(` |
| 4,694 | `CHEV` | `var CHEV =` |
| 4,695 | `peekCard` | `function peekCard(` |
| 4,714 | `dropSvg` | `function dropSvg(` |
| 4,716 | `volumeSvg` | `function volumeSvg(` |
| 4,720 | `gaugeSvg` | `function gaugeSvg(` |
| 4,724 | `diamondSvg` | `function diamondSvg(` |
| 4,728 | `sproutSvg` | `function sproutSvg(` |
| 4,736 | `markSvg` | `function markSvg(` |
| 4,739 | `hormoneSvg` | `function hormoneSvg(` |
| 4,744 | `flameSvg` | `function flameSvg(` |
| 4,747 | `clockSvg` | `function clockSvg(` |
| 4,748 | `gearSvg` | `function gearSvg(` |
| 4,756 | `thermoSvg` | `function thermoSvg(` |
| 4,759 | `trendUpSvg` | `function trendUpSvg(` |
| 4,761 | `ecgSvg` | `function ecgSvg(` |
| 4,763 | `circulationSvg` | `function circulationSvg(` |
| 4,764 | `weatherSvg` | `function weatherSvg(` |
| 4,772 | `moodSvg` | `function moodSvg(` |
| 4,776 | `boltSvg` | `function boltSvg(` |
| 4,777 | `houseSvg` | `function houseSvg(` |
| 4,780 | `sunriseSvg` | `function sunriseSvg(` |
| 4,784 | `umbrellaSvg` | `function umbrellaSvg(` |
| 4,788 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 4,794_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,795 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,796 | `dsrHistory` | `var dsrHistory =` |
| 4,797 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,798 | `savHistory` | `var savHistory =` |
| 4,801 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,810 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,811 | `dsrNow` | `var dsrNow =` |
| 4,812 | `savNow` | `var savNow =` |
| 4,813 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,814 | `householdsWord` | `function householdsWord(` |
| 4,821 | `householdsNow` | `var householdsNow =` |
| 4,822 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 4,823 | `dsrMeter` | `var dsrMeter =` |
| 4,826 | `savMeter` | `var savMeter =` |
| 4,829 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,846 | `savInfoHtml` | `function savInfoHtml(` |
| 4,864 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,871 | `curveNow` | `var curveNow =` |
| 4,872 | `curveTag` | `var curveTag =` |
| 4,873 | `curveSub` | `var curveSub =` |
| 4,874 | `curvePct` | `function curvePct(` |
| 4,875 | `curveNoteFull` | `var curveNoteFull =` |
| 4,890 | `curveDetailHtml` | `function curveDetailHtml(` |
| 4,894 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,900 | `marketCycles` | `var marketCycles =` |
| 4,928 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,930_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,931 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,932 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 4,937_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,938 | `slopeOf` | `function slopeOf(` |
| 4,943 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,944 | `readSeason` | `function readSeason(` |
| 4,963 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,964 | `qLabel` | `function qLabel(` |
| 4,979 | `regimeTrack` | `function regimeTrack(` |
| 4,999 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 5,001_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,002 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 5,003 | `seasonTitle` | `function seasonTitle(` |
| 5,004 | `monthLabel` | `function monthLabel(` |
| 5,005 | `cycleModel` | `function cycleModel(` |
| 5,042 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,050 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,056 | `nowModel` | `var nowModel =` |
| 5,057 | `readingNow` | `var readingNow =` |
| 5,058 | `cpiNow` | `var cpiNow =` |
| 5,059 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,060 | `currentSeason` | `var currentSeason =` |
| 5,061 | `seasonWhy` | `var seasonWhy =` |
| 5,063 | `seasonGroup` | `function seasonGroup(` |
| 5,065 | `arcGauge` | `function arcGauge(` |
| 5,099 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,110 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,111 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,112 | `spreadLabel` | `function spreadLabel(` |
| 5,116 | `policyFacts` | `function policyFacts(` |
| 5,123 | `policyFactRows` | `function policyFactRows(` |
| 5,129 | `allSources` | `var allSources =` |
| 5,143 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,155_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,156 | `SVG_NS` | `var SVG_NS =` |
| 5,157 | `svgEl` | `function svgEl(` |
| 5,162 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,196_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,197 | `clampPct` | `function clampPct(` |
| 5,199 | `infoIcon` | `function infoIcon(` |
| 5,204 | `detailTexts` | `var detailTexts =` |
| 5,205 | `detailSlots` | `var detailSlots =` |
| 5,206 | `detailSlot` | `function detailSlot(` |
| 5,216 | `facts` | `function facts(` |
| 5,217 | `factsFrom` | `function factsFrom(` |
| 5,221 | `expandBtn` | `function expandBtn(` |
| 5,225 | `sheetRenderers` | `var sheetRenderers =` |
| 5,226 | `pageMode` | `var pageMode =` |
| 5,231 | `pageCycles` | `var pageCycles =` |
| 5,236 | `pageRange` | `var pageRange =` |
| 5,242 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,271_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,274 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,275_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,276 | `subjectRow` | `function subjectRow(` |
| 5,286 | `subjectIcon` | `function subjectIcon(` |
| 5,287 | `srcHtml` | `function srcHtml(` |
| 5,288 | `TIMING` | `var TIMING =` |
| 5,294 | `timingMark` | `function timingMark(` |
| 5,302 | `timingPill` | `function timingPill(` |
| 5,311 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,319 | `seatPageFoot` | `function seatPageFoot(` |
| 5,331 | `timingMembers` | `var timingMembers =` |
| 5,332 | `registerTiming` | `function registerTiming(` |
| 5,334 | `headHtml` | `function headHtml(` |
| 5,342 | `heldHighlights` | `var heldHighlights =` |
| 5,343 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,370_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,371 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,372 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,380 | `withLatestPoint` | `function withLatestPoint(` |
| 5,385 | `pressureMaturities` | `function pressureMaturities(` |
| 5,409 | `registerFlowPages` | `function registerFlowPages(` |
| 5,468 | `renderPressureRow` | `function renderPressureRow(` |
| 5,476 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,495 | `ylmColumns` | `function ylmColumns(` |
| 5,515 | `ylmFitLine` | `function ylmFitLine(` |
| 5,527 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,673_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,674 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,711_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,712 | `spreadSeries` | `function spreadSeries(` |
| 5,756 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,881_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,882 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,908_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,909 | `drawHznHead` | `function drawHznHead(` |
| 5,924 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,986_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,987 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,998_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,999 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 6,098_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,099 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,172_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,173 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,233_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,234 | `totalRiseIn` | `function totalRiseIn(` |
| 6,244 | `eraInflation` | `function eraInflation(` |
| 6,255 | `eraGrowth` | `function eraGrowth(` |
| 6,271 | `fmtSigned` | `function fmtSigned(` |
| 6,272 | `regimeArrow` | `function regimeArrow(` |
| 6,273 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,274 | `growthShown` | `function growthShown(` |
| 6,275 | `growthShownCap` | `function growthShownCap(` |
| 6,276 | `regimeState` | `function regimeState(` |
| 6,277 | `phaseClass` | `function phaseClass(` |
| 6,278 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,283 | `cycleViewEl` | `var cycleViewEl =` |
| 6,284 | `tempCard` | `var tempCard =` |
| 6,285 | `placeCharts` | `function placeCharts(` |
| 6,290 | `shownEra` | `var shownEra =` |
| 6,291 | `calendarReset` | `var calendarReset =` |
| 6,292 | `metricPageReset` | `var metricPageReset =` |
| 6,293 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,294 | `topbarBack` | `var topbarBack =` |
| 6,295 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,302_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,303 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,384_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,385 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,403_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,404 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,425_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,427 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,428 | `hubSet` | `function hubSet(` |
| 6,439 | `quarterPopup` | `function quarterPopup(` |
| 6,462 | `hubShowDefault` | `function hubShowDefault(` |
| 6,470 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,476 | `hubShowYear` | `function hubShowYear(` |
| 6,486 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: the cycle's months, against the 2% target

_line 6,567_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,568 | `tempState` | `var tempState =` |
| 6,569 | `chartLink` | `var chartLink =` |
| 6,570 | `m2Step` | `function m2Step(` |
| 6,573 | `heatStep` | `function heatStep(` |
| 6,577 | `drawTempFit` | `function drawTempFit(` |
| 6,592 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 6,734_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,735 | `drawGrowth` | `function drawGrowth(` |
| 6,848 | `wireResize` | `function wireResize(` |
| 6,854 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,866_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,867 | `renderCycleView` | `function renderCycleView(` |
| 6,901 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws

_line 6,909_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,910 | `peerChosen` | `function peerChosen(` |
| 6,911 | `peerReaches` | `function peerReaches(` |
| 6,939 | `shownEraModel` | `var shownEraModel =` |
| 6,940 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,942_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,943 | `stripGroupName` | `var stripGroupName =` |
| 6,944 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,972 | `marketStripHtml` | `function marketStripHtml(` |
| 7,006 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 7,007 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 7,036_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,037 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 7,043 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 7,049 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 7,050 | `debtSvg` | `function debtSvg(` |
| 7,051 | `interestSvg` | `function interestSvg(` |
| 7,053 | `budgetSvg` | `function budgetSvg(` |
| 7,055 | `lede` | `function lede(` |
| 7,056 | `periodOf` | `function periodOf(` |
| 7,057 | `qLast` | `function qLast(` |
| 7,058 | `meterWord` | `function meterWord(` |
| 7,059 | `splitSpecs` | `function splitSpecs(` |
| 7,079 | `productivitySpec` | `function productivitySpec(` |
| 7,088 | `splitMid` | `function splitMid(` |
| 7,089 | `splitInfo` | `function splitInfo(` |
| 7,093 | `quarterTicks` | `function quarterTicks(` |
| 7,098 | `drawSplit` | `function drawSplit(` |
| 7,115 | `mountSplit` | `function mountSplit(` |
| 7,131 | `splitPeek` | `function splitPeek(` |
| 7,139 | `indicatorPeeks` | `function indicatorPeeks(` |
| 7,147 | `deficitPeek` | `function deficitPeek(` |
| 7,153 | `catSheet` | `function catSheet(` |
| 7,158 | `groupId` | `function groupId(` |
| 7,159 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 7,160 | `seatGroups` | `function seatGroups(` |
| 7,163 | `groupSheet` | `function groupSheet(` |
| 7,173 | `appendPicks` | `function appendPicks(` |
| 7,181 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 7,199_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,200 | `buffettInsight` | `function buffettInsight(` |
| 7,215 | `debtInsight` | `function debtInsight(` |
| 7,230 | `productivityInsight` | `function productivityInsight(` |
| 7,240 | `interestInsight` | `function interestInsight(` |
| 7,255 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 7,286 | `orderMetricSheets` | `function orderMetricSheets(` |
| 7,311 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 7,386_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,387 | `partsOf` | `function partsOf(` |
| 7,396 | `discOf` | `function discOf(` |
| 7,399 | `authored` | `function authored(` |
| 7,400 | `registerRoster` | `function registerRoster(` |
| 7,434 | `indRow` | `function indRow(` |
| 7,438 | `IND_ORDER` | `var IND_ORDER =` |
| 7,439 | `indGroupRow` | `function indGroupRow(` |
| 7,444 | `indRows` | `function indRows(` |
| 7,458 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 7,467_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,468 | `NAV` | `var NAV =` |
| 7,469 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,563_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,564 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,612_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,613 | `fmtDay` | `function fmtDay(` |
| 7,614 | `qPretty` | `function qPretty(` |
| 7,615 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,616 | `peekArt` | `function peekArt(` |
| 7,617 | `indPeriod` | `function indPeriod(` |
| 7,626 | `catItem` | `function catItem(` |
| 7,676 | `insightCirculation` | `function insightCirculation(` |
| 7,709 | `insightWeather` | `function insightWeather(` |
| 7,752 | `CAT_MINI` | `var CAT_MINI =` |
| 7,755 | `placeSignPair` | `function placeSignPair(` |
| 7,787 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,803 | `buildCategories` | `function buildCategories(` |
| 7,845 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,887_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,888 | `capeFmt1` | `function capeFmt1(` |
| 7,889 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 7,890 | `GDP_STOPS` | `var GDP_STOPS =` |
| 7,891 | `VAL_STOPS` | `var VAL_STOPS =` |
| 7,892 | `DEF_STOPS` | `var DEF_STOPS =` |
| 7,893 | `qShort` | `function qShort(` |
| 7,894 | `yoyPairs` | `function yoyPairs(` |
| 7,904 | `actCycleMonths` | `function actCycleMonths(` |
| 7,912 | `householdsHighlights` | `function householdsHighlights(` |
| 7,931 | `redrawSheet` | `function redrawSheet(` |
| 7,935 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 8,001 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 8,040 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 8,090 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 8,120 | `valuationHighlights` | `function valuationHighlights(` |
| 8,133 | `tempHighlights` | `function tempHighlights(` |
| 8,150 | `gdpHighlights` | `function gdpHighlights(` |
| 8,165 | `renderMetricPages` | `function renderMetricPages(` |
| 8,176 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 8,189_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,190 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 8,191 | `cycleDataOn` | `function cycleDataOn(` |
| 8,192 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 8,212 | `wireCycleData` | `function wireCycleData(` |
| 8,227 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 8,272_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,273 | `eraOpen` | `var eraOpen =` |
| 8,274 | `kT` | `function kT(` |
| 8,278 | `eraReading` | `function eraReading(` |
| 8,290 | `eraFig` | `function eraFig(` |
| 8,297 | `eraValue` | `function eraValue(` |
| 8,303 | `eraRange` | `function eraRange(` |
| 8,308 | `eraMini` | `function eraMini(` |
| 8,313 | `eraCard` | `function eraCard(` |
| 8,332 | `eraShow` | `function eraShow(` |
| 8,342 | `enterEra` | `function enterEra(` |
| 8,349 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,356_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,357 | `rosterGroups` | `function rosterGroups(` |
| 8,385 | `__roster` | `var __roster =` |
| 8,386 | `readingRoster` | `function readingRoster(` |
| 8,407 | `readFig` | `function readFig(` |
| 8,412 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,419_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,420 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,444 | `placeWords` | `function placeWords(` |
| 8,448 | `symptomNote` | `function symptomNote(` |
| 8,455 | `symptomRow` | `function symptomRow(` |
| 8,462 | `cycleTrack` | `function cycleTrack(` |
| 8,477 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,485_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,486 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,535_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,536 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,567_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,568 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 2,149–2,152 | `LIVE_CACHE` | Live data without a render refactor |
| 4,532–4,545 | `horizonRead` | The inner pages' chart (kept for nothing — see above) |
| 4,965–4,978 | `seasonTrackAll` | The season, computed |
| 4,994–4,998 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 8,021 |
| `desire-range` | 5,460 |
| `fear-range` | 6,143 |
| `hormones-range` | 6,031 |
| `hzn-range` | 5,949 |
| `pressure-range` | 2,217 |
| `pulse-range` | 5,427 |
| `sheet-marker-deficit` | 8,018 |
| `sheet-metric-gdp` | 7,962 |
| `sheet-metric-households` | 8,042 |
| `sheet-metric-temp` | 7,936 |
| `sheet-metric-valuation` | 8,063 |
| `sheet-sign-activity` | 8,003 |
| `sheet-sign-desire` | 5,461 |
| `sheet-sign-horizon` | 5,950 |
| `sheet-sign-hormones` | 6,032 |
| `sheet-sign-pressure` | 5,665 |
| `sheet-sign-pulse` | 5,426 |
| `sheet-sign-sentiment` | 6,144 |
| `sheet-sign-volume` | 5,444 |
| `volume-range` | 5,445 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 8,025 |
| `desire-range` | 5,449 |
| `fear-range` | 6,111 |
| `hzn-range` | 5,934 |
| `pressure-range` | 5,634 |
| `pulse-range` | 5,413 |
| `sheet-metric-gdp` | 7,963 |
| `sheet-metric-temp` | 7,937 |
| `sheet-metric-valuation` | 8,064 |
| `volume-range` | 5,431 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,232 |
| `sheet-metric-gdp` | 3,233 |
| `sheet-sign-activity` | 3,234 |
| `sheet-metric-valuation` | 3,235 |
| `sheet-metric-households` | 3,236 |
| `deficit-range` | 3,237 |
| `volume-range` | 3,238 |
| `pulse-range` | 3,239 |
| `hzn-range` | 3,240 |
| `desire-range` | 3,241 |
| `fear-range` | 3,242 |
| `hormones-range` | 3,243 |
| `pressure-range` | 3,244 |

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
| 877 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 951 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,159 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,178 | The symptoms: a cycle's years against today |
| 1,255 | hero: yield curve |
| 1,288 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,307 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,332 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,340 | long cycle (structural layer) |
| 1,354 | indicator grid |
| 1,380 | info icon + popover (progressive disclosure for longer notes) |
| 1,394 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,477 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (134), which is what the renderers fill:

| Line | id |
|---|---|
| 1,493 | `topbar-back` |
| 1,496 | `topbar-title` |
| 1,497 | `menu-btn` |
| 1,511 | `main` |
| 1,514 | `cycle-view` |
| 1,517 | `cycle-kicker` |
| 1,520 | `cycle-dial` |
| 1,522 | `season-wheel-hub-date` |
| 1,523 | `season-wheel-hub-theme` |
| 1,524 | `season-wheel-hub-detail` |
| 1,530 | `temp-card` |
| 1,532 | `temp-kicker` |
| 1,533 | `temp-sub` |
| 1,536 | `temp-svg` |
| 1,537 | `temp-tooltip` |
| 1,539 | `temp-stats` |
| 1,542 | `growth-card` |
| 1,543 | `growth-kicker` |
| 1,543 | `growth-phase` |
| 1,543 | `growth-sub` |
| 1,544 | `growth-svg` |
| 1,544 | `growth-tooltip` |
| 1,545 | `growth-stats` |
| 1,550 | `today-analysis` |
| 1,551 | `peek-row` |
| 1,552 | `sheet-metric-temp` |
| 1,553 | `temp-timing` |
| 1,554 | `temp-chart` |
| 1,555 | `temp-rangebar` |
| 1,557 | `temp-head` |
| 1,558 | `slot-temp` |
| 1,559 | `temp-history` |
| 1,560 | `temp-hist-tooltip` |
| 1,561 | `temp-trend` |
| 1,563 | `temp-highlights` |
| 1,565 | `sheet-metric-gdp` |
| 1,566 | `gdp-timing` |
| 1,567 | `gdp-chart` |
| 1,568 | `gdp-rangebar` |
| 1,570 | `gdp-head` |
| 1,571 | `slot-growth` |
| 1,572 | `gdp-history` |
| 1,573 | `gdp-hist-tooltip` |
| 1,574 | `gdp-yoy` |
| 1,575 | `gdp-trend` |
| 1,579 | `subj-ring-gdp` |
| 1,581 | `subj-label-gdp` |
| 1,582 | `subj-value-gdp` |
| 1,583 | `subj-say-gdp` |
| 1,584 | `subj-spark-gdp` |
| 1,589 | `subj-ctx-gdp` |
| 1,592 | `gdp-highlights` |
| 1,596 | `sheet-marker-deficit` |
| 1,598 | `sheet-metric-households` |
| 1,599 | `households-timing` |
| 1,600 | `households-chart` |
| 1,601 | `households-highlights` |
| 1,604 | `sheet-metric-valuation` |
| 1,605 | `valuation-timing` |
| 1,606 | `valuation-head` |
| 1,607 | `valuation-chart` |
| 1,610 | `subj-ring-valuation` |
| 1,613 | `subj-value-valuation` |
| 1,614 | `subj-say-valuation` |
| 1,619 | `subj-ctx-valuation` |
| 1,623 | `valuation-title` |
| 1,625 | `valuation-tag` |
| 1,630 | `valuation-highlights` |
| 1,637 | `subj-value-hormones` |
| 1,638 | `subj-say-hormones` |
| 1,644 | `hormones-history` |
| 1,645 | `hormones-insights` |
| 1,654 | `subj-value-horizon` |
| 1,655 | `subj-say-horizon` |
| 1,656 | `subj-spark-horizon` |
| 1,662 | `hzn-timeline` |
| 1,664 | `hzn-head` |
| 1,665 | `spread-history-shell` |
| 1,666 | `spread-history-svg` |
| 1,667 | `spread-history-tooltip` |
| 1,669 | `hzn-trend` |
| 1,671 | `horizon-insights` |
| 1,680 | `subj-value-pressure` |
| 1,681 | `subj-say-pressure` |
| 1,687 | `pressure-timeline` |
| 1,689 | `pressure-head` |
| 1,690 | `ylm-shell` |
| 1,691 | `ylm-svg` |
| 1,692 | `ylm-tooltip` |
| 1,694 | `ylm-trend` |
| 1,696 | `pressure-insights` |
| 1,703 | `subj-ring-sentiment` |
| 1,706 | `subj-value-sentiment` |
| 1,707 | `subj-say-sentiment` |
| 1,708 | `subj-spark-sentiment` |
| 1,714 | `fear-history` |
| 1,715 | `curve-highlights` |
| 1,721 | `signs-list` |
| 1,727 | `calendar-list` |
| 1,734 | `cycle-data` |
| 1,736 | `cycle-legend` |
| 1,737 | `cycle-list` |
| 1,738 | `cycle-more` |
| 1,739 | `cycle-more-label` |
| 1,744 | `calendar-cycle` |
| 1,745 | `calendar-cycle-slot` |
| 1,766 | `search-home` |
| 1,768 | `search-input` |
| 1,770 | `search-list` |
| 1,774 | `more-menu` |
| 1,777 | `menu-back` |
| 1,791 | `sources-open` |
| 1,799 | `appearance-current` |
| 1,805 | `sheet-howto` |
| 1,848 | `sheet-book` |
| 1,879 | `seasons-kicker` |
| 1,881 | `seasons-rows` |
| 1,884 | `framework-kicker` |
| 1,887 | `framework-rows` |
| 1,897 | `sheet-appearance` |
| 1,905 | `theme-toggle` |
| 1,912 | `sheet-contact` |
| 1,921 | `contact-form` |
| 1,922 | `contact-title` |
| 1,923 | `contact-message` |
| 1,925 | `contact-hint` |
| 1,926 | `contact-send` |
| 1,932 | `sheet-sources` |
| 1,935 | `sources-back` |
| 1,940 | `asof-text` |
| 1,941 | `sources-groups` |
| 1,947 | `detail-backdrop` |
| 1,949 | `detail-modal-close` |
| 1,950 | `detail-modal-body` |

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

