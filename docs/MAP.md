# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,820 lines**, about 1232 KB, roughly **350 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `935e02a` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,143 | the whole stylesheet, every token and rule |
| **Markup** | 3,144–3,920 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,921–14,767 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,768–14,820 | </body></html> |

Counts: **264** top-level functions, **180** top-level vars, **4** top-level IIFEs in the script.

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

_line 4,192_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,245 | `paintReading` | `function paintReading(` |
| 4,268 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,293 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,301 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,308 | `REPAINT` | `var REPAINT =` |
| 4,325 | `liveAsOf` | `var liveAsOf =` |
| 4,326 | `fmtAsOf` | `function fmtAsOf(` |
| 4,331 | `applyLive` | `function applyLive(` |
| 4,410 | `repaintPolicy` | `function repaintPolicy(` |
| 4,463 | `GYN` | `var GYN =` |
| 4,483 | `refreshLiveData` | `function refreshLiveData(` |
| 4,524 | `fetchSiteData` | `function fetchSiteData(` |
| 4,554 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,568_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,569 | `yieldCurve` | `var yieldCurve =` |
| 4,582 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,606 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,618 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,646_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,651 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,675 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,699 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,723 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,750 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,775_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,784 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,794 | `uninvLagToday` | `var uninvLagToday =` |
| 4,806 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,819 | `gdpPeers` | `var gdpPeers =` |
| 4,860 | `gdpSrc` | `var gdpSrc =` |
| 4,861 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,866 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,879 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,917_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,939 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,949_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,965 | `stressScoreFor` | `function stressScoreFor(` |
| 4,971 | `stressScore` | `var stressScore =` |
| 4,977 | `powerOf` | `var powerOf =` |
| 4,978 | `powerScore` | `var powerScore =` |
| 4,995 | `stressHistory` | `var stressHistory =` |
| 5,006 | `powerMeter` | `var powerMeter =` |
| 5,008 | `stressNoteFull` | `var stressNoteFull =` |
| 5,040 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,042_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,065 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,066 | `deficitHistory` | `var deficitHistory =` |
| 5,069 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,076 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,078 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,126 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,127 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,128 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,145_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,158 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,171_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,185 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,188 | `timelineSpan` | `function timelineSpan(` |
| 5,194 | `timelineFor` | `function timelineFor(` |
| 5,207 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,213_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,219 | `windowScale` | `function windowScale(` |
| 5,235 | `windowYears` | `function windowYears(` |
| 5,253 | `refName` | `function refName(` |
| 5,260 | `histReadEnsure` | `function histReadEnsure(` |
| 5,299 | `seatBandReading` | `function seatBandReading(` |
| 5,322 | `histReadFill` | `function histReadFill(` |
| 5,450 | `histAxisEnds` | `function histAxisEnds(` |
| 5,461 | `histLegend` | `function histLegend(` |
| 5,549 | `refitHistory` | `function refitHistory(` |
| 5,561 | `wireHistHover` | `function wireHistHover(` |
| 5,641 | `mWindowFrom` | `function mWindowFrom(` |
| 5,646 | `qWindowFrom` | `function qWindowFrom(` |
| 5,651 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,652 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,654 | `DEF_1983` | `var DEF_1983 =` |
| 5,656 | `defFrom` | `function defFrom(` |
| 5,667 | `deficitChart` | `function deficitChart(` |
| 5,756 | `deficitBlock` | `function deficitBlock(` |
| 5,818 | `buffettHistory` | `var buffettHistory =` |
| 5,848 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,849 | `hyDates` | `var hyDates =` |
| 5,850 | `hyOas` | `var hyOas =` |
| 5,851 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,858 | `hyAt` | `function hyAt(` |
| 5,862 | `hyLabel` | `function hyLabel(` |
| 5,863 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,864 | `hyNum` | `function hyNum(` |
| 5,865 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,875 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,885 | `capeHistory` | `var capeHistory =` |
| 5,887 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,905_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,911 | `sentiment` | `var sentiment =` |
| 5,929 | `valuation` | `var valuation =` |
| 5,966 | `valRow` | `function valRow(` |
| 5,974 | `coincident` | `var coincident =` |
| 6,035 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,053 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,054 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,055 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,057_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,070 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,071 | `m2vHistory` | `var m2vHistory =` |
| 6,091 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,183 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,272 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,273 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,313_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,319 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,320 | `DOTS` | `var DOTS =` |
| 6,327 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,361 | `histHead` | `function histHead(` |
| 6,385 | `headNoteIdx` | `var headNoteIdx =` |
| 6,386 | `headMenuHtml` | `function headMenuHtml(` |
| 6,444 | `headMenuFor` | `var headMenuFor =` |
| 6,446 | `headSubFor` | `var headSubFor =` |
| 6,447 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,496 | `nameWithMark` | `function nameWithMark(` |
| 6,502 | `panelRow` | `function panelRow(` |
| 6,535 | `panelFromMeter` | `function panelFromMeter(` |
| 6,549 | `meterFlagged` | `function meterFlagged(` |
| 6,560 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,588 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,602 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,621 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,640 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,654 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,679 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,710 | `desireBlock` | `function desireBlock(` |
| 6,737 | `volumeBlock` | `function volumeBlock(` |
| 6,762 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,785 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,793_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,806 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,807 | `m2Level` | `var m2Level =` |
| 6,829 | `m2Yoy` | `var m2Yoy =` |
| 6,830 | `M2_NORM` | `var M2_NORM =` |
| 6,835 | `volumeVerdict` | `function volumeVerdict(` |
| 6,872 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,873 | `unempHistory` | `var unempHistory =` |
| 6,879 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,894 | `NROU_NOW` | `var NROU_NOW =` |
| 6,895 | `unempState` | `function unempState(` |
| 6,901 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,963_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,972 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,981_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,994 | `checkLendingStandards` | `function checkLendingStandards(` |
| 7,007 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,061 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,128 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,129 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,132 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,140_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,155 | `householdsChart` | `function householdsChart(` |
| 7,222 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,305 | `GDP_NORM` | `var GDP_NORM =` |
| 7,311 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,312 | `gdpNowQ` | `var gdpNowQ =` |
| 7,313 | `gdpMeter` | `var gdpMeter =` |
| 7,316 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,338 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,402 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,465 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,473 | `velocityVerdict` | `function velocityVerdict(` |
| 7,481 | `derivePulseTag` | `function derivePulseTag(` |
| 7,487 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,547_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,556 | `seasonReading` | `var seasonReading =` |
| 7,605 | `frameworkRows` | `var frameworkRows =` |
| 7,615 | `vixRow` | `var vixRow =` |
| 7,623 | `vixWordOf` | `var vixWordOf =` |
| 7,627 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,642_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,646 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,655_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,656 | `calendarTodayY` | `var calendarTodayY =` |
| 7,687 | `vix3mClose` | `var vix3mClose =` |
| 7,688 | `fearCurve` | `function fearCurve(` |
| 7,695 | `curveVerdict` | `function curveVerdict(` |
| 7,702 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,707 | `valuationVerdict` | `function valuationVerdict(` |
| 7,725 | `sparkHtml` | `function sparkHtml(` |
| 7,744 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,750_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,763 | `modeBar` | `function modeBar(` |
| 7,778 | `pickerOpen` | `var pickerOpen =` |
| 7,782 | `cycleByName` | `function cycleByName(` |
| 7,786 | `openCycle` | `function openCycle(` |
| 7,792 | `cycleSlice` | `function cycleSlice(` |
| 7,801 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,809 | `cycleMonths` | `function cycleMonths(` |
| 7,828 | `histControls` | `function histControls(` |
| 7,842 | `cycLabel` | `function cycLabel(` |
| 7,858 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,867 | `cyclePicker` | `function cyclePicker(` |
| 7,886 | `rangeBar` | `function rangeBar(` |
| 7,898 | `trendOf` | `function trendOf(` |
| 7,943 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,953 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,974_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,975 | `yearOf` | `function yearOf(` |
| 7,976 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,977_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,015 | `headSigma` | `function headSigma(` |
| 8,023 | `atQuarter` | `function atQuarter(` |
| 8,024 | `atMonth` | `function atMonth(` |
| 8,025 | `cycleAverages` | `function cycleAverages(` |
| 8,032 | `ordinal` | `function ordinal(` |
| 8,033 | `hiCard` | `function hiCard(` |
| 8,044 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,058_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,065 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,081 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,088 | `moreRow` | `function moreRow(` |
| 8,094 | `powerPageNote` | `var powerPageNote =` |
| 8,095 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,107_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,110 | `xLabelOf` | `function xLabelOf(` |
| 8,130 | `fitGroup` | `function fitGroup(` |
| 8,152 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,211_ · 18 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,235 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,245 | `vGrid` | `function vGrid(` |
| 8,270 | `COL_FILL` | `var COL_FILL =` |
| 8,303 | `colPath` | `function colPath(` |
| 8,308 | `colWidth` | `function colWidth(` |
| 8,355 | `AXIS` | `var AXIS =` |
| 8,371 | `histFrame` | `function histFrame(` |
| 8,383 | `xLabel` | `function xLabel(` |
| 8,387 | `crossLine` | `function crossLine(` |
| 8,392 | `zeroRule` | `function zeroRule(` |
| 8,395 | `meanRule` | `function meanRule(` |
| 8,407 | `pendingGeom` | `var pendingGeom =` |
| 8,408 | `publishGeom` | `function publishGeom(` |
| 8,409 | `attachHistory` | `function attachHistory(` |
| 8,418 | `vhOpen` | `function vhOpen(` |
| 8,419 | `chartAxes` | `function chartAxes(` |
| 8,479 | `divergeChart` | `function divergeChart(` |
| 8,547 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,576_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,584 | `maxIn` | `function maxIn(` |
| 8,602 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,616 | `PEEK_W` | `var PEEK_W =` |
| 8,619 | `PEEK_H` | `var PEEK_H =` |
| 8,624 | `colPeek` | `function colPeek(` |
| 8,651 | `meterPeek` | `function meterPeek(` |
| 8,668 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,673 | `pressureZone` | `function pressureZone(` |
| 8,688 | `HZN_BACK` | `var HZN_BACK =` |
| 8,689 | `hznLast` | `function hznLast(` |
| 8,690 | `hznBack` | `function hznBack(` |
| 8,691 | `horizonWord` | `function horizonWord(` |
| 8,716 | `HZN_METERS` | `var HZN_METERS =` |
| 8,724 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,765 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,770 | `RISK_RISK` | `var RISK_RISK =` |
| 8,775 | `riskCell` | `function riskCell(` |
| 8,776 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,807 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,832_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,853 | `pulseClipN` | `var pulseClipN =` |
| 8,854 | `beatPath` | `function beatPath(` |
| 8,879 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,893 | `pulsePeek` | `function pulsePeek(` |
| 8,901 | `pulseBlock` | `function pulseBlock(` |
| 8,921 | `CHEV` | `var CHEV =` |
| 8,923 | `peekCard` | `function peekCard(` |
| 8,977 | `dropSvg` | `function dropSvg(` |
| 8,989 | `volumeSvg` | `function volumeSvg(` |
| 8,996 | `gaugeSvg` | `function gaugeSvg(` |
| 9,000 | `diamondSvg` | `function diamondSvg(` |
| 9,014 | `energyFromReserve` | `function energyFromReserve(` |
| 9,026 | `sproutSvg` | `function sproutSvg(` |
| 9,037 | `markSvg` | `function markSvg(` |
| 9,046 | `pressureSvg` | `function pressureSvg(` |
| 9,050 | `hormoneSvg` | `function hormoneSvg(` |
| 9,056 | `flameSvg` | `function flameSvg(` |
| 9,060 | `gearSvg` | `function gearSvg(` |
| 9,072 | `thermoSvg` | `function thermoSvg(` |
| 9,091 | `trendUpSvg` | `function trendUpSvg(` |
| 9,093 | `ecgSvg` | `function ecgSvg(` |
| 9,107 | `circulationSvg` | `function circulationSvg(` |
| 9,108 | `weatherSvg` | `function weatherSvg(` |
| 9,129 | `moodSvg` | `function moodSvg(` |
| 9,153 | `boltSvg` | `function boltSvg(` |
| 9,156 | `houseSvg` | `function houseSvg(` |
| 9,164 | `sunriseSvg` | `function sunriseSvg(` |
| 9,179 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,190 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,207_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,228 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,229 | `dsrHistory` | `var dsrHistory =` |
| 9,230 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,231 | `savHistory` | `var savHistory =` |
| 9,236 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,246 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,247 | `dsrNow` | `var dsrNow =` |
| 9,248 | `savNow` | `var savNow =` |
| 9,249 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,254 | `householdsWord` | `function householdsWord(` |
| 9,261 | `householdsNow` | `var householdsNow =` |
| 9,268 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,269 | `dsrMeter` | `var dsrMeter =` |
| 9,272 | `savMeter` | `var savMeter =` |
| 9,275 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,292 | `savInfoHtml` | `function savInfoHtml(` |
| 9,310 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,319 | `curveNow` | `var curveNow =` |
| 9,320 | `curveTag` | `var curveTag =` |
| 9,321 | `curveSub` | `var curveSub =` |
| 9,325 | `curvePct` | `function curvePct(` |
| 9,326 | `curveNoteFull` | `var curveNoteFull =` |
| 9,341 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,349 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,390 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,418_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,432 | `marketTops` | `var marketTops =` |
| 9,442 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,447 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,449_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,470 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,471 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,476_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,497 | `slopeOf` | `function slopeOf(` |
| 9,508 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,514 | `readSeason` | `function readSeason(` |
| 9,539 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,541 | `qLabel` | `function qLabel(` |
| 9,565 | `regimeTrack` | `function regimeTrack(` |
| 9,588 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,590_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,597 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,598 | `seasonTitle` | `function seasonTitle(` |
| 9,599 | `monthLabel` | `function monthLabel(` |
| 9,600 | `cycleModel` | `function cycleModel(` |
| 9,652 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,660 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,667 | `nowModel` | `var nowModel =` |
| 9,668 | `readingNow` | `var readingNow =` |
| 9,669 | `cpiNow` | `var cpiNow =` |
| 9,670 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,671 | `currentSeason` | `var currentSeason =` |
| 9,672 | `seasonWhy` | `var seasonWhy =` |
| 9,689 | `seasonGroup` | `function seasonGroup(` |
| 9,703 | `arcGauge` | `function arcGauge(` |
| 9,745 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,758 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,765 | `tsyView` | `var tsyView =` |
| 9,767 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,769 | `spreadLabel` | `function spreadLabel(` |
| 9,776 | `policyFacts` | `function policyFacts(` |
| 9,790 | `policyFactRows` | `function policyFactRows(` |
| 9,796 | `allSources` | `var allSources =` |
| 9,820 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,853_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,856 | `SVG_NS` | `var SVG_NS =` |
| 9,857 | `svgEl` | `function svgEl(` |
| 9,870 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,906_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,907 | `clampPct` | `function clampPct(` |
| 9,914 | `infoIcon` | `function infoIcon(` |
| 9,923 | `detailTexts` | `var detailTexts =` |
| 9,941 | `detailSlots` | `var detailSlots =` |
| 9,942 | `detailSlot` | `function detailSlot(` |
| 9,953 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,957 | `_growthPanel` | `var _growthPanel =` |
| 9,958 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,964 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,975 | `facts` | `function facts(` |
| 9,976 | `factsFrom` | `function factsFrom(` |
| 9,980 | `expandBtn` | `function expandBtn(` |
| 9,986 | `sheetRenderers` | `var sheetRenderers =` |
| 10,003 | `pageMode` | `var pageMode =` |
| 10,010 | `pageCycles` | `var pageCycles =` |
| 10,015 | `pageRange` | `var pageRange =` |
| 10,021 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,055_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,066 | `meterHtml` | `function meterHtml(` |
| 10,097 | `srcBlock` | `function srcBlock(` |
| 10,098 | `srcHtml` | `function srcHtml(` |
| 10,107 | `TIMING` | `var TIMING =` |
| 10,113 | `timingMark` | `function timingMark(` |
| 10,127 | `timingPill` | `function timingPill(` |
| 10,148 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,156 | `seatPageFoot` | `function seatPageFoot(` |
| 10,179 | `timingMembers` | `var timingMembers =` |
| 10,180 | `registerTiming` | `function registerTiming(` |
| 10,186 | `headHtml` | `function headHtml(` |
| 10,204 | `heldHighlights` | `var heldHighlights =` |
| 10,205 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,263_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,264 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,691_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,692 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,914_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,915 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,947_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,953 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,037_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,038 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,056_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,059 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,082_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,094 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,225_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,234 | `lendingWord` | `function lendingWord(` |
| 11,242 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,302_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,303 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,427_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,430 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,552_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,564 | `totalRiseIn` | `function totalRiseIn(` |
| 11,574 | `eraInflation` | `function eraInflation(` |
| 11,585 | `eraGrowth` | `function eraGrowth(` |
| 11,605 | `fmtSigned` | `function fmtSigned(` |
| 11,610 | `regimeArrow` | `function regimeArrow(` |
| 11,616 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,617 | `growthShown` | `function growthShown(` |
| 11,618 | `growthShownCap` | `function growthShownCap(` |
| 11,619 | `regimeState` | `function regimeState(` |
| 11,623 | `phaseClass` | `function phaseClass(` |
| 11,625 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,637 | `cycleViewEl` | `var cycleViewEl =` |
| 11,643 | `tempCard` | `var tempCard =` |
| 11,644 | `placeCharts` | `function placeCharts(` |
| 11,649 | `shownEra` | `var shownEra =` |
| 11,650 | `calendarReset` | `var calendarReset =` |
| 11,651 | `metricPageReset` | `var metricPageReset =` |
| 11,652 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,655 | `topbarBack` | `var topbarBack =` |
| 11,656 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,663_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,664 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,825_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,826 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,844_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,847 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,868_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,874 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,877 | `hubSet` | `function hubSet(` |
| 11,890 | `quarterPopup` | `function quarterPopup(` |
| 11,923 | `hubShowDefault` | `function hubShowDefault(` |
| 11,932 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,938 | `hubShowYear` | `function hubShowYear(` |
| 11,953 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,045_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,048 | `tempState` | `var tempState =` |
| 12,051 | `chartLink` | `var chartLink =` |
| 12,071 | `m2Step` | `function m2Step(` |
| 12,074 | `heatStep` | `function heatStep(` |
| 12,078 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,265_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,268 | `drawGrowth` | `function drawGrowth(` |
| 12,407 | `wireResize` | `function wireResize(` |
| 12,413 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,425_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,426 | `renderCycleView` | `function renderCycleView(` |
| 12,487 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,495_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,506 | `peerChosen` | `function peerChosen(` |
| 12,507 | `peerReaches` | `function peerReaches(` |
| 12,538 | `shownEraModel` | `var shownEraModel =` |
| 12,539 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,541_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,543 | `stripGroupName` | `var stripGroupName =` |
| 12,544 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,590 | `marketStripHtml` | `function marketStripHtml(` |
| 12,653 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,654 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,684_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,685 | `renderCycleList` | `function renderCycleList(` |
| 12,789 | `renderSignsList` | `function renderSignsList(` |
| 13,074 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,346_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,358 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,401_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,409 | `__roster` | `var __roster =` |
| 14,410 | `readingRoster` | `function readingRoster(` |
| 14,465 | `readFig` | `function readFig(` |
| 14,473 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes \u2014 today beside a past top (Version 610, rebuilt in Version 612)

_line 14,480_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,508 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,566_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,567 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,629_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,630 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,663_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,664 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,149–4,152 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,697–8,710 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,548–9,561 | `seasonTrackAll` | The season, computed |
| 9,583–9,587 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,811 |
| `desire-range` | 10,580 |
| `fear-range` | 11,392 |
| `hormones-range` | 11,129 |
| `hzn-range` | 10,684 |
| `hzn-spread` | 10,678 |
| `pressure-range` | 11,269 |
| `pulse-range` | 10,533 |
| `sheet-marker-deficit` | 13,808 |
| `sheet-metric-gdp` | 13,694 |
| `sheet-metric-households` | 13,841 |
| `sheet-metric-power` | 13,771 |
| `sheet-metric-temp` | 13,646 |
| `sheet-metric-valuation` | 13,886 |
| `sheet-sign-activity` | 13,754 |
| `sheet-sign-desire` | 10,581 |
| `sheet-sign-horizon` | 10,685 |
| `sheet-sign-hormones` | 11,132 |
| `sheet-sign-pressure` | 11,270 |
| `sheet-sign-pulse` | 10,532 |
| `sheet-sign-sentiment` | 11,397 |
| `sheet-sign-volume` | 10,555 |
| `volume-range` | 10,556 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,817 |
| `desire-range` | 10,564 |
| `fear-range` | 11,349 |
| `hzn-range` | 10,609 |
| `pulse-range` | 10,514 |
| `sheet-metric-gdp` | 13,695 |
| `sheet-metric-power` | 13,772 |
| `sheet-metric-temp` | 13,647 |
| `sheet-metric-valuation` | 13,887 |
| `volume-range` | 10,537 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,334 |
| `sheet-metric-gdp` | 6,335 |
| `sheet-sign-activity` | 6,342 |
| `sheet-metric-power` | 6,343 |
| `sheet-metric-valuation` | 6,345 |
| `sheet-metric-households` | 6,346 |
| `deficit-range` | 6,347 |
| `volume-range` | 6,348 |
| `pulse-range` | 6,349 |
| `hzn-range` | 6,355 |
| `desire-range` | 6,356 |
| `fear-range` | 6,357 |
| `hormones-range` | 6,358 |
| `pressure-range` | 6,359 |

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

