# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,761 lines**, about 1231 KB, roughly **350 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `5c9b0e7` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,168 | the whole stylesheet, every token and rule |
| **Markup** | 3,169–3,955 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,956–14,708 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,709–14,761 | </body></html> |

Counts: **256** top-level functions, **181** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,961_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,965 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,966 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,967 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,985 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,989 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,994_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,004 | `wheelMeta` | `var wheelMeta =` |
| 4,015 | `seasonOverride` | `var seasonOverride =` |
| 4,018 | `cycleNowNote` | `var cycleNowNote =` |
| 4,027 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,113 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,158 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,171_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,188 | `LIVE` | `function LIVE(` |
| 4,215 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,223 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,224 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,227_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,258 | `repaintFigureText` | `function repaintFigureText(` |
| 4,271 | `repaintRow` | `function repaintRow(` |
| 4,284 | `repaintTag` | `function repaintTag(` |
| 4,294 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,319 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,327 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,335 | `REPAINT` | `var REPAINT =` |
| 4,352 | `liveAsOf` | `var liveAsOf =` |
| 4,353 | `fmtAsOf` | `function fmtAsOf(` |
| 4,358 | `applyLive` | `function applyLive(` |
| 4,437 | `repaintPolicy` | `function repaintPolicy(` |
| 4,491 | `GYN` | `var GYN =` |
| 4,511 | `refreshLiveData` | `function refreshLiveData(` |
| 4,552 | `fetchSiteData` | `function fetchSiteData(` |
| 4,582 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,596_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,597 | `yieldCurve` | `var yieldCurve =` |
| 4,610 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,634 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,646 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,674_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,679 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,703 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,727 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,751 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,778 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,803_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,812 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,822 | `uninvLagToday` | `var uninvLagToday =` |
| 4,834 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,847 | `gdpPeers` | `var gdpPeers =` |
| 4,888 | `gdpSrc` | `var gdpSrc =` |
| 4,889 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,894 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,907 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,945_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,967 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,977_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,993 | `stressScoreFor` | `function stressScoreFor(` |
| 4,999 | `stressScore` | `var stressScore =` |
| 5,005 | `powerOf` | `var powerOf =` |
| 5,006 | `powerScore` | `var powerScore =` |
| 5,023 | `stressHistory` | `var stressHistory =` |
| 5,034 | `powerMeter` | `var powerMeter =` |
| 5,036 | `stressNoteFull` | `var stressNoteFull =` |
| 5,068 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,070_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,093 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,094 | `deficitHistory` | `var deficitHistory =` |
| 5,097 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,104 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,106 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,154 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,155 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,156 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,173_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,186 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,199_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,213 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,216 | `timelineSpan` | `function timelineSpan(` |
| 5,222 | `timelineFor` | `function timelineFor(` |
| 5,235 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,241_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,247 | `windowScale` | `function windowScale(` |
| 5,263 | `windowYears` | `function windowYears(` |
| 5,281 | `refName` | `function refName(` |
| 5,288 | `histReadEnsure` | `function histReadEnsure(` |
| 5,327 | `seatBandReading` | `function seatBandReading(` |
| 5,350 | `histReadFill` | `function histReadFill(` |
| 5,478 | `histAxisEnds` | `function histAxisEnds(` |
| 5,489 | `histLegend` | `function histLegend(` |
| 5,577 | `refitHistory` | `function refitHistory(` |
| 5,589 | `wireHistHover` | `function wireHistHover(` |
| 5,669 | `mWindowFrom` | `function mWindowFrom(` |
| 5,674 | `qWindowFrom` | `function qWindowFrom(` |
| 5,679 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,680 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,682 | `DEF_1983` | `var DEF_1983 =` |
| 5,684 | `defFrom` | `function defFrom(` |
| 5,695 | `deficitChart` | `function deficitChart(` |
| 5,785 | `deficitBlock` | `function deficitBlock(` |
| 5,847 | `buffettHistory` | `var buffettHistory =` |
| 5,877 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,878 | `hyDates` | `var hyDates =` |
| 5,879 | `hyOas` | `var hyOas =` |
| 5,880 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,887 | `hyAt` | `function hyAt(` |
| 5,891 | `hyLabel` | `function hyLabel(` |
| 5,892 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,893 | `hyNum` | `function hyNum(` |
| 5,894 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,904 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,914 | `capeHistory` | `var capeHistory =` |
| 5,916 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,934_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,940 | `sentiment` | `var sentiment =` |
| 5,958 | `valuation` | `var valuation =` |
| 5,995 | `valRow` | `function valRow(` |
| 6,003 | `coincident` | `var coincident =` |
| 6,064 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,082 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,083 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,084 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,086_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,099 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,100 | `m2vHistory` | `var m2vHistory =` |
| 6,120 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,213 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,303 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,304 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,344_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,350 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,351 | `DOTS` | `var DOTS =` |
| 6,358 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,392 | `histHead` | `function histHead(` |
| 6,416 | `headNoteIdx` | `var headNoteIdx =` |
| 6,417 | `headMenuHtml` | `function headMenuHtml(` |
| 6,475 | `headMenuFor` | `var headMenuFor =` |
| 6,477 | `headSubFor` | `var headSubFor =` |
| 6,478 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,523 | `nameWithMark` | `function nameWithMark(` |
| 6,529 | `panelRow` | `function panelRow(` |
| 6,562 | `panelFromMeter` | `function panelFromMeter(` |
| 6,576 | `meterFlagged` | `function meterFlagged(` |
| 6,587 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,615 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,629 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,648 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,667 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,681 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,706 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,737 | `desireBlock` | `function desireBlock(` |
| 6,764 | `volumeBlock` | `function volumeBlock(` |
| 6,789 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,812 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,820_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,833 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,834 | `m2Level` | `var m2Level =` |
| 6,856 | `m2Yoy` | `var m2Yoy =` |
| 6,857 | `M2_NORM` | `var M2_NORM =` |
| 6,862 | `volumeVerdict` | `function volumeVerdict(` |
| 6,899 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,900 | `unempHistory` | `var unempHistory =` |
| 6,906 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,921 | `NROU_NOW` | `var NROU_NOW =` |
| 6,922 | `unempState` | `function unempState(` |
| 6,928 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,992_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,001 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 7,010_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,023 | `checkLendingStandards` | `function checkLendingStandards(` |
| 7,036 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,092 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,161 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,162 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,165 | `qAtIndex` | `function qAtIndex(` |
| 7,166 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,174_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,189 | `householdsChart` | `function householdsChart(` |
| 7,257 | `lastChartAvg` | `var lastChartAvg =` |
| 7,258 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,343 | `GDP_NORM` | `var GDP_NORM =` |
| 7,349 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,350 | `gdpNowQ` | `var gdpNowQ =` |
| 7,351 | `gdpMeter` | `var gdpMeter =` |
| 7,354 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,376 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,442 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,506 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,514 | `velocityVerdict` | `function velocityVerdict(` |
| 7,522 | `derivePulseTag` | `function derivePulseTag(` |
| 7,528 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,588_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,597 | `seasonReading` | `var seasonReading =` |
| 7,646 | `frameworkRows` | `var frameworkRows =` |
| 7,656 | `vixRow` | `var vixRow =` |
| 7,664 | `vixWordOf` | `var vixWordOf =` |
| 7,668 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,683_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,687 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,696_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,697 | `calendarTodayY` | `var calendarTodayY =` |
| 7,728 | `vix3mClose` | `var vix3mClose =` |
| 7,729 | `fearCurve` | `function fearCurve(` |
| 7,736 | `curveVerdict` | `function curveVerdict(` |
| 7,743 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,748 | `valuationVerdict` | `function valuationVerdict(` |
| 7,766 | `sparkHtml` | `function sparkHtml(` |
| 7,785 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,791_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,804 | `modeBar` | `function modeBar(` |
| 7,819 | `pickerOpen` | `var pickerOpen =` |
| 7,823 | `cycleByName` | `function cycleByName(` |
| 7,827 | `openCycle` | `function openCycle(` |
| 7,833 | `cycleSlice` | `function cycleSlice(` |
| 7,842 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,850 | `cycleMonths` | `function cycleMonths(` |
| 7,869 | `histControls` | `function histControls(` |
| 7,883 | `cycLabel` | `function cycLabel(` |
| 7,899 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,908 | `cyclePicker` | `function cyclePicker(` |
| 7,927 | `rangeBar` | `function rangeBar(` |
| 7,939 | `trendOf` | `function trendOf(` |
| 7,984 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,994 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 8,015_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,016 | `yearOf` | `function yearOf(` |
| 8,017 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 8,018_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,056 | `headSigma` | `function headSigma(` |
| 8,064 | `atQuarter` | `function atQuarter(` |
| 8,065 | `atMonth` | `function atMonth(` |
| 8,066 | `cycleAverages` | `function cycleAverages(` |
| 8,073 | `ordinal` | `function ordinal(` |
| 8,074 | `hiCard` | `function hiCard(` |
| 8,085 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,099_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,106 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,122 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,129 | `moreRow` | `function moreRow(` |
| 8,135 | `powerPageNote` | `var powerPageNote =` |
| 8,136 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,148_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,151 | `xLabelOf` | `function xLabelOf(` |
| 8,171 | `fitGroup` | `function fitGroup(` |
| 8,193 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,252_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,276 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,286 | `vGrid` | `function vGrid(` |
| 8,311 | `COL_FILL` | `var COL_FILL =` |
| 8,344 | `colPath` | `function colPath(` |
| 8,349 | `colWidth` | `function colWidth(` |
| 8,396 | `AXIS` | `var AXIS =` |
| 8,397 | `chartAxes` | `function chartAxes(` |
| 8,457 | `divergeChart` | `function divergeChart(` |
| 8,525 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,554_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,562 | `maxIn` | `function maxIn(` |
| 8,580 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,594 | `PEEK_W` | `var PEEK_W =` |
| 8,597 | `PEEK_H` | `var PEEK_H =` |
| 8,602 | `colPeek` | `function colPeek(` |
| 8,629 | `meterPeek` | `function meterPeek(` |
| 8,646 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,651 | `pressureZone` | `function pressureZone(` |
| 8,666 | `HZN_BACK` | `var HZN_BACK =` |
| 8,667 | `hznLast` | `function hznLast(` |
| 8,668 | `hznBack` | `function hznBack(` |
| 8,669 | `horizonWord` | `function horizonWord(` |
| 8,694 | `HZN_METERS` | `var HZN_METERS =` |
| 8,702 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,743 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,748 | `RISK_RISK` | `var RISK_RISK =` |
| 8,753 | `riskCell` | `function riskCell(` |
| 8,754 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,785 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,810_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,831 | `pulseClipN` | `var pulseClipN =` |
| 8,832 | `beatPath` | `function beatPath(` |
| 8,857 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,871 | `pulsePeek` | `function pulsePeek(` |
| 8,879 | `pulseBlock` | `function pulseBlock(` |
| 8,899 | `CHEV` | `var CHEV =` |
| 8,901 | `peekCard` | `function peekCard(` |
| 8,955 | `dropSvg` | `function dropSvg(` |
| 8,967 | `volumeSvg` | `function volumeSvg(` |
| 8,974 | `gaugeSvg` | `function gaugeSvg(` |
| 8,978 | `diamondSvg` | `function diamondSvg(` |
| 8,992 | `energyFromReserve` | `function energyFromReserve(` |
| 9,004 | `sproutSvg` | `function sproutSvg(` |
| 9,015 | `markSvg` | `function markSvg(` |
| 9,024 | `pressureSvg` | `function pressureSvg(` |
| 9,028 | `hormoneSvg` | `function hormoneSvg(` |
| 9,034 | `flameSvg` | `function flameSvg(` |
| 9,038 | `gearSvg` | `function gearSvg(` |
| 9,050 | `thermoSvg` | `function thermoSvg(` |
| 9,069 | `trendUpSvg` | `function trendUpSvg(` |
| 9,071 | `ecgSvg` | `function ecgSvg(` |
| 9,085 | `circulationSvg` | `function circulationSvg(` |
| 9,086 | `weatherSvg` | `function weatherSvg(` |
| 9,107 | `moodSvg` | `function moodSvg(` |
| 9,131 | `boltSvg` | `function boltSvg(` |
| 9,134 | `houseSvg` | `function houseSvg(` |
| 9,142 | `sunriseSvg` | `function sunriseSvg(` |
| 9,157 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,168 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,185_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,206 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,207 | `dsrHistory` | `var dsrHistory =` |
| 9,208 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,209 | `savHistory` | `var savHistory =` |
| 9,214 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,224 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,225 | `dsrNow` | `var dsrNow =` |
| 9,226 | `savNow` | `var savNow =` |
| 9,227 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,232 | `householdsWord` | `function householdsWord(` |
| 9,239 | `householdsNow` | `var householdsNow =` |
| 9,246 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,247 | `dsrMeter` | `var dsrMeter =` |
| 9,250 | `savMeter` | `var savMeter =` |
| 9,253 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,270 | `savInfoHtml` | `function savInfoHtml(` |
| 9,288 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,297 | `curveNow` | `var curveNow =` |
| 9,298 | `curveTag` | `var curveTag =` |
| 9,299 | `curveSub` | `var curveSub =` |
| 9,303 | `curvePct` | `function curvePct(` |
| 9,304 | `curveNoteFull` | `var curveNoteFull =` |
| 9,319 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,327 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,368 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610)

_line 9,396_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,404 | `marketTops` | `var marketTops =` |
| 9,409 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,414 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,416_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,437 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,438 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,443_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,464 | `slopeOf` | `function slopeOf(` |
| 9,475 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,481 | `readSeason` | `function readSeason(` |
| 9,506 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,508 | `qLabel` | `function qLabel(` |
| 9,532 | `regimeTrack` | `function regimeTrack(` |
| 9,555 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,557_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,564 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,565 | `seasonTitle` | `function seasonTitle(` |
| 9,566 | `monthLabel` | `function monthLabel(` |
| 9,567 | `cycleModel` | `function cycleModel(` |
| 9,619 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,627 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,634 | `nowModel` | `var nowModel =` |
| 9,635 | `readingNow` | `var readingNow =` |
| 9,636 | `cpiNow` | `var cpiNow =` |
| 9,637 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,638 | `currentSeason` | `var currentSeason =` |
| 9,639 | `seasonWhy` | `var seasonWhy =` |
| 9,656 | `seasonGroup` | `function seasonGroup(` |
| 9,670 | `arcGauge` | `function arcGauge(` |
| 9,712 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,725 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,732 | `tsyView` | `var tsyView =` |
| 9,734 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,736 | `spreadLabel` | `function spreadLabel(` |
| 9,743 | `policyFacts` | `function policyFacts(` |
| 9,757 | `policyFactRows` | `function policyFactRows(` |
| 9,763 | `allSources` | `var allSources =` |
| 9,787 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,820_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,823 | `SVG_NS` | `var SVG_NS =` |
| 9,824 | `svgEl` | `function svgEl(` |
| 9,837 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,873_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,874 | `clampPct` | `function clampPct(` |
| 9,881 | `infoIcon` | `function infoIcon(` |
| 9,890 | `detailTexts` | `var detailTexts =` |
| 9,908 | `detailSlots` | `var detailSlots =` |
| 9,909 | `detailSlot` | `function detailSlot(` |
| 9,920 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,924 | `_growthPanel` | `var _growthPanel =` |
| 9,925 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,931 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,942 | `facts` | `function facts(` |
| 9,943 | `factsFrom` | `function factsFrom(` |
| 9,947 | `expandBtn` | `function expandBtn(` |
| 9,953 | `sheetRenderers` | `var sheetRenderers =` |
| 9,970 | `pageMode` | `var pageMode =` |
| 9,977 | `pageCycles` | `var pageCycles =` |
| 9,982 | `pageRange` | `var pageRange =` |
| 9,988 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,022_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,033 | `meterHtml` | `function meterHtml(` |
| 10,061 | `srcHtml` | `function srcHtml(` |
| 10,070 | `TIMING` | `var TIMING =` |
| 10,076 | `timingMark` | `function timingMark(` |
| 10,090 | `timingPill` | `function timingPill(` |
| 10,111 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,119 | `seatPageFoot` | `function seatPageFoot(` |
| 10,142 | `timingMembers` | `var timingMembers =` |
| 10,143 | `registerTiming` | `function registerTiming(` |
| 10,149 | `headHtml` | `function headHtml(` |
| 10,167 | `heldHighlights` | `var heldHighlights =` |
| 10,168 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,226_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,227 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,660_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,661 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,884_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,885 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,917_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,923 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,007_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,008 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,026_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,029 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,052_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,064 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,195_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,204 | `lendingWord` | `function lendingWord(` |
| 11,212 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,272_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,273 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,397_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,400 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,522_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,534 | `totalRiseIn` | `function totalRiseIn(` |
| 11,544 | `eraInflation` | `function eraInflation(` |
| 11,555 | `eraGrowth` | `function eraGrowth(` |
| 11,571 | `fmtSigned` | `function fmtSigned(` |
| 11,576 | `regimeArrow` | `function regimeArrow(` |
| 11,582 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,583 | `growthShown` | `function growthShown(` |
| 11,584 | `growthShownCap` | `function growthShownCap(` |
| 11,585 | `regimeState` | `function regimeState(` |
| 11,589 | `phaseClass` | `function phaseClass(` |
| 11,591 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,603 | `cycleViewEl` | `var cycleViewEl =` |
| 11,607 | `tempCard` | `var tempCard =` |
| 11,608 | `placeCharts` | `function placeCharts(` |
| 11,613 | `shownEra` | `var shownEra =` |
| 11,614 | `calendarReset` | `var calendarReset =` |
| 11,615 | `metricPageReset` | `var metricPageReset =` |
| 11,616 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,619 | `topbarBack` | `var topbarBack =` |
| 11,620 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,627_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,628 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,789_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,790 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,808_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,811 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,832_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,838 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,841 | `hubSet` | `function hubSet(` |
| 11,854 | `quarterPopup` | `function quarterPopup(` |
| 11,887 | `hubShowDefault` | `function hubShowDefault(` |
| 11,896 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,902 | `hubShowYear` | `function hubShowYear(` |
| 11,917 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,009_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,012 | `tempState` | `var tempState =` |
| 12,015 | `chartLink` | `var chartLink =` |
| 12,035 | `m2Step` | `function m2Step(` |
| 12,038 | `heatStep` | `function heatStep(` |
| 12,042 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,229_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,232 | `drawGrowth` | `function drawGrowth(` |
| 12,371 | `wireResize` | `function wireResize(` |
| 12,377 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,389_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,390 | `renderCycleView` | `function renderCycleView(` |
| 12,443 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,454 | `PEER_CARET` | `var PEER_CARET =` |
| 12,455 | `peerList` | `function peerList(` |
| 12,456 | `peerChosen` | `function peerChosen(` |
| 12,457 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,461 | `renderPeerPills` | `function renderPeerPills(` |
| 12,511 | `shownEraModel` | `var shownEraModel =` |
| 12,512 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,514_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,516 | `stripGroupName` | `var stripGroupName =` |
| 12,517 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,563 | `marketStripHtml` | `function marketStripHtml(` |
| 12,626 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,627 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,657_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,658 | `renderCycleList` | `function renderCycleList(` |
| 12,748 | `renderSignsList` | `function renderSignsList(` |
| 13,033 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Rhymes \u2014 today beside one past top (Version 610)

_line 14,310_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,325 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Echoes \u2014 every year that reads like now (Version 611)

_line 14,388_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,408 | `renderEchoes` | `function renderEchoes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,507_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,508 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,570_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,571 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,604_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,605 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,184–4,187 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,675–8,688 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,515–9,528 | `seasonTrackAll` | The season, computed |
| 9,550–9,554 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,774 |
| `desire-range` | 10,549 |
| `fear-range` | 11,362 |
| `hormones-range` | 11,099 |
| `hzn-range` | 10,653 |
| `hzn-spread` | 10,647 |
| `pressure-range` | 11,239 |
| `pulse-range` | 10,500 |
| `sheet-marker-deficit` | 13,771 |
| `sheet-metric-gdp` | 13,655 |
| `sheet-metric-households` | 13,805 |
| `sheet-metric-power` | 13,734 |
| `sheet-metric-temp` | 13,605 |
| `sheet-metric-valuation` | 13,850 |
| `sheet-sign-activity` | 13,716 |
| `sheet-sign-desire` | 10,550 |
| `sheet-sign-horizon` | 10,654 |
| `sheet-sign-hormones` | 11,102 |
| `sheet-sign-pressure` | 11,240 |
| `sheet-sign-pulse` | 10,499 |
| `sheet-sign-sentiment` | 11,367 |
| `sheet-sign-volume` | 10,523 |
| `volume-range` | 10,524 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,780 |
| `desire-range` | 10,532 |
| `fear-range` | 11,319 |
| `hzn-range` | 10,578 |
| `pulse-range` | 10,477 |
| `sheet-metric-gdp` | 13,656 |
| `sheet-metric-power` | 13,735 |
| `sheet-metric-temp` | 13,606 |
| `sheet-metric-valuation` | 13,851 |
| `volume-range` | 10,504 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,365 |
| `sheet-metric-gdp` | 6,366 |
| `sheet-sign-activity` | 6,373 |
| `sheet-metric-power` | 6,374 |
| `sheet-metric-valuation` | 6,376 |
| `sheet-metric-households` | 6,377 |
| `deficit-range` | 6,378 |
| `volume-range` | 6,379 |
| `pulse-range` | 6,380 |
| `hzn-range` | 6,386 |
| `desire-range` | 6,387 |
| `fear-range` | 6,388 |
| `hormones-range` | 6,389 |
| `pressure-range` | 6,390 |

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
| 2,569 | Echoes (Version 611): every year that reads like now |
| 2,611 | hero: yield curve |
| 2,707 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,786 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,885 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,910 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,925 | long cycle (structural layer) |
| 2,966 | indicator grid |
| 3,009 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 3,026 | info icon + popover (progressive disclosure for longer notes) |
| 3,047 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,142 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (147), which is what the renderers fill:

| Line | id |
|---|---|
| 3,174 | `topbar-back` |
| 3,177 | `topbar-title` |
| 3,178 | `menu-btn` |
| 3,195 | `main` |
| 3,202 | `cycle-view` |
| 3,210 | `cycle-kicker` |
| 3,216 | `cycle-dial` |
| 3,218 | `season-wheel-hub-date` |
| 3,219 | `season-wheel-hub-theme` |
| 3,220 | `season-wheel-hub-detail` |
| 3,228 | `temp-card` |
| 3,230 | `temp-kicker` |
| 3,231 | `temp-sub` |
| 3,234 | `temp-svg` |
| 3,235 | `temp-tooltip` |
| 3,241 | `temp-stats` |
| 3,248 | `growth-card` |
| 3,251 | `growth-kicker` |
| 3,251 | `growth-phase` |
| 3,251 | `growth-sub` |
| 3,251 | `growth-peers` |
| 3,252 | `growth-svg` |
| 3,252 | `growth-tooltip` |
| 3,257 | `growth-stats` |
| 3,266 | `today-analysis` |
| 3,270 | `peek-row` |
| 3,274 | `sheet-metric-temp` |
| 3,275 | `temp-timing` |
| 3,276 | `temp-chart` |
| 3,278 | `temp-rangebar` |
| 3,280 | `temp-head` |
| 3,281 | `slot-temp` |
| 3,282 | `temp-history` |
| 3,283 | `temp-hist-tooltip` |
| 3,286 | `temp-trend` |
| 3,290 | `temp-highlights` |
| 3,293 | `sheet-metric-gdp` |
| 3,294 | `gdp-timing` |
| 3,295 | `gdp-chart` |
| 3,296 | `gdp-rangebar` |
| 3,298 | `gdp-head` |
| 3,299 | `slot-growth` |
| 3,300 | `gdp-history` |
| 3,301 | `gdp-hist-tooltip` |
| 3,302 | `gdp-yoy` |
| 3,312 | `gdp-trend` |
| 3,314 | `gdp-panel` |
| 3,319 | `subj-ring-gdp` |
| 3,321 | `subj-label-gdp` |
| 3,322 | `subj-value-gdp` |
| 3,323 | `subj-say-gdp` |
| 3,324 | `subj-spark-gdp` |
| 3,329 | `subj-ctx-gdp` |
| 3,332 | `gdp-highlights` |
| 3,340 | `sheet-metric-power` |
| 3,341 | `power-timing` |
| 3,342 | `power-head` |
| 3,343 | `power-chart` |
| 3,347 | `subj-ring-resilience` |
| 3,350 | `subj-value-resilience` |
| 3,351 | `subj-say-resilience` |
| 3,356 | `subj-ctx-resilience` |
| 3,360 | `longcycle-title` |
| 3,362 | `longcycle-tag` |
| 3,376 | `power-highlights` |
| 3,383 | `sheet-marker-deficit` |
| 3,389 | `sheet-metric-households` |
| 3,390 | `households-timing` |
| 3,391 | `households-chart` |
| 3,392 | `households-highlights` |
| 3,396 | `sheet-metric-valuation` |
| 3,397 | `valuation-timing` |
| 3,398 | `valuation-head` |
| 3,399 | `valuation-chart` |
| 3,403 | `subj-ring-valuation` |
| 3,406 | `subj-value-valuation` |
| 3,407 | `subj-say-valuation` |
| 3,412 | `subj-ctx-valuation` |
| 3,416 | `valuation-title` |
| 3,418 | `valuation-tag` |
| 3,425 | `valuation-highlights` |
| 3,449 | `subj-value-hormones` |
| 3,450 | `subj-say-hormones` |
| 3,458 | `hormones-history` |
| 3,468 | `hormones-insights` |
| 3,494 | `subj-value-horizon` |
| 3,495 | `subj-say-horizon` |
| 3,496 | `subj-spark-horizon` |
| 3,506 | `hzn-timeline` |
| 3,508 | `hzn-head` |
| 3,509 | `spread-history-shell` |
| 3,510 | `spread-history-svg` |
| 3,511 | `spread-history-tooltip` |
| 3,516 | `ylm-shell` |
| 3,517 | `ylm-svg` |
| 3,518 | `ylm-tooltip` |
| 3,521 | `hzn-trend` |
| 3,522 | `ylm-trend` |
| 3,524 | `horizon-insights` |
| 3,552 | `subj-value-pressure` |
| 3,553 | `subj-say-pressure` |
| 3,558 | `pressure-history` |
| 3,559 | `pressure-highlights` |
| 3,565 | `subj-ring-sentiment` |
| 3,568 | `subj-value-sentiment` |
| 3,569 | `subj-say-sentiment` |
| 3,570 | `subj-spark-sentiment` |
| 3,584 | `fear-history` |
| 3,585 | `curve-highlights` |
| 3,599 | `signs-list` |
| 3,610 | `calendar-list` |
| 3,615 | `indicators-peek` |
| 3,624 | `rhymes-card` |
| 3,634 | `rhy-pick` |
| 3,635 | `rhy-body` |
| 3,643 | `echoes-card` |
| 3,653 | `ech-body` |
| 3,700 | `cycle-list` |
| 3,706 | `cycle-more` |
| 3,707 | `cycle-more-label` |
| 3,716 | `calendar-cycle` |
| 3,717 | `calendar-cycle-slot` |
| 3,768 | `seasons-kicker` |
| 3,769 | `seasons-rows` |
| 3,773 | `framework-kicker` |
| 3,775 | `framework-rows` |
| 3,782 | `more-menu` |
| 3,785 | `menu-back` |
| 3,799 | `sources-open` |
| 3,807 | `appearance-current` |
| 3,815 | `sheet-howto` |
| 3,859 | `sheet-book` |
| 3,891 | `sheet-appearance` |
| 3,899 | `theme-toggle` |
| 3,906 | `sheet-contact` |
| 3,915 | `contact-form` |
| 3,916 | `contact-title` |
| 3,917 | `contact-message` |
| 3,919 | `contact-hint` |
| 3,920 | `contact-send` |
| 3,929 | `sheet-sources` |
| 3,932 | `sources-back` |
| 3,939 | `asof-text` |
| 3,940 | `sources-groups` |
| 3,947 | `detail-backdrop` |
| 3,949 | `detail-modal-close` |
| 3,950 | `detail-modal-body` |

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

