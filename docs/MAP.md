# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,727 lines**, about 1125 KB, roughly **320 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `dae1d01` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,026 | the whole stylesheet, every token and rule |
| **Markup** | 3,027–3,748 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,749–13,674 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,675–13,727 | </body></html> |

Counts: **244** top-level functions, **178** top-level vars, **4** top-level IIFEs in the script.

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

_line 4,838_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,861 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,862 | `deficitHistory` | `var deficitHistory =` |
| 4,865 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,872 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,874 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 4,917 | `fedFundsHistory` | `var fedFundsHistory =` |
| 4,918 | `fearCurveHistory` | `var fearCurveHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,935_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,948 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,961_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,975 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,978 | `timelineSpan` | `function timelineSpan(` |
| 4,984 | `timelineFor` | `function timelineFor(` |
| 4,997 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,003_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,009 | `windowScale` | `function windowScale(` |
| 5,025 | `windowYears` | `function windowYears(` |
| 5,043 | `refName` | `function refName(` |
| 5,050 | `histReadEnsure` | `function histReadEnsure(` |
| 5,089 | `seatBandReading` | `function seatBandReading(` |
| 5,112 | `histReadFill` | `function histReadFill(` |
| 5,240 | `histAxisEnds` | `function histAxisEnds(` |
| 5,251 | `histLegend` | `function histLegend(` |
| 5,339 | `refitHistory` | `function refitHistory(` |
| 5,351 | `wireHistHover` | `function wireHistHover(` |
| 5,410 | `mWindowFrom` | `function mWindowFrom(` |
| 5,415 | `qWindowFrom` | `function qWindowFrom(` |
| 5,420 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,421 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,423 | `DEF_1983` | `var DEF_1983 =` |
| 5,425 | `defFrom` | `function defFrom(` |
| 5,436 | `deficitChart` | `function deficitChart(` |
| 5,526 | `deficitBlock` | `function deficitBlock(` |
| 5,588 | `buffettHistory` | `var buffettHistory =` |
| 5,618 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,619 | `hyDates` | `var hyDates =` |
| 5,620 | `hyOas` | `var hyOas =` |
| 5,621 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,628 | `hyAt` | `function hyAt(` |
| 5,632 | `hyLabel` | `function hyLabel(` |
| 5,633 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,634 | `hyNum` | `function hyNum(` |
| 5,635 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,645 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,655 | `capeHistory` | `var capeHistory =` |
| 5,657 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,675_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,681 | `sentiment` | `var sentiment =` |
| 5,699 | `valuation` | `var valuation =` |
| 5,736 | `valRow` | `function valRow(` |
| 5,744 | `coincident` | `var coincident =` |
| 5,805 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,823 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,824 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,825 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,827_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,840 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,841 | `m2vHistory` | `var m2vHistory =` |
| 5,861 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,954 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,044 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,045 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,085_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,091 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,092 | `DOTS` | `var DOTS =` |
| 6,094 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,129 | `histHead` | `function histHead(` |
| 6,150 | `headNoteIdx` | `var headNoteIdx =` |
| 6,151 | `headMenuHtml` | `function headMenuHtml(` |
| 6,171 | `headMenuFor` | `var headMenuFor =` |
| 6,172 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,201 | `nameWithMark` | `function nameWithMark(` |
| 6,207 | `panelRow` | `function panelRow(` |
| 6,233 | `panelFromMeter` | `function panelFromMeter(` |
| 6,247 | `meterFlagged` | `function meterFlagged(` |
| 6,258 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,286 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,300 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,319 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,338 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,352 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,377 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,408 | `desireBlock` | `function desireBlock(` |
| 6,435 | `volumeBlock` | `function volumeBlock(` |
| 6,460 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,483 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,491_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,504 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,505 | `m2Level` | `var m2Level =` |
| 6,527 | `m2Yoy` | `var m2Yoy =` |
| 6,528 | `M2_NORM` | `var M2_NORM =` |
| 6,533 | `volumeVerdict` | `function volumeVerdict(` |
| 6,570 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,571 | `unempHistory` | `var unempHistory =` |
| 6,577 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,592 | `NROU_NOW` | `var NROU_NOW =` |
| 6,593 | `unempState` | `function unempState(` |
| 6,599 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,664 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,665 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,668 | `qAtIndex` | `function qAtIndex(` |
| 6,669 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,677_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,692 | `householdsChart` | `function householdsChart(` |
| 6,760 | `lastChartAvg` | `var lastChartAvg =` |
| 6,761 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,846 | `GDP_NORM` | `var GDP_NORM =` |
| 6,852 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,853 | `gdpNowQ` | `var gdpNowQ =` |
| 6,854 | `gdpMeter` | `var gdpMeter =` |
| 6,857 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,879 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,945 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,009 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,017 | `velocityVerdict` | `function velocityVerdict(` |
| 7,025 | `derivePulseTag` | `function derivePulseTag(` |
| 7,031 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,091_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,100 | `seasonReading` | `var seasonReading =` |
| 7,149 | `frameworkRows` | `var frameworkRows =` |
| 7,159 | `vixRow` | `var vixRow =` |
| 7,167 | `vixWordOf` | `var vixWordOf =` |
| 7,171 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,186_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,190 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,199_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,200 | `calendarTodayY` | `var calendarTodayY =` |
| 7,231 | `vix3mClose` | `var vix3mClose =` |
| 7,232 | `fearCurve` | `function fearCurve(` |
| 7,239 | `curveVerdict` | `function curveVerdict(` |
| 7,246 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,251 | `valuationVerdict` | `function valuationVerdict(` |
| 7,269 | `sparkHtml` | `function sparkHtml(` |
| 7,288 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,294_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,307 | `modeBar` | `function modeBar(` |
| 7,322 | `pickerOpen` | `var pickerOpen =` |
| 7,326 | `cycleByName` | `function cycleByName(` |
| 7,330 | `openCycle` | `function openCycle(` |
| 7,336 | `cycleSlice` | `function cycleSlice(` |
| 7,345 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,353 | `cycleMonths` | `function cycleMonths(` |
| 7,372 | `histControls` | `function histControls(` |
| 7,386 | `cycLabel` | `function cycLabel(` |
| 7,402 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,411 | `cyclePicker` | `function cyclePicker(` |
| 7,430 | `rangeBar` | `function rangeBar(` |
| 7,442 | `trendOf` | `function trendOf(` |
| 7,487 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,497 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,518_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,519 | `yearOf` | `function yearOf(` |
| 7,520 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,521_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,551 | `totalStat` | `function totalStat(` |
| 7,557 | `atQuarter` | `function atQuarter(` |
| 7,558 | `atMonth` | `function atMonth(` |
| 7,559 | `cycleAverages` | `function cycleAverages(` |
| 7,566 | `ordinal` | `function ordinal(` |
| 7,567 | `hiCard` | `function hiCard(` |
| 7,578 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,592_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,599 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,615 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,622 | `moreRow` | `function moreRow(` |
| 7,628 | `powerPageNote` | `var powerPageNote =` |
| 7,629 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,635_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,638 | `xLabelOf` | `function xLabelOf(` |
| 7,658 | `fitGroup` | `function fitGroup(` |
| 7,680 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,739_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,763 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,773 | `vGrid` | `function vGrid(` |
| 7,798 | `COL_FILL` | `var COL_FILL =` |
| 7,831 | `colPath` | `function colPath(` |
| 7,836 | `colWidth` | `function colWidth(` |
| 7,883 | `AXIS` | `var AXIS =` |
| 7,884 | `chartAxes` | `function chartAxes(` |
| 7,938 | `divergeChart` | `function divergeChart(` |
| 7,999 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,028_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,036 | `maxIn` | `function maxIn(` |
| 8,054 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,068 | `PEEK_W` | `var PEEK_W =` |
| 8,071 | `PEEK_H` | `var PEEK_H =` |
| 8,076 | `colPeek` | `function colPeek(` |
| 8,103 | `meterPeek` | `function meterPeek(` |
| 8,120 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,125 | `pressureZone` | `function pressureZone(` |
| 8,140 | `HZN_BACK` | `var HZN_BACK =` |
| 8,141 | `hznLast` | `function hznLast(` |
| 8,142 | `hznBack` | `function hznBack(` |
| 8,143 | `horizonWord` | `function horizonWord(` |
| 8,168 | `HZN_METERS` | `var HZN_METERS =` |
| 8,176 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,200 | `_hznPanel` | `var _hznPanel =` |
| 8,201 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,221 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,222 | `levelZone` | `function levelZone(` |
| 8,234 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,239 | `RISK_RISK` | `var RISK_RISK =` |
| 8,244 | `riskCell` | `function riskCell(` |
| 8,245 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,276 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,301_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,322 | `pulseClipN` | `var pulseClipN =` |
| 8,323 | `beatPath` | `function beatPath(` |
| 8,348 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,362 | `pulsePeek` | `function pulsePeek(` |
| 8,370 | `pulseBlock` | `function pulseBlock(` |
| 8,390 | `CHEV` | `var CHEV =` |
| 8,392 | `peekCard` | `function peekCard(` |
| 8,446 | `dropSvg` | `function dropSvg(` |
| 8,458 | `volumeSvg` | `function volumeSvg(` |
| 8,465 | `gaugeSvg` | `function gaugeSvg(` |
| 8,469 | `diamondSvg` | `function diamondSvg(` |
| 8,483 | `energyFromReserve` | `function energyFromReserve(` |
| 8,495 | `sproutSvg` | `function sproutSvg(` |
| 8,506 | `markSvg` | `function markSvg(` |
| 8,510 | `flameSvg` | `function flameSvg(` |
| 8,514 | `gearSvg` | `function gearSvg(` |
| 8,526 | `thermoSvg` | `function thermoSvg(` |
| 8,545 | `trendUpSvg` | `function trendUpSvg(` |
| 8,547 | `ecgSvg` | `function ecgSvg(` |
| 8,561 | `circulationSvg` | `function circulationSvg(` |
| 8,562 | `weatherSvg` | `function weatherSvg(` |
| 8,583 | `moodSvg` | `function moodSvg(` |
| 8,607 | `boltSvg` | `function boltSvg(` |
| 8,610 | `houseSvg` | `function houseSvg(` |
| 8,618 | `sunriseSvg` | `function sunriseSvg(` |
| 8,628 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,640 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,657_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,678 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,679 | `dsrHistory` | `var dsrHistory =` |
| 8,680 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,681 | `savHistory` | `var savHistory =` |
| 8,686 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,696 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,697 | `dsrNow` | `var dsrNow =` |
| 8,698 | `savNow` | `var savNow =` |
| 8,699 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,704 | `householdsWord` | `function householdsWord(` |
| 8,711 | `householdsNow` | `var householdsNow =` |
| 8,718 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,719 | `dsrMeter` | `var dsrMeter =` |
| 8,722 | `savMeter` | `var savMeter =` |
| 8,725 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,742 | `savInfoHtml` | `function savInfoHtml(` |
| 8,760 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,769 | `curveNow` | `var curveNow =` |
| 8,770 | `curveTag` | `var curveTag =` |
| 8,771 | `curveSub` | `var curveSub =` |
| 8,775 | `curvePct` | `function curvePct(` |
| 8,776 | `curveNoteFull` | `var curveNoteFull =` |
| 8,791 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,799 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,840 | `marketCycles` | `var marketCycles =` |
| 8,870 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,872_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,893 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,894 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,899_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,920 | `slopeOf` | `function slopeOf(` |
| 8,931 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,937 | `readSeason` | `function readSeason(` |
| 8,962 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,964 | `qLabel` | `function qLabel(` |
| 8,988 | `regimeTrack` | `function regimeTrack(` |
| 9,011 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,013_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,020 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,021 | `seasonTitle` | `function seasonTitle(` |
| 9,022 | `monthLabel` | `function monthLabel(` |
| 9,023 | `cycleModel` | `function cycleModel(` |
| 9,075 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,083 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,090 | `nowModel` | `var nowModel =` |
| 9,091 | `readingNow` | `var readingNow =` |
| 9,092 | `cpiNow` | `var cpiNow =` |
| 9,093 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,094 | `currentSeason` | `var currentSeason =` |
| 9,095 | `seasonWhy` | `var seasonWhy =` |
| 9,112 | `seasonGroup` | `function seasonGroup(` |
| 9,126 | `arcGauge` | `function arcGauge(` |
| 9,168 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,181 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,183 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,187 | `policyFacts` | `function policyFacts(` |
| 9,199 | `allSources` | `var allSources =` |
| 9,223 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,256_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,259 | `SVG_NS` | `var SVG_NS =` |
| 9,260 | `svgEl` | `function svgEl(` |
| 9,273 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,309_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,310 | `clampPct` | `function clampPct(` |
| 9,317 | `infoIcon` | `function infoIcon(` |
| 9,326 | `detailTexts` | `var detailTexts =` |
| 9,344 | `detailSlots` | `var detailSlots =` |
| 9,345 | `detailSlot` | `function detailSlot(` |
| 9,356 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,360 | `_growthPanel` | `var _growthPanel =` |
| 9,361 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,367 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,378 | `facts` | `function facts(` |
| 9,379 | `factsFrom` | `function factsFrom(` |
| 9,383 | `expandBtn` | `function expandBtn(` |
| 9,389 | `sheetRenderers` | `var sheetRenderers =` |
| 9,406 | `pageMode` | `var pageMode =` |
| 9,413 | `pageCycles` | `var pageCycles =` |
| 9,418 | `pageRange` | `var pageRange =` |
| 9,424 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,458_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,469 | `meterHtml` | `function meterHtml(` |
| 9,497 | `srcHtml` | `function srcHtml(` |
| 9,506 | `TIMING` | `var TIMING =` |
| 9,512 | `timingMark` | `function timingMark(` |
| 9,526 | `timingPill` | `function timingPill(` |
| 9,547 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,555 | `seatPageFoot` | `function seatPageFoot(` |
| 9,578 | `timingMembers` | `var timingMembers =` |
| 9,579 | `registerTiming` | `function registerTiming(` |
| 9,585 | `headHtml` | `function headHtml(` |
| 9,603 | `heldHighlights` | `var heldHighlights =` |
| 9,604 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,662_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,663 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,062_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,063 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,286_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,287 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,319_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,325 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,409_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,410 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,428_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,431 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,454_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,455 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,521_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,524 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,722_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,734 | `totalRiseIn` | `function totalRiseIn(` |
| 10,744 | `eraInflation` | `function eraInflation(` |
| 10,755 | `eraGrowth` | `function eraGrowth(` |
| 10,771 | `fmtSigned` | `function fmtSigned(` |
| 10,776 | `regimeArrow` | `function regimeArrow(` |
| 10,782 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,783 | `growthShown` | `function growthShown(` |
| 10,784 | `growthShownCap` | `function growthShownCap(` |
| 10,785 | `regimeState` | `function regimeState(` |
| 10,789 | `phaseClass` | `function phaseClass(` |
| 10,791 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,803 | `cycleViewEl` | `var cycleViewEl =` |
| 10,807 | `tempCard` | `var tempCard =` |
| 10,808 | `placeCharts` | `function placeCharts(` |
| 10,813 | `shownEra` | `var shownEra =` |
| 10,814 | `calendarReset` | `var calendarReset =` |
| 10,815 | `metricPageReset` | `var metricPageReset =` |
| 10,816 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,819 | `topbarBack` | `var topbarBack =` |
| 10,820 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,827_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,828 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,989_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,990 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,008_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,011 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,032_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,038 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,041 | `hubSet` | `function hubSet(` |
| 11,054 | `quarterPopup` | `function quarterPopup(` |
| 11,087 | `hubShowDefault` | `function hubShowDefault(` |
| 11,096 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,102 | `hubShowYear` | `function hubShowYear(` |
| 11,117 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,209_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,212 | `tempState` | `var tempState =` |
| 11,215 | `chartLink` | `var chartLink =` |
| 11,235 | `m2Step` | `function m2Step(` |
| 11,238 | `heatStep` | `function heatStep(` |
| 11,242 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,429_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,432 | `drawGrowth` | `function drawGrowth(` |
| 11,571 | `wireResize` | `function wireResize(` |
| 11,577 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,589_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,590 | `renderCycleView` | `function renderCycleView(` |
| 11,643 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,654 | `PEER_CARET` | `var PEER_CARET =` |
| 11,655 | `peerList` | `function peerList(` |
| 11,656 | `peerChosen` | `function peerChosen(` |
| 11,657 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,661 | `renderPeerPills` | `function renderPeerPills(` |
| 11,711 | `shownEraModel` | `var shownEraModel =` |
| 11,712 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,714_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,716 | `stripGroupName` | `var stripGroupName =` |
| 11,717 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,763 | `marketStripHtml` | `function marketStripHtml(` |
| 11,826 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,827 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,857_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,858 | `renderCycleList` | `function renderCycleList(` |
| 11,948 | `renderSignsList` | `function renderSignsList(` |
| 12,224 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,473_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,474 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,536_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,537 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,570_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,571 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,977–3,980 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,149–8,162 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,971–8,984 | `seasonTrackAll` | The season, computed |
| 9,006–9,010 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,934 |
| `desire-range` | 9,987 |
| `hzn-range` | 10,358 |
| `pulse-range` | 9,938 |
| `sheet-marker-deficit` | 12,931 |
| `sheet-metric-gdp` | 12,815 |
| `sheet-metric-households` | 12,965 |
| `sheet-metric-power` | 12,894 |
| `sheet-metric-temp` | 12,765 |
| `sheet-metric-valuation` | 13,007 |
| `sheet-sign-activity` | 12,876 |
| `sheet-sign-desire` | 9,988 |
| `sheet-sign-horizon` | 10,359 |
| `sheet-sign-pulse` | 9,937 |
| `sheet-sign-volume` | 9,961 |
| `sheet-sign-yield` | 9,903 |
| `volume-range` | 9,962 |
| `ylm-range` | 9,905 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,940 |
| `desire-range` | 9,970 |
| `hzn-range` | 10,335 |
| `pulse-range` | 9,915 |
| `sheet-metric-gdp` | 12,816 |
| `sheet-metric-power` | 12,895 |
| `sheet-metric-temp` | 12,766 |
| `sheet-metric-valuation` | 13,008 |
| `volume-range` | 9,942 |
| `ylm-range` | 10,016 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,095 |
| `sheet-metric-gdp` | 6,096 |
| `sheet-sign-activity` | 6,103 |
| `sheet-metric-power` | 6,104 |
| `sheet-metric-valuation` | 6,106 |
| `sheet-metric-households` | 6,107 |
| `deficit-range` | 6,108 |
| `volume-range` | 6,109 |
| `pulse-range` | 6,110 |
| `hzn-range` | 6,111 |
| `ylm-range` | 6,126 |
| `desire-range` | 6,127 |

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

