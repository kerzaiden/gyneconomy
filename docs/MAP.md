# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,330 lines**, about 1199 KB, roughly **341 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `67c12f0` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,071 | the whole stylesheet, every token and rule |
| **Markup** | 3,072–3,819 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,820–14,277 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,278–14,330 | </body></html> |

Counts: **253** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,825_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,829 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,830 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,831 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,849 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,853 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,858_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,868 | `wheelMeta` | `var wheelMeta =` |
| 3,879 | `seasonOverride` | `var seasonOverride =` |
| 3,882 | `cycleNowNote` | `var cycleNowNote =` |
| 3,891 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,977 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,022 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,035_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,052 | `LIVE` | `function LIVE(` |
| 4,079 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,087 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,088 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,091_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,122 | `repaintFigureText` | `function repaintFigureText(` |
| 4,135 | `repaintRow` | `function repaintRow(` |
| 4,148 | `repaintTag` | `function repaintTag(` |
| 4,158 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,183 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,191 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,199 | `REPAINT` | `var REPAINT =` |
| 4,216 | `liveAsOf` | `var liveAsOf =` |
| 4,217 | `fmtAsOf` | `function fmtAsOf(` |
| 4,222 | `applyLive` | `function applyLive(` |
| 4,301 | `repaintPolicy` | `function repaintPolicy(` |
| 4,357 | `GYN` | `var GYN =` |
| 4,377 | `refreshLiveData` | `function refreshLiveData(` |
| 4,418 | `fetchSiteData` | `function fetchSiteData(` |
| 4,448 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,462_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,463 | `yieldCurve` | `var yieldCurve =` |
| 4,476 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,500 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,512 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,540_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,545 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,569 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,593 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,617 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,644 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,669_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,678 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,688 | `uninvLagToday` | `var uninvLagToday =` |
| 4,700 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,713 | `gdpPeers` | `var gdpPeers =` |
| 4,754 | `gdpSrc` | `var gdpSrc =` |
| 4,755 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,760 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,773 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,811_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,833 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,843_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,859 | `stressScoreFor` | `function stressScoreFor(` |
| 4,865 | `stressScore` | `var stressScore =` |
| 4,871 | `powerOf` | `var powerOf =` |
| 4,872 | `powerScore` | `var powerScore =` |
| 4,889 | `stressHistory` | `var stressHistory =` |
| 4,900 | `powerMeter` | `var powerMeter =` |
| 4,902 | `stressNoteFull` | `var stressNoteFull =` |
| 4,934 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,936_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,959 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,960 | `deficitHistory` | `var deficitHistory =` |
| 4,963 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,970 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,972 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,020 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,021 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,022 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,039_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,052 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,065_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,079 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,082 | `timelineSpan` | `function timelineSpan(` |
| 5,088 | `timelineFor` | `function timelineFor(` |
| 5,101 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,107_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,113 | `windowScale` | `function windowScale(` |
| 5,129 | `windowYears` | `function windowYears(` |
| 5,147 | `refName` | `function refName(` |
| 5,154 | `histReadEnsure` | `function histReadEnsure(` |
| 5,193 | `seatBandReading` | `function seatBandReading(` |
| 5,216 | `histReadFill` | `function histReadFill(` |
| 5,344 | `histAxisEnds` | `function histAxisEnds(` |
| 5,355 | `histLegend` | `function histLegend(` |
| 5,443 | `refitHistory` | `function refitHistory(` |
| 5,455 | `wireHistHover` | `function wireHistHover(` |
| 5,514 | `mWindowFrom` | `function mWindowFrom(` |
| 5,519 | `qWindowFrom` | `function qWindowFrom(` |
| 5,524 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,525 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,527 | `DEF_1983` | `var DEF_1983 =` |
| 5,529 | `defFrom` | `function defFrom(` |
| 5,540 | `deficitChart` | `function deficitChart(` |
| 5,630 | `deficitBlock` | `function deficitBlock(` |
| 5,692 | `buffettHistory` | `var buffettHistory =` |
| 5,722 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,723 | `hyDates` | `var hyDates =` |
| 5,724 | `hyOas` | `var hyOas =` |
| 5,725 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,732 | `hyAt` | `function hyAt(` |
| 5,736 | `hyLabel` | `function hyLabel(` |
| 5,737 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,738 | `hyNum` | `function hyNum(` |
| 5,739 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,749 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,759 | `capeHistory` | `var capeHistory =` |
| 5,761 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,779_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,785 | `sentiment` | `var sentiment =` |
| 5,803 | `valuation` | `var valuation =` |
| 5,840 | `valRow` | `function valRow(` |
| 5,848 | `coincident` | `var coincident =` |
| 5,909 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,927 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,928 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,929 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,931_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,944 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,945 | `m2vHistory` | `var m2vHistory =` |
| 5,965 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,058 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,148 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,149 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,189_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,195 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,196 | `DOTS` | `var DOTS =` |
| 6,198 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,232 | `histHead` | `function histHead(` |
| 6,256 | `headNoteIdx` | `var headNoteIdx =` |
| 6,257 | `headMenuHtml` | `function headMenuHtml(` |
| 6,315 | `headMenuFor` | `var headMenuFor =` |
| 6,317 | `headSubFor` | `var headSubFor =` |
| 6,318 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,363 | `nameWithMark` | `function nameWithMark(` |
| 6,369 | `panelRow` | `function panelRow(` |
| 6,402 | `panelFromMeter` | `function panelFromMeter(` |
| 6,416 | `meterFlagged` | `function meterFlagged(` |
| 6,427 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,455 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,469 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,488 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,507 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,521 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,546 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,577 | `desireBlock` | `function desireBlock(` |
| 6,604 | `volumeBlock` | `function volumeBlock(` |
| 6,629 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,652 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,660_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,673 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,674 | `m2Level` | `var m2Level =` |
| 6,696 | `m2Yoy` | `var m2Yoy =` |
| 6,697 | `M2_NORM` | `var M2_NORM =` |
| 6,702 | `volumeVerdict` | `function volumeVerdict(` |
| 6,739 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,740 | `unempHistory` | `var unempHistory =` |
| 6,746 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,761 | `NROU_NOW` | `var NROU_NOW =` |
| 6,762 | `unempState` | `function unempState(` |
| 6,768 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,832_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,841 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,850_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,863 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,876 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 6,932 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,987 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,988 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,991 | `qAtIndex` | `function qAtIndex(` |
| 6,992 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,000_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,015 | `householdsChart` | `function householdsChart(` |
| 7,083 | `lastChartAvg` | `var lastChartAvg =` |
| 7,084 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,169 | `GDP_NORM` | `var GDP_NORM =` |
| 7,175 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,176 | `gdpNowQ` | `var gdpNowQ =` |
| 7,177 | `gdpMeter` | `var gdpMeter =` |
| 7,180 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,202 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,268 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,332 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,340 | `velocityVerdict` | `function velocityVerdict(` |
| 7,348 | `derivePulseTag` | `function derivePulseTag(` |
| 7,354 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,414_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,423 | `seasonReading` | `var seasonReading =` |
| 7,472 | `frameworkRows` | `var frameworkRows =` |
| 7,482 | `vixRow` | `var vixRow =` |
| 7,490 | `vixWordOf` | `var vixWordOf =` |
| 7,494 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,509_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,513 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,522_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,523 | `calendarTodayY` | `var calendarTodayY =` |
| 7,554 | `vix3mClose` | `var vix3mClose =` |
| 7,555 | `fearCurve` | `function fearCurve(` |
| 7,562 | `curveVerdict` | `function curveVerdict(` |
| 7,569 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,574 | `valuationVerdict` | `function valuationVerdict(` |
| 7,592 | `sparkHtml` | `function sparkHtml(` |
| 7,611 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,617_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,630 | `modeBar` | `function modeBar(` |
| 7,645 | `pickerOpen` | `var pickerOpen =` |
| 7,649 | `cycleByName` | `function cycleByName(` |
| 7,653 | `openCycle` | `function openCycle(` |
| 7,659 | `cycleSlice` | `function cycleSlice(` |
| 7,668 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,676 | `cycleMonths` | `function cycleMonths(` |
| 7,695 | `histControls` | `function histControls(` |
| 7,709 | `cycLabel` | `function cycLabel(` |
| 7,725 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,734 | `cyclePicker` | `function cyclePicker(` |
| 7,753 | `rangeBar` | `function rangeBar(` |
| 7,765 | `trendOf` | `function trendOf(` |
| 7,810 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,820 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,841_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,842 | `yearOf` | `function yearOf(` |
| 7,843 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,844_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,882 | `headSigma` | `function headSigma(` |
| 7,890 | `atQuarter` | `function atQuarter(` |
| 7,891 | `atMonth` | `function atMonth(` |
| 7,892 | `cycleAverages` | `function cycleAverages(` |
| 7,899 | `ordinal` | `function ordinal(` |
| 7,900 | `hiCard` | `function hiCard(` |
| 7,911 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,925_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,932 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,948 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,955 | `moreRow` | `function moreRow(` |
| 7,961 | `powerPageNote` | `var powerPageNote =` |
| 7,962 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,974_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,977 | `xLabelOf` | `function xLabelOf(` |
| 7,997 | `fitGroup` | `function fitGroup(` |
| 8,019 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,078_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,102 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,112 | `vGrid` | `function vGrid(` |
| 8,137 | `COL_FILL` | `var COL_FILL =` |
| 8,170 | `colPath` | `function colPath(` |
| 8,175 | `colWidth` | `function colWidth(` |
| 8,222 | `AXIS` | `var AXIS =` |
| 8,223 | `chartAxes` | `function chartAxes(` |
| 8,283 | `divergeChart` | `function divergeChart(` |
| 8,351 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,380_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,388 | `maxIn` | `function maxIn(` |
| 8,406 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,420 | `PEEK_W` | `var PEEK_W =` |
| 8,423 | `PEEK_H` | `var PEEK_H =` |
| 8,428 | `colPeek` | `function colPeek(` |
| 8,455 | `meterPeek` | `function meterPeek(` |
| 8,472 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,477 | `pressureZone` | `function pressureZone(` |
| 8,492 | `HZN_BACK` | `var HZN_BACK =` |
| 8,493 | `hznLast` | `function hznLast(` |
| 8,494 | `hznBack` | `function hznBack(` |
| 8,495 | `horizonWord` | `function horizonWord(` |
| 8,520 | `HZN_METERS` | `var HZN_METERS =` |
| 8,528 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,569 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,574 | `RISK_RISK` | `var RISK_RISK =` |
| 8,579 | `riskCell` | `function riskCell(` |
| 8,580 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,611 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,636_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,657 | `pulseClipN` | `var pulseClipN =` |
| 8,658 | `beatPath` | `function beatPath(` |
| 8,683 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,697 | `pulsePeek` | `function pulsePeek(` |
| 8,705 | `pulseBlock` | `function pulseBlock(` |
| 8,725 | `CHEV` | `var CHEV =` |
| 8,727 | `peekCard` | `function peekCard(` |
| 8,781 | `dropSvg` | `function dropSvg(` |
| 8,793 | `volumeSvg` | `function volumeSvg(` |
| 8,800 | `gaugeSvg` | `function gaugeSvg(` |
| 8,804 | `diamondSvg` | `function diamondSvg(` |
| 8,818 | `energyFromReserve` | `function energyFromReserve(` |
| 8,830 | `sproutSvg` | `function sproutSvg(` |
| 8,841 | `markSvg` | `function markSvg(` |
| 8,850 | `pressureSvg` | `function pressureSvg(` |
| 8,854 | `hormoneSvg` | `function hormoneSvg(` |
| 8,860 | `flameSvg` | `function flameSvg(` |
| 8,864 | `gearSvg` | `function gearSvg(` |
| 8,876 | `thermoSvg` | `function thermoSvg(` |
| 8,895 | `trendUpSvg` | `function trendUpSvg(` |
| 8,897 | `ecgSvg` | `function ecgSvg(` |
| 8,911 | `circulationSvg` | `function circulationSvg(` |
| 8,912 | `weatherSvg` | `function weatherSvg(` |
| 8,933 | `moodSvg` | `function moodSvg(` |
| 8,957 | `boltSvg` | `function boltSvg(` |
| 8,960 | `houseSvg` | `function houseSvg(` |
| 8,968 | `sunriseSvg` | `function sunriseSvg(` |
| 8,983 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,994 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,011_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,032 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,033 | `dsrHistory` | `var dsrHistory =` |
| 9,034 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,035 | `savHistory` | `var savHistory =` |
| 9,040 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,050 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,051 | `dsrNow` | `var dsrNow =` |
| 9,052 | `savNow` | `var savNow =` |
| 9,053 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,058 | `householdsWord` | `function householdsWord(` |
| 9,065 | `householdsNow` | `var householdsNow =` |
| 9,072 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,073 | `dsrMeter` | `var dsrMeter =` |
| 9,076 | `savMeter` | `var savMeter =` |
| 9,079 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,096 | `savInfoHtml` | `function savInfoHtml(` |
| 9,114 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,123 | `curveNow` | `var curveNow =` |
| 9,124 | `curveTag` | `var curveTag =` |
| 9,125 | `curveSub` | `var curveSub =` |
| 9,129 | `curvePct` | `function curvePct(` |
| 9,130 | `curveNoteFull` | `var curveNoteFull =` |
| 9,145 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,153 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,194 | `marketCycles` | `var marketCycles =` |
| 9,224 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,226_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,247 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,248 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,253_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,274 | `slopeOf` | `function slopeOf(` |
| 9,285 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,291 | `readSeason` | `function readSeason(` |
| 9,316 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,318 | `qLabel` | `function qLabel(` |
| 9,342 | `regimeTrack` | `function regimeTrack(` |
| 9,365 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,367_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,374 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,375 | `seasonTitle` | `function seasonTitle(` |
| 9,376 | `monthLabel` | `function monthLabel(` |
| 9,377 | `cycleModel` | `function cycleModel(` |
| 9,429 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,437 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,444 | `nowModel` | `var nowModel =` |
| 9,445 | `readingNow` | `var readingNow =` |
| 9,446 | `cpiNow` | `var cpiNow =` |
| 9,447 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,448 | `currentSeason` | `var currentSeason =` |
| 9,449 | `seasonWhy` | `var seasonWhy =` |
| 9,466 | `seasonGroup` | `function seasonGroup(` |
| 9,480 | `arcGauge` | `function arcGauge(` |
| 9,522 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,535 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,542 | `tsyView` | `var tsyView =` |
| 9,544 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,546 | `spreadLabel` | `function spreadLabel(` |
| 9,553 | `policyFacts` | `function policyFacts(` |
| 9,565 | `allSources` | `var allSources =` |
| 9,589 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,622_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,625 | `SVG_NS` | `var SVG_NS =` |
| 9,626 | `svgEl` | `function svgEl(` |
| 9,639 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,675_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,676 | `clampPct` | `function clampPct(` |
| 9,683 | `infoIcon` | `function infoIcon(` |
| 9,692 | `detailTexts` | `var detailTexts =` |
| 9,710 | `detailSlots` | `var detailSlots =` |
| 9,711 | `detailSlot` | `function detailSlot(` |
| 9,722 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,726 | `_growthPanel` | `var _growthPanel =` |
| 9,727 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,733 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,744 | `facts` | `function facts(` |
| 9,745 | `factsFrom` | `function factsFrom(` |
| 9,749 | `expandBtn` | `function expandBtn(` |
| 9,755 | `sheetRenderers` | `var sheetRenderers =` |
| 9,772 | `pageMode` | `var pageMode =` |
| 9,779 | `pageCycles` | `var pageCycles =` |
| 9,784 | `pageRange` | `var pageRange =` |
| 9,790 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,824_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,835 | `meterHtml` | `function meterHtml(` |
| 9,863 | `srcHtml` | `function srcHtml(` |
| 9,872 | `TIMING` | `var TIMING =` |
| 9,878 | `timingMark` | `function timingMark(` |
| 9,892 | `timingPill` | `function timingPill(` |
| 9,913 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,921 | `seatPageFoot` | `function seatPageFoot(` |
| 9,944 | `timingMembers` | `var timingMembers =` |
| 9,945 | `registerTiming` | `function registerTiming(` |
| 9,951 | `headHtml` | `function headHtml(` |
| 9,969 | `heldHighlights` | `var heldHighlights =` |
| 9,970 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,028_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,029 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,462_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,463 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,686_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,687 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,719_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,725 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,809_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,810 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,828_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,831 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,854_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,866 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 10,957_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,966 | `lendingWord` | `function lendingWord(` |
| 10,974 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,034_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,035 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,159_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,162 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,284_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,296 | `totalRiseIn` | `function totalRiseIn(` |
| 11,306 | `eraInflation` | `function eraInflation(` |
| 11,317 | `eraGrowth` | `function eraGrowth(` |
| 11,333 | `fmtSigned` | `function fmtSigned(` |
| 11,338 | `regimeArrow` | `function regimeArrow(` |
| 11,344 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,345 | `growthShown` | `function growthShown(` |
| 11,346 | `growthShownCap` | `function growthShownCap(` |
| 11,347 | `regimeState` | `function regimeState(` |
| 11,351 | `phaseClass` | `function phaseClass(` |
| 11,353 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,365 | `cycleViewEl` | `var cycleViewEl =` |
| 11,369 | `tempCard` | `var tempCard =` |
| 11,370 | `placeCharts` | `function placeCharts(` |
| 11,375 | `shownEra` | `var shownEra =` |
| 11,376 | `calendarReset` | `var calendarReset =` |
| 11,377 | `metricPageReset` | `var metricPageReset =` |
| 11,378 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,381 | `topbarBack` | `var topbarBack =` |
| 11,382 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,389_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,390 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,551_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,552 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,570_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,573 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,594_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,600 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,603 | `hubSet` | `function hubSet(` |
| 11,616 | `quarterPopup` | `function quarterPopup(` |
| 11,649 | `hubShowDefault` | `function hubShowDefault(` |
| 11,658 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,664 | `hubShowYear` | `function hubShowYear(` |
| 11,679 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,771_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,774 | `tempState` | `var tempState =` |
| 11,777 | `chartLink` | `var chartLink =` |
| 11,797 | `m2Step` | `function m2Step(` |
| 11,800 | `heatStep` | `function heatStep(` |
| 11,804 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,991_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,994 | `drawGrowth` | `function drawGrowth(` |
| 12,133 | `wireResize` | `function wireResize(` |
| 12,139 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,151_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,152 | `renderCycleView` | `function renderCycleView(` |
| 12,205 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,216 | `PEER_CARET` | `var PEER_CARET =` |
| 12,217 | `peerList` | `function peerList(` |
| 12,218 | `peerChosen` | `function peerChosen(` |
| 12,219 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,223 | `renderPeerPills` | `function renderPeerPills(` |
| 12,273 | `shownEraModel` | `var shownEraModel =` |
| 12,274 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,276_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,278 | `stripGroupName` | `var stripGroupName =` |
| 12,279 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,325 | `marketStripHtml` | `function marketStripHtml(` |
| 12,388 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,389 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,419_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,420 | `renderCycleList` | `function renderCycleList(` |
| 12,510 | `renderSignsList` | `function renderSignsList(` |
| 12,795 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,076_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,077 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,139_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,140 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,173_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,174 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,048–4,051 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,501–8,514 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,325–9,338 | `seasonTrackAll` | The season, computed |
| 9,360–9,364 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,536 |
| `desire-range` | 10,351 |
| `fear-range` | 11,124 |
| `hormones-range` | 10,901 |
| `hzn-range` | 10,455 |
| `hzn-spread` | 10,449 |
| `pressure-range` | 11,001 |
| `pulse-range` | 10,302 |
| `sheet-marker-deficit` | 13,533 |
| `sheet-metric-gdp` | 13,417 |
| `sheet-metric-households` | 13,567 |
| `sheet-metric-power` | 13,496 |
| `sheet-metric-temp` | 13,367 |
| `sheet-metric-valuation` | 13,612 |
| `sheet-sign-activity` | 13,478 |
| `sheet-sign-desire` | 10,352 |
| `sheet-sign-horizon` | 10,456 |
| `sheet-sign-hormones` | 10,904 |
| `sheet-sign-pressure` | 11,002 |
| `sheet-sign-pulse` | 10,301 |
| `sheet-sign-sentiment` | 11,129 |
| `sheet-sign-volume` | 10,325 |
| `volume-range` | 10,326 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,542 |
| `desire-range` | 10,334 |
| `fear-range` | 11,081 |
| `hzn-range` | 10,380 |
| `pulse-range` | 10,279 |
| `sheet-metric-gdp` | 13,418 |
| `sheet-metric-power` | 13,497 |
| `sheet-metric-temp` | 13,368 |
| `sheet-metric-valuation` | 13,613 |
| `volume-range` | 10,306 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,205 |
| `sheet-metric-gdp` | 6,206 |
| `sheet-sign-activity` | 6,213 |
| `sheet-metric-power` | 6,214 |
| `sheet-metric-valuation` | 6,216 |
| `sheet-metric-households` | 6,217 |
| `deficit-range` | 6,218 |
| `volume-range` | 6,219 |
| `pulse-range` | 6,220 |
| `hzn-range` | 6,226 |
| `desire-range` | 6,227 |
| `fear-range` | 6,228 |
| `hormones-range` | 6,229 |
| `pressure-range` | 6,230 |

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
| 2,466 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,514 | hero: yield curve |
| 2,610 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,689 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,788 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,813 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,828 | long cycle (structural layer) |
| 2,869 | indicator grid |
| 2,912 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,929 | info icon + popover (progressive disclosure for longer notes) |
| 2,950 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,045 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (142), which is what the renderers fill:

| Line | id |
|---|---|
| 3,077 | `topbar-back` |
| 3,080 | `topbar-title` |
| 3,081 | `menu-btn` |
| 3,098 | `main` |
| 3,105 | `cycle-view` |
| 3,113 | `cycle-kicker` |
| 3,119 | `cycle-dial` |
| 3,121 | `season-wheel-hub-date` |
| 3,122 | `season-wheel-hub-theme` |
| 3,123 | `season-wheel-hub-detail` |
| 3,131 | `temp-card` |
| 3,133 | `temp-kicker` |
| 3,134 | `temp-sub` |
| 3,137 | `temp-svg` |
| 3,138 | `temp-tooltip` |
| 3,144 | `temp-stats` |
| 3,151 | `growth-card` |
| 3,154 | `growth-kicker` |
| 3,154 | `growth-phase` |
| 3,154 | `growth-sub` |
| 3,154 | `growth-peers` |
| 3,155 | `growth-svg` |
| 3,155 | `growth-tooltip` |
| 3,160 | `growth-stats` |
| 3,169 | `today-analysis` |
| 3,173 | `peek-row` |
| 3,177 | `sheet-metric-temp` |
| 3,178 | `temp-timing` |
| 3,179 | `temp-chart` |
| 3,181 | `temp-rangebar` |
| 3,183 | `temp-head` |
| 3,184 | `slot-temp` |
| 3,185 | `temp-history` |
| 3,186 | `temp-hist-tooltip` |
| 3,189 | `temp-trend` |
| 3,193 | `temp-highlights` |
| 3,196 | `sheet-metric-gdp` |
| 3,197 | `gdp-timing` |
| 3,198 | `gdp-chart` |
| 3,199 | `gdp-rangebar` |
| 3,201 | `gdp-head` |
| 3,202 | `slot-growth` |
| 3,203 | `gdp-history` |
| 3,204 | `gdp-hist-tooltip` |
| 3,205 | `gdp-yoy` |
| 3,215 | `gdp-trend` |
| 3,217 | `gdp-panel` |
| 3,222 | `subj-ring-gdp` |
| 3,224 | `subj-label-gdp` |
| 3,225 | `subj-value-gdp` |
| 3,226 | `subj-say-gdp` |
| 3,227 | `subj-spark-gdp` |
| 3,232 | `subj-ctx-gdp` |
| 3,235 | `gdp-highlights` |
| 3,243 | `sheet-metric-power` |
| 3,244 | `power-timing` |
| 3,245 | `power-head` |
| 3,246 | `power-chart` |
| 3,250 | `subj-ring-resilience` |
| 3,253 | `subj-value-resilience` |
| 3,254 | `subj-say-resilience` |
| 3,259 | `subj-ctx-resilience` |
| 3,263 | `longcycle-title` |
| 3,265 | `longcycle-tag` |
| 3,279 | `power-highlights` |
| 3,286 | `sheet-marker-deficit` |
| 3,292 | `sheet-metric-households` |
| 3,293 | `households-timing` |
| 3,294 | `households-chart` |
| 3,295 | `households-highlights` |
| 3,299 | `sheet-metric-valuation` |
| 3,300 | `valuation-timing` |
| 3,301 | `valuation-head` |
| 3,302 | `valuation-chart` |
| 3,306 | `subj-ring-valuation` |
| 3,309 | `subj-value-valuation` |
| 3,310 | `subj-say-valuation` |
| 3,315 | `subj-ctx-valuation` |
| 3,319 | `valuation-title` |
| 3,321 | `valuation-tag` |
| 3,328 | `valuation-highlights` |
| 3,352 | `subj-value-hormones` |
| 3,353 | `subj-say-hormones` |
| 3,361 | `hormones-history` |
| 3,371 | `hormones-highlights` |
| 3,397 | `subj-value-horizon` |
| 3,398 | `subj-say-horizon` |
| 3,399 | `subj-spark-horizon` |
| 3,409 | `hzn-timeline` |
| 3,411 | `hzn-head` |
| 3,412 | `spread-history-shell` |
| 3,413 | `spread-history-svg` |
| 3,414 | `spread-history-tooltip` |
| 3,419 | `ylm-shell` |
| 3,420 | `ylm-svg` |
| 3,421 | `ylm-tooltip` |
| 3,424 | `hzn-trend` |
| 3,425 | `ylm-trend` |
| 3,427 | `horizon-insights` |
| 3,455 | `subj-value-pressure` |
| 3,456 | `subj-say-pressure` |
| 3,461 | `pressure-history` |
| 3,462 | `pressure-highlights` |
| 3,468 | `subj-ring-sentiment` |
| 3,471 | `subj-value-sentiment` |
| 3,472 | `subj-say-sentiment` |
| 3,473 | `subj-spark-sentiment` |
| 3,487 | `fear-history` |
| 3,488 | `curve-highlights` |
| 3,502 | `signs-list` |
| 3,513 | `calendar-list` |
| 3,518 | `indicators-peek` |
| 3,564 | `cycle-list` |
| 3,570 | `cycle-more` |
| 3,571 | `cycle-more-label` |
| 3,580 | `calendar-cycle` |
| 3,581 | `calendar-cycle-slot` |
| 3,632 | `seasons-kicker` |
| 3,633 | `seasons-rows` |
| 3,637 | `framework-kicker` |
| 3,639 | `framework-rows` |
| 3,646 | `more-menu` |
| 3,649 | `menu-back` |
| 3,663 | `sources-open` |
| 3,671 | `appearance-current` |
| 3,679 | `sheet-howto` |
| 3,723 | `sheet-book` |
| 3,755 | `sheet-appearance` |
| 3,763 | `theme-toggle` |
| 3,770 | `sheet-contact` |
| 3,779 | `contact-form` |
| 3,780 | `contact-title` |
| 3,781 | `contact-message` |
| 3,783 | `contact-hint` |
| 3,784 | `contact-send` |
| 3,793 | `sheet-sources` |
| 3,796 | `sources-back` |
| 3,803 | `asof-text` |
| 3,804 | `sources-groups` |
| 3,811 | `detail-backdrop` |
| 3,813 | `detail-modal-close` |
| 3,814 | `detail-modal-body` |

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

