# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,629 lines**, about 1115 KB, roughly **317 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `cd30c14` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,007 | the whole stylesheet, every token and rule |
| **Markup** | 3,008–3,730 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,731–13,576 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,577–13,629 | </body></html> |

Counts: **248** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,736_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,740 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,741 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,742 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,760 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,764 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,769_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,779 | `wheelMeta` | `var wheelMeta =` |
| 3,790 | `seasonOverride` | `var seasonOverride =` |
| 3,793 | `cycleNowNote` | `var cycleNowNote =` |
| 3,802 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,888 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,933 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,946_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,963 | `LIVE` | `function LIVE(` |
| 3,990 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,998 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,999 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,002_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,033 | `repaintFigureText` | `function repaintFigureText(` |
| 4,041 | `repaintTag` | `function repaintTag(` |
| 4,051 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,076 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,084 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,092 | `REPAINT` | `var REPAINT =` |
| 4,109 | `liveAsOf` | `var liveAsOf =` |
| 4,110 | `fmtAsOf` | `function fmtAsOf(` |
| 4,115 | `applyLive` | `function applyLive(` |
| 4,191 | `repaintPolicy` | `function repaintPolicy(` |
| 4,241 | `GYN` | `var GYN =` |
| 4,261 | `refreshLiveData` | `function refreshLiveData(` |
| 4,302 | `fetchSiteData` | `function fetchSiteData(` |
| 4,332 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,346_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,347 | `yieldCurve` | `var yieldCurve =` |
| 4,360 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,384 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,396 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,424_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,429 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,453 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,477 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,501 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,528 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,553_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,562 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,572 | `uninvLagToday` | `var uninvLagToday =` |
| 4,584 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,597 | `gdpPeers` | `var gdpPeers =` |
| 4,638 | `gdpSrc` | `var gdpSrc =` |
| 4,639 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,644 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,657 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,695_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,717 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,727_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,743 | `stressScoreFor` | `function stressScoreFor(` |
| 4,749 | `stressScore` | `var stressScore =` |
| 4,755 | `powerOf` | `var powerOf =` |
| 4,756 | `powerScore` | `var powerScore =` |
| 4,773 | `stressHistory` | `var stressHistory =` |
| 4,784 | `powerMeter` | `var powerMeter =` |
| 4,786 | `stressNoteFull` | `var stressNoteFull =` |
| 4,818 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,820_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,843 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,844 | `deficitHistory` | `var deficitHistory =` |
| 4,847 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,854 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,856 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,899_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,912 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,925_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,939 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,942 | `timelineSpan` | `function timelineSpan(` |
| 4,948 | `timelineFor` | `function timelineFor(` |
| 4,961 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,967_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,973 | `windowScale` | `function windowScale(` |
| 4,989 | `windowYears` | `function windowYears(` |
| 5,007 | `refName` | `function refName(` |
| 5,014 | `histReadEnsure` | `function histReadEnsure(` |
| 5,053 | `seatBandReading` | `function seatBandReading(` |
| 5,076 | `histReadFill` | `function histReadFill(` |
| 5,204 | `histAxisEnds` | `function histAxisEnds(` |
| 5,215 | `histLegend` | `function histLegend(` |
| 5,303 | `refitHistory` | `function refitHistory(` |
| 5,315 | `wireHistHover` | `function wireHistHover(` |
| 5,374 | `mWindowFrom` | `function mWindowFrom(` |
| 5,379 | `qWindowFrom` | `function qWindowFrom(` |
| 5,384 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,385 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,387 | `DEF_1983` | `var DEF_1983 =` |
| 5,389 | `defFrom` | `function defFrom(` |
| 5,400 | `deficitChart` | `function deficitChart(` |
| 5,490 | `deficitBlock` | `function deficitBlock(` |
| 5,552 | `buffettHistory` | `var buffettHistory =` |
| 5,582 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,583 | `hyDates` | `var hyDates =` |
| 5,584 | `hyOas` | `var hyOas =` |
| 5,585 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,592 | `hyAt` | `function hyAt(` |
| 5,596 | `hyLabel` | `function hyLabel(` |
| 5,597 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,598 | `hyNum` | `function hyNum(` |
| 5,599 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,609 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,619 | `capeHistory` | `var capeHistory =` |
| 5,621 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,639_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,645 | `sentiment` | `var sentiment =` |
| 5,663 | `valuation` | `var valuation =` |
| 5,700 | `valRow` | `function valRow(` |
| 5,708 | `coincident` | `var coincident =` |
| 5,769 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,787 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,788 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,789 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,791_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,804 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,805 | `m2vHistory` | `var m2vHistory =` |
| 5,825 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,918 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,008 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,009 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,049_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,055 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,056 | `DOTS` | `var DOTS =` |
| 6,058 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,083 | `histHead` | `function histHead(` |
| 6,104 | `headNoteIdx` | `var headNoteIdx =` |
| 6,105 | `headMenuHtml` | `function headMenuHtml(` |
| 6,125 | `headMenuFor` | `var headMenuFor =` |
| 6,126 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,152 | `nameWithMark` | `function nameWithMark(` |
| 6,158 | `panelRow` | `function panelRow(` |
| 6,184 | `panelFromMeter` | `function panelFromMeter(` |
| 6,198 | `meterFlagged` | `function meterFlagged(` |
| 6,209 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,237 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,251 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,270 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,289 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,303 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,328 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,359 | `desireBlock` | `function desireBlock(` |
| 6,386 | `volumeBlock` | `function volumeBlock(` |
| 6,411 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,434 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,442_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,455 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,456 | `m2Level` | `var m2Level =` |
| 6,478 | `m2Yoy` | `var m2Yoy =` |
| 6,479 | `M2_NORM` | `var M2_NORM =` |
| 6,484 | `volumeVerdict` | `function volumeVerdict(` |
| 6,521 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,522 | `unempHistory` | `var unempHistory =` |
| 6,528 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,543 | `NROU_NOW` | `var NROU_NOW =` |
| 6,544 | `unempState` | `function unempState(` |
| 6,550 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,615 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,616 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,619 | `qAtIndex` | `function qAtIndex(` |
| 6,620 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,628_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,643 | `householdsChart` | `function householdsChart(` |
| 6,711 | `lastChartAvg` | `var lastChartAvg =` |
| 6,712 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,797 | `GDP_NORM` | `var GDP_NORM =` |
| 6,803 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,804 | `gdpNowQ` | `var gdpNowQ =` |
| 6,805 | `gdpMeter` | `var gdpMeter =` |
| 6,808 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,830 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,896 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,960 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,968 | `velocityVerdict` | `function velocityVerdict(` |
| 6,976 | `derivePulseTag` | `function derivePulseTag(` |
| 6,982 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,042_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,051 | `seasonReading` | `var seasonReading =` |
| 7,100 | `frameworkRows` | `var frameworkRows =` |
| 7,110 | `vixRow` | `var vixRow =` |
| 7,118 | `vixWordOf` | `var vixWordOf =` |
| 7,122 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,137_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,141 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,150_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,151 | `calendarTodayY` | `var calendarTodayY =` |
| 7,182 | `vix3mClose` | `var vix3mClose =` |
| 7,183 | `fearCurve` | `function fearCurve(` |
| 7,190 | `curveVerdict` | `function curveVerdict(` |
| 7,197 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,202 | `valuationVerdict` | `function valuationVerdict(` |
| 7,220 | `sparkHtml` | `function sparkHtml(` |
| 7,239 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,245_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,258 | `modeBar` | `function modeBar(` |
| 7,273 | `pickerOpen` | `var pickerOpen =` |
| 7,277 | `cycleByName` | `function cycleByName(` |
| 7,281 | `openCycle` | `function openCycle(` |
| 7,287 | `cycleSlice` | `function cycleSlice(` |
| 7,296 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,304 | `cycleMonths` | `function cycleMonths(` |
| 7,323 | `histControls` | `function histControls(` |
| 7,337 | `cycLabel` | `function cycLabel(` |
| 7,353 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,362 | `cyclePicker` | `function cyclePicker(` |
| 7,386 | `seriesBar` | `function seriesBar(` |
| 7,393 | `rangeBar` | `function rangeBar(` |
| 7,405 | `trendOf` | `function trendOf(` |
| 7,450 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,460 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,481_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,482 | `yearOf` | `function yearOf(` |
| 7,483 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,484_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,514 | `totalStat` | `function totalStat(` |
| 7,520 | `atQuarter` | `function atQuarter(` |
| 7,521 | `atMonth` | `function atMonth(` |
| 7,522 | `cycleAverages` | `function cycleAverages(` |
| 7,529 | `ordinal` | `function ordinal(` |
| 7,530 | `hiCard` | `function hiCard(` |
| 7,541 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,555_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,562 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,578 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,585 | `moreRow` | `function moreRow(` |
| 7,591 | `powerPageNote` | `var powerPageNote =` |
| 7,592 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,598_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,601 | `xLabelOf` | `function xLabelOf(` |
| 7,621 | `fitGroup` | `function fitGroup(` |
| 7,643 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,702_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,726 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,736 | `vGrid` | `function vGrid(` |
| 7,761 | `COL_FILL` | `var COL_FILL =` |
| 7,794 | `colPath` | `function colPath(` |
| 7,799 | `colWidth` | `function colWidth(` |
| 7,846 | `AXIS` | `var AXIS =` |
| 7,847 | `chartAxes` | `function chartAxes(` |
| 7,901 | `divergeChart` | `function divergeChart(` |
| 7,962 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,991_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,999 | `maxIn` | `function maxIn(` |
| 8,012 | `reserveGauge` | `function reserveGauge(` |
| 8,033 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,047 | `PEEK_W` | `var PEEK_W =` |
| 8,050 | `PEEK_H` | `var PEEK_H =` |
| 8,051 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 8,056 | `colPeek` | `function colPeek(` |
| 8,083 | `meterPeek` | `function meterPeek(` |
| 8,100 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,105 | `pressureZone` | `function pressureZone(` |
| 8,120 | `HZN_BACK` | `var HZN_BACK =` |
| 8,121 | `hznLast` | `function hznLast(` |
| 8,122 | `hznBack` | `function hznBack(` |
| 8,123 | `horizonWord` | `function horizonWord(` |
| 8,148 | `HZN_METERS` | `var HZN_METERS =` |
| 8,156 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,180 | `_hznPanel` | `var _hznPanel =` |
| 8,181 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,201 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,202 | `levelZone` | `function levelZone(` |
| 8,214 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,219 | `RISK_RISK` | `var RISK_RISK =` |
| 8,224 | `riskCell` | `function riskCell(` |
| 8,225 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,256 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,281_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,300 | `pulseClipN` | `var pulseClipN =` |
| 8,301 | `beatPath` | `function beatPath(` |
| 8,326 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,340 | `pulsePeek` | `function pulsePeek(` |
| 8,348 | `pulseBlock` | `function pulseBlock(` |
| 8,368 | `CHEV` | `var CHEV =` |
| 8,370 | `peekCard` | `function peekCard(` |
| 8,421 | `dropSvg` | `function dropSvg(` |
| 8,429 | `speakerSvg` | `function speakerSvg(` |
| 8,437 | `gaugeSvg` | `function gaugeSvg(` |
| 8,441 | `diamondSvg` | `function diamondSvg(` |
| 8,453 | `energyFromReserve` | `function energyFromReserve(` |
| 8,465 | `sproutSvg` | `function sproutSvg(` |
| 8,476 | `markSvg` | `function markSvg(` |
| 8,480 | `flameSvg` | `function flameSvg(` |
| 8,484 | `gearSvg` | `function gearSvg(` |
| 8,497 | `pulseSvg` | `function pulseSvg(` |
| 8,501 | `thermoSvg` | `function thermoSvg(` |
| 8,520 | `trendUpSvg` | `function trendUpSvg(` |
| 8,522 | `ecgSvg` | `function ecgSvg(` |
| 8,536 | `circulationSvg` | `function circulationSvg(` |
| 8,537 | `weatherSvg` | `function weatherSvg(` |
| 8,558 | `moodSvg` | `function moodSvg(` |
| 8,575 | `boltSvg` | `function boltSvg(` |
| 8,578 | `houseSvg` | `function houseSvg(` |
| 8,586 | `sunriseSvg` | `function sunriseSvg(` |
| 8,596 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,608 | `signMarks` | `var signMarks =` |
| 8,615 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,632_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,653 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,654 | `dsrHistory` | `var dsrHistory =` |
| 8,655 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,656 | `savHistory` | `var savHistory =` |
| 8,661 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,671 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,672 | `dsrNow` | `var dsrNow =` |
| 8,673 | `savNow` | `var savNow =` |
| 8,674 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,679 | `householdsWord` | `function householdsWord(` |
| 8,686 | `householdsNow` | `var householdsNow =` |
| 8,693 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,694 | `dsrMeter` | `var dsrMeter =` |
| 8,697 | `savMeter` | `var savMeter =` |
| 8,700 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,717 | `savInfoHtml` | `function savInfoHtml(` |
| 8,735 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,744 | `curveNow` | `var curveNow =` |
| 8,745 | `curveTag` | `var curveTag =` |
| 8,746 | `curveSub` | `var curveSub =` |
| 8,750 | `curvePct` | `function curvePct(` |
| 8,751 | `curveNoteFull` | `var curveNoteFull =` |
| 8,766 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,774 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,815 | `marketCycles` | `var marketCycles =` |
| 8,845 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,847_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,868 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,869 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,874_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,895 | `slopeOf` | `function slopeOf(` |
| 8,906 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,912 | `readSeason` | `function readSeason(` |
| 8,937 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,939 | `qLabel` | `function qLabel(` |
| 8,963 | `regimeTrack` | `function regimeTrack(` |
| 8,986 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,988_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,995 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,996 | `seasonTitle` | `function seasonTitle(` |
| 8,997 | `monthLabel` | `function monthLabel(` |
| 8,998 | `cycleModel` | `function cycleModel(` |
| 9,050 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,058 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,065 | `nowModel` | `var nowModel =` |
| 9,066 | `readingNow` | `var readingNow =` |
| 9,067 | `cpiNow` | `var cpiNow =` |
| 9,068 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,069 | `currentSeason` | `var currentSeason =` |
| 9,070 | `seasonWhy` | `var seasonWhy =` |
| 9,087 | `seasonGroup` | `function seasonGroup(` |
| 9,101 | `arcGauge` | `function arcGauge(` |
| 9,140 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,153 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,155 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,159 | `policyFacts` | `function policyFacts(` |
| 9,171 | `allSources` | `var allSources =` |
| 9,195 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,228_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,231 | `SVG_NS` | `var SVG_NS =` |
| 9,232 | `svgEl` | `function svgEl(` |
| 9,245 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,281_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,282 | `clampPct` | `function clampPct(` |
| 9,289 | `infoIcon` | `function infoIcon(` |
| 9,298 | `detailTexts` | `var detailTexts =` |
| 9,316 | `detailSlots` | `var detailSlots =` |
| 9,317 | `detailSlot` | `function detailSlot(` |
| 9,328 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,332 | `_growthPanel` | `var _growthPanel =` |
| 9,333 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,339 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,350 | `facts` | `function facts(` |
| 9,351 | `factsFrom` | `function factsFrom(` |
| 9,355 | `expandBtn` | `function expandBtn(` |
| 9,361 | `sheetRenderers` | `var sheetRenderers =` |
| 9,378 | `pageMode` | `var pageMode =` |
| 9,385 | `pageCycles` | `var pageCycles =` |
| 9,390 | `pageRange` | `var pageRange =` |
| 9,396 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,430_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,441 | `meterHtml` | `function meterHtml(` |
| 9,469 | `srcHtml` | `function srcHtml(` |
| 9,478 | `TIMING` | `var TIMING =` |
| 9,484 | `timingMark` | `function timingMark(` |
| 9,498 | `timingPill` | `function timingPill(` |
| 9,519 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,527 | `seatPageFoot` | `function seatPageFoot(` |
| 9,550 | `timingMembers` | `var timingMembers =` |
| 9,551 | `registerTiming` | `function registerTiming(` |
| 9,557 | `headHtml` | `function headHtml(` |
| 9,575 | `heldHighlights` | `var heldHighlights =` |
| 9,576 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,634_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,635 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,008_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,009 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,232_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,233 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,265_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,271 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,355_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,356 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,374_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,377 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,400_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,401 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,452_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,455 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,648_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,660 | `totalRiseIn` | `function totalRiseIn(` |
| 10,670 | `eraInflation` | `function eraInflation(` |
| 10,681 | `eraGrowth` | `function eraGrowth(` |
| 10,697 | `fmtSigned` | `function fmtSigned(` |
| 10,702 | `regimeArrow` | `function regimeArrow(` |
| 10,708 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,709 | `growthShown` | `function growthShown(` |
| 10,710 | `growthShownCap` | `function growthShownCap(` |
| 10,711 | `regimeState` | `function regimeState(` |
| 10,715 | `phaseClass` | `function phaseClass(` |
| 10,717 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,729 | `cycleViewEl` | `var cycleViewEl =` |
| 10,733 | `tempCard` | `var tempCard =` |
| 10,734 | `placeCharts` | `function placeCharts(` |
| 10,739 | `shownEra` | `var shownEra =` |
| 10,740 | `calendarReset` | `var calendarReset =` |
| 10,741 | `metricPageReset` | `var metricPageReset =` |
| 10,742 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,745 | `topbarBack` | `var topbarBack =` |
| 10,746 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,753_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,754 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,915_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,916 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,934_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,937 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,958_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,964 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,967 | `hubSet` | `function hubSet(` |
| 10,980 | `quarterPopup` | `function quarterPopup(` |
| 11,013 | `hubShowDefault` | `function hubShowDefault(` |
| 11,022 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,028 | `hubShowYear` | `function hubShowYear(` |
| 11,043 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,135_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,138 | `tempState` | `var tempState =` |
| 11,141 | `chartLink` | `var chartLink =` |
| 11,161 | `m2Step` | `function m2Step(` |
| 11,164 | `heatStep` | `function heatStep(` |
| 11,168 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,355_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,358 | `drawGrowth` | `function drawGrowth(` |
| 11,497 | `wireResize` | `function wireResize(` |
| 11,503 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,515_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,516 | `renderCycleView` | `function renderCycleView(` |
| 11,569 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,580 | `PEER_CARET` | `var PEER_CARET =` |
| 11,581 | `peerList` | `function peerList(` |
| 11,582 | `peerChosen` | `function peerChosen(` |
| 11,583 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,587 | `renderPeerPills` | `function renderPeerPills(` |
| 11,637 | `shownEraModel` | `var shownEraModel =` |
| 11,638 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,640_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,642 | `stripGroupName` | `var stripGroupName =` |
| 11,643 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,689 | `marketStripHtml` | `function marketStripHtml(` |
| 11,752 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,753 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,783_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,784 | `renderCycleList` | `function renderCycleList(` |
| 11,874 | `renderSignsList` | `function renderSignsList(` |
| 12,130 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,375_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,376 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,438_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,439 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,472_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,473 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,959–3,962 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,129–8,142 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,946–8,959 | `seasonTrackAll` | The season, computed |
| 8,981–8,985 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,840 |
| `desire-range` | 9,954 |
| `hzn-range` | 10,304 |
| `pulse-range` | 9,905 |
| `sheet-marker-deficit` | 12,837 |
| `sheet-metric-gdp` | 12,721 |
| `sheet-metric-households` | 12,871 |
| `sheet-metric-power` | 12,800 |
| `sheet-metric-temp` | 12,671 |
| `sheet-metric-valuation` | 12,913 |
| `sheet-sign-activity` | 12,782 |
| `sheet-sign-desire` | 9,955 |
| `sheet-sign-horizon` | 10,305 |
| `sheet-sign-pulse` | 9,904 |
| `sheet-sign-volume` | 9,928 |
| `sheet-sign-yield` | 9,872 |
| `volume-range` | 9,929 |
| `ylm-range` | 10,000 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,846 |
| `desire-range` | 9,937 |
| `hzn-range` | 10,281 |
| `pulse-range` | 9,882 |
| `sheet-metric-gdp` | 12,722 |
| `sheet-metric-power` | 12,801 |
| `sheet-metric-temp` | 12,672 |
| `sheet-metric-valuation` | 12,914 |
| `volume-range` | 9,909 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,059 |
| `sheet-metric-gdp` | 6,060 |
| `sheet-sign-activity` | 6,061 |
| `sheet-metric-power` | 6,062 |
| `sheet-metric-valuation` | 6,064 |
| `sheet-metric-households` | 6,065 |
| `deficit-range` | 6,066 |
| `volume-range` | 6,067 |
| `pulse-range` | 6,068 |
| `hzn-range` | 6,069 |
| `ylm-range` | 6,080 |
| `desire-range` | 6,081 |

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
| 1,937 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,402 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,450 | hero: yield curve |
| 2,546 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,625 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,724 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,749 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,764 | long cycle (structural layer) |
| 2,805 | indicator grid |
| 2,848 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,865 | info icon + popover (progressive disclosure for longer notes) |
| 2,886 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,981 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (146), which is what the renderers fill:

| Line | id |
|---|---|
| 3,013 | `topbar-back` |
| 3,016 | `topbar-title` |
| 3,017 | `menu-btn` |
| 3,034 | `main` |
| 3,041 | `cycle-view` |
| 3,049 | `cycle-kicker` |
| 3,055 | `cycle-dial` |
| 3,057 | `season-wheel-hub-date` |
| 3,058 | `season-wheel-hub-theme` |
| 3,059 | `season-wheel-hub-detail` |
| 3,067 | `temp-card` |
| 3,069 | `temp-kicker` |
| 3,070 | `temp-sub` |
| 3,073 | `temp-svg` |
| 3,074 | `temp-tooltip` |
| 3,080 | `temp-stats` |
| 3,087 | `growth-card` |
| 3,090 | `growth-kicker` |
| 3,090 | `growth-phase` |
| 3,090 | `growth-sub` |
| 3,090 | `growth-peers` |
| 3,091 | `growth-svg` |
| 3,091 | `growth-tooltip` |
| 3,096 | `growth-stats` |
| 3,105 | `today-analysis` |
| 3,109 | `peek-row` |
| 3,113 | `sheet-metric-temp` |
| 3,114 | `temp-timing` |
| 3,115 | `temp-chart` |
| 3,117 | `temp-rangebar` |
| 3,119 | `temp-head` |
| 3,120 | `slot-temp` |
| 3,121 | `temp-history` |
| 3,122 | `temp-hist-tooltip` |
| 3,125 | `temp-trend` |
| 3,128 | `temp-panel` |
| 3,130 | `temp-highlights` |
| 3,133 | `sheet-metric-gdp` |
| 3,134 | `gdp-timing` |
| 3,135 | `gdp-chart` |
| 3,136 | `gdp-rangebar` |
| 3,138 | `gdp-head` |
| 3,139 | `slot-growth` |
| 3,140 | `gdp-history` |
| 3,141 | `gdp-hist-tooltip` |
| 3,142 | `gdp-yoy` |
| 3,152 | `gdp-trend` |
| 3,154 | `gdp-panel` |
| 3,159 | `subj-ring-gdp` |
| 3,161 | `subj-label-gdp` |
| 3,162 | `subj-value-gdp` |
| 3,163 | `subj-say-gdp` |
| 3,164 | `subj-spark-gdp` |
| 3,169 | `subj-ctx-gdp` |
| 3,172 | `gdp-highlights` |
| 3,180 | `sheet-metric-power` |
| 3,181 | `power-timing` |
| 3,182 | `power-head` |
| 3,183 | `power-chart` |
| 3,187 | `subj-ring-resilience` |
| 3,190 | `subj-value-resilience` |
| 3,191 | `subj-say-resilience` |
| 3,196 | `subj-ctx-resilience` |
| 3,200 | `longcycle-title` |
| 3,202 | `longcycle-tag` |
| 3,216 | `power-highlights` |
| 3,223 | `sheet-marker-deficit` |
| 3,229 | `sheet-metric-households` |
| 3,230 | `households-timing` |
| 3,231 | `households-chart` |
| 3,232 | `households-highlights` |
| 3,236 | `sheet-metric-valuation` |
| 3,237 | `valuation-timing` |
| 3,238 | `valuation-head` |
| 3,239 | `valuation-chart` |
| 3,243 | `subj-ring-valuation` |
| 3,246 | `subj-value-valuation` |
| 3,247 | `subj-say-valuation` |
| 3,252 | `subj-ctx-valuation` |
| 3,256 | `valuation-title` |
| 3,258 | `valuation-tag` |
| 3,265 | `valuation-highlights` |
| 3,271 | `subj-ring-yield` |
| 3,274 | `subj-value-yield` |
| 3,275 | `subj-say-yield` |
| 3,276 | `subj-spark-yield` |
| 3,307 | `ylm-series` |
| 3,312 | `ylm-head` |
| 3,313 | `ylm-shell` |
| 3,314 | `ylm-svg` |
| 3,315 | `ylm-tooltip` |
| 3,318 | `ylm-trend` |
| 3,321 | `pressure-insights` |
| 3,322 | `pressure-highlights` |
| 3,348 | `subj-value-horizon` |
| 3,349 | `subj-say-horizon` |
| 3,350 | `subj-spark-horizon` |
| 3,360 | `hzn-timeline` |
| 3,362 | `hzn-head` |
| 3,363 | `spread-history-shell` |
| 3,364 | `spread-history-svg` |
| 3,365 | `spread-history-tooltip` |
| 3,368 | `hzn-trend` |
| 3,370 | `hzn-panel` |
| 3,372 | `horizon-insights` |
| 3,373 | `horizon-highlights` |
| 3,380 | `subj-ring-sentiment` |
| 3,383 | `subj-value-sentiment` |
| 3,384 | `subj-say-sentiment` |
| 3,385 | `subj-spark-sentiment` |
| 3,397 | `curve-gauge` |
| 3,398 | `curve-vix` |
| 3,399 | `curve-highlights` |
| 3,413 | `signs-list` |
| 3,424 | `calendar-list` |
| 3,429 | `indicators-peek` |
| 3,475 | `cycle-list` |
| 3,481 | `cycle-more` |
| 3,482 | `cycle-more-label` |
| 3,491 | `calendar-cycle` |
| 3,492 | `calendar-cycle-slot` |
| 3,543 | `seasons-kicker` |
| 3,544 | `seasons-rows` |
| 3,548 | `framework-kicker` |
| 3,550 | `framework-rows` |
| 3,557 | `more-menu` |
| 3,560 | `menu-back` |
| 3,574 | `sources-open` |
| 3,582 | `appearance-current` |
| 3,590 | `sheet-howto` |
| 3,634 | `sheet-book` |
| 3,666 | `sheet-appearance` |
| 3,674 | `theme-toggle` |
| 3,681 | `sheet-contact` |
| 3,690 | `contact-form` |
| 3,691 | `contact-title` |
| 3,692 | `contact-message` |
| 3,694 | `contact-hint` |
| 3,695 | `contact-send` |
| 3,704 | `sheet-sources` |
| 3,707 | `sources-back` |
| 3,714 | `asof-text` |
| 3,715 | `sources-groups` |
| 3,722 | `detail-backdrop` |
| 3,724 | `detail-modal-close` |
| 3,725 | `detail-modal-body` |

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

