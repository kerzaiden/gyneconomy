# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,799 lines**, about 1153 KB, roughly **328 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `87cbac6` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,026 | the whole stylesheet, every token and rule |
| **Markup** | 3,027–3,750 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,751–13,746 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,747–13,799 | </body></html> |

Counts: **244** top-level functions, **178** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,756_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,760 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,761 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,762 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,780 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,784 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,789_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,799 | `wheelMeta` | `var wheelMeta =` |
| 3,810 | `seasonOverride` | `var seasonOverride =` |
| 3,813 | `cycleNowNote` | `var cycleNowNote =` |
| 3,822 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,908 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,953 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,966_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,983 | `LIVE` | `function LIVE(` |
| 4,010 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,018 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,019 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,022_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,053 | `repaintFigureText` | `function repaintFigureText(` |
| 4,061 | `repaintTag` | `function repaintTag(` |
| 4,071 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,096 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,104 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,112 | `REPAINT` | `var REPAINT =` |
| 4,129 | `liveAsOf` | `var liveAsOf =` |
| 4,130 | `fmtAsOf` | `function fmtAsOf(` |
| 4,135 | `applyLive` | `function applyLive(` |
| 4,211 | `repaintPolicy` | `function repaintPolicy(` |
| 4,261 | `GYN` | `var GYN =` |
| 4,281 | `refreshLiveData` | `function refreshLiveData(` |
| 4,322 | `fetchSiteData` | `function fetchSiteData(` |
| 4,352 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,366_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,367 | `yieldCurve` | `var yieldCurve =` |
| 4,380 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,404 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,416 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,444_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,449 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,473 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,497 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,521 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,548 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,573_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,582 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,592 | `uninvLagToday` | `var uninvLagToday =` |
| 4,604 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,617 | `gdpPeers` | `var gdpPeers =` |
| 4,658 | `gdpSrc` | `var gdpSrc =` |
| 4,659 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,664 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,677 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,715_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,737 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,747_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,763 | `stressScoreFor` | `function stressScoreFor(` |
| 4,769 | `stressScore` | `var stressScore =` |
| 4,775 | `powerOf` | `var powerOf =` |
| 4,776 | `powerScore` | `var powerScore =` |
| 4,793 | `stressHistory` | `var stressHistory =` |
| 4,804 | `powerMeter` | `var powerMeter =` |
| 4,806 | `stressNoteFull` | `var stressNoteFull =` |
| 4,838 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,840_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,863 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,864 | `deficitHistory` | `var deficitHistory =` |
| 4,867 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,874 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,876 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 4,919 | `fedFundsHistory` | `var fedFundsHistory =` |
| 4,920 | `fearCurveHistory` | `var fearCurveHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,937_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,950 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,963_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,977 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,980 | `timelineSpan` | `function timelineSpan(` |
| 4,986 | `timelineFor` | `function timelineFor(` |
| 4,999 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,005_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,011 | `windowScale` | `function windowScale(` |
| 5,027 | `windowYears` | `function windowYears(` |
| 5,045 | `refName` | `function refName(` |
| 5,052 | `histReadEnsure` | `function histReadEnsure(` |
| 5,091 | `seatBandReading` | `function seatBandReading(` |
| 5,114 | `histReadFill` | `function histReadFill(` |
| 5,242 | `histAxisEnds` | `function histAxisEnds(` |
| 5,253 | `histLegend` | `function histLegend(` |
| 5,341 | `refitHistory` | `function refitHistory(` |
| 5,353 | `wireHistHover` | `function wireHistHover(` |
| 5,412 | `mWindowFrom` | `function mWindowFrom(` |
| 5,417 | `qWindowFrom` | `function qWindowFrom(` |
| 5,422 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,423 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,425 | `DEF_1983` | `var DEF_1983 =` |
| 5,427 | `defFrom` | `function defFrom(` |
| 5,438 | `deficitChart` | `function deficitChart(` |
| 5,528 | `deficitBlock` | `function deficitBlock(` |
| 5,590 | `buffettHistory` | `var buffettHistory =` |
| 5,620 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,621 | `hyDates` | `var hyDates =` |
| 5,622 | `hyOas` | `var hyOas =` |
| 5,623 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,630 | `hyAt` | `function hyAt(` |
| 5,634 | `hyLabel` | `function hyLabel(` |
| 5,635 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,636 | `hyNum` | `function hyNum(` |
| 5,637 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,647 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,657 | `capeHistory` | `var capeHistory =` |
| 5,659 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,677_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,683 | `sentiment` | `var sentiment =` |
| 5,701 | `valuation` | `var valuation =` |
| 5,738 | `valRow` | `function valRow(` |
| 5,746 | `coincident` | `var coincident =` |
| 5,807 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,825 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,826 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,827 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,829_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,842 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,843 | `m2vHistory` | `var m2vHistory =` |
| 5,863 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,956 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,046 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,047 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,087_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,093 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,094 | `DOTS` | `var DOTS =` |
| 6,096 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,132 | `histHead` | `function histHead(` |
| 6,153 | `headNoteIdx` | `var headNoteIdx =` |
| 6,154 | `headMenuHtml` | `function headMenuHtml(` |
| 6,174 | `headMenuFor` | `var headMenuFor =` |
| 6,175 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,204 | `nameWithMark` | `function nameWithMark(` |
| 6,210 | `panelRow` | `function panelRow(` |
| 6,236 | `panelFromMeter` | `function panelFromMeter(` |
| 6,250 | `meterFlagged` | `function meterFlagged(` |
| 6,261 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,289 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,303 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,322 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,341 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,355 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,380 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,411 | `desireBlock` | `function desireBlock(` |
| 6,438 | `volumeBlock` | `function volumeBlock(` |
| 6,463 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,486 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,494_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,507 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,508 | `m2Level` | `var m2Level =` |
| 6,530 | `m2Yoy` | `var m2Yoy =` |
| 6,531 | `M2_NORM` | `var M2_NORM =` |
| 6,536 | `volumeVerdict` | `function volumeVerdict(` |
| 6,573 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,574 | `unempHistory` | `var unempHistory =` |
| 6,580 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,595 | `NROU_NOW` | `var NROU_NOW =` |
| 6,596 | `unempState` | `function unempState(` |
| 6,602 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,667 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,668 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,671 | `qAtIndex` | `function qAtIndex(` |
| 6,672 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,680_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,695 | `householdsChart` | `function householdsChart(` |
| 6,763 | `lastChartAvg` | `var lastChartAvg =` |
| 6,764 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,849 | `GDP_NORM` | `var GDP_NORM =` |
| 6,855 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,856 | `gdpNowQ` | `var gdpNowQ =` |
| 6,857 | `gdpMeter` | `var gdpMeter =` |
| 6,860 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,882 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,948 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,012 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,020 | `velocityVerdict` | `function velocityVerdict(` |
| 7,028 | `derivePulseTag` | `function derivePulseTag(` |
| 7,034 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,094_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,103 | `seasonReading` | `var seasonReading =` |
| 7,152 | `frameworkRows` | `var frameworkRows =` |
| 7,162 | `vixRow` | `var vixRow =` |
| 7,170 | `vixWordOf` | `var vixWordOf =` |
| 7,174 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,189_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,193 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,202_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,203 | `calendarTodayY` | `var calendarTodayY =` |
| 7,234 | `vix3mClose` | `var vix3mClose =` |
| 7,235 | `fearCurve` | `function fearCurve(` |
| 7,242 | `curveVerdict` | `function curveVerdict(` |
| 7,249 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,254 | `valuationVerdict` | `function valuationVerdict(` |
| 7,272 | `sparkHtml` | `function sparkHtml(` |
| 7,291 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,297_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,310 | `modeBar` | `function modeBar(` |
| 7,325 | `pickerOpen` | `var pickerOpen =` |
| 7,329 | `cycleByName` | `function cycleByName(` |
| 7,333 | `openCycle` | `function openCycle(` |
| 7,339 | `cycleSlice` | `function cycleSlice(` |
| 7,348 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,356 | `cycleMonths` | `function cycleMonths(` |
| 7,375 | `histControls` | `function histControls(` |
| 7,389 | `cycLabel` | `function cycLabel(` |
| 7,405 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,414 | `cyclePicker` | `function cyclePicker(` |
| 7,433 | `rangeBar` | `function rangeBar(` |
| 7,445 | `trendOf` | `function trendOf(` |
| 7,490 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,500 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,521_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,522 | `yearOf` | `function yearOf(` |
| 7,523 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,524_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,554 | `totalStat` | `function totalStat(` |
| 7,560 | `atQuarter` | `function atQuarter(` |
| 7,561 | `atMonth` | `function atMonth(` |
| 7,562 | `cycleAverages` | `function cycleAverages(` |
| 7,569 | `ordinal` | `function ordinal(` |
| 7,570 | `hiCard` | `function hiCard(` |
| 7,581 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,595_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,602 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,618 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,625 | `moreRow` | `function moreRow(` |
| 7,631 | `powerPageNote` | `var powerPageNote =` |
| 7,632 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,638_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,641 | `xLabelOf` | `function xLabelOf(` |
| 7,661 | `fitGroup` | `function fitGroup(` |
| 7,683 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,742_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,766 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,776 | `vGrid` | `function vGrid(` |
| 7,801 | `COL_FILL` | `var COL_FILL =` |
| 7,834 | `colPath` | `function colPath(` |
| 7,839 | `colWidth` | `function colWidth(` |
| 7,886 | `AXIS` | `var AXIS =` |
| 7,887 | `chartAxes` | `function chartAxes(` |
| 7,947 | `divergeChart` | `function divergeChart(` |
| 8,015 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,044_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,052 | `maxIn` | `function maxIn(` |
| 8,070 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,084 | `PEEK_W` | `var PEEK_W =` |
| 8,087 | `PEEK_H` | `var PEEK_H =` |
| 8,092 | `colPeek` | `function colPeek(` |
| 8,119 | `meterPeek` | `function meterPeek(` |
| 8,136 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,141 | `pressureZone` | `function pressureZone(` |
| 8,156 | `HZN_BACK` | `var HZN_BACK =` |
| 8,157 | `hznLast` | `function hznLast(` |
| 8,158 | `hznBack` | `function hznBack(` |
| 8,159 | `horizonWord` | `function horizonWord(` |
| 8,184 | `HZN_METERS` | `var HZN_METERS =` |
| 8,192 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,216 | `_hznPanel` | `var _hznPanel =` |
| 8,217 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,237 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,238 | `levelZone` | `function levelZone(` |
| 8,250 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,255 | `RISK_RISK` | `var RISK_RISK =` |
| 8,260 | `riskCell` | `function riskCell(` |
| 8,261 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,292 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,317_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,338 | `pulseClipN` | `var pulseClipN =` |
| 8,339 | `beatPath` | `function beatPath(` |
| 8,364 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,378 | `pulsePeek` | `function pulsePeek(` |
| 8,386 | `pulseBlock` | `function pulseBlock(` |
| 8,406 | `CHEV` | `var CHEV =` |
| 8,408 | `peekCard` | `function peekCard(` |
| 8,462 | `dropSvg` | `function dropSvg(` |
| 8,474 | `volumeSvg` | `function volumeSvg(` |
| 8,481 | `gaugeSvg` | `function gaugeSvg(` |
| 8,485 | `diamondSvg` | `function diamondSvg(` |
| 8,499 | `energyFromReserve` | `function energyFromReserve(` |
| 8,511 | `sproutSvg` | `function sproutSvg(` |
| 8,522 | `markSvg` | `function markSvg(` |
| 8,526 | `flameSvg` | `function flameSvg(` |
| 8,530 | `gearSvg` | `function gearSvg(` |
| 8,542 | `thermoSvg` | `function thermoSvg(` |
| 8,561 | `trendUpSvg` | `function trendUpSvg(` |
| 8,563 | `ecgSvg` | `function ecgSvg(` |
| 8,577 | `circulationSvg` | `function circulationSvg(` |
| 8,578 | `weatherSvg` | `function weatherSvg(` |
| 8,599 | `moodSvg` | `function moodSvg(` |
| 8,623 | `boltSvg` | `function boltSvg(` |
| 8,626 | `houseSvg` | `function houseSvg(` |
| 8,634 | `sunriseSvg` | `function sunriseSvg(` |
| 8,644 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,656 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,673_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,694 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,695 | `dsrHistory` | `var dsrHistory =` |
| 8,696 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,697 | `savHistory` | `var savHistory =` |
| 8,702 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,712 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,713 | `dsrNow` | `var dsrNow =` |
| 8,714 | `savNow` | `var savNow =` |
| 8,715 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,720 | `householdsWord` | `function householdsWord(` |
| 8,727 | `householdsNow` | `var householdsNow =` |
| 8,734 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,735 | `dsrMeter` | `var dsrMeter =` |
| 8,738 | `savMeter` | `var savMeter =` |
| 8,741 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,758 | `savInfoHtml` | `function savInfoHtml(` |
| 8,776 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,785 | `curveNow` | `var curveNow =` |
| 8,786 | `curveTag` | `var curveTag =` |
| 8,787 | `curveSub` | `var curveSub =` |
| 8,791 | `curvePct` | `function curvePct(` |
| 8,792 | `curveNoteFull` | `var curveNoteFull =` |
| 8,807 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,815 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,856 | `marketCycles` | `var marketCycles =` |
| 8,886 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,888_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,909 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,910 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,915_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,936 | `slopeOf` | `function slopeOf(` |
| 8,947 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,953 | `readSeason` | `function readSeason(` |
| 8,978 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,980 | `qLabel` | `function qLabel(` |
| 9,004 | `regimeTrack` | `function regimeTrack(` |
| 9,027 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,029_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,036 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,037 | `seasonTitle` | `function seasonTitle(` |
| 9,038 | `monthLabel` | `function monthLabel(` |
| 9,039 | `cycleModel` | `function cycleModel(` |
| 9,091 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,099 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,106 | `nowModel` | `var nowModel =` |
| 9,107 | `readingNow` | `var readingNow =` |
| 9,108 | `cpiNow` | `var cpiNow =` |
| 9,109 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,110 | `currentSeason` | `var currentSeason =` |
| 9,111 | `seasonWhy` | `var seasonWhy =` |
| 9,128 | `seasonGroup` | `function seasonGroup(` |
| 9,142 | `arcGauge` | `function arcGauge(` |
| 9,184 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,197 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,199 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,203 | `policyFacts` | `function policyFacts(` |
| 9,215 | `allSources` | `var allSources =` |
| 9,239 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,272_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,275 | `SVG_NS` | `var SVG_NS =` |
| 9,276 | `svgEl` | `function svgEl(` |
| 9,289 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,325_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,326 | `clampPct` | `function clampPct(` |
| 9,333 | `infoIcon` | `function infoIcon(` |
| 9,342 | `detailTexts` | `var detailTexts =` |
| 9,360 | `detailSlots` | `var detailSlots =` |
| 9,361 | `detailSlot` | `function detailSlot(` |
| 9,372 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,376 | `_growthPanel` | `var _growthPanel =` |
| 9,377 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,383 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,394 | `facts` | `function facts(` |
| 9,395 | `factsFrom` | `function factsFrom(` |
| 9,399 | `expandBtn` | `function expandBtn(` |
| 9,405 | `sheetRenderers` | `var sheetRenderers =` |
| 9,422 | `pageMode` | `var pageMode =` |
| 9,429 | `pageCycles` | `var pageCycles =` |
| 9,434 | `pageRange` | `var pageRange =` |
| 9,440 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,474_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,485 | `meterHtml` | `function meterHtml(` |
| 9,513 | `srcHtml` | `function srcHtml(` |
| 9,522 | `TIMING` | `var TIMING =` |
| 9,528 | `timingMark` | `function timingMark(` |
| 9,542 | `timingPill` | `function timingPill(` |
| 9,563 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,571 | `seatPageFoot` | `function seatPageFoot(` |
| 9,594 | `timingMembers` | `var timingMembers =` |
| 9,595 | `registerTiming` | `function registerTiming(` |
| 9,601 | `headHtml` | `function headHtml(` |
| 9,619 | `heldHighlights` | `var heldHighlights =` |
| 9,620 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,678_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,679 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,078_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,079 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,302_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,303 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,335_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,341 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,425_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,426 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,444_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,447 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,470_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,471 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,593_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,596 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,794_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,806 | `totalRiseIn` | `function totalRiseIn(` |
| 10,816 | `eraInflation` | `function eraInflation(` |
| 10,827 | `eraGrowth` | `function eraGrowth(` |
| 10,843 | `fmtSigned` | `function fmtSigned(` |
| 10,848 | `regimeArrow` | `function regimeArrow(` |
| 10,854 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,855 | `growthShown` | `function growthShown(` |
| 10,856 | `growthShownCap` | `function growthShownCap(` |
| 10,857 | `regimeState` | `function regimeState(` |
| 10,861 | `phaseClass` | `function phaseClass(` |
| 10,863 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,875 | `cycleViewEl` | `var cycleViewEl =` |
| 10,879 | `tempCard` | `var tempCard =` |
| 10,880 | `placeCharts` | `function placeCharts(` |
| 10,885 | `shownEra` | `var shownEra =` |
| 10,886 | `calendarReset` | `var calendarReset =` |
| 10,887 | `metricPageReset` | `var metricPageReset =` |
| 10,888 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,891 | `topbarBack` | `var topbarBack =` |
| 10,892 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,899_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,900 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,061_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,062 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,080_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,083 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,104_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,110 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,113 | `hubSet` | `function hubSet(` |
| 11,126 | `quarterPopup` | `function quarterPopup(` |
| 11,159 | `hubShowDefault` | `function hubShowDefault(` |
| 11,168 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,174 | `hubShowYear` | `function hubShowYear(` |
| 11,189 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,281_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,284 | `tempState` | `var tempState =` |
| 11,287 | `chartLink` | `var chartLink =` |
| 11,307 | `m2Step` | `function m2Step(` |
| 11,310 | `heatStep` | `function heatStep(` |
| 11,314 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,501_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,504 | `drawGrowth` | `function drawGrowth(` |
| 11,643 | `wireResize` | `function wireResize(` |
| 11,649 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,661_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,662 | `renderCycleView` | `function renderCycleView(` |
| 11,715 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,726 | `PEER_CARET` | `var PEER_CARET =` |
| 11,727 | `peerList` | `function peerList(` |
| 11,728 | `peerChosen` | `function peerChosen(` |
| 11,729 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,733 | `renderPeerPills` | `function renderPeerPills(` |
| 11,783 | `shownEraModel` | `var shownEraModel =` |
| 11,784 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,786_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,788 | `stripGroupName` | `var stripGroupName =` |
| 11,789 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,835 | `marketStripHtml` | `function marketStripHtml(` |
| 11,898 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,899 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,929_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,930 | `renderCycleList` | `function renderCycleList(` |
| 12,020 | `renderSignsList` | `function renderSignsList(` |
| 12,296 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,545_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,546 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,608_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,609 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,642_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,643 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,979–3,982 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,165–8,178 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,987–9,000 | `seasonTrackAll` | The season, computed |
| 9,022–9,026 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,006 |
| `desire-range` | 10,003 |
| `fear-range` | 10,567 |
| `hzn-range` | 10,374 |
| `pulse-range` | 9,954 |
| `sheet-marker-deficit` | 13,003 |
| `sheet-metric-gdp` | 12,887 |
| `sheet-metric-households` | 13,037 |
| `sheet-metric-power` | 12,966 |
| `sheet-metric-temp` | 12,837 |
| `sheet-metric-valuation` | 13,079 |
| `sheet-sign-activity` | 12,948 |
| `sheet-sign-desire` | 10,004 |
| `sheet-sign-horizon` | 10,375 |
| `sheet-sign-pulse` | 9,953 |
| `sheet-sign-volume` | 9,977 |
| `sheet-sign-yield` | 9,919 |
| `volume-range` | 9,978 |
| `ylm-range` | 9,921 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,012 |
| `desire-range` | 9,986 |
| `fear-range` | 10,524 |
| `hzn-range` | 10,351 |
| `pulse-range` | 9,931 |
| `sheet-metric-gdp` | 12,888 |
| `sheet-metric-power` | 12,967 |
| `sheet-metric-temp` | 12,838 |
| `sheet-metric-valuation` | 13,080 |
| `volume-range` | 9,958 |
| `ylm-range` | 10,032 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,097 |
| `sheet-metric-gdp` | 6,098 |
| `sheet-sign-activity` | 6,105 |
| `sheet-metric-power` | 6,106 |
| `sheet-metric-valuation` | 6,108 |
| `sheet-metric-households` | 6,109 |
| `deficit-range` | 6,110 |
| `volume-range` | 6,111 |
| `pulse-range` | 6,112 |
| `hzn-range` | 6,113 |
| `ylm-range` | 6,128 |
| `desire-range` | 6,129 |
| `fear-range` | 6,130 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 189 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 322 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 420 | yearly calendar — one card per year, grouped into five eras |
| 427 | season strip |
| 480 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels \u2026 so if one day |
| 639 | tab bar (app-style segmented navigation) |
| 693 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 732 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 955 | journal (editorial content tab) |
| 961 | content tab: reading companion |
| 1,019 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,491 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,525 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,535 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,546 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,579 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,755 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,932 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,421 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,469 | hero: yield curve |
| 2,565 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,644 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,743 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,768 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,783 | long cycle (structural layer) |
| 2,824 | indicator grid |
| 2,867 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,884 | info icon + popover (progressive disclosure for longer notes) |
| 2,905 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,000 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (145), which is what the renderers fill:

| Line | id |
|---|---|
| 3,032 | `topbar-back` |
| 3,035 | `topbar-title` |
| 3,036 | `menu-btn` |
| 3,053 | `main` |
| 3,060 | `cycle-view` |
| 3,068 | `cycle-kicker` |
| 3,074 | `cycle-dial` |
| 3,076 | `season-wheel-hub-date` |
| 3,077 | `season-wheel-hub-theme` |
| 3,078 | `season-wheel-hub-detail` |
| 3,086 | `temp-card` |
| 3,088 | `temp-kicker` |
| 3,089 | `temp-sub` |
| 3,092 | `temp-svg` |
| 3,093 | `temp-tooltip` |
| 3,099 | `temp-stats` |
| 3,106 | `growth-card` |
| 3,109 | `growth-kicker` |
| 3,109 | `growth-phase` |
| 3,109 | `growth-sub` |
| 3,109 | `growth-peers` |
| 3,110 | `growth-svg` |
| 3,110 | `growth-tooltip` |
| 3,115 | `growth-stats` |
| 3,124 | `today-analysis` |
| 3,128 | `peek-row` |
| 3,132 | `sheet-metric-temp` |
| 3,133 | `temp-timing` |
| 3,134 | `temp-chart` |
| 3,136 | `temp-rangebar` |
| 3,138 | `temp-head` |
| 3,139 | `slot-temp` |
| 3,140 | `temp-history` |
| 3,141 | `temp-hist-tooltip` |
| 3,144 | `temp-trend` |
| 3,148 | `temp-highlights` |
| 3,151 | `sheet-metric-gdp` |
| 3,152 | `gdp-timing` |
| 3,153 | `gdp-chart` |
| 3,154 | `gdp-rangebar` |
| 3,156 | `gdp-head` |
| 3,157 | `slot-growth` |
| 3,158 | `gdp-history` |
| 3,159 | `gdp-hist-tooltip` |
| 3,160 | `gdp-yoy` |
| 3,170 | `gdp-trend` |
| 3,172 | `gdp-panel` |
| 3,177 | `subj-ring-gdp` |
| 3,179 | `subj-label-gdp` |
| 3,180 | `subj-value-gdp` |
| 3,181 | `subj-say-gdp` |
| 3,182 | `subj-spark-gdp` |
| 3,187 | `subj-ctx-gdp` |
| 3,190 | `gdp-highlights` |
| 3,198 | `sheet-metric-power` |
| 3,199 | `power-timing` |
| 3,200 | `power-head` |
| 3,201 | `power-chart` |
| 3,205 | `subj-ring-resilience` |
| 3,208 | `subj-value-resilience` |
| 3,209 | `subj-say-resilience` |
| 3,214 | `subj-ctx-resilience` |
| 3,218 | `longcycle-title` |
| 3,220 | `longcycle-tag` |
| 3,234 | `power-highlights` |
| 3,241 | `sheet-marker-deficit` |
| 3,247 | `sheet-metric-households` |
| 3,248 | `households-timing` |
| 3,249 | `households-chart` |
| 3,250 | `households-highlights` |
| 3,254 | `sheet-metric-valuation` |
| 3,255 | `valuation-timing` |
| 3,256 | `valuation-head` |
| 3,257 | `valuation-chart` |
| 3,261 | `subj-ring-valuation` |
| 3,264 | `subj-value-valuation` |
| 3,265 | `subj-say-valuation` |
| 3,270 | `subj-ctx-valuation` |
| 3,274 | `valuation-title` |
| 3,276 | `valuation-tag` |
| 3,283 | `valuation-highlights` |
| 3,289 | `subj-ring-yield` |
| 3,292 | `subj-value-yield` |
| 3,293 | `subj-say-yield` |
| 3,294 | `subj-spark-yield` |
| 3,325 | `ylm-series` |
| 3,330 | `ylm-head` |
| 3,331 | `ylm-shell` |
| 3,332 | `ylm-svg` |
| 3,333 | `ylm-tooltip` |
| 3,336 | `ylm-trend` |
| 3,339 | `pressure-insights` |
| 3,340 | `pressure-highlights` |
| 3,366 | `subj-value-horizon` |
| 3,367 | `subj-say-horizon` |
| 3,368 | `subj-spark-horizon` |
| 3,378 | `hzn-timeline` |
| 3,380 | `hzn-head` |
| 3,381 | `spread-history-shell` |
| 3,382 | `spread-history-svg` |
| 3,383 | `spread-history-tooltip` |
| 3,386 | `hzn-trend` |
| 3,388 | `hzn-panel` |
| 3,390 | `horizon-insights` |
| 3,391 | `horizon-highlights` |
| 3,398 | `subj-ring-sentiment` |
| 3,401 | `subj-value-sentiment` |
| 3,402 | `subj-say-sentiment` |
| 3,403 | `subj-spark-sentiment` |
| 3,415 | `curve-gauge` |
| 3,418 | `fear-history` |
| 3,419 | `curve-highlights` |
| 3,433 | `signs-list` |
| 3,444 | `calendar-list` |
| 3,449 | `indicators-peek` |
| 3,495 | `cycle-list` |
| 3,501 | `cycle-more` |
| 3,502 | `cycle-more-label` |
| 3,511 | `calendar-cycle` |
| 3,512 | `calendar-cycle-slot` |
| 3,563 | `seasons-kicker` |
| 3,564 | `seasons-rows` |
| 3,568 | `framework-kicker` |
| 3,570 | `framework-rows` |
| 3,577 | `more-menu` |
| 3,580 | `menu-back` |
| 3,594 | `sources-open` |
| 3,602 | `appearance-current` |
| 3,610 | `sheet-howto` |
| 3,654 | `sheet-book` |
| 3,686 | `sheet-appearance` |
| 3,694 | `theme-toggle` |
| 3,701 | `sheet-contact` |
| 3,710 | `contact-form` |
| 3,711 | `contact-title` |
| 3,712 | `contact-message` |
| 3,714 | `contact-hint` |
| 3,715 | `contact-send` |
| 3,724 | `sheet-sources` |
| 3,727 | `sources-back` |
| 3,734 | `asof-text` |
| 3,735 | `sources-groups` |
| 3,742 | `detail-backdrop` |
| 3,744 | `detail-modal-close` |
| 3,745 | `detail-modal-body` |

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

