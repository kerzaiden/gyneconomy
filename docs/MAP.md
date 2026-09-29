# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,951 lines**, about 1261 KB, roughly **358 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `d0f6926` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,108 | the whole stylesheet, every token and rule |
| **Markup** | 3,109–3,894 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,895–14,898 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,899–14,951 | </body></html> |

Counts: **290** top-level functions, **184** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 3,895_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,910 | `byId` | `function byId(` |
| 3,918 | `byIdMaybe` | `function byIdMaybe(` |
| 3,925 | `put` | `function put(` |
| 3,932 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 3,936_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,940 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,941 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,942 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,960 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,964 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,969_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,979 | `wheelMeta` | `var wheelMeta =` |
| 3,990 | `seasonOverride` | `var seasonOverride =` |
| 3,993 | `cycleNowNote` | `var cycleNowNote =` |
| 4,002 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,088 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,133 | `gdpLevels` | `var gdpLevels =` |
| 4,161 | `fedFundsHistory` | `var fedFundsHistory =` |
| 4,162 | `fearCurveHistory` | `var fearCurveHistory =` |
| 4,170 | `fiscalHistory` | `var fiscalHistory =` |
| 4,176 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 4,181 | `treasuryQuarterly` | `var treasuryQuarterly =` |

### Version 528: live data without a render refactor

_line 4,191_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,210 | `merge` | `function merge(` |
| 4,217 | `LIVE` | `function LIVE(` |
| 4,241 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,244_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,297 | `paintReading` | `function paintReading(` |
| 4,320 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,344 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,354 | `repaintPressureRow` | `function repaintPressureRow(` |
| 4,360 | `repaintPressureChart` | `function repaintPressureChart(` |
| 4,364 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY (Version 629)

_line 4,369_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,397 | `READINGS` | `var READINGS =` |
| 4,468 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 4,469 | `KINDS` | `var KINDS =` |
| 4,470 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 4,491 | `receive` | `function receive(` |
| 4,515 | `liveAsOf` | `var liveAsOf =` |
| 4,516 | `fmtAsOf` | `function fmtAsOf(` |
| 4,529 | `applyLive` | `function applyLive(` |
| 4,544 | `shapeOk` | `function shapeOk(` |
| 4,554 | `repaintPolicy` | `function repaintPolicy(` |
| 4,606 | `GYN` | `var GYN =` |
| 4,643 | `refreshLiveData` | `function refreshLiveData(` |
| 4,672 | `fetchSiteData` | `function fetchSiteData(` |
| 4,688 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,702_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,703 | `yieldCurve` | `var yieldCurve =` |
| 4,712 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 4,713 | `curveAsOf` | `function curveAsOf(` |
| 4,724 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,748 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,760 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,788_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,793 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,817 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,841 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,865 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,892 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,917_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,926 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,936 | `uninvLagToday` | `var uninvLagToday =` |
| 4,948 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,961 | `gdpPeers` | `var gdpPeers =` |
| 5,002 | `gdpSrc` | `var gdpSrc =` |
| 5,003 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 5,008 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 5,021 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 5,063_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,085 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 5,095_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,111 | `stressScoreFor` | `function stressScoreFor(` |
| 5,117 | `stressScore` | `var stressScore =` |
| 5,123 | `powerOf` | `var powerOf =` |
| 5,124 | `powerScore` | `var powerScore =` |
| 5,141 | `stressHistory` | `var stressHistory =` |
| 5,154 | `powerMeter` | `var powerMeter =` |
| 5,156 | `stressNoteFull` | `var stressNoteFull =` |
| 5,191 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,193_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,216 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,217 | `deficitHistory` | `var deficitHistory =` |
| 5,220 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,227 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,229 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,272_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,285 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,298_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,312 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,315 | `timelineSpan` | `function timelineSpan(` |
| 5,321 | `timelineFor` | `function timelineFor(` |
| 5,334 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,340_ · 32 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,346 | `windowScale` | `function windowScale(` |
| 5,362 | `windowYears` | `function windowYears(` |
| 5,380 | `refName` | `function refName(` |
| 5,387 | `histReadEnsure` | `function histReadEnsure(` |
| 5,426 | `seatBandReading` | `function seatBandReading(` |
| 5,449 | `histReadFill` | `function histReadFill(` |
| 5,577 | `histAxisEnds` | `function histAxisEnds(` |
| 5,588 | `histLegend` | `function histLegend(` |
| 5,676 | `refitHistory` | `function refitHistory(` |
| 5,688 | `wireHistHover` | `function wireHistHover(` |
| 5,768 | `mWindowFrom` | `function mWindowFrom(` |
| 5,773 | `qWindowFrom` | `function qWindowFrom(` |
| 5,778 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,779 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,781 | `DEF_1983` | `var DEF_1983 =` |
| 5,783 | `defFrom` | `function defFrom(` |
| 5,794 | `deficitChart` | `function deficitChart(` |
| 5,883 | `deficitBlock` | `function deficitBlock(` |
| 5,945 | `buffettHistory` | `var buffettHistory =` |
| 5,975 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,976 | `hyDates` | `var hyDates =` |
| 5,977 | `hyOas` | `var hyOas =` |
| 5,978 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,985 | `hyAt` | `function hyAt(` |
| 5,989 | `hyLabel` | `function hyLabel(` |
| 5,990 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,991 | `hyNum` | `function hyNum(` |
| 5,992 | `hyWindowFrom` | `function hyWindowFrom(` |
| 6,002 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 6,012 | `capeHistory` | `var capeHistory =` |
| 6,014 | `longCycleSrc` | `var longCycleSrc =` |
| 6,033 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 6,056_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,062 | `sentiment` | `var sentiment =` |
| 6,080 | `valuation` | `var valuation =` |
| 6,117 | `valRow` | `function valRow(` |
| 6,125 | `coincident` | `var coincident =` |
| 6,186 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,204 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,205 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,206 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,208_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,221 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,222 | `m2vHistory` | `var m2vHistory =` |
| 6,242 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,334 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,423 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,424 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,464_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,470 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,471 | `DOTS` | `var DOTS =` |
| 6,478 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,513 | `headPickRow` | `function headPickRow(` |
| 6,519 | `histHead` | `function histHead(` |
| 6,543 | `headNoteIdx` | `var headNoteIdx =` |
| 6,544 | `headMenuHtml` | `function headMenuHtml(` |
| 6,602 | `headMenuFor` | `var headMenuFor =` |
| 6,604 | `headSubFor` | `var headSubFor =` |
| 6,605 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,654 | `nameWithMark` | `function nameWithMark(` |
| 6,660 | `panelRow` | `function panelRow(` |
| 6,693 | `panelFromMeter` | `function panelFromMeter(` |
| 6,707 | `meterFlagged` | `function meterFlagged(` |
| 6,718 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,746 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,760 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,779 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,798 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,812 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,837 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,868 | `desireBlock` | `function desireBlock(` |
| 6,895 | `volumeBlock` | `function volumeBlock(` |
| 6,920 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,943 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,951_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,964 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,965 | `m2Level` | `var m2Level =` |
| 6,987 | `m2Yoy` | `var m2Yoy =` |
| 6,988 | `M2_NORM` | `var M2_NORM =` |
| 6,993 | `volumeVerdict` | `function volumeVerdict(` |
| 7,030 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 7,031 | `unempHistory` | `var unempHistory =` |
| 7,037 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 7,052 | `NROU_NOW` | `var NROU_NOW =` |
| 7,053 | `unempState` | `function unempState(` |
| 7,059 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones — the policy rate's history

_line 7,121_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,130 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 7,141 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,208 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,209 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,212 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,220_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,235 | `householdsChart` | `function householdsChart(` |
| 7,302 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,385 | `GDP_NORM` | `var GDP_NORM =` |
| 7,391 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,392 | `gdpNowQ` | `var gdpNowQ =` |
| 7,393 | `gdpMeter` | `var gdpMeter =` |
| 7,396 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,418 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,482 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,545 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,553 | `velocityVerdict` | `function velocityVerdict(` |
| 7,561 | `derivePulseTag` | `function derivePulseTag(` |
| 7,567 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,627_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,636 | `seasonReading` | `var seasonReading =` |
| 7,685 | `frameworkRows` | `var frameworkRows =` |
| 7,695 | `vixRow` | `var vixRow =` |
| 7,703 | `vixWordOf` | `var vixWordOf =` |
| 7,707 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,722_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,726 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,735_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,736 | `calendarTodayY` | `var calendarTodayY =` |
| 7,767 | `vix3mClose` | `var vix3mClose =` |
| 7,768 | `fearCurve` | `function fearCurve(` |
| 7,775 | `curveVerdict` | `function curveVerdict(` |
| 7,782 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,787 | `valuationVerdict` | `function valuationVerdict(` |
| 7,805 | `sparkHtml` | `function sparkHtml(` |
| 7,824 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,830_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,843 | `modeBar` | `function modeBar(` |
| 7,858 | `pickerOpen` | `var pickerOpen =` |
| 7,862 | `cycleByName` | `function cycleByName(` |
| 7,866 | `openCycle` | `function openCycle(` |
| 7,872 | `cycleSlice` | `function cycleSlice(` |
| 7,881 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,889 | `cycleMonths` | `function cycleMonths(` |
| 7,908 | `histControls` | `function histControls(` |
| 7,922 | `cycLabel` | `function cycLabel(` |
| 7,938 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,947 | `cyclePicker` | `function cyclePicker(` |
| 7,966 | `rangeBar` | `function rangeBar(` |
| 7,978 | `trendOf` | `function trendOf(` |
| 8,023 | `TREND_ARROW` | `var TREND_ARROW =` |
| 8,033 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 8,054_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,055 | `yearOf` | `function yearOf(` |
| 8,056 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 8,057_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,095 | `headSigma` | `function headSigma(` |
| 8,103 | `atQuarter` | `function atQuarter(` |
| 8,104 | `atMonth` | `function atMonth(` |
| 8,105 | `cycleAverages` | `function cycleAverages(` |
| 8,112 | `ordinal` | `function ordinal(` |
| 8,113 | `hiCard` | `function hiCard(` |
| 8,124 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,138_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,145 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,161 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,168 | `moreRow` | `function moreRow(` |
| 8,174 | `powerPageNote` | `var powerPageNote =` |
| 8,175 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,187_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,190 | `xLabelOf` | `function xLabelOf(` |
| 8,210 | `fitGroup` | `function fitGroup(` |
| 8,232 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,291_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,315 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,325 | `vGrid` | `function vGrid(` |
| 8,350 | `COL_FILL` | `var COL_FILL =` |
| 8,383 | `colPath` | `function colPath(` |
| 8,388 | `colWidth` | `function colWidth(` |
| 8,435 | `AXIS` | `var AXIS =` |
| 8,451 | `histFrame` | `function histFrame(` |
| 8,463 | `xLabel` | `function xLabel(` |
| 8,467 | `crossLine` | `function crossLine(` |
| 8,472 | `zeroRule` | `function zeroRule(` |
| 8,475 | `meanRule` | `function meanRule(` |
| 8,487 | `pendingGeom` | `var pendingGeom =` |
| 8,488 | `publishGeom` | `function publishGeom(` |
| 8,489 | `attachHistory` | `function attachHistory(` |
| 8,504 | `histBar` | `function histBar(` |
| 8,507 | `histTip` | `function histTip(` |
| 8,510 | `avgRule` | `function avgRule(` |
| 8,513 | `vhOpen` | `function vhOpen(` |
| 8,514 | `chartAxes` | `function chartAxes(` |
| 8,574 | `divergeChart` | `function divergeChart(` |
| 8,642 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,671_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,679 | `maxIn` | `function maxIn(` |
| 8,697 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,711 | `PEEK_W` | `var PEEK_W =` |
| 8,714 | `PEEK_H` | `var PEEK_H =` |
| 8,719 | `colPeek` | `function colPeek(` |
| 8,746 | `meterPeek` | `function meterPeek(` |
| 8,763 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,768 | `pressureZone` | `function pressureZone(` |
| 8,783 | `HZN_BACK` | `var HZN_BACK =` |
| 8,784 | `hznLast` | `function hznLast(` |
| 8,785 | `hznBack` | `function hznBack(` |
| 8,786 | `horizonWord` | `function horizonWord(` |
| 8,811 | `HZN_METERS` | `var HZN_METERS =` |
| 8,819 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,860 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,865 | `RISK_RISK` | `var RISK_RISK =` |
| 8,870 | `riskCell` | `function riskCell(` |
| 8,871 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,902 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,927_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,948 | `pulseClipN` | `var pulseClipN =` |
| 8,949 | `beatPath` | `function beatPath(` |
| 8,974 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,988 | `pulsePeek` | `function pulsePeek(` |
| 8,996 | `pulseBlock` | `function pulseBlock(` |
| 9,016 | `CHEV` | `var CHEV =` |
| 9,018 | `peekCard` | `function peekCard(` |
| 9,072 | `dropSvg` | `function dropSvg(` |
| 9,089 | `volumeSvg` | `function volumeSvg(` |
| 9,097 | `gaugeSvg` | `function gaugeSvg(` |
| 9,101 | `diamondSvg` | `function diamondSvg(` |
| 9,115 | `energyFromReserve` | `function energyFromReserve(` |
| 9,127 | `sproutSvg` | `function sproutSvg(` |
| 9,138 | `markSvg` | `function markSvg(` |
| 9,146 | `hormoneSvg` | `function hormoneSvg(` |
| 9,152 | `flameSvg` | `function flameSvg(` |
| 9,156 | `gearSvg` | `function gearSvg(` |
| 9,168 | `thermoSvg` | `function thermoSvg(` |
| 9,187 | `trendUpSvg` | `function trendUpSvg(` |
| 9,189 | `ecgSvg` | `function ecgSvg(` |
| 9,203 | `circulationSvg` | `function circulationSvg(` |
| 9,204 | `weatherSvg` | `function weatherSvg(` |
| 9,225 | `moodSvg` | `function moodSvg(` |
| 9,249 | `boltSvg` | `function boltSvg(` |
| 9,252 | `houseSvg` | `function houseSvg(` |
| 9,260 | `sunriseSvg` | `function sunriseSvg(` |
| 9,275 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,286 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,303_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,324 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,325 | `dsrHistory` | `var dsrHistory =` |
| 9,326 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,327 | `savHistory` | `var savHistory =` |
| 9,332 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,342 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,343 | `dsrNow` | `var dsrNow =` |
| 9,344 | `savNow` | `var savNow =` |
| 9,345 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,350 | `householdsWord` | `function householdsWord(` |
| 9,357 | `householdsNow` | `var householdsNow =` |
| 9,364 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,365 | `dsrMeter` | `var dsrMeter =` |
| 9,368 | `savMeter` | `var savMeter =` |
| 9,371 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,388 | `savInfoHtml` | `function savInfoHtml(` |
| 9,406 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,415 | `curveNow` | `var curveNow =` |
| 9,416 | `curveTag` | `var curveTag =` |
| 9,417 | `curveSub` | `var curveSub =` |
| 9,421 | `curvePct` | `function curvePct(` |
| 9,422 | `curveNoteFull` | `var curveNoteFull =` |
| 9,437 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,445 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,486 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,514_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,528 | `marketTops` | `var marketTops =` |
| 9,538 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,543 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,545_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,566 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,567 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,572_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,593 | `slopeOf` | `function slopeOf(` |
| 9,604 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,610 | `readSeason` | `function readSeason(` |
| 9,635 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,637 | `qLabel` | `function qLabel(` |
| 9,661 | `regimeTrack` | `function regimeTrack(` |
| 9,684 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,686_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,693 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,694 | `seasonTitle` | `function seasonTitle(` |
| 9,695 | `monthLabel` | `function monthLabel(` |
| 9,696 | `cycleModel` | `function cycleModel(` |
| 9,748 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,756 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,763 | `nowModel` | `var nowModel =` |
| 9,764 | `readingNow` | `var readingNow =` |
| 9,765 | `cpiNow` | `var cpiNow =` |
| 9,766 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,767 | `currentSeason` | `var currentSeason =` |
| 9,768 | `seasonWhy` | `var seasonWhy =` |
| 9,785 | `seasonGroup` | `function seasonGroup(` |
| 9,799 | `arcGauge` | `function arcGauge(` |
| 9,841 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,854 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,858 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,860 | `spreadLabel` | `function spreadLabel(` |
| 9,867 | `policyFacts` | `function policyFacts(` |
| 9,881 | `policyFactRows` | `function policyFactRows(` |
| 9,887 | `allSources` | `var allSources =` |
| 9,911 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,944_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,947 | `SVG_NS` | `var SVG_NS =` |
| 9,948 | `svgEl` | `function svgEl(` |
| 9,961 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,997_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,998 | `clampPct` | `function clampPct(` |
| 10,005 | `infoIcon` | `function infoIcon(` |
| 10,014 | `detailTexts` | `var detailTexts =` |
| 10,032 | `detailSlots` | `var detailSlots =` |
| 10,033 | `detailSlot` | `function detailSlot(` |
| 10,044 | `powerPanelHtml` | `var powerPanelHtml =` |
| 10,048 | `_growthPanel` | `var _growthPanel =` |
| 10,049 | `growthPanelHtml` | `function growthPanelHtml(` |
| 10,055 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 10,066 | `facts` | `function facts(` |
| 10,067 | `factsFrom` | `function factsFrom(` |
| 10,071 | `expandBtn` | `function expandBtn(` |
| 10,077 | `sheetRenderers` | `var sheetRenderers =` |
| 10,094 | `pageMode` | `var pageMode =` |
| 10,101 | `pageCycles` | `var pageCycles =` |
| 10,106 | `pageRange` | `var pageRange =` |
| 10,112 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,146_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,157 | `meterHtml` | `function meterHtml(` |
| 10,187 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW (Version 631)

_line 10,188_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,196 | `subjectRow` | `function subjectRow(` |
| 10,208 | `subjectIcon` | `function subjectIcon(` |
| 10,209 | `srcHtml` | `function srcHtml(` |
| 10,218 | `TIMING` | `var TIMING =` |
| 10,224 | `timingMark` | `function timingMark(` |
| 10,238 | `timingPill` | `function timingPill(` |
| 10,259 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,267 | `seatPageFoot` | `function seatPageFoot(` |
| 10,290 | `timingMembers` | `var timingMembers =` |
| 10,291 | `registerTiming` | `function registerTiming(` |
| 10,297 | `headHtml` | `function headHtml(` |
| 10,315 | `heldHighlights` | `var heldHighlights =` |
| 10,316 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time (V639)

_line 10,374_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,386 | `CURVE_KEY` | `var CURVE_KEY =` |
| 10,387 | `latestYieldPoint` | `function latestYieldPoint(` |
| 10,395 | `withLatestPoint` | `function withLatestPoint(` |
| 10,400 | `renderPressurePage` | `function renderPressurePage(` |

### V640: Pressure's Insights

_line 10,819_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,828 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,865_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,866 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 11,088_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,089 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 11,121_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,131 | `drawHznHead` | `function drawHznHead(` |
| 11,146 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,224_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,225 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,243_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,246 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,269_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,281 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,415_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,416 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,540_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,543 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,666_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,678 | `totalRiseIn` | `function totalRiseIn(` |
| 11,688 | `eraInflation` | `function eraInflation(` |
| 11,699 | `eraGrowth` | `function eraGrowth(` |
| 11,719 | `fmtSigned` | `function fmtSigned(` |
| 11,724 | `regimeArrow` | `function regimeArrow(` |
| 11,730 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,731 | `growthShown` | `function growthShown(` |
| 11,732 | `growthShownCap` | `function growthShownCap(` |
| 11,733 | `regimeState` | `function regimeState(` |
| 11,737 | `phaseClass` | `function phaseClass(` |
| 11,739 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,751 | `cycleViewEl` | `var cycleViewEl =` |
| 11,757 | `tempCard` | `var tempCard =` |
| 11,758 | `placeCharts` | `function placeCharts(` |
| 11,763 | `shownEra` | `var shownEra =` |
| 11,764 | `calendarReset` | `var calendarReset =` |
| 11,765 | `metricPageReset` | `var metricPageReset =` |
| 11,766 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,769 | `topbarBack` | `var topbarBack =` |
| 11,770 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,777_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,778 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,939_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,940 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,958_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,961 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,982_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,988 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,991 | `hubSet` | `function hubSet(` |
| 12,004 | `quarterPopup` | `function quarterPopup(` |
| 12,037 | `hubShowDefault` | `function hubShowDefault(` |
| 12,046 | `hubShowQuarter` | `function hubShowQuarter(` |
| 12,052 | `hubShowYear` | `function hubShowYear(` |
| 12,067 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,159_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,162 | `tempState` | `var tempState =` |
| 12,165 | `chartLink` | `var chartLink =` |
| 12,185 | `m2Step` | `function m2Step(` |
| 12,188 | `heatStep` | `function heatStep(` |
| 12,192 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,379_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,382 | `drawGrowth` | `function drawGrowth(` |
| 12,521 | `wireResize` | `function wireResize(` |
| 12,527 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,539_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,540 | `renderCycleView` | `function renderCycleView(` |
| 12,601 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,609_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,620 | `peerChosen` | `function peerChosen(` |
| 12,621 | `peerReaches` | `function peerReaches(` |
| 12,651 | `shownEraModel` | `var shownEraModel =` |
| 12,652 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,654_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,656 | `stripGroupName` | `var stripGroupName =` |
| 12,657 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,703 | `marketStripHtml` | `function marketStripHtml(` |
| 12,766 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,767 | `settleStrips` | `function settleStrips(` |
| 12,802 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES (Version 630)

_line 13,081_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,095 | `partsOf` | `function partsOf(` |
| 13,104 | `discOf` | `function discOf(` |
| 13,111 | `authored` | `function authored(` |
| 13,117 | `registerRoster` | `function registerRoster(` |
| 13,159 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER (Version 630)

_line 13,171_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,180 | `NAV` | `var NAV =` |
| 13,181 | `buildNav` | `function buildNav(` |

### ALL INDICATORS (Version 630)

_line 13,295_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,299 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories (Version 630)

_line 13,359_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,362 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES (Version 630)

_line 13,853_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,857 | `renderMetricPages` | `function renderMetricPages(` |

### GDP growth

_line 14,295_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,350 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,382_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,383 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,483_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,495 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,538_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,546 | `__roster` | `var __roster =` |
| 14,547 | `readingRoster` | `function readingRoster(` |
| 14,602 | `readFig` | `function readFig(` |
| 14,610 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612)

_line 14,617_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,645 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,698_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,699 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,759_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,760 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,793_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,794 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,204–4,207 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,792–8,805 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,644–9,657 | `seasonTrackAll` | The season, computed |
| 9,679–9,683 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 14,082 |
| `desire-range` | 10,723 |
| `fear-range` | 11,505 |
| `hormones-range` | 11,315 |
| `hzn-range` | 11,174 |
| `pressure-range` | 4,362 |
| `pulse-range` | 10,679 |
| `sheet-marker-deficit` | 14,079 |
| `sheet-metric-gdp` | 13,971 |
| `sheet-metric-households` | 14,109 |
| `sheet-metric-power` | 14,043 |
| `sheet-metric-temp` | 13,926 |
| `sheet-metric-valuation` | 14,153 |
| `sheet-sign-activity` | 14,027 |
| `sheet-sign-desire` | 10,724 |
| `sheet-sign-horizon` | 11,175 |
| `sheet-sign-hormones` | 11,318 |
| `sheet-sign-pressure` | 10,800 |
| `sheet-sign-pulse` | 10,678 |
| `sheet-sign-sentiment` | 11,510 |
| `sheet-sign-volume` | 10,699 |
| `volume-range` | 10,700 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 14,088 |
| `desire-range` | 10,708 |
| `fear-range` | 11,462 |
| `hzn-range` | 11,156 |
| `pressure-range` | 10,757 |
| `pulse-range` | 10,662 |
| `sheet-metric-gdp` | 13,972 |
| `sheet-metric-power` | 14,044 |
| `sheet-metric-temp` | 13,927 |
| `sheet-metric-valuation` | 14,154 |
| `volume-range` | 10,683 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,485 |
| `sheet-metric-gdp` | 6,486 |
| `sheet-sign-activity` | 6,493 |
| `sheet-metric-power` | 6,494 |
| `sheet-metric-valuation` | 6,496 |
| `sheet-metric-households` | 6,497 |
| `deficit-range` | 6,498 |
| `volume-range` | 6,499 |
| `pulse-range` | 6,500 |
| `hzn-range` | 6,505 |
| `desire-range` | 6,506 |
| `fear-range` | 6,507 |
| `hormones-range` | 6,508 |
| `pressure-range` | 6,509 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 192 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 325 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 423 | yearly calendar — one card per year, grouped into five eras |
| 430 | season strip |
| 483 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels … so if one day |
| 652 | tab bar (app-style segmented navigation) |
| 719 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 758 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 944 | journal (editorial content tab) |
| 950 | content tab: reading companion |
| 1,008 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,480 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,514 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,524 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,535 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,568 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,744 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,921 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,459 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,500 | Rhymes (Version 610): today beside one past top |
| 2,541 | A closed cycle's categories (Version 613) |
| 2,571 | hero: yield curve |
| 2,648 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,727 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,826 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,851 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,866 | long cycle (structural layer) |
| 2,907 | indicator grid |
| 2,950 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,966 | info icon + popover (progressive disclosure for longer notes) |
| 2,987 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,082 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (145), which is what the renderers fill:

| Line | id |
|---|---|
| 3,114 | `topbar-back` |
| 3,117 | `topbar-title` |
| 3,118 | `menu-btn` |
| 3,135 | `main` |
| 3,142 | `cycle-view` |
| 3,150 | `cycle-kicker` |
| 3,156 | `cycle-dial` |
| 3,158 | `season-wheel-hub-date` |
| 3,159 | `season-wheel-hub-theme` |
| 3,160 | `season-wheel-hub-detail` |
| 3,168 | `temp-card` |
| 3,170 | `temp-kicker` |
| 3,171 | `temp-sub` |
| 3,174 | `temp-svg` |
| 3,175 | `temp-tooltip` |
| 3,181 | `temp-stats` |
| 3,188 | `growth-card` |
| 3,191 | `growth-kicker` |
| 3,191 | `growth-phase` |
| 3,191 | `growth-sub` |
| 3,192 | `growth-svg` |
| 3,192 | `growth-tooltip` |
| 3,197 | `growth-stats` |
| 3,206 | `today-analysis` |
| 3,210 | `peek-row` |
| 3,214 | `sheet-metric-temp` |
| 3,215 | `temp-timing` |
| 3,216 | `temp-chart` |
| 3,218 | `temp-rangebar` |
| 3,220 | `temp-head` |
| 3,221 | `slot-temp` |
| 3,222 | `temp-history` |
| 3,223 | `temp-hist-tooltip` |
| 3,226 | `temp-trend` |
| 3,230 | `temp-highlights` |
| 3,233 | `sheet-metric-gdp` |
| 3,234 | `gdp-timing` |
| 3,235 | `gdp-chart` |
| 3,236 | `gdp-rangebar` |
| 3,238 | `gdp-head` |
| 3,239 | `slot-growth` |
| 3,240 | `gdp-history` |
| 3,241 | `gdp-hist-tooltip` |
| 3,242 | `gdp-yoy` |
| 3,252 | `gdp-trend` |
| 3,254 | `gdp-panel` |
| 3,259 | `subj-ring-gdp` |
| 3,261 | `subj-label-gdp` |
| 3,262 | `subj-value-gdp` |
| 3,263 | `subj-say-gdp` |
| 3,264 | `subj-spark-gdp` |
| 3,269 | `subj-ctx-gdp` |
| 3,272 | `gdp-highlights` |
| 3,280 | `sheet-metric-power` |
| 3,281 | `power-timing` |
| 3,282 | `power-head` |
| 3,283 | `power-chart` |
| 3,287 | `subj-ring-resilience` |
| 3,290 | `subj-value-resilience` |
| 3,291 | `subj-say-resilience` |
| 3,296 | `subj-ctx-resilience` |
| 3,300 | `longcycle-title` |
| 3,302 | `longcycle-tag` |
| 3,316 | `power-highlights` |
| 3,323 | `sheet-marker-deficit` |
| 3,329 | `sheet-metric-households` |
| 3,330 | `households-timing` |
| 3,331 | `households-chart` |
| 3,332 | `households-highlights` |
| 3,336 | `sheet-metric-valuation` |
| 3,337 | `valuation-timing` |
| 3,338 | `valuation-head` |
| 3,339 | `valuation-chart` |
| 3,343 | `subj-ring-valuation` |
| 3,346 | `subj-value-valuation` |
| 3,347 | `subj-say-valuation` |
| 3,352 | `subj-ctx-valuation` |
| 3,356 | `valuation-title` |
| 3,358 | `valuation-tag` |
| 3,365 | `valuation-highlights` |
| 3,389 | `subj-value-hormones` |
| 3,390 | `subj-say-hormones` |
| 3,398 | `hormones-history` |
| 3,408 | `hormones-insights` |
| 3,434 | `subj-value-horizon` |
| 3,435 | `subj-say-horizon` |
| 3,436 | `subj-spark-horizon` |
| 3,446 | `hzn-timeline` |
| 3,448 | `hzn-head` |
| 3,449 | `spread-history-shell` |
| 3,450 | `spread-history-svg` |
| 3,451 | `spread-history-tooltip` |
| 3,458 | `hzn-trend` |
| 3,460 | `horizon-insights` |
| 3,488 | `subj-value-pressure` |
| 3,489 | `subj-say-pressure` |
| 3,495 | `pressure-timeline` |
| 3,497 | `pressure-head` |
| 3,498 | `ylm-shell` |
| 3,499 | `ylm-svg` |
| 3,500 | `ylm-tooltip` |
| 3,502 | `ylm-trend` |
| 3,508 | `pressure-insights` |
| 3,515 | `subj-ring-sentiment` |
| 3,518 | `subj-value-sentiment` |
| 3,519 | `subj-say-sentiment` |
| 3,520 | `subj-spark-sentiment` |
| 3,534 | `fear-history` |
| 3,535 | `curve-highlights` |
| 3,549 | `signs-list` |
| 3,560 | `calendar-list` |
| 3,573 | `rhymes-card` |
| 3,584 | `rhy-pick` |
| 3,585 | `rhy-body` |
| 3,632 | `cycle-list` |
| 3,638 | `cycle-more` |
| 3,639 | `cycle-more-label` |
| 3,648 | `calendar-cycle` |
| 3,649 | `calendar-cycle-slot` |
| 3,656 | `cycle-cats` |
| 3,707 | `seasons-kicker` |
| 3,708 | `seasons-rows` |
| 3,712 | `framework-kicker` |
| 3,714 | `framework-rows` |
| 3,721 | `more-menu` |
| 3,724 | `menu-back` |
| 3,738 | `sources-open` |
| 3,746 | `appearance-current` |
| 3,754 | `sheet-howto` |
| 3,798 | `sheet-book` |
| 3,830 | `sheet-appearance` |
| 3,838 | `theme-toggle` |
| 3,845 | `sheet-contact` |
| 3,854 | `contact-form` |
| 3,855 | `contact-title` |
| 3,856 | `contact-message` |
| 3,858 | `contact-hint` |
| 3,859 | `contact-send` |
| 3,868 | `sheet-sources` |
| 3,871 | `sources-back` |
| 3,878 | `asof-text` |
| 3,879 | `sources-groups` |
| 3,886 | `detail-backdrop` |
| 3,888 | `detail-modal-close` |
| 3,889 | `detail-modal-body` |

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

