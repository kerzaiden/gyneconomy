# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,794 lines**, about 1247 KB, roughly **354 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `bad78fa` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,108 | the whole stylesheet, every token and rule |
| **Markup** | 3,109–3,894 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,895–14,741 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,742–14,794 | </body></html> |

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
| 4,729 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,730 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,740 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 4,745_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,750 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,751 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,752 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,753 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,758 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,760_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,769 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,779 | `uninvLagToday` | `var uninvLagToday =` |
| 4,791 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,804 | `gdpPeers` | `var gdpPeers =` |
| 4,845 | `gdpSrc` | `var gdpSrc =` |
| 4,846 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,851 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,864 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,906_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,928 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,938_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,954 | `stressScoreFor` | `function stressScoreFor(` |
| 4,960 | `stressScore` | `var stressScore =` |
| 4,966 | `powerOf` | `var powerOf =` |
| 4,967 | `powerScore` | `var powerScore =` |
| 4,984 | `stressHistory` | `var stressHistory =` |
| 4,997 | `powerMeter` | `var powerMeter =` |
| 4,999 | `stressNoteFull` | `var stressNoteFull =` |
| 5,034 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,036_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,059 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,060 | `deficitHistory` | `var deficitHistory =` |
| 5,063 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,070 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,072 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,115_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,128 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,141_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,155 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,158 | `timelineSpan` | `function timelineSpan(` |
| 5,164 | `timelineFor` | `function timelineFor(` |
| 5,177 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,183_ · 32 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,189 | `windowScale` | `function windowScale(` |
| 5,205 | `windowYears` | `function windowYears(` |
| 5,223 | `refName` | `function refName(` |
| 5,230 | `histReadEnsure` | `function histReadEnsure(` |
| 5,269 | `seatBandReading` | `function seatBandReading(` |
| 5,292 | `histReadFill` | `function histReadFill(` |
| 5,420 | `histAxisEnds` | `function histAxisEnds(` |
| 5,431 | `histLegend` | `function histLegend(` |
| 5,519 | `refitHistory` | `function refitHistory(` |
| 5,531 | `wireHistHover` | `function wireHistHover(` |
| 5,611 | `mWindowFrom` | `function mWindowFrom(` |
| 5,616 | `qWindowFrom` | `function qWindowFrom(` |
| 5,621 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,622 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,624 | `DEF_1983` | `var DEF_1983 =` |
| 5,626 | `defFrom` | `function defFrom(` |
| 5,637 | `deficitChart` | `function deficitChart(` |
| 5,726 | `deficitBlock` | `function deficitBlock(` |
| 5,788 | `buffettHistory` | `var buffettHistory =` |
| 5,818 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,819 | `hyDates` | `var hyDates =` |
| 5,820 | `hyOas` | `var hyOas =` |
| 5,821 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,828 | `hyAt` | `function hyAt(` |
| 5,832 | `hyLabel` | `function hyLabel(` |
| 5,833 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,834 | `hyNum` | `function hyNum(` |
| 5,835 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,845 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,855 | `capeHistory` | `var capeHistory =` |
| 5,857 | `longCycleSrc` | `var longCycleSrc =` |
| 5,876 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,899_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,905 | `sentiment` | `var sentiment =` |
| 5,923 | `valuation` | `var valuation =` |
| 5,960 | `valRow` | `function valRow(` |
| 5,968 | `coincident` | `var coincident =` |
| 6,029 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,047 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,048 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,049 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,051_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,064 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,065 | `m2vHistory` | `var m2vHistory =` |
| 6,085 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,177 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,266 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,267 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,307_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,313 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,314 | `DOTS` | `var DOTS =` |
| 6,321 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,356 | `headPickRow` | `function headPickRow(` |
| 6,362 | `histHead` | `function histHead(` |
| 6,386 | `headNoteIdx` | `var headNoteIdx =` |
| 6,387 | `headMenuHtml` | `function headMenuHtml(` |
| 6,445 | `headMenuFor` | `var headMenuFor =` |
| 6,447 | `headSubFor` | `var headSubFor =` |
| 6,448 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,497 | `nameWithMark` | `function nameWithMark(` |
| 6,503 | `panelRow` | `function panelRow(` |
| 6,536 | `panelFromMeter` | `function panelFromMeter(` |
| 6,550 | `meterFlagged` | `function meterFlagged(` |
| 6,561 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,589 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,603 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,622 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,641 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,655 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,680 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,711 | `desireBlock` | `function desireBlock(` |
| 6,738 | `volumeBlock` | `function volumeBlock(` |
| 6,763 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,786 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,794_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,807 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,808 | `m2Level` | `var m2Level =` |
| 6,830 | `m2Yoy` | `var m2Yoy =` |
| 6,831 | `M2_NORM` | `var M2_NORM =` |
| 6,836 | `volumeVerdict` | `function volumeVerdict(` |
| 6,873 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,874 | `unempHistory` | `var unempHistory =` |
| 6,880 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,895 | `NROU_NOW` | `var NROU_NOW =` |
| 6,896 | `unempState` | `function unempState(` |
| 6,902 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones — the policy rate's history

_line 6,964_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,973 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 6,984 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,051 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,052 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,055 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,063_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,078 | `householdsChart` | `function householdsChart(` |
| 7,145 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,228 | `GDP_NORM` | `var GDP_NORM =` |
| 7,234 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,235 | `gdpNowQ` | `var gdpNowQ =` |
| 7,236 | `gdpMeter` | `var gdpMeter =` |
| 7,239 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,261 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,325 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,388 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,396 | `velocityVerdict` | `function velocityVerdict(` |
| 7,404 | `derivePulseTag` | `function derivePulseTag(` |
| 7,410 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,470_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,479 | `seasonReading` | `var seasonReading =` |
| 7,528 | `frameworkRows` | `var frameworkRows =` |
| 7,538 | `vixRow` | `var vixRow =` |
| 7,546 | `vixWordOf` | `var vixWordOf =` |
| 7,550 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,565_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,569 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,578_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,579 | `calendarTodayY` | `var calendarTodayY =` |
| 7,610 | `vix3mClose` | `var vix3mClose =` |
| 7,611 | `fearCurve` | `function fearCurve(` |
| 7,618 | `curveVerdict` | `function curveVerdict(` |
| 7,625 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,630 | `valuationVerdict` | `function valuationVerdict(` |
| 7,648 | `sparkHtml` | `function sparkHtml(` |
| 7,667 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,673_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,686 | `modeBar` | `function modeBar(` |
| 7,701 | `pickerOpen` | `var pickerOpen =` |
| 7,705 | `cycleByName` | `function cycleByName(` |
| 7,709 | `openCycle` | `function openCycle(` |
| 7,715 | `cycleSlice` | `function cycleSlice(` |
| 7,724 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,732 | `cycleMonths` | `function cycleMonths(` |
| 7,751 | `histControls` | `function histControls(` |
| 7,765 | `cycLabel` | `function cycLabel(` |
| 7,781 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,790 | `cyclePicker` | `function cyclePicker(` |
| 7,809 | `rangeBar` | `function rangeBar(` |
| 7,821 | `trendOf` | `function trendOf(` |
| 7,866 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,876 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,897_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,898 | `yearOf` | `function yearOf(` |
| 7,899 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,900_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,938 | `headSigma` | `function headSigma(` |
| 7,946 | `atQuarter` | `function atQuarter(` |
| 7,947 | `atMonth` | `function atMonth(` |
| 7,948 | `cycleAverages` | `function cycleAverages(` |
| 7,955 | `ordinal` | `function ordinal(` |
| 7,956 | `hiCard` | `function hiCard(` |
| 7,967 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,981_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,988 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,004 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,011 | `moreRow` | `function moreRow(` |
| 8,017 | `powerPageNote` | `var powerPageNote =` |
| 8,018 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,030_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,033 | `xLabelOf` | `function xLabelOf(` |
| 8,053 | `fitGroup` | `function fitGroup(` |
| 8,075 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,134_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,158 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,168 | `vGrid` | `function vGrid(` |
| 8,193 | `COL_FILL` | `var COL_FILL =` |
| 8,226 | `colPath` | `function colPath(` |
| 8,231 | `colWidth` | `function colWidth(` |
| 8,278 | `AXIS` | `var AXIS =` |
| 8,294 | `histFrame` | `function histFrame(` |
| 8,306 | `xLabel` | `function xLabel(` |
| 8,310 | `crossLine` | `function crossLine(` |
| 8,315 | `zeroRule` | `function zeroRule(` |
| 8,318 | `meanRule` | `function meanRule(` |
| 8,330 | `pendingGeom` | `var pendingGeom =` |
| 8,331 | `publishGeom` | `function publishGeom(` |
| 8,332 | `attachHistory` | `function attachHistory(` |
| 8,347 | `histBar` | `function histBar(` |
| 8,350 | `histTip` | `function histTip(` |
| 8,353 | `avgRule` | `function avgRule(` |
| 8,356 | `vhOpen` | `function vhOpen(` |
| 8,357 | `chartAxes` | `function chartAxes(` |
| 8,417 | `divergeChart` | `function divergeChart(` |
| 8,485 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,514_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,522 | `maxIn` | `function maxIn(` |
| 8,540 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,554 | `PEEK_W` | `var PEEK_W =` |
| 8,557 | `PEEK_H` | `var PEEK_H =` |
| 8,562 | `colPeek` | `function colPeek(` |
| 8,589 | `meterPeek` | `function meterPeek(` |
| 8,606 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,611 | `pressureZone` | `function pressureZone(` |
| 8,626 | `HZN_BACK` | `var HZN_BACK =` |
| 8,627 | `hznLast` | `function hznLast(` |
| 8,628 | `hznBack` | `function hznBack(` |
| 8,629 | `horizonWord` | `function horizonWord(` |
| 8,654 | `HZN_METERS` | `var HZN_METERS =` |
| 8,662 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,703 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,708 | `RISK_RISK` | `var RISK_RISK =` |
| 8,713 | `riskCell` | `function riskCell(` |
| 8,714 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,745 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,770_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,791 | `pulseClipN` | `var pulseClipN =` |
| 8,792 | `beatPath` | `function beatPath(` |
| 8,817 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,831 | `pulsePeek` | `function pulsePeek(` |
| 8,839 | `pulseBlock` | `function pulseBlock(` |
| 8,859 | `CHEV` | `var CHEV =` |
| 8,861 | `peekCard` | `function peekCard(` |
| 8,915 | `dropSvg` | `function dropSvg(` |
| 8,932 | `volumeSvg` | `function volumeSvg(` |
| 8,940 | `gaugeSvg` | `function gaugeSvg(` |
| 8,944 | `diamondSvg` | `function diamondSvg(` |
| 8,958 | `energyFromReserve` | `function energyFromReserve(` |
| 8,970 | `sproutSvg` | `function sproutSvg(` |
| 8,981 | `markSvg` | `function markSvg(` |
| 8,989 | `hormoneSvg` | `function hormoneSvg(` |
| 8,995 | `flameSvg` | `function flameSvg(` |
| 8,999 | `gearSvg` | `function gearSvg(` |
| 9,011 | `thermoSvg` | `function thermoSvg(` |
| 9,030 | `trendUpSvg` | `function trendUpSvg(` |
| 9,032 | `ecgSvg` | `function ecgSvg(` |
| 9,046 | `circulationSvg` | `function circulationSvg(` |
| 9,047 | `weatherSvg` | `function weatherSvg(` |
| 9,068 | `moodSvg` | `function moodSvg(` |
| 9,092 | `boltSvg` | `function boltSvg(` |
| 9,095 | `houseSvg` | `function houseSvg(` |
| 9,103 | `sunriseSvg` | `function sunriseSvg(` |
| 9,118 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,129 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,146_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,167 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,168 | `dsrHistory` | `var dsrHistory =` |
| 9,169 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,170 | `savHistory` | `var savHistory =` |
| 9,175 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,185 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,186 | `dsrNow` | `var dsrNow =` |
| 9,187 | `savNow` | `var savNow =` |
| 9,188 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,193 | `householdsWord` | `function householdsWord(` |
| 9,200 | `householdsNow` | `var householdsNow =` |
| 9,207 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,208 | `dsrMeter` | `var dsrMeter =` |
| 9,211 | `savMeter` | `var savMeter =` |
| 9,214 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,231 | `savInfoHtml` | `function savInfoHtml(` |
| 9,249 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,258 | `curveNow` | `var curveNow =` |
| 9,259 | `curveTag` | `var curveTag =` |
| 9,260 | `curveSub` | `var curveSub =` |
| 9,264 | `curvePct` | `function curvePct(` |
| 9,265 | `curveNoteFull` | `var curveNoteFull =` |
| 9,280 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,288 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,329 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,357_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,371 | `marketTops` | `var marketTops =` |
| 9,381 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,386 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,388_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,409 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,410 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,415_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,436 | `slopeOf` | `function slopeOf(` |
| 9,447 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,453 | `readSeason` | `function readSeason(` |
| 9,478 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,480 | `qLabel` | `function qLabel(` |
| 9,504 | `regimeTrack` | `function regimeTrack(` |
| 9,527 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,529_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,536 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,537 | `seasonTitle` | `function seasonTitle(` |
| 9,538 | `monthLabel` | `function monthLabel(` |
| 9,539 | `cycleModel` | `function cycleModel(` |
| 9,591 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,599 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,606 | `nowModel` | `var nowModel =` |
| 9,607 | `readingNow` | `var readingNow =` |
| 9,608 | `cpiNow` | `var cpiNow =` |
| 9,609 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,610 | `currentSeason` | `var currentSeason =` |
| 9,611 | `seasonWhy` | `var seasonWhy =` |
| 9,628 | `seasonGroup` | `function seasonGroup(` |
| 9,642 | `arcGauge` | `function arcGauge(` |
| 9,684 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,697 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,701 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,703 | `spreadLabel` | `function spreadLabel(` |
| 9,710 | `policyFacts` | `function policyFacts(` |
| 9,724 | `policyFactRows` | `function policyFactRows(` |
| 9,730 | `allSources` | `var allSources =` |
| 9,754 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,787_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,790 | `SVG_NS` | `var SVG_NS =` |
| 9,791 | `svgEl` | `function svgEl(` |
| 9,804 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,840_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,841 | `clampPct` | `function clampPct(` |
| 9,848 | `infoIcon` | `function infoIcon(` |
| 9,857 | `detailTexts` | `var detailTexts =` |
| 9,875 | `detailSlots` | `var detailSlots =` |
| 9,876 | `detailSlot` | `function detailSlot(` |
| 9,887 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,891 | `_growthPanel` | `var _growthPanel =` |
| 9,892 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,898 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,909 | `facts` | `function facts(` |
| 9,910 | `factsFrom` | `function factsFrom(` |
| 9,914 | `expandBtn` | `function expandBtn(` |
| 9,920 | `sheetRenderers` | `var sheetRenderers =` |
| 9,937 | `pageMode` | `var pageMode =` |
| 9,944 | `pageCycles` | `var pageCycles =` |
| 9,949 | `pageRange` | `var pageRange =` |
| 9,955 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,989_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,000 | `meterHtml` | `function meterHtml(` |
| 10,030 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW (Version 631)

_line 10,031_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,039 | `subjectRow` | `function subjectRow(` |
| 10,051 | `subjectIcon` | `function subjectIcon(` |
| 10,052 | `srcHtml` | `function srcHtml(` |
| 10,061 | `TIMING` | `var TIMING =` |
| 10,067 | `timingMark` | `function timingMark(` |
| 10,081 | `timingPill` | `function timingPill(` |
| 10,102 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,110 | `seatPageFoot` | `function seatPageFoot(` |
| 10,133 | `timingMembers` | `var timingMembers =` |
| 10,134 | `registerTiming` | `function registerTiming(` |
| 10,140 | `headHtml` | `function headHtml(` |
| 10,158 | `heldHighlights` | `var heldHighlights =` |
| 10,159 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time (V639)

_line 10,217_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,229 | `CURVE_KEY` | `var CURVE_KEY =` |
| 10,230 | `latestYieldPoint` | `function latestYieldPoint(` |
| 10,238 | `withLatestPoint` | `function withLatestPoint(` |
| 10,243 | `renderPressurePage` | `function renderPressurePage(` |

### V640: Pressure's Insights

_line 10,662_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,671 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,708_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,709 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,931_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,932 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,964_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,974 | `drawHznHead` | `function drawHznHead(` |
| 10,989 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,067_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,068 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,086_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,089 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,112_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,124 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,258_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,259 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,383_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,386 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,509_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,521 | `totalRiseIn` | `function totalRiseIn(` |
| 11,531 | `eraInflation` | `function eraInflation(` |
| 11,542 | `eraGrowth` | `function eraGrowth(` |
| 11,562 | `fmtSigned` | `function fmtSigned(` |
| 11,567 | `regimeArrow` | `function regimeArrow(` |
| 11,573 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,574 | `growthShown` | `function growthShown(` |
| 11,575 | `growthShownCap` | `function growthShownCap(` |
| 11,576 | `regimeState` | `function regimeState(` |
| 11,580 | `phaseClass` | `function phaseClass(` |
| 11,582 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,594 | `cycleViewEl` | `var cycleViewEl =` |
| 11,600 | `tempCard` | `var tempCard =` |
| 11,601 | `placeCharts` | `function placeCharts(` |
| 11,606 | `shownEra` | `var shownEra =` |
| 11,607 | `calendarReset` | `var calendarReset =` |
| 11,608 | `metricPageReset` | `var metricPageReset =` |
| 11,609 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,612 | `topbarBack` | `var topbarBack =` |
| 11,613 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,620_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,621 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,782_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,783 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,801_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,804 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,825_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,831 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,834 | `hubSet` | `function hubSet(` |
| 11,847 | `quarterPopup` | `function quarterPopup(` |
| 11,880 | `hubShowDefault` | `function hubShowDefault(` |
| 11,889 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,895 | `hubShowYear` | `function hubShowYear(` |
| 11,910 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,002_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,005 | `tempState` | `var tempState =` |
| 12,008 | `chartLink` | `var chartLink =` |
| 12,028 | `m2Step` | `function m2Step(` |
| 12,031 | `heatStep` | `function heatStep(` |
| 12,035 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,222_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,225 | `drawGrowth` | `function drawGrowth(` |
| 12,364 | `wireResize` | `function wireResize(` |
| 12,370 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,382_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,383 | `renderCycleView` | `function renderCycleView(` |
| 12,444 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,452_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,463 | `peerChosen` | `function peerChosen(` |
| 12,464 | `peerReaches` | `function peerReaches(` |
| 12,494 | `shownEraModel` | `var shownEraModel =` |
| 12,495 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,497_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,499 | `stripGroupName` | `var stripGroupName =` |
| 12,500 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,546 | `marketStripHtml` | `function marketStripHtml(` |
| 12,609 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,610 | `settleStrips` | `function settleStrips(` |
| 12,645 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES (Version 630)

_line 12,924_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,938 | `partsOf` | `function partsOf(` |
| 12,947 | `discOf` | `function discOf(` |
| 12,954 | `authored` | `function authored(` |
| 12,960 | `registerRoster` | `function registerRoster(` |
| 13,002 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER (Version 630)

_line 13,014_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,023 | `NAV` | `var NAV =` |
| 13,024 | `buildNav` | `function buildNav(` |

### ALL INDICATORS (Version 630)

_line 13,138_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,142 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories (Version 630)

_line 13,202_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,205 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES (Version 630)

_line 13,696_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,700 | `renderMetricPages` | `function renderMetricPages(` |

### GDP growth

_line 14,138_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,193 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,225_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,226 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,326_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,338 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,381_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,389 | `__roster` | `var __roster =` |
| 14,390 | `readingRoster` | `function readingRoster(` |
| 14,445 | `readFig` | `function readFig(` |
| 14,453 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612)

_line 14,460_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,488 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,541_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,542 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,602_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,603 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,636_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,637 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,204–4,207 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,635–8,648 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,487–9,500 | `seasonTrackAll` | The season, computed |
| 9,522–9,526 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,925 |
| `desire-range` | 10,566 |
| `fear-range` | 11,348 |
| `hormones-range` | 11,158 |
| `hzn-range` | 11,017 |
| `pressure-range` | 4,362 |
| `pulse-range` | 10,522 |
| `sheet-marker-deficit` | 13,922 |
| `sheet-metric-gdp` | 13,814 |
| `sheet-metric-households` | 13,952 |
| `sheet-metric-power` | 13,886 |
| `sheet-metric-temp` | 13,769 |
| `sheet-metric-valuation` | 13,996 |
| `sheet-sign-activity` | 13,870 |
| `sheet-sign-desire` | 10,567 |
| `sheet-sign-horizon` | 11,018 |
| `sheet-sign-hormones` | 11,161 |
| `sheet-sign-pressure` | 10,643 |
| `sheet-sign-pulse` | 10,521 |
| `sheet-sign-sentiment` | 11,353 |
| `sheet-sign-volume` | 10,542 |
| `volume-range` | 10,543 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,931 |
| `desire-range` | 10,551 |
| `fear-range` | 11,305 |
| `hzn-range` | 10,999 |
| `pressure-range` | 10,600 |
| `pulse-range` | 10,505 |
| `sheet-metric-gdp` | 13,815 |
| `sheet-metric-power` | 13,887 |
| `sheet-metric-temp` | 13,770 |
| `sheet-metric-valuation` | 13,997 |
| `volume-range` | 10,526 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,328 |
| `sheet-metric-gdp` | 6,329 |
| `sheet-sign-activity` | 6,336 |
| `sheet-metric-power` | 6,337 |
| `sheet-metric-valuation` | 6,339 |
| `sheet-metric-households` | 6,340 |
| `deficit-range` | 6,341 |
| `volume-range` | 6,342 |
| `pulse-range` | 6,343 |
| `hzn-range` | 6,348 |
| `desire-range` | 6,349 |
| `fear-range` | 6,350 |
| `hormones-range` | 6,351 |
| `pressure-range` | 6,352 |

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

