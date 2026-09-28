# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,671 lines**, about 1224 KB, roughly **348 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `ee1ff66` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,139 | the whole stylesheet, every token and rule |
| **Markup** | 3,140–3,909 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,910–14,618 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,619–14,671 | </body></html> |

Counts: **255** top-level functions, **181** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,915_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,919 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,920 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,921 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,939 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,943 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,948_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,958 | `wheelMeta` | `var wheelMeta =` |
| 3,969 | `seasonOverride` | `var seasonOverride =` |
| 3,972 | `cycleNowNote` | `var cycleNowNote =` |
| 3,981 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,067 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,112 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,125_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,142 | `LIVE` | `function LIVE(` |
| 4,169 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,177 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,178 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,181_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,212 | `repaintFigureText` | `function repaintFigureText(` |
| 4,225 | `repaintRow` | `function repaintRow(` |
| 4,238 | `repaintTag` | `function repaintTag(` |
| 4,248 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,273 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,281 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,289 | `REPAINT` | `var REPAINT =` |
| 4,306 | `liveAsOf` | `var liveAsOf =` |
| 4,307 | `fmtAsOf` | `function fmtAsOf(` |
| 4,312 | `applyLive` | `function applyLive(` |
| 4,391 | `repaintPolicy` | `function repaintPolicy(` |
| 4,445 | `GYN` | `var GYN =` |
| 4,465 | `refreshLiveData` | `function refreshLiveData(` |
| 4,506 | `fetchSiteData` | `function fetchSiteData(` |
| 4,536 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,550_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,551 | `yieldCurve` | `var yieldCurve =` |
| 4,564 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,588 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,600 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,628_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,633 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,657 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,681 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,705 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,732 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,757_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,766 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,776 | `uninvLagToday` | `var uninvLagToday =` |
| 4,788 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,801 | `gdpPeers` | `var gdpPeers =` |
| 4,842 | `gdpSrc` | `var gdpSrc =` |
| 4,843 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,848 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,861 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,899_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,921 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,931_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,947 | `stressScoreFor` | `function stressScoreFor(` |
| 4,953 | `stressScore` | `var stressScore =` |
| 4,959 | `powerOf` | `var powerOf =` |
| 4,960 | `powerScore` | `var powerScore =` |
| 4,977 | `stressHistory` | `var stressHistory =` |
| 4,988 | `powerMeter` | `var powerMeter =` |
| 4,990 | `stressNoteFull` | `var stressNoteFull =` |
| 5,022 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,024_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,047 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,048 | `deficitHistory` | `var deficitHistory =` |
| 5,051 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,058 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,060 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,108 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,109 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,110 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,127_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,140 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,153_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,167 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,170 | `timelineSpan` | `function timelineSpan(` |
| 5,176 | `timelineFor` | `function timelineFor(` |
| 5,189 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,195_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,201 | `windowScale` | `function windowScale(` |
| 5,217 | `windowYears` | `function windowYears(` |
| 5,235 | `refName` | `function refName(` |
| 5,242 | `histReadEnsure` | `function histReadEnsure(` |
| 5,281 | `seatBandReading` | `function seatBandReading(` |
| 5,304 | `histReadFill` | `function histReadFill(` |
| 5,432 | `histAxisEnds` | `function histAxisEnds(` |
| 5,443 | `histLegend` | `function histLegend(` |
| 5,531 | `refitHistory` | `function refitHistory(` |
| 5,543 | `wireHistHover` | `function wireHistHover(` |
| 5,623 | `mWindowFrom` | `function mWindowFrom(` |
| 5,628 | `qWindowFrom` | `function qWindowFrom(` |
| 5,633 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,634 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,636 | `DEF_1983` | `var DEF_1983 =` |
| 5,638 | `defFrom` | `function defFrom(` |
| 5,649 | `deficitChart` | `function deficitChart(` |
| 5,739 | `deficitBlock` | `function deficitBlock(` |
| 5,801 | `buffettHistory` | `var buffettHistory =` |
| 5,831 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,832 | `hyDates` | `var hyDates =` |
| 5,833 | `hyOas` | `var hyOas =` |
| 5,834 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,841 | `hyAt` | `function hyAt(` |
| 5,845 | `hyLabel` | `function hyLabel(` |
| 5,846 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,847 | `hyNum` | `function hyNum(` |
| 5,848 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,858 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,868 | `capeHistory` | `var capeHistory =` |
| 5,870 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,888_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,894 | `sentiment` | `var sentiment =` |
| 5,912 | `valuation` | `var valuation =` |
| 5,949 | `valRow` | `function valRow(` |
| 5,957 | `coincident` | `var coincident =` |
| 6,018 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,036 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,037 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,038 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,040_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,053 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,054 | `m2vHistory` | `var m2vHistory =` |
| 6,074 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,167 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,257 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,258 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,298_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,304 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,305 | `DOTS` | `var DOTS =` |
| 6,312 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,346 | `histHead` | `function histHead(` |
| 6,370 | `headNoteIdx` | `var headNoteIdx =` |
| 6,371 | `headMenuHtml` | `function headMenuHtml(` |
| 6,429 | `headMenuFor` | `var headMenuFor =` |
| 6,431 | `headSubFor` | `var headSubFor =` |
| 6,432 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,477 | `nameWithMark` | `function nameWithMark(` |
| 6,483 | `panelRow` | `function panelRow(` |
| 6,516 | `panelFromMeter` | `function panelFromMeter(` |
| 6,530 | `meterFlagged` | `function meterFlagged(` |
| 6,541 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,569 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,583 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,602 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,621 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,635 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,660 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,691 | `desireBlock` | `function desireBlock(` |
| 6,718 | `volumeBlock` | `function volumeBlock(` |
| 6,743 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,766 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,774_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,787 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,788 | `m2Level` | `var m2Level =` |
| 6,810 | `m2Yoy` | `var m2Yoy =` |
| 6,811 | `M2_NORM` | `var M2_NORM =` |
| 6,816 | `volumeVerdict` | `function volumeVerdict(` |
| 6,853 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,854 | `unempHistory` | `var unempHistory =` |
| 6,860 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,875 | `NROU_NOW` | `var NROU_NOW =` |
| 6,876 | `unempState` | `function unempState(` |
| 6,882 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,946_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,955 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,964_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,977 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,990 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,046 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,115 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,116 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,119 | `qAtIndex` | `function qAtIndex(` |
| 7,120 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,128_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,143 | `householdsChart` | `function householdsChart(` |
| 7,211 | `lastChartAvg` | `var lastChartAvg =` |
| 7,212 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,297 | `GDP_NORM` | `var GDP_NORM =` |
| 7,303 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,304 | `gdpNowQ` | `var gdpNowQ =` |
| 7,305 | `gdpMeter` | `var gdpMeter =` |
| 7,308 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,330 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,396 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,460 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,468 | `velocityVerdict` | `function velocityVerdict(` |
| 7,476 | `derivePulseTag` | `function derivePulseTag(` |
| 7,482 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,542_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,551 | `seasonReading` | `var seasonReading =` |
| 7,600 | `frameworkRows` | `var frameworkRows =` |
| 7,610 | `vixRow` | `var vixRow =` |
| 7,618 | `vixWordOf` | `var vixWordOf =` |
| 7,622 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,637_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,641 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,650_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,651 | `calendarTodayY` | `var calendarTodayY =` |
| 7,682 | `vix3mClose` | `var vix3mClose =` |
| 7,683 | `fearCurve` | `function fearCurve(` |
| 7,690 | `curveVerdict` | `function curveVerdict(` |
| 7,697 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,702 | `valuationVerdict` | `function valuationVerdict(` |
| 7,720 | `sparkHtml` | `function sparkHtml(` |
| 7,739 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,745_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,758 | `modeBar` | `function modeBar(` |
| 7,773 | `pickerOpen` | `var pickerOpen =` |
| 7,777 | `cycleByName` | `function cycleByName(` |
| 7,781 | `openCycle` | `function openCycle(` |
| 7,787 | `cycleSlice` | `function cycleSlice(` |
| 7,796 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,804 | `cycleMonths` | `function cycleMonths(` |
| 7,823 | `histControls` | `function histControls(` |
| 7,837 | `cycLabel` | `function cycLabel(` |
| 7,853 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,862 | `cyclePicker` | `function cyclePicker(` |
| 7,881 | `rangeBar` | `function rangeBar(` |
| 7,893 | `trendOf` | `function trendOf(` |
| 7,938 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,948 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,969_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,970 | `yearOf` | `function yearOf(` |
| 7,971 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,972_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,010 | `headSigma` | `function headSigma(` |
| 8,018 | `atQuarter` | `function atQuarter(` |
| 8,019 | `atMonth` | `function atMonth(` |
| 8,020 | `cycleAverages` | `function cycleAverages(` |
| 8,027 | `ordinal` | `function ordinal(` |
| 8,028 | `hiCard` | `function hiCard(` |
| 8,039 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,053_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,060 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,076 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,083 | `moreRow` | `function moreRow(` |
| 8,089 | `powerPageNote` | `var powerPageNote =` |
| 8,090 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,102_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,105 | `xLabelOf` | `function xLabelOf(` |
| 8,125 | `fitGroup` | `function fitGroup(` |
| 8,147 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,206_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,230 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,240 | `vGrid` | `function vGrid(` |
| 8,265 | `COL_FILL` | `var COL_FILL =` |
| 8,298 | `colPath` | `function colPath(` |
| 8,303 | `colWidth` | `function colWidth(` |
| 8,350 | `AXIS` | `var AXIS =` |
| 8,351 | `chartAxes` | `function chartAxes(` |
| 8,411 | `divergeChart` | `function divergeChart(` |
| 8,479 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,508_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,516 | `maxIn` | `function maxIn(` |
| 8,534 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,548 | `PEEK_W` | `var PEEK_W =` |
| 8,551 | `PEEK_H` | `var PEEK_H =` |
| 8,556 | `colPeek` | `function colPeek(` |
| 8,583 | `meterPeek` | `function meterPeek(` |
| 8,600 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,605 | `pressureZone` | `function pressureZone(` |
| 8,620 | `HZN_BACK` | `var HZN_BACK =` |
| 8,621 | `hznLast` | `function hznLast(` |
| 8,622 | `hznBack` | `function hznBack(` |
| 8,623 | `horizonWord` | `function horizonWord(` |
| 8,648 | `HZN_METERS` | `var HZN_METERS =` |
| 8,656 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,697 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,702 | `RISK_RISK` | `var RISK_RISK =` |
| 8,707 | `riskCell` | `function riskCell(` |
| 8,708 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,739 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,764_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,785 | `pulseClipN` | `var pulseClipN =` |
| 8,786 | `beatPath` | `function beatPath(` |
| 8,811 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,825 | `pulsePeek` | `function pulsePeek(` |
| 8,833 | `pulseBlock` | `function pulseBlock(` |
| 8,853 | `CHEV` | `var CHEV =` |
| 8,855 | `peekCard` | `function peekCard(` |
| 8,909 | `dropSvg` | `function dropSvg(` |
| 8,921 | `volumeSvg` | `function volumeSvg(` |
| 8,928 | `gaugeSvg` | `function gaugeSvg(` |
| 8,932 | `diamondSvg` | `function diamondSvg(` |
| 8,946 | `energyFromReserve` | `function energyFromReserve(` |
| 8,958 | `sproutSvg` | `function sproutSvg(` |
| 8,969 | `markSvg` | `function markSvg(` |
| 8,978 | `pressureSvg` | `function pressureSvg(` |
| 8,982 | `hormoneSvg` | `function hormoneSvg(` |
| 8,988 | `flameSvg` | `function flameSvg(` |
| 8,992 | `gearSvg` | `function gearSvg(` |
| 9,004 | `thermoSvg` | `function thermoSvg(` |
| 9,023 | `trendUpSvg` | `function trendUpSvg(` |
| 9,025 | `ecgSvg` | `function ecgSvg(` |
| 9,039 | `circulationSvg` | `function circulationSvg(` |
| 9,040 | `weatherSvg` | `function weatherSvg(` |
| 9,061 | `moodSvg` | `function moodSvg(` |
| 9,085 | `boltSvg` | `function boltSvg(` |
| 9,088 | `houseSvg` | `function houseSvg(` |
| 9,096 | `sunriseSvg` | `function sunriseSvg(` |
| 9,111 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,122 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,139_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,160 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,161 | `dsrHistory` | `var dsrHistory =` |
| 9,162 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,163 | `savHistory` | `var savHistory =` |
| 9,168 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,178 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,179 | `dsrNow` | `var dsrNow =` |
| 9,180 | `savNow` | `var savNow =` |
| 9,181 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,186 | `householdsWord` | `function householdsWord(` |
| 9,193 | `householdsNow` | `var householdsNow =` |
| 9,200 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,201 | `dsrMeter` | `var dsrMeter =` |
| 9,204 | `savMeter` | `var savMeter =` |
| 9,207 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,224 | `savInfoHtml` | `function savInfoHtml(` |
| 9,242 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,251 | `curveNow` | `var curveNow =` |
| 9,252 | `curveTag` | `var curveTag =` |
| 9,253 | `curveSub` | `var curveSub =` |
| 9,257 | `curvePct` | `function curvePct(` |
| 9,258 | `curveNoteFull` | `var curveNoteFull =` |
| 9,273 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,281 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,322 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,350_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,364 | `marketTops` | `var marketTops =` |
| 9,374 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,379 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,381_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,402 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,403 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,408_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,429 | `slopeOf` | `function slopeOf(` |
| 9,440 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,446 | `readSeason` | `function readSeason(` |
| 9,471 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,473 | `qLabel` | `function qLabel(` |
| 9,497 | `regimeTrack` | `function regimeTrack(` |
| 9,520 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,522_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,529 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,530 | `seasonTitle` | `function seasonTitle(` |
| 9,531 | `monthLabel` | `function monthLabel(` |
| 9,532 | `cycleModel` | `function cycleModel(` |
| 9,584 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,592 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,599 | `nowModel` | `var nowModel =` |
| 9,600 | `readingNow` | `var readingNow =` |
| 9,601 | `cpiNow` | `var cpiNow =` |
| 9,602 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,603 | `currentSeason` | `var currentSeason =` |
| 9,604 | `seasonWhy` | `var seasonWhy =` |
| 9,621 | `seasonGroup` | `function seasonGroup(` |
| 9,635 | `arcGauge` | `function arcGauge(` |
| 9,677 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,690 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,697 | `tsyView` | `var tsyView =` |
| 9,699 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,701 | `spreadLabel` | `function spreadLabel(` |
| 9,708 | `policyFacts` | `function policyFacts(` |
| 9,722 | `policyFactRows` | `function policyFactRows(` |
| 9,728 | `allSources` | `var allSources =` |
| 9,752 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,785_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,788 | `SVG_NS` | `var SVG_NS =` |
| 9,789 | `svgEl` | `function svgEl(` |
| 9,802 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,838_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,839 | `clampPct` | `function clampPct(` |
| 9,846 | `infoIcon` | `function infoIcon(` |
| 9,855 | `detailTexts` | `var detailTexts =` |
| 9,873 | `detailSlots` | `var detailSlots =` |
| 9,874 | `detailSlot` | `function detailSlot(` |
| 9,885 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,889 | `_growthPanel` | `var _growthPanel =` |
| 9,890 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,896 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,907 | `facts` | `function facts(` |
| 9,908 | `factsFrom` | `function factsFrom(` |
| 9,912 | `expandBtn` | `function expandBtn(` |
| 9,918 | `sheetRenderers` | `var sheetRenderers =` |
| 9,935 | `pageMode` | `var pageMode =` |
| 9,942 | `pageCycles` | `var pageCycles =` |
| 9,947 | `pageRange` | `var pageRange =` |
| 9,953 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,987_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,998 | `meterHtml` | `function meterHtml(` |
| 10,026 | `srcHtml` | `function srcHtml(` |
| 10,035 | `TIMING` | `var TIMING =` |
| 10,041 | `timingMark` | `function timingMark(` |
| 10,055 | `timingPill` | `function timingPill(` |
| 10,076 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,084 | `seatPageFoot` | `function seatPageFoot(` |
| 10,107 | `timingMembers` | `var timingMembers =` |
| 10,108 | `registerTiming` | `function registerTiming(` |
| 10,114 | `headHtml` | `function headHtml(` |
| 10,132 | `heldHighlights` | `var heldHighlights =` |
| 10,133 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,191_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,192 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,625_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,626 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,849_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,850 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,882_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,888 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,972_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,973 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,991_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,994 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,017_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,029 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,160_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,169 | `lendingWord` | `function lendingWord(` |
| 11,177 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,237_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,238 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,362_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,365 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,487_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,499 | `totalRiseIn` | `function totalRiseIn(` |
| 11,509 | `eraInflation` | `function eraInflation(` |
| 11,520 | `eraGrowth` | `function eraGrowth(` |
| 11,540 | `fmtSigned` | `function fmtSigned(` |
| 11,545 | `regimeArrow` | `function regimeArrow(` |
| 11,551 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,552 | `growthShown` | `function growthShown(` |
| 11,553 | `growthShownCap` | `function growthShownCap(` |
| 11,554 | `regimeState` | `function regimeState(` |
| 11,558 | `phaseClass` | `function phaseClass(` |
| 11,560 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,572 | `cycleViewEl` | `var cycleViewEl =` |
| 11,576 | `tempCard` | `var tempCard =` |
| 11,577 | `placeCharts` | `function placeCharts(` |
| 11,582 | `shownEra` | `var shownEra =` |
| 11,583 | `calendarReset` | `var calendarReset =` |
| 11,584 | `metricPageReset` | `var metricPageReset =` |
| 11,585 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,588 | `topbarBack` | `var topbarBack =` |
| 11,589 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,596_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,597 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,758_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,759 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,777_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,780 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,801_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,807 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,810 | `hubSet` | `function hubSet(` |
| 11,823 | `quarterPopup` | `function quarterPopup(` |
| 11,856 | `hubShowDefault` | `function hubShowDefault(` |
| 11,865 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,871 | `hubShowYear` | `function hubShowYear(` |
| 11,886 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,978_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,981 | `tempState` | `var tempState =` |
| 11,984 | `chartLink` | `var chartLink =` |
| 12,004 | `m2Step` | `function m2Step(` |
| 12,007 | `heatStep` | `function heatStep(` |
| 12,011 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,198_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,201 | `drawGrowth` | `function drawGrowth(` |
| 12,340 | `wireResize` | `function wireResize(` |
| 12,346 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,358_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,359 | `renderCycleView` | `function renderCycleView(` |
| 12,412 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,423 | `PEER_CARET` | `var PEER_CARET =` |
| 12,424 | `peerList` | `function peerList(` |
| 12,425 | `peerChosen` | `function peerChosen(` |
| 12,426 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,430 | `renderPeerPills` | `function renderPeerPills(` |
| 12,480 | `shownEraModel` | `var shownEraModel =` |
| 12,481 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,483_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,485 | `stripGroupName` | `var stripGroupName =` |
| 12,486 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,532 | `marketStripHtml` | `function marketStripHtml(` |
| 12,595 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,596 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,626_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,627 | `renderCycleList` | `function renderCycleList(` |
| 12,717 | `renderSignsList` | `function renderSignsList(` |
| 13,002 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Rhymes \u2014 today beside a past top (Version 610, rebuilt in Version 612)

_line 14,279_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,307 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,417_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,418 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,480_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,481 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,514_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,515 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,138–4,141 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,629–8,642 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,480–9,493 | `seasonTrackAll` | The season, computed |
| 9,515–9,519 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,743 |
| `desire-range` | 10,514 |
| `fear-range` | 11,327 |
| `hormones-range` | 11,064 |
| `hzn-range` | 10,618 |
| `hzn-spread` | 10,612 |
| `pressure-range` | 11,204 |
| `pulse-range` | 10,465 |
| `sheet-marker-deficit` | 13,740 |
| `sheet-metric-gdp` | 13,624 |
| `sheet-metric-households` | 13,774 |
| `sheet-metric-power` | 13,703 |
| `sheet-metric-temp` | 13,574 |
| `sheet-metric-valuation` | 13,819 |
| `sheet-sign-activity` | 13,685 |
| `sheet-sign-desire` | 10,515 |
| `sheet-sign-horizon` | 10,619 |
| `sheet-sign-hormones` | 11,067 |
| `sheet-sign-pressure` | 11,205 |
| `sheet-sign-pulse` | 10,464 |
| `sheet-sign-sentiment` | 11,332 |
| `sheet-sign-volume` | 10,488 |
| `volume-range` | 10,489 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,749 |
| `desire-range` | 10,497 |
| `fear-range` | 11,284 |
| `hzn-range` | 10,543 |
| `pulse-range` | 10,442 |
| `sheet-metric-gdp` | 13,625 |
| `sheet-metric-power` | 13,704 |
| `sheet-metric-temp` | 13,575 |
| `sheet-metric-valuation` | 13,820 |
| `volume-range` | 10,469 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,319 |
| `sheet-metric-gdp` | 6,320 |
| `sheet-sign-activity` | 6,327 |
| `sheet-metric-power` | 6,328 |
| `sheet-metric-valuation` | 6,330 |
| `sheet-metric-households` | 6,331 |
| `deficit-range` | 6,332 |
| `volume-range` | 6,333 |
| `pulse-range` | 6,334 |
| `hzn-range` | 6,340 |
| `desire-range` | 6,341 |
| `fear-range` | 6,342 |
| `hormones-range` | 6,343 |
| `pressure-range` | 6,344 |

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
| 2,582 | hero: yield curve |
| 2,678 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,757 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,856 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,881 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,896 | long cycle (structural layer) |
| 2,937 | indicator grid |
| 2,980 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,997 | info icon + popover (progressive disclosure for longer notes) |
| 3,018 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,113 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (145), which is what the renderers fill:

| Line | id |
|---|---|
| 3,145 | `topbar-back` |
| 3,148 | `topbar-title` |
| 3,149 | `menu-btn` |
| 3,166 | `main` |
| 3,173 | `cycle-view` |
| 3,181 | `cycle-kicker` |
| 3,187 | `cycle-dial` |
| 3,189 | `season-wheel-hub-date` |
| 3,190 | `season-wheel-hub-theme` |
| 3,191 | `season-wheel-hub-detail` |
| 3,199 | `temp-card` |
| 3,201 | `temp-kicker` |
| 3,202 | `temp-sub` |
| 3,205 | `temp-svg` |
| 3,206 | `temp-tooltip` |
| 3,212 | `temp-stats` |
| 3,219 | `growth-card` |
| 3,222 | `growth-kicker` |
| 3,222 | `growth-phase` |
| 3,222 | `growth-sub` |
| 3,222 | `growth-peers` |
| 3,223 | `growth-svg` |
| 3,223 | `growth-tooltip` |
| 3,228 | `growth-stats` |
| 3,237 | `today-analysis` |
| 3,241 | `peek-row` |
| 3,245 | `sheet-metric-temp` |
| 3,246 | `temp-timing` |
| 3,247 | `temp-chart` |
| 3,249 | `temp-rangebar` |
| 3,251 | `temp-head` |
| 3,252 | `slot-temp` |
| 3,253 | `temp-history` |
| 3,254 | `temp-hist-tooltip` |
| 3,257 | `temp-trend` |
| 3,261 | `temp-highlights` |
| 3,264 | `sheet-metric-gdp` |
| 3,265 | `gdp-timing` |
| 3,266 | `gdp-chart` |
| 3,267 | `gdp-rangebar` |
| 3,269 | `gdp-head` |
| 3,270 | `slot-growth` |
| 3,271 | `gdp-history` |
| 3,272 | `gdp-hist-tooltip` |
| 3,273 | `gdp-yoy` |
| 3,283 | `gdp-trend` |
| 3,285 | `gdp-panel` |
| 3,290 | `subj-ring-gdp` |
| 3,292 | `subj-label-gdp` |
| 3,293 | `subj-value-gdp` |
| 3,294 | `subj-say-gdp` |
| 3,295 | `subj-spark-gdp` |
| 3,300 | `subj-ctx-gdp` |
| 3,303 | `gdp-highlights` |
| 3,311 | `sheet-metric-power` |
| 3,312 | `power-timing` |
| 3,313 | `power-head` |
| 3,314 | `power-chart` |
| 3,318 | `subj-ring-resilience` |
| 3,321 | `subj-value-resilience` |
| 3,322 | `subj-say-resilience` |
| 3,327 | `subj-ctx-resilience` |
| 3,331 | `longcycle-title` |
| 3,333 | `longcycle-tag` |
| 3,347 | `power-highlights` |
| 3,354 | `sheet-marker-deficit` |
| 3,360 | `sheet-metric-households` |
| 3,361 | `households-timing` |
| 3,362 | `households-chart` |
| 3,363 | `households-highlights` |
| 3,367 | `sheet-metric-valuation` |
| 3,368 | `valuation-timing` |
| 3,369 | `valuation-head` |
| 3,370 | `valuation-chart` |
| 3,374 | `subj-ring-valuation` |
| 3,377 | `subj-value-valuation` |
| 3,378 | `subj-say-valuation` |
| 3,383 | `subj-ctx-valuation` |
| 3,387 | `valuation-title` |
| 3,389 | `valuation-tag` |
| 3,396 | `valuation-highlights` |
| 3,420 | `subj-value-hormones` |
| 3,421 | `subj-say-hormones` |
| 3,429 | `hormones-history` |
| 3,439 | `hormones-insights` |
| 3,465 | `subj-value-horizon` |
| 3,466 | `subj-say-horizon` |
| 3,467 | `subj-spark-horizon` |
| 3,477 | `hzn-timeline` |
| 3,479 | `hzn-head` |
| 3,480 | `spread-history-shell` |
| 3,481 | `spread-history-svg` |
| 3,482 | `spread-history-tooltip` |
| 3,487 | `ylm-shell` |
| 3,488 | `ylm-svg` |
| 3,489 | `ylm-tooltip` |
| 3,492 | `hzn-trend` |
| 3,493 | `ylm-trend` |
| 3,495 | `horizon-insights` |
| 3,523 | `subj-value-pressure` |
| 3,524 | `subj-say-pressure` |
| 3,529 | `pressure-history` |
| 3,530 | `pressure-highlights` |
| 3,536 | `subj-ring-sentiment` |
| 3,539 | `subj-value-sentiment` |
| 3,540 | `subj-say-sentiment` |
| 3,541 | `subj-spark-sentiment` |
| 3,555 | `fear-history` |
| 3,556 | `curve-highlights` |
| 3,570 | `signs-list` |
| 3,581 | `calendar-list` |
| 3,586 | `indicators-peek` |
| 3,595 | `rhymes-card` |
| 3,606 | `rhy-pick` |
| 3,607 | `rhy-body` |
| 3,654 | `cycle-list` |
| 3,660 | `cycle-more` |
| 3,661 | `cycle-more-label` |
| 3,670 | `calendar-cycle` |
| 3,671 | `calendar-cycle-slot` |
| 3,722 | `seasons-kicker` |
| 3,723 | `seasons-rows` |
| 3,727 | `framework-kicker` |
| 3,729 | `framework-rows` |
| 3,736 | `more-menu` |
| 3,739 | `menu-back` |
| 3,753 | `sources-open` |
| 3,761 | `appearance-current` |
| 3,769 | `sheet-howto` |
| 3,813 | `sheet-book` |
| 3,845 | `sheet-appearance` |
| 3,853 | `theme-toggle` |
| 3,860 | `sheet-contact` |
| 3,869 | `contact-form` |
| 3,870 | `contact-title` |
| 3,871 | `contact-message` |
| 3,873 | `contact-hint` |
| 3,874 | `contact-send` |
| 3,883 | `sheet-sources` |
| 3,886 | `sources-back` |
| 3,893 | `asof-text` |
| 3,894 | `sources-groups` |
| 3,901 | `detail-backdrop` |
| 3,903 | `detail-modal-close` |
| 3,904 | `detail-modal-body` |

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

