# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,932 lines**, about 1247 KB, roughly **354 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `8160884` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,108 | the whole stylesheet, every token and rule |
| **Markup** | 3,109–3,894 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,895–14,879 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,880–14,932 | </body></html> |

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

_line 3,969_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,979 | `wheelMeta` | `var wheelMeta =` |
| 3,990 | `seasonOverride` | `var seasonOverride =` |
| 3,993 | `cycleNowNote` | `var cycleNowNote =` |
| 4,002 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,088 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,133 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,146_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,165 | `merge` | `function merge(` |
| 4,172 | `LIVE` | `function LIVE(` |
| 4,196 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,199_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,252 | `paintReading` | `function paintReading(` |
| 4,275 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,299 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,309 | `repaintPressureRow` | `function repaintPressureRow(` |
| 4,315 | `repaintPressureChart` | `function repaintPressureChart(` |
| 4,319 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY (Version 629)

_line 4,324_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,352 | `READINGS` | `var READINGS =` |
| 4,423 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 4,424 | `KINDS` | `var KINDS =` |
| 4,425 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 4,446 | `receive` | `function receive(` |
| 4,470 | `liveAsOf` | `var liveAsOf =` |
| 4,471 | `fmtAsOf` | `function fmtAsOf(` |
| 4,484 | `applyLive` | `function applyLive(` |
| 4,499 | `shapeOk` | `function shapeOk(` |
| 4,509 | `repaintPolicy` | `function repaintPolicy(` |
| 4,561 | `GYN` | `var GYN =` |
| 4,598 | `refreshLiveData` | `function refreshLiveData(` |
| 4,627 | `fetchSiteData` | `function fetchSiteData(` |
| 4,643 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,657_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,658 | `yieldCurve` | `var yieldCurve =` |
| 4,667 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 4,668 | `curveAsOf` | `function curveAsOf(` |
| 4,679 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,703 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,715 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,743_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,748 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,772 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,796 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,820 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,847 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,872_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,881 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,891 | `uninvLagToday` | `var uninvLagToday =` |
| 4,903 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,916 | `gdpPeers` | `var gdpPeers =` |
| 4,957 | `gdpSrc` | `var gdpSrc =` |
| 4,958 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,963 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,976 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 5,018_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,040 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 5,050_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,066 | `stressScoreFor` | `function stressScoreFor(` |
| 5,072 | `stressScore` | `var stressScore =` |
| 5,078 | `powerOf` | `var powerOf =` |
| 5,079 | `powerScore` | `var powerScore =` |
| 5,096 | `stressHistory` | `var stressHistory =` |
| 5,109 | `powerMeter` | `var powerMeter =` |
| 5,111 | `stressNoteFull` | `var stressNoteFull =` |
| 5,146 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,148_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,171 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,172 | `deficitHistory` | `var deficitHistory =` |
| 5,175 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,182 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,184 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,227 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,228 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,236 | `fiscalHistory` | `var fiscalHistory =` |
| 5,242 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |

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
| 9,071 | `volumeSvg` | `function volumeSvg(` |
| 9,078 | `gaugeSvg` | `function gaugeSvg(` |
| 9,082 | `diamondSvg` | `function diamondSvg(` |
| 9,096 | `energyFromReserve` | `function energyFromReserve(` |
| 9,108 | `sproutSvg` | `function sproutSvg(` |
| 9,119 | `markSvg` | `function markSvg(` |
| 9,127 | `hormoneSvg` | `function hormoneSvg(` |
| 9,133 | `flameSvg` | `function flameSvg(` |
| 9,137 | `gearSvg` | `function gearSvg(` |
| 9,149 | `thermoSvg` | `function thermoSvg(` |
| 9,168 | `trendUpSvg` | `function trendUpSvg(` |
| 9,170 | `ecgSvg` | `function ecgSvg(` |
| 9,184 | `circulationSvg` | `function circulationSvg(` |
| 9,185 | `weatherSvg` | `function weatherSvg(` |
| 9,206 | `moodSvg` | `function moodSvg(` |
| 9,230 | `boltSvg` | `function boltSvg(` |
| 9,233 | `houseSvg` | `function houseSvg(` |
| 9,241 | `sunriseSvg` | `function sunriseSvg(` |
| 9,256 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,267 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,284_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,305 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,306 | `dsrHistory` | `var dsrHistory =` |
| 9,307 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,308 | `savHistory` | `var savHistory =` |
| 9,313 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,323 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,324 | `dsrNow` | `var dsrNow =` |
| 9,325 | `savNow` | `var savNow =` |
| 9,326 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,331 | `householdsWord` | `function householdsWord(` |
| 9,338 | `householdsNow` | `var householdsNow =` |
| 9,345 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,346 | `dsrMeter` | `var dsrMeter =` |
| 9,349 | `savMeter` | `var savMeter =` |
| 9,352 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,369 | `savInfoHtml` | `function savInfoHtml(` |
| 9,387 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,396 | `curveNow` | `var curveNow =` |
| 9,397 | `curveTag` | `var curveTag =` |
| 9,398 | `curveSub` | `var curveSub =` |
| 9,402 | `curvePct` | `function curvePct(` |
| 9,403 | `curveNoteFull` | `var curveNoteFull =` |
| 9,418 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,426 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,467 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,495_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,509 | `marketTops` | `var marketTops =` |
| 9,519 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,524 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,526_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,547 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,548 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,553_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,574 | `slopeOf` | `function slopeOf(` |
| 9,585 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,591 | `readSeason` | `function readSeason(` |
| 9,616 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,618 | `qLabel` | `function qLabel(` |
| 9,642 | `regimeTrack` | `function regimeTrack(` |
| 9,665 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,667_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,674 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,675 | `seasonTitle` | `function seasonTitle(` |
| 9,676 | `monthLabel` | `function monthLabel(` |
| 9,677 | `cycleModel` | `function cycleModel(` |
| 9,729 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,737 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,744 | `nowModel` | `var nowModel =` |
| 9,745 | `readingNow` | `var readingNow =` |
| 9,746 | `cpiNow` | `var cpiNow =` |
| 9,747 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,748 | `currentSeason` | `var currentSeason =` |
| 9,749 | `seasonWhy` | `var seasonWhy =` |
| 9,766 | `seasonGroup` | `function seasonGroup(` |
| 9,780 | `arcGauge` | `function arcGauge(` |
| 9,822 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,835 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,839 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,841 | `spreadLabel` | `function spreadLabel(` |
| 9,848 | `policyFacts` | `function policyFacts(` |
| 9,862 | `policyFactRows` | `function policyFactRows(` |
| 9,868 | `allSources` | `var allSources =` |
| 9,892 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,925_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,928 | `SVG_NS` | `var SVG_NS =` |
| 9,929 | `svgEl` | `function svgEl(` |
| 9,942 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,978_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,979 | `clampPct` | `function clampPct(` |
| 9,986 | `infoIcon` | `function infoIcon(` |
| 9,995 | `detailTexts` | `var detailTexts =` |
| 10,013 | `detailSlots` | `var detailSlots =` |
| 10,014 | `detailSlot` | `function detailSlot(` |
| 10,025 | `powerPanelHtml` | `var powerPanelHtml =` |
| 10,029 | `_growthPanel` | `var _growthPanel =` |
| 10,030 | `growthPanelHtml` | `function growthPanelHtml(` |
| 10,036 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 10,047 | `facts` | `function facts(` |
| 10,048 | `factsFrom` | `function factsFrom(` |
| 10,052 | `expandBtn` | `function expandBtn(` |
| 10,058 | `sheetRenderers` | `var sheetRenderers =` |
| 10,075 | `pageMode` | `var pageMode =` |
| 10,082 | `pageCycles` | `var pageCycles =` |
| 10,087 | `pageRange` | `var pageRange =` |
| 10,093 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,127_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,138 | `meterHtml` | `function meterHtml(` |
| 10,168 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW (Version 631)

_line 10,169_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,177 | `subjectRow` | `function subjectRow(` |
| 10,189 | `subjectIcon` | `function subjectIcon(` |
| 10,190 | `srcHtml` | `function srcHtml(` |
| 10,199 | `TIMING` | `var TIMING =` |
| 10,205 | `timingMark` | `function timingMark(` |
| 10,219 | `timingPill` | `function timingPill(` |
| 10,240 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,248 | `seatPageFoot` | `function seatPageFoot(` |
| 10,271 | `timingMembers` | `var timingMembers =` |
| 10,272 | `registerTiming` | `function registerTiming(` |
| 10,278 | `headHtml` | `function headHtml(` |
| 10,296 | `heldHighlights` | `var heldHighlights =` |
| 10,297 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time (V639)

_line 10,355_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,367 | `CURVE_KEY` | `var CURVE_KEY =` |
| 10,368 | `latestYieldPoint` | `function latestYieldPoint(` |
| 10,376 | `withLatestPoint` | `function withLatestPoint(` |
| 10,381 | `renderPressurePage` | `function renderPressurePage(` |

### V640: Pressure's Insights

_line 10,800_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,809 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,846_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,847 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 11,069_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,070 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 11,102_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,112 | `drawHznHead` | `function drawHznHead(` |
| 11,127 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,205_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,206 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,224_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,227 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,250_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,262 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,396_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,397 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,521_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,524 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,647_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,659 | `totalRiseIn` | `function totalRiseIn(` |
| 11,669 | `eraInflation` | `function eraInflation(` |
| 11,680 | `eraGrowth` | `function eraGrowth(` |
| 11,700 | `fmtSigned` | `function fmtSigned(` |
| 11,705 | `regimeArrow` | `function regimeArrow(` |
| 11,711 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,712 | `growthShown` | `function growthShown(` |
| 11,713 | `growthShownCap` | `function growthShownCap(` |
| 11,714 | `regimeState` | `function regimeState(` |
| 11,718 | `phaseClass` | `function phaseClass(` |
| 11,720 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,732 | `cycleViewEl` | `var cycleViewEl =` |
| 11,738 | `tempCard` | `var tempCard =` |
| 11,739 | `placeCharts` | `function placeCharts(` |
| 11,744 | `shownEra` | `var shownEra =` |
| 11,745 | `calendarReset` | `var calendarReset =` |
| 11,746 | `metricPageReset` | `var metricPageReset =` |
| 11,747 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,750 | `topbarBack` | `var topbarBack =` |
| 11,751 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,758_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,759 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,920_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,921 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,939_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,942 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,963_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,969 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,972 | `hubSet` | `function hubSet(` |
| 11,985 | `quarterPopup` | `function quarterPopup(` |
| 12,018 | `hubShowDefault` | `function hubShowDefault(` |
| 12,027 | `hubShowQuarter` | `function hubShowQuarter(` |
| 12,033 | `hubShowYear` | `function hubShowYear(` |
| 12,048 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,140_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,143 | `tempState` | `var tempState =` |
| 12,146 | `chartLink` | `var chartLink =` |
| 12,166 | `m2Step` | `function m2Step(` |
| 12,169 | `heatStep` | `function heatStep(` |
| 12,173 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,360_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,363 | `drawGrowth` | `function drawGrowth(` |
| 12,502 | `wireResize` | `function wireResize(` |
| 12,508 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,520_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,521 | `renderCycleView` | `function renderCycleView(` |
| 12,582 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,590_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,601 | `peerChosen` | `function peerChosen(` |
| 12,602 | `peerReaches` | `function peerReaches(` |
| 12,632 | `shownEraModel` | `var shownEraModel =` |
| 12,633 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,635_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,637 | `stripGroupName` | `var stripGroupName =` |
| 12,638 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,684 | `marketStripHtml` | `function marketStripHtml(` |
| 12,747 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,748 | `settleStrips` | `function settleStrips(` |
| 12,783 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES (Version 630)

_line 13,062_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,076 | `partsOf` | `function partsOf(` |
| 13,085 | `discOf` | `function discOf(` |
| 13,092 | `authored` | `function authored(` |
| 13,098 | `registerRoster` | `function registerRoster(` |
| 13,140 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER (Version 630)

_line 13,152_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,161 | `NAV` | `var NAV =` |
| 13,162 | `buildNav` | `function buildNav(` |

### ALL INDICATORS (Version 630)

_line 13,276_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,280 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories (Version 630)

_line 13,340_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,343 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES (Version 630)

_line 13,834_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,838 | `renderMetricPages` | `function renderMetricPages(` |

### GDP growth

_line 14,276_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,331 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,363_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,364 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,464_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,476 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,519_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,527 | `__roster` | `var __roster =` |
| 14,528 | `readingRoster` | `function readingRoster(` |
| 14,583 | `readFig` | `function readFig(` |
| 14,591 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612)

_line 14,598_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,626 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,679_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,680 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,740_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,741 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,774_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,775 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,159–4,162 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,779–8,792 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,625–9,638 | `seasonTrackAll` | The season, computed |
| 9,660–9,664 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 14,063 |
| `desire-range` | 10,704 |
| `fear-range` | 11,486 |
| `hormones-range` | 11,296 |
| `hzn-range` | 11,155 |
| `pressure-range` | 4,317 |
| `pulse-range` | 10,660 |
| `sheet-marker-deficit` | 14,060 |
| `sheet-metric-gdp` | 13,952 |
| `sheet-metric-households` | 14,090 |
| `sheet-metric-power` | 14,024 |
| `sheet-metric-temp` | 13,907 |
| `sheet-metric-valuation` | 14,134 |
| `sheet-sign-activity` | 14,008 |
| `sheet-sign-desire` | 10,705 |
| `sheet-sign-horizon` | 11,156 |
| `sheet-sign-hormones` | 11,299 |
| `sheet-sign-pressure` | 10,781 |
| `sheet-sign-pulse` | 10,659 |
| `sheet-sign-sentiment` | 11,491 |
| `sheet-sign-volume` | 10,680 |
| `volume-range` | 10,681 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 14,069 |
| `desire-range` | 10,689 |
| `fear-range` | 11,443 |
| `hzn-range` | 11,137 |
| `pressure-range` | 10,738 |
| `pulse-range` | 10,643 |
| `sheet-metric-gdp` | 13,953 |
| `sheet-metric-power` | 14,025 |
| `sheet-metric-temp` | 13,908 |
| `sheet-metric-valuation` | 14,135 |
| `volume-range` | 10,664 |

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

