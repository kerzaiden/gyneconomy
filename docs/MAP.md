# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,297 lines**, about 1196 KB, roughly **340 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `582862e` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,061 | the whole stylesheet, every token and rule |
| **Markup** | 3,062–3,809 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,810–14,244 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,245–14,297 | </body></html> |

Counts: **253** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,815_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,819 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,820 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,821 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,839 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,843 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,848_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,858 | `wheelMeta` | `var wheelMeta =` |
| 3,869 | `seasonOverride` | `var seasonOverride =` |
| 3,872 | `cycleNowNote` | `var cycleNowNote =` |
| 3,881 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,967 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,012 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,025_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,042 | `LIVE` | `function LIVE(` |
| 4,069 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,077 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,078 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,081_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,112 | `repaintFigureText` | `function repaintFigureText(` |
| 4,125 | `repaintRow` | `function repaintRow(` |
| 4,138 | `repaintTag` | `function repaintTag(` |
| 4,148 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,173 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,181 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,189 | `REPAINT` | `var REPAINT =` |
| 4,206 | `liveAsOf` | `var liveAsOf =` |
| 4,207 | `fmtAsOf` | `function fmtAsOf(` |
| 4,212 | `applyLive` | `function applyLive(` |
| 4,291 | `repaintPolicy` | `function repaintPolicy(` |
| 4,347 | `GYN` | `var GYN =` |
| 4,367 | `refreshLiveData` | `function refreshLiveData(` |
| 4,408 | `fetchSiteData` | `function fetchSiteData(` |
| 4,438 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,452_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,453 | `yieldCurve` | `var yieldCurve =` |
| 4,466 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,490 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,502 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,530_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,535 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,559 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,583 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,607 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,634 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,659_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,668 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,678 | `uninvLagToday` | `var uninvLagToday =` |
| 4,690 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,703 | `gdpPeers` | `var gdpPeers =` |
| 4,744 | `gdpSrc` | `var gdpSrc =` |
| 4,745 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,750 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,763 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,801_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,823 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,833_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,849 | `stressScoreFor` | `function stressScoreFor(` |
| 4,855 | `stressScore` | `var stressScore =` |
| 4,861 | `powerOf` | `var powerOf =` |
| 4,862 | `powerScore` | `var powerScore =` |
| 4,879 | `stressHistory` | `var stressHistory =` |
| 4,890 | `powerMeter` | `var powerMeter =` |
| 4,892 | `stressNoteFull` | `var stressNoteFull =` |
| 4,924 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,926_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,949 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,950 | `deficitHistory` | `var deficitHistory =` |
| 4,953 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,960 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,962 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,010 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,011 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,012 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,029_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,042 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,055_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,069 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,072 | `timelineSpan` | `function timelineSpan(` |
| 5,078 | `timelineFor` | `function timelineFor(` |
| 5,091 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,097_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,103 | `windowScale` | `function windowScale(` |
| 5,119 | `windowYears` | `function windowYears(` |
| 5,137 | `refName` | `function refName(` |
| 5,144 | `histReadEnsure` | `function histReadEnsure(` |
| 5,183 | `seatBandReading` | `function seatBandReading(` |
| 5,206 | `histReadFill` | `function histReadFill(` |
| 5,334 | `histAxisEnds` | `function histAxisEnds(` |
| 5,345 | `histLegend` | `function histLegend(` |
| 5,433 | `refitHistory` | `function refitHistory(` |
| 5,445 | `wireHistHover` | `function wireHistHover(` |
| 5,504 | `mWindowFrom` | `function mWindowFrom(` |
| 5,509 | `qWindowFrom` | `function qWindowFrom(` |
| 5,514 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,515 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,517 | `DEF_1983` | `var DEF_1983 =` |
| 5,519 | `defFrom` | `function defFrom(` |
| 5,530 | `deficitChart` | `function deficitChart(` |
| 5,620 | `deficitBlock` | `function deficitBlock(` |
| 5,682 | `buffettHistory` | `var buffettHistory =` |
| 5,712 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,713 | `hyDates` | `var hyDates =` |
| 5,714 | `hyOas` | `var hyOas =` |
| 5,715 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,722 | `hyAt` | `function hyAt(` |
| 5,726 | `hyLabel` | `function hyLabel(` |
| 5,727 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,728 | `hyNum` | `function hyNum(` |
| 5,729 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,739 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,749 | `capeHistory` | `var capeHistory =` |
| 5,751 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,769_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,775 | `sentiment` | `var sentiment =` |
| 5,793 | `valuation` | `var valuation =` |
| 5,830 | `valRow` | `function valRow(` |
| 5,838 | `coincident` | `var coincident =` |
| 5,899 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,917 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,918 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,919 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,921_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,934 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,935 | `m2vHistory` | `var m2vHistory =` |
| 5,955 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,048 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,138 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,139 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,179_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,185 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,186 | `DOTS` | `var DOTS =` |
| 6,188 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,216 | `histHead` | `function histHead(` |
| 6,237 | `headNoteIdx` | `var headNoteIdx =` |
| 6,238 | `headMenuHtml` | `function headMenuHtml(` |
| 6,296 | `headMenuFor` | `var headMenuFor =` |
| 6,298 | `headSubFor` | `var headSubFor =` |
| 6,299 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,344 | `nameWithMark` | `function nameWithMark(` |
| 6,350 | `panelRow` | `function panelRow(` |
| 6,376 | `panelFromMeter` | `function panelFromMeter(` |
| 6,390 | `meterFlagged` | `function meterFlagged(` |
| 6,401 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,429 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,443 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,462 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,481 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,495 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,520 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,551 | `desireBlock` | `function desireBlock(` |
| 6,578 | `volumeBlock` | `function volumeBlock(` |
| 6,603 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,626 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,634_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,647 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,648 | `m2Level` | `var m2Level =` |
| 6,670 | `m2Yoy` | `var m2Yoy =` |
| 6,671 | `M2_NORM` | `var M2_NORM =` |
| 6,676 | `volumeVerdict` | `function volumeVerdict(` |
| 6,713 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,714 | `unempHistory` | `var unempHistory =` |
| 6,720 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,735 | `NROU_NOW` | `var NROU_NOW =` |
| 6,736 | `unempState` | `function unempState(` |
| 6,742 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,806_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,815 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,824_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,837 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,850 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 6,906 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,961 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,962 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,965 | `qAtIndex` | `function qAtIndex(` |
| 6,966 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,974_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,989 | `householdsChart` | `function householdsChart(` |
| 7,057 | `lastChartAvg` | `var lastChartAvg =` |
| 7,058 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,143 | `GDP_NORM` | `var GDP_NORM =` |
| 7,149 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,150 | `gdpNowQ` | `var gdpNowQ =` |
| 7,151 | `gdpMeter` | `var gdpMeter =` |
| 7,154 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,176 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,242 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,306 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,314 | `velocityVerdict` | `function velocityVerdict(` |
| 7,322 | `derivePulseTag` | `function derivePulseTag(` |
| 7,328 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,388_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,397 | `seasonReading` | `var seasonReading =` |
| 7,446 | `frameworkRows` | `var frameworkRows =` |
| 7,456 | `vixRow` | `var vixRow =` |
| 7,464 | `vixWordOf` | `var vixWordOf =` |
| 7,468 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,483_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,487 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,496_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,497 | `calendarTodayY` | `var calendarTodayY =` |
| 7,528 | `vix3mClose` | `var vix3mClose =` |
| 7,529 | `fearCurve` | `function fearCurve(` |
| 7,536 | `curveVerdict` | `function curveVerdict(` |
| 7,543 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,548 | `valuationVerdict` | `function valuationVerdict(` |
| 7,566 | `sparkHtml` | `function sparkHtml(` |
| 7,585 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,591_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,604 | `modeBar` | `function modeBar(` |
| 7,619 | `pickerOpen` | `var pickerOpen =` |
| 7,623 | `cycleByName` | `function cycleByName(` |
| 7,627 | `openCycle` | `function openCycle(` |
| 7,633 | `cycleSlice` | `function cycleSlice(` |
| 7,642 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,650 | `cycleMonths` | `function cycleMonths(` |
| 7,669 | `histControls` | `function histControls(` |
| 7,683 | `cycLabel` | `function cycLabel(` |
| 7,699 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,708 | `cyclePicker` | `function cyclePicker(` |
| 7,727 | `rangeBar` | `function rangeBar(` |
| 7,739 | `trendOf` | `function trendOf(` |
| 7,784 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,794 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,815_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,816 | `yearOf` | `function yearOf(` |
| 7,817 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,818_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,848 | `totalStat` | `function totalStat(` |
| 7,854 | `atQuarter` | `function atQuarter(` |
| 7,855 | `atMonth` | `function atMonth(` |
| 7,856 | `cycleAverages` | `function cycleAverages(` |
| 7,863 | `ordinal` | `function ordinal(` |
| 7,864 | `hiCard` | `function hiCard(` |
| 7,875 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,889_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,896 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,912 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,919 | `moreRow` | `function moreRow(` |
| 7,925 | `powerPageNote` | `var powerPageNote =` |
| 7,926 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,938_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,941 | `xLabelOf` | `function xLabelOf(` |
| 7,961 | `fitGroup` | `function fitGroup(` |
| 7,983 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,042_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,066 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,076 | `vGrid` | `function vGrid(` |
| 8,101 | `COL_FILL` | `var COL_FILL =` |
| 8,134 | `colPath` | `function colPath(` |
| 8,139 | `colWidth` | `function colWidth(` |
| 8,186 | `AXIS` | `var AXIS =` |
| 8,187 | `chartAxes` | `function chartAxes(` |
| 8,247 | `divergeChart` | `function divergeChart(` |
| 8,315 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,344_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,352 | `maxIn` | `function maxIn(` |
| 8,370 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,384 | `PEEK_W` | `var PEEK_W =` |
| 8,387 | `PEEK_H` | `var PEEK_H =` |
| 8,392 | `colPeek` | `function colPeek(` |
| 8,419 | `meterPeek` | `function meterPeek(` |
| 8,436 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,441 | `pressureZone` | `function pressureZone(` |
| 8,456 | `HZN_BACK` | `var HZN_BACK =` |
| 8,457 | `hznLast` | `function hznLast(` |
| 8,458 | `hznBack` | `function hznBack(` |
| 8,459 | `horizonWord` | `function horizonWord(` |
| 8,484 | `HZN_METERS` | `var HZN_METERS =` |
| 8,492 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,533 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,538 | `RISK_RISK` | `var RISK_RISK =` |
| 8,543 | `riskCell` | `function riskCell(` |
| 8,544 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,575 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,600_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,621 | `pulseClipN` | `var pulseClipN =` |
| 8,622 | `beatPath` | `function beatPath(` |
| 8,647 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,661 | `pulsePeek` | `function pulsePeek(` |
| 8,669 | `pulseBlock` | `function pulseBlock(` |
| 8,689 | `CHEV` | `var CHEV =` |
| 8,691 | `peekCard` | `function peekCard(` |
| 8,745 | `dropSvg` | `function dropSvg(` |
| 8,757 | `volumeSvg` | `function volumeSvg(` |
| 8,764 | `gaugeSvg` | `function gaugeSvg(` |
| 8,768 | `diamondSvg` | `function diamondSvg(` |
| 8,782 | `energyFromReserve` | `function energyFromReserve(` |
| 8,794 | `sproutSvg` | `function sproutSvg(` |
| 8,805 | `markSvg` | `function markSvg(` |
| 8,814 | `pressureSvg` | `function pressureSvg(` |
| 8,818 | `hormoneSvg` | `function hormoneSvg(` |
| 8,824 | `flameSvg` | `function flameSvg(` |
| 8,828 | `gearSvg` | `function gearSvg(` |
| 8,840 | `thermoSvg` | `function thermoSvg(` |
| 8,859 | `trendUpSvg` | `function trendUpSvg(` |
| 8,861 | `ecgSvg` | `function ecgSvg(` |
| 8,875 | `circulationSvg` | `function circulationSvg(` |
| 8,876 | `weatherSvg` | `function weatherSvg(` |
| 8,897 | `moodSvg` | `function moodSvg(` |
| 8,921 | `boltSvg` | `function boltSvg(` |
| 8,924 | `houseSvg` | `function houseSvg(` |
| 8,932 | `sunriseSvg` | `function sunriseSvg(` |
| 8,947 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,958 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,975_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,996 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,997 | `dsrHistory` | `var dsrHistory =` |
| 8,998 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,999 | `savHistory` | `var savHistory =` |
| 9,004 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,014 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,015 | `dsrNow` | `var dsrNow =` |
| 9,016 | `savNow` | `var savNow =` |
| 9,017 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,022 | `householdsWord` | `function householdsWord(` |
| 9,029 | `householdsNow` | `var householdsNow =` |
| 9,036 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,037 | `dsrMeter` | `var dsrMeter =` |
| 9,040 | `savMeter` | `var savMeter =` |
| 9,043 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,060 | `savInfoHtml` | `function savInfoHtml(` |
| 9,078 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,087 | `curveNow` | `var curveNow =` |
| 9,088 | `curveTag` | `var curveTag =` |
| 9,089 | `curveSub` | `var curveSub =` |
| 9,093 | `curvePct` | `function curvePct(` |
| 9,094 | `curveNoteFull` | `var curveNoteFull =` |
| 9,109 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,117 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,158 | `marketCycles` | `var marketCycles =` |
| 9,188 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,190_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,211 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,212 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,217_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,238 | `slopeOf` | `function slopeOf(` |
| 9,249 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,255 | `readSeason` | `function readSeason(` |
| 9,280 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,282 | `qLabel` | `function qLabel(` |
| 9,306 | `regimeTrack` | `function regimeTrack(` |
| 9,329 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,331_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,338 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,339 | `seasonTitle` | `function seasonTitle(` |
| 9,340 | `monthLabel` | `function monthLabel(` |
| 9,341 | `cycleModel` | `function cycleModel(` |
| 9,393 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,401 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,408 | `nowModel` | `var nowModel =` |
| 9,409 | `readingNow` | `var readingNow =` |
| 9,410 | `cpiNow` | `var cpiNow =` |
| 9,411 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,412 | `currentSeason` | `var currentSeason =` |
| 9,413 | `seasonWhy` | `var seasonWhy =` |
| 9,430 | `seasonGroup` | `function seasonGroup(` |
| 9,444 | `arcGauge` | `function arcGauge(` |
| 9,486 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,499 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,506 | `tsyView` | `var tsyView =` |
| 9,508 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,510 | `spreadLabel` | `function spreadLabel(` |
| 9,517 | `policyFacts` | `function policyFacts(` |
| 9,529 | `allSources` | `var allSources =` |
| 9,553 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,586_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,589 | `SVG_NS` | `var SVG_NS =` |
| 9,590 | `svgEl` | `function svgEl(` |
| 9,603 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,639_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,640 | `clampPct` | `function clampPct(` |
| 9,647 | `infoIcon` | `function infoIcon(` |
| 9,656 | `detailTexts` | `var detailTexts =` |
| 9,674 | `detailSlots` | `var detailSlots =` |
| 9,675 | `detailSlot` | `function detailSlot(` |
| 9,686 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,690 | `_growthPanel` | `var _growthPanel =` |
| 9,691 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,697 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,708 | `facts` | `function facts(` |
| 9,709 | `factsFrom` | `function factsFrom(` |
| 9,713 | `expandBtn` | `function expandBtn(` |
| 9,719 | `sheetRenderers` | `var sheetRenderers =` |
| 9,736 | `pageMode` | `var pageMode =` |
| 9,743 | `pageCycles` | `var pageCycles =` |
| 9,748 | `pageRange` | `var pageRange =` |
| 9,754 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,788_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,799 | `meterHtml` | `function meterHtml(` |
| 9,827 | `srcHtml` | `function srcHtml(` |
| 9,836 | `TIMING` | `var TIMING =` |
| 9,842 | `timingMark` | `function timingMark(` |
| 9,856 | `timingPill` | `function timingPill(` |
| 9,877 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,885 | `seatPageFoot` | `function seatPageFoot(` |
| 9,908 | `timingMembers` | `var timingMembers =` |
| 9,909 | `registerTiming` | `function registerTiming(` |
| 9,915 | `headHtml` | `function headHtml(` |
| 9,933 | `heldHighlights` | `var heldHighlights =` |
| 9,934 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,992_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,993 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,426_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,427 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,650_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,651 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,683_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,689 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,773_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,774 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,792_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,795 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,818_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,830 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 10,921_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,930 | `lendingWord` | `function lendingWord(` |
| 10,938 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,998_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,999 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,123_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,126 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,248_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,260 | `totalRiseIn` | `function totalRiseIn(` |
| 11,270 | `eraInflation` | `function eraInflation(` |
| 11,281 | `eraGrowth` | `function eraGrowth(` |
| 11,297 | `fmtSigned` | `function fmtSigned(` |
| 11,302 | `regimeArrow` | `function regimeArrow(` |
| 11,308 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,309 | `growthShown` | `function growthShown(` |
| 11,310 | `growthShownCap` | `function growthShownCap(` |
| 11,311 | `regimeState` | `function regimeState(` |
| 11,315 | `phaseClass` | `function phaseClass(` |
| 11,317 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,329 | `cycleViewEl` | `var cycleViewEl =` |
| 11,333 | `tempCard` | `var tempCard =` |
| 11,334 | `placeCharts` | `function placeCharts(` |
| 11,339 | `shownEra` | `var shownEra =` |
| 11,340 | `calendarReset` | `var calendarReset =` |
| 11,341 | `metricPageReset` | `var metricPageReset =` |
| 11,342 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,345 | `topbarBack` | `var topbarBack =` |
| 11,346 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,353_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,354 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,515_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,516 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,534_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,537 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,558_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,564 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,567 | `hubSet` | `function hubSet(` |
| 11,580 | `quarterPopup` | `function quarterPopup(` |
| 11,613 | `hubShowDefault` | `function hubShowDefault(` |
| 11,622 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,628 | `hubShowYear` | `function hubShowYear(` |
| 11,643 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,735_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,738 | `tempState` | `var tempState =` |
| 11,741 | `chartLink` | `var chartLink =` |
| 11,761 | `m2Step` | `function m2Step(` |
| 11,764 | `heatStep` | `function heatStep(` |
| 11,768 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,955_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,958 | `drawGrowth` | `function drawGrowth(` |
| 12,097 | `wireResize` | `function wireResize(` |
| 12,103 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,115_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,116 | `renderCycleView` | `function renderCycleView(` |
| 12,169 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,180 | `PEER_CARET` | `var PEER_CARET =` |
| 12,181 | `peerList` | `function peerList(` |
| 12,182 | `peerChosen` | `function peerChosen(` |
| 12,183 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,187 | `renderPeerPills` | `function renderPeerPills(` |
| 12,237 | `shownEraModel` | `var shownEraModel =` |
| 12,238 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,240_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,242 | `stripGroupName` | `var stripGroupName =` |
| 12,243 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,289 | `marketStripHtml` | `function marketStripHtml(` |
| 12,352 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,353 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,383_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,384 | `renderCycleList` | `function renderCycleList(` |
| 12,474 | `renderSignsList` | `function renderSignsList(` |
| 12,759 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,043_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,044 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,106_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,107 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,140_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,141 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,038–4,041 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,465–8,478 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,289–9,302 | `seasonTrackAll` | The season, computed |
| 9,324–9,328 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,500 |
| `desire-range` | 10,315 |
| `fear-range` | 11,088 |
| `hormones-range` | 10,865 |
| `hzn-range` | 10,419 |
| `hzn-spread` | 10,413 |
| `pressure-range` | 10,965 |
| `pulse-range` | 10,266 |
| `sheet-marker-deficit` | 13,497 |
| `sheet-metric-gdp` | 13,381 |
| `sheet-metric-households` | 13,531 |
| `sheet-metric-power` | 13,460 |
| `sheet-metric-temp` | 13,331 |
| `sheet-metric-valuation` | 13,576 |
| `sheet-sign-activity` | 13,442 |
| `sheet-sign-desire` | 10,316 |
| `sheet-sign-horizon` | 10,420 |
| `sheet-sign-hormones` | 10,868 |
| `sheet-sign-pressure` | 10,966 |
| `sheet-sign-pulse` | 10,265 |
| `sheet-sign-sentiment` | 11,093 |
| `sheet-sign-volume` | 10,289 |
| `volume-range` | 10,290 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,506 |
| `desire-range` | 10,298 |
| `fear-range` | 11,045 |
| `hzn-range` | 10,344 |
| `pulse-range` | 10,243 |
| `sheet-metric-gdp` | 13,382 |
| `sheet-metric-power` | 13,461 |
| `sheet-metric-temp` | 13,332 |
| `sheet-metric-valuation` | 13,577 |
| `volume-range` | 10,270 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,189 |
| `sheet-metric-gdp` | 6,190 |
| `sheet-sign-activity` | 6,197 |
| `sheet-metric-power` | 6,198 |
| `sheet-metric-valuation` | 6,200 |
| `sheet-metric-households` | 6,201 |
| `deficit-range` | 6,202 |
| `volume-range` | 6,203 |
| `pulse-range` | 6,204 |
| `hzn-range` | 6,210 |
| `desire-range` | 6,211 |
| `fear-range` | 6,212 |
| `hormones-range` | 6,213 |
| `pressure-range` | 6,214 |

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
| 2,456 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,504 | hero: yield curve |
| 2,600 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,679 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,778 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,803 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,818 | long cycle (structural layer) |
| 2,859 | indicator grid |
| 2,902 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,919 | info icon + popover (progressive disclosure for longer notes) |
| 2,940 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,035 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (142), which is what the renderers fill:

| Line | id |
|---|---|
| 3,067 | `topbar-back` |
| 3,070 | `topbar-title` |
| 3,071 | `menu-btn` |
| 3,088 | `main` |
| 3,095 | `cycle-view` |
| 3,103 | `cycle-kicker` |
| 3,109 | `cycle-dial` |
| 3,111 | `season-wheel-hub-date` |
| 3,112 | `season-wheel-hub-theme` |
| 3,113 | `season-wheel-hub-detail` |
| 3,121 | `temp-card` |
| 3,123 | `temp-kicker` |
| 3,124 | `temp-sub` |
| 3,127 | `temp-svg` |
| 3,128 | `temp-tooltip` |
| 3,134 | `temp-stats` |
| 3,141 | `growth-card` |
| 3,144 | `growth-kicker` |
| 3,144 | `growth-phase` |
| 3,144 | `growth-sub` |
| 3,144 | `growth-peers` |
| 3,145 | `growth-svg` |
| 3,145 | `growth-tooltip` |
| 3,150 | `growth-stats` |
| 3,159 | `today-analysis` |
| 3,163 | `peek-row` |
| 3,167 | `sheet-metric-temp` |
| 3,168 | `temp-timing` |
| 3,169 | `temp-chart` |
| 3,171 | `temp-rangebar` |
| 3,173 | `temp-head` |
| 3,174 | `slot-temp` |
| 3,175 | `temp-history` |
| 3,176 | `temp-hist-tooltip` |
| 3,179 | `temp-trend` |
| 3,183 | `temp-highlights` |
| 3,186 | `sheet-metric-gdp` |
| 3,187 | `gdp-timing` |
| 3,188 | `gdp-chart` |
| 3,189 | `gdp-rangebar` |
| 3,191 | `gdp-head` |
| 3,192 | `slot-growth` |
| 3,193 | `gdp-history` |
| 3,194 | `gdp-hist-tooltip` |
| 3,195 | `gdp-yoy` |
| 3,205 | `gdp-trend` |
| 3,207 | `gdp-panel` |
| 3,212 | `subj-ring-gdp` |
| 3,214 | `subj-label-gdp` |
| 3,215 | `subj-value-gdp` |
| 3,216 | `subj-say-gdp` |
| 3,217 | `subj-spark-gdp` |
| 3,222 | `subj-ctx-gdp` |
| 3,225 | `gdp-highlights` |
| 3,233 | `sheet-metric-power` |
| 3,234 | `power-timing` |
| 3,235 | `power-head` |
| 3,236 | `power-chart` |
| 3,240 | `subj-ring-resilience` |
| 3,243 | `subj-value-resilience` |
| 3,244 | `subj-say-resilience` |
| 3,249 | `subj-ctx-resilience` |
| 3,253 | `longcycle-title` |
| 3,255 | `longcycle-tag` |
| 3,269 | `power-highlights` |
| 3,276 | `sheet-marker-deficit` |
| 3,282 | `sheet-metric-households` |
| 3,283 | `households-timing` |
| 3,284 | `households-chart` |
| 3,285 | `households-highlights` |
| 3,289 | `sheet-metric-valuation` |
| 3,290 | `valuation-timing` |
| 3,291 | `valuation-head` |
| 3,292 | `valuation-chart` |
| 3,296 | `subj-ring-valuation` |
| 3,299 | `subj-value-valuation` |
| 3,300 | `subj-say-valuation` |
| 3,305 | `subj-ctx-valuation` |
| 3,309 | `valuation-title` |
| 3,311 | `valuation-tag` |
| 3,318 | `valuation-highlights` |
| 3,342 | `subj-value-hormones` |
| 3,343 | `subj-say-hormones` |
| 3,351 | `hormones-history` |
| 3,361 | `hormones-highlights` |
| 3,387 | `subj-value-horizon` |
| 3,388 | `subj-say-horizon` |
| 3,389 | `subj-spark-horizon` |
| 3,399 | `hzn-timeline` |
| 3,401 | `hzn-head` |
| 3,402 | `spread-history-shell` |
| 3,403 | `spread-history-svg` |
| 3,404 | `spread-history-tooltip` |
| 3,409 | `ylm-shell` |
| 3,410 | `ylm-svg` |
| 3,411 | `ylm-tooltip` |
| 3,414 | `hzn-trend` |
| 3,415 | `ylm-trend` |
| 3,417 | `horizon-insights` |
| 3,445 | `subj-value-pressure` |
| 3,446 | `subj-say-pressure` |
| 3,451 | `pressure-history` |
| 3,452 | `pressure-highlights` |
| 3,458 | `subj-ring-sentiment` |
| 3,461 | `subj-value-sentiment` |
| 3,462 | `subj-say-sentiment` |
| 3,463 | `subj-spark-sentiment` |
| 3,477 | `fear-history` |
| 3,478 | `curve-highlights` |
| 3,492 | `signs-list` |
| 3,503 | `calendar-list` |
| 3,508 | `indicators-peek` |
| 3,554 | `cycle-list` |
| 3,560 | `cycle-more` |
| 3,561 | `cycle-more-label` |
| 3,570 | `calendar-cycle` |
| 3,571 | `calendar-cycle-slot` |
| 3,622 | `seasons-kicker` |
| 3,623 | `seasons-rows` |
| 3,627 | `framework-kicker` |
| 3,629 | `framework-rows` |
| 3,636 | `more-menu` |
| 3,639 | `menu-back` |
| 3,653 | `sources-open` |
| 3,661 | `appearance-current` |
| 3,669 | `sheet-howto` |
| 3,713 | `sheet-book` |
| 3,745 | `sheet-appearance` |
| 3,753 | `theme-toggle` |
| 3,760 | `sheet-contact` |
| 3,769 | `contact-form` |
| 3,770 | `contact-title` |
| 3,771 | `contact-message` |
| 3,773 | `contact-hint` |
| 3,774 | `contact-send` |
| 3,783 | `sheet-sources` |
| 3,786 | `sources-back` |
| 3,793 | `asof-text` |
| 3,794 | `sources-groups` |
| 3,801 | `detail-backdrop` |
| 3,803 | `detail-modal-close` |
| 3,804 | `detail-modal-body` |

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

