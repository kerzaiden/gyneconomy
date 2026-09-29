# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,840 lines**, about 1228 KB, roughly **349 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `74efbb1` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,108 | the whole stylesheet, every token and rule |
| **Markup** | 3,109–3,894 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,895–14,787 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,788–14,840 | </body></html> |

Counts: **285** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

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

_line 5,126_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,149 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,150 | `deficitHistory` | `var deficitHistory =` |
| 5,153 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,160 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,162 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,205 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,206 | `fearCurveHistory` | `var fearCurveHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,223_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,236 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,249_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,263 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,266 | `timelineSpan` | `function timelineSpan(` |
| 5,272 | `timelineFor` | `function timelineFor(` |
| 5,285 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,291_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,297 | `windowScale` | `function windowScale(` |
| 5,313 | `windowYears` | `function windowYears(` |
| 5,331 | `refName` | `function refName(` |
| 5,338 | `histReadEnsure` | `function histReadEnsure(` |
| 5,377 | `seatBandReading` | `function seatBandReading(` |
| 5,400 | `histReadFill` | `function histReadFill(` |
| 5,528 | `histAxisEnds` | `function histAxisEnds(` |
| 5,539 | `histLegend` | `function histLegend(` |
| 5,627 | `refitHistory` | `function refitHistory(` |
| 5,639 | `wireHistHover` | `function wireHistHover(` |
| 5,719 | `mWindowFrom` | `function mWindowFrom(` |
| 5,724 | `qWindowFrom` | `function qWindowFrom(` |
| 5,729 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,730 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,732 | `DEF_1983` | `var DEF_1983 =` |
| 5,734 | `defFrom` | `function defFrom(` |
| 5,745 | `deficitChart` | `function deficitChart(` |
| 5,834 | `deficitBlock` | `function deficitBlock(` |
| 5,896 | `buffettHistory` | `var buffettHistory =` |
| 5,926 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,927 | `hyDates` | `var hyDates =` |
| 5,928 | `hyOas` | `var hyOas =` |
| 5,929 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,936 | `hyAt` | `function hyAt(` |
| 5,940 | `hyLabel` | `function hyLabel(` |
| 5,941 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,942 | `hyNum` | `function hyNum(` |
| 5,943 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,953 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,963 | `capeHistory` | `var capeHistory =` |
| 5,965 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,983_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,989 | `sentiment` | `var sentiment =` |
| 6,007 | `valuation` | `var valuation =` |
| 6,044 | `valRow` | `function valRow(` |
| 6,052 | `coincident` | `var coincident =` |
| 6,113 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,131 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,132 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,133 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,135_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,148 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,149 | `m2vHistory` | `var m2vHistory =` |
| 6,169 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,261 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,350 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,351 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,391_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,397 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,398 | `DOTS` | `var DOTS =` |
| 6,405 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,440 | `headPickRow` | `function headPickRow(` |
| 6,446 | `histHead` | `function histHead(` |
| 6,470 | `headNoteIdx` | `var headNoteIdx =` |
| 6,471 | `headMenuHtml` | `function headMenuHtml(` |
| 6,529 | `headMenuFor` | `var headMenuFor =` |
| 6,531 | `headSubFor` | `var headSubFor =` |
| 6,532 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,581 | `nameWithMark` | `function nameWithMark(` |
| 6,587 | `panelRow` | `function panelRow(` |
| 6,620 | `panelFromMeter` | `function panelFromMeter(` |
| 6,634 | `meterFlagged` | `function meterFlagged(` |
| 6,645 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,673 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,687 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,706 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,725 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,739 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,764 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,795 | `desireBlock` | `function desireBlock(` |
| 6,822 | `volumeBlock` | `function volumeBlock(` |
| 6,847 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,870 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,878_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,891 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,892 | `m2Level` | `var m2Level =` |
| 6,914 | `m2Yoy` | `var m2Yoy =` |
| 6,915 | `M2_NORM` | `var M2_NORM =` |
| 6,920 | `volumeVerdict` | `function volumeVerdict(` |
| 6,957 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,958 | `unempHistory` | `var unempHistory =` |
| 6,964 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,979 | `NROU_NOW` | `var NROU_NOW =` |
| 6,980 | `unempState` | `function unempState(` |
| 6,986 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones — the policy rate's history

_line 7,048_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,057 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 7,068 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,135 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,136 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,139 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,147_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,162 | `householdsChart` | `function householdsChart(` |
| 7,229 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,312 | `GDP_NORM` | `var GDP_NORM =` |
| 7,318 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,319 | `gdpNowQ` | `var gdpNowQ =` |
| 7,320 | `gdpMeter` | `var gdpMeter =` |
| 7,323 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,345 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,409 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,472 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,480 | `velocityVerdict` | `function velocityVerdict(` |
| 7,488 | `derivePulseTag` | `function derivePulseTag(` |
| 7,494 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,554_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,563 | `seasonReading` | `var seasonReading =` |
| 7,612 | `frameworkRows` | `var frameworkRows =` |
| 7,622 | `vixRow` | `var vixRow =` |
| 7,630 | `vixWordOf` | `var vixWordOf =` |
| 7,634 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,649_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,653 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,662_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,663 | `calendarTodayY` | `var calendarTodayY =` |
| 7,694 | `vix3mClose` | `var vix3mClose =` |
| 7,695 | `fearCurve` | `function fearCurve(` |
| 7,702 | `curveVerdict` | `function curveVerdict(` |
| 7,709 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,714 | `valuationVerdict` | `function valuationVerdict(` |
| 7,732 | `sparkHtml` | `function sparkHtml(` |
| 7,751 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,757_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,770 | `modeBar` | `function modeBar(` |
| 7,785 | `pickerOpen` | `var pickerOpen =` |
| 7,789 | `cycleByName` | `function cycleByName(` |
| 7,793 | `openCycle` | `function openCycle(` |
| 7,799 | `cycleSlice` | `function cycleSlice(` |
| 7,808 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,816 | `cycleMonths` | `function cycleMonths(` |
| 7,835 | `histControls` | `function histControls(` |
| 7,849 | `cycLabel` | `function cycLabel(` |
| 7,865 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,874 | `cyclePicker` | `function cyclePicker(` |
| 7,893 | `rangeBar` | `function rangeBar(` |
| 7,905 | `trendOf` | `function trendOf(` |
| 7,950 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,960 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,981_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,982 | `yearOf` | `function yearOf(` |
| 7,983 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,984_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,022 | `headSigma` | `function headSigma(` |
| 8,030 | `atQuarter` | `function atQuarter(` |
| 8,031 | `atMonth` | `function atMonth(` |
| 8,032 | `cycleAverages` | `function cycleAverages(` |
| 8,039 | `ordinal` | `function ordinal(` |
| 8,040 | `hiCard` | `function hiCard(` |
| 8,051 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,065_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,072 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,088 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,095 | `moreRow` | `function moreRow(` |
| 8,101 | `powerPageNote` | `var powerPageNote =` |
| 8,102 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,114_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,117 | `xLabelOf` | `function xLabelOf(` |
| 8,137 | `fitGroup` | `function fitGroup(` |
| 8,159 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,218_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,242 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,252 | `vGrid` | `function vGrid(` |
| 8,277 | `COL_FILL` | `var COL_FILL =` |
| 8,310 | `colPath` | `function colPath(` |
| 8,315 | `colWidth` | `function colWidth(` |
| 8,362 | `AXIS` | `var AXIS =` |
| 8,378 | `histFrame` | `function histFrame(` |
| 8,390 | `xLabel` | `function xLabel(` |
| 8,394 | `crossLine` | `function crossLine(` |
| 8,399 | `zeroRule` | `function zeroRule(` |
| 8,402 | `meanRule` | `function meanRule(` |
| 8,414 | `pendingGeom` | `var pendingGeom =` |
| 8,415 | `publishGeom` | `function publishGeom(` |
| 8,416 | `attachHistory` | `function attachHistory(` |
| 8,431 | `histBar` | `function histBar(` |
| 8,434 | `histTip` | `function histTip(` |
| 8,437 | `avgRule` | `function avgRule(` |
| 8,440 | `vhOpen` | `function vhOpen(` |
| 8,441 | `chartAxes` | `function chartAxes(` |
| 8,501 | `divergeChart` | `function divergeChart(` |
| 8,569 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,598_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,606 | `maxIn` | `function maxIn(` |
| 8,624 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,638 | `PEEK_W` | `var PEEK_W =` |
| 8,641 | `PEEK_H` | `var PEEK_H =` |
| 8,646 | `colPeek` | `function colPeek(` |
| 8,673 | `meterPeek` | `function meterPeek(` |
| 8,690 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,695 | `pressureZone` | `function pressureZone(` |
| 8,710 | `HZN_BACK` | `var HZN_BACK =` |
| 8,711 | `hznLast` | `function hznLast(` |
| 8,712 | `hznBack` | `function hznBack(` |
| 8,713 | `horizonWord` | `function horizonWord(` |
| 8,738 | `HZN_METERS` | `var HZN_METERS =` |
| 8,746 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,787 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,792 | `RISK_RISK` | `var RISK_RISK =` |
| 8,797 | `riskCell` | `function riskCell(` |
| 8,798 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,829 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,854_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,875 | `pulseClipN` | `var pulseClipN =` |
| 8,876 | `beatPath` | `function beatPath(` |
| 8,901 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,915 | `pulsePeek` | `function pulsePeek(` |
| 8,923 | `pulseBlock` | `function pulseBlock(` |
| 8,943 | `CHEV` | `var CHEV =` |
| 8,945 | `peekCard` | `function peekCard(` |
| 8,999 | `dropSvg` | `function dropSvg(` |
| 9,011 | `volumeSvg` | `function volumeSvg(` |
| 9,018 | `gaugeSvg` | `function gaugeSvg(` |
| 9,022 | `diamondSvg` | `function diamondSvg(` |
| 9,036 | `energyFromReserve` | `function energyFromReserve(` |
| 9,048 | `sproutSvg` | `function sproutSvg(` |
| 9,059 | `markSvg` | `function markSvg(` |
| 9,067 | `hormoneSvg` | `function hormoneSvg(` |
| 9,073 | `flameSvg` | `function flameSvg(` |
| 9,077 | `gearSvg` | `function gearSvg(` |
| 9,089 | `thermoSvg` | `function thermoSvg(` |
| 9,108 | `trendUpSvg` | `function trendUpSvg(` |
| 9,110 | `ecgSvg` | `function ecgSvg(` |
| 9,124 | `circulationSvg` | `function circulationSvg(` |
| 9,125 | `weatherSvg` | `function weatherSvg(` |
| 9,146 | `moodSvg` | `function moodSvg(` |
| 9,170 | `boltSvg` | `function boltSvg(` |
| 9,173 | `houseSvg` | `function houseSvg(` |
| 9,181 | `sunriseSvg` | `function sunriseSvg(` |
| 9,196 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,207 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,224_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,245 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,246 | `dsrHistory` | `var dsrHistory =` |
| 9,247 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,248 | `savHistory` | `var savHistory =` |
| 9,253 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,263 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,264 | `dsrNow` | `var dsrNow =` |
| 9,265 | `savNow` | `var savNow =` |
| 9,266 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,271 | `householdsWord` | `function householdsWord(` |
| 9,278 | `householdsNow` | `var householdsNow =` |
| 9,285 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,286 | `dsrMeter` | `var dsrMeter =` |
| 9,289 | `savMeter` | `var savMeter =` |
| 9,292 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,309 | `savInfoHtml` | `function savInfoHtml(` |
| 9,327 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,336 | `curveNow` | `var curveNow =` |
| 9,337 | `curveTag` | `var curveTag =` |
| 9,338 | `curveSub` | `var curveSub =` |
| 9,342 | `curvePct` | `function curvePct(` |
| 9,343 | `curveNoteFull` | `var curveNoteFull =` |
| 9,358 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,366 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,407 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,435_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,449 | `marketTops` | `var marketTops =` |
| 9,459 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,464 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,466_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,487 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,488 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,493_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,514 | `slopeOf` | `function slopeOf(` |
| 9,525 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,531 | `readSeason` | `function readSeason(` |
| 9,556 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,558 | `qLabel` | `function qLabel(` |
| 9,582 | `regimeTrack` | `function regimeTrack(` |
| 9,605 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,607_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,614 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,615 | `seasonTitle` | `function seasonTitle(` |
| 9,616 | `monthLabel` | `function monthLabel(` |
| 9,617 | `cycleModel` | `function cycleModel(` |
| 9,669 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,677 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,684 | `nowModel` | `var nowModel =` |
| 9,685 | `readingNow` | `var readingNow =` |
| 9,686 | `cpiNow` | `var cpiNow =` |
| 9,687 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,688 | `currentSeason` | `var currentSeason =` |
| 9,689 | `seasonWhy` | `var seasonWhy =` |
| 9,706 | `seasonGroup` | `function seasonGroup(` |
| 9,720 | `arcGauge` | `function arcGauge(` |
| 9,762 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,775 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,779 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,781 | `spreadLabel` | `function spreadLabel(` |
| 9,788 | `policyFacts` | `function policyFacts(` |
| 9,802 | `policyFactRows` | `function policyFactRows(` |
| 9,808 | `allSources` | `var allSources =` |
| 9,832 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,865_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,868 | `SVG_NS` | `var SVG_NS =` |
| 9,869 | `svgEl` | `function svgEl(` |
| 9,882 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,918_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,919 | `clampPct` | `function clampPct(` |
| 9,926 | `infoIcon` | `function infoIcon(` |
| 9,935 | `detailTexts` | `var detailTexts =` |
| 9,953 | `detailSlots` | `var detailSlots =` |
| 9,954 | `detailSlot` | `function detailSlot(` |
| 9,965 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,969 | `_growthPanel` | `var _growthPanel =` |
| 9,970 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,976 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,987 | `facts` | `function facts(` |
| 9,988 | `factsFrom` | `function factsFrom(` |
| 9,992 | `expandBtn` | `function expandBtn(` |
| 9,998 | `sheetRenderers` | `var sheetRenderers =` |
| 10,015 | `pageMode` | `var pageMode =` |
| 10,022 | `pageCycles` | `var pageCycles =` |
| 10,027 | `pageRange` | `var pageRange =` |
| 10,033 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,067_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,078 | `meterHtml` | `function meterHtml(` |
| 10,108 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW (Version 631)

_line 10,109_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,117 | `subjectRow` | `function subjectRow(` |
| 10,129 | `subjectIcon` | `function subjectIcon(` |
| 10,130 | `srcHtml` | `function srcHtml(` |
| 10,139 | `TIMING` | `var TIMING =` |
| 10,145 | `timingMark` | `function timingMark(` |
| 10,159 | `timingPill` | `function timingPill(` |
| 10,180 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,188 | `seatPageFoot` | `function seatPageFoot(` |
| 10,211 | `timingMembers` | `var timingMembers =` |
| 10,212 | `registerTiming` | `function registerTiming(` |
| 10,218 | `headHtml` | `function headHtml(` |
| 10,236 | `heldHighlights` | `var heldHighlights =` |
| 10,237 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time (V639)

_line 10,295_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,300 | `renderPressurePage` | `function renderPressurePage(` |

### V640: Pressure's Insights

_line 10,708_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,717 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,754_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,755 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,977_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,978 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 11,010_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,020 | `drawHznHead` | `function drawHznHead(` |
| 11,035 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,113_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,114 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,132_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,135 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,158_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,170 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,304_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,305 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,429_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,432 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,555_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,567 | `totalRiseIn` | `function totalRiseIn(` |
| 11,577 | `eraInflation` | `function eraInflation(` |
| 11,588 | `eraGrowth` | `function eraGrowth(` |
| 11,608 | `fmtSigned` | `function fmtSigned(` |
| 11,613 | `regimeArrow` | `function regimeArrow(` |
| 11,619 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,620 | `growthShown` | `function growthShown(` |
| 11,621 | `growthShownCap` | `function growthShownCap(` |
| 11,622 | `regimeState` | `function regimeState(` |
| 11,626 | `phaseClass` | `function phaseClass(` |
| 11,628 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,640 | `cycleViewEl` | `var cycleViewEl =` |
| 11,646 | `tempCard` | `var tempCard =` |
| 11,647 | `placeCharts` | `function placeCharts(` |
| 11,652 | `shownEra` | `var shownEra =` |
| 11,653 | `calendarReset` | `var calendarReset =` |
| 11,654 | `metricPageReset` | `var metricPageReset =` |
| 11,655 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,658 | `topbarBack` | `var topbarBack =` |
| 11,659 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,666_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,667 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,828_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,829 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,847_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,850 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,871_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,877 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,880 | `hubSet` | `function hubSet(` |
| 11,893 | `quarterPopup` | `function quarterPopup(` |
| 11,926 | `hubShowDefault` | `function hubShowDefault(` |
| 11,935 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,941 | `hubShowYear` | `function hubShowYear(` |
| 11,956 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,048_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,051 | `tempState` | `var tempState =` |
| 12,054 | `chartLink` | `var chartLink =` |
| 12,074 | `m2Step` | `function m2Step(` |
| 12,077 | `heatStep` | `function heatStep(` |
| 12,081 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,268_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,271 | `drawGrowth` | `function drawGrowth(` |
| 12,410 | `wireResize` | `function wireResize(` |
| 12,416 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,428_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,429 | `renderCycleView` | `function renderCycleView(` |
| 12,490 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,498_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,509 | `peerChosen` | `function peerChosen(` |
| 12,510 | `peerReaches` | `function peerReaches(` |
| 12,540 | `shownEraModel` | `var shownEraModel =` |
| 12,541 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,543_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,545 | `stripGroupName` | `var stripGroupName =` |
| 12,546 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,592 | `marketStripHtml` | `function marketStripHtml(` |
| 12,655 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,656 | `settleStrips` | `function settleStrips(` |
| 12,691 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES (Version 630)

_line 12,970_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,984 | `partsOf` | `function partsOf(` |
| 12,993 | `discOf` | `function discOf(` |
| 13,000 | `authored` | `function authored(` |
| 13,006 | `registerRoster` | `function registerRoster(` |
| 13,048 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER (Version 630)

_line 13,060_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,069 | `NAV` | `var NAV =` |
| 13,070 | `buildNav` | `function buildNav(` |

### ALL INDICATORS (Version 630)

_line 13,184_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,188 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories (Version 630)

_line 13,248_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,251 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES (Version 630)

_line 13,742_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,746 | `renderMetricPages` | `function renderMetricPages(` |

### GDP growth

_line 14,184_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,239 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,271_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,272 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,372_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,384 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,427_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,435 | `__roster` | `var __roster =` |
| 14,436 | `readingRoster` | `function readingRoster(` |
| 14,491 | `readFig` | `function readFig(` |
| 14,499 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612)

_line 14,506_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,534 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,587_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,588 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,648_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,649 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,682_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,683 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,159–4,162 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,719–8,732 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,565–9,578 | `seasonTrackAll` | The season, computed |
| 9,600–9,604 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,971 |
| `desire-range` | 10,613 |
| `fear-range` | 11,394 |
| `hormones-range` | 11,204 |
| `hzn-range` | 11,063 |
| `pressure-range` | 10,688 |
| `pulse-range` | 10,569 |
| `sheet-marker-deficit` | 13,968 |
| `sheet-metric-gdp` | 13,860 |
| `sheet-metric-households` | 13,998 |
| `sheet-metric-power` | 13,932 |
| `sheet-metric-temp` | 13,815 |
| `sheet-metric-valuation` | 14,042 |
| `sheet-sign-activity` | 13,916 |
| `sheet-sign-desire` | 10,614 |
| `sheet-sign-horizon` | 11,064 |
| `sheet-sign-hormones` | 11,207 |
| `sheet-sign-pressure` | 10,689 |
| `sheet-sign-pulse` | 10,568 |
| `sheet-sign-sentiment` | 11,399 |
| `sheet-sign-volume` | 10,589 |
| `volume-range` | 10,590 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,977 |
| `desire-range` | 10,598 |
| `fear-range` | 11,351 |
| `hzn-range` | 11,045 |
| `pressure-range` | 10,646 |
| `pulse-range` | 10,552 |
| `sheet-metric-gdp` | 13,861 |
| `sheet-metric-power` | 13,933 |
| `sheet-metric-temp` | 13,816 |
| `sheet-metric-valuation` | 14,043 |
| `volume-range` | 10,573 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,412 |
| `sheet-metric-gdp` | 6,413 |
| `sheet-sign-activity` | 6,420 |
| `sheet-metric-power` | 6,421 |
| `sheet-metric-valuation` | 6,423 |
| `sheet-metric-households` | 6,424 |
| `deficit-range` | 6,425 |
| `volume-range` | 6,426 |
| `pulse-range` | 6,427 |
| `hzn-range` | 6,432 |
| `desire-range` | 6,433 |
| `fear-range` | 6,434 |
| `hormones-range` | 6,435 |
| `pressure-range` | 6,436 |

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

