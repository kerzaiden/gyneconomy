# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,785 lines**, about 1223 KB, roughly **347 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `ffa2b8f` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,108 | the whole stylesheet, every token and rule |
| **Markup** | 3,109–3,889 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,890–14,732 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,733–14,785 | </body></html> |

Counts: **284** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 3,890_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,905 | `byId` | `function byId(` |
| 3,913 | `byIdMaybe` | `function byIdMaybe(` |
| 3,920 | `put` | `function put(` |
| 3,927 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 3,931_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,935 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,936 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,937 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,955 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,959 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,964_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,974 | `wheelMeta` | `var wheelMeta =` |
| 3,985 | `seasonOverride` | `var seasonOverride =` |
| 3,988 | `cycleNowNote` | `var cycleNowNote =` |
| 3,997 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,083 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,128 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,141_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,160 | `merge` | `function merge(` |
| 4,167 | `LIVE` | `function LIVE(` |
| 4,191 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,194_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,247 | `paintReading` | `function paintReading(` |
| 4,270 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,294 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,304 | `repaintPressureRow` | `function repaintPressureRow(` |
| 4,309 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY (Version 629)

_line 4,314_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,342 | `READINGS` | `var READINGS =` |
| 4,413 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 4,414 | `KINDS` | `var KINDS =` |
| 4,415 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 4,436 | `receive` | `function receive(` |
| 4,460 | `liveAsOf` | `var liveAsOf =` |
| 4,461 | `fmtAsOf` | `function fmtAsOf(` |
| 4,474 | `applyLive` | `function applyLive(` |
| 4,489 | `shapeOk` | `function shapeOk(` |
| 4,499 | `repaintPolicy` | `function repaintPolicy(` |
| 4,551 | `GYN` | `var GYN =` |
| 4,588 | `refreshLiveData` | `function refreshLiveData(` |
| 4,617 | `fetchSiteData` | `function fetchSiteData(` |
| 4,633 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,647_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,648 | `yieldCurve` | `var yieldCurve =` |
| 4,661 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,685 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,697 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,725_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,730 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,754 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,778 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,802 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,829 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,854_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,863 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,873 | `uninvLagToday` | `var uninvLagToday =` |
| 4,885 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,898 | `gdpPeers` | `var gdpPeers =` |
| 4,939 | `gdpSrc` | `var gdpSrc =` |
| 4,940 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,945 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,958 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,996_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,018 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 5,028_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,044 | `stressScoreFor` | `function stressScoreFor(` |
| 5,050 | `stressScore` | `var stressScore =` |
| 5,056 | `powerOf` | `var powerOf =` |
| 5,057 | `powerScore` | `var powerScore =` |
| 5,074 | `stressHistory` | `var stressHistory =` |
| 5,085 | `powerMeter` | `var powerMeter =` |
| 5,087 | `stressNoteFull` | `var stressNoteFull =` |
| 5,119 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,121_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,144 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,145 | `deficitHistory` | `var deficitHistory =` |
| 5,148 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,155 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,157 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,200 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,201 | `fearCurveHistory` | `var fearCurveHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,218_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,231 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,244_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,258 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,261 | `timelineSpan` | `function timelineSpan(` |
| 5,267 | `timelineFor` | `function timelineFor(` |
| 5,280 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,286_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,292 | `windowScale` | `function windowScale(` |
| 5,308 | `windowYears` | `function windowYears(` |
| 5,326 | `refName` | `function refName(` |
| 5,333 | `histReadEnsure` | `function histReadEnsure(` |
| 5,372 | `seatBandReading` | `function seatBandReading(` |
| 5,395 | `histReadFill` | `function histReadFill(` |
| 5,523 | `histAxisEnds` | `function histAxisEnds(` |
| 5,534 | `histLegend` | `function histLegend(` |
| 5,622 | `refitHistory` | `function refitHistory(` |
| 5,634 | `wireHistHover` | `function wireHistHover(` |
| 5,714 | `mWindowFrom` | `function mWindowFrom(` |
| 5,719 | `qWindowFrom` | `function qWindowFrom(` |
| 5,724 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,725 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,727 | `DEF_1983` | `var DEF_1983 =` |
| 5,729 | `defFrom` | `function defFrom(` |
| 5,740 | `deficitChart` | `function deficitChart(` |
| 5,829 | `deficitBlock` | `function deficitBlock(` |
| 5,891 | `buffettHistory` | `var buffettHistory =` |
| 5,921 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,922 | `hyDates` | `var hyDates =` |
| 5,923 | `hyOas` | `var hyOas =` |
| 5,924 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,931 | `hyAt` | `function hyAt(` |
| 5,935 | `hyLabel` | `function hyLabel(` |
| 5,936 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,937 | `hyNum` | `function hyNum(` |
| 5,938 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,948 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,958 | `capeHistory` | `var capeHistory =` |
| 5,960 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,978_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,984 | `sentiment` | `var sentiment =` |
| 6,002 | `valuation` | `var valuation =` |
| 6,039 | `valRow` | `function valRow(` |
| 6,047 | `coincident` | `var coincident =` |
| 6,108 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,126 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,127 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,128 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,130_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,143 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,144 | `m2vHistory` | `var m2vHistory =` |
| 6,164 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,256 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,345 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,346 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,386_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,392 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,393 | `DOTS` | `var DOTS =` |
| 6,400 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,435 | `headPickRow` | `function headPickRow(` |
| 6,441 | `histHead` | `function histHead(` |
| 6,465 | `headNoteIdx` | `var headNoteIdx =` |
| 6,466 | `headMenuHtml` | `function headMenuHtml(` |
| 6,524 | `headMenuFor` | `var headMenuFor =` |
| 6,526 | `headSubFor` | `var headSubFor =` |
| 6,527 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,576 | `nameWithMark` | `function nameWithMark(` |
| 6,582 | `panelRow` | `function panelRow(` |
| 6,615 | `panelFromMeter` | `function panelFromMeter(` |
| 6,629 | `meterFlagged` | `function meterFlagged(` |
| 6,640 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,668 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,682 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,701 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,720 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,734 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,759 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,790 | `desireBlock` | `function desireBlock(` |
| 6,817 | `volumeBlock` | `function volumeBlock(` |
| 6,842 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,865 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,873_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,886 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,887 | `m2Level` | `var m2Level =` |
| 6,909 | `m2Yoy` | `var m2Yoy =` |
| 6,910 | `M2_NORM` | `var M2_NORM =` |
| 6,915 | `volumeVerdict` | `function volumeVerdict(` |
| 6,952 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,953 | `unempHistory` | `var unempHistory =` |
| 6,959 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,974 | `NROU_NOW` | `var NROU_NOW =` |
| 6,975 | `unempState` | `function unempState(` |
| 6,981 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones — the policy rate's history

_line 7,043_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,052 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 7,063 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,130 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,131 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,134 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,142_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,157 | `householdsChart` | `function householdsChart(` |
| 7,224 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,307 | `GDP_NORM` | `var GDP_NORM =` |
| 7,313 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,314 | `gdpNowQ` | `var gdpNowQ =` |
| 7,315 | `gdpMeter` | `var gdpMeter =` |
| 7,318 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,340 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,404 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,467 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,475 | `velocityVerdict` | `function velocityVerdict(` |
| 7,483 | `derivePulseTag` | `function derivePulseTag(` |
| 7,489 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,549_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,558 | `seasonReading` | `var seasonReading =` |
| 7,607 | `frameworkRows` | `var frameworkRows =` |
| 7,617 | `vixRow` | `var vixRow =` |
| 7,625 | `vixWordOf` | `var vixWordOf =` |
| 7,629 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,644_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,648 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,657_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,658 | `calendarTodayY` | `var calendarTodayY =` |
| 7,689 | `vix3mClose` | `var vix3mClose =` |
| 7,690 | `fearCurve` | `function fearCurve(` |
| 7,697 | `curveVerdict` | `function curveVerdict(` |
| 7,704 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,709 | `valuationVerdict` | `function valuationVerdict(` |
| 7,727 | `sparkHtml` | `function sparkHtml(` |
| 7,746 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,752_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,765 | `modeBar` | `function modeBar(` |
| 7,780 | `pickerOpen` | `var pickerOpen =` |
| 7,784 | `cycleByName` | `function cycleByName(` |
| 7,788 | `openCycle` | `function openCycle(` |
| 7,794 | `cycleSlice` | `function cycleSlice(` |
| 7,803 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,811 | `cycleMonths` | `function cycleMonths(` |
| 7,830 | `histControls` | `function histControls(` |
| 7,844 | `cycLabel` | `function cycLabel(` |
| 7,860 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,869 | `cyclePicker` | `function cyclePicker(` |
| 7,888 | `rangeBar` | `function rangeBar(` |
| 7,900 | `trendOf` | `function trendOf(` |
| 7,945 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,955 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,976_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,977 | `yearOf` | `function yearOf(` |
| 7,978 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,979_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,017 | `headSigma` | `function headSigma(` |
| 8,025 | `atQuarter` | `function atQuarter(` |
| 8,026 | `atMonth` | `function atMonth(` |
| 8,027 | `cycleAverages` | `function cycleAverages(` |
| 8,034 | `ordinal` | `function ordinal(` |
| 8,035 | `hiCard` | `function hiCard(` |
| 8,046 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,060_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,067 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,083 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,090 | `moreRow` | `function moreRow(` |
| 8,096 | `powerPageNote` | `var powerPageNote =` |
| 8,097 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,109_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,112 | `xLabelOf` | `function xLabelOf(` |
| 8,132 | `fitGroup` | `function fitGroup(` |
| 8,154 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,213_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,237 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,247 | `vGrid` | `function vGrid(` |
| 8,272 | `COL_FILL` | `var COL_FILL =` |
| 8,305 | `colPath` | `function colPath(` |
| 8,310 | `colWidth` | `function colWidth(` |
| 8,357 | `AXIS` | `var AXIS =` |
| 8,373 | `histFrame` | `function histFrame(` |
| 8,385 | `xLabel` | `function xLabel(` |
| 8,389 | `crossLine` | `function crossLine(` |
| 8,394 | `zeroRule` | `function zeroRule(` |
| 8,397 | `meanRule` | `function meanRule(` |
| 8,409 | `pendingGeom` | `var pendingGeom =` |
| 8,410 | `publishGeom` | `function publishGeom(` |
| 8,411 | `attachHistory` | `function attachHistory(` |
| 8,426 | `histBar` | `function histBar(` |
| 8,429 | `histTip` | `function histTip(` |
| 8,432 | `avgRule` | `function avgRule(` |
| 8,435 | `vhOpen` | `function vhOpen(` |
| 8,436 | `chartAxes` | `function chartAxes(` |
| 8,496 | `divergeChart` | `function divergeChart(` |
| 8,564 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,593_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,601 | `maxIn` | `function maxIn(` |
| 8,619 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,633 | `PEEK_W` | `var PEEK_W =` |
| 8,636 | `PEEK_H` | `var PEEK_H =` |
| 8,641 | `colPeek` | `function colPeek(` |
| 8,668 | `meterPeek` | `function meterPeek(` |
| 8,685 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,690 | `pressureZone` | `function pressureZone(` |
| 8,705 | `HZN_BACK` | `var HZN_BACK =` |
| 8,706 | `hznLast` | `function hznLast(` |
| 8,707 | `hznBack` | `function hznBack(` |
| 8,708 | `horizonWord` | `function horizonWord(` |
| 8,733 | `HZN_METERS` | `var HZN_METERS =` |
| 8,741 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,782 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,787 | `RISK_RISK` | `var RISK_RISK =` |
| 8,792 | `riskCell` | `function riskCell(` |
| 8,793 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,824 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,849_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,870 | `pulseClipN` | `var pulseClipN =` |
| 8,871 | `beatPath` | `function beatPath(` |
| 8,896 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,910 | `pulsePeek` | `function pulsePeek(` |
| 8,918 | `pulseBlock` | `function pulseBlock(` |
| 8,938 | `CHEV` | `var CHEV =` |
| 8,940 | `peekCard` | `function peekCard(` |
| 8,994 | `dropSvg` | `function dropSvg(` |
| 9,006 | `volumeSvg` | `function volumeSvg(` |
| 9,013 | `gaugeSvg` | `function gaugeSvg(` |
| 9,017 | `diamondSvg` | `function diamondSvg(` |
| 9,031 | `energyFromReserve` | `function energyFromReserve(` |
| 9,043 | `sproutSvg` | `function sproutSvg(` |
| 9,054 | `markSvg` | `function markSvg(` |
| 9,062 | `hormoneSvg` | `function hormoneSvg(` |
| 9,068 | `flameSvg` | `function flameSvg(` |
| 9,072 | `gearSvg` | `function gearSvg(` |
| 9,084 | `thermoSvg` | `function thermoSvg(` |
| 9,103 | `trendUpSvg` | `function trendUpSvg(` |
| 9,105 | `ecgSvg` | `function ecgSvg(` |
| 9,119 | `circulationSvg` | `function circulationSvg(` |
| 9,120 | `weatherSvg` | `function weatherSvg(` |
| 9,141 | `moodSvg` | `function moodSvg(` |
| 9,165 | `boltSvg` | `function boltSvg(` |
| 9,168 | `houseSvg` | `function houseSvg(` |
| 9,176 | `sunriseSvg` | `function sunriseSvg(` |
| 9,191 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,202 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,219_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,240 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,241 | `dsrHistory` | `var dsrHistory =` |
| 9,242 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,243 | `savHistory` | `var savHistory =` |
| 9,248 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,258 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,259 | `dsrNow` | `var dsrNow =` |
| 9,260 | `savNow` | `var savNow =` |
| 9,261 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,266 | `householdsWord` | `function householdsWord(` |
| 9,273 | `householdsNow` | `var householdsNow =` |
| 9,280 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,281 | `dsrMeter` | `var dsrMeter =` |
| 9,284 | `savMeter` | `var savMeter =` |
| 9,287 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,304 | `savInfoHtml` | `function savInfoHtml(` |
| 9,322 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,331 | `curveNow` | `var curveNow =` |
| 9,332 | `curveTag` | `var curveTag =` |
| 9,333 | `curveSub` | `var curveSub =` |
| 9,337 | `curvePct` | `function curvePct(` |
| 9,338 | `curveNoteFull` | `var curveNoteFull =` |
| 9,353 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,361 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,402 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,430_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,444 | `marketTops` | `var marketTops =` |
| 9,454 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,459 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,461_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,482 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,483 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,488_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,509 | `slopeOf` | `function slopeOf(` |
| 9,520 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,526 | `readSeason` | `function readSeason(` |
| 9,551 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,553 | `qLabel` | `function qLabel(` |
| 9,577 | `regimeTrack` | `function regimeTrack(` |
| 9,600 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,602_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,609 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,610 | `seasonTitle` | `function seasonTitle(` |
| 9,611 | `monthLabel` | `function monthLabel(` |
| 9,612 | `cycleModel` | `function cycleModel(` |
| 9,664 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,672 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,679 | `nowModel` | `var nowModel =` |
| 9,680 | `readingNow` | `var readingNow =` |
| 9,681 | `cpiNow` | `var cpiNow =` |
| 9,682 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,683 | `currentSeason` | `var currentSeason =` |
| 9,684 | `seasonWhy` | `var seasonWhy =` |
| 9,701 | `seasonGroup` | `function seasonGroup(` |
| 9,715 | `arcGauge` | `function arcGauge(` |
| 9,757 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,770 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,774 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,776 | `spreadLabel` | `function spreadLabel(` |
| 9,783 | `policyFacts` | `function policyFacts(` |
| 9,797 | `policyFactRows` | `function policyFactRows(` |
| 9,803 | `allSources` | `var allSources =` |
| 9,827 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,860_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,863 | `SVG_NS` | `var SVG_NS =` |
| 9,864 | `svgEl` | `function svgEl(` |
| 9,877 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,913_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,914 | `clampPct` | `function clampPct(` |
| 9,921 | `infoIcon` | `function infoIcon(` |
| 9,930 | `detailTexts` | `var detailTexts =` |
| 9,948 | `detailSlots` | `var detailSlots =` |
| 9,949 | `detailSlot` | `function detailSlot(` |
| 9,960 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,964 | `_growthPanel` | `var _growthPanel =` |
| 9,965 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,971 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,982 | `facts` | `function facts(` |
| 9,983 | `factsFrom` | `function factsFrom(` |
| 9,987 | `expandBtn` | `function expandBtn(` |
| 9,993 | `sheetRenderers` | `var sheetRenderers =` |
| 10,010 | `pageMode` | `var pageMode =` |
| 10,017 | `pageCycles` | `var pageCycles =` |
| 10,022 | `pageRange` | `var pageRange =` |
| 10,028 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,062_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,073 | `meterHtml` | `function meterHtml(` |
| 10,103 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW (Version 631)

_line 10,104_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,112 | `subjectRow` | `function subjectRow(` |
| 10,124 | `subjectIcon` | `function subjectIcon(` |
| 10,125 | `srcHtml` | `function srcHtml(` |
| 10,134 | `TIMING` | `var TIMING =` |
| 10,140 | `timingMark` | `function timingMark(` |
| 10,154 | `timingPill` | `function timingPill(` |
| 10,175 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,183 | `seatPageFoot` | `function seatPageFoot(` |
| 10,206 | `timingMembers` | `var timingMembers =` |
| 10,207 | `registerTiming` | `function registerTiming(` |
| 10,213 | `headHtml` | `function headHtml(` |
| 10,231 | `heldHighlights` | `var heldHighlights =` |
| 10,232 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time (V639)

_line 10,290_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,295 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,700_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,701 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,923_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,924 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,956_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,966 | `drawHznHead` | `function drawHznHead(` |
| 10,981 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,059_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,060 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,078_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,081 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,104_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,116 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,250_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,251 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,375_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,378 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,501_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,513 | `totalRiseIn` | `function totalRiseIn(` |
| 11,523 | `eraInflation` | `function eraInflation(` |
| 11,534 | `eraGrowth` | `function eraGrowth(` |
| 11,554 | `fmtSigned` | `function fmtSigned(` |
| 11,559 | `regimeArrow` | `function regimeArrow(` |
| 11,565 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,566 | `growthShown` | `function growthShown(` |
| 11,567 | `growthShownCap` | `function growthShownCap(` |
| 11,568 | `regimeState` | `function regimeState(` |
| 11,572 | `phaseClass` | `function phaseClass(` |
| 11,574 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,586 | `cycleViewEl` | `var cycleViewEl =` |
| 11,592 | `tempCard` | `var tempCard =` |
| 11,593 | `placeCharts` | `function placeCharts(` |
| 11,598 | `shownEra` | `var shownEra =` |
| 11,599 | `calendarReset` | `var calendarReset =` |
| 11,600 | `metricPageReset` | `var metricPageReset =` |
| 11,601 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,604 | `topbarBack` | `var topbarBack =` |
| 11,605 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,612_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,613 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,774_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,775 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,793_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,796 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,817_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,823 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,826 | `hubSet` | `function hubSet(` |
| 11,839 | `quarterPopup` | `function quarterPopup(` |
| 11,872 | `hubShowDefault` | `function hubShowDefault(` |
| 11,881 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,887 | `hubShowYear` | `function hubShowYear(` |
| 11,902 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,994_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,997 | `tempState` | `var tempState =` |
| 12,000 | `chartLink` | `var chartLink =` |
| 12,020 | `m2Step` | `function m2Step(` |
| 12,023 | `heatStep` | `function heatStep(` |
| 12,027 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,214_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,217 | `drawGrowth` | `function drawGrowth(` |
| 12,356 | `wireResize` | `function wireResize(` |
| 12,362 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,374_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,375 | `renderCycleView` | `function renderCycleView(` |
| 12,436 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,444_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,455 | `peerChosen` | `function peerChosen(` |
| 12,456 | `peerReaches` | `function peerReaches(` |
| 12,486 | `shownEraModel` | `var shownEraModel =` |
| 12,487 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,489_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,491 | `stripGroupName` | `var stripGroupName =` |
| 12,492 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,538 | `marketStripHtml` | `function marketStripHtml(` |
| 12,601 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,602 | `settleStrips` | `function settleStrips(` |
| 12,637 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES (Version 630)

_line 12,916_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,930 | `partsOf` | `function partsOf(` |
| 12,939 | `discOf` | `function discOf(` |
| 12,946 | `authored` | `function authored(` |
| 12,952 | `registerRoster` | `function registerRoster(` |
| 12,994 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER (Version 630)

_line 13,006_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,015 | `NAV` | `var NAV =` |
| 13,016 | `buildNav` | `function buildNav(` |

### ALL INDICATORS (Version 630)

_line 13,130_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,134 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories (Version 630)

_line 13,194_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,197 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES (Version 630)

_line 13,688_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,692 | `renderMetricPages` | `function renderMetricPages(` |

### GDP growth

_line 14,130_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,185 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,217_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,218 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,318_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,330 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,373_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,381 | `__roster` | `var __roster =` |
| 14,382 | `readingRoster` | `function readingRoster(` |
| 14,437 | `readFig` | `function readFig(` |
| 14,445 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612)

_line 14,452_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,480 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,533_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,534 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,594_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,595 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,628_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,629 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,154–4,157 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,714–8,727 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,560–9,573 | `seasonTrackAll` | The season, computed |
| 9,595–9,599 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,917 |
| `desire-range` | 10,605 |
| `fear-range` | 11,340 |
| `hormones-range` | 11,150 |
| `hzn-range` | 11,009 |
| `pressure-range` | 10,680 |
| `pulse-range` | 10,561 |
| `sheet-marker-deficit` | 13,914 |
| `sheet-metric-gdp` | 13,806 |
| `sheet-metric-households` | 13,944 |
| `sheet-metric-power` | 13,878 |
| `sheet-metric-temp` | 13,761 |
| `sheet-metric-valuation` | 13,988 |
| `sheet-sign-activity` | 13,862 |
| `sheet-sign-desire` | 10,606 |
| `sheet-sign-horizon` | 11,010 |
| `sheet-sign-hormones` | 11,153 |
| `sheet-sign-pressure` | 10,681 |
| `sheet-sign-pulse` | 10,560 |
| `sheet-sign-sentiment` | 11,345 |
| `sheet-sign-volume` | 10,581 |
| `volume-range` | 10,582 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,923 |
| `desire-range` | 10,590 |
| `fear-range` | 11,297 |
| `hzn-range` | 10,991 |
| `pressure-range` | 10,638 |
| `pulse-range` | 10,544 |
| `sheet-metric-gdp` | 13,807 |
| `sheet-metric-power` | 13,879 |
| `sheet-metric-temp` | 13,762 |
| `sheet-metric-valuation` | 13,989 |
| `volume-range` | 10,565 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,407 |
| `sheet-metric-gdp` | 6,408 |
| `sheet-sign-activity` | 6,415 |
| `sheet-metric-power` | 6,416 |
| `sheet-metric-valuation` | 6,418 |
| `sheet-metric-households` | 6,419 |
| `deficit-range` | 6,420 |
| `volume-range` | 6,421 |
| `pulse-range` | 6,422 |
| `hzn-range` | 6,427 |
| `desire-range` | 6,428 |
| `fear-range` | 6,429 |
| `hormones-range` | 6,430 |
| `pressure-range` | 6,431 |

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

Every `id` in the static DOM (144), which is what the renderers fill:

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
| 3,510 | `subj-ring-sentiment` |
| 3,513 | `subj-value-sentiment` |
| 3,514 | `subj-say-sentiment` |
| 3,515 | `subj-spark-sentiment` |
| 3,529 | `fear-history` |
| 3,530 | `curve-highlights` |
| 3,544 | `signs-list` |
| 3,555 | `calendar-list` |
| 3,568 | `rhymes-card` |
| 3,579 | `rhy-pick` |
| 3,580 | `rhy-body` |
| 3,627 | `cycle-list` |
| 3,633 | `cycle-more` |
| 3,634 | `cycle-more-label` |
| 3,643 | `calendar-cycle` |
| 3,644 | `calendar-cycle-slot` |
| 3,651 | `cycle-cats` |
| 3,702 | `seasons-kicker` |
| 3,703 | `seasons-rows` |
| 3,707 | `framework-kicker` |
| 3,709 | `framework-rows` |
| 3,716 | `more-menu` |
| 3,719 | `menu-back` |
| 3,733 | `sources-open` |
| 3,741 | `appearance-current` |
| 3,749 | `sheet-howto` |
| 3,793 | `sheet-book` |
| 3,825 | `sheet-appearance` |
| 3,833 | `theme-toggle` |
| 3,840 | `sheet-contact` |
| 3,849 | `contact-form` |
| 3,850 | `contact-title` |
| 3,851 | `contact-message` |
| 3,853 | `contact-hint` |
| 3,854 | `contact-send` |
| 3,863 | `sheet-sources` |
| 3,866 | `sources-back` |
| 3,873 | `asof-text` |
| 3,874 | `sources-groups` |
| 3,881 | `detail-backdrop` |
| 3,883 | `detail-modal-close` |
| 3,884 | `detail-modal-body` |

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

