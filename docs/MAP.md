# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,867 lines**, about 1233 KB, roughly **350 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `be76db7` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,143 | the whole stylesheet, every token and rule |
| **Markup** | 3,144–3,920 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,921–14,814 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,815–14,867 | </body></html> |

Counts: **270** top-level functions, **180** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 3,921_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,936 | `byId` | `function byId(` |
| 3,944 | `byIdMaybe` | `function byIdMaybe(` |
| 3,951 | `put` | `function put(` |

### REFRESH: the one date to edit

_line 3,959_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,963 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,964 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,965 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,983 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,987 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,992_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,002 | `wheelMeta` | `var wheelMeta =` |
| 4,013 | `seasonOverride` | `var seasonOverride =` |
| 4,016 | `cycleNowNote` | `var cycleNowNote =` |
| 4,025 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,111 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,156 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,169_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,186 | `LIVE` | `function LIVE(` |
| 4,213 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,221 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,222 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,225_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,278 | `paintReading` | `function paintReading(` |
| 4,301 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,325 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,333 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,340 | `REPAINT` | `var REPAINT =` |
| 4,357 | `liveAsOf` | `var liveAsOf =` |
| 4,358 | `fmtAsOf` | `function fmtAsOf(` |
| 4,363 | `applyLive` | `function applyLive(` |
| 4,442 | `repaintPolicy` | `function repaintPolicy(` |
| 4,494 | `GYN` | `var GYN =` |
| 4,527 | `refreshLiveData` | `function refreshLiveData(` |
| 4,568 | `fetchSiteData` | `function fetchSiteData(` |
| 4,598 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,612_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,613 | `yieldCurve` | `var yieldCurve =` |
| 4,626 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,650 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,662 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,690_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,695 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,719 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,743 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,767 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,794 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,819_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,828 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,838 | `uninvLagToday` | `var uninvLagToday =` |
| 4,850 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,863 | `gdpPeers` | `var gdpPeers =` |
| 4,904 | `gdpSrc` | `var gdpSrc =` |
| 4,905 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,910 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,923 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,961_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,983 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,993_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,009 | `stressScoreFor` | `function stressScoreFor(` |
| 5,015 | `stressScore` | `var stressScore =` |
| 5,021 | `powerOf` | `var powerOf =` |
| 5,022 | `powerScore` | `var powerScore =` |
| 5,039 | `stressHistory` | `var stressHistory =` |
| 5,050 | `powerMeter` | `var powerMeter =` |
| 5,052 | `stressNoteFull` | `var stressNoteFull =` |
| 5,084 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,086_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,109 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,110 | `deficitHistory` | `var deficitHistory =` |
| 5,113 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,120 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,122 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,170 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,171 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,172 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,189_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,202 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,215_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,229 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,232 | `timelineSpan` | `function timelineSpan(` |
| 5,238 | `timelineFor` | `function timelineFor(` |
| 5,251 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,257_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,263 | `windowScale` | `function windowScale(` |
| 5,279 | `windowYears` | `function windowYears(` |
| 5,297 | `refName` | `function refName(` |
| 5,304 | `histReadEnsure` | `function histReadEnsure(` |
| 5,343 | `seatBandReading` | `function seatBandReading(` |
| 5,366 | `histReadFill` | `function histReadFill(` |
| 5,494 | `histAxisEnds` | `function histAxisEnds(` |
| 5,505 | `histLegend` | `function histLegend(` |
| 5,593 | `refitHistory` | `function refitHistory(` |
| 5,605 | `wireHistHover` | `function wireHistHover(` |
| 5,685 | `mWindowFrom` | `function mWindowFrom(` |
| 5,690 | `qWindowFrom` | `function qWindowFrom(` |
| 5,695 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,696 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,698 | `DEF_1983` | `var DEF_1983 =` |
| 5,700 | `defFrom` | `function defFrom(` |
| 5,711 | `deficitChart` | `function deficitChart(` |
| 5,800 | `deficitBlock` | `function deficitBlock(` |
| 5,862 | `buffettHistory` | `var buffettHistory =` |
| 5,892 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,893 | `hyDates` | `var hyDates =` |
| 5,894 | `hyOas` | `var hyOas =` |
| 5,895 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,902 | `hyAt` | `function hyAt(` |
| 5,906 | `hyLabel` | `function hyLabel(` |
| 5,907 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,908 | `hyNum` | `function hyNum(` |
| 5,909 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,919 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,929 | `capeHistory` | `var capeHistory =` |
| 5,931 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,949_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,955 | `sentiment` | `var sentiment =` |
| 5,973 | `valuation` | `var valuation =` |
| 6,010 | `valRow` | `function valRow(` |
| 6,018 | `coincident` | `var coincident =` |
| 6,079 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,097 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,098 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,099 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,101_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,114 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,115 | `m2vHistory` | `var m2vHistory =` |
| 6,135 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,227 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,316 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,317 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,357_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,363 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,364 | `DOTS` | `var DOTS =` |
| 6,371 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,405 | `histHead` | `function histHead(` |
| 6,429 | `headNoteIdx` | `var headNoteIdx =` |
| 6,430 | `headMenuHtml` | `function headMenuHtml(` |
| 6,488 | `headMenuFor` | `var headMenuFor =` |
| 6,490 | `headSubFor` | `var headSubFor =` |
| 6,491 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,540 | `nameWithMark` | `function nameWithMark(` |
| 6,546 | `panelRow` | `function panelRow(` |
| 6,579 | `panelFromMeter` | `function panelFromMeter(` |
| 6,593 | `meterFlagged` | `function meterFlagged(` |
| 6,604 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,632 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,646 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,665 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,684 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,698 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,723 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,754 | `desireBlock` | `function desireBlock(` |
| 6,781 | `volumeBlock` | `function volumeBlock(` |
| 6,806 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,829 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,837_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,850 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,851 | `m2Level` | `var m2Level =` |
| 6,873 | `m2Yoy` | `var m2Yoy =` |
| 6,874 | `M2_NORM` | `var M2_NORM =` |
| 6,879 | `volumeVerdict` | `function volumeVerdict(` |
| 6,916 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,917 | `unempHistory` | `var unempHistory =` |
| 6,923 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,938 | `NROU_NOW` | `var NROU_NOW =` |
| 6,939 | `unempState` | `function unempState(` |
| 6,945 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 7,007_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,016 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 7,025_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,038 | `checkLendingStandards` | `function checkLendingStandards(` |
| 7,051 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,105 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,172 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,173 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,176 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,184_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,199 | `householdsChart` | `function householdsChart(` |
| 7,266 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,349 | `GDP_NORM` | `var GDP_NORM =` |
| 7,355 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,356 | `gdpNowQ` | `var gdpNowQ =` |
| 7,357 | `gdpMeter` | `var gdpMeter =` |
| 7,360 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,382 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,446 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,509 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,517 | `velocityVerdict` | `function velocityVerdict(` |
| 7,525 | `derivePulseTag` | `function derivePulseTag(` |
| 7,531 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,591_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,600 | `seasonReading` | `var seasonReading =` |
| 7,649 | `frameworkRows` | `var frameworkRows =` |
| 7,659 | `vixRow` | `var vixRow =` |
| 7,667 | `vixWordOf` | `var vixWordOf =` |
| 7,671 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,686_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,690 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,699_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,700 | `calendarTodayY` | `var calendarTodayY =` |
| 7,731 | `vix3mClose` | `var vix3mClose =` |
| 7,732 | `fearCurve` | `function fearCurve(` |
| 7,739 | `curveVerdict` | `function curveVerdict(` |
| 7,746 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,751 | `valuationVerdict` | `function valuationVerdict(` |
| 7,769 | `sparkHtml` | `function sparkHtml(` |
| 7,788 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,794_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,807 | `modeBar` | `function modeBar(` |
| 7,822 | `pickerOpen` | `var pickerOpen =` |
| 7,826 | `cycleByName` | `function cycleByName(` |
| 7,830 | `openCycle` | `function openCycle(` |
| 7,836 | `cycleSlice` | `function cycleSlice(` |
| 7,845 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,853 | `cycleMonths` | `function cycleMonths(` |
| 7,872 | `histControls` | `function histControls(` |
| 7,886 | `cycLabel` | `function cycLabel(` |
| 7,902 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,911 | `cyclePicker` | `function cyclePicker(` |
| 7,930 | `rangeBar` | `function rangeBar(` |
| 7,942 | `trendOf` | `function trendOf(` |
| 7,987 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,997 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 8,018_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,019 | `yearOf` | `function yearOf(` |
| 8,020 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 8,021_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,059 | `headSigma` | `function headSigma(` |
| 8,067 | `atQuarter` | `function atQuarter(` |
| 8,068 | `atMonth` | `function atMonth(` |
| 8,069 | `cycleAverages` | `function cycleAverages(` |
| 8,076 | `ordinal` | `function ordinal(` |
| 8,077 | `hiCard` | `function hiCard(` |
| 8,088 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,102_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,109 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,125 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,132 | `moreRow` | `function moreRow(` |
| 8,138 | `powerPageNote` | `var powerPageNote =` |
| 8,139 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,151_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,154 | `xLabelOf` | `function xLabelOf(` |
| 8,174 | `fitGroup` | `function fitGroup(` |
| 8,196 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,255_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,279 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,289 | `vGrid` | `function vGrid(` |
| 8,314 | `COL_FILL` | `var COL_FILL =` |
| 8,347 | `colPath` | `function colPath(` |
| 8,352 | `colWidth` | `function colWidth(` |
| 8,399 | `AXIS` | `var AXIS =` |
| 8,415 | `histFrame` | `function histFrame(` |
| 8,427 | `xLabel` | `function xLabel(` |
| 8,431 | `crossLine` | `function crossLine(` |
| 8,436 | `zeroRule` | `function zeroRule(` |
| 8,439 | `meanRule` | `function meanRule(` |
| 8,451 | `pendingGeom` | `var pendingGeom =` |
| 8,452 | `publishGeom` | `function publishGeom(` |
| 8,453 | `attachHistory` | `function attachHistory(` |
| 8,468 | `histBar` | `function histBar(` |
| 8,471 | `histTip` | `function histTip(` |
| 8,474 | `avgRule` | `function avgRule(` |
| 8,477 | `vhOpen` | `function vhOpen(` |
| 8,478 | `chartAxes` | `function chartAxes(` |
| 8,538 | `divergeChart` | `function divergeChart(` |
| 8,606 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,635_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,643 | `maxIn` | `function maxIn(` |
| 8,661 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,675 | `PEEK_W` | `var PEEK_W =` |
| 8,678 | `PEEK_H` | `var PEEK_H =` |
| 8,683 | `colPeek` | `function colPeek(` |
| 8,710 | `meterPeek` | `function meterPeek(` |
| 8,727 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,732 | `pressureZone` | `function pressureZone(` |
| 8,747 | `HZN_BACK` | `var HZN_BACK =` |
| 8,748 | `hznLast` | `function hznLast(` |
| 8,749 | `hznBack` | `function hznBack(` |
| 8,750 | `horizonWord` | `function horizonWord(` |
| 8,775 | `HZN_METERS` | `var HZN_METERS =` |
| 8,783 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,824 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,829 | `RISK_RISK` | `var RISK_RISK =` |
| 8,834 | `riskCell` | `function riskCell(` |
| 8,835 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,866 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,891_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,912 | `pulseClipN` | `var pulseClipN =` |
| 8,913 | `beatPath` | `function beatPath(` |
| 8,938 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,952 | `pulsePeek` | `function pulsePeek(` |
| 8,960 | `pulseBlock` | `function pulseBlock(` |
| 8,980 | `CHEV` | `var CHEV =` |
| 8,982 | `peekCard` | `function peekCard(` |
| 9,036 | `dropSvg` | `function dropSvg(` |
| 9,048 | `volumeSvg` | `function volumeSvg(` |
| 9,055 | `gaugeSvg` | `function gaugeSvg(` |
| 9,059 | `diamondSvg` | `function diamondSvg(` |
| 9,073 | `energyFromReserve` | `function energyFromReserve(` |
| 9,085 | `sproutSvg` | `function sproutSvg(` |
| 9,096 | `markSvg` | `function markSvg(` |
| 9,105 | `pressureSvg` | `function pressureSvg(` |
| 9,109 | `hormoneSvg` | `function hormoneSvg(` |
| 9,115 | `flameSvg` | `function flameSvg(` |
| 9,119 | `gearSvg` | `function gearSvg(` |
| 9,131 | `thermoSvg` | `function thermoSvg(` |
| 9,150 | `trendUpSvg` | `function trendUpSvg(` |
| 9,152 | `ecgSvg` | `function ecgSvg(` |
| 9,166 | `circulationSvg` | `function circulationSvg(` |
| 9,167 | `weatherSvg` | `function weatherSvg(` |
| 9,188 | `moodSvg` | `function moodSvg(` |
| 9,212 | `boltSvg` | `function boltSvg(` |
| 9,215 | `houseSvg` | `function houseSvg(` |
| 9,223 | `sunriseSvg` | `function sunriseSvg(` |
| 9,238 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,249 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,266_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,287 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,288 | `dsrHistory` | `var dsrHistory =` |
| 9,289 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,290 | `savHistory` | `var savHistory =` |
| 9,295 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,305 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,306 | `dsrNow` | `var dsrNow =` |
| 9,307 | `savNow` | `var savNow =` |
| 9,308 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,313 | `householdsWord` | `function householdsWord(` |
| 9,320 | `householdsNow` | `var householdsNow =` |
| 9,327 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,328 | `dsrMeter` | `var dsrMeter =` |
| 9,331 | `savMeter` | `var savMeter =` |
| 9,334 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,351 | `savInfoHtml` | `function savInfoHtml(` |
| 9,369 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,378 | `curveNow` | `var curveNow =` |
| 9,379 | `curveTag` | `var curveTag =` |
| 9,380 | `curveSub` | `var curveSub =` |
| 9,384 | `curvePct` | `function curvePct(` |
| 9,385 | `curveNoteFull` | `var curveNoteFull =` |
| 9,400 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,408 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,449 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,477_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,491 | `marketTops` | `var marketTops =` |
| 9,501 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,506 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,508_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,529 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,530 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,535_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,556 | `slopeOf` | `function slopeOf(` |
| 9,567 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,573 | `readSeason` | `function readSeason(` |
| 9,598 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,600 | `qLabel` | `function qLabel(` |
| 9,624 | `regimeTrack` | `function regimeTrack(` |
| 9,647 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,649_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,656 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,657 | `seasonTitle` | `function seasonTitle(` |
| 9,658 | `monthLabel` | `function monthLabel(` |
| 9,659 | `cycleModel` | `function cycleModel(` |
| 9,711 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,719 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,726 | `nowModel` | `var nowModel =` |
| 9,727 | `readingNow` | `var readingNow =` |
| 9,728 | `cpiNow` | `var cpiNow =` |
| 9,729 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,730 | `currentSeason` | `var currentSeason =` |
| 9,731 | `seasonWhy` | `var seasonWhy =` |
| 9,748 | `seasonGroup` | `function seasonGroup(` |
| 9,762 | `arcGauge` | `function arcGauge(` |
| 9,804 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,817 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,824 | `tsyView` | `var tsyView =` |
| 9,826 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,828 | `spreadLabel` | `function spreadLabel(` |
| 9,835 | `policyFacts` | `function policyFacts(` |
| 9,849 | `policyFactRows` | `function policyFactRows(` |
| 9,855 | `allSources` | `var allSources =` |
| 9,879 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,912_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,915 | `SVG_NS` | `var SVG_NS =` |
| 9,916 | `svgEl` | `function svgEl(` |
| 9,929 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,965_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,966 | `clampPct` | `function clampPct(` |
| 9,973 | `infoIcon` | `function infoIcon(` |
| 9,982 | `detailTexts` | `var detailTexts =` |
| 10,000 | `detailSlots` | `var detailSlots =` |
| 10,001 | `detailSlot` | `function detailSlot(` |
| 10,012 | `powerPanelHtml` | `var powerPanelHtml =` |
| 10,016 | `_growthPanel` | `var _growthPanel =` |
| 10,017 | `growthPanelHtml` | `function growthPanelHtml(` |
| 10,023 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 10,034 | `facts` | `function facts(` |
| 10,035 | `factsFrom` | `function factsFrom(` |
| 10,039 | `expandBtn` | `function expandBtn(` |
| 10,045 | `sheetRenderers` | `var sheetRenderers =` |
| 10,062 | `pageMode` | `var pageMode =` |
| 10,069 | `pageCycles` | `var pageCycles =` |
| 10,074 | `pageRange` | `var pageRange =` |
| 10,080 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,114_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,125 | `meterHtml` | `function meterHtml(` |
| 10,156 | `srcBlock` | `function srcBlock(` |
| 10,157 | `srcHtml` | `function srcHtml(` |
| 10,166 | `TIMING` | `var TIMING =` |
| 10,172 | `timingMark` | `function timingMark(` |
| 10,186 | `timingPill` | `function timingPill(` |
| 10,207 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,215 | `seatPageFoot` | `function seatPageFoot(` |
| 10,238 | `timingMembers` | `var timingMembers =` |
| 10,239 | `registerTiming` | `function registerTiming(` |
| 10,245 | `headHtml` | `function headHtml(` |
| 10,263 | `heldHighlights` | `var heldHighlights =` |
| 10,264 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,322_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,323 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,744_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,745 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,967_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,968 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 11,000_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,006 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,090_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,091 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,109_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,112 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,135_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,147 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,276_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,285 | `lendingWord` | `function lendingWord(` |
| 11,293 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,351_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,352 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,476_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,479 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,602_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,614 | `totalRiseIn` | `function totalRiseIn(` |
| 11,624 | `eraInflation` | `function eraInflation(` |
| 11,635 | `eraGrowth` | `function eraGrowth(` |
| 11,655 | `fmtSigned` | `function fmtSigned(` |
| 11,660 | `regimeArrow` | `function regimeArrow(` |
| 11,666 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,667 | `growthShown` | `function growthShown(` |
| 11,668 | `growthShownCap` | `function growthShownCap(` |
| 11,669 | `regimeState` | `function regimeState(` |
| 11,673 | `phaseClass` | `function phaseClass(` |
| 11,675 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,687 | `cycleViewEl` | `var cycleViewEl =` |
| 11,693 | `tempCard` | `var tempCard =` |
| 11,694 | `placeCharts` | `function placeCharts(` |
| 11,699 | `shownEra` | `var shownEra =` |
| 11,700 | `calendarReset` | `var calendarReset =` |
| 11,701 | `metricPageReset` | `var metricPageReset =` |
| 11,702 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,705 | `topbarBack` | `var topbarBack =` |
| 11,706 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,713_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,714 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,875_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,876 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,894_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,897 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,918_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,924 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,927 | `hubSet` | `function hubSet(` |
| 11,940 | `quarterPopup` | `function quarterPopup(` |
| 11,973 | `hubShowDefault` | `function hubShowDefault(` |
| 11,982 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,988 | `hubShowYear` | `function hubShowYear(` |
| 12,003 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,095_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,098 | `tempState` | `var tempState =` |
| 12,101 | `chartLink` | `var chartLink =` |
| 12,121 | `m2Step` | `function m2Step(` |
| 12,124 | `heatStep` | `function heatStep(` |
| 12,128 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,315_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,318 | `drawGrowth` | `function drawGrowth(` |
| 12,457 | `wireResize` | `function wireResize(` |
| 12,463 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,475_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,476 | `renderCycleView` | `function renderCycleView(` |
| 12,537 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,545_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,556 | `peerChosen` | `function peerChosen(` |
| 12,557 | `peerReaches` | `function peerReaches(` |
| 12,587 | `shownEraModel` | `var shownEraModel =` |
| 12,588 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,590_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,592 | `stripGroupName` | `var stripGroupName =` |
| 12,593 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,639 | `marketStripHtml` | `function marketStripHtml(` |
| 12,702 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,703 | `settleStrips` | `function settleStrips(` |
| 12,738 | `renderSignsList` | `function renderSignsList(` |
| 13,023 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,299_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,300 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,400_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,412 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,455_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,463 | `__roster` | `var __roster =` |
| 14,464 | `readingRoster` | `function readingRoster(` |
| 14,519 | `readFig` | `function readFig(` |
| 14,527 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes \u2014 today beside a past top (Version 610, rebuilt in Version 612)

_line 14,534_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,562 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,615_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,616 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,676_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,677 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,710_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,711 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,182–4,185 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,756–8,769 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,607–9,620 | `seasonTrackAll` | The season, computed |
| 9,642–9,646 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,751 |
| `desire-range` | 10,634 |
| `fear-range` | 11,441 |
| `hormones-range` | 11,181 |
| `hzn-range` | 10,737 |
| `hzn-spread` | 10,731 |
| `pressure-range` | 11,319 |
| `pulse-range` | 10,590 |
| `sheet-marker-deficit` | 13,748 |
| `sheet-metric-gdp` | 13,640 |
| `sheet-metric-households` | 13,778 |
| `sheet-metric-power` | 13,712 |
| `sheet-metric-temp` | 13,595 |
| `sheet-metric-valuation` | 13,822 |
| `sheet-sign-activity` | 13,696 |
| `sheet-sign-desire` | 10,635 |
| `sheet-sign-horizon` | 10,738 |
| `sheet-sign-hormones` | 11,184 |
| `sheet-sign-pressure` | 11,320 |
| `sheet-sign-pulse` | 10,589 |
| `sheet-sign-sentiment` | 11,446 |
| `sheet-sign-volume` | 10,610 |
| `volume-range` | 10,611 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,757 |
| `desire-range` | 10,619 |
| `fear-range` | 11,398 |
| `hzn-range` | 10,663 |
| `pulse-range` | 10,573 |
| `sheet-metric-gdp` | 13,641 |
| `sheet-metric-power` | 13,713 |
| `sheet-metric-temp` | 13,596 |
| `sheet-metric-valuation` | 13,823 |
| `volume-range` | 10,594 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,378 |
| `sheet-metric-gdp` | 6,379 |
| `sheet-sign-activity` | 6,386 |
| `sheet-metric-power` | 6,387 |
| `sheet-metric-valuation` | 6,389 |
| `sheet-metric-households` | 6,390 |
| `deficit-range` | 6,391 |
| `volume-range` | 6,392 |
| `pulse-range` | 6,393 |
| `hzn-range` | 6,399 |
| `desire-range` | 6,400 |
| `fear-range` | 6,401 |
| `hormones-range` | 6,402 |
| `pressure-range` | 6,403 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 192 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 325 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 423 | yearly calendar — one card per year, grouped into five eras |
| 430 | season strip |
| 483 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels \u2026 so if one day |
| 652 | tab bar (app-style segmented navigation) |
| 719 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 758 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 974 | journal (editorial content tab) |
| 980 | content tab: reading companion |
| 1,038 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,510 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,544 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,554 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,565 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,598 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,778 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,955 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,493 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,534 | Rhymes (Version 610): today beside one past top |
| 2,575 | A closed cycle's categories (Version 613) |
| 2,605 | hero: yield curve |
| 2,682 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,761 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,860 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,885 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,900 | long cycle (structural layer) |
| 2,941 | indicator grid |
| 2,984 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 3,001 | info icon + popover (progressive disclosure for longer notes) |
| 3,022 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,117 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (145), which is what the renderers fill:

| Line | id |
|---|---|
| 3,149 | `topbar-back` |
| 3,152 | `topbar-title` |
| 3,153 | `menu-btn` |
| 3,170 | `main` |
| 3,177 | `cycle-view` |
| 3,185 | `cycle-kicker` |
| 3,191 | `cycle-dial` |
| 3,193 | `season-wheel-hub-date` |
| 3,194 | `season-wheel-hub-theme` |
| 3,195 | `season-wheel-hub-detail` |
| 3,203 | `temp-card` |
| 3,205 | `temp-kicker` |
| 3,206 | `temp-sub` |
| 3,209 | `temp-svg` |
| 3,210 | `temp-tooltip` |
| 3,216 | `temp-stats` |
| 3,223 | `growth-card` |
| 3,226 | `growth-kicker` |
| 3,226 | `growth-phase` |
| 3,226 | `growth-sub` |
| 3,227 | `growth-svg` |
| 3,227 | `growth-tooltip` |
| 3,232 | `growth-stats` |
| 3,241 | `today-analysis` |
| 3,245 | `peek-row` |
| 3,249 | `sheet-metric-temp` |
| 3,250 | `temp-timing` |
| 3,251 | `temp-chart` |
| 3,253 | `temp-rangebar` |
| 3,255 | `temp-head` |
| 3,256 | `slot-temp` |
| 3,257 | `temp-history` |
| 3,258 | `temp-hist-tooltip` |
| 3,261 | `temp-trend` |
| 3,265 | `temp-highlights` |
| 3,268 | `sheet-metric-gdp` |
| 3,269 | `gdp-timing` |
| 3,270 | `gdp-chart` |
| 3,271 | `gdp-rangebar` |
| 3,273 | `gdp-head` |
| 3,274 | `slot-growth` |
| 3,275 | `gdp-history` |
| 3,276 | `gdp-hist-tooltip` |
| 3,277 | `gdp-yoy` |
| 3,287 | `gdp-trend` |
| 3,289 | `gdp-panel` |
| 3,294 | `subj-ring-gdp` |
| 3,296 | `subj-label-gdp` |
| 3,297 | `subj-value-gdp` |
| 3,298 | `subj-say-gdp` |
| 3,299 | `subj-spark-gdp` |
| 3,304 | `subj-ctx-gdp` |
| 3,307 | `gdp-highlights` |
| 3,315 | `sheet-metric-power` |
| 3,316 | `power-timing` |
| 3,317 | `power-head` |
| 3,318 | `power-chart` |
| 3,322 | `subj-ring-resilience` |
| 3,325 | `subj-value-resilience` |
| 3,326 | `subj-say-resilience` |
| 3,331 | `subj-ctx-resilience` |
| 3,335 | `longcycle-title` |
| 3,337 | `longcycle-tag` |
| 3,351 | `power-highlights` |
| 3,358 | `sheet-marker-deficit` |
| 3,364 | `sheet-metric-households` |
| 3,365 | `households-timing` |
| 3,366 | `households-chart` |
| 3,367 | `households-highlights` |
| 3,371 | `sheet-metric-valuation` |
| 3,372 | `valuation-timing` |
| 3,373 | `valuation-head` |
| 3,374 | `valuation-chart` |
| 3,378 | `subj-ring-valuation` |
| 3,381 | `subj-value-valuation` |
| 3,382 | `subj-say-valuation` |
| 3,387 | `subj-ctx-valuation` |
| 3,391 | `valuation-title` |
| 3,393 | `valuation-tag` |
| 3,400 | `valuation-highlights` |
| 3,424 | `subj-value-hormones` |
| 3,425 | `subj-say-hormones` |
| 3,433 | `hormones-history` |
| 3,443 | `hormones-insights` |
| 3,469 | `subj-value-horizon` |
| 3,470 | `subj-say-horizon` |
| 3,471 | `subj-spark-horizon` |
| 3,481 | `hzn-timeline` |
| 3,483 | `hzn-head` |
| 3,484 | `spread-history-shell` |
| 3,485 | `spread-history-svg` |
| 3,486 | `spread-history-tooltip` |
| 3,491 | `ylm-shell` |
| 3,492 | `ylm-svg` |
| 3,493 | `ylm-tooltip` |
| 3,496 | `hzn-trend` |
| 3,497 | `ylm-trend` |
| 3,499 | `horizon-insights` |
| 3,527 | `subj-value-pressure` |
| 3,528 | `subj-say-pressure` |
| 3,533 | `pressure-history` |
| 3,534 | `pressure-highlights` |
| 3,540 | `subj-ring-sentiment` |
| 3,543 | `subj-value-sentiment` |
| 3,544 | `subj-say-sentiment` |
| 3,545 | `subj-spark-sentiment` |
| 3,559 | `fear-history` |
| 3,560 | `curve-highlights` |
| 3,574 | `signs-list` |
| 3,585 | `calendar-list` |
| 3,590 | `indicators-peek` |
| 3,599 | `rhymes-card` |
| 3,610 | `rhy-pick` |
| 3,611 | `rhy-body` |
| 3,658 | `cycle-list` |
| 3,664 | `cycle-more` |
| 3,665 | `cycle-more-label` |
| 3,674 | `calendar-cycle` |
| 3,675 | `calendar-cycle-slot` |
| 3,682 | `cycle-cats` |
| 3,733 | `seasons-kicker` |
| 3,734 | `seasons-rows` |
| 3,738 | `framework-kicker` |
| 3,740 | `framework-rows` |
| 3,747 | `more-menu` |
| 3,750 | `menu-back` |
| 3,764 | `sources-open` |
| 3,772 | `appearance-current` |
| 3,780 | `sheet-howto` |
| 3,824 | `sheet-book` |
| 3,856 | `sheet-appearance` |
| 3,864 | `theme-toggle` |
| 3,871 | `sheet-contact` |
| 3,880 | `contact-form` |
| 3,881 | `contact-title` |
| 3,882 | `contact-message` |
| 3,884 | `contact-hint` |
| 3,885 | `contact-send` |
| 3,894 | `sheet-sources` |
| 3,897 | `sources-back` |
| 3,904 | `asof-text` |
| 3,905 | `sources-groups` |
| 3,912 | `detail-backdrop` |
| 3,914 | `detail-modal-close` |
| 3,915 | `detail-modal-body` |

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

