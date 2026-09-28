# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,973 lines**, about 1170 KB, roughly **333 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `faa22b5` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,041 | the whole stylesheet, every token and rule |
| **Markup** | 3,042–3,760 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,761–13,920 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,921–13,973 | </body></html> |

Counts: **248** top-level functions, **178** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,766_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,770 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,771 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,772 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,790 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,794 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,799_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,809 | `wheelMeta` | `var wheelMeta =` |
| 3,820 | `seasonOverride` | `var seasonOverride =` |
| 3,823 | `cycleNowNote` | `var cycleNowNote =` |
| 3,832 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,918 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,963 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,976_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,993 | `LIVE` | `function LIVE(` |
| 4,020 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,028 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,029 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,032_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,063 | `repaintFigureText` | `function repaintFigureText(` |
| 4,076 | `repaintRow` | `function repaintRow(` |
| 4,089 | `repaintTag` | `function repaintTag(` |
| 4,099 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,124 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,132 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,140 | `REPAINT` | `var REPAINT =` |
| 4,157 | `liveAsOf` | `var liveAsOf =` |
| 4,158 | `fmtAsOf` | `function fmtAsOf(` |
| 4,163 | `applyLive` | `function applyLive(` |
| 4,242 | `repaintPolicy` | `function repaintPolicy(` |
| 4,298 | `GYN` | `var GYN =` |
| 4,318 | `refreshLiveData` | `function refreshLiveData(` |
| 4,359 | `fetchSiteData` | `function fetchSiteData(` |
| 4,389 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,403_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,404 | `yieldCurve` | `var yieldCurve =` |
| 4,417 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,441 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,453 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,481_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,486 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,510 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,534 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,558 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,585 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,610_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,619 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,629 | `uninvLagToday` | `var uninvLagToday =` |
| 4,641 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,654 | `gdpPeers` | `var gdpPeers =` |
| 4,695 | `gdpSrc` | `var gdpSrc =` |
| 4,696 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,701 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,714 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,752_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,774 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,784_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,800 | `stressScoreFor` | `function stressScoreFor(` |
| 4,806 | `stressScore` | `var stressScore =` |
| 4,812 | `powerOf` | `var powerOf =` |
| 4,813 | `powerScore` | `var powerScore =` |
| 4,830 | `stressHistory` | `var stressHistory =` |
| 4,841 | `powerMeter` | `var powerMeter =` |
| 4,843 | `stressNoteFull` | `var stressNoteFull =` |
| 4,875 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,877_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,900 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,901 | `deficitHistory` | `var deficitHistory =` |
| 4,904 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,911 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,913 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 4,961 | `fedFundsHistory` | `var fedFundsHistory =` |
| 4,962 | `fearCurveHistory` | `var fearCurveHistory =` |
| 4,963 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,980_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,993 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,006_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,020 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,023 | `timelineSpan` | `function timelineSpan(` |
| 5,029 | `timelineFor` | `function timelineFor(` |
| 5,042 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,048_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,054 | `windowScale` | `function windowScale(` |
| 5,070 | `windowYears` | `function windowYears(` |
| 5,088 | `refName` | `function refName(` |
| 5,095 | `histReadEnsure` | `function histReadEnsure(` |
| 5,134 | `seatBandReading` | `function seatBandReading(` |
| 5,157 | `histReadFill` | `function histReadFill(` |
| 5,285 | `histAxisEnds` | `function histAxisEnds(` |
| 5,296 | `histLegend` | `function histLegend(` |
| 5,384 | `refitHistory` | `function refitHistory(` |
| 5,396 | `wireHistHover` | `function wireHistHover(` |
| 5,455 | `mWindowFrom` | `function mWindowFrom(` |
| 5,460 | `qWindowFrom` | `function qWindowFrom(` |
| 5,465 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,466 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,468 | `DEF_1983` | `var DEF_1983 =` |
| 5,470 | `defFrom` | `function defFrom(` |
| 5,481 | `deficitChart` | `function deficitChart(` |
| 5,571 | `deficitBlock` | `function deficitBlock(` |
| 5,633 | `buffettHistory` | `var buffettHistory =` |
| 5,663 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,664 | `hyDates` | `var hyDates =` |
| 5,665 | `hyOas` | `var hyOas =` |
| 5,666 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,673 | `hyAt` | `function hyAt(` |
| 5,677 | `hyLabel` | `function hyLabel(` |
| 5,678 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,679 | `hyNum` | `function hyNum(` |
| 5,680 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,690 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,700 | `capeHistory` | `var capeHistory =` |
| 5,702 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,720_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,726 | `sentiment` | `var sentiment =` |
| 5,744 | `valuation` | `var valuation =` |
| 5,781 | `valRow` | `function valRow(` |
| 5,789 | `coincident` | `var coincident =` |
| 5,850 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,868 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,869 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,870 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,872_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,885 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,886 | `m2vHistory` | `var m2vHistory =` |
| 5,906 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,999 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,089 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,090 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,130_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,136 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,137 | `DOTS` | `var DOTS =` |
| 6,139 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,176 | `histHead` | `function histHead(` |
| 6,197 | `headNoteIdx` | `var headNoteIdx =` |
| 6,198 | `headMenuHtml` | `function headMenuHtml(` |
| 6,218 | `headMenuFor` | `var headMenuFor =` |
| 6,219 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,248 | `nameWithMark` | `function nameWithMark(` |
| 6,254 | `panelRow` | `function panelRow(` |
| 6,280 | `panelFromMeter` | `function panelFromMeter(` |
| 6,294 | `meterFlagged` | `function meterFlagged(` |
| 6,305 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,333 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,347 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,366 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,385 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,399 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,424 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,455 | `desireBlock` | `function desireBlock(` |
| 6,482 | `volumeBlock` | `function volumeBlock(` |
| 6,507 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,530 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,538_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,551 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,552 | `m2Level` | `var m2Level =` |
| 6,574 | `m2Yoy` | `var m2Yoy =` |
| 6,575 | `M2_NORM` | `var M2_NORM =` |
| 6,580 | `volumeVerdict` | `function volumeVerdict(` |
| 6,617 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,618 | `unempHistory` | `var unempHistory =` |
| 6,624 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,639 | `NROU_NOW` | `var NROU_NOW =` |
| 6,640 | `unempState` | `function unempState(` |
| 6,646 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,710_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,719 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 6,727 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,782 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,783 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,786 | `qAtIndex` | `function qAtIndex(` |
| 6,787 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,795_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,810 | `householdsChart` | `function householdsChart(` |
| 6,878 | `lastChartAvg` | `var lastChartAvg =` |
| 6,879 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,964 | `GDP_NORM` | `var GDP_NORM =` |
| 6,970 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,971 | `gdpNowQ` | `var gdpNowQ =` |
| 6,972 | `gdpMeter` | `var gdpMeter =` |
| 6,975 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,997 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,063 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,127 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,135 | `velocityVerdict` | `function velocityVerdict(` |
| 7,143 | `derivePulseTag` | `function derivePulseTag(` |
| 7,149 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,209_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,218 | `seasonReading` | `var seasonReading =` |
| 7,267 | `frameworkRows` | `var frameworkRows =` |
| 7,277 | `vixRow` | `var vixRow =` |
| 7,285 | `vixWordOf` | `var vixWordOf =` |
| 7,289 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,304_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,308 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,317_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,318 | `calendarTodayY` | `var calendarTodayY =` |
| 7,349 | `vix3mClose` | `var vix3mClose =` |
| 7,350 | `fearCurve` | `function fearCurve(` |
| 7,357 | `curveVerdict` | `function curveVerdict(` |
| 7,364 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,369 | `valuationVerdict` | `function valuationVerdict(` |
| 7,387 | `sparkHtml` | `function sparkHtml(` |
| 7,406 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,412_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,425 | `modeBar` | `function modeBar(` |
| 7,440 | `pickerOpen` | `var pickerOpen =` |
| 7,444 | `cycleByName` | `function cycleByName(` |
| 7,448 | `openCycle` | `function openCycle(` |
| 7,454 | `cycleSlice` | `function cycleSlice(` |
| 7,463 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,471 | `cycleMonths` | `function cycleMonths(` |
| 7,490 | `histControls` | `function histControls(` |
| 7,504 | `cycLabel` | `function cycLabel(` |
| 7,520 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,529 | `cyclePicker` | `function cyclePicker(` |
| 7,548 | `rangeBar` | `function rangeBar(` |
| 7,560 | `trendOf` | `function trendOf(` |
| 7,605 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,615 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,636_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,637 | `yearOf` | `function yearOf(` |
| 7,638 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,639_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,669 | `totalStat` | `function totalStat(` |
| 7,675 | `atQuarter` | `function atQuarter(` |
| 7,676 | `atMonth` | `function atMonth(` |
| 7,677 | `cycleAverages` | `function cycleAverages(` |
| 7,684 | `ordinal` | `function ordinal(` |
| 7,685 | `hiCard` | `function hiCard(` |
| 7,696 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,710_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,717 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,733 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,740 | `moreRow` | `function moreRow(` |
| 7,746 | `powerPageNote` | `var powerPageNote =` |
| 7,747 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,753_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,756 | `xLabelOf` | `function xLabelOf(` |
| 7,776 | `fitGroup` | `function fitGroup(` |
| 7,798 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,857_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,881 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,891 | `vGrid` | `function vGrid(` |
| 7,916 | `COL_FILL` | `var COL_FILL =` |
| 7,949 | `colPath` | `function colPath(` |
| 7,954 | `colWidth` | `function colWidth(` |
| 8,001 | `AXIS` | `var AXIS =` |
| 8,002 | `chartAxes` | `function chartAxes(` |
| 8,062 | `divergeChart` | `function divergeChart(` |
| 8,130 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,159_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,167 | `maxIn` | `function maxIn(` |
| 8,185 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,199 | `PEEK_W` | `var PEEK_W =` |
| 8,202 | `PEEK_H` | `var PEEK_H =` |
| 8,207 | `colPeek` | `function colPeek(` |
| 8,234 | `meterPeek` | `function meterPeek(` |
| 8,251 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,256 | `pressureZone` | `function pressureZone(` |
| 8,271 | `HZN_BACK` | `var HZN_BACK =` |
| 8,272 | `hznLast` | `function hznLast(` |
| 8,273 | `hznBack` | `function hznBack(` |
| 8,274 | `horizonWord` | `function horizonWord(` |
| 8,299 | `HZN_METERS` | `var HZN_METERS =` |
| 8,307 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,331 | `_hznPanel` | `var _hznPanel =` |
| 8,332 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,356 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,361 | `RISK_RISK` | `var RISK_RISK =` |
| 8,366 | `riskCell` | `function riskCell(` |
| 8,367 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,398 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,423_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,444 | `pulseClipN` | `var pulseClipN =` |
| 8,445 | `beatPath` | `function beatPath(` |
| 8,470 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,484 | `pulsePeek` | `function pulsePeek(` |
| 8,492 | `pulseBlock` | `function pulseBlock(` |
| 8,512 | `CHEV` | `var CHEV =` |
| 8,514 | `peekCard` | `function peekCard(` |
| 8,568 | `dropSvg` | `function dropSvg(` |
| 8,580 | `volumeSvg` | `function volumeSvg(` |
| 8,587 | `gaugeSvg` | `function gaugeSvg(` |
| 8,591 | `diamondSvg` | `function diamondSvg(` |
| 8,605 | `energyFromReserve` | `function energyFromReserve(` |
| 8,617 | `sproutSvg` | `function sproutSvg(` |
| 8,628 | `markSvg` | `function markSvg(` |
| 8,634 | `hormoneSvg` | `function hormoneSvg(` |
| 8,640 | `flameSvg` | `function flameSvg(` |
| 8,644 | `gearSvg` | `function gearSvg(` |
| 8,656 | `thermoSvg` | `function thermoSvg(` |
| 8,675 | `trendUpSvg` | `function trendUpSvg(` |
| 8,677 | `ecgSvg` | `function ecgSvg(` |
| 8,691 | `circulationSvg` | `function circulationSvg(` |
| 8,692 | `weatherSvg` | `function weatherSvg(` |
| 8,713 | `moodSvg` | `function moodSvg(` |
| 8,737 | `boltSvg` | `function boltSvg(` |
| 8,740 | `houseSvg` | `function houseSvg(` |
| 8,748 | `sunriseSvg` | `function sunriseSvg(` |
| 8,763 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,774 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,791_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,812 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,813 | `dsrHistory` | `var dsrHistory =` |
| 8,814 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,815 | `savHistory` | `var savHistory =` |
| 8,820 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,830 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,831 | `dsrNow` | `var dsrNow =` |
| 8,832 | `savNow` | `var savNow =` |
| 8,833 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,838 | `householdsWord` | `function householdsWord(` |
| 8,845 | `householdsNow` | `var householdsNow =` |
| 8,852 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,853 | `dsrMeter` | `var dsrMeter =` |
| 8,856 | `savMeter` | `var savMeter =` |
| 8,859 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,876 | `savInfoHtml` | `function savInfoHtml(` |
| 8,894 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,903 | `curveNow` | `var curveNow =` |
| 8,904 | `curveTag` | `var curveTag =` |
| 8,905 | `curveSub` | `var curveSub =` |
| 8,909 | `curvePct` | `function curvePct(` |
| 8,910 | `curveNoteFull` | `var curveNoteFull =` |
| 8,925 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,933 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,974 | `marketCycles` | `var marketCycles =` |
| 9,004 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,006_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,027 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,028 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,033_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,054 | `slopeOf` | `function slopeOf(` |
| 9,065 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,071 | `readSeason` | `function readSeason(` |
| 9,096 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,098 | `qLabel` | `function qLabel(` |
| 9,122 | `regimeTrack` | `function regimeTrack(` |
| 9,145 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,147_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,154 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,155 | `seasonTitle` | `function seasonTitle(` |
| 9,156 | `monthLabel` | `function monthLabel(` |
| 9,157 | `cycleModel` | `function cycleModel(` |
| 9,209 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,217 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,224 | `nowModel` | `var nowModel =` |
| 9,225 | `readingNow` | `var readingNow =` |
| 9,226 | `cpiNow` | `var cpiNow =` |
| 9,227 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,228 | `currentSeason` | `var currentSeason =` |
| 9,229 | `seasonWhy` | `var seasonWhy =` |
| 9,246 | `seasonGroup` | `function seasonGroup(` |
| 9,260 | `arcGauge` | `function arcGauge(` |
| 9,302 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,315 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,317 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,321 | `policyFacts` | `function policyFacts(` |
| 9,333 | `allSources` | `var allSources =` |
| 9,357 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,390_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,393 | `SVG_NS` | `var SVG_NS =` |
| 9,394 | `svgEl` | `function svgEl(` |
| 9,407 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,443_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,444 | `clampPct` | `function clampPct(` |
| 9,451 | `infoIcon` | `function infoIcon(` |
| 9,460 | `detailTexts` | `var detailTexts =` |
| 9,478 | `detailSlots` | `var detailSlots =` |
| 9,479 | `detailSlot` | `function detailSlot(` |
| 9,490 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,494 | `_growthPanel` | `var _growthPanel =` |
| 9,495 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,501 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,512 | `facts` | `function facts(` |
| 9,513 | `factsFrom` | `function factsFrom(` |
| 9,517 | `expandBtn` | `function expandBtn(` |
| 9,523 | `sheetRenderers` | `var sheetRenderers =` |
| 9,540 | `pageMode` | `var pageMode =` |
| 9,547 | `pageCycles` | `var pageCycles =` |
| 9,552 | `pageRange` | `var pageRange =` |
| 9,558 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,592_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,603 | `meterHtml` | `function meterHtml(` |
| 9,631 | `srcHtml` | `function srcHtml(` |
| 9,640 | `TIMING` | `var TIMING =` |
| 9,646 | `timingMark` | `function timingMark(` |
| 9,660 | `timingPill` | `function timingPill(` |
| 9,681 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,689 | `seatPageFoot` | `function seatPageFoot(` |
| 9,712 | `timingMembers` | `var timingMembers =` |
| 9,713 | `registerTiming` | `function registerTiming(` |
| 9,719 | `headHtml` | `function headHtml(` |
| 9,737 | `heldHighlights` | `var heldHighlights =` |
| 9,738 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,796_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,797 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,204_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,205 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,428_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,429 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,461_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,467 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,551_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,552 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,570_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,573 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,596_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,608 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,698_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,699 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,819_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,822 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,944_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,956 | `totalRiseIn` | `function totalRiseIn(` |
| 10,966 | `eraInflation` | `function eraInflation(` |
| 10,977 | `eraGrowth` | `function eraGrowth(` |
| 10,993 | `fmtSigned` | `function fmtSigned(` |
| 10,998 | `regimeArrow` | `function regimeArrow(` |
| 11,004 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,005 | `growthShown` | `function growthShown(` |
| 11,006 | `growthShownCap` | `function growthShownCap(` |
| 11,007 | `regimeState` | `function regimeState(` |
| 11,011 | `phaseClass` | `function phaseClass(` |
| 11,013 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,025 | `cycleViewEl` | `var cycleViewEl =` |
| 11,029 | `tempCard` | `var tempCard =` |
| 11,030 | `placeCharts` | `function placeCharts(` |
| 11,035 | `shownEra` | `var shownEra =` |
| 11,036 | `calendarReset` | `var calendarReset =` |
| 11,037 | `metricPageReset` | `var metricPageReset =` |
| 11,038 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,041 | `topbarBack` | `var topbarBack =` |
| 11,042 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,049_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,050 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,211_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,212 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,230_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,233 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,254_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,260 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,263 | `hubSet` | `function hubSet(` |
| 11,276 | `quarterPopup` | `function quarterPopup(` |
| 11,309 | `hubShowDefault` | `function hubShowDefault(` |
| 11,318 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,324 | `hubShowYear` | `function hubShowYear(` |
| 11,339 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,431_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,434 | `tempState` | `var tempState =` |
| 11,437 | `chartLink` | `var chartLink =` |
| 11,457 | `m2Step` | `function m2Step(` |
| 11,460 | `heatStep` | `function heatStep(` |
| 11,464 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,651_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,654 | `drawGrowth` | `function drawGrowth(` |
| 11,793 | `wireResize` | `function wireResize(` |
| 11,799 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,811_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,812 | `renderCycleView` | `function renderCycleView(` |
| 11,865 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,876 | `PEER_CARET` | `var PEER_CARET =` |
| 11,877 | `peerList` | `function peerList(` |
| 11,878 | `peerChosen` | `function peerChosen(` |
| 11,879 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,883 | `renderPeerPills` | `function renderPeerPills(` |
| 11,933 | `shownEraModel` | `var shownEraModel =` |
| 11,934 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,936_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,938 | `stripGroupName` | `var stripGroupName =` |
| 11,939 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,985 | `marketStripHtml` | `function marketStripHtml(` |
| 12,048 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,049 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,079_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,080 | `renderCycleList` | `function renderCycleList(` |
| 12,170 | `renderSignsList` | `function renderSignsList(` |
| 12,452 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,719_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,720 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,782_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,783 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,816_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,817 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,989–3,992 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,280–8,293 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,105–9,118 | `seasonTrackAll` | The season, computed |
| 9,140–9,144 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,180 |
| `desire-range` | 10,129 |
| `fear-range` | 10,788 |
| `hormones-range` | 10,045 |
| `hzn-range` | 10,500 |
| `pulse-range` | 10,080 |
| `sheet-marker-deficit` | 13,177 |
| `sheet-metric-gdp` | 13,061 |
| `sheet-metric-households` | 13,211 |
| `sheet-metric-power` | 13,140 |
| `sheet-metric-temp` | 13,011 |
| `sheet-metric-valuation` | 13,253 |
| `sheet-sign-activity` | 13,122 |
| `sheet-sign-desire` | 10,130 |
| `sheet-sign-horizon` | 10,501 |
| `sheet-sign-hormones` | 10,044 |
| `sheet-sign-pulse` | 10,079 |
| `sheet-sign-sentiment` | 10,793 |
| `sheet-sign-volume` | 10,103 |
| `volume-range` | 10,104 |
| `ylm-range` | 10,196 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,186 |
| `desire-range` | 10,112 |
| `fear-range` | 10,745 |
| `hzn-range` | 10,477 |
| `pulse-range` | 10,057 |
| `sheet-metric-gdp` | 13,062 |
| `sheet-metric-power` | 13,141 |
| `sheet-metric-temp` | 13,012 |
| `sheet-metric-valuation` | 13,254 |
| `volume-range` | 10,084 |
| `ylm-range` | 10,158 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,140 |
| `sheet-metric-gdp` | 6,141 |
| `sheet-sign-activity` | 6,148 |
| `sheet-metric-power` | 6,149 |
| `sheet-metric-valuation` | 6,151 |
| `sheet-metric-households` | 6,152 |
| `deficit-range` | 6,153 |
| `volume-range` | 6,154 |
| `pulse-range` | 6,155 |
| `hzn-range` | 6,156 |
| `ylm-range` | 6,171 |
| `desire-range` | 6,172 |
| `fear-range` | 6,173 |
| `hormones-range` | 6,174 |

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
| 1,766 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,943 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,436 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,484 | hero: yield curve |
| 2,580 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,659 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,758 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,783 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,798 | long cycle (structural layer) |
| 2,839 | indicator grid |
| 2,882 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,899 | info icon + popover (progressive disclosure for longer notes) |
| 2,920 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,015 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (142), which is what the renderers fill:

| Line | id |
|---|---|
| 3,047 | `topbar-back` |
| 3,050 | `topbar-title` |
| 3,051 | `menu-btn` |
| 3,068 | `main` |
| 3,075 | `cycle-view` |
| 3,083 | `cycle-kicker` |
| 3,089 | `cycle-dial` |
| 3,091 | `season-wheel-hub-date` |
| 3,092 | `season-wheel-hub-theme` |
| 3,093 | `season-wheel-hub-detail` |
| 3,101 | `temp-card` |
| 3,103 | `temp-kicker` |
| 3,104 | `temp-sub` |
| 3,107 | `temp-svg` |
| 3,108 | `temp-tooltip` |
| 3,114 | `temp-stats` |
| 3,121 | `growth-card` |
| 3,124 | `growth-kicker` |
| 3,124 | `growth-phase` |
| 3,124 | `growth-sub` |
| 3,124 | `growth-peers` |
| 3,125 | `growth-svg` |
| 3,125 | `growth-tooltip` |
| 3,130 | `growth-stats` |
| 3,139 | `today-analysis` |
| 3,143 | `peek-row` |
| 3,147 | `sheet-metric-temp` |
| 3,148 | `temp-timing` |
| 3,149 | `temp-chart` |
| 3,151 | `temp-rangebar` |
| 3,153 | `temp-head` |
| 3,154 | `slot-temp` |
| 3,155 | `temp-history` |
| 3,156 | `temp-hist-tooltip` |
| 3,159 | `temp-trend` |
| 3,163 | `temp-highlights` |
| 3,166 | `sheet-metric-gdp` |
| 3,167 | `gdp-timing` |
| 3,168 | `gdp-chart` |
| 3,169 | `gdp-rangebar` |
| 3,171 | `gdp-head` |
| 3,172 | `slot-growth` |
| 3,173 | `gdp-history` |
| 3,174 | `gdp-hist-tooltip` |
| 3,175 | `gdp-yoy` |
| 3,185 | `gdp-trend` |
| 3,187 | `gdp-panel` |
| 3,192 | `subj-ring-gdp` |
| 3,194 | `subj-label-gdp` |
| 3,195 | `subj-value-gdp` |
| 3,196 | `subj-say-gdp` |
| 3,197 | `subj-spark-gdp` |
| 3,202 | `subj-ctx-gdp` |
| 3,205 | `gdp-highlights` |
| 3,213 | `sheet-metric-power` |
| 3,214 | `power-timing` |
| 3,215 | `power-head` |
| 3,216 | `power-chart` |
| 3,220 | `subj-ring-resilience` |
| 3,223 | `subj-value-resilience` |
| 3,224 | `subj-say-resilience` |
| 3,229 | `subj-ctx-resilience` |
| 3,233 | `longcycle-title` |
| 3,235 | `longcycle-tag` |
| 3,249 | `power-highlights` |
| 3,256 | `sheet-marker-deficit` |
| 3,262 | `sheet-metric-households` |
| 3,263 | `households-timing` |
| 3,264 | `households-chart` |
| 3,265 | `households-highlights` |
| 3,269 | `sheet-metric-valuation` |
| 3,270 | `valuation-timing` |
| 3,271 | `valuation-head` |
| 3,272 | `valuation-chart` |
| 3,276 | `subj-ring-valuation` |
| 3,279 | `subj-value-valuation` |
| 3,280 | `subj-say-valuation` |
| 3,285 | `subj-ctx-valuation` |
| 3,289 | `valuation-title` |
| 3,291 | `valuation-tag` |
| 3,298 | `valuation-highlights` |
| 3,322 | `subj-value-hormones` |
| 3,323 | `subj-say-hormones` |
| 3,331 | `hormones-history` |
| 3,334 | `ylm-series` |
| 3,338 | `ylm-head` |
| 3,339 | `ylm-shell` |
| 3,340 | `ylm-svg` |
| 3,341 | `ylm-tooltip` |
| 3,344 | `ylm-trend` |
| 3,350 | `hormones-highlights` |
| 3,376 | `subj-value-horizon` |
| 3,377 | `subj-say-horizon` |
| 3,378 | `subj-spark-horizon` |
| 3,388 | `hzn-timeline` |
| 3,390 | `hzn-head` |
| 3,391 | `spread-history-shell` |
| 3,392 | `spread-history-svg` |
| 3,393 | `spread-history-tooltip` |
| 3,396 | `hzn-trend` |
| 3,398 | `hzn-panel` |
| 3,400 | `horizon-insights` |
| 3,401 | `horizon-highlights` |
| 3,409 | `subj-ring-sentiment` |
| 3,412 | `subj-value-sentiment` |
| 3,413 | `subj-say-sentiment` |
| 3,414 | `subj-spark-sentiment` |
| 3,428 | `fear-history` |
| 3,429 | `curve-highlights` |
| 3,443 | `signs-list` |
| 3,454 | `calendar-list` |
| 3,459 | `indicators-peek` |
| 3,505 | `cycle-list` |
| 3,511 | `cycle-more` |
| 3,512 | `cycle-more-label` |
| 3,521 | `calendar-cycle` |
| 3,522 | `calendar-cycle-slot` |
| 3,573 | `seasons-kicker` |
| 3,574 | `seasons-rows` |
| 3,578 | `framework-kicker` |
| 3,580 | `framework-rows` |
| 3,587 | `more-menu` |
| 3,590 | `menu-back` |
| 3,604 | `sources-open` |
| 3,612 | `appearance-current` |
| 3,620 | `sheet-howto` |
| 3,664 | `sheet-book` |
| 3,696 | `sheet-appearance` |
| 3,704 | `theme-toggle` |
| 3,711 | `sheet-contact` |
| 3,720 | `contact-form` |
| 3,721 | `contact-title` |
| 3,722 | `contact-message` |
| 3,724 | `contact-hint` |
| 3,725 | `contact-send` |
| 3,734 | `sheet-sources` |
| 3,737 | `sources-back` |
| 3,744 | `asof-text` |
| 3,745 | `sources-groups` |
| 3,752 | `detail-backdrop` |
| 3,754 | `detail-modal-close` |
| 3,755 | `detail-modal-body` |

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

