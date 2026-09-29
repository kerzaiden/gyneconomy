# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,921 lines**, about 1235 KB, roughly **351 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `3b830d7` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,143 | the whole stylesheet, every token and rule |
| **Markup** | 3,144–3,920 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,921–14,868 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,869–14,921 | </body></html> |

Counts: **274** top-level functions, **180** top-level vars, **4** top-level IIFEs in the script.

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

_line 4,169_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,188 | `merge` | `function merge(` |
| 4,195 | `LIVE` | `function LIVE(` |
| 4,219 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,222_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,275 | `paintReading` | `function paintReading(` |
| 4,298 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,322 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,330 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY (Version 629)

_line 4,335_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,363 | `READINGS` | `var READINGS =` |
| 4,432 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 4,433 | `KINDS` | `var KINDS =` |
| 4,434 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 4,455 | `receive` | `function receive(` |
| 4,479 | `liveAsOf` | `var liveAsOf =` |
| 4,480 | `fmtAsOf` | `function fmtAsOf(` |
| 4,493 | `applyLive` | `function applyLive(` |
| 4,508 | `shapeOk` | `function shapeOk(` |
| 4,518 | `repaintPolicy` | `function repaintPolicy(` |
| 4,570 | `GYN` | `var GYN =` |
| 4,607 | `refreshLiveData` | `function refreshLiveData(` |
| 4,636 | `fetchSiteData` | `function fetchSiteData(` |
| 4,652 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,666_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,667 | `yieldCurve` | `var yieldCurve =` |
| 4,680 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,704 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,716 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,744_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,749 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,773 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,797 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,821 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,848 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,873_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,882 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,892 | `uninvLagToday` | `var uninvLagToday =` |
| 4,904 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,917 | `gdpPeers` | `var gdpPeers =` |
| 4,958 | `gdpSrc` | `var gdpSrc =` |
| 4,959 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,964 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,977 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 5,015_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,037 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 5,047_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,063 | `stressScoreFor` | `function stressScoreFor(` |
| 5,069 | `stressScore` | `var stressScore =` |
| 5,075 | `powerOf` | `var powerOf =` |
| 5,076 | `powerScore` | `var powerScore =` |
| 5,093 | `stressHistory` | `var stressHistory =` |
| 5,104 | `powerMeter` | `var powerMeter =` |
| 5,106 | `stressNoteFull` | `var stressNoteFull =` |
| 5,138 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,140_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,163 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,164 | `deficitHistory` | `var deficitHistory =` |
| 5,167 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,174 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,176 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,224 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,225 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,226 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,243_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,256 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,269_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,283 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,286 | `timelineSpan` | `function timelineSpan(` |
| 5,292 | `timelineFor` | `function timelineFor(` |
| 5,305 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,311_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,317 | `windowScale` | `function windowScale(` |
| 5,333 | `windowYears` | `function windowYears(` |
| 5,351 | `refName` | `function refName(` |
| 5,358 | `histReadEnsure` | `function histReadEnsure(` |
| 5,397 | `seatBandReading` | `function seatBandReading(` |
| 5,420 | `histReadFill` | `function histReadFill(` |
| 5,548 | `histAxisEnds` | `function histAxisEnds(` |
| 5,559 | `histLegend` | `function histLegend(` |
| 5,647 | `refitHistory` | `function refitHistory(` |
| 5,659 | `wireHistHover` | `function wireHistHover(` |
| 5,739 | `mWindowFrom` | `function mWindowFrom(` |
| 5,744 | `qWindowFrom` | `function qWindowFrom(` |
| 5,749 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,750 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,752 | `DEF_1983` | `var DEF_1983 =` |
| 5,754 | `defFrom` | `function defFrom(` |
| 5,765 | `deficitChart` | `function deficitChart(` |
| 5,854 | `deficitBlock` | `function deficitBlock(` |
| 5,916 | `buffettHistory` | `var buffettHistory =` |
| 5,946 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,947 | `hyDates` | `var hyDates =` |
| 5,948 | `hyOas` | `var hyOas =` |
| 5,949 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,956 | `hyAt` | `function hyAt(` |
| 5,960 | `hyLabel` | `function hyLabel(` |
| 5,961 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,962 | `hyNum` | `function hyNum(` |
| 5,963 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,973 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,983 | `capeHistory` | `var capeHistory =` |
| 5,985 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 6,003_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,009 | `sentiment` | `var sentiment =` |
| 6,027 | `valuation` | `var valuation =` |
| 6,064 | `valRow` | `function valRow(` |
| 6,072 | `coincident` | `var coincident =` |
| 6,133 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,151 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,152 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,153 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,155_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,168 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,169 | `m2vHistory` | `var m2vHistory =` |
| 6,189 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,281 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,370 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,371 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,411_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,417 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,418 | `DOTS` | `var DOTS =` |
| 6,425 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,459 | `histHead` | `function histHead(` |
| 6,483 | `headNoteIdx` | `var headNoteIdx =` |
| 6,484 | `headMenuHtml` | `function headMenuHtml(` |
| 6,542 | `headMenuFor` | `var headMenuFor =` |
| 6,544 | `headSubFor` | `var headSubFor =` |
| 6,545 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,594 | `nameWithMark` | `function nameWithMark(` |
| 6,600 | `panelRow` | `function panelRow(` |
| 6,633 | `panelFromMeter` | `function panelFromMeter(` |
| 6,647 | `meterFlagged` | `function meterFlagged(` |
| 6,658 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,686 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,700 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,719 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,738 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,752 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,777 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,808 | `desireBlock` | `function desireBlock(` |
| 6,835 | `volumeBlock` | `function volumeBlock(` |
| 6,860 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,883 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,891_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,904 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,905 | `m2Level` | `var m2Level =` |
| 6,927 | `m2Yoy` | `var m2Yoy =` |
| 6,928 | `M2_NORM` | `var M2_NORM =` |
| 6,933 | `volumeVerdict` | `function volumeVerdict(` |
| 6,970 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,971 | `unempHistory` | `var unempHistory =` |
| 6,977 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,992 | `NROU_NOW` | `var NROU_NOW =` |
| 6,993 | `unempState` | `function unempState(` |
| 6,999 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones — the policy rate's history

_line 7,061_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,070 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 7,079_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,092 | `checkLendingStandards` | `function checkLendingStandards(` |
| 7,105 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,159 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,226 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,227 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,230 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,238_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,253 | `householdsChart` | `function householdsChart(` |
| 7,320 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,403 | `GDP_NORM` | `var GDP_NORM =` |
| 7,409 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,410 | `gdpNowQ` | `var gdpNowQ =` |
| 7,411 | `gdpMeter` | `var gdpMeter =` |
| 7,414 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,436 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,500 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,563 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,571 | `velocityVerdict` | `function velocityVerdict(` |
| 7,579 | `derivePulseTag` | `function derivePulseTag(` |
| 7,585 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,645_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,654 | `seasonReading` | `var seasonReading =` |
| 7,703 | `frameworkRows` | `var frameworkRows =` |
| 7,713 | `vixRow` | `var vixRow =` |
| 7,721 | `vixWordOf` | `var vixWordOf =` |
| 7,725 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,740_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,744 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,753_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,754 | `calendarTodayY` | `var calendarTodayY =` |
| 7,785 | `vix3mClose` | `var vix3mClose =` |
| 7,786 | `fearCurve` | `function fearCurve(` |
| 7,793 | `curveVerdict` | `function curveVerdict(` |
| 7,800 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,805 | `valuationVerdict` | `function valuationVerdict(` |
| 7,823 | `sparkHtml` | `function sparkHtml(` |
| 7,842 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,848_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,861 | `modeBar` | `function modeBar(` |
| 7,876 | `pickerOpen` | `var pickerOpen =` |
| 7,880 | `cycleByName` | `function cycleByName(` |
| 7,884 | `openCycle` | `function openCycle(` |
| 7,890 | `cycleSlice` | `function cycleSlice(` |
| 7,899 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,907 | `cycleMonths` | `function cycleMonths(` |
| 7,926 | `histControls` | `function histControls(` |
| 7,940 | `cycLabel` | `function cycLabel(` |
| 7,956 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,965 | `cyclePicker` | `function cyclePicker(` |
| 7,984 | `rangeBar` | `function rangeBar(` |
| 7,996 | `trendOf` | `function trendOf(` |
| 8,041 | `TREND_ARROW` | `var TREND_ARROW =` |
| 8,051 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 8,072_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,073 | `yearOf` | `function yearOf(` |
| 8,074 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 8,075_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,113 | `headSigma` | `function headSigma(` |
| 8,121 | `atQuarter` | `function atQuarter(` |
| 8,122 | `atMonth` | `function atMonth(` |
| 8,123 | `cycleAverages` | `function cycleAverages(` |
| 8,130 | `ordinal` | `function ordinal(` |
| 8,131 | `hiCard` | `function hiCard(` |
| 8,142 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,156_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,163 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,179 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,186 | `moreRow` | `function moreRow(` |
| 8,192 | `powerPageNote` | `var powerPageNote =` |
| 8,193 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,205_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,208 | `xLabelOf` | `function xLabelOf(` |
| 8,228 | `fitGroup` | `function fitGroup(` |
| 8,250 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,309_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,333 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,343 | `vGrid` | `function vGrid(` |
| 8,368 | `COL_FILL` | `var COL_FILL =` |
| 8,401 | `colPath` | `function colPath(` |
| 8,406 | `colWidth` | `function colWidth(` |
| 8,453 | `AXIS` | `var AXIS =` |
| 8,469 | `histFrame` | `function histFrame(` |
| 8,481 | `xLabel` | `function xLabel(` |
| 8,485 | `crossLine` | `function crossLine(` |
| 8,490 | `zeroRule` | `function zeroRule(` |
| 8,493 | `meanRule` | `function meanRule(` |
| 8,505 | `pendingGeom` | `var pendingGeom =` |
| 8,506 | `publishGeom` | `function publishGeom(` |
| 8,507 | `attachHistory` | `function attachHistory(` |
| 8,522 | `histBar` | `function histBar(` |
| 8,525 | `histTip` | `function histTip(` |
| 8,528 | `avgRule` | `function avgRule(` |
| 8,531 | `vhOpen` | `function vhOpen(` |
| 8,532 | `chartAxes` | `function chartAxes(` |
| 8,592 | `divergeChart` | `function divergeChart(` |
| 8,660 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,689_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,697 | `maxIn` | `function maxIn(` |
| 8,715 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,729 | `PEEK_W` | `var PEEK_W =` |
| 8,732 | `PEEK_H` | `var PEEK_H =` |
| 8,737 | `colPeek` | `function colPeek(` |
| 8,764 | `meterPeek` | `function meterPeek(` |
| 8,781 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,786 | `pressureZone` | `function pressureZone(` |
| 8,801 | `HZN_BACK` | `var HZN_BACK =` |
| 8,802 | `hznLast` | `function hznLast(` |
| 8,803 | `hznBack` | `function hznBack(` |
| 8,804 | `horizonWord` | `function horizonWord(` |
| 8,829 | `HZN_METERS` | `var HZN_METERS =` |
| 8,837 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,878 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,883 | `RISK_RISK` | `var RISK_RISK =` |
| 8,888 | `riskCell` | `function riskCell(` |
| 8,889 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,920 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,945_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,966 | `pulseClipN` | `var pulseClipN =` |
| 8,967 | `beatPath` | `function beatPath(` |
| 8,992 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 9,006 | `pulsePeek` | `function pulsePeek(` |
| 9,014 | `pulseBlock` | `function pulseBlock(` |
| 9,034 | `CHEV` | `var CHEV =` |
| 9,036 | `peekCard` | `function peekCard(` |
| 9,090 | `dropSvg` | `function dropSvg(` |
| 9,102 | `volumeSvg` | `function volumeSvg(` |
| 9,109 | `gaugeSvg` | `function gaugeSvg(` |
| 9,113 | `diamondSvg` | `function diamondSvg(` |
| 9,127 | `energyFromReserve` | `function energyFromReserve(` |
| 9,139 | `sproutSvg` | `function sproutSvg(` |
| 9,150 | `markSvg` | `function markSvg(` |
| 9,159 | `pressureSvg` | `function pressureSvg(` |
| 9,163 | `hormoneSvg` | `function hormoneSvg(` |
| 9,169 | `flameSvg` | `function flameSvg(` |
| 9,173 | `gearSvg` | `function gearSvg(` |
| 9,185 | `thermoSvg` | `function thermoSvg(` |
| 9,204 | `trendUpSvg` | `function trendUpSvg(` |
| 9,206 | `ecgSvg` | `function ecgSvg(` |
| 9,220 | `circulationSvg` | `function circulationSvg(` |
| 9,221 | `weatherSvg` | `function weatherSvg(` |
| 9,242 | `moodSvg` | `function moodSvg(` |
| 9,266 | `boltSvg` | `function boltSvg(` |
| 9,269 | `houseSvg` | `function houseSvg(` |
| 9,277 | `sunriseSvg` | `function sunriseSvg(` |
| 9,292 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,303 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,320_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,341 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,342 | `dsrHistory` | `var dsrHistory =` |
| 9,343 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,344 | `savHistory` | `var savHistory =` |
| 9,349 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,359 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,360 | `dsrNow` | `var dsrNow =` |
| 9,361 | `savNow` | `var savNow =` |
| 9,362 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,367 | `householdsWord` | `function householdsWord(` |
| 9,374 | `householdsNow` | `var householdsNow =` |
| 9,381 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,382 | `dsrMeter` | `var dsrMeter =` |
| 9,385 | `savMeter` | `var savMeter =` |
| 9,388 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,405 | `savInfoHtml` | `function savInfoHtml(` |
| 9,423 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,432 | `curveNow` | `var curveNow =` |
| 9,433 | `curveTag` | `var curveTag =` |
| 9,434 | `curveSub` | `var curveSub =` |
| 9,438 | `curvePct` | `function curvePct(` |
| 9,439 | `curveNoteFull` | `var curveNoteFull =` |
| 9,454 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,462 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,503 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,531_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,545 | `marketTops` | `var marketTops =` |
| 9,555 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,560 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,562_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,583 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,584 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,589_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,610 | `slopeOf` | `function slopeOf(` |
| 9,621 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,627 | `readSeason` | `function readSeason(` |
| 9,652 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,654 | `qLabel` | `function qLabel(` |
| 9,678 | `regimeTrack` | `function regimeTrack(` |
| 9,701 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,703_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,710 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,711 | `seasonTitle` | `function seasonTitle(` |
| 9,712 | `monthLabel` | `function monthLabel(` |
| 9,713 | `cycleModel` | `function cycleModel(` |
| 9,765 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,773 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,780 | `nowModel` | `var nowModel =` |
| 9,781 | `readingNow` | `var readingNow =` |
| 9,782 | `cpiNow` | `var cpiNow =` |
| 9,783 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,784 | `currentSeason` | `var currentSeason =` |
| 9,785 | `seasonWhy` | `var seasonWhy =` |
| 9,802 | `seasonGroup` | `function seasonGroup(` |
| 9,816 | `arcGauge` | `function arcGauge(` |
| 9,858 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,871 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,878 | `tsyView` | `var tsyView =` |
| 9,880 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,882 | `spreadLabel` | `function spreadLabel(` |
| 9,889 | `policyFacts` | `function policyFacts(` |
| 9,903 | `policyFactRows` | `function policyFactRows(` |
| 9,909 | `allSources` | `var allSources =` |
| 9,933 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,966_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,969 | `SVG_NS` | `var SVG_NS =` |
| 9,970 | `svgEl` | `function svgEl(` |
| 9,983 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 10,019_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,020 | `clampPct` | `function clampPct(` |
| 10,027 | `infoIcon` | `function infoIcon(` |
| 10,036 | `detailTexts` | `var detailTexts =` |
| 10,054 | `detailSlots` | `var detailSlots =` |
| 10,055 | `detailSlot` | `function detailSlot(` |
| 10,066 | `powerPanelHtml` | `var powerPanelHtml =` |
| 10,070 | `_growthPanel` | `var _growthPanel =` |
| 10,071 | `growthPanelHtml` | `function growthPanelHtml(` |
| 10,077 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 10,088 | `facts` | `function facts(` |
| 10,089 | `factsFrom` | `function factsFrom(` |
| 10,093 | `expandBtn` | `function expandBtn(` |
| 10,099 | `sheetRenderers` | `var sheetRenderers =` |
| 10,116 | `pageMode` | `var pageMode =` |
| 10,123 | `pageCycles` | `var pageCycles =` |
| 10,128 | `pageRange` | `var pageRange =` |
| 10,134 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,168_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,179 | `meterHtml` | `function meterHtml(` |
| 10,210 | `srcBlock` | `function srcBlock(` |
| 10,211 | `srcHtml` | `function srcHtml(` |
| 10,220 | `TIMING` | `var TIMING =` |
| 10,226 | `timingMark` | `function timingMark(` |
| 10,240 | `timingPill` | `function timingPill(` |
| 10,261 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,269 | `seatPageFoot` | `function seatPageFoot(` |
| 10,292 | `timingMembers` | `var timingMembers =` |
| 10,293 | `registerTiming` | `function registerTiming(` |
| 10,299 | `headHtml` | `function headHtml(` |
| 10,317 | `heldHighlights` | `var heldHighlights =` |
| 10,318 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,376_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,377 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,798_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,799 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 11,021_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,022 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 11,054_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,060 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,144_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,145 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,163_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,166 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,189_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,201 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,330_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,339 | `lendingWord` | `function lendingWord(` |
| 11,347 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,405_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,406 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,530_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,533 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,656_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,668 | `totalRiseIn` | `function totalRiseIn(` |
| 11,678 | `eraInflation` | `function eraInflation(` |
| 11,689 | `eraGrowth` | `function eraGrowth(` |
| 11,709 | `fmtSigned` | `function fmtSigned(` |
| 11,714 | `regimeArrow` | `function regimeArrow(` |
| 11,720 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,721 | `growthShown` | `function growthShown(` |
| 11,722 | `growthShownCap` | `function growthShownCap(` |
| 11,723 | `regimeState` | `function regimeState(` |
| 11,727 | `phaseClass` | `function phaseClass(` |
| 11,729 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,741 | `cycleViewEl` | `var cycleViewEl =` |
| 11,747 | `tempCard` | `var tempCard =` |
| 11,748 | `placeCharts` | `function placeCharts(` |
| 11,753 | `shownEra` | `var shownEra =` |
| 11,754 | `calendarReset` | `var calendarReset =` |
| 11,755 | `metricPageReset` | `var metricPageReset =` |
| 11,756 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,759 | `topbarBack` | `var topbarBack =` |
| 11,760 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,767_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,768 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,929_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,930 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,948_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,951 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,972_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,978 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,981 | `hubSet` | `function hubSet(` |
| 11,994 | `quarterPopup` | `function quarterPopup(` |
| 12,027 | `hubShowDefault` | `function hubShowDefault(` |
| 12,036 | `hubShowQuarter` | `function hubShowQuarter(` |
| 12,042 | `hubShowYear` | `function hubShowYear(` |
| 12,057 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,149_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,152 | `tempState` | `var tempState =` |
| 12,155 | `chartLink` | `var chartLink =` |
| 12,175 | `m2Step` | `function m2Step(` |
| 12,178 | `heatStep` | `function heatStep(` |
| 12,182 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,369_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,372 | `drawGrowth` | `function drawGrowth(` |
| 12,511 | `wireResize` | `function wireResize(` |
| 12,517 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,529_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,530 | `renderCycleView` | `function renderCycleView(` |
| 12,591 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,599_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,610 | `peerChosen` | `function peerChosen(` |
| 12,611 | `peerReaches` | `function peerReaches(` |
| 12,641 | `shownEraModel` | `var shownEraModel =` |
| 12,642 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,644_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,646 | `stripGroupName` | `var stripGroupName =` |
| 12,647 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,693 | `marketStripHtml` | `function marketStripHtml(` |
| 12,756 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,757 | `settleStrips` | `function settleStrips(` |
| 12,792 | `renderSignsList` | `function renderSignsList(` |
| 13,077 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 14,353_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,354 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,454_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,466 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,509_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,517 | `__roster` | `var __roster =` |
| 14,518 | `readingRoster` | `function readingRoster(` |
| 14,573 | `readFig` | `function readFig(` |
| 14,581 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612)

_line 14,588_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,616 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,669_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,670 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,730_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,731 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,764_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,765 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,182–4,185 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,810–8,823 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,661–9,674 | `seasonTrackAll` | The season, computed |
| 9,696–9,700 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,805 |
| `desire-range` | 10,688 |
| `fear-range` | 11,495 |
| `hormones-range` | 11,235 |
| `hzn-range` | 10,791 |
| `hzn-spread` | 10,785 |
| `pressure-range` | 11,373 |
| `pulse-range` | 10,644 |
| `sheet-marker-deficit` | 13,802 |
| `sheet-metric-gdp` | 13,694 |
| `sheet-metric-households` | 13,832 |
| `sheet-metric-power` | 13,766 |
| `sheet-metric-temp` | 13,649 |
| `sheet-metric-valuation` | 13,876 |
| `sheet-sign-activity` | 13,750 |
| `sheet-sign-desire` | 10,689 |
| `sheet-sign-horizon` | 10,792 |
| `sheet-sign-hormones` | 11,238 |
| `sheet-sign-pressure` | 11,374 |
| `sheet-sign-pulse` | 10,643 |
| `sheet-sign-sentiment` | 11,500 |
| `sheet-sign-volume` | 10,664 |
| `volume-range` | 10,665 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,811 |
| `desire-range` | 10,673 |
| `fear-range` | 11,452 |
| `hzn-range` | 10,717 |
| `pulse-range` | 10,627 |
| `sheet-metric-gdp` | 13,695 |
| `sheet-metric-power` | 13,767 |
| `sheet-metric-temp` | 13,650 |
| `sheet-metric-valuation` | 13,877 |
| `volume-range` | 10,648 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,432 |
| `sheet-metric-gdp` | 6,433 |
| `sheet-sign-activity` | 6,440 |
| `sheet-metric-power` | 6,441 |
| `sheet-metric-valuation` | 6,443 |
| `sheet-metric-households` | 6,444 |
| `deficit-range` | 6,445 |
| `volume-range` | 6,446 |
| `pulse-range` | 6,447 |
| `hzn-range` | 6,453 |
| `desire-range` | 6,454 |
| `fear-range` | 6,455 |
| `hormones-range` | 6,456 |
| `pressure-range` | 6,457 |

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

