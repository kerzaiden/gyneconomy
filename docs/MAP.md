# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,854 lines**, about 1241 KB, roughly **353 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `149ff41` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,108 | the whole stylesheet, every token and rule |
| **Markup** | 3,109–3,894 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,895–14,801 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,802–14,854 | </body></html> |

Counts: **285** top-level functions, **181** top-level vars, **4** top-level IIFEs in the script.

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

_line 5,001_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,023 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 5,033_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,049 | `stressScoreFor` | `function stressScoreFor(` |
| 5,055 | `stressScore` | `var stressScore =` |
| 5,061 | `powerOf` | `var powerOf =` |
| 5,062 | `powerScore` | `var powerScore =` |
| 5,079 | `stressHistory` | `var stressHistory =` |
| 5,090 | `powerMeter` | `var powerMeter =` |
| 5,092 | `stressNoteFull` | `var stressNoteFull =` |
| 5,124 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,126_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,149 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,150 | `deficitHistory` | `var deficitHistory =` |
| 5,153 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,160 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,162 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,205 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,206 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,214 | `fiscalHistory` | `var fiscalHistory =` |
| 5,220 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,237_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,250 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,263_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,277 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,280 | `timelineSpan` | `function timelineSpan(` |
| 5,286 | `timelineFor` | `function timelineFor(` |
| 5,299 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,305_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,311 | `windowScale` | `function windowScale(` |
| 5,327 | `windowYears` | `function windowYears(` |
| 5,345 | `refName` | `function refName(` |
| 5,352 | `histReadEnsure` | `function histReadEnsure(` |
| 5,391 | `seatBandReading` | `function seatBandReading(` |
| 5,414 | `histReadFill` | `function histReadFill(` |
| 5,542 | `histAxisEnds` | `function histAxisEnds(` |
| 5,553 | `histLegend` | `function histLegend(` |
| 5,641 | `refitHistory` | `function refitHistory(` |
| 5,653 | `wireHistHover` | `function wireHistHover(` |
| 5,733 | `mWindowFrom` | `function mWindowFrom(` |
| 5,738 | `qWindowFrom` | `function qWindowFrom(` |
| 5,743 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,744 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,746 | `DEF_1983` | `var DEF_1983 =` |
| 5,748 | `defFrom` | `function defFrom(` |
| 5,759 | `deficitChart` | `function deficitChart(` |
| 5,848 | `deficitBlock` | `function deficitBlock(` |
| 5,910 | `buffettHistory` | `var buffettHistory =` |
| 5,940 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,941 | `hyDates` | `var hyDates =` |
| 5,942 | `hyOas` | `var hyOas =` |
| 5,943 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,950 | `hyAt` | `function hyAt(` |
| 5,954 | `hyLabel` | `function hyLabel(` |
| 5,955 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,956 | `hyNum` | `function hyNum(` |
| 5,957 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,967 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,977 | `capeHistory` | `var capeHistory =` |
| 5,979 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,997_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,003 | `sentiment` | `var sentiment =` |
| 6,021 | `valuation` | `var valuation =` |
| 6,058 | `valRow` | `function valRow(` |
| 6,066 | `coincident` | `var coincident =` |
| 6,127 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,145 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,146 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,147 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,149_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,162 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,163 | `m2vHistory` | `var m2vHistory =` |
| 6,183 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,275 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,364 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,365 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,405_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,411 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,412 | `DOTS` | `var DOTS =` |
| 6,419 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,454 | `headPickRow` | `function headPickRow(` |
| 6,460 | `histHead` | `function histHead(` |
| 6,484 | `headNoteIdx` | `var headNoteIdx =` |
| 6,485 | `headMenuHtml` | `function headMenuHtml(` |
| 6,543 | `headMenuFor` | `var headMenuFor =` |
| 6,545 | `headSubFor` | `var headSubFor =` |
| 6,546 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,595 | `nameWithMark` | `function nameWithMark(` |
| 6,601 | `panelRow` | `function panelRow(` |
| 6,634 | `panelFromMeter` | `function panelFromMeter(` |
| 6,648 | `meterFlagged` | `function meterFlagged(` |
| 6,659 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,687 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,701 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,720 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,739 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,753 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,778 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,809 | `desireBlock` | `function desireBlock(` |
| 6,836 | `volumeBlock` | `function volumeBlock(` |
| 6,861 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,884 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,892_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,905 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,906 | `m2Level` | `var m2Level =` |
| 6,928 | `m2Yoy` | `var m2Yoy =` |
| 6,929 | `M2_NORM` | `var M2_NORM =` |
| 6,934 | `volumeVerdict` | `function volumeVerdict(` |
| 6,971 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,972 | `unempHistory` | `var unempHistory =` |
| 6,978 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,993 | `NROU_NOW` | `var NROU_NOW =` |
| 6,994 | `unempState` | `function unempState(` |
| 7,000 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones — the policy rate's history

_line 7,062_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,071 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 7,082 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,149 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,150 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,153 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,161_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,176 | `householdsChart` | `function householdsChart(` |
| 7,243 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,326 | `GDP_NORM` | `var GDP_NORM =` |
| 7,332 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,333 | `gdpNowQ` | `var gdpNowQ =` |
| 7,334 | `gdpMeter` | `var gdpMeter =` |
| 7,337 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,359 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,423 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,486 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,494 | `velocityVerdict` | `function velocityVerdict(` |
| 7,502 | `derivePulseTag` | `function derivePulseTag(` |
| 7,508 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,568_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,577 | `seasonReading` | `var seasonReading =` |
| 7,626 | `frameworkRows` | `var frameworkRows =` |
| 7,636 | `vixRow` | `var vixRow =` |
| 7,644 | `vixWordOf` | `var vixWordOf =` |
| 7,648 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,663_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,667 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,676_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,677 | `calendarTodayY` | `var calendarTodayY =` |
| 7,708 | `vix3mClose` | `var vix3mClose =` |
| 7,709 | `fearCurve` | `function fearCurve(` |
| 7,716 | `curveVerdict` | `function curveVerdict(` |
| 7,723 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,728 | `valuationVerdict` | `function valuationVerdict(` |
| 7,746 | `sparkHtml` | `function sparkHtml(` |
| 7,765 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,771_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,784 | `modeBar` | `function modeBar(` |
| 7,799 | `pickerOpen` | `var pickerOpen =` |
| 7,803 | `cycleByName` | `function cycleByName(` |
| 7,807 | `openCycle` | `function openCycle(` |
| 7,813 | `cycleSlice` | `function cycleSlice(` |
| 7,822 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,830 | `cycleMonths` | `function cycleMonths(` |
| 7,849 | `histControls` | `function histControls(` |
| 7,863 | `cycLabel` | `function cycLabel(` |
| 7,879 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,888 | `cyclePicker` | `function cyclePicker(` |
| 7,907 | `rangeBar` | `function rangeBar(` |
| 7,919 | `trendOf` | `function trendOf(` |
| 7,964 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,974 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,995_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,996 | `yearOf` | `function yearOf(` |
| 7,997 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,998_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,036 | `headSigma` | `function headSigma(` |
| 8,044 | `atQuarter` | `function atQuarter(` |
| 8,045 | `atMonth` | `function atMonth(` |
| 8,046 | `cycleAverages` | `function cycleAverages(` |
| 8,053 | `ordinal` | `function ordinal(` |
| 8,054 | `hiCard` | `function hiCard(` |
| 8,065 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,079_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,086 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,102 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,109 | `moreRow` | `function moreRow(` |
| 8,115 | `powerPageNote` | `var powerPageNote =` |
| 8,116 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,128_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,131 | `xLabelOf` | `function xLabelOf(` |
| 8,151 | `fitGroup` | `function fitGroup(` |
| 8,173 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,232_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,256 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,266 | `vGrid` | `function vGrid(` |
| 8,291 | `COL_FILL` | `var COL_FILL =` |
| 8,324 | `colPath` | `function colPath(` |
| 8,329 | `colWidth` | `function colWidth(` |
| 8,376 | `AXIS` | `var AXIS =` |
| 8,392 | `histFrame` | `function histFrame(` |
| 8,404 | `xLabel` | `function xLabel(` |
| 8,408 | `crossLine` | `function crossLine(` |
| 8,413 | `zeroRule` | `function zeroRule(` |
| 8,416 | `meanRule` | `function meanRule(` |
| 8,428 | `pendingGeom` | `var pendingGeom =` |
| 8,429 | `publishGeom` | `function publishGeom(` |
| 8,430 | `attachHistory` | `function attachHistory(` |
| 8,445 | `histBar` | `function histBar(` |
| 8,448 | `histTip` | `function histTip(` |
| 8,451 | `avgRule` | `function avgRule(` |
| 8,454 | `vhOpen` | `function vhOpen(` |
| 8,455 | `chartAxes` | `function chartAxes(` |
| 8,515 | `divergeChart` | `function divergeChart(` |
| 8,583 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,612_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,620 | `maxIn` | `function maxIn(` |
| 8,638 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,652 | `PEEK_W` | `var PEEK_W =` |
| 8,655 | `PEEK_H` | `var PEEK_H =` |
| 8,660 | `colPeek` | `function colPeek(` |
| 8,687 | `meterPeek` | `function meterPeek(` |
| 8,704 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,709 | `pressureZone` | `function pressureZone(` |
| 8,724 | `HZN_BACK` | `var HZN_BACK =` |
| 8,725 | `hznLast` | `function hznLast(` |
| 8,726 | `hznBack` | `function hznBack(` |
| 8,727 | `horizonWord` | `function horizonWord(` |
| 8,752 | `HZN_METERS` | `var HZN_METERS =` |
| 8,760 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,801 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,806 | `RISK_RISK` | `var RISK_RISK =` |
| 8,811 | `riskCell` | `function riskCell(` |
| 8,812 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,843 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,868_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,889 | `pulseClipN` | `var pulseClipN =` |
| 8,890 | `beatPath` | `function beatPath(` |
| 8,915 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,929 | `pulsePeek` | `function pulsePeek(` |
| 8,937 | `pulseBlock` | `function pulseBlock(` |
| 8,957 | `CHEV` | `var CHEV =` |
| 8,959 | `peekCard` | `function peekCard(` |
| 9,013 | `dropSvg` | `function dropSvg(` |
| 9,025 | `volumeSvg` | `function volumeSvg(` |
| 9,032 | `gaugeSvg` | `function gaugeSvg(` |
| 9,036 | `diamondSvg` | `function diamondSvg(` |
| 9,050 | `energyFromReserve` | `function energyFromReserve(` |
| 9,062 | `sproutSvg` | `function sproutSvg(` |
| 9,073 | `markSvg` | `function markSvg(` |
| 9,081 | `hormoneSvg` | `function hormoneSvg(` |
| 9,087 | `flameSvg` | `function flameSvg(` |
| 9,091 | `gearSvg` | `function gearSvg(` |
| 9,103 | `thermoSvg` | `function thermoSvg(` |
| 9,122 | `trendUpSvg` | `function trendUpSvg(` |
| 9,124 | `ecgSvg` | `function ecgSvg(` |
| 9,138 | `circulationSvg` | `function circulationSvg(` |
| 9,139 | `weatherSvg` | `function weatherSvg(` |
| 9,160 | `moodSvg` | `function moodSvg(` |
| 9,184 | `boltSvg` | `function boltSvg(` |
| 9,187 | `houseSvg` | `function houseSvg(` |
| 9,195 | `sunriseSvg` | `function sunriseSvg(` |
| 9,210 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,221 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,238_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,259 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,260 | `dsrHistory` | `var dsrHistory =` |
| 9,261 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,262 | `savHistory` | `var savHistory =` |
| 9,267 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,277 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,278 | `dsrNow` | `var dsrNow =` |
| 9,279 | `savNow` | `var savNow =` |
| 9,280 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,285 | `householdsWord` | `function householdsWord(` |
| 9,292 | `householdsNow` | `var householdsNow =` |
| 9,299 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,300 | `dsrMeter` | `var dsrMeter =` |
| 9,303 | `savMeter` | `var savMeter =` |
| 9,306 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,323 | `savInfoHtml` | `function savInfoHtml(` |
| 9,341 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,350 | `curveNow` | `var curveNow =` |
| 9,351 | `curveTag` | `var curveTag =` |
| 9,352 | `curveSub` | `var curveSub =` |
| 9,356 | `curvePct` | `function curvePct(` |
| 9,357 | `curveNoteFull` | `var curveNoteFull =` |
| 9,372 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,380 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,421 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,449_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,463 | `marketTops` | `var marketTops =` |
| 9,473 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,478 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,480_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,501 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,502 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,507_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,528 | `slopeOf` | `function slopeOf(` |
| 9,539 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,545 | `readSeason` | `function readSeason(` |
| 9,570 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,572 | `qLabel` | `function qLabel(` |
| 9,596 | `regimeTrack` | `function regimeTrack(` |
| 9,619 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,621_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,628 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,629 | `seasonTitle` | `function seasonTitle(` |
| 9,630 | `monthLabel` | `function monthLabel(` |
| 9,631 | `cycleModel` | `function cycleModel(` |
| 9,683 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,691 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,698 | `nowModel` | `var nowModel =` |
| 9,699 | `readingNow` | `var readingNow =` |
| 9,700 | `cpiNow` | `var cpiNow =` |
| 9,701 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,702 | `currentSeason` | `var currentSeason =` |
| 9,703 | `seasonWhy` | `var seasonWhy =` |
| 9,720 | `seasonGroup` | `function seasonGroup(` |
| 9,734 | `arcGauge` | `function arcGauge(` |
| 9,776 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,789 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,793 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,795 | `spreadLabel` | `function spreadLabel(` |
| 9,802 | `policyFacts` | `function policyFacts(` |
| 9,816 | `policyFactRows` | `function policyFactRows(` |
| 9,822 | `allSources` | `var allSources =` |
| 9,846 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,879_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,882 | `SVG_NS` | `var SVG_NS =` |
| 9,883 | `svgEl` | `function svgEl(` |
| 9,896 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,932_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,933 | `clampPct` | `function clampPct(` |
| 9,940 | `infoIcon` | `function infoIcon(` |
| 9,949 | `detailTexts` | `var detailTexts =` |
| 9,967 | `detailSlots` | `var detailSlots =` |
| 9,968 | `detailSlot` | `function detailSlot(` |
| 9,979 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,983 | `_growthPanel` | `var _growthPanel =` |
| 9,984 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,990 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 10,001 | `facts` | `function facts(` |
| 10,002 | `factsFrom` | `function factsFrom(` |
| 10,006 | `expandBtn` | `function expandBtn(` |
| 10,012 | `sheetRenderers` | `var sheetRenderers =` |
| 10,029 | `pageMode` | `var pageMode =` |
| 10,036 | `pageCycles` | `var pageCycles =` |
| 10,041 | `pageRange` | `var pageRange =` |
| 10,047 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,081_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,092 | `meterHtml` | `function meterHtml(` |
| 10,122 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW (Version 631)

_line 10,123_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,131 | `subjectRow` | `function subjectRow(` |
| 10,143 | `subjectIcon` | `function subjectIcon(` |
| 10,144 | `srcHtml` | `function srcHtml(` |
| 10,153 | `TIMING` | `var TIMING =` |
| 10,159 | `timingMark` | `function timingMark(` |
| 10,173 | `timingPill` | `function timingPill(` |
| 10,194 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,202 | `seatPageFoot` | `function seatPageFoot(` |
| 10,225 | `timingMembers` | `var timingMembers =` |
| 10,226 | `registerTiming` | `function registerTiming(` |
| 10,232 | `headHtml` | `function headHtml(` |
| 10,250 | `heldHighlights` | `var heldHighlights =` |
| 10,251 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time (V639)

_line 10,309_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,314 | `renderPressurePage` | `function renderPressurePage(` |

### V640: Pressure's Insights

_line 10,722_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,731 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,768_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,769 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,991_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,992 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 11,024_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,034 | `drawHznHead` | `function drawHznHead(` |
| 11,049 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,127_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,128 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,146_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,149 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,172_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,184 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,318_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,319 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,443_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,446 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,569_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,581 | `totalRiseIn` | `function totalRiseIn(` |
| 11,591 | `eraInflation` | `function eraInflation(` |
| 11,602 | `eraGrowth` | `function eraGrowth(` |
| 11,622 | `fmtSigned` | `function fmtSigned(` |
| 11,627 | `regimeArrow` | `function regimeArrow(` |
| 11,633 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,634 | `growthShown` | `function growthShown(` |
| 11,635 | `growthShownCap` | `function growthShownCap(` |
| 11,636 | `regimeState` | `function regimeState(` |
| 11,640 | `phaseClass` | `function phaseClass(` |
| 11,642 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,654 | `cycleViewEl` | `var cycleViewEl =` |
| 11,660 | `tempCard` | `var tempCard =` |
| 11,661 | `placeCharts` | `function placeCharts(` |
| 11,666 | `shownEra` | `var shownEra =` |
| 11,667 | `calendarReset` | `var calendarReset =` |
| 11,668 | `metricPageReset` | `var metricPageReset =` |
| 11,669 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,672 | `topbarBack` | `var topbarBack =` |
| 11,673 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,680_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,681 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,842_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,843 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,861_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,864 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,885_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,891 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,894 | `hubSet` | `function hubSet(` |
| 11,907 | `quarterPopup` | `function quarterPopup(` |
| 11,940 | `hubShowDefault` | `function hubShowDefault(` |
| 11,949 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,955 | `hubShowYear` | `function hubShowYear(` |
| 11,970 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,062_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,065 | `tempState` | `var tempState =` |
| 12,068 | `chartLink` | `var chartLink =` |
| 12,088 | `m2Step` | `function m2Step(` |
| 12,091 | `heatStep` | `function heatStep(` |
| 12,095 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,282_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,285 | `drawGrowth` | `function drawGrowth(` |
| 12,424 | `wireResize` | `function wireResize(` |
| 12,430 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,442_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,443 | `renderCycleView` | `function renderCycleView(` |
| 12,504 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,512_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,523 | `peerChosen` | `function peerChosen(` |
| 12,524 | `peerReaches` | `function peerReaches(` |
| 12,554 | `shownEraModel` | `var shownEraModel =` |
| 12,555 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,557_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,559 | `stripGroupName` | `var stripGroupName =` |
| 12,560 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,606 | `marketStripHtml` | `function marketStripHtml(` |
| 12,669 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,670 | `settleStrips` | `function settleStrips(` |
| 12,705 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES (Version 630)

_line 12,984_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,998 | `partsOf` | `function partsOf(` |
| 13,007 | `discOf` | `function discOf(` |
| 13,014 | `authored` | `function authored(` |
| 13,020 | `registerRoster` | `function registerRoster(` |
| 13,062 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER (Version 630)

_line 13,074_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,083 | `NAV` | `var NAV =` |
| 13,084 | `buildNav` | `function buildNav(` |

### ALL INDICATORS (Version 630)

_line 13,198_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,202 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories (Version 630)

_line 13,262_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,265 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES (Version 630)

_line 13,756_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,760 | `renderMetricPages` | `function renderMetricPages(` |

### GDP growth

_line 14,198_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,253 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,285_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,286 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,386_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,398 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,441_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,449 | `__roster` | `var __roster =` |
| 14,450 | `readingRoster` | `function readingRoster(` |
| 14,505 | `readFig` | `function readFig(` |
| 14,513 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612)

_line 14,520_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,548 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,601_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,602 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,662_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,663 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,696_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,697 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,159–4,162 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,733–8,746 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,579–9,592 | `seasonTrackAll` | The season, computed |
| 9,614–9,618 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,985 |
| `desire-range` | 10,627 |
| `fear-range` | 11,408 |
| `hormones-range` | 11,218 |
| `hzn-range` | 11,077 |
| `pressure-range` | 10,702 |
| `pulse-range` | 10,583 |
| `sheet-marker-deficit` | 13,982 |
| `sheet-metric-gdp` | 13,874 |
| `sheet-metric-households` | 14,012 |
| `sheet-metric-power` | 13,946 |
| `sheet-metric-temp` | 13,829 |
| `sheet-metric-valuation` | 14,056 |
| `sheet-sign-activity` | 13,930 |
| `sheet-sign-desire` | 10,628 |
| `sheet-sign-horizon` | 11,078 |
| `sheet-sign-hormones` | 11,221 |
| `sheet-sign-pressure` | 10,703 |
| `sheet-sign-pulse` | 10,582 |
| `sheet-sign-sentiment` | 11,413 |
| `sheet-sign-volume` | 10,603 |
| `volume-range` | 10,604 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,991 |
| `desire-range` | 10,612 |
| `fear-range` | 11,365 |
| `hzn-range` | 11,059 |
| `pressure-range` | 10,660 |
| `pulse-range` | 10,566 |
| `sheet-metric-gdp` | 13,875 |
| `sheet-metric-power` | 13,947 |
| `sheet-metric-temp` | 13,830 |
| `sheet-metric-valuation` | 14,057 |
| `volume-range` | 10,587 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,426 |
| `sheet-metric-gdp` | 6,427 |
| `sheet-sign-activity` | 6,434 |
| `sheet-metric-power` | 6,435 |
| `sheet-metric-valuation` | 6,437 |
| `sheet-metric-households` | 6,438 |
| `deficit-range` | 6,439 |
| `volume-range` | 6,440 |
| `pulse-range` | 6,441 |
| `hzn-range` | 6,446 |
| `desire-range` | 6,447 |
| `fear-range` | 6,448 |
| `hormones-range` | 6,449 |
| `pressure-range` | 6,450 |

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

