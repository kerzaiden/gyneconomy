# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,974 lines**, about 646 KB, roughly **183 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `c537dc2` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,673 | the whole stylesheet, every token and rule |
| **Markup** | 1,674–2,175 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 2,176–8,941 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,942–8,974 | </body></html> |

Counts: **290** top-level functions, **184** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 2,176_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,178 | `byId` | `function byId(` |
| 2,186 | `byIdMaybe` | `function byIdMaybe(` |
| 2,187 | `put` | `function put(` |
| 2,192 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 2,194_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,195 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 2,196 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 2,197 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 2,198 | `hubTodayHtml` | `function hubTodayHtml(` |
| 2,202 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 2,207_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,208 | `wheelMeta` | `var wheelMeta =` |
| 2,216 | `seasonOverride` | `var seasonOverride =` |
| 2,217 | `cycleNowNote` | `var cycleNowNote =` |
| 2,219 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 2,297 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 2,338 | `gdpLevels` | `var gdpLevels =` |
| 2,362 | `fedFundsHistory` | `var fedFundsHistory =` |
| 2,363 | `fearCurveHistory` | `var fearCurveHistory =` |
| 2,371 | `fiscalHistory` | `var fiscalHistory =` |
| 2,377 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 2,382 | `treasuryQuarterly` | `var treasuryQuarterly =` |

### Live data without a render refactor

_line 2,392_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,397 | `merge` | `function merge(` |
| 2,404 | `LIVE` | `function LIVE(` |
| 2,418 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,421_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,423 | `paintReading` | `function paintReading(` |
| 2,440 | `repaintFearCurve` | `function repaintFearCurve(` |
| 2,446 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,454 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,459 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,463 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,468_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,469 | `READINGS` | `var READINGS =` |
| 2,525 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,526 | `KINDS` | `var KINDS =` |
| 2,527 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,541 | `receive` | `function receive(` |
| 2,557 | `liveAsOf` | `var liveAsOf =` |
| 2,558 | `fmtAsOf` | `function fmtAsOf(` |
| 2,563 | `applyLive` | `function applyLive(` |
| 2,576 | `shapeOk` | `function shapeOk(` |
| 2,583 | `repaintPolicy` | `function repaintPolicy(` |
| 2,589 | `GYN` | `var GYN =` |
| 2,616 | `refreshLiveData` | `function refreshLiveData(` |
| 2,634 | `fetchSiteData` | `function fetchSiteData(` |
| 2,650 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,655_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,656 | `yieldCurve` | `var yieldCurve =` |
| 2,662 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,663 | `curveAsOf` | `function curveAsOf(` |
| 2,668 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,669 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,674 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,676_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,677 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,678 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,679 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,680 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,681 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,683_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,684 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,690 | `uninvLagToday` | `var uninvLagToday =` |
| 2,695 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,701 | `gdpPeers` | `var gdpPeers =` |
| 2,742 | `gdpSrc` | `var gdpSrc =` |
| 2,743 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,748 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 2,750 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,777_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,779 | `productivityReading` | `var productivityReading =` |

### Institutional trust is not in this panel

_line 2,788_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,790 | `stressScoreFor` | `function stressScoreFor(` |
| 2,796 | `stressScore` | `var stressScore =` |
| 2,797 | `powerOf` | `var powerOf =` |
| 2,798 | `powerScore` | `var powerScore =` |
| 2,800 | `stressHistory` | `var stressHistory =` |
| 2,806 | `powerMeter` | `var powerMeter =` |
| 2,808 | `stressNoteFull` | `var stressNoteFull =` |
| 2,810 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year

_line 2,812_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,813 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,814 | `deficitHistory` | `var deficitHistory =` |
| 2,817 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,818 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,820 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,829_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,830 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,840_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,841 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,844 | `timelineSpan` | `function timelineSpan(` |
| 2,849 | `timelineFor` | `function timelineFor(` |
| 2,860 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,866_ · 32 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,867 | `windowScale` | `function windowScale(` |
| 2,882 | `windowYears` | `function windowYears(` |
| 2,890 | `refName` | `function refName(` |
| 2,894 | `histReadEnsure` | `function histReadEnsure(` |
| 2,915 | `seatBandReading` | `function seatBandReading(` |
| 2,931 | `histReadFill` | `function histReadFill(` |
| 2,981 | `histAxisEnds` | `function histAxisEnds(` |
| 2,992 | `histLegend` | `function histLegend(` |
| 3,052 | `refitHistory` | `function refitHistory(` |
| 3,062 | `wireHistHover` | `function wireHistHover(` |
| 3,099 | `mWindowFrom` | `function mWindowFrom(` |
| 3,103 | `qWindowFrom` | `function qWindowFrom(` |
| 3,107 | `VOL_STOPS` | `var VOL_STOPS =` |
| 3,108 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 3,110 | `DEF_1983` | `var DEF_1983 =` |
| 3,111 | `defFrom` | `function defFrom(` |
| 3,116 | `deficitChart` | `function deficitChart(` |
| 3,184 | `deficitBlock` | `function deficitBlock(` |
| 3,227 | `buffettHistory` | `var buffettHistory =` |
| 3,229 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 3,230 | `hyDates` | `var hyDates =` |
| 3,231 | `hyOas` | `var hyOas =` |
| 3,232 | `checkDesireWindow` | `function checkDesireWindow(` |
| 3,239 | `hyAt` | `function hyAt(` |
| 3,243 | `hyLabel` | `function hyLabel(` |
| 3,244 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 3,245 | `hyNum` | `function hyNum(` |
| 3,246 | `hyWindowFrom` | `function hyWindowFrom(` |
| 3,254 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 3,264 | `capeHistory` | `var capeHistory =` |
| 3,266 | `longCycleSrc` | `var longCycleSrc =` |
| 3,282 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 3,301_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,302 | `sentiment` | `var sentiment =` |
| 3,318 | `valuation` | `var valuation =` |
| 3,339 | `valRow` | `function valRow(` |
| 3,346 | `coincident` | `var coincident =` |
| 3,392 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 3,398 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 3,399 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 3,400 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 3,402_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,403 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 3,404 | `m2vHistory` | `var m2vHistory =` |
| 3,420 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,474 | `desireHistoryChart` | `function desireHistoryChart(` |
| 3,514 | `PBAR_GAP` | `var PBAR_GAP =` |
| 3,515 | `panelBar` | `function panelBar(` |

### the history card's head

_line 3,546_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,547 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,548 | `DOTS` | `var DOTS =` |
| 3,550 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,567 | `headPickRow` | `function headPickRow(` |
| 3,573 | `histHead` | `function histHead(` |
| 3,588 | `headNoteIdx` | `var headNoteIdx =` |
| 3,589 | `headMenuHtml` | `function headMenuHtml(` |
| 3,614 | `headMenuFor` | `var headMenuFor =` |
| 3,615 | `headSubFor` | `var headSubFor =` |
| 3,616 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,647 | `nameWithMark` | `function nameWithMark(` |
| 3,653 | `panelRow` | `function panelRow(` |
| 3,666 | `panelFromMeter` | `function panelFromMeter(` |
| 3,674 | `meterFlagged` | `function meterFlagged(` |
| 3,681 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,706 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,720 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,733 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,752 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,766 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,785 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,816 | `desireBlock` | `function desireBlock(` |
| 3,828 | `volumeBlock` | `function volumeBlock(` |
| 3,841 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,857 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,864_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,865 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,866 | `m2Level` | `var m2Level =` |
| 3,887 | `m2Yoy` | `var m2Yoy =` |
| 3,888 | `M2_NORM` | `var M2_NORM =` |
| 3,890 | `volumeVerdict` | `function volumeVerdict(` |
| 3,898 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,899 | `unempHistory` | `var unempHistory =` |
| 3,905 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,914 | `NROU_NOW` | `var NROU_NOW =` |
| 3,915 | `unempState` | `function unempState(` |
| 3,921 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,975_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,976 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,985 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 4,043 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 4,044 | `CPI_TARGET` | `var CPI_TARGET =` |
| 4,045 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 4,046_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,048 | `householdsChart` | `function householdsChart(` |
| 4,097 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 4,152 | `GDP_NORM` | `var GDP_NORM =` |
| 4,153 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 4,154 | `gdpNowQ` | `var gdpNowQ =` |
| 4,155 | `gdpMeter` | `var gdpMeter =` |
| 4,158 | `growthInfoHtml` | `function growthInfoHtml(` |
| 4,180 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 4,233 | `m2GrowthChart` | `function m2GrowthChart(` |
| 4,280 | `checkMoneyStock` | `function checkMoneyStock(` |
| 4,288 | `velocityVerdict` | `function velocityVerdict(` |
| 4,296 | `derivePulseTag` | `function derivePulseTag(` |
| 4,302 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 4,332_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,333 | `seasonReading` | `var seasonReading =` |
| 4,377 | `frameworkRows` | `var frameworkRows =` |
| 4,387 | `vixRow` | `var vixRow =` |
| 4,388 | `vixWordOf` | `var vixWordOf =` |
| 4,392 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 4,402_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,403 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 4,412_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,413 | `calendarTodayY` | `var calendarTodayY =` |
| 4,415 | `vix3mClose` | `var vix3mClose =` |
| 4,416 | `fearCurve` | `function fearCurve(` |
| 4,421 | `curveVerdict` | `function curveVerdict(` |
| 4,426 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 4,427 | `valuationVerdict` | `function valuationVerdict(` |
| 4,435 | `sparkHtml` | `function sparkHtml(` |
| 4,454 | `lastN` | `function lastN(` |

### The range bar

_line 4,456_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,457 | `modeBar` | `function modeBar(` |
| 4,464 | `pickerOpen` | `var pickerOpen =` |
| 4,465 | `cycleByName` | `function cycleByName(` |
| 4,469 | `openCycle` | `function openCycle(` |
| 4,473 | `cycleSlice` | `function cycleSlice(` |
| 4,481 | `totalGrowthYears` | `function totalGrowthYears(` |
| 4,489 | `cycleMonths` | `function cycleMonths(` |
| 4,497 | `histControls` | `function histControls(` |
| 4,506 | `cycLabel` | `function cycLabel(` |
| 4,510 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 4,515 | `cyclePicker` | `function cyclePicker(` |
| 4,534 | `rangeBar` | `function rangeBar(` |
| 4,541 | `trendOf` | `function trendOf(` |
| 4,556 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,560 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,571_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,572 | `yearOf` | `function yearOf(` |
| 4,573 | `mean` | `function mean(` |

### The record rows

_line 4,574_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,575 | `headSigma` | `function headSigma(` |
| 4,580 | `atQuarter` | `function atQuarter(` |
| 4,581 | `atMonth` | `function atMonth(` |
| 4,582 | `cycleAverages` | `function cycleAverages(` |
| 4,589 | `ordinal` | `function ordinal(` |
| 4,590 | `hiCard` | `function hiCard(` |
| 4,593 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component

_line 4,607_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,608 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 4,614 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,621 | `moreRow` | `function moreRow(` |
| 4,627 | `powerPageNote` | `var powerPageNote =` |
| 4,628 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,634_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,635 | `xLabelOf` | `function xLabelOf(` |
| 4,645 | `fitGroup` | `function fitGroup(` |
| 4,662 | `reserveChart` | `function reserveChart(` |

### The history component's axes

_line 4,696_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,697 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,705 | `vGrid` | `function vGrid(` |
| 4,709 | `COL_FILL` | `var COL_FILL =` |
| 4,710 | `colPath` | `function colPath(` |
| 4,715 | `colWidth` | `function colWidth(` |
| 4,720 | `AXIS` | `var AXIS =` |
| 4,721 | `histFrame` | `function histFrame(` |
| 4,728 | `xLabel` | `function xLabel(` |
| 4,731 | `crossLine` | `function crossLine(` |
| 4,734 | `zeroRule` | `function zeroRule(` |
| 4,737 | `meanRule` | `function meanRule(` |
| 4,738 | `pendingGeom` | `var pendingGeom =` |
| 4,739 | `publishGeom` | `function publishGeom(` |
| 4,740 | `attachHistory` | `function attachHistory(` |
| 4,749 | `histBar` | `function histBar(` |
| 4,752 | `histTip` | `function histTip(` |
| 4,753 | `avgRule` | `function avgRule(` |
| 4,756 | `vhOpen` | `function vhOpen(` |
| 4,757 | `chartAxes` | `function chartAxes(` |
| 4,787 | `divergeChart` | `function divergeChart(` |
| 4,821 | `pairChart` | `function pairChart(` |

### The inner pages' chart (kept for nothing — see above)

_line 4,849_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,851 | `maxIn` | `function maxIn(` |
| 4,856 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,857 | `PEEK_W` | `var PEEK_W =` |
| 4,858 | `PEEK_H` | `var PEEK_H =` |
| 4,859 | `colPeek` | `function colPeek(` |
| 4,877 | `meterPeek` | `function meterPeek(` |
| 4,894 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,899 | `pressureZone` | `function pressureZone(` |
| 4,905 | `HZN_BACK` | `var HZN_BACK =` |
| 4,906 | `hznLast` | `function hznLast(` |
| 4,907 | `hznBack` | `function hznBack(` |
| 4,908 | `horizonWord` | `function horizonWord(` |
| 4,928 | `HZN_METERS` | `var HZN_METERS =` |
| 4,936 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,957 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,962 | `RISK_RISK` | `var RISK_RISK =` |
| 4,967 | `riskCell` | `function riskCell(` |
| 4,968 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,998 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 5,023_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,024 | `pulseClipN` | `var pulseClipN =` |
| 5,025 | `beatPath` | `function beatPath(` |
| 5,042 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 5,056 | `pulsePeek` | `function pulsePeek(` |
| 5,059 | `pulseBlock` | `function pulseBlock(` |
| 5,076 | `CHEV` | `var CHEV =` |
| 5,077 | `peekCard` | `function peekCard(` |
| 5,096 | `dropSvg` | `function dropSvg(` |
| 5,098 | `volumeSvg` | `function volumeSvg(` |
| 5,102 | `gaugeSvg` | `function gaugeSvg(` |
| 5,106 | `diamondSvg` | `function diamondSvg(` |
| 5,110 | `energyFromReserve` | `function energyFromReserve(` |
| 5,118 | `sproutSvg` | `function sproutSvg(` |
| 5,126 | `markSvg` | `function markSvg(` |
| 5,129 | `hormoneSvg` | `function hormoneSvg(` |
| 5,134 | `flameSvg` | `function flameSvg(` |
| 5,137 | `gearSvg` | `function gearSvg(` |
| 5,145 | `thermoSvg` | `function thermoSvg(` |
| 5,148 | `trendUpSvg` | `function trendUpSvg(` |
| 5,150 | `ecgSvg` | `function ecgSvg(` |
| 5,152 | `circulationSvg` | `function circulationSvg(` |
| 5,153 | `weatherSvg` | `function weatherSvg(` |
| 5,161 | `moodSvg` | `function moodSvg(` |
| 5,165 | `boltSvg` | `function boltSvg(` |
| 5,166 | `houseSvg` | `function houseSvg(` |
| 5,169 | `sunriseSvg` | `function sunriseSvg(` |
| 5,173 | `umbrellaSvg` | `function umbrellaSvg(` |
| 5,177 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 5,183_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,184 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 5,185 | `dsrHistory` | `var dsrHistory =` |
| 5,186 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 5,187 | `savHistory` | `var savHistory =` |
| 5,190 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 5,199 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 5,200 | `dsrNow` | `var dsrNow =` |
| 5,201 | `savNow` | `var savNow =` |
| 5,202 | `DSR_MEAN` | `var DSR_MEAN =` |
| 5,203 | `householdsWord` | `function householdsWord(` |
| 5,210 | `householdsNow` | `var householdsNow =` |
| 5,211 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 5,212 | `dsrMeter` | `var dsrMeter =` |
| 5,215 | `savMeter` | `var savMeter =` |
| 5,218 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 5,235 | `savInfoHtml` | `function savInfoHtml(` |
| 5,253 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 5,260 | `curveNow` | `var curveNow =` |
| 5,261 | `curveTag` | `var curveTag =` |
| 5,262 | `curveSub` | `var curveSub =` |
| 5,263 | `curvePct` | `function curvePct(` |
| 5,264 | `curveNoteFull` | `var curveNoteFull =` |
| 5,279 | `curveDetailHtml` | `function curveDetailHtml(` |
| 5,283 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 5,289 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside

_line 5,317_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,318 | `marketTops` | `var marketTops =` |
| 5,328 | `marketTopsSrc` | `var marketTopsSrc =` |
| 5,331 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 5,333_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,334 | `typicalCycleYears` | `var typicalCycleYears =` |
| 5,335 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 5,340_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,341 | `slopeOf` | `function slopeOf(` |
| 5,346 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 5,347 | `readSeason` | `function readSeason(` |
| 5,366 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 5,367 | `qLabel` | `function qLabel(` |
| 5,382 | `regimeTrack` | `function regimeTrack(` |
| 5,402 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 5,404_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,405 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 5,406 | `seasonTitle` | `function seasonTitle(` |
| 5,407 | `monthLabel` | `function monthLabel(` |
| 5,408 | `cycleModel` | `function cycleModel(` |
| 5,445 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,453 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,459 | `nowModel` | `var nowModel =` |
| 5,460 | `readingNow` | `var readingNow =` |
| 5,461 | `cpiNow` | `var cpiNow =` |
| 5,462 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,463 | `currentSeason` | `var currentSeason =` |
| 5,464 | `seasonWhy` | `var seasonWhy =` |
| 5,466 | `seasonGroup` | `function seasonGroup(` |
| 5,468 | `arcGauge` | `function arcGauge(` |
| 5,502 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,513 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,514 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,515 | `spreadLabel` | `function spreadLabel(` |
| 5,519 | `policyFacts` | `function policyFacts(` |
| 5,526 | `policyFactRows` | `function policyFactRows(` |
| 5,532 | `allSources` | `var allSources =` |
| 5,546 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,558_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,559 | `SVG_NS` | `var SVG_NS =` |
| 5,560 | `svgEl` | `function svgEl(` |
| 5,565 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,599_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,600 | `clampPct` | `function clampPct(` |
| 5,602 | `infoIcon` | `function infoIcon(` |
| 5,607 | `detailTexts` | `var detailTexts =` |
| 5,608 | `detailSlots` | `var detailSlots =` |
| 5,609 | `detailSlot` | `function detailSlot(` |
| 5,619 | `powerPanelHtml` | `var powerPanelHtml =` |
| 5,620 | `_growthPanel` | `var _growthPanel =` |
| 5,621 | `growthPanelHtml` | `function growthPanelHtml(` |
| 5,627 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 5,635 | `facts` | `function facts(` |
| 5,636 | `factsFrom` | `function factsFrom(` |
| 5,640 | `expandBtn` | `function expandBtn(` |
| 5,644 | `sheetRenderers` | `var sheetRenderers =` |
| 5,645 | `pageMode` | `var pageMode =` |
| 5,650 | `pageCycles` | `var pageCycles =` |
| 5,655 | `pageRange` | `var pageRange =` |
| 5,661 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,690_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,693 | `meterHtml` | `function meterHtml(` |
| 5,717 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,718_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,719 | `subjectRow` | `function subjectRow(` |
| 5,729 | `subjectIcon` | `function subjectIcon(` |
| 5,730 | `srcHtml` | `function srcHtml(` |
| 5,731 | `TIMING` | `var TIMING =` |
| 5,737 | `timingMark` | `function timingMark(` |
| 5,745 | `timingPill` | `function timingPill(` |
| 5,754 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,762 | `seatPageFoot` | `function seatPageFoot(` |
| 5,774 | `timingMembers` | `var timingMembers =` |
| 5,775 | `registerTiming` | `function registerTiming(` |
| 5,777 | `headHtml` | `function headHtml(` |
| 5,785 | `heldHighlights` | `var heldHighlights =` |
| 5,786 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,814_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,815 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,816 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,824 | `withLatestPoint` | `function withLatestPoint(` |
| 5,829 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 6,124_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,125 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 6,162_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,163 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 6,329_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,330 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 6,356_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,357 | `drawHznHead` | `function drawHznHead(` |
| 6,372 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 6,434_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,435 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 6,449_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,450 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones

_line 6,471_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,472 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 6,571_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,572 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,645_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,646 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,709_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,710 | `totalRiseIn` | `function totalRiseIn(` |
| 6,720 | `eraInflation` | `function eraInflation(` |
| 6,731 | `eraGrowth` | `function eraGrowth(` |
| 6,747 | `fmtSigned` | `function fmtSigned(` |
| 6,748 | `regimeArrow` | `function regimeArrow(` |
| 6,749 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,750 | `growthShown` | `function growthShown(` |
| 6,751 | `growthShownCap` | `function growthShownCap(` |
| 6,752 | `regimeState` | `function regimeState(` |
| 6,753 | `phaseClass` | `function phaseClass(` |
| 6,754 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,759 | `cycleViewEl` | `var cycleViewEl =` |
| 6,760 | `tempCard` | `var tempCard =` |
| 6,761 | `placeCharts` | `function placeCharts(` |
| 6,766 | `shownEra` | `var shownEra =` |
| 6,767 | `calendarReset` | `var calendarReset =` |
| 6,768 | `metricPageReset` | `var metricPageReset =` |
| 6,769 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,770 | `topbarBack` | `var topbarBack =` |
| 6,771 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,778_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,779 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,860_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,861 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,879_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,880 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,901_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,903 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,904 | `hubSet` | `function hubSet(` |
| 6,915 | `quarterPopup` | `function quarterPopup(` |
| 6,938 | `hubShowDefault` | `function hubShowDefault(` |
| 6,946 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,952 | `hubShowYear` | `function hubShowYear(` |
| 6,962 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: the cycle's months, against the 2% target

_line 7,043_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,044 | `tempState` | `var tempState =` |
| 7,045 | `chartLink` | `var chartLink =` |
| 7,046 | `m2Step` | `function m2Step(` |
| 7,049 | `heatStep` | `function heatStep(` |
| 7,053 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 7,209_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,210 | `drawGrowth` | `function drawGrowth(` |
| 7,323 | `wireResize` | `function wireResize(` |
| 7,329 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 7,341_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,342 | `renderCycleView` | `function renderCycleView(` |
| 7,376 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws

_line 7,384_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,385 | `peerChosen` | `function peerChosen(` |
| 7,386 | `peerReaches` | `function peerReaches(` |
| 7,414 | `shownEraModel` | `var shownEraModel =` |
| 7,415 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 7,417_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,418 | `stripGroupName` | `var stripGroupName =` |
| 7,419 | `seasonStripHtml` | `function seasonStripHtml(` |
| 7,447 | `marketStripHtml` | `function marketStripHtml(` |
| 7,481 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 7,482 | `settleStrips` | `function settleStrips(` |
| 7,513 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 7,674_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,675 | `partsOf` | `function partsOf(` |
| 7,684 | `discOf` | `function discOf(` |
| 7,687 | `authored` | `function authored(` |
| 7,688 | `registerRoster` | `function registerRoster(` |
| 7,722 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER

_line 7,734_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,735 | `NAV` | `var NAV =` |
| 7,736 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,830_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,831 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories

_line 7,876_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,877 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 8,182_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,183 | `renderMetricPages` | `function renderMetricPages(` |

### GDP growth

_line 8,512_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,545 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 8,558_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,559 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories

_line 8,624_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,625 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES

_line 8,658_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,659 | `__roster` | `var __roster =` |
| 8,660 | `readingRoster` | `function readingRoster(` |
| 8,703 | `readFig` | `function readFig(` |
| 8,708 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top

_line 8,715_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,716 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 8,769_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,770 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 8,819_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,820 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,851_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,852 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 2,393–2,396 | `LIVE_CACHE` | Live data without a render refactor |
| 4,914–4,927 | `horizonRead` | The inner pages' chart (kept for nothing — see above) |
| 5,368–5,381 | `seasonTrackAll` | The season, computed |
| 5,397–5,401 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 8,329 |
| `desire-range` | 6,061 |
| `fear-range` | 6,616 |
| `hormones-range` | 6,504 |
| `hzn-range` | 6,397 |
| `pressure-range` | 2,461 |
| `pulse-range` | 6,028 |
| `sheet-marker-deficit` | 8,326 |
| `sheet-metric-gdp` | 8,238 |
| `sheet-metric-households` | 8,348 |
| `sheet-metric-power` | 8,301 |
| `sheet-metric-temp` | 8,212 |
| `sheet-metric-valuation` | 8,388 |
| `sheet-sign-activity` | 8,286 |
| `sheet-sign-desire` | 6,062 |
| `sheet-sign-horizon` | 6,398 |
| `sheet-sign-hormones` | 6,505 |
| `sheet-sign-pressure` | 6,111 |
| `sheet-sign-pulse` | 6,027 |
| `sheet-sign-sentiment` | 6,617 |
| `sheet-sign-volume` | 6,045 |
| `volume-range` | 6,046 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 8,333 |
| `desire-range` | 6,050 |
| `fear-range` | 6,584 |
| `hzn-range` | 6,382 |
| `pressure-range` | 6,080 |
| `pulse-range` | 6,014 |
| `sheet-metric-gdp` | 8,239 |
| `sheet-metric-power` | 8,302 |
| `sheet-metric-temp` | 8,213 |
| `sheet-metric-valuation` | 8,389 |
| `volume-range` | 6,032 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,551 |
| `sheet-metric-gdp` | 3,552 |
| `sheet-sign-activity` | 3,553 |
| `sheet-metric-power` | 3,554 |
| `sheet-metric-valuation` | 3,556 |
| `sheet-metric-households` | 3,557 |
| `deficit-range` | 3,558 |
| `volume-range` | 3,559 |
| `pulse-range` | 3,560 |
| `hzn-range` | 3,561 |
| `desire-range` | 3,562 |
| `fear-range` | 3,563 |
| `hormones-range` | 3,564 |
| `pressure-range` | 3,565 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 158 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 247 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 298 | yearly calendar — one card per year, grouped into five eras |
| 305 | season strip |
| 332 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 399 | tab bar (app-style segmented navigation) |
| 434 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 459 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 568 | journal (editorial content tab) |
| 574 | content tab: reading companion |
| 623 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 848 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 864 | the reading, after the blood-panel design Keren sent: title, then the figure, flagged in |
| 868 | the panel bar. Keren, V479: "if there's a normal range, I would want to see it in a consistent |
| 874 | one row, as the panel Keren sent lays a marker out: name and figure on the left, the spectrum |
| 884 | the reading's own container, below the history (Keren, V520). `seatBandReading` moves whatever the page |
| 989 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 1,064 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,282 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,312 | Rhymes: today beside one past top |
| 1,337 | A closed cycle's categories |
| 1,360 | hero: yield curve |
| 1,407 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,434 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,463 | yield-by-maturity comparison chart: pill toggles; the marks reuse .gdp-line/.gdp-dot/.gdp-tooltip, |
| 1,480 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,490 | long cycle (structural layer) |
| 1,523 | indicator grid |
| 1,549 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 1,563 | info icon + popover (progressive disclosure for longer notes) |
| 1,577 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,662 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (145), which is what the renderers fill:

| Line | id |
|---|---|
| 1,678 | `topbar-back` |
| 1,681 | `topbar-title` |
| 1,682 | `menu-btn` |
| 1,696 | `main` |
| 1,699 | `cycle-view` |
| 1,702 | `cycle-kicker` |
| 1,705 | `cycle-dial` |
| 1,707 | `season-wheel-hub-date` |
| 1,708 | `season-wheel-hub-theme` |
| 1,709 | `season-wheel-hub-detail` |
| 1,715 | `temp-card` |
| 1,717 | `temp-kicker` |
| 1,718 | `temp-sub` |
| 1,721 | `temp-svg` |
| 1,722 | `temp-tooltip` |
| 1,724 | `temp-stats` |
| 1,727 | `growth-card` |
| 1,728 | `growth-kicker` |
| 1,728 | `growth-phase` |
| 1,728 | `growth-sub` |
| 1,729 | `growth-svg` |
| 1,729 | `growth-tooltip` |
| 1,730 | `growth-stats` |
| 1,735 | `today-analysis` |
| 1,736 | `peek-row` |
| 1,737 | `sheet-metric-temp` |
| 1,738 | `temp-timing` |
| 1,739 | `temp-chart` |
| 1,740 | `temp-rangebar` |
| 1,742 | `temp-head` |
| 1,743 | `slot-temp` |
| 1,744 | `temp-history` |
| 1,745 | `temp-hist-tooltip` |
| 1,746 | `temp-trend` |
| 1,748 | `temp-highlights` |
| 1,750 | `sheet-metric-gdp` |
| 1,751 | `gdp-timing` |
| 1,752 | `gdp-chart` |
| 1,753 | `gdp-rangebar` |
| 1,755 | `gdp-head` |
| 1,756 | `slot-growth` |
| 1,757 | `gdp-history` |
| 1,758 | `gdp-hist-tooltip` |
| 1,759 | `gdp-yoy` |
| 1,760 | `gdp-trend` |
| 1,761 | `gdp-panel` |
| 1,765 | `subj-ring-gdp` |
| 1,767 | `subj-label-gdp` |
| 1,768 | `subj-value-gdp` |
| 1,769 | `subj-say-gdp` |
| 1,770 | `subj-spark-gdp` |
| 1,775 | `subj-ctx-gdp` |
| 1,778 | `gdp-highlights` |
| 1,781 | `sheet-metric-power` |
| 1,782 | `power-timing` |
| 1,783 | `power-head` |
| 1,784 | `power-chart` |
| 1,787 | `subj-ring-resilience` |
| 1,790 | `subj-value-resilience` |
| 1,791 | `subj-say-resilience` |
| 1,796 | `subj-ctx-resilience` |
| 1,800 | `longcycle-title` |
| 1,802 | `longcycle-tag` |
| 1,808 | `power-highlights` |
| 1,811 | `sheet-marker-deficit` |
| 1,813 | `sheet-metric-households` |
| 1,814 | `households-timing` |
| 1,815 | `households-chart` |
| 1,816 | `households-highlights` |
| 1,819 | `sheet-metric-valuation` |
| 1,820 | `valuation-timing` |
| 1,821 | `valuation-head` |
| 1,822 | `valuation-chart` |
| 1,825 | `subj-ring-valuation` |
| 1,828 | `subj-value-valuation` |
| 1,829 | `subj-say-valuation` |
| 1,834 | `subj-ctx-valuation` |
| 1,838 | `valuation-title` |
| 1,840 | `valuation-tag` |
| 1,845 | `valuation-highlights` |
| 1,852 | `subj-value-hormones` |
| 1,853 | `subj-say-hormones` |
| 1,859 | `hormones-history` |
| 1,860 | `hormones-insights` |
| 1,869 | `subj-value-horizon` |
| 1,870 | `subj-say-horizon` |
| 1,871 | `subj-spark-horizon` |
| 1,877 | `hzn-timeline` |
| 1,879 | `hzn-head` |
| 1,880 | `spread-history-shell` |
| 1,881 | `spread-history-svg` |
| 1,882 | `spread-history-tooltip` |
| 1,884 | `hzn-trend` |
| 1,886 | `horizon-insights` |
| 1,895 | `subj-value-pressure` |
| 1,896 | `subj-say-pressure` |
| 1,902 | `pressure-timeline` |
| 1,904 | `pressure-head` |
| 1,905 | `ylm-shell` |
| 1,906 | `ylm-svg` |
| 1,907 | `ylm-tooltip` |
| 1,909 | `ylm-trend` |
| 1,911 | `pressure-insights` |
| 1,918 | `subj-ring-sentiment` |
| 1,921 | `subj-value-sentiment` |
| 1,922 | `subj-say-sentiment` |
| 1,923 | `subj-spark-sentiment` |
| 1,929 | `fear-history` |
| 1,930 | `curve-highlights` |
| 1,936 | `signs-list` |
| 1,942 | `calendar-list` |
| 1,943 | `rhymes-card` |
| 1,952 | `rhy-pick` |
| 1,953 | `rhy-body` |
| 1,961 | `cycle-list` |
| 1,962 | `cycle-more` |
| 1,963 | `cycle-more-label` |
| 1,968 | `calendar-cycle` |
| 1,969 | `calendar-cycle-slot` |
| 1,970 | `cycle-cats` |
| 2,003 | `seasons-kicker` |
| 2,004 | `seasons-rows` |
| 2,008 | `framework-kicker` |
| 2,010 | `framework-rows` |
| 2,015 | `more-menu` |
| 2,018 | `menu-back` |
| 2,032 | `sources-open` |
| 2,040 | `appearance-current` |
| 2,046 | `sheet-howto` |
| 2,089 | `sheet-book` |
| 2,117 | `sheet-appearance` |
| 2,125 | `theme-toggle` |
| 2,132 | `sheet-contact` |
| 2,141 | `contact-form` |
| 2,142 | `contact-title` |
| 2,143 | `contact-message` |
| 2,145 | `contact-hint` |
| 2,146 | `contact-send` |
| 2,152 | `sheet-sources` |
| 2,155 | `sources-back` |
| 2,160 | `asof-text` |
| 2,161 | `sources-groups` |
| 2,167 | `detail-backdrop` |
| 2,169 | `detail-modal-close` |
| 2,170 | `detail-modal-body` |

## Finding things fast

| To find | grep for |
|---|---|
| a figure's literal value | `var <name> = ` — the data objects are all top-level vars in the DATA section |
| what a history page draws | `HIST_HEAD` for its head, then `sheetRenderers["<id>"]` for its renderer |
| where a band comes from | the constant name, then read its `(i)` text — every band states its provenance |
| a season decision | `readSeason(`, `seasonTrackAll`, `cycleModel(` |
| why something looks the way it does | `docs/DECISIONS.md` for Keren's decisions, `docs/ARCHITECTURE.md` for the reasons, `git log -S` for the history |
| a live-data wiring | `LIVE("` — one line per document, each directly under its literal |
| a CSS rule's only home | the class name; rules under `.detail-modal`, `.metric-sheet`, `.sign-detail` are scoped and must be restated for a new host |

