# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,734 lines**, about 1228 KB, roughly **349 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `9f54757` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,136 | the whole stylesheet, every token and rule |
| **Markup** | 3,137–3,913 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,914–14,681 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,682–14,734 | </body></html> |

Counts: **257** top-level functions, **181** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,919_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,923 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,924 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,925 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,943 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,947 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,952_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,962 | `wheelMeta` | `var wheelMeta =` |
| 3,973 | `seasonOverride` | `var seasonOverride =` |
| 3,976 | `cycleNowNote` | `var cycleNowNote =` |
| 3,985 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,071 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,116 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,129_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,146 | `LIVE` | `function LIVE(` |
| 4,173 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,181 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,182 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,185_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,216 | `repaintFigureText` | `function repaintFigureText(` |
| 4,229 | `repaintRow` | `function repaintRow(` |
| 4,242 | `repaintTag` | `function repaintTag(` |
| 4,252 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,277 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,285 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,293 | `REPAINT` | `var REPAINT =` |
| 4,310 | `liveAsOf` | `var liveAsOf =` |
| 4,311 | `fmtAsOf` | `function fmtAsOf(` |
| 4,316 | `applyLive` | `function applyLive(` |
| 4,395 | `repaintPolicy` | `function repaintPolicy(` |
| 4,449 | `GYN` | `var GYN =` |
| 4,469 | `refreshLiveData` | `function refreshLiveData(` |
| 4,510 | `fetchSiteData` | `function fetchSiteData(` |
| 4,540 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,554_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,555 | `yieldCurve` | `var yieldCurve =` |
| 4,568 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,592 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,604 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,632_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,637 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,661 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,685 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,709 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,736 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,761_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,770 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,780 | `uninvLagToday` | `var uninvLagToday =` |
| 4,792 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,805 | `gdpPeers` | `var gdpPeers =` |
| 4,846 | `gdpSrc` | `var gdpSrc =` |
| 4,847 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,852 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,865 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,903_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,925 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,935_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,951 | `stressScoreFor` | `function stressScoreFor(` |
| 4,957 | `stressScore` | `var stressScore =` |
| 4,963 | `powerOf` | `var powerOf =` |
| 4,964 | `powerScore` | `var powerScore =` |
| 4,981 | `stressHistory` | `var stressHistory =` |
| 4,992 | `powerMeter` | `var powerMeter =` |
| 4,994 | `stressNoteFull` | `var stressNoteFull =` |
| 5,026 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,028_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,051 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,052 | `deficitHistory` | `var deficitHistory =` |
| 5,055 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,062 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,064 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,112 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,113 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,114 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,131_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,144 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,157_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,171 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,174 | `timelineSpan` | `function timelineSpan(` |
| 5,180 | `timelineFor` | `function timelineFor(` |
| 5,193 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,199_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,205 | `windowScale` | `function windowScale(` |
| 5,221 | `windowYears` | `function windowYears(` |
| 5,239 | `refName` | `function refName(` |
| 5,246 | `histReadEnsure` | `function histReadEnsure(` |
| 5,285 | `seatBandReading` | `function seatBandReading(` |
| 5,308 | `histReadFill` | `function histReadFill(` |
| 5,436 | `histAxisEnds` | `function histAxisEnds(` |
| 5,447 | `histLegend` | `function histLegend(` |
| 5,535 | `refitHistory` | `function refitHistory(` |
| 5,547 | `wireHistHover` | `function wireHistHover(` |
| 5,627 | `mWindowFrom` | `function mWindowFrom(` |
| 5,632 | `qWindowFrom` | `function qWindowFrom(` |
| 5,637 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,638 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,640 | `DEF_1983` | `var DEF_1983 =` |
| 5,642 | `defFrom` | `function defFrom(` |
| 5,653 | `deficitChart` | `function deficitChart(` |
| 5,743 | `deficitBlock` | `function deficitBlock(` |
| 5,805 | `buffettHistory` | `var buffettHistory =` |
| 5,835 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,836 | `hyDates` | `var hyDates =` |
| 5,837 | `hyOas` | `var hyOas =` |
| 5,838 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,845 | `hyAt` | `function hyAt(` |
| 5,849 | `hyLabel` | `function hyLabel(` |
| 5,850 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,851 | `hyNum` | `function hyNum(` |
| 5,852 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,862 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,872 | `capeHistory` | `var capeHistory =` |
| 5,874 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,892_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,898 | `sentiment` | `var sentiment =` |
| 5,916 | `valuation` | `var valuation =` |
| 5,953 | `valRow` | `function valRow(` |
| 5,961 | `coincident` | `var coincident =` |
| 6,022 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,040 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,041 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,042 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,044_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,057 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,058 | `m2vHistory` | `var m2vHistory =` |
| 6,078 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,171 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,261 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,262 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,302_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,308 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,309 | `DOTS` | `var DOTS =` |
| 6,316 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,350 | `histHead` | `function histHead(` |
| 6,374 | `headNoteIdx` | `var headNoteIdx =` |
| 6,375 | `headMenuHtml` | `function headMenuHtml(` |
| 6,433 | `headMenuFor` | `var headMenuFor =` |
| 6,435 | `headSubFor` | `var headSubFor =` |
| 6,436 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,485 | `nameWithMark` | `function nameWithMark(` |
| 6,491 | `panelRow` | `function panelRow(` |
| 6,524 | `panelFromMeter` | `function panelFromMeter(` |
| 6,538 | `meterFlagged` | `function meterFlagged(` |
| 6,549 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,577 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,591 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,610 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,629 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,643 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,668 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,699 | `desireBlock` | `function desireBlock(` |
| 6,726 | `volumeBlock` | `function volumeBlock(` |
| 6,751 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,774 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,782_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,795 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,796 | `m2Level` | `var m2Level =` |
| 6,818 | `m2Yoy` | `var m2Yoy =` |
| 6,819 | `M2_NORM` | `var M2_NORM =` |
| 6,824 | `volumeVerdict` | `function volumeVerdict(` |
| 6,861 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,862 | `unempHistory` | `var unempHistory =` |
| 6,868 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,883 | `NROU_NOW` | `var NROU_NOW =` |
| 6,884 | `unempState` | `function unempState(` |
| 6,890 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,954_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,963 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,972_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,985 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,998 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,054 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,123 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,124 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,127 | `qAtIndex` | `function qAtIndex(` |
| 7,128 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,136_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,151 | `householdsChart` | `function householdsChart(` |
| 7,219 | `lastChartAvg` | `var lastChartAvg =` |
| 7,220 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,305 | `GDP_NORM` | `var GDP_NORM =` |
| 7,311 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,312 | `gdpNowQ` | `var gdpNowQ =` |
| 7,313 | `gdpMeter` | `var gdpMeter =` |
| 7,316 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,338 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,404 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,468 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,476 | `velocityVerdict` | `function velocityVerdict(` |
| 7,484 | `derivePulseTag` | `function derivePulseTag(` |
| 7,490 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,550_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,559 | `seasonReading` | `var seasonReading =` |
| 7,608 | `frameworkRows` | `var frameworkRows =` |
| 7,618 | `vixRow` | `var vixRow =` |
| 7,626 | `vixWordOf` | `var vixWordOf =` |
| 7,630 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,645_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,649 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,658_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,659 | `calendarTodayY` | `var calendarTodayY =` |
| 7,690 | `vix3mClose` | `var vix3mClose =` |
| 7,691 | `fearCurve` | `function fearCurve(` |
| 7,698 | `curveVerdict` | `function curveVerdict(` |
| 7,705 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,710 | `valuationVerdict` | `function valuationVerdict(` |
| 7,728 | `sparkHtml` | `function sparkHtml(` |
| 7,747 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,753_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,766 | `modeBar` | `function modeBar(` |
| 7,781 | `pickerOpen` | `var pickerOpen =` |
| 7,785 | `cycleByName` | `function cycleByName(` |
| 7,789 | `openCycle` | `function openCycle(` |
| 7,795 | `cycleSlice` | `function cycleSlice(` |
| 7,804 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,812 | `cycleMonths` | `function cycleMonths(` |
| 7,831 | `histControls` | `function histControls(` |
| 7,845 | `cycLabel` | `function cycLabel(` |
| 7,861 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,870 | `cyclePicker` | `function cyclePicker(` |
| 7,889 | `rangeBar` | `function rangeBar(` |
| 7,901 | `trendOf` | `function trendOf(` |
| 7,946 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,956 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,977_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,978 | `yearOf` | `function yearOf(` |
| 7,979 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,980_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,018 | `headSigma` | `function headSigma(` |
| 8,026 | `atQuarter` | `function atQuarter(` |
| 8,027 | `atMonth` | `function atMonth(` |
| 8,028 | `cycleAverages` | `function cycleAverages(` |
| 8,035 | `ordinal` | `function ordinal(` |
| 8,036 | `hiCard` | `function hiCard(` |
| 8,047 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,061_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,068 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,084 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,091 | `moreRow` | `function moreRow(` |
| 8,097 | `powerPageNote` | `var powerPageNote =` |
| 8,098 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,110_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,113 | `xLabelOf` | `function xLabelOf(` |
| 8,133 | `fitGroup` | `function fitGroup(` |
| 8,155 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,214_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,238 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,248 | `vGrid` | `function vGrid(` |
| 8,273 | `COL_FILL` | `var COL_FILL =` |
| 8,306 | `colPath` | `function colPath(` |
| 8,311 | `colWidth` | `function colWidth(` |
| 8,358 | `AXIS` | `var AXIS =` |
| 8,359 | `chartAxes` | `function chartAxes(` |
| 8,419 | `divergeChart` | `function divergeChart(` |
| 8,487 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,516_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,524 | `maxIn` | `function maxIn(` |
| 8,542 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,556 | `PEEK_W` | `var PEEK_W =` |
| 8,559 | `PEEK_H` | `var PEEK_H =` |
| 8,564 | `colPeek` | `function colPeek(` |
| 8,591 | `meterPeek` | `function meterPeek(` |
| 8,608 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,613 | `pressureZone` | `function pressureZone(` |
| 8,628 | `HZN_BACK` | `var HZN_BACK =` |
| 8,629 | `hznLast` | `function hznLast(` |
| 8,630 | `hznBack` | `function hznBack(` |
| 8,631 | `horizonWord` | `function horizonWord(` |
| 8,656 | `HZN_METERS` | `var HZN_METERS =` |
| 8,664 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,705 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,710 | `RISK_RISK` | `var RISK_RISK =` |
| 8,715 | `riskCell` | `function riskCell(` |
| 8,716 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,747 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,772_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,793 | `pulseClipN` | `var pulseClipN =` |
| 8,794 | `beatPath` | `function beatPath(` |
| 8,819 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,833 | `pulsePeek` | `function pulsePeek(` |
| 8,841 | `pulseBlock` | `function pulseBlock(` |
| 8,861 | `CHEV` | `var CHEV =` |
| 8,863 | `peekCard` | `function peekCard(` |
| 8,917 | `dropSvg` | `function dropSvg(` |
| 8,929 | `volumeSvg` | `function volumeSvg(` |
| 8,936 | `gaugeSvg` | `function gaugeSvg(` |
| 8,940 | `diamondSvg` | `function diamondSvg(` |
| 8,954 | `energyFromReserve` | `function energyFromReserve(` |
| 8,966 | `sproutSvg` | `function sproutSvg(` |
| 8,977 | `markSvg` | `function markSvg(` |
| 8,986 | `pressureSvg` | `function pressureSvg(` |
| 8,990 | `hormoneSvg` | `function hormoneSvg(` |
| 8,996 | `flameSvg` | `function flameSvg(` |
| 9,000 | `gearSvg` | `function gearSvg(` |
| 9,012 | `thermoSvg` | `function thermoSvg(` |
| 9,031 | `trendUpSvg` | `function trendUpSvg(` |
| 9,033 | `ecgSvg` | `function ecgSvg(` |
| 9,047 | `circulationSvg` | `function circulationSvg(` |
| 9,048 | `weatherSvg` | `function weatherSvg(` |
| 9,069 | `moodSvg` | `function moodSvg(` |
| 9,093 | `boltSvg` | `function boltSvg(` |
| 9,096 | `houseSvg` | `function houseSvg(` |
| 9,104 | `sunriseSvg` | `function sunriseSvg(` |
| 9,119 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,130 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,147_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,168 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,169 | `dsrHistory` | `var dsrHistory =` |
| 9,170 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,171 | `savHistory` | `var savHistory =` |
| 9,176 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,186 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,187 | `dsrNow` | `var dsrNow =` |
| 9,188 | `savNow` | `var savNow =` |
| 9,189 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,194 | `householdsWord` | `function householdsWord(` |
| 9,201 | `householdsNow` | `var householdsNow =` |
| 9,208 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,209 | `dsrMeter` | `var dsrMeter =` |
| 9,212 | `savMeter` | `var savMeter =` |
| 9,215 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,232 | `savInfoHtml` | `function savInfoHtml(` |
| 9,250 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,259 | `curveNow` | `var curveNow =` |
| 9,260 | `curveTag` | `var curveTag =` |
| 9,261 | `curveSub` | `var curveSub =` |
| 9,265 | `curvePct` | `function curvePct(` |
| 9,266 | `curveNoteFull` | `var curveNoteFull =` |
| 9,281 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,289 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,330 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,358_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,372 | `marketTops` | `var marketTops =` |
| 9,382 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,387 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,389_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,410 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,411 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,416_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,437 | `slopeOf` | `function slopeOf(` |
| 9,448 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,454 | `readSeason` | `function readSeason(` |
| 9,479 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,481 | `qLabel` | `function qLabel(` |
| 9,505 | `regimeTrack` | `function regimeTrack(` |
| 9,528 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,530_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,537 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,538 | `seasonTitle` | `function seasonTitle(` |
| 9,539 | `monthLabel` | `function monthLabel(` |
| 9,540 | `cycleModel` | `function cycleModel(` |
| 9,592 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,600 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,607 | `nowModel` | `var nowModel =` |
| 9,608 | `readingNow` | `var readingNow =` |
| 9,609 | `cpiNow` | `var cpiNow =` |
| 9,610 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,611 | `currentSeason` | `var currentSeason =` |
| 9,612 | `seasonWhy` | `var seasonWhy =` |
| 9,629 | `seasonGroup` | `function seasonGroup(` |
| 9,643 | `arcGauge` | `function arcGauge(` |
| 9,685 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,698 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,705 | `tsyView` | `var tsyView =` |
| 9,707 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,709 | `spreadLabel` | `function spreadLabel(` |
| 9,716 | `policyFacts` | `function policyFacts(` |
| 9,730 | `policyFactRows` | `function policyFactRows(` |
| 9,736 | `allSources` | `var allSources =` |
| 9,760 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,793_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,796 | `SVG_NS` | `var SVG_NS =` |
| 9,797 | `svgEl` | `function svgEl(` |
| 9,810 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,846_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,847 | `clampPct` | `function clampPct(` |
| 9,854 | `infoIcon` | `function infoIcon(` |
| 9,863 | `detailTexts` | `var detailTexts =` |
| 9,881 | `detailSlots` | `var detailSlots =` |
| 9,882 | `detailSlot` | `function detailSlot(` |
| 9,893 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,897 | `_growthPanel` | `var _growthPanel =` |
| 9,898 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,904 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,915 | `facts` | `function facts(` |
| 9,916 | `factsFrom` | `function factsFrom(` |
| 9,920 | `expandBtn` | `function expandBtn(` |
| 9,926 | `sheetRenderers` | `var sheetRenderers =` |
| 9,943 | `pageMode` | `var pageMode =` |
| 9,950 | `pageCycles` | `var pageCycles =` |
| 9,955 | `pageRange` | `var pageRange =` |
| 9,961 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,995_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,006 | `meterHtml` | `function meterHtml(` |
| 10,034 | `srcHtml` | `function srcHtml(` |
| 10,043 | `TIMING` | `var TIMING =` |
| 10,049 | `timingMark` | `function timingMark(` |
| 10,063 | `timingPill` | `function timingPill(` |
| 10,084 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,092 | `seatPageFoot` | `function seatPageFoot(` |
| 10,115 | `timingMembers` | `var timingMembers =` |
| 10,116 | `registerTiming` | `function registerTiming(` |
| 10,122 | `headHtml` | `function headHtml(` |
| 10,140 | `heldHighlights` | `var heldHighlights =` |
| 10,141 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,199_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,200 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,633_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,634 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,857_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,858 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,890_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,896 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,980_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,981 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,999_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,002 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,025_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,037 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,168_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,177 | `lendingWord` | `function lendingWord(` |
| 11,185 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,245_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,246 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,370_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,373 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,495_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,507 | `totalRiseIn` | `function totalRiseIn(` |
| 11,517 | `eraInflation` | `function eraInflation(` |
| 11,528 | `eraGrowth` | `function eraGrowth(` |
| 11,548 | `fmtSigned` | `function fmtSigned(` |
| 11,553 | `regimeArrow` | `function regimeArrow(` |
| 11,559 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,560 | `growthShown` | `function growthShown(` |
| 11,561 | `growthShownCap` | `function growthShownCap(` |
| 11,562 | `regimeState` | `function regimeState(` |
| 11,566 | `phaseClass` | `function phaseClass(` |
| 11,568 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,580 | `cycleViewEl` | `var cycleViewEl =` |
| 11,584 | `tempCard` | `var tempCard =` |
| 11,585 | `placeCharts` | `function placeCharts(` |
| 11,590 | `shownEra` | `var shownEra =` |
| 11,591 | `calendarReset` | `var calendarReset =` |
| 11,592 | `metricPageReset` | `var metricPageReset =` |
| 11,593 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,596 | `topbarBack` | `var topbarBack =` |
| 11,597 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,604_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,605 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,766_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,767 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,785_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,788 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,809_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,815 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,818 | `hubSet` | `function hubSet(` |
| 11,831 | `quarterPopup` | `function quarterPopup(` |
| 11,864 | `hubShowDefault` | `function hubShowDefault(` |
| 11,873 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,879 | `hubShowYear` | `function hubShowYear(` |
| 11,894 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,986_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,989 | `tempState` | `var tempState =` |
| 11,992 | `chartLink` | `var chartLink =` |
| 12,012 | `m2Step` | `function m2Step(` |
| 12,015 | `heatStep` | `function heatStep(` |
| 12,019 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,206_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,209 | `drawGrowth` | `function drawGrowth(` |
| 12,348 | `wireResize` | `function wireResize(` |
| 12,354 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,366_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,367 | `renderCycleView` | `function renderCycleView(` |
| 12,419 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,427_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,438 | `peerChosen` | `function peerChosen(` |
| 12,439 | `peerReaches` | `function peerReaches(` |
| 12,470 | `shownEraModel` | `var shownEraModel =` |
| 12,471 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,473_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,475 | `stripGroupName` | `var stripGroupName =` |
| 12,476 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,522 | `marketStripHtml` | `function marketStripHtml(` |
| 12,585 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,586 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,616_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,617 | `renderCycleList` | `function renderCycleList(` |
| 12,708 | `renderSignsList` | `function renderSignsList(` |
| 12,993 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,270_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,282 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,315_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,323 | `__roster` | `var __roster =` |
| 14,324 | `readingRoster` | `function readingRoster(` |
| 14,379 | `readFig` | `function readFig(` |
| 14,387 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes \u2014 today beside a past top (Version 610, rebuilt in Version 612)

_line 14,394_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,422 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,480_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,481 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,543_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,544 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,577_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,578 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,142–4,145 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,637–8,650 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,488–9,501 | `seasonTrackAll` | The season, computed |
| 9,523–9,527 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,734 |
| `desire-range` | 10,522 |
| `fear-range` | 11,335 |
| `hormones-range` | 11,072 |
| `hzn-range` | 10,626 |
| `hzn-spread` | 10,620 |
| `pressure-range` | 11,212 |
| `pulse-range` | 10,473 |
| `sheet-marker-deficit` | 13,731 |
| `sheet-metric-gdp` | 13,615 |
| `sheet-metric-households` | 13,765 |
| `sheet-metric-power` | 13,694 |
| `sheet-metric-temp` | 13,565 |
| `sheet-metric-valuation` | 13,810 |
| `sheet-sign-activity` | 13,676 |
| `sheet-sign-desire` | 10,523 |
| `sheet-sign-horizon` | 10,627 |
| `sheet-sign-hormones` | 11,075 |
| `sheet-sign-pressure` | 11,213 |
| `sheet-sign-pulse` | 10,472 |
| `sheet-sign-sentiment` | 11,340 |
| `sheet-sign-volume` | 10,496 |
| `volume-range` | 10,497 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,740 |
| `desire-range` | 10,505 |
| `fear-range` | 11,292 |
| `hzn-range` | 10,551 |
| `pulse-range` | 10,450 |
| `sheet-metric-gdp` | 13,616 |
| `sheet-metric-power` | 13,695 |
| `sheet-metric-temp` | 13,566 |
| `sheet-metric-valuation` | 13,811 |
| `volume-range` | 10,477 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,323 |
| `sheet-metric-gdp` | 6,324 |
| `sheet-sign-activity` | 6,331 |
| `sheet-metric-power` | 6,332 |
| `sheet-metric-valuation` | 6,334 |
| `sheet-metric-households` | 6,335 |
| `deficit-range` | 6,336 |
| `volume-range` | 6,337 |
| `pulse-range` | 6,338 |
| `hzn-range` | 6,344 |
| `desire-range` | 6,345 |
| `fear-range` | 6,346 |
| `hormones-range` | 6,347 |
| `pressure-range` | 6,348 |

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
| 2,598 | hero: yield curve |
| 2,675 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,754 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,853 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,878 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,893 | long cycle (structural layer) |
| 2,934 | indicator grid |
| 2,977 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,994 | info icon + popover (progressive disclosure for longer notes) |
| 3,015 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,110 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (145), which is what the renderers fill:

| Line | id |
|---|---|
| 3,142 | `topbar-back` |
| 3,145 | `topbar-title` |
| 3,146 | `menu-btn` |
| 3,163 | `main` |
| 3,170 | `cycle-view` |
| 3,178 | `cycle-kicker` |
| 3,184 | `cycle-dial` |
| 3,186 | `season-wheel-hub-date` |
| 3,187 | `season-wheel-hub-theme` |
| 3,188 | `season-wheel-hub-detail` |
| 3,196 | `temp-card` |
| 3,198 | `temp-kicker` |
| 3,199 | `temp-sub` |
| 3,202 | `temp-svg` |
| 3,203 | `temp-tooltip` |
| 3,209 | `temp-stats` |
| 3,216 | `growth-card` |
| 3,219 | `growth-kicker` |
| 3,219 | `growth-phase` |
| 3,219 | `growth-sub` |
| 3,220 | `growth-svg` |
| 3,220 | `growth-tooltip` |
| 3,225 | `growth-stats` |
| 3,234 | `today-analysis` |
| 3,238 | `peek-row` |
| 3,242 | `sheet-metric-temp` |
| 3,243 | `temp-timing` |
| 3,244 | `temp-chart` |
| 3,246 | `temp-rangebar` |
| 3,248 | `temp-head` |
| 3,249 | `slot-temp` |
| 3,250 | `temp-history` |
| 3,251 | `temp-hist-tooltip` |
| 3,254 | `temp-trend` |
| 3,258 | `temp-highlights` |
| 3,261 | `sheet-metric-gdp` |
| 3,262 | `gdp-timing` |
| 3,263 | `gdp-chart` |
| 3,264 | `gdp-rangebar` |
| 3,266 | `gdp-head` |
| 3,267 | `slot-growth` |
| 3,268 | `gdp-history` |
| 3,269 | `gdp-hist-tooltip` |
| 3,270 | `gdp-yoy` |
| 3,280 | `gdp-trend` |
| 3,282 | `gdp-panel` |
| 3,287 | `subj-ring-gdp` |
| 3,289 | `subj-label-gdp` |
| 3,290 | `subj-value-gdp` |
| 3,291 | `subj-say-gdp` |
| 3,292 | `subj-spark-gdp` |
| 3,297 | `subj-ctx-gdp` |
| 3,300 | `gdp-highlights` |
| 3,308 | `sheet-metric-power` |
| 3,309 | `power-timing` |
| 3,310 | `power-head` |
| 3,311 | `power-chart` |
| 3,315 | `subj-ring-resilience` |
| 3,318 | `subj-value-resilience` |
| 3,319 | `subj-say-resilience` |
| 3,324 | `subj-ctx-resilience` |
| 3,328 | `longcycle-title` |
| 3,330 | `longcycle-tag` |
| 3,344 | `power-highlights` |
| 3,351 | `sheet-marker-deficit` |
| 3,357 | `sheet-metric-households` |
| 3,358 | `households-timing` |
| 3,359 | `households-chart` |
| 3,360 | `households-highlights` |
| 3,364 | `sheet-metric-valuation` |
| 3,365 | `valuation-timing` |
| 3,366 | `valuation-head` |
| 3,367 | `valuation-chart` |
| 3,371 | `subj-ring-valuation` |
| 3,374 | `subj-value-valuation` |
| 3,375 | `subj-say-valuation` |
| 3,380 | `subj-ctx-valuation` |
| 3,384 | `valuation-title` |
| 3,386 | `valuation-tag` |
| 3,393 | `valuation-highlights` |
| 3,417 | `subj-value-hormones` |
| 3,418 | `subj-say-hormones` |
| 3,426 | `hormones-history` |
| 3,436 | `hormones-insights` |
| 3,462 | `subj-value-horizon` |
| 3,463 | `subj-say-horizon` |
| 3,464 | `subj-spark-horizon` |
| 3,474 | `hzn-timeline` |
| 3,476 | `hzn-head` |
| 3,477 | `spread-history-shell` |
| 3,478 | `spread-history-svg` |
| 3,479 | `spread-history-tooltip` |
| 3,484 | `ylm-shell` |
| 3,485 | `ylm-svg` |
| 3,486 | `ylm-tooltip` |
| 3,489 | `hzn-trend` |
| 3,490 | `ylm-trend` |
| 3,492 | `horizon-insights` |
| 3,520 | `subj-value-pressure` |
| 3,521 | `subj-say-pressure` |
| 3,526 | `pressure-history` |
| 3,527 | `pressure-highlights` |
| 3,533 | `subj-ring-sentiment` |
| 3,536 | `subj-value-sentiment` |
| 3,537 | `subj-say-sentiment` |
| 3,538 | `subj-spark-sentiment` |
| 3,552 | `fear-history` |
| 3,553 | `curve-highlights` |
| 3,567 | `signs-list` |
| 3,578 | `calendar-list` |
| 3,583 | `indicators-peek` |
| 3,592 | `rhymes-card` |
| 3,603 | `rhy-pick` |
| 3,604 | `rhy-body` |
| 3,651 | `cycle-list` |
| 3,657 | `cycle-more` |
| 3,658 | `cycle-more-label` |
| 3,667 | `calendar-cycle` |
| 3,668 | `calendar-cycle-slot` |
| 3,675 | `cycle-cats` |
| 3,726 | `seasons-kicker` |
| 3,727 | `seasons-rows` |
| 3,731 | `framework-kicker` |
| 3,733 | `framework-rows` |
| 3,740 | `more-menu` |
| 3,743 | `menu-back` |
| 3,757 | `sources-open` |
| 3,765 | `appearance-current` |
| 3,773 | `sheet-howto` |
| 3,817 | `sheet-book` |
| 3,849 | `sheet-appearance` |
| 3,857 | `theme-toggle` |
| 3,864 | `sheet-contact` |
| 3,873 | `contact-form` |
| 3,874 | `contact-title` |
| 3,875 | `contact-message` |
| 3,877 | `contact-hint` |
| 3,878 | `contact-send` |
| 3,887 | `sheet-sources` |
| 3,890 | `sources-back` |
| 3,897 | `asof-text` |
| 3,898 | `sources-groups` |
| 3,905 | `detail-backdrop` |
| 3,907 | `detail-modal-close` |
| 3,908 | `detail-modal-body` |

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

