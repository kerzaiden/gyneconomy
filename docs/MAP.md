# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,950 lines**, about 644 KB, roughly **183 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `0f1483c` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,673 | the whole stylesheet, every token and rule |
| **Markup** | 1,674–2,175 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 2,176–8,917 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,918–8,950 | </body></html> |

Counts: **290** top-level functions, **184** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 2,176_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,178 | `byId` | `function byId(` |
| 2,186 | `byIdMaybe` | `function byIdMaybe(` |
| 2,187 | `put` | `function put(` |
| 2,192 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 2,194_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,195 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 2,196 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 2,197 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 2,198 | `hubTodayHtml` | `function hubTodayHtml(` |
| 2,202 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 2,207_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,208 | `wheelMeta` | `var wheelMeta =` |
| 2,216 | `seasonOverride` | `var seasonOverride =` |
| 2,217 | `cycleNowNote` | `var cycleNowNote =` |
| 2,219 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 2,297 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 2,338 | `gdpLevels` | `var gdpLevels =` |
| 2,347 | `fedFundsHistory` | `var fedFundsHistory =` |
| 2,348 | `fearCurveHistory` | `var fearCurveHistory =` |
| 2,350 | `fiscalHistory` | `var fiscalHistory =` |
| 2,356 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 2,358 | `treasuryQuarterly` | `var treasuryQuarterly =` |

### Live data without a render refactor

_line 2,368_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,373 | `merge` | `function merge(` |
| 2,380 | `LIVE` | `function LIVE(` |
| 2,394 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,397_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,399 | `paintReading` | `function paintReading(` |
| 2,416 | `repaintFearCurve` | `function repaintFearCurve(` |
| 2,422 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,430 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,435 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,439 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,444_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,445 | `READINGS` | `var READINGS =` |
| 2,501 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,502 | `KINDS` | `var KINDS =` |
| 2,503 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,517 | `receive` | `function receive(` |
| 2,533 | `liveAsOf` | `var liveAsOf =` |
| 2,534 | `fmtAsOf` | `function fmtAsOf(` |
| 2,539 | `applyLive` | `function applyLive(` |
| 2,552 | `shapeOk` | `function shapeOk(` |
| 2,559 | `repaintPolicy` | `function repaintPolicy(` |
| 2,565 | `GYN` | `var GYN =` |
| 2,592 | `refreshLiveData` | `function refreshLiveData(` |
| 2,610 | `fetchSiteData` | `function fetchSiteData(` |
| 2,626 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,631_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,632 | `yieldCurve` | `var yieldCurve =` |
| 2,638 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,639 | `curveAsOf` | `function curveAsOf(` |
| 2,644 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,645 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,650 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,652_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,653 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,654 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,655 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,656 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,657 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,659_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,660 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,666 | `uninvLagToday` | `var uninvLagToday =` |
| 2,671 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,677 | `gdpPeers` | `var gdpPeers =` |
| 2,718 | `gdpSrc` | `var gdpSrc =` |
| 2,719 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,724 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 2,726 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,753_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,755 | `productivityReading` | `var productivityReading =` |

### Institutional trust is not in this panel

_line 2,764_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,766 | `stressScoreFor` | `function stressScoreFor(` |
| 2,772 | `stressScore` | `var stressScore =` |
| 2,773 | `powerOf` | `var powerOf =` |
| 2,774 | `powerScore` | `var powerScore =` |
| 2,776 | `stressHistory` | `var stressHistory =` |
| 2,782 | `powerMeter` | `var powerMeter =` |
| 2,784 | `stressNoteFull` | `var stressNoteFull =` |
| 2,786 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year

_line 2,788_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,789 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,790 | `deficitHistory` | `var deficitHistory =` |
| 2,793 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,794 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,796 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,805_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,806 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,816_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,817 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,820 | `timelineSpan` | `function timelineSpan(` |
| 2,825 | `timelineFor` | `function timelineFor(` |
| 2,836 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,842_ · 32 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,843 | `windowScale` | `function windowScale(` |
| 2,858 | `windowYears` | `function windowYears(` |
| 2,866 | `refName` | `function refName(` |
| 2,870 | `histReadEnsure` | `function histReadEnsure(` |
| 2,891 | `seatBandReading` | `function seatBandReading(` |
| 2,907 | `histReadFill` | `function histReadFill(` |
| 2,957 | `histAxisEnds` | `function histAxisEnds(` |
| 2,968 | `histLegend` | `function histLegend(` |
| 3,028 | `refitHistory` | `function refitHistory(` |
| 3,038 | `wireHistHover` | `function wireHistHover(` |
| 3,075 | `mWindowFrom` | `function mWindowFrom(` |
| 3,079 | `qWindowFrom` | `function qWindowFrom(` |
| 3,083 | `VOL_STOPS` | `var VOL_STOPS =` |
| 3,084 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 3,086 | `DEF_1983` | `var DEF_1983 =` |
| 3,087 | `defFrom` | `function defFrom(` |
| 3,092 | `deficitChart` | `function deficitChart(` |
| 3,160 | `deficitBlock` | `function deficitBlock(` |
| 3,203 | `buffettHistory` | `var buffettHistory =` |
| 3,205 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 3,206 | `hyDates` | `var hyDates =` |
| 3,207 | `hyOas` | `var hyOas =` |
| 3,208 | `checkDesireWindow` | `function checkDesireWindow(` |
| 3,215 | `hyAt` | `function hyAt(` |
| 3,219 | `hyLabel` | `function hyLabel(` |
| 3,220 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 3,221 | `hyNum` | `function hyNum(` |
| 3,222 | `hyWindowFrom` | `function hyWindowFrom(` |
| 3,230 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 3,240 | `capeHistory` | `var capeHistory =` |
| 3,242 | `longCycleSrc` | `var longCycleSrc =` |
| 3,258 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 3,277_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,278 | `sentiment` | `var sentiment =` |
| 3,294 | `valuation` | `var valuation =` |
| 3,315 | `valRow` | `function valRow(` |
| 3,322 | `coincident` | `var coincident =` |
| 3,368 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 3,374 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 3,375 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 3,376 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 3,378_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,379 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 3,380 | `m2vHistory` | `var m2vHistory =` |
| 3,396 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,450 | `desireHistoryChart` | `function desireHistoryChart(` |
| 3,490 | `PBAR_GAP` | `var PBAR_GAP =` |
| 3,491 | `panelBar` | `function panelBar(` |

### the history card's head

_line 3,522_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,523 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,524 | `DOTS` | `var DOTS =` |
| 3,526 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,543 | `headPickRow` | `function headPickRow(` |
| 3,549 | `histHead` | `function histHead(` |
| 3,564 | `headNoteIdx` | `var headNoteIdx =` |
| 3,565 | `headMenuHtml` | `function headMenuHtml(` |
| 3,590 | `headMenuFor` | `var headMenuFor =` |
| 3,591 | `headSubFor` | `var headSubFor =` |
| 3,592 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,623 | `nameWithMark` | `function nameWithMark(` |
| 3,629 | `panelRow` | `function panelRow(` |
| 3,642 | `panelFromMeter` | `function panelFromMeter(` |
| 3,650 | `meterFlagged` | `function meterFlagged(` |
| 3,657 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,682 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,696 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,709 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,728 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,742 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,761 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,792 | `desireBlock` | `function desireBlock(` |
| 3,804 | `volumeBlock` | `function volumeBlock(` |
| 3,817 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,833 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,840_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,841 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,842 | `m2Level` | `var m2Level =` |
| 3,863 | `m2Yoy` | `var m2Yoy =` |
| 3,864 | `M2_NORM` | `var M2_NORM =` |
| 3,866 | `volumeVerdict` | `function volumeVerdict(` |
| 3,874 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,875 | `unempHistory` | `var unempHistory =` |
| 3,881 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,890 | `NROU_NOW` | `var NROU_NOW =` |
| 3,891 | `unempState` | `function unempState(` |
| 3,897 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,951_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,952 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,961 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 4,019 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 4,020 | `CPI_TARGET` | `var CPI_TARGET =` |
| 4,021 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 4,022_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,024 | `householdsChart` | `function householdsChart(` |
| 4,073 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 4,128 | `GDP_NORM` | `var GDP_NORM =` |
| 4,129 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 4,130 | `gdpNowQ` | `var gdpNowQ =` |
| 4,131 | `gdpMeter` | `var gdpMeter =` |
| 4,134 | `growthInfoHtml` | `function growthInfoHtml(` |
| 4,156 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 4,209 | `m2GrowthChart` | `function m2GrowthChart(` |
| 4,256 | `checkMoneyStock` | `function checkMoneyStock(` |
| 4,264 | `velocityVerdict` | `function velocityVerdict(` |
| 4,272 | `derivePulseTag` | `function derivePulseTag(` |
| 4,278 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 4,308_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,309 | `seasonReading` | `var seasonReading =` |
| 4,353 | `frameworkRows` | `var frameworkRows =` |
| 4,363 | `vixRow` | `var vixRow =` |
| 4,364 | `vixWordOf` | `var vixWordOf =` |
| 4,368 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 4,378_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,379 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 4,388_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,389 | `calendarTodayY` | `var calendarTodayY =` |
| 4,391 | `vix3mClose` | `var vix3mClose =` |
| 4,392 | `fearCurve` | `function fearCurve(` |
| 4,397 | `curveVerdict` | `function curveVerdict(` |
| 4,402 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 4,403 | `valuationVerdict` | `function valuationVerdict(` |
| 4,411 | `sparkHtml` | `function sparkHtml(` |
| 4,430 | `lastN` | `function lastN(` |

### The range bar

_line 4,432_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,433 | `modeBar` | `function modeBar(` |
| 4,440 | `pickerOpen` | `var pickerOpen =` |
| 4,441 | `cycleByName` | `function cycleByName(` |
| 4,445 | `openCycle` | `function openCycle(` |
| 4,449 | `cycleSlice` | `function cycleSlice(` |
| 4,457 | `totalGrowthYears` | `function totalGrowthYears(` |
| 4,465 | `cycleMonths` | `function cycleMonths(` |
| 4,473 | `histControls` | `function histControls(` |
| 4,482 | `cycLabel` | `function cycLabel(` |
| 4,486 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 4,491 | `cyclePicker` | `function cyclePicker(` |
| 4,510 | `rangeBar` | `function rangeBar(` |
| 4,517 | `trendOf` | `function trendOf(` |
| 4,532 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,536 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,547_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,548 | `yearOf` | `function yearOf(` |
| 4,549 | `mean` | `function mean(` |

### The record rows

_line 4,550_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,551 | `headSigma` | `function headSigma(` |
| 4,556 | `atQuarter` | `function atQuarter(` |
| 4,557 | `atMonth` | `function atMonth(` |
| 4,558 | `cycleAverages` | `function cycleAverages(` |
| 4,565 | `ordinal` | `function ordinal(` |
| 4,566 | `hiCard` | `function hiCard(` |
| 4,569 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component

_line 4,583_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,584 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 4,590 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,597 | `moreRow` | `function moreRow(` |
| 4,603 | `powerPageNote` | `var powerPageNote =` |
| 4,604 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,610_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,611 | `xLabelOf` | `function xLabelOf(` |
| 4,621 | `fitGroup` | `function fitGroup(` |
| 4,638 | `reserveChart` | `function reserveChart(` |

### The history component's axes

_line 4,672_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,673 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,681 | `vGrid` | `function vGrid(` |
| 4,685 | `COL_FILL` | `var COL_FILL =` |
| 4,686 | `colPath` | `function colPath(` |
| 4,691 | `colWidth` | `function colWidth(` |
| 4,696 | `AXIS` | `var AXIS =` |
| 4,697 | `histFrame` | `function histFrame(` |
| 4,704 | `xLabel` | `function xLabel(` |
| 4,707 | `crossLine` | `function crossLine(` |
| 4,710 | `zeroRule` | `function zeroRule(` |
| 4,713 | `meanRule` | `function meanRule(` |
| 4,714 | `pendingGeom` | `var pendingGeom =` |
| 4,715 | `publishGeom` | `function publishGeom(` |
| 4,716 | `attachHistory` | `function attachHistory(` |
| 4,725 | `histBar` | `function histBar(` |
| 4,728 | `histTip` | `function histTip(` |
| 4,729 | `avgRule` | `function avgRule(` |
| 4,732 | `vhOpen` | `function vhOpen(` |
| 4,733 | `chartAxes` | `function chartAxes(` |
| 4,763 | `divergeChart` | `function divergeChart(` |
| 4,797 | `pairChart` | `function pairChart(` |

### The inner pages' chart (kept for nothing — see above)

_line 4,825_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,827 | `maxIn` | `function maxIn(` |
| 4,832 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,833 | `PEEK_W` | `var PEEK_W =` |
| 4,834 | `PEEK_H` | `var PEEK_H =` |
| 4,835 | `colPeek` | `function colPeek(` |
| 4,853 | `meterPeek` | `function meterPeek(` |
| 4,870 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,875 | `pressureZone` | `function pressureZone(` |
| 4,881 | `HZN_BACK` | `var HZN_BACK =` |
| 4,882 | `hznLast` | `function hznLast(` |
| 4,883 | `hznBack` | `function hznBack(` |
| 4,884 | `horizonWord` | `function horizonWord(` |
| 4,904 | `HZN_METERS` | `var HZN_METERS =` |
| 4,912 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,933 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,938 | `RISK_RISK` | `var RISK_RISK =` |
| 4,943 | `riskCell` | `function riskCell(` |
| 4,944 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,974 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,999_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,000 | `pulseClipN` | `var pulseClipN =` |
| 5,001 | `beatPath` | `function beatPath(` |
| 5,018 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 5,032 | `pulsePeek` | `function pulsePeek(` |
| 5,035 | `pulseBlock` | `function pulseBlock(` |
| 5,052 | `CHEV` | `var CHEV =` |
| 5,053 | `peekCard` | `function peekCard(` |
| 5,072 | `dropSvg` | `function dropSvg(` |
| 5,074 | `volumeSvg` | `function volumeSvg(` |
| 5,078 | `gaugeSvg` | `function gaugeSvg(` |
| 5,082 | `diamondSvg` | `function diamondSvg(` |
| 5,086 | `energyFromReserve` | `function energyFromReserve(` |
| 5,094 | `sproutSvg` | `function sproutSvg(` |
| 5,102 | `markSvg` | `function markSvg(` |
| 5,105 | `hormoneSvg` | `function hormoneSvg(` |
| 5,110 | `flameSvg` | `function flameSvg(` |
| 5,113 | `gearSvg` | `function gearSvg(` |
| 5,121 | `thermoSvg` | `function thermoSvg(` |
| 5,124 | `trendUpSvg` | `function trendUpSvg(` |
| 5,126 | `ecgSvg` | `function ecgSvg(` |
| 5,128 | `circulationSvg` | `function circulationSvg(` |
| 5,129 | `weatherSvg` | `function weatherSvg(` |
| 5,137 | `moodSvg` | `function moodSvg(` |
| 5,141 | `boltSvg` | `function boltSvg(` |
| 5,142 | `houseSvg` | `function houseSvg(` |
| 5,145 | `sunriseSvg` | `function sunriseSvg(` |
| 5,149 | `umbrellaSvg` | `function umbrellaSvg(` |
| 5,153 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 5,159_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,160 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 5,161 | `dsrHistory` | `var dsrHistory =` |
| 5,162 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 5,163 | `savHistory` | `var savHistory =` |
| 5,166 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 5,175 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 5,176 | `dsrNow` | `var dsrNow =` |
| 5,177 | `savNow` | `var savNow =` |
| 5,178 | `DSR_MEAN` | `var DSR_MEAN =` |
| 5,179 | `householdsWord` | `function householdsWord(` |
| 5,186 | `householdsNow` | `var householdsNow =` |
| 5,187 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 5,188 | `dsrMeter` | `var dsrMeter =` |
| 5,191 | `savMeter` | `var savMeter =` |
| 5,194 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 5,211 | `savInfoHtml` | `function savInfoHtml(` |
| 5,229 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 5,236 | `curveNow` | `var curveNow =` |
| 5,237 | `curveTag` | `var curveTag =` |
| 5,238 | `curveSub` | `var curveSub =` |
| 5,239 | `curvePct` | `function curvePct(` |
| 5,240 | `curveNoteFull` | `var curveNoteFull =` |
| 5,255 | `curveDetailHtml` | `function curveDetailHtml(` |
| 5,259 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 5,265 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside

_line 5,293_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,294 | `marketTops` | `var marketTops =` |
| 5,304 | `marketTopsSrc` | `var marketTopsSrc =` |
| 5,307 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 5,309_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,310 | `typicalCycleYears` | `var typicalCycleYears =` |
| 5,311 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 5,316_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,317 | `slopeOf` | `function slopeOf(` |
| 5,322 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 5,323 | `readSeason` | `function readSeason(` |
| 5,342 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 5,343 | `qLabel` | `function qLabel(` |
| 5,358 | `regimeTrack` | `function regimeTrack(` |
| 5,378 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 5,380_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,381 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 5,382 | `seasonTitle` | `function seasonTitle(` |
| 5,383 | `monthLabel` | `function monthLabel(` |
| 5,384 | `cycleModel` | `function cycleModel(` |
| 5,421 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,429 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,435 | `nowModel` | `var nowModel =` |
| 5,436 | `readingNow` | `var readingNow =` |
| 5,437 | `cpiNow` | `var cpiNow =` |
| 5,438 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,439 | `currentSeason` | `var currentSeason =` |
| 5,440 | `seasonWhy` | `var seasonWhy =` |
| 5,442 | `seasonGroup` | `function seasonGroup(` |
| 5,444 | `arcGauge` | `function arcGauge(` |
| 5,478 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,489 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,490 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,491 | `spreadLabel` | `function spreadLabel(` |
| 5,495 | `policyFacts` | `function policyFacts(` |
| 5,502 | `policyFactRows` | `function policyFactRows(` |
| 5,508 | `allSources` | `var allSources =` |
| 5,522 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,534_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,535 | `SVG_NS` | `var SVG_NS =` |
| 5,536 | `svgEl` | `function svgEl(` |
| 5,541 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,575_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,576 | `clampPct` | `function clampPct(` |
| 5,578 | `infoIcon` | `function infoIcon(` |
| 5,583 | `detailTexts` | `var detailTexts =` |
| 5,584 | `detailSlots` | `var detailSlots =` |
| 5,585 | `detailSlot` | `function detailSlot(` |
| 5,595 | `powerPanelHtml` | `var powerPanelHtml =` |
| 5,596 | `_growthPanel` | `var _growthPanel =` |
| 5,597 | `growthPanelHtml` | `function growthPanelHtml(` |
| 5,603 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 5,611 | `facts` | `function facts(` |
| 5,612 | `factsFrom` | `function factsFrom(` |
| 5,616 | `expandBtn` | `function expandBtn(` |
| 5,620 | `sheetRenderers` | `var sheetRenderers =` |
| 5,621 | `pageMode` | `var pageMode =` |
| 5,626 | `pageCycles` | `var pageCycles =` |
| 5,631 | `pageRange` | `var pageRange =` |
| 5,637 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,666_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,669 | `meterHtml` | `function meterHtml(` |
| 5,693 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,694_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,695 | `subjectRow` | `function subjectRow(` |
| 5,705 | `subjectIcon` | `function subjectIcon(` |
| 5,706 | `srcHtml` | `function srcHtml(` |
| 5,707 | `TIMING` | `var TIMING =` |
| 5,713 | `timingMark` | `function timingMark(` |
| 5,721 | `timingPill` | `function timingPill(` |
| 5,730 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,738 | `seatPageFoot` | `function seatPageFoot(` |
| 5,750 | `timingMembers` | `var timingMembers =` |
| 5,751 | `registerTiming` | `function registerTiming(` |
| 5,753 | `headHtml` | `function headHtml(` |
| 5,761 | `heldHighlights` | `var heldHighlights =` |
| 5,762 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,790_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,791 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,792 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,800 | `withLatestPoint` | `function withLatestPoint(` |
| 5,805 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 6,100_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,101 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 6,138_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,139 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 6,305_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,306 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 6,332_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,333 | `drawHznHead` | `function drawHznHead(` |
| 6,348 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 6,410_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,411 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 6,425_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,426 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones

_line 6,447_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,448 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 6,547_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,548 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,621_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,622 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,685_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,686 | `totalRiseIn` | `function totalRiseIn(` |
| 6,696 | `eraInflation` | `function eraInflation(` |
| 6,707 | `eraGrowth` | `function eraGrowth(` |
| 6,723 | `fmtSigned` | `function fmtSigned(` |
| 6,724 | `regimeArrow` | `function regimeArrow(` |
| 6,725 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,726 | `growthShown` | `function growthShown(` |
| 6,727 | `growthShownCap` | `function growthShownCap(` |
| 6,728 | `regimeState` | `function regimeState(` |
| 6,729 | `phaseClass` | `function phaseClass(` |
| 6,730 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,735 | `cycleViewEl` | `var cycleViewEl =` |
| 6,736 | `tempCard` | `var tempCard =` |
| 6,737 | `placeCharts` | `function placeCharts(` |
| 6,742 | `shownEra` | `var shownEra =` |
| 6,743 | `calendarReset` | `var calendarReset =` |
| 6,744 | `metricPageReset` | `var metricPageReset =` |
| 6,745 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,746 | `topbarBack` | `var topbarBack =` |
| 6,747 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,754_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,755 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,836_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,837 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,855_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,856 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,877_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,879 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,880 | `hubSet` | `function hubSet(` |
| 6,891 | `quarterPopup` | `function quarterPopup(` |
| 6,914 | `hubShowDefault` | `function hubShowDefault(` |
| 6,922 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,928 | `hubShowYear` | `function hubShowYear(` |
| 6,938 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: the cycle's months, against the 2% target

_line 7,019_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,020 | `tempState` | `var tempState =` |
| 7,021 | `chartLink` | `var chartLink =` |
| 7,022 | `m2Step` | `function m2Step(` |
| 7,025 | `heatStep` | `function heatStep(` |
| 7,029 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 7,185_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,186 | `drawGrowth` | `function drawGrowth(` |
| 7,299 | `wireResize` | `function wireResize(` |
| 7,305 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 7,317_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,318 | `renderCycleView` | `function renderCycleView(` |
| 7,352 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws

_line 7,360_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,361 | `peerChosen` | `function peerChosen(` |
| 7,362 | `peerReaches` | `function peerReaches(` |
| 7,390 | `shownEraModel` | `var shownEraModel =` |
| 7,391 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 7,393_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,394 | `stripGroupName` | `var stripGroupName =` |
| 7,395 | `seasonStripHtml` | `function seasonStripHtml(` |
| 7,423 | `marketStripHtml` | `function marketStripHtml(` |
| 7,457 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 7,458 | `settleStrips` | `function settleStrips(` |
| 7,489 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 7,650_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,651 | `partsOf` | `function partsOf(` |
| 7,660 | `discOf` | `function discOf(` |
| 7,663 | `authored` | `function authored(` |
| 7,664 | `registerRoster` | `function registerRoster(` |
| 7,698 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER

_line 7,710_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,711 | `NAV` | `var NAV =` |
| 7,712 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,806_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,807 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories

_line 7,852_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,853 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 8,158_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,159 | `renderMetricPages` | `function renderMetricPages(` |

### GDP growth

_line 8,488_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,521 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 8,534_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,535 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories

_line 8,600_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,601 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES

_line 8,634_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,635 | `__roster` | `var __roster =` |
| 8,636 | `readingRoster` | `function readingRoster(` |
| 8,679 | `readFig` | `function readFig(` |
| 8,684 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top

_line 8,691_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,692 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 8,745_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,746 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 8,795_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,796 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,827_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,828 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 2,369–2,372 | `LIVE_CACHE` | Live data without a render refactor |
| 4,890–4,903 | `horizonRead` | The inner pages' chart (kept for nothing — see above) |
| 5,344–5,357 | `seasonTrackAll` | The season, computed |
| 5,373–5,377 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 8,305 |
| `desire-range` | 6,037 |
| `fear-range` | 6,592 |
| `hormones-range` | 6,480 |
| `hzn-range` | 6,373 |
| `pressure-range` | 2,437 |
| `pulse-range` | 6,004 |
| `sheet-marker-deficit` | 8,302 |
| `sheet-metric-gdp` | 8,214 |
| `sheet-metric-households` | 8,324 |
| `sheet-metric-power` | 8,277 |
| `sheet-metric-temp` | 8,188 |
| `sheet-metric-valuation` | 8,364 |
| `sheet-sign-activity` | 8,262 |
| `sheet-sign-desire` | 6,038 |
| `sheet-sign-horizon` | 6,374 |
| `sheet-sign-hormones` | 6,481 |
| `sheet-sign-pressure` | 6,087 |
| `sheet-sign-pulse` | 6,003 |
| `sheet-sign-sentiment` | 6,593 |
| `sheet-sign-volume` | 6,021 |
| `volume-range` | 6,022 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 8,309 |
| `desire-range` | 6,026 |
| `fear-range` | 6,560 |
| `hzn-range` | 6,358 |
| `pressure-range` | 6,056 |
| `pulse-range` | 5,990 |
| `sheet-metric-gdp` | 8,215 |
| `sheet-metric-power` | 8,278 |
| `sheet-metric-temp` | 8,189 |
| `sheet-metric-valuation` | 8,365 |
| `volume-range` | 6,008 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,527 |
| `sheet-metric-gdp` | 3,528 |
| `sheet-sign-activity` | 3,529 |
| `sheet-metric-power` | 3,530 |
| `sheet-metric-valuation` | 3,532 |
| `sheet-metric-households` | 3,533 |
| `deficit-range` | 3,534 |
| `volume-range` | 3,535 |
| `pulse-range` | 3,536 |
| `hzn-range` | 3,537 |
| `desire-range` | 3,538 |
| `fear-range` | 3,539 |
| `hormones-range` | 3,540 |
| `pressure-range` | 3,541 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 158 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 247 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 298 | yearly calendar — one card per year, grouped into five eras |
| 305 | season strip |
| 332 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 399 | tab bar (app-style segmented navigation) |
| 434 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 459 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 568 | journal (editorial content tab) |
| 574 | content tab: reading companion |
| 623 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 848 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 864 | the reading, after the blood-panel design Keren sent: title, then the figure, flagged in |
| 868 | the panel bar. Keren, V479: "if there's a normal range, I would want to see it in a consistent |
| 874 | one row, as the panel Keren sent lays a marker out: name and figure on the left, the spectrum |
| 884 | the reading's own container, below the history (Keren, V520). `seatBandReading` moves whatever the page |
| 989 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 1,064 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,282 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,312 | Rhymes: today beside one past top |
| 1,337 | A closed cycle's categories |
| 1,360 | hero: yield curve |
| 1,407 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,434 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,463 | yield-by-maturity comparison chart: pill toggles; the marks reuse .gdp-line/.gdp-dot/.gdp-tooltip, |
| 1,480 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,490 | long cycle (structural layer) |
| 1,523 | indicator grid |
| 1,549 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 1,563 | info icon + popover (progressive disclosure for longer notes) |
| 1,577 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,662 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (145), which is what the renderers fill:

| Line | id |
|---|---|
| 1,678 | `topbar-back` |
| 1,681 | `topbar-title` |
| 1,682 | `menu-btn` |
| 1,696 | `main` |
| 1,699 | `cycle-view` |
| 1,702 | `cycle-kicker` |
| 1,705 | `cycle-dial` |
| 1,707 | `season-wheel-hub-date` |
| 1,708 | `season-wheel-hub-theme` |
| 1,709 | `season-wheel-hub-detail` |
| 1,715 | `temp-card` |
| 1,717 | `temp-kicker` |
| 1,718 | `temp-sub` |
| 1,721 | `temp-svg` |
| 1,722 | `temp-tooltip` |
| 1,724 | `temp-stats` |
| 1,727 | `growth-card` |
| 1,728 | `growth-kicker` |
| 1,728 | `growth-phase` |
| 1,728 | `growth-sub` |
| 1,729 | `growth-svg` |
| 1,729 | `growth-tooltip` |
| 1,730 | `growth-stats` |
| 1,735 | `today-analysis` |
| 1,736 | `peek-row` |
| 1,737 | `sheet-metric-temp` |
| 1,738 | `temp-timing` |
| 1,739 | `temp-chart` |
| 1,740 | `temp-rangebar` |
| 1,742 | `temp-head` |
| 1,743 | `slot-temp` |
| 1,744 | `temp-history` |
| 1,745 | `temp-hist-tooltip` |
| 1,746 | `temp-trend` |
| 1,748 | `temp-highlights` |
| 1,750 | `sheet-metric-gdp` |
| 1,751 | `gdp-timing` |
| 1,752 | `gdp-chart` |
| 1,753 | `gdp-rangebar` |
| 1,755 | `gdp-head` |
| 1,756 | `slot-growth` |
| 1,757 | `gdp-history` |
| 1,758 | `gdp-hist-tooltip` |
| 1,759 | `gdp-yoy` |
| 1,760 | `gdp-trend` |
| 1,761 | `gdp-panel` |
| 1,765 | `subj-ring-gdp` |
| 1,767 | `subj-label-gdp` |
| 1,768 | `subj-value-gdp` |
| 1,769 | `subj-say-gdp` |
| 1,770 | `subj-spark-gdp` |
| 1,775 | `subj-ctx-gdp` |
| 1,778 | `gdp-highlights` |
| 1,781 | `sheet-metric-power` |
| 1,782 | `power-timing` |
| 1,783 | `power-head` |
| 1,784 | `power-chart` |
| 1,787 | `subj-ring-resilience` |
| 1,790 | `subj-value-resilience` |
| 1,791 | `subj-say-resilience` |
| 1,796 | `subj-ctx-resilience` |
| 1,800 | `longcycle-title` |
| 1,802 | `longcycle-tag` |
| 1,808 | `power-highlights` |
| 1,811 | `sheet-marker-deficit` |
| 1,813 | `sheet-metric-households` |
| 1,814 | `households-timing` |
| 1,815 | `households-chart` |
| 1,816 | `households-highlights` |
| 1,819 | `sheet-metric-valuation` |
| 1,820 | `valuation-timing` |
| 1,821 | `valuation-head` |
| 1,822 | `valuation-chart` |
| 1,825 | `subj-ring-valuation` |
| 1,828 | `subj-value-valuation` |
| 1,829 | `subj-say-valuation` |
| 1,834 | `subj-ctx-valuation` |
| 1,838 | `valuation-title` |
| 1,840 | `valuation-tag` |
| 1,845 | `valuation-highlights` |
| 1,852 | `subj-value-hormones` |
| 1,853 | `subj-say-hormones` |
| 1,859 | `hormones-history` |
| 1,860 | `hormones-insights` |
| 1,869 | `subj-value-horizon` |
| 1,870 | `subj-say-horizon` |
| 1,871 | `subj-spark-horizon` |
| 1,877 | `hzn-timeline` |
| 1,879 | `hzn-head` |
| 1,880 | `spread-history-shell` |
| 1,881 | `spread-history-svg` |
| 1,882 | `spread-history-tooltip` |
| 1,884 | `hzn-trend` |
| 1,886 | `horizon-insights` |
| 1,895 | `subj-value-pressure` |
| 1,896 | `subj-say-pressure` |
| 1,902 | `pressure-timeline` |
| 1,904 | `pressure-head` |
| 1,905 | `ylm-shell` |
| 1,906 | `ylm-svg` |
| 1,907 | `ylm-tooltip` |
| 1,909 | `ylm-trend` |
| 1,911 | `pressure-insights` |
| 1,918 | `subj-ring-sentiment` |
| 1,921 | `subj-value-sentiment` |
| 1,922 | `subj-say-sentiment` |
| 1,923 | `subj-spark-sentiment` |
| 1,929 | `fear-history` |
| 1,930 | `curve-highlights` |
| 1,936 | `signs-list` |
| 1,942 | `calendar-list` |
| 1,943 | `rhymes-card` |
| 1,952 | `rhy-pick` |
| 1,953 | `rhy-body` |
| 1,961 | `cycle-list` |
| 1,962 | `cycle-more` |
| 1,963 | `cycle-more-label` |
| 1,968 | `calendar-cycle` |
| 1,969 | `calendar-cycle-slot` |
| 1,970 | `cycle-cats` |
| 2,003 | `seasons-kicker` |
| 2,004 | `seasons-rows` |
| 2,008 | `framework-kicker` |
| 2,010 | `framework-rows` |
| 2,015 | `more-menu` |
| 2,018 | `menu-back` |
| 2,032 | `sources-open` |
| 2,040 | `appearance-current` |
| 2,046 | `sheet-howto` |
| 2,089 | `sheet-book` |
| 2,117 | `sheet-appearance` |
| 2,125 | `theme-toggle` |
| 2,132 | `sheet-contact` |
| 2,141 | `contact-form` |
| 2,142 | `contact-title` |
| 2,143 | `contact-message` |
| 2,145 | `contact-hint` |
| 2,146 | `contact-send` |
| 2,152 | `sheet-sources` |
| 2,155 | `sources-back` |
| 2,160 | `asof-text` |
| 2,161 | `sources-groups` |
| 2,167 | `detail-backdrop` |
| 2,169 | `detail-modal-close` |
| 2,170 | `detail-modal-body` |

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

