# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,269 lines**, about 1194 KB, roughly **339 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `10d6934` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,051 | the whole stylesheet, every token and rule |
| **Markup** | 3,052–3,799 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,800–14,216 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,217–14,269 | </body></html> |

Counts: **253** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,805_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,809 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,810 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,811 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,829 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,833 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,838_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,848 | `wheelMeta` | `var wheelMeta =` |
| 3,859 | `seasonOverride` | `var seasonOverride =` |
| 3,862 | `cycleNowNote` | `var cycleNowNote =` |
| 3,871 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,957 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,002 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,015_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,032 | `LIVE` | `function LIVE(` |
| 4,059 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,067 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,068 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,071_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,102 | `repaintFigureText` | `function repaintFigureText(` |
| 4,115 | `repaintRow` | `function repaintRow(` |
| 4,128 | `repaintTag` | `function repaintTag(` |
| 4,138 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,163 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,171 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,179 | `REPAINT` | `var REPAINT =` |
| 4,196 | `liveAsOf` | `var liveAsOf =` |
| 4,197 | `fmtAsOf` | `function fmtAsOf(` |
| 4,202 | `applyLive` | `function applyLive(` |
| 4,281 | `repaintPolicy` | `function repaintPolicy(` |
| 4,337 | `GYN` | `var GYN =` |
| 4,357 | `refreshLiveData` | `function refreshLiveData(` |
| 4,398 | `fetchSiteData` | `function fetchSiteData(` |
| 4,428 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,442_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,443 | `yieldCurve` | `var yieldCurve =` |
| 4,456 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,480 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,492 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,520_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,525 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,549 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,573 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,597 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,624 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,649_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,658 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,668 | `uninvLagToday` | `var uninvLagToday =` |
| 4,680 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,693 | `gdpPeers` | `var gdpPeers =` |
| 4,734 | `gdpSrc` | `var gdpSrc =` |
| 4,735 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,740 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,753 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,791_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,813 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,823_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,839 | `stressScoreFor` | `function stressScoreFor(` |
| 4,845 | `stressScore` | `var stressScore =` |
| 4,851 | `powerOf` | `var powerOf =` |
| 4,852 | `powerScore` | `var powerScore =` |
| 4,869 | `stressHistory` | `var stressHistory =` |
| 4,880 | `powerMeter` | `var powerMeter =` |
| 4,882 | `stressNoteFull` | `var stressNoteFull =` |
| 4,914 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,916_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,939 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,940 | `deficitHistory` | `var deficitHistory =` |
| 4,943 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,950 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,952 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,000 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,001 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,002 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,019_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,032 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,045_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,059 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,062 | `timelineSpan` | `function timelineSpan(` |
| 5,068 | `timelineFor` | `function timelineFor(` |
| 5,081 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,087_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,093 | `windowScale` | `function windowScale(` |
| 5,109 | `windowYears` | `function windowYears(` |
| 5,127 | `refName` | `function refName(` |
| 5,134 | `histReadEnsure` | `function histReadEnsure(` |
| 5,173 | `seatBandReading` | `function seatBandReading(` |
| 5,196 | `histReadFill` | `function histReadFill(` |
| 5,324 | `histAxisEnds` | `function histAxisEnds(` |
| 5,335 | `histLegend` | `function histLegend(` |
| 5,423 | `refitHistory` | `function refitHistory(` |
| 5,435 | `wireHistHover` | `function wireHistHover(` |
| 5,494 | `mWindowFrom` | `function mWindowFrom(` |
| 5,499 | `qWindowFrom` | `function qWindowFrom(` |
| 5,504 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,505 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,507 | `DEF_1983` | `var DEF_1983 =` |
| 5,509 | `defFrom` | `function defFrom(` |
| 5,520 | `deficitChart` | `function deficitChart(` |
| 5,610 | `deficitBlock` | `function deficitBlock(` |
| 5,672 | `buffettHistory` | `var buffettHistory =` |
| 5,702 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,703 | `hyDates` | `var hyDates =` |
| 5,704 | `hyOas` | `var hyOas =` |
| 5,705 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,712 | `hyAt` | `function hyAt(` |
| 5,716 | `hyLabel` | `function hyLabel(` |
| 5,717 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,718 | `hyNum` | `function hyNum(` |
| 5,719 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,729 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,739 | `capeHistory` | `var capeHistory =` |
| 5,741 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,759_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,765 | `sentiment` | `var sentiment =` |
| 5,783 | `valuation` | `var valuation =` |
| 5,820 | `valRow` | `function valRow(` |
| 5,828 | `coincident` | `var coincident =` |
| 5,889 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,907 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,908 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,909 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,911_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,924 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,925 | `m2vHistory` | `var m2vHistory =` |
| 5,945 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,038 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,128 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,129 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,169_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,175 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,176 | `DOTS` | `var DOTS =` |
| 6,178 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,206 | `histHead` | `function histHead(` |
| 6,227 | `headNoteIdx` | `var headNoteIdx =` |
| 6,228 | `headMenuHtml` | `function headMenuHtml(` |
| 6,286 | `headMenuFor` | `var headMenuFor =` |
| 6,288 | `headSubFor` | `var headSubFor =` |
| 6,289 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,334 | `nameWithMark` | `function nameWithMark(` |
| 6,340 | `panelRow` | `function panelRow(` |
| 6,366 | `panelFromMeter` | `function panelFromMeter(` |
| 6,380 | `meterFlagged` | `function meterFlagged(` |
| 6,391 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,419 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,433 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,452 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,471 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,485 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,510 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,541 | `desireBlock` | `function desireBlock(` |
| 6,568 | `volumeBlock` | `function volumeBlock(` |
| 6,593 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,616 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,624_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,637 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,638 | `m2Level` | `var m2Level =` |
| 6,660 | `m2Yoy` | `var m2Yoy =` |
| 6,661 | `M2_NORM` | `var M2_NORM =` |
| 6,666 | `volumeVerdict` | `function volumeVerdict(` |
| 6,703 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,704 | `unempHistory` | `var unempHistory =` |
| 6,710 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,725 | `NROU_NOW` | `var NROU_NOW =` |
| 6,726 | `unempState` | `function unempState(` |
| 6,732 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,796_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,805 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,814_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,827 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,840 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 6,896 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,951 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,952 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,955 | `qAtIndex` | `function qAtIndex(` |
| 6,956 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,964_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,979 | `householdsChart` | `function householdsChart(` |
| 7,047 | `lastChartAvg` | `var lastChartAvg =` |
| 7,048 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,133 | `GDP_NORM` | `var GDP_NORM =` |
| 7,139 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,140 | `gdpNowQ` | `var gdpNowQ =` |
| 7,141 | `gdpMeter` | `var gdpMeter =` |
| 7,144 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,166 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,232 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,296 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,304 | `velocityVerdict` | `function velocityVerdict(` |
| 7,312 | `derivePulseTag` | `function derivePulseTag(` |
| 7,318 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,378_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,387 | `seasonReading` | `var seasonReading =` |
| 7,436 | `frameworkRows` | `var frameworkRows =` |
| 7,446 | `vixRow` | `var vixRow =` |
| 7,454 | `vixWordOf` | `var vixWordOf =` |
| 7,458 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,473_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,477 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,486_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,487 | `calendarTodayY` | `var calendarTodayY =` |
| 7,518 | `vix3mClose` | `var vix3mClose =` |
| 7,519 | `fearCurve` | `function fearCurve(` |
| 7,526 | `curveVerdict` | `function curveVerdict(` |
| 7,533 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,538 | `valuationVerdict` | `function valuationVerdict(` |
| 7,556 | `sparkHtml` | `function sparkHtml(` |
| 7,575 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,581_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,594 | `modeBar` | `function modeBar(` |
| 7,609 | `pickerOpen` | `var pickerOpen =` |
| 7,613 | `cycleByName` | `function cycleByName(` |
| 7,617 | `openCycle` | `function openCycle(` |
| 7,623 | `cycleSlice` | `function cycleSlice(` |
| 7,632 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,640 | `cycleMonths` | `function cycleMonths(` |
| 7,659 | `histControls` | `function histControls(` |
| 7,673 | `cycLabel` | `function cycLabel(` |
| 7,689 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,698 | `cyclePicker` | `function cyclePicker(` |
| 7,717 | `rangeBar` | `function rangeBar(` |
| 7,729 | `trendOf` | `function trendOf(` |
| 7,774 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,784 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,805_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,806 | `yearOf` | `function yearOf(` |
| 7,807 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,808_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,838 | `totalStat` | `function totalStat(` |
| 7,844 | `atQuarter` | `function atQuarter(` |
| 7,845 | `atMonth` | `function atMonth(` |
| 7,846 | `cycleAverages` | `function cycleAverages(` |
| 7,853 | `ordinal` | `function ordinal(` |
| 7,854 | `hiCard` | `function hiCard(` |
| 7,865 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,879_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,886 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,902 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,909 | `moreRow` | `function moreRow(` |
| 7,915 | `powerPageNote` | `var powerPageNote =` |
| 7,916 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,922_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,925 | `xLabelOf` | `function xLabelOf(` |
| 7,945 | `fitGroup` | `function fitGroup(` |
| 7,967 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,026_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,050 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,060 | `vGrid` | `function vGrid(` |
| 8,085 | `COL_FILL` | `var COL_FILL =` |
| 8,118 | `colPath` | `function colPath(` |
| 8,123 | `colWidth` | `function colWidth(` |
| 8,170 | `AXIS` | `var AXIS =` |
| 8,171 | `chartAxes` | `function chartAxes(` |
| 8,231 | `divergeChart` | `function divergeChart(` |
| 8,299 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,328_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,336 | `maxIn` | `function maxIn(` |
| 8,354 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,368 | `PEEK_W` | `var PEEK_W =` |
| 8,371 | `PEEK_H` | `var PEEK_H =` |
| 8,376 | `colPeek` | `function colPeek(` |
| 8,403 | `meterPeek` | `function meterPeek(` |
| 8,420 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,425 | `pressureZone` | `function pressureZone(` |
| 8,440 | `HZN_BACK` | `var HZN_BACK =` |
| 8,441 | `hznLast` | `function hznLast(` |
| 8,442 | `hznBack` | `function hznBack(` |
| 8,443 | `horizonWord` | `function horizonWord(` |
| 8,468 | `HZN_METERS` | `var HZN_METERS =` |
| 8,476 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,517 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,522 | `RISK_RISK` | `var RISK_RISK =` |
| 8,527 | `riskCell` | `function riskCell(` |
| 8,528 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,559 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,584_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,605 | `pulseClipN` | `var pulseClipN =` |
| 8,606 | `beatPath` | `function beatPath(` |
| 8,631 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,645 | `pulsePeek` | `function pulsePeek(` |
| 8,653 | `pulseBlock` | `function pulseBlock(` |
| 8,673 | `CHEV` | `var CHEV =` |
| 8,675 | `peekCard` | `function peekCard(` |
| 8,729 | `dropSvg` | `function dropSvg(` |
| 8,741 | `volumeSvg` | `function volumeSvg(` |
| 8,748 | `gaugeSvg` | `function gaugeSvg(` |
| 8,752 | `diamondSvg` | `function diamondSvg(` |
| 8,766 | `energyFromReserve` | `function energyFromReserve(` |
| 8,778 | `sproutSvg` | `function sproutSvg(` |
| 8,789 | `markSvg` | `function markSvg(` |
| 8,798 | `pressureSvg` | `function pressureSvg(` |
| 8,802 | `hormoneSvg` | `function hormoneSvg(` |
| 8,808 | `flameSvg` | `function flameSvg(` |
| 8,812 | `gearSvg` | `function gearSvg(` |
| 8,824 | `thermoSvg` | `function thermoSvg(` |
| 8,843 | `trendUpSvg` | `function trendUpSvg(` |
| 8,845 | `ecgSvg` | `function ecgSvg(` |
| 8,859 | `circulationSvg` | `function circulationSvg(` |
| 8,860 | `weatherSvg` | `function weatherSvg(` |
| 8,881 | `moodSvg` | `function moodSvg(` |
| 8,905 | `boltSvg` | `function boltSvg(` |
| 8,908 | `houseSvg` | `function houseSvg(` |
| 8,916 | `sunriseSvg` | `function sunriseSvg(` |
| 8,931 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,942 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,959_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,980 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,981 | `dsrHistory` | `var dsrHistory =` |
| 8,982 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,983 | `savHistory` | `var savHistory =` |
| 8,988 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,998 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,999 | `dsrNow` | `var dsrNow =` |
| 9,000 | `savNow` | `var savNow =` |
| 9,001 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,006 | `householdsWord` | `function householdsWord(` |
| 9,013 | `householdsNow` | `var householdsNow =` |
| 9,020 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,021 | `dsrMeter` | `var dsrMeter =` |
| 9,024 | `savMeter` | `var savMeter =` |
| 9,027 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,044 | `savInfoHtml` | `function savInfoHtml(` |
| 9,062 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,071 | `curveNow` | `var curveNow =` |
| 9,072 | `curveTag` | `var curveTag =` |
| 9,073 | `curveSub` | `var curveSub =` |
| 9,077 | `curvePct` | `function curvePct(` |
| 9,078 | `curveNoteFull` | `var curveNoteFull =` |
| 9,093 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,101 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,142 | `marketCycles` | `var marketCycles =` |
| 9,172 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,174_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,195 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,196 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,201_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,222 | `slopeOf` | `function slopeOf(` |
| 9,233 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,239 | `readSeason` | `function readSeason(` |
| 9,264 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,266 | `qLabel` | `function qLabel(` |
| 9,290 | `regimeTrack` | `function regimeTrack(` |
| 9,313 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,315_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,322 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,323 | `seasonTitle` | `function seasonTitle(` |
| 9,324 | `monthLabel` | `function monthLabel(` |
| 9,325 | `cycleModel` | `function cycleModel(` |
| 9,377 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,385 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,392 | `nowModel` | `var nowModel =` |
| 9,393 | `readingNow` | `var readingNow =` |
| 9,394 | `cpiNow` | `var cpiNow =` |
| 9,395 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,396 | `currentSeason` | `var currentSeason =` |
| 9,397 | `seasonWhy` | `var seasonWhy =` |
| 9,414 | `seasonGroup` | `function seasonGroup(` |
| 9,428 | `arcGauge` | `function arcGauge(` |
| 9,470 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,483 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,490 | `tsyView` | `var tsyView =` |
| 9,492 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,494 | `spreadLabel` | `function spreadLabel(` |
| 9,501 | `policyFacts` | `function policyFacts(` |
| 9,513 | `allSources` | `var allSources =` |
| 9,537 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,570_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,573 | `SVG_NS` | `var SVG_NS =` |
| 9,574 | `svgEl` | `function svgEl(` |
| 9,587 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,623_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,624 | `clampPct` | `function clampPct(` |
| 9,631 | `infoIcon` | `function infoIcon(` |
| 9,640 | `detailTexts` | `var detailTexts =` |
| 9,658 | `detailSlots` | `var detailSlots =` |
| 9,659 | `detailSlot` | `function detailSlot(` |
| 9,670 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,674 | `_growthPanel` | `var _growthPanel =` |
| 9,675 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,681 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,692 | `facts` | `function facts(` |
| 9,693 | `factsFrom` | `function factsFrom(` |
| 9,697 | `expandBtn` | `function expandBtn(` |
| 9,703 | `sheetRenderers` | `var sheetRenderers =` |
| 9,720 | `pageMode` | `var pageMode =` |
| 9,727 | `pageCycles` | `var pageCycles =` |
| 9,732 | `pageRange` | `var pageRange =` |
| 9,738 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,772_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,783 | `meterHtml` | `function meterHtml(` |
| 9,811 | `srcHtml` | `function srcHtml(` |
| 9,820 | `TIMING` | `var TIMING =` |
| 9,826 | `timingMark` | `function timingMark(` |
| 9,840 | `timingPill` | `function timingPill(` |
| 9,861 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,869 | `seatPageFoot` | `function seatPageFoot(` |
| 9,892 | `timingMembers` | `var timingMembers =` |
| 9,893 | `registerTiming` | `function registerTiming(` |
| 9,899 | `headHtml` | `function headHtml(` |
| 9,917 | `heldHighlights` | `var heldHighlights =` |
| 9,918 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,976_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,977 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,410_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,411 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,634_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,635 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,667_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,673 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,758_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,759 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,777_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,780 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,803_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,815 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 10,906_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,915 | `lendingWord` | `function lendingWord(` |
| 10,923 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,983_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,984 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,104_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,107 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,229_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,241 | `totalRiseIn` | `function totalRiseIn(` |
| 11,251 | `eraInflation` | `function eraInflation(` |
| 11,262 | `eraGrowth` | `function eraGrowth(` |
| 11,278 | `fmtSigned` | `function fmtSigned(` |
| 11,283 | `regimeArrow` | `function regimeArrow(` |
| 11,289 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,290 | `growthShown` | `function growthShown(` |
| 11,291 | `growthShownCap` | `function growthShownCap(` |
| 11,292 | `regimeState` | `function regimeState(` |
| 11,296 | `phaseClass` | `function phaseClass(` |
| 11,298 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,310 | `cycleViewEl` | `var cycleViewEl =` |
| 11,314 | `tempCard` | `var tempCard =` |
| 11,315 | `placeCharts` | `function placeCharts(` |
| 11,320 | `shownEra` | `var shownEra =` |
| 11,321 | `calendarReset` | `var calendarReset =` |
| 11,322 | `metricPageReset` | `var metricPageReset =` |
| 11,323 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,326 | `topbarBack` | `var topbarBack =` |
| 11,327 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,334_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,335 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,496_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,497 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,515_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,518 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,539_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,545 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,548 | `hubSet` | `function hubSet(` |
| 11,561 | `quarterPopup` | `function quarterPopup(` |
| 11,594 | `hubShowDefault` | `function hubShowDefault(` |
| 11,603 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,609 | `hubShowYear` | `function hubShowYear(` |
| 11,624 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,716_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,719 | `tempState` | `var tempState =` |
| 11,722 | `chartLink` | `var chartLink =` |
| 11,742 | `m2Step` | `function m2Step(` |
| 11,745 | `heatStep` | `function heatStep(` |
| 11,749 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,936_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,939 | `drawGrowth` | `function drawGrowth(` |
| 12,078 | `wireResize` | `function wireResize(` |
| 12,084 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,096_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,097 | `renderCycleView` | `function renderCycleView(` |
| 12,150 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,161 | `PEER_CARET` | `var PEER_CARET =` |
| 12,162 | `peerList` | `function peerList(` |
| 12,163 | `peerChosen` | `function peerChosen(` |
| 12,164 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,168 | `renderPeerPills` | `function renderPeerPills(` |
| 12,218 | `shownEraModel` | `var shownEraModel =` |
| 12,219 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,221_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,223 | `stripGroupName` | `var stripGroupName =` |
| 12,224 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,270 | `marketStripHtml` | `function marketStripHtml(` |
| 12,333 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,334 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,364_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,365 | `renderCycleList` | `function renderCycleList(` |
| 12,455 | `renderSignsList` | `function renderSignsList(` |
| 12,740 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,015_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,016 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,078_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,079 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,112_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,113 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,028–4,031 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,449–8,462 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,273–9,286 | `seasonTrackAll` | The season, computed |
| 9,308–9,312 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,476 |
| `desire-range` | 10,299 |
| `fear-range` | 11,073 |
| `hormones-range` | 10,850 |
| `hzn-range` | 10,403 |
| `hzn-spread` | 10,397 |
| `pressure-range` | 10,950 |
| `pulse-range` | 10,250 |
| `sheet-marker-deficit` | 13,473 |
| `sheet-metric-gdp` | 13,357 |
| `sheet-metric-households` | 13,507 |
| `sheet-metric-power` | 13,436 |
| `sheet-metric-temp` | 13,307 |
| `sheet-metric-valuation` | 13,549 |
| `sheet-sign-activity` | 13,418 |
| `sheet-sign-desire` | 10,300 |
| `sheet-sign-horizon` | 10,404 |
| `sheet-sign-hormones` | 10,853 |
| `sheet-sign-pressure` | 10,951 |
| `sheet-sign-pulse` | 10,249 |
| `sheet-sign-sentiment` | 11,078 |
| `sheet-sign-volume` | 10,273 |
| `volume-range` | 10,274 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,482 |
| `desire-range` | 10,282 |
| `fear-range` | 11,030 |
| `hzn-range` | 10,328 |
| `pulse-range` | 10,227 |
| `sheet-metric-gdp` | 13,358 |
| `sheet-metric-power` | 13,437 |
| `sheet-metric-temp` | 13,308 |
| `sheet-metric-valuation` | 13,550 |
| `volume-range` | 10,254 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,179 |
| `sheet-metric-gdp` | 6,180 |
| `sheet-sign-activity` | 6,187 |
| `sheet-metric-power` | 6,188 |
| `sheet-metric-valuation` | 6,190 |
| `sheet-metric-households` | 6,191 |
| `deficit-range` | 6,192 |
| `volume-range` | 6,193 |
| `pulse-range` | 6,194 |
| `hzn-range` | 6,200 |
| `desire-range` | 6,201 |
| `fear-range` | 6,202 |
| `hormones-range` | 6,203 |
| `pressure-range` | 6,204 |

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
| 2,446 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,494 | hero: yield curve |
| 2,590 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,669 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,768 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,793 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,808 | long cycle (structural layer) |
| 2,849 | indicator grid |
| 2,892 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,909 | info icon + popover (progressive disclosure for longer notes) |
| 2,930 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,025 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (142), which is what the renderers fill:

| Line | id |
|---|---|
| 3,057 | `topbar-back` |
| 3,060 | `topbar-title` |
| 3,061 | `menu-btn` |
| 3,078 | `main` |
| 3,085 | `cycle-view` |
| 3,093 | `cycle-kicker` |
| 3,099 | `cycle-dial` |
| 3,101 | `season-wheel-hub-date` |
| 3,102 | `season-wheel-hub-theme` |
| 3,103 | `season-wheel-hub-detail` |
| 3,111 | `temp-card` |
| 3,113 | `temp-kicker` |
| 3,114 | `temp-sub` |
| 3,117 | `temp-svg` |
| 3,118 | `temp-tooltip` |
| 3,124 | `temp-stats` |
| 3,131 | `growth-card` |
| 3,134 | `growth-kicker` |
| 3,134 | `growth-phase` |
| 3,134 | `growth-sub` |
| 3,134 | `growth-peers` |
| 3,135 | `growth-svg` |
| 3,135 | `growth-tooltip` |
| 3,140 | `growth-stats` |
| 3,149 | `today-analysis` |
| 3,153 | `peek-row` |
| 3,157 | `sheet-metric-temp` |
| 3,158 | `temp-timing` |
| 3,159 | `temp-chart` |
| 3,161 | `temp-rangebar` |
| 3,163 | `temp-head` |
| 3,164 | `slot-temp` |
| 3,165 | `temp-history` |
| 3,166 | `temp-hist-tooltip` |
| 3,169 | `temp-trend` |
| 3,173 | `temp-highlights` |
| 3,176 | `sheet-metric-gdp` |
| 3,177 | `gdp-timing` |
| 3,178 | `gdp-chart` |
| 3,179 | `gdp-rangebar` |
| 3,181 | `gdp-head` |
| 3,182 | `slot-growth` |
| 3,183 | `gdp-history` |
| 3,184 | `gdp-hist-tooltip` |
| 3,185 | `gdp-yoy` |
| 3,195 | `gdp-trend` |
| 3,197 | `gdp-panel` |
| 3,202 | `subj-ring-gdp` |
| 3,204 | `subj-label-gdp` |
| 3,205 | `subj-value-gdp` |
| 3,206 | `subj-say-gdp` |
| 3,207 | `subj-spark-gdp` |
| 3,212 | `subj-ctx-gdp` |
| 3,215 | `gdp-highlights` |
| 3,223 | `sheet-metric-power` |
| 3,224 | `power-timing` |
| 3,225 | `power-head` |
| 3,226 | `power-chart` |
| 3,230 | `subj-ring-resilience` |
| 3,233 | `subj-value-resilience` |
| 3,234 | `subj-say-resilience` |
| 3,239 | `subj-ctx-resilience` |
| 3,243 | `longcycle-title` |
| 3,245 | `longcycle-tag` |
| 3,259 | `power-highlights` |
| 3,266 | `sheet-marker-deficit` |
| 3,272 | `sheet-metric-households` |
| 3,273 | `households-timing` |
| 3,274 | `households-chart` |
| 3,275 | `households-highlights` |
| 3,279 | `sheet-metric-valuation` |
| 3,280 | `valuation-timing` |
| 3,281 | `valuation-head` |
| 3,282 | `valuation-chart` |
| 3,286 | `subj-ring-valuation` |
| 3,289 | `subj-value-valuation` |
| 3,290 | `subj-say-valuation` |
| 3,295 | `subj-ctx-valuation` |
| 3,299 | `valuation-title` |
| 3,301 | `valuation-tag` |
| 3,308 | `valuation-highlights` |
| 3,332 | `subj-value-hormones` |
| 3,333 | `subj-say-hormones` |
| 3,341 | `hormones-history` |
| 3,351 | `hormones-highlights` |
| 3,377 | `subj-value-horizon` |
| 3,378 | `subj-say-horizon` |
| 3,379 | `subj-spark-horizon` |
| 3,389 | `hzn-timeline` |
| 3,391 | `hzn-head` |
| 3,392 | `spread-history-shell` |
| 3,393 | `spread-history-svg` |
| 3,394 | `spread-history-tooltip` |
| 3,399 | `ylm-shell` |
| 3,400 | `ylm-svg` |
| 3,401 | `ylm-tooltip` |
| 3,404 | `hzn-trend` |
| 3,405 | `ylm-trend` |
| 3,407 | `horizon-insights` |
| 3,435 | `subj-value-pressure` |
| 3,436 | `subj-say-pressure` |
| 3,441 | `pressure-history` |
| 3,442 | `pressure-highlights` |
| 3,448 | `subj-ring-sentiment` |
| 3,451 | `subj-value-sentiment` |
| 3,452 | `subj-say-sentiment` |
| 3,453 | `subj-spark-sentiment` |
| 3,467 | `fear-history` |
| 3,468 | `curve-highlights` |
| 3,482 | `signs-list` |
| 3,493 | `calendar-list` |
| 3,498 | `indicators-peek` |
| 3,544 | `cycle-list` |
| 3,550 | `cycle-more` |
| 3,551 | `cycle-more-label` |
| 3,560 | `calendar-cycle` |
| 3,561 | `calendar-cycle-slot` |
| 3,612 | `seasons-kicker` |
| 3,613 | `seasons-rows` |
| 3,617 | `framework-kicker` |
| 3,619 | `framework-rows` |
| 3,626 | `more-menu` |
| 3,629 | `menu-back` |
| 3,643 | `sources-open` |
| 3,651 | `appearance-current` |
| 3,659 | `sheet-howto` |
| 3,703 | `sheet-book` |
| 3,735 | `sheet-appearance` |
| 3,743 | `theme-toggle` |
| 3,750 | `sheet-contact` |
| 3,759 | `contact-form` |
| 3,760 | `contact-title` |
| 3,761 | `contact-message` |
| 3,763 | `contact-hint` |
| 3,764 | `contact-send` |
| 3,773 | `sheet-sources` |
| 3,776 | `sources-back` |
| 3,783 | `asof-text` |
| 3,784 | `sources-groups` |
| 3,791 | `detail-backdrop` |
| 3,793 | `detail-modal-close` |
| 3,794 | `detail-modal-body` |

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

