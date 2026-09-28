# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,967 lines**, about 1167 KB, roughly **332 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `dcc8a98` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,041 | the whole stylesheet, every token and rule |
| **Markup** | 3,042–3,760 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,761–13,914 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,915–13,967 | </body></html> |

Counts: **248** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,766_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,770 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,771 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,772 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,790 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,794 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,799_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,809 | `wheelMeta` | `var wheelMeta =` |
| 3,820 | `seasonOverride` | `var seasonOverride =` |
| 3,823 | `cycleNowNote` | `var cycleNowNote =` |
| 3,832 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,918 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,963 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,976_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,993 | `LIVE` | `function LIVE(` |
| 4,020 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,028 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,029 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,032_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,063 | `repaintFigureText` | `function repaintFigureText(` |
| 4,076 | `repaintRow` | `function repaintRow(` |
| 4,089 | `repaintTag` | `function repaintTag(` |
| 4,099 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,124 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,132 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,140 | `REPAINT` | `var REPAINT =` |
| 4,157 | `liveAsOf` | `var liveAsOf =` |
| 4,158 | `fmtAsOf` | `function fmtAsOf(` |
| 4,163 | `applyLive` | `function applyLive(` |
| 4,242 | `repaintPolicy` | `function repaintPolicy(` |
| 4,298 | `GYN` | `var GYN =` |
| 4,318 | `refreshLiveData` | `function refreshLiveData(` |
| 4,359 | `fetchSiteData` | `function fetchSiteData(` |
| 4,389 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,403_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,404 | `yieldCurve` | `var yieldCurve =` |
| 4,417 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,441 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,453 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,481_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,486 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,510 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,534 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,558 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,585 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,610_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,619 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,629 | `uninvLagToday` | `var uninvLagToday =` |
| 4,641 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,654 | `gdpPeers` | `var gdpPeers =` |
| 4,695 | `gdpSrc` | `var gdpSrc =` |
| 4,696 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,701 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,714 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,752_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,774 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,784_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,800 | `stressScoreFor` | `function stressScoreFor(` |
| 4,806 | `stressScore` | `var stressScore =` |
| 4,812 | `powerOf` | `var powerOf =` |
| 4,813 | `powerScore` | `var powerScore =` |
| 4,830 | `stressHistory` | `var stressHistory =` |
| 4,841 | `powerMeter` | `var powerMeter =` |
| 4,843 | `stressNoteFull` | `var stressNoteFull =` |
| 4,875 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,877_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,900 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,901 | `deficitHistory` | `var deficitHistory =` |
| 4,904 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,911 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,913 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 4,956 | `fedFundsHistory` | `var fedFundsHistory =` |
| 4,957 | `fearCurveHistory` | `var fearCurveHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,974_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,987 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,000_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,014 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,017 | `timelineSpan` | `function timelineSpan(` |
| 5,023 | `timelineFor` | `function timelineFor(` |
| 5,036 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,042_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,048 | `windowScale` | `function windowScale(` |
| 5,064 | `windowYears` | `function windowYears(` |
| 5,082 | `refName` | `function refName(` |
| 5,089 | `histReadEnsure` | `function histReadEnsure(` |
| 5,128 | `seatBandReading` | `function seatBandReading(` |
| 5,151 | `histReadFill` | `function histReadFill(` |
| 5,279 | `histAxisEnds` | `function histAxisEnds(` |
| 5,290 | `histLegend` | `function histLegend(` |
| 5,378 | `refitHistory` | `function refitHistory(` |
| 5,390 | `wireHistHover` | `function wireHistHover(` |
| 5,449 | `mWindowFrom` | `function mWindowFrom(` |
| 5,454 | `qWindowFrom` | `function qWindowFrom(` |
| 5,459 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,460 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,462 | `DEF_1983` | `var DEF_1983 =` |
| 5,464 | `defFrom` | `function defFrom(` |
| 5,475 | `deficitChart` | `function deficitChart(` |
| 5,565 | `deficitBlock` | `function deficitBlock(` |
| 5,627 | `buffettHistory` | `var buffettHistory =` |
| 5,657 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,658 | `hyDates` | `var hyDates =` |
| 5,659 | `hyOas` | `var hyOas =` |
| 5,660 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,667 | `hyAt` | `function hyAt(` |
| 5,671 | `hyLabel` | `function hyLabel(` |
| 5,672 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,673 | `hyNum` | `function hyNum(` |
| 5,674 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,684 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,694 | `capeHistory` | `var capeHistory =` |
| 5,696 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,714_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,720 | `sentiment` | `var sentiment =` |
| 5,738 | `valuation` | `var valuation =` |
| 5,775 | `valRow` | `function valRow(` |
| 5,783 | `coincident` | `var coincident =` |
| 5,844 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,862 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,863 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,864 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,866_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,879 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,880 | `m2vHistory` | `var m2vHistory =` |
| 5,900 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,993 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,083 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,084 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,124_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,130 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,131 | `DOTS` | `var DOTS =` |
| 6,133 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,170 | `histHead` | `function histHead(` |
| 6,191 | `headNoteIdx` | `var headNoteIdx =` |
| 6,192 | `headMenuHtml` | `function headMenuHtml(` |
| 6,212 | `headMenuFor` | `var headMenuFor =` |
| 6,213 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,242 | `nameWithMark` | `function nameWithMark(` |
| 6,248 | `panelRow` | `function panelRow(` |
| 6,274 | `panelFromMeter` | `function panelFromMeter(` |
| 6,288 | `meterFlagged` | `function meterFlagged(` |
| 6,299 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,327 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,341 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,360 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,379 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,393 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,418 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,449 | `desireBlock` | `function desireBlock(` |
| 6,476 | `volumeBlock` | `function volumeBlock(` |
| 6,501 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,524 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,532_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,545 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,546 | `m2Level` | `var m2Level =` |
| 6,568 | `m2Yoy` | `var m2Yoy =` |
| 6,569 | `M2_NORM` | `var M2_NORM =` |
| 6,574 | `volumeVerdict` | `function volumeVerdict(` |
| 6,611 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,612 | `unempHistory` | `var unempHistory =` |
| 6,618 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,633 | `NROU_NOW` | `var NROU_NOW =` |
| 6,634 | `unempState` | `function unempState(` |
| 6,640 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,704_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,713 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 6,721 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,776 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,777 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,780 | `qAtIndex` | `function qAtIndex(` |
| 6,781 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,789_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,804 | `householdsChart` | `function householdsChart(` |
| 6,872 | `lastChartAvg` | `var lastChartAvg =` |
| 6,873 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,958 | `GDP_NORM` | `var GDP_NORM =` |
| 6,964 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,965 | `gdpNowQ` | `var gdpNowQ =` |
| 6,966 | `gdpMeter` | `var gdpMeter =` |
| 6,969 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,991 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,057 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,121 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,129 | `velocityVerdict` | `function velocityVerdict(` |
| 7,137 | `derivePulseTag` | `function derivePulseTag(` |
| 7,143 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,203_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,212 | `seasonReading` | `var seasonReading =` |
| 7,261 | `frameworkRows` | `var frameworkRows =` |
| 7,271 | `vixRow` | `var vixRow =` |
| 7,279 | `vixWordOf` | `var vixWordOf =` |
| 7,283 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,298_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,302 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,311_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,312 | `calendarTodayY` | `var calendarTodayY =` |
| 7,343 | `vix3mClose` | `var vix3mClose =` |
| 7,344 | `fearCurve` | `function fearCurve(` |
| 7,351 | `curveVerdict` | `function curveVerdict(` |
| 7,358 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,363 | `valuationVerdict` | `function valuationVerdict(` |
| 7,381 | `sparkHtml` | `function sparkHtml(` |
| 7,400 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,406_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,419 | `modeBar` | `function modeBar(` |
| 7,434 | `pickerOpen` | `var pickerOpen =` |
| 7,438 | `cycleByName` | `function cycleByName(` |
| 7,442 | `openCycle` | `function openCycle(` |
| 7,448 | `cycleSlice` | `function cycleSlice(` |
| 7,457 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,465 | `cycleMonths` | `function cycleMonths(` |
| 7,484 | `histControls` | `function histControls(` |
| 7,498 | `cycLabel` | `function cycLabel(` |
| 7,514 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,523 | `cyclePicker` | `function cyclePicker(` |
| 7,542 | `rangeBar` | `function rangeBar(` |
| 7,554 | `trendOf` | `function trendOf(` |
| 7,599 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,609 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,630_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,631 | `yearOf` | `function yearOf(` |
| 7,632 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,633_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,663 | `totalStat` | `function totalStat(` |
| 7,669 | `atQuarter` | `function atQuarter(` |
| 7,670 | `atMonth` | `function atMonth(` |
| 7,671 | `cycleAverages` | `function cycleAverages(` |
| 7,678 | `ordinal` | `function ordinal(` |
| 7,679 | `hiCard` | `function hiCard(` |
| 7,690 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,704_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,711 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,727 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,734 | `moreRow` | `function moreRow(` |
| 7,740 | `powerPageNote` | `var powerPageNote =` |
| 7,741 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,747_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,750 | `xLabelOf` | `function xLabelOf(` |
| 7,770 | `fitGroup` | `function fitGroup(` |
| 7,792 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,851_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,875 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,885 | `vGrid` | `function vGrid(` |
| 7,910 | `COL_FILL` | `var COL_FILL =` |
| 7,943 | `colPath` | `function colPath(` |
| 7,948 | `colWidth` | `function colWidth(` |
| 7,995 | `AXIS` | `var AXIS =` |
| 7,996 | `chartAxes` | `function chartAxes(` |
| 8,056 | `divergeChart` | `function divergeChart(` |
| 8,124 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,153_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,161 | `maxIn` | `function maxIn(` |
| 8,179 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,193 | `PEEK_W` | `var PEEK_W =` |
| 8,196 | `PEEK_H` | `var PEEK_H =` |
| 8,201 | `colPeek` | `function colPeek(` |
| 8,228 | `meterPeek` | `function meterPeek(` |
| 8,245 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,250 | `pressureZone` | `function pressureZone(` |
| 8,265 | `HZN_BACK` | `var HZN_BACK =` |
| 8,266 | `hznLast` | `function hznLast(` |
| 8,267 | `hznBack` | `function hznBack(` |
| 8,268 | `horizonWord` | `function horizonWord(` |
| 8,293 | `HZN_METERS` | `var HZN_METERS =` |
| 8,301 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,325 | `_hznPanel` | `var _hznPanel =` |
| 8,326 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,350 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,355 | `RISK_RISK` | `var RISK_RISK =` |
| 8,360 | `riskCell` | `function riskCell(` |
| 8,361 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,392 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,417_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,438 | `pulseClipN` | `var pulseClipN =` |
| 8,439 | `beatPath` | `function beatPath(` |
| 8,464 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,478 | `pulsePeek` | `function pulsePeek(` |
| 8,486 | `pulseBlock` | `function pulseBlock(` |
| 8,506 | `CHEV` | `var CHEV =` |
| 8,508 | `peekCard` | `function peekCard(` |
| 8,562 | `dropSvg` | `function dropSvg(` |
| 8,574 | `volumeSvg` | `function volumeSvg(` |
| 8,581 | `gaugeSvg` | `function gaugeSvg(` |
| 8,585 | `diamondSvg` | `function diamondSvg(` |
| 8,599 | `energyFromReserve` | `function energyFromReserve(` |
| 8,611 | `sproutSvg` | `function sproutSvg(` |
| 8,622 | `markSvg` | `function markSvg(` |
| 8,628 | `hormoneSvg` | `function hormoneSvg(` |
| 8,634 | `flameSvg` | `function flameSvg(` |
| 8,638 | `gearSvg` | `function gearSvg(` |
| 8,650 | `thermoSvg` | `function thermoSvg(` |
| 8,669 | `trendUpSvg` | `function trendUpSvg(` |
| 8,671 | `ecgSvg` | `function ecgSvg(` |
| 8,685 | `circulationSvg` | `function circulationSvg(` |
| 8,686 | `weatherSvg` | `function weatherSvg(` |
| 8,707 | `moodSvg` | `function moodSvg(` |
| 8,731 | `boltSvg` | `function boltSvg(` |
| 8,734 | `houseSvg` | `function houseSvg(` |
| 8,742 | `sunriseSvg` | `function sunriseSvg(` |
| 8,757 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,768 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,785_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,806 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,807 | `dsrHistory` | `var dsrHistory =` |
| 8,808 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,809 | `savHistory` | `var savHistory =` |
| 8,814 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,824 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,825 | `dsrNow` | `var dsrNow =` |
| 8,826 | `savNow` | `var savNow =` |
| 8,827 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,832 | `householdsWord` | `function householdsWord(` |
| 8,839 | `householdsNow` | `var householdsNow =` |
| 8,846 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,847 | `dsrMeter` | `var dsrMeter =` |
| 8,850 | `savMeter` | `var savMeter =` |
| 8,853 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,870 | `savInfoHtml` | `function savInfoHtml(` |
| 8,888 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,897 | `curveNow` | `var curveNow =` |
| 8,898 | `curveTag` | `var curveTag =` |
| 8,899 | `curveSub` | `var curveSub =` |
| 8,903 | `curvePct` | `function curvePct(` |
| 8,904 | `curveNoteFull` | `var curveNoteFull =` |
| 8,919 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,927 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,968 | `marketCycles` | `var marketCycles =` |
| 8,998 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,000_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,021 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,022 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,027_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,048 | `slopeOf` | `function slopeOf(` |
| 9,059 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,065 | `readSeason` | `function readSeason(` |
| 9,090 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,092 | `qLabel` | `function qLabel(` |
| 9,116 | `regimeTrack` | `function regimeTrack(` |
| 9,139 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,141_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,148 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,149 | `seasonTitle` | `function seasonTitle(` |
| 9,150 | `monthLabel` | `function monthLabel(` |
| 9,151 | `cycleModel` | `function cycleModel(` |
| 9,203 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,211 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,218 | `nowModel` | `var nowModel =` |
| 9,219 | `readingNow` | `var readingNow =` |
| 9,220 | `cpiNow` | `var cpiNow =` |
| 9,221 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,222 | `currentSeason` | `var currentSeason =` |
| 9,223 | `seasonWhy` | `var seasonWhy =` |
| 9,240 | `seasonGroup` | `function seasonGroup(` |
| 9,254 | `arcGauge` | `function arcGauge(` |
| 9,296 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,309 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,311 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,315 | `policyFacts` | `function policyFacts(` |
| 9,327 | `allSources` | `var allSources =` |
| 9,351 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,384_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,387 | `SVG_NS` | `var SVG_NS =` |
| 9,388 | `svgEl` | `function svgEl(` |
| 9,401 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,437_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,438 | `clampPct` | `function clampPct(` |
| 9,445 | `infoIcon` | `function infoIcon(` |
| 9,454 | `detailTexts` | `var detailTexts =` |
| 9,472 | `detailSlots` | `var detailSlots =` |
| 9,473 | `detailSlot` | `function detailSlot(` |
| 9,484 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,488 | `_growthPanel` | `var _growthPanel =` |
| 9,489 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,495 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,506 | `facts` | `function facts(` |
| 9,507 | `factsFrom` | `function factsFrom(` |
| 9,511 | `expandBtn` | `function expandBtn(` |
| 9,517 | `sheetRenderers` | `var sheetRenderers =` |
| 9,534 | `pageMode` | `var pageMode =` |
| 9,541 | `pageCycles` | `var pageCycles =` |
| 9,546 | `pageRange` | `var pageRange =` |
| 9,552 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,586_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,597 | `meterHtml` | `function meterHtml(` |
| 9,625 | `srcHtml` | `function srcHtml(` |
| 9,634 | `TIMING` | `var TIMING =` |
| 9,640 | `timingMark` | `function timingMark(` |
| 9,654 | `timingPill` | `function timingPill(` |
| 9,675 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,683 | `seatPageFoot` | `function seatPageFoot(` |
| 9,706 | `timingMembers` | `var timingMembers =` |
| 9,707 | `registerTiming` | `function registerTiming(` |
| 9,713 | `headHtml` | `function headHtml(` |
| 9,731 | `heldHighlights` | `var heldHighlights =` |
| 9,732 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,790_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,791 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,198_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,199 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,422_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,423 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,455_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,461 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,545_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,546 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,564_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,567 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,590_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,602 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,692_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,693 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,813_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,816 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,938_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,950 | `totalRiseIn` | `function totalRiseIn(` |
| 10,960 | `eraInflation` | `function eraInflation(` |
| 10,971 | `eraGrowth` | `function eraGrowth(` |
| 10,987 | `fmtSigned` | `function fmtSigned(` |
| 10,992 | `regimeArrow` | `function regimeArrow(` |
| 10,998 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,999 | `growthShown` | `function growthShown(` |
| 11,000 | `growthShownCap` | `function growthShownCap(` |
| 11,001 | `regimeState` | `function regimeState(` |
| 11,005 | `phaseClass` | `function phaseClass(` |
| 11,007 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,019 | `cycleViewEl` | `var cycleViewEl =` |
| 11,023 | `tempCard` | `var tempCard =` |
| 11,024 | `placeCharts` | `function placeCharts(` |
| 11,029 | `shownEra` | `var shownEra =` |
| 11,030 | `calendarReset` | `var calendarReset =` |
| 11,031 | `metricPageReset` | `var metricPageReset =` |
| 11,032 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,035 | `topbarBack` | `var topbarBack =` |
| 11,036 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,043_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,044 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,205_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,206 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,224_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,227 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,248_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,254 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,257 | `hubSet` | `function hubSet(` |
| 11,270 | `quarterPopup` | `function quarterPopup(` |
| 11,303 | `hubShowDefault` | `function hubShowDefault(` |
| 11,312 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,318 | `hubShowYear` | `function hubShowYear(` |
| 11,333 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,425_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,428 | `tempState` | `var tempState =` |
| 11,431 | `chartLink` | `var chartLink =` |
| 11,451 | `m2Step` | `function m2Step(` |
| 11,454 | `heatStep` | `function heatStep(` |
| 11,458 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,645_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,648 | `drawGrowth` | `function drawGrowth(` |
| 11,787 | `wireResize` | `function wireResize(` |
| 11,793 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,805_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,806 | `renderCycleView` | `function renderCycleView(` |
| 11,859 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,870 | `PEER_CARET` | `var PEER_CARET =` |
| 11,871 | `peerList` | `function peerList(` |
| 11,872 | `peerChosen` | `function peerChosen(` |
| 11,873 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,877 | `renderPeerPills` | `function renderPeerPills(` |
| 11,927 | `shownEraModel` | `var shownEraModel =` |
| 11,928 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,930_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,932 | `stripGroupName` | `var stripGroupName =` |
| 11,933 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,979 | `marketStripHtml` | `function marketStripHtml(` |
| 12,042 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,043 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,073_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,074 | `renderCycleList` | `function renderCycleList(` |
| 12,164 | `renderSignsList` | `function renderSignsList(` |
| 12,446 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,713_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,714 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,776_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,777 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,810_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,811 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,989–3,992 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,274–8,287 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,099–9,112 | `seasonTrackAll` | The season, computed |
| 9,134–9,138 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,174 |
| `desire-range` | 10,123 |
| `fear-range` | 10,782 |
| `hormones-range` | 10,039 |
| `hzn-range` | 10,494 |
| `pulse-range` | 10,074 |
| `sheet-marker-deficit` | 13,171 |
| `sheet-metric-gdp` | 13,055 |
| `sheet-metric-households` | 13,205 |
| `sheet-metric-power` | 13,134 |
| `sheet-metric-temp` | 13,005 |
| `sheet-metric-valuation` | 13,247 |
| `sheet-sign-activity` | 13,116 |
| `sheet-sign-desire` | 10,124 |
| `sheet-sign-horizon` | 10,495 |
| `sheet-sign-hormones` | 10,038 |
| `sheet-sign-pulse` | 10,073 |
| `sheet-sign-sentiment` | 10,787 |
| `sheet-sign-volume` | 10,097 |
| `volume-range` | 10,098 |
| `ylm-range` | 10,190 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,180 |
| `desire-range` | 10,106 |
| `fear-range` | 10,739 |
| `hzn-range` | 10,471 |
| `pulse-range` | 10,051 |
| `sheet-metric-gdp` | 13,056 |
| `sheet-metric-power` | 13,135 |
| `sheet-metric-temp` | 13,006 |
| `sheet-metric-valuation` | 13,248 |
| `volume-range` | 10,078 |
| `ylm-range` | 10,152 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,134 |
| `sheet-metric-gdp` | 6,135 |
| `sheet-sign-activity` | 6,142 |
| `sheet-metric-power` | 6,143 |
| `sheet-metric-valuation` | 6,145 |
| `sheet-metric-households` | 6,146 |
| `deficit-range` | 6,147 |
| `volume-range` | 6,148 |
| `pulse-range` | 6,149 |
| `hzn-range` | 6,150 |
| `ylm-range` | 6,165 |
| `desire-range` | 6,166 |
| `fear-range` | 6,167 |
| `hormones-range` | 6,168 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 189 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 322 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 420 | yearly calendar — one card per year, grouped into five eras |
| 427 | season strip |
| 480 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels \u2026 so if one day |
| 644 | tab bar (app-style segmented navigation) |
| 711 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 750 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 966 | journal (editorial content tab) |
| 972 | content tab: reading companion |
| 1,030 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,502 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,536 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,546 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,557 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,590 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,766 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,943 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,436 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,484 | hero: yield curve |
| 2,580 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,659 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,758 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,783 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,798 | long cycle (structural layer) |
| 2,839 | indicator grid |
| 2,882 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,899 | info icon + popover (progressive disclosure for longer notes) |
| 2,920 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,015 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (142), which is what the renderers fill:

| Line | id |
|---|---|
| 3,047 | `topbar-back` |
| 3,050 | `topbar-title` |
| 3,051 | `menu-btn` |
| 3,068 | `main` |
| 3,075 | `cycle-view` |
| 3,083 | `cycle-kicker` |
| 3,089 | `cycle-dial` |
| 3,091 | `season-wheel-hub-date` |
| 3,092 | `season-wheel-hub-theme` |
| 3,093 | `season-wheel-hub-detail` |
| 3,101 | `temp-card` |
| 3,103 | `temp-kicker` |
| 3,104 | `temp-sub` |
| 3,107 | `temp-svg` |
| 3,108 | `temp-tooltip` |
| 3,114 | `temp-stats` |
| 3,121 | `growth-card` |
| 3,124 | `growth-kicker` |
| 3,124 | `growth-phase` |
| 3,124 | `growth-sub` |
| 3,124 | `growth-peers` |
| 3,125 | `growth-svg` |
| 3,125 | `growth-tooltip` |
| 3,130 | `growth-stats` |
| 3,139 | `today-analysis` |
| 3,143 | `peek-row` |
| 3,147 | `sheet-metric-temp` |
| 3,148 | `temp-timing` |
| 3,149 | `temp-chart` |
| 3,151 | `temp-rangebar` |
| 3,153 | `temp-head` |
| 3,154 | `slot-temp` |
| 3,155 | `temp-history` |
| 3,156 | `temp-hist-tooltip` |
| 3,159 | `temp-trend` |
| 3,163 | `temp-highlights` |
| 3,166 | `sheet-metric-gdp` |
| 3,167 | `gdp-timing` |
| 3,168 | `gdp-chart` |
| 3,169 | `gdp-rangebar` |
| 3,171 | `gdp-head` |
| 3,172 | `slot-growth` |
| 3,173 | `gdp-history` |
| 3,174 | `gdp-hist-tooltip` |
| 3,175 | `gdp-yoy` |
| 3,185 | `gdp-trend` |
| 3,187 | `gdp-panel` |
| 3,192 | `subj-ring-gdp` |
| 3,194 | `subj-label-gdp` |
| 3,195 | `subj-value-gdp` |
| 3,196 | `subj-say-gdp` |
| 3,197 | `subj-spark-gdp` |
| 3,202 | `subj-ctx-gdp` |
| 3,205 | `gdp-highlights` |
| 3,213 | `sheet-metric-power` |
| 3,214 | `power-timing` |
| 3,215 | `power-head` |
| 3,216 | `power-chart` |
| 3,220 | `subj-ring-resilience` |
| 3,223 | `subj-value-resilience` |
| 3,224 | `subj-say-resilience` |
| 3,229 | `subj-ctx-resilience` |
| 3,233 | `longcycle-title` |
| 3,235 | `longcycle-tag` |
| 3,249 | `power-highlights` |
| 3,256 | `sheet-marker-deficit` |
| 3,262 | `sheet-metric-households` |
| 3,263 | `households-timing` |
| 3,264 | `households-chart` |
| 3,265 | `households-highlights` |
| 3,269 | `sheet-metric-valuation` |
| 3,270 | `valuation-timing` |
| 3,271 | `valuation-head` |
| 3,272 | `valuation-chart` |
| 3,276 | `subj-ring-valuation` |
| 3,279 | `subj-value-valuation` |
| 3,280 | `subj-say-valuation` |
| 3,285 | `subj-ctx-valuation` |
| 3,289 | `valuation-title` |
| 3,291 | `valuation-tag` |
| 3,298 | `valuation-highlights` |
| 3,322 | `subj-value-hormones` |
| 3,323 | `subj-say-hormones` |
| 3,331 | `hormones-history` |
| 3,334 | `ylm-series` |
| 3,338 | `ylm-head` |
| 3,339 | `ylm-shell` |
| 3,340 | `ylm-svg` |
| 3,341 | `ylm-tooltip` |
| 3,344 | `ylm-trend` |
| 3,350 | `hormones-highlights` |
| 3,376 | `subj-value-horizon` |
| 3,377 | `subj-say-horizon` |
| 3,378 | `subj-spark-horizon` |
| 3,388 | `hzn-timeline` |
| 3,390 | `hzn-head` |
| 3,391 | `spread-history-shell` |
| 3,392 | `spread-history-svg` |
| 3,393 | `spread-history-tooltip` |
| 3,396 | `hzn-trend` |
| 3,398 | `hzn-panel` |
| 3,400 | `horizon-insights` |
| 3,401 | `horizon-highlights` |
| 3,409 | `subj-ring-sentiment` |
| 3,412 | `subj-value-sentiment` |
| 3,413 | `subj-say-sentiment` |
| 3,414 | `subj-spark-sentiment` |
| 3,428 | `fear-history` |
| 3,429 | `curve-highlights` |
| 3,443 | `signs-list` |
| 3,454 | `calendar-list` |
| 3,459 | `indicators-peek` |
| 3,505 | `cycle-list` |
| 3,511 | `cycle-more` |
| 3,512 | `cycle-more-label` |
| 3,521 | `calendar-cycle` |
| 3,522 | `calendar-cycle-slot` |
| 3,573 | `seasons-kicker` |
| 3,574 | `seasons-rows` |
| 3,578 | `framework-kicker` |
| 3,580 | `framework-rows` |
| 3,587 | `more-menu` |
| 3,590 | `menu-back` |
| 3,604 | `sources-open` |
| 3,612 | `appearance-current` |
| 3,620 | `sheet-howto` |
| 3,664 | `sheet-book` |
| 3,696 | `sheet-appearance` |
| 3,704 | `theme-toggle` |
| 3,711 | `sheet-contact` |
| 3,720 | `contact-form` |
| 3,721 | `contact-title` |
| 3,722 | `contact-message` |
| 3,724 | `contact-hint` |
| 3,725 | `contact-send` |
| 3,734 | `sheet-sources` |
| 3,737 | `sources-back` |
| 3,744 | `asof-text` |
| 3,745 | `sources-groups` |
| 3,752 | `detail-backdrop` |
| 3,754 | `detail-modal-close` |
| 3,755 | `detail-modal-body` |

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

