# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,669 lines**, about 1121 KB, roughly **318 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `af622dd` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,031 | the whole stylesheet, every token and rule |
| **Markup** | 3,032–3,753 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,754–13,616 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,617–13,669 | </body></html> |

Counts: **246** top-level functions, **176** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,759_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,763 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,764 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,765 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,783 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,787 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,792_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,802 | `wheelMeta` | `var wheelMeta =` |
| 3,813 | `seasonOverride` | `var seasonOverride =` |
| 3,816 | `cycleNowNote` | `var cycleNowNote =` |
| 3,825 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,911 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,956 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,969_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,986 | `LIVE` | `function LIVE(` |
| 4,013 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,021 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,022 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,025_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,056 | `repaintFigureText` | `function repaintFigureText(` |
| 4,064 | `repaintTag` | `function repaintTag(` |
| 4,074 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,099 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,107 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,115 | `REPAINT` | `var REPAINT =` |
| 4,132 | `liveAsOf` | `var liveAsOf =` |
| 4,133 | `fmtAsOf` | `function fmtAsOf(` |
| 4,138 | `applyLive` | `function applyLive(` |
| 4,214 | `repaintPolicy` | `function repaintPolicy(` |
| 4,264 | `GYN` | `var GYN =` |
| 4,284 | `refreshLiveData` | `function refreshLiveData(` |
| 4,325 | `fetchSiteData` | `function fetchSiteData(` |
| 4,355 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,369_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,370 | `yieldCurve` | `var yieldCurve =` |
| 4,383 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,407 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,419 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,447_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,452 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,476 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,500 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,524 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,551 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,576_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,585 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,595 | `uninvLagToday` | `var uninvLagToday =` |
| 4,607 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,620 | `gdpPeers` | `var gdpPeers =` |
| 4,661 | `gdpSrc` | `var gdpSrc =` |
| 4,662 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,667 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,680 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,718_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,740 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,750_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,766 | `stressScoreFor` | `function stressScoreFor(` |
| 4,772 | `stressScore` | `var stressScore =` |
| 4,778 | `powerOf` | `var powerOf =` |
| 4,779 | `powerScore` | `var powerScore =` |
| 4,796 | `stressHistory` | `var stressHistory =` |
| 4,807 | `powerMeter` | `var powerMeter =` |
| 4,809 | `stressNoteFull` | `var stressNoteFull =` |
| 4,841 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,843_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,866 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,867 | `deficitHistory` | `var deficitHistory =` |
| 4,870 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,877 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,879 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,922_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,935 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,948_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,962 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,965 | `timelineSpan` | `function timelineSpan(` |
| 4,971 | `timelineFor` | `function timelineFor(` |
| 4,984 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,990_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,996 | `windowScale` | `function windowScale(` |
| 5,012 | `windowYears` | `function windowYears(` |
| 5,030 | `refName` | `function refName(` |
| 5,037 | `histReadEnsure` | `function histReadEnsure(` |
| 5,076 | `seatBandReading` | `function seatBandReading(` |
| 5,099 | `histReadFill` | `function histReadFill(` |
| 5,227 | `histAxisEnds` | `function histAxisEnds(` |
| 5,238 | `histLegend` | `function histLegend(` |
| 5,326 | `refitHistory` | `function refitHistory(` |
| 5,338 | `wireHistHover` | `function wireHistHover(` |
| 5,397 | `mWindowFrom` | `function mWindowFrom(` |
| 5,402 | `qWindowFrom` | `function qWindowFrom(` |
| 5,407 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,408 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,410 | `DEF_1983` | `var DEF_1983 =` |
| 5,412 | `defFrom` | `function defFrom(` |
| 5,423 | `deficitChart` | `function deficitChart(` |
| 5,513 | `deficitBlock` | `function deficitBlock(` |
| 5,575 | `buffettHistory` | `var buffettHistory =` |
| 5,605 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,606 | `hyDates` | `var hyDates =` |
| 5,607 | `hyOas` | `var hyOas =` |
| 5,608 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,615 | `hyAt` | `function hyAt(` |
| 5,619 | `hyLabel` | `function hyLabel(` |
| 5,620 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,621 | `hyNum` | `function hyNum(` |
| 5,622 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,632 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,642 | `capeHistory` | `var capeHistory =` |
| 5,644 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,662_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,668 | `sentiment` | `var sentiment =` |
| 5,686 | `valuation` | `var valuation =` |
| 5,723 | `valRow` | `function valRow(` |
| 5,731 | `coincident` | `var coincident =` |
| 5,792 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,810 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,811 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,812 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,814_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,827 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,828 | `m2vHistory` | `var m2vHistory =` |
| 5,848 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,941 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,031 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,032 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,072_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,078 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,079 | `DOTS` | `var DOTS =` |
| 6,081 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,106 | `histHead` | `function histHead(` |
| 6,127 | `headNoteIdx` | `var headNoteIdx =` |
| 6,128 | `headMenuHtml` | `function headMenuHtml(` |
| 6,148 | `headMenuFor` | `var headMenuFor =` |
| 6,149 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,175 | `nameWithMark` | `function nameWithMark(` |
| 6,181 | `panelRow` | `function panelRow(` |
| 6,207 | `panelFromMeter` | `function panelFromMeter(` |
| 6,221 | `meterFlagged` | `function meterFlagged(` |
| 6,232 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,260 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,274 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,293 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,312 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,326 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,351 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,382 | `desireBlock` | `function desireBlock(` |
| 6,409 | `volumeBlock` | `function volumeBlock(` |
| 6,434 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,457 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,465_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,478 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,479 | `m2Level` | `var m2Level =` |
| 6,501 | `m2Yoy` | `var m2Yoy =` |
| 6,502 | `M2_NORM` | `var M2_NORM =` |
| 6,507 | `volumeVerdict` | `function volumeVerdict(` |
| 6,544 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,545 | `unempHistory` | `var unempHistory =` |
| 6,551 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,566 | `NROU_NOW` | `var NROU_NOW =` |
| 6,567 | `unempState` | `function unempState(` |
| 6,573 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,638 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,639 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,642 | `qAtIndex` | `function qAtIndex(` |
| 6,643 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,651_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,666 | `householdsChart` | `function householdsChart(` |
| 6,734 | `lastChartAvg` | `var lastChartAvg =` |
| 6,735 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,820 | `GDP_NORM` | `var GDP_NORM =` |
| 6,826 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,827 | `gdpNowQ` | `var gdpNowQ =` |
| 6,828 | `gdpMeter` | `var gdpMeter =` |
| 6,831 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,853 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,919 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,983 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,991 | `velocityVerdict` | `function velocityVerdict(` |
| 6,999 | `derivePulseTag` | `function derivePulseTag(` |
| 7,005 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,065_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,074 | `seasonReading` | `var seasonReading =` |
| 7,123 | `frameworkRows` | `var frameworkRows =` |
| 7,133 | `vixRow` | `var vixRow =` |
| 7,141 | `vixWordOf` | `var vixWordOf =` |
| 7,145 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,160_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,164 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,173_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,174 | `calendarTodayY` | `var calendarTodayY =` |
| 7,205 | `vix3mClose` | `var vix3mClose =` |
| 7,206 | `fearCurve` | `function fearCurve(` |
| 7,213 | `curveVerdict` | `function curveVerdict(` |
| 7,220 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,225 | `valuationVerdict` | `function valuationVerdict(` |
| 7,243 | `sparkHtml` | `function sparkHtml(` |
| 7,262 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,268_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,281 | `modeBar` | `function modeBar(` |
| 7,296 | `pickerOpen` | `var pickerOpen =` |
| 7,300 | `cycleByName` | `function cycleByName(` |
| 7,304 | `openCycle` | `function openCycle(` |
| 7,310 | `cycleSlice` | `function cycleSlice(` |
| 7,319 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,327 | `cycleMonths` | `function cycleMonths(` |
| 7,346 | `histControls` | `function histControls(` |
| 7,360 | `cycLabel` | `function cycLabel(` |
| 7,376 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,385 | `cyclePicker` | `function cyclePicker(` |
| 7,409 | `seriesBar` | `function seriesBar(` |
| 7,416 | `rangeBar` | `function rangeBar(` |
| 7,428 | `trendOf` | `function trendOf(` |
| 7,473 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,483 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,504_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,505 | `yearOf` | `function yearOf(` |
| 7,506 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,507_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,537 | `totalStat` | `function totalStat(` |
| 7,543 | `atQuarter` | `function atQuarter(` |
| 7,544 | `atMonth` | `function atMonth(` |
| 7,545 | `cycleAverages` | `function cycleAverages(` |
| 7,552 | `ordinal` | `function ordinal(` |
| 7,553 | `hiCard` | `function hiCard(` |
| 7,564 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,578_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,585 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,601 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,608 | `moreRow` | `function moreRow(` |
| 7,614 | `powerPageNote` | `var powerPageNote =` |
| 7,615 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,621_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,624 | `xLabelOf` | `function xLabelOf(` |
| 7,644 | `fitGroup` | `function fitGroup(` |
| 7,666 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,725_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,749 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,759 | `vGrid` | `function vGrid(` |
| 7,784 | `COL_FILL` | `var COL_FILL =` |
| 7,817 | `colPath` | `function colPath(` |
| 7,822 | `colWidth` | `function colWidth(` |
| 7,869 | `AXIS` | `var AXIS =` |
| 7,870 | `chartAxes` | `function chartAxes(` |
| 7,924 | `divergeChart` | `function divergeChart(` |
| 7,985 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,014_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,022 | `maxIn` | `function maxIn(` |
| 8,040 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,054 | `PEEK_W` | `var PEEK_W =` |
| 8,057 | `PEEK_H` | `var PEEK_H =` |
| 8,062 | `colPeek` | `function colPeek(` |
| 8,089 | `meterPeek` | `function meterPeek(` |
| 8,106 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,111 | `pressureZone` | `function pressureZone(` |
| 8,126 | `HZN_BACK` | `var HZN_BACK =` |
| 8,127 | `hznLast` | `function hznLast(` |
| 8,128 | `hznBack` | `function hznBack(` |
| 8,129 | `horizonWord` | `function horizonWord(` |
| 8,154 | `HZN_METERS` | `var HZN_METERS =` |
| 8,162 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,186 | `_hznPanel` | `var _hznPanel =` |
| 8,187 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,207 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,208 | `levelZone` | `function levelZone(` |
| 8,220 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,225 | `RISK_RISK` | `var RISK_RISK =` |
| 8,230 | `riskCell` | `function riskCell(` |
| 8,231 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,262 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,287_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,306 | `pulseClipN` | `var pulseClipN =` |
| 8,307 | `beatPath` | `function beatPath(` |
| 8,332 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,346 | `pulsePeek` | `function pulsePeek(` |
| 8,354 | `pulseBlock` | `function pulseBlock(` |
| 8,374 | `CHEV` | `var CHEV =` |
| 8,376 | `peekCard` | `function peekCard(` |
| 8,430 | `dropSvg` | `function dropSvg(` |
| 8,438 | `speakerSvg` | `function speakerSvg(` |
| 8,446 | `gaugeSvg` | `function gaugeSvg(` |
| 8,450 | `diamondSvg` | `function diamondSvg(` |
| 8,464 | `energyFromReserve` | `function energyFromReserve(` |
| 8,476 | `sproutSvg` | `function sproutSvg(` |
| 8,487 | `markSvg` | `function markSvg(` |
| 8,491 | `flameSvg` | `function flameSvg(` |
| 8,495 | `gearSvg` | `function gearSvg(` |
| 8,508 | `pulseSvg` | `function pulseSvg(` |
| 8,512 | `thermoSvg` | `function thermoSvg(` |
| 8,531 | `trendUpSvg` | `function trendUpSvg(` |
| 8,533 | `ecgSvg` | `function ecgSvg(` |
| 8,547 | `circulationSvg` | `function circulationSvg(` |
| 8,548 | `weatherSvg` | `function weatherSvg(` |
| 8,569 | `moodSvg` | `function moodSvg(` |
| 8,593 | `boltSvg` | `function boltSvg(` |
| 8,596 | `houseSvg` | `function houseSvg(` |
| 8,604 | `sunriseSvg` | `function sunriseSvg(` |
| 8,614 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,626 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,643_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,664 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,665 | `dsrHistory` | `var dsrHistory =` |
| 8,666 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,667 | `savHistory` | `var savHistory =` |
| 8,672 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,682 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,683 | `dsrNow` | `var dsrNow =` |
| 8,684 | `savNow` | `var savNow =` |
| 8,685 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,690 | `householdsWord` | `function householdsWord(` |
| 8,697 | `householdsNow` | `var householdsNow =` |
| 8,704 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,705 | `dsrMeter` | `var dsrMeter =` |
| 8,708 | `savMeter` | `var savMeter =` |
| 8,711 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,728 | `savInfoHtml` | `function savInfoHtml(` |
| 8,746 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,755 | `curveNow` | `var curveNow =` |
| 8,756 | `curveTag` | `var curveTag =` |
| 8,757 | `curveSub` | `var curveSub =` |
| 8,761 | `curvePct` | `function curvePct(` |
| 8,762 | `curveNoteFull` | `var curveNoteFull =` |
| 8,777 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,785 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,826 | `marketCycles` | `var marketCycles =` |
| 8,856 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,858_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,879 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,880 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,885_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,906 | `slopeOf` | `function slopeOf(` |
| 8,917 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,923 | `readSeason` | `function readSeason(` |
| 8,948 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,950 | `qLabel` | `function qLabel(` |
| 8,974 | `regimeTrack` | `function regimeTrack(` |
| 8,997 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,999_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,006 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,007 | `seasonTitle` | `function seasonTitle(` |
| 9,008 | `monthLabel` | `function monthLabel(` |
| 9,009 | `cycleModel` | `function cycleModel(` |
| 9,061 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,069 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,076 | `nowModel` | `var nowModel =` |
| 9,077 | `readingNow` | `var readingNow =` |
| 9,078 | `cpiNow` | `var cpiNow =` |
| 9,079 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,080 | `currentSeason` | `var currentSeason =` |
| 9,081 | `seasonWhy` | `var seasonWhy =` |
| 9,098 | `seasonGroup` | `function seasonGroup(` |
| 9,112 | `arcGauge` | `function arcGauge(` |
| 9,154 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,167 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,169 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,173 | `policyFacts` | `function policyFacts(` |
| 9,185 | `allSources` | `var allSources =` |
| 9,209 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,242_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,245 | `SVG_NS` | `var SVG_NS =` |
| 9,246 | `svgEl` | `function svgEl(` |
| 9,259 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,295_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,296 | `clampPct` | `function clampPct(` |
| 9,303 | `infoIcon` | `function infoIcon(` |
| 9,312 | `detailTexts` | `var detailTexts =` |
| 9,330 | `detailSlots` | `var detailSlots =` |
| 9,331 | `detailSlot` | `function detailSlot(` |
| 9,342 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,346 | `_growthPanel` | `var _growthPanel =` |
| 9,347 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,353 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,364 | `facts` | `function facts(` |
| 9,365 | `factsFrom` | `function factsFrom(` |
| 9,369 | `expandBtn` | `function expandBtn(` |
| 9,375 | `sheetRenderers` | `var sheetRenderers =` |
| 9,392 | `pageMode` | `var pageMode =` |
| 9,399 | `pageCycles` | `var pageCycles =` |
| 9,404 | `pageRange` | `var pageRange =` |
| 9,410 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,444_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,455 | `meterHtml` | `function meterHtml(` |
| 9,483 | `srcHtml` | `function srcHtml(` |
| 9,492 | `TIMING` | `var TIMING =` |
| 9,498 | `timingMark` | `function timingMark(` |
| 9,512 | `timingPill` | `function timingPill(` |
| 9,533 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,541 | `seatPageFoot` | `function seatPageFoot(` |
| 9,564 | `timingMembers` | `var timingMembers =` |
| 9,565 | `registerTiming` | `function registerTiming(` |
| 9,571 | `headHtml` | `function headHtml(` |
| 9,589 | `heldHighlights` | `var heldHighlights =` |
| 9,590 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,648_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,649 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,022_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,023 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,246_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,247 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,279_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,285 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,369_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,370 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,388_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,391 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,414_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,415 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,481_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,484 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,682_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,694 | `totalRiseIn` | `function totalRiseIn(` |
| 10,704 | `eraInflation` | `function eraInflation(` |
| 10,715 | `eraGrowth` | `function eraGrowth(` |
| 10,731 | `fmtSigned` | `function fmtSigned(` |
| 10,736 | `regimeArrow` | `function regimeArrow(` |
| 10,742 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,743 | `growthShown` | `function growthShown(` |
| 10,744 | `growthShownCap` | `function growthShownCap(` |
| 10,745 | `regimeState` | `function regimeState(` |
| 10,749 | `phaseClass` | `function phaseClass(` |
| 10,751 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,763 | `cycleViewEl` | `var cycleViewEl =` |
| 10,767 | `tempCard` | `var tempCard =` |
| 10,768 | `placeCharts` | `function placeCharts(` |
| 10,773 | `shownEra` | `var shownEra =` |
| 10,774 | `calendarReset` | `var calendarReset =` |
| 10,775 | `metricPageReset` | `var metricPageReset =` |
| 10,776 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,779 | `topbarBack` | `var topbarBack =` |
| 10,780 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,787_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,788 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,949_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,950 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,968_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,971 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,992_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,998 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,001 | `hubSet` | `function hubSet(` |
| 11,014 | `quarterPopup` | `function quarterPopup(` |
| 11,047 | `hubShowDefault` | `function hubShowDefault(` |
| 11,056 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,062 | `hubShowYear` | `function hubShowYear(` |
| 11,077 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,169_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,172 | `tempState` | `var tempState =` |
| 11,175 | `chartLink` | `var chartLink =` |
| 11,195 | `m2Step` | `function m2Step(` |
| 11,198 | `heatStep` | `function heatStep(` |
| 11,202 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,389_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,392 | `drawGrowth` | `function drawGrowth(` |
| 11,531 | `wireResize` | `function wireResize(` |
| 11,537 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,549_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,550 | `renderCycleView` | `function renderCycleView(` |
| 11,603 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,614 | `PEER_CARET` | `var PEER_CARET =` |
| 11,615 | `peerList` | `function peerList(` |
| 11,616 | `peerChosen` | `function peerChosen(` |
| 11,617 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,621 | `renderPeerPills` | `function renderPeerPills(` |
| 11,671 | `shownEraModel` | `var shownEraModel =` |
| 11,672 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,674_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,676 | `stripGroupName` | `var stripGroupName =` |
| 11,677 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,723 | `marketStripHtml` | `function marketStripHtml(` |
| 11,786 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,787 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,817_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,818 | `renderCycleList` | `function renderCycleList(` |
| 11,908 | `renderSignsList` | `function renderSignsList(` |
| 12,170 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,415_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,416 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,478_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,479 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,512_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,513 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,982–3,985 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,135–8,148 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,957–8,970 | `seasonTrackAll` | The season, computed |
| 8,992–8,996 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,880 |
| `desire-range` | 9,968 |
| `hzn-range` | 10,318 |
| `pulse-range` | 9,919 |
| `sheet-marker-deficit` | 12,877 |
| `sheet-metric-gdp` | 12,761 |
| `sheet-metric-households` | 12,911 |
| `sheet-metric-power` | 12,840 |
| `sheet-metric-temp` | 12,711 |
| `sheet-metric-valuation` | 12,953 |
| `sheet-sign-activity` | 12,822 |
| `sheet-sign-desire` | 9,969 |
| `sheet-sign-horizon` | 10,319 |
| `sheet-sign-pulse` | 9,918 |
| `sheet-sign-volume` | 9,942 |
| `sheet-sign-yield` | 9,886 |
| `volume-range` | 9,943 |
| `ylm-range` | 10,014 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,886 |
| `desire-range` | 9,951 |
| `hzn-range` | 10,295 |
| `pulse-range` | 9,896 |
| `sheet-metric-gdp` | 12,762 |
| `sheet-metric-power` | 12,841 |
| `sheet-metric-temp` | 12,712 |
| `sheet-metric-valuation` | 12,954 |
| `volume-range` | 9,923 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,082 |
| `sheet-metric-gdp` | 6,083 |
| `sheet-sign-activity` | 6,084 |
| `sheet-metric-power` | 6,085 |
| `sheet-metric-valuation` | 6,087 |
| `sheet-metric-households` | 6,088 |
| `deficit-range` | 6,089 |
| `volume-range` | 6,090 |
| `pulse-range` | 6,091 |
| `hzn-range` | 6,092 |
| `ylm-range` | 6,103 |
| `desire-range` | 6,104 |

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
| 1,937 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,426 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,474 | hero: yield curve |
| 2,570 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,649 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,748 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,773 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,788 | long cycle (structural layer) |
| 2,829 | indicator grid |
| 2,872 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,889 | info icon + popover (progressive disclosure for longer notes) |
| 2,910 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,005 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (145), which is what the renderers fill:

| Line | id |
|---|---|
| 3,037 | `topbar-back` |
| 3,040 | `topbar-title` |
| 3,041 | `menu-btn` |
| 3,058 | `main` |
| 3,065 | `cycle-view` |
| 3,073 | `cycle-kicker` |
| 3,079 | `cycle-dial` |
| 3,081 | `season-wheel-hub-date` |
| 3,082 | `season-wheel-hub-theme` |
| 3,083 | `season-wheel-hub-detail` |
| 3,091 | `temp-card` |
| 3,093 | `temp-kicker` |
| 3,094 | `temp-sub` |
| 3,097 | `temp-svg` |
| 3,098 | `temp-tooltip` |
| 3,104 | `temp-stats` |
| 3,111 | `growth-card` |
| 3,114 | `growth-kicker` |
| 3,114 | `growth-phase` |
| 3,114 | `growth-sub` |
| 3,114 | `growth-peers` |
| 3,115 | `growth-svg` |
| 3,115 | `growth-tooltip` |
| 3,120 | `growth-stats` |
| 3,129 | `today-analysis` |
| 3,133 | `peek-row` |
| 3,137 | `sheet-metric-temp` |
| 3,138 | `temp-timing` |
| 3,139 | `temp-chart` |
| 3,141 | `temp-rangebar` |
| 3,143 | `temp-head` |
| 3,144 | `slot-temp` |
| 3,145 | `temp-history` |
| 3,146 | `temp-hist-tooltip` |
| 3,149 | `temp-trend` |
| 3,153 | `temp-highlights` |
| 3,156 | `sheet-metric-gdp` |
| 3,157 | `gdp-timing` |
| 3,158 | `gdp-chart` |
| 3,159 | `gdp-rangebar` |
| 3,161 | `gdp-head` |
| 3,162 | `slot-growth` |
| 3,163 | `gdp-history` |
| 3,164 | `gdp-hist-tooltip` |
| 3,165 | `gdp-yoy` |
| 3,175 | `gdp-trend` |
| 3,177 | `gdp-panel` |
| 3,182 | `subj-ring-gdp` |
| 3,184 | `subj-label-gdp` |
| 3,185 | `subj-value-gdp` |
| 3,186 | `subj-say-gdp` |
| 3,187 | `subj-spark-gdp` |
| 3,192 | `subj-ctx-gdp` |
| 3,195 | `gdp-highlights` |
| 3,203 | `sheet-metric-power` |
| 3,204 | `power-timing` |
| 3,205 | `power-head` |
| 3,206 | `power-chart` |
| 3,210 | `subj-ring-resilience` |
| 3,213 | `subj-value-resilience` |
| 3,214 | `subj-say-resilience` |
| 3,219 | `subj-ctx-resilience` |
| 3,223 | `longcycle-title` |
| 3,225 | `longcycle-tag` |
| 3,239 | `power-highlights` |
| 3,246 | `sheet-marker-deficit` |
| 3,252 | `sheet-metric-households` |
| 3,253 | `households-timing` |
| 3,254 | `households-chart` |
| 3,255 | `households-highlights` |
| 3,259 | `sheet-metric-valuation` |
| 3,260 | `valuation-timing` |
| 3,261 | `valuation-head` |
| 3,262 | `valuation-chart` |
| 3,266 | `subj-ring-valuation` |
| 3,269 | `subj-value-valuation` |
| 3,270 | `subj-say-valuation` |
| 3,275 | `subj-ctx-valuation` |
| 3,279 | `valuation-title` |
| 3,281 | `valuation-tag` |
| 3,288 | `valuation-highlights` |
| 3,294 | `subj-ring-yield` |
| 3,297 | `subj-value-yield` |
| 3,298 | `subj-say-yield` |
| 3,299 | `subj-spark-yield` |
| 3,330 | `ylm-series` |
| 3,335 | `ylm-head` |
| 3,336 | `ylm-shell` |
| 3,337 | `ylm-svg` |
| 3,338 | `ylm-tooltip` |
| 3,341 | `ylm-trend` |
| 3,344 | `pressure-insights` |
| 3,345 | `pressure-highlights` |
| 3,371 | `subj-value-horizon` |
| 3,372 | `subj-say-horizon` |
| 3,373 | `subj-spark-horizon` |
| 3,383 | `hzn-timeline` |
| 3,385 | `hzn-head` |
| 3,386 | `spread-history-shell` |
| 3,387 | `spread-history-svg` |
| 3,388 | `spread-history-tooltip` |
| 3,391 | `hzn-trend` |
| 3,393 | `hzn-panel` |
| 3,395 | `horizon-insights` |
| 3,396 | `horizon-highlights` |
| 3,403 | `subj-ring-sentiment` |
| 3,406 | `subj-value-sentiment` |
| 3,407 | `subj-say-sentiment` |
| 3,408 | `subj-spark-sentiment` |
| 3,420 | `curve-gauge` |
| 3,421 | `curve-vix` |
| 3,422 | `curve-highlights` |
| 3,436 | `signs-list` |
| 3,447 | `calendar-list` |
| 3,452 | `indicators-peek` |
| 3,498 | `cycle-list` |
| 3,504 | `cycle-more` |
| 3,505 | `cycle-more-label` |
| 3,514 | `calendar-cycle` |
| 3,515 | `calendar-cycle-slot` |
| 3,566 | `seasons-kicker` |
| 3,567 | `seasons-rows` |
| 3,571 | `framework-kicker` |
| 3,573 | `framework-rows` |
| 3,580 | `more-menu` |
| 3,583 | `menu-back` |
| 3,597 | `sources-open` |
| 3,605 | `appearance-current` |
| 3,613 | `sheet-howto` |
| 3,657 | `sheet-book` |
| 3,689 | `sheet-appearance` |
| 3,697 | `theme-toggle` |
| 3,704 | `sheet-contact` |
| 3,713 | `contact-form` |
| 3,714 | `contact-title` |
| 3,715 | `contact-message` |
| 3,717 | `contact-hint` |
| 3,718 | `contact-send` |
| 3,727 | `sheet-sources` |
| 3,730 | `sources-back` |
| 3,737 | `asof-text` |
| 3,738 | `sources-groups` |
| 3,745 | `detail-backdrop` |
| 3,747 | `detail-modal-close` |
| 3,748 | `detail-modal-body` |

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

