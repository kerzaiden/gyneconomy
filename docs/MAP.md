# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,813 lines**, about 1231 KB, roughly **350 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `701d1b7` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,143 | the whole stylesheet, every token and rule |
| **Markup** | 3,144–3,920 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,921–14,760 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,761–14,813 | </body></html> |

Counts: **266** top-level functions, **180** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,926_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,930 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,931 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,932 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,950 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,954 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,959_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,969 | `wheelMeta` | `var wheelMeta =` |
| 3,980 | `seasonOverride` | `var seasonOverride =` |
| 3,983 | `cycleNowNote` | `var cycleNowNote =` |
| 3,992 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,078 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,123 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,136_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,153 | `LIVE` | `function LIVE(` |
| 4,180 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,188 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,189 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,192_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,223 | `repaintFigureText` | `function repaintFigureText(` |
| 4,236 | `repaintRow` | `function repaintRow(` |
| 4,249 | `repaintTag` | `function repaintTag(` |
| 4,259 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,284 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,292 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,300 | `REPAINT` | `var REPAINT =` |
| 4,317 | `liveAsOf` | `var liveAsOf =` |
| 4,318 | `fmtAsOf` | `function fmtAsOf(` |
| 4,323 | `applyLive` | `function applyLive(` |
| 4,402 | `repaintPolicy` | `function repaintPolicy(` |
| 4,456 | `GYN` | `var GYN =` |
| 4,476 | `refreshLiveData` | `function refreshLiveData(` |
| 4,517 | `fetchSiteData` | `function fetchSiteData(` |
| 4,547 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,561_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,562 | `yieldCurve` | `var yieldCurve =` |
| 4,575 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,599 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,611 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,639_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,644 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,668 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,692 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,716 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,743 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,768_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,777 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,787 | `uninvLagToday` | `var uninvLagToday =` |
| 4,799 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,812 | `gdpPeers` | `var gdpPeers =` |
| 4,853 | `gdpSrc` | `var gdpSrc =` |
| 4,854 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,859 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,872 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,910_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,932 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,942_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,958 | `stressScoreFor` | `function stressScoreFor(` |
| 4,964 | `stressScore` | `var stressScore =` |
| 4,970 | `powerOf` | `var powerOf =` |
| 4,971 | `powerScore` | `var powerScore =` |
| 4,988 | `stressHistory` | `var stressHistory =` |
| 4,999 | `powerMeter` | `var powerMeter =` |
| 5,001 | `stressNoteFull` | `var stressNoteFull =` |
| 5,033 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,035_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,058 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,059 | `deficitHistory` | `var deficitHistory =` |
| 5,062 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,069 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,071 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,119 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,120 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,121 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,138_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,151 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,164_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,178 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,181 | `timelineSpan` | `function timelineSpan(` |
| 5,187 | `timelineFor` | `function timelineFor(` |
| 5,200 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,206_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,212 | `windowScale` | `function windowScale(` |
| 5,228 | `windowYears` | `function windowYears(` |
| 5,246 | `refName` | `function refName(` |
| 5,253 | `histReadEnsure` | `function histReadEnsure(` |
| 5,292 | `seatBandReading` | `function seatBandReading(` |
| 5,315 | `histReadFill` | `function histReadFill(` |
| 5,443 | `histAxisEnds` | `function histAxisEnds(` |
| 5,454 | `histLegend` | `function histLegend(` |
| 5,542 | `refitHistory` | `function refitHistory(` |
| 5,554 | `wireHistHover` | `function wireHistHover(` |
| 5,634 | `mWindowFrom` | `function mWindowFrom(` |
| 5,639 | `qWindowFrom` | `function qWindowFrom(` |
| 5,644 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,645 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,647 | `DEF_1983` | `var DEF_1983 =` |
| 5,649 | `defFrom` | `function defFrom(` |
| 5,660 | `deficitChart` | `function deficitChart(` |
| 5,749 | `deficitBlock` | `function deficitBlock(` |
| 5,811 | `buffettHistory` | `var buffettHistory =` |
| 5,841 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,842 | `hyDates` | `var hyDates =` |
| 5,843 | `hyOas` | `var hyOas =` |
| 5,844 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,851 | `hyAt` | `function hyAt(` |
| 5,855 | `hyLabel` | `function hyLabel(` |
| 5,856 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,857 | `hyNum` | `function hyNum(` |
| 5,858 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,868 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,878 | `capeHistory` | `var capeHistory =` |
| 5,880 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,898_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,904 | `sentiment` | `var sentiment =` |
| 5,922 | `valuation` | `var valuation =` |
| 5,959 | `valRow` | `function valRow(` |
| 5,967 | `coincident` | `var coincident =` |
| 6,028 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,046 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,047 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,048 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,050_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,063 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,064 | `m2vHistory` | `var m2vHistory =` |
| 6,084 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,176 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,265 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,266 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,306_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,312 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,313 | `DOTS` | `var DOTS =` |
| 6,320 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,354 | `histHead` | `function histHead(` |
| 6,378 | `headNoteIdx` | `var headNoteIdx =` |
| 6,379 | `headMenuHtml` | `function headMenuHtml(` |
| 6,437 | `headMenuFor` | `var headMenuFor =` |
| 6,439 | `headSubFor` | `var headSubFor =` |
| 6,440 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,489 | `nameWithMark` | `function nameWithMark(` |
| 6,495 | `panelRow` | `function panelRow(` |
| 6,528 | `panelFromMeter` | `function panelFromMeter(` |
| 6,542 | `meterFlagged` | `function meterFlagged(` |
| 6,553 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,581 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,595 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,614 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,633 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,647 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,672 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,703 | `desireBlock` | `function desireBlock(` |
| 6,730 | `volumeBlock` | `function volumeBlock(` |
| 6,755 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,778 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,786_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,799 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,800 | `m2Level` | `var m2Level =` |
| 6,822 | `m2Yoy` | `var m2Yoy =` |
| 6,823 | `M2_NORM` | `var M2_NORM =` |
| 6,828 | `volumeVerdict` | `function volumeVerdict(` |
| 6,865 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,866 | `unempHistory` | `var unempHistory =` |
| 6,872 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,887 | `NROU_NOW` | `var NROU_NOW =` |
| 6,888 | `unempState` | `function unempState(` |
| 6,894 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,956_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,965 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,974_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,987 | `checkLendingStandards` | `function checkLendingStandards(` |
| 7,000 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,054 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,121 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,122 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,125 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,133_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,148 | `householdsChart` | `function householdsChart(` |
| 7,215 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,298 | `GDP_NORM` | `var GDP_NORM =` |
| 7,304 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,305 | `gdpNowQ` | `var gdpNowQ =` |
| 7,306 | `gdpMeter` | `var gdpMeter =` |
| 7,309 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,331 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,395 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,458 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,466 | `velocityVerdict` | `function velocityVerdict(` |
| 7,474 | `derivePulseTag` | `function derivePulseTag(` |
| 7,480 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,540_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,549 | `seasonReading` | `var seasonReading =` |
| 7,598 | `frameworkRows` | `var frameworkRows =` |
| 7,608 | `vixRow` | `var vixRow =` |
| 7,616 | `vixWordOf` | `var vixWordOf =` |
| 7,620 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,635_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,639 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,648_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,649 | `calendarTodayY` | `var calendarTodayY =` |
| 7,680 | `vix3mClose` | `var vix3mClose =` |
| 7,681 | `fearCurve` | `function fearCurve(` |
| 7,688 | `curveVerdict` | `function curveVerdict(` |
| 7,695 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,700 | `valuationVerdict` | `function valuationVerdict(` |
| 7,718 | `sparkHtml` | `function sparkHtml(` |
| 7,737 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,743_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,756 | `modeBar` | `function modeBar(` |
| 7,771 | `pickerOpen` | `var pickerOpen =` |
| 7,775 | `cycleByName` | `function cycleByName(` |
| 7,779 | `openCycle` | `function openCycle(` |
| 7,785 | `cycleSlice` | `function cycleSlice(` |
| 7,794 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,802 | `cycleMonths` | `function cycleMonths(` |
| 7,821 | `histControls` | `function histControls(` |
| 7,835 | `cycLabel` | `function cycLabel(` |
| 7,851 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,860 | `cyclePicker` | `function cyclePicker(` |
| 7,879 | `rangeBar` | `function rangeBar(` |
| 7,891 | `trendOf` | `function trendOf(` |
| 7,936 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,946 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,967_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,968 | `yearOf` | `function yearOf(` |
| 7,969 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,970_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,008 | `headSigma` | `function headSigma(` |
| 8,016 | `atQuarter` | `function atQuarter(` |
| 8,017 | `atMonth` | `function atMonth(` |
| 8,018 | `cycleAverages` | `function cycleAverages(` |
| 8,025 | `ordinal` | `function ordinal(` |
| 8,026 | `hiCard` | `function hiCard(` |
| 8,037 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,051_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,058 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,074 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,081 | `moreRow` | `function moreRow(` |
| 8,087 | `powerPageNote` | `var powerPageNote =` |
| 8,088 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,100_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,103 | `xLabelOf` | `function xLabelOf(` |
| 8,123 | `fitGroup` | `function fitGroup(` |
| 8,145 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,204_ · 18 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,228 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,238 | `vGrid` | `function vGrid(` |
| 8,263 | `COL_FILL` | `var COL_FILL =` |
| 8,296 | `colPath` | `function colPath(` |
| 8,301 | `colWidth` | `function colWidth(` |
| 8,348 | `AXIS` | `var AXIS =` |
| 8,364 | `histFrame` | `function histFrame(` |
| 8,376 | `xLabel` | `function xLabel(` |
| 8,380 | `crossLine` | `function crossLine(` |
| 8,385 | `zeroRule` | `function zeroRule(` |
| 8,388 | `meanRule` | `function meanRule(` |
| 8,400 | `pendingGeom` | `var pendingGeom =` |
| 8,401 | `publishGeom` | `function publishGeom(` |
| 8,402 | `attachHistory` | `function attachHistory(` |
| 8,411 | `vhOpen` | `function vhOpen(` |
| 8,412 | `chartAxes` | `function chartAxes(` |
| 8,472 | `divergeChart` | `function divergeChart(` |
| 8,540 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,569_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,577 | `maxIn` | `function maxIn(` |
| 8,595 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,609 | `PEEK_W` | `var PEEK_W =` |
| 8,612 | `PEEK_H` | `var PEEK_H =` |
| 8,617 | `colPeek` | `function colPeek(` |
| 8,644 | `meterPeek` | `function meterPeek(` |
| 8,661 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,666 | `pressureZone` | `function pressureZone(` |
| 8,681 | `HZN_BACK` | `var HZN_BACK =` |
| 8,682 | `hznLast` | `function hznLast(` |
| 8,683 | `hznBack` | `function hznBack(` |
| 8,684 | `horizonWord` | `function horizonWord(` |
| 8,709 | `HZN_METERS` | `var HZN_METERS =` |
| 8,717 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,758 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,763 | `RISK_RISK` | `var RISK_RISK =` |
| 8,768 | `riskCell` | `function riskCell(` |
| 8,769 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,800 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,825_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,846 | `pulseClipN` | `var pulseClipN =` |
| 8,847 | `beatPath` | `function beatPath(` |
| 8,872 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,886 | `pulsePeek` | `function pulsePeek(` |
| 8,894 | `pulseBlock` | `function pulseBlock(` |
| 8,914 | `CHEV` | `var CHEV =` |
| 8,916 | `peekCard` | `function peekCard(` |
| 8,970 | `dropSvg` | `function dropSvg(` |
| 8,982 | `volumeSvg` | `function volumeSvg(` |
| 8,989 | `gaugeSvg` | `function gaugeSvg(` |
| 8,993 | `diamondSvg` | `function diamondSvg(` |
| 9,007 | `energyFromReserve` | `function energyFromReserve(` |
| 9,019 | `sproutSvg` | `function sproutSvg(` |
| 9,030 | `markSvg` | `function markSvg(` |
| 9,039 | `pressureSvg` | `function pressureSvg(` |
| 9,043 | `hormoneSvg` | `function hormoneSvg(` |
| 9,049 | `flameSvg` | `function flameSvg(` |
| 9,053 | `gearSvg` | `function gearSvg(` |
| 9,065 | `thermoSvg` | `function thermoSvg(` |
| 9,084 | `trendUpSvg` | `function trendUpSvg(` |
| 9,086 | `ecgSvg` | `function ecgSvg(` |
| 9,100 | `circulationSvg` | `function circulationSvg(` |
| 9,101 | `weatherSvg` | `function weatherSvg(` |
| 9,122 | `moodSvg` | `function moodSvg(` |
| 9,146 | `boltSvg` | `function boltSvg(` |
| 9,149 | `houseSvg` | `function houseSvg(` |
| 9,157 | `sunriseSvg` | `function sunriseSvg(` |
| 9,172 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,183 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,200_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,221 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,222 | `dsrHistory` | `var dsrHistory =` |
| 9,223 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,224 | `savHistory` | `var savHistory =` |
| 9,229 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,239 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,240 | `dsrNow` | `var dsrNow =` |
| 9,241 | `savNow` | `var savNow =` |
| 9,242 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,247 | `householdsWord` | `function householdsWord(` |
| 9,254 | `householdsNow` | `var householdsNow =` |
| 9,261 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,262 | `dsrMeter` | `var dsrMeter =` |
| 9,265 | `savMeter` | `var savMeter =` |
| 9,268 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,285 | `savInfoHtml` | `function savInfoHtml(` |
| 9,303 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,312 | `curveNow` | `var curveNow =` |
| 9,313 | `curveTag` | `var curveTag =` |
| 9,314 | `curveSub` | `var curveSub =` |
| 9,318 | `curvePct` | `function curvePct(` |
| 9,319 | `curveNoteFull` | `var curveNoteFull =` |
| 9,334 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,342 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,383 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,411_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,425 | `marketTops` | `var marketTops =` |
| 9,435 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,440 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,442_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,463 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,464 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,469_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,490 | `slopeOf` | `function slopeOf(` |
| 9,501 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,507 | `readSeason` | `function readSeason(` |
| 9,532 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,534 | `qLabel` | `function qLabel(` |
| 9,558 | `regimeTrack` | `function regimeTrack(` |
| 9,581 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,583_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,590 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,591 | `seasonTitle` | `function seasonTitle(` |
| 9,592 | `monthLabel` | `function monthLabel(` |
| 9,593 | `cycleModel` | `function cycleModel(` |
| 9,645 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,653 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,660 | `nowModel` | `var nowModel =` |
| 9,661 | `readingNow` | `var readingNow =` |
| 9,662 | `cpiNow` | `var cpiNow =` |
| 9,663 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,664 | `currentSeason` | `var currentSeason =` |
| 9,665 | `seasonWhy` | `var seasonWhy =` |
| 9,682 | `seasonGroup` | `function seasonGroup(` |
| 9,696 | `arcGauge` | `function arcGauge(` |
| 9,738 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,751 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,758 | `tsyView` | `var tsyView =` |
| 9,760 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,762 | `spreadLabel` | `function spreadLabel(` |
| 9,769 | `policyFacts` | `function policyFacts(` |
| 9,783 | `policyFactRows` | `function policyFactRows(` |
| 9,789 | `allSources` | `var allSources =` |
| 9,813 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,846_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,849 | `SVG_NS` | `var SVG_NS =` |
| 9,850 | `svgEl` | `function svgEl(` |
| 9,863 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,899_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,900 | `clampPct` | `function clampPct(` |
| 9,907 | `infoIcon` | `function infoIcon(` |
| 9,916 | `detailTexts` | `var detailTexts =` |
| 9,934 | `detailSlots` | `var detailSlots =` |
| 9,935 | `detailSlot` | `function detailSlot(` |
| 9,946 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,950 | `_growthPanel` | `var _growthPanel =` |
| 9,951 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,957 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,968 | `facts` | `function facts(` |
| 9,969 | `factsFrom` | `function factsFrom(` |
| 9,973 | `expandBtn` | `function expandBtn(` |
| 9,979 | `sheetRenderers` | `var sheetRenderers =` |
| 9,996 | `pageMode` | `var pageMode =` |
| 10,003 | `pageCycles` | `var pageCycles =` |
| 10,008 | `pageRange` | `var pageRange =` |
| 10,014 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,048_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,059 | `meterHtml` | `function meterHtml(` |
| 10,090 | `srcBlock` | `function srcBlock(` |
| 10,091 | `srcHtml` | `function srcHtml(` |
| 10,100 | `TIMING` | `var TIMING =` |
| 10,106 | `timingMark` | `function timingMark(` |
| 10,120 | `timingPill` | `function timingPill(` |
| 10,141 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,149 | `seatPageFoot` | `function seatPageFoot(` |
| 10,172 | `timingMembers` | `var timingMembers =` |
| 10,173 | `registerTiming` | `function registerTiming(` |
| 10,179 | `headHtml` | `function headHtml(` |
| 10,197 | `heldHighlights` | `var heldHighlights =` |
| 10,198 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,256_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,257 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,684_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,685 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,907_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,908 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,940_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,946 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,030_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,031 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,049_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,052 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,075_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,087 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,218_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,227 | `lendingWord` | `function lendingWord(` |
| 11,235 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,295_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,296 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,420_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,423 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,545_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,557 | `totalRiseIn` | `function totalRiseIn(` |
| 11,567 | `eraInflation` | `function eraInflation(` |
| 11,578 | `eraGrowth` | `function eraGrowth(` |
| 11,598 | `fmtSigned` | `function fmtSigned(` |
| 11,603 | `regimeArrow` | `function regimeArrow(` |
| 11,609 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,610 | `growthShown` | `function growthShown(` |
| 11,611 | `growthShownCap` | `function growthShownCap(` |
| 11,612 | `regimeState` | `function regimeState(` |
| 11,616 | `phaseClass` | `function phaseClass(` |
| 11,618 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,630 | `cycleViewEl` | `var cycleViewEl =` |
| 11,636 | `tempCard` | `var tempCard =` |
| 11,637 | `placeCharts` | `function placeCharts(` |
| 11,642 | `shownEra` | `var shownEra =` |
| 11,643 | `calendarReset` | `var calendarReset =` |
| 11,644 | `metricPageReset` | `var metricPageReset =` |
| 11,645 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,648 | `topbarBack` | `var topbarBack =` |
| 11,649 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,656_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,657 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,818_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,819 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,837_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,840 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,861_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,867 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,870 | `hubSet` | `function hubSet(` |
| 11,883 | `quarterPopup` | `function quarterPopup(` |
| 11,916 | `hubShowDefault` | `function hubShowDefault(` |
| 11,925 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,931 | `hubShowYear` | `function hubShowYear(` |
| 11,946 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,038_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,041 | `tempState` | `var tempState =` |
| 12,044 | `chartLink` | `var chartLink =` |
| 12,064 | `m2Step` | `function m2Step(` |
| 12,067 | `heatStep` | `function heatStep(` |
| 12,071 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,258_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,261 | `drawGrowth` | `function drawGrowth(` |
| 12,400 | `wireResize` | `function wireResize(` |
| 12,406 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,418_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,419 | `renderCycleView` | `function renderCycleView(` |
| 12,480 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,488_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,499 | `peerChosen` | `function peerChosen(` |
| 12,500 | `peerReaches` | `function peerReaches(` |
| 12,531 | `shownEraModel` | `var shownEraModel =` |
| 12,532 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,534_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,536 | `stripGroupName` | `var stripGroupName =` |
| 12,537 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,583 | `marketStripHtml` | `function marketStripHtml(` |
| 12,646 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,647 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,677_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,678 | `renderCycleList` | `function renderCycleList(` |
| 12,782 | `renderSignsList` | `function renderSignsList(` |
| 13,067 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,339_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,351 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,394_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,402 | `__roster` | `var __roster =` |
| 14,403 | `readingRoster` | `function readingRoster(` |
| 14,458 | `readFig` | `function readFig(` |
| 14,466 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes \u2014 today beside a past top (Version 610, rebuilt in Version 612)

_line 14,473_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,501 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,559_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,560 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,622_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,623 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,656_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,657 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,149–4,152 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,690–8,703 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,541–9,554 | `seasonTrackAll` | The season, computed |
| 9,576–9,580 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,804 |
| `desire-range` | 10,573 |
| `fear-range` | 11,385 |
| `hormones-range` | 11,122 |
| `hzn-range` | 10,677 |
| `hzn-spread` | 10,671 |
| `pressure-range` | 11,262 |
| `pulse-range` | 10,526 |
| `sheet-marker-deficit` | 13,801 |
| `sheet-metric-gdp` | 13,687 |
| `sheet-metric-households` | 13,834 |
| `sheet-metric-power` | 13,764 |
| `sheet-metric-temp` | 13,639 |
| `sheet-metric-valuation` | 13,879 |
| `sheet-sign-activity` | 13,747 |
| `sheet-sign-desire` | 10,574 |
| `sheet-sign-horizon` | 10,678 |
| `sheet-sign-hormones` | 11,125 |
| `sheet-sign-pressure` | 11,263 |
| `sheet-sign-pulse` | 10,525 |
| `sheet-sign-sentiment` | 11,390 |
| `sheet-sign-volume` | 10,548 |
| `volume-range` | 10,549 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,810 |
| `desire-range` | 10,557 |
| `fear-range` | 11,342 |
| `hzn-range` | 10,602 |
| `pulse-range` | 10,507 |
| `sheet-metric-gdp` | 13,688 |
| `sheet-metric-power` | 13,765 |
| `sheet-metric-temp` | 13,640 |
| `sheet-metric-valuation` | 13,880 |
| `volume-range` | 10,530 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,327 |
| `sheet-metric-gdp` | 6,328 |
| `sheet-sign-activity` | 6,335 |
| `sheet-metric-power` | 6,336 |
| `sheet-metric-valuation` | 6,338 |
| `sheet-metric-households` | 6,339 |
| `deficit-range` | 6,340 |
| `volume-range` | 6,341 |
| `pulse-range` | 6,342 |
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
| 483 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels \u2026 so if one day |
| 652 | tab bar (app-style segmented navigation) |
| 719 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 758 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 974 | journal (editorial content tab) |
| 980 | content tab: reading companion |
| 1,038 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,510 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,544 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,554 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,565 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,598 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,778 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,955 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,493 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,534 | Rhymes (Version 610): today beside one past top |
| 2,575 | A closed cycle's categories (Version 613) |
| 2,605 | hero: yield curve |
| 2,682 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,761 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,860 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,885 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,900 | long cycle (structural layer) |
| 2,941 | indicator grid |
| 2,984 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 3,001 | info icon + popover (progressive disclosure for longer notes) |
| 3,022 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,117 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (145), which is what the renderers fill:

| Line | id |
|---|---|
| 3,149 | `topbar-back` |
| 3,152 | `topbar-title` |
| 3,153 | `menu-btn` |
| 3,170 | `main` |
| 3,177 | `cycle-view` |
| 3,185 | `cycle-kicker` |
| 3,191 | `cycle-dial` |
| 3,193 | `season-wheel-hub-date` |
| 3,194 | `season-wheel-hub-theme` |
| 3,195 | `season-wheel-hub-detail` |
| 3,203 | `temp-card` |
| 3,205 | `temp-kicker` |
| 3,206 | `temp-sub` |
| 3,209 | `temp-svg` |
| 3,210 | `temp-tooltip` |
| 3,216 | `temp-stats` |
| 3,223 | `growth-card` |
| 3,226 | `growth-kicker` |
| 3,226 | `growth-phase` |
| 3,226 | `growth-sub` |
| 3,227 | `growth-svg` |
| 3,227 | `growth-tooltip` |
| 3,232 | `growth-stats` |
| 3,241 | `today-analysis` |
| 3,245 | `peek-row` |
| 3,249 | `sheet-metric-temp` |
| 3,250 | `temp-timing` |
| 3,251 | `temp-chart` |
| 3,253 | `temp-rangebar` |
| 3,255 | `temp-head` |
| 3,256 | `slot-temp` |
| 3,257 | `temp-history` |
| 3,258 | `temp-hist-tooltip` |
| 3,261 | `temp-trend` |
| 3,265 | `temp-highlights` |
| 3,268 | `sheet-metric-gdp` |
| 3,269 | `gdp-timing` |
| 3,270 | `gdp-chart` |
| 3,271 | `gdp-rangebar` |
| 3,273 | `gdp-head` |
| 3,274 | `slot-growth` |
| 3,275 | `gdp-history` |
| 3,276 | `gdp-hist-tooltip` |
| 3,277 | `gdp-yoy` |
| 3,287 | `gdp-trend` |
| 3,289 | `gdp-panel` |
| 3,294 | `subj-ring-gdp` |
| 3,296 | `subj-label-gdp` |
| 3,297 | `subj-value-gdp` |
| 3,298 | `subj-say-gdp` |
| 3,299 | `subj-spark-gdp` |
| 3,304 | `subj-ctx-gdp` |
| 3,307 | `gdp-highlights` |
| 3,315 | `sheet-metric-power` |
| 3,316 | `power-timing` |
| 3,317 | `power-head` |
| 3,318 | `power-chart` |
| 3,322 | `subj-ring-resilience` |
| 3,325 | `subj-value-resilience` |
| 3,326 | `subj-say-resilience` |
| 3,331 | `subj-ctx-resilience` |
| 3,335 | `longcycle-title` |
| 3,337 | `longcycle-tag` |
| 3,351 | `power-highlights` |
| 3,358 | `sheet-marker-deficit` |
| 3,364 | `sheet-metric-households` |
| 3,365 | `households-timing` |
| 3,366 | `households-chart` |
| 3,367 | `households-highlights` |
| 3,371 | `sheet-metric-valuation` |
| 3,372 | `valuation-timing` |
| 3,373 | `valuation-head` |
| 3,374 | `valuation-chart` |
| 3,378 | `subj-ring-valuation` |
| 3,381 | `subj-value-valuation` |
| 3,382 | `subj-say-valuation` |
| 3,387 | `subj-ctx-valuation` |
| 3,391 | `valuation-title` |
| 3,393 | `valuation-tag` |
| 3,400 | `valuation-highlights` |
| 3,424 | `subj-value-hormones` |
| 3,425 | `subj-say-hormones` |
| 3,433 | `hormones-history` |
| 3,443 | `hormones-insights` |
| 3,469 | `subj-value-horizon` |
| 3,470 | `subj-say-horizon` |
| 3,471 | `subj-spark-horizon` |
| 3,481 | `hzn-timeline` |
| 3,483 | `hzn-head` |
| 3,484 | `spread-history-shell` |
| 3,485 | `spread-history-svg` |
| 3,486 | `spread-history-tooltip` |
| 3,491 | `ylm-shell` |
| 3,492 | `ylm-svg` |
| 3,493 | `ylm-tooltip` |
| 3,496 | `hzn-trend` |
| 3,497 | `ylm-trend` |
| 3,499 | `horizon-insights` |
| 3,527 | `subj-value-pressure` |
| 3,528 | `subj-say-pressure` |
| 3,533 | `pressure-history` |
| 3,534 | `pressure-highlights` |
| 3,540 | `subj-ring-sentiment` |
| 3,543 | `subj-value-sentiment` |
| 3,544 | `subj-say-sentiment` |
| 3,545 | `subj-spark-sentiment` |
| 3,559 | `fear-history` |
| 3,560 | `curve-highlights` |
| 3,574 | `signs-list` |
| 3,585 | `calendar-list` |
| 3,590 | `indicators-peek` |
| 3,599 | `rhymes-card` |
| 3,610 | `rhy-pick` |
| 3,611 | `rhy-body` |
| 3,658 | `cycle-list` |
| 3,664 | `cycle-more` |
| 3,665 | `cycle-more-label` |
| 3,674 | `calendar-cycle` |
| 3,675 | `calendar-cycle-slot` |
| 3,682 | `cycle-cats` |
| 3,733 | `seasons-kicker` |
| 3,734 | `seasons-rows` |
| 3,738 | `framework-kicker` |
| 3,740 | `framework-rows` |
| 3,747 | `more-menu` |
| 3,750 | `menu-back` |
| 3,764 | `sources-open` |
| 3,772 | `appearance-current` |
| 3,780 | `sheet-howto` |
| 3,824 | `sheet-book` |
| 3,856 | `sheet-appearance` |
| 3,864 | `theme-toggle` |
| 3,871 | `sheet-contact` |
| 3,880 | `contact-form` |
| 3,881 | `contact-title` |
| 3,882 | `contact-message` |
| 3,884 | `contact-hint` |
| 3,885 | `contact-send` |
| 3,894 | `sheet-sources` |
| 3,897 | `sources-back` |
| 3,904 | `asof-text` |
| 3,905 | `sources-groups` |
| 3,912 | `detail-backdrop` |
| 3,914 | `detail-modal-close` |
| 3,915 | `detail-modal-body` |

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

