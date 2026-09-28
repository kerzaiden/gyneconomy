# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,002 lines**, about 1169 KB, roughly **332 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `22e8e83` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,048 | the whole stylesheet, every token and rule |
| **Markup** | 3,049–3,788 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,789–13,949 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,950–14,002 | </body></html> |

Counts: **248** top-level functions, **178** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,794_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,798 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,799 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,800 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,818 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,822 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,827_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,837 | `wheelMeta` | `var wheelMeta =` |
| 3,848 | `seasonOverride` | `var seasonOverride =` |
| 3,851 | `cycleNowNote` | `var cycleNowNote =` |
| 3,860 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,946 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,991 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,004_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,021 | `LIVE` | `function LIVE(` |
| 4,048 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,056 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,057 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,060_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,091 | `repaintFigureText` | `function repaintFigureText(` |
| 4,099 | `repaintTag` | `function repaintTag(` |
| 4,109 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,134 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,142 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,150 | `REPAINT` | `var REPAINT =` |
| 4,167 | `liveAsOf` | `var liveAsOf =` |
| 4,168 | `fmtAsOf` | `function fmtAsOf(` |
| 4,173 | `applyLive` | `function applyLive(` |
| 4,249 | `repaintPolicy` | `function repaintPolicy(` |
| 4,299 | `GYN` | `var GYN =` |
| 4,319 | `refreshLiveData` | `function refreshLiveData(` |
| 4,360 | `fetchSiteData` | `function fetchSiteData(` |
| 4,390 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,404_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,405 | `yieldCurve` | `var yieldCurve =` |
| 4,418 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,442 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,454 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,482_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,487 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,511 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,535 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,559 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,586 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,611_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,620 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,630 | `uninvLagToday` | `var uninvLagToday =` |
| 4,642 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,655 | `gdpPeers` | `var gdpPeers =` |
| 4,696 | `gdpSrc` | `var gdpSrc =` |
| 4,697 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,702 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,715 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,753_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,775 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,785_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,801 | `stressScoreFor` | `function stressScoreFor(` |
| 4,807 | `stressScore` | `var stressScore =` |
| 4,813 | `powerOf` | `var powerOf =` |
| 4,814 | `powerScore` | `var powerScore =` |
| 4,831 | `stressHistory` | `var stressHistory =` |
| 4,842 | `powerMeter` | `var powerMeter =` |
| 4,844 | `stressNoteFull` | `var stressNoteFull =` |
| 4,876 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,878_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,901 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,902 | `deficitHistory` | `var deficitHistory =` |
| 4,905 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,912 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,914 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 4,957 | `fedFundsHistory` | `var fedFundsHistory =` |
| 4,958 | `fearCurveHistory` | `var fearCurveHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,975_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,988 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,001_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,015 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,018 | `timelineSpan` | `function timelineSpan(` |
| 5,024 | `timelineFor` | `function timelineFor(` |
| 5,037 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,043_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,049 | `windowScale` | `function windowScale(` |
| 5,065 | `windowYears` | `function windowYears(` |
| 5,083 | `refName` | `function refName(` |
| 5,090 | `histReadEnsure` | `function histReadEnsure(` |
| 5,129 | `seatBandReading` | `function seatBandReading(` |
| 5,152 | `histReadFill` | `function histReadFill(` |
| 5,280 | `histAxisEnds` | `function histAxisEnds(` |
| 5,291 | `histLegend` | `function histLegend(` |
| 5,379 | `refitHistory` | `function refitHistory(` |
| 5,391 | `wireHistHover` | `function wireHistHover(` |
| 5,450 | `mWindowFrom` | `function mWindowFrom(` |
| 5,455 | `qWindowFrom` | `function qWindowFrom(` |
| 5,460 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,461 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,463 | `DEF_1983` | `var DEF_1983 =` |
| 5,465 | `defFrom` | `function defFrom(` |
| 5,476 | `deficitChart` | `function deficitChart(` |
| 5,566 | `deficitBlock` | `function deficitBlock(` |
| 5,628 | `buffettHistory` | `var buffettHistory =` |
| 5,658 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,659 | `hyDates` | `var hyDates =` |
| 5,660 | `hyOas` | `var hyOas =` |
| 5,661 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,668 | `hyAt` | `function hyAt(` |
| 5,672 | `hyLabel` | `function hyLabel(` |
| 5,673 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,674 | `hyNum` | `function hyNum(` |
| 5,675 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,685 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,695 | `capeHistory` | `var capeHistory =` |
| 5,697 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,715_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,721 | `sentiment` | `var sentiment =` |
| 5,739 | `valuation` | `var valuation =` |
| 5,776 | `valRow` | `function valRow(` |
| 5,784 | `coincident` | `var coincident =` |
| 5,845 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,863 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,864 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,865 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,867_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,880 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,881 | `m2vHistory` | `var m2vHistory =` |
| 5,901 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,994 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,084 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,085 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,125_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,131 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,132 | `DOTS` | `var DOTS =` |
| 6,134 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,171 | `histHead` | `function histHead(` |
| 6,192 | `headNoteIdx` | `var headNoteIdx =` |
| 6,193 | `headMenuHtml` | `function headMenuHtml(` |
| 6,213 | `headMenuFor` | `var headMenuFor =` |
| 6,214 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,243 | `nameWithMark` | `function nameWithMark(` |
| 6,249 | `panelRow` | `function panelRow(` |
| 6,275 | `panelFromMeter` | `function panelFromMeter(` |
| 6,289 | `meterFlagged` | `function meterFlagged(` |
| 6,300 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,328 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,342 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,361 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,380 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,394 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,419 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,450 | `desireBlock` | `function desireBlock(` |
| 6,477 | `volumeBlock` | `function volumeBlock(` |
| 6,502 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,525 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,533_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,546 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,547 | `m2Level` | `var m2Level =` |
| 6,569 | `m2Yoy` | `var m2Yoy =` |
| 6,570 | `M2_NORM` | `var M2_NORM =` |
| 6,575 | `volumeVerdict` | `function volumeVerdict(` |
| 6,612 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,613 | `unempHistory` | `var unempHistory =` |
| 6,619 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,634 | `NROU_NOW` | `var NROU_NOW =` |
| 6,635 | `unempState` | `function unempState(` |
| 6,641 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,705_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,714 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 6,722 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,777 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,778 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,781 | `qAtIndex` | `function qAtIndex(` |
| 6,782 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,790_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,805 | `householdsChart` | `function householdsChart(` |
| 6,873 | `lastChartAvg` | `var lastChartAvg =` |
| 6,874 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,959 | `GDP_NORM` | `var GDP_NORM =` |
| 6,965 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,966 | `gdpNowQ` | `var gdpNowQ =` |
| 6,967 | `gdpMeter` | `var gdpMeter =` |
| 6,970 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,992 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,058 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,122 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,130 | `velocityVerdict` | `function velocityVerdict(` |
| 7,138 | `derivePulseTag` | `function derivePulseTag(` |
| 7,144 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,204_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,213 | `seasonReading` | `var seasonReading =` |
| 7,262 | `frameworkRows` | `var frameworkRows =` |
| 7,272 | `vixRow` | `var vixRow =` |
| 7,280 | `vixWordOf` | `var vixWordOf =` |
| 7,284 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,299_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,303 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,312_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,313 | `calendarTodayY` | `var calendarTodayY =` |
| 7,344 | `vix3mClose` | `var vix3mClose =` |
| 7,345 | `fearCurve` | `function fearCurve(` |
| 7,352 | `curveVerdict` | `function curveVerdict(` |
| 7,359 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,364 | `valuationVerdict` | `function valuationVerdict(` |
| 7,382 | `sparkHtml` | `function sparkHtml(` |
| 7,401 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,407_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,420 | `modeBar` | `function modeBar(` |
| 7,435 | `pickerOpen` | `var pickerOpen =` |
| 7,439 | `cycleByName` | `function cycleByName(` |
| 7,443 | `openCycle` | `function openCycle(` |
| 7,449 | `cycleSlice` | `function cycleSlice(` |
| 7,458 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,466 | `cycleMonths` | `function cycleMonths(` |
| 7,485 | `histControls` | `function histControls(` |
| 7,499 | `cycLabel` | `function cycLabel(` |
| 7,515 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,524 | `cyclePicker` | `function cyclePicker(` |
| 7,543 | `rangeBar` | `function rangeBar(` |
| 7,555 | `trendOf` | `function trendOf(` |
| 7,600 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,610 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,631_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,632 | `yearOf` | `function yearOf(` |
| 7,633 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,634_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,664 | `totalStat` | `function totalStat(` |
| 7,670 | `atQuarter` | `function atQuarter(` |
| 7,671 | `atMonth` | `function atMonth(` |
| 7,672 | `cycleAverages` | `function cycleAverages(` |
| 7,679 | `ordinal` | `function ordinal(` |
| 7,680 | `hiCard` | `function hiCard(` |
| 7,691 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,705_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,712 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,728 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,735 | `moreRow` | `function moreRow(` |
| 7,741 | `powerPageNote` | `var powerPageNote =` |
| 7,742 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,748_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,751 | `xLabelOf` | `function xLabelOf(` |
| 7,771 | `fitGroup` | `function fitGroup(` |
| 7,793 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,852_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,876 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,886 | `vGrid` | `function vGrid(` |
| 7,911 | `COL_FILL` | `var COL_FILL =` |
| 7,944 | `colPath` | `function colPath(` |
| 7,949 | `colWidth` | `function colWidth(` |
| 7,996 | `AXIS` | `var AXIS =` |
| 7,997 | `chartAxes` | `function chartAxes(` |
| 8,057 | `divergeChart` | `function divergeChart(` |
| 8,125 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,154_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,162 | `maxIn` | `function maxIn(` |
| 8,180 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,194 | `PEEK_W` | `var PEEK_W =` |
| 8,197 | `PEEK_H` | `var PEEK_H =` |
| 8,202 | `colPeek` | `function colPeek(` |
| 8,229 | `meterPeek` | `function meterPeek(` |
| 8,246 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,251 | `pressureZone` | `function pressureZone(` |
| 8,266 | `HZN_BACK` | `var HZN_BACK =` |
| 8,267 | `hznLast` | `function hznLast(` |
| 8,268 | `hznBack` | `function hznBack(` |
| 8,269 | `horizonWord` | `function horizonWord(` |
| 8,294 | `HZN_METERS` | `var HZN_METERS =` |
| 8,302 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,326 | `_hznPanel` | `var _hznPanel =` |
| 8,327 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,347 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,348 | `levelZone` | `function levelZone(` |
| 8,360 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,365 | `RISK_RISK` | `var RISK_RISK =` |
| 8,370 | `riskCell` | `function riskCell(` |
| 8,371 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,402 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,427_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,448 | `pulseClipN` | `var pulseClipN =` |
| 8,449 | `beatPath` | `function beatPath(` |
| 8,474 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,488 | `pulsePeek` | `function pulsePeek(` |
| 8,496 | `pulseBlock` | `function pulseBlock(` |
| 8,516 | `CHEV` | `var CHEV =` |
| 8,518 | `peekCard` | `function peekCard(` |
| 8,572 | `dropSvg` | `function dropSvg(` |
| 8,584 | `volumeSvg` | `function volumeSvg(` |
| 8,591 | `gaugeSvg` | `function gaugeSvg(` |
| 8,595 | `diamondSvg` | `function diamondSvg(` |
| 8,609 | `energyFromReserve` | `function energyFromReserve(` |
| 8,621 | `sproutSvg` | `function sproutSvg(` |
| 8,632 | `markSvg` | `function markSvg(` |
| 8,638 | `hormoneSvg` | `function hormoneSvg(` |
| 8,644 | `flameSvg` | `function flameSvg(` |
| 8,648 | `gearSvg` | `function gearSvg(` |
| 8,660 | `thermoSvg` | `function thermoSvg(` |
| 8,679 | `trendUpSvg` | `function trendUpSvg(` |
| 8,681 | `ecgSvg` | `function ecgSvg(` |
| 8,695 | `circulationSvg` | `function circulationSvg(` |
| 8,696 | `weatherSvg` | `function weatherSvg(` |
| 8,717 | `moodSvg` | `function moodSvg(` |
| 8,741 | `boltSvg` | `function boltSvg(` |
| 8,744 | `houseSvg` | `function houseSvg(` |
| 8,752 | `sunriseSvg` | `function sunriseSvg(` |
| 8,767 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,778 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,795_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,816 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,817 | `dsrHistory` | `var dsrHistory =` |
| 8,818 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,819 | `savHistory` | `var savHistory =` |
| 8,824 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,834 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,835 | `dsrNow` | `var dsrNow =` |
| 8,836 | `savNow` | `var savNow =` |
| 8,837 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,842 | `householdsWord` | `function householdsWord(` |
| 8,849 | `householdsNow` | `var householdsNow =` |
| 8,856 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,857 | `dsrMeter` | `var dsrMeter =` |
| 8,860 | `savMeter` | `var savMeter =` |
| 8,863 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,880 | `savInfoHtml` | `function savInfoHtml(` |
| 8,898 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,907 | `curveNow` | `var curveNow =` |
| 8,908 | `curveTag` | `var curveTag =` |
| 8,909 | `curveSub` | `var curveSub =` |
| 8,913 | `curvePct` | `function curvePct(` |
| 8,914 | `curveNoteFull` | `var curveNoteFull =` |
| 8,929 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,937 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,978 | `marketCycles` | `var marketCycles =` |
| 9,008 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,010_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,031 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,032 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,037_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,058 | `slopeOf` | `function slopeOf(` |
| 9,069 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,075 | `readSeason` | `function readSeason(` |
| 9,100 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,102 | `qLabel` | `function qLabel(` |
| 9,126 | `regimeTrack` | `function regimeTrack(` |
| 9,149 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,151_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,158 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,159 | `seasonTitle` | `function seasonTitle(` |
| 9,160 | `monthLabel` | `function monthLabel(` |
| 9,161 | `cycleModel` | `function cycleModel(` |
| 9,213 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,221 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,228 | `nowModel` | `var nowModel =` |
| 9,229 | `readingNow` | `var readingNow =` |
| 9,230 | `cpiNow` | `var cpiNow =` |
| 9,231 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,232 | `currentSeason` | `var currentSeason =` |
| 9,233 | `seasonWhy` | `var seasonWhy =` |
| 9,250 | `seasonGroup` | `function seasonGroup(` |
| 9,264 | `arcGauge` | `function arcGauge(` |
| 9,306 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,319 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,321 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,325 | `policyFacts` | `function policyFacts(` |
| 9,337 | `allSources` | `var allSources =` |
| 9,361 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,394_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,397 | `SVG_NS` | `var SVG_NS =` |
| 9,398 | `svgEl` | `function svgEl(` |
| 9,411 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,447_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,448 | `clampPct` | `function clampPct(` |
| 9,455 | `infoIcon` | `function infoIcon(` |
| 9,464 | `detailTexts` | `var detailTexts =` |
| 9,482 | `detailSlots` | `var detailSlots =` |
| 9,483 | `detailSlot` | `function detailSlot(` |
| 9,494 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,498 | `_growthPanel` | `var _growthPanel =` |
| 9,499 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,505 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,516 | `facts` | `function facts(` |
| 9,517 | `factsFrom` | `function factsFrom(` |
| 9,521 | `expandBtn` | `function expandBtn(` |
| 9,527 | `sheetRenderers` | `var sheetRenderers =` |
| 9,544 | `pageMode` | `var pageMode =` |
| 9,551 | `pageCycles` | `var pageCycles =` |
| 9,556 | `pageRange` | `var pageRange =` |
| 9,562 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,596_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,607 | `meterHtml` | `function meterHtml(` |
| 9,635 | `srcHtml` | `function srcHtml(` |
| 9,644 | `TIMING` | `var TIMING =` |
| 9,650 | `timingMark` | `function timingMark(` |
| 9,664 | `timingPill` | `function timingPill(` |
| 9,685 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,693 | `seatPageFoot` | `function seatPageFoot(` |
| 9,716 | `timingMembers` | `var timingMembers =` |
| 9,717 | `registerTiming` | `function registerTiming(` |
| 9,723 | `headHtml` | `function headHtml(` |
| 9,741 | `heldHighlights` | `var heldHighlights =` |
| 9,742 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,800_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,801 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,200_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,201 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,424_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,425 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,457_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,463 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,547_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,548 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,566_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,569 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,592_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,604 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,667_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,668 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,788_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,791 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,989_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,001 | `totalRiseIn` | `function totalRiseIn(` |
| 11,011 | `eraInflation` | `function eraInflation(` |
| 11,022 | `eraGrowth` | `function eraGrowth(` |
| 11,038 | `fmtSigned` | `function fmtSigned(` |
| 11,043 | `regimeArrow` | `function regimeArrow(` |
| 11,049 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,050 | `growthShown` | `function growthShown(` |
| 11,051 | `growthShownCap` | `function growthShownCap(` |
| 11,052 | `regimeState` | `function regimeState(` |
| 11,056 | `phaseClass` | `function phaseClass(` |
| 11,058 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,070 | `cycleViewEl` | `var cycleViewEl =` |
| 11,074 | `tempCard` | `var tempCard =` |
| 11,075 | `placeCharts` | `function placeCharts(` |
| 11,080 | `shownEra` | `var shownEra =` |
| 11,081 | `calendarReset` | `var calendarReset =` |
| 11,082 | `metricPageReset` | `var metricPageReset =` |
| 11,083 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,086 | `topbarBack` | `var topbarBack =` |
| 11,087 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,094_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,095 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,256_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,257 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,275_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,278 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,299_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,305 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,308 | `hubSet` | `function hubSet(` |
| 11,321 | `quarterPopup` | `function quarterPopup(` |
| 11,354 | `hubShowDefault` | `function hubShowDefault(` |
| 11,363 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,369 | `hubShowYear` | `function hubShowYear(` |
| 11,384 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,476_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,479 | `tempState` | `var tempState =` |
| 11,482 | `chartLink` | `var chartLink =` |
| 11,502 | `m2Step` | `function m2Step(` |
| 11,505 | `heatStep` | `function heatStep(` |
| 11,509 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,696_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,699 | `drawGrowth` | `function drawGrowth(` |
| 11,838 | `wireResize` | `function wireResize(` |
| 11,844 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,856_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,857 | `renderCycleView` | `function renderCycleView(` |
| 11,910 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,921 | `PEER_CARET` | `var PEER_CARET =` |
| 11,922 | `peerList` | `function peerList(` |
| 11,923 | `peerChosen` | `function peerChosen(` |
| 11,924 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,928 | `renderPeerPills` | `function renderPeerPills(` |
| 11,978 | `shownEraModel` | `var shownEraModel =` |
| 11,979 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,981_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,983 | `stripGroupName` | `var stripGroupName =` |
| 11,984 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,030 | `marketStripHtml` | `function marketStripHtml(` |
| 12,093 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,094 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,124_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,125 | `renderCycleList` | `function renderCycleList(` |
| 12,215 | `renderSignsList` | `function renderSignsList(` |
| 12,493 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,748_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,749 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,811_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,812 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,845_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,846 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,017–4,020 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,275–8,288 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,109–9,122 | `seasonTrackAll` | The season, computed |
| 9,144–9,148 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,209 |
| `desire-range` | 10,125 |
| `fear-range` | 10,757 |
| `hormones-range` | 10,639 |
| `hzn-range` | 10,496 |
| `pulse-range` | 10,076 |
| `sheet-marker-deficit` | 13,206 |
| `sheet-metric-gdp` | 13,090 |
| `sheet-metric-households` | 13,240 |
| `sheet-metric-power` | 13,169 |
| `sheet-metric-temp` | 13,040 |
| `sheet-metric-valuation` | 13,282 |
| `sheet-sign-activity` | 13,151 |
| `sheet-sign-desire` | 10,126 |
| `sheet-sign-horizon` | 10,497 |
| `sheet-sign-hormones` | 10,640 |
| `sheet-sign-pulse` | 10,075 |
| `sheet-sign-sentiment` | 10,762 |
| `sheet-sign-volume` | 10,099 |
| `sheet-sign-yield` | 10,041 |
| `volume-range` | 10,100 |
| `ylm-range` | 10,043 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,215 |
| `desire-range` | 10,108 |
| `fear-range` | 10,714 |
| `hzn-range` | 10,473 |
| `pulse-range` | 10,053 |
| `sheet-metric-gdp` | 13,091 |
| `sheet-metric-power` | 13,170 |
| `sheet-metric-temp` | 13,041 |
| `sheet-metric-valuation` | 13,283 |
| `volume-range` | 10,080 |
| `ylm-range` | 10,154 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,135 |
| `sheet-metric-gdp` | 6,136 |
| `sheet-sign-activity` | 6,143 |
| `sheet-metric-power` | 6,144 |
| `sheet-metric-valuation` | 6,146 |
| `sheet-metric-households` | 6,147 |
| `deficit-range` | 6,148 |
| `volume-range` | 6,149 |
| `pulse-range` | 6,150 |
| `hzn-range` | 6,151 |
| `ylm-range` | 6,166 |
| `desire-range` | 6,167 |
| `fear-range` | 6,168 |
| `hormones-range` | 6,169 |

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
| 973 | journal (editorial content tab) |
| 979 | content tab: reading companion |
| 1,037 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,509 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,543 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,553 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,564 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,597 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,773 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,950 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,443 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,491 | hero: yield curve |
| 2,587 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,666 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,765 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,790 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,805 | long cycle (structural layer) |
| 2,846 | indicator grid |
| 2,889 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,906 | info icon + popover (progressive disclosure for longer notes) |
| 2,927 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,022 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (148), which is what the renderers fill:

| Line | id |
|---|---|
| 3,054 | `topbar-back` |
| 3,057 | `topbar-title` |
| 3,058 | `menu-btn` |
| 3,075 | `main` |
| 3,082 | `cycle-view` |
| 3,090 | `cycle-kicker` |
| 3,096 | `cycle-dial` |
| 3,098 | `season-wheel-hub-date` |
| 3,099 | `season-wheel-hub-theme` |
| 3,100 | `season-wheel-hub-detail` |
| 3,108 | `temp-card` |
| 3,110 | `temp-kicker` |
| 3,111 | `temp-sub` |
| 3,114 | `temp-svg` |
| 3,115 | `temp-tooltip` |
| 3,121 | `temp-stats` |
| 3,128 | `growth-card` |
| 3,131 | `growth-kicker` |
| 3,131 | `growth-phase` |
| 3,131 | `growth-sub` |
| 3,131 | `growth-peers` |
| 3,132 | `growth-svg` |
| 3,132 | `growth-tooltip` |
| 3,137 | `growth-stats` |
| 3,146 | `today-analysis` |
| 3,150 | `peek-row` |
| 3,154 | `sheet-metric-temp` |
| 3,155 | `temp-timing` |
| 3,156 | `temp-chart` |
| 3,158 | `temp-rangebar` |
| 3,160 | `temp-head` |
| 3,161 | `slot-temp` |
| 3,162 | `temp-history` |
| 3,163 | `temp-hist-tooltip` |
| 3,166 | `temp-trend` |
| 3,170 | `temp-highlights` |
| 3,173 | `sheet-metric-gdp` |
| 3,174 | `gdp-timing` |
| 3,175 | `gdp-chart` |
| 3,176 | `gdp-rangebar` |
| 3,178 | `gdp-head` |
| 3,179 | `slot-growth` |
| 3,180 | `gdp-history` |
| 3,181 | `gdp-hist-tooltip` |
| 3,182 | `gdp-yoy` |
| 3,192 | `gdp-trend` |
| 3,194 | `gdp-panel` |
| 3,199 | `subj-ring-gdp` |
| 3,201 | `subj-label-gdp` |
| 3,202 | `subj-value-gdp` |
| 3,203 | `subj-say-gdp` |
| 3,204 | `subj-spark-gdp` |
| 3,209 | `subj-ctx-gdp` |
| 3,212 | `gdp-highlights` |
| 3,220 | `sheet-metric-power` |
| 3,221 | `power-timing` |
| 3,222 | `power-head` |
| 3,223 | `power-chart` |
| 3,227 | `subj-ring-resilience` |
| 3,230 | `subj-value-resilience` |
| 3,231 | `subj-say-resilience` |
| 3,236 | `subj-ctx-resilience` |
| 3,240 | `longcycle-title` |
| 3,242 | `longcycle-tag` |
| 3,256 | `power-highlights` |
| 3,263 | `sheet-marker-deficit` |
| 3,269 | `sheet-metric-households` |
| 3,270 | `households-timing` |
| 3,271 | `households-chart` |
| 3,272 | `households-highlights` |
| 3,276 | `sheet-metric-valuation` |
| 3,277 | `valuation-timing` |
| 3,278 | `valuation-head` |
| 3,279 | `valuation-chart` |
| 3,283 | `subj-ring-valuation` |
| 3,286 | `subj-value-valuation` |
| 3,287 | `subj-say-valuation` |
| 3,292 | `subj-ctx-valuation` |
| 3,296 | `valuation-title` |
| 3,298 | `valuation-tag` |
| 3,305 | `valuation-highlights` |
| 3,311 | `subj-ring-yield` |
| 3,314 | `subj-value-yield` |
| 3,315 | `subj-say-yield` |
| 3,316 | `subj-spark-yield` |
| 3,347 | `ylm-series` |
| 3,352 | `ylm-head` |
| 3,353 | `ylm-shell` |
| 3,354 | `ylm-svg` |
| 3,355 | `ylm-tooltip` |
| 3,358 | `ylm-trend` |
| 3,361 | `pressure-insights` |
| 3,362 | `pressure-highlights` |
| 3,388 | `subj-value-horizon` |
| 3,389 | `subj-say-horizon` |
| 3,390 | `subj-spark-horizon` |
| 3,400 | `hzn-timeline` |
| 3,402 | `hzn-head` |
| 3,403 | `spread-history-shell` |
| 3,404 | `spread-history-svg` |
| 3,405 | `spread-history-tooltip` |
| 3,408 | `hzn-trend` |
| 3,410 | `hzn-panel` |
| 3,412 | `horizon-insights` |
| 3,413 | `horizon-highlights` |
| 3,424 | `subj-value-hormones` |
| 3,425 | `subj-say-hormones` |
| 3,430 | `hormones-history` |
| 3,431 | `hormones-highlights` |
| 3,437 | `subj-ring-sentiment` |
| 3,440 | `subj-value-sentiment` |
| 3,441 | `subj-say-sentiment` |
| 3,442 | `subj-spark-sentiment` |
| 3,456 | `fear-history` |
| 3,457 | `curve-highlights` |
| 3,471 | `signs-list` |
| 3,482 | `calendar-list` |
| 3,487 | `indicators-peek` |
| 3,533 | `cycle-list` |
| 3,539 | `cycle-more` |
| 3,540 | `cycle-more-label` |
| 3,549 | `calendar-cycle` |
| 3,550 | `calendar-cycle-slot` |
| 3,601 | `seasons-kicker` |
| 3,602 | `seasons-rows` |
| 3,606 | `framework-kicker` |
| 3,608 | `framework-rows` |
| 3,615 | `more-menu` |
| 3,618 | `menu-back` |
| 3,632 | `sources-open` |
| 3,640 | `appearance-current` |
| 3,648 | `sheet-howto` |
| 3,692 | `sheet-book` |
| 3,724 | `sheet-appearance` |
| 3,732 | `theme-toggle` |
| 3,739 | `sheet-contact` |
| 3,748 | `contact-form` |
| 3,749 | `contact-title` |
| 3,750 | `contact-message` |
| 3,752 | `contact-hint` |
| 3,753 | `contact-send` |
| 3,762 | `sheet-sources` |
| 3,765 | `sources-back` |
| 3,772 | `asof-text` |
| 3,773 | `sources-groups` |
| 3,780 | `detail-backdrop` |
| 3,782 | `detail-modal-close` |
| 3,783 | `detail-modal-body` |

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

