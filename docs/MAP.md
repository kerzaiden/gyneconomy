# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,498 lines**, about 1103 KB, roughly **313 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `07d46c6` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,982 | the whole stylesheet, every token and rule |
| **Markup** | 2,983–3,715 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,716–13,445 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,446–13,498 | </body></html> |

Counts: **245** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,721_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,725 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,726 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,727 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,745 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,749 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,754_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,764 | `wheelMeta` | `var wheelMeta =` |
| 3,775 | `seasonOverride` | `var seasonOverride =` |
| 3,778 | `cycleNowNote` | `var cycleNowNote =` |
| 3,787 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,873 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,918 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,931_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,948 | `LIVE` | `function LIVE(` |
| 3,975 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,983 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,984 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,987_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,018 | `repaintFigureText` | `function repaintFigureText(` |
| 4,026 | `repaintTag` | `function repaintTag(` |
| 4,036 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,061 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,069 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,077 | `REPAINT` | `var REPAINT =` |
| 4,094 | `liveAsOf` | `var liveAsOf =` |
| 4,095 | `fmtAsOf` | `function fmtAsOf(` |
| 4,100 | `applyLive` | `function applyLive(` |
| 4,176 | `repaintPolicy` | `function repaintPolicy(` |
| 4,226 | `GYN` | `var GYN =` |
| 4,246 | `refreshLiveData` | `function refreshLiveData(` |
| 4,287 | `fetchSiteData` | `function fetchSiteData(` |
| 4,317 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,331_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,332 | `yieldCurve` | `var yieldCurve =` |
| 4,345 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,369 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,376 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,382 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,409 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,411_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,416 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,440 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,464 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,488 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,515 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,540_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,549 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,559 | `uninvLagToday` | `var uninvLagToday =` |
| 4,571 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,584 | `gdpPeers` | `var gdpPeers =` |
| 4,625 | `gdpSrc` | `var gdpSrc =` |
| 4,626 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,631 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,644 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,682_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,704 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,714_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,730 | `stressScoreFor` | `function stressScoreFor(` |
| 4,736 | `stressScore` | `var stressScore =` |
| 4,742 | `powerOf` | `var powerOf =` |
| 4,743 | `powerScore` | `var powerScore =` |
| 4,760 | `stressHistory` | `var stressHistory =` |
| 4,771 | `powerMeter` | `var powerMeter =` |
| 4,773 | `stressNoteFull` | `var stressNoteFull =` |
| 4,805 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,807_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,830 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,831 | `deficitHistory` | `var deficitHistory =` |
| 4,834 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,841 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,843 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,886_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,899 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,912_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,926 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,929 | `timelineSpan` | `function timelineSpan(` |
| 4,935 | `timelineFor` | `function timelineFor(` |
| 4,948 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,954_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,960 | `windowScale` | `function windowScale(` |
| 4,976 | `windowYears` | `function windowYears(` |
| 4,994 | `refName` | `function refName(` |
| 5,001 | `histReadEnsure` | `function histReadEnsure(` |
| 5,040 | `seatBandReading` | `function seatBandReading(` |
| 5,063 | `histReadFill` | `function histReadFill(` |
| 5,186 | `histAxisEnds` | `function histAxisEnds(` |
| 5,197 | `histLegend` | `function histLegend(` |
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
| 6,561 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,562 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,565 | `qAtIndex` | `function qAtIndex(` |
| 6,566 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,574_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,589 | `householdsChart` | `function householdsChart(` |
| 6,662 | `lastChartAvg` | `var lastChartAvg =` |
| 6,663 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,748 | `GDP_NORM` | `var GDP_NORM =` |
| 6,754 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,755 | `gdpNowQ` | `var gdpNowQ =` |
| 6,756 | `gdpMeter` | `var gdpMeter =` |
| 6,759 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,781 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,847 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,911 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,919 | `velocityVerdict` | `function velocityVerdict(` |
| 6,927 | `derivePulseTag` | `function derivePulseTag(` |
| 6,933 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,993_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,002 | `seasonReading` | `var seasonReading =` |
| 7,051 | `frameworkRows` | `var frameworkRows =` |
| 7,061 | `vixRow` | `var vixRow =` |
| 7,069 | `vixWordOf` | `var vixWordOf =` |
| 7,073 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,088_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,092 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,101_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,102 | `calendarTodayY` | `var calendarTodayY =` |
| 7,133 | `vix3mClose` | `var vix3mClose =` |
| 7,134 | `fearCurve` | `function fearCurve(` |
| 7,141 | `curveVerdict` | `function curveVerdict(` |
| 7,148 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,153 | `valuationVerdict` | `function valuationVerdict(` |
| 7,171 | `sparkHtml` | `function sparkHtml(` |
| 7,190 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,196_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,209 | `modeBar` | `function modeBar(` |
| 7,224 | `pickerOpen` | `var pickerOpen =` |
| 7,228 | `cycleByName` | `function cycleByName(` |
| 7,232 | `openCycle` | `function openCycle(` |
| 7,238 | `cycleSlice` | `function cycleSlice(` |
| 7,247 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,255 | `cycleMonths` | `function cycleMonths(` |
| 7,274 | `histControls` | `function histControls(` |
| 7,288 | `cycLabel` | `function cycLabel(` |
| 7,304 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,313 | `cyclePicker` | `function cyclePicker(` |
| 7,337 | `seriesBar` | `function seriesBar(` |
| 7,344 | `rangeBar` | `function rangeBar(` |
| 7,356 | `trendOf` | `function trendOf(` |
| 7,401 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,411 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,426_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,427 | `yearOf` | `function yearOf(` |
| 7,428 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,429_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,459 | `totalStat` | `function totalStat(` |
| 7,465 | `atQuarter` | `function atQuarter(` |
| 7,466 | `atMonth` | `function atMonth(` |
| 7,467 | `cycleAverages` | `function cycleAverages(` |
| 7,474 | `ordinal` | `function ordinal(` |
| 7,475 | `hiCard` | `function hiCard(` |
| 7,486 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,500_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,507 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,523 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,530 | `moreRow` | `function moreRow(` |
| 7,536 | `powerPageNote` | `var powerPageNote =` |
| 7,537 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,543_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,546 | `xLabelOf` | `function xLabelOf(` |
| 7,566 | `fitGroup` | `function fitGroup(` |
| 7,588 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,647_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,671 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,681 | `vGrid` | `function vGrid(` |
| 7,706 | `COL_FILL` | `var COL_FILL =` |
| 7,738 | `AXIS` | `var AXIS =` |
| 7,739 | `chartAxes` | `function chartAxes(` |
| 7,785 | `divergeChart` | `function divergeChart(` |
| 7,846 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,875_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,883 | `maxIn` | `function maxIn(` |
| 7,896 | `reserveGauge` | `function reserveGauge(` |
| 7,917 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,931 | `PEEK_W` | `var PEEK_W =` |
| 7,934 | `PEEK_H` | `var PEEK_H =` |
| 7,935 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,940 | `colPeek` | `function colPeek(` |
| 7,967 | `meterPeek` | `function meterPeek(` |
| 7,984 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,989 | `pressureZone` | `function pressureZone(` |
| 8,004 | `HZN_BACK` | `var HZN_BACK =` |
| 8,005 | `hznLast` | `function hznLast(` |
| 8,006 | `hznBack` | `function hznBack(` |
| 8,007 | `horizonWord` | `function horizonWord(` |
| 8,032 | `HZN_METERS` | `var HZN_METERS =` |
| 8,040 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,064 | `_hznPanel` | `var _hznPanel =` |
| 8,065 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,085 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,086 | `levelZone` | `function levelZone(` |
| 8,098 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,103 | `RISK_RISK` | `var RISK_RISK =` |
| 8,108 | `riskCell` | `function riskCell(` |
| 8,109 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,140 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,165_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,184 | `pulseClipN` | `var pulseClipN =` |
| 8,185 | `beatPath` | `function beatPath(` |
| 8,210 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,224 | `pulsePeek` | `function pulsePeek(` |
| 8,232 | `pulseBlock` | `function pulseBlock(` |
| 8,252 | `CHEV` | `var CHEV =` |
| 8,254 | `peekCard` | `function peekCard(` |
| 8,305 | `dropSvg` | `function dropSvg(` |
| 8,313 | `speakerSvg` | `function speakerSvg(` |
| 8,321 | `gaugeSvg` | `function gaugeSvg(` |
| 8,325 | `diamondSvg` | `function diamondSvg(` |
| 8,337 | `energyFromReserve` | `function energyFromReserve(` |
| 8,349 | `sproutSvg` | `function sproutSvg(` |
| 8,360 | `markSvg` | `function markSvg(` |
| 8,364 | `flameSvg` | `function flameSvg(` |
| 8,368 | `gearSvg` | `function gearSvg(` |
| 8,381 | `pulseSvg` | `function pulseSvg(` |
| 8,385 | `thermoSvg` | `function thermoSvg(` |
| 8,404 | `trendUpSvg` | `function trendUpSvg(` |
| 8,406 | `ecgSvg` | `function ecgSvg(` |
| 8,420 | `circulationSvg` | `function circulationSvg(` |
| 8,421 | `weatherSvg` | `function weatherSvg(` |
| 8,442 | `moodSvg` | `function moodSvg(` |
| 8,459 | `boltSvg` | `function boltSvg(` |
| 8,462 | `houseSvg` | `function houseSvg(` |
| 8,470 | `sunriseSvg` | `function sunriseSvg(` |
| 8,480 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,492 | `signMarks` | `var signMarks =` |
| 8,499 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,516_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,537 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,538 | `dsrHistory` | `var dsrHistory =` |
| 8,539 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,540 | `savHistory` | `var savHistory =` |
| 8,545 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,555 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,556 | `dsrNow` | `var dsrNow =` |
| 8,557 | `savNow` | `var savNow =` |
| 8,558 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,563 | `householdsWord` | `function householdsWord(` |
| 8,570 | `householdsNow` | `var householdsNow =` |
| 8,577 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,578 | `dsrMeter` | `var dsrMeter =` |
| 8,581 | `savMeter` | `var savMeter =` |
| 8,584 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,601 | `savInfoHtml` | `function savInfoHtml(` |
| 8,619 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,628 | `curveNow` | `var curveNow =` |
| 8,629 | `curveTag` | `var curveTag =` |
| 8,630 | `curveSub` | `var curveSub =` |
| 8,634 | `curvePct` | `function curvePct(` |
| 8,635 | `curveNoteFull` | `var curveNoteFull =` |
| 8,650 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,658 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,699 | `marketCycles` | `var marketCycles =` |
| 8,729 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,731_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,752 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,753 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,758_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,779 | `slopeOf` | `function slopeOf(` |
| 8,790 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,796 | `readSeason` | `function readSeason(` |
| 8,821 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,823 | `qLabel` | `function qLabel(` |
| 8,847 | `regimeTrack` | `function regimeTrack(` |
| 8,870 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,872_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,879 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,880 | `seasonTitle` | `function seasonTitle(` |
| 8,881 | `monthLabel` | `function monthLabel(` |
| 8,882 | `cycleModel` | `function cycleModel(` |
| 8,934 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,942 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,949 | `nowModel` | `var nowModel =` |
| 8,950 | `readingNow` | `var readingNow =` |
| 8,951 | `cpiNow` | `var cpiNow =` |
| 8,952 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,953 | `currentSeason` | `var currentSeason =` |
| 8,954 | `seasonWhy` | `var seasonWhy =` |
| 8,971 | `seasonGroup` | `function seasonGroup(` |
| 8,985 | `arcGauge` | `function arcGauge(` |
| 9,024 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,037 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,039 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,043 | `policyFacts` | `function policyFacts(` |
| 9,055 | `allSources` | `var allSources =` |
| 9,079 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,112_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,115 | `SVG_NS` | `var SVG_NS =` |
| 9,116 | `svgEl` | `function svgEl(` |
| 9,129 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,165_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,166 | `clampPct` | `function clampPct(` |
| 9,173 | `infoIcon` | `function infoIcon(` |
| 9,182 | `detailTexts` | `var detailTexts =` |
| 9,200 | `detailSlots` | `var detailSlots =` |
| 9,201 | `detailSlot` | `function detailSlot(` |
| 9,212 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,216 | `_growthPanel` | `var _growthPanel =` |
| 9,217 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,223 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,234 | `facts` | `function facts(` |
| 9,235 | `factsFrom` | `function factsFrom(` |
| 9,239 | `expandBtn` | `function expandBtn(` |
| 9,245 | `sheetRenderers` | `var sheetRenderers =` |
| 9,262 | `pageMode` | `var pageMode =` |
| 9,269 | `pageCycles` | `var pageCycles =` |
| 9,274 | `pageRange` | `var pageRange =` |
| 9,280 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,314_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,325 | `meterHtml` | `function meterHtml(` |
| 9,353 | `srcHtml` | `function srcHtml(` |
| 9,362 | `TIMING` | `var TIMING =` |
| 9,368 | `timingMark` | `function timingMark(` |
| 9,382 | `timingPill` | `function timingPill(` |
| 9,403 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,411 | `seatPageFoot` | `function seatPageFoot(` |
| 9,434 | `timingMembers` | `var timingMembers =` |
| 9,435 | `registerTiming` | `function registerTiming(` |
| 9,441 | `headHtml` | `function headHtml(` |
| 9,459 | `heldHighlights` | `var heldHighlights =` |
| 9,460 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,518_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,519 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,886_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,887 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,111_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,112 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,144_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,150 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,234_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,235 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,253_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,256 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,279_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,280 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,331_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,334 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,527_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,539 | `totalRiseIn` | `function totalRiseIn(` |
| 10,549 | `eraInflation` | `function eraInflation(` |
| 10,560 | `eraGrowth` | `function eraGrowth(` |
| 10,576 | `fmtSigned` | `function fmtSigned(` |
| 10,581 | `regimeArrow` | `function regimeArrow(` |
| 10,587 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,588 | `growthShown` | `function growthShown(` |
| 10,589 | `growthShownCap` | `function growthShownCap(` |
| 10,590 | `regimeState` | `function regimeState(` |
| 10,594 | `phaseClass` | `function phaseClass(` |
| 10,596 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,608 | `cycleViewEl` | `var cycleViewEl =` |
| 10,612 | `tempCard` | `var tempCard =` |
| 10,613 | `placeCharts` | `function placeCharts(` |
| 10,618 | `shownEra` | `var shownEra =` |
| 10,619 | `calendarReset` | `var calendarReset =` |
| 10,620 | `metricPageReset` | `var metricPageReset =` |
| 10,621 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,624 | `topbarBack` | `var topbarBack =` |
| 10,625 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,632_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,633 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,794_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,795 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,813_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,816 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,837_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,843 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,846 | `hubSet` | `function hubSet(` |
| 10,859 | `quarterPopup` | `function quarterPopup(` |
| 10,892 | `hubShowDefault` | `function hubShowDefault(` |
| 10,901 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,907 | `hubShowYear` | `function hubShowYear(` |
| 10,922 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,014_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,017 | `tempState` | `var tempState =` |
| 11,020 | `chartLink` | `var chartLink =` |
| 11,040 | `m2Step` | `function m2Step(` |
| 11,043 | `heatStep` | `function heatStep(` |
| 11,047 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,234_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,237 | `drawGrowth` | `function drawGrowth(` |
| 11,376 | `wireResize` | `function wireResize(` |
| 11,382 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,394_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,395 | `renderCycleView` | `function renderCycleView(` |
| 11,448 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,459 | `PEER_CARET` | `var PEER_CARET =` |
| 11,460 | `peerList` | `function peerList(` |
| 11,461 | `peerChosen` | `function peerChosen(` |
| 11,462 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,466 | `renderPeerPills` | `function renderPeerPills(` |
| 11,516 | `shownEraModel` | `var shownEraModel =` |
| 11,517 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,519_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,521 | `stripGroupName` | `var stripGroupName =` |
| 11,522 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,568 | `marketStripHtml` | `function marketStripHtml(` |
| 11,631 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,632 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,662_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,663 | `renderCycleList` | `function renderCycleList(` |
| 11,753 | `renderSignsList` | `function renderSignsList(` |
| 12,009 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,244_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,245 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,307_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,308 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,341_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,342 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,944–3,947 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,013–8,026 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,830–8,843 | `seasonTrackAll` | The season, computed |
| 8,865–8,869 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,715 |
| `desire-range` | 9,832 |
| `hzn-range` | 10,183 |
| `pulse-range` | 9,783 |
| `sheet-marker-deficit` | 12,712 |
| `sheet-metric-gdp` | 12,600 |
| `sheet-metric-households` | 12,746 |
| `sheet-metric-power` | 12,679 |
| `sheet-metric-temp` | 12,550 |
| `sheet-metric-valuation` | 12,787 |
| `sheet-sign-activity` | 12,661 |
| `sheet-sign-desire` | 9,833 |
| `sheet-sign-horizon` | 10,184 |
| `sheet-sign-pulse` | 9,782 |
| `sheet-sign-volume` | 9,806 |
| `sheet-sign-yield` | 9,750 |
| `volume-range` | 9,807 |
| `ylm-range` | 9,878 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,721 |
| `desire-range` | 9,815 |
| `hzn-range` | 10,160 |
| `pulse-range` | 9,760 |
| `sheet-metric-gdp` | 12,601 |
| `sheet-metric-power` | 12,680 |
| `sheet-metric-temp` | 12,551 |
| `sheet-metric-valuation` | 12,788 |
| `volume-range` | 9,787 |

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
| 1,914 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,376 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,424 | hero: yield curve |
| 2,520 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,596 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,699 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,724 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,739 | long cycle (structural layer) |
| 2,780 | indicator grid |
| 2,823 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,840 | info icon + popover (progressive disclosure for longer notes) |
| 2,861 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,956 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (148), which is what the renderers fill:

| Line | id |
|---|---|
| 2,988 | `topbar-back` |
| 2,991 | `topbar-title` |
| 2,992 | `menu-btn` |
| 3,009 | `main` |
| 3,016 | `cycle-view` |
| 3,024 | `cycle-kicker` |
| 3,030 | `cycle-dial` |
| 3,032 | `season-wheel-hub-date` |
| 3,033 | `season-wheel-hub-theme` |
| 3,034 | `season-wheel-hub-detail` |
| 3,042 | `temp-card` |
| 3,044 | `temp-kicker` |
| 3,045 | `temp-sub` |
| 3,048 | `temp-svg` |
| 3,049 | `temp-tooltip` |
| 3,055 | `temp-stats` |
| 3,062 | `growth-card` |
| 3,065 | `growth-kicker` |
| 3,065 | `growth-phase` |
| 3,065 | `growth-sub` |
| 3,065 | `growth-peers` |
| 3,066 | `growth-svg` |
| 3,066 | `growth-tooltip` |
| 3,071 | `growth-stats` |
| 3,080 | `today-analysis` |
| 3,084 | `peek-row` |
| 3,088 | `sheet-metric-temp` |
| 3,089 | `temp-timing` |
| 3,090 | `temp-chart` |
| 3,092 | `temp-rangebar` |
| 3,094 | `temp-head` |
| 3,095 | `slot-temp` |
| 3,096 | `temp-history` |
| 3,097 | `temp-hist-tooltip` |
| 3,100 | `temp-trend` |
| 3,103 | `temp-panel` |
| 3,105 | `temp-highlights` |
| 3,108 | `sheet-metric-gdp` |
| 3,109 | `gdp-timing` |
| 3,110 | `gdp-chart` |
| 3,111 | `gdp-rangebar` |
| 3,113 | `gdp-head` |
| 3,114 | `slot-growth` |
| 3,115 | `gdp-history` |
| 3,116 | `gdp-hist-tooltip` |
| 3,117 | `gdp-yoy` |
| 3,127 | `gdp-trend` |
| 3,129 | `gdp-panel` |
| 3,134 | `subj-ring-gdp` |
| 3,136 | `subj-label-gdp` |
| 3,137 | `subj-value-gdp` |
| 3,138 | `subj-say-gdp` |
| 3,139 | `subj-spark-gdp` |
| 3,144 | `subj-ctx-gdp` |
| 3,147 | `gdp-highlights` |
| 3,155 | `sheet-metric-power` |
| 3,156 | `power-timing` |
| 3,157 | `power-head` |
| 3,158 | `power-chart` |
| 3,162 | `subj-ring-resilience` |
| 3,165 | `subj-value-resilience` |
| 3,166 | `subj-say-resilience` |
| 3,171 | `subj-ctx-resilience` |
| 3,175 | `longcycle-title` |
| 3,177 | `longcycle-tag` |
| 3,191 | `power-highlights` |
| 3,198 | `sheet-marker-deficit` |
| 3,204 | `sheet-metric-households` |
| 3,205 | `households-timing` |
| 3,206 | `households-chart` |
| 3,207 | `households-highlights` |
| 3,211 | `sheet-metric-valuation` |
| 3,212 | `valuation-timing` |
| 3,213 | `valuation-head` |
| 3,214 | `valuation-chart` |
| 3,218 | `subj-ring-valuation` |
| 3,221 | `subj-value-valuation` |
| 3,222 | `subj-say-valuation` |
| 3,227 | `subj-ctx-valuation` |
| 3,231 | `valuation-title` |
| 3,233 | `valuation-tag` |
| 3,240 | `valuation-highlights` |
| 3,246 | `subj-ring-yield` |
| 3,249 | `subj-value-yield` |
| 3,250 | `subj-say-yield` |
| 3,251 | `subj-spark-yield` |
| 3,282 | `ylm-series` |
| 3,287 | `ylm-head` |
| 3,288 | `ylm-shell` |
| 3,289 | `ylm-svg` |
| 3,290 | `ylm-tooltip` |
| 3,293 | `ylm-zone-legend` |
| 3,298 | `ylm-trend` |
| 3,301 | `pressure-insights` |
| 3,302 | `pressure-highlights` |
| 3,328 | `subj-value-horizon` |
| 3,329 | `subj-say-horizon` |
| 3,330 | `subj-spark-horizon` |
| 3,340 | `hzn-timeline` |
| 3,342 | `hzn-head` |
| 3,343 | `spread-history-shell` |
| 3,344 | `spread-history-svg` |
| 3,345 | `spread-history-tooltip` |
| 3,348 | `hzn-zone-legend` |
| 3,353 | `hzn-trend` |
| 3,355 | `hzn-panel` |
| 3,357 | `horizon-insights` |
| 3,358 | `horizon-highlights` |
| 3,365 | `subj-ring-sentiment` |
| 3,368 | `subj-value-sentiment` |
| 3,369 | `subj-say-sentiment` |
| 3,370 | `subj-spark-sentiment` |
| 3,382 | `curve-gauge` |
| 3,383 | `curve-vix` |
| 3,384 | `curve-highlights` |
| 3,398 | `signs-list` |
| 3,409 | `calendar-list` |
| 3,414 | `indicators-peek` |
| 3,460 | `cycle-list` |
| 3,466 | `cycle-more` |
| 3,467 | `cycle-more-label` |
| 3,476 | `calendar-cycle` |
| 3,477 | `calendar-cycle-slot` |
| 3,528 | `seasons-kicker` |
| 3,529 | `seasons-rows` |
| 3,533 | `framework-kicker` |
| 3,535 | `framework-rows` |
| 3,542 | `more-menu` |
| 3,545 | `menu-back` |
| 3,559 | `sources-open` |
| 3,567 | `appearance-current` |
| 3,575 | `sheet-howto` |
| 3,619 | `sheet-book` |
| 3,651 | `sheet-appearance` |
| 3,659 | `theme-toggle` |
| 3,666 | `sheet-contact` |
| 3,675 | `contact-form` |
| 3,676 | `contact-title` |
| 3,677 | `contact-message` |
| 3,679 | `contact-hint` |
| 3,680 | `contact-send` |
| 3,689 | `sheet-sources` |
| 3,692 | `sources-back` |
| 3,699 | `asof-text` |
| 3,700 | `sources-groups` |
| 3,707 | `detail-backdrop` |
| 3,709 | `detail-modal-close` |
| 3,710 | `detail-modal-body` |

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

