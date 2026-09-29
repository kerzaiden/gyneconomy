# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,845 lines**, about 1231 KB, roughly **350 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `bc52ff0` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,143 | the whole stylesheet, every token and rule |
| **Markup** | 3,144–3,920 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,921–14,792 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,793–14,845 | </body></html> |

Counts: **266** top-level functions, **180** top-level vars, **4** top-level IIFEs in the script.

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
| 4,505 | `refreshLiveData` | `function refreshLiveData(` |
| 4,546 | `fetchSiteData` | `function fetchSiteData(` |
| 4,576 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,590_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,591 | `yieldCurve` | `var yieldCurve =` |
| 4,604 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,628 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,640 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,668_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,673 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,697 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,721 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,745 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,772 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,797_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,806 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,816 | `uninvLagToday` | `var uninvLagToday =` |
| 4,828 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,841 | `gdpPeers` | `var gdpPeers =` |
| 4,882 | `gdpSrc` | `var gdpSrc =` |
| 4,883 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,888 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,901 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,939_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,961 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,971_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,987 | `stressScoreFor` | `function stressScoreFor(` |
| 4,993 | `stressScore` | `var stressScore =` |
| 4,999 | `powerOf` | `var powerOf =` |
| 5,000 | `powerScore` | `var powerScore =` |
| 5,017 | `stressHistory` | `var stressHistory =` |
| 5,028 | `powerMeter` | `var powerMeter =` |
| 5,030 | `stressNoteFull` | `var stressNoteFull =` |
| 5,062 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 5,064_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,087 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 5,088 | `deficitHistory` | `var deficitHistory =` |
| 5,091 | `DEF_MEAN` | `var DEF_MEAN =` |
| 5,098 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 5,100 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,148 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,149 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,150 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,167_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,180 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,193_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,207 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,210 | `timelineSpan` | `function timelineSpan(` |
| 5,216 | `timelineFor` | `function timelineFor(` |
| 5,229 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,235_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,241 | `windowScale` | `function windowScale(` |
| 5,257 | `windowYears` | `function windowYears(` |
| 5,275 | `refName` | `function refName(` |
| 5,282 | `histReadEnsure` | `function histReadEnsure(` |
| 5,321 | `seatBandReading` | `function seatBandReading(` |
| 5,344 | `histReadFill` | `function histReadFill(` |
| 5,472 | `histAxisEnds` | `function histAxisEnds(` |
| 5,483 | `histLegend` | `function histLegend(` |
| 5,571 | `refitHistory` | `function refitHistory(` |
| 5,583 | `wireHistHover` | `function wireHistHover(` |
| 5,663 | `mWindowFrom` | `function mWindowFrom(` |
| 5,668 | `qWindowFrom` | `function qWindowFrom(` |
| 5,673 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,674 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,676 | `DEF_1983` | `var DEF_1983 =` |
| 5,678 | `defFrom` | `function defFrom(` |
| 5,689 | `deficitChart` | `function deficitChart(` |
| 5,778 | `deficitBlock` | `function deficitBlock(` |
| 5,840 | `buffettHistory` | `var buffettHistory =` |
| 5,870 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,871 | `hyDates` | `var hyDates =` |
| 5,872 | `hyOas` | `var hyOas =` |
| 5,873 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,880 | `hyAt` | `function hyAt(` |
| 5,884 | `hyLabel` | `function hyLabel(` |
| 5,885 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,886 | `hyNum` | `function hyNum(` |
| 5,887 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,897 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,907 | `capeHistory` | `var capeHistory =` |
| 5,909 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,927_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,933 | `sentiment` | `var sentiment =` |
| 5,951 | `valuation` | `var valuation =` |
| 5,988 | `valRow` | `function valRow(` |
| 5,996 | `coincident` | `var coincident =` |
| 6,057 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,075 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,076 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,077 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,079_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,092 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,093 | `m2vHistory` | `var m2vHistory =` |
| 6,113 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,205 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,294 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,295 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,335_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,341 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,342 | `DOTS` | `var DOTS =` |
| 6,349 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,383 | `histHead` | `function histHead(` |
| 6,407 | `headNoteIdx` | `var headNoteIdx =` |
| 6,408 | `headMenuHtml` | `function headMenuHtml(` |
| 6,466 | `headMenuFor` | `var headMenuFor =` |
| 6,468 | `headSubFor` | `var headSubFor =` |
| 6,469 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,518 | `nameWithMark` | `function nameWithMark(` |
| 6,524 | `panelRow` | `function panelRow(` |
| 6,557 | `panelFromMeter` | `function panelFromMeter(` |
| 6,571 | `meterFlagged` | `function meterFlagged(` |
| 6,582 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,610 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,624 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,643 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,662 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,676 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,701 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,732 | `desireBlock` | `function desireBlock(` |
| 6,759 | `volumeBlock` | `function volumeBlock(` |
| 6,784 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,807 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,815_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,828 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,829 | `m2Level` | `var m2Level =` |
| 6,851 | `m2Yoy` | `var m2Yoy =` |
| 6,852 | `M2_NORM` | `var M2_NORM =` |
| 6,857 | `volumeVerdict` | `function volumeVerdict(` |
| 6,894 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,895 | `unempHistory` | `var unempHistory =` |
| 6,901 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,916 | `NROU_NOW` | `var NROU_NOW =` |
| 6,917 | `unempState` | `function unempState(` |
| 6,923 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,985_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,994 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 7,003_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,016 | `checkLendingStandards` | `function checkLendingStandards(` |
| 7,029 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,083 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,150 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,151 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,154 | `qAtIndex` | `function qAtIndex(` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,162_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,177 | `householdsChart` | `function householdsChart(` |
| 7,244 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,327 | `GDP_NORM` | `var GDP_NORM =` |
| 7,333 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,334 | `gdpNowQ` | `var gdpNowQ =` |
| 7,335 | `gdpMeter` | `var gdpMeter =` |
| 7,338 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,360 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,424 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,487 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,495 | `velocityVerdict` | `function velocityVerdict(` |
| 7,503 | `derivePulseTag` | `function derivePulseTag(` |
| 7,509 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,569_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,578 | `seasonReading` | `var seasonReading =` |
| 7,627 | `frameworkRows` | `var frameworkRows =` |
| 7,637 | `vixRow` | `var vixRow =` |
| 7,645 | `vixWordOf` | `var vixWordOf =` |
| 7,649 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,664_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,668 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,677_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,678 | `calendarTodayY` | `var calendarTodayY =` |
| 7,709 | `vix3mClose` | `var vix3mClose =` |
| 7,710 | `fearCurve` | `function fearCurve(` |
| 7,717 | `curveVerdict` | `function curveVerdict(` |
| 7,724 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,729 | `valuationVerdict` | `function valuationVerdict(` |
| 7,747 | `sparkHtml` | `function sparkHtml(` |
| 7,766 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,772_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,785 | `modeBar` | `function modeBar(` |
| 7,800 | `pickerOpen` | `var pickerOpen =` |
| 7,804 | `cycleByName` | `function cycleByName(` |
| 7,808 | `openCycle` | `function openCycle(` |
| 7,814 | `cycleSlice` | `function cycleSlice(` |
| 7,823 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,831 | `cycleMonths` | `function cycleMonths(` |
| 7,850 | `histControls` | `function histControls(` |
| 7,864 | `cycLabel` | `function cycLabel(` |
| 7,880 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,889 | `cyclePicker` | `function cyclePicker(` |
| 7,908 | `rangeBar` | `function rangeBar(` |
| 7,920 | `trendOf` | `function trendOf(` |
| 7,965 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,975 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,996_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,997 | `yearOf` | `function yearOf(` |
| 7,998 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,999_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,037 | `headSigma` | `function headSigma(` |
| 8,045 | `atQuarter` | `function atQuarter(` |
| 8,046 | `atMonth` | `function atMonth(` |
| 8,047 | `cycleAverages` | `function cycleAverages(` |
| 8,054 | `ordinal` | `function ordinal(` |
| 8,055 | `hiCard` | `function hiCard(` |
| 8,066 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,080_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,087 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,103 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,110 | `moreRow` | `function moreRow(` |
| 8,116 | `powerPageNote` | `var powerPageNote =` |
| 8,117 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,129_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,132 | `xLabelOf` | `function xLabelOf(` |
| 8,152 | `fitGroup` | `function fitGroup(` |
| 8,174 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,233_ · 18 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,257 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,267 | `vGrid` | `function vGrid(` |
| 8,292 | `COL_FILL` | `var COL_FILL =` |
| 8,325 | `colPath` | `function colPath(` |
| 8,330 | `colWidth` | `function colWidth(` |
| 8,377 | `AXIS` | `var AXIS =` |
| 8,393 | `histFrame` | `function histFrame(` |
| 8,405 | `xLabel` | `function xLabel(` |
| 8,409 | `crossLine` | `function crossLine(` |
| 8,414 | `zeroRule` | `function zeroRule(` |
| 8,417 | `meanRule` | `function meanRule(` |
| 8,429 | `pendingGeom` | `var pendingGeom =` |
| 8,430 | `publishGeom` | `function publishGeom(` |
| 8,431 | `attachHistory` | `function attachHistory(` |
| 8,440 | `vhOpen` | `function vhOpen(` |
| 8,441 | `chartAxes` | `function chartAxes(` |
| 8,501 | `divergeChart` | `function divergeChart(` |
| 8,569 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,598_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,606 | `maxIn` | `function maxIn(` |
| 8,624 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,638 | `PEEK_W` | `var PEEK_W =` |
| 8,641 | `PEEK_H` | `var PEEK_H =` |
| 8,646 | `colPeek` | `function colPeek(` |
| 8,673 | `meterPeek` | `function meterPeek(` |
| 8,690 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,695 | `pressureZone` | `function pressureZone(` |
| 8,710 | `HZN_BACK` | `var HZN_BACK =` |
| 8,711 | `hznLast` | `function hznLast(` |
| 8,712 | `hznBack` | `function hznBack(` |
| 8,713 | `horizonWord` | `function horizonWord(` |
| 8,738 | `HZN_METERS` | `var HZN_METERS =` |
| 8,746 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,787 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,792 | `RISK_RISK` | `var RISK_RISK =` |
| 8,797 | `riskCell` | `function riskCell(` |
| 8,798 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,829 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,854_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,875 | `pulseClipN` | `var pulseClipN =` |
| 8,876 | `beatPath` | `function beatPath(` |
| 8,901 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,915 | `pulsePeek` | `function pulsePeek(` |
| 8,923 | `pulseBlock` | `function pulseBlock(` |
| 8,943 | `CHEV` | `var CHEV =` |
| 8,945 | `peekCard` | `function peekCard(` |
| 8,999 | `dropSvg` | `function dropSvg(` |
| 9,011 | `volumeSvg` | `function volumeSvg(` |
| 9,018 | `gaugeSvg` | `function gaugeSvg(` |
| 9,022 | `diamondSvg` | `function diamondSvg(` |
| 9,036 | `energyFromReserve` | `function energyFromReserve(` |
| 9,048 | `sproutSvg` | `function sproutSvg(` |
| 9,059 | `markSvg` | `function markSvg(` |
| 9,068 | `pressureSvg` | `function pressureSvg(` |
| 9,072 | `hormoneSvg` | `function hormoneSvg(` |
| 9,078 | `flameSvg` | `function flameSvg(` |
| 9,082 | `gearSvg` | `function gearSvg(` |
| 9,094 | `thermoSvg` | `function thermoSvg(` |
| 9,113 | `trendUpSvg` | `function trendUpSvg(` |
| 9,115 | `ecgSvg` | `function ecgSvg(` |
| 9,129 | `circulationSvg` | `function circulationSvg(` |
| 9,130 | `weatherSvg` | `function weatherSvg(` |
| 9,151 | `moodSvg` | `function moodSvg(` |
| 9,175 | `boltSvg` | `function boltSvg(` |
| 9,178 | `houseSvg` | `function houseSvg(` |
| 9,186 | `sunriseSvg` | `function sunriseSvg(` |
| 9,201 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,212 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,229_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,250 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,251 | `dsrHistory` | `var dsrHistory =` |
| 9,252 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,253 | `savHistory` | `var savHistory =` |
| 9,258 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,268 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,269 | `dsrNow` | `var dsrNow =` |
| 9,270 | `savNow` | `var savNow =` |
| 9,271 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,276 | `householdsWord` | `function householdsWord(` |
| 9,283 | `householdsNow` | `var householdsNow =` |
| 9,290 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,291 | `dsrMeter` | `var dsrMeter =` |
| 9,294 | `savMeter` | `var savMeter =` |
| 9,297 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,314 | `savInfoHtml` | `function savInfoHtml(` |
| 9,332 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,341 | `curveNow` | `var curveNow =` |
| 9,342 | `curveTag` | `var curveTag =` |
| 9,343 | `curveSub` | `var curveSub =` |
| 9,347 | `curvePct` | `function curvePct(` |
| 9,348 | `curveNoteFull` | `var curveNoteFull =` |
| 9,363 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,371 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,412 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,440_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,454 | `marketTops` | `var marketTops =` |
| 9,464 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,469 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,471_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,492 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,493 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,498_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,519 | `slopeOf` | `function slopeOf(` |
| 9,530 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,536 | `readSeason` | `function readSeason(` |
| 9,561 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,563 | `qLabel` | `function qLabel(` |
| 9,587 | `regimeTrack` | `function regimeTrack(` |
| 9,610 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,612_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,619 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,620 | `seasonTitle` | `function seasonTitle(` |
| 9,621 | `monthLabel` | `function monthLabel(` |
| 9,622 | `cycleModel` | `function cycleModel(` |
| 9,674 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,682 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,689 | `nowModel` | `var nowModel =` |
| 9,690 | `readingNow` | `var readingNow =` |
| 9,691 | `cpiNow` | `var cpiNow =` |
| 9,692 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,693 | `currentSeason` | `var currentSeason =` |
| 9,694 | `seasonWhy` | `var seasonWhy =` |
| 9,711 | `seasonGroup` | `function seasonGroup(` |
| 9,725 | `arcGauge` | `function arcGauge(` |
| 9,767 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,780 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,787 | `tsyView` | `var tsyView =` |
| 9,789 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,791 | `spreadLabel` | `function spreadLabel(` |
| 9,798 | `policyFacts` | `function policyFacts(` |
| 9,812 | `policyFactRows` | `function policyFactRows(` |
| 9,818 | `allSources` | `var allSources =` |
| 9,842 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,875_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,878 | `SVG_NS` | `var SVG_NS =` |
| 9,879 | `svgEl` | `function svgEl(` |
| 9,892 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,928_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,929 | `clampPct` | `function clampPct(` |
| 9,936 | `infoIcon` | `function infoIcon(` |
| 9,945 | `detailTexts` | `var detailTexts =` |
| 9,963 | `detailSlots` | `var detailSlots =` |
| 9,964 | `detailSlot` | `function detailSlot(` |
| 9,975 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,979 | `_growthPanel` | `var _growthPanel =` |
| 9,980 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,986 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,997 | `facts` | `function facts(` |
| 9,998 | `factsFrom` | `function factsFrom(` |
| 10,002 | `expandBtn` | `function expandBtn(` |
| 10,008 | `sheetRenderers` | `var sheetRenderers =` |
| 10,025 | `pageMode` | `var pageMode =` |
| 10,032 | `pageCycles` | `var pageCycles =` |
| 10,037 | `pageRange` | `var pageRange =` |
| 10,043 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,077_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,088 | `meterHtml` | `function meterHtml(` |
| 10,119 | `srcBlock` | `function srcBlock(` |
| 10,120 | `srcHtml` | `function srcHtml(` |
| 10,129 | `TIMING` | `var TIMING =` |
| 10,135 | `timingMark` | `function timingMark(` |
| 10,149 | `timingPill` | `function timingPill(` |
| 10,170 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,178 | `seatPageFoot` | `function seatPageFoot(` |
| 10,201 | `timingMembers` | `var timingMembers =` |
| 10,202 | `registerTiming` | `function registerTiming(` |
| 10,208 | `headHtml` | `function headHtml(` |
| 10,226 | `heldHighlights` | `var heldHighlights =` |
| 10,227 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,285_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,286 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,713_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,714 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,936_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,937 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,969_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,975 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,059_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,060 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,078_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,081 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,104_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,116 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,247_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,256 | `lendingWord` | `function lendingWord(` |
| 11,264 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,324_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,325 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,449_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,452 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,577_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,589 | `totalRiseIn` | `function totalRiseIn(` |
| 11,599 | `eraInflation` | `function eraInflation(` |
| 11,610 | `eraGrowth` | `function eraGrowth(` |
| 11,630 | `fmtSigned` | `function fmtSigned(` |
| 11,635 | `regimeArrow` | `function regimeArrow(` |
| 11,641 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,642 | `growthShown` | `function growthShown(` |
| 11,643 | `growthShownCap` | `function growthShownCap(` |
| 11,644 | `regimeState` | `function regimeState(` |
| 11,648 | `phaseClass` | `function phaseClass(` |
| 11,650 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,662 | `cycleViewEl` | `var cycleViewEl =` |
| 11,668 | `tempCard` | `var tempCard =` |
| 11,669 | `placeCharts` | `function placeCharts(` |
| 11,674 | `shownEra` | `var shownEra =` |
| 11,675 | `calendarReset` | `var calendarReset =` |
| 11,676 | `metricPageReset` | `var metricPageReset =` |
| 11,677 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,680 | `topbarBack` | `var topbarBack =` |
| 11,681 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,688_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,689 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,850_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,851 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,869_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,872 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,893_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,899 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,902 | `hubSet` | `function hubSet(` |
| 11,915 | `quarterPopup` | `function quarterPopup(` |
| 11,948 | `hubShowDefault` | `function hubShowDefault(` |
| 11,957 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,963 | `hubShowYear` | `function hubShowYear(` |
| 11,978 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,070_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,073 | `tempState` | `var tempState =` |
| 12,076 | `chartLink` | `var chartLink =` |
| 12,096 | `m2Step` | `function m2Step(` |
| 12,099 | `heatStep` | `function heatStep(` |
| 12,103 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,290_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,293 | `drawGrowth` | `function drawGrowth(` |
| 12,432 | `wireResize` | `function wireResize(` |
| 12,438 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,450_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,451 | `renderCycleView` | `function renderCycleView(` |
| 12,512 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,520_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,531 | `peerChosen` | `function peerChosen(` |
| 12,532 | `peerReaches` | `function peerReaches(` |
| 12,563 | `shownEraModel` | `var shownEraModel =` |
| 12,564 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,566_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,568 | `stripGroupName` | `var stripGroupName =` |
| 12,569 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,615 | `marketStripHtml` | `function marketStripHtml(` |
| 12,678 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,679 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,709_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,710 | `renderCycleList` | `function renderCycleList(` |
| 12,814 | `renderSignsList` | `function renderSignsList(` |
| 13,099 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,371_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,383 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,426_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,434 | `__roster` | `var __roster =` |
| 14,435 | `readingRoster` | `function readingRoster(` |
| 14,490 | `readFig` | `function readFig(` |
| 14,498 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes \u2014 today beside a past top (Version 610, rebuilt in Version 612)

_line 14,505_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,533 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,591_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,592 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,654_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,655 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,688_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,689 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,171–4,174 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,719–8,732 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,570–9,583 | `seasonTrackAll` | The season, computed |
| 9,605–9,609 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,836 |
| `desire-range` | 10,602 |
| `fear-range` | 11,414 |
| `hormones-range` | 11,151 |
| `hzn-range` | 10,706 |
| `hzn-spread` | 10,700 |
| `pressure-range` | 11,291 |
| `pulse-range` | 10,555 |
| `sheet-marker-deficit` | 13,833 |
| `sheet-metric-gdp` | 13,719 |
| `sheet-metric-households` | 13,866 |
| `sheet-metric-power` | 13,796 |
| `sheet-metric-temp` | 13,671 |
| `sheet-metric-valuation` | 13,911 |
| `sheet-sign-activity` | 13,779 |
| `sheet-sign-desire` | 10,603 |
| `sheet-sign-horizon` | 10,707 |
| `sheet-sign-hormones` | 11,154 |
| `sheet-sign-pressure` | 11,292 |
| `sheet-sign-pulse` | 10,554 |
| `sheet-sign-sentiment` | 11,419 |
| `sheet-sign-volume` | 10,577 |
| `volume-range` | 10,578 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,842 |
| `desire-range` | 10,586 |
| `fear-range` | 11,371 |
| `hzn-range` | 10,631 |
| `pulse-range` | 10,536 |
| `sheet-metric-gdp` | 13,720 |
| `sheet-metric-power` | 13,797 |
| `sheet-metric-temp` | 13,672 |
| `sheet-metric-valuation` | 13,912 |
| `volume-range` | 10,559 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,356 |
| `sheet-metric-gdp` | 6,357 |
| `sheet-sign-activity` | 6,364 |
| `sheet-metric-power` | 6,365 |
| `sheet-metric-valuation` | 6,367 |
| `sheet-metric-households` | 6,368 |
| `deficit-range` | 6,369 |
| `volume-range` | 6,370 |
| `pulse-range` | 6,371 |
| `hzn-range` | 6,377 |
| `desire-range` | 6,378 |
| `fear-range` | 6,379 |
| `hormones-range` | 6,380 |
| `pressure-range` | 6,381 |

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

