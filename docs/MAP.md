# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,709 lines**, about 1124 KB, roughly **319 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `aa9ef24` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,026 | the whole stylesheet, every token and rule |
| **Markup** | 3,027–3,748 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,749–13,656 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,657–13,709 | </body></html> |

Counts: **244** top-level functions, **176** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,754_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,758 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,759 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,760 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,778 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,782 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,787_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,797 | `wheelMeta` | `var wheelMeta =` |
| 3,808 | `seasonOverride` | `var seasonOverride =` |
| 3,811 | `cycleNowNote` | `var cycleNowNote =` |
| 3,820 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,906 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,951 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,964_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,981 | `LIVE` | `function LIVE(` |
| 4,008 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,016 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,017 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,020_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,051 | `repaintFigureText` | `function repaintFigureText(` |
| 4,059 | `repaintTag` | `function repaintTag(` |
| 4,069 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,094 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,102 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,110 | `REPAINT` | `var REPAINT =` |
| 4,127 | `liveAsOf` | `var liveAsOf =` |
| 4,128 | `fmtAsOf` | `function fmtAsOf(` |
| 4,133 | `applyLive` | `function applyLive(` |
| 4,209 | `repaintPolicy` | `function repaintPolicy(` |
| 4,259 | `GYN` | `var GYN =` |
| 4,279 | `refreshLiveData` | `function refreshLiveData(` |
| 4,320 | `fetchSiteData` | `function fetchSiteData(` |
| 4,350 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,364_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,365 | `yieldCurve` | `var yieldCurve =` |
| 4,378 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,402 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,414 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,442_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,447 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,471 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,495 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,519 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,546 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,571_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,580 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,590 | `uninvLagToday` | `var uninvLagToday =` |
| 4,602 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,615 | `gdpPeers` | `var gdpPeers =` |
| 4,656 | `gdpSrc` | `var gdpSrc =` |
| 4,657 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,662 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,675 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,713_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,735 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,745_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,761 | `stressScoreFor` | `function stressScoreFor(` |
| 4,767 | `stressScore` | `var stressScore =` |
| 4,773 | `powerOf` | `var powerOf =` |
| 4,774 | `powerScore` | `var powerScore =` |
| 4,791 | `stressHistory` | `var stressHistory =` |
| 4,802 | `powerMeter` | `var powerMeter =` |
| 4,804 | `stressNoteFull` | `var stressNoteFull =` |
| 4,836 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,838_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,861 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,862 | `deficitHistory` | `var deficitHistory =` |
| 4,865 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,872 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,874 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,917_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,930 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,943_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,957 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,960 | `timelineSpan` | `function timelineSpan(` |
| 4,966 | `timelineFor` | `function timelineFor(` |
| 4,979 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,985_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,991 | `windowScale` | `function windowScale(` |
| 5,007 | `windowYears` | `function windowYears(` |
| 5,025 | `refName` | `function refName(` |
| 5,032 | `histReadEnsure` | `function histReadEnsure(` |
| 5,071 | `seatBandReading` | `function seatBandReading(` |
| 5,094 | `histReadFill` | `function histReadFill(` |
| 5,222 | `histAxisEnds` | `function histAxisEnds(` |
| 5,233 | `histLegend` | `function histLegend(` |
| 5,321 | `refitHistory` | `function refitHistory(` |
| 5,333 | `wireHistHover` | `function wireHistHover(` |
| 5,392 | `mWindowFrom` | `function mWindowFrom(` |
| 5,397 | `qWindowFrom` | `function qWindowFrom(` |
| 5,402 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,403 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,405 | `DEF_1983` | `var DEF_1983 =` |
| 5,407 | `defFrom` | `function defFrom(` |
| 5,418 | `deficitChart` | `function deficitChart(` |
| 5,508 | `deficitBlock` | `function deficitBlock(` |
| 5,570 | `buffettHistory` | `var buffettHistory =` |
| 5,600 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,601 | `hyDates` | `var hyDates =` |
| 5,602 | `hyOas` | `var hyOas =` |
| 5,603 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,610 | `hyAt` | `function hyAt(` |
| 5,614 | `hyLabel` | `function hyLabel(` |
| 5,615 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,616 | `hyNum` | `function hyNum(` |
| 5,617 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,627 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,637 | `capeHistory` | `var capeHistory =` |
| 5,639 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,657_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,663 | `sentiment` | `var sentiment =` |
| 5,681 | `valuation` | `var valuation =` |
| 5,718 | `valRow` | `function valRow(` |
| 5,726 | `coincident` | `var coincident =` |
| 5,787 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,805 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,806 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,807 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,809_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,822 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,823 | `m2vHistory` | `var m2vHistory =` |
| 5,843 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,936 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,026 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,027 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,067_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,073 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,074 | `DOTS` | `var DOTS =` |
| 6,076 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,111 | `histHead` | `function histHead(` |
| 6,132 | `headNoteIdx` | `var headNoteIdx =` |
| 6,133 | `headMenuHtml` | `function headMenuHtml(` |
| 6,153 | `headMenuFor` | `var headMenuFor =` |
| 6,154 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,183 | `nameWithMark` | `function nameWithMark(` |
| 6,189 | `panelRow` | `function panelRow(` |
| 6,215 | `panelFromMeter` | `function panelFromMeter(` |
| 6,229 | `meterFlagged` | `function meterFlagged(` |
| 6,240 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,268 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,282 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,301 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,320 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,334 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,359 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,390 | `desireBlock` | `function desireBlock(` |
| 6,417 | `volumeBlock` | `function volumeBlock(` |
| 6,442 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,465 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,473_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,486 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,487 | `m2Level` | `var m2Level =` |
| 6,509 | `m2Yoy` | `var m2Yoy =` |
| 6,510 | `M2_NORM` | `var M2_NORM =` |
| 6,515 | `volumeVerdict` | `function volumeVerdict(` |
| 6,552 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,553 | `unempHistory` | `var unempHistory =` |
| 6,559 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,574 | `NROU_NOW` | `var NROU_NOW =` |
| 6,575 | `unempState` | `function unempState(` |
| 6,581 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,646 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,647 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,650 | `qAtIndex` | `function qAtIndex(` |
| 6,651 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,659_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,674 | `householdsChart` | `function householdsChart(` |
| 6,742 | `lastChartAvg` | `var lastChartAvg =` |
| 6,743 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,828 | `GDP_NORM` | `var GDP_NORM =` |
| 6,834 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,835 | `gdpNowQ` | `var gdpNowQ =` |
| 6,836 | `gdpMeter` | `var gdpMeter =` |
| 6,839 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,861 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,927 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,991 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,999 | `velocityVerdict` | `function velocityVerdict(` |
| 7,007 | `derivePulseTag` | `function derivePulseTag(` |
| 7,013 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,073_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,082 | `seasonReading` | `var seasonReading =` |
| 7,131 | `frameworkRows` | `var frameworkRows =` |
| 7,141 | `vixRow` | `var vixRow =` |
| 7,149 | `vixWordOf` | `var vixWordOf =` |
| 7,153 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,168_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,172 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,181_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,182 | `calendarTodayY` | `var calendarTodayY =` |
| 7,213 | `vix3mClose` | `var vix3mClose =` |
| 7,214 | `fearCurve` | `function fearCurve(` |
| 7,221 | `curveVerdict` | `function curveVerdict(` |
| 7,228 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,233 | `valuationVerdict` | `function valuationVerdict(` |
| 7,251 | `sparkHtml` | `function sparkHtml(` |
| 7,270 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,276_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,289 | `modeBar` | `function modeBar(` |
| 7,304 | `pickerOpen` | `var pickerOpen =` |
| 7,308 | `cycleByName` | `function cycleByName(` |
| 7,312 | `openCycle` | `function openCycle(` |
| 7,318 | `cycleSlice` | `function cycleSlice(` |
| 7,327 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,335 | `cycleMonths` | `function cycleMonths(` |
| 7,354 | `histControls` | `function histControls(` |
| 7,368 | `cycLabel` | `function cycLabel(` |
| 7,384 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,393 | `cyclePicker` | `function cyclePicker(` |
| 7,412 | `rangeBar` | `function rangeBar(` |
| 7,424 | `trendOf` | `function trendOf(` |
| 7,469 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,479 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,500_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,501 | `yearOf` | `function yearOf(` |
| 7,502 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,503_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,533 | `totalStat` | `function totalStat(` |
| 7,539 | `atQuarter` | `function atQuarter(` |
| 7,540 | `atMonth` | `function atMonth(` |
| 7,541 | `cycleAverages` | `function cycleAverages(` |
| 7,548 | `ordinal` | `function ordinal(` |
| 7,549 | `hiCard` | `function hiCard(` |
| 7,560 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,574_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,581 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,597 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,604 | `moreRow` | `function moreRow(` |
| 7,610 | `powerPageNote` | `var powerPageNote =` |
| 7,611 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,617_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,620 | `xLabelOf` | `function xLabelOf(` |
| 7,640 | `fitGroup` | `function fitGroup(` |
| 7,662 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,721_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,745 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,755 | `vGrid` | `function vGrid(` |
| 7,780 | `COL_FILL` | `var COL_FILL =` |
| 7,813 | `colPath` | `function colPath(` |
| 7,818 | `colWidth` | `function colWidth(` |
| 7,865 | `AXIS` | `var AXIS =` |
| 7,866 | `chartAxes` | `function chartAxes(` |
| 7,920 | `divergeChart` | `function divergeChart(` |
| 7,981 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,010_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,018 | `maxIn` | `function maxIn(` |
| 8,036 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,050 | `PEEK_W` | `var PEEK_W =` |
| 8,053 | `PEEK_H` | `var PEEK_H =` |
| 8,058 | `colPeek` | `function colPeek(` |
| 8,085 | `meterPeek` | `function meterPeek(` |
| 8,102 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,107 | `pressureZone` | `function pressureZone(` |
| 8,122 | `HZN_BACK` | `var HZN_BACK =` |
| 8,123 | `hznLast` | `function hznLast(` |
| 8,124 | `hznBack` | `function hznBack(` |
| 8,125 | `horizonWord` | `function horizonWord(` |
| 8,150 | `HZN_METERS` | `var HZN_METERS =` |
| 8,158 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,182 | `_hznPanel` | `var _hznPanel =` |
| 8,183 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,203 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,204 | `levelZone` | `function levelZone(` |
| 8,216 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,221 | `RISK_RISK` | `var RISK_RISK =` |
| 8,226 | `riskCell` | `function riskCell(` |
| 8,227 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,258 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,283_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,304 | `pulseClipN` | `var pulseClipN =` |
| 8,305 | `beatPath` | `function beatPath(` |
| 8,330 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,344 | `pulsePeek` | `function pulsePeek(` |
| 8,352 | `pulseBlock` | `function pulseBlock(` |
| 8,372 | `CHEV` | `var CHEV =` |
| 8,374 | `peekCard` | `function peekCard(` |
| 8,428 | `dropSvg` | `function dropSvg(` |
| 8,440 | `volumeSvg` | `function volumeSvg(` |
| 8,447 | `gaugeSvg` | `function gaugeSvg(` |
| 8,451 | `diamondSvg` | `function diamondSvg(` |
| 8,465 | `energyFromReserve` | `function energyFromReserve(` |
| 8,477 | `sproutSvg` | `function sproutSvg(` |
| 8,488 | `markSvg` | `function markSvg(` |
| 8,492 | `flameSvg` | `function flameSvg(` |
| 8,496 | `gearSvg` | `function gearSvg(` |
| 8,508 | `thermoSvg` | `function thermoSvg(` |
| 8,527 | `trendUpSvg` | `function trendUpSvg(` |
| 8,529 | `ecgSvg` | `function ecgSvg(` |
| 8,543 | `circulationSvg` | `function circulationSvg(` |
| 8,544 | `weatherSvg` | `function weatherSvg(` |
| 8,565 | `moodSvg` | `function moodSvg(` |
| 8,589 | `boltSvg` | `function boltSvg(` |
| 8,592 | `houseSvg` | `function houseSvg(` |
| 8,600 | `sunriseSvg` | `function sunriseSvg(` |
| 8,610 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,622 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,639_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,660 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,661 | `dsrHistory` | `var dsrHistory =` |
| 8,662 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,663 | `savHistory` | `var savHistory =` |
| 8,668 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,678 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,679 | `dsrNow` | `var dsrNow =` |
| 8,680 | `savNow` | `var savNow =` |
| 8,681 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,686 | `householdsWord` | `function householdsWord(` |
| 8,693 | `householdsNow` | `var householdsNow =` |
| 8,700 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,701 | `dsrMeter` | `var dsrMeter =` |
| 8,704 | `savMeter` | `var savMeter =` |
| 8,707 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,724 | `savInfoHtml` | `function savInfoHtml(` |
| 8,742 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,751 | `curveNow` | `var curveNow =` |
| 8,752 | `curveTag` | `var curveTag =` |
| 8,753 | `curveSub` | `var curveSub =` |
| 8,757 | `curvePct` | `function curvePct(` |
| 8,758 | `curveNoteFull` | `var curveNoteFull =` |
| 8,773 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,781 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,822 | `marketCycles` | `var marketCycles =` |
| 8,852 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,854_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,875 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,876 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,881_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,902 | `slopeOf` | `function slopeOf(` |
| 8,913 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,919 | `readSeason` | `function readSeason(` |
| 8,944 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,946 | `qLabel` | `function qLabel(` |
| 8,970 | `regimeTrack` | `function regimeTrack(` |
| 8,993 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,995_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,002 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,003 | `seasonTitle` | `function seasonTitle(` |
| 9,004 | `monthLabel` | `function monthLabel(` |
| 9,005 | `cycleModel` | `function cycleModel(` |
| 9,057 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,065 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,072 | `nowModel` | `var nowModel =` |
| 9,073 | `readingNow` | `var readingNow =` |
| 9,074 | `cpiNow` | `var cpiNow =` |
| 9,075 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,076 | `currentSeason` | `var currentSeason =` |
| 9,077 | `seasonWhy` | `var seasonWhy =` |
| 9,094 | `seasonGroup` | `function seasonGroup(` |
| 9,108 | `arcGauge` | `function arcGauge(` |
| 9,150 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,163 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,165 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,169 | `policyFacts` | `function policyFacts(` |
| 9,181 | `allSources` | `var allSources =` |
| 9,205 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,238_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,241 | `SVG_NS` | `var SVG_NS =` |
| 9,242 | `svgEl` | `function svgEl(` |
| 9,255 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,291_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,292 | `clampPct` | `function clampPct(` |
| 9,299 | `infoIcon` | `function infoIcon(` |
| 9,308 | `detailTexts` | `var detailTexts =` |
| 9,326 | `detailSlots` | `var detailSlots =` |
| 9,327 | `detailSlot` | `function detailSlot(` |
| 9,338 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,342 | `_growthPanel` | `var _growthPanel =` |
| 9,343 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,349 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,360 | `facts` | `function facts(` |
| 9,361 | `factsFrom` | `function factsFrom(` |
| 9,365 | `expandBtn` | `function expandBtn(` |
| 9,371 | `sheetRenderers` | `var sheetRenderers =` |
| 9,388 | `pageMode` | `var pageMode =` |
| 9,395 | `pageCycles` | `var pageCycles =` |
| 9,400 | `pageRange` | `var pageRange =` |
| 9,406 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,440_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,451 | `meterHtml` | `function meterHtml(` |
| 9,479 | `srcHtml` | `function srcHtml(` |
| 9,488 | `TIMING` | `var TIMING =` |
| 9,494 | `timingMark` | `function timingMark(` |
| 9,508 | `timingPill` | `function timingPill(` |
| 9,529 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,537 | `seatPageFoot` | `function seatPageFoot(` |
| 9,560 | `timingMembers` | `var timingMembers =` |
| 9,561 | `registerTiming` | `function registerTiming(` |
| 9,567 | `headHtml` | `function headHtml(` |
| 9,585 | `heldHighlights` | `var heldHighlights =` |
| 9,586 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,644_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,645 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,044_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,045 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,268_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,269 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,301_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,307 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,391_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,392 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,410_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,413 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,436_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,437 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,503_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,506 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,704_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,716 | `totalRiseIn` | `function totalRiseIn(` |
| 10,726 | `eraInflation` | `function eraInflation(` |
| 10,737 | `eraGrowth` | `function eraGrowth(` |
| 10,753 | `fmtSigned` | `function fmtSigned(` |
| 10,758 | `regimeArrow` | `function regimeArrow(` |
| 10,764 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,765 | `growthShown` | `function growthShown(` |
| 10,766 | `growthShownCap` | `function growthShownCap(` |
| 10,767 | `regimeState` | `function regimeState(` |
| 10,771 | `phaseClass` | `function phaseClass(` |
| 10,773 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,785 | `cycleViewEl` | `var cycleViewEl =` |
| 10,789 | `tempCard` | `var tempCard =` |
| 10,790 | `placeCharts` | `function placeCharts(` |
| 10,795 | `shownEra` | `var shownEra =` |
| 10,796 | `calendarReset` | `var calendarReset =` |
| 10,797 | `metricPageReset` | `var metricPageReset =` |
| 10,798 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,801 | `topbarBack` | `var topbarBack =` |
| 10,802 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,809_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,810 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,971_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,972 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,990_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,993 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,014_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,020 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,023 | `hubSet` | `function hubSet(` |
| 11,036 | `quarterPopup` | `function quarterPopup(` |
| 11,069 | `hubShowDefault` | `function hubShowDefault(` |
| 11,078 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,084 | `hubShowYear` | `function hubShowYear(` |
| 11,099 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,191_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,194 | `tempState` | `var tempState =` |
| 11,197 | `chartLink` | `var chartLink =` |
| 11,217 | `m2Step` | `function m2Step(` |
| 11,220 | `heatStep` | `function heatStep(` |
| 11,224 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,411_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,414 | `drawGrowth` | `function drawGrowth(` |
| 11,553 | `wireResize` | `function wireResize(` |
| 11,559 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,571_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,572 | `renderCycleView` | `function renderCycleView(` |
| 11,625 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,636 | `PEER_CARET` | `var PEER_CARET =` |
| 11,637 | `peerList` | `function peerList(` |
| 11,638 | `peerChosen` | `function peerChosen(` |
| 11,639 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,643 | `renderPeerPills` | `function renderPeerPills(` |
| 11,693 | `shownEraModel` | `var shownEraModel =` |
| 11,694 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,696_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,698 | `stripGroupName` | `var stripGroupName =` |
| 11,699 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,745 | `marketStripHtml` | `function marketStripHtml(` |
| 11,808 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,809 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,839_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,840 | `renderCycleList` | `function renderCycleList(` |
| 11,930 | `renderSignsList` | `function renderSignsList(` |
| 12,206 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,455_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,456 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,518_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,519 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,552_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,553 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,977–3,980 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,131–8,144 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,953–8,966 | `seasonTrackAll` | The season, computed |
| 8,988–8,992 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,916 |
| `desire-range` | 9,969 |
| `hzn-range` | 10,340 |
| `pulse-range` | 9,920 |
| `sheet-marker-deficit` | 12,913 |
| `sheet-metric-gdp` | 12,797 |
| `sheet-metric-households` | 12,947 |
| `sheet-metric-power` | 12,876 |
| `sheet-metric-temp` | 12,747 |
| `sheet-metric-valuation` | 12,989 |
| `sheet-sign-activity` | 12,858 |
| `sheet-sign-desire` | 9,970 |
| `sheet-sign-horizon` | 10,341 |
| `sheet-sign-pulse` | 9,919 |
| `sheet-sign-volume` | 9,943 |
| `sheet-sign-yield` | 9,885 |
| `volume-range` | 9,944 |
| `ylm-range` | 9,887 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,922 |
| `desire-range` | 9,952 |
| `hzn-range` | 10,317 |
| `pulse-range` | 9,897 |
| `sheet-metric-gdp` | 12,798 |
| `sheet-metric-power` | 12,877 |
| `sheet-metric-temp` | 12,748 |
| `sheet-metric-valuation` | 12,990 |
| `volume-range` | 9,924 |
| `ylm-range` | 9,998 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,077 |
| `sheet-metric-gdp` | 6,078 |
| `sheet-sign-activity` | 6,085 |
| `sheet-metric-power` | 6,086 |
| `sheet-metric-valuation` | 6,088 |
| `sheet-metric-households` | 6,089 |
| `deficit-range` | 6,090 |
| `volume-range` | 6,091 |
| `pulse-range` | 6,092 |
| `hzn-range` | 6,093 |
| `ylm-range` | 6,108 |
| `desire-range` | 6,109 |

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
| 3,416 | `curve-vix` |
| 3,417 | `curve-highlights` |
| 3,431 | `signs-list` |
| 3,442 | `calendar-list` |
| 3,447 | `indicators-peek` |
| 3,493 | `cycle-list` |
| 3,499 | `cycle-more` |
| 3,500 | `cycle-more-label` |
| 3,509 | `calendar-cycle` |
| 3,510 | `calendar-cycle-slot` |
| 3,561 | `seasons-kicker` |
| 3,562 | `seasons-rows` |
| 3,566 | `framework-kicker` |
| 3,568 | `framework-rows` |
| 3,575 | `more-menu` |
| 3,578 | `menu-back` |
| 3,592 | `sources-open` |
| 3,600 | `appearance-current` |
| 3,608 | `sheet-howto` |
| 3,652 | `sheet-book` |
| 3,684 | `sheet-appearance` |
| 3,692 | `theme-toggle` |
| 3,699 | `sheet-contact` |
| 3,708 | `contact-form` |
| 3,709 | `contact-title` |
| 3,710 | `contact-message` |
| 3,712 | `contact-hint` |
| 3,713 | `contact-send` |
| 3,722 | `sheet-sources` |
| 3,725 | `sources-back` |
| 3,732 | `asof-text` |
| 3,733 | `sources-groups` |
| 3,740 | `detail-backdrop` |
| 3,742 | `detail-modal-close` |
| 3,743 | `detail-modal-body` |

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

