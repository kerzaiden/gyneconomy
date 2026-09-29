# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,933 lines**, about 1236 KB, roughly **351 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `085cbca` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,112 | the whole stylesheet, every token and rule |
| **Markup** | 3,113–3,888 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,889–14,880 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,881–14,933 | </body></html> |

Counts: **286** top-level functions, **181** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 3,889_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,904 | `byId` | `function byId(` |
| 3,912 | `byIdMaybe` | `function byIdMaybe(` |
| 3,919 | `put` | `function put(` |
| 3,926 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 3,930_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,934 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,935 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,936 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,954 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,958 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,963_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,973 | `wheelMeta` | `var wheelMeta =` |
| 3,984 | `seasonOverride` | `var seasonOverride =` |
| 3,987 | `cycleNowNote` | `var cycleNowNote =` |
| 3,996 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,082 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,127 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,140_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,159 | `merge` | `function merge(` |
| 4,166 | `LIVE` | `function LIVE(` |
| 4,190 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,193_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,246 | `paintReading` | `function paintReading(` |
| 4,269 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,293 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,301 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY (Version 629)

_line 4,306_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,334 | `READINGS` | `var READINGS =` |
| 4,403 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 4,404 | `KINDS` | `var KINDS =` |
| 4,405 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 4,426 | `receive` | `function receive(` |
| 4,450 | `liveAsOf` | `var liveAsOf =` |
| 4,451 | `fmtAsOf` | `function fmtAsOf(` |
| 4,464 | `applyLive` | `function applyLive(` |
| 4,479 | `shapeOk` | `function shapeOk(` |
| 4,489 | `repaintPolicy` | `function repaintPolicy(` |
| 4,541 | `GYN` | `var GYN =` |
| 4,578 | `refreshLiveData` | `function refreshLiveData(` |
| 4,607 | `fetchSiteData` | `function fetchSiteData(` |
| 4,623 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,637_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,638 | `yieldCurve` | `var yieldCurve =` |
| 4,651 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,675 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,687 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,715_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,720 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,744 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,768 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,792 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,819 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,844_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,853 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,863 | `uninvLagToday` | `var uninvLagToday =` |
| 4,875 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,888 | `gdpPeers` | `var gdpPeers =` |
| 4,929 | `gdpSrc` | `var gdpSrc =` |
| 4,930 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,935 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,948 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,986_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,008 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 5,018_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,034 | `stressScoreFor` | `function stressScoreFor(` |
| 5,040 | `stressScore` | `var stressScore =` |
| 5,046 | `powerOf` | `var powerOf =` |
| 5,047 | `powerScore` | `var powerScore =` |
| 5,064 | `stressHistory` | `var stressHistory =` |
| 5,075 | `powerMeter` | `var powerMeter =` |
| 5,077 | `stressNoteFull` | `var stressNoteFull =` |
| 5,109 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,111_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,134 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,135 | `deficitHistory` | `var deficitHistory =` |
| 5,138 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,145 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,147 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,195 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,196 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,197 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,214_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,227 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,240_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,254 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,257 | `timelineSpan` | `function timelineSpan(` |
| 5,263 | `timelineFor` | `function timelineFor(` |
| 5,276 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,282_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,288 | `windowScale` | `function windowScale(` |
| 5,304 | `windowYears` | `function windowYears(` |
| 5,322 | `refName` | `function refName(` |
| 5,329 | `histReadEnsure` | `function histReadEnsure(` |
| 5,368 | `seatBandReading` | `function seatBandReading(` |
| 5,391 | `histReadFill` | `function histReadFill(` |
| 5,519 | `histAxisEnds` | `function histAxisEnds(` |
| 5,530 | `histLegend` | `function histLegend(` |
| 5,618 | `refitHistory` | `function refitHistory(` |
| 5,630 | `wireHistHover` | `function wireHistHover(` |
| 5,710 | `mWindowFrom` | `function mWindowFrom(` |
| 5,715 | `qWindowFrom` | `function qWindowFrom(` |
| 5,720 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,721 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,723 | `DEF_1983` | `var DEF_1983 =` |
| 5,725 | `defFrom` | `function defFrom(` |
| 5,736 | `deficitChart` | `function deficitChart(` |
| 5,825 | `deficitBlock` | `function deficitBlock(` |
| 5,887 | `buffettHistory` | `var buffettHistory =` |
| 5,917 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,918 | `hyDates` | `var hyDates =` |
| 5,919 | `hyOas` | `var hyOas =` |
| 5,920 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,927 | `hyAt` | `function hyAt(` |
| 5,931 | `hyLabel` | `function hyLabel(` |
| 5,932 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,933 | `hyNum` | `function hyNum(` |
| 5,934 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,944 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,954 | `capeHistory` | `var capeHistory =` |
| 5,956 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,974_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,980 | `sentiment` | `var sentiment =` |
| 5,998 | `valuation` | `var valuation =` |
| 6,035 | `valRow` | `function valRow(` |
| 6,043 | `coincident` | `var coincident =` |
| 6,104 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,122 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,123 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,124 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,126_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,139 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,140 | `m2vHistory` | `var m2vHistory =` |
| 6,160 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,252 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,341 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,342 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,382_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,388 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,389 | `DOTS` | `var DOTS =` |
| 6,396 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,430 | `histHead` | `function histHead(` |
| 6,454 | `headNoteIdx` | `var headNoteIdx =` |
| 6,455 | `headMenuHtml` | `function headMenuHtml(` |
| 6,513 | `headMenuFor` | `var headMenuFor =` |
| 6,515 | `headSubFor` | `var headSubFor =` |
| 6,516 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,565 | `nameWithMark` | `function nameWithMark(` |
| 6,571 | `panelRow` | `function panelRow(` |
| 6,604 | `panelFromMeter` | `function panelFromMeter(` |
| 6,618 | `meterFlagged` | `function meterFlagged(` |
| 6,629 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,657 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,671 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,690 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,709 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,723 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,748 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,779 | `desireBlock` | `function desireBlock(` |
| 6,806 | `volumeBlock` | `function volumeBlock(` |
| 6,831 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,854 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,862_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,875 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,876 | `m2Level` | `var m2Level =` |
| 6,898 | `m2Yoy` | `var m2Yoy =` |
| 6,899 | `M2_NORM` | `var M2_NORM =` |
| 6,904 | `volumeVerdict` | `function volumeVerdict(` |
| 6,941 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,942 | `unempHistory` | `var unempHistory =` |
| 6,948 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,963 | `NROU_NOW` | `var NROU_NOW =` |
| 6,964 | `unempState` | `function unempState(` |
| 6,970 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones — the policy rate's history

_line 7,032_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,041 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 7,050_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,063 | `checkLendingStandards` | `function checkLendingStandards(` |
| 7,076 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,130 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,197 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,198 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,201 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,209_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,224 | `householdsChart` | `function householdsChart(` |
| 7,291 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,374 | `GDP_NORM` | `var GDP_NORM =` |
| 7,380 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,381 | `gdpNowQ` | `var gdpNowQ =` |
| 7,382 | `gdpMeter` | `var gdpMeter =` |
| 7,385 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,407 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,471 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,534 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,542 | `velocityVerdict` | `function velocityVerdict(` |
| 7,550 | `derivePulseTag` | `function derivePulseTag(` |
| 7,556 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,616_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,625 | `seasonReading` | `var seasonReading =` |
| 7,674 | `frameworkRows` | `var frameworkRows =` |
| 7,684 | `vixRow` | `var vixRow =` |
| 7,692 | `vixWordOf` | `var vixWordOf =` |
| 7,696 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,711_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,715 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,724_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,725 | `calendarTodayY` | `var calendarTodayY =` |
| 7,756 | `vix3mClose` | `var vix3mClose =` |
| 7,757 | `fearCurve` | `function fearCurve(` |
| 7,764 | `curveVerdict` | `function curveVerdict(` |
| 7,771 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,776 | `valuationVerdict` | `function valuationVerdict(` |
| 7,794 | `sparkHtml` | `function sparkHtml(` |
| 7,813 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,819_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,832 | `modeBar` | `function modeBar(` |
| 7,847 | `pickerOpen` | `var pickerOpen =` |
| 7,851 | `cycleByName` | `function cycleByName(` |
| 7,855 | `openCycle` | `function openCycle(` |
| 7,861 | `cycleSlice` | `function cycleSlice(` |
| 7,870 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,878 | `cycleMonths` | `function cycleMonths(` |
| 7,897 | `histControls` | `function histControls(` |
| 7,911 | `cycLabel` | `function cycLabel(` |
| 7,927 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,936 | `cyclePicker` | `function cyclePicker(` |
| 7,955 | `rangeBar` | `function rangeBar(` |
| 7,967 | `trendOf` | `function trendOf(` |
| 8,012 | `TREND_ARROW` | `var TREND_ARROW =` |
| 8,022 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 8,043_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,044 | `yearOf` | `function yearOf(` |
| 8,045 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 8,046_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,084 | `headSigma` | `function headSigma(` |
| 8,092 | `atQuarter` | `function atQuarter(` |
| 8,093 | `atMonth` | `function atMonth(` |
| 8,094 | `cycleAverages` | `function cycleAverages(` |
| 8,101 | `ordinal` | `function ordinal(` |
| 8,102 | `hiCard` | `function hiCard(` |
| 8,113 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,127_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,134 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,150 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,157 | `moreRow` | `function moreRow(` |
| 8,163 | `powerPageNote` | `var powerPageNote =` |
| 8,164 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,176_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,179 | `xLabelOf` | `function xLabelOf(` |
| 8,199 | `fitGroup` | `function fitGroup(` |
| 8,221 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,280_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,304 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,314 | `vGrid` | `function vGrid(` |
| 8,339 | `COL_FILL` | `var COL_FILL =` |
| 8,372 | `colPath` | `function colPath(` |
| 8,377 | `colWidth` | `function colWidth(` |
| 8,424 | `AXIS` | `var AXIS =` |
| 8,440 | `histFrame` | `function histFrame(` |
| 8,452 | `xLabel` | `function xLabel(` |
| 8,456 | `crossLine` | `function crossLine(` |
| 8,461 | `zeroRule` | `function zeroRule(` |
| 8,464 | `meanRule` | `function meanRule(` |
| 8,476 | `pendingGeom` | `var pendingGeom =` |
| 8,477 | `publishGeom` | `function publishGeom(` |
| 8,478 | `attachHistory` | `function attachHistory(` |
| 8,493 | `histBar` | `function histBar(` |
| 8,496 | `histTip` | `function histTip(` |
| 8,499 | `avgRule` | `function avgRule(` |
| 8,502 | `vhOpen` | `function vhOpen(` |
| 8,503 | `chartAxes` | `function chartAxes(` |
| 8,563 | `divergeChart` | `function divergeChart(` |
| 8,631 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,660_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,668 | `maxIn` | `function maxIn(` |
| 8,686 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,700 | `PEEK_W` | `var PEEK_W =` |
| 8,703 | `PEEK_H` | `var PEEK_H =` |
| 8,708 | `colPeek` | `function colPeek(` |
| 8,735 | `meterPeek` | `function meterPeek(` |
| 8,752 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,757 | `pressureZone` | `function pressureZone(` |
| 8,772 | `HZN_BACK` | `var HZN_BACK =` |
| 8,773 | `hznLast` | `function hznLast(` |
| 8,774 | `hznBack` | `function hznBack(` |
| 8,775 | `horizonWord` | `function horizonWord(` |
| 8,800 | `HZN_METERS` | `var HZN_METERS =` |
| 8,808 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,849 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,854 | `RISK_RISK` | `var RISK_RISK =` |
| 8,859 | `riskCell` | `function riskCell(` |
| 8,860 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,891 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,916_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,937 | `pulseClipN` | `var pulseClipN =` |
| 8,938 | `beatPath` | `function beatPath(` |
| 8,963 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,977 | `pulsePeek` | `function pulsePeek(` |
| 8,985 | `pulseBlock` | `function pulseBlock(` |
| 9,005 | `CHEV` | `var CHEV =` |
| 9,007 | `peekCard` | `function peekCard(` |
| 9,061 | `dropSvg` | `function dropSvg(` |
| 9,073 | `volumeSvg` | `function volumeSvg(` |
| 9,080 | `gaugeSvg` | `function gaugeSvg(` |
| 9,084 | `diamondSvg` | `function diamondSvg(` |
| 9,098 | `energyFromReserve` | `function energyFromReserve(` |
| 9,110 | `sproutSvg` | `function sproutSvg(` |
| 9,121 | `markSvg` | `function markSvg(` |
| 9,130 | `pressureSvg` | `function pressureSvg(` |
| 9,134 | `hormoneSvg` | `function hormoneSvg(` |
| 9,140 | `flameSvg` | `function flameSvg(` |
| 9,144 | `gearSvg` | `function gearSvg(` |
| 9,156 | `thermoSvg` | `function thermoSvg(` |
| 9,175 | `trendUpSvg` | `function trendUpSvg(` |
| 9,177 | `ecgSvg` | `function ecgSvg(` |
| 9,191 | `circulationSvg` | `function circulationSvg(` |
| 9,192 | `weatherSvg` | `function weatherSvg(` |
| 9,213 | `moodSvg` | `function moodSvg(` |
| 9,237 | `boltSvg` | `function boltSvg(` |
| 9,240 | `houseSvg` | `function houseSvg(` |
| 9,248 | `sunriseSvg` | `function sunriseSvg(` |
| 9,263 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,274 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,291_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,312 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,313 | `dsrHistory` | `var dsrHistory =` |
| 9,314 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,315 | `savHistory` | `var savHistory =` |
| 9,320 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,330 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,331 | `dsrNow` | `var dsrNow =` |
| 9,332 | `savNow` | `var savNow =` |
| 9,333 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,338 | `householdsWord` | `function householdsWord(` |
| 9,345 | `householdsNow` | `var householdsNow =` |
| 9,352 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,353 | `dsrMeter` | `var dsrMeter =` |
| 9,356 | `savMeter` | `var savMeter =` |
| 9,359 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,376 | `savInfoHtml` | `function savInfoHtml(` |
| 9,394 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,403 | `curveNow` | `var curveNow =` |
| 9,404 | `curveTag` | `var curveTag =` |
| 9,405 | `curveSub` | `var curveSub =` |
| 9,409 | `curvePct` | `function curvePct(` |
| 9,410 | `curveNoteFull` | `var curveNoteFull =` |
| 9,425 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,433 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,474 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,502_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,516 | `marketTops` | `var marketTops =` |
| 9,526 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,531 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,533_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,554 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,555 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,560_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,581 | `slopeOf` | `function slopeOf(` |
| 9,592 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,598 | `readSeason` | `function readSeason(` |
| 9,623 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,625 | `qLabel` | `function qLabel(` |
| 9,649 | `regimeTrack` | `function regimeTrack(` |
| 9,672 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,674_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,681 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,682 | `seasonTitle` | `function seasonTitle(` |
| 9,683 | `monthLabel` | `function monthLabel(` |
| 9,684 | `cycleModel` | `function cycleModel(` |
| 9,736 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,744 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,751 | `nowModel` | `var nowModel =` |
| 9,752 | `readingNow` | `var readingNow =` |
| 9,753 | `cpiNow` | `var cpiNow =` |
| 9,754 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,755 | `currentSeason` | `var currentSeason =` |
| 9,756 | `seasonWhy` | `var seasonWhy =` |
| 9,773 | `seasonGroup` | `function seasonGroup(` |
| 9,787 | `arcGauge` | `function arcGauge(` |
| 9,829 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,842 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,849 | `tsyView` | `var tsyView =` |
| 9,851 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,853 | `spreadLabel` | `function spreadLabel(` |
| 9,860 | `policyFacts` | `function policyFacts(` |
| 9,874 | `policyFactRows` | `function policyFactRows(` |
| 9,880 | `allSources` | `var allSources =` |
| 9,904 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,937_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,940 | `SVG_NS` | `var SVG_NS =` |
| 9,941 | `svgEl` | `function svgEl(` |
| 9,954 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,990_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,991 | `clampPct` | `function clampPct(` |
| 9,998 | `infoIcon` | `function infoIcon(` |
| 10,007 | `detailTexts` | `var detailTexts =` |
| 10,025 | `detailSlots` | `var detailSlots =` |
| 10,026 | `detailSlot` | `function detailSlot(` |
| 10,037 | `powerPanelHtml` | `var powerPanelHtml =` |
| 10,041 | `_growthPanel` | `var _growthPanel =` |
| 10,042 | `growthPanelHtml` | `function growthPanelHtml(` |
| 10,048 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 10,059 | `facts` | `function facts(` |
| 10,060 | `factsFrom` | `function factsFrom(` |
| 10,064 | `expandBtn` | `function expandBtn(` |
| 10,070 | `sheetRenderers` | `var sheetRenderers =` |
| 10,087 | `pageMode` | `var pageMode =` |
| 10,094 | `pageCycles` | `var pageCycles =` |
| 10,099 | `pageRange` | `var pageRange =` |
| 10,105 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,139_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,150 | `meterHtml` | `function meterHtml(` |
| 10,180 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW (Version 631)

_line 10,181_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,189 | `subjectRow` | `function subjectRow(` |
| 10,201 | `subjectIcon` | `function subjectIcon(` |
| 10,202 | `srcHtml` | `function srcHtml(` |
| 10,211 | `TIMING` | `var TIMING =` |
| 10,217 | `timingMark` | `function timingMark(` |
| 10,231 | `timingPill` | `function timingPill(` |
| 10,252 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,260 | `seatPageFoot` | `function seatPageFoot(` |
| 10,283 | `timingMembers` | `var timingMembers =` |
| 10,284 | `registerTiming` | `function registerTiming(` |
| 10,290 | `headHtml` | `function headHtml(` |
| 10,308 | `heldHighlights` | `var heldHighlights =` |
| 10,309 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,367_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,368 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,789_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,790 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 11,012_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,013 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 11,045_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,051 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,135_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,136 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,154_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,157 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,180_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,192 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,321_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,330 | `lendingWord` | `function lendingWord(` |
| 11,338 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,396_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,397 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,521_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,524 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,647_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,659 | `totalRiseIn` | `function totalRiseIn(` |
| 11,669 | `eraInflation` | `function eraInflation(` |
| 11,680 | `eraGrowth` | `function eraGrowth(` |
| 11,700 | `fmtSigned` | `function fmtSigned(` |
| 11,705 | `regimeArrow` | `function regimeArrow(` |
| 11,711 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,712 | `growthShown` | `function growthShown(` |
| 11,713 | `growthShownCap` | `function growthShownCap(` |
| 11,714 | `regimeState` | `function regimeState(` |
| 11,718 | `phaseClass` | `function phaseClass(` |
| 11,720 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,732 | `cycleViewEl` | `var cycleViewEl =` |
| 11,738 | `tempCard` | `var tempCard =` |
| 11,739 | `placeCharts` | `function placeCharts(` |
| 11,744 | `shownEra` | `var shownEra =` |
| 11,745 | `calendarReset` | `var calendarReset =` |
| 11,746 | `metricPageReset` | `var metricPageReset =` |
| 11,747 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,750 | `topbarBack` | `var topbarBack =` |
| 11,751 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,758_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,759 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,920_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,921 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,939_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,942 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,963_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,969 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,972 | `hubSet` | `function hubSet(` |
| 11,985 | `quarterPopup` | `function quarterPopup(` |
| 12,018 | `hubShowDefault` | `function hubShowDefault(` |
| 12,027 | `hubShowQuarter` | `function hubShowQuarter(` |
| 12,033 | `hubShowYear` | `function hubShowYear(` |
| 12,048 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,140_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,143 | `tempState` | `var tempState =` |
| 12,146 | `chartLink` | `var chartLink =` |
| 12,166 | `m2Step` | `function m2Step(` |
| 12,169 | `heatStep` | `function heatStep(` |
| 12,173 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,360_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,363 | `drawGrowth` | `function drawGrowth(` |
| 12,502 | `wireResize` | `function wireResize(` |
| 12,508 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,520_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,521 | `renderCycleView` | `function renderCycleView(` |
| 12,582 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,590_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,601 | `peerChosen` | `function peerChosen(` |
| 12,602 | `peerReaches` | `function peerReaches(` |
| 12,632 | `shownEraModel` | `var shownEraModel =` |
| 12,633 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,635_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,637 | `stripGroupName` | `var stripGroupName =` |
| 12,638 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,684 | `marketStripHtml` | `function marketStripHtml(` |
| 12,747 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,748 | `settleStrips` | `function settleStrips(` |
| 12,783 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES (Version 630)

_line 13,062_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,076 | `partsOf` | `function partsOf(` |
| 13,085 | `discOf` | `function discOf(` |
| 13,092 | `authored` | `function authored(` |
| 13,098 | `registerRoster` | `function registerRoster(` |
| 13,140 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER (Version 630)

_line 13,152_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 13,161 | `NAV` | `var NAV =` |
| 13,162 | `buildNav` | `function buildNav(` |

### ALL INDICATORS (Version 630)

_line 13,276_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,280 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories (Version 630)

_line 13,340_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,343 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES (Version 630)

_line 13,836_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,840 | `renderMetricPages` | `function renderMetricPages(` |

### GDP growth

_line 14,278_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,333 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,365_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,366 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,466_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,478 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,521_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,529 | `__roster` | `var __roster =` |
| 14,530 | `readingRoster` | `function readingRoster(` |
| 14,585 | `readFig` | `function readFig(` |
| 14,593 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612)

_line 14,600_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,628 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,681_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,682 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,742_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,743 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,776_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,777 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,153–4,156 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,781–8,794 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,632–9,645 | `seasonTrackAll` | The season, computed |
| 9,667–9,671 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 14,065 |
| `desire-range` | 10,679 |
| `fear-range` | 11,486 |
| `hormones-range` | 11,226 |
| `hzn-range` | 10,782 |
| `hzn-spread` | 10,776 |
| `pressure-range` | 11,364 |
| `pulse-range` | 10,635 |
| `sheet-marker-deficit` | 14,062 |
| `sheet-metric-gdp` | 13,954 |
| `sheet-metric-households` | 14,092 |
| `sheet-metric-power` | 14,026 |
| `sheet-metric-temp` | 13,909 |
| `sheet-metric-valuation` | 14,136 |
| `sheet-sign-activity` | 14,010 |
| `sheet-sign-desire` | 10,680 |
| `sheet-sign-horizon` | 10,783 |
| `sheet-sign-hormones` | 11,229 |
| `sheet-sign-pressure` | 11,365 |
| `sheet-sign-pulse` | 10,634 |
| `sheet-sign-sentiment` | 11,491 |
| `sheet-sign-volume` | 10,655 |
| `volume-range` | 10,656 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 14,071 |
| `desire-range` | 10,664 |
| `fear-range` | 11,443 |
| `hzn-range` | 10,708 |
| `pulse-range` | 10,618 |
| `sheet-metric-gdp` | 13,955 |
| `sheet-metric-power` | 14,027 |
| `sheet-metric-temp` | 13,910 |
| `sheet-metric-valuation` | 14,137 |
| `volume-range` | 10,639 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,403 |
| `sheet-metric-gdp` | 6,404 |
| `sheet-sign-activity` | 6,411 |
| `sheet-metric-power` | 6,412 |
| `sheet-metric-valuation` | 6,414 |
| `sheet-metric-households` | 6,415 |
| `deficit-range` | 6,416 |
| `volume-range` | 6,417 |
| `pulse-range` | 6,418 |
| `hzn-range` | 6,424 |
| `desire-range` | 6,425 |
| `fear-range` | 6,426 |
| `hormones-range` | 6,427 |
| `pressure-range` | 6,428 |

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
| 1,748 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,925 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,463 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,504 | Rhymes (Version 610): today beside one past top |
| 2,545 | A closed cycle's categories (Version 613) |
| 2,575 | hero: yield curve |
| 2,652 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,731 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,830 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,855 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,870 | long cycle (structural layer) |
| 2,911 | indicator grid |
| 2,954 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,970 | info icon + popover (progressive disclosure for longer notes) |
| 2,991 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,086 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (144), which is what the renderers fill:

| Line | id |
|---|---|
| 3,118 | `topbar-back` |
| 3,121 | `topbar-title` |
| 3,122 | `menu-btn` |
| 3,139 | `main` |
| 3,146 | `cycle-view` |
| 3,154 | `cycle-kicker` |
| 3,160 | `cycle-dial` |
| 3,162 | `season-wheel-hub-date` |
| 3,163 | `season-wheel-hub-theme` |
| 3,164 | `season-wheel-hub-detail` |
| 3,172 | `temp-card` |
| 3,174 | `temp-kicker` |
| 3,175 | `temp-sub` |
| 3,178 | `temp-svg` |
| 3,179 | `temp-tooltip` |
| 3,185 | `temp-stats` |
| 3,192 | `growth-card` |
| 3,195 | `growth-kicker` |
| 3,195 | `growth-phase` |
| 3,195 | `growth-sub` |
| 3,196 | `growth-svg` |
| 3,196 | `growth-tooltip` |
| 3,201 | `growth-stats` |
| 3,210 | `today-analysis` |
| 3,214 | `peek-row` |
| 3,218 | `sheet-metric-temp` |
| 3,219 | `temp-timing` |
| 3,220 | `temp-chart` |
| 3,222 | `temp-rangebar` |
| 3,224 | `temp-head` |
| 3,225 | `slot-temp` |
| 3,226 | `temp-history` |
| 3,227 | `temp-hist-tooltip` |
| 3,230 | `temp-trend` |
| 3,234 | `temp-highlights` |
| 3,237 | `sheet-metric-gdp` |
| 3,238 | `gdp-timing` |
| 3,239 | `gdp-chart` |
| 3,240 | `gdp-rangebar` |
| 3,242 | `gdp-head` |
| 3,243 | `slot-growth` |
| 3,244 | `gdp-history` |
| 3,245 | `gdp-hist-tooltip` |
| 3,246 | `gdp-yoy` |
| 3,256 | `gdp-trend` |
| 3,258 | `gdp-panel` |
| 3,263 | `subj-ring-gdp` |
| 3,265 | `subj-label-gdp` |
| 3,266 | `subj-value-gdp` |
| 3,267 | `subj-say-gdp` |
| 3,268 | `subj-spark-gdp` |
| 3,273 | `subj-ctx-gdp` |
| 3,276 | `gdp-highlights` |
| 3,284 | `sheet-metric-power` |
| 3,285 | `power-timing` |
| 3,286 | `power-head` |
| 3,287 | `power-chart` |
| 3,291 | `subj-ring-resilience` |
| 3,294 | `subj-value-resilience` |
| 3,295 | `subj-say-resilience` |
| 3,300 | `subj-ctx-resilience` |
| 3,304 | `longcycle-title` |
| 3,306 | `longcycle-tag` |
| 3,320 | `power-highlights` |
| 3,327 | `sheet-marker-deficit` |
| 3,333 | `sheet-metric-households` |
| 3,334 | `households-timing` |
| 3,335 | `households-chart` |
| 3,336 | `households-highlights` |
| 3,340 | `sheet-metric-valuation` |
| 3,341 | `valuation-timing` |
| 3,342 | `valuation-head` |
| 3,343 | `valuation-chart` |
| 3,347 | `subj-ring-valuation` |
| 3,350 | `subj-value-valuation` |
| 3,351 | `subj-say-valuation` |
| 3,356 | `subj-ctx-valuation` |
| 3,360 | `valuation-title` |
| 3,362 | `valuation-tag` |
| 3,369 | `valuation-highlights` |
| 3,393 | `subj-value-hormones` |
| 3,394 | `subj-say-hormones` |
| 3,402 | `hormones-history` |
| 3,412 | `hormones-insights` |
| 3,438 | `subj-value-horizon` |
| 3,439 | `subj-say-horizon` |
| 3,440 | `subj-spark-horizon` |
| 3,450 | `hzn-timeline` |
| 3,452 | `hzn-head` |
| 3,453 | `spread-history-shell` |
| 3,454 | `spread-history-svg` |
| 3,455 | `spread-history-tooltip` |
| 3,460 | `ylm-shell` |
| 3,461 | `ylm-svg` |
| 3,462 | `ylm-tooltip` |
| 3,465 | `hzn-trend` |
| 3,466 | `ylm-trend` |
| 3,468 | `horizon-insights` |
| 3,496 | `subj-value-pressure` |
| 3,497 | `subj-say-pressure` |
| 3,502 | `pressure-history` |
| 3,503 | `pressure-highlights` |
| 3,509 | `subj-ring-sentiment` |
| 3,512 | `subj-value-sentiment` |
| 3,513 | `subj-say-sentiment` |
| 3,514 | `subj-spark-sentiment` |
| 3,528 | `fear-history` |
| 3,529 | `curve-highlights` |
| 3,543 | `signs-list` |
| 3,554 | `calendar-list` |
| 3,567 | `rhymes-card` |
| 3,578 | `rhy-pick` |
| 3,579 | `rhy-body` |
| 3,626 | `cycle-list` |
| 3,632 | `cycle-more` |
| 3,633 | `cycle-more-label` |
| 3,642 | `calendar-cycle` |
| 3,643 | `calendar-cycle-slot` |
| 3,650 | `cycle-cats` |
| 3,701 | `seasons-kicker` |
| 3,702 | `seasons-rows` |
| 3,706 | `framework-kicker` |
| 3,708 | `framework-rows` |
| 3,715 | `more-menu` |
| 3,718 | `menu-back` |
| 3,732 | `sources-open` |
| 3,740 | `appearance-current` |
| 3,748 | `sheet-howto` |
| 3,792 | `sheet-book` |
| 3,824 | `sheet-appearance` |
| 3,832 | `theme-toggle` |
| 3,839 | `sheet-contact` |
| 3,848 | `contact-form` |
| 3,849 | `contact-title` |
| 3,850 | `contact-message` |
| 3,852 | `contact-hint` |
| 3,853 | `contact-send` |
| 3,862 | `sheet-sources` |
| 3,865 | `sources-back` |
| 3,872 | `asof-text` |
| 3,873 | `sources-groups` |
| 3,880 | `detail-backdrop` |
| 3,882 | `detail-modal-close` |
| 3,883 | `detail-modal-body` |

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

