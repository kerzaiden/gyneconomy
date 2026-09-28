# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,993 lines**, about 1168 KB, roughly **332 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `391e8d2` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,039 | the whole stylesheet, every token and rule |
| **Markup** | 3,040–3,779 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,780–13,940 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,941–13,993 | </body></html> |

Counts: **248** top-level functions, **178** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,785_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,789 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,790 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,791 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,809 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,813 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,818_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,828 | `wheelMeta` | `var wheelMeta =` |
| 3,839 | `seasonOverride` | `var seasonOverride =` |
| 3,842 | `cycleNowNote` | `var cycleNowNote =` |
| 3,851 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,937 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,982 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,995_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,012 | `LIVE` | `function LIVE(` |
| 4,039 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,047 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,048 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,051_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,082 | `repaintFigureText` | `function repaintFigureText(` |
| 4,090 | `repaintTag` | `function repaintTag(` |
| 4,100 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,125 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,133 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,141 | `REPAINT` | `var REPAINT =` |
| 4,158 | `liveAsOf` | `var liveAsOf =` |
| 4,159 | `fmtAsOf` | `function fmtAsOf(` |
| 4,164 | `applyLive` | `function applyLive(` |
| 4,240 | `repaintPolicy` | `function repaintPolicy(` |
| 4,290 | `GYN` | `var GYN =` |
| 4,310 | `refreshLiveData` | `function refreshLiveData(` |
| 4,351 | `fetchSiteData` | `function fetchSiteData(` |
| 4,381 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,395_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,396 | `yieldCurve` | `var yieldCurve =` |
| 4,409 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,433 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,445 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,473_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,478 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,502 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,526 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,550 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,577 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,602_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,611 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,621 | `uninvLagToday` | `var uninvLagToday =` |
| 4,633 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,646 | `gdpPeers` | `var gdpPeers =` |
| 4,687 | `gdpSrc` | `var gdpSrc =` |
| 4,688 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,693 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,706 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,744_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,766 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,776_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,792 | `stressScoreFor` | `function stressScoreFor(` |
| 4,798 | `stressScore` | `var stressScore =` |
| 4,804 | `powerOf` | `var powerOf =` |
| 4,805 | `powerScore` | `var powerScore =` |
| 4,822 | `stressHistory` | `var stressHistory =` |
| 4,833 | `powerMeter` | `var powerMeter =` |
| 4,835 | `stressNoteFull` | `var stressNoteFull =` |
| 4,867 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,869_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,892 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,893 | `deficitHistory` | `var deficitHistory =` |
| 4,896 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,903 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,905 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 4,948 | `fedFundsHistory` | `var fedFundsHistory =` |
| 4,949 | `fearCurveHistory` | `var fearCurveHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,966_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,979 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,992_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,006 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,009 | `timelineSpan` | `function timelineSpan(` |
| 5,015 | `timelineFor` | `function timelineFor(` |
| 5,028 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,034_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,040 | `windowScale` | `function windowScale(` |
| 5,056 | `windowYears` | `function windowYears(` |
| 5,074 | `refName` | `function refName(` |
| 5,081 | `histReadEnsure` | `function histReadEnsure(` |
| 5,120 | `seatBandReading` | `function seatBandReading(` |
| 5,143 | `histReadFill` | `function histReadFill(` |
| 5,271 | `histAxisEnds` | `function histAxisEnds(` |
| 5,282 | `histLegend` | `function histLegend(` |
| 5,370 | `refitHistory` | `function refitHistory(` |
| 5,382 | `wireHistHover` | `function wireHistHover(` |
| 5,441 | `mWindowFrom` | `function mWindowFrom(` |
| 5,446 | `qWindowFrom` | `function qWindowFrom(` |
| 5,451 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,452 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,454 | `DEF_1983` | `var DEF_1983 =` |
| 5,456 | `defFrom` | `function defFrom(` |
| 5,467 | `deficitChart` | `function deficitChart(` |
| 5,557 | `deficitBlock` | `function deficitBlock(` |
| 5,619 | `buffettHistory` | `var buffettHistory =` |
| 5,649 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,650 | `hyDates` | `var hyDates =` |
| 5,651 | `hyOas` | `var hyOas =` |
| 5,652 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,659 | `hyAt` | `function hyAt(` |
| 5,663 | `hyLabel` | `function hyLabel(` |
| 5,664 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,665 | `hyNum` | `function hyNum(` |
| 5,666 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,676 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,686 | `capeHistory` | `var capeHistory =` |
| 5,688 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,706_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,712 | `sentiment` | `var sentiment =` |
| 5,730 | `valuation` | `var valuation =` |
| 5,767 | `valRow` | `function valRow(` |
| 5,775 | `coincident` | `var coincident =` |
| 5,836 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,854 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,855 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,856 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,858_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,871 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,872 | `m2vHistory` | `var m2vHistory =` |
| 5,892 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,985 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,075 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,076 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,116_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,122 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,123 | `DOTS` | `var DOTS =` |
| 6,125 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,162 | `histHead` | `function histHead(` |
| 6,183 | `headNoteIdx` | `var headNoteIdx =` |
| 6,184 | `headMenuHtml` | `function headMenuHtml(` |
| 6,204 | `headMenuFor` | `var headMenuFor =` |
| 6,205 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,234 | `nameWithMark` | `function nameWithMark(` |
| 6,240 | `panelRow` | `function panelRow(` |
| 6,266 | `panelFromMeter` | `function panelFromMeter(` |
| 6,280 | `meterFlagged` | `function meterFlagged(` |
| 6,291 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,319 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,333 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,352 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,371 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,385 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,410 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,441 | `desireBlock` | `function desireBlock(` |
| 6,468 | `volumeBlock` | `function volumeBlock(` |
| 6,493 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,516 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,524_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,537 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,538 | `m2Level` | `var m2Level =` |
| 6,560 | `m2Yoy` | `var m2Yoy =` |
| 6,561 | `M2_NORM` | `var M2_NORM =` |
| 6,566 | `volumeVerdict` | `function volumeVerdict(` |
| 6,603 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,604 | `unempHistory` | `var unempHistory =` |
| 6,610 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,625 | `NROU_NOW` | `var NROU_NOW =` |
| 6,626 | `unempState` | `function unempState(` |
| 6,632 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,696_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,705 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 6,713 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,768 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,769 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,772 | `qAtIndex` | `function qAtIndex(` |
| 6,773 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,781_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,796 | `householdsChart` | `function householdsChart(` |
| 6,864 | `lastChartAvg` | `var lastChartAvg =` |
| 6,865 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,950 | `GDP_NORM` | `var GDP_NORM =` |
| 6,956 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,957 | `gdpNowQ` | `var gdpNowQ =` |
| 6,958 | `gdpMeter` | `var gdpMeter =` |
| 6,961 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,983 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,049 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,113 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,121 | `velocityVerdict` | `function velocityVerdict(` |
| 7,129 | `derivePulseTag` | `function derivePulseTag(` |
| 7,135 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,195_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,204 | `seasonReading` | `var seasonReading =` |
| 7,253 | `frameworkRows` | `var frameworkRows =` |
| 7,263 | `vixRow` | `var vixRow =` |
| 7,271 | `vixWordOf` | `var vixWordOf =` |
| 7,275 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,290_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,294 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,303_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,304 | `calendarTodayY` | `var calendarTodayY =` |
| 7,335 | `vix3mClose` | `var vix3mClose =` |
| 7,336 | `fearCurve` | `function fearCurve(` |
| 7,343 | `curveVerdict` | `function curveVerdict(` |
| 7,350 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,355 | `valuationVerdict` | `function valuationVerdict(` |
| 7,373 | `sparkHtml` | `function sparkHtml(` |
| 7,392 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,398_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,411 | `modeBar` | `function modeBar(` |
| 7,426 | `pickerOpen` | `var pickerOpen =` |
| 7,430 | `cycleByName` | `function cycleByName(` |
| 7,434 | `openCycle` | `function openCycle(` |
| 7,440 | `cycleSlice` | `function cycleSlice(` |
| 7,449 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,457 | `cycleMonths` | `function cycleMonths(` |
| 7,476 | `histControls` | `function histControls(` |
| 7,490 | `cycLabel` | `function cycLabel(` |
| 7,506 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,515 | `cyclePicker` | `function cyclePicker(` |
| 7,534 | `rangeBar` | `function rangeBar(` |
| 7,546 | `trendOf` | `function trendOf(` |
| 7,591 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,601 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,622_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,623 | `yearOf` | `function yearOf(` |
| 7,624 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,625_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,655 | `totalStat` | `function totalStat(` |
| 7,661 | `atQuarter` | `function atQuarter(` |
| 7,662 | `atMonth` | `function atMonth(` |
| 7,663 | `cycleAverages` | `function cycleAverages(` |
| 7,670 | `ordinal` | `function ordinal(` |
| 7,671 | `hiCard` | `function hiCard(` |
| 7,682 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,696_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,703 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,719 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,726 | `moreRow` | `function moreRow(` |
| 7,732 | `powerPageNote` | `var powerPageNote =` |
| 7,733 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,739_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,742 | `xLabelOf` | `function xLabelOf(` |
| 7,762 | `fitGroup` | `function fitGroup(` |
| 7,784 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,843_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,867 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,877 | `vGrid` | `function vGrid(` |
| 7,902 | `COL_FILL` | `var COL_FILL =` |
| 7,935 | `colPath` | `function colPath(` |
| 7,940 | `colWidth` | `function colWidth(` |
| 7,987 | `AXIS` | `var AXIS =` |
| 7,988 | `chartAxes` | `function chartAxes(` |
| 8,048 | `divergeChart` | `function divergeChart(` |
| 8,116 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,145_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,153 | `maxIn` | `function maxIn(` |
| 8,171 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,185 | `PEEK_W` | `var PEEK_W =` |
| 8,188 | `PEEK_H` | `var PEEK_H =` |
| 8,193 | `colPeek` | `function colPeek(` |
| 8,220 | `meterPeek` | `function meterPeek(` |
| 8,237 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,242 | `pressureZone` | `function pressureZone(` |
| 8,257 | `HZN_BACK` | `var HZN_BACK =` |
| 8,258 | `hznLast` | `function hznLast(` |
| 8,259 | `hznBack` | `function hznBack(` |
| 8,260 | `horizonWord` | `function horizonWord(` |
| 8,285 | `HZN_METERS` | `var HZN_METERS =` |
| 8,293 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,317 | `_hznPanel` | `var _hznPanel =` |
| 8,318 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,338 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,339 | `levelZone` | `function levelZone(` |
| 8,351 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,356 | `RISK_RISK` | `var RISK_RISK =` |
| 8,361 | `riskCell` | `function riskCell(` |
| 8,362 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,393 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,418_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,439 | `pulseClipN` | `var pulseClipN =` |
| 8,440 | `beatPath` | `function beatPath(` |
| 8,465 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,479 | `pulsePeek` | `function pulsePeek(` |
| 8,487 | `pulseBlock` | `function pulseBlock(` |
| 8,507 | `CHEV` | `var CHEV =` |
| 8,509 | `peekCard` | `function peekCard(` |
| 8,563 | `dropSvg` | `function dropSvg(` |
| 8,575 | `volumeSvg` | `function volumeSvg(` |
| 8,582 | `gaugeSvg` | `function gaugeSvg(` |
| 8,586 | `diamondSvg` | `function diamondSvg(` |
| 8,600 | `energyFromReserve` | `function energyFromReserve(` |
| 8,612 | `sproutSvg` | `function sproutSvg(` |
| 8,623 | `markSvg` | `function markSvg(` |
| 8,629 | `hormoneSvg` | `function hormoneSvg(` |
| 8,635 | `flameSvg` | `function flameSvg(` |
| 8,639 | `gearSvg` | `function gearSvg(` |
| 8,651 | `thermoSvg` | `function thermoSvg(` |
| 8,670 | `trendUpSvg` | `function trendUpSvg(` |
| 8,672 | `ecgSvg` | `function ecgSvg(` |
| 8,686 | `circulationSvg` | `function circulationSvg(` |
| 8,687 | `weatherSvg` | `function weatherSvg(` |
| 8,708 | `moodSvg` | `function moodSvg(` |
| 8,732 | `boltSvg` | `function boltSvg(` |
| 8,735 | `houseSvg` | `function houseSvg(` |
| 8,743 | `sunriseSvg` | `function sunriseSvg(` |
| 8,758 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,769 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,786_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,807 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,808 | `dsrHistory` | `var dsrHistory =` |
| 8,809 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,810 | `savHistory` | `var savHistory =` |
| 8,815 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,825 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,826 | `dsrNow` | `var dsrNow =` |
| 8,827 | `savNow` | `var savNow =` |
| 8,828 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,833 | `householdsWord` | `function householdsWord(` |
| 8,840 | `householdsNow` | `var householdsNow =` |
| 8,847 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,848 | `dsrMeter` | `var dsrMeter =` |
| 8,851 | `savMeter` | `var savMeter =` |
| 8,854 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,871 | `savInfoHtml` | `function savInfoHtml(` |
| 8,889 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,898 | `curveNow` | `var curveNow =` |
| 8,899 | `curveTag` | `var curveTag =` |
| 8,900 | `curveSub` | `var curveSub =` |
| 8,904 | `curvePct` | `function curvePct(` |
| 8,905 | `curveNoteFull` | `var curveNoteFull =` |
| 8,920 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,928 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,969 | `marketCycles` | `var marketCycles =` |
| 8,999 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,001_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,022 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,023 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,028_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,049 | `slopeOf` | `function slopeOf(` |
| 9,060 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,066 | `readSeason` | `function readSeason(` |
| 9,091 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,093 | `qLabel` | `function qLabel(` |
| 9,117 | `regimeTrack` | `function regimeTrack(` |
| 9,140 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,142_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,149 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,150 | `seasonTitle` | `function seasonTitle(` |
| 9,151 | `monthLabel` | `function monthLabel(` |
| 9,152 | `cycleModel` | `function cycleModel(` |
| 9,204 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,212 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,219 | `nowModel` | `var nowModel =` |
| 9,220 | `readingNow` | `var readingNow =` |
| 9,221 | `cpiNow` | `var cpiNow =` |
| 9,222 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,223 | `currentSeason` | `var currentSeason =` |
| 9,224 | `seasonWhy` | `var seasonWhy =` |
| 9,241 | `seasonGroup` | `function seasonGroup(` |
| 9,255 | `arcGauge` | `function arcGauge(` |
| 9,297 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,310 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,312 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,316 | `policyFacts` | `function policyFacts(` |
| 9,328 | `allSources` | `var allSources =` |
| 9,352 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,385_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,388 | `SVG_NS` | `var SVG_NS =` |
| 9,389 | `svgEl` | `function svgEl(` |
| 9,402 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,438_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,439 | `clampPct` | `function clampPct(` |
| 9,446 | `infoIcon` | `function infoIcon(` |
| 9,455 | `detailTexts` | `var detailTexts =` |
| 9,473 | `detailSlots` | `var detailSlots =` |
| 9,474 | `detailSlot` | `function detailSlot(` |
| 9,485 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,489 | `_growthPanel` | `var _growthPanel =` |
| 9,490 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,496 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,507 | `facts` | `function facts(` |
| 9,508 | `factsFrom` | `function factsFrom(` |
| 9,512 | `expandBtn` | `function expandBtn(` |
| 9,518 | `sheetRenderers` | `var sheetRenderers =` |
| 9,535 | `pageMode` | `var pageMode =` |
| 9,542 | `pageCycles` | `var pageCycles =` |
| 9,547 | `pageRange` | `var pageRange =` |
| 9,553 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,587_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,598 | `meterHtml` | `function meterHtml(` |
| 9,626 | `srcHtml` | `function srcHtml(` |
| 9,635 | `TIMING` | `var TIMING =` |
| 9,641 | `timingMark` | `function timingMark(` |
| 9,655 | `timingPill` | `function timingPill(` |
| 9,676 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,684 | `seatPageFoot` | `function seatPageFoot(` |
| 9,707 | `timingMembers` | `var timingMembers =` |
| 9,708 | `registerTiming` | `function registerTiming(` |
| 9,714 | `headHtml` | `function headHtml(` |
| 9,732 | `heldHighlights` | `var heldHighlights =` |
| 9,733 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,791_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,792 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,191_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,192 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,415_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,416 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,448_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,454 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,538_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,539 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,557_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,560 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,583_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,595 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,658_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,659 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,779_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,782 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,980_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,992 | `totalRiseIn` | `function totalRiseIn(` |
| 11,002 | `eraInflation` | `function eraInflation(` |
| 11,013 | `eraGrowth` | `function eraGrowth(` |
| 11,029 | `fmtSigned` | `function fmtSigned(` |
| 11,034 | `regimeArrow` | `function regimeArrow(` |
| 11,040 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,041 | `growthShown` | `function growthShown(` |
| 11,042 | `growthShownCap` | `function growthShownCap(` |
| 11,043 | `regimeState` | `function regimeState(` |
| 11,047 | `phaseClass` | `function phaseClass(` |
| 11,049 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,061 | `cycleViewEl` | `var cycleViewEl =` |
| 11,065 | `tempCard` | `var tempCard =` |
| 11,066 | `placeCharts` | `function placeCharts(` |
| 11,071 | `shownEra` | `var shownEra =` |
| 11,072 | `calendarReset` | `var calendarReset =` |
| 11,073 | `metricPageReset` | `var metricPageReset =` |
| 11,074 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,077 | `topbarBack` | `var topbarBack =` |
| 11,078 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,085_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,086 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,247_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,248 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,266_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,269 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,290_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,296 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,299 | `hubSet` | `function hubSet(` |
| 11,312 | `quarterPopup` | `function quarterPopup(` |
| 11,345 | `hubShowDefault` | `function hubShowDefault(` |
| 11,354 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,360 | `hubShowYear` | `function hubShowYear(` |
| 11,375 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,467_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,470 | `tempState` | `var tempState =` |
| 11,473 | `chartLink` | `var chartLink =` |
| 11,493 | `m2Step` | `function m2Step(` |
| 11,496 | `heatStep` | `function heatStep(` |
| 11,500 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,687_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,690 | `drawGrowth` | `function drawGrowth(` |
| 11,829 | `wireResize` | `function wireResize(` |
| 11,835 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,847_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,848 | `renderCycleView` | `function renderCycleView(` |
| 11,901 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,912 | `PEER_CARET` | `var PEER_CARET =` |
| 11,913 | `peerList` | `function peerList(` |
| 11,914 | `peerChosen` | `function peerChosen(` |
| 11,915 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,919 | `renderPeerPills` | `function renderPeerPills(` |
| 11,969 | `shownEraModel` | `var shownEraModel =` |
| 11,970 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,972_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,974 | `stripGroupName` | `var stripGroupName =` |
| 11,975 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,021 | `marketStripHtml` | `function marketStripHtml(` |
| 12,084 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,085 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,115_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,116 | `renderCycleList` | `function renderCycleList(` |
| 12,206 | `renderSignsList` | `function renderSignsList(` |
| 12,484 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,739_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,740 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,802_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,803 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,836_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,837 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,008–4,011 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,266–8,279 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,100–9,113 | `seasonTrackAll` | The season, computed |
| 9,135–9,139 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,200 |
| `desire-range` | 10,116 |
| `fear-range` | 10,748 |
| `hormones-range` | 10,630 |
| `hzn-range` | 10,487 |
| `pulse-range` | 10,067 |
| `sheet-marker-deficit` | 13,197 |
| `sheet-metric-gdp` | 13,081 |
| `sheet-metric-households` | 13,231 |
| `sheet-metric-power` | 13,160 |
| `sheet-metric-temp` | 13,031 |
| `sheet-metric-valuation` | 13,273 |
| `sheet-sign-activity` | 13,142 |
| `sheet-sign-desire` | 10,117 |
| `sheet-sign-horizon` | 10,488 |
| `sheet-sign-hormones` | 10,631 |
| `sheet-sign-pulse` | 10,066 |
| `sheet-sign-sentiment` | 10,753 |
| `sheet-sign-volume` | 10,090 |
| `sheet-sign-yield` | 10,032 |
| `volume-range` | 10,091 |
| `ylm-range` | 10,034 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,206 |
| `desire-range` | 10,099 |
| `fear-range` | 10,705 |
| `hzn-range` | 10,464 |
| `pulse-range` | 10,044 |
| `sheet-metric-gdp` | 13,082 |
| `sheet-metric-power` | 13,161 |
| `sheet-metric-temp` | 13,032 |
| `sheet-metric-valuation` | 13,274 |
| `volume-range` | 10,071 |
| `ylm-range` | 10,145 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,126 |
| `sheet-metric-gdp` | 6,127 |
| `sheet-sign-activity` | 6,134 |
| `sheet-metric-power` | 6,135 |
| `sheet-metric-valuation` | 6,137 |
| `sheet-metric-households` | 6,138 |
| `deficit-range` | 6,139 |
| `volume-range` | 6,140 |
| `pulse-range` | 6,141 |
| `hzn-range` | 6,142 |
| `ylm-range` | 6,157 |
| `desire-range` | 6,158 |
| `fear-range` | 6,159 |
| `hormones-range` | 6,160 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 189 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 322 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 420 | yearly calendar — one card per year, grouped into five eras |
| 427 | season strip |
| 480 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels \u2026 so if one day |
| 639 | tab bar (app-style segmented navigation) |
| 702 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 741 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 964 | journal (editorial content tab) |
| 970 | content tab: reading companion |
| 1,028 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,500 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,534 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,544 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,555 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,588 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,764 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,941 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,434 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,482 | hero: yield curve |
| 2,578 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,657 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,756 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,781 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,796 | long cycle (structural layer) |
| 2,837 | indicator grid |
| 2,880 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,897 | info icon + popover (progressive disclosure for longer notes) |
| 2,918 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,013 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (148), which is what the renderers fill:

| Line | id |
|---|---|
| 3,045 | `topbar-back` |
| 3,048 | `topbar-title` |
| 3,049 | `menu-btn` |
| 3,066 | `main` |
| 3,073 | `cycle-view` |
| 3,081 | `cycle-kicker` |
| 3,087 | `cycle-dial` |
| 3,089 | `season-wheel-hub-date` |
| 3,090 | `season-wheel-hub-theme` |
| 3,091 | `season-wheel-hub-detail` |
| 3,099 | `temp-card` |
| 3,101 | `temp-kicker` |
| 3,102 | `temp-sub` |
| 3,105 | `temp-svg` |
| 3,106 | `temp-tooltip` |
| 3,112 | `temp-stats` |
| 3,119 | `growth-card` |
| 3,122 | `growth-kicker` |
| 3,122 | `growth-phase` |
| 3,122 | `growth-sub` |
| 3,122 | `growth-peers` |
| 3,123 | `growth-svg` |
| 3,123 | `growth-tooltip` |
| 3,128 | `growth-stats` |
| 3,137 | `today-analysis` |
| 3,141 | `peek-row` |
| 3,145 | `sheet-metric-temp` |
| 3,146 | `temp-timing` |
| 3,147 | `temp-chart` |
| 3,149 | `temp-rangebar` |
| 3,151 | `temp-head` |
| 3,152 | `slot-temp` |
| 3,153 | `temp-history` |
| 3,154 | `temp-hist-tooltip` |
| 3,157 | `temp-trend` |
| 3,161 | `temp-highlights` |
| 3,164 | `sheet-metric-gdp` |
| 3,165 | `gdp-timing` |
| 3,166 | `gdp-chart` |
| 3,167 | `gdp-rangebar` |
| 3,169 | `gdp-head` |
| 3,170 | `slot-growth` |
| 3,171 | `gdp-history` |
| 3,172 | `gdp-hist-tooltip` |
| 3,173 | `gdp-yoy` |
| 3,183 | `gdp-trend` |
| 3,185 | `gdp-panel` |
| 3,190 | `subj-ring-gdp` |
| 3,192 | `subj-label-gdp` |
| 3,193 | `subj-value-gdp` |
| 3,194 | `subj-say-gdp` |
| 3,195 | `subj-spark-gdp` |
| 3,200 | `subj-ctx-gdp` |
| 3,203 | `gdp-highlights` |
| 3,211 | `sheet-metric-power` |
| 3,212 | `power-timing` |
| 3,213 | `power-head` |
| 3,214 | `power-chart` |
| 3,218 | `subj-ring-resilience` |
| 3,221 | `subj-value-resilience` |
| 3,222 | `subj-say-resilience` |
| 3,227 | `subj-ctx-resilience` |
| 3,231 | `longcycle-title` |
| 3,233 | `longcycle-tag` |
| 3,247 | `power-highlights` |
| 3,254 | `sheet-marker-deficit` |
| 3,260 | `sheet-metric-households` |
| 3,261 | `households-timing` |
| 3,262 | `households-chart` |
| 3,263 | `households-highlights` |
| 3,267 | `sheet-metric-valuation` |
| 3,268 | `valuation-timing` |
| 3,269 | `valuation-head` |
| 3,270 | `valuation-chart` |
| 3,274 | `subj-ring-valuation` |
| 3,277 | `subj-value-valuation` |
| 3,278 | `subj-say-valuation` |
| 3,283 | `subj-ctx-valuation` |
| 3,287 | `valuation-title` |
| 3,289 | `valuation-tag` |
| 3,296 | `valuation-highlights` |
| 3,302 | `subj-ring-yield` |
| 3,305 | `subj-value-yield` |
| 3,306 | `subj-say-yield` |
| 3,307 | `subj-spark-yield` |
| 3,338 | `ylm-series` |
| 3,343 | `ylm-head` |
| 3,344 | `ylm-shell` |
| 3,345 | `ylm-svg` |
| 3,346 | `ylm-tooltip` |
| 3,349 | `ylm-trend` |
| 3,352 | `pressure-insights` |
| 3,353 | `pressure-highlights` |
| 3,379 | `subj-value-horizon` |
| 3,380 | `subj-say-horizon` |
| 3,381 | `subj-spark-horizon` |
| 3,391 | `hzn-timeline` |
| 3,393 | `hzn-head` |
| 3,394 | `spread-history-shell` |
| 3,395 | `spread-history-svg` |
| 3,396 | `spread-history-tooltip` |
| 3,399 | `hzn-trend` |
| 3,401 | `hzn-panel` |
| 3,403 | `horizon-insights` |
| 3,404 | `horizon-highlights` |
| 3,415 | `subj-value-hormones` |
| 3,416 | `subj-say-hormones` |
| 3,421 | `hormones-history` |
| 3,422 | `hormones-highlights` |
| 3,428 | `subj-ring-sentiment` |
| 3,431 | `subj-value-sentiment` |
| 3,432 | `subj-say-sentiment` |
| 3,433 | `subj-spark-sentiment` |
| 3,447 | `fear-history` |
| 3,448 | `curve-highlights` |
| 3,462 | `signs-list` |
| 3,473 | `calendar-list` |
| 3,478 | `indicators-peek` |
| 3,524 | `cycle-list` |
| 3,530 | `cycle-more` |
| 3,531 | `cycle-more-label` |
| 3,540 | `calendar-cycle` |
| 3,541 | `calendar-cycle-slot` |
| 3,592 | `seasons-kicker` |
| 3,593 | `seasons-rows` |
| 3,597 | `framework-kicker` |
| 3,599 | `framework-rows` |
| 3,606 | `more-menu` |
| 3,609 | `menu-back` |
| 3,623 | `sources-open` |
| 3,631 | `appearance-current` |
| 3,639 | `sheet-howto` |
| 3,683 | `sheet-book` |
| 3,715 | `sheet-appearance` |
| 3,723 | `theme-toggle` |
| 3,730 | `sheet-contact` |
| 3,739 | `contact-form` |
| 3,740 | `contact-title` |
| 3,741 | `contact-message` |
| 3,743 | `contact-hint` |
| 3,744 | `contact-send` |
| 3,753 | `sheet-sources` |
| 3,756 | `sources-back` |
| 3,763 | `asof-text` |
| 3,764 | `sources-groups` |
| 3,771 | `detail-backdrop` |
| 3,773 | `detail-modal-close` |
| 3,774 | `detail-modal-body` |

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

