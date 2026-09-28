# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,186 lines**, about 1186 KB, roughly **337 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `b39efc8` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,045 | the whole stylesheet, every token and rule |
| **Markup** | 3,046–3,795 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,796–14,133 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,134–14,186 | </body></html> |

Counts: **253** top-level functions, **178** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,801_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,805 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,806 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,807 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,825 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,829 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,834_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,844 | `wheelMeta` | `var wheelMeta =` |
| 3,855 | `seasonOverride` | `var seasonOverride =` |
| 3,858 | `cycleNowNote` | `var cycleNowNote =` |
| 3,867 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,953 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,998 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,011_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,028 | `LIVE` | `function LIVE(` |
| 4,055 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,063 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,064 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,067_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,098 | `repaintFigureText` | `function repaintFigureText(` |
| 4,111 | `repaintRow` | `function repaintRow(` |
| 4,124 | `repaintTag` | `function repaintTag(` |
| 4,134 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,159 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,167 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,175 | `REPAINT` | `var REPAINT =` |
| 4,192 | `liveAsOf` | `var liveAsOf =` |
| 4,193 | `fmtAsOf` | `function fmtAsOf(` |
| 4,198 | `applyLive` | `function applyLive(` |
| 4,277 | `repaintPolicy` | `function repaintPolicy(` |
| 4,333 | `GYN` | `var GYN =` |
| 4,353 | `refreshLiveData` | `function refreshLiveData(` |
| 4,394 | `fetchSiteData` | `function fetchSiteData(` |
| 4,424 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,438_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,439 | `yieldCurve` | `var yieldCurve =` |
| 4,452 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,476 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,488 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,516_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,521 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,545 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,569 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,593 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,620 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,645_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,654 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,664 | `uninvLagToday` | `var uninvLagToday =` |
| 4,676 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,689 | `gdpPeers` | `var gdpPeers =` |
| 4,730 | `gdpSrc` | `var gdpSrc =` |
| 4,731 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,736 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,749 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,787_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,809 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,819_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,835 | `stressScoreFor` | `function stressScoreFor(` |
| 4,841 | `stressScore` | `var stressScore =` |
| 4,847 | `powerOf` | `var powerOf =` |
| 4,848 | `powerScore` | `var powerScore =` |
| 4,865 | `stressHistory` | `var stressHistory =` |
| 4,876 | `powerMeter` | `var powerMeter =` |
| 4,878 | `stressNoteFull` | `var stressNoteFull =` |
| 4,910 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,912_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,935 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,936 | `deficitHistory` | `var deficitHistory =` |
| 4,939 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,946 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,948 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 4,996 | `fedFundsHistory` | `var fedFundsHistory =` |
| 4,997 | `fearCurveHistory` | `var fearCurveHistory =` |
| 4,998 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,015_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,028 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,041_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,055 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,058 | `timelineSpan` | `function timelineSpan(` |
| 5,064 | `timelineFor` | `function timelineFor(` |
| 5,077 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,083_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,089 | `windowScale` | `function windowScale(` |
| 5,105 | `windowYears` | `function windowYears(` |
| 5,123 | `refName` | `function refName(` |
| 5,130 | `histReadEnsure` | `function histReadEnsure(` |
| 5,169 | `seatBandReading` | `function seatBandReading(` |
| 5,192 | `histReadFill` | `function histReadFill(` |
| 5,320 | `histAxisEnds` | `function histAxisEnds(` |
| 5,331 | `histLegend` | `function histLegend(` |
| 5,419 | `refitHistory` | `function refitHistory(` |
| 5,431 | `wireHistHover` | `function wireHistHover(` |
| 5,490 | `mWindowFrom` | `function mWindowFrom(` |
| 5,495 | `qWindowFrom` | `function qWindowFrom(` |
| 5,500 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,501 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,503 | `DEF_1983` | `var DEF_1983 =` |
| 5,505 | `defFrom` | `function defFrom(` |
| 5,516 | `deficitChart` | `function deficitChart(` |
| 5,606 | `deficitBlock` | `function deficitBlock(` |
| 5,668 | `buffettHistory` | `var buffettHistory =` |
| 5,698 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,699 | `hyDates` | `var hyDates =` |
| 5,700 | `hyOas` | `var hyOas =` |
| 5,701 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,708 | `hyAt` | `function hyAt(` |
| 5,712 | `hyLabel` | `function hyLabel(` |
| 5,713 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,714 | `hyNum` | `function hyNum(` |
| 5,715 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,725 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,735 | `capeHistory` | `var capeHistory =` |
| 5,737 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,755_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,761 | `sentiment` | `var sentiment =` |
| 5,779 | `valuation` | `var valuation =` |
| 5,816 | `valRow` | `function valRow(` |
| 5,824 | `coincident` | `var coincident =` |
| 5,885 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,903 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,904 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,905 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,907_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,920 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,921 | `m2vHistory` | `var m2vHistory =` |
| 5,941 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,034 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,124 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,125 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,165_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,171 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,172 | `DOTS` | `var DOTS =` |
| 6,174 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,212 | `histHead` | `function histHead(` |
| 6,233 | `headNoteIdx` | `var headNoteIdx =` |
| 6,234 | `headMenuHtml` | `function headMenuHtml(` |
| 6,254 | `headMenuFor` | `var headMenuFor =` |
| 6,255 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,284 | `nameWithMark` | `function nameWithMark(` |
| 6,290 | `panelRow` | `function panelRow(` |
| 6,316 | `panelFromMeter` | `function panelFromMeter(` |
| 6,330 | `meterFlagged` | `function meterFlagged(` |
| 6,341 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,369 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,383 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,402 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,421 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,435 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,460 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,491 | `desireBlock` | `function desireBlock(` |
| 6,518 | `volumeBlock` | `function volumeBlock(` |
| 6,543 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,566 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,574_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,587 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,588 | `m2Level` | `var m2Level =` |
| 6,610 | `m2Yoy` | `var m2Yoy =` |
| 6,611 | `M2_NORM` | `var M2_NORM =` |
| 6,616 | `volumeVerdict` | `function volumeVerdict(` |
| 6,653 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,654 | `unempHistory` | `var unempHistory =` |
| 6,660 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,675 | `NROU_NOW` | `var NROU_NOW =` |
| 6,676 | `unempState` | `function unempState(` |
| 6,682 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,746_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,755 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,764_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,777 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,790 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 6,846 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,901 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,902 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,905 | `qAtIndex` | `function qAtIndex(` |
| 6,906 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,914_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,929 | `householdsChart` | `function householdsChart(` |
| 6,997 | `lastChartAvg` | `var lastChartAvg =` |
| 6,998 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,083 | `GDP_NORM` | `var GDP_NORM =` |
| 7,089 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,090 | `gdpNowQ` | `var gdpNowQ =` |
| 7,091 | `gdpMeter` | `var gdpMeter =` |
| 7,094 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,116 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,182 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,246 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,254 | `velocityVerdict` | `function velocityVerdict(` |
| 7,262 | `derivePulseTag` | `function derivePulseTag(` |
| 7,268 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,328_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,337 | `seasonReading` | `var seasonReading =` |
| 7,386 | `frameworkRows` | `var frameworkRows =` |
| 7,396 | `vixRow` | `var vixRow =` |
| 7,404 | `vixWordOf` | `var vixWordOf =` |
| 7,408 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,423_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,427 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,436_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,437 | `calendarTodayY` | `var calendarTodayY =` |
| 7,468 | `vix3mClose` | `var vix3mClose =` |
| 7,469 | `fearCurve` | `function fearCurve(` |
| 7,476 | `curveVerdict` | `function curveVerdict(` |
| 7,483 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,488 | `valuationVerdict` | `function valuationVerdict(` |
| 7,506 | `sparkHtml` | `function sparkHtml(` |
| 7,525 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,531_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,544 | `modeBar` | `function modeBar(` |
| 7,559 | `pickerOpen` | `var pickerOpen =` |
| 7,563 | `cycleByName` | `function cycleByName(` |
| 7,567 | `openCycle` | `function openCycle(` |
| 7,573 | `cycleSlice` | `function cycleSlice(` |
| 7,582 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,590 | `cycleMonths` | `function cycleMonths(` |
| 7,609 | `histControls` | `function histControls(` |
| 7,623 | `cycLabel` | `function cycLabel(` |
| 7,639 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,648 | `cyclePicker` | `function cyclePicker(` |
| 7,667 | `rangeBar` | `function rangeBar(` |
| 7,679 | `trendOf` | `function trendOf(` |
| 7,724 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,734 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,755_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,756 | `yearOf` | `function yearOf(` |
| 7,757 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,758_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,788 | `totalStat` | `function totalStat(` |
| 7,794 | `atQuarter` | `function atQuarter(` |
| 7,795 | `atMonth` | `function atMonth(` |
| 7,796 | `cycleAverages` | `function cycleAverages(` |
| 7,803 | `ordinal` | `function ordinal(` |
| 7,804 | `hiCard` | `function hiCard(` |
| 7,815 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,829_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,836 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,852 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,859 | `moreRow` | `function moreRow(` |
| 7,865 | `powerPageNote` | `var powerPageNote =` |
| 7,866 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,872_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,875 | `xLabelOf` | `function xLabelOf(` |
| 7,895 | `fitGroup` | `function fitGroup(` |
| 7,917 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,976_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,000 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,010 | `vGrid` | `function vGrid(` |
| 8,035 | `COL_FILL` | `var COL_FILL =` |
| 8,068 | `colPath` | `function colPath(` |
| 8,073 | `colWidth` | `function colWidth(` |
| 8,120 | `AXIS` | `var AXIS =` |
| 8,121 | `chartAxes` | `function chartAxes(` |
| 8,181 | `divergeChart` | `function divergeChart(` |
| 8,249 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,278_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,286 | `maxIn` | `function maxIn(` |
| 8,304 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,318 | `PEEK_W` | `var PEEK_W =` |
| 8,321 | `PEEK_H` | `var PEEK_H =` |
| 8,326 | `colPeek` | `function colPeek(` |
| 8,353 | `meterPeek` | `function meterPeek(` |
| 8,370 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,375 | `pressureZone` | `function pressureZone(` |
| 8,390 | `HZN_BACK` | `var HZN_BACK =` |
| 8,391 | `hznLast` | `function hznLast(` |
| 8,392 | `hznBack` | `function hznBack(` |
| 8,393 | `horizonWord` | `function horizonWord(` |
| 8,418 | `HZN_METERS` | `var HZN_METERS =` |
| 8,426 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,450 | `_hznPanel` | `var _hznPanel =` |
| 8,451 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,475 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,480 | `RISK_RISK` | `var RISK_RISK =` |
| 8,485 | `riskCell` | `function riskCell(` |
| 8,486 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,517 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,542_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,563 | `pulseClipN` | `var pulseClipN =` |
| 8,564 | `beatPath` | `function beatPath(` |
| 8,589 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,603 | `pulsePeek` | `function pulsePeek(` |
| 8,611 | `pulseBlock` | `function pulseBlock(` |
| 8,631 | `CHEV` | `var CHEV =` |
| 8,633 | `peekCard` | `function peekCard(` |
| 8,687 | `dropSvg` | `function dropSvg(` |
| 8,699 | `volumeSvg` | `function volumeSvg(` |
| 8,706 | `gaugeSvg` | `function gaugeSvg(` |
| 8,710 | `diamondSvg` | `function diamondSvg(` |
| 8,724 | `energyFromReserve` | `function energyFromReserve(` |
| 8,736 | `sproutSvg` | `function sproutSvg(` |
| 8,747 | `markSvg` | `function markSvg(` |
| 8,756 | `pressureSvg` | `function pressureSvg(` |
| 8,760 | `hormoneSvg` | `function hormoneSvg(` |
| 8,766 | `flameSvg` | `function flameSvg(` |
| 8,770 | `gearSvg` | `function gearSvg(` |
| 8,782 | `thermoSvg` | `function thermoSvg(` |
| 8,801 | `trendUpSvg` | `function trendUpSvg(` |
| 8,803 | `ecgSvg` | `function ecgSvg(` |
| 8,817 | `circulationSvg` | `function circulationSvg(` |
| 8,818 | `weatherSvg` | `function weatherSvg(` |
| 8,839 | `moodSvg` | `function moodSvg(` |
| 8,863 | `boltSvg` | `function boltSvg(` |
| 8,866 | `houseSvg` | `function houseSvg(` |
| 8,874 | `sunriseSvg` | `function sunriseSvg(` |
| 8,889 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,900 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,917_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,938 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,939 | `dsrHistory` | `var dsrHistory =` |
| 8,940 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,941 | `savHistory` | `var savHistory =` |
| 8,946 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,956 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,957 | `dsrNow` | `var dsrNow =` |
| 8,958 | `savNow` | `var savNow =` |
| 8,959 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,964 | `householdsWord` | `function householdsWord(` |
| 8,971 | `householdsNow` | `var householdsNow =` |
| 8,978 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,979 | `dsrMeter` | `var dsrMeter =` |
| 8,982 | `savMeter` | `var savMeter =` |
| 8,985 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,002 | `savInfoHtml` | `function savInfoHtml(` |
| 9,020 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,029 | `curveNow` | `var curveNow =` |
| 9,030 | `curveTag` | `var curveTag =` |
| 9,031 | `curveSub` | `var curveSub =` |
| 9,035 | `curvePct` | `function curvePct(` |
| 9,036 | `curveNoteFull` | `var curveNoteFull =` |
| 9,051 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,059 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,100 | `marketCycles` | `var marketCycles =` |
| 9,130 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,132_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,153 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,154 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,159_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,180 | `slopeOf` | `function slopeOf(` |
| 9,191 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,197 | `readSeason` | `function readSeason(` |
| 9,222 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,224 | `qLabel` | `function qLabel(` |
| 9,248 | `regimeTrack` | `function regimeTrack(` |
| 9,271 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,273_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,280 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,281 | `seasonTitle` | `function seasonTitle(` |
| 9,282 | `monthLabel` | `function monthLabel(` |
| 9,283 | `cycleModel` | `function cycleModel(` |
| 9,335 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,343 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,350 | `nowModel` | `var nowModel =` |
| 9,351 | `readingNow` | `var readingNow =` |
| 9,352 | `cpiNow` | `var cpiNow =` |
| 9,353 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,354 | `currentSeason` | `var currentSeason =` |
| 9,355 | `seasonWhy` | `var seasonWhy =` |
| 9,372 | `seasonGroup` | `function seasonGroup(` |
| 9,386 | `arcGauge` | `function arcGauge(` |
| 9,428 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,441 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,443 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,447 | `policyFacts` | `function policyFacts(` |
| 9,459 | `allSources` | `var allSources =` |
| 9,483 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,516_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,519 | `SVG_NS` | `var SVG_NS =` |
| 9,520 | `svgEl` | `function svgEl(` |
| 9,533 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,569_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,570 | `clampPct` | `function clampPct(` |
| 9,577 | `infoIcon` | `function infoIcon(` |
| 9,586 | `detailTexts` | `var detailTexts =` |
| 9,604 | `detailSlots` | `var detailSlots =` |
| 9,605 | `detailSlot` | `function detailSlot(` |
| 9,616 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,620 | `_growthPanel` | `var _growthPanel =` |
| 9,621 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,627 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,638 | `facts` | `function facts(` |
| 9,639 | `factsFrom` | `function factsFrom(` |
| 9,643 | `expandBtn` | `function expandBtn(` |
| 9,649 | `sheetRenderers` | `var sheetRenderers =` |
| 9,666 | `pageMode` | `var pageMode =` |
| 9,673 | `pageCycles` | `var pageCycles =` |
| 9,678 | `pageRange` | `var pageRange =` |
| 9,684 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,718_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,729 | `meterHtml` | `function meterHtml(` |
| 9,757 | `srcHtml` | `function srcHtml(` |
| 9,766 | `TIMING` | `var TIMING =` |
| 9,772 | `timingMark` | `function timingMark(` |
| 9,786 | `timingPill` | `function timingPill(` |
| 9,807 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,815 | `seatPageFoot` | `function seatPageFoot(` |
| 9,838 | `timingMembers` | `var timingMembers =` |
| 9,839 | `registerTiming` | `function registerTiming(` |
| 9,845 | `headHtml` | `function headHtml(` |
| 9,863 | `heldHighlights` | `var heldHighlights =` |
| 9,864 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,922_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,923 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,330_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,331 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,554_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,555 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,587_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,593 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,677_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,678 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,696_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,699 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,722_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,734 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 10,824_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,833 | `lendingWord` | `function lendingWord(` |
| 10,841 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,901_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,902 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,022_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,025 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,147_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,159 | `totalRiseIn` | `function totalRiseIn(` |
| 11,169 | `eraInflation` | `function eraInflation(` |
| 11,180 | `eraGrowth` | `function eraGrowth(` |
| 11,196 | `fmtSigned` | `function fmtSigned(` |
| 11,201 | `regimeArrow` | `function regimeArrow(` |
| 11,207 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,208 | `growthShown` | `function growthShown(` |
| 11,209 | `growthShownCap` | `function growthShownCap(` |
| 11,210 | `regimeState` | `function regimeState(` |
| 11,214 | `phaseClass` | `function phaseClass(` |
| 11,216 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,228 | `cycleViewEl` | `var cycleViewEl =` |
| 11,232 | `tempCard` | `var tempCard =` |
| 11,233 | `placeCharts` | `function placeCharts(` |
| 11,238 | `shownEra` | `var shownEra =` |
| 11,239 | `calendarReset` | `var calendarReset =` |
| 11,240 | `metricPageReset` | `var metricPageReset =` |
| 11,241 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,244 | `topbarBack` | `var topbarBack =` |
| 11,245 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,252_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,253 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,414_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,415 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,433_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,436 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,457_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,463 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,466 | `hubSet` | `function hubSet(` |
| 11,479 | `quarterPopup` | `function quarterPopup(` |
| 11,512 | `hubShowDefault` | `function hubShowDefault(` |
| 11,521 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,527 | `hubShowYear` | `function hubShowYear(` |
| 11,542 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,634_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,637 | `tempState` | `var tempState =` |
| 11,640 | `chartLink` | `var chartLink =` |
| 11,660 | `m2Step` | `function m2Step(` |
| 11,663 | `heatStep` | `function heatStep(` |
| 11,667 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,854_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,857 | `drawGrowth` | `function drawGrowth(` |
| 11,996 | `wireResize` | `function wireResize(` |
| 12,002 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,014_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,015 | `renderCycleView` | `function renderCycleView(` |
| 12,068 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,079 | `PEER_CARET` | `var PEER_CARET =` |
| 12,080 | `peerList` | `function peerList(` |
| 12,081 | `peerChosen` | `function peerChosen(` |
| 12,082 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,086 | `renderPeerPills` | `function renderPeerPills(` |
| 12,136 | `shownEraModel` | `var shownEraModel =` |
| 12,137 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,139_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,141 | `stripGroupName` | `var stripGroupName =` |
| 12,142 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,188 | `marketStripHtml` | `function marketStripHtml(` |
| 12,251 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,252 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,282_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,283 | `renderCycleList` | `function renderCycleList(` |
| 12,373 | `renderSignsList` | `function renderSignsList(` |
| 12,658 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,932_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,933 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,995_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,996 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,029_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,030 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,024–4,027 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,399–8,412 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,231–9,244 | `seasonTrackAll` | The season, computed |
| 9,266–9,270 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,393 |
| `desire-range` | 10,255 |
| `fear-range` | 10,991 |
| `hormones-range` | 10,171 |
| `hzn-range` | 10,626 |
| `pressure-range` | 10,868 |
| `pulse-range` | 10,206 |
| `sheet-marker-deficit` | 13,390 |
| `sheet-metric-gdp` | 13,274 |
| `sheet-metric-households` | 13,424 |
| `sheet-metric-power` | 13,353 |
| `sheet-metric-temp` | 13,224 |
| `sheet-metric-valuation` | 13,466 |
| `sheet-sign-activity` | 13,335 |
| `sheet-sign-desire` | 10,256 |
| `sheet-sign-horizon` | 10,627 |
| `sheet-sign-hormones` | 10,170 |
| `sheet-sign-pressure` | 10,869 |
| `sheet-sign-pulse` | 10,205 |
| `sheet-sign-sentiment` | 10,996 |
| `sheet-sign-volume` | 10,229 |
| `volume-range` | 10,230 |
| `ylm-range` | 10,322 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,399 |
| `desire-range` | 10,238 |
| `fear-range` | 10,948 |
| `hzn-range` | 10,603 |
| `pulse-range` | 10,183 |
| `sheet-metric-gdp` | 13,275 |
| `sheet-metric-power` | 13,354 |
| `sheet-metric-temp` | 13,225 |
| `sheet-metric-valuation` | 13,467 |
| `volume-range` | 10,210 |
| `ylm-range` | 10,284 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,175 |
| `sheet-metric-gdp` | 6,176 |
| `sheet-sign-activity` | 6,183 |
| `sheet-metric-power` | 6,184 |
| `sheet-metric-valuation` | 6,186 |
| `sheet-metric-households` | 6,187 |
| `deficit-range` | 6,188 |
| `volume-range` | 6,189 |
| `pulse-range` | 6,190 |
| `hzn-range` | 6,191 |
| `ylm-range` | 6,206 |
| `desire-range` | 6,207 |
| `fear-range` | 6,208 |
| `hormones-range` | 6,209 |
| `pressure-range` | 6,210 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 189 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 322 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 420 | yearly calendar — one card per year, grouped into five eras |
| 427 | season strip |
| 480 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels \u2026 so if one day |
| 644 | tab bar (app-style segmented navigation) |
| 711 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 750 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 966 | journal (editorial content tab) |
| 972 | content tab: reading companion |
| 1,030 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,502 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,536 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,546 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,557 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,590 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,770 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,947 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,440 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,488 | hero: yield curve |
| 2,584 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,663 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,762 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,787 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,802 | long cycle (structural layer) |
| 2,843 | indicator grid |
| 2,886 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,903 | info icon + popover (progressive disclosure for longer notes) |
| 2,924 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,019 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (146), which is what the renderers fill:

| Line | id |
|---|---|
| 3,051 | `topbar-back` |
| 3,054 | `topbar-title` |
| 3,055 | `menu-btn` |
| 3,072 | `main` |
| 3,079 | `cycle-view` |
| 3,087 | `cycle-kicker` |
| 3,093 | `cycle-dial` |
| 3,095 | `season-wheel-hub-date` |
| 3,096 | `season-wheel-hub-theme` |
| 3,097 | `season-wheel-hub-detail` |
| 3,105 | `temp-card` |
| 3,107 | `temp-kicker` |
| 3,108 | `temp-sub` |
| 3,111 | `temp-svg` |
| 3,112 | `temp-tooltip` |
| 3,118 | `temp-stats` |
| 3,125 | `growth-card` |
| 3,128 | `growth-kicker` |
| 3,128 | `growth-phase` |
| 3,128 | `growth-sub` |
| 3,128 | `growth-peers` |
| 3,129 | `growth-svg` |
| 3,129 | `growth-tooltip` |
| 3,134 | `growth-stats` |
| 3,143 | `today-analysis` |
| 3,147 | `peek-row` |
| 3,151 | `sheet-metric-temp` |
| 3,152 | `temp-timing` |
| 3,153 | `temp-chart` |
| 3,155 | `temp-rangebar` |
| 3,157 | `temp-head` |
| 3,158 | `slot-temp` |
| 3,159 | `temp-history` |
| 3,160 | `temp-hist-tooltip` |
| 3,163 | `temp-trend` |
| 3,167 | `temp-highlights` |
| 3,170 | `sheet-metric-gdp` |
| 3,171 | `gdp-timing` |
| 3,172 | `gdp-chart` |
| 3,173 | `gdp-rangebar` |
| 3,175 | `gdp-head` |
| 3,176 | `slot-growth` |
| 3,177 | `gdp-history` |
| 3,178 | `gdp-hist-tooltip` |
| 3,179 | `gdp-yoy` |
| 3,189 | `gdp-trend` |
| 3,191 | `gdp-panel` |
| 3,196 | `subj-ring-gdp` |
| 3,198 | `subj-label-gdp` |
| 3,199 | `subj-value-gdp` |
| 3,200 | `subj-say-gdp` |
| 3,201 | `subj-spark-gdp` |
| 3,206 | `subj-ctx-gdp` |
| 3,209 | `gdp-highlights` |
| 3,217 | `sheet-metric-power` |
| 3,218 | `power-timing` |
| 3,219 | `power-head` |
| 3,220 | `power-chart` |
| 3,224 | `subj-ring-resilience` |
| 3,227 | `subj-value-resilience` |
| 3,228 | `subj-say-resilience` |
| 3,233 | `subj-ctx-resilience` |
| 3,237 | `longcycle-title` |
| 3,239 | `longcycle-tag` |
| 3,253 | `power-highlights` |
| 3,260 | `sheet-marker-deficit` |
| 3,266 | `sheet-metric-households` |
| 3,267 | `households-timing` |
| 3,268 | `households-chart` |
| 3,269 | `households-highlights` |
| 3,273 | `sheet-metric-valuation` |
| 3,274 | `valuation-timing` |
| 3,275 | `valuation-head` |
| 3,276 | `valuation-chart` |
| 3,280 | `subj-ring-valuation` |
| 3,283 | `subj-value-valuation` |
| 3,284 | `subj-say-valuation` |
| 3,289 | `subj-ctx-valuation` |
| 3,293 | `valuation-title` |
| 3,295 | `valuation-tag` |
| 3,302 | `valuation-highlights` |
| 3,326 | `subj-value-hormones` |
| 3,327 | `subj-say-hormones` |
| 3,335 | `hormones-history` |
| 3,338 | `ylm-series` |
| 3,342 | `ylm-head` |
| 3,343 | `ylm-shell` |
| 3,344 | `ylm-svg` |
| 3,345 | `ylm-tooltip` |
| 3,348 | `ylm-trend` |
| 3,354 | `hormones-highlights` |
| 3,380 | `subj-value-horizon` |
| 3,381 | `subj-say-horizon` |
| 3,382 | `subj-spark-horizon` |
| 3,392 | `hzn-timeline` |
| 3,394 | `hzn-head` |
| 3,395 | `spread-history-shell` |
| 3,396 | `spread-history-svg` |
| 3,397 | `spread-history-tooltip` |
| 3,400 | `hzn-trend` |
| 3,402 | `hzn-panel` |
| 3,404 | `horizon-insights` |
| 3,405 | `horizon-highlights` |
| 3,431 | `subj-value-pressure` |
| 3,432 | `subj-say-pressure` |
| 3,437 | `pressure-history` |
| 3,438 | `pressure-highlights` |
| 3,444 | `subj-ring-sentiment` |
| 3,447 | `subj-value-sentiment` |
| 3,448 | `subj-say-sentiment` |
| 3,449 | `subj-spark-sentiment` |
| 3,463 | `fear-history` |
| 3,464 | `curve-highlights` |
| 3,478 | `signs-list` |
| 3,489 | `calendar-list` |
| 3,494 | `indicators-peek` |
| 3,540 | `cycle-list` |
| 3,546 | `cycle-more` |
| 3,547 | `cycle-more-label` |
| 3,556 | `calendar-cycle` |
| 3,557 | `calendar-cycle-slot` |
| 3,608 | `seasons-kicker` |
| 3,609 | `seasons-rows` |
| 3,613 | `framework-kicker` |
| 3,615 | `framework-rows` |
| 3,622 | `more-menu` |
| 3,625 | `menu-back` |
| 3,639 | `sources-open` |
| 3,647 | `appearance-current` |
| 3,655 | `sheet-howto` |
| 3,699 | `sheet-book` |
| 3,731 | `sheet-appearance` |
| 3,739 | `theme-toggle` |
| 3,746 | `sheet-contact` |
| 3,755 | `contact-form` |
| 3,756 | `contact-title` |
| 3,757 | `contact-message` |
| 3,759 | `contact-hint` |
| 3,760 | `contact-send` |
| 3,769 | `sheet-sources` |
| 3,772 | `sources-back` |
| 3,779 | `asof-text` |
| 3,780 | `sources-groups` |
| 3,787 | `detail-backdrop` |
| 3,789 | `detail-modal-close` |
| 3,790 | `detail-modal-body` |

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

