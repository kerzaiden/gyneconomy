# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,268 lines**, about 1194 KB, roughly **339 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `5b41e5a` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,051 | the whole stylesheet, every token and rule |
| **Markup** | 3,052–3,798 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,799–14,215 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,216–14,268 | </body></html> |

Counts: **253** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,804_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,808 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,809 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,810 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,828 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,832 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,837_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,847 | `wheelMeta` | `var wheelMeta =` |
| 3,858 | `seasonOverride` | `var seasonOverride =` |
| 3,861 | `cycleNowNote` | `var cycleNowNote =` |
| 3,870 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,956 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,001 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,014_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,031 | `LIVE` | `function LIVE(` |
| 4,058 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,066 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,067 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,070_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,101 | `repaintFigureText` | `function repaintFigureText(` |
| 4,114 | `repaintRow` | `function repaintRow(` |
| 4,127 | `repaintTag` | `function repaintTag(` |
| 4,137 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,162 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,170 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,178 | `REPAINT` | `var REPAINT =` |
| 4,195 | `liveAsOf` | `var liveAsOf =` |
| 4,196 | `fmtAsOf` | `function fmtAsOf(` |
| 4,201 | `applyLive` | `function applyLive(` |
| 4,280 | `repaintPolicy` | `function repaintPolicy(` |
| 4,336 | `GYN` | `var GYN =` |
| 4,356 | `refreshLiveData` | `function refreshLiveData(` |
| 4,397 | `fetchSiteData` | `function fetchSiteData(` |
| 4,427 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,441_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,442 | `yieldCurve` | `var yieldCurve =` |
| 4,455 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,479 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,491 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,519_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,524 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,548 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,572 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,596 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,623 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,648_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,657 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,667 | `uninvLagToday` | `var uninvLagToday =` |
| 4,679 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,692 | `gdpPeers` | `var gdpPeers =` |
| 4,733 | `gdpSrc` | `var gdpSrc =` |
| 4,734 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,739 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,752 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,790_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,812 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,822_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,838 | `stressScoreFor` | `function stressScoreFor(` |
| 4,844 | `stressScore` | `var stressScore =` |
| 4,850 | `powerOf` | `var powerOf =` |
| 4,851 | `powerScore` | `var powerScore =` |
| 4,868 | `stressHistory` | `var stressHistory =` |
| 4,879 | `powerMeter` | `var powerMeter =` |
| 4,881 | `stressNoteFull` | `var stressNoteFull =` |
| 4,913 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,915_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,938 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,939 | `deficitHistory` | `var deficitHistory =` |
| 4,942 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,949 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,951 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 4,999 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,000 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,001 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,018_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,031 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,044_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,058 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,061 | `timelineSpan` | `function timelineSpan(` |
| 5,067 | `timelineFor` | `function timelineFor(` |
| 5,080 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,086_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,092 | `windowScale` | `function windowScale(` |
| 5,108 | `windowYears` | `function windowYears(` |
| 5,126 | `refName` | `function refName(` |
| 5,133 | `histReadEnsure` | `function histReadEnsure(` |
| 5,172 | `seatBandReading` | `function seatBandReading(` |
| 5,195 | `histReadFill` | `function histReadFill(` |
| 5,323 | `histAxisEnds` | `function histAxisEnds(` |
| 5,334 | `histLegend` | `function histLegend(` |
| 5,422 | `refitHistory` | `function refitHistory(` |
| 5,434 | `wireHistHover` | `function wireHistHover(` |
| 5,493 | `mWindowFrom` | `function mWindowFrom(` |
| 5,498 | `qWindowFrom` | `function qWindowFrom(` |
| 5,503 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,504 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,506 | `DEF_1983` | `var DEF_1983 =` |
| 5,508 | `defFrom` | `function defFrom(` |
| 5,519 | `deficitChart` | `function deficitChart(` |
| 5,609 | `deficitBlock` | `function deficitBlock(` |
| 5,671 | `buffettHistory` | `var buffettHistory =` |
| 5,701 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,702 | `hyDates` | `var hyDates =` |
| 5,703 | `hyOas` | `var hyOas =` |
| 5,704 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,711 | `hyAt` | `function hyAt(` |
| 5,715 | `hyLabel` | `function hyLabel(` |
| 5,716 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,717 | `hyNum` | `function hyNum(` |
| 5,718 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,728 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,738 | `capeHistory` | `var capeHistory =` |
| 5,740 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,758_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,764 | `sentiment` | `var sentiment =` |
| 5,782 | `valuation` | `var valuation =` |
| 5,819 | `valRow` | `function valRow(` |
| 5,827 | `coincident` | `var coincident =` |
| 5,888 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,906 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,907 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,908 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,910_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,923 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,924 | `m2vHistory` | `var m2vHistory =` |
| 5,944 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,037 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,127 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,128 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,168_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,174 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,175 | `DOTS` | `var DOTS =` |
| 6,177 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,205 | `histHead` | `function histHead(` |
| 6,226 | `headNoteIdx` | `var headNoteIdx =` |
| 6,227 | `headMenuHtml` | `function headMenuHtml(` |
| 6,285 | `headMenuFor` | `var headMenuFor =` |
| 6,287 | `headSubFor` | `var headSubFor =` |
| 6,288 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,333 | `nameWithMark` | `function nameWithMark(` |
| 6,339 | `panelRow` | `function panelRow(` |
| 6,365 | `panelFromMeter` | `function panelFromMeter(` |
| 6,379 | `meterFlagged` | `function meterFlagged(` |
| 6,390 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,418 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,432 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,451 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,470 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,484 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,509 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,540 | `desireBlock` | `function desireBlock(` |
| 6,567 | `volumeBlock` | `function volumeBlock(` |
| 6,592 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,615 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,623_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,636 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,637 | `m2Level` | `var m2Level =` |
| 6,659 | `m2Yoy` | `var m2Yoy =` |
| 6,660 | `M2_NORM` | `var M2_NORM =` |
| 6,665 | `volumeVerdict` | `function volumeVerdict(` |
| 6,702 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,703 | `unempHistory` | `var unempHistory =` |
| 6,709 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,724 | `NROU_NOW` | `var NROU_NOW =` |
| 6,725 | `unempState` | `function unempState(` |
| 6,731 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,795_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,804 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,813_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,826 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,839 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 6,895 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,950 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,951 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,954 | `qAtIndex` | `function qAtIndex(` |
| 6,955 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,963_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,978 | `householdsChart` | `function householdsChart(` |
| 7,046 | `lastChartAvg` | `var lastChartAvg =` |
| 7,047 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,132 | `GDP_NORM` | `var GDP_NORM =` |
| 7,138 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,139 | `gdpNowQ` | `var gdpNowQ =` |
| 7,140 | `gdpMeter` | `var gdpMeter =` |
| 7,143 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,165 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,231 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,295 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,303 | `velocityVerdict` | `function velocityVerdict(` |
| 7,311 | `derivePulseTag` | `function derivePulseTag(` |
| 7,317 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,377_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,386 | `seasonReading` | `var seasonReading =` |
| 7,435 | `frameworkRows` | `var frameworkRows =` |
| 7,445 | `vixRow` | `var vixRow =` |
| 7,453 | `vixWordOf` | `var vixWordOf =` |
| 7,457 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,472_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,476 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,485_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,486 | `calendarTodayY` | `var calendarTodayY =` |
| 7,517 | `vix3mClose` | `var vix3mClose =` |
| 7,518 | `fearCurve` | `function fearCurve(` |
| 7,525 | `curveVerdict` | `function curveVerdict(` |
| 7,532 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,537 | `valuationVerdict` | `function valuationVerdict(` |
| 7,555 | `sparkHtml` | `function sparkHtml(` |
| 7,574 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,580_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,593 | `modeBar` | `function modeBar(` |
| 7,608 | `pickerOpen` | `var pickerOpen =` |
| 7,612 | `cycleByName` | `function cycleByName(` |
| 7,616 | `openCycle` | `function openCycle(` |
| 7,622 | `cycleSlice` | `function cycleSlice(` |
| 7,631 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,639 | `cycleMonths` | `function cycleMonths(` |
| 7,658 | `histControls` | `function histControls(` |
| 7,672 | `cycLabel` | `function cycLabel(` |
| 7,688 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,697 | `cyclePicker` | `function cyclePicker(` |
| 7,716 | `rangeBar` | `function rangeBar(` |
| 7,728 | `trendOf` | `function trendOf(` |
| 7,773 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,783 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,804_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,805 | `yearOf` | `function yearOf(` |
| 7,806 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,807_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,837 | `totalStat` | `function totalStat(` |
| 7,843 | `atQuarter` | `function atQuarter(` |
| 7,844 | `atMonth` | `function atMonth(` |
| 7,845 | `cycleAverages` | `function cycleAverages(` |
| 7,852 | `ordinal` | `function ordinal(` |
| 7,853 | `hiCard` | `function hiCard(` |
| 7,864 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,878_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,885 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,901 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,908 | `moreRow` | `function moreRow(` |
| 7,914 | `powerPageNote` | `var powerPageNote =` |
| 7,915 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,921_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,924 | `xLabelOf` | `function xLabelOf(` |
| 7,944 | `fitGroup` | `function fitGroup(` |
| 7,966 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,025_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,049 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,059 | `vGrid` | `function vGrid(` |
| 8,084 | `COL_FILL` | `var COL_FILL =` |
| 8,117 | `colPath` | `function colPath(` |
| 8,122 | `colWidth` | `function colWidth(` |
| 8,169 | `AXIS` | `var AXIS =` |
| 8,170 | `chartAxes` | `function chartAxes(` |
| 8,230 | `divergeChart` | `function divergeChart(` |
| 8,298 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,327_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,335 | `maxIn` | `function maxIn(` |
| 8,353 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,367 | `PEEK_W` | `var PEEK_W =` |
| 8,370 | `PEEK_H` | `var PEEK_H =` |
| 8,375 | `colPeek` | `function colPeek(` |
| 8,402 | `meterPeek` | `function meterPeek(` |
| 8,419 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,424 | `pressureZone` | `function pressureZone(` |
| 8,439 | `HZN_BACK` | `var HZN_BACK =` |
| 8,440 | `hznLast` | `function hznLast(` |
| 8,441 | `hznBack` | `function hznBack(` |
| 8,442 | `horizonWord` | `function horizonWord(` |
| 8,467 | `HZN_METERS` | `var HZN_METERS =` |
| 8,475 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,516 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,521 | `RISK_RISK` | `var RISK_RISK =` |
| 8,526 | `riskCell` | `function riskCell(` |
| 8,527 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,558 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,583_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,604 | `pulseClipN` | `var pulseClipN =` |
| 8,605 | `beatPath` | `function beatPath(` |
| 8,630 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,644 | `pulsePeek` | `function pulsePeek(` |
| 8,652 | `pulseBlock` | `function pulseBlock(` |
| 8,672 | `CHEV` | `var CHEV =` |
| 8,674 | `peekCard` | `function peekCard(` |
| 8,728 | `dropSvg` | `function dropSvg(` |
| 8,740 | `volumeSvg` | `function volumeSvg(` |
| 8,747 | `gaugeSvg` | `function gaugeSvg(` |
| 8,751 | `diamondSvg` | `function diamondSvg(` |
| 8,765 | `energyFromReserve` | `function energyFromReserve(` |
| 8,777 | `sproutSvg` | `function sproutSvg(` |
| 8,788 | `markSvg` | `function markSvg(` |
| 8,797 | `pressureSvg` | `function pressureSvg(` |
| 8,801 | `hormoneSvg` | `function hormoneSvg(` |
| 8,807 | `flameSvg` | `function flameSvg(` |
| 8,811 | `gearSvg` | `function gearSvg(` |
| 8,823 | `thermoSvg` | `function thermoSvg(` |
| 8,842 | `trendUpSvg` | `function trendUpSvg(` |
| 8,844 | `ecgSvg` | `function ecgSvg(` |
| 8,858 | `circulationSvg` | `function circulationSvg(` |
| 8,859 | `weatherSvg` | `function weatherSvg(` |
| 8,880 | `moodSvg` | `function moodSvg(` |
| 8,904 | `boltSvg` | `function boltSvg(` |
| 8,907 | `houseSvg` | `function houseSvg(` |
| 8,915 | `sunriseSvg` | `function sunriseSvg(` |
| 8,930 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,941 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,958_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,979 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,980 | `dsrHistory` | `var dsrHistory =` |
| 8,981 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,982 | `savHistory` | `var savHistory =` |
| 8,987 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,997 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,998 | `dsrNow` | `var dsrNow =` |
| 8,999 | `savNow` | `var savNow =` |
| 9,000 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,005 | `householdsWord` | `function householdsWord(` |
| 9,012 | `householdsNow` | `var householdsNow =` |
| 9,019 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,020 | `dsrMeter` | `var dsrMeter =` |
| 9,023 | `savMeter` | `var savMeter =` |
| 9,026 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,043 | `savInfoHtml` | `function savInfoHtml(` |
| 9,061 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,070 | `curveNow` | `var curveNow =` |
| 9,071 | `curveTag` | `var curveTag =` |
| 9,072 | `curveSub` | `var curveSub =` |
| 9,076 | `curvePct` | `function curvePct(` |
| 9,077 | `curveNoteFull` | `var curveNoteFull =` |
| 9,092 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,100 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,141 | `marketCycles` | `var marketCycles =` |
| 9,171 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,173_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,194 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,195 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,200_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,221 | `slopeOf` | `function slopeOf(` |
| 9,232 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,238 | `readSeason` | `function readSeason(` |
| 9,263 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,265 | `qLabel` | `function qLabel(` |
| 9,289 | `regimeTrack` | `function regimeTrack(` |
| 9,312 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,314_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,321 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,322 | `seasonTitle` | `function seasonTitle(` |
| 9,323 | `monthLabel` | `function monthLabel(` |
| 9,324 | `cycleModel` | `function cycleModel(` |
| 9,376 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,384 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,391 | `nowModel` | `var nowModel =` |
| 9,392 | `readingNow` | `var readingNow =` |
| 9,393 | `cpiNow` | `var cpiNow =` |
| 9,394 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,395 | `currentSeason` | `var currentSeason =` |
| 9,396 | `seasonWhy` | `var seasonWhy =` |
| 9,413 | `seasonGroup` | `function seasonGroup(` |
| 9,427 | `arcGauge` | `function arcGauge(` |
| 9,469 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,482 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,489 | `tsyView` | `var tsyView =` |
| 9,491 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,493 | `spreadLabel` | `function spreadLabel(` |
| 9,500 | `policyFacts` | `function policyFacts(` |
| 9,512 | `allSources` | `var allSources =` |
| 9,536 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,569_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,572 | `SVG_NS` | `var SVG_NS =` |
| 9,573 | `svgEl` | `function svgEl(` |
| 9,586 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,622_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,623 | `clampPct` | `function clampPct(` |
| 9,630 | `infoIcon` | `function infoIcon(` |
| 9,639 | `detailTexts` | `var detailTexts =` |
| 9,657 | `detailSlots` | `var detailSlots =` |
| 9,658 | `detailSlot` | `function detailSlot(` |
| 9,669 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,673 | `_growthPanel` | `var _growthPanel =` |
| 9,674 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,680 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,691 | `facts` | `function facts(` |
| 9,692 | `factsFrom` | `function factsFrom(` |
| 9,696 | `expandBtn` | `function expandBtn(` |
| 9,702 | `sheetRenderers` | `var sheetRenderers =` |
| 9,719 | `pageMode` | `var pageMode =` |
| 9,726 | `pageCycles` | `var pageCycles =` |
| 9,731 | `pageRange` | `var pageRange =` |
| 9,737 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,771_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,782 | `meterHtml` | `function meterHtml(` |
| 9,810 | `srcHtml` | `function srcHtml(` |
| 9,819 | `TIMING` | `var TIMING =` |
| 9,825 | `timingMark` | `function timingMark(` |
| 9,839 | `timingPill` | `function timingPill(` |
| 9,860 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,868 | `seatPageFoot` | `function seatPageFoot(` |
| 9,891 | `timingMembers` | `var timingMembers =` |
| 9,892 | `registerTiming` | `function registerTiming(` |
| 9,898 | `headHtml` | `function headHtml(` |
| 9,916 | `heldHighlights` | `var heldHighlights =` |
| 9,917 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,975_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,976 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,409_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,410 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,633_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,634 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,666_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,672 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,757_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,758 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,776_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,779 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,802_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,814 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 10,905_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,914 | `lendingWord` | `function lendingWord(` |
| 10,922 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,982_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,983 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,103_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,106 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,228_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,240 | `totalRiseIn` | `function totalRiseIn(` |
| 11,250 | `eraInflation` | `function eraInflation(` |
| 11,261 | `eraGrowth` | `function eraGrowth(` |
| 11,277 | `fmtSigned` | `function fmtSigned(` |
| 11,282 | `regimeArrow` | `function regimeArrow(` |
| 11,288 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,289 | `growthShown` | `function growthShown(` |
| 11,290 | `growthShownCap` | `function growthShownCap(` |
| 11,291 | `regimeState` | `function regimeState(` |
| 11,295 | `phaseClass` | `function phaseClass(` |
| 11,297 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,309 | `cycleViewEl` | `var cycleViewEl =` |
| 11,313 | `tempCard` | `var tempCard =` |
| 11,314 | `placeCharts` | `function placeCharts(` |
| 11,319 | `shownEra` | `var shownEra =` |
| 11,320 | `calendarReset` | `var calendarReset =` |
| 11,321 | `metricPageReset` | `var metricPageReset =` |
| 11,322 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,325 | `topbarBack` | `var topbarBack =` |
| 11,326 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,333_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,334 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,495_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,496 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,514_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,517 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,538_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,544 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,547 | `hubSet` | `function hubSet(` |
| 11,560 | `quarterPopup` | `function quarterPopup(` |
| 11,593 | `hubShowDefault` | `function hubShowDefault(` |
| 11,602 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,608 | `hubShowYear` | `function hubShowYear(` |
| 11,623 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,715_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,718 | `tempState` | `var tempState =` |
| 11,721 | `chartLink` | `var chartLink =` |
| 11,741 | `m2Step` | `function m2Step(` |
| 11,744 | `heatStep` | `function heatStep(` |
| 11,748 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,935_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,938 | `drawGrowth` | `function drawGrowth(` |
| 12,077 | `wireResize` | `function wireResize(` |
| 12,083 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,095_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,096 | `renderCycleView` | `function renderCycleView(` |
| 12,149 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,160 | `PEER_CARET` | `var PEER_CARET =` |
| 12,161 | `peerList` | `function peerList(` |
| 12,162 | `peerChosen` | `function peerChosen(` |
| 12,163 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,167 | `renderPeerPills` | `function renderPeerPills(` |
| 12,217 | `shownEraModel` | `var shownEraModel =` |
| 12,218 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,220_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,222 | `stripGroupName` | `var stripGroupName =` |
| 12,223 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,269 | `marketStripHtml` | `function marketStripHtml(` |
| 12,332 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,333 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,363_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,364 | `renderCycleList` | `function renderCycleList(` |
| 12,454 | `renderSignsList` | `function renderSignsList(` |
| 12,739 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,014_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,015 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,077_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,078 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,111_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,112 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,027–4,030 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,448–8,461 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,272–9,285 | `seasonTrackAll` | The season, computed |
| 9,307–9,311 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,475 |
| `desire-range` | 10,298 |
| `fear-range` | 11,072 |
| `hormones-range` | 10,849 |
| `hzn-range` | 10,402 |
| `hzn-spread` | 10,396 |
| `pressure-range` | 10,949 |
| `pulse-range` | 10,249 |
| `sheet-marker-deficit` | 13,472 |
| `sheet-metric-gdp` | 13,356 |
| `sheet-metric-households` | 13,506 |
| `sheet-metric-power` | 13,435 |
| `sheet-metric-temp` | 13,306 |
| `sheet-metric-valuation` | 13,548 |
| `sheet-sign-activity` | 13,417 |
| `sheet-sign-desire` | 10,299 |
| `sheet-sign-horizon` | 10,403 |
| `sheet-sign-hormones` | 10,852 |
| `sheet-sign-pressure` | 10,950 |
| `sheet-sign-pulse` | 10,248 |
| `sheet-sign-sentiment` | 11,077 |
| `sheet-sign-volume` | 10,272 |
| `volume-range` | 10,273 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,481 |
| `desire-range` | 10,281 |
| `fear-range` | 11,029 |
| `hzn-range` | 10,327 |
| `pulse-range` | 10,226 |
| `sheet-metric-gdp` | 13,357 |
| `sheet-metric-power` | 13,436 |
| `sheet-metric-temp` | 13,307 |
| `sheet-metric-valuation` | 13,549 |
| `volume-range` | 10,253 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,178 |
| `sheet-metric-gdp` | 6,179 |
| `sheet-sign-activity` | 6,186 |
| `sheet-metric-power` | 6,187 |
| `sheet-metric-valuation` | 6,189 |
| `sheet-metric-households` | 6,190 |
| `deficit-range` | 6,191 |
| `volume-range` | 6,192 |
| `pulse-range` | 6,193 |
| `hzn-range` | 6,199 |
| `desire-range` | 6,200 |
| `fear-range` | 6,201 |
| `hormones-range` | 6,202 |
| `pressure-range` | 6,203 |

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

Every `id` in the static DOM (143), which is what the renderers fill:

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
| 3,408 | `horizon-highlights` |
| 3,434 | `subj-value-pressure` |
| 3,435 | `subj-say-pressure` |
| 3,440 | `pressure-history` |
| 3,441 | `pressure-highlights` |
| 3,447 | `subj-ring-sentiment` |
| 3,450 | `subj-value-sentiment` |
| 3,451 | `subj-say-sentiment` |
| 3,452 | `subj-spark-sentiment` |
| 3,466 | `fear-history` |
| 3,467 | `curve-highlights` |
| 3,481 | `signs-list` |
| 3,492 | `calendar-list` |
| 3,497 | `indicators-peek` |
| 3,543 | `cycle-list` |
| 3,549 | `cycle-more` |
| 3,550 | `cycle-more-label` |
| 3,559 | `calendar-cycle` |
| 3,560 | `calendar-cycle-slot` |
| 3,611 | `seasons-kicker` |
| 3,612 | `seasons-rows` |
| 3,616 | `framework-kicker` |
| 3,618 | `framework-rows` |
| 3,625 | `more-menu` |
| 3,628 | `menu-back` |
| 3,642 | `sources-open` |
| 3,650 | `appearance-current` |
| 3,658 | `sheet-howto` |
| 3,702 | `sheet-book` |
| 3,734 | `sheet-appearance` |
| 3,742 | `theme-toggle` |
| 3,749 | `sheet-contact` |
| 3,758 | `contact-form` |
| 3,759 | `contact-title` |
| 3,760 | `contact-message` |
| 3,762 | `contact-hint` |
| 3,763 | `contact-send` |
| 3,772 | `sheet-sources` |
| 3,775 | `sources-back` |
| 3,782 | `asof-text` |
| 3,783 | `sources-groups` |
| 3,790 | `detail-backdrop` |
| 3,792 | `detail-modal-close` |
| 3,793 | `detail-modal-body` |

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

