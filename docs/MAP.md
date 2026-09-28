# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,210 lines**, about 1188 KB, roughly **338 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `f628860` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,045 | the whole stylesheet, every token and rule |
| **Markup** | 3,046–3,794 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,795–14,157 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,158–14,210 | </body></html> |

Counts: **253** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,800_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,804 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,805 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,806 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,824 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,828 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,833_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,843 | `wheelMeta` | `var wheelMeta =` |
| 3,854 | `seasonOverride` | `var seasonOverride =` |
| 3,857 | `cycleNowNote` | `var cycleNowNote =` |
| 3,866 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,952 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,997 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,010_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,027 | `LIVE` | `function LIVE(` |
| 4,054 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,062 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,063 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,066_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,097 | `repaintFigureText` | `function repaintFigureText(` |
| 4,110 | `repaintRow` | `function repaintRow(` |
| 4,123 | `repaintTag` | `function repaintTag(` |
| 4,133 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,158 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,166 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,174 | `REPAINT` | `var REPAINT =` |
| 4,191 | `liveAsOf` | `var liveAsOf =` |
| 4,192 | `fmtAsOf` | `function fmtAsOf(` |
| 4,197 | `applyLive` | `function applyLive(` |
| 4,276 | `repaintPolicy` | `function repaintPolicy(` |
| 4,332 | `GYN` | `var GYN =` |
| 4,352 | `refreshLiveData` | `function refreshLiveData(` |
| 4,393 | `fetchSiteData` | `function fetchSiteData(` |
| 4,423 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,437_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,438 | `yieldCurve` | `var yieldCurve =` |
| 4,451 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,475 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,487 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,515_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,520 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,544 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,568 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,592 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,619 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,644_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,653 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,663 | `uninvLagToday` | `var uninvLagToday =` |
| 4,675 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,688 | `gdpPeers` | `var gdpPeers =` |
| 4,729 | `gdpSrc` | `var gdpSrc =` |
| 4,730 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,735 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,748 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,786_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,808 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,818_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,834 | `stressScoreFor` | `function stressScoreFor(` |
| 4,840 | `stressScore` | `var stressScore =` |
| 4,846 | `powerOf` | `var powerOf =` |
| 4,847 | `powerScore` | `var powerScore =` |
| 4,864 | `stressHistory` | `var stressHistory =` |
| 4,875 | `powerMeter` | `var powerMeter =` |
| 4,877 | `stressNoteFull` | `var stressNoteFull =` |
| 4,909 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,911_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,934 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,935 | `deficitHistory` | `var deficitHistory =` |
| 4,938 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,945 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,947 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 4,995 | `fedFundsHistory` | `var fedFundsHistory =` |
| 4,996 | `fearCurveHistory` | `var fearCurveHistory =` |
| 4,997 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,014_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,027 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,040_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,054 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,057 | `timelineSpan` | `function timelineSpan(` |
| 5,063 | `timelineFor` | `function timelineFor(` |
| 5,076 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,082_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,088 | `windowScale` | `function windowScale(` |
| 5,104 | `windowYears` | `function windowYears(` |
| 5,122 | `refName` | `function refName(` |
| 5,129 | `histReadEnsure` | `function histReadEnsure(` |
| 5,168 | `seatBandReading` | `function seatBandReading(` |
| 5,191 | `histReadFill` | `function histReadFill(` |
| 5,319 | `histAxisEnds` | `function histAxisEnds(` |
| 5,330 | `histLegend` | `function histLegend(` |
| 5,418 | `refitHistory` | `function refitHistory(` |
| 5,430 | `wireHistHover` | `function wireHistHover(` |
| 5,489 | `mWindowFrom` | `function mWindowFrom(` |
| 5,494 | `qWindowFrom` | `function qWindowFrom(` |
| 5,499 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,500 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,502 | `DEF_1983` | `var DEF_1983 =` |
| 5,504 | `defFrom` | `function defFrom(` |
| 5,515 | `deficitChart` | `function deficitChart(` |
| 5,605 | `deficitBlock` | `function deficitBlock(` |
| 5,667 | `buffettHistory` | `var buffettHistory =` |
| 5,697 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,698 | `hyDates` | `var hyDates =` |
| 5,699 | `hyOas` | `var hyOas =` |
| 5,700 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,707 | `hyAt` | `function hyAt(` |
| 5,711 | `hyLabel` | `function hyLabel(` |
| 5,712 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,713 | `hyNum` | `function hyNum(` |
| 5,714 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,724 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,734 | `capeHistory` | `var capeHistory =` |
| 5,736 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,754_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,760 | `sentiment` | `var sentiment =` |
| 5,778 | `valuation` | `var valuation =` |
| 5,815 | `valRow` | `function valRow(` |
| 5,823 | `coincident` | `var coincident =` |
| 5,884 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,902 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,903 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,904 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,906_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,919 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,920 | `m2vHistory` | `var m2vHistory =` |
| 5,940 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,033 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,123 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,124 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,164_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,170 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,171 | `DOTS` | `var DOTS =` |
| 6,173 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,201 | `histHead` | `function histHead(` |
| 6,222 | `headNoteIdx` | `var headNoteIdx =` |
| 6,223 | `headMenuHtml` | `function headMenuHtml(` |
| 6,243 | `headMenuFor` | `var headMenuFor =` |
| 6,244 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,273 | `nameWithMark` | `function nameWithMark(` |
| 6,279 | `panelRow` | `function panelRow(` |
| 6,305 | `panelFromMeter` | `function panelFromMeter(` |
| 6,319 | `meterFlagged` | `function meterFlagged(` |
| 6,330 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,358 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,372 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,391 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,410 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,424 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,449 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,480 | `desireBlock` | `function desireBlock(` |
| 6,507 | `volumeBlock` | `function volumeBlock(` |
| 6,532 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,555 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,563_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,576 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,577 | `m2Level` | `var m2Level =` |
| 6,599 | `m2Yoy` | `var m2Yoy =` |
| 6,600 | `M2_NORM` | `var M2_NORM =` |
| 6,605 | `volumeVerdict` | `function volumeVerdict(` |
| 6,642 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,643 | `unempHistory` | `var unempHistory =` |
| 6,649 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,664 | `NROU_NOW` | `var NROU_NOW =` |
| 6,665 | `unempState` | `function unempState(` |
| 6,671 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,735_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,744 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,753_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,766 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,779 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 6,835 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,890 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,891 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,894 | `qAtIndex` | `function qAtIndex(` |
| 6,895 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,903_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,918 | `householdsChart` | `function householdsChart(` |
| 6,986 | `lastChartAvg` | `var lastChartAvg =` |
| 6,987 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,072 | `GDP_NORM` | `var GDP_NORM =` |
| 7,078 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,079 | `gdpNowQ` | `var gdpNowQ =` |
| 7,080 | `gdpMeter` | `var gdpMeter =` |
| 7,083 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,105 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,171 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,235 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,243 | `velocityVerdict` | `function velocityVerdict(` |
| 7,251 | `derivePulseTag` | `function derivePulseTag(` |
| 7,257 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,317_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,326 | `seasonReading` | `var seasonReading =` |
| 7,375 | `frameworkRows` | `var frameworkRows =` |
| 7,385 | `vixRow` | `var vixRow =` |
| 7,393 | `vixWordOf` | `var vixWordOf =` |
| 7,397 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,412_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,416 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,425_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,426 | `calendarTodayY` | `var calendarTodayY =` |
| 7,457 | `vix3mClose` | `var vix3mClose =` |
| 7,458 | `fearCurve` | `function fearCurve(` |
| 7,465 | `curveVerdict` | `function curveVerdict(` |
| 7,472 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,477 | `valuationVerdict` | `function valuationVerdict(` |
| 7,495 | `sparkHtml` | `function sparkHtml(` |
| 7,514 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,520_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,533 | `modeBar` | `function modeBar(` |
| 7,548 | `pickerOpen` | `var pickerOpen =` |
| 7,552 | `cycleByName` | `function cycleByName(` |
| 7,556 | `openCycle` | `function openCycle(` |
| 7,562 | `cycleSlice` | `function cycleSlice(` |
| 7,571 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,579 | `cycleMonths` | `function cycleMonths(` |
| 7,598 | `histControls` | `function histControls(` |
| 7,612 | `cycLabel` | `function cycLabel(` |
| 7,628 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,637 | `cyclePicker` | `function cyclePicker(` |
| 7,656 | `rangeBar` | `function rangeBar(` |
| 7,668 | `trendOf` | `function trendOf(` |
| 7,713 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,723 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,744_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,745 | `yearOf` | `function yearOf(` |
| 7,746 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,747_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,777 | `totalStat` | `function totalStat(` |
| 7,783 | `atQuarter` | `function atQuarter(` |
| 7,784 | `atMonth` | `function atMonth(` |
| 7,785 | `cycleAverages` | `function cycleAverages(` |
| 7,792 | `ordinal` | `function ordinal(` |
| 7,793 | `hiCard` | `function hiCard(` |
| 7,804 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,818_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,825 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,841 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,848 | `moreRow` | `function moreRow(` |
| 7,854 | `powerPageNote` | `var powerPageNote =` |
| 7,855 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,861_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,864 | `xLabelOf` | `function xLabelOf(` |
| 7,884 | `fitGroup` | `function fitGroup(` |
| 7,906 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,965_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,989 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,999 | `vGrid` | `function vGrid(` |
| 8,024 | `COL_FILL` | `var COL_FILL =` |
| 8,057 | `colPath` | `function colPath(` |
| 8,062 | `colWidth` | `function colWidth(` |
| 8,109 | `AXIS` | `var AXIS =` |
| 8,110 | `chartAxes` | `function chartAxes(` |
| 8,170 | `divergeChart` | `function divergeChart(` |
| 8,238 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,267_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,275 | `maxIn` | `function maxIn(` |
| 8,293 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,307 | `PEEK_W` | `var PEEK_W =` |
| 8,310 | `PEEK_H` | `var PEEK_H =` |
| 8,315 | `colPeek` | `function colPeek(` |
| 8,342 | `meterPeek` | `function meterPeek(` |
| 8,359 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,364 | `pressureZone` | `function pressureZone(` |
| 8,379 | `HZN_BACK` | `var HZN_BACK =` |
| 8,380 | `hznLast` | `function hznLast(` |
| 8,381 | `hznBack` | `function hznBack(` |
| 8,382 | `horizonWord` | `function horizonWord(` |
| 8,407 | `HZN_METERS` | `var HZN_METERS =` |
| 8,415 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,439 | `_hznPanel` | `var _hznPanel =` |
| 8,440 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,464 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,469 | `RISK_RISK` | `var RISK_RISK =` |
| 8,474 | `riskCell` | `function riskCell(` |
| 8,475 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,506 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,531_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,552 | `pulseClipN` | `var pulseClipN =` |
| 8,553 | `beatPath` | `function beatPath(` |
| 8,578 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,592 | `pulsePeek` | `function pulsePeek(` |
| 8,600 | `pulseBlock` | `function pulseBlock(` |
| 8,620 | `CHEV` | `var CHEV =` |
| 8,622 | `peekCard` | `function peekCard(` |
| 8,676 | `dropSvg` | `function dropSvg(` |
| 8,688 | `volumeSvg` | `function volumeSvg(` |
| 8,695 | `gaugeSvg` | `function gaugeSvg(` |
| 8,699 | `diamondSvg` | `function diamondSvg(` |
| 8,713 | `energyFromReserve` | `function energyFromReserve(` |
| 8,725 | `sproutSvg` | `function sproutSvg(` |
| 8,736 | `markSvg` | `function markSvg(` |
| 8,745 | `pressureSvg` | `function pressureSvg(` |
| 8,749 | `hormoneSvg` | `function hormoneSvg(` |
| 8,755 | `flameSvg` | `function flameSvg(` |
| 8,759 | `gearSvg` | `function gearSvg(` |
| 8,771 | `thermoSvg` | `function thermoSvg(` |
| 8,790 | `trendUpSvg` | `function trendUpSvg(` |
| 8,792 | `ecgSvg` | `function ecgSvg(` |
| 8,806 | `circulationSvg` | `function circulationSvg(` |
| 8,807 | `weatherSvg` | `function weatherSvg(` |
| 8,828 | `moodSvg` | `function moodSvg(` |
| 8,852 | `boltSvg` | `function boltSvg(` |
| 8,855 | `houseSvg` | `function houseSvg(` |
| 8,863 | `sunriseSvg` | `function sunriseSvg(` |
| 8,878 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,889 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,906_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,927 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,928 | `dsrHistory` | `var dsrHistory =` |
| 8,929 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,930 | `savHistory` | `var savHistory =` |
| 8,935 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,945 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,946 | `dsrNow` | `var dsrNow =` |
| 8,947 | `savNow` | `var savNow =` |
| 8,948 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,953 | `householdsWord` | `function householdsWord(` |
| 8,960 | `householdsNow` | `var householdsNow =` |
| 8,967 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,968 | `dsrMeter` | `var dsrMeter =` |
| 8,971 | `savMeter` | `var savMeter =` |
| 8,974 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,991 | `savInfoHtml` | `function savInfoHtml(` |
| 9,009 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,018 | `curveNow` | `var curveNow =` |
| 9,019 | `curveTag` | `var curveTag =` |
| 9,020 | `curveSub` | `var curveSub =` |
| 9,024 | `curvePct` | `function curvePct(` |
| 9,025 | `curveNoteFull` | `var curveNoteFull =` |
| 9,040 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,048 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,089 | `marketCycles` | `var marketCycles =` |
| 9,119 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,121_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,142 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,143 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,148_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,169 | `slopeOf` | `function slopeOf(` |
| 9,180 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,186 | `readSeason` | `function readSeason(` |
| 9,211 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,213 | `qLabel` | `function qLabel(` |
| 9,237 | `regimeTrack` | `function regimeTrack(` |
| 9,260 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,262_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,269 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,270 | `seasonTitle` | `function seasonTitle(` |
| 9,271 | `monthLabel` | `function monthLabel(` |
| 9,272 | `cycleModel` | `function cycleModel(` |
| 9,324 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,332 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,339 | `nowModel` | `var nowModel =` |
| 9,340 | `readingNow` | `var readingNow =` |
| 9,341 | `cpiNow` | `var cpiNow =` |
| 9,342 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,343 | `currentSeason` | `var currentSeason =` |
| 9,344 | `seasonWhy` | `var seasonWhy =` |
| 9,361 | `seasonGroup` | `function seasonGroup(` |
| 9,375 | `arcGauge` | `function arcGauge(` |
| 9,417 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,430 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,437 | `tsyView` | `var tsyView =` |
| 9,439 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,443 | `policyFacts` | `function policyFacts(` |
| 9,455 | `allSources` | `var allSources =` |
| 9,479 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,512_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,515 | `SVG_NS` | `var SVG_NS =` |
| 9,516 | `svgEl` | `function svgEl(` |
| 9,529 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,565_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,566 | `clampPct` | `function clampPct(` |
| 9,573 | `infoIcon` | `function infoIcon(` |
| 9,582 | `detailTexts` | `var detailTexts =` |
| 9,600 | `detailSlots` | `var detailSlots =` |
| 9,601 | `detailSlot` | `function detailSlot(` |
| 9,612 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,616 | `_growthPanel` | `var _growthPanel =` |
| 9,617 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,623 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,634 | `facts` | `function facts(` |
| 9,635 | `factsFrom` | `function factsFrom(` |
| 9,639 | `expandBtn` | `function expandBtn(` |
| 9,645 | `sheetRenderers` | `var sheetRenderers =` |
| 9,662 | `pageMode` | `var pageMode =` |
| 9,669 | `pageCycles` | `var pageCycles =` |
| 9,674 | `pageRange` | `var pageRange =` |
| 9,680 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,714_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,725 | `meterHtml` | `function meterHtml(` |
| 9,753 | `srcHtml` | `function srcHtml(` |
| 9,762 | `TIMING` | `var TIMING =` |
| 9,768 | `timingMark` | `function timingMark(` |
| 9,782 | `timingPill` | `function timingPill(` |
| 9,803 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,811 | `seatPageFoot` | `function seatPageFoot(` |
| 9,834 | `timingMembers` | `var timingMembers =` |
| 9,835 | `registerTiming` | `function registerTiming(` |
| 9,841 | `headHtml` | `function headHtml(` |
| 9,859 | `heldHighlights` | `var heldHighlights =` |
| 9,860 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,918_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,919 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,348_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,349 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,572_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,573 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,605_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,611 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,699_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,700 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,718_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,721 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,744_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,756 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 10,847_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,856 | `lendingWord` | `function lendingWord(` |
| 10,864 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,924_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,925 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,045_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,048 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,170_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,182 | `totalRiseIn` | `function totalRiseIn(` |
| 11,192 | `eraInflation` | `function eraInflation(` |
| 11,203 | `eraGrowth` | `function eraGrowth(` |
| 11,219 | `fmtSigned` | `function fmtSigned(` |
| 11,224 | `regimeArrow` | `function regimeArrow(` |
| 11,230 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,231 | `growthShown` | `function growthShown(` |
| 11,232 | `growthShownCap` | `function growthShownCap(` |
| 11,233 | `regimeState` | `function regimeState(` |
| 11,237 | `phaseClass` | `function phaseClass(` |
| 11,239 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,251 | `cycleViewEl` | `var cycleViewEl =` |
| 11,255 | `tempCard` | `var tempCard =` |
| 11,256 | `placeCharts` | `function placeCharts(` |
| 11,261 | `shownEra` | `var shownEra =` |
| 11,262 | `calendarReset` | `var calendarReset =` |
| 11,263 | `metricPageReset` | `var metricPageReset =` |
| 11,264 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,267 | `topbarBack` | `var topbarBack =` |
| 11,268 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,275_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,276 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,437_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,438 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,456_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,459 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,480_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,486 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,489 | `hubSet` | `function hubSet(` |
| 11,502 | `quarterPopup` | `function quarterPopup(` |
| 11,535 | `hubShowDefault` | `function hubShowDefault(` |
| 11,544 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,550 | `hubShowYear` | `function hubShowYear(` |
| 11,565 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,657_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,660 | `tempState` | `var tempState =` |
| 11,663 | `chartLink` | `var chartLink =` |
| 11,683 | `m2Step` | `function m2Step(` |
| 11,686 | `heatStep` | `function heatStep(` |
| 11,690 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,877_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,880 | `drawGrowth` | `function drawGrowth(` |
| 12,019 | `wireResize` | `function wireResize(` |
| 12,025 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,037_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,038 | `renderCycleView` | `function renderCycleView(` |
| 12,091 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,102 | `PEER_CARET` | `var PEER_CARET =` |
| 12,103 | `peerList` | `function peerList(` |
| 12,104 | `peerChosen` | `function peerChosen(` |
| 12,105 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,109 | `renderPeerPills` | `function renderPeerPills(` |
| 12,159 | `shownEraModel` | `var shownEraModel =` |
| 12,160 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,162_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,164 | `stripGroupName` | `var stripGroupName =` |
| 12,165 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,211 | `marketStripHtml` | `function marketStripHtml(` |
| 12,274 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,275 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,305_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,306 | `renderCycleList` | `function renderCycleList(` |
| 12,396 | `renderSignsList` | `function renderSignsList(` |
| 12,681 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,956_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,957 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,019_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,020 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,053_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,054 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,023–4,026 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,388–8,401 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,220–9,233 | `seasonTrackAll` | The season, computed |
| 9,255–9,259 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,417 |
| `desire-range` | 10,241 |
| `fear-range` | 11,014 |
| `hormones-range` | 10,791 |
| `hzn-range` | 10,341 |
| `hzn-spread` | 10,335 |
| `pressure-range` | 10,891 |
| `pulse-range` | 10,192 |
| `sheet-marker-deficit` | 13,414 |
| `sheet-metric-gdp` | 13,298 |
| `sheet-metric-households` | 13,448 |
| `sheet-metric-power` | 13,377 |
| `sheet-metric-temp` | 13,248 |
| `sheet-metric-valuation` | 13,490 |
| `sheet-sign-activity` | 13,359 |
| `sheet-sign-desire` | 10,242 |
| `sheet-sign-horizon` | 10,342 |
| `sheet-sign-hormones` | 10,794 |
| `sheet-sign-pressure` | 10,892 |
| `sheet-sign-pulse` | 10,191 |
| `sheet-sign-sentiment` | 11,019 |
| `sheet-sign-volume` | 10,215 |
| `volume-range` | 10,216 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,423 |
| `desire-range` | 10,224 |
| `fear-range` | 10,971 |
| `hzn-range` | 10,270 |
| `pulse-range` | 10,169 |
| `sheet-metric-gdp` | 13,299 |
| `sheet-metric-power` | 13,378 |
| `sheet-metric-temp` | 13,249 |
| `sheet-metric-valuation` | 13,491 |
| `volume-range` | 10,196 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,174 |
| `sheet-metric-gdp` | 6,175 |
| `sheet-sign-activity` | 6,182 |
| `sheet-metric-power` | 6,183 |
| `sheet-metric-valuation` | 6,185 |
| `sheet-metric-households` | 6,186 |
| `deficit-range` | 6,187 |
| `volume-range` | 6,188 |
| `pulse-range` | 6,189 |
| `hzn-range` | 6,195 |
| `desire-range` | 6,196 |
| `fear-range` | 6,197 |
| `hormones-range` | 6,198 |
| `pressure-range` | 6,199 |

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

Every `id` in the static DOM (144), which is what the renderers fill:

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
| 3,345 | `hormones-highlights` |
| 3,371 | `subj-value-horizon` |
| 3,372 | `subj-say-horizon` |
| 3,373 | `subj-spark-horizon` |
| 3,383 | `hzn-timeline` |
| 3,385 | `hzn-head` |
| 3,386 | `spread-history-shell` |
| 3,387 | `spread-history-svg` |
| 3,388 | `spread-history-tooltip` |
| 3,393 | `ylm-shell` |
| 3,394 | `ylm-svg` |
| 3,395 | `ylm-tooltip` |
| 3,398 | `hzn-trend` |
| 3,399 | `ylm-trend` |
| 3,401 | `hzn-panel` |
| 3,403 | `horizon-insights` |
| 3,404 | `horizon-highlights` |
| 3,430 | `subj-value-pressure` |
| 3,431 | `subj-say-pressure` |
| 3,436 | `pressure-history` |
| 3,437 | `pressure-highlights` |
| 3,443 | `subj-ring-sentiment` |
| 3,446 | `subj-value-sentiment` |
| 3,447 | `subj-say-sentiment` |
| 3,448 | `subj-spark-sentiment` |
| 3,462 | `fear-history` |
| 3,463 | `curve-highlights` |
| 3,477 | `signs-list` |
| 3,488 | `calendar-list` |
| 3,493 | `indicators-peek` |
| 3,539 | `cycle-list` |
| 3,545 | `cycle-more` |
| 3,546 | `cycle-more-label` |
| 3,555 | `calendar-cycle` |
| 3,556 | `calendar-cycle-slot` |
| 3,607 | `seasons-kicker` |
| 3,608 | `seasons-rows` |
| 3,612 | `framework-kicker` |
| 3,614 | `framework-rows` |
| 3,621 | `more-menu` |
| 3,624 | `menu-back` |
| 3,638 | `sources-open` |
| 3,646 | `appearance-current` |
| 3,654 | `sheet-howto` |
| 3,698 | `sheet-book` |
| 3,730 | `sheet-appearance` |
| 3,738 | `theme-toggle` |
| 3,745 | `sheet-contact` |
| 3,754 | `contact-form` |
| 3,755 | `contact-title` |
| 3,756 | `contact-message` |
| 3,758 | `contact-hint` |
| 3,759 | `contact-send` |
| 3,768 | `sheet-sources` |
| 3,771 | `sources-back` |
| 3,778 | `asof-text` |
| 3,779 | `sources-groups` |
| 3,786 | `detail-backdrop` |
| 3,788 | `detail-modal-close` |
| 3,789 | `detail-modal-body` |

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

