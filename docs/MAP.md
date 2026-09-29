# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,938 lines**, about 1248 KB, roughly **355 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `c6b4709` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,108 | the whole stylesheet, every token and rule |
| **Markup** | 3,109–3,894 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,895–14,885 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,886–14,938 | </body></html> |

Counts: **290** top-level functions, **183** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 3,895_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,910 | `byId` | `function byId(` |
| 3,918 | `byIdMaybe` | `function byIdMaybe(` |
| 3,925 | `put` | `function put(` |
| 3,932 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 3,936_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,940 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,941 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,942 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,960 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,964 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,969_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,979 | `wheelMeta` | `var wheelMeta =` |
| 3,990 | `seasonOverride` | `var seasonOverride =` |
| 3,993 | `cycleNowNote` | `var cycleNowNote =` |
| 4,002 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,088 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,133 | `gdpLevels` | `var gdpLevels =` |
| 4,161 | `fedFundsHistory` | `var fedFundsHistory =` |
| 4,162 | `fearCurveHistory` | `var fearCurveHistory =` |
| 4,170 | `fiscalHistory` | `var fiscalHistory =` |
| 4,176 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |

### Version 528: live data without a render refactor

_line 4,178_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,197 | `merge` | `function merge(` |
| 4,204 | `LIVE` | `function LIVE(` |
| 4,228 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,231_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,284 | `paintReading` | `function paintReading(` |
| 4,307 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,331 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,341 | `repaintPressureRow` | `function repaintPressureRow(` |
| 4,347 | `repaintPressureChart` | `function repaintPressureChart(` |
| 4,351 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY (Version 629)

_line 4,356_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,384 | `READINGS` | `var READINGS =` |
| 4,455 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 4,456 | `KINDS` | `var KINDS =` |
| 4,457 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 4,478 | `receive` | `function receive(` |
| 4,502 | `liveAsOf` | `var liveAsOf =` |
| 4,503 | `fmtAsOf` | `function fmtAsOf(` |
| 4,516 | `applyLive` | `function applyLive(` |
| 4,531 | `shapeOk` | `function shapeOk(` |
| 4,541 | `repaintPolicy` | `function repaintPolicy(` |
| 4,593 | `GYN` | `var GYN =` |
| 4,630 | `refreshLiveData` | `function refreshLiveData(` |
| 4,659 | `fetchSiteData` | `function fetchSiteData(` |
| 4,675 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,689_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,690 | `yieldCurve` | `var yieldCurve =` |
| 4,699 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 4,700 | `curveAsOf` | `function curveAsOf(` |
| 4,711 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,735 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,747 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,775_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,780 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,804 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,828 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,852 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,879 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,904_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,913 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,923 | `uninvLagToday` | `var uninvLagToday =` |
| 4,935 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,948 | `gdpPeers` | `var gdpPeers =` |
| 4,989 | `gdpSrc` | `var gdpSrc =` |
| 4,990 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,995 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 5,008 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 5,050_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,072 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 5,082_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,098 | `stressScoreFor` | `function stressScoreFor(` |
| 5,104 | `stressScore` | `var stressScore =` |
| 5,110 | `powerOf` | `var powerOf =` |
| 5,111 | `powerScore` | `var powerScore =` |
| 5,128 | `stressHistory` | `var stressHistory =` |
| 5,141 | `powerMeter` | `var powerMeter =` |
| 5,143 | `stressNoteFull` | `var stressNoteFull =` |
| 5,178 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,180_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,203 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,204 | `deficitHistory` | `var deficitHistory =` |
| 5,207 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,214 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,216 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,259_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,272 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,285_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,299 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,302 | `timelineSpan` | `function timelineSpan(` |
| 5,308 | `timelineFor` | `function timelineFor(` |
| 5,321 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,327_ · 32 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,333 | `windowScale` | `function windowScale(` |
| 5,349 | `windowYears` | `function windowYears(` |
| 5,367 | `refName` | `function refName(` |
| 5,374 | `histReadEnsure` | `function histReadEnsure(` |
| 5,413 | `seatBandReading` | `function seatBandReading(` |
| 5,436 | `histReadFill` | `function histReadFill(` |
| 5,564 | `histAxisEnds` | `function histAxisEnds(` |
| 5,575 | `histLegend` | `function histLegend(` |
| 5,663 | `refitHistory` | `function refitHistory(` |
| 5,675 | `wireHistHover` | `function wireHistHover(` |
| 5,755 | `mWindowFrom` | `function mWindowFrom(` |
| 5,760 | `qWindowFrom` | `function qWindowFrom(` |
| 5,765 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,766 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,768 | `DEF_1983` | `var DEF_1983 =` |
| 5,770 | `defFrom` | `function defFrom(` |
| 5,781 | `deficitChart` | `function deficitChart(` |
| 5,870 | `deficitBlock` | `function deficitBlock(` |
| 5,932 | `buffettHistory` | `var buffettHistory =` |
| 5,962 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,963 | `hyDates` | `var hyDates =` |
| 5,964 | `hyOas` | `var hyOas =` |
| 5,965 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,972 | `hyAt` | `function hyAt(` |
| 5,976 | `hyLabel` | `function hyLabel(` |
| 5,977 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,978 | `hyNum` | `function hyNum(` |
| 5,979 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,989 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,999 | `capeHistory` | `var capeHistory =` |
| 6,001 | `longCycleSrc` | `var longCycleSrc =` |
| 6,020 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 6,043_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,049 | `sentiment` | `var sentiment =` |
| 6,067 | `valuation` | `var valuation =` |
| 6,104 | `valRow` | `function valRow(` |
| 6,112 | `coincident` | `var coincident =` |
| 6,173 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,191 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,192 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,193 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,195_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,208 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,209 | `m2vHistory` | `var m2vHistory =` |
| 6,229 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,321 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,410 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,411 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,451_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,457 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,458 | `DOTS` | `var DOTS =` |
| 6,465 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,500 | `headPickRow` | `function headPickRow(` |
| 6,506 | `histHead` | `function histHead(` |
| 6,530 | `headNoteIdx` | `var headNoteIdx =` |
| 6,531 | `headMenuHtml` | `function headMenuHtml(` |
| 6,589 | `headMenuFor` | `var headMenuFor =` |
| 6,591 | `headSubFor` | `var headSubFor =` |
| 6,592 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,641 | `nameWithMark` | `function nameWithMark(` |
| 6,647 | `panelRow` | `function panelRow(` |
| 6,680 | `panelFromMeter` | `function panelFromMeter(` |
| 6,694 | `meterFlagged` | `function meterFlagged(` |
| 6,705 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,733 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,747 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,766 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,785 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,799 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,824 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,855 | `desireBlock` | `function desireBlock(` |
| 6,882 | `volumeBlock` | `function volumeBlock(` |
| 6,907 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,930 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,938_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,951 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,952 | `m2Level` | `var m2Level =` |
| 6,974 | `m2Yoy` | `var m2Yoy =` |
| 6,975 | `M2_NORM` | `var M2_NORM =` |
| 6,980 | `volumeVerdict` | `function volumeVerdict(` |
| 7,017 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 7,018 | `unempHistory` | `var unempHistory =` |
| 7,024 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 7,039 | `NROU_NOW` | `var NROU_NOW =` |
| 7,040 | `unempState` | `function unempState(` |
| 7,046 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones — the policy rate's history

_line 7,108_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,117 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 7,128 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,195 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,196 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,199 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,207_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,222 | `householdsChart` | `function householdsChart(` |
| 7,289 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,372 | `GDP_NORM` | `var GDP_NORM =` |
| 7,378 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,379 | `gdpNowQ` | `var gdpNowQ =` |
| 7,380 | `gdpMeter` | `var gdpMeter =` |
| 7,383 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,405 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,469 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,532 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,540 | `velocityVerdict` | `function velocityVerdict(` |
| 7,548 | `derivePulseTag` | `function derivePulseTag(` |
| 7,554 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,614_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,623 | `seasonReading` | `var seasonReading =` |
| 7,672 | `frameworkRows` | `var frameworkRows =` |
| 7,682 | `vixRow` | `var vixRow =` |
| 7,690 | `vixWordOf` | `var vixWordOf =` |
| 7,694 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,709_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,713 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,722_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,723 | `calendarTodayY` | `var calendarTodayY =` |
| 7,754 | `vix3mClose` | `var vix3mClose =` |
| 7,755 | `fearCurve` | `function fearCurve(` |
| 7,762 | `curveVerdict` | `function curveVerdict(` |
| 7,769 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,774 | `valuationVerdict` | `function valuationVerdict(` |
| 7,792 | `sparkHtml` | `function sparkHtml(` |
| 7,811 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,817_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,830 | `modeBar` | `function modeBar(` |
| 7,845 | `pickerOpen` | `var pickerOpen =` |
| 7,849 | `cycleByName` | `function cycleByName(` |
| 7,853 | `openCycle` | `function openCycle(` |
| 7,859 | `cycleSlice` | `function cycleSlice(` |
| 7,868 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,876 | `cycleMonths` | `function cycleMonths(` |
| 7,895 | `histControls` | `function histControls(` |
| 7,909 | `cycLabel` | `function cycLabel(` |
| 7,925 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,934 | `cyclePicker` | `function cyclePicker(` |
| 7,953 | `rangeBar` | `function rangeBar(` |
| 7,965 | `trendOf` | `function trendOf(` |
| 8,010 | `TREND_ARROW` | `var TREND_ARROW =` |
| 8,020 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 8,041_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,042 | `yearOf` | `function yearOf(` |
| 8,043 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 8,044_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,082 | `headSigma` | `function headSigma(` |
| 8,090 | `atQuarter` | `function atQuarter(` |
| 8,091 | `atMonth` | `function atMonth(` |
| 8,092 | `cycleAverages` | `function cycleAverages(` |
| 8,099 | `ordinal` | `function ordinal(` |
| 8,100 | `hiCard` | `function hiCard(` |
| 8,111 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,125_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,132 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,148 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,155 | `moreRow` | `function moreRow(` |
| 8,161 | `powerPageNote` | `var powerPageNote =` |
| 8,162 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,174_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,177 | `xLabelOf` | `function xLabelOf(` |
| 8,197 | `fitGroup` | `function fitGroup(` |
| 8,219 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,278_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,302 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,312 | `vGrid` | `function vGrid(` |
| 8,337 | `COL_FILL` | `var COL_FILL =` |
| 8,370 | `colPath` | `function colPath(` |
| 8,375 | `colWidth` | `function colWidth(` |
| 8,422 | `AXIS` | `var AXIS =` |
| 8,438 | `histFrame` | `function histFrame(` |
| 8,450 | `xLabel` | `function xLabel(` |
| 8,454 | `crossLine` | `function crossLine(` |
| 8,459 | `zeroRule` | `function zeroRule(` |
| 8,462 | `meanRule` | `function meanRule(` |
| 8,474 | `pendingGeom` | `var pendingGeom =` |
| 8,475 | `publishGeom` | `function publishGeom(` |
| 8,476 | `attachHistory` | `function attachHistory(` |
| 8,491 | `histBar` | `function histBar(` |
| 8,494 | `histTip` | `function histTip(` |
| 8,497 | `avgRule` | `function avgRule(` |
| 8,500 | `vhOpen` | `function vhOpen(` |
| 8,501 | `chartAxes` | `function chartAxes(` |
| 8,561 | `divergeChart` | `function divergeChart(` |
| 8,629 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,658_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,666 | `maxIn` | `function maxIn(` |
| 8,684 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,698 | `PEEK_W` | `var PEEK_W =` |
| 8,701 | `PEEK_H` | `var PEEK_H =` |
| 8,706 | `colPeek` | `function colPeek(` |
| 8,733 | `meterPeek` | `function meterPeek(` |
| 8,750 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,755 | `pressureZone` | `function pressureZone(` |
| 8,770 | `HZN_BACK` | `var HZN_BACK =` |
| 8,771 | `hznLast` | `function hznLast(` |
| 8,772 | `hznBack` | `function hznBack(` |
| 8,773 | `horizonWord` | `function horizonWord(` |
| 8,798 | `HZN_METERS` | `var HZN_METERS =` |
| 8,806 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,847 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,852 | `RISK_RISK` | `var RISK_RISK =` |
| 8,857 | `riskCell` | `function riskCell(` |
| 8,858 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,889 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,914_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,935 | `pulseClipN` | `var pulseClipN =` |
| 8,936 | `beatPath` | `function beatPath(` |
| 8,961 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,975 | `pulsePeek` | `function pulsePeek(` |
| 8,983 | `pulseBlock` | `function pulseBlock(` |
| 9,003 | `CHEV` | `var CHEV =` |
| 9,005 | `peekCard` | `function peekCard(` |
| 9,059 | `dropSvg` | `function dropSvg(` |
| 9,076 | `volumeSvg` | `function volumeSvg(` |
| 9,084 | `gaugeSvg` | `function gaugeSvg(` |
| 9,088 | `diamondSvg` | `function diamondSvg(` |
| 9,102 | `energyFromReserve` | `function energyFromReserve(` |
| 9,114 | `sproutSvg` | `function sproutSvg(` |
| 9,125 | `markSvg` | `function markSvg(` |
| 9,133 | `hormoneSvg` | `function hormoneSvg(` |
| 9,139 | `flameSvg` | `function flameSvg(` |
| 9,143 | `gearSvg` | `function gearSvg(` |
| 9,155 | `thermoSvg` | `function thermoSvg(` |
| 9,174 | `trendUpSvg` | `function trendUpSvg(` |
| 9,176 | `ecgSvg` | `function ecgSvg(` |
| 9,190 | `circulationSvg` | `function circulationSvg(` |
| 9,191 | `weatherSvg` | `function weatherSvg(` |
| 9,212 | `moodSvg` | `function moodSvg(` |
| 9,236 | `boltSvg` | `function boltSvg(` |
| 9,239 | `houseSvg` | `function houseSvg(` |
| 9,247 | `sunriseSvg` | `function sunriseSvg(` |
| 9,262 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,273 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,290_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,311 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,312 | `dsrHistory` | `var dsrHistory =` |
| 9,313 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,314 | `savHistory` | `var savHistory =` |
| 9,319 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,329 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,330 | `dsrNow` | `var dsrNow =` |
| 9,331 | `savNow` | `var savNow =` |
| 9,332 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,337 | `householdsWord` | `function householdsWord(` |
| 9,344 | `householdsNow` | `var householdsNow =` |
| 9,351 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,352 | `dsrMeter` | `var dsrMeter =` |
| 9,355 | `savMeter` | `var savMeter =` |
| 9,358 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,375 | `savInfoHtml` | `function savInfoHtml(` |
| 9,393 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,402 | `curveNow` | `var curveNow =` |
| 9,403 | `curveTag` | `var curveTag =` |
| 9,404 | `curveSub` | `var curveSub =` |
| 9,408 | `curvePct` | `function curvePct(` |
| 9,409 | `curveNoteFull` | `var curveNoteFull =` |
| 9,424 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,432 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,473 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,501_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,515 | `marketTops` | `var marketTops =` |
| 9,525 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,530 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,532_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,553 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,554 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,559_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,580 | `slopeOf` | `function slopeOf(` |
| 9,591 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,597 | `readSeason` | `function readSeason(` |
| 9,622 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,624 | `qLabel` | `function qLabel(` |
| 9,648 | `regimeTrack` | `function regimeTrack(` |
| 9,671 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,673_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,680 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,681 | `seasonTitle` | `function seasonTitle(` |
| 9,682 | `monthLabel` | `function monthLabel(` |
| 9,683 | `cycleModel` | `function cycleModel(` |
| 9,735 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,743 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,750 | `nowModel` | `var nowModel =` |
| 9,751 | `readingNow` | `var readingNow =` |
| 9,752 | `cpiNow` | `var cpiNow =` |
| 9,753 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,754 | `currentSeason` | `var currentSeason =` |
| 9,755 | `seasonWhy` | `var seasonWhy =` |
| 9,772 | `seasonGroup` | `function seasonGroup(` |
| 9,786 | `arcGauge` | `function arcGauge(` |
| 9,828 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,841 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,845 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,847 | `spreadLabel` | `function spreadLabel(` |
| 9,854 | `policyFacts` | `function policyFacts(` |
| 9,868 | `policyFactRows` | `function policyFactRows(` |
| 9,874 | `allSources` | `var allSources =` |
| 9,898 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,931_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,934 | `SVG_NS` | `var SVG_NS =` |
| 9,935 | `svgEl` | `function svgEl(` |
| 9,948 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,984_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,985 | `clampPct` | `function clampPct(` |
| 9,992 | `infoIcon` | `function infoIcon(` |
| 10,001 | `detailTexts` | `var detailTexts =` |
| 10,019 | `detailSlots` | `var detailSlots =` |
| 10,020 | `detailSlot` | `function detailSlot(` |
| 10,031 | `powerPanelHtml` | `var powerPanelHtml =` |
| 10,035 | `_growthPanel` | `var _growthPanel =` |
| 10,036 | `growthPanelHtml` | `function growthPanelHtml(` |
| 10,042 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 10,053 | `facts` | `function facts(` |
| 10,054 | `factsFrom` | `function factsFrom(` |
| 10,058 | `expandBtn` | `function expandBtn(` |
| 10,064 | `sheetRenderers` | `var sheetRenderers =` |
| 10,081 | `pageMode` | `var pageMode =` |
| 10,088 | `pageCycles` | `var pageCycles =` |
| 10,093 | `pageRange` | `var pageRange =` |
| 10,099 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,133_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,144 | `meterHtml` | `function meterHtml(` |
| 10,174 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW (Version 631)

_line 10,175_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,183 | `subjectRow` | `function subjectRow(` |
| 10,195 | `subjectIcon` | `function subjectIcon(` |
| 10,196 | `srcHtml` | `function srcHtml(` |
| 10,205 | `TIMING` | `var TIMING =` |
| 10,211 | `timingMark` | `function timingMark(` |
| 10,225 | `timingPill` | `function timingPill(` |
| 10,246 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,254 | `seatPageFoot` | `function seatPageFoot(` |
| 10,277 | `timingMembers` | `var timingMembers =` |
| 10,278 | `registerTiming` | `function registerTiming(` |
| 10,284 | `headHtml` | `function headHtml(` |
| 10,302 | `heldHighlights` | `var heldHighlights =` |
| 10,303 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time (V639)

_line 10,361_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,373 | `CURVE_KEY` | `var CURVE_KEY =` |
| 10,374 | `latestYieldPoint` | `function latestYieldPoint(` |
| 10,382 | `withLatestPoint` | `function withLatestPoint(` |
| 10,387 | `renderPressurePage` | `function renderPressurePage(` |

### V640: Pressure's Insights

_line 10,806_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,815 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,852_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,853 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 11,075_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,076 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 11,108_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,118 | `drawHznHead` | `function drawHznHead(` |
| 11,133 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,211_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,212 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,230_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,233 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,256_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,268 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,402_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,403 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,527_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,530 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,653_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,665 | `totalRiseIn` | `function totalRiseIn(` |
| 11,675 | `eraInflation` | `function eraInflation(` |
| 11,686 | `eraGrowth` | `function eraGrowth(` |
| 11,706 | `fmtSigned` | `function fmtSigned(` |
| 11,711 | `regimeArrow` | `function regimeArrow(` |
| 11,717 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,718 | `growthShown` | `function growthShown(` |
| 11,719 | `growthShownCap` | `function growthShownCap(` |
| 11,720 | `regimeState` | `function regimeState(` |
| 11,724 | `phaseClass` | `function phaseClass(` |
| 11,726 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,738 | `cycleViewEl` | `var cycleViewEl =` |
| 11,744 | `tempCard` | `var tempCard =` |
| 11,745 | `placeCharts` | `function placeCharts(` |
| 11,750 | `shownEra` | `var shownEra =` |
| 11,751 | `calendarReset` | `var calendarReset =` |
| 11,752 | `metricPageReset` | `var metricPageReset =` |
| 11,753 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,756 | `topbarBack` | `var topbarBack =` |
| 11,757 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,764_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,765 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,926_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,927 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,945_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,948 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,969_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,975 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,978 | `hubSet` | `function hubSet(` |
| 11,991 | `quarterPopup` | `function quarterPopup(` |
| 12,024 | `hubShowDefault` | `function hubShowDefault(` |
| 12,033 | `hubShowQuarter` | `function hubShowQuarter(` |
| 12,039 | `hubShowYear` | `function hubShowYear(` |
| 12,054 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,146_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,149 | `tempState` | `var tempState =` |
| 12,152 | `chartLink` | `var chartLink =` |
| 12,172 | `m2Step` | `function m2Step(` |
| 12,175 | `heatStep` | `function heatStep(` |
| 12,179 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,366_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,369 | `drawGrowth` | `function drawGrowth(` |
| 12,508 | `wireResize` | `function wireResize(` |
| 12,514 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,526_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,527 | `renderCycleView` | `function renderCycleView(` |
| 12,588 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,596_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,607 | `peerChosen` | `function peerChosen(` |
| 12,608 | `peerReaches` | `function peerReaches(` |
| 12,638 | `shownEraModel` | `var shownEraModel =` |
| 12,639 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,641_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,643 | `stripGroupName` | `var stripGroupName =` |
| 12,644 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,690 | `marketStripHtml` | `function marketStripHtml(` |
| 12,753 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,754 | `settleStrips` | `function settleStrips(` |
| 12,789 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES (Version 630)

_line 13,068_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,082 | `partsOf` | `function partsOf(` |
| 13,091 | `discOf` | `function discOf(` |
| 13,098 | `authored` | `function authored(` |
| 13,104 | `registerRoster` | `function registerRoster(` |
| 13,146 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER (Version 630)

_line 13,158_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,167 | `NAV` | `var NAV =` |
| 13,168 | `buildNav` | `function buildNav(` |

### ALL INDICATORS (Version 630)

_line 13,282_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,286 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories (Version 630)

_line 13,346_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,349 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES (Version 630)

_line 13,840_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,844 | `renderMetricPages` | `function renderMetricPages(` |

### GDP growth

_line 14,282_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,337 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,369_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,370 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,470_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,482 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,525_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,533 | `__roster` | `var __roster =` |
| 14,534 | `readingRoster` | `function readingRoster(` |
| 14,589 | `readFig` | `function readFig(` |
| 14,597 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612)

_line 14,604_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,632 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,685_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,686 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,746_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,747 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,780_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,781 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,191–4,194 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,779–8,792 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,631–9,644 | `seasonTrackAll` | The season, computed |
| 9,666–9,670 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 14,069 |
| `desire-range` | 10,710 |
| `fear-range` | 11,492 |
| `hormones-range` | 11,302 |
| `hzn-range` | 11,161 |
| `pressure-range` | 4,349 |
| `pulse-range` | 10,666 |
| `sheet-marker-deficit` | 14,066 |
| `sheet-metric-gdp` | 13,958 |
| `sheet-metric-households` | 14,096 |
| `sheet-metric-power` | 14,030 |
| `sheet-metric-temp` | 13,913 |
| `sheet-metric-valuation` | 14,140 |
| `sheet-sign-activity` | 14,014 |
| `sheet-sign-desire` | 10,711 |
| `sheet-sign-horizon` | 11,162 |
| `sheet-sign-hormones` | 11,305 |
| `sheet-sign-pressure` | 10,787 |
| `sheet-sign-pulse` | 10,665 |
| `sheet-sign-sentiment` | 11,497 |
| `sheet-sign-volume` | 10,686 |
| `volume-range` | 10,687 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 14,075 |
| `desire-range` | 10,695 |
| `fear-range` | 11,449 |
| `hzn-range` | 11,143 |
| `pressure-range` | 10,744 |
| `pulse-range` | 10,649 |
| `sheet-metric-gdp` | 13,959 |
| `sheet-metric-power` | 14,031 |
| `sheet-metric-temp` | 13,914 |
| `sheet-metric-valuation` | 14,141 |
| `volume-range` | 10,670 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,472 |
| `sheet-metric-gdp` | 6,473 |
| `sheet-sign-activity` | 6,480 |
| `sheet-metric-power` | 6,481 |
| `sheet-metric-valuation` | 6,483 |
| `sheet-metric-households` | 6,484 |
| `deficit-range` | 6,485 |
| `volume-range` | 6,486 |
| `pulse-range` | 6,487 |
| `hzn-range` | 6,492 |
| `desire-range` | 6,493 |
| `fear-range` | 6,494 |
| `hormones-range` | 6,495 |
| `pressure-range` | 6,496 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 192 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 325 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 423 | yearly calendar — one card per year, grouped into five eras |
| 430 | season strip |
| 483 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels … so if one day |
| 652 | tab bar (app-style segmented navigation) |
| 719 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 758 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 944 | journal (editorial content tab) |
| 950 | content tab: reading companion |
| 1,008 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,480 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,514 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,524 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,535 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,568 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,744 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,921 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,459 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,500 | Rhymes (Version 610): today beside one past top |
| 2,541 | A closed cycle's categories (Version 613) |
| 2,571 | hero: yield curve |
| 2,648 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,727 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,826 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,851 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,866 | long cycle (structural layer) |
| 2,907 | indicator grid |
| 2,950 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,966 | info icon + popover (progressive disclosure for longer notes) |
| 2,987 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,082 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (145), which is what the renderers fill:

| Line | id |
|---|---|
| 3,114 | `topbar-back` |
| 3,117 | `topbar-title` |
| 3,118 | `menu-btn` |
| 3,135 | `main` |
| 3,142 | `cycle-view` |
| 3,150 | `cycle-kicker` |
| 3,156 | `cycle-dial` |
| 3,158 | `season-wheel-hub-date` |
| 3,159 | `season-wheel-hub-theme` |
| 3,160 | `season-wheel-hub-detail` |
| 3,168 | `temp-card` |
| 3,170 | `temp-kicker` |
| 3,171 | `temp-sub` |
| 3,174 | `temp-svg` |
| 3,175 | `temp-tooltip` |
| 3,181 | `temp-stats` |
| 3,188 | `growth-card` |
| 3,191 | `growth-kicker` |
| 3,191 | `growth-phase` |
| 3,191 | `growth-sub` |
| 3,192 | `growth-svg` |
| 3,192 | `growth-tooltip` |
| 3,197 | `growth-stats` |
| 3,206 | `today-analysis` |
| 3,210 | `peek-row` |
| 3,214 | `sheet-metric-temp` |
| 3,215 | `temp-timing` |
| 3,216 | `temp-chart` |
| 3,218 | `temp-rangebar` |
| 3,220 | `temp-head` |
| 3,221 | `slot-temp` |
| 3,222 | `temp-history` |
| 3,223 | `temp-hist-tooltip` |
| 3,226 | `temp-trend` |
| 3,230 | `temp-highlights` |
| 3,233 | `sheet-metric-gdp` |
| 3,234 | `gdp-timing` |
| 3,235 | `gdp-chart` |
| 3,236 | `gdp-rangebar` |
| 3,238 | `gdp-head` |
| 3,239 | `slot-growth` |
| 3,240 | `gdp-history` |
| 3,241 | `gdp-hist-tooltip` |
| 3,242 | `gdp-yoy` |
| 3,252 | `gdp-trend` |
| 3,254 | `gdp-panel` |
| 3,259 | `subj-ring-gdp` |
| 3,261 | `subj-label-gdp` |
| 3,262 | `subj-value-gdp` |
| 3,263 | `subj-say-gdp` |
| 3,264 | `subj-spark-gdp` |
| 3,269 | `subj-ctx-gdp` |
| 3,272 | `gdp-highlights` |
| 3,280 | `sheet-metric-power` |
| 3,281 | `power-timing` |
| 3,282 | `power-head` |
| 3,283 | `power-chart` |
| 3,287 | `subj-ring-resilience` |
| 3,290 | `subj-value-resilience` |
| 3,291 | `subj-say-resilience` |
| 3,296 | `subj-ctx-resilience` |
| 3,300 | `longcycle-title` |
| 3,302 | `longcycle-tag` |
| 3,316 | `power-highlights` |
| 3,323 | `sheet-marker-deficit` |
| 3,329 | `sheet-metric-households` |
| 3,330 | `households-timing` |
| 3,331 | `households-chart` |
| 3,332 | `households-highlights` |
| 3,336 | `sheet-metric-valuation` |
| 3,337 | `valuation-timing` |
| 3,338 | `valuation-head` |
| 3,339 | `valuation-chart` |
| 3,343 | `subj-ring-valuation` |
| 3,346 | `subj-value-valuation` |
| 3,347 | `subj-say-valuation` |
| 3,352 | `subj-ctx-valuation` |
| 3,356 | `valuation-title` |
| 3,358 | `valuation-tag` |
| 3,365 | `valuation-highlights` |
| 3,389 | `subj-value-hormones` |
| 3,390 | `subj-say-hormones` |
| 3,398 | `hormones-history` |
| 3,408 | `hormones-insights` |
| 3,434 | `subj-value-horizon` |
| 3,435 | `subj-say-horizon` |
| 3,436 | `subj-spark-horizon` |
| 3,446 | `hzn-timeline` |
| 3,448 | `hzn-head` |
| 3,449 | `spread-history-shell` |
| 3,450 | `spread-history-svg` |
| 3,451 | `spread-history-tooltip` |
| 3,458 | `hzn-trend` |
| 3,460 | `horizon-insights` |
| 3,488 | `subj-value-pressure` |
| 3,489 | `subj-say-pressure` |
| 3,495 | `pressure-timeline` |
| 3,497 | `pressure-head` |
| 3,498 | `ylm-shell` |
| 3,499 | `ylm-svg` |
| 3,500 | `ylm-tooltip` |
| 3,502 | `ylm-trend` |
| 3,508 | `pressure-insights` |
| 3,515 | `subj-ring-sentiment` |
| 3,518 | `subj-value-sentiment` |
| 3,519 | `subj-say-sentiment` |
| 3,520 | `subj-spark-sentiment` |
| 3,534 | `fear-history` |
| 3,535 | `curve-highlights` |
| 3,549 | `signs-list` |
| 3,560 | `calendar-list` |
| 3,573 | `rhymes-card` |
| 3,584 | `rhy-pick` |
| 3,585 | `rhy-body` |
| 3,632 | `cycle-list` |
| 3,638 | `cycle-more` |
| 3,639 | `cycle-more-label` |
| 3,648 | `calendar-cycle` |
| 3,649 | `calendar-cycle-slot` |
| 3,656 | `cycle-cats` |
| 3,707 | `seasons-kicker` |
| 3,708 | `seasons-rows` |
| 3,712 | `framework-kicker` |
| 3,714 | `framework-rows` |
| 3,721 | `more-menu` |
| 3,724 | `menu-back` |
| 3,738 | `sources-open` |
| 3,746 | `appearance-current` |
| 3,754 | `sheet-howto` |
| 3,798 | `sheet-book` |
| 3,830 | `sheet-appearance` |
| 3,838 | `theme-toggle` |
| 3,845 | `sheet-contact` |
| 3,854 | `contact-form` |
| 3,855 | `contact-title` |
| 3,856 | `contact-message` |
| 3,858 | `contact-hint` |
| 3,859 | `contact-send` |
| 3,868 | `sheet-sources` |
| 3,871 | `sources-back` |
| 3,878 | `asof-text` |
| 3,879 | `sources-groups` |
| 3,886 | `detail-backdrop` |
| 3,888 | `detail-modal-close` |
| 3,889 | `detail-modal-body` |

## Finding things fast

| To find | grep for |
|---|---|
| a figure's literal value | `var <name> = ` — the data objects are all top-level vars in the DATA section |
| what a history page draws | `HIST_HEAD` for its head, then `sheetRenderers["<id>"]` for its renderer |
| where a band comes from | the constant name, then read its `(i)` text — every band states its provenance |
| a season decision | `readSeason(`, `seasonTrackAll`, `cycleModel(` |
| why something looks the way it does | `Version ` — comments naming a version and quoting Keren are decisions |
| a live-data wiring | `LIVE("` — one line per document, each directly under its literal |
| a CSS rule's only home | the class name; rules under `.detail-modal`, `.metric-sheet`, `.sign-detail` are scoped and must be restated for a new host |

