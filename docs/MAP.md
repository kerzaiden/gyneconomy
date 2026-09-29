# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,950 lines**, about 1261 KB, roughly **358 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `158d4c7` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,108 | the whole stylesheet, every token and rule |
| **Markup** | 3,109–3,894 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,895–14,897 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,898–14,950 | </body></html> |

Counts: **290** top-level functions, **184** top-level vars, **4** top-level IIFEs in the script.

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

_line 3,969_ · 11 declarations

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
| 4,180 | `treasuryQuarterly` | `var treasuryQuarterly =` |

### Version 528: live data without a render refactor

_line 4,190_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,209 | `merge` | `function merge(` |
| 4,216 | `LIVE` | `function LIVE(` |
| 4,240 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,243_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,296 | `paintReading` | `function paintReading(` |
| 4,319 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,343 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,353 | `repaintPressureRow` | `function repaintPressureRow(` |
| 4,359 | `repaintPressureChart` | `function repaintPressureChart(` |
| 4,363 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY (Version 629)

_line 4,368_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,396 | `READINGS` | `var READINGS =` |
| 4,467 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 4,468 | `KINDS` | `var KINDS =` |
| 4,469 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 4,490 | `receive` | `function receive(` |
| 4,514 | `liveAsOf` | `var liveAsOf =` |
| 4,515 | `fmtAsOf` | `function fmtAsOf(` |
| 4,528 | `applyLive` | `function applyLive(` |
| 4,543 | `shapeOk` | `function shapeOk(` |
| 4,553 | `repaintPolicy` | `function repaintPolicy(` |
| 4,605 | `GYN` | `var GYN =` |
| 4,642 | `refreshLiveData` | `function refreshLiveData(` |
| 4,671 | `fetchSiteData` | `function fetchSiteData(` |
| 4,687 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,701_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,702 | `yieldCurve` | `var yieldCurve =` |
| 4,711 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 4,712 | `curveAsOf` | `function curveAsOf(` |
| 4,723 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,747 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,759 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,787_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,792 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,816 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,840 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,864 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,891 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,916_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,925 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,935 | `uninvLagToday` | `var uninvLagToday =` |
| 4,947 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,960 | `gdpPeers` | `var gdpPeers =` |
| 5,001 | `gdpSrc` | `var gdpSrc =` |
| 5,002 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 5,007 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 5,020 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 5,062_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,084 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 5,094_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,110 | `stressScoreFor` | `function stressScoreFor(` |
| 5,116 | `stressScore` | `var stressScore =` |
| 5,122 | `powerOf` | `var powerOf =` |
| 5,123 | `powerScore` | `var powerScore =` |
| 5,140 | `stressHistory` | `var stressHistory =` |
| 5,153 | `powerMeter` | `var powerMeter =` |
| 5,155 | `stressNoteFull` | `var stressNoteFull =` |
| 5,190 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,192_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,215 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,216 | `deficitHistory` | `var deficitHistory =` |
| 5,219 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,226 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,228 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,271_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,284 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,297_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,311 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,314 | `timelineSpan` | `function timelineSpan(` |
| 5,320 | `timelineFor` | `function timelineFor(` |
| 5,333 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,339_ · 32 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,345 | `windowScale` | `function windowScale(` |
| 5,361 | `windowYears` | `function windowYears(` |
| 5,379 | `refName` | `function refName(` |
| 5,386 | `histReadEnsure` | `function histReadEnsure(` |
| 5,425 | `seatBandReading` | `function seatBandReading(` |
| 5,448 | `histReadFill` | `function histReadFill(` |
| 5,576 | `histAxisEnds` | `function histAxisEnds(` |
| 5,587 | `histLegend` | `function histLegend(` |
| 5,675 | `refitHistory` | `function refitHistory(` |
| 5,687 | `wireHistHover` | `function wireHistHover(` |
| 5,767 | `mWindowFrom` | `function mWindowFrom(` |
| 5,772 | `qWindowFrom` | `function qWindowFrom(` |
| 5,777 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,778 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,780 | `DEF_1983` | `var DEF_1983 =` |
| 5,782 | `defFrom` | `function defFrom(` |
| 5,793 | `deficitChart` | `function deficitChart(` |
| 5,882 | `deficitBlock` | `function deficitBlock(` |
| 5,944 | `buffettHistory` | `var buffettHistory =` |
| 5,974 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,975 | `hyDates` | `var hyDates =` |
| 5,976 | `hyOas` | `var hyOas =` |
| 5,977 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,984 | `hyAt` | `function hyAt(` |
| 5,988 | `hyLabel` | `function hyLabel(` |
| 5,989 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,990 | `hyNum` | `function hyNum(` |
| 5,991 | `hyWindowFrom` | `function hyWindowFrom(` |
| 6,001 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 6,011 | `capeHistory` | `var capeHistory =` |
| 6,013 | `longCycleSrc` | `var longCycleSrc =` |
| 6,032 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 6,055_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,061 | `sentiment` | `var sentiment =` |
| 6,079 | `valuation` | `var valuation =` |
| 6,116 | `valRow` | `function valRow(` |
| 6,124 | `coincident` | `var coincident =` |
| 6,185 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,203 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,204 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,205 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,207_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,220 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,221 | `m2vHistory` | `var m2vHistory =` |
| 6,241 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,333 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,422 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,423 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,463_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,469 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,470 | `DOTS` | `var DOTS =` |
| 6,477 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,512 | `headPickRow` | `function headPickRow(` |
| 6,518 | `histHead` | `function histHead(` |
| 6,542 | `headNoteIdx` | `var headNoteIdx =` |
| 6,543 | `headMenuHtml` | `function headMenuHtml(` |
| 6,601 | `headMenuFor` | `var headMenuFor =` |
| 6,603 | `headSubFor` | `var headSubFor =` |
| 6,604 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,653 | `nameWithMark` | `function nameWithMark(` |
| 6,659 | `panelRow` | `function panelRow(` |
| 6,692 | `panelFromMeter` | `function panelFromMeter(` |
| 6,706 | `meterFlagged` | `function meterFlagged(` |
| 6,717 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,745 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,759 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,778 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,797 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,811 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,836 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,867 | `desireBlock` | `function desireBlock(` |
| 6,894 | `volumeBlock` | `function volumeBlock(` |
| 6,919 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,942 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,950_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,963 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,964 | `m2Level` | `var m2Level =` |
| 6,986 | `m2Yoy` | `var m2Yoy =` |
| 6,987 | `M2_NORM` | `var M2_NORM =` |
| 6,992 | `volumeVerdict` | `function volumeVerdict(` |
| 7,029 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 7,030 | `unempHistory` | `var unempHistory =` |
| 7,036 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 7,051 | `NROU_NOW` | `var NROU_NOW =` |
| 7,052 | `unempState` | `function unempState(` |
| 7,058 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones — the policy rate's history

_line 7,120_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,129 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 7,140 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,207 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,208 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,211 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,219_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,234 | `householdsChart` | `function householdsChart(` |
| 7,301 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,384 | `GDP_NORM` | `var GDP_NORM =` |
| 7,390 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,391 | `gdpNowQ` | `var gdpNowQ =` |
| 7,392 | `gdpMeter` | `var gdpMeter =` |
| 7,395 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,417 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,481 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,544 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,552 | `velocityVerdict` | `function velocityVerdict(` |
| 7,560 | `derivePulseTag` | `function derivePulseTag(` |
| 7,566 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,626_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,635 | `seasonReading` | `var seasonReading =` |
| 7,684 | `frameworkRows` | `var frameworkRows =` |
| 7,694 | `vixRow` | `var vixRow =` |
| 7,702 | `vixWordOf` | `var vixWordOf =` |
| 7,706 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,721_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,725 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,734_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,735 | `calendarTodayY` | `var calendarTodayY =` |
| 7,766 | `vix3mClose` | `var vix3mClose =` |
| 7,767 | `fearCurve` | `function fearCurve(` |
| 7,774 | `curveVerdict` | `function curveVerdict(` |
| 7,781 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,786 | `valuationVerdict` | `function valuationVerdict(` |
| 7,804 | `sparkHtml` | `function sparkHtml(` |
| 7,823 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,829_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,842 | `modeBar` | `function modeBar(` |
| 7,857 | `pickerOpen` | `var pickerOpen =` |
| 7,861 | `cycleByName` | `function cycleByName(` |
| 7,865 | `openCycle` | `function openCycle(` |
| 7,871 | `cycleSlice` | `function cycleSlice(` |
| 7,880 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,888 | `cycleMonths` | `function cycleMonths(` |
| 7,907 | `histControls` | `function histControls(` |
| 7,921 | `cycLabel` | `function cycLabel(` |
| 7,937 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,946 | `cyclePicker` | `function cyclePicker(` |
| 7,965 | `rangeBar` | `function rangeBar(` |
| 7,977 | `trendOf` | `function trendOf(` |
| 8,022 | `TREND_ARROW` | `var TREND_ARROW =` |
| 8,032 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 8,053_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,054 | `yearOf` | `function yearOf(` |
| 8,055 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 8,056_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,094 | `headSigma` | `function headSigma(` |
| 8,102 | `atQuarter` | `function atQuarter(` |
| 8,103 | `atMonth` | `function atMonth(` |
| 8,104 | `cycleAverages` | `function cycleAverages(` |
| 8,111 | `ordinal` | `function ordinal(` |
| 8,112 | `hiCard` | `function hiCard(` |
| 8,123 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,137_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,144 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,160 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,167 | `moreRow` | `function moreRow(` |
| 8,173 | `powerPageNote` | `var powerPageNote =` |
| 8,174 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,186_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,189 | `xLabelOf` | `function xLabelOf(` |
| 8,209 | `fitGroup` | `function fitGroup(` |
| 8,231 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,290_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,314 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,324 | `vGrid` | `function vGrid(` |
| 8,349 | `COL_FILL` | `var COL_FILL =` |
| 8,382 | `colPath` | `function colPath(` |
| 8,387 | `colWidth` | `function colWidth(` |
| 8,434 | `AXIS` | `var AXIS =` |
| 8,450 | `histFrame` | `function histFrame(` |
| 8,462 | `xLabel` | `function xLabel(` |
| 8,466 | `crossLine` | `function crossLine(` |
| 8,471 | `zeroRule` | `function zeroRule(` |
| 8,474 | `meanRule` | `function meanRule(` |
| 8,486 | `pendingGeom` | `var pendingGeom =` |
| 8,487 | `publishGeom` | `function publishGeom(` |
| 8,488 | `attachHistory` | `function attachHistory(` |
| 8,503 | `histBar` | `function histBar(` |
| 8,506 | `histTip` | `function histTip(` |
| 8,509 | `avgRule` | `function avgRule(` |
| 8,512 | `vhOpen` | `function vhOpen(` |
| 8,513 | `chartAxes` | `function chartAxes(` |
| 8,573 | `divergeChart` | `function divergeChart(` |
| 8,641 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,670_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,678 | `maxIn` | `function maxIn(` |
| 8,696 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,710 | `PEEK_W` | `var PEEK_W =` |
| 8,713 | `PEEK_H` | `var PEEK_H =` |
| 8,718 | `colPeek` | `function colPeek(` |
| 8,745 | `meterPeek` | `function meterPeek(` |
| 8,762 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,767 | `pressureZone` | `function pressureZone(` |
| 8,782 | `HZN_BACK` | `var HZN_BACK =` |
| 8,783 | `hznLast` | `function hznLast(` |
| 8,784 | `hznBack` | `function hznBack(` |
| 8,785 | `horizonWord` | `function horizonWord(` |
| 8,810 | `HZN_METERS` | `var HZN_METERS =` |
| 8,818 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,859 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,864 | `RISK_RISK` | `var RISK_RISK =` |
| 8,869 | `riskCell` | `function riskCell(` |
| 8,870 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,901 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,926_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,947 | `pulseClipN` | `var pulseClipN =` |
| 8,948 | `beatPath` | `function beatPath(` |
| 8,973 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,987 | `pulsePeek` | `function pulsePeek(` |
| 8,995 | `pulseBlock` | `function pulseBlock(` |
| 9,015 | `CHEV` | `var CHEV =` |
| 9,017 | `peekCard` | `function peekCard(` |
| 9,071 | `dropSvg` | `function dropSvg(` |
| 9,088 | `volumeSvg` | `function volumeSvg(` |
| 9,096 | `gaugeSvg` | `function gaugeSvg(` |
| 9,100 | `diamondSvg` | `function diamondSvg(` |
| 9,114 | `energyFromReserve` | `function energyFromReserve(` |
| 9,126 | `sproutSvg` | `function sproutSvg(` |
| 9,137 | `markSvg` | `function markSvg(` |
| 9,145 | `hormoneSvg` | `function hormoneSvg(` |
| 9,151 | `flameSvg` | `function flameSvg(` |
| 9,155 | `gearSvg` | `function gearSvg(` |
| 9,167 | `thermoSvg` | `function thermoSvg(` |
| 9,186 | `trendUpSvg` | `function trendUpSvg(` |
| 9,188 | `ecgSvg` | `function ecgSvg(` |
| 9,202 | `circulationSvg` | `function circulationSvg(` |
| 9,203 | `weatherSvg` | `function weatherSvg(` |
| 9,224 | `moodSvg` | `function moodSvg(` |
| 9,248 | `boltSvg` | `function boltSvg(` |
| 9,251 | `houseSvg` | `function houseSvg(` |
| 9,259 | `sunriseSvg` | `function sunriseSvg(` |
| 9,274 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,285 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,302_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,323 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,324 | `dsrHistory` | `var dsrHistory =` |
| 9,325 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,326 | `savHistory` | `var savHistory =` |
| 9,331 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,341 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,342 | `dsrNow` | `var dsrNow =` |
| 9,343 | `savNow` | `var savNow =` |
| 9,344 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,349 | `householdsWord` | `function householdsWord(` |
| 9,356 | `householdsNow` | `var householdsNow =` |
| 9,363 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,364 | `dsrMeter` | `var dsrMeter =` |
| 9,367 | `savMeter` | `var savMeter =` |
| 9,370 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,387 | `savInfoHtml` | `function savInfoHtml(` |
| 9,405 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,414 | `curveNow` | `var curveNow =` |
| 9,415 | `curveTag` | `var curveTag =` |
| 9,416 | `curveSub` | `var curveSub =` |
| 9,420 | `curvePct` | `function curvePct(` |
| 9,421 | `curveNoteFull` | `var curveNoteFull =` |
| 9,436 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,444 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,485 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,513_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,527 | `marketTops` | `var marketTops =` |
| 9,537 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,542 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,544_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,565 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,566 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,571_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,592 | `slopeOf` | `function slopeOf(` |
| 9,603 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,609 | `readSeason` | `function readSeason(` |
| 9,634 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,636 | `qLabel` | `function qLabel(` |
| 9,660 | `regimeTrack` | `function regimeTrack(` |
| 9,683 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,685_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,692 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,693 | `seasonTitle` | `function seasonTitle(` |
| 9,694 | `monthLabel` | `function monthLabel(` |
| 9,695 | `cycleModel` | `function cycleModel(` |
| 9,747 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,755 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,762 | `nowModel` | `var nowModel =` |
| 9,763 | `readingNow` | `var readingNow =` |
| 9,764 | `cpiNow` | `var cpiNow =` |
| 9,765 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,766 | `currentSeason` | `var currentSeason =` |
| 9,767 | `seasonWhy` | `var seasonWhy =` |
| 9,784 | `seasonGroup` | `function seasonGroup(` |
| 9,798 | `arcGauge` | `function arcGauge(` |
| 9,840 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,853 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,857 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,859 | `spreadLabel` | `function spreadLabel(` |
| 9,866 | `policyFacts` | `function policyFacts(` |
| 9,880 | `policyFactRows` | `function policyFactRows(` |
| 9,886 | `allSources` | `var allSources =` |
| 9,910 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,943_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,946 | `SVG_NS` | `var SVG_NS =` |
| 9,947 | `svgEl` | `function svgEl(` |
| 9,960 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,996_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,997 | `clampPct` | `function clampPct(` |
| 10,004 | `infoIcon` | `function infoIcon(` |
| 10,013 | `detailTexts` | `var detailTexts =` |
| 10,031 | `detailSlots` | `var detailSlots =` |
| 10,032 | `detailSlot` | `function detailSlot(` |
| 10,043 | `powerPanelHtml` | `var powerPanelHtml =` |
| 10,047 | `_growthPanel` | `var _growthPanel =` |
| 10,048 | `growthPanelHtml` | `function growthPanelHtml(` |
| 10,054 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 10,065 | `facts` | `function facts(` |
| 10,066 | `factsFrom` | `function factsFrom(` |
| 10,070 | `expandBtn` | `function expandBtn(` |
| 10,076 | `sheetRenderers` | `var sheetRenderers =` |
| 10,093 | `pageMode` | `var pageMode =` |
| 10,100 | `pageCycles` | `var pageCycles =` |
| 10,105 | `pageRange` | `var pageRange =` |
| 10,111 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,145_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,156 | `meterHtml` | `function meterHtml(` |
| 10,186 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW (Version 631)

_line 10,187_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,195 | `subjectRow` | `function subjectRow(` |
| 10,207 | `subjectIcon` | `function subjectIcon(` |
| 10,208 | `srcHtml` | `function srcHtml(` |
| 10,217 | `TIMING` | `var TIMING =` |
| 10,223 | `timingMark` | `function timingMark(` |
| 10,237 | `timingPill` | `function timingPill(` |
| 10,258 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,266 | `seatPageFoot` | `function seatPageFoot(` |
| 10,289 | `timingMembers` | `var timingMembers =` |
| 10,290 | `registerTiming` | `function registerTiming(` |
| 10,296 | `headHtml` | `function headHtml(` |
| 10,314 | `heldHighlights` | `var heldHighlights =` |
| 10,315 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time (V639)

_line 10,373_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,385 | `CURVE_KEY` | `var CURVE_KEY =` |
| 10,386 | `latestYieldPoint` | `function latestYieldPoint(` |
| 10,394 | `withLatestPoint` | `function withLatestPoint(` |
| 10,399 | `renderPressurePage` | `function renderPressurePage(` |

### V640: Pressure's Insights

_line 10,818_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,827 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,864_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,865 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 11,087_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,088 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 11,120_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,130 | `drawHznHead` | `function drawHznHead(` |
| 11,145 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,223_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,224 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,242_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,245 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,268_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,280 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,414_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,415 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,539_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,542 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,665_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,677 | `totalRiseIn` | `function totalRiseIn(` |
| 11,687 | `eraInflation` | `function eraInflation(` |
| 11,698 | `eraGrowth` | `function eraGrowth(` |
| 11,718 | `fmtSigned` | `function fmtSigned(` |
| 11,723 | `regimeArrow` | `function regimeArrow(` |
| 11,729 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,730 | `growthShown` | `function growthShown(` |
| 11,731 | `growthShownCap` | `function growthShownCap(` |
| 11,732 | `regimeState` | `function regimeState(` |
| 11,736 | `phaseClass` | `function phaseClass(` |
| 11,738 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,750 | `cycleViewEl` | `var cycleViewEl =` |
| 11,756 | `tempCard` | `var tempCard =` |
| 11,757 | `placeCharts` | `function placeCharts(` |
| 11,762 | `shownEra` | `var shownEra =` |
| 11,763 | `calendarReset` | `var calendarReset =` |
| 11,764 | `metricPageReset` | `var metricPageReset =` |
| 11,765 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,768 | `topbarBack` | `var topbarBack =` |
| 11,769 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,776_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,777 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,938_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,939 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,957_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,960 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,981_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,987 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,990 | `hubSet` | `function hubSet(` |
| 12,003 | `quarterPopup` | `function quarterPopup(` |
| 12,036 | `hubShowDefault` | `function hubShowDefault(` |
| 12,045 | `hubShowQuarter` | `function hubShowQuarter(` |
| 12,051 | `hubShowYear` | `function hubShowYear(` |
| 12,066 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,158_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,161 | `tempState` | `var tempState =` |
| 12,164 | `chartLink` | `var chartLink =` |
| 12,184 | `m2Step` | `function m2Step(` |
| 12,187 | `heatStep` | `function heatStep(` |
| 12,191 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,378_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,381 | `drawGrowth` | `function drawGrowth(` |
| 12,520 | `wireResize` | `function wireResize(` |
| 12,526 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,538_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,539 | `renderCycleView` | `function renderCycleView(` |
| 12,600 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,608_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,619 | `peerChosen` | `function peerChosen(` |
| 12,620 | `peerReaches` | `function peerReaches(` |
| 12,650 | `shownEraModel` | `var shownEraModel =` |
| 12,651 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,653_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,655 | `stripGroupName` | `var stripGroupName =` |
| 12,656 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,702 | `marketStripHtml` | `function marketStripHtml(` |
| 12,765 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,766 | `settleStrips` | `function settleStrips(` |
| 12,801 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES (Version 630)

_line 13,080_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,094 | `partsOf` | `function partsOf(` |
| 13,103 | `discOf` | `function discOf(` |
| 13,110 | `authored` | `function authored(` |
| 13,116 | `registerRoster` | `function registerRoster(` |
| 13,158 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER (Version 630)

_line 13,170_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,179 | `NAV` | `var NAV =` |
| 13,180 | `buildNav` | `function buildNav(` |

### ALL INDICATORS (Version 630)

_line 13,294_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,298 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories (Version 630)

_line 13,358_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,361 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES (Version 630)

_line 13,852_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,856 | `renderMetricPages` | `function renderMetricPages(` |

### GDP growth

_line 14,294_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,349 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,381_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,382 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,482_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,494 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,537_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,545 | `__roster` | `var __roster =` |
| 14,546 | `readingRoster` | `function readingRoster(` |
| 14,601 | `readFig` | `function readFig(` |
| 14,609 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612)

_line 14,616_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,644 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,697_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,698 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,758_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,759 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,792_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,793 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,203–4,206 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,791–8,804 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,643–9,656 | `seasonTrackAll` | The season, computed |
| 9,678–9,682 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 14,081 |
| `desire-range` | 10,722 |
| `fear-range` | 11,504 |
| `hormones-range` | 11,314 |
| `hzn-range` | 11,173 |
| `pressure-range` | 4,361 |
| `pulse-range` | 10,678 |
| `sheet-marker-deficit` | 14,078 |
| `sheet-metric-gdp` | 13,970 |
| `sheet-metric-households` | 14,108 |
| `sheet-metric-power` | 14,042 |
| `sheet-metric-temp` | 13,925 |
| `sheet-metric-valuation` | 14,152 |
| `sheet-sign-activity` | 14,026 |
| `sheet-sign-desire` | 10,723 |
| `sheet-sign-horizon` | 11,174 |
| `sheet-sign-hormones` | 11,317 |
| `sheet-sign-pressure` | 10,799 |
| `sheet-sign-pulse` | 10,677 |
| `sheet-sign-sentiment` | 11,509 |
| `sheet-sign-volume` | 10,698 |
| `volume-range` | 10,699 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 14,087 |
| `desire-range` | 10,707 |
| `fear-range` | 11,461 |
| `hzn-range` | 11,155 |
| `pressure-range` | 10,756 |
| `pulse-range` | 10,661 |
| `sheet-metric-gdp` | 13,971 |
| `sheet-metric-power` | 14,043 |
| `sheet-metric-temp` | 13,926 |
| `sheet-metric-valuation` | 14,153 |
| `volume-range` | 10,682 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,484 |
| `sheet-metric-gdp` | 6,485 |
| `sheet-sign-activity` | 6,492 |
| `sheet-metric-power` | 6,493 |
| `sheet-metric-valuation` | 6,495 |
| `sheet-metric-households` | 6,496 |
| `deficit-range` | 6,497 |
| `volume-range` | 6,498 |
| `pulse-range` | 6,499 |
| `hzn-range` | 6,504 |
| `desire-range` | 6,505 |
| `fear-range` | 6,506 |
| `hormones-range` | 6,507 |
| `pressure-range` | 6,508 |

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

