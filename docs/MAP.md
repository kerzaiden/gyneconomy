# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,891 lines**, about 1233 KB, roughly **350 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `5732b9e` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,143 | the whole stylesheet, every token and rule |
| **Markup** | 3,144–3,920 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,921–14,838 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,839–14,891 | </body></html> |

Counts: **269** top-level functions, **180** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 3,921_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,936 | `byId` | `function byId(` |
| 3,944 | `byIdMaybe` | `function byIdMaybe(` |

### REFRESH: the one date to edit

_line 3,948_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,952 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,953 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,954 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,972 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,976 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,981_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,991 | `wheelMeta` | `var wheelMeta =` |
| 4,002 | `seasonOverride` | `var seasonOverride =` |
| 4,005 | `cycleNowNote` | `var cycleNowNote =` |
| 4,014 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,100 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,145 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,158_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,175 | `LIVE` | `function LIVE(` |
| 4,202 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,210 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,211 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,214_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,267 | `paintReading` | `function paintReading(` |
| 4,290 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,315 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,323 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,330 | `REPAINT` | `var REPAINT =` |
| 4,347 | `liveAsOf` | `var liveAsOf =` |
| 4,348 | `fmtAsOf` | `function fmtAsOf(` |
| 4,353 | `applyLive` | `function applyLive(` |
| 4,432 | `repaintPolicy` | `function repaintPolicy(` |
| 4,485 | `GYN` | `var GYN =` |
| 4,518 | `refreshLiveData` | `function refreshLiveData(` |
| 4,559 | `fetchSiteData` | `function fetchSiteData(` |
| 4,589 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,603_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,604 | `yieldCurve` | `var yieldCurve =` |
| 4,617 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,641 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,653 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,681_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,686 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,710 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,734 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,758 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,785 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,810_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,819 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,829 | `uninvLagToday` | `var uninvLagToday =` |
| 4,841 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,854 | `gdpPeers` | `var gdpPeers =` |
| 4,895 | `gdpSrc` | `var gdpSrc =` |
| 4,896 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,901 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,914 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,952_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,974 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,984_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,000 | `stressScoreFor` | `function stressScoreFor(` |
| 5,006 | `stressScore` | `var stressScore =` |
| 5,012 | `powerOf` | `var powerOf =` |
| 5,013 | `powerScore` | `var powerScore =` |
| 5,030 | `stressHistory` | `var stressHistory =` |
| 5,041 | `powerMeter` | `var powerMeter =` |
| 5,043 | `stressNoteFull` | `var stressNoteFull =` |
| 5,075 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,077_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,100 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,101 | `deficitHistory` | `var deficitHistory =` |
| 5,104 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,111 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,113 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,161 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,162 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,163 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,180_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,193 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,206_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,220 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,223 | `timelineSpan` | `function timelineSpan(` |
| 5,229 | `timelineFor` | `function timelineFor(` |
| 5,242 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,248_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,254 | `windowScale` | `function windowScale(` |
| 5,270 | `windowYears` | `function windowYears(` |
| 5,288 | `refName` | `function refName(` |
| 5,295 | `histReadEnsure` | `function histReadEnsure(` |
| 5,334 | `seatBandReading` | `function seatBandReading(` |
| 5,357 | `histReadFill` | `function histReadFill(` |
| 5,485 | `histAxisEnds` | `function histAxisEnds(` |
| 5,496 | `histLegend` | `function histLegend(` |
| 5,584 | `refitHistory` | `function refitHistory(` |
| 5,596 | `wireHistHover` | `function wireHistHover(` |
| 5,676 | `mWindowFrom` | `function mWindowFrom(` |
| 5,681 | `qWindowFrom` | `function qWindowFrom(` |
| 5,686 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,687 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,689 | `DEF_1983` | `var DEF_1983 =` |
| 5,691 | `defFrom` | `function defFrom(` |
| 5,702 | `deficitChart` | `function deficitChart(` |
| 5,791 | `deficitBlock` | `function deficitBlock(` |
| 5,853 | `buffettHistory` | `var buffettHistory =` |
| 5,883 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,884 | `hyDates` | `var hyDates =` |
| 5,885 | `hyOas` | `var hyOas =` |
| 5,886 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,893 | `hyAt` | `function hyAt(` |
| 5,897 | `hyLabel` | `function hyLabel(` |
| 5,898 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,899 | `hyNum` | `function hyNum(` |
| 5,900 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,910 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,920 | `capeHistory` | `var capeHistory =` |
| 5,922 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,940_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,946 | `sentiment` | `var sentiment =` |
| 5,964 | `valuation` | `var valuation =` |
| 6,001 | `valRow` | `function valRow(` |
| 6,009 | `coincident` | `var coincident =` |
| 6,070 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,088 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,089 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,090 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,092_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,105 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,106 | `m2vHistory` | `var m2vHistory =` |
| 6,126 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,218 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,307 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,308 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,348_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,354 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,355 | `DOTS` | `var DOTS =` |
| 6,362 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,396 | `histHead` | `function histHead(` |
| 6,420 | `headNoteIdx` | `var headNoteIdx =` |
| 6,421 | `headMenuHtml` | `function headMenuHtml(` |
| 6,479 | `headMenuFor` | `var headMenuFor =` |
| 6,481 | `headSubFor` | `var headSubFor =` |
| 6,482 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,531 | `nameWithMark` | `function nameWithMark(` |
| 6,537 | `panelRow` | `function panelRow(` |
| 6,570 | `panelFromMeter` | `function panelFromMeter(` |
| 6,584 | `meterFlagged` | `function meterFlagged(` |
| 6,595 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,623 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,637 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,656 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,675 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,689 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,714 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,745 | `desireBlock` | `function desireBlock(` |
| 6,772 | `volumeBlock` | `function volumeBlock(` |
| 6,797 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,820 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,828_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,841 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,842 | `m2Level` | `var m2Level =` |
| 6,864 | `m2Yoy` | `var m2Yoy =` |
| 6,865 | `M2_NORM` | `var M2_NORM =` |
| 6,870 | `volumeVerdict` | `function volumeVerdict(` |
| 6,907 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,908 | `unempHistory` | `var unempHistory =` |
| 6,914 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,929 | `NROU_NOW` | `var NROU_NOW =` |
| 6,930 | `unempState` | `function unempState(` |
| 6,936 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,998_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,007 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 7,016_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,029 | `checkLendingStandards` | `function checkLendingStandards(` |
| 7,042 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,096 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,163 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,164 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,167 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,175_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,190 | `householdsChart` | `function householdsChart(` |
| 7,257 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,340 | `GDP_NORM` | `var GDP_NORM =` |
| 7,346 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,347 | `gdpNowQ` | `var gdpNowQ =` |
| 7,348 | `gdpMeter` | `var gdpMeter =` |
| 7,351 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,373 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,437 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,500 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,508 | `velocityVerdict` | `function velocityVerdict(` |
| 7,516 | `derivePulseTag` | `function derivePulseTag(` |
| 7,522 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,582_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,591 | `seasonReading` | `var seasonReading =` |
| 7,640 | `frameworkRows` | `var frameworkRows =` |
| 7,650 | `vixRow` | `var vixRow =` |
| 7,658 | `vixWordOf` | `var vixWordOf =` |
| 7,662 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,677_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,681 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,690_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,691 | `calendarTodayY` | `var calendarTodayY =` |
| 7,722 | `vix3mClose` | `var vix3mClose =` |
| 7,723 | `fearCurve` | `function fearCurve(` |
| 7,730 | `curveVerdict` | `function curveVerdict(` |
| 7,737 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,742 | `valuationVerdict` | `function valuationVerdict(` |
| 7,760 | `sparkHtml` | `function sparkHtml(` |
| 7,779 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,785_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,798 | `modeBar` | `function modeBar(` |
| 7,813 | `pickerOpen` | `var pickerOpen =` |
| 7,817 | `cycleByName` | `function cycleByName(` |
| 7,821 | `openCycle` | `function openCycle(` |
| 7,827 | `cycleSlice` | `function cycleSlice(` |
| 7,836 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,844 | `cycleMonths` | `function cycleMonths(` |
| 7,863 | `histControls` | `function histControls(` |
| 7,877 | `cycLabel` | `function cycLabel(` |
| 7,893 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,902 | `cyclePicker` | `function cyclePicker(` |
| 7,921 | `rangeBar` | `function rangeBar(` |
| 7,933 | `trendOf` | `function trendOf(` |
| 7,978 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,988 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 8,009_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,010 | `yearOf` | `function yearOf(` |
| 8,011 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 8,012_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,050 | `headSigma` | `function headSigma(` |
| 8,058 | `atQuarter` | `function atQuarter(` |
| 8,059 | `atMonth` | `function atMonth(` |
| 8,060 | `cycleAverages` | `function cycleAverages(` |
| 8,067 | `ordinal` | `function ordinal(` |
| 8,068 | `hiCard` | `function hiCard(` |
| 8,079 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,093_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,100 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,116 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,123 | `moreRow` | `function moreRow(` |
| 8,129 | `powerPageNote` | `var powerPageNote =` |
| 8,130 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,142_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,145 | `xLabelOf` | `function xLabelOf(` |
| 8,165 | `fitGroup` | `function fitGroup(` |
| 8,187 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,246_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,270 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,280 | `vGrid` | `function vGrid(` |
| 8,305 | `COL_FILL` | `var COL_FILL =` |
| 8,338 | `colPath` | `function colPath(` |
| 8,343 | `colWidth` | `function colWidth(` |
| 8,390 | `AXIS` | `var AXIS =` |
| 8,406 | `histFrame` | `function histFrame(` |
| 8,418 | `xLabel` | `function xLabel(` |
| 8,422 | `crossLine` | `function crossLine(` |
| 8,427 | `zeroRule` | `function zeroRule(` |
| 8,430 | `meanRule` | `function meanRule(` |
| 8,442 | `pendingGeom` | `var pendingGeom =` |
| 8,443 | `publishGeom` | `function publishGeom(` |
| 8,444 | `attachHistory` | `function attachHistory(` |
| 8,459 | `histBar` | `function histBar(` |
| 8,462 | `histTip` | `function histTip(` |
| 8,465 | `avgRule` | `function avgRule(` |
| 8,468 | `vhOpen` | `function vhOpen(` |
| 8,469 | `chartAxes` | `function chartAxes(` |
| 8,529 | `divergeChart` | `function divergeChart(` |
| 8,597 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,626_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,634 | `maxIn` | `function maxIn(` |
| 8,652 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,666 | `PEEK_W` | `var PEEK_W =` |
| 8,669 | `PEEK_H` | `var PEEK_H =` |
| 8,674 | `colPeek` | `function colPeek(` |
| 8,701 | `meterPeek` | `function meterPeek(` |
| 8,718 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,723 | `pressureZone` | `function pressureZone(` |
| 8,738 | `HZN_BACK` | `var HZN_BACK =` |
| 8,739 | `hznLast` | `function hznLast(` |
| 8,740 | `hznBack` | `function hznBack(` |
| 8,741 | `horizonWord` | `function horizonWord(` |
| 8,766 | `HZN_METERS` | `var HZN_METERS =` |
| 8,774 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,815 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,820 | `RISK_RISK` | `var RISK_RISK =` |
| 8,825 | `riskCell` | `function riskCell(` |
| 8,826 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,857 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,882_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,903 | `pulseClipN` | `var pulseClipN =` |
| 8,904 | `beatPath` | `function beatPath(` |
| 8,929 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,943 | `pulsePeek` | `function pulsePeek(` |
| 8,951 | `pulseBlock` | `function pulseBlock(` |
| 8,971 | `CHEV` | `var CHEV =` |
| 8,973 | `peekCard` | `function peekCard(` |
| 9,027 | `dropSvg` | `function dropSvg(` |
| 9,039 | `volumeSvg` | `function volumeSvg(` |
| 9,046 | `gaugeSvg` | `function gaugeSvg(` |
| 9,050 | `diamondSvg` | `function diamondSvg(` |
| 9,064 | `energyFromReserve` | `function energyFromReserve(` |
| 9,076 | `sproutSvg` | `function sproutSvg(` |
| 9,087 | `markSvg` | `function markSvg(` |
| 9,096 | `pressureSvg` | `function pressureSvg(` |
| 9,100 | `hormoneSvg` | `function hormoneSvg(` |
| 9,106 | `flameSvg` | `function flameSvg(` |
| 9,110 | `gearSvg` | `function gearSvg(` |
| 9,122 | `thermoSvg` | `function thermoSvg(` |
| 9,141 | `trendUpSvg` | `function trendUpSvg(` |
| 9,143 | `ecgSvg` | `function ecgSvg(` |
| 9,157 | `circulationSvg` | `function circulationSvg(` |
| 9,158 | `weatherSvg` | `function weatherSvg(` |
| 9,179 | `moodSvg` | `function moodSvg(` |
| 9,203 | `boltSvg` | `function boltSvg(` |
| 9,206 | `houseSvg` | `function houseSvg(` |
| 9,214 | `sunriseSvg` | `function sunriseSvg(` |
| 9,229 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,240 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,257_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,278 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,279 | `dsrHistory` | `var dsrHistory =` |
| 9,280 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,281 | `savHistory` | `var savHistory =` |
| 9,286 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,296 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,297 | `dsrNow` | `var dsrNow =` |
| 9,298 | `savNow` | `var savNow =` |
| 9,299 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,304 | `householdsWord` | `function householdsWord(` |
| 9,311 | `householdsNow` | `var householdsNow =` |
| 9,318 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,319 | `dsrMeter` | `var dsrMeter =` |
| 9,322 | `savMeter` | `var savMeter =` |
| 9,325 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,342 | `savInfoHtml` | `function savInfoHtml(` |
| 9,360 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,369 | `curveNow` | `var curveNow =` |
| 9,370 | `curveTag` | `var curveTag =` |
| 9,371 | `curveSub` | `var curveSub =` |
| 9,375 | `curvePct` | `function curvePct(` |
| 9,376 | `curveNoteFull` | `var curveNoteFull =` |
| 9,391 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,399 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,440 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,468_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,482 | `marketTops` | `var marketTops =` |
| 9,492 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,497 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,499_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,520 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,521 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,526_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,547 | `slopeOf` | `function slopeOf(` |
| 9,558 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,564 | `readSeason` | `function readSeason(` |
| 9,589 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,591 | `qLabel` | `function qLabel(` |
| 9,615 | `regimeTrack` | `function regimeTrack(` |
| 9,638 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,640_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,647 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,648 | `seasonTitle` | `function seasonTitle(` |
| 9,649 | `monthLabel` | `function monthLabel(` |
| 9,650 | `cycleModel` | `function cycleModel(` |
| 9,702 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,710 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,717 | `nowModel` | `var nowModel =` |
| 9,718 | `readingNow` | `var readingNow =` |
| 9,719 | `cpiNow` | `var cpiNow =` |
| 9,720 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,721 | `currentSeason` | `var currentSeason =` |
| 9,722 | `seasonWhy` | `var seasonWhy =` |
| 9,739 | `seasonGroup` | `function seasonGroup(` |
| 9,753 | `arcGauge` | `function arcGauge(` |
| 9,795 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,808 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,815 | `tsyView` | `var tsyView =` |
| 9,817 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,819 | `spreadLabel` | `function spreadLabel(` |
| 9,826 | `policyFacts` | `function policyFacts(` |
| 9,840 | `policyFactRows` | `function policyFactRows(` |
| 9,846 | `allSources` | `var allSources =` |
| 9,870 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,903_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,906 | `SVG_NS` | `var SVG_NS =` |
| 9,907 | `svgEl` | `function svgEl(` |
| 9,920 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,956_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,957 | `clampPct` | `function clampPct(` |
| 9,964 | `infoIcon` | `function infoIcon(` |
| 9,973 | `detailTexts` | `var detailTexts =` |
| 9,991 | `detailSlots` | `var detailSlots =` |
| 9,992 | `detailSlot` | `function detailSlot(` |
| 10,003 | `powerPanelHtml` | `var powerPanelHtml =` |
| 10,007 | `_growthPanel` | `var _growthPanel =` |
| 10,008 | `growthPanelHtml` | `function growthPanelHtml(` |
| 10,014 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 10,025 | `facts` | `function facts(` |
| 10,026 | `factsFrom` | `function factsFrom(` |
| 10,030 | `expandBtn` | `function expandBtn(` |
| 10,036 | `sheetRenderers` | `var sheetRenderers =` |
| 10,053 | `pageMode` | `var pageMode =` |
| 10,060 | `pageCycles` | `var pageCycles =` |
| 10,065 | `pageRange` | `var pageRange =` |
| 10,071 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,105_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,116 | `meterHtml` | `function meterHtml(` |
| 10,147 | `srcBlock` | `function srcBlock(` |
| 10,148 | `srcHtml` | `function srcHtml(` |
| 10,157 | `TIMING` | `var TIMING =` |
| 10,163 | `timingMark` | `function timingMark(` |
| 10,177 | `timingPill` | `function timingPill(` |
| 10,198 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,206 | `seatPageFoot` | `function seatPageFoot(` |
| 10,229 | `timingMembers` | `var timingMembers =` |
| 10,230 | `registerTiming` | `function registerTiming(` |
| 10,236 | `headHtml` | `function headHtml(` |
| 10,254 | `heldHighlights` | `var heldHighlights =` |
| 10,255 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,313_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,314 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,741_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,742 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,964_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,965 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,997_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,003 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,087_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,088 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,106_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,109 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,132_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,144 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,275_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,284 | `lendingWord` | `function lendingWord(` |
| 11,292 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,352_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,353 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,477_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,480 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,605_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,617 | `totalRiseIn` | `function totalRiseIn(` |
| 11,627 | `eraInflation` | `function eraInflation(` |
| 11,638 | `eraGrowth` | `function eraGrowth(` |
| 11,658 | `fmtSigned` | `function fmtSigned(` |
| 11,663 | `regimeArrow` | `function regimeArrow(` |
| 11,669 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,670 | `growthShown` | `function growthShown(` |
| 11,671 | `growthShownCap` | `function growthShownCap(` |
| 11,672 | `regimeState` | `function regimeState(` |
| 11,676 | `phaseClass` | `function phaseClass(` |
| 11,678 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,690 | `cycleViewEl` | `var cycleViewEl =` |
| 11,696 | `tempCard` | `var tempCard =` |
| 11,697 | `placeCharts` | `function placeCharts(` |
| 11,702 | `shownEra` | `var shownEra =` |
| 11,703 | `calendarReset` | `var calendarReset =` |
| 11,704 | `metricPageReset` | `var metricPageReset =` |
| 11,705 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,708 | `topbarBack` | `var topbarBack =` |
| 11,709 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,716_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,717 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,878_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,879 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,897_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,900 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,921_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,927 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,930 | `hubSet` | `function hubSet(` |
| 11,943 | `quarterPopup` | `function quarterPopup(` |
| 11,976 | `hubShowDefault` | `function hubShowDefault(` |
| 11,985 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,991 | `hubShowYear` | `function hubShowYear(` |
| 12,006 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,098_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,101 | `tempState` | `var tempState =` |
| 12,104 | `chartLink` | `var chartLink =` |
| 12,124 | `m2Step` | `function m2Step(` |
| 12,127 | `heatStep` | `function heatStep(` |
| 12,131 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,318_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,321 | `drawGrowth` | `function drawGrowth(` |
| 12,460 | `wireResize` | `function wireResize(` |
| 12,466 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,478_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,479 | `renderCycleView` | `function renderCycleView(` |
| 12,540 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,548_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,559 | `peerChosen` | `function peerChosen(` |
| 12,560 | `peerReaches` | `function peerReaches(` |
| 12,591 | `shownEraModel` | `var shownEraModel =` |
| 12,592 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,594_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,596 | `stripGroupName` | `var stripGroupName =` |
| 12,597 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,643 | `marketStripHtml` | `function marketStripHtml(` |
| 12,706 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,707 | `settleStrips` | `function settleStrips(` |
| 12,742 | `renderSignsList` | `function renderSignsList(` |
| 13,027 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,321_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,322 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,422_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,434 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,477_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,485 | `__roster` | `var __roster =` |
| 14,486 | `readingRoster` | `function readingRoster(` |
| 14,541 | `readFig` | `function readFig(` |
| 14,549 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes \u2014 today beside a past top (Version 610, rebuilt in Version 612)

_line 14,556_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,584 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,637_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,638 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,700_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,701 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,734_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,735 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,171–4,174 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,747–8,760 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,598–9,611 | `seasonTrackAll` | The season, computed |
| 9,633–9,637 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,764 |
| `desire-range` | 10,630 |
| `fear-range` | 11,442 |
| `hormones-range` | 11,179 |
| `hzn-range` | 10,734 |
| `hzn-spread` | 10,728 |
| `pressure-range` | 11,319 |
| `pulse-range` | 10,583 |
| `sheet-marker-deficit` | 13,761 |
| `sheet-metric-gdp` | 13,647 |
| `sheet-metric-households` | 13,794 |
| `sheet-metric-power` | 13,724 |
| `sheet-metric-temp` | 13,599 |
| `sheet-metric-valuation` | 13,839 |
| `sheet-sign-activity` | 13,707 |
| `sheet-sign-desire` | 10,631 |
| `sheet-sign-horizon` | 10,735 |
| `sheet-sign-hormones` | 11,182 |
| `sheet-sign-pressure` | 11,320 |
| `sheet-sign-pulse` | 10,582 |
| `sheet-sign-sentiment` | 11,447 |
| `sheet-sign-volume` | 10,605 |
| `volume-range` | 10,606 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,770 |
| `desire-range` | 10,614 |
| `fear-range` | 11,399 |
| `hzn-range` | 10,659 |
| `pulse-range` | 10,564 |
| `sheet-metric-gdp` | 13,648 |
| `sheet-metric-power` | 13,725 |
| `sheet-metric-temp` | 13,600 |
| `sheet-metric-valuation` | 13,840 |
| `volume-range` | 10,587 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,369 |
| `sheet-metric-gdp` | 6,370 |
| `sheet-sign-activity` | 6,377 |
| `sheet-metric-power` | 6,378 |
| `sheet-metric-valuation` | 6,380 |
| `sheet-metric-households` | 6,381 |
| `deficit-range` | 6,382 |
| `volume-range` | 6,383 |
| `pulse-range` | 6,384 |
| `hzn-range` | 6,390 |
| `desire-range` | 6,391 |
| `fear-range` | 6,392 |
| `hormones-range` | 6,393 |
| `pressure-range` | 6,394 |

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

