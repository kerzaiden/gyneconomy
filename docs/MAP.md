# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,885 lines**, about 1233 KB, roughly **350 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `3f3c4b1` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,143 | the whole stylesheet, every token and rule |
| **Markup** | 3,144–3,920 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,921–14,832 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,833–14,885 | </body></html> |

Counts: **271** top-level functions, **181** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 3,921_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,936 | `byId` | `function byId(` |
| 3,944 | `byIdMaybe` | `function byIdMaybe(` |
| 3,951 | `put` | `function put(` |

### REFRESH: the one date to edit

_line 3,959_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,963 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,964 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,965 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,983 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,987 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,992_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,002 | `wheelMeta` | `var wheelMeta =` |
| 4,013 | `seasonOverride` | `var seasonOverride =` |
| 4,016 | `cycleNowNote` | `var cycleNowNote =` |
| 4,025 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,111 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,156 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,169_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,186 | `LIVE` | `function LIVE(` |
| 4,213 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,221 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,222 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,225_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,278 | `paintReading` | `function paintReading(` |
| 4,301 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,325 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,333 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,345 | `REPAINT` | `var REPAINT =` |
| 4,355 | `ON_OPEN` | `var ON_OPEN =` |
| 4,356 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 4,372 | `liveAsOf` | `var liveAsOf =` |
| 4,373 | `fmtAsOf` | `function fmtAsOf(` |
| 4,378 | `applyLive` | `function applyLive(` |
| 4,457 | `repaintPolicy` | `function repaintPolicy(` |
| 4,509 | `GYN` | `var GYN =` |
| 4,545 | `refreshLiveData` | `function refreshLiveData(` |
| 4,586 | `fetchSiteData` | `function fetchSiteData(` |
| 4,616 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,630_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,631 | `yieldCurve` | `var yieldCurve =` |
| 4,644 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,668 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,680 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,708_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,713 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,737 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,761 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,785 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,812 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,837_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,846 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,856 | `uninvLagToday` | `var uninvLagToday =` |
| 4,868 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,881 | `gdpPeers` | `var gdpPeers =` |
| 4,922 | `gdpSrc` | `var gdpSrc =` |
| 4,923 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,928 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,941 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,979_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,001 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 5,011_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,027 | `stressScoreFor` | `function stressScoreFor(` |
| 5,033 | `stressScore` | `var stressScore =` |
| 5,039 | `powerOf` | `var powerOf =` |
| 5,040 | `powerScore` | `var powerScore =` |
| 5,057 | `stressHistory` | `var stressHistory =` |
| 5,068 | `powerMeter` | `var powerMeter =` |
| 5,070 | `stressNoteFull` | `var stressNoteFull =` |
| 5,102 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,104_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,127 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,128 | `deficitHistory` | `var deficitHistory =` |
| 5,131 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,138 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,140 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,188 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,189 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,190 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,207_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,220 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,233_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,247 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,250 | `timelineSpan` | `function timelineSpan(` |
| 5,256 | `timelineFor` | `function timelineFor(` |
| 5,269 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,275_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,281 | `windowScale` | `function windowScale(` |
| 5,297 | `windowYears` | `function windowYears(` |
| 5,315 | `refName` | `function refName(` |
| 5,322 | `histReadEnsure` | `function histReadEnsure(` |
| 5,361 | `seatBandReading` | `function seatBandReading(` |
| 5,384 | `histReadFill` | `function histReadFill(` |
| 5,512 | `histAxisEnds` | `function histAxisEnds(` |
| 5,523 | `histLegend` | `function histLegend(` |
| 5,611 | `refitHistory` | `function refitHistory(` |
| 5,623 | `wireHistHover` | `function wireHistHover(` |
| 5,703 | `mWindowFrom` | `function mWindowFrom(` |
| 5,708 | `qWindowFrom` | `function qWindowFrom(` |
| 5,713 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,714 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,716 | `DEF_1983` | `var DEF_1983 =` |
| 5,718 | `defFrom` | `function defFrom(` |
| 5,729 | `deficitChart` | `function deficitChart(` |
| 5,818 | `deficitBlock` | `function deficitBlock(` |
| 5,880 | `buffettHistory` | `var buffettHistory =` |
| 5,910 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,911 | `hyDates` | `var hyDates =` |
| 5,912 | `hyOas` | `var hyOas =` |
| 5,913 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,920 | `hyAt` | `function hyAt(` |
| 5,924 | `hyLabel` | `function hyLabel(` |
| 5,925 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,926 | `hyNum` | `function hyNum(` |
| 5,927 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,937 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,947 | `capeHistory` | `var capeHistory =` |
| 5,949 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,967_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,973 | `sentiment` | `var sentiment =` |
| 5,991 | `valuation` | `var valuation =` |
| 6,028 | `valRow` | `function valRow(` |
| 6,036 | `coincident` | `var coincident =` |
| 6,097 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,115 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,116 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,117 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,119_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,132 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,133 | `m2vHistory` | `var m2vHistory =` |
| 6,153 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,245 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,334 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,335 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,375_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,381 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,382 | `DOTS` | `var DOTS =` |
| 6,389 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,423 | `histHead` | `function histHead(` |
| 6,447 | `headNoteIdx` | `var headNoteIdx =` |
| 6,448 | `headMenuHtml` | `function headMenuHtml(` |
| 6,506 | `headMenuFor` | `var headMenuFor =` |
| 6,508 | `headSubFor` | `var headSubFor =` |
| 6,509 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,558 | `nameWithMark` | `function nameWithMark(` |
| 6,564 | `panelRow` | `function panelRow(` |
| 6,597 | `panelFromMeter` | `function panelFromMeter(` |
| 6,611 | `meterFlagged` | `function meterFlagged(` |
| 6,622 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,650 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,664 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,683 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,702 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,716 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,741 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,772 | `desireBlock` | `function desireBlock(` |
| 6,799 | `volumeBlock` | `function volumeBlock(` |
| 6,824 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,847 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,855_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,868 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,869 | `m2Level` | `var m2Level =` |
| 6,891 | `m2Yoy` | `var m2Yoy =` |
| 6,892 | `M2_NORM` | `var M2_NORM =` |
| 6,897 | `volumeVerdict` | `function volumeVerdict(` |
| 6,934 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,935 | `unempHistory` | `var unempHistory =` |
| 6,941 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,956 | `NROU_NOW` | `var NROU_NOW =` |
| 6,957 | `unempState` | `function unempState(` |
| 6,963 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones — the policy rate's history

_line 7,025_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,034 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 7,043_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,056 | `checkLendingStandards` | `function checkLendingStandards(` |
| 7,069 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,123 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,190 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,191 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,194 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,202_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,217 | `householdsChart` | `function householdsChart(` |
| 7,284 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,367 | `GDP_NORM` | `var GDP_NORM =` |
| 7,373 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,374 | `gdpNowQ` | `var gdpNowQ =` |
| 7,375 | `gdpMeter` | `var gdpMeter =` |
| 7,378 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,400 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,464 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,527 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,535 | `velocityVerdict` | `function velocityVerdict(` |
| 7,543 | `derivePulseTag` | `function derivePulseTag(` |
| 7,549 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,609_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,618 | `seasonReading` | `var seasonReading =` |
| 7,667 | `frameworkRows` | `var frameworkRows =` |
| 7,677 | `vixRow` | `var vixRow =` |
| 7,685 | `vixWordOf` | `var vixWordOf =` |
| 7,689 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,704_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,708 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,717_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,718 | `calendarTodayY` | `var calendarTodayY =` |
| 7,749 | `vix3mClose` | `var vix3mClose =` |
| 7,750 | `fearCurve` | `function fearCurve(` |
| 7,757 | `curveVerdict` | `function curveVerdict(` |
| 7,764 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,769 | `valuationVerdict` | `function valuationVerdict(` |
| 7,787 | `sparkHtml` | `function sparkHtml(` |
| 7,806 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,812_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,825 | `modeBar` | `function modeBar(` |
| 7,840 | `pickerOpen` | `var pickerOpen =` |
| 7,844 | `cycleByName` | `function cycleByName(` |
| 7,848 | `openCycle` | `function openCycle(` |
| 7,854 | `cycleSlice` | `function cycleSlice(` |
| 7,863 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,871 | `cycleMonths` | `function cycleMonths(` |
| 7,890 | `histControls` | `function histControls(` |
| 7,904 | `cycLabel` | `function cycLabel(` |
| 7,920 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,929 | `cyclePicker` | `function cyclePicker(` |
| 7,948 | `rangeBar` | `function rangeBar(` |
| 7,960 | `trendOf` | `function trendOf(` |
| 8,005 | `TREND_ARROW` | `var TREND_ARROW =` |
| 8,015 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 8,036_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,037 | `yearOf` | `function yearOf(` |
| 8,038 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 8,039_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,077 | `headSigma` | `function headSigma(` |
| 8,085 | `atQuarter` | `function atQuarter(` |
| 8,086 | `atMonth` | `function atMonth(` |
| 8,087 | `cycleAverages` | `function cycleAverages(` |
| 8,094 | `ordinal` | `function ordinal(` |
| 8,095 | `hiCard` | `function hiCard(` |
| 8,106 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,120_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,127 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,143 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,150 | `moreRow` | `function moreRow(` |
| 8,156 | `powerPageNote` | `var powerPageNote =` |
| 8,157 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,169_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,172 | `xLabelOf` | `function xLabelOf(` |
| 8,192 | `fitGroup` | `function fitGroup(` |
| 8,214 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,273_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,297 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,307 | `vGrid` | `function vGrid(` |
| 8,332 | `COL_FILL` | `var COL_FILL =` |
| 8,365 | `colPath` | `function colPath(` |
| 8,370 | `colWidth` | `function colWidth(` |
| 8,417 | `AXIS` | `var AXIS =` |
| 8,433 | `histFrame` | `function histFrame(` |
| 8,445 | `xLabel` | `function xLabel(` |
| 8,449 | `crossLine` | `function crossLine(` |
| 8,454 | `zeroRule` | `function zeroRule(` |
| 8,457 | `meanRule` | `function meanRule(` |
| 8,469 | `pendingGeom` | `var pendingGeom =` |
| 8,470 | `publishGeom` | `function publishGeom(` |
| 8,471 | `attachHistory` | `function attachHistory(` |
| 8,486 | `histBar` | `function histBar(` |
| 8,489 | `histTip` | `function histTip(` |
| 8,492 | `avgRule` | `function avgRule(` |
| 8,495 | `vhOpen` | `function vhOpen(` |
| 8,496 | `chartAxes` | `function chartAxes(` |
| 8,556 | `divergeChart` | `function divergeChart(` |
| 8,624 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,653_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,661 | `maxIn` | `function maxIn(` |
| 8,679 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,693 | `PEEK_W` | `var PEEK_W =` |
| 8,696 | `PEEK_H` | `var PEEK_H =` |
| 8,701 | `colPeek` | `function colPeek(` |
| 8,728 | `meterPeek` | `function meterPeek(` |
| 8,745 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,750 | `pressureZone` | `function pressureZone(` |
| 8,765 | `HZN_BACK` | `var HZN_BACK =` |
| 8,766 | `hznLast` | `function hznLast(` |
| 8,767 | `hznBack` | `function hznBack(` |
| 8,768 | `horizonWord` | `function horizonWord(` |
| 8,793 | `HZN_METERS` | `var HZN_METERS =` |
| 8,801 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,842 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,847 | `RISK_RISK` | `var RISK_RISK =` |
| 8,852 | `riskCell` | `function riskCell(` |
| 8,853 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,884 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,909_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,930 | `pulseClipN` | `var pulseClipN =` |
| 8,931 | `beatPath` | `function beatPath(` |
| 8,956 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,970 | `pulsePeek` | `function pulsePeek(` |
| 8,978 | `pulseBlock` | `function pulseBlock(` |
| 8,998 | `CHEV` | `var CHEV =` |
| 9,000 | `peekCard` | `function peekCard(` |
| 9,054 | `dropSvg` | `function dropSvg(` |
| 9,066 | `volumeSvg` | `function volumeSvg(` |
| 9,073 | `gaugeSvg` | `function gaugeSvg(` |
| 9,077 | `diamondSvg` | `function diamondSvg(` |
| 9,091 | `energyFromReserve` | `function energyFromReserve(` |
| 9,103 | `sproutSvg` | `function sproutSvg(` |
| 9,114 | `markSvg` | `function markSvg(` |
| 9,123 | `pressureSvg` | `function pressureSvg(` |
| 9,127 | `hormoneSvg` | `function hormoneSvg(` |
| 9,133 | `flameSvg` | `function flameSvg(` |
| 9,137 | `gearSvg` | `function gearSvg(` |
| 9,149 | `thermoSvg` | `function thermoSvg(` |
| 9,168 | `trendUpSvg` | `function trendUpSvg(` |
| 9,170 | `ecgSvg` | `function ecgSvg(` |
| 9,184 | `circulationSvg` | `function circulationSvg(` |
| 9,185 | `weatherSvg` | `function weatherSvg(` |
| 9,206 | `moodSvg` | `function moodSvg(` |
| 9,230 | `boltSvg` | `function boltSvg(` |
| 9,233 | `houseSvg` | `function houseSvg(` |
| 9,241 | `sunriseSvg` | `function sunriseSvg(` |
| 9,256 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,267 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,284_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,305 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,306 | `dsrHistory` | `var dsrHistory =` |
| 9,307 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,308 | `savHistory` | `var savHistory =` |
| 9,313 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,323 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,324 | `dsrNow` | `var dsrNow =` |
| 9,325 | `savNow` | `var savNow =` |
| 9,326 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,331 | `householdsWord` | `function householdsWord(` |
| 9,338 | `householdsNow` | `var householdsNow =` |
| 9,345 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,346 | `dsrMeter` | `var dsrMeter =` |
| 9,349 | `savMeter` | `var savMeter =` |
| 9,352 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,369 | `savInfoHtml` | `function savInfoHtml(` |
| 9,387 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,396 | `curveNow` | `var curveNow =` |
| 9,397 | `curveTag` | `var curveTag =` |
| 9,398 | `curveSub` | `var curveSub =` |
| 9,402 | `curvePct` | `function curvePct(` |
| 9,403 | `curveNoteFull` | `var curveNoteFull =` |
| 9,418 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,426 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,467 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,495_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,509 | `marketTops` | `var marketTops =` |
| 9,519 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,524 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,526_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,547 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,548 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,553_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,574 | `slopeOf` | `function slopeOf(` |
| 9,585 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,591 | `readSeason` | `function readSeason(` |
| 9,616 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,618 | `qLabel` | `function qLabel(` |
| 9,642 | `regimeTrack` | `function regimeTrack(` |
| 9,665 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,667_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,674 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,675 | `seasonTitle` | `function seasonTitle(` |
| 9,676 | `monthLabel` | `function monthLabel(` |
| 9,677 | `cycleModel` | `function cycleModel(` |
| 9,729 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,737 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,744 | `nowModel` | `var nowModel =` |
| 9,745 | `readingNow` | `var readingNow =` |
| 9,746 | `cpiNow` | `var cpiNow =` |
| 9,747 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,748 | `currentSeason` | `var currentSeason =` |
| 9,749 | `seasonWhy` | `var seasonWhy =` |
| 9,766 | `seasonGroup` | `function seasonGroup(` |
| 9,780 | `arcGauge` | `function arcGauge(` |
| 9,822 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,835 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,842 | `tsyView` | `var tsyView =` |
| 9,844 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,846 | `spreadLabel` | `function spreadLabel(` |
| 9,853 | `policyFacts` | `function policyFacts(` |
| 9,867 | `policyFactRows` | `function policyFactRows(` |
| 9,873 | `allSources` | `var allSources =` |
| 9,897 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,930_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,933 | `SVG_NS` | `var SVG_NS =` |
| 9,934 | `svgEl` | `function svgEl(` |
| 9,947 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,983_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,984 | `clampPct` | `function clampPct(` |
| 9,991 | `infoIcon` | `function infoIcon(` |
| 10,000 | `detailTexts` | `var detailTexts =` |
| 10,018 | `detailSlots` | `var detailSlots =` |
| 10,019 | `detailSlot` | `function detailSlot(` |
| 10,030 | `powerPanelHtml` | `var powerPanelHtml =` |
| 10,034 | `_growthPanel` | `var _growthPanel =` |
| 10,035 | `growthPanelHtml` | `function growthPanelHtml(` |
| 10,041 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 10,052 | `facts` | `function facts(` |
| 10,053 | `factsFrom` | `function factsFrom(` |
| 10,057 | `expandBtn` | `function expandBtn(` |
| 10,063 | `sheetRenderers` | `var sheetRenderers =` |
| 10,080 | `pageMode` | `var pageMode =` |
| 10,087 | `pageCycles` | `var pageCycles =` |
| 10,092 | `pageRange` | `var pageRange =` |
| 10,098 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,132_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,143 | `meterHtml` | `function meterHtml(` |
| 10,174 | `srcBlock` | `function srcBlock(` |
| 10,175 | `srcHtml` | `function srcHtml(` |
| 10,184 | `TIMING` | `var TIMING =` |
| 10,190 | `timingMark` | `function timingMark(` |
| 10,204 | `timingPill` | `function timingPill(` |
| 10,225 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,233 | `seatPageFoot` | `function seatPageFoot(` |
| 10,256 | `timingMembers` | `var timingMembers =` |
| 10,257 | `registerTiming` | `function registerTiming(` |
| 10,263 | `headHtml` | `function headHtml(` |
| 10,281 | `heldHighlights` | `var heldHighlights =` |
| 10,282 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,340_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,341 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,762_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,763 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,985_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,986 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 11,018_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,024 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,108_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,109 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,127_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,130 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,153_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,165 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,294_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,303 | `lendingWord` | `function lendingWord(` |
| 11,311 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,369_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,370 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,494_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,497 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,620_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,632 | `totalRiseIn` | `function totalRiseIn(` |
| 11,642 | `eraInflation` | `function eraInflation(` |
| 11,653 | `eraGrowth` | `function eraGrowth(` |
| 11,673 | `fmtSigned` | `function fmtSigned(` |
| 11,678 | `regimeArrow` | `function regimeArrow(` |
| 11,684 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,685 | `growthShown` | `function growthShown(` |
| 11,686 | `growthShownCap` | `function growthShownCap(` |
| 11,687 | `regimeState` | `function regimeState(` |
| 11,691 | `phaseClass` | `function phaseClass(` |
| 11,693 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,705 | `cycleViewEl` | `var cycleViewEl =` |
| 11,711 | `tempCard` | `var tempCard =` |
| 11,712 | `placeCharts` | `function placeCharts(` |
| 11,717 | `shownEra` | `var shownEra =` |
| 11,718 | `calendarReset` | `var calendarReset =` |
| 11,719 | `metricPageReset` | `var metricPageReset =` |
| 11,720 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,723 | `topbarBack` | `var topbarBack =` |
| 11,724 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,731_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,732 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,893_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,894 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,912_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,915 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,936_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,942 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,945 | `hubSet` | `function hubSet(` |
| 11,958 | `quarterPopup` | `function quarterPopup(` |
| 11,991 | `hubShowDefault` | `function hubShowDefault(` |
| 12,000 | `hubShowQuarter` | `function hubShowQuarter(` |
| 12,006 | `hubShowYear` | `function hubShowYear(` |
| 12,021 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,113_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,116 | `tempState` | `var tempState =` |
| 12,119 | `chartLink` | `var chartLink =` |
| 12,139 | `m2Step` | `function m2Step(` |
| 12,142 | `heatStep` | `function heatStep(` |
| 12,146 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,333_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,336 | `drawGrowth` | `function drawGrowth(` |
| 12,475 | `wireResize` | `function wireResize(` |
| 12,481 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,493_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,494 | `renderCycleView` | `function renderCycleView(` |
| 12,555 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,563_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,574 | `peerChosen` | `function peerChosen(` |
| 12,575 | `peerReaches` | `function peerReaches(` |
| 12,605 | `shownEraModel` | `var shownEraModel =` |
| 12,606 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,608_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,610 | `stripGroupName` | `var stripGroupName =` |
| 12,611 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,657 | `marketStripHtml` | `function marketStripHtml(` |
| 12,720 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,721 | `settleStrips` | `function settleStrips(` |
| 12,756 | `renderSignsList` | `function renderSignsList(` |
| 13,041 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,317_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,318 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,418_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,430 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,473_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,481 | `__roster` | `var __roster =` |
| 14,482 | `readingRoster` | `function readingRoster(` |
| 14,537 | `readFig` | `function readFig(` |
| 14,545 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612)

_line 14,552_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,580 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,633_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,634 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,694_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,695 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,728_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,729 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,182–4,185 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,774–8,787 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,625–9,638 | `seasonTrackAll` | The season, computed |
| 9,660–9,664 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,769 |
| `desire-range` | 10,652 |
| `fear-range` | 11,459 |
| `hormones-range` | 11,199 |
| `hzn-range` | 10,755 |
| `hzn-spread` | 10,749 |
| `pressure-range` | 11,337 |
| `pulse-range` | 10,608 |
| `sheet-marker-deficit` | 13,766 |
| `sheet-metric-gdp` | 13,658 |
| `sheet-metric-households` | 13,796 |
| `sheet-metric-power` | 13,730 |
| `sheet-metric-temp` | 13,613 |
| `sheet-metric-valuation` | 13,840 |
| `sheet-sign-activity` | 13,714 |
| `sheet-sign-desire` | 10,653 |
| `sheet-sign-horizon` | 10,756 |
| `sheet-sign-hormones` | 11,202 |
| `sheet-sign-pressure` | 11,338 |
| `sheet-sign-pulse` | 10,607 |
| `sheet-sign-sentiment` | 11,464 |
| `sheet-sign-volume` | 10,628 |
| `volume-range` | 10,629 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,775 |
| `desire-range` | 10,637 |
| `fear-range` | 11,416 |
| `hzn-range` | 10,681 |
| `pulse-range` | 10,591 |
| `sheet-metric-gdp` | 13,659 |
| `sheet-metric-power` | 13,731 |
| `sheet-metric-temp` | 13,614 |
| `sheet-metric-valuation` | 13,841 |
| `volume-range` | 10,612 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,396 |
| `sheet-metric-gdp` | 6,397 |
| `sheet-sign-activity` | 6,404 |
| `sheet-metric-power` | 6,405 |
| `sheet-metric-valuation` | 6,407 |
| `sheet-metric-households` | 6,408 |
| `deficit-range` | 6,409 |
| `volume-range` | 6,410 |
| `pulse-range` | 6,411 |
| `hzn-range` | 6,417 |
| `desire-range` | 6,418 |
| `fear-range` | 6,419 |
| `hormones-range` | 6,420 |
| `pressure-range` | 6,421 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 192 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 325 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 423 | yearly calendar — one card per year, grouped into five eras |
| 430 | season strip |
| 483 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels … so if one day |
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

