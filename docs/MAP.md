# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,391 lines**, about 1204 KB, roughly **342 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `d7fff68` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,092 | the whole stylesheet, every token and rule |
| **Markup** | 3,093–3,840 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,841–14,338 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,339–14,391 | </body></html> |

Counts: **253** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,846_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,850 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,851 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,852 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,870 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,874 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,879_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,889 | `wheelMeta` | `var wheelMeta =` |
| 3,900 | `seasonOverride` | `var seasonOverride =` |
| 3,903 | `cycleNowNote` | `var cycleNowNote =` |
| 3,912 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,998 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,043 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,056_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,073 | `LIVE` | `function LIVE(` |
| 4,100 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,108 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,109 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,112_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,143 | `repaintFigureText` | `function repaintFigureText(` |
| 4,156 | `repaintRow` | `function repaintRow(` |
| 4,169 | `repaintTag` | `function repaintTag(` |
| 4,179 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,204 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,212 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,220 | `REPAINT` | `var REPAINT =` |
| 4,237 | `liveAsOf` | `var liveAsOf =` |
| 4,238 | `fmtAsOf` | `function fmtAsOf(` |
| 4,243 | `applyLive` | `function applyLive(` |
| 4,322 | `repaintPolicy` | `function repaintPolicy(` |
| 4,378 | `GYN` | `var GYN =` |
| 4,398 | `refreshLiveData` | `function refreshLiveData(` |
| 4,439 | `fetchSiteData` | `function fetchSiteData(` |
| 4,469 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,483_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,484 | `yieldCurve` | `var yieldCurve =` |
| 4,497 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,521 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,533 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,561_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,566 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,590 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,614 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,638 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,665 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,690_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,699 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,709 | `uninvLagToday` | `var uninvLagToday =` |
| 4,721 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,734 | `gdpPeers` | `var gdpPeers =` |
| 4,775 | `gdpSrc` | `var gdpSrc =` |
| 4,776 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,781 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,794 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,832_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,854 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,864_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,880 | `stressScoreFor` | `function stressScoreFor(` |
| 4,886 | `stressScore` | `var stressScore =` |
| 4,892 | `powerOf` | `var powerOf =` |
| 4,893 | `powerScore` | `var powerScore =` |
| 4,910 | `stressHistory` | `var stressHistory =` |
| 4,921 | `powerMeter` | `var powerMeter =` |
| 4,923 | `stressNoteFull` | `var stressNoteFull =` |
| 4,955 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,957_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,980 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,981 | `deficitHistory` | `var deficitHistory =` |
| 4,984 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,991 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,993 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,041 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,042 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,043 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,060_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,073 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,086_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,100 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,103 | `timelineSpan` | `function timelineSpan(` |
| 5,109 | `timelineFor` | `function timelineFor(` |
| 5,122 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,128_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,134 | `windowScale` | `function windowScale(` |
| 5,150 | `windowYears` | `function windowYears(` |
| 5,168 | `refName` | `function refName(` |
| 5,175 | `histReadEnsure` | `function histReadEnsure(` |
| 5,214 | `seatBandReading` | `function seatBandReading(` |
| 5,237 | `histReadFill` | `function histReadFill(` |
| 5,365 | `histAxisEnds` | `function histAxisEnds(` |
| 5,376 | `histLegend` | `function histLegend(` |
| 5,464 | `refitHistory` | `function refitHistory(` |
| 5,476 | `wireHistHover` | `function wireHistHover(` |
| 5,556 | `mWindowFrom` | `function mWindowFrom(` |
| 5,561 | `qWindowFrom` | `function qWindowFrom(` |
| 5,566 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,567 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,569 | `DEF_1983` | `var DEF_1983 =` |
| 5,571 | `defFrom` | `function defFrom(` |
| 5,582 | `deficitChart` | `function deficitChart(` |
| 5,672 | `deficitBlock` | `function deficitBlock(` |
| 5,734 | `buffettHistory` | `var buffettHistory =` |
| 5,764 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,765 | `hyDates` | `var hyDates =` |
| 5,766 | `hyOas` | `var hyOas =` |
| 5,767 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,774 | `hyAt` | `function hyAt(` |
| 5,778 | `hyLabel` | `function hyLabel(` |
| 5,779 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,780 | `hyNum` | `function hyNum(` |
| 5,781 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,791 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,801 | `capeHistory` | `var capeHistory =` |
| 5,803 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,821_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,827 | `sentiment` | `var sentiment =` |
| 5,845 | `valuation` | `var valuation =` |
| 5,882 | `valRow` | `function valRow(` |
| 5,890 | `coincident` | `var coincident =` |
| 5,951 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,969 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,970 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,971 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,973_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,986 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,987 | `m2vHistory` | `var m2vHistory =` |
| 6,007 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,100 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,190 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,191 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,231_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,237 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,238 | `DOTS` | `var DOTS =` |
| 6,245 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,279 | `histHead` | `function histHead(` |
| 6,303 | `headNoteIdx` | `var headNoteIdx =` |
| 6,304 | `headMenuHtml` | `function headMenuHtml(` |
| 6,362 | `headMenuFor` | `var headMenuFor =` |
| 6,364 | `headSubFor` | `var headSubFor =` |
| 6,365 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,410 | `nameWithMark` | `function nameWithMark(` |
| 6,416 | `panelRow` | `function panelRow(` |
| 6,449 | `panelFromMeter` | `function panelFromMeter(` |
| 6,463 | `meterFlagged` | `function meterFlagged(` |
| 6,474 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,502 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,516 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,535 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,554 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,568 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,593 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,624 | `desireBlock` | `function desireBlock(` |
| 6,651 | `volumeBlock` | `function volumeBlock(` |
| 6,676 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,699 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,707_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,720 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,721 | `m2Level` | `var m2Level =` |
| 6,743 | `m2Yoy` | `var m2Yoy =` |
| 6,744 | `M2_NORM` | `var M2_NORM =` |
| 6,749 | `volumeVerdict` | `function volumeVerdict(` |
| 6,786 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,787 | `unempHistory` | `var unempHistory =` |
| 6,793 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,808 | `NROU_NOW` | `var NROU_NOW =` |
| 6,809 | `unempState` | `function unempState(` |
| 6,815 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,879_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,888 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,897_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,910 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,923 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 6,979 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,048 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,049 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,052 | `qAtIndex` | `function qAtIndex(` |
| 7,053 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,061_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,076 | `householdsChart` | `function householdsChart(` |
| 7,144 | `lastChartAvg` | `var lastChartAvg =` |
| 7,145 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,230 | `GDP_NORM` | `var GDP_NORM =` |
| 7,236 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,237 | `gdpNowQ` | `var gdpNowQ =` |
| 7,238 | `gdpMeter` | `var gdpMeter =` |
| 7,241 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,263 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,329 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,393 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,401 | `velocityVerdict` | `function velocityVerdict(` |
| 7,409 | `derivePulseTag` | `function derivePulseTag(` |
| 7,415 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,475_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,484 | `seasonReading` | `var seasonReading =` |
| 7,533 | `frameworkRows` | `var frameworkRows =` |
| 7,543 | `vixRow` | `var vixRow =` |
| 7,551 | `vixWordOf` | `var vixWordOf =` |
| 7,555 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,570_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,574 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,583_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,584 | `calendarTodayY` | `var calendarTodayY =` |
| 7,615 | `vix3mClose` | `var vix3mClose =` |
| 7,616 | `fearCurve` | `function fearCurve(` |
| 7,623 | `curveVerdict` | `function curveVerdict(` |
| 7,630 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,635 | `valuationVerdict` | `function valuationVerdict(` |
| 7,653 | `sparkHtml` | `function sparkHtml(` |
| 7,672 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,678_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,691 | `modeBar` | `function modeBar(` |
| 7,706 | `pickerOpen` | `var pickerOpen =` |
| 7,710 | `cycleByName` | `function cycleByName(` |
| 7,714 | `openCycle` | `function openCycle(` |
| 7,720 | `cycleSlice` | `function cycleSlice(` |
| 7,729 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,737 | `cycleMonths` | `function cycleMonths(` |
| 7,756 | `histControls` | `function histControls(` |
| 7,770 | `cycLabel` | `function cycLabel(` |
| 7,786 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,795 | `cyclePicker` | `function cyclePicker(` |
| 7,814 | `rangeBar` | `function rangeBar(` |
| 7,826 | `trendOf` | `function trendOf(` |
| 7,871 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,881 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,902_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,903 | `yearOf` | `function yearOf(` |
| 7,904 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,905_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,943 | `headSigma` | `function headSigma(` |
| 7,951 | `atQuarter` | `function atQuarter(` |
| 7,952 | `atMonth` | `function atMonth(` |
| 7,953 | `cycleAverages` | `function cycleAverages(` |
| 7,960 | `ordinal` | `function ordinal(` |
| 7,961 | `hiCard` | `function hiCard(` |
| 7,972 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,986_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,993 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,009 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,016 | `moreRow` | `function moreRow(` |
| 8,022 | `powerPageNote` | `var powerPageNote =` |
| 8,023 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,035_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,038 | `xLabelOf` | `function xLabelOf(` |
| 8,058 | `fitGroup` | `function fitGroup(` |
| 8,080 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,139_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,163 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,173 | `vGrid` | `function vGrid(` |
| 8,198 | `COL_FILL` | `var COL_FILL =` |
| 8,231 | `colPath` | `function colPath(` |
| 8,236 | `colWidth` | `function colWidth(` |
| 8,283 | `AXIS` | `var AXIS =` |
| 8,284 | `chartAxes` | `function chartAxes(` |
| 8,344 | `divergeChart` | `function divergeChart(` |
| 8,412 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,441_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,449 | `maxIn` | `function maxIn(` |
| 8,467 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,481 | `PEEK_W` | `var PEEK_W =` |
| 8,484 | `PEEK_H` | `var PEEK_H =` |
| 8,489 | `colPeek` | `function colPeek(` |
| 8,516 | `meterPeek` | `function meterPeek(` |
| 8,533 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,538 | `pressureZone` | `function pressureZone(` |
| 8,553 | `HZN_BACK` | `var HZN_BACK =` |
| 8,554 | `hznLast` | `function hznLast(` |
| 8,555 | `hznBack` | `function hznBack(` |
| 8,556 | `horizonWord` | `function horizonWord(` |
| 8,581 | `HZN_METERS` | `var HZN_METERS =` |
| 8,589 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,630 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,635 | `RISK_RISK` | `var RISK_RISK =` |
| 8,640 | `riskCell` | `function riskCell(` |
| 8,641 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,672 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,697_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,718 | `pulseClipN` | `var pulseClipN =` |
| 8,719 | `beatPath` | `function beatPath(` |
| 8,744 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,758 | `pulsePeek` | `function pulsePeek(` |
| 8,766 | `pulseBlock` | `function pulseBlock(` |
| 8,786 | `CHEV` | `var CHEV =` |
| 8,788 | `peekCard` | `function peekCard(` |
| 8,842 | `dropSvg` | `function dropSvg(` |
| 8,854 | `volumeSvg` | `function volumeSvg(` |
| 8,861 | `gaugeSvg` | `function gaugeSvg(` |
| 8,865 | `diamondSvg` | `function diamondSvg(` |
| 8,879 | `energyFromReserve` | `function energyFromReserve(` |
| 8,891 | `sproutSvg` | `function sproutSvg(` |
| 8,902 | `markSvg` | `function markSvg(` |
| 8,911 | `pressureSvg` | `function pressureSvg(` |
| 8,915 | `hormoneSvg` | `function hormoneSvg(` |
| 8,921 | `flameSvg` | `function flameSvg(` |
| 8,925 | `gearSvg` | `function gearSvg(` |
| 8,937 | `thermoSvg` | `function thermoSvg(` |
| 8,956 | `trendUpSvg` | `function trendUpSvg(` |
| 8,958 | `ecgSvg` | `function ecgSvg(` |
| 8,972 | `circulationSvg` | `function circulationSvg(` |
| 8,973 | `weatherSvg` | `function weatherSvg(` |
| 8,994 | `moodSvg` | `function moodSvg(` |
| 9,018 | `boltSvg` | `function boltSvg(` |
| 9,021 | `houseSvg` | `function houseSvg(` |
| 9,029 | `sunriseSvg` | `function sunriseSvg(` |
| 9,044 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,055 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,072_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,093 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,094 | `dsrHistory` | `var dsrHistory =` |
| 9,095 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,096 | `savHistory` | `var savHistory =` |
| 9,101 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,111 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,112 | `dsrNow` | `var dsrNow =` |
| 9,113 | `savNow` | `var savNow =` |
| 9,114 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,119 | `householdsWord` | `function householdsWord(` |
| 9,126 | `householdsNow` | `var householdsNow =` |
| 9,133 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,134 | `dsrMeter` | `var dsrMeter =` |
| 9,137 | `savMeter` | `var savMeter =` |
| 9,140 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,157 | `savInfoHtml` | `function savInfoHtml(` |
| 9,175 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,184 | `curveNow` | `var curveNow =` |
| 9,185 | `curveTag` | `var curveTag =` |
| 9,186 | `curveSub` | `var curveSub =` |
| 9,190 | `curvePct` | `function curvePct(` |
| 9,191 | `curveNoteFull` | `var curveNoteFull =` |
| 9,206 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,214 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,255 | `marketCycles` | `var marketCycles =` |
| 9,285 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,287_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,308 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,309 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,314_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,335 | `slopeOf` | `function slopeOf(` |
| 9,346 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,352 | `readSeason` | `function readSeason(` |
| 9,377 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,379 | `qLabel` | `function qLabel(` |
| 9,403 | `regimeTrack` | `function regimeTrack(` |
| 9,426 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,428_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,435 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,436 | `seasonTitle` | `function seasonTitle(` |
| 9,437 | `monthLabel` | `function monthLabel(` |
| 9,438 | `cycleModel` | `function cycleModel(` |
| 9,490 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,498 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,505 | `nowModel` | `var nowModel =` |
| 9,506 | `readingNow` | `var readingNow =` |
| 9,507 | `cpiNow` | `var cpiNow =` |
| 9,508 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,509 | `currentSeason` | `var currentSeason =` |
| 9,510 | `seasonWhy` | `var seasonWhy =` |
| 9,527 | `seasonGroup` | `function seasonGroup(` |
| 9,541 | `arcGauge` | `function arcGauge(` |
| 9,583 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,596 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,603 | `tsyView` | `var tsyView =` |
| 9,605 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,607 | `spreadLabel` | `function spreadLabel(` |
| 9,614 | `policyFacts` | `function policyFacts(` |
| 9,626 | `allSources` | `var allSources =` |
| 9,650 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,683_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,686 | `SVG_NS` | `var SVG_NS =` |
| 9,687 | `svgEl` | `function svgEl(` |
| 9,700 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,736_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,737 | `clampPct` | `function clampPct(` |
| 9,744 | `infoIcon` | `function infoIcon(` |
| 9,753 | `detailTexts` | `var detailTexts =` |
| 9,771 | `detailSlots` | `var detailSlots =` |
| 9,772 | `detailSlot` | `function detailSlot(` |
| 9,783 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,787 | `_growthPanel` | `var _growthPanel =` |
| 9,788 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,794 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,805 | `facts` | `function facts(` |
| 9,806 | `factsFrom` | `function factsFrom(` |
| 9,810 | `expandBtn` | `function expandBtn(` |
| 9,816 | `sheetRenderers` | `var sheetRenderers =` |
| 9,833 | `pageMode` | `var pageMode =` |
| 9,840 | `pageCycles` | `var pageCycles =` |
| 9,845 | `pageRange` | `var pageRange =` |
| 9,851 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,885_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,896 | `meterHtml` | `function meterHtml(` |
| 9,924 | `srcHtml` | `function srcHtml(` |
| 9,933 | `TIMING` | `var TIMING =` |
| 9,939 | `timingMark` | `function timingMark(` |
| 9,953 | `timingPill` | `function timingPill(` |
| 9,974 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,982 | `seatPageFoot` | `function seatPageFoot(` |
| 10,005 | `timingMembers` | `var timingMembers =` |
| 10,006 | `registerTiming` | `function registerTiming(` |
| 10,012 | `headHtml` | `function headHtml(` |
| 10,030 | `heldHighlights` | `var heldHighlights =` |
| 10,031 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,089_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,090 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,523_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,524 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,747_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,748 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,780_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,786 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,870_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,871 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,889_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,892 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,915_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,927 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,018_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,027 | `lendingWord` | `function lendingWord(` |
| 11,035 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,095_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,096 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,220_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,223 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,345_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,357 | `totalRiseIn` | `function totalRiseIn(` |
| 11,367 | `eraInflation` | `function eraInflation(` |
| 11,378 | `eraGrowth` | `function eraGrowth(` |
| 11,394 | `fmtSigned` | `function fmtSigned(` |
| 11,399 | `regimeArrow` | `function regimeArrow(` |
| 11,405 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,406 | `growthShown` | `function growthShown(` |
| 11,407 | `growthShownCap` | `function growthShownCap(` |
| 11,408 | `regimeState` | `function regimeState(` |
| 11,412 | `phaseClass` | `function phaseClass(` |
| 11,414 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,426 | `cycleViewEl` | `var cycleViewEl =` |
| 11,430 | `tempCard` | `var tempCard =` |
| 11,431 | `placeCharts` | `function placeCharts(` |
| 11,436 | `shownEra` | `var shownEra =` |
| 11,437 | `calendarReset` | `var calendarReset =` |
| 11,438 | `metricPageReset` | `var metricPageReset =` |
| 11,439 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,442 | `topbarBack` | `var topbarBack =` |
| 11,443 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,450_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,451 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,612_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,613 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,631_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,634 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,655_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,661 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,664 | `hubSet` | `function hubSet(` |
| 11,677 | `quarterPopup` | `function quarterPopup(` |
| 11,710 | `hubShowDefault` | `function hubShowDefault(` |
| 11,719 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,725 | `hubShowYear` | `function hubShowYear(` |
| 11,740 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,832_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,835 | `tempState` | `var tempState =` |
| 11,838 | `chartLink` | `var chartLink =` |
| 11,858 | `m2Step` | `function m2Step(` |
| 11,861 | `heatStep` | `function heatStep(` |
| 11,865 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,052_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,055 | `drawGrowth` | `function drawGrowth(` |
| 12,194 | `wireResize` | `function wireResize(` |
| 12,200 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,212_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,213 | `renderCycleView` | `function renderCycleView(` |
| 12,266 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,277 | `PEER_CARET` | `var PEER_CARET =` |
| 12,278 | `peerList` | `function peerList(` |
| 12,279 | `peerChosen` | `function peerChosen(` |
| 12,280 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,284 | `renderPeerPills` | `function renderPeerPills(` |
| 12,334 | `shownEraModel` | `var shownEraModel =` |
| 12,335 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,337_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,339 | `stripGroupName` | `var stripGroupName =` |
| 12,340 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,386 | `marketStripHtml` | `function marketStripHtml(` |
| 12,449 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,450 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,480_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,481 | `renderCycleList` | `function renderCycleList(` |
| 12,571 | `renderSignsList` | `function renderSignsList(` |
| 12,856 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,137_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,138 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,200_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,201 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,234_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,235 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,069–4,072 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,562–8,575 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,386–9,399 | `seasonTrackAll` | The season, computed |
| 9,421–9,425 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,597 |
| `desire-range` | 10,412 |
| `fear-range` | 11,185 |
| `hormones-range` | 10,962 |
| `hzn-range` | 10,516 |
| `hzn-spread` | 10,510 |
| `pressure-range` | 11,062 |
| `pulse-range` | 10,363 |
| `sheet-marker-deficit` | 13,594 |
| `sheet-metric-gdp` | 13,478 |
| `sheet-metric-households` | 13,628 |
| `sheet-metric-power` | 13,557 |
| `sheet-metric-temp` | 13,428 |
| `sheet-metric-valuation` | 13,673 |
| `sheet-sign-activity` | 13,539 |
| `sheet-sign-desire` | 10,413 |
| `sheet-sign-horizon` | 10,517 |
| `sheet-sign-hormones` | 10,965 |
| `sheet-sign-pressure` | 11,063 |
| `sheet-sign-pulse` | 10,362 |
| `sheet-sign-sentiment` | 11,190 |
| `sheet-sign-volume` | 10,386 |
| `volume-range` | 10,387 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,603 |
| `desire-range` | 10,395 |
| `fear-range` | 11,142 |
| `hzn-range` | 10,441 |
| `pulse-range` | 10,340 |
| `sheet-metric-gdp` | 13,479 |
| `sheet-metric-power` | 13,558 |
| `sheet-metric-temp` | 13,429 |
| `sheet-metric-valuation` | 13,674 |
| `volume-range` | 10,367 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,252 |
| `sheet-metric-gdp` | 6,253 |
| `sheet-sign-activity` | 6,260 |
| `sheet-metric-power` | 6,261 |
| `sheet-metric-valuation` | 6,263 |
| `sheet-metric-households` | 6,264 |
| `deficit-range` | 6,265 |
| `volume-range` | 6,266 |
| `pulse-range` | 6,267 |
| `hzn-range` | 6,273 |
| `desire-range` | 6,274 |
| `fear-range` | 6,275 |
| `hormones-range` | 6,276 |
| `pressure-range` | 6,277 |

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
| 2,487 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,535 | hero: yield curve |
| 2,631 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,710 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,809 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,834 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,849 | long cycle (structural layer) |
| 2,890 | indicator grid |
| 2,933 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,950 | info icon + popover (progressive disclosure for longer notes) |
| 2,971 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,066 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (142), which is what the renderers fill:

| Line | id |
|---|---|
| 3,098 | `topbar-back` |
| 3,101 | `topbar-title` |
| 3,102 | `menu-btn` |
| 3,119 | `main` |
| 3,126 | `cycle-view` |
| 3,134 | `cycle-kicker` |
| 3,140 | `cycle-dial` |
| 3,142 | `season-wheel-hub-date` |
| 3,143 | `season-wheel-hub-theme` |
| 3,144 | `season-wheel-hub-detail` |
| 3,152 | `temp-card` |
| 3,154 | `temp-kicker` |
| 3,155 | `temp-sub` |
| 3,158 | `temp-svg` |
| 3,159 | `temp-tooltip` |
| 3,165 | `temp-stats` |
| 3,172 | `growth-card` |
| 3,175 | `growth-kicker` |
| 3,175 | `growth-phase` |
| 3,175 | `growth-sub` |
| 3,175 | `growth-peers` |
| 3,176 | `growth-svg` |
| 3,176 | `growth-tooltip` |
| 3,181 | `growth-stats` |
| 3,190 | `today-analysis` |
| 3,194 | `peek-row` |
| 3,198 | `sheet-metric-temp` |
| 3,199 | `temp-timing` |
| 3,200 | `temp-chart` |
| 3,202 | `temp-rangebar` |
| 3,204 | `temp-head` |
| 3,205 | `slot-temp` |
| 3,206 | `temp-history` |
| 3,207 | `temp-hist-tooltip` |
| 3,210 | `temp-trend` |
| 3,214 | `temp-highlights` |
| 3,217 | `sheet-metric-gdp` |
| 3,218 | `gdp-timing` |
| 3,219 | `gdp-chart` |
| 3,220 | `gdp-rangebar` |
| 3,222 | `gdp-head` |
| 3,223 | `slot-growth` |
| 3,224 | `gdp-history` |
| 3,225 | `gdp-hist-tooltip` |
| 3,226 | `gdp-yoy` |
| 3,236 | `gdp-trend` |
| 3,238 | `gdp-panel` |
| 3,243 | `subj-ring-gdp` |
| 3,245 | `subj-label-gdp` |
| 3,246 | `subj-value-gdp` |
| 3,247 | `subj-say-gdp` |
| 3,248 | `subj-spark-gdp` |
| 3,253 | `subj-ctx-gdp` |
| 3,256 | `gdp-highlights` |
| 3,264 | `sheet-metric-power` |
| 3,265 | `power-timing` |
| 3,266 | `power-head` |
| 3,267 | `power-chart` |
| 3,271 | `subj-ring-resilience` |
| 3,274 | `subj-value-resilience` |
| 3,275 | `subj-say-resilience` |
| 3,280 | `subj-ctx-resilience` |
| 3,284 | `longcycle-title` |
| 3,286 | `longcycle-tag` |
| 3,300 | `power-highlights` |
| 3,307 | `sheet-marker-deficit` |
| 3,313 | `sheet-metric-households` |
| 3,314 | `households-timing` |
| 3,315 | `households-chart` |
| 3,316 | `households-highlights` |
| 3,320 | `sheet-metric-valuation` |
| 3,321 | `valuation-timing` |
| 3,322 | `valuation-head` |
| 3,323 | `valuation-chart` |
| 3,327 | `subj-ring-valuation` |
| 3,330 | `subj-value-valuation` |
| 3,331 | `subj-say-valuation` |
| 3,336 | `subj-ctx-valuation` |
| 3,340 | `valuation-title` |
| 3,342 | `valuation-tag` |
| 3,349 | `valuation-highlights` |
| 3,373 | `subj-value-hormones` |
| 3,374 | `subj-say-hormones` |
| 3,382 | `hormones-history` |
| 3,392 | `hormones-highlights` |
| 3,418 | `subj-value-horizon` |
| 3,419 | `subj-say-horizon` |
| 3,420 | `subj-spark-horizon` |
| 3,430 | `hzn-timeline` |
| 3,432 | `hzn-head` |
| 3,433 | `spread-history-shell` |
| 3,434 | `spread-history-svg` |
| 3,435 | `spread-history-tooltip` |
| 3,440 | `ylm-shell` |
| 3,441 | `ylm-svg` |
| 3,442 | `ylm-tooltip` |
| 3,445 | `hzn-trend` |
| 3,446 | `ylm-trend` |
| 3,448 | `horizon-insights` |
| 3,476 | `subj-value-pressure` |
| 3,477 | `subj-say-pressure` |
| 3,482 | `pressure-history` |
| 3,483 | `pressure-highlights` |
| 3,489 | `subj-ring-sentiment` |
| 3,492 | `subj-value-sentiment` |
| 3,493 | `subj-say-sentiment` |
| 3,494 | `subj-spark-sentiment` |
| 3,508 | `fear-history` |
| 3,509 | `curve-highlights` |
| 3,523 | `signs-list` |
| 3,534 | `calendar-list` |
| 3,539 | `indicators-peek` |
| 3,585 | `cycle-list` |
| 3,591 | `cycle-more` |
| 3,592 | `cycle-more-label` |
| 3,601 | `calendar-cycle` |
| 3,602 | `calendar-cycle-slot` |
| 3,653 | `seasons-kicker` |
| 3,654 | `seasons-rows` |
| 3,658 | `framework-kicker` |
| 3,660 | `framework-rows` |
| 3,667 | `more-menu` |
| 3,670 | `menu-back` |
| 3,684 | `sources-open` |
| 3,692 | `appearance-current` |
| 3,700 | `sheet-howto` |
| 3,744 | `sheet-book` |
| 3,776 | `sheet-appearance` |
| 3,784 | `theme-toggle` |
| 3,791 | `sheet-contact` |
| 3,800 | `contact-form` |
| 3,801 | `contact-title` |
| 3,802 | `contact-message` |
| 3,804 | `contact-hint` |
| 3,805 | `contact-send` |
| 3,814 | `sheet-sources` |
| 3,817 | `sources-back` |
| 3,824 | `asof-text` |
| 3,825 | `sources-groups` |
| 3,832 | `detail-backdrop` |
| 3,834 | `detail-modal-close` |
| 3,835 | `detail-modal-body` |

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

