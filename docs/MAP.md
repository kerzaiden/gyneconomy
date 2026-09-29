# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,935 lines**, about 1236 KB, roughly **351 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `d2aca0a` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,112 | the whole stylesheet, every token and rule |
| **Markup** | 3,113–3,888 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,889–14,882 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,883–14,935 | </body></html> |

Counts: **286** top-level functions, **181** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 3,889_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,904 | `byId` | `function byId(` |
| 3,912 | `byIdMaybe` | `function byIdMaybe(` |
| 3,919 | `put` | `function put(` |
| 3,926 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 3,930_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,934 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,935 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,936 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,954 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,958 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,963_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,973 | `wheelMeta` | `var wheelMeta =` |
| 3,984 | `seasonOverride` | `var seasonOverride =` |
| 3,987 | `cycleNowNote` | `var cycleNowNote =` |
| 3,996 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,082 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,127 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,140_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,159 | `merge` | `function merge(` |
| 4,166 | `LIVE` | `function LIVE(` |
| 4,190 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,193_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,246 | `paintReading` | `function paintReading(` |
| 4,269 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,293 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,301 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY (Version 629)

_line 4,306_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,334 | `READINGS` | `var READINGS =` |
| 4,405 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 4,406 | `KINDS` | `var KINDS =` |
| 4,407 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 4,428 | `receive` | `function receive(` |
| 4,452 | `liveAsOf` | `var liveAsOf =` |
| 4,453 | `fmtAsOf` | `function fmtAsOf(` |
| 4,466 | `applyLive` | `function applyLive(` |
| 4,481 | `shapeOk` | `function shapeOk(` |
| 4,491 | `repaintPolicy` | `function repaintPolicy(` |
| 4,543 | `GYN` | `var GYN =` |
| 4,580 | `refreshLiveData` | `function refreshLiveData(` |
| 4,609 | `fetchSiteData` | `function fetchSiteData(` |
| 4,625 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,639_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,640 | `yieldCurve` | `var yieldCurve =` |
| 4,653 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,677 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,689 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,717_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,722 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,746 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,770 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,794 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,821 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,846_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,855 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,865 | `uninvLagToday` | `var uninvLagToday =` |
| 4,877 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,890 | `gdpPeers` | `var gdpPeers =` |
| 4,931 | `gdpSrc` | `var gdpSrc =` |
| 4,932 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,937 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,950 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,988_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,010 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 5,020_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,036 | `stressScoreFor` | `function stressScoreFor(` |
| 5,042 | `stressScore` | `var stressScore =` |
| 5,048 | `powerOf` | `var powerOf =` |
| 5,049 | `powerScore` | `var powerScore =` |
| 5,066 | `stressHistory` | `var stressHistory =` |
| 5,077 | `powerMeter` | `var powerMeter =` |
| 5,079 | `stressNoteFull` | `var stressNoteFull =` |
| 5,111 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,113_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,136 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,137 | `deficitHistory` | `var deficitHistory =` |
| 5,140 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,147 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,149 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,197 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,198 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,199 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,216_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,229 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,242_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,256 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,259 | `timelineSpan` | `function timelineSpan(` |
| 5,265 | `timelineFor` | `function timelineFor(` |
| 5,278 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,284_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,290 | `windowScale` | `function windowScale(` |
| 5,306 | `windowYears` | `function windowYears(` |
| 5,324 | `refName` | `function refName(` |
| 5,331 | `histReadEnsure` | `function histReadEnsure(` |
| 5,370 | `seatBandReading` | `function seatBandReading(` |
| 5,393 | `histReadFill` | `function histReadFill(` |
| 5,521 | `histAxisEnds` | `function histAxisEnds(` |
| 5,532 | `histLegend` | `function histLegend(` |
| 5,620 | `refitHistory` | `function refitHistory(` |
| 5,632 | `wireHistHover` | `function wireHistHover(` |
| 5,712 | `mWindowFrom` | `function mWindowFrom(` |
| 5,717 | `qWindowFrom` | `function qWindowFrom(` |
| 5,722 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,723 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,725 | `DEF_1983` | `var DEF_1983 =` |
| 5,727 | `defFrom` | `function defFrom(` |
| 5,738 | `deficitChart` | `function deficitChart(` |
| 5,827 | `deficitBlock` | `function deficitBlock(` |
| 5,889 | `buffettHistory` | `var buffettHistory =` |
| 5,919 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,920 | `hyDates` | `var hyDates =` |
| 5,921 | `hyOas` | `var hyOas =` |
| 5,922 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,929 | `hyAt` | `function hyAt(` |
| 5,933 | `hyLabel` | `function hyLabel(` |
| 5,934 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,935 | `hyNum` | `function hyNum(` |
| 5,936 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,946 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,956 | `capeHistory` | `var capeHistory =` |
| 5,958 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,976_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,982 | `sentiment` | `var sentiment =` |
| 6,000 | `valuation` | `var valuation =` |
| 6,037 | `valRow` | `function valRow(` |
| 6,045 | `coincident` | `var coincident =` |
| 6,106 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,124 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,125 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,126 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,128_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,141 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,142 | `m2vHistory` | `var m2vHistory =` |
| 6,162 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,254 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,343 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,344 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,384_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,390 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,391 | `DOTS` | `var DOTS =` |
| 6,398 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,432 | `histHead` | `function histHead(` |
| 6,456 | `headNoteIdx` | `var headNoteIdx =` |
| 6,457 | `headMenuHtml` | `function headMenuHtml(` |
| 6,515 | `headMenuFor` | `var headMenuFor =` |
| 6,517 | `headSubFor` | `var headSubFor =` |
| 6,518 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,567 | `nameWithMark` | `function nameWithMark(` |
| 6,573 | `panelRow` | `function panelRow(` |
| 6,606 | `panelFromMeter` | `function panelFromMeter(` |
| 6,620 | `meterFlagged` | `function meterFlagged(` |
| 6,631 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,659 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,673 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,692 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,711 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,725 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,750 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,781 | `desireBlock` | `function desireBlock(` |
| 6,808 | `volumeBlock` | `function volumeBlock(` |
| 6,833 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,856 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,864_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,877 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,878 | `m2Level` | `var m2Level =` |
| 6,900 | `m2Yoy` | `var m2Yoy =` |
| 6,901 | `M2_NORM` | `var M2_NORM =` |
| 6,906 | `volumeVerdict` | `function volumeVerdict(` |
| 6,943 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,944 | `unempHistory` | `var unempHistory =` |
| 6,950 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,965 | `NROU_NOW` | `var NROU_NOW =` |
| 6,966 | `unempState` | `function unempState(` |
| 6,972 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones — the policy rate's history

_line 7,034_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,043 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 7,052_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,065 | `checkLendingStandards` | `function checkLendingStandards(` |
| 7,078 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,132 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,199 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,200 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,203 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,211_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,226 | `householdsChart` | `function householdsChart(` |
| 7,293 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,376 | `GDP_NORM` | `var GDP_NORM =` |
| 7,382 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,383 | `gdpNowQ` | `var gdpNowQ =` |
| 7,384 | `gdpMeter` | `var gdpMeter =` |
| 7,387 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,409 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,473 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,536 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,544 | `velocityVerdict` | `function velocityVerdict(` |
| 7,552 | `derivePulseTag` | `function derivePulseTag(` |
| 7,558 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,618_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,627 | `seasonReading` | `var seasonReading =` |
| 7,676 | `frameworkRows` | `var frameworkRows =` |
| 7,686 | `vixRow` | `var vixRow =` |
| 7,694 | `vixWordOf` | `var vixWordOf =` |
| 7,698 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,713_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,717 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,726_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,727 | `calendarTodayY` | `var calendarTodayY =` |
| 7,758 | `vix3mClose` | `var vix3mClose =` |
| 7,759 | `fearCurve` | `function fearCurve(` |
| 7,766 | `curveVerdict` | `function curveVerdict(` |
| 7,773 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,778 | `valuationVerdict` | `function valuationVerdict(` |
| 7,796 | `sparkHtml` | `function sparkHtml(` |
| 7,815 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,821_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,834 | `modeBar` | `function modeBar(` |
| 7,849 | `pickerOpen` | `var pickerOpen =` |
| 7,853 | `cycleByName` | `function cycleByName(` |
| 7,857 | `openCycle` | `function openCycle(` |
| 7,863 | `cycleSlice` | `function cycleSlice(` |
| 7,872 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,880 | `cycleMonths` | `function cycleMonths(` |
| 7,899 | `histControls` | `function histControls(` |
| 7,913 | `cycLabel` | `function cycLabel(` |
| 7,929 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,938 | `cyclePicker` | `function cyclePicker(` |
| 7,957 | `rangeBar` | `function rangeBar(` |
| 7,969 | `trendOf` | `function trendOf(` |
| 8,014 | `TREND_ARROW` | `var TREND_ARROW =` |
| 8,024 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 8,045_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,046 | `yearOf` | `function yearOf(` |
| 8,047 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 8,048_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,086 | `headSigma` | `function headSigma(` |
| 8,094 | `atQuarter` | `function atQuarter(` |
| 8,095 | `atMonth` | `function atMonth(` |
| 8,096 | `cycleAverages` | `function cycleAverages(` |
| 8,103 | `ordinal` | `function ordinal(` |
| 8,104 | `hiCard` | `function hiCard(` |
| 8,115 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,129_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,136 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,152 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,159 | `moreRow` | `function moreRow(` |
| 8,165 | `powerPageNote` | `var powerPageNote =` |
| 8,166 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,178_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,181 | `xLabelOf` | `function xLabelOf(` |
| 8,201 | `fitGroup` | `function fitGroup(` |
| 8,223 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,282_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,306 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,316 | `vGrid` | `function vGrid(` |
| 8,341 | `COL_FILL` | `var COL_FILL =` |
| 8,374 | `colPath` | `function colPath(` |
| 8,379 | `colWidth` | `function colWidth(` |
| 8,426 | `AXIS` | `var AXIS =` |
| 8,442 | `histFrame` | `function histFrame(` |
| 8,454 | `xLabel` | `function xLabel(` |
| 8,458 | `crossLine` | `function crossLine(` |
| 8,463 | `zeroRule` | `function zeroRule(` |
| 8,466 | `meanRule` | `function meanRule(` |
| 8,478 | `pendingGeom` | `var pendingGeom =` |
| 8,479 | `publishGeom` | `function publishGeom(` |
| 8,480 | `attachHistory` | `function attachHistory(` |
| 8,495 | `histBar` | `function histBar(` |
| 8,498 | `histTip` | `function histTip(` |
| 8,501 | `avgRule` | `function avgRule(` |
| 8,504 | `vhOpen` | `function vhOpen(` |
| 8,505 | `chartAxes` | `function chartAxes(` |
| 8,565 | `divergeChart` | `function divergeChart(` |
| 8,633 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,662_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,670 | `maxIn` | `function maxIn(` |
| 8,688 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,702 | `PEEK_W` | `var PEEK_W =` |
| 8,705 | `PEEK_H` | `var PEEK_H =` |
| 8,710 | `colPeek` | `function colPeek(` |
| 8,737 | `meterPeek` | `function meterPeek(` |
| 8,754 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,759 | `pressureZone` | `function pressureZone(` |
| 8,774 | `HZN_BACK` | `var HZN_BACK =` |
| 8,775 | `hznLast` | `function hznLast(` |
| 8,776 | `hznBack` | `function hznBack(` |
| 8,777 | `horizonWord` | `function horizonWord(` |
| 8,802 | `HZN_METERS` | `var HZN_METERS =` |
| 8,810 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,851 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,856 | `RISK_RISK` | `var RISK_RISK =` |
| 8,861 | `riskCell` | `function riskCell(` |
| 8,862 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,893 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,918_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,939 | `pulseClipN` | `var pulseClipN =` |
| 8,940 | `beatPath` | `function beatPath(` |
| 8,965 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,979 | `pulsePeek` | `function pulsePeek(` |
| 8,987 | `pulseBlock` | `function pulseBlock(` |
| 9,007 | `CHEV` | `var CHEV =` |
| 9,009 | `peekCard` | `function peekCard(` |
| 9,063 | `dropSvg` | `function dropSvg(` |
| 9,075 | `volumeSvg` | `function volumeSvg(` |
| 9,082 | `gaugeSvg` | `function gaugeSvg(` |
| 9,086 | `diamondSvg` | `function diamondSvg(` |
| 9,100 | `energyFromReserve` | `function energyFromReserve(` |
| 9,112 | `sproutSvg` | `function sproutSvg(` |
| 9,123 | `markSvg` | `function markSvg(` |
| 9,132 | `pressureSvg` | `function pressureSvg(` |
| 9,136 | `hormoneSvg` | `function hormoneSvg(` |
| 9,142 | `flameSvg` | `function flameSvg(` |
| 9,146 | `gearSvg` | `function gearSvg(` |
| 9,158 | `thermoSvg` | `function thermoSvg(` |
| 9,177 | `trendUpSvg` | `function trendUpSvg(` |
| 9,179 | `ecgSvg` | `function ecgSvg(` |
| 9,193 | `circulationSvg` | `function circulationSvg(` |
| 9,194 | `weatherSvg` | `function weatherSvg(` |
| 9,215 | `moodSvg` | `function moodSvg(` |
| 9,239 | `boltSvg` | `function boltSvg(` |
| 9,242 | `houseSvg` | `function houseSvg(` |
| 9,250 | `sunriseSvg` | `function sunriseSvg(` |
| 9,265 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,276 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,293_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,314 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,315 | `dsrHistory` | `var dsrHistory =` |
| 9,316 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,317 | `savHistory` | `var savHistory =` |
| 9,322 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,332 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,333 | `dsrNow` | `var dsrNow =` |
| 9,334 | `savNow` | `var savNow =` |
| 9,335 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,340 | `householdsWord` | `function householdsWord(` |
| 9,347 | `householdsNow` | `var householdsNow =` |
| 9,354 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,355 | `dsrMeter` | `var dsrMeter =` |
| 9,358 | `savMeter` | `var savMeter =` |
| 9,361 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,378 | `savInfoHtml` | `function savInfoHtml(` |
| 9,396 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,405 | `curveNow` | `var curveNow =` |
| 9,406 | `curveTag` | `var curveTag =` |
| 9,407 | `curveSub` | `var curveSub =` |
| 9,411 | `curvePct` | `function curvePct(` |
| 9,412 | `curveNoteFull` | `var curveNoteFull =` |
| 9,427 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,435 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,476 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,504_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,518 | `marketTops` | `var marketTops =` |
| 9,528 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,533 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,535_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,556 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,557 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,562_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,583 | `slopeOf` | `function slopeOf(` |
| 9,594 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,600 | `readSeason` | `function readSeason(` |
| 9,625 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,627 | `qLabel` | `function qLabel(` |
| 9,651 | `regimeTrack` | `function regimeTrack(` |
| 9,674 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,676_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,683 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,684 | `seasonTitle` | `function seasonTitle(` |
| 9,685 | `monthLabel` | `function monthLabel(` |
| 9,686 | `cycleModel` | `function cycleModel(` |
| 9,738 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,746 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,753 | `nowModel` | `var nowModel =` |
| 9,754 | `readingNow` | `var readingNow =` |
| 9,755 | `cpiNow` | `var cpiNow =` |
| 9,756 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,757 | `currentSeason` | `var currentSeason =` |
| 9,758 | `seasonWhy` | `var seasonWhy =` |
| 9,775 | `seasonGroup` | `function seasonGroup(` |
| 9,789 | `arcGauge` | `function arcGauge(` |
| 9,831 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,844 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,851 | `tsyView` | `var tsyView =` |
| 9,853 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,855 | `spreadLabel` | `function spreadLabel(` |
| 9,862 | `policyFacts` | `function policyFacts(` |
| 9,876 | `policyFactRows` | `function policyFactRows(` |
| 9,882 | `allSources` | `var allSources =` |
| 9,906 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,939_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,942 | `SVG_NS` | `var SVG_NS =` |
| 9,943 | `svgEl` | `function svgEl(` |
| 9,956 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,992_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,993 | `clampPct` | `function clampPct(` |
| 10,000 | `infoIcon` | `function infoIcon(` |
| 10,009 | `detailTexts` | `var detailTexts =` |
| 10,027 | `detailSlots` | `var detailSlots =` |
| 10,028 | `detailSlot` | `function detailSlot(` |
| 10,039 | `powerPanelHtml` | `var powerPanelHtml =` |
| 10,043 | `_growthPanel` | `var _growthPanel =` |
| 10,044 | `growthPanelHtml` | `function growthPanelHtml(` |
| 10,050 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 10,061 | `facts` | `function facts(` |
| 10,062 | `factsFrom` | `function factsFrom(` |
| 10,066 | `expandBtn` | `function expandBtn(` |
| 10,072 | `sheetRenderers` | `var sheetRenderers =` |
| 10,089 | `pageMode` | `var pageMode =` |
| 10,096 | `pageCycles` | `var pageCycles =` |
| 10,101 | `pageRange` | `var pageRange =` |
| 10,107 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,141_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,152 | `meterHtml` | `function meterHtml(` |
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
| 4,153–4,156 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,783–8,796 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,634–9,647 | `seasonTrackAll` | The season, computed |
| 9,669–9,673 | `regimeByQ` | The season, computed |

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
| `sheet-metric-temp` | 6,405 |
| `sheet-metric-gdp` | 6,406 |
| `sheet-sign-activity` | 6,413 |
| `sheet-metric-power` | 6,414 |
| `sheet-metric-valuation` | 6,416 |
| `sheet-metric-households` | 6,417 |
| `deficit-range` | 6,418 |
| `volume-range` | 6,419 |
| `pulse-range` | 6,420 |
| `hzn-range` | 6,426 |
| `desire-range` | 6,427 |
| `fear-range` | 6,428 |
| `hormones-range` | 6,429 |
| `pressure-range` | 6,430 |

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
| 2,970 | info icon + popover (progressive disclosure for longer notes) |
| 2,991 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,086 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (144), which is what the renderers fill:

| Line | id |
|---|---|
| 3,118 | `topbar-back` |
| 3,121 | `topbar-title` |
| 3,122 | `menu-btn` |
| 3,139 | `main` |
| 3,146 | `cycle-view` |
| 3,154 | `cycle-kicker` |
| 3,160 | `cycle-dial` |
| 3,162 | `season-wheel-hub-date` |
| 3,163 | `season-wheel-hub-theme` |
| 3,164 | `season-wheel-hub-detail` |
| 3,172 | `temp-card` |
| 3,174 | `temp-kicker` |
| 3,175 | `temp-sub` |
| 3,178 | `temp-svg` |
| 3,179 | `temp-tooltip` |
| 3,185 | `temp-stats` |
| 3,192 | `growth-card` |
| 3,195 | `growth-kicker` |
| 3,195 | `growth-phase` |
| 3,195 | `growth-sub` |
| 3,196 | `growth-svg` |
| 3,196 | `growth-tooltip` |
| 3,201 | `growth-stats` |
| 3,210 | `today-analysis` |
| 3,214 | `peek-row` |
| 3,218 | `sheet-metric-temp` |
| 3,219 | `temp-timing` |
| 3,220 | `temp-chart` |
| 3,222 | `temp-rangebar` |
| 3,224 | `temp-head` |
| 3,225 | `slot-temp` |
| 3,226 | `temp-history` |
| 3,227 | `temp-hist-tooltip` |
| 3,230 | `temp-trend` |
| 3,234 | `temp-highlights` |
| 3,237 | `sheet-metric-gdp` |
| 3,238 | `gdp-timing` |
| 3,239 | `gdp-chart` |
| 3,240 | `gdp-rangebar` |
| 3,242 | `gdp-head` |
| 3,243 | `slot-growth` |
| 3,244 | `gdp-history` |
| 3,245 | `gdp-hist-tooltip` |
| 3,246 | `gdp-yoy` |
| 3,256 | `gdp-trend` |
| 3,258 | `gdp-panel` |
| 3,263 | `subj-ring-gdp` |
| 3,265 | `subj-label-gdp` |
| 3,266 | `subj-value-gdp` |
| 3,267 | `subj-say-gdp` |
| 3,268 | `subj-spark-gdp` |
| 3,273 | `subj-ctx-gdp` |
| 3,276 | `gdp-highlights` |
| 3,284 | `sheet-metric-power` |
| 3,285 | `power-timing` |
| 3,286 | `power-head` |
| 3,287 | `power-chart` |
| 3,291 | `subj-ring-resilience` |
| 3,294 | `subj-value-resilience` |
| 3,295 | `subj-say-resilience` |
| 3,300 | `subj-ctx-resilience` |
| 3,304 | `longcycle-title` |
| 3,306 | `longcycle-tag` |
| 3,320 | `power-highlights` |
| 3,327 | `sheet-marker-deficit` |
| 3,333 | `sheet-metric-households` |
| 3,334 | `households-timing` |
| 3,335 | `households-chart` |
| 3,336 | `households-highlights` |
| 3,340 | `sheet-metric-valuation` |
| 3,341 | `valuation-timing` |
| 3,342 | `valuation-head` |
| 3,343 | `valuation-chart` |
| 3,347 | `subj-ring-valuation` |
| 3,350 | `subj-value-valuation` |
| 3,351 | `subj-say-valuation` |
| 3,356 | `subj-ctx-valuation` |
| 3,360 | `valuation-title` |
| 3,362 | `valuation-tag` |
| 3,369 | `valuation-highlights` |
| 3,393 | `subj-value-hormones` |
| 3,394 | `subj-say-hormones` |
| 3,402 | `hormones-history` |
| 3,412 | `hormones-insights` |
| 3,438 | `subj-value-horizon` |
| 3,439 | `subj-say-horizon` |
| 3,440 | `subj-spark-horizon` |
| 3,450 | `hzn-timeline` |
| 3,452 | `hzn-head` |
| 3,453 | `spread-history-shell` |
| 3,454 | `spread-history-svg` |
| 3,455 | `spread-history-tooltip` |
| 3,460 | `ylm-shell` |
| 3,461 | `ylm-svg` |
| 3,462 | `ylm-tooltip` |
| 3,465 | `hzn-trend` |
| 3,466 | `ylm-trend` |
| 3,468 | `horizon-insights` |
| 3,496 | `subj-value-pressure` |
| 3,497 | `subj-say-pressure` |
| 3,502 | `pressure-history` |
| 3,503 | `pressure-highlights` |
| 3,509 | `subj-ring-sentiment` |
| 3,512 | `subj-value-sentiment` |
| 3,513 | `subj-say-sentiment` |
| 3,514 | `subj-spark-sentiment` |
| 3,528 | `fear-history` |
| 3,529 | `curve-highlights` |
| 3,543 | `signs-list` |
| 3,554 | `calendar-list` |
| 3,567 | `rhymes-card` |
| 3,578 | `rhy-pick` |
| 3,579 | `rhy-body` |
| 3,626 | `cycle-list` |
| 3,632 | `cycle-more` |
| 3,633 | `cycle-more-label` |
| 3,642 | `calendar-cycle` |
| 3,643 | `calendar-cycle-slot` |
| 3,650 | `cycle-cats` |
| 3,701 | `seasons-kicker` |
| 3,702 | `seasons-rows` |
| 3,706 | `framework-kicker` |
| 3,708 | `framework-rows` |
| 3,715 | `more-menu` |
| 3,718 | `menu-back` |
| 3,732 | `sources-open` |
| 3,740 | `appearance-current` |
| 3,748 | `sheet-howto` |
| 3,792 | `sheet-book` |
| 3,824 | `sheet-appearance` |
| 3,832 | `theme-toggle` |
| 3,839 | `sheet-contact` |
| 3,848 | `contact-form` |
| 3,849 | `contact-title` |
| 3,850 | `contact-message` |
| 3,852 | `contact-hint` |
| 3,853 | `contact-send` |
| 3,862 | `sheet-sources` |
| 3,865 | `sources-back` |
| 3,872 | `asof-text` |
| 3,873 | `sources-groups` |
| 3,880 | `detail-backdrop` |
| 3,882 | `detail-modal-close` |
| 3,883 | `detail-modal-body` |

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

