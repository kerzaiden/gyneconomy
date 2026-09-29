# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,887 lines**, about 1244 KB, roughly **354 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `c528b4b` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,108 | the whole stylesheet, every token and rule |
| **Markup** | 3,109–3,894 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,895–14,834 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,835–14,887 | </body></html> |

Counts: **286** top-level functions, **181** top-level vars, **4** top-level IIFEs in the script.

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

_line 3,969_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,979 | `wheelMeta` | `var wheelMeta =` |
| 3,990 | `seasonOverride` | `var seasonOverride =` |
| 3,993 | `cycleNowNote` | `var cycleNowNote =` |
| 4,002 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,088 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,133 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,146_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,165 | `merge` | `function merge(` |
| 4,172 | `LIVE` | `function LIVE(` |
| 4,196 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,199_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,252 | `paintReading` | `function paintReading(` |
| 4,275 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,299 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,309 | `repaintPressureRow` | `function repaintPressureRow(` |
| 4,314 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY (Version 629)

_line 4,319_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,347 | `READINGS` | `var READINGS =` |
| 4,418 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 4,419 | `KINDS` | `var KINDS =` |
| 4,420 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 4,441 | `receive` | `function receive(` |
| 4,465 | `liveAsOf` | `var liveAsOf =` |
| 4,466 | `fmtAsOf` | `function fmtAsOf(` |
| 4,479 | `applyLive` | `function applyLive(` |
| 4,494 | `shapeOk` | `function shapeOk(` |
| 4,504 | `repaintPolicy` | `function repaintPolicy(` |
| 4,556 | `GYN` | `var GYN =` |
| 4,593 | `refreshLiveData` | `function refreshLiveData(` |
| 4,622 | `fetchSiteData` | `function fetchSiteData(` |
| 4,638 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,652_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,653 | `yieldCurve` | `var yieldCurve =` |
| 4,666 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,690 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,702 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,730_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,735 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,759 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,783 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,807 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,834 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,859_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,868 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,878 | `uninvLagToday` | `var uninvLagToday =` |
| 4,890 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,903 | `gdpPeers` | `var gdpPeers =` |
| 4,944 | `gdpSrc` | `var gdpSrc =` |
| 4,945 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,950 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,963 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 5,005_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,027 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 5,037_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,053 | `stressScoreFor` | `function stressScoreFor(` |
| 5,059 | `stressScore` | `var stressScore =` |
| 5,065 | `powerOf` | `var powerOf =` |
| 5,066 | `powerScore` | `var powerScore =` |
| 5,083 | `stressHistory` | `var stressHistory =` |
| 5,096 | `powerMeter` | `var powerMeter =` |
| 5,098 | `stressNoteFull` | `var stressNoteFull =` |
| 5,133 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,135_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,158 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,159 | `deficitHistory` | `var deficitHistory =` |
| 5,162 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,169 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,171 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,214 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,215 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,223 | `fiscalHistory` | `var fiscalHistory =` |
| 5,229 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,246_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,259 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,272_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,286 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,289 | `timelineSpan` | `function timelineSpan(` |
| 5,295 | `timelineFor` | `function timelineFor(` |
| 5,308 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,314_ · 32 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,320 | `windowScale` | `function windowScale(` |
| 5,336 | `windowYears` | `function windowYears(` |
| 5,354 | `refName` | `function refName(` |
| 5,361 | `histReadEnsure` | `function histReadEnsure(` |
| 5,400 | `seatBandReading` | `function seatBandReading(` |
| 5,423 | `histReadFill` | `function histReadFill(` |
| 5,551 | `histAxisEnds` | `function histAxisEnds(` |
| 5,562 | `histLegend` | `function histLegend(` |
| 5,650 | `refitHistory` | `function refitHistory(` |
| 5,662 | `wireHistHover` | `function wireHistHover(` |
| 5,742 | `mWindowFrom` | `function mWindowFrom(` |
| 5,747 | `qWindowFrom` | `function qWindowFrom(` |
| 5,752 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,753 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,755 | `DEF_1983` | `var DEF_1983 =` |
| 5,757 | `defFrom` | `function defFrom(` |
| 5,768 | `deficitChart` | `function deficitChart(` |
| 5,857 | `deficitBlock` | `function deficitBlock(` |
| 5,919 | `buffettHistory` | `var buffettHistory =` |
| 5,949 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,950 | `hyDates` | `var hyDates =` |
| 5,951 | `hyOas` | `var hyOas =` |
| 5,952 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,959 | `hyAt` | `function hyAt(` |
| 5,963 | `hyLabel` | `function hyLabel(` |
| 5,964 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,965 | `hyNum` | `function hyNum(` |
| 5,966 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,976 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,986 | `capeHistory` | `var capeHistory =` |
| 5,988 | `longCycleSrc` | `var longCycleSrc =` |
| 6,007 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 6,030_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,036 | `sentiment` | `var sentiment =` |
| 6,054 | `valuation` | `var valuation =` |
| 6,091 | `valRow` | `function valRow(` |
| 6,099 | `coincident` | `var coincident =` |
| 6,160 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,178 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,179 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,180 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,182_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,195 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,196 | `m2vHistory` | `var m2vHistory =` |
| 6,216 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,308 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,397 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,398 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,438_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,444 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,445 | `DOTS` | `var DOTS =` |
| 6,452 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,487 | `headPickRow` | `function headPickRow(` |
| 6,493 | `histHead` | `function histHead(` |
| 6,517 | `headNoteIdx` | `var headNoteIdx =` |
| 6,518 | `headMenuHtml` | `function headMenuHtml(` |
| 6,576 | `headMenuFor` | `var headMenuFor =` |
| 6,578 | `headSubFor` | `var headSubFor =` |
| 6,579 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,628 | `nameWithMark` | `function nameWithMark(` |
| 6,634 | `panelRow` | `function panelRow(` |
| 6,667 | `panelFromMeter` | `function panelFromMeter(` |
| 6,681 | `meterFlagged` | `function meterFlagged(` |
| 6,692 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,720 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,734 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,753 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,772 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,786 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,811 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,842 | `desireBlock` | `function desireBlock(` |
| 6,869 | `volumeBlock` | `function volumeBlock(` |
| 6,894 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,917 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,925_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,938 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,939 | `m2Level` | `var m2Level =` |
| 6,961 | `m2Yoy` | `var m2Yoy =` |
| 6,962 | `M2_NORM` | `var M2_NORM =` |
| 6,967 | `volumeVerdict` | `function volumeVerdict(` |
| 7,004 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 7,005 | `unempHistory` | `var unempHistory =` |
| 7,011 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 7,026 | `NROU_NOW` | `var NROU_NOW =` |
| 7,027 | `unempState` | `function unempState(` |
| 7,033 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones — the policy rate's history

_line 7,095_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,104 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 7,115 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,182 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,183 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,186 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,194_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,209 | `householdsChart` | `function householdsChart(` |
| 7,276 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,359 | `GDP_NORM` | `var GDP_NORM =` |
| 7,365 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,366 | `gdpNowQ` | `var gdpNowQ =` |
| 7,367 | `gdpMeter` | `var gdpMeter =` |
| 7,370 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,392 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,456 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,519 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,527 | `velocityVerdict` | `function velocityVerdict(` |
| 7,535 | `derivePulseTag` | `function derivePulseTag(` |
| 7,541 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,601_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,610 | `seasonReading` | `var seasonReading =` |
| 7,659 | `frameworkRows` | `var frameworkRows =` |
| 7,669 | `vixRow` | `var vixRow =` |
| 7,677 | `vixWordOf` | `var vixWordOf =` |
| 7,681 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,696_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,700 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,709_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,710 | `calendarTodayY` | `var calendarTodayY =` |
| 7,741 | `vix3mClose` | `var vix3mClose =` |
| 7,742 | `fearCurve` | `function fearCurve(` |
| 7,749 | `curveVerdict` | `function curveVerdict(` |
| 7,756 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,761 | `valuationVerdict` | `function valuationVerdict(` |
| 7,779 | `sparkHtml` | `function sparkHtml(` |
| 7,798 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,804_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,817 | `modeBar` | `function modeBar(` |
| 7,832 | `pickerOpen` | `var pickerOpen =` |
| 7,836 | `cycleByName` | `function cycleByName(` |
| 7,840 | `openCycle` | `function openCycle(` |
| 7,846 | `cycleSlice` | `function cycleSlice(` |
| 7,855 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,863 | `cycleMonths` | `function cycleMonths(` |
| 7,882 | `histControls` | `function histControls(` |
| 7,896 | `cycLabel` | `function cycLabel(` |
| 7,912 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,921 | `cyclePicker` | `function cyclePicker(` |
| 7,940 | `rangeBar` | `function rangeBar(` |
| 7,952 | `trendOf` | `function trendOf(` |
| 7,997 | `TREND_ARROW` | `var TREND_ARROW =` |
| 8,007 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 8,028_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,029 | `yearOf` | `function yearOf(` |
| 8,030 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 8,031_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,069 | `headSigma` | `function headSigma(` |
| 8,077 | `atQuarter` | `function atQuarter(` |
| 8,078 | `atMonth` | `function atMonth(` |
| 8,079 | `cycleAverages` | `function cycleAverages(` |
| 8,086 | `ordinal` | `function ordinal(` |
| 8,087 | `hiCard` | `function hiCard(` |
| 8,098 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,112_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,119 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,135 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,142 | `moreRow` | `function moreRow(` |
| 8,148 | `powerPageNote` | `var powerPageNote =` |
| 8,149 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,161_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,164 | `xLabelOf` | `function xLabelOf(` |
| 8,184 | `fitGroup` | `function fitGroup(` |
| 8,206 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,265_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,289 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,299 | `vGrid` | `function vGrid(` |
| 8,324 | `COL_FILL` | `var COL_FILL =` |
| 8,357 | `colPath` | `function colPath(` |
| 8,362 | `colWidth` | `function colWidth(` |
| 8,409 | `AXIS` | `var AXIS =` |
| 8,425 | `histFrame` | `function histFrame(` |
| 8,437 | `xLabel` | `function xLabel(` |
| 8,441 | `crossLine` | `function crossLine(` |
| 8,446 | `zeroRule` | `function zeroRule(` |
| 8,449 | `meanRule` | `function meanRule(` |
| 8,461 | `pendingGeom` | `var pendingGeom =` |
| 8,462 | `publishGeom` | `function publishGeom(` |
| 8,463 | `attachHistory` | `function attachHistory(` |
| 8,478 | `histBar` | `function histBar(` |
| 8,481 | `histTip` | `function histTip(` |
| 8,484 | `avgRule` | `function avgRule(` |
| 8,487 | `vhOpen` | `function vhOpen(` |
| 8,488 | `chartAxes` | `function chartAxes(` |
| 8,548 | `divergeChart` | `function divergeChart(` |
| 8,616 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,645_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,653 | `maxIn` | `function maxIn(` |
| 8,671 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,685 | `PEEK_W` | `var PEEK_W =` |
| 8,688 | `PEEK_H` | `var PEEK_H =` |
| 8,693 | `colPeek` | `function colPeek(` |
| 8,720 | `meterPeek` | `function meterPeek(` |
| 8,737 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,742 | `pressureZone` | `function pressureZone(` |
| 8,757 | `HZN_BACK` | `var HZN_BACK =` |
| 8,758 | `hznLast` | `function hznLast(` |
| 8,759 | `hznBack` | `function hznBack(` |
| 8,760 | `horizonWord` | `function horizonWord(` |
| 8,785 | `HZN_METERS` | `var HZN_METERS =` |
| 8,793 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,834 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,839 | `RISK_RISK` | `var RISK_RISK =` |
| 8,844 | `riskCell` | `function riskCell(` |
| 8,845 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,876 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,901_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,922 | `pulseClipN` | `var pulseClipN =` |
| 8,923 | `beatPath` | `function beatPath(` |
| 8,948 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,962 | `pulsePeek` | `function pulsePeek(` |
| 8,970 | `pulseBlock` | `function pulseBlock(` |
| 8,990 | `CHEV` | `var CHEV =` |
| 8,992 | `peekCard` | `function peekCard(` |
| 9,046 | `dropSvg` | `function dropSvg(` |
| 9,058 | `volumeSvg` | `function volumeSvg(` |
| 9,065 | `gaugeSvg` | `function gaugeSvg(` |
| 9,069 | `diamondSvg` | `function diamondSvg(` |
| 9,083 | `energyFromReserve` | `function energyFromReserve(` |
| 9,095 | `sproutSvg` | `function sproutSvg(` |
| 9,106 | `markSvg` | `function markSvg(` |
| 9,114 | `hormoneSvg` | `function hormoneSvg(` |
| 9,120 | `flameSvg` | `function flameSvg(` |
| 9,124 | `gearSvg` | `function gearSvg(` |
| 9,136 | `thermoSvg` | `function thermoSvg(` |
| 9,155 | `trendUpSvg` | `function trendUpSvg(` |
| 9,157 | `ecgSvg` | `function ecgSvg(` |
| 9,171 | `circulationSvg` | `function circulationSvg(` |
| 9,172 | `weatherSvg` | `function weatherSvg(` |
| 9,193 | `moodSvg` | `function moodSvg(` |
| 9,217 | `boltSvg` | `function boltSvg(` |
| 9,220 | `houseSvg` | `function houseSvg(` |
| 9,228 | `sunriseSvg` | `function sunriseSvg(` |
| 9,243 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,254 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,271_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,292 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,293 | `dsrHistory` | `var dsrHistory =` |
| 9,294 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,295 | `savHistory` | `var savHistory =` |
| 9,300 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,310 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,311 | `dsrNow` | `var dsrNow =` |
| 9,312 | `savNow` | `var savNow =` |
| 9,313 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,318 | `householdsWord` | `function householdsWord(` |
| 9,325 | `householdsNow` | `var householdsNow =` |
| 9,332 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,333 | `dsrMeter` | `var dsrMeter =` |
| 9,336 | `savMeter` | `var savMeter =` |
| 9,339 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,356 | `savInfoHtml` | `function savInfoHtml(` |
| 9,374 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,383 | `curveNow` | `var curveNow =` |
| 9,384 | `curveTag` | `var curveTag =` |
| 9,385 | `curveSub` | `var curveSub =` |
| 9,389 | `curvePct` | `function curvePct(` |
| 9,390 | `curveNoteFull` | `var curveNoteFull =` |
| 9,405 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,413 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,454 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,482_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,496 | `marketTops` | `var marketTops =` |
| 9,506 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,511 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,513_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,534 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,535 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,540_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,561 | `slopeOf` | `function slopeOf(` |
| 9,572 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,578 | `readSeason` | `function readSeason(` |
| 9,603 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,605 | `qLabel` | `function qLabel(` |
| 9,629 | `regimeTrack` | `function regimeTrack(` |
| 9,652 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,654_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,661 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,662 | `seasonTitle` | `function seasonTitle(` |
| 9,663 | `monthLabel` | `function monthLabel(` |
| 9,664 | `cycleModel` | `function cycleModel(` |
| 9,716 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,724 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,731 | `nowModel` | `var nowModel =` |
| 9,732 | `readingNow` | `var readingNow =` |
| 9,733 | `cpiNow` | `var cpiNow =` |
| 9,734 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,735 | `currentSeason` | `var currentSeason =` |
| 9,736 | `seasonWhy` | `var seasonWhy =` |
| 9,753 | `seasonGroup` | `function seasonGroup(` |
| 9,767 | `arcGauge` | `function arcGauge(` |
| 9,809 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,822 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,826 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,828 | `spreadLabel` | `function spreadLabel(` |
| 9,835 | `policyFacts` | `function policyFacts(` |
| 9,849 | `policyFactRows` | `function policyFactRows(` |
| 9,855 | `allSources` | `var allSources =` |
| 9,879 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,912_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,915 | `SVG_NS` | `var SVG_NS =` |
| 9,916 | `svgEl` | `function svgEl(` |
| 9,929 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,965_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,966 | `clampPct` | `function clampPct(` |
| 9,973 | `infoIcon` | `function infoIcon(` |
| 9,982 | `detailTexts` | `var detailTexts =` |
| 10,000 | `detailSlots` | `var detailSlots =` |
| 10,001 | `detailSlot` | `function detailSlot(` |
| 10,012 | `powerPanelHtml` | `var powerPanelHtml =` |
| 10,016 | `_growthPanel` | `var _growthPanel =` |
| 10,017 | `growthPanelHtml` | `function growthPanelHtml(` |
| 10,023 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 10,034 | `facts` | `function facts(` |
| 10,035 | `factsFrom` | `function factsFrom(` |
| 10,039 | `expandBtn` | `function expandBtn(` |
| 10,045 | `sheetRenderers` | `var sheetRenderers =` |
| 10,062 | `pageMode` | `var pageMode =` |
| 10,069 | `pageCycles` | `var pageCycles =` |
| 10,074 | `pageRange` | `var pageRange =` |
| 10,080 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,114_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,125 | `meterHtml` | `function meterHtml(` |
| 10,155 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW (Version 631)

_line 10,156_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,164 | `subjectRow` | `function subjectRow(` |
| 10,176 | `subjectIcon` | `function subjectIcon(` |
| 10,177 | `srcHtml` | `function srcHtml(` |
| 10,186 | `TIMING` | `var TIMING =` |
| 10,192 | `timingMark` | `function timingMark(` |
| 10,206 | `timingPill` | `function timingPill(` |
| 10,227 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,235 | `seatPageFoot` | `function seatPageFoot(` |
| 10,258 | `timingMembers` | `var timingMembers =` |
| 10,259 | `registerTiming` | `function registerTiming(` |
| 10,265 | `headHtml` | `function headHtml(` |
| 10,283 | `heldHighlights` | `var heldHighlights =` |
| 10,284 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time (V639)

_line 10,342_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,347 | `renderPressurePage` | `function renderPressurePage(` |

### V640: Pressure's Insights

_line 10,755_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,764 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,801_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,802 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 11,024_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,025 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 11,057_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,067 | `drawHznHead` | `function drawHznHead(` |
| 11,082 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,160_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,161 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,179_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,182 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,205_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,217 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,351_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,352 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,476_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,479 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,602_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,614 | `totalRiseIn` | `function totalRiseIn(` |
| 11,624 | `eraInflation` | `function eraInflation(` |
| 11,635 | `eraGrowth` | `function eraGrowth(` |
| 11,655 | `fmtSigned` | `function fmtSigned(` |
| 11,660 | `regimeArrow` | `function regimeArrow(` |
| 11,666 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,667 | `growthShown` | `function growthShown(` |
| 11,668 | `growthShownCap` | `function growthShownCap(` |
| 11,669 | `regimeState` | `function regimeState(` |
| 11,673 | `phaseClass` | `function phaseClass(` |
| 11,675 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,687 | `cycleViewEl` | `var cycleViewEl =` |
| 11,693 | `tempCard` | `var tempCard =` |
| 11,694 | `placeCharts` | `function placeCharts(` |
| 11,699 | `shownEra` | `var shownEra =` |
| 11,700 | `calendarReset` | `var calendarReset =` |
| 11,701 | `metricPageReset` | `var metricPageReset =` |
| 11,702 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,705 | `topbarBack` | `var topbarBack =` |
| 11,706 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,713_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,714 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,875_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,876 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,894_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,897 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,918_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,924 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,927 | `hubSet` | `function hubSet(` |
| 11,940 | `quarterPopup` | `function quarterPopup(` |
| 11,973 | `hubShowDefault` | `function hubShowDefault(` |
| 11,982 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,988 | `hubShowYear` | `function hubShowYear(` |
| 12,003 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,095_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,098 | `tempState` | `var tempState =` |
| 12,101 | `chartLink` | `var chartLink =` |
| 12,121 | `m2Step` | `function m2Step(` |
| 12,124 | `heatStep` | `function heatStep(` |
| 12,128 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,315_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,318 | `drawGrowth` | `function drawGrowth(` |
| 12,457 | `wireResize` | `function wireResize(` |
| 12,463 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,475_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,476 | `renderCycleView` | `function renderCycleView(` |
| 12,537 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,545_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,556 | `peerChosen` | `function peerChosen(` |
| 12,557 | `peerReaches` | `function peerReaches(` |
| 12,587 | `shownEraModel` | `var shownEraModel =` |
| 12,588 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,590_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,592 | `stripGroupName` | `var stripGroupName =` |
| 12,593 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,639 | `marketStripHtml` | `function marketStripHtml(` |
| 12,702 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,703 | `settleStrips` | `function settleStrips(` |
| 12,738 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES (Version 630)

_line 13,017_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,031 | `partsOf` | `function partsOf(` |
| 13,040 | `discOf` | `function discOf(` |
| 13,047 | `authored` | `function authored(` |
| 13,053 | `registerRoster` | `function registerRoster(` |
| 13,095 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER (Version 630)

_line 13,107_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,116 | `NAV` | `var NAV =` |
| 13,117 | `buildNav` | `function buildNav(` |

### ALL INDICATORS (Version 630)

_line 13,231_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,235 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories (Version 630)

_line 13,295_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,298 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES (Version 630)

_line 13,789_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,793 | `renderMetricPages` | `function renderMetricPages(` |

### GDP growth

_line 14,231_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,286 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,318_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,319 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,419_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,431 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,474_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,482 | `__roster` | `var __roster =` |
| 14,483 | `readingRoster` | `function readingRoster(` |
| 14,538 | `readFig` | `function readFig(` |
| 14,546 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612)

_line 14,553_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,581 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,634_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,635 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,695_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,696 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,729_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,730 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,159–4,162 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,766–8,779 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,612–9,625 | `seasonTrackAll` | The season, computed |
| 9,647–9,651 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 14,018 |
| `desire-range` | 10,660 |
| `fear-range` | 11,441 |
| `hormones-range` | 11,251 |
| `hzn-range` | 11,110 |
| `pressure-range` | 10,735 |
| `pulse-range` | 10,616 |
| `sheet-marker-deficit` | 14,015 |
| `sheet-metric-gdp` | 13,907 |
| `sheet-metric-households` | 14,045 |
| `sheet-metric-power` | 13,979 |
| `sheet-metric-temp` | 13,862 |
| `sheet-metric-valuation` | 14,089 |
| `sheet-sign-activity` | 13,963 |
| `sheet-sign-desire` | 10,661 |
| `sheet-sign-horizon` | 11,111 |
| `sheet-sign-hormones` | 11,254 |
| `sheet-sign-pressure` | 10,736 |
| `sheet-sign-pulse` | 10,615 |
| `sheet-sign-sentiment` | 11,446 |
| `sheet-sign-volume` | 10,636 |
| `volume-range` | 10,637 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 14,024 |
| `desire-range` | 10,645 |
| `fear-range` | 11,398 |
| `hzn-range` | 11,092 |
| `pressure-range` | 10,693 |
| `pulse-range` | 10,599 |
| `sheet-metric-gdp` | 13,908 |
| `sheet-metric-power` | 13,980 |
| `sheet-metric-temp` | 13,863 |
| `sheet-metric-valuation` | 14,090 |
| `volume-range` | 10,620 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,459 |
| `sheet-metric-gdp` | 6,460 |
| `sheet-sign-activity` | 6,467 |
| `sheet-metric-power` | 6,468 |
| `sheet-metric-valuation` | 6,470 |
| `sheet-metric-households` | 6,471 |
| `deficit-range` | 6,472 |
| `volume-range` | 6,473 |
| `pulse-range` | 6,474 |
| `hzn-range` | 6,479 |
| `desire-range` | 6,480 |
| `fear-range` | 6,481 |
| `hormones-range` | 6,482 |
| `pressure-range` | 6,483 |

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

