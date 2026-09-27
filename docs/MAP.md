# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,652 lines**, about 1118 KB, roughly **318 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `402e457` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,030 | the whole stylesheet, every token and rule |
| **Markup** | 3,031–3,753 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,754–13,599 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,600–13,652 | </body></html> |

Counts: **248** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

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

_line 8,014_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,022 | `maxIn` | `function maxIn(` |
| 8,035 | `reserveGauge` | `function reserveGauge(` |
| 8,056 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,070 | `PEEK_W` | `var PEEK_W =` |
| 8,073 | `PEEK_H` | `var PEEK_H =` |
| 8,074 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 8,079 | `colPeek` | `function colPeek(` |
| 8,106 | `meterPeek` | `function meterPeek(` |
| 8,123 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,128 | `pressureZone` | `function pressureZone(` |
| 8,143 | `HZN_BACK` | `var HZN_BACK =` |
| 8,144 | `hznLast` | `function hznLast(` |
| 8,145 | `hznBack` | `function hznBack(` |
| 8,146 | `horizonWord` | `function horizonWord(` |
| 8,171 | `HZN_METERS` | `var HZN_METERS =` |
| 8,179 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,203 | `_hznPanel` | `var _hznPanel =` |
| 8,204 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,224 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,225 | `levelZone` | `function levelZone(` |
| 8,237 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,242 | `RISK_RISK` | `var RISK_RISK =` |
| 8,247 | `riskCell` | `function riskCell(` |
| 8,248 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,279 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,304_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,323 | `pulseClipN` | `var pulseClipN =` |
| 8,324 | `beatPath` | `function beatPath(` |
| 8,349 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,363 | `pulsePeek` | `function pulsePeek(` |
| 8,371 | `pulseBlock` | `function pulseBlock(` |
| 8,391 | `CHEV` | `var CHEV =` |
| 8,393 | `peekCard` | `function peekCard(` |
| 8,444 | `dropSvg` | `function dropSvg(` |
| 8,452 | `speakerSvg` | `function speakerSvg(` |
| 8,460 | `gaugeSvg` | `function gaugeSvg(` |
| 8,464 | `diamondSvg` | `function diamondSvg(` |
| 8,476 | `energyFromReserve` | `function energyFromReserve(` |
| 8,488 | `sproutSvg` | `function sproutSvg(` |
| 8,499 | `markSvg` | `function markSvg(` |
| 8,503 | `flameSvg` | `function flameSvg(` |
| 8,507 | `gearSvg` | `function gearSvg(` |
| 8,520 | `pulseSvg` | `function pulseSvg(` |
| 8,524 | `thermoSvg` | `function thermoSvg(` |
| 8,543 | `trendUpSvg` | `function trendUpSvg(` |
| 8,545 | `ecgSvg` | `function ecgSvg(` |
| 8,559 | `circulationSvg` | `function circulationSvg(` |
| 8,560 | `weatherSvg` | `function weatherSvg(` |
| 8,581 | `moodSvg` | `function moodSvg(` |
| 8,598 | `boltSvg` | `function boltSvg(` |
| 8,601 | `houseSvg` | `function houseSvg(` |
| 8,609 | `sunriseSvg` | `function sunriseSvg(` |
| 8,619 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,631 | `signMarks` | `var signMarks =` |
| 8,638 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,655_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,676 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,677 | `dsrHistory` | `var dsrHistory =` |
| 8,678 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,679 | `savHistory` | `var savHistory =` |
| 8,684 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,694 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,695 | `dsrNow` | `var dsrNow =` |
| 8,696 | `savNow` | `var savNow =` |
| 8,697 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,702 | `householdsWord` | `function householdsWord(` |
| 8,709 | `householdsNow` | `var householdsNow =` |
| 8,716 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,717 | `dsrMeter` | `var dsrMeter =` |
| 8,720 | `savMeter` | `var savMeter =` |
| 8,723 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,740 | `savInfoHtml` | `function savInfoHtml(` |
| 8,758 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,767 | `curveNow` | `var curveNow =` |
| 8,768 | `curveTag` | `var curveTag =` |
| 8,769 | `curveSub` | `var curveSub =` |
| 8,773 | `curvePct` | `function curvePct(` |
| 8,774 | `curveNoteFull` | `var curveNoteFull =` |
| 8,789 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,797 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,838 | `marketCycles` | `var marketCycles =` |
| 8,868 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,870_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,891 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,892 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,897_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,918 | `slopeOf` | `function slopeOf(` |
| 8,929 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,935 | `readSeason` | `function readSeason(` |
| 8,960 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,962 | `qLabel` | `function qLabel(` |
| 8,986 | `regimeTrack` | `function regimeTrack(` |
| 9,009 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,011_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,018 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,019 | `seasonTitle` | `function seasonTitle(` |
| 9,020 | `monthLabel` | `function monthLabel(` |
| 9,021 | `cycleModel` | `function cycleModel(` |
| 9,073 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,081 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,088 | `nowModel` | `var nowModel =` |
| 9,089 | `readingNow` | `var readingNow =` |
| 9,090 | `cpiNow` | `var cpiNow =` |
| 9,091 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,092 | `currentSeason` | `var currentSeason =` |
| 9,093 | `seasonWhy` | `var seasonWhy =` |
| 9,110 | `seasonGroup` | `function seasonGroup(` |
| 9,124 | `arcGauge` | `function arcGauge(` |
| 9,163 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,176 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,178 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,182 | `policyFacts` | `function policyFacts(` |
| 9,194 | `allSources` | `var allSources =` |
| 9,218 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,251_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,254 | `SVG_NS` | `var SVG_NS =` |
| 9,255 | `svgEl` | `function svgEl(` |
| 9,268 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,304_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,305 | `clampPct` | `function clampPct(` |
| 9,312 | `infoIcon` | `function infoIcon(` |
| 9,321 | `detailTexts` | `var detailTexts =` |
| 9,339 | `detailSlots` | `var detailSlots =` |
| 9,340 | `detailSlot` | `function detailSlot(` |
| 9,351 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,355 | `_growthPanel` | `var _growthPanel =` |
| 9,356 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,362 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,373 | `facts` | `function facts(` |
| 9,374 | `factsFrom` | `function factsFrom(` |
| 9,378 | `expandBtn` | `function expandBtn(` |
| 9,384 | `sheetRenderers` | `var sheetRenderers =` |
| 9,401 | `pageMode` | `var pageMode =` |
| 9,408 | `pageCycles` | `var pageCycles =` |
| 9,413 | `pageRange` | `var pageRange =` |
| 9,419 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,453_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,464 | `meterHtml` | `function meterHtml(` |
| 9,492 | `srcHtml` | `function srcHtml(` |
| 9,501 | `TIMING` | `var TIMING =` |
| 9,507 | `timingMark` | `function timingMark(` |
| 9,521 | `timingPill` | `function timingPill(` |
| 9,542 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,550 | `seatPageFoot` | `function seatPageFoot(` |
| 9,573 | `timingMembers` | `var timingMembers =` |
| 9,574 | `registerTiming` | `function registerTiming(` |
| 9,580 | `headHtml` | `function headHtml(` |
| 9,598 | `heldHighlights` | `var heldHighlights =` |
| 9,599 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,657_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,658 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,031_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,032 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,255_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,256 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,288_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,294 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,378_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,379 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,397_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,400 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,423_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,424 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,475_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,478 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,671_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,683 | `totalRiseIn` | `function totalRiseIn(` |
| 10,693 | `eraInflation` | `function eraInflation(` |
| 10,704 | `eraGrowth` | `function eraGrowth(` |
| 10,720 | `fmtSigned` | `function fmtSigned(` |
| 10,725 | `regimeArrow` | `function regimeArrow(` |
| 10,731 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,732 | `growthShown` | `function growthShown(` |
| 10,733 | `growthShownCap` | `function growthShownCap(` |
| 10,734 | `regimeState` | `function regimeState(` |
| 10,738 | `phaseClass` | `function phaseClass(` |
| 10,740 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,752 | `cycleViewEl` | `var cycleViewEl =` |
| 10,756 | `tempCard` | `var tempCard =` |
| 10,757 | `placeCharts` | `function placeCharts(` |
| 10,762 | `shownEra` | `var shownEra =` |
| 10,763 | `calendarReset` | `var calendarReset =` |
| 10,764 | `metricPageReset` | `var metricPageReset =` |
| 10,765 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,768 | `topbarBack` | `var topbarBack =` |
| 10,769 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,776_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,777 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,938_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,939 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,957_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,960 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,981_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,987 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,990 | `hubSet` | `function hubSet(` |
| 11,003 | `quarterPopup` | `function quarterPopup(` |
| 11,036 | `hubShowDefault` | `function hubShowDefault(` |
| 11,045 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,051 | `hubShowYear` | `function hubShowYear(` |
| 11,066 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,158_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,161 | `tempState` | `var tempState =` |
| 11,164 | `chartLink` | `var chartLink =` |
| 11,184 | `m2Step` | `function m2Step(` |
| 11,187 | `heatStep` | `function heatStep(` |
| 11,191 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,378_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,381 | `drawGrowth` | `function drawGrowth(` |
| 11,520 | `wireResize` | `function wireResize(` |
| 11,526 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,538_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,539 | `renderCycleView` | `function renderCycleView(` |
| 11,592 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,603 | `PEER_CARET` | `var PEER_CARET =` |
| 11,604 | `peerList` | `function peerList(` |
| 11,605 | `peerChosen` | `function peerChosen(` |
| 11,606 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,610 | `renderPeerPills` | `function renderPeerPills(` |
| 11,660 | `shownEraModel` | `var shownEraModel =` |
| 11,661 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,663_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,665 | `stripGroupName` | `var stripGroupName =` |
| 11,666 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,712 | `marketStripHtml` | `function marketStripHtml(` |
| 11,775 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,776 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,806_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,807 | `renderCycleList` | `function renderCycleList(` |
| 11,897 | `renderSignsList` | `function renderSignsList(` |
| 12,153 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,398_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,399 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,461_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,462 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,495_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,496 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,982–3,985 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,152–8,165 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,969–8,982 | `seasonTrackAll` | The season, computed |
| 9,004–9,008 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,863 |
| `desire-range` | 9,977 |
| `hzn-range` | 10,327 |
| `pulse-range` | 9,928 |
| `sheet-marker-deficit` | 12,860 |
| `sheet-metric-gdp` | 12,744 |
| `sheet-metric-households` | 12,894 |
| `sheet-metric-power` | 12,823 |
| `sheet-metric-temp` | 12,694 |
| `sheet-metric-valuation` | 12,936 |
| `sheet-sign-activity` | 12,805 |
| `sheet-sign-desire` | 9,978 |
| `sheet-sign-horizon` | 10,328 |
| `sheet-sign-pulse` | 9,927 |
| `sheet-sign-volume` | 9,951 |
| `sheet-sign-yield` | 9,895 |
| `volume-range` | 9,952 |
| `ylm-range` | 10,023 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,869 |
| `desire-range` | 9,960 |
| `hzn-range` | 10,304 |
| `pulse-range` | 9,905 |
| `sheet-metric-gdp` | 12,745 |
| `sheet-metric-power` | 12,824 |
| `sheet-metric-temp` | 12,695 |
| `sheet-metric-valuation` | 12,937 |
| `volume-range` | 9,932 |

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
| 721 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 944 | journal (editorial content tab) |
| 950 | content tab: reading companion |
| 1,008 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,500 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,534 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,544 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,555 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,588 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,764 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,946 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,425 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,473 | hero: yield curve |
| 2,569 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,648 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,747 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,772 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,787 | long cycle (structural layer) |
| 2,828 | indicator grid |
| 2,871 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,888 | info icon + popover (progressive disclosure for longer notes) |
| 2,909 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,004 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (146), which is what the renderers fill:

| Line | id |
|---|---|
| 3,036 | `topbar-back` |
| 3,039 | `topbar-title` |
| 3,040 | `menu-btn` |
| 3,057 | `main` |
| 3,064 | `cycle-view` |
| 3,072 | `cycle-kicker` |
| 3,078 | `cycle-dial` |
| 3,080 | `season-wheel-hub-date` |
| 3,081 | `season-wheel-hub-theme` |
| 3,082 | `season-wheel-hub-detail` |
| 3,090 | `temp-card` |
| 3,092 | `temp-kicker` |
| 3,093 | `temp-sub` |
| 3,096 | `temp-svg` |
| 3,097 | `temp-tooltip` |
| 3,103 | `temp-stats` |
| 3,110 | `growth-card` |
| 3,113 | `growth-kicker` |
| 3,113 | `growth-phase` |
| 3,113 | `growth-sub` |
| 3,113 | `growth-peers` |
| 3,114 | `growth-svg` |
| 3,114 | `growth-tooltip` |
| 3,119 | `growth-stats` |
| 3,128 | `today-analysis` |
| 3,132 | `peek-row` |
| 3,136 | `sheet-metric-temp` |
| 3,137 | `temp-timing` |
| 3,138 | `temp-chart` |
| 3,140 | `temp-rangebar` |
| 3,142 | `temp-head` |
| 3,143 | `slot-temp` |
| 3,144 | `temp-history` |
| 3,145 | `temp-hist-tooltip` |
| 3,148 | `temp-trend` |
| 3,151 | `temp-panel` |
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

