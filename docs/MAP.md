# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,594 lines**, about 1219 KB, roughly **346 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `d0fd012` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,133 | the whole stylesheet, every token and rule |
| **Markup** | 3,134–3,902 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,903–14,541 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,542–14,594 | </body></html> |

Counts: **255** top-level functions, **181** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,908_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,912 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,913 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,914 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,932 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,936 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,941_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,951 | `wheelMeta` | `var wheelMeta =` |
| 3,962 | `seasonOverride` | `var seasonOverride =` |
| 3,965 | `cycleNowNote` | `var cycleNowNote =` |
| 3,974 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,060 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,105 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,118_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,135 | `LIVE` | `function LIVE(` |
| 4,162 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,170 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,171 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,174_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,205 | `repaintFigureText` | `function repaintFigureText(` |
| 4,218 | `repaintRow` | `function repaintRow(` |
| 4,231 | `repaintTag` | `function repaintTag(` |
| 4,241 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,266 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,274 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,282 | `REPAINT` | `var REPAINT =` |
| 4,299 | `liveAsOf` | `var liveAsOf =` |
| 4,300 | `fmtAsOf` | `function fmtAsOf(` |
| 4,305 | `applyLive` | `function applyLive(` |
| 4,384 | `repaintPolicy` | `function repaintPolicy(` |
| 4,438 | `GYN` | `var GYN =` |
| 4,458 | `refreshLiveData` | `function refreshLiveData(` |
| 4,499 | `fetchSiteData` | `function fetchSiteData(` |
| 4,529 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,543_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,544 | `yieldCurve` | `var yieldCurve =` |
| 4,557 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,581 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,593 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,621_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,626 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,650 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,674 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,698 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,725 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,750_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,759 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,769 | `uninvLagToday` | `var uninvLagToday =` |
| 4,781 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,794 | `gdpPeers` | `var gdpPeers =` |
| 4,835 | `gdpSrc` | `var gdpSrc =` |
| 4,836 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,841 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,854 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,892_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,914 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,924_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,940 | `stressScoreFor` | `function stressScoreFor(` |
| 4,946 | `stressScore` | `var stressScore =` |
| 4,952 | `powerOf` | `var powerOf =` |
| 4,953 | `powerScore` | `var powerScore =` |
| 4,970 | `stressHistory` | `var stressHistory =` |
| 4,981 | `powerMeter` | `var powerMeter =` |
| 4,983 | `stressNoteFull` | `var stressNoteFull =` |
| 5,015 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,017_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,040 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,041 | `deficitHistory` | `var deficitHistory =` |
| 5,044 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,051 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,053 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,101 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,102 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,103 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,120_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,133 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,146_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,160 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,163 | `timelineSpan` | `function timelineSpan(` |
| 5,169 | `timelineFor` | `function timelineFor(` |
| 5,182 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,188_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,194 | `windowScale` | `function windowScale(` |
| 5,210 | `windowYears` | `function windowYears(` |
| 5,228 | `refName` | `function refName(` |
| 5,235 | `histReadEnsure` | `function histReadEnsure(` |
| 5,274 | `seatBandReading` | `function seatBandReading(` |
| 5,297 | `histReadFill` | `function histReadFill(` |
| 5,425 | `histAxisEnds` | `function histAxisEnds(` |
| 5,436 | `histLegend` | `function histLegend(` |
| 5,524 | `refitHistory` | `function refitHistory(` |
| 5,536 | `wireHistHover` | `function wireHistHover(` |
| 5,616 | `mWindowFrom` | `function mWindowFrom(` |
| 5,621 | `qWindowFrom` | `function qWindowFrom(` |
| 5,626 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,627 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,629 | `DEF_1983` | `var DEF_1983 =` |
| 5,631 | `defFrom` | `function defFrom(` |
| 5,642 | `deficitChart` | `function deficitChart(` |
| 5,732 | `deficitBlock` | `function deficitBlock(` |
| 5,794 | `buffettHistory` | `var buffettHistory =` |
| 5,824 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,825 | `hyDates` | `var hyDates =` |
| 5,826 | `hyOas` | `var hyOas =` |
| 5,827 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,834 | `hyAt` | `function hyAt(` |
| 5,838 | `hyLabel` | `function hyLabel(` |
| 5,839 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,840 | `hyNum` | `function hyNum(` |
| 5,841 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,851 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,861 | `capeHistory` | `var capeHistory =` |
| 5,863 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,881_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,887 | `sentiment` | `var sentiment =` |
| 5,905 | `valuation` | `var valuation =` |
| 5,942 | `valRow` | `function valRow(` |
| 5,950 | `coincident` | `var coincident =` |
| 6,011 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,029 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,030 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,031 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,033_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,046 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,047 | `m2vHistory` | `var m2vHistory =` |
| 6,067 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,160 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,250 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,251 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,291_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,297 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,298 | `DOTS` | `var DOTS =` |
| 6,305 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,339 | `histHead` | `function histHead(` |
| 6,363 | `headNoteIdx` | `var headNoteIdx =` |
| 6,364 | `headMenuHtml` | `function headMenuHtml(` |
| 6,422 | `headMenuFor` | `var headMenuFor =` |
| 6,424 | `headSubFor` | `var headSubFor =` |
| 6,425 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,470 | `nameWithMark` | `function nameWithMark(` |
| 6,476 | `panelRow` | `function panelRow(` |
| 6,509 | `panelFromMeter` | `function panelFromMeter(` |
| 6,523 | `meterFlagged` | `function meterFlagged(` |
| 6,534 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,562 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,576 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,595 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,614 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,628 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,653 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,684 | `desireBlock` | `function desireBlock(` |
| 6,711 | `volumeBlock` | `function volumeBlock(` |
| 6,736 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,759 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,767_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,780 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,781 | `m2Level` | `var m2Level =` |
| 6,803 | `m2Yoy` | `var m2Yoy =` |
| 6,804 | `M2_NORM` | `var M2_NORM =` |
| 6,809 | `volumeVerdict` | `function volumeVerdict(` |
| 6,846 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,847 | `unempHistory` | `var unempHistory =` |
| 6,853 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,868 | `NROU_NOW` | `var NROU_NOW =` |
| 6,869 | `unempState` | `function unempState(` |
| 6,875 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,939_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,948 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,957_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,970 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,983 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,039 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,108 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,109 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,112 | `qAtIndex` | `function qAtIndex(` |
| 7,113 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,121_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,136 | `householdsChart` | `function householdsChart(` |
| 7,204 | `lastChartAvg` | `var lastChartAvg =` |
| 7,205 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,290 | `GDP_NORM` | `var GDP_NORM =` |
| 7,296 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,297 | `gdpNowQ` | `var gdpNowQ =` |
| 7,298 | `gdpMeter` | `var gdpMeter =` |
| 7,301 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,323 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,389 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,453 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,461 | `velocityVerdict` | `function velocityVerdict(` |
| 7,469 | `derivePulseTag` | `function derivePulseTag(` |
| 7,475 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,535_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,544 | `seasonReading` | `var seasonReading =` |
| 7,593 | `frameworkRows` | `var frameworkRows =` |
| 7,603 | `vixRow` | `var vixRow =` |
| 7,611 | `vixWordOf` | `var vixWordOf =` |
| 7,615 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,630_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,634 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,643_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,644 | `calendarTodayY` | `var calendarTodayY =` |
| 7,675 | `vix3mClose` | `var vix3mClose =` |
| 7,676 | `fearCurve` | `function fearCurve(` |
| 7,683 | `curveVerdict` | `function curveVerdict(` |
| 7,690 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,695 | `valuationVerdict` | `function valuationVerdict(` |
| 7,713 | `sparkHtml` | `function sparkHtml(` |
| 7,732 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,738_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,751 | `modeBar` | `function modeBar(` |
| 7,766 | `pickerOpen` | `var pickerOpen =` |
| 7,770 | `cycleByName` | `function cycleByName(` |
| 7,774 | `openCycle` | `function openCycle(` |
| 7,780 | `cycleSlice` | `function cycleSlice(` |
| 7,789 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,797 | `cycleMonths` | `function cycleMonths(` |
| 7,816 | `histControls` | `function histControls(` |
| 7,830 | `cycLabel` | `function cycLabel(` |
| 7,846 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,855 | `cyclePicker` | `function cyclePicker(` |
| 7,874 | `rangeBar` | `function rangeBar(` |
| 7,886 | `trendOf` | `function trendOf(` |
| 7,931 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,941 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,962_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,963 | `yearOf` | `function yearOf(` |
| 7,964 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,965_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,003 | `headSigma` | `function headSigma(` |
| 8,011 | `atQuarter` | `function atQuarter(` |
| 8,012 | `atMonth` | `function atMonth(` |
| 8,013 | `cycleAverages` | `function cycleAverages(` |
| 8,020 | `ordinal` | `function ordinal(` |
| 8,021 | `hiCard` | `function hiCard(` |
| 8,032 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,046_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,053 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,069 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,076 | `moreRow` | `function moreRow(` |
| 8,082 | `powerPageNote` | `var powerPageNote =` |
| 8,083 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,095_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,098 | `xLabelOf` | `function xLabelOf(` |
| 8,118 | `fitGroup` | `function fitGroup(` |
| 8,140 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,199_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,223 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,233 | `vGrid` | `function vGrid(` |
| 8,258 | `COL_FILL` | `var COL_FILL =` |
| 8,291 | `colPath` | `function colPath(` |
| 8,296 | `colWidth` | `function colWidth(` |
| 8,343 | `AXIS` | `var AXIS =` |
| 8,344 | `chartAxes` | `function chartAxes(` |
| 8,404 | `divergeChart` | `function divergeChart(` |
| 8,472 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,501_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,509 | `maxIn` | `function maxIn(` |
| 8,527 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,541 | `PEEK_W` | `var PEEK_W =` |
| 8,544 | `PEEK_H` | `var PEEK_H =` |
| 8,549 | `colPeek` | `function colPeek(` |
| 8,576 | `meterPeek` | `function meterPeek(` |
| 8,593 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,598 | `pressureZone` | `function pressureZone(` |
| 8,613 | `HZN_BACK` | `var HZN_BACK =` |
| 8,614 | `hznLast` | `function hznLast(` |
| 8,615 | `hznBack` | `function hznBack(` |
| 8,616 | `horizonWord` | `function horizonWord(` |
| 8,641 | `HZN_METERS` | `var HZN_METERS =` |
| 8,649 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,690 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,695 | `RISK_RISK` | `var RISK_RISK =` |
| 8,700 | `riskCell` | `function riskCell(` |
| 8,701 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,732 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,757_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,778 | `pulseClipN` | `var pulseClipN =` |
| 8,779 | `beatPath` | `function beatPath(` |
| 8,804 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,818 | `pulsePeek` | `function pulsePeek(` |
| 8,826 | `pulseBlock` | `function pulseBlock(` |
| 8,846 | `CHEV` | `var CHEV =` |
| 8,848 | `peekCard` | `function peekCard(` |
| 8,902 | `dropSvg` | `function dropSvg(` |
| 8,914 | `volumeSvg` | `function volumeSvg(` |
| 8,921 | `gaugeSvg` | `function gaugeSvg(` |
| 8,925 | `diamondSvg` | `function diamondSvg(` |
| 8,939 | `energyFromReserve` | `function energyFromReserve(` |
| 8,951 | `sproutSvg` | `function sproutSvg(` |
| 8,962 | `markSvg` | `function markSvg(` |
| 8,971 | `pressureSvg` | `function pressureSvg(` |
| 8,975 | `hormoneSvg` | `function hormoneSvg(` |
| 8,981 | `flameSvg` | `function flameSvg(` |
| 8,985 | `gearSvg` | `function gearSvg(` |
| 8,997 | `thermoSvg` | `function thermoSvg(` |
| 9,016 | `trendUpSvg` | `function trendUpSvg(` |
| 9,018 | `ecgSvg` | `function ecgSvg(` |
| 9,032 | `circulationSvg` | `function circulationSvg(` |
| 9,033 | `weatherSvg` | `function weatherSvg(` |
| 9,054 | `moodSvg` | `function moodSvg(` |
| 9,078 | `boltSvg` | `function boltSvg(` |
| 9,081 | `houseSvg` | `function houseSvg(` |
| 9,089 | `sunriseSvg` | `function sunriseSvg(` |
| 9,104 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,115 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,132_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,153 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,154 | `dsrHistory` | `var dsrHistory =` |
| 9,155 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,156 | `savHistory` | `var savHistory =` |
| 9,161 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,171 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,172 | `dsrNow` | `var dsrNow =` |
| 9,173 | `savNow` | `var savNow =` |
| 9,174 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,179 | `householdsWord` | `function householdsWord(` |
| 9,186 | `householdsNow` | `var householdsNow =` |
| 9,193 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,194 | `dsrMeter` | `var dsrMeter =` |
| 9,197 | `savMeter` | `var savMeter =` |
| 9,200 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,217 | `savInfoHtml` | `function savInfoHtml(` |
| 9,235 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,244 | `curveNow` | `var curveNow =` |
| 9,245 | `curveTag` | `var curveTag =` |
| 9,246 | `curveSub` | `var curveSub =` |
| 9,250 | `curvePct` | `function curvePct(` |
| 9,251 | `curveNoteFull` | `var curveNoteFull =` |
| 9,266 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,274 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,315 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610)

_line 9,343_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,351 | `marketTops` | `var marketTops =` |
| 9,356 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,361 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,363_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,384 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,385 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,390_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,411 | `slopeOf` | `function slopeOf(` |
| 9,422 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,428 | `readSeason` | `function readSeason(` |
| 9,453 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,455 | `qLabel` | `function qLabel(` |
| 9,479 | `regimeTrack` | `function regimeTrack(` |
| 9,502 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,504_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,511 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,512 | `seasonTitle` | `function seasonTitle(` |
| 9,513 | `monthLabel` | `function monthLabel(` |
| 9,514 | `cycleModel` | `function cycleModel(` |
| 9,566 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,574 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,581 | `nowModel` | `var nowModel =` |
| 9,582 | `readingNow` | `var readingNow =` |
| 9,583 | `cpiNow` | `var cpiNow =` |
| 9,584 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,585 | `currentSeason` | `var currentSeason =` |
| 9,586 | `seasonWhy` | `var seasonWhy =` |
| 9,603 | `seasonGroup` | `function seasonGroup(` |
| 9,617 | `arcGauge` | `function arcGauge(` |
| 9,659 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,672 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,679 | `tsyView` | `var tsyView =` |
| 9,681 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,683 | `spreadLabel` | `function spreadLabel(` |
| 9,690 | `policyFacts` | `function policyFacts(` |
| 9,704 | `policyFactRows` | `function policyFactRows(` |
| 9,710 | `allSources` | `var allSources =` |
| 9,734 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,767_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,770 | `SVG_NS` | `var SVG_NS =` |
| 9,771 | `svgEl` | `function svgEl(` |
| 9,784 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,820_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,821 | `clampPct` | `function clampPct(` |
| 9,828 | `infoIcon` | `function infoIcon(` |
| 9,837 | `detailTexts` | `var detailTexts =` |
| 9,855 | `detailSlots` | `var detailSlots =` |
| 9,856 | `detailSlot` | `function detailSlot(` |
| 9,867 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,871 | `_growthPanel` | `var _growthPanel =` |
| 9,872 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,878 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,889 | `facts` | `function facts(` |
| 9,890 | `factsFrom` | `function factsFrom(` |
| 9,894 | `expandBtn` | `function expandBtn(` |
| 9,900 | `sheetRenderers` | `var sheetRenderers =` |
| 9,917 | `pageMode` | `var pageMode =` |
| 9,924 | `pageCycles` | `var pageCycles =` |
| 9,929 | `pageRange` | `var pageRange =` |
| 9,935 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,969_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,980 | `meterHtml` | `function meterHtml(` |
| 10,008 | `srcHtml` | `function srcHtml(` |
| 10,017 | `TIMING` | `var TIMING =` |
| 10,023 | `timingMark` | `function timingMark(` |
| 10,037 | `timingPill` | `function timingPill(` |
| 10,058 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,066 | `seatPageFoot` | `function seatPageFoot(` |
| 10,089 | `timingMembers` | `var timingMembers =` |
| 10,090 | `registerTiming` | `function registerTiming(` |
| 10,096 | `headHtml` | `function headHtml(` |
| 10,114 | `heldHighlights` | `var heldHighlights =` |
| 10,115 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,173_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,174 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,607_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,608 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,831_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,832 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,864_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,870 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,954_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,955 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,973_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,976 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,999_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,011 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,142_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,151 | `lendingWord` | `function lendingWord(` |
| 11,159 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,219_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,220 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,344_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,347 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,469_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,481 | `totalRiseIn` | `function totalRiseIn(` |
| 11,491 | `eraInflation` | `function eraInflation(` |
| 11,502 | `eraGrowth` | `function eraGrowth(` |
| 11,518 | `fmtSigned` | `function fmtSigned(` |
| 11,523 | `regimeArrow` | `function regimeArrow(` |
| 11,529 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,530 | `growthShown` | `function growthShown(` |
| 11,531 | `growthShownCap` | `function growthShownCap(` |
| 11,532 | `regimeState` | `function regimeState(` |
| 11,536 | `phaseClass` | `function phaseClass(` |
| 11,538 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,550 | `cycleViewEl` | `var cycleViewEl =` |
| 11,554 | `tempCard` | `var tempCard =` |
| 11,555 | `placeCharts` | `function placeCharts(` |
| 11,560 | `shownEra` | `var shownEra =` |
| 11,561 | `calendarReset` | `var calendarReset =` |
| 11,562 | `metricPageReset` | `var metricPageReset =` |
| 11,563 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,566 | `topbarBack` | `var topbarBack =` |
| 11,567 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,574_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,575 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,736_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,737 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,755_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,758 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,779_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,785 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,788 | `hubSet` | `function hubSet(` |
| 11,801 | `quarterPopup` | `function quarterPopup(` |
| 11,834 | `hubShowDefault` | `function hubShowDefault(` |
| 11,843 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,849 | `hubShowYear` | `function hubShowYear(` |
| 11,864 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,956_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,959 | `tempState` | `var tempState =` |
| 11,962 | `chartLink` | `var chartLink =` |
| 11,982 | `m2Step` | `function m2Step(` |
| 11,985 | `heatStep` | `function heatStep(` |
| 11,989 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,176_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,179 | `drawGrowth` | `function drawGrowth(` |
| 12,318 | `wireResize` | `function wireResize(` |
| 12,324 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,336_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,337 | `renderCycleView` | `function renderCycleView(` |
| 12,390 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,401 | `PEER_CARET` | `var PEER_CARET =` |
| 12,402 | `peerList` | `function peerList(` |
| 12,403 | `peerChosen` | `function peerChosen(` |
| 12,404 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,408 | `renderPeerPills` | `function renderPeerPills(` |
| 12,458 | `shownEraModel` | `var shownEraModel =` |
| 12,459 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,461_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,463 | `stripGroupName` | `var stripGroupName =` |
| 12,464 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,510 | `marketStripHtml` | `function marketStripHtml(` |
| 12,573 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,574 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,604_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,605 | `renderCycleList` | `function renderCycleList(` |
| 12,695 | `renderSignsList` | `function renderSignsList(` |
| 12,980 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Rhymes \u2014 today beside one past top (Version 610)

_line 14,257_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,272 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,340_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,341 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,403_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,404 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,437_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,438 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,131–4,134 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,622–8,635 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,462–9,475 | `seasonTrackAll` | The season, computed |
| 9,497–9,501 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,721 |
| `desire-range` | 10,496 |
| `fear-range` | 11,309 |
| `hormones-range` | 11,046 |
| `hzn-range` | 10,600 |
| `hzn-spread` | 10,594 |
| `pressure-range` | 11,186 |
| `pulse-range` | 10,447 |
| `sheet-marker-deficit` | 13,718 |
| `sheet-metric-gdp` | 13,602 |
| `sheet-metric-households` | 13,752 |
| `sheet-metric-power` | 13,681 |
| `sheet-metric-temp` | 13,552 |
| `sheet-metric-valuation` | 13,797 |
| `sheet-sign-activity` | 13,663 |
| `sheet-sign-desire` | 10,497 |
| `sheet-sign-horizon` | 10,601 |
| `sheet-sign-hormones` | 11,049 |
| `sheet-sign-pressure` | 11,187 |
| `sheet-sign-pulse` | 10,446 |
| `sheet-sign-sentiment` | 11,314 |
| `sheet-sign-volume` | 10,470 |
| `volume-range` | 10,471 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,727 |
| `desire-range` | 10,479 |
| `fear-range` | 11,266 |
| `hzn-range` | 10,525 |
| `pulse-range` | 10,424 |
| `sheet-metric-gdp` | 13,603 |
| `sheet-metric-power` | 13,682 |
| `sheet-metric-temp` | 13,553 |
| `sheet-metric-valuation` | 13,798 |
| `volume-range` | 10,451 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,312 |
| `sheet-metric-gdp` | 6,313 |
| `sheet-sign-activity` | 6,320 |
| `sheet-metric-power` | 6,321 |
| `sheet-metric-valuation` | 6,323 |
| `sheet-metric-households` | 6,324 |
| `deficit-range` | 6,325 |
| `volume-range` | 6,326 |
| `pulse-range` | 6,327 |
| `hzn-range` | 6,333 |
| `desire-range` | 6,334 |
| `fear-range` | 6,335 |
| `hormones-range` | 6,336 |
| `pressure-range` | 6,337 |

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
| 2,576 | hero: yield curve |
| 2,672 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,751 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,850 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,875 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,890 | long cycle (structural layer) |
| 2,931 | indicator grid |
| 2,974 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,991 | info icon + popover (progressive disclosure for longer notes) |
| 3,012 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,107 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (145), which is what the renderers fill:

| Line | id |
|---|---|
| 3,139 | `topbar-back` |
| 3,142 | `topbar-title` |
| 3,143 | `menu-btn` |
| 3,160 | `main` |
| 3,167 | `cycle-view` |
| 3,175 | `cycle-kicker` |
| 3,181 | `cycle-dial` |
| 3,183 | `season-wheel-hub-date` |
| 3,184 | `season-wheel-hub-theme` |
| 3,185 | `season-wheel-hub-detail` |
| 3,193 | `temp-card` |
| 3,195 | `temp-kicker` |
| 3,196 | `temp-sub` |
| 3,199 | `temp-svg` |
| 3,200 | `temp-tooltip` |
| 3,206 | `temp-stats` |
| 3,213 | `growth-card` |
| 3,216 | `growth-kicker` |
| 3,216 | `growth-phase` |
| 3,216 | `growth-sub` |
| 3,216 | `growth-peers` |
| 3,217 | `growth-svg` |
| 3,217 | `growth-tooltip` |
| 3,222 | `growth-stats` |
| 3,231 | `today-analysis` |
| 3,235 | `peek-row` |
| 3,239 | `sheet-metric-temp` |
| 3,240 | `temp-timing` |
| 3,241 | `temp-chart` |
| 3,243 | `temp-rangebar` |
| 3,245 | `temp-head` |
| 3,246 | `slot-temp` |
| 3,247 | `temp-history` |
| 3,248 | `temp-hist-tooltip` |
| 3,251 | `temp-trend` |
| 3,255 | `temp-highlights` |
| 3,258 | `sheet-metric-gdp` |
| 3,259 | `gdp-timing` |
| 3,260 | `gdp-chart` |
| 3,261 | `gdp-rangebar` |
| 3,263 | `gdp-head` |
| 3,264 | `slot-growth` |
| 3,265 | `gdp-history` |
| 3,266 | `gdp-hist-tooltip` |
| 3,267 | `gdp-yoy` |
| 3,277 | `gdp-trend` |
| 3,279 | `gdp-panel` |
| 3,284 | `subj-ring-gdp` |
| 3,286 | `subj-label-gdp` |
| 3,287 | `subj-value-gdp` |
| 3,288 | `subj-say-gdp` |
| 3,289 | `subj-spark-gdp` |
| 3,294 | `subj-ctx-gdp` |
| 3,297 | `gdp-highlights` |
| 3,305 | `sheet-metric-power` |
| 3,306 | `power-timing` |
| 3,307 | `power-head` |
| 3,308 | `power-chart` |
| 3,312 | `subj-ring-resilience` |
| 3,315 | `subj-value-resilience` |
| 3,316 | `subj-say-resilience` |
| 3,321 | `subj-ctx-resilience` |
| 3,325 | `longcycle-title` |
| 3,327 | `longcycle-tag` |
| 3,341 | `power-highlights` |
| 3,348 | `sheet-marker-deficit` |
| 3,354 | `sheet-metric-households` |
| 3,355 | `households-timing` |
| 3,356 | `households-chart` |
| 3,357 | `households-highlights` |
| 3,361 | `sheet-metric-valuation` |
| 3,362 | `valuation-timing` |
| 3,363 | `valuation-head` |
| 3,364 | `valuation-chart` |
| 3,368 | `subj-ring-valuation` |
| 3,371 | `subj-value-valuation` |
| 3,372 | `subj-say-valuation` |
| 3,377 | `subj-ctx-valuation` |
| 3,381 | `valuation-title` |
| 3,383 | `valuation-tag` |
| 3,390 | `valuation-highlights` |
| 3,414 | `subj-value-hormones` |
| 3,415 | `subj-say-hormones` |
| 3,423 | `hormones-history` |
| 3,433 | `hormones-insights` |
| 3,459 | `subj-value-horizon` |
| 3,460 | `subj-say-horizon` |
| 3,461 | `subj-spark-horizon` |
| 3,471 | `hzn-timeline` |
| 3,473 | `hzn-head` |
| 3,474 | `spread-history-shell` |
| 3,475 | `spread-history-svg` |
| 3,476 | `spread-history-tooltip` |
| 3,481 | `ylm-shell` |
| 3,482 | `ylm-svg` |
| 3,483 | `ylm-tooltip` |
| 3,486 | `hzn-trend` |
| 3,487 | `ylm-trend` |
| 3,489 | `horizon-insights` |
| 3,517 | `subj-value-pressure` |
| 3,518 | `subj-say-pressure` |
| 3,523 | `pressure-history` |
| 3,524 | `pressure-highlights` |
| 3,530 | `subj-ring-sentiment` |
| 3,533 | `subj-value-sentiment` |
| 3,534 | `subj-say-sentiment` |
| 3,535 | `subj-spark-sentiment` |
| 3,549 | `fear-history` |
| 3,550 | `curve-highlights` |
| 3,564 | `signs-list` |
| 3,575 | `calendar-list` |
| 3,580 | `indicators-peek` |
| 3,589 | `rhymes-card` |
| 3,599 | `rhy-pick` |
| 3,600 | `rhy-body` |
| 3,647 | `cycle-list` |
| 3,653 | `cycle-more` |
| 3,654 | `cycle-more-label` |
| 3,663 | `calendar-cycle` |
| 3,664 | `calendar-cycle-slot` |
| 3,715 | `seasons-kicker` |
| 3,716 | `seasons-rows` |
| 3,720 | `framework-kicker` |
| 3,722 | `framework-rows` |
| 3,729 | `more-menu` |
| 3,732 | `menu-back` |
| 3,746 | `sources-open` |
| 3,754 | `appearance-current` |
| 3,762 | `sheet-howto` |
| 3,806 | `sheet-book` |
| 3,838 | `sheet-appearance` |
| 3,846 | `theme-toggle` |
| 3,853 | `sheet-contact` |
| 3,862 | `contact-form` |
| 3,863 | `contact-title` |
| 3,864 | `contact-message` |
| 3,866 | `contact-hint` |
| 3,867 | `contact-send` |
| 3,876 | `sheet-sources` |
| 3,879 | `sources-back` |
| 3,886 | `asof-text` |
| 3,887 | `sources-groups` |
| 3,894 | `detail-backdrop` |
| 3,896 | `detail-modal-close` |
| 3,897 | `detail-modal-body` |

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

