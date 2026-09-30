# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,840 lines**, about 631 KB, roughly **179 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `aa01b98` on 2026-09-30.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,562 | the whole stylesheet, every token and rule |
| **Markup** | 1,563–2,060 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 2,061–8,807 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,808–8,840 | </body></html> |

Counts: **335** top-level functions, **191** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 2,061_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,063 | `byId` | `function byId(` |
| 2,071 | `byIdMaybe` | `function byIdMaybe(` |
| 2,072 | `put` | `function put(` |
| 2,077 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 2,079_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,080 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 2,081 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 2,082 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 2,083 | `hubTodayHtml` | `function hubTodayHtml(` |
| 2,087 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 2,092_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,093 | `wheelMeta` | `var wheelMeta =` |
| 2,101 | `seasonOverride` | `var seasonOverride =` |
| 2,102 | `cycleNowNote` | `var cycleNowNote =` |
| 2,104 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 2,182 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 2,223 | `gdpLevels` | `var gdpLevels =` |
| 2,232 | `fedFundsHistory` | `var fedFundsHistory =` |
| 2,233 | `fearCurveHistory` | `var fearCurveHistory =` |
| 2,235 | `fiscalHistory` | `var fiscalHistory =` |
| 2,241 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 2,243 | `treasuryQuarterly` | `var treasuryQuarterly =` |

### Live data without a render refactor

_line 2,253_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,258 | `merge` | `function merge(` |
| 2,265 | `LIVE` | `function LIVE(` |
| 2,279 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,282_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,284 | `paintReading` | `function paintReading(` |
| 2,301 | `repaintFearCurve` | `function repaintFearCurve(` |
| 2,307 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,315 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,320 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,324 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,329_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,330 | `READINGS` | `var READINGS =` |
| 2,386 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,387 | `KINDS` | `var KINDS =` |
| 2,388 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,402 | `receive` | `function receive(` |
| 2,418 | `liveAsOf` | `var liveAsOf =` |
| 2,419 | `fmtAsOf` | `function fmtAsOf(` |
| 2,424 | `applyLive` | `function applyLive(` |
| 2,437 | `shapeOk` | `function shapeOk(` |
| 2,444 | `repaintPolicy` | `function repaintPolicy(` |
| 2,450 | `GYN` | `var GYN =` |
| 2,477 | `refreshLiveData` | `function refreshLiveData(` |
| 2,495 | `fetchSiteData` | `function fetchSiteData(` |
| 2,511 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,516_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,517 | `yieldCurve` | `var yieldCurve =` |
| 2,523 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,524 | `curveAsOf` | `function curveAsOf(` |
| 2,529 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,530 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,535 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,537_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,538 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,539 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,540 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,541 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,542 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,544_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,545 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,551 | `uninvLagToday` | `var uninvLagToday =` |
| 2,556 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,562 | `gdpPeers` | `var gdpPeers =` |
| 2,603 | `gdpSrc` | `var gdpSrc =` |
| 2,604 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,609 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 2,611 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,638_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,640 | `productivityReading` | `var productivityReading =` |

### Institutional trust is not in this panel

_line 2,649_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,651 | `stressScoreFor` | `function stressScoreFor(` |
| 2,657 | `stressScore` | `var stressScore =` |
| 2,658 | `powerOf` | `var powerOf =` |
| 2,659 | `powerScore` | `var powerScore =` |
| 2,661 | `stressHistory` | `var stressHistory =` |
| 2,667 | `powerMeter` | `var powerMeter =` |
| 2,669 | `stressNoteFull` | `var stressNoteFull =` |
| 2,671 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year

_line 2,673_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,674 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,675 | `deficitHistory` | `var deficitHistory =` |
| 2,678 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,679 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,681 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,690_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,691 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,701_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,702 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,705 | `timelineSpan` | `function timelineSpan(` |
| 2,710 | `timelineFor` | `function timelineFor(` |
| 2,721 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,727_ · 32 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,728 | `windowScale` | `function windowScale(` |
| 2,743 | `windowYears` | `function windowYears(` |
| 2,751 | `refName` | `function refName(` |
| 2,755 | `histReadEnsure` | `function histReadEnsure(` |
| 2,776 | `seatBandReading` | `function seatBandReading(` |
| 2,792 | `histReadFill` | `function histReadFill(` |
| 2,842 | `histAxisEnds` | `function histAxisEnds(` |
| 2,853 | `histLegend` | `function histLegend(` |
| 2,913 | `refitHistory` | `function refitHistory(` |
| 2,923 | `wireHistHover` | `function wireHistHover(` |
| 2,960 | `mWindowFrom` | `function mWindowFrom(` |
| 2,964 | `qWindowFrom` | `function qWindowFrom(` |
| 2,968 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,969 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,971 | `DEF_1983` | `var DEF_1983 =` |
| 2,972 | `defFrom` | `function defFrom(` |
| 2,977 | `deficitChart` | `function deficitChart(` |
| 3,045 | `deficitBlock` | `function deficitBlock(` |
| 3,085 | `buffettHistory` | `var buffettHistory =` |
| 3,087 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 3,088 | `hyDates` | `var hyDates =` |
| 3,089 | `hyOas` | `var hyOas =` |
| 3,090 | `checkDesireWindow` | `function checkDesireWindow(` |
| 3,097 | `hyAt` | `function hyAt(` |
| 3,101 | `hyLabel` | `function hyLabel(` |
| 3,102 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 3,103 | `hyNum` | `function hyNum(` |
| 3,104 | `hyWindowFrom` | `function hyWindowFrom(` |
| 3,112 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 3,122 | `capeHistory` | `var capeHistory =` |
| 3,124 | `longCycleSrc` | `var longCycleSrc =` |
| 3,140 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 3,159_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,160 | `sentiment` | `var sentiment =` |
| 3,176 | `valuation` | `var valuation =` |
| 3,197 | `valRow` | `function valRow(` |
| 3,202 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 3,205 | `coincident` | `var coincident =` |
| 3,250 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 3,256 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 3,257 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 3,258 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 3,260_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,261 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 3,262 | `m2vHistory` | `var m2vHistory =` |
| 3,278 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,332 | `desireHistoryChart` | `function desireHistoryChart(` |
| 3,372 | `PBAR_GAP` | `var PBAR_GAP =` |
| 3,373 | `panelBar` | `function panelBar(` |

### the history card's head

_line 3,404_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,405 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,406 | `DOTS` | `var DOTS =` |
| 3,408 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,425 | `headPickRow` | `function headPickRow(` |
| 3,431 | `histHead` | `function histHead(` |
| 3,446 | `headNoteIdx` | `var headNoteIdx =` |
| 3,447 | `headMenuHtml` | `function headMenuHtml(` |
| 3,472 | `headMenuFor` | `var headMenuFor =` |
| 3,473 | `headSubFor` | `var headSubFor =` |
| 3,474 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,505 | `nameWithMark` | `function nameWithMark(` |
| 3,511 | `panelRow` | `function panelRow(` |
| 3,524 | `panelFromMeter` | `function panelFromMeter(` |
| 3,532 | `meterFlagged` | `function meterFlagged(` |
| 3,539 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,562 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,576 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,589 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,608 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,622 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,641 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,672 | `desireBlock` | `function desireBlock(` |
| 3,684 | `volumeBlock` | `function volumeBlock(` |
| 3,697 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,713 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,720_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,721 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,722 | `m2Level` | `var m2Level =` |
| 3,743 | `m2Yoy` | `var m2Yoy =` |
| 3,744 | `M2_NORM` | `var M2_NORM =` |
| 3,746 | `volumeVerdict` | `function volumeVerdict(` |
| 3,754 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,755 | `unempHistory` | `var unempHistory =` |
| 3,761 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,770 | `NROU_NOW` | `var NROU_NOW =` |
| 3,771 | `unempState` | `function unempState(` |
| 3,777 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,831_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,832 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,841 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,899 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,900 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,901 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,902_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,904 | `householdsChart` | `function householdsChart(` |
| 3,953 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 4,008 | `GDP_NORM` | `var GDP_NORM =` |
| 4,009 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 4,010 | `gdpNowQ` | `var gdpNowQ =` |
| 4,011 | `gdpMeter` | `var gdpMeter =` |
| 4,014 | `growthInfoHtml` | `function growthInfoHtml(` |
| 4,036 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 4,089 | `m2GrowthChart` | `function m2GrowthChart(` |
| 4,136 | `checkMoneyStock` | `function checkMoneyStock(` |
| 4,144 | `velocityVerdict` | `function velocityVerdict(` |
| 4,152 | `derivePulseTag` | `function derivePulseTag(` |
| 4,158 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 4,188_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,189 | `seasonReading` | `var seasonReading =` |
| 4,233 | `frameworkRows` | `var frameworkRows =` |
| 4,243 | `vixRow` | `var vixRow =` |
| 4,244 | `vixWordOf` | `var vixWordOf =` |
| 4,248 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 4,258_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,259 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 4,268_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,269 | `calendarTodayY` | `var calendarTodayY =` |
| 4,271 | `vix3mClose` | `var vix3mClose =` |
| 4,272 | `fearCurve` | `function fearCurve(` |
| 4,277 | `curveVerdict` | `function curveVerdict(` |
| 4,282 | `valuationVerdict` | `function valuationVerdict(` |
| 4,290 | `sparkHtml` | `function sparkHtml(` |
| 4,309 | `lastN` | `function lastN(` |

### The range bar

_line 4,311_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,312 | `modeBar` | `function modeBar(` |
| 4,319 | `pickerOpen` | `var pickerOpen =` |
| 4,320 | `cycleByName` | `function cycleByName(` |
| 4,324 | `openCycle` | `function openCycle(` |
| 4,328 | `cycleSlice` | `function cycleSlice(` |
| 4,336 | `totalGrowthYears` | `function totalGrowthYears(` |
| 4,344 | `cycleMonths` | `function cycleMonths(` |
| 4,352 | `histControls` | `function histControls(` |
| 4,361 | `cycLabel` | `function cycLabel(` |
| 4,365 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 4,370 | `cyclePicker` | `function cyclePicker(` |
| 4,389 | `rangeBar` | `function rangeBar(` |
| 4,396 | `trendOf` | `function trendOf(` |
| 4,411 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,415 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,426_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,427 | `yearOf` | `function yearOf(` |
| 4,428 | `mean` | `function mean(` |

### The record rows

_line 4,429_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,430 | `headSigma` | `function headSigma(` |
| 4,435 | `atQuarter` | `function atQuarter(` |
| 4,436 | `atMonth` | `function atMonth(` |
| 4,437 | `cycleAverages` | `function cycleAverages(` |
| 4,444 | `ordinal` | `function ordinal(` |
| 4,445 | `hiCard` | `function hiCard(` |
| 4,448 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component

_line 4,462_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,463 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 4,469 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,476 | `moreRow` | `function moreRow(` |
| 4,482 | `powerPageNote` | `var powerPageNote =` |
| 4,483 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,489_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,490 | `xLabelOf` | `function xLabelOf(` |
| 4,500 | `fitGroup` | `function fitGroup(` |
| 4,517 | `reserveChart` | `function reserveChart(` |

### The history component's axes

_line 4,551_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,552 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,560 | `vGrid` | `function vGrid(` |
| 4,564 | `COL_FILL` | `var COL_FILL =` |
| 4,565 | `colPath` | `function colPath(` |
| 4,570 | `colWidth` | `function colWidth(` |
| 4,575 | `AXIS` | `var AXIS =` |
| 4,576 | `histFrame` | `function histFrame(` |
| 4,583 | `xLabel` | `function xLabel(` |
| 4,586 | `crossLine` | `function crossLine(` |
| 4,589 | `zeroRule` | `function zeroRule(` |
| 4,592 | `meanRule` | `function meanRule(` |
| 4,593 | `pendingGeom` | `var pendingGeom =` |
| 4,594 | `publishGeom` | `function publishGeom(` |
| 4,595 | `attachHistory` | `function attachHistory(` |
| 4,604 | `histBar` | `function histBar(` |
| 4,607 | `histTip` | `function histTip(` |
| 4,608 | `avgRule` | `function avgRule(` |
| 4,611 | `vhOpen` | `function vhOpen(` |
| 4,612 | `chartAxes` | `function chartAxes(` |
| 4,642 | `divergeChart` | `function divergeChart(` |
| 4,676 | `pairChart` | `function pairChart(` |

### The inner pages' chart (kept for nothing — see above)

_line 4,704_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,706 | `maxIn` | `function maxIn(` |
| 4,711 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,712 | `PEEK_W` | `var PEEK_W =` |
| 4,713 | `PEEK_H` | `var PEEK_H =` |
| 4,714 | `colPeek` | `function colPeek(` |
| 4,732 | `meterPeek` | `function meterPeek(` |
| 4,749 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,754 | `pressureZone` | `function pressureZone(` |
| 4,760 | `HZN_BACK` | `var HZN_BACK =` |
| 4,761 | `hznLast` | `function hznLast(` |
| 4,762 | `hznBack` | `function hznBack(` |
| 4,763 | `horizonWord` | `function horizonWord(` |
| 4,783 | `HZN_METERS` | `var HZN_METERS =` |
| 4,791 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,812 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,817 | `RISK_RISK` | `var RISK_RISK =` |
| 4,822 | `riskCell` | `function riskCell(` |
| 4,823 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,853 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,878_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,879 | `pulseClipN` | `var pulseClipN =` |
| 4,880 | `beatPath` | `function beatPath(` |
| 4,897 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,911 | `pulsePeek` | `function pulsePeek(` |
| 4,914 | `pulseBlock` | `function pulseBlock(` |
| 4,931 | `CHEV` | `var CHEV =` |
| 4,932 | `peekCard` | `function peekCard(` |
| 4,951 | `dropSvg` | `function dropSvg(` |
| 4,953 | `volumeSvg` | `function volumeSvg(` |
| 4,957 | `gaugeSvg` | `function gaugeSvg(` |
| 4,961 | `diamondSvg` | `function diamondSvg(` |
| 4,965 | `energyFromReserve` | `function energyFromReserve(` |
| 4,973 | `sproutSvg` | `function sproutSvg(` |
| 4,981 | `markSvg` | `function markSvg(` |
| 4,984 | `hormoneSvg` | `function hormoneSvg(` |
| 4,989 | `flameSvg` | `function flameSvg(` |
| 4,992 | `gearSvg` | `function gearSvg(` |
| 5,000 | `thermoSvg` | `function thermoSvg(` |
| 5,003 | `trendUpSvg` | `function trendUpSvg(` |
| 5,005 | `ecgSvg` | `function ecgSvg(` |
| 5,007 | `circulationSvg` | `function circulationSvg(` |
| 5,008 | `weatherSvg` | `function weatherSvg(` |
| 5,016 | `moodSvg` | `function moodSvg(` |
| 5,020 | `boltSvg` | `function boltSvg(` |
| 5,021 | `houseSvg` | `function houseSvg(` |
| 5,024 | `sunriseSvg` | `function sunriseSvg(` |
| 5,028 | `umbrellaSvg` | `function umbrellaSvg(` |
| 5,032 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 5,038_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,039 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 5,040 | `dsrHistory` | `var dsrHistory =` |
| 5,041 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 5,042 | `savHistory` | `var savHistory =` |
| 5,045 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 5,054 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 5,055 | `dsrNow` | `var dsrNow =` |
| 5,056 | `savNow` | `var savNow =` |
| 5,057 | `DSR_MEAN` | `var DSR_MEAN =` |
| 5,058 | `householdsWord` | `function householdsWord(` |
| 5,065 | `householdsNow` | `var householdsNow =` |
| 5,066 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 5,067 | `dsrMeter` | `var dsrMeter =` |
| 5,070 | `savMeter` | `var savMeter =` |
| 5,073 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 5,090 | `savInfoHtml` | `function savInfoHtml(` |
| 5,108 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 5,115 | `curveNow` | `var curveNow =` |
| 5,116 | `curveTag` | `var curveTag =` |
| 5,117 | `curveSub` | `var curveSub =` |
| 5,118 | `curvePct` | `function curvePct(` |
| 5,119 | `curveNoteFull` | `var curveNoteFull =` |
| 5,134 | `curveDetailHtml` | `function curveDetailHtml(` |
| 5,138 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 5,144 | `marketCycles` | `var marketCycles =` |
| 5,172 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 5,174_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,175 | `typicalCycleYears` | `var typicalCycleYears =` |
| 5,176 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 5,181_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,182 | `slopeOf` | `function slopeOf(` |
| 5,187 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 5,188 | `readSeason` | `function readSeason(` |
| 5,207 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 5,208 | `qLabel` | `function qLabel(` |
| 5,223 | `regimeTrack` | `function regimeTrack(` |
| 5,243 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 5,245_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,246 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 5,247 | `seasonTitle` | `function seasonTitle(` |
| 5,248 | `monthLabel` | `function monthLabel(` |
| 5,249 | `cycleModel` | `function cycleModel(` |
| 5,286 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,294 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,300 | `nowModel` | `var nowModel =` |
| 5,301 | `readingNow` | `var readingNow =` |
| 5,302 | `cpiNow` | `var cpiNow =` |
| 5,303 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,304 | `currentSeason` | `var currentSeason =` |
| 5,305 | `seasonWhy` | `var seasonWhy =` |
| 5,307 | `seasonGroup` | `function seasonGroup(` |
| 5,309 | `arcGauge` | `function arcGauge(` |
| 5,343 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,354 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,355 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,356 | `spreadLabel` | `function spreadLabel(` |
| 5,360 | `policyFacts` | `function policyFacts(` |
| 5,367 | `policyFactRows` | `function policyFactRows(` |
| 5,373 | `allSources` | `var allSources =` |
| 5,387 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,399_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,400 | `SVG_NS` | `var SVG_NS =` |
| 5,401 | `svgEl` | `function svgEl(` |
| 5,406 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,440_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,441 | `clampPct` | `function clampPct(` |
| 5,443 | `infoIcon` | `function infoIcon(` |
| 5,448 | `detailTexts` | `var detailTexts =` |
| 5,449 | `detailSlots` | `var detailSlots =` |
| 5,450 | `detailSlot` | `function detailSlot(` |
| 5,460 | `powerPanelHtml` | `var powerPanelHtml =` |
| 5,461 | `_growthPanel` | `var _growthPanel =` |
| 5,462 | `growthPanelHtml` | `function growthPanelHtml(` |
| 5,468 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 5,476 | `facts` | `function facts(` |
| 5,477 | `factsFrom` | `function factsFrom(` |
| 5,481 | `expandBtn` | `function expandBtn(` |
| 5,485 | `sheetRenderers` | `var sheetRenderers =` |
| 5,486 | `pageMode` | `var pageMode =` |
| 5,491 | `pageCycles` | `var pageCycles =` |
| 5,496 | `pageRange` | `var pageRange =` |
| 5,502 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,531_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,534 | `meterHtml` | `function meterHtml(` |
| 5,558 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,559_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,560 | `subjectRow` | `function subjectRow(` |
| 5,570 | `subjectIcon` | `function subjectIcon(` |
| 5,571 | `srcHtml` | `function srcHtml(` |
| 5,572 | `TIMING` | `var TIMING =` |
| 5,578 | `timingMark` | `function timingMark(` |
| 5,586 | `timingPill` | `function timingPill(` |
| 5,595 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,603 | `seatPageFoot` | `function seatPageFoot(` |
| 5,615 | `timingMembers` | `var timingMembers =` |
| 5,616 | `registerTiming` | `function registerTiming(` |
| 5,618 | `headHtml` | `function headHtml(` |
| 5,626 | `heldHighlights` | `var heldHighlights =` |
| 5,627 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,655_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,656 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,657 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,665 | `withLatestPoint` | `function withLatestPoint(` |
| 5,670 | `pressureMaturities` | `function pressureMaturities(` |
| 5,694 | `registerFlowPages` | `function registerFlowPages(` |
| 5,753 | `renderPressureRow` | `function renderPressureRow(` |
| 5,761 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,780 | `ylmColumns` | `function ylmColumns(` |
| 5,800 | `ylmFitLine` | `function ylmFitLine(` |
| 5,812 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,958_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,959 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,996_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,997 | `spreadSeries` | `function spreadSeries(` |
| 6,041 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 6,166_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,167 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 6,193_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,194 | `drawHznHead` | `function drawHznHead(` |
| 6,209 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 6,271_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,272 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 6,286_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,287 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones

_line 6,308_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,309 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 6,408_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,409 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,482_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,483 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,546_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,547 | `totalRiseIn` | `function totalRiseIn(` |
| 6,557 | `eraInflation` | `function eraInflation(` |
| 6,568 | `eraGrowth` | `function eraGrowth(` |
| 6,584 | `fmtSigned` | `function fmtSigned(` |
| 6,585 | `regimeArrow` | `function regimeArrow(` |
| 6,586 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,587 | `growthShown` | `function growthShown(` |
| 6,588 | `growthShownCap` | `function growthShownCap(` |
| 6,589 | `regimeState` | `function regimeState(` |
| 6,590 | `phaseClass` | `function phaseClass(` |
| 6,591 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,596 | `cycleViewEl` | `var cycleViewEl =` |
| 6,597 | `tempCard` | `var tempCard =` |
| 6,598 | `placeCharts` | `function placeCharts(` |
| 6,603 | `shownEra` | `var shownEra =` |
| 6,604 | `calendarReset` | `var calendarReset =` |
| 6,605 | `metricPageReset` | `var metricPageReset =` |
| 6,606 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,607 | `topbarBack` | `var topbarBack =` |
| 6,608 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,615_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,616 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,697_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,698 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,716_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,717 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,738_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,740 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,741 | `hubSet` | `function hubSet(` |
| 6,752 | `quarterPopup` | `function quarterPopup(` |
| 6,775 | `hubShowDefault` | `function hubShowDefault(` |
| 6,783 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,789 | `hubShowYear` | `function hubShowYear(` |
| 6,799 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: the cycle's months, against the 2% target

_line 6,880_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,881 | `tempState` | `var tempState =` |
| 6,882 | `chartLink` | `var chartLink =` |
| 6,883 | `m2Step` | `function m2Step(` |
| 6,886 | `heatStep` | `function heatStep(` |
| 6,890 | `drawTempFit` | `function drawTempFit(` |
| 6,905 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 7,047_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,048 | `drawGrowth` | `function drawGrowth(` |
| 7,161 | `wireResize` | `function wireResize(` |
| 7,167 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 7,179_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,180 | `renderCycleView` | `function renderCycleView(` |
| 7,214 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws

_line 7,222_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,223 | `peerChosen` | `function peerChosen(` |
| 7,224 | `peerReaches` | `function peerReaches(` |
| 7,252 | `shownEraModel` | `var shownEraModel =` |
| 7,253 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 7,255_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,256 | `stripGroupName` | `var stripGroupName =` |
| 7,257 | `seasonStripHtml` | `function seasonStripHtml(` |
| 7,285 | `marketStripHtml` | `function marketStripHtml(` |
| 7,319 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 7,320 | `settleStrips` | `function settleStrips(` |
| 7,351 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 7,382 | `orderMetricSheets` | `function orderMetricSheets(` |
| 7,407 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 7,517_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,518 | `partsOf` | `function partsOf(` |
| 7,527 | `discOf` | `function discOf(` |
| 7,530 | `authored` | `function authored(` |
| 7,531 | `registerRoster` | `function registerRoster(` |
| 7,565 | `indRow` | `function indRow(` |
| 7,569 | `IND_ORDER` | `var IND_ORDER =` |
| 7,570 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 7,586_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,587 | `NAV` | `var NAV =` |
| 7,588 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,682_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,683 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,731_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,732 | `fmtDay` | `function fmtDay(` |
| 7,733 | `qPretty` | `function qPretty(` |
| 7,734 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,735 | `peekArt` | `function peekArt(` |
| 7,736 | `indPeriod` | `function indPeriod(` |
| 7,745 | `catItem` | `function catItem(` |
| 7,799 | `insightCirculation` | `function insightCirculation(` |
| 7,832 | `insightWeather` | `function insightWeather(` |
| 7,875 | `CAT_MINI` | `var CAT_MINI =` |
| 7,878 | `placeSignPair` | `function placeSignPair(` |
| 7,910 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,926 | `buildCategories` | `function buildCategories(` |
| 7,984 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 8,030_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,031 | `pct0` | `function pct0(` |
| 8,032 | `capeFmt1` | `function capeFmt1(` |
| 8,033 | `reserveState` | `function reserveState(` |
| 8,034 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 8,035 | `GDP_STOPS` | `var GDP_STOPS =` |
| 8,036 | `POWER_STOPS` | `var POWER_STOPS =` |
| 8,037 | `VAL_STOPS` | `var VAL_STOPS =` |
| 8,038 | `DEF_STOPS` | `var DEF_STOPS =` |
| 8,039 | `qShort` | `function qShort(` |
| 8,040 | `yoyPairs` | `function yoyPairs(` |
| 8,050 | `actCycleMonths` | `function actCycleMonths(` |
| 8,058 | `householdsHighlights` | `function householdsHighlights(` |
| 8,077 | `redrawSheet` | `function redrawSheet(` |
| 8,081 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 8,148 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 8,212 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 8,263 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 8,293 | `powerHighlights` | `function powerHighlights(` |
| 8,313 | `valuationHighlights` | `function valuationHighlights(` |
| 8,335 | `tempHighlights` | `function tempHighlights(` |
| 8,352 | `gdpHighlights` | `function gdpHighlights(` |
| 8,367 | `renderMetricPages` | `function renderMetricPages(` |
| 8,380 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 8,393_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,394 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 8,395 | `cycleDataOn` | `function cycleDataOn(` |
| 8,396 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 8,416 | `wireCycleData` | `function wireCycleData(` |
| 8,431 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories

_line 8,478_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,479 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES

_line 8,512_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,513 | `__roster` | `var __roster =` |
| 8,514 | `readingRoster` | `function readingRoster(` |
| 8,557 | `readFig` | `function readFig(` |
| 8,562 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,569_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,570 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,594 | `placeWords` | `function placeWords(` |
| 8,598 | `symptomNote` | `function symptomNote(` |
| 8,605 | `symptomRow` | `function symptomRow(` |
| 8,612 | `cycleTrack` | `function cycleTrack(` |
| 8,627 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,635_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,636 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,685_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,686 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,717_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,718 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 2,254–2,257 | `LIVE_CACHE` | Live data without a render refactor |
| 4,769–4,782 | `horizonRead` | The inner pages' chart (kept for nothing — see above) |
| 5,209–5,222 | `seasonTrackAll` | The season, computed |
| 5,238–5,242 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 8,193 |
| `desire-range` | 5,745 |
| `fear-range` | 6,453 |
| `hormones-range` | 6,341 |
| `hzn-range` | 6,234 |
| `pressure-range` | 2,322 |
| `pulse-range` | 5,712 |
| `sheet-marker-deficit` | 8,190 |
| `sheet-metric-gdp` | 8,108 |
| `sheet-metric-households` | 8,214 |
| `sheet-metric-power` | 8,165 |
| `sheet-metric-temp` | 8,082 |
| `sheet-metric-valuation` | 8,235 |
| `sheet-sign-activity` | 8,150 |
| `sheet-sign-desire` | 5,746 |
| `sheet-sign-horizon` | 6,235 |
| `sheet-sign-hormones` | 6,342 |
| `sheet-sign-pressure` | 5,950 |
| `sheet-sign-pulse` | 5,711 |
| `sheet-sign-sentiment` | 6,454 |
| `sheet-sign-volume` | 5,729 |
| `volume-range` | 5,730 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 8,197 |
| `desire-range` | 5,734 |
| `fear-range` | 6,421 |
| `hzn-range` | 6,219 |
| `pressure-range` | 5,919 |
| `pulse-range` | 5,698 |
| `sheet-metric-gdp` | 8,109 |
| `sheet-metric-power` | 8,166 |
| `sheet-metric-temp` | 8,083 |
| `sheet-metric-valuation` | 8,236 |
| `volume-range` | 5,716 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,409 |
| `sheet-metric-gdp` | 3,410 |
| `sheet-sign-activity` | 3,411 |
| `sheet-metric-power` | 3,412 |
| `sheet-metric-valuation` | 3,414 |
| `sheet-metric-households` | 3,415 |
| `deficit-range` | 3,416 |
| `volume-range` | 3,417 |
| `pulse-range` | 3,418 |
| `hzn-range` | 3,419 |
| `desire-range` | 3,420 |
| `fear-range` | 3,421 |
| `hormones-range` | 3,422 |
| `pressure-range` | 3,423 |

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
| 1,013 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,226 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,245 | The symptoms: a cycle's years against today |
| 1,294 | A closed cycle's categories |
| 1,315 | hero: yield curve |
| 1,348 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,367 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,392 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,400 | long cycle (structural layer) |
| 1,414 | indicator grid |
| 1,440 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 1,454 | info icon + popover (progressive disclosure for longer notes) |
| 1,468 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,551 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (147), which is what the renderers fill:

| Line | id |
|---|---|
| 1,567 | `topbar-back` |
| 1,570 | `topbar-title` |
| 1,571 | `menu-btn` |
| 1,585 | `main` |
| 1,588 | `cycle-view` |
| 1,591 | `cycle-kicker` |
| 1,594 | `cycle-dial` |
| 1,596 | `season-wheel-hub-date` |
| 1,597 | `season-wheel-hub-theme` |
| 1,598 | `season-wheel-hub-detail` |
| 1,604 | `temp-card` |
| 1,606 | `temp-kicker` |
| 1,607 | `temp-sub` |
| 1,610 | `temp-svg` |
| 1,611 | `temp-tooltip` |
| 1,613 | `temp-stats` |
| 1,616 | `growth-card` |
| 1,617 | `growth-kicker` |
| 1,617 | `growth-phase` |
| 1,617 | `growth-sub` |
| 1,618 | `growth-svg` |
| 1,618 | `growth-tooltip` |
| 1,619 | `growth-stats` |
| 1,624 | `today-analysis` |
| 1,625 | `peek-row` |
| 1,626 | `sheet-metric-temp` |
| 1,627 | `temp-timing` |
| 1,628 | `temp-chart` |
| 1,629 | `temp-rangebar` |
| 1,631 | `temp-head` |
| 1,632 | `slot-temp` |
| 1,633 | `temp-history` |
| 1,634 | `temp-hist-tooltip` |
| 1,635 | `temp-trend` |
| 1,637 | `temp-highlights` |
| 1,639 | `sheet-metric-gdp` |
| 1,640 | `gdp-timing` |
| 1,641 | `gdp-chart` |
| 1,642 | `gdp-rangebar` |
| 1,644 | `gdp-head` |
| 1,645 | `slot-growth` |
| 1,646 | `gdp-history` |
| 1,647 | `gdp-hist-tooltip` |
| 1,648 | `gdp-yoy` |
| 1,649 | `gdp-trend` |
| 1,650 | `gdp-panel` |
| 1,654 | `subj-ring-gdp` |
| 1,656 | `subj-label-gdp` |
| 1,657 | `subj-value-gdp` |
| 1,658 | `subj-say-gdp` |
| 1,659 | `subj-spark-gdp` |
| 1,664 | `subj-ctx-gdp` |
| 1,667 | `gdp-highlights` |
| 1,670 | `sheet-metric-power` |
| 1,671 | `power-timing` |
| 1,672 | `power-head` |
| 1,673 | `power-chart` |
| 1,676 | `subj-ring-resilience` |
| 1,679 | `subj-value-resilience` |
| 1,680 | `subj-say-resilience` |
| 1,685 | `subj-ctx-resilience` |
| 1,689 | `longcycle-title` |
| 1,691 | `longcycle-tag` |
| 1,697 | `power-highlights` |
| 1,700 | `sheet-marker-deficit` |
| 1,702 | `sheet-metric-households` |
| 1,703 | `households-timing` |
| 1,704 | `households-chart` |
| 1,705 | `households-highlights` |
| 1,708 | `sheet-metric-valuation` |
| 1,709 | `valuation-timing` |
| 1,710 | `valuation-head` |
| 1,711 | `valuation-chart` |
| 1,714 | `subj-ring-valuation` |
| 1,717 | `subj-value-valuation` |
| 1,718 | `subj-say-valuation` |
| 1,723 | `subj-ctx-valuation` |
| 1,727 | `valuation-title` |
| 1,729 | `valuation-tag` |
| 1,734 | `valuation-highlights` |
| 1,741 | `subj-value-hormones` |
| 1,742 | `subj-say-hormones` |
| 1,748 | `hormones-history` |
| 1,749 | `hormones-insights` |
| 1,758 | `subj-value-horizon` |
| 1,759 | `subj-say-horizon` |
| 1,760 | `subj-spark-horizon` |
| 1,766 | `hzn-timeline` |
| 1,768 | `hzn-head` |
| 1,769 | `spread-history-shell` |
| 1,770 | `spread-history-svg` |
| 1,771 | `spread-history-tooltip` |
| 1,773 | `hzn-trend` |
| 1,775 | `horizon-insights` |
| 1,784 | `subj-value-pressure` |
| 1,785 | `subj-say-pressure` |
| 1,791 | `pressure-timeline` |
| 1,793 | `pressure-head` |
| 1,794 | `ylm-shell` |
| 1,795 | `ylm-svg` |
| 1,796 | `ylm-tooltip` |
| 1,798 | `ylm-trend` |
| 1,800 | `pressure-insights` |
| 1,807 | `subj-ring-sentiment` |
| 1,810 | `subj-value-sentiment` |
| 1,811 | `subj-say-sentiment` |
| 1,812 | `subj-spark-sentiment` |
| 1,818 | `fear-history` |
| 1,819 | `curve-highlights` |
| 1,825 | `signs-list` |
| 1,831 | `calendar-list` |
| 1,838 | `cycle-data` |
| 1,840 | `cycle-legend` |
| 1,841 | `cycle-list` |
| 1,842 | `cycle-more` |
| 1,843 | `cycle-more-label` |
| 1,848 | `calendar-cycle` |
| 1,849 | `calendar-cycle-slot` |
| 1,850 | `cycle-cats` |
| 1,871 | `search-home` |
| 1,873 | `search-input` |
| 1,875 | `search-list` |
| 1,879 | `more-menu` |
| 1,882 | `menu-back` |
| 1,896 | `sources-open` |
| 1,904 | `appearance-current` |
| 1,910 | `sheet-howto` |
| 1,953 | `sheet-book` |
| 1,984 | `seasons-kicker` |
| 1,986 | `seasons-rows` |
| 1,989 | `framework-kicker` |
| 1,992 | `framework-rows` |
| 2,002 | `sheet-appearance` |
| 2,010 | `theme-toggle` |
| 2,017 | `sheet-contact` |
| 2,026 | `contact-form` |
| 2,027 | `contact-title` |
| 2,028 | `contact-message` |
| 2,030 | `contact-hint` |
| 2,031 | `contact-send` |
| 2,037 | `sheet-sources` |
| 2,040 | `sources-back` |
| 2,045 | `asof-text` |
| 2,046 | `sources-groups` |
| 2,052 | `detail-backdrop` |
| 2,054 | `detail-modal-close` |
| 2,055 | `detail-modal-body` |

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

