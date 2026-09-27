# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,696 lines**, about 1122 KB, roughly **319 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `4891254` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,051 | the whole stylesheet, every token and rule |
| **Markup** | 3,052–3,773 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,774–13,643 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,644–13,696 | </body></html> |

Counts: **247** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,779_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,783 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,784 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,785 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,803 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,807 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,812_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,822 | `wheelMeta` | `var wheelMeta =` |
| 3,833 | `seasonOverride` | `var seasonOverride =` |
| 3,836 | `cycleNowNote` | `var cycleNowNote =` |
| 3,845 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,931 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,976 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,989_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,006 | `LIVE` | `function LIVE(` |
| 4,033 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,041 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,042 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,045_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,076 | `repaintFigureText` | `function repaintFigureText(` |
| 4,084 | `repaintTag` | `function repaintTag(` |
| 4,094 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,119 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,127 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,135 | `REPAINT` | `var REPAINT =` |
| 4,152 | `liveAsOf` | `var liveAsOf =` |
| 4,153 | `fmtAsOf` | `function fmtAsOf(` |
| 4,158 | `applyLive` | `function applyLive(` |
| 4,234 | `repaintPolicy` | `function repaintPolicy(` |
| 4,284 | `GYN` | `var GYN =` |
| 4,304 | `refreshLiveData` | `function refreshLiveData(` |
| 4,345 | `fetchSiteData` | `function fetchSiteData(` |
| 4,375 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,389_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,390 | `yieldCurve` | `var yieldCurve =` |
| 4,403 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,427 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,439 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,467_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,472 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,496 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,520 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,544 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,571 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,596_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,605 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,615 | `uninvLagToday` | `var uninvLagToday =` |
| 4,627 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,640 | `gdpPeers` | `var gdpPeers =` |
| 4,681 | `gdpSrc` | `var gdpSrc =` |
| 4,682 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,687 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,700 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,738_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,760 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,770_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,786 | `stressScoreFor` | `function stressScoreFor(` |
| 4,792 | `stressScore` | `var stressScore =` |
| 4,798 | `powerOf` | `var powerOf =` |
| 4,799 | `powerScore` | `var powerScore =` |
| 4,816 | `stressHistory` | `var stressHistory =` |
| 4,827 | `powerMeter` | `var powerMeter =` |
| 4,829 | `stressNoteFull` | `var stressNoteFull =` |
| 4,861 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,863_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,886 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,887 | `deficitHistory` | `var deficitHistory =` |
| 4,890 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,897 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,899 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,942_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,955 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,968_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,982 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,985 | `timelineSpan` | `function timelineSpan(` |
| 4,991 | `timelineFor` | `function timelineFor(` |
| 5,004 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,010_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,016 | `windowScale` | `function windowScale(` |
| 5,032 | `windowYears` | `function windowYears(` |
| 5,050 | `refName` | `function refName(` |
| 5,057 | `histReadEnsure` | `function histReadEnsure(` |
| 5,096 | `seatBandReading` | `function seatBandReading(` |
| 5,119 | `histReadFill` | `function histReadFill(` |
| 5,247 | `histAxisEnds` | `function histAxisEnds(` |
| 5,258 | `histLegend` | `function histLegend(` |
| 5,346 | `refitHistory` | `function refitHistory(` |
| 5,358 | `wireHistHover` | `function wireHistHover(` |
| 5,417 | `mWindowFrom` | `function mWindowFrom(` |
| 5,422 | `qWindowFrom` | `function qWindowFrom(` |
| 5,427 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,428 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,430 | `DEF_1983` | `var DEF_1983 =` |
| 5,432 | `defFrom` | `function defFrom(` |
| 5,443 | `deficitChart` | `function deficitChart(` |
| 5,533 | `deficitBlock` | `function deficitBlock(` |
| 5,595 | `buffettHistory` | `var buffettHistory =` |
| 5,625 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,626 | `hyDates` | `var hyDates =` |
| 5,627 | `hyOas` | `var hyOas =` |
| 5,628 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,635 | `hyAt` | `function hyAt(` |
| 5,639 | `hyLabel` | `function hyLabel(` |
| 5,640 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,641 | `hyNum` | `function hyNum(` |
| 5,642 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,652 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,662 | `capeHistory` | `var capeHistory =` |
| 5,664 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,682_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,688 | `sentiment` | `var sentiment =` |
| 5,706 | `valuation` | `var valuation =` |
| 5,743 | `valRow` | `function valRow(` |
| 5,751 | `coincident` | `var coincident =` |
| 5,812 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,830 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,831 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,832 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,834_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,847 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,848 | `m2vHistory` | `var m2vHistory =` |
| 5,868 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,961 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,051 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,052 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,092_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,098 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,099 | `DOTS` | `var DOTS =` |
| 6,101 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,126 | `histHead` | `function histHead(` |
| 6,147 | `headNoteIdx` | `var headNoteIdx =` |
| 6,148 | `headMenuHtml` | `function headMenuHtml(` |
| 6,168 | `headMenuFor` | `var headMenuFor =` |
| 6,169 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,195 | `nameWithMark` | `function nameWithMark(` |
| 6,201 | `panelRow` | `function panelRow(` |
| 6,227 | `panelFromMeter` | `function panelFromMeter(` |
| 6,241 | `meterFlagged` | `function meterFlagged(` |
| 6,252 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,280 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,294 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,313 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,332 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,346 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,371 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,402 | `desireBlock` | `function desireBlock(` |
| 6,429 | `volumeBlock` | `function volumeBlock(` |
| 6,454 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,477 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,485_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,498 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,499 | `m2Level` | `var m2Level =` |
| 6,521 | `m2Yoy` | `var m2Yoy =` |
| 6,522 | `M2_NORM` | `var M2_NORM =` |
| 6,527 | `volumeVerdict` | `function volumeVerdict(` |
| 6,564 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,565 | `unempHistory` | `var unempHistory =` |
| 6,571 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,586 | `NROU_NOW` | `var NROU_NOW =` |
| 6,587 | `unempState` | `function unempState(` |
| 6,593 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,658 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,659 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,662 | `qAtIndex` | `function qAtIndex(` |
| 6,663 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,671_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,686 | `householdsChart` | `function householdsChart(` |
| 6,754 | `lastChartAvg` | `var lastChartAvg =` |
| 6,755 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,840 | `GDP_NORM` | `var GDP_NORM =` |
| 6,846 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,847 | `gdpNowQ` | `var gdpNowQ =` |
| 6,848 | `gdpMeter` | `var gdpMeter =` |
| 6,851 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,873 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,939 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,003 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,011 | `velocityVerdict` | `function velocityVerdict(` |
| 7,019 | `derivePulseTag` | `function derivePulseTag(` |
| 7,025 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,085_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,094 | `seasonReading` | `var seasonReading =` |
| 7,143 | `frameworkRows` | `var frameworkRows =` |
| 7,153 | `vixRow` | `var vixRow =` |
| 7,161 | `vixWordOf` | `var vixWordOf =` |
| 7,165 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,180_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,184 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,193_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,194 | `calendarTodayY` | `var calendarTodayY =` |
| 7,225 | `vix3mClose` | `var vix3mClose =` |
| 7,226 | `fearCurve` | `function fearCurve(` |
| 7,233 | `curveVerdict` | `function curveVerdict(` |
| 7,240 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,245 | `valuationVerdict` | `function valuationVerdict(` |
| 7,263 | `sparkHtml` | `function sparkHtml(` |
| 7,282 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,288_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,301 | `modeBar` | `function modeBar(` |
| 7,316 | `pickerOpen` | `var pickerOpen =` |
| 7,320 | `cycleByName` | `function cycleByName(` |
| 7,324 | `openCycle` | `function openCycle(` |
| 7,330 | `cycleSlice` | `function cycleSlice(` |
| 7,339 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,347 | `cycleMonths` | `function cycleMonths(` |
| 7,366 | `histControls` | `function histControls(` |
| 7,380 | `cycLabel` | `function cycLabel(` |
| 7,396 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,405 | `cyclePicker` | `function cyclePicker(` |
| 7,429 | `seriesBar` | `function seriesBar(` |
| 7,436 | `rangeBar` | `function rangeBar(` |
| 7,448 | `trendOf` | `function trendOf(` |
| 7,493 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,503 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,524_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,525 | `yearOf` | `function yearOf(` |
| 7,526 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,527_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,557 | `totalStat` | `function totalStat(` |
| 7,563 | `atQuarter` | `function atQuarter(` |
| 7,564 | `atMonth` | `function atMonth(` |
| 7,565 | `cycleAverages` | `function cycleAverages(` |
| 7,572 | `ordinal` | `function ordinal(` |
| 7,573 | `hiCard` | `function hiCard(` |
| 7,584 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,598_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,605 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,621 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,628 | `moreRow` | `function moreRow(` |
| 7,634 | `powerPageNote` | `var powerPageNote =` |
| 7,635 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,641_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,644 | `xLabelOf` | `function xLabelOf(` |
| 7,664 | `fitGroup` | `function fitGroup(` |
| 7,686 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,745_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,769 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,779 | `vGrid` | `function vGrid(` |
| 7,804 | `COL_FILL` | `var COL_FILL =` |
| 7,837 | `colPath` | `function colPath(` |
| 7,842 | `colWidth` | `function colWidth(` |
| 7,889 | `AXIS` | `var AXIS =` |
| 7,890 | `chartAxes` | `function chartAxes(` |
| 7,944 | `divergeChart` | `function divergeChart(` |
| 8,005 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,034_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,042 | `maxIn` | `function maxIn(` |
| 8,055 | `reserveGauge` | `function reserveGauge(` |
| 8,076 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,090 | `PEEK_W` | `var PEEK_W =` |
| 8,093 | `PEEK_H` | `var PEEK_H =` |
| 8,094 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 8,099 | `colPeek` | `function colPeek(` |
| 8,126 | `meterPeek` | `function meterPeek(` |
| 8,143 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,148 | `pressureZone` | `function pressureZone(` |
| 8,163 | `HZN_BACK` | `var HZN_BACK =` |
| 8,164 | `hznLast` | `function hznLast(` |
| 8,165 | `hznBack` | `function hznBack(` |
| 8,166 | `horizonWord` | `function horizonWord(` |
| 8,191 | `HZN_METERS` | `var HZN_METERS =` |
| 8,199 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,223 | `_hznPanel` | `var _hznPanel =` |
| 8,224 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,244 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,245 | `levelZone` | `function levelZone(` |
| 8,257 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,262 | `RISK_RISK` | `var RISK_RISK =` |
| 8,267 | `riskCell` | `function riskCell(` |
| 8,268 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,299 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,324_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,343 | `pulseClipN` | `var pulseClipN =` |
| 8,344 | `beatPath` | `function beatPath(` |
| 8,369 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,383 | `pulsePeek` | `function pulsePeek(` |
| 8,391 | `pulseBlock` | `function pulseBlock(` |
| 8,411 | `CHEV` | `var CHEV =` |
| 8,413 | `peekCard` | `function peekCard(` |
| 8,464 | `dropSvg` | `function dropSvg(` |
| 8,472 | `speakerSvg` | `function speakerSvg(` |
| 8,480 | `gaugeSvg` | `function gaugeSvg(` |
| 8,484 | `diamondSvg` | `function diamondSvg(` |
| 8,498 | `energyFromReserve` | `function energyFromReserve(` |
| 8,510 | `sproutSvg` | `function sproutSvg(` |
| 8,521 | `markSvg` | `function markSvg(` |
| 8,525 | `flameSvg` | `function flameSvg(` |
| 8,529 | `gearSvg` | `function gearSvg(` |
| 8,542 | `pulseSvg` | `function pulseSvg(` |
| 8,546 | `thermoSvg` | `function thermoSvg(` |
| 8,565 | `trendUpSvg` | `function trendUpSvg(` |
| 8,567 | `ecgSvg` | `function ecgSvg(` |
| 8,581 | `circulationSvg` | `function circulationSvg(` |
| 8,582 | `weatherSvg` | `function weatherSvg(` |
| 8,603 | `moodSvg` | `function moodSvg(` |
| 8,620 | `boltSvg` | `function boltSvg(` |
| 8,623 | `houseSvg` | `function houseSvg(` |
| 8,631 | `sunriseSvg` | `function sunriseSvg(` |
| 8,641 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,653 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,670_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,691 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,692 | `dsrHistory` | `var dsrHistory =` |
| 8,693 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,694 | `savHistory` | `var savHistory =` |
| 8,699 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,709 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,710 | `dsrNow` | `var dsrNow =` |
| 8,711 | `savNow` | `var savNow =` |
| 8,712 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,717 | `householdsWord` | `function householdsWord(` |
| 8,724 | `householdsNow` | `var householdsNow =` |
| 8,731 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,732 | `dsrMeter` | `var dsrMeter =` |
| 8,735 | `savMeter` | `var savMeter =` |
| 8,738 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,755 | `savInfoHtml` | `function savInfoHtml(` |
| 8,773 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,782 | `curveNow` | `var curveNow =` |
| 8,783 | `curveTag` | `var curveTag =` |
| 8,784 | `curveSub` | `var curveSub =` |
| 8,788 | `curvePct` | `function curvePct(` |
| 8,789 | `curveNoteFull` | `var curveNoteFull =` |
| 8,804 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,812 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,853 | `marketCycles` | `var marketCycles =` |
| 8,883 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,885_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,906 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,907 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,912_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,933 | `slopeOf` | `function slopeOf(` |
| 8,944 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,950 | `readSeason` | `function readSeason(` |
| 8,975 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,977 | `qLabel` | `function qLabel(` |
| 9,001 | `regimeTrack` | `function regimeTrack(` |
| 9,024 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,026_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,033 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,034 | `seasonTitle` | `function seasonTitle(` |
| 9,035 | `monthLabel` | `function monthLabel(` |
| 9,036 | `cycleModel` | `function cycleModel(` |
| 9,088 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,096 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,103 | `nowModel` | `var nowModel =` |
| 9,104 | `readingNow` | `var readingNow =` |
| 9,105 | `cpiNow` | `var cpiNow =` |
| 9,106 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,107 | `currentSeason` | `var currentSeason =` |
| 9,108 | `seasonWhy` | `var seasonWhy =` |
| 9,125 | `seasonGroup` | `function seasonGroup(` |
| 9,139 | `arcGauge` | `function arcGauge(` |
| 9,181 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,194 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,196 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,200 | `policyFacts` | `function policyFacts(` |
| 9,212 | `allSources` | `var allSources =` |
| 9,236 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,269_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,272 | `SVG_NS` | `var SVG_NS =` |
| 9,273 | `svgEl` | `function svgEl(` |
| 9,286 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,322_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,323 | `clampPct` | `function clampPct(` |
| 9,330 | `infoIcon` | `function infoIcon(` |
| 9,339 | `detailTexts` | `var detailTexts =` |
| 9,357 | `detailSlots` | `var detailSlots =` |
| 9,358 | `detailSlot` | `function detailSlot(` |
| 9,369 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,373 | `_growthPanel` | `var _growthPanel =` |
| 9,374 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,380 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,391 | `facts` | `function facts(` |
| 9,392 | `factsFrom` | `function factsFrom(` |
| 9,396 | `expandBtn` | `function expandBtn(` |
| 9,402 | `sheetRenderers` | `var sheetRenderers =` |
| 9,419 | `pageMode` | `var pageMode =` |
| 9,426 | `pageCycles` | `var pageCycles =` |
| 9,431 | `pageRange` | `var pageRange =` |
| 9,437 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,471_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,482 | `meterHtml` | `function meterHtml(` |
| 9,510 | `srcHtml` | `function srcHtml(` |
| 9,519 | `TIMING` | `var TIMING =` |
| 9,525 | `timingMark` | `function timingMark(` |
| 9,539 | `timingPill` | `function timingPill(` |
| 9,560 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,568 | `seatPageFoot` | `function seatPageFoot(` |
| 9,591 | `timingMembers` | `var timingMembers =` |
| 9,592 | `registerTiming` | `function registerTiming(` |
| 9,598 | `headHtml` | `function headHtml(` |
| 9,616 | `heldHighlights` | `var heldHighlights =` |
| 9,617 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,675_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,676 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,049_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,050 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,273_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,274 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,306_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,312 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,396_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,397 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,415_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,418 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,441_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,442 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,508_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,511 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,709_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,721 | `totalRiseIn` | `function totalRiseIn(` |
| 10,731 | `eraInflation` | `function eraInflation(` |
| 10,742 | `eraGrowth` | `function eraGrowth(` |
| 10,758 | `fmtSigned` | `function fmtSigned(` |
| 10,763 | `regimeArrow` | `function regimeArrow(` |
| 10,769 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,770 | `growthShown` | `function growthShown(` |
| 10,771 | `growthShownCap` | `function growthShownCap(` |
| 10,772 | `regimeState` | `function regimeState(` |
| 10,776 | `phaseClass` | `function phaseClass(` |
| 10,778 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,790 | `cycleViewEl` | `var cycleViewEl =` |
| 10,794 | `tempCard` | `var tempCard =` |
| 10,795 | `placeCharts` | `function placeCharts(` |
| 10,800 | `shownEra` | `var shownEra =` |
| 10,801 | `calendarReset` | `var calendarReset =` |
| 10,802 | `metricPageReset` | `var metricPageReset =` |
| 10,803 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,806 | `topbarBack` | `var topbarBack =` |
| 10,807 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,814_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,815 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,976_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,977 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,995_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,998 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,019_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,025 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,028 | `hubSet` | `function hubSet(` |
| 11,041 | `quarterPopup` | `function quarterPopup(` |
| 11,074 | `hubShowDefault` | `function hubShowDefault(` |
| 11,083 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,089 | `hubShowYear` | `function hubShowYear(` |
| 11,104 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,196_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,199 | `tempState` | `var tempState =` |
| 11,202 | `chartLink` | `var chartLink =` |
| 11,222 | `m2Step` | `function m2Step(` |
| 11,225 | `heatStep` | `function heatStep(` |
| 11,229 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,416_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,419 | `drawGrowth` | `function drawGrowth(` |
| 11,558 | `wireResize` | `function wireResize(` |
| 11,564 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,576_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,577 | `renderCycleView` | `function renderCycleView(` |
| 11,630 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,641 | `PEER_CARET` | `var PEER_CARET =` |
| 11,642 | `peerList` | `function peerList(` |
| 11,643 | `peerChosen` | `function peerChosen(` |
| 11,644 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,648 | `renderPeerPills` | `function renderPeerPills(` |
| 11,698 | `shownEraModel` | `var shownEraModel =` |
| 11,699 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,701_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,703 | `stripGroupName` | `var stripGroupName =` |
| 11,704 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,750 | `marketStripHtml` | `function marketStripHtml(` |
| 11,813 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,814 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,844_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,845 | `renderCycleList` | `function renderCycleList(` |
| 11,935 | `renderSignsList` | `function renderSignsList(` |
| 12,197 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,442_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,443 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,505_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,506 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,539_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,540 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,002–4,005 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,172–8,185 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,984–8,997 | `seasonTrackAll` | The season, computed |
| 9,019–9,023 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,907 |
| `desire-range` | 9,995 |
| `hzn-range` | 10,345 |
| `pulse-range` | 9,946 |
| `sheet-marker-deficit` | 12,904 |
| `sheet-metric-gdp` | 12,788 |
| `sheet-metric-households` | 12,938 |
| `sheet-metric-power` | 12,867 |
| `sheet-metric-temp` | 12,738 |
| `sheet-metric-valuation` | 12,980 |
| `sheet-sign-activity` | 12,849 |
| `sheet-sign-desire` | 9,996 |
| `sheet-sign-horizon` | 10,346 |
| `sheet-sign-pulse` | 9,945 |
| `sheet-sign-volume` | 9,969 |
| `sheet-sign-yield` | 9,913 |
| `volume-range` | 9,970 |
| `ylm-range` | 10,041 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,913 |
| `desire-range` | 9,978 |
| `hzn-range` | 10,322 |
| `pulse-range` | 9,923 |
| `sheet-metric-gdp` | 12,789 |
| `sheet-metric-power` | 12,868 |
| `sheet-metric-temp` | 12,739 |
| `sheet-metric-valuation` | 12,981 |
| `volume-range` | 9,950 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,102 |
| `sheet-metric-gdp` | 6,103 |
| `sheet-sign-activity` | 6,104 |
| `sheet-metric-power` | 6,105 |
| `sheet-metric-valuation` | 6,107 |
| `sheet-metric-households` | 6,108 |
| `deficit-range` | 6,109 |
| `volume-range` | 6,110 |
| `pulse-range` | 6,111 |
| `hzn-range` | 6,112 |
| `ylm-range` | 6,123 |
| `desire-range` | 6,124 |

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
| 1,511 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,545 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,555 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,566 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,599 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,775 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,957 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
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

Every `id` in the static DOM (145), which is what the renderers fill:

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
| 3,314 | `subj-ring-yield` |
| 3,317 | `subj-value-yield` |
| 3,318 | `subj-say-yield` |
| 3,319 | `subj-spark-yield` |
| 3,350 | `ylm-series` |
| 3,355 | `ylm-head` |
| 3,356 | `ylm-shell` |
| 3,357 | `ylm-svg` |
| 3,358 | `ylm-tooltip` |
| 3,361 | `ylm-trend` |
| 3,364 | `pressure-insights` |
| 3,365 | `pressure-highlights` |
| 3,391 | `subj-value-horizon` |
| 3,392 | `subj-say-horizon` |
| 3,393 | `subj-spark-horizon` |
| 3,403 | `hzn-timeline` |
| 3,405 | `hzn-head` |
| 3,406 | `spread-history-shell` |
| 3,407 | `spread-history-svg` |
| 3,408 | `spread-history-tooltip` |
| 3,411 | `hzn-trend` |
| 3,413 | `hzn-panel` |
| 3,415 | `horizon-insights` |
| 3,416 | `horizon-highlights` |
| 3,423 | `subj-ring-sentiment` |
| 3,426 | `subj-value-sentiment` |
| 3,427 | `subj-say-sentiment` |
| 3,428 | `subj-spark-sentiment` |
| 3,440 | `curve-gauge` |
| 3,441 | `curve-vix` |
| 3,442 | `curve-highlights` |
| 3,456 | `signs-list` |
| 3,467 | `calendar-list` |
| 3,472 | `indicators-peek` |
| 3,518 | `cycle-list` |
| 3,524 | `cycle-more` |
| 3,525 | `cycle-more-label` |
| 3,534 | `calendar-cycle` |
| 3,535 | `calendar-cycle-slot` |
| 3,586 | `seasons-kicker` |
| 3,587 | `seasons-rows` |
| 3,591 | `framework-kicker` |
| 3,593 | `framework-rows` |
| 3,600 | `more-menu` |
| 3,603 | `menu-back` |
| 3,617 | `sources-open` |
| 3,625 | `appearance-current` |
| 3,633 | `sheet-howto` |
| 3,677 | `sheet-book` |
| 3,709 | `sheet-appearance` |
| 3,717 | `theme-toggle` |
| 3,724 | `sheet-contact` |
| 3,733 | `contact-form` |
| 3,734 | `contact-title` |
| 3,735 | `contact-message` |
| 3,737 | `contact-hint` |
| 3,738 | `contact-send` |
| 3,747 | `sheet-sources` |
| 3,750 | `sources-back` |
| 3,757 | `asof-text` |
| 3,758 | `sources-groups` |
| 3,765 | `detail-backdrop` |
| 3,767 | `detail-modal-close` |
| 3,768 | `detail-modal-body` |

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

