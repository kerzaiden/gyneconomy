# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,334 lines**, about 1200 KB, roughly **341 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `919249b` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,075 | the whole stylesheet, every token and rule |
| **Markup** | 3,076–3,823 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,824–14,281 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,282–14,334 | </body></html> |

Counts: **253** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,829_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,833 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,834 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,835 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,853 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,857 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,862_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,872 | `wheelMeta` | `var wheelMeta =` |
| 3,883 | `seasonOverride` | `var seasonOverride =` |
| 3,886 | `cycleNowNote` | `var cycleNowNote =` |
| 3,895 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,981 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,026 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,039_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,056 | `LIVE` | `function LIVE(` |
| 4,083 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,091 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,092 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,095_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,126 | `repaintFigureText` | `function repaintFigureText(` |
| 4,139 | `repaintRow` | `function repaintRow(` |
| 4,152 | `repaintTag` | `function repaintTag(` |
| 4,162 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,187 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,195 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,203 | `REPAINT` | `var REPAINT =` |
| 4,220 | `liveAsOf` | `var liveAsOf =` |
| 4,221 | `fmtAsOf` | `function fmtAsOf(` |
| 4,226 | `applyLive` | `function applyLive(` |
| 4,305 | `repaintPolicy` | `function repaintPolicy(` |
| 4,361 | `GYN` | `var GYN =` |
| 4,381 | `refreshLiveData` | `function refreshLiveData(` |
| 4,422 | `fetchSiteData` | `function fetchSiteData(` |
| 4,452 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,466_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,467 | `yieldCurve` | `var yieldCurve =` |
| 4,480 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,504 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,516 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,544_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,549 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,573 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,597 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,621 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,648 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,673_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,682 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,692 | `uninvLagToday` | `var uninvLagToday =` |
| 4,704 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,717 | `gdpPeers` | `var gdpPeers =` |
| 4,758 | `gdpSrc` | `var gdpSrc =` |
| 4,759 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,764 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,777 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,815_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,837 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,847_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,863 | `stressScoreFor` | `function stressScoreFor(` |
| 4,869 | `stressScore` | `var stressScore =` |
| 4,875 | `powerOf` | `var powerOf =` |
| 4,876 | `powerScore` | `var powerScore =` |
| 4,893 | `stressHistory` | `var stressHistory =` |
| 4,904 | `powerMeter` | `var powerMeter =` |
| 4,906 | `stressNoteFull` | `var stressNoteFull =` |
| 4,938 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,940_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,963 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,964 | `deficitHistory` | `var deficitHistory =` |
| 4,967 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,974 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,976 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,024 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,025 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,026 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,043_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,056 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,069_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,083 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,086 | `timelineSpan` | `function timelineSpan(` |
| 5,092 | `timelineFor` | `function timelineFor(` |
| 5,105 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,111_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,117 | `windowScale` | `function windowScale(` |
| 5,133 | `windowYears` | `function windowYears(` |
| 5,151 | `refName` | `function refName(` |
| 5,158 | `histReadEnsure` | `function histReadEnsure(` |
| 5,197 | `seatBandReading` | `function seatBandReading(` |
| 5,220 | `histReadFill` | `function histReadFill(` |
| 5,348 | `histAxisEnds` | `function histAxisEnds(` |
| 5,359 | `histLegend` | `function histLegend(` |
| 5,447 | `refitHistory` | `function refitHistory(` |
| 5,459 | `wireHistHover` | `function wireHistHover(` |
| 5,518 | `mWindowFrom` | `function mWindowFrom(` |
| 5,523 | `qWindowFrom` | `function qWindowFrom(` |
| 5,528 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,529 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,531 | `DEF_1983` | `var DEF_1983 =` |
| 5,533 | `defFrom` | `function defFrom(` |
| 5,544 | `deficitChart` | `function deficitChart(` |
| 5,634 | `deficitBlock` | `function deficitBlock(` |
| 5,696 | `buffettHistory` | `var buffettHistory =` |
| 5,726 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,727 | `hyDates` | `var hyDates =` |
| 5,728 | `hyOas` | `var hyOas =` |
| 5,729 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,736 | `hyAt` | `function hyAt(` |
| 5,740 | `hyLabel` | `function hyLabel(` |
| 5,741 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,742 | `hyNum` | `function hyNum(` |
| 5,743 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,753 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,763 | `capeHistory` | `var capeHistory =` |
| 5,765 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,783_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,789 | `sentiment` | `var sentiment =` |
| 5,807 | `valuation` | `var valuation =` |
| 5,844 | `valRow` | `function valRow(` |
| 5,852 | `coincident` | `var coincident =` |
| 5,913 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,931 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,932 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,933 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,935_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,948 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,949 | `m2vHistory` | `var m2vHistory =` |
| 5,969 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,062 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,152 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,153 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,193_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,199 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,200 | `DOTS` | `var DOTS =` |
| 6,202 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,236 | `histHead` | `function histHead(` |
| 6,260 | `headNoteIdx` | `var headNoteIdx =` |
| 6,261 | `headMenuHtml` | `function headMenuHtml(` |
| 6,319 | `headMenuFor` | `var headMenuFor =` |
| 6,321 | `headSubFor` | `var headSubFor =` |
| 6,322 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,367 | `nameWithMark` | `function nameWithMark(` |
| 6,373 | `panelRow` | `function panelRow(` |
| 6,406 | `panelFromMeter` | `function panelFromMeter(` |
| 6,420 | `meterFlagged` | `function meterFlagged(` |
| 6,431 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,459 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,473 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,492 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,511 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,525 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,550 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,581 | `desireBlock` | `function desireBlock(` |
| 6,608 | `volumeBlock` | `function volumeBlock(` |
| 6,633 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,656 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,664_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,677 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,678 | `m2Level` | `var m2Level =` |
| 6,700 | `m2Yoy` | `var m2Yoy =` |
| 6,701 | `M2_NORM` | `var M2_NORM =` |
| 6,706 | `volumeVerdict` | `function volumeVerdict(` |
| 6,743 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,744 | `unempHistory` | `var unempHistory =` |
| 6,750 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,765 | `NROU_NOW` | `var NROU_NOW =` |
| 6,766 | `unempState` | `function unempState(` |
| 6,772 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,836_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,845 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,854_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,867 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,880 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 6,936 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,991 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,992 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,995 | `qAtIndex` | `function qAtIndex(` |
| 6,996 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,004_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,019 | `householdsChart` | `function householdsChart(` |
| 7,087 | `lastChartAvg` | `var lastChartAvg =` |
| 7,088 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,173 | `GDP_NORM` | `var GDP_NORM =` |
| 7,179 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,180 | `gdpNowQ` | `var gdpNowQ =` |
| 7,181 | `gdpMeter` | `var gdpMeter =` |
| 7,184 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,206 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,272 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,336 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,344 | `velocityVerdict` | `function velocityVerdict(` |
| 7,352 | `derivePulseTag` | `function derivePulseTag(` |
| 7,358 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,418_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,427 | `seasonReading` | `var seasonReading =` |
| 7,476 | `frameworkRows` | `var frameworkRows =` |
| 7,486 | `vixRow` | `var vixRow =` |
| 7,494 | `vixWordOf` | `var vixWordOf =` |
| 7,498 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,513_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,517 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,526_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,527 | `calendarTodayY` | `var calendarTodayY =` |
| 7,558 | `vix3mClose` | `var vix3mClose =` |
| 7,559 | `fearCurve` | `function fearCurve(` |
| 7,566 | `curveVerdict` | `function curveVerdict(` |
| 7,573 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,578 | `valuationVerdict` | `function valuationVerdict(` |
| 7,596 | `sparkHtml` | `function sparkHtml(` |
| 7,615 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,621_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,634 | `modeBar` | `function modeBar(` |
| 7,649 | `pickerOpen` | `var pickerOpen =` |
| 7,653 | `cycleByName` | `function cycleByName(` |
| 7,657 | `openCycle` | `function openCycle(` |
| 7,663 | `cycleSlice` | `function cycleSlice(` |
| 7,672 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,680 | `cycleMonths` | `function cycleMonths(` |
| 7,699 | `histControls` | `function histControls(` |
| 7,713 | `cycLabel` | `function cycLabel(` |
| 7,729 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,738 | `cyclePicker` | `function cyclePicker(` |
| 7,757 | `rangeBar` | `function rangeBar(` |
| 7,769 | `trendOf` | `function trendOf(` |
| 7,814 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,824 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,845_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,846 | `yearOf` | `function yearOf(` |
| 7,847 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,848_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,886 | `headSigma` | `function headSigma(` |
| 7,894 | `atQuarter` | `function atQuarter(` |
| 7,895 | `atMonth` | `function atMonth(` |
| 7,896 | `cycleAverages` | `function cycleAverages(` |
| 7,903 | `ordinal` | `function ordinal(` |
| 7,904 | `hiCard` | `function hiCard(` |
| 7,915 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,929_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,936 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,952 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,959 | `moreRow` | `function moreRow(` |
| 7,965 | `powerPageNote` | `var powerPageNote =` |
| 7,966 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,978_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,981 | `xLabelOf` | `function xLabelOf(` |
| 8,001 | `fitGroup` | `function fitGroup(` |
| 8,023 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,082_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,106 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,116 | `vGrid` | `function vGrid(` |
| 8,141 | `COL_FILL` | `var COL_FILL =` |
| 8,174 | `colPath` | `function colPath(` |
| 8,179 | `colWidth` | `function colWidth(` |
| 8,226 | `AXIS` | `var AXIS =` |
| 8,227 | `chartAxes` | `function chartAxes(` |
| 8,287 | `divergeChart` | `function divergeChart(` |
| 8,355 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,384_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,392 | `maxIn` | `function maxIn(` |
| 8,410 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,424 | `PEEK_W` | `var PEEK_W =` |
| 8,427 | `PEEK_H` | `var PEEK_H =` |
| 8,432 | `colPeek` | `function colPeek(` |
| 8,459 | `meterPeek` | `function meterPeek(` |
| 8,476 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,481 | `pressureZone` | `function pressureZone(` |
| 8,496 | `HZN_BACK` | `var HZN_BACK =` |
| 8,497 | `hznLast` | `function hznLast(` |
| 8,498 | `hznBack` | `function hznBack(` |
| 8,499 | `horizonWord` | `function horizonWord(` |
| 8,524 | `HZN_METERS` | `var HZN_METERS =` |
| 8,532 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,573 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,578 | `RISK_RISK` | `var RISK_RISK =` |
| 8,583 | `riskCell` | `function riskCell(` |
| 8,584 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,615 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,640_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,661 | `pulseClipN` | `var pulseClipN =` |
| 8,662 | `beatPath` | `function beatPath(` |
| 8,687 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,701 | `pulsePeek` | `function pulsePeek(` |
| 8,709 | `pulseBlock` | `function pulseBlock(` |
| 8,729 | `CHEV` | `var CHEV =` |
| 8,731 | `peekCard` | `function peekCard(` |
| 8,785 | `dropSvg` | `function dropSvg(` |
| 8,797 | `volumeSvg` | `function volumeSvg(` |
| 8,804 | `gaugeSvg` | `function gaugeSvg(` |
| 8,808 | `diamondSvg` | `function diamondSvg(` |
| 8,822 | `energyFromReserve` | `function energyFromReserve(` |
| 8,834 | `sproutSvg` | `function sproutSvg(` |
| 8,845 | `markSvg` | `function markSvg(` |
| 8,854 | `pressureSvg` | `function pressureSvg(` |
| 8,858 | `hormoneSvg` | `function hormoneSvg(` |
| 8,864 | `flameSvg` | `function flameSvg(` |
| 8,868 | `gearSvg` | `function gearSvg(` |
| 8,880 | `thermoSvg` | `function thermoSvg(` |
| 8,899 | `trendUpSvg` | `function trendUpSvg(` |
| 8,901 | `ecgSvg` | `function ecgSvg(` |
| 8,915 | `circulationSvg` | `function circulationSvg(` |
| 8,916 | `weatherSvg` | `function weatherSvg(` |
| 8,937 | `moodSvg` | `function moodSvg(` |
| 8,961 | `boltSvg` | `function boltSvg(` |
| 8,964 | `houseSvg` | `function houseSvg(` |
| 8,972 | `sunriseSvg` | `function sunriseSvg(` |
| 8,987 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,998 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,015_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,036 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,037 | `dsrHistory` | `var dsrHistory =` |
| 9,038 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,039 | `savHistory` | `var savHistory =` |
| 9,044 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,054 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,055 | `dsrNow` | `var dsrNow =` |
| 9,056 | `savNow` | `var savNow =` |
| 9,057 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,062 | `householdsWord` | `function householdsWord(` |
| 9,069 | `householdsNow` | `var householdsNow =` |
| 9,076 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,077 | `dsrMeter` | `var dsrMeter =` |
| 9,080 | `savMeter` | `var savMeter =` |
| 9,083 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,100 | `savInfoHtml` | `function savInfoHtml(` |
| 9,118 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,127 | `curveNow` | `var curveNow =` |
| 9,128 | `curveTag` | `var curveTag =` |
| 9,129 | `curveSub` | `var curveSub =` |
| 9,133 | `curvePct` | `function curvePct(` |
| 9,134 | `curveNoteFull` | `var curveNoteFull =` |
| 9,149 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,157 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,198 | `marketCycles` | `var marketCycles =` |
| 9,228 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,230_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,251 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,252 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,257_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,278 | `slopeOf` | `function slopeOf(` |
| 9,289 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,295 | `readSeason` | `function readSeason(` |
| 9,320 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,322 | `qLabel` | `function qLabel(` |
| 9,346 | `regimeTrack` | `function regimeTrack(` |
| 9,369 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,371_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,378 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,379 | `seasonTitle` | `function seasonTitle(` |
| 9,380 | `monthLabel` | `function monthLabel(` |
| 9,381 | `cycleModel` | `function cycleModel(` |
| 9,433 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,441 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,448 | `nowModel` | `var nowModel =` |
| 9,449 | `readingNow` | `var readingNow =` |
| 9,450 | `cpiNow` | `var cpiNow =` |
| 9,451 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,452 | `currentSeason` | `var currentSeason =` |
| 9,453 | `seasonWhy` | `var seasonWhy =` |
| 9,470 | `seasonGroup` | `function seasonGroup(` |
| 9,484 | `arcGauge` | `function arcGauge(` |
| 9,526 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,539 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,546 | `tsyView` | `var tsyView =` |
| 9,548 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,550 | `spreadLabel` | `function spreadLabel(` |
| 9,557 | `policyFacts` | `function policyFacts(` |
| 9,569 | `allSources` | `var allSources =` |
| 9,593 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,626_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,629 | `SVG_NS` | `var SVG_NS =` |
| 9,630 | `svgEl` | `function svgEl(` |
| 9,643 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,679_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,680 | `clampPct` | `function clampPct(` |
| 9,687 | `infoIcon` | `function infoIcon(` |
| 9,696 | `detailTexts` | `var detailTexts =` |
| 9,714 | `detailSlots` | `var detailSlots =` |
| 9,715 | `detailSlot` | `function detailSlot(` |
| 9,726 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,730 | `_growthPanel` | `var _growthPanel =` |
| 9,731 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,737 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,748 | `facts` | `function facts(` |
| 9,749 | `factsFrom` | `function factsFrom(` |
| 9,753 | `expandBtn` | `function expandBtn(` |
| 9,759 | `sheetRenderers` | `var sheetRenderers =` |
| 9,776 | `pageMode` | `var pageMode =` |
| 9,783 | `pageCycles` | `var pageCycles =` |
| 9,788 | `pageRange` | `var pageRange =` |
| 9,794 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,828_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,839 | `meterHtml` | `function meterHtml(` |
| 9,867 | `srcHtml` | `function srcHtml(` |
| 9,876 | `TIMING` | `var TIMING =` |
| 9,882 | `timingMark` | `function timingMark(` |
| 9,896 | `timingPill` | `function timingPill(` |
| 9,917 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,925 | `seatPageFoot` | `function seatPageFoot(` |
| 9,948 | `timingMembers` | `var timingMembers =` |
| 9,949 | `registerTiming` | `function registerTiming(` |
| 9,955 | `headHtml` | `function headHtml(` |
| 9,973 | `heldHighlights` | `var heldHighlights =` |
| 9,974 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,032_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,033 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,466_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,467 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,690_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,691 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,723_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,729 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,813_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,814 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,832_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,835 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,858_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,870 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 10,961_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,970 | `lendingWord` | `function lendingWord(` |
| 10,978 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,038_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,039 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,163_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,166 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,288_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,300 | `totalRiseIn` | `function totalRiseIn(` |
| 11,310 | `eraInflation` | `function eraInflation(` |
| 11,321 | `eraGrowth` | `function eraGrowth(` |
| 11,337 | `fmtSigned` | `function fmtSigned(` |
| 11,342 | `regimeArrow` | `function regimeArrow(` |
| 11,348 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,349 | `growthShown` | `function growthShown(` |
| 11,350 | `growthShownCap` | `function growthShownCap(` |
| 11,351 | `regimeState` | `function regimeState(` |
| 11,355 | `phaseClass` | `function phaseClass(` |
| 11,357 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,369 | `cycleViewEl` | `var cycleViewEl =` |
| 11,373 | `tempCard` | `var tempCard =` |
| 11,374 | `placeCharts` | `function placeCharts(` |
| 11,379 | `shownEra` | `var shownEra =` |
| 11,380 | `calendarReset` | `var calendarReset =` |
| 11,381 | `metricPageReset` | `var metricPageReset =` |
| 11,382 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,385 | `topbarBack` | `var topbarBack =` |
| 11,386 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,393_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,394 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,555_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,556 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,574_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,577 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,598_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,604 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,607 | `hubSet` | `function hubSet(` |
| 11,620 | `quarterPopup` | `function quarterPopup(` |
| 11,653 | `hubShowDefault` | `function hubShowDefault(` |
| 11,662 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,668 | `hubShowYear` | `function hubShowYear(` |
| 11,683 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,775_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,778 | `tempState` | `var tempState =` |
| 11,781 | `chartLink` | `var chartLink =` |
| 11,801 | `m2Step` | `function m2Step(` |
| 11,804 | `heatStep` | `function heatStep(` |
| 11,808 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,995_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,998 | `drawGrowth` | `function drawGrowth(` |
| 12,137 | `wireResize` | `function wireResize(` |
| 12,143 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,155_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,156 | `renderCycleView` | `function renderCycleView(` |
| 12,209 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,220 | `PEER_CARET` | `var PEER_CARET =` |
| 12,221 | `peerList` | `function peerList(` |
| 12,222 | `peerChosen` | `function peerChosen(` |
| 12,223 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,227 | `renderPeerPills` | `function renderPeerPills(` |
| 12,277 | `shownEraModel` | `var shownEraModel =` |
| 12,278 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,280_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,282 | `stripGroupName` | `var stripGroupName =` |
| 12,283 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,329 | `marketStripHtml` | `function marketStripHtml(` |
| 12,392 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,393 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,423_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,424 | `renderCycleList` | `function renderCycleList(` |
| 12,514 | `renderSignsList` | `function renderSignsList(` |
| 12,799 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,080_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,081 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,143_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,144 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,177_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,178 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,052–4,055 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,505–8,518 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,329–9,342 | `seasonTrackAll` | The season, computed |
| 9,364–9,368 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,540 |
| `desire-range` | 10,355 |
| `fear-range` | 11,128 |
| `hormones-range` | 10,905 |
| `hzn-range` | 10,459 |
| `hzn-spread` | 10,453 |
| `pressure-range` | 11,005 |
| `pulse-range` | 10,306 |
| `sheet-marker-deficit` | 13,537 |
| `sheet-metric-gdp` | 13,421 |
| `sheet-metric-households` | 13,571 |
| `sheet-metric-power` | 13,500 |
| `sheet-metric-temp` | 13,371 |
| `sheet-metric-valuation` | 13,616 |
| `sheet-sign-activity` | 13,482 |
| `sheet-sign-desire` | 10,356 |
| `sheet-sign-horizon` | 10,460 |
| `sheet-sign-hormones` | 10,908 |
| `sheet-sign-pressure` | 11,006 |
| `sheet-sign-pulse` | 10,305 |
| `sheet-sign-sentiment` | 11,133 |
| `sheet-sign-volume` | 10,329 |
| `volume-range` | 10,330 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,546 |
| `desire-range` | 10,338 |
| `fear-range` | 11,085 |
| `hzn-range` | 10,384 |
| `pulse-range` | 10,283 |
| `sheet-metric-gdp` | 13,422 |
| `sheet-metric-power` | 13,501 |
| `sheet-metric-temp` | 13,372 |
| `sheet-metric-valuation` | 13,617 |
| `volume-range` | 10,310 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,209 |
| `sheet-metric-gdp` | 6,210 |
| `sheet-sign-activity` | 6,217 |
| `sheet-metric-power` | 6,218 |
| `sheet-metric-valuation` | 6,220 |
| `sheet-metric-households` | 6,221 |
| `deficit-range` | 6,222 |
| `volume-range` | 6,223 |
| `pulse-range` | 6,224 |
| `hzn-range` | 6,230 |
| `desire-range` | 6,231 |
| `fear-range` | 6,232 |
| `hormones-range` | 6,233 |
| `pressure-range` | 6,234 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 189 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 322 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 420 | yearly calendar — one card per year, grouped into five eras |
| 427 | season strip |
| 480 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels \u2026 so if one day |
| 644 | tab bar (app-style segmented navigation) |
| 711 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 750 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 966 | journal (editorial content tab) |
| 972 | content tab: reading companion |
| 1,030 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,502 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,536 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,546 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,557 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,590 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,770 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,947 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,470 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,518 | hero: yield curve |
| 2,614 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,693 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,792 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,817 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,832 | long cycle (structural layer) |
| 2,873 | indicator grid |
| 2,916 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,933 | info icon + popover (progressive disclosure for longer notes) |
| 2,954 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,049 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (142), which is what the renderers fill:

| Line | id |
|---|---|
| 3,081 | `topbar-back` |
| 3,084 | `topbar-title` |
| 3,085 | `menu-btn` |
| 3,102 | `main` |
| 3,109 | `cycle-view` |
| 3,117 | `cycle-kicker` |
| 3,123 | `cycle-dial` |
| 3,125 | `season-wheel-hub-date` |
| 3,126 | `season-wheel-hub-theme` |
| 3,127 | `season-wheel-hub-detail` |
| 3,135 | `temp-card` |
| 3,137 | `temp-kicker` |
| 3,138 | `temp-sub` |
| 3,141 | `temp-svg` |
| 3,142 | `temp-tooltip` |
| 3,148 | `temp-stats` |
| 3,155 | `growth-card` |
| 3,158 | `growth-kicker` |
| 3,158 | `growth-phase` |
| 3,158 | `growth-sub` |
| 3,158 | `growth-peers` |
| 3,159 | `growth-svg` |
| 3,159 | `growth-tooltip` |
| 3,164 | `growth-stats` |
| 3,173 | `today-analysis` |
| 3,177 | `peek-row` |
| 3,181 | `sheet-metric-temp` |
| 3,182 | `temp-timing` |
| 3,183 | `temp-chart` |
| 3,185 | `temp-rangebar` |
| 3,187 | `temp-head` |
| 3,188 | `slot-temp` |
| 3,189 | `temp-history` |
| 3,190 | `temp-hist-tooltip` |
| 3,193 | `temp-trend` |
| 3,197 | `temp-highlights` |
| 3,200 | `sheet-metric-gdp` |
| 3,201 | `gdp-timing` |
| 3,202 | `gdp-chart` |
| 3,203 | `gdp-rangebar` |
| 3,205 | `gdp-head` |
| 3,206 | `slot-growth` |
| 3,207 | `gdp-history` |
| 3,208 | `gdp-hist-tooltip` |
| 3,209 | `gdp-yoy` |
| 3,219 | `gdp-trend` |
| 3,221 | `gdp-panel` |
| 3,226 | `subj-ring-gdp` |
| 3,228 | `subj-label-gdp` |
| 3,229 | `subj-value-gdp` |
| 3,230 | `subj-say-gdp` |
| 3,231 | `subj-spark-gdp` |
| 3,236 | `subj-ctx-gdp` |
| 3,239 | `gdp-highlights` |
| 3,247 | `sheet-metric-power` |
| 3,248 | `power-timing` |
| 3,249 | `power-head` |
| 3,250 | `power-chart` |
| 3,254 | `subj-ring-resilience` |
| 3,257 | `subj-value-resilience` |
| 3,258 | `subj-say-resilience` |
| 3,263 | `subj-ctx-resilience` |
| 3,267 | `longcycle-title` |
| 3,269 | `longcycle-tag` |
| 3,283 | `power-highlights` |
| 3,290 | `sheet-marker-deficit` |
| 3,296 | `sheet-metric-households` |
| 3,297 | `households-timing` |
| 3,298 | `households-chart` |
| 3,299 | `households-highlights` |
| 3,303 | `sheet-metric-valuation` |
| 3,304 | `valuation-timing` |
| 3,305 | `valuation-head` |
| 3,306 | `valuation-chart` |
| 3,310 | `subj-ring-valuation` |
| 3,313 | `subj-value-valuation` |
| 3,314 | `subj-say-valuation` |
| 3,319 | `subj-ctx-valuation` |
| 3,323 | `valuation-title` |
| 3,325 | `valuation-tag` |
| 3,332 | `valuation-highlights` |
| 3,356 | `subj-value-hormones` |
| 3,357 | `subj-say-hormones` |
| 3,365 | `hormones-history` |
| 3,375 | `hormones-highlights` |
| 3,401 | `subj-value-horizon` |
| 3,402 | `subj-say-horizon` |
| 3,403 | `subj-spark-horizon` |
| 3,413 | `hzn-timeline` |
| 3,415 | `hzn-head` |
| 3,416 | `spread-history-shell` |
| 3,417 | `spread-history-svg` |
| 3,418 | `spread-history-tooltip` |
| 3,423 | `ylm-shell` |
| 3,424 | `ylm-svg` |
| 3,425 | `ylm-tooltip` |
| 3,428 | `hzn-trend` |
| 3,429 | `ylm-trend` |
| 3,431 | `horizon-insights` |
| 3,459 | `subj-value-pressure` |
| 3,460 | `subj-say-pressure` |
| 3,465 | `pressure-history` |
| 3,466 | `pressure-highlights` |
| 3,472 | `subj-ring-sentiment` |
| 3,475 | `subj-value-sentiment` |
| 3,476 | `subj-say-sentiment` |
| 3,477 | `subj-spark-sentiment` |
| 3,491 | `fear-history` |
| 3,492 | `curve-highlights` |
| 3,506 | `signs-list` |
| 3,517 | `calendar-list` |
| 3,522 | `indicators-peek` |
| 3,568 | `cycle-list` |
| 3,574 | `cycle-more` |
| 3,575 | `cycle-more-label` |
| 3,584 | `calendar-cycle` |
| 3,585 | `calendar-cycle-slot` |
| 3,636 | `seasons-kicker` |
| 3,637 | `seasons-rows` |
| 3,641 | `framework-kicker` |
| 3,643 | `framework-rows` |
| 3,650 | `more-menu` |
| 3,653 | `menu-back` |
| 3,667 | `sources-open` |
| 3,675 | `appearance-current` |
| 3,683 | `sheet-howto` |
| 3,727 | `sheet-book` |
| 3,759 | `sheet-appearance` |
| 3,767 | `theme-toggle` |
| 3,774 | `sheet-contact` |
| 3,783 | `contact-form` |
| 3,784 | `contact-title` |
| 3,785 | `contact-message` |
| 3,787 | `contact-hint` |
| 3,788 | `contact-send` |
| 3,797 | `sheet-sources` |
| 3,800 | `sources-back` |
| 3,807 | `asof-text` |
| 3,808 | `sources-groups` |
| 3,815 | `detail-backdrop` |
| 3,817 | `detail-modal-close` |
| 3,818 | `detail-modal-body` |

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

