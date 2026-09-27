# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,512 lines**, about 1105 KB, roughly **314 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `dc7ab59` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,988 | the whole stylesheet, every token and rule |
| **Markup** | 2,989–3,711 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,712–13,459 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,460–13,512 | </body></html> |

Counts: **245** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,717_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,721 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,722 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,723 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,741 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,745 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,750_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,760 | `wheelMeta` | `var wheelMeta =` |
| 3,771 | `seasonOverride` | `var seasonOverride =` |
| 3,774 | `cycleNowNote` | `var cycleNowNote =` |
| 3,783 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,869 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,914 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,927_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,944 | `LIVE` | `function LIVE(` |
| 3,971 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,979 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,980 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,983_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,014 | `repaintFigureText` | `function repaintFigureText(` |
| 4,022 | `repaintTag` | `function repaintTag(` |
| 4,032 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,057 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,065 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,073 | `REPAINT` | `var REPAINT =` |
| 4,090 | `liveAsOf` | `var liveAsOf =` |
| 4,091 | `fmtAsOf` | `function fmtAsOf(` |
| 4,096 | `applyLive` | `function applyLive(` |
| 4,172 | `repaintPolicy` | `function repaintPolicy(` |
| 4,222 | `GYN` | `var GYN =` |
| 4,242 | `refreshLiveData` | `function refreshLiveData(` |
| 4,283 | `fetchSiteData` | `function fetchSiteData(` |
| 4,313 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,327_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,328 | `yieldCurve` | `var yieldCurve =` |
| 4,341 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,365 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,377 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,405_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,410 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,434 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,458 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,482 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,509 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,534_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,543 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,553 | `uninvLagToday` | `var uninvLagToday =` |
| 4,565 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,578 | `gdpPeers` | `var gdpPeers =` |
| 4,619 | `gdpSrc` | `var gdpSrc =` |
| 4,620 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,625 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,638 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,676_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,698 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,708_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,724 | `stressScoreFor` | `function stressScoreFor(` |
| 4,730 | `stressScore` | `var stressScore =` |
| 4,736 | `powerOf` | `var powerOf =` |
| 4,737 | `powerScore` | `var powerScore =` |
| 4,754 | `stressHistory` | `var stressHistory =` |
| 4,765 | `powerMeter` | `var powerMeter =` |
| 4,767 | `stressNoteFull` | `var stressNoteFull =` |
| 4,799 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,801_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,824 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,825 | `deficitHistory` | `var deficitHistory =` |
| 4,828 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,835 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,837 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,880_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,893 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,906_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,920 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,923 | `timelineSpan` | `function timelineSpan(` |
| 4,929 | `timelineFor` | `function timelineFor(` |
| 4,942 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,948_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,954 | `windowScale` | `function windowScale(` |
| 4,970 | `windowYears` | `function windowYears(` |
| 4,988 | `refName` | `function refName(` |
| 4,995 | `histReadEnsure` | `function histReadEnsure(` |
| 5,034 | `seatBandReading` | `function seatBandReading(` |
| 5,057 | `histReadFill` | `function histReadFill(` |
| 5,180 | `histAxisEnds` | `function histAxisEnds(` |
| 5,191 | `histLegend` | `function histLegend(` |
| 5,270 | `wireHistHover` | `function wireHistHover(` |
| 5,325 | `mWindowFrom` | `function mWindowFrom(` |
| 5,330 | `qWindowFrom` | `function qWindowFrom(` |
| 5,335 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,336 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,338 | `DEF_1983` | `var DEF_1983 =` |
| 5,340 | `defFrom` | `function defFrom(` |
| 5,351 | `deficitChart` | `function deficitChart(` |
| 5,441 | `deficitBlock` | `function deficitBlock(` |
| 5,503 | `buffettHistory` | `var buffettHistory =` |
| 5,533 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,534 | `hyDates` | `var hyDates =` |
| 5,535 | `hyOas` | `var hyOas =` |
| 5,536 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,543 | `hyAt` | `function hyAt(` |
| 5,547 | `hyLabel` | `function hyLabel(` |
| 5,548 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,549 | `hyNum` | `function hyNum(` |
| 5,550 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,560 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,570 | `capeHistory` | `var capeHistory =` |
| 5,572 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,590_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,596 | `sentiment` | `var sentiment =` |
| 5,614 | `valuation` | `var valuation =` |
| 5,651 | `valRow` | `function valRow(` |
| 5,659 | `coincident` | `var coincident =` |
| 5,720 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,738 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,739 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,740 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,742_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,755 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,756 | `m2vHistory` | `var m2vHistory =` |
| 5,776 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,869 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,959 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,960 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,000_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,006 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,007 | `DOTS` | `var DOTS =` |
| 6,009 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,034 | `histHead` | `function histHead(` |
| 6,055 | `headNoteIdx` | `var headNoteIdx =` |
| 6,056 | `headMenuHtml` | `function headMenuHtml(` |
| 6,076 | `headMenuFor` | `var headMenuFor =` |
| 6,077 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,103 | `nameWithMark` | `function nameWithMark(` |
| 6,109 | `panelRow` | `function panelRow(` |
| 6,135 | `panelFromMeter` | `function panelFromMeter(` |
| 6,149 | `meterFlagged` | `function meterFlagged(` |
| 6,160 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,188 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,202 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,221 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,240 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,254 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,279 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,310 | `desireBlock` | `function desireBlock(` |
| 6,337 | `volumeBlock` | `function volumeBlock(` |
| 6,362 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,385 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,393_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,406 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,407 | `m2Level` | `var m2Level =` |
| 6,429 | `m2Yoy` | `var m2Yoy =` |
| 6,430 | `M2_NORM` | `var M2_NORM =` |
| 6,435 | `volumeVerdict` | `function volumeVerdict(` |
| 6,472 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,473 | `unempHistory` | `var unempHistory =` |
| 6,479 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,494 | `NROU_NOW` | `var NROU_NOW =` |
| 6,495 | `unempState` | `function unempState(` |
| 6,501 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,566 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,567 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,570 | `qAtIndex` | `function qAtIndex(` |
| 6,571 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,579_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,594 | `householdsChart` | `function householdsChart(` |
| 6,667 | `lastChartAvg` | `var lastChartAvg =` |
| 6,668 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,753 | `GDP_NORM` | `var GDP_NORM =` |
| 6,759 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,760 | `gdpNowQ` | `var gdpNowQ =` |
| 6,761 | `gdpMeter` | `var gdpMeter =` |
| 6,764 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,786 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,852 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,916 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,924 | `velocityVerdict` | `function velocityVerdict(` |
| 6,932 | `derivePulseTag` | `function derivePulseTag(` |
| 6,938 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,998_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,007 | `seasonReading` | `var seasonReading =` |
| 7,056 | `frameworkRows` | `var frameworkRows =` |
| 7,066 | `vixRow` | `var vixRow =` |
| 7,074 | `vixWordOf` | `var vixWordOf =` |
| 7,078 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,093_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,097 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,106_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,107 | `calendarTodayY` | `var calendarTodayY =` |
| 7,138 | `vix3mClose` | `var vix3mClose =` |
| 7,139 | `fearCurve` | `function fearCurve(` |
| 7,146 | `curveVerdict` | `function curveVerdict(` |
| 7,153 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,158 | `valuationVerdict` | `function valuationVerdict(` |
| 7,176 | `sparkHtml` | `function sparkHtml(` |
| 7,195 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,201_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,214 | `modeBar` | `function modeBar(` |
| 7,229 | `pickerOpen` | `var pickerOpen =` |
| 7,233 | `cycleByName` | `function cycleByName(` |
| 7,237 | `openCycle` | `function openCycle(` |
| 7,243 | `cycleSlice` | `function cycleSlice(` |
| 7,252 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,260 | `cycleMonths` | `function cycleMonths(` |
| 7,279 | `histControls` | `function histControls(` |
| 7,293 | `cycLabel` | `function cycLabel(` |
| 7,309 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,318 | `cyclePicker` | `function cyclePicker(` |
| 7,342 | `seriesBar` | `function seriesBar(` |
| 7,349 | `rangeBar` | `function rangeBar(` |
| 7,361 | `trendOf` | `function trendOf(` |
| 7,406 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,416 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,431_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,432 | `yearOf` | `function yearOf(` |
| 7,433 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,434_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,464 | `totalStat` | `function totalStat(` |
| 7,470 | `atQuarter` | `function atQuarter(` |
| 7,471 | `atMonth` | `function atMonth(` |
| 7,472 | `cycleAverages` | `function cycleAverages(` |
| 7,479 | `ordinal` | `function ordinal(` |
| 7,480 | `hiCard` | `function hiCard(` |
| 7,491 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,505_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,512 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,528 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,535 | `moreRow` | `function moreRow(` |
| 7,541 | `powerPageNote` | `var powerPageNote =` |
| 7,542 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,548_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,551 | `xLabelOf` | `function xLabelOf(` |
| 7,571 | `fitGroup` | `function fitGroup(` |
| 7,593 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,652_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,676 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,686 | `vGrid` | `function vGrid(` |
| 7,711 | `COL_FILL` | `var COL_FILL =` |
| 7,743 | `AXIS` | `var AXIS =` |
| 7,744 | `chartAxes` | `function chartAxes(` |
| 7,794 | `divergeChart` | `function divergeChart(` |
| 7,855 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,884_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,892 | `maxIn` | `function maxIn(` |
| 7,905 | `reserveGauge` | `function reserveGauge(` |
| 7,926 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,940 | `PEEK_W` | `var PEEK_W =` |
| 7,943 | `PEEK_H` | `var PEEK_H =` |
| 7,944 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,949 | `colPeek` | `function colPeek(` |
| 7,976 | `meterPeek` | `function meterPeek(` |
| 7,993 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,998 | `pressureZone` | `function pressureZone(` |
| 8,013 | `HZN_BACK` | `var HZN_BACK =` |
| 8,014 | `hznLast` | `function hznLast(` |
| 8,015 | `hznBack` | `function hznBack(` |
| 8,016 | `horizonWord` | `function horizonWord(` |
| 8,041 | `HZN_METERS` | `var HZN_METERS =` |
| 8,049 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,073 | `_hznPanel` | `var _hznPanel =` |
| 8,074 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,094 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,095 | `levelZone` | `function levelZone(` |
| 8,107 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,112 | `RISK_RISK` | `var RISK_RISK =` |
| 8,117 | `riskCell` | `function riskCell(` |
| 8,118 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,149 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,174_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,193 | `pulseClipN` | `var pulseClipN =` |
| 8,194 | `beatPath` | `function beatPath(` |
| 8,219 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,233 | `pulsePeek` | `function pulsePeek(` |
| 8,241 | `pulseBlock` | `function pulseBlock(` |
| 8,261 | `CHEV` | `var CHEV =` |
| 8,263 | `peekCard` | `function peekCard(` |
| 8,314 | `dropSvg` | `function dropSvg(` |
| 8,322 | `speakerSvg` | `function speakerSvg(` |
| 8,330 | `gaugeSvg` | `function gaugeSvg(` |
| 8,334 | `diamondSvg` | `function diamondSvg(` |
| 8,346 | `energyFromReserve` | `function energyFromReserve(` |
| 8,358 | `sproutSvg` | `function sproutSvg(` |
| 8,369 | `markSvg` | `function markSvg(` |
| 8,373 | `flameSvg` | `function flameSvg(` |
| 8,377 | `gearSvg` | `function gearSvg(` |
| 8,390 | `pulseSvg` | `function pulseSvg(` |
| 8,394 | `thermoSvg` | `function thermoSvg(` |
| 8,413 | `trendUpSvg` | `function trendUpSvg(` |
| 8,415 | `ecgSvg` | `function ecgSvg(` |
| 8,429 | `circulationSvg` | `function circulationSvg(` |
| 8,430 | `weatherSvg` | `function weatherSvg(` |
| 8,451 | `moodSvg` | `function moodSvg(` |
| 8,468 | `boltSvg` | `function boltSvg(` |
| 8,471 | `houseSvg` | `function houseSvg(` |
| 8,479 | `sunriseSvg` | `function sunriseSvg(` |
| 8,489 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,501 | `signMarks` | `var signMarks =` |
| 8,508 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,525_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,546 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,547 | `dsrHistory` | `var dsrHistory =` |
| 8,548 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,549 | `savHistory` | `var savHistory =` |
| 8,554 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,564 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,565 | `dsrNow` | `var dsrNow =` |
| 8,566 | `savNow` | `var savNow =` |
| 8,567 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,572 | `householdsWord` | `function householdsWord(` |
| 8,579 | `householdsNow` | `var householdsNow =` |
| 8,586 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,587 | `dsrMeter` | `var dsrMeter =` |
| 8,590 | `savMeter` | `var savMeter =` |
| 8,593 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,610 | `savInfoHtml` | `function savInfoHtml(` |
| 8,628 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,637 | `curveNow` | `var curveNow =` |
| 8,638 | `curveTag` | `var curveTag =` |
| 8,639 | `curveSub` | `var curveSub =` |
| 8,643 | `curvePct` | `function curvePct(` |
| 8,644 | `curveNoteFull` | `var curveNoteFull =` |
| 8,659 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,667 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,708 | `marketCycles` | `var marketCycles =` |
| 8,738 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,740_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,761 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,762 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,767_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,788 | `slopeOf` | `function slopeOf(` |
| 8,799 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,805 | `readSeason` | `function readSeason(` |
| 8,830 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,832 | `qLabel` | `function qLabel(` |
| 8,856 | `regimeTrack` | `function regimeTrack(` |
| 8,879 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,881_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,888 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,889 | `seasonTitle` | `function seasonTitle(` |
| 8,890 | `monthLabel` | `function monthLabel(` |
| 8,891 | `cycleModel` | `function cycleModel(` |
| 8,943 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,951 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,958 | `nowModel` | `var nowModel =` |
| 8,959 | `readingNow` | `var readingNow =` |
| 8,960 | `cpiNow` | `var cpiNow =` |
| 8,961 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,962 | `currentSeason` | `var currentSeason =` |
| 8,963 | `seasonWhy` | `var seasonWhy =` |
| 8,980 | `seasonGroup` | `function seasonGroup(` |
| 8,994 | `arcGauge` | `function arcGauge(` |
| 9,033 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,046 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,048 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,052 | `policyFacts` | `function policyFacts(` |
| 9,064 | `allSources` | `var allSources =` |
| 9,088 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,121_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,124 | `SVG_NS` | `var SVG_NS =` |
| 9,125 | `svgEl` | `function svgEl(` |
| 9,138 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,174_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,175 | `clampPct` | `function clampPct(` |
| 9,182 | `infoIcon` | `function infoIcon(` |
| 9,191 | `detailTexts` | `var detailTexts =` |
| 9,209 | `detailSlots` | `var detailSlots =` |
| 9,210 | `detailSlot` | `function detailSlot(` |
| 9,221 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,225 | `_growthPanel` | `var _growthPanel =` |
| 9,226 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,232 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,243 | `facts` | `function facts(` |
| 9,244 | `factsFrom` | `function factsFrom(` |
| 9,248 | `expandBtn` | `function expandBtn(` |
| 9,254 | `sheetRenderers` | `var sheetRenderers =` |
| 9,271 | `pageMode` | `var pageMode =` |
| 9,278 | `pageCycles` | `var pageCycles =` |
| 9,283 | `pageRange` | `var pageRange =` |
| 9,289 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,323_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,334 | `meterHtml` | `function meterHtml(` |
| 9,362 | `srcHtml` | `function srcHtml(` |
| 9,371 | `TIMING` | `var TIMING =` |
| 9,377 | `timingMark` | `function timingMark(` |
| 9,391 | `timingPill` | `function timingPill(` |
| 9,412 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,420 | `seatPageFoot` | `function seatPageFoot(` |
| 9,443 | `timingMembers` | `var timingMembers =` |
| 9,444 | `registerTiming` | `function registerTiming(` |
| 9,450 | `headHtml` | `function headHtml(` |
| 9,468 | `heldHighlights` | `var heldHighlights =` |
| 9,469 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,527_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,528 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,901_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,902 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,125_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,126 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,158_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,164 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,248_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,249 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,267_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,270 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,293_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,294 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,345_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,348 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,541_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,553 | `totalRiseIn` | `function totalRiseIn(` |
| 10,563 | `eraInflation` | `function eraInflation(` |
| 10,574 | `eraGrowth` | `function eraGrowth(` |
| 10,590 | `fmtSigned` | `function fmtSigned(` |
| 10,595 | `regimeArrow` | `function regimeArrow(` |
| 10,601 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,602 | `growthShown` | `function growthShown(` |
| 10,603 | `growthShownCap` | `function growthShownCap(` |
| 10,604 | `regimeState` | `function regimeState(` |
| 10,608 | `phaseClass` | `function phaseClass(` |
| 10,610 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,622 | `cycleViewEl` | `var cycleViewEl =` |
| 10,626 | `tempCard` | `var tempCard =` |
| 10,627 | `placeCharts` | `function placeCharts(` |
| 10,632 | `shownEra` | `var shownEra =` |
| 10,633 | `calendarReset` | `var calendarReset =` |
| 10,634 | `metricPageReset` | `var metricPageReset =` |
| 10,635 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,638 | `topbarBack` | `var topbarBack =` |
| 10,639 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,646_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,647 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,808_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,809 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,827_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,830 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,851_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,857 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,860 | `hubSet` | `function hubSet(` |
| 10,873 | `quarterPopup` | `function quarterPopup(` |
| 10,906 | `hubShowDefault` | `function hubShowDefault(` |
| 10,915 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,921 | `hubShowYear` | `function hubShowYear(` |
| 10,936 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,028_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,031 | `tempState` | `var tempState =` |
| 11,034 | `chartLink` | `var chartLink =` |
| 11,054 | `m2Step` | `function m2Step(` |
| 11,057 | `heatStep` | `function heatStep(` |
| 11,061 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,248_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,251 | `drawGrowth` | `function drawGrowth(` |
| 11,390 | `wireResize` | `function wireResize(` |
| 11,396 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,408_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,409 | `renderCycleView` | `function renderCycleView(` |
| 11,462 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,473 | `PEER_CARET` | `var PEER_CARET =` |
| 11,474 | `peerList` | `function peerList(` |
| 11,475 | `peerChosen` | `function peerChosen(` |
| 11,476 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,480 | `renderPeerPills` | `function renderPeerPills(` |
| 11,530 | `shownEraModel` | `var shownEraModel =` |
| 11,531 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,533_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,535 | `stripGroupName` | `var stripGroupName =` |
| 11,536 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,582 | `marketStripHtml` | `function marketStripHtml(` |
| 11,645 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,646 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,676_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,677 | `renderCycleList` | `function renderCycleList(` |
| 11,767 | `renderSignsList` | `function renderSignsList(` |
| 12,023 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,258_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,259 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,321_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,322 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,355_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,356 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,940–3,943 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,022–8,035 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,839–8,852 | `seasonTrackAll` | The season, computed |
| 8,874–8,878 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,729 |
| `desire-range` | 9,847 |
| `hzn-range` | 10,197 |
| `pulse-range` | 9,798 |
| `sheet-marker-deficit` | 12,726 |
| `sheet-metric-gdp` | 12,614 |
| `sheet-metric-households` | 12,760 |
| `sheet-metric-power` | 12,693 |
| `sheet-metric-temp` | 12,564 |
| `sheet-metric-valuation` | 12,801 |
| `sheet-sign-activity` | 12,675 |
| `sheet-sign-desire` | 9,848 |
| `sheet-sign-horizon` | 10,198 |
| `sheet-sign-pulse` | 9,797 |
| `sheet-sign-volume` | 9,821 |
| `sheet-sign-yield` | 9,765 |
| `volume-range` | 9,822 |
| `ylm-range` | 9,893 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,735 |
| `desire-range` | 9,830 |
| `hzn-range` | 10,174 |
| `pulse-range` | 9,775 |
| `sheet-metric-gdp` | 12,615 |
| `sheet-metric-power` | 12,694 |
| `sheet-metric-temp` | 12,565 |
| `sheet-metric-valuation` | 12,802 |
| `volume-range` | 9,802 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,010 |
| `sheet-metric-gdp` | 6,011 |
| `sheet-sign-activity` | 6,012 |
| `sheet-metric-power` | 6,013 |
| `sheet-metric-valuation` | 6,015 |
| `sheet-metric-households` | 6,016 |
| `deficit-range` | 6,017 |
| `volume-range` | 6,018 |
| `pulse-range` | 6,019 |
| `hzn-range` | 6,020 |
| `ylm-range` | 6,031 |
| `desire-range` | 6,032 |

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
| 1,921 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,386 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,434 | hero: yield curve |
| 2,530 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,606 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,705 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,730 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,745 | long cycle (structural layer) |
| 2,786 | indicator grid |
| 2,829 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,846 | info icon + popover (progressive disclosure for longer notes) |
| 2,867 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,962 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (146), which is what the renderers fill:

| Line | id |
|---|---|
| 2,994 | `topbar-back` |
| 2,997 | `topbar-title` |
| 2,998 | `menu-btn` |
| 3,015 | `main` |
| 3,022 | `cycle-view` |
| 3,030 | `cycle-kicker` |
| 3,036 | `cycle-dial` |
| 3,038 | `season-wheel-hub-date` |
| 3,039 | `season-wheel-hub-theme` |
| 3,040 | `season-wheel-hub-detail` |
| 3,048 | `temp-card` |
| 3,050 | `temp-kicker` |
| 3,051 | `temp-sub` |
| 3,054 | `temp-svg` |
| 3,055 | `temp-tooltip` |
| 3,061 | `temp-stats` |
| 3,068 | `growth-card` |
| 3,071 | `growth-kicker` |
| 3,071 | `growth-phase` |
| 3,071 | `growth-sub` |
| 3,071 | `growth-peers` |
| 3,072 | `growth-svg` |
| 3,072 | `growth-tooltip` |
| 3,077 | `growth-stats` |
| 3,086 | `today-analysis` |
| 3,090 | `peek-row` |
| 3,094 | `sheet-metric-temp` |
| 3,095 | `temp-timing` |
| 3,096 | `temp-chart` |
| 3,098 | `temp-rangebar` |
| 3,100 | `temp-head` |
| 3,101 | `slot-temp` |
| 3,102 | `temp-history` |
| 3,103 | `temp-hist-tooltip` |
| 3,106 | `temp-trend` |
| 3,109 | `temp-panel` |
| 3,111 | `temp-highlights` |
| 3,114 | `sheet-metric-gdp` |
| 3,115 | `gdp-timing` |
| 3,116 | `gdp-chart` |
| 3,117 | `gdp-rangebar` |
| 3,119 | `gdp-head` |
| 3,120 | `slot-growth` |
| 3,121 | `gdp-history` |
| 3,122 | `gdp-hist-tooltip` |
| 3,123 | `gdp-yoy` |
| 3,133 | `gdp-trend` |
| 3,135 | `gdp-panel` |
| 3,140 | `subj-ring-gdp` |
| 3,142 | `subj-label-gdp` |
| 3,143 | `subj-value-gdp` |
| 3,144 | `subj-say-gdp` |
| 3,145 | `subj-spark-gdp` |
| 3,150 | `subj-ctx-gdp` |
| 3,153 | `gdp-highlights` |
| 3,161 | `sheet-metric-power` |
| 3,162 | `power-timing` |
| 3,163 | `power-head` |
| 3,164 | `power-chart` |
| 3,168 | `subj-ring-resilience` |
| 3,171 | `subj-value-resilience` |
| 3,172 | `subj-say-resilience` |
| 3,177 | `subj-ctx-resilience` |
| 3,181 | `longcycle-title` |
| 3,183 | `longcycle-tag` |
| 3,197 | `power-highlights` |
| 3,204 | `sheet-marker-deficit` |
| 3,210 | `sheet-metric-households` |
| 3,211 | `households-timing` |
| 3,212 | `households-chart` |
| 3,213 | `households-highlights` |
| 3,217 | `sheet-metric-valuation` |
| 3,218 | `valuation-timing` |
| 3,219 | `valuation-head` |
| 3,220 | `valuation-chart` |
| 3,224 | `subj-ring-valuation` |
| 3,227 | `subj-value-valuation` |
| 3,228 | `subj-say-valuation` |
| 3,233 | `subj-ctx-valuation` |
| 3,237 | `valuation-title` |
| 3,239 | `valuation-tag` |
| 3,246 | `valuation-highlights` |
| 3,252 | `subj-ring-yield` |
| 3,255 | `subj-value-yield` |
| 3,256 | `subj-say-yield` |
| 3,257 | `subj-spark-yield` |
| 3,288 | `ylm-series` |
| 3,293 | `ylm-head` |
| 3,294 | `ylm-shell` |
| 3,295 | `ylm-svg` |
| 3,296 | `ylm-tooltip` |
| 3,299 | `ylm-trend` |
| 3,302 | `pressure-insights` |
| 3,303 | `pressure-highlights` |
| 3,329 | `subj-value-horizon` |
| 3,330 | `subj-say-horizon` |
| 3,331 | `subj-spark-horizon` |
| 3,341 | `hzn-timeline` |
| 3,343 | `hzn-head` |
| 3,344 | `spread-history-shell` |
| 3,345 | `spread-history-svg` |
| 3,346 | `spread-history-tooltip` |
| 3,349 | `hzn-trend` |
| 3,351 | `hzn-panel` |
| 3,353 | `horizon-insights` |
| 3,354 | `horizon-highlights` |
| 3,361 | `subj-ring-sentiment` |
| 3,364 | `subj-value-sentiment` |
| 3,365 | `subj-say-sentiment` |
| 3,366 | `subj-spark-sentiment` |
| 3,378 | `curve-gauge` |
| 3,379 | `curve-vix` |
| 3,380 | `curve-highlights` |
| 3,394 | `signs-list` |
| 3,405 | `calendar-list` |
| 3,410 | `indicators-peek` |
| 3,456 | `cycle-list` |
| 3,462 | `cycle-more` |
| 3,463 | `cycle-more-label` |
| 3,472 | `calendar-cycle` |
| 3,473 | `calendar-cycle-slot` |
| 3,524 | `seasons-kicker` |
| 3,525 | `seasons-rows` |
| 3,529 | `framework-kicker` |
| 3,531 | `framework-rows` |
| 3,538 | `more-menu` |
| 3,541 | `menu-back` |
| 3,555 | `sources-open` |
| 3,563 | `appearance-current` |
| 3,571 | `sheet-howto` |
| 3,615 | `sheet-book` |
| 3,647 | `sheet-appearance` |
| 3,655 | `theme-toggle` |
| 3,662 | `sheet-contact` |
| 3,671 | `contact-form` |
| 3,672 | `contact-title` |
| 3,673 | `contact-message` |
| 3,675 | `contact-hint` |
| 3,676 | `contact-send` |
| 3,685 | `sheet-sources` |
| 3,688 | `sources-back` |
| 3,695 | `asof-text` |
| 3,696 | `sources-groups` |
| 3,703 | `detail-backdrop` |
| 3,705 | `detail-modal-close` |
| 3,706 | `detail-modal-body` |

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

