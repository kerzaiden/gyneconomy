# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,935 lines**, about 1236 KB, roughly **351 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `182ff79` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,113 | the whole stylesheet, every token and rule |
| **Markup** | 3,114–3,889 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,890–14,882 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,883–14,935 | </body></html> |

Counts: **286** top-level functions, **181** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 3,890_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,905 | `byId` | `function byId(` |
| 3,913 | `byIdMaybe` | `function byIdMaybe(` |
| 3,920 | `put` | `function put(` |
| 3,927 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 3,931_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,935 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,936 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,937 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,955 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,959 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,964_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,974 | `wheelMeta` | `var wheelMeta =` |
| 3,985 | `seasonOverride` | `var seasonOverride =` |
| 3,988 | `cycleNowNote` | `var cycleNowNote =` |
| 3,997 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,083 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,128 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,141_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,160 | `merge` | `function merge(` |
| 4,167 | `LIVE` | `function LIVE(` |
| 4,191 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,194_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,247 | `paintReading` | `function paintReading(` |
| 4,270 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,294 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,302 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY (Version 629)

_line 4,307_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,335 | `READINGS` | `var READINGS =` |
| 4,404 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 4,405 | `KINDS` | `var KINDS =` |
| 4,406 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 4,427 | `receive` | `function receive(` |
| 4,451 | `liveAsOf` | `var liveAsOf =` |
| 4,452 | `fmtAsOf` | `function fmtAsOf(` |
| 4,465 | `applyLive` | `function applyLive(` |
| 4,480 | `shapeOk` | `function shapeOk(` |
| 4,490 | `repaintPolicy` | `function repaintPolicy(` |
| 4,542 | `GYN` | `var GYN =` |
| 4,579 | `refreshLiveData` | `function refreshLiveData(` |
| 4,608 | `fetchSiteData` | `function fetchSiteData(` |
| 4,624 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,638_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,639 | `yieldCurve` | `var yieldCurve =` |
| 4,652 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,676 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,688 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,716_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,721 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,745 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,769 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,793 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,820 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,845_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,854 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,864 | `uninvLagToday` | `var uninvLagToday =` |
| 4,876 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,889 | `gdpPeers` | `var gdpPeers =` |
| 4,930 | `gdpSrc` | `var gdpSrc =` |
| 4,931 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,936 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,949 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,987_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,009 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 5,019_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,035 | `stressScoreFor` | `function stressScoreFor(` |
| 5,041 | `stressScore` | `var stressScore =` |
| 5,047 | `powerOf` | `var powerOf =` |
| 5,048 | `powerScore` | `var powerScore =` |
| 5,065 | `stressHistory` | `var stressHistory =` |
| 5,076 | `powerMeter` | `var powerMeter =` |
| 5,078 | `stressNoteFull` | `var stressNoteFull =` |
| 5,110 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,112_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,135 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,136 | `deficitHistory` | `var deficitHistory =` |
| 5,139 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,146 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,148 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,196 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,197 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,198 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,215_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,228 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,241_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,255 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,258 | `timelineSpan` | `function timelineSpan(` |
| 5,264 | `timelineFor` | `function timelineFor(` |
| 5,277 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,283_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,289 | `windowScale` | `function windowScale(` |
| 5,305 | `windowYears` | `function windowYears(` |
| 5,323 | `refName` | `function refName(` |
| 5,330 | `histReadEnsure` | `function histReadEnsure(` |
| 5,369 | `seatBandReading` | `function seatBandReading(` |
| 5,392 | `histReadFill` | `function histReadFill(` |
| 5,520 | `histAxisEnds` | `function histAxisEnds(` |
| 5,531 | `histLegend` | `function histLegend(` |
| 5,619 | `refitHistory` | `function refitHistory(` |
| 5,631 | `wireHistHover` | `function wireHistHover(` |
| 5,711 | `mWindowFrom` | `function mWindowFrom(` |
| 5,716 | `qWindowFrom` | `function qWindowFrom(` |
| 5,721 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,722 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,724 | `DEF_1983` | `var DEF_1983 =` |
| 5,726 | `defFrom` | `function defFrom(` |
| 5,737 | `deficitChart` | `function deficitChart(` |
| 5,826 | `deficitBlock` | `function deficitBlock(` |
| 5,888 | `buffettHistory` | `var buffettHistory =` |
| 5,918 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,919 | `hyDates` | `var hyDates =` |
| 5,920 | `hyOas` | `var hyOas =` |
| 5,921 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,928 | `hyAt` | `function hyAt(` |
| 5,932 | `hyLabel` | `function hyLabel(` |
| 5,933 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,934 | `hyNum` | `function hyNum(` |
| 5,935 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,945 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,955 | `capeHistory` | `var capeHistory =` |
| 5,957 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,975_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,981 | `sentiment` | `var sentiment =` |
| 5,999 | `valuation` | `var valuation =` |
| 6,036 | `valRow` | `function valRow(` |
| 6,044 | `coincident` | `var coincident =` |
| 6,105 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,123 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,124 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,125 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,127_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,140 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,141 | `m2vHistory` | `var m2vHistory =` |
| 6,161 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,253 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,342 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,343 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,383_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,389 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,390 | `DOTS` | `var DOTS =` |
| 6,397 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,431 | `histHead` | `function histHead(` |
| 6,455 | `headNoteIdx` | `var headNoteIdx =` |
| 6,456 | `headMenuHtml` | `function headMenuHtml(` |
| 6,514 | `headMenuFor` | `var headMenuFor =` |
| 6,516 | `headSubFor` | `var headSubFor =` |
| 6,517 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,566 | `nameWithMark` | `function nameWithMark(` |
| 6,572 | `panelRow` | `function panelRow(` |
| 6,605 | `panelFromMeter` | `function panelFromMeter(` |
| 6,619 | `meterFlagged` | `function meterFlagged(` |
| 6,630 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,658 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,672 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,691 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,710 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,724 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,749 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,780 | `desireBlock` | `function desireBlock(` |
| 6,807 | `volumeBlock` | `function volumeBlock(` |
| 6,832 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,855 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,863_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,876 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,877 | `m2Level` | `var m2Level =` |
| 6,899 | `m2Yoy` | `var m2Yoy =` |
| 6,900 | `M2_NORM` | `var M2_NORM =` |
| 6,905 | `volumeVerdict` | `function volumeVerdict(` |
| 6,942 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,943 | `unempHistory` | `var unempHistory =` |
| 6,949 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,964 | `NROU_NOW` | `var NROU_NOW =` |
| 6,965 | `unempState` | `function unempState(` |
| 6,971 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones — the policy rate's history

_line 7,033_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,042 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 7,051_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,064 | `checkLendingStandards` | `function checkLendingStandards(` |
| 7,077 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,131 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,198 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,199 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,202 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,210_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,225 | `householdsChart` | `function householdsChart(` |
| 7,292 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,375 | `GDP_NORM` | `var GDP_NORM =` |
| 7,381 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,382 | `gdpNowQ` | `var gdpNowQ =` |
| 7,383 | `gdpMeter` | `var gdpMeter =` |
| 7,386 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,408 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,472 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,535 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,543 | `velocityVerdict` | `function velocityVerdict(` |
| 7,551 | `derivePulseTag` | `function derivePulseTag(` |
| 7,557 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,617_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,626 | `seasonReading` | `var seasonReading =` |
| 7,675 | `frameworkRows` | `var frameworkRows =` |
| 7,685 | `vixRow` | `var vixRow =` |
| 7,693 | `vixWordOf` | `var vixWordOf =` |
| 7,697 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,712_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,716 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,725_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,726 | `calendarTodayY` | `var calendarTodayY =` |
| 7,757 | `vix3mClose` | `var vix3mClose =` |
| 7,758 | `fearCurve` | `function fearCurve(` |
| 7,765 | `curveVerdict` | `function curveVerdict(` |
| 7,772 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,777 | `valuationVerdict` | `function valuationVerdict(` |
| 7,795 | `sparkHtml` | `function sparkHtml(` |
| 7,814 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,820_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,833 | `modeBar` | `function modeBar(` |
| 7,848 | `pickerOpen` | `var pickerOpen =` |
| 7,852 | `cycleByName` | `function cycleByName(` |
| 7,856 | `openCycle` | `function openCycle(` |
| 7,862 | `cycleSlice` | `function cycleSlice(` |
| 7,871 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,879 | `cycleMonths` | `function cycleMonths(` |
| 7,898 | `histControls` | `function histControls(` |
| 7,912 | `cycLabel` | `function cycLabel(` |
| 7,928 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,937 | `cyclePicker` | `function cyclePicker(` |
| 7,956 | `rangeBar` | `function rangeBar(` |
| 7,968 | `trendOf` | `function trendOf(` |
| 8,013 | `TREND_ARROW` | `var TREND_ARROW =` |
| 8,023 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 8,044_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,045 | `yearOf` | `function yearOf(` |
| 8,046 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 8,047_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,085 | `headSigma` | `function headSigma(` |
| 8,093 | `atQuarter` | `function atQuarter(` |
| 8,094 | `atMonth` | `function atMonth(` |
| 8,095 | `cycleAverages` | `function cycleAverages(` |
| 8,102 | `ordinal` | `function ordinal(` |
| 8,103 | `hiCard` | `function hiCard(` |
| 8,114 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,128_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,135 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,151 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,158 | `moreRow` | `function moreRow(` |
| 8,164 | `powerPageNote` | `var powerPageNote =` |
| 8,165 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,177_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,180 | `xLabelOf` | `function xLabelOf(` |
| 8,200 | `fitGroup` | `function fitGroup(` |
| 8,222 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,281_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,305 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,315 | `vGrid` | `function vGrid(` |
| 8,340 | `COL_FILL` | `var COL_FILL =` |
| 8,373 | `colPath` | `function colPath(` |
| 8,378 | `colWidth` | `function colWidth(` |
| 8,425 | `AXIS` | `var AXIS =` |
| 8,441 | `histFrame` | `function histFrame(` |
| 8,453 | `xLabel` | `function xLabel(` |
| 8,457 | `crossLine` | `function crossLine(` |
| 8,462 | `zeroRule` | `function zeroRule(` |
| 8,465 | `meanRule` | `function meanRule(` |
| 8,477 | `pendingGeom` | `var pendingGeom =` |
| 8,478 | `publishGeom` | `function publishGeom(` |
| 8,479 | `attachHistory` | `function attachHistory(` |
| 8,494 | `histBar` | `function histBar(` |
| 8,497 | `histTip` | `function histTip(` |
| 8,500 | `avgRule` | `function avgRule(` |
| 8,503 | `vhOpen` | `function vhOpen(` |
| 8,504 | `chartAxes` | `function chartAxes(` |
| 8,564 | `divergeChart` | `function divergeChart(` |
| 8,632 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,661_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,669 | `maxIn` | `function maxIn(` |
| 8,687 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,701 | `PEEK_W` | `var PEEK_W =` |
| 8,704 | `PEEK_H` | `var PEEK_H =` |
| 8,709 | `colPeek` | `function colPeek(` |
| 8,736 | `meterPeek` | `function meterPeek(` |
| 8,753 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,758 | `pressureZone` | `function pressureZone(` |
| 8,773 | `HZN_BACK` | `var HZN_BACK =` |
| 8,774 | `hznLast` | `function hznLast(` |
| 8,775 | `hznBack` | `function hznBack(` |
| 8,776 | `horizonWord` | `function horizonWord(` |
| 8,801 | `HZN_METERS` | `var HZN_METERS =` |
| 8,809 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,850 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,855 | `RISK_RISK` | `var RISK_RISK =` |
| 8,860 | `riskCell` | `function riskCell(` |
| 8,861 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,892 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,917_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,938 | `pulseClipN` | `var pulseClipN =` |
| 8,939 | `beatPath` | `function beatPath(` |
| 8,964 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,978 | `pulsePeek` | `function pulsePeek(` |
| 8,986 | `pulseBlock` | `function pulseBlock(` |
| 9,006 | `CHEV` | `var CHEV =` |
| 9,008 | `peekCard` | `function peekCard(` |
| 9,062 | `dropSvg` | `function dropSvg(` |
| 9,074 | `volumeSvg` | `function volumeSvg(` |
| 9,081 | `gaugeSvg` | `function gaugeSvg(` |
| 9,085 | `diamondSvg` | `function diamondSvg(` |
| 9,099 | `energyFromReserve` | `function energyFromReserve(` |
| 9,111 | `sproutSvg` | `function sproutSvg(` |
| 9,122 | `markSvg` | `function markSvg(` |
| 9,131 | `pressureSvg` | `function pressureSvg(` |
| 9,135 | `hormoneSvg` | `function hormoneSvg(` |
| 9,141 | `flameSvg` | `function flameSvg(` |
| 9,145 | `gearSvg` | `function gearSvg(` |
| 9,157 | `thermoSvg` | `function thermoSvg(` |
| 9,176 | `trendUpSvg` | `function trendUpSvg(` |
| 9,178 | `ecgSvg` | `function ecgSvg(` |
| 9,192 | `circulationSvg` | `function circulationSvg(` |
| 9,193 | `weatherSvg` | `function weatherSvg(` |
| 9,214 | `moodSvg` | `function moodSvg(` |
| 9,238 | `boltSvg` | `function boltSvg(` |
| 9,241 | `houseSvg` | `function houseSvg(` |
| 9,249 | `sunriseSvg` | `function sunriseSvg(` |
| 9,264 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,275 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,292_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,313 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,314 | `dsrHistory` | `var dsrHistory =` |
| 9,315 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,316 | `savHistory` | `var savHistory =` |
| 9,321 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,331 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,332 | `dsrNow` | `var dsrNow =` |
| 9,333 | `savNow` | `var savNow =` |
| 9,334 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,339 | `householdsWord` | `function householdsWord(` |
| 9,346 | `householdsNow` | `var householdsNow =` |
| 9,353 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,354 | `dsrMeter` | `var dsrMeter =` |
| 9,357 | `savMeter` | `var savMeter =` |
| 9,360 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,377 | `savInfoHtml` | `function savInfoHtml(` |
| 9,395 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,404 | `curveNow` | `var curveNow =` |
| 9,405 | `curveTag` | `var curveTag =` |
| 9,406 | `curveSub` | `var curveSub =` |
| 9,410 | `curvePct` | `function curvePct(` |
| 9,411 | `curveNoteFull` | `var curveNoteFull =` |
| 9,426 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,434 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,475 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,503_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,517 | `marketTops` | `var marketTops =` |
| 9,527 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,532 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,534_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,555 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,556 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,561_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,582 | `slopeOf` | `function slopeOf(` |
| 9,593 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,599 | `readSeason` | `function readSeason(` |
| 9,624 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,626 | `qLabel` | `function qLabel(` |
| 9,650 | `regimeTrack` | `function regimeTrack(` |
| 9,673 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,675_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,682 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,683 | `seasonTitle` | `function seasonTitle(` |
| 9,684 | `monthLabel` | `function monthLabel(` |
| 9,685 | `cycleModel` | `function cycleModel(` |
| 9,737 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,745 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,752 | `nowModel` | `var nowModel =` |
| 9,753 | `readingNow` | `var readingNow =` |
| 9,754 | `cpiNow` | `var cpiNow =` |
| 9,755 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,756 | `currentSeason` | `var currentSeason =` |
| 9,757 | `seasonWhy` | `var seasonWhy =` |
| 9,774 | `seasonGroup` | `function seasonGroup(` |
| 9,788 | `arcGauge` | `function arcGauge(` |
| 9,830 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,843 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,850 | `tsyView` | `var tsyView =` |
| 9,852 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,854 | `spreadLabel` | `function spreadLabel(` |
| 9,861 | `policyFacts` | `function policyFacts(` |
| 9,875 | `policyFactRows` | `function policyFactRows(` |
| 9,881 | `allSources` | `var allSources =` |
| 9,905 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,938_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,941 | `SVG_NS` | `var SVG_NS =` |
| 9,942 | `svgEl` | `function svgEl(` |
| 9,955 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,991_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,992 | `clampPct` | `function clampPct(` |
| 9,999 | `infoIcon` | `function infoIcon(` |
| 10,008 | `detailTexts` | `var detailTexts =` |
| 10,026 | `detailSlots` | `var detailSlots =` |
| 10,027 | `detailSlot` | `function detailSlot(` |
| 10,038 | `powerPanelHtml` | `var powerPanelHtml =` |
| 10,042 | `_growthPanel` | `var _growthPanel =` |
| 10,043 | `growthPanelHtml` | `function growthPanelHtml(` |
| 10,049 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 10,060 | `facts` | `function facts(` |
| 10,061 | `factsFrom` | `function factsFrom(` |
| 10,065 | `expandBtn` | `function expandBtn(` |
| 10,071 | `sheetRenderers` | `var sheetRenderers =` |
| 10,088 | `pageMode` | `var pageMode =` |
| 10,095 | `pageCycles` | `var pageCycles =` |
| 10,100 | `pageRange` | `var pageRange =` |
| 10,106 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,140_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,151 | `meterHtml` | `function meterHtml(` |
| 10,182 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW (Version 631)

_line 10,183_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,191 | `subjectRow` | `function subjectRow(` |
| 10,203 | `subjectIcon` | `function subjectIcon(` |
| 10,204 | `srcHtml` | `function srcHtml(` |
| 10,213 | `TIMING` | `var TIMING =` |
| 10,219 | `timingMark` | `function timingMark(` |
| 10,233 | `timingPill` | `function timingPill(` |
| 10,254 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,262 | `seatPageFoot` | `function seatPageFoot(` |
| 10,285 | `timingMembers` | `var timingMembers =` |
| 10,286 | `registerTiming` | `function registerTiming(` |
| 10,292 | `headHtml` | `function headHtml(` |
| 10,310 | `heldHighlights` | `var heldHighlights =` |
| 10,311 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,369_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,370 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,791_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,792 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 11,014_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,015 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 11,047_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,053 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,137_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,138 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,156_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,159 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,182_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,194 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,323_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,332 | `lendingWord` | `function lendingWord(` |
| 11,340 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,398_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,399 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,523_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,526 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,649_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,661 | `totalRiseIn` | `function totalRiseIn(` |
| 11,671 | `eraInflation` | `function eraInflation(` |
| 11,682 | `eraGrowth` | `function eraGrowth(` |
| 11,702 | `fmtSigned` | `function fmtSigned(` |
| 11,707 | `regimeArrow` | `function regimeArrow(` |
| 11,713 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,714 | `growthShown` | `function growthShown(` |
| 11,715 | `growthShownCap` | `function growthShownCap(` |
| 11,716 | `regimeState` | `function regimeState(` |
| 11,720 | `phaseClass` | `function phaseClass(` |
| 11,722 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,734 | `cycleViewEl` | `var cycleViewEl =` |
| 11,740 | `tempCard` | `var tempCard =` |
| 11,741 | `placeCharts` | `function placeCharts(` |
| 11,746 | `shownEra` | `var shownEra =` |
| 11,747 | `calendarReset` | `var calendarReset =` |
| 11,748 | `metricPageReset` | `var metricPageReset =` |
| 11,749 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,752 | `topbarBack` | `var topbarBack =` |
| 11,753 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,760_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,761 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,922_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,923 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,941_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,944 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,965_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,971 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,974 | `hubSet` | `function hubSet(` |
| 11,987 | `quarterPopup` | `function quarterPopup(` |
| 12,020 | `hubShowDefault` | `function hubShowDefault(` |
| 12,029 | `hubShowQuarter` | `function hubShowQuarter(` |
| 12,035 | `hubShowYear` | `function hubShowYear(` |
| 12,050 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,142_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,145 | `tempState` | `var tempState =` |
| 12,148 | `chartLink` | `var chartLink =` |
| 12,168 | `m2Step` | `function m2Step(` |
| 12,171 | `heatStep` | `function heatStep(` |
| 12,175 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,362_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,365 | `drawGrowth` | `function drawGrowth(` |
| 12,504 | `wireResize` | `function wireResize(` |
| 12,510 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,522_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,523 | `renderCycleView` | `function renderCycleView(` |
| 12,584 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,592_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,603 | `peerChosen` | `function peerChosen(` |
| 12,604 | `peerReaches` | `function peerReaches(` |
| 12,634 | `shownEraModel` | `var shownEraModel =` |
| 12,635 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,637_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,639 | `stripGroupName` | `var stripGroupName =` |
| 12,640 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,686 | `marketStripHtml` | `function marketStripHtml(` |
| 12,749 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,750 | `settleStrips` | `function settleStrips(` |
| 12,785 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES (Version 630)

_line 13,064_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,078 | `partsOf` | `function partsOf(` |
| 13,087 | `discOf` | `function discOf(` |
| 13,094 | `authored` | `function authored(` |
| 13,100 | `registerRoster` | `function registerRoster(` |
| 13,142 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER (Version 630)

_line 13,154_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,163 | `NAV` | `var NAV =` |
| 13,164 | `buildNav` | `function buildNav(` |

### ALL INDICATORS (Version 630)

_line 13,278_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,282 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories (Version 630)

_line 13,342_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,345 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES (Version 630)

_line 13,838_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,842 | `renderMetricPages` | `function renderMetricPages(` |

### GDP growth

_line 14,280_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,335 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,367_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,368 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,468_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,480 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,523_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,531 | `__roster` | `var __roster =` |
| 14,532 | `readingRoster` | `function readingRoster(` |
| 14,587 | `readFig` | `function readFig(` |
| 14,595 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612)

_line 14,602_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,630 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,683_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,684 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,744_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,745 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,778_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,779 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,154–4,157 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,782–8,795 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,633–9,646 | `seasonTrackAll` | The season, computed |
| 9,668–9,672 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 14,067 |
| `desire-range` | 10,681 |
| `fear-range` | 11,488 |
| `hormones-range` | 11,228 |
| `hzn-range` | 10,784 |
| `hzn-spread` | 10,778 |
| `pressure-range` | 11,366 |
| `pulse-range` | 10,637 |
| `sheet-marker-deficit` | 14,064 |
| `sheet-metric-gdp` | 13,956 |
| `sheet-metric-households` | 14,094 |
| `sheet-metric-power` | 14,028 |
| `sheet-metric-temp` | 13,911 |
| `sheet-metric-valuation` | 14,138 |
| `sheet-sign-activity` | 14,012 |
| `sheet-sign-desire` | 10,682 |
| `sheet-sign-horizon` | 10,785 |
| `sheet-sign-hormones` | 11,231 |
| `sheet-sign-pressure` | 11,367 |
| `sheet-sign-pulse` | 10,636 |
| `sheet-sign-sentiment` | 11,493 |
| `sheet-sign-volume` | 10,657 |
| `volume-range` | 10,658 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 14,073 |
| `desire-range` | 10,666 |
| `fear-range` | 11,445 |
| `hzn-range` | 10,710 |
| `pulse-range` | 10,620 |
| `sheet-metric-gdp` | 13,957 |
| `sheet-metric-power` | 14,029 |
| `sheet-metric-temp` | 13,912 |
| `sheet-metric-valuation` | 14,139 |
| `volume-range` | 10,641 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,404 |
| `sheet-metric-gdp` | 6,405 |
| `sheet-sign-activity` | 6,412 |
| `sheet-metric-power` | 6,413 |
| `sheet-metric-valuation` | 6,415 |
| `sheet-metric-households` | 6,416 |
| `deficit-range` | 6,417 |
| `volume-range` | 6,418 |
| `pulse-range` | 6,419 |
| `hzn-range` | 6,425 |
| `desire-range` | 6,426 |
| `fear-range` | 6,427 |
| `hormones-range` | 6,428 |
| `pressure-range` | 6,429 |

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
| 1,748 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,925 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,463 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,504 | Rhymes (Version 610): today beside one past top |
| 2,545 | A closed cycle's categories (Version 613) |
| 2,575 | hero: yield curve |
| 2,652 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,731 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,830 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,855 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,870 | long cycle (structural layer) |
| 2,911 | indicator grid |
| 2,954 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,971 | info icon + popover (progressive disclosure for longer notes) |
| 2,992 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,087 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (144), which is what the renderers fill:

| Line | id |
|---|---|
| 3,119 | `topbar-back` |
| 3,122 | `topbar-title` |
| 3,123 | `menu-btn` |
| 3,140 | `main` |
| 3,147 | `cycle-view` |
| 3,155 | `cycle-kicker` |
| 3,161 | `cycle-dial` |
| 3,163 | `season-wheel-hub-date` |
| 3,164 | `season-wheel-hub-theme` |
| 3,165 | `season-wheel-hub-detail` |
| 3,173 | `temp-card` |
| 3,175 | `temp-kicker` |
| 3,176 | `temp-sub` |
| 3,179 | `temp-svg` |
| 3,180 | `temp-tooltip` |
| 3,186 | `temp-stats` |
| 3,193 | `growth-card` |
| 3,196 | `growth-kicker` |
| 3,196 | `growth-phase` |
| 3,196 | `growth-sub` |
| 3,197 | `growth-svg` |
| 3,197 | `growth-tooltip` |
| 3,202 | `growth-stats` |
| 3,211 | `today-analysis` |
| 3,215 | `peek-row` |
| 3,219 | `sheet-metric-temp` |
| 3,220 | `temp-timing` |
| 3,221 | `temp-chart` |
| 3,223 | `temp-rangebar` |
| 3,225 | `temp-head` |
| 3,226 | `slot-temp` |
| 3,227 | `temp-history` |
| 3,228 | `temp-hist-tooltip` |
| 3,231 | `temp-trend` |
| 3,235 | `temp-highlights` |
| 3,238 | `sheet-metric-gdp` |
| 3,239 | `gdp-timing` |
| 3,240 | `gdp-chart` |
| 3,241 | `gdp-rangebar` |
| 3,243 | `gdp-head` |
| 3,244 | `slot-growth` |
| 3,245 | `gdp-history` |
| 3,246 | `gdp-hist-tooltip` |
| 3,247 | `gdp-yoy` |
| 3,257 | `gdp-trend` |
| 3,259 | `gdp-panel` |
| 3,264 | `subj-ring-gdp` |
| 3,266 | `subj-label-gdp` |
| 3,267 | `subj-value-gdp` |
| 3,268 | `subj-say-gdp` |
| 3,269 | `subj-spark-gdp` |
| 3,274 | `subj-ctx-gdp` |
| 3,277 | `gdp-highlights` |
| 3,285 | `sheet-metric-power` |
| 3,286 | `power-timing` |
| 3,287 | `power-head` |
| 3,288 | `power-chart` |
| 3,292 | `subj-ring-resilience` |
| 3,295 | `subj-value-resilience` |
| 3,296 | `subj-say-resilience` |
| 3,301 | `subj-ctx-resilience` |
| 3,305 | `longcycle-title` |
| 3,307 | `longcycle-tag` |
| 3,321 | `power-highlights` |
| 3,328 | `sheet-marker-deficit` |
| 3,334 | `sheet-metric-households` |
| 3,335 | `households-timing` |
| 3,336 | `households-chart` |
| 3,337 | `households-highlights` |
| 3,341 | `sheet-metric-valuation` |
| 3,342 | `valuation-timing` |
| 3,343 | `valuation-head` |
| 3,344 | `valuation-chart` |
| 3,348 | `subj-ring-valuation` |
| 3,351 | `subj-value-valuation` |
| 3,352 | `subj-say-valuation` |
| 3,357 | `subj-ctx-valuation` |
| 3,361 | `valuation-title` |
| 3,363 | `valuation-tag` |
| 3,370 | `valuation-highlights` |
| 3,394 | `subj-value-hormones` |
| 3,395 | `subj-say-hormones` |
| 3,403 | `hormones-history` |
| 3,413 | `hormones-insights` |
| 3,439 | `subj-value-horizon` |
| 3,440 | `subj-say-horizon` |
| 3,441 | `subj-spark-horizon` |
| 3,451 | `hzn-timeline` |
| 3,453 | `hzn-head` |
| 3,454 | `spread-history-shell` |
| 3,455 | `spread-history-svg` |
| 3,456 | `spread-history-tooltip` |
| 3,461 | `ylm-shell` |
| 3,462 | `ylm-svg` |
| 3,463 | `ylm-tooltip` |
| 3,466 | `hzn-trend` |
| 3,467 | `ylm-trend` |
| 3,469 | `horizon-insights` |
| 3,497 | `subj-value-pressure` |
| 3,498 | `subj-say-pressure` |
| 3,503 | `pressure-history` |
| 3,504 | `pressure-highlights` |
| 3,510 | `subj-ring-sentiment` |
| 3,513 | `subj-value-sentiment` |
| 3,514 | `subj-say-sentiment` |
| 3,515 | `subj-spark-sentiment` |
| 3,529 | `fear-history` |
| 3,530 | `curve-highlights` |
| 3,544 | `signs-list` |
| 3,555 | `calendar-list` |
| 3,568 | `rhymes-card` |
| 3,579 | `rhy-pick` |
| 3,580 | `rhy-body` |
| 3,627 | `cycle-list` |
| 3,633 | `cycle-more` |
| 3,634 | `cycle-more-label` |
| 3,643 | `calendar-cycle` |
| 3,644 | `calendar-cycle-slot` |
| 3,651 | `cycle-cats` |
| 3,702 | `seasons-kicker` |
| 3,703 | `seasons-rows` |
| 3,707 | `framework-kicker` |
| 3,709 | `framework-rows` |
| 3,716 | `more-menu` |
| 3,719 | `menu-back` |
| 3,733 | `sources-open` |
| 3,741 | `appearance-current` |
| 3,749 | `sheet-howto` |
| 3,793 | `sheet-book` |
| 3,825 | `sheet-appearance` |
| 3,833 | `theme-toggle` |
| 3,840 | `sheet-contact` |
| 3,849 | `contact-form` |
| 3,850 | `contact-title` |
| 3,851 | `contact-message` |
| 3,853 | `contact-hint` |
| 3,854 | `contact-send` |
| 3,863 | `sheet-sources` |
| 3,866 | `sources-back` |
| 3,873 | `asof-text` |
| 3,874 | `sources-groups` |
| 3,881 | `detail-backdrop` |
| 3,883 | `detail-modal-close` |
| 3,884 | `detail-modal-body` |

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

