# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,214 lines**, about 1189 KB, roughly **338 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `a7be9b2` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,049 | the whole stylesheet, every token and rule |
| **Markup** | 3,050–3,796 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,797–14,161 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,162–14,214 | </body></html> |

Counts: **253** top-level functions, **178** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,802_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,806 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,807 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,808 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,826 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,830 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,835_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,845 | `wheelMeta` | `var wheelMeta =` |
| 3,856 | `seasonOverride` | `var seasonOverride =` |
| 3,859 | `cycleNowNote` | `var cycleNowNote =` |
| 3,868 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,954 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,999 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,012_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,029 | `LIVE` | `function LIVE(` |
| 4,056 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,064 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,065 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,068_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,099 | `repaintFigureText` | `function repaintFigureText(` |
| 4,112 | `repaintRow` | `function repaintRow(` |
| 4,125 | `repaintTag` | `function repaintTag(` |
| 4,135 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,160 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,168 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,176 | `REPAINT` | `var REPAINT =` |
| 4,193 | `liveAsOf` | `var liveAsOf =` |
| 4,194 | `fmtAsOf` | `function fmtAsOf(` |
| 4,199 | `applyLive` | `function applyLive(` |
| 4,278 | `repaintPolicy` | `function repaintPolicy(` |
| 4,334 | `GYN` | `var GYN =` |
| 4,354 | `refreshLiveData` | `function refreshLiveData(` |
| 4,395 | `fetchSiteData` | `function fetchSiteData(` |
| 4,425 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,439_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,440 | `yieldCurve` | `var yieldCurve =` |
| 4,453 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,477 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,489 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,517_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,522 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,546 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,570 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,594 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,621 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,646_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,655 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,665 | `uninvLagToday` | `var uninvLagToday =` |
| 4,677 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,690 | `gdpPeers` | `var gdpPeers =` |
| 4,731 | `gdpSrc` | `var gdpSrc =` |
| 4,732 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,737 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,750 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,788_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,810 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,820_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,836 | `stressScoreFor` | `function stressScoreFor(` |
| 4,842 | `stressScore` | `var stressScore =` |
| 4,848 | `powerOf` | `var powerOf =` |
| 4,849 | `powerScore` | `var powerScore =` |
| 4,866 | `stressHistory` | `var stressHistory =` |
| 4,877 | `powerMeter` | `var powerMeter =` |
| 4,879 | `stressNoteFull` | `var stressNoteFull =` |
| 4,911 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,913_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,936 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,937 | `deficitHistory` | `var deficitHistory =` |
| 4,940 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,947 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,949 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 4,997 | `fedFundsHistory` | `var fedFundsHistory =` |
| 4,998 | `fearCurveHistory` | `var fearCurveHistory =` |
| 4,999 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,016_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,029 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,042_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,056 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,059 | `timelineSpan` | `function timelineSpan(` |
| 5,065 | `timelineFor` | `function timelineFor(` |
| 5,078 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,084_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,090 | `windowScale` | `function windowScale(` |
| 5,106 | `windowYears` | `function windowYears(` |
| 5,124 | `refName` | `function refName(` |
| 5,131 | `histReadEnsure` | `function histReadEnsure(` |
| 5,170 | `seatBandReading` | `function seatBandReading(` |
| 5,193 | `histReadFill` | `function histReadFill(` |
| 5,321 | `histAxisEnds` | `function histAxisEnds(` |
| 5,332 | `histLegend` | `function histLegend(` |
| 5,420 | `refitHistory` | `function refitHistory(` |
| 5,432 | `wireHistHover` | `function wireHistHover(` |
| 5,491 | `mWindowFrom` | `function mWindowFrom(` |
| 5,496 | `qWindowFrom` | `function qWindowFrom(` |
| 5,501 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,502 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,504 | `DEF_1983` | `var DEF_1983 =` |
| 5,506 | `defFrom` | `function defFrom(` |
| 5,517 | `deficitChart` | `function deficitChart(` |
| 5,607 | `deficitBlock` | `function deficitBlock(` |
| 5,669 | `buffettHistory` | `var buffettHistory =` |
| 5,699 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,700 | `hyDates` | `var hyDates =` |
| 5,701 | `hyOas` | `var hyOas =` |
| 5,702 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,709 | `hyAt` | `function hyAt(` |
| 5,713 | `hyLabel` | `function hyLabel(` |
| 5,714 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,715 | `hyNum` | `function hyNum(` |
| 5,716 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,726 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,736 | `capeHistory` | `var capeHistory =` |
| 5,738 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,756_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,762 | `sentiment` | `var sentiment =` |
| 5,780 | `valuation` | `var valuation =` |
| 5,817 | `valRow` | `function valRow(` |
| 5,825 | `coincident` | `var coincident =` |
| 5,886 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,904 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,905 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,906 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,908_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,921 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,922 | `m2vHistory` | `var m2vHistory =` |
| 5,942 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,035 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,125 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,126 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,166_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,172 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,173 | `DOTS` | `var DOTS =` |
| 6,175 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,203 | `histHead` | `function histHead(` |
| 6,224 | `headNoteIdx` | `var headNoteIdx =` |
| 6,225 | `headMenuHtml` | `function headMenuHtml(` |
| 6,245 | `headMenuFor` | `var headMenuFor =` |
| 6,246 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,275 | `nameWithMark` | `function nameWithMark(` |
| 6,281 | `panelRow` | `function panelRow(` |
| 6,307 | `panelFromMeter` | `function panelFromMeter(` |
| 6,321 | `meterFlagged` | `function meterFlagged(` |
| 6,332 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,360 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,374 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,393 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,412 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,426 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,451 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,482 | `desireBlock` | `function desireBlock(` |
| 6,509 | `volumeBlock` | `function volumeBlock(` |
| 6,534 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,557 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,565_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,578 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,579 | `m2Level` | `var m2Level =` |
| 6,601 | `m2Yoy` | `var m2Yoy =` |
| 6,602 | `M2_NORM` | `var M2_NORM =` |
| 6,607 | `volumeVerdict` | `function volumeVerdict(` |
| 6,644 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,645 | `unempHistory` | `var unempHistory =` |
| 6,651 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,666 | `NROU_NOW` | `var NROU_NOW =` |
| 6,667 | `unempState` | `function unempState(` |
| 6,673 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,737_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,746 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,755_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,768 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,781 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 6,837 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,892 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,893 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,896 | `qAtIndex` | `function qAtIndex(` |
| 6,897 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,905_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,920 | `householdsChart` | `function householdsChart(` |
| 6,988 | `lastChartAvg` | `var lastChartAvg =` |
| 6,989 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,074 | `GDP_NORM` | `var GDP_NORM =` |
| 7,080 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,081 | `gdpNowQ` | `var gdpNowQ =` |
| 7,082 | `gdpMeter` | `var gdpMeter =` |
| 7,085 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,107 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,173 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,237 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,245 | `velocityVerdict` | `function velocityVerdict(` |
| 7,253 | `derivePulseTag` | `function derivePulseTag(` |
| 7,259 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,319_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,328 | `seasonReading` | `var seasonReading =` |
| 7,377 | `frameworkRows` | `var frameworkRows =` |
| 7,387 | `vixRow` | `var vixRow =` |
| 7,395 | `vixWordOf` | `var vixWordOf =` |
| 7,399 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,414_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,418 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,427_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,428 | `calendarTodayY` | `var calendarTodayY =` |
| 7,459 | `vix3mClose` | `var vix3mClose =` |
| 7,460 | `fearCurve` | `function fearCurve(` |
| 7,467 | `curveVerdict` | `function curveVerdict(` |
| 7,474 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,479 | `valuationVerdict` | `function valuationVerdict(` |
| 7,497 | `sparkHtml` | `function sparkHtml(` |
| 7,516 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,522_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,535 | `modeBar` | `function modeBar(` |
| 7,550 | `pickerOpen` | `var pickerOpen =` |
| 7,554 | `cycleByName` | `function cycleByName(` |
| 7,558 | `openCycle` | `function openCycle(` |
| 7,564 | `cycleSlice` | `function cycleSlice(` |
| 7,573 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,581 | `cycleMonths` | `function cycleMonths(` |
| 7,600 | `histControls` | `function histControls(` |
| 7,614 | `cycLabel` | `function cycLabel(` |
| 7,630 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,639 | `cyclePicker` | `function cyclePicker(` |
| 7,658 | `rangeBar` | `function rangeBar(` |
| 7,670 | `trendOf` | `function trendOf(` |
| 7,715 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,725 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,746_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,747 | `yearOf` | `function yearOf(` |
| 7,748 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,749_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,779 | `totalStat` | `function totalStat(` |
| 7,785 | `atQuarter` | `function atQuarter(` |
| 7,786 | `atMonth` | `function atMonth(` |
| 7,787 | `cycleAverages` | `function cycleAverages(` |
| 7,794 | `ordinal` | `function ordinal(` |
| 7,795 | `hiCard` | `function hiCard(` |
| 7,806 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,820_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,827 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,843 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,850 | `moreRow` | `function moreRow(` |
| 7,856 | `powerPageNote` | `var powerPageNote =` |
| 7,857 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,863_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,866 | `xLabelOf` | `function xLabelOf(` |
| 7,886 | `fitGroup` | `function fitGroup(` |
| 7,908 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,967_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,991 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,001 | `vGrid` | `function vGrid(` |
| 8,026 | `COL_FILL` | `var COL_FILL =` |
| 8,059 | `colPath` | `function colPath(` |
| 8,064 | `colWidth` | `function colWidth(` |
| 8,111 | `AXIS` | `var AXIS =` |
| 8,112 | `chartAxes` | `function chartAxes(` |
| 8,172 | `divergeChart` | `function divergeChart(` |
| 8,240 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,269_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,277 | `maxIn` | `function maxIn(` |
| 8,295 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,309 | `PEEK_W` | `var PEEK_W =` |
| 8,312 | `PEEK_H` | `var PEEK_H =` |
| 8,317 | `colPeek` | `function colPeek(` |
| 8,344 | `meterPeek` | `function meterPeek(` |
| 8,361 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,366 | `pressureZone` | `function pressureZone(` |
| 8,381 | `HZN_BACK` | `var HZN_BACK =` |
| 8,382 | `hznLast` | `function hznLast(` |
| 8,383 | `hznBack` | `function hznBack(` |
| 8,384 | `horizonWord` | `function horizonWord(` |
| 8,409 | `HZN_METERS` | `var HZN_METERS =` |
| 8,417 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,458 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,463 | `RISK_RISK` | `var RISK_RISK =` |
| 8,468 | `riskCell` | `function riskCell(` |
| 8,469 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,500 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,525_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,546 | `pulseClipN` | `var pulseClipN =` |
| 8,547 | `beatPath` | `function beatPath(` |
| 8,572 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,586 | `pulsePeek` | `function pulsePeek(` |
| 8,594 | `pulseBlock` | `function pulseBlock(` |
| 8,614 | `CHEV` | `var CHEV =` |
| 8,616 | `peekCard` | `function peekCard(` |
| 8,670 | `dropSvg` | `function dropSvg(` |
| 8,682 | `volumeSvg` | `function volumeSvg(` |
| 8,689 | `gaugeSvg` | `function gaugeSvg(` |
| 8,693 | `diamondSvg` | `function diamondSvg(` |
| 8,707 | `energyFromReserve` | `function energyFromReserve(` |
| 8,719 | `sproutSvg` | `function sproutSvg(` |
| 8,730 | `markSvg` | `function markSvg(` |
| 8,739 | `pressureSvg` | `function pressureSvg(` |
| 8,743 | `hormoneSvg` | `function hormoneSvg(` |
| 8,749 | `flameSvg` | `function flameSvg(` |
| 8,753 | `gearSvg` | `function gearSvg(` |
| 8,765 | `thermoSvg` | `function thermoSvg(` |
| 8,784 | `trendUpSvg` | `function trendUpSvg(` |
| 8,786 | `ecgSvg` | `function ecgSvg(` |
| 8,800 | `circulationSvg` | `function circulationSvg(` |
| 8,801 | `weatherSvg` | `function weatherSvg(` |
| 8,822 | `moodSvg` | `function moodSvg(` |
| 8,846 | `boltSvg` | `function boltSvg(` |
| 8,849 | `houseSvg` | `function houseSvg(` |
| 8,857 | `sunriseSvg` | `function sunriseSvg(` |
| 8,872 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,883 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,900_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,921 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,922 | `dsrHistory` | `var dsrHistory =` |
| 8,923 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,924 | `savHistory` | `var savHistory =` |
| 8,929 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,939 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,940 | `dsrNow` | `var dsrNow =` |
| 8,941 | `savNow` | `var savNow =` |
| 8,942 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,947 | `householdsWord` | `function householdsWord(` |
| 8,954 | `householdsNow` | `var householdsNow =` |
| 8,961 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,962 | `dsrMeter` | `var dsrMeter =` |
| 8,965 | `savMeter` | `var savMeter =` |
| 8,968 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,985 | `savInfoHtml` | `function savInfoHtml(` |
| 9,003 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,012 | `curveNow` | `var curveNow =` |
| 9,013 | `curveTag` | `var curveTag =` |
| 9,014 | `curveSub` | `var curveSub =` |
| 9,018 | `curvePct` | `function curvePct(` |
| 9,019 | `curveNoteFull` | `var curveNoteFull =` |
| 9,034 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,042 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,083 | `marketCycles` | `var marketCycles =` |
| 9,113 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,115_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,136 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,137 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,142_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,163 | `slopeOf` | `function slopeOf(` |
| 9,174 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,180 | `readSeason` | `function readSeason(` |
| 9,205 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,207 | `qLabel` | `function qLabel(` |
| 9,231 | `regimeTrack` | `function regimeTrack(` |
| 9,254 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,256_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,263 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,264 | `seasonTitle` | `function seasonTitle(` |
| 9,265 | `monthLabel` | `function monthLabel(` |
| 9,266 | `cycleModel` | `function cycleModel(` |
| 9,318 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,326 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,333 | `nowModel` | `var nowModel =` |
| 9,334 | `readingNow` | `var readingNow =` |
| 9,335 | `cpiNow` | `var cpiNow =` |
| 9,336 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,337 | `currentSeason` | `var currentSeason =` |
| 9,338 | `seasonWhy` | `var seasonWhy =` |
| 9,355 | `seasonGroup` | `function seasonGroup(` |
| 9,369 | `arcGauge` | `function arcGauge(` |
| 9,411 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,424 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,431 | `tsyView` | `var tsyView =` |
| 9,433 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,435 | `spreadLabel` | `function spreadLabel(` |
| 9,442 | `policyFacts` | `function policyFacts(` |
| 9,454 | `allSources` | `var allSources =` |
| 9,478 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,511_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,514 | `SVG_NS` | `var SVG_NS =` |
| 9,515 | `svgEl` | `function svgEl(` |
| 9,528 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,564_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,565 | `clampPct` | `function clampPct(` |
| 9,572 | `infoIcon` | `function infoIcon(` |
| 9,581 | `detailTexts` | `var detailTexts =` |
| 9,599 | `detailSlots` | `var detailSlots =` |
| 9,600 | `detailSlot` | `function detailSlot(` |
| 9,611 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,615 | `_growthPanel` | `var _growthPanel =` |
| 9,616 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,622 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,633 | `facts` | `function facts(` |
| 9,634 | `factsFrom` | `function factsFrom(` |
| 9,638 | `expandBtn` | `function expandBtn(` |
| 9,644 | `sheetRenderers` | `var sheetRenderers =` |
| 9,661 | `pageMode` | `var pageMode =` |
| 9,668 | `pageCycles` | `var pageCycles =` |
| 9,673 | `pageRange` | `var pageRange =` |
| 9,679 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,713_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,724 | `meterHtml` | `function meterHtml(` |
| 9,752 | `srcHtml` | `function srcHtml(` |
| 9,761 | `TIMING` | `var TIMING =` |
| 9,767 | `timingMark` | `function timingMark(` |
| 9,781 | `timingPill` | `function timingPill(` |
| 9,802 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,810 | `seatPageFoot` | `function seatPageFoot(` |
| 9,833 | `timingMembers` | `var timingMembers =` |
| 9,834 | `registerTiming` | `function registerTiming(` |
| 9,840 | `headHtml` | `function headHtml(` |
| 9,858 | `heldHighlights` | `var heldHighlights =` |
| 9,859 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,917_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,918 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,355_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,356 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,579_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,580 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,612_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,618 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,703_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,704 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,722_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,725 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,748_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,760 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 10,851_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,860 | `lendingWord` | `function lendingWord(` |
| 10,868 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,928_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,929 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,049_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,052 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,174_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,186 | `totalRiseIn` | `function totalRiseIn(` |
| 11,196 | `eraInflation` | `function eraInflation(` |
| 11,207 | `eraGrowth` | `function eraGrowth(` |
| 11,223 | `fmtSigned` | `function fmtSigned(` |
| 11,228 | `regimeArrow` | `function regimeArrow(` |
| 11,234 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,235 | `growthShown` | `function growthShown(` |
| 11,236 | `growthShownCap` | `function growthShownCap(` |
| 11,237 | `regimeState` | `function regimeState(` |
| 11,241 | `phaseClass` | `function phaseClass(` |
| 11,243 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,255 | `cycleViewEl` | `var cycleViewEl =` |
| 11,259 | `tempCard` | `var tempCard =` |
| 11,260 | `placeCharts` | `function placeCharts(` |
| 11,265 | `shownEra` | `var shownEra =` |
| 11,266 | `calendarReset` | `var calendarReset =` |
| 11,267 | `metricPageReset` | `var metricPageReset =` |
| 11,268 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,271 | `topbarBack` | `var topbarBack =` |
| 11,272 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,279_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,280 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,441_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,442 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,460_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,463 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,484_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,490 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,493 | `hubSet` | `function hubSet(` |
| 11,506 | `quarterPopup` | `function quarterPopup(` |
| 11,539 | `hubShowDefault` | `function hubShowDefault(` |
| 11,548 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,554 | `hubShowYear` | `function hubShowYear(` |
| 11,569 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,661_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,664 | `tempState` | `var tempState =` |
| 11,667 | `chartLink` | `var chartLink =` |
| 11,687 | `m2Step` | `function m2Step(` |
| 11,690 | `heatStep` | `function heatStep(` |
| 11,694 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,881_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,884 | `drawGrowth` | `function drawGrowth(` |
| 12,023 | `wireResize` | `function wireResize(` |
| 12,029 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,041_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,042 | `renderCycleView` | `function renderCycleView(` |
| 12,095 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,106 | `PEER_CARET` | `var PEER_CARET =` |
| 12,107 | `peerList` | `function peerList(` |
| 12,108 | `peerChosen` | `function peerChosen(` |
| 12,109 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,113 | `renderPeerPills` | `function renderPeerPills(` |
| 12,163 | `shownEraModel` | `var shownEraModel =` |
| 12,164 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,166_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,168 | `stripGroupName` | `var stripGroupName =` |
| 12,169 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,215 | `marketStripHtml` | `function marketStripHtml(` |
| 12,278 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,279 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,309_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,310 | `renderCycleList` | `function renderCycleList(` |
| 12,400 | `renderSignsList` | `function renderSignsList(` |
| 12,685 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,960_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,961 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,023_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,024 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,057_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,058 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,025–4,028 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,390–8,403 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,214–9,227 | `seasonTrackAll` | The season, computed |
| 9,249–9,253 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,421 |
| `desire-range` | 10,240 |
| `fear-range` | 11,018 |
| `hormones-range` | 10,795 |
| `hzn-range` | 10,348 |
| `hzn-spread` | 10,342 |
| `pressure-range` | 10,895 |
| `pulse-range` | 10,191 |
| `sheet-marker-deficit` | 13,418 |
| `sheet-metric-gdp` | 13,302 |
| `sheet-metric-households` | 13,452 |
| `sheet-metric-power` | 13,381 |
| `sheet-metric-temp` | 13,252 |
| `sheet-metric-valuation` | 13,494 |
| `sheet-sign-activity` | 13,363 |
| `sheet-sign-desire` | 10,241 |
| `sheet-sign-horizon` | 10,349 |
| `sheet-sign-hormones` | 10,798 |
| `sheet-sign-pressure` | 10,896 |
| `sheet-sign-pulse` | 10,190 |
| `sheet-sign-sentiment` | 11,023 |
| `sheet-sign-volume` | 10,214 |
| `volume-range` | 10,215 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,427 |
| `desire-range` | 10,223 |
| `fear-range` | 10,975 |
| `hzn-range` | 10,269 |
| `pulse-range` | 10,168 |
| `sheet-metric-gdp` | 13,303 |
| `sheet-metric-power` | 13,382 |
| `sheet-metric-temp` | 13,253 |
| `sheet-metric-valuation` | 13,495 |
| `volume-range` | 10,195 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,176 |
| `sheet-metric-gdp` | 6,177 |
| `sheet-sign-activity` | 6,184 |
| `sheet-metric-power` | 6,185 |
| `sheet-metric-valuation` | 6,187 |
| `sheet-metric-households` | 6,188 |
| `deficit-range` | 6,189 |
| `volume-range` | 6,190 |
| `pulse-range` | 6,191 |
| `hzn-range` | 6,197 |
| `desire-range` | 6,198 |
| `fear-range` | 6,199 |
| `hormones-range` | 6,200 |
| `pressure-range` | 6,201 |

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
| 2,444 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,492 | hero: yield curve |
| 2,588 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,667 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,766 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,791 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,806 | long cycle (structural layer) |
| 2,847 | indicator grid |
| 2,890 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,907 | info icon + popover (progressive disclosure for longer notes) |
| 2,928 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,023 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (143), which is what the renderers fill:

| Line | id |
|---|---|
| 3,055 | `topbar-back` |
| 3,058 | `topbar-title` |
| 3,059 | `menu-btn` |
| 3,076 | `main` |
| 3,083 | `cycle-view` |
| 3,091 | `cycle-kicker` |
| 3,097 | `cycle-dial` |
| 3,099 | `season-wheel-hub-date` |
| 3,100 | `season-wheel-hub-theme` |
| 3,101 | `season-wheel-hub-detail` |
| 3,109 | `temp-card` |
| 3,111 | `temp-kicker` |
| 3,112 | `temp-sub` |
| 3,115 | `temp-svg` |
| 3,116 | `temp-tooltip` |
| 3,122 | `temp-stats` |
| 3,129 | `growth-card` |
| 3,132 | `growth-kicker` |
| 3,132 | `growth-phase` |
| 3,132 | `growth-sub` |
| 3,132 | `growth-peers` |
| 3,133 | `growth-svg` |
| 3,133 | `growth-tooltip` |
| 3,138 | `growth-stats` |
| 3,147 | `today-analysis` |
| 3,151 | `peek-row` |
| 3,155 | `sheet-metric-temp` |
| 3,156 | `temp-timing` |
| 3,157 | `temp-chart` |
| 3,159 | `temp-rangebar` |
| 3,161 | `temp-head` |
| 3,162 | `slot-temp` |
| 3,163 | `temp-history` |
| 3,164 | `temp-hist-tooltip` |
| 3,167 | `temp-trend` |
| 3,171 | `temp-highlights` |
| 3,174 | `sheet-metric-gdp` |
| 3,175 | `gdp-timing` |
| 3,176 | `gdp-chart` |
| 3,177 | `gdp-rangebar` |
| 3,179 | `gdp-head` |
| 3,180 | `slot-growth` |
| 3,181 | `gdp-history` |
| 3,182 | `gdp-hist-tooltip` |
| 3,183 | `gdp-yoy` |
| 3,193 | `gdp-trend` |
| 3,195 | `gdp-panel` |
| 3,200 | `subj-ring-gdp` |
| 3,202 | `subj-label-gdp` |
| 3,203 | `subj-value-gdp` |
| 3,204 | `subj-say-gdp` |
| 3,205 | `subj-spark-gdp` |
| 3,210 | `subj-ctx-gdp` |
| 3,213 | `gdp-highlights` |
| 3,221 | `sheet-metric-power` |
| 3,222 | `power-timing` |
| 3,223 | `power-head` |
| 3,224 | `power-chart` |
| 3,228 | `subj-ring-resilience` |
| 3,231 | `subj-value-resilience` |
| 3,232 | `subj-say-resilience` |
| 3,237 | `subj-ctx-resilience` |
| 3,241 | `longcycle-title` |
| 3,243 | `longcycle-tag` |
| 3,257 | `power-highlights` |
| 3,264 | `sheet-marker-deficit` |
| 3,270 | `sheet-metric-households` |
| 3,271 | `households-timing` |
| 3,272 | `households-chart` |
| 3,273 | `households-highlights` |
| 3,277 | `sheet-metric-valuation` |
| 3,278 | `valuation-timing` |
| 3,279 | `valuation-head` |
| 3,280 | `valuation-chart` |
| 3,284 | `subj-ring-valuation` |
| 3,287 | `subj-value-valuation` |
| 3,288 | `subj-say-valuation` |
| 3,293 | `subj-ctx-valuation` |
| 3,297 | `valuation-title` |
| 3,299 | `valuation-tag` |
| 3,306 | `valuation-highlights` |
| 3,330 | `subj-value-hormones` |
| 3,331 | `subj-say-hormones` |
| 3,339 | `hormones-history` |
| 3,349 | `hormones-highlights` |
| 3,375 | `subj-value-horizon` |
| 3,376 | `subj-say-horizon` |
| 3,377 | `subj-spark-horizon` |
| 3,387 | `hzn-timeline` |
| 3,389 | `hzn-head` |
| 3,390 | `spread-history-shell` |
| 3,391 | `spread-history-svg` |
| 3,392 | `spread-history-tooltip` |
| 3,397 | `ylm-shell` |
| 3,398 | `ylm-svg` |
| 3,399 | `ylm-tooltip` |
| 3,402 | `hzn-trend` |
| 3,403 | `ylm-trend` |
| 3,405 | `horizon-insights` |
| 3,406 | `horizon-highlights` |
| 3,432 | `subj-value-pressure` |
| 3,433 | `subj-say-pressure` |
| 3,438 | `pressure-history` |
| 3,439 | `pressure-highlights` |
| 3,445 | `subj-ring-sentiment` |
| 3,448 | `subj-value-sentiment` |
| 3,449 | `subj-say-sentiment` |
| 3,450 | `subj-spark-sentiment` |
| 3,464 | `fear-history` |
| 3,465 | `curve-highlights` |
| 3,479 | `signs-list` |
| 3,490 | `calendar-list` |
| 3,495 | `indicators-peek` |
| 3,541 | `cycle-list` |
| 3,547 | `cycle-more` |
| 3,548 | `cycle-more-label` |
| 3,557 | `calendar-cycle` |
| 3,558 | `calendar-cycle-slot` |
| 3,609 | `seasons-kicker` |
| 3,610 | `seasons-rows` |
| 3,614 | `framework-kicker` |
| 3,616 | `framework-rows` |
| 3,623 | `more-menu` |
| 3,626 | `menu-back` |
| 3,640 | `sources-open` |
| 3,648 | `appearance-current` |
| 3,656 | `sheet-howto` |
| 3,700 | `sheet-book` |
| 3,732 | `sheet-appearance` |
| 3,740 | `theme-toggle` |
| 3,747 | `sheet-contact` |
| 3,756 | `contact-form` |
| 3,757 | `contact-title` |
| 3,758 | `contact-message` |
| 3,760 | `contact-hint` |
| 3,761 | `contact-send` |
| 3,770 | `sheet-sources` |
| 3,773 | `sources-back` |
| 3,780 | `asof-text` |
| 3,781 | `sources-groups` |
| 3,788 | `detail-backdrop` |
| 3,790 | `detail-modal-close` |
| 3,791 | `detail-modal-body` |

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

