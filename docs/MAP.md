# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,984 lines**, about 1167 KB, roughly **332 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `d85211b` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,030 | the whole stylesheet, every token and rule |
| **Markup** | 3,031–3,770 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,771–13,931 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,932–13,984 | </body></html> |

Counts: **248** top-level functions, **178** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,776_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,780 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,781 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,782 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,800 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,804 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,809_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,819 | `wheelMeta` | `var wheelMeta =` |
| 3,830 | `seasonOverride` | `var seasonOverride =` |
| 3,833 | `cycleNowNote` | `var cycleNowNote =` |
| 3,842 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,928 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,973 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,986_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,003 | `LIVE` | `function LIVE(` |
| 4,030 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,038 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,039 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,042_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,073 | `repaintFigureText` | `function repaintFigureText(` |
| 4,081 | `repaintTag` | `function repaintTag(` |
| 4,091 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,116 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,124 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,132 | `REPAINT` | `var REPAINT =` |
| 4,149 | `liveAsOf` | `var liveAsOf =` |
| 4,150 | `fmtAsOf` | `function fmtAsOf(` |
| 4,155 | `applyLive` | `function applyLive(` |
| 4,231 | `repaintPolicy` | `function repaintPolicy(` |
| 4,281 | `GYN` | `var GYN =` |
| 4,301 | `refreshLiveData` | `function refreshLiveData(` |
| 4,342 | `fetchSiteData` | `function fetchSiteData(` |
| 4,372 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,386_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,387 | `yieldCurve` | `var yieldCurve =` |
| 4,400 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,424 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,436 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,464_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,469 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,493 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,517 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,541 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,568 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,593_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,602 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,612 | `uninvLagToday` | `var uninvLagToday =` |
| 4,624 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,637 | `gdpPeers` | `var gdpPeers =` |
| 4,678 | `gdpSrc` | `var gdpSrc =` |
| 4,679 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,684 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,697 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,735_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,757 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,767_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,783 | `stressScoreFor` | `function stressScoreFor(` |
| 4,789 | `stressScore` | `var stressScore =` |
| 4,795 | `powerOf` | `var powerOf =` |
| 4,796 | `powerScore` | `var powerScore =` |
| 4,813 | `stressHistory` | `var stressHistory =` |
| 4,824 | `powerMeter` | `var powerMeter =` |
| 4,826 | `stressNoteFull` | `var stressNoteFull =` |
| 4,858 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,860_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,883 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,884 | `deficitHistory` | `var deficitHistory =` |
| 4,887 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,894 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,896 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 4,939 | `fedFundsHistory` | `var fedFundsHistory =` |
| 4,940 | `fearCurveHistory` | `var fearCurveHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,957_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,970 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,983_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,997 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,000 | `timelineSpan` | `function timelineSpan(` |
| 5,006 | `timelineFor` | `function timelineFor(` |
| 5,019 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,025_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,031 | `windowScale` | `function windowScale(` |
| 5,047 | `windowYears` | `function windowYears(` |
| 5,065 | `refName` | `function refName(` |
| 5,072 | `histReadEnsure` | `function histReadEnsure(` |
| 5,111 | `seatBandReading` | `function seatBandReading(` |
| 5,134 | `histReadFill` | `function histReadFill(` |
| 5,262 | `histAxisEnds` | `function histAxisEnds(` |
| 5,273 | `histLegend` | `function histLegend(` |
| 5,361 | `refitHistory` | `function refitHistory(` |
| 5,373 | `wireHistHover` | `function wireHistHover(` |
| 5,432 | `mWindowFrom` | `function mWindowFrom(` |
| 5,437 | `qWindowFrom` | `function qWindowFrom(` |
| 5,442 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,443 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,445 | `DEF_1983` | `var DEF_1983 =` |
| 5,447 | `defFrom` | `function defFrom(` |
| 5,458 | `deficitChart` | `function deficitChart(` |
| 5,548 | `deficitBlock` | `function deficitBlock(` |
| 5,610 | `buffettHistory` | `var buffettHistory =` |
| 5,640 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,641 | `hyDates` | `var hyDates =` |
| 5,642 | `hyOas` | `var hyOas =` |
| 5,643 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,650 | `hyAt` | `function hyAt(` |
| 5,654 | `hyLabel` | `function hyLabel(` |
| 5,655 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,656 | `hyNum` | `function hyNum(` |
| 5,657 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,667 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,677 | `capeHistory` | `var capeHistory =` |
| 5,679 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,697_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,703 | `sentiment` | `var sentiment =` |
| 5,721 | `valuation` | `var valuation =` |
| 5,758 | `valRow` | `function valRow(` |
| 5,766 | `coincident` | `var coincident =` |
| 5,827 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,845 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,846 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,847 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,849_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,862 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,863 | `m2vHistory` | `var m2vHistory =` |
| 5,883 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,976 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,066 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,067 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,107_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,113 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,114 | `DOTS` | `var DOTS =` |
| 6,116 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,153 | `histHead` | `function histHead(` |
| 6,174 | `headNoteIdx` | `var headNoteIdx =` |
| 6,175 | `headMenuHtml` | `function headMenuHtml(` |
| 6,195 | `headMenuFor` | `var headMenuFor =` |
| 6,196 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,225 | `nameWithMark` | `function nameWithMark(` |
| 6,231 | `panelRow` | `function panelRow(` |
| 6,257 | `panelFromMeter` | `function panelFromMeter(` |
| 6,271 | `meterFlagged` | `function meterFlagged(` |
| 6,282 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,310 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,324 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,343 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,362 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,376 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,401 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,432 | `desireBlock` | `function desireBlock(` |
| 6,459 | `volumeBlock` | `function volumeBlock(` |
| 6,484 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,507 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,515_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,528 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,529 | `m2Level` | `var m2Level =` |
| 6,551 | `m2Yoy` | `var m2Yoy =` |
| 6,552 | `M2_NORM` | `var M2_NORM =` |
| 6,557 | `volumeVerdict` | `function volumeVerdict(` |
| 6,594 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,595 | `unempHistory` | `var unempHistory =` |
| 6,601 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,616 | `NROU_NOW` | `var NROU_NOW =` |
| 6,617 | `unempState` | `function unempState(` |
| 6,623 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,687_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,696 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 6,704 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,759 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,760 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,763 | `qAtIndex` | `function qAtIndex(` |
| 6,764 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,772_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,787 | `householdsChart` | `function householdsChart(` |
| 6,855 | `lastChartAvg` | `var lastChartAvg =` |
| 6,856 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,941 | `GDP_NORM` | `var GDP_NORM =` |
| 6,947 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,948 | `gdpNowQ` | `var gdpNowQ =` |
| 6,949 | `gdpMeter` | `var gdpMeter =` |
| 6,952 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,974 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,040 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,104 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,112 | `velocityVerdict` | `function velocityVerdict(` |
| 7,120 | `derivePulseTag` | `function derivePulseTag(` |
| 7,126 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,186_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,195 | `seasonReading` | `var seasonReading =` |
| 7,244 | `frameworkRows` | `var frameworkRows =` |
| 7,254 | `vixRow` | `var vixRow =` |
| 7,262 | `vixWordOf` | `var vixWordOf =` |
| 7,266 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,281_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,285 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,294_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,295 | `calendarTodayY` | `var calendarTodayY =` |
| 7,326 | `vix3mClose` | `var vix3mClose =` |
| 7,327 | `fearCurve` | `function fearCurve(` |
| 7,334 | `curveVerdict` | `function curveVerdict(` |
| 7,341 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,346 | `valuationVerdict` | `function valuationVerdict(` |
| 7,364 | `sparkHtml` | `function sparkHtml(` |
| 7,383 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,389_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,402 | `modeBar` | `function modeBar(` |
| 7,417 | `pickerOpen` | `var pickerOpen =` |
| 7,421 | `cycleByName` | `function cycleByName(` |
| 7,425 | `openCycle` | `function openCycle(` |
| 7,431 | `cycleSlice` | `function cycleSlice(` |
| 7,440 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,448 | `cycleMonths` | `function cycleMonths(` |
| 7,467 | `histControls` | `function histControls(` |
| 7,481 | `cycLabel` | `function cycLabel(` |
| 7,497 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,506 | `cyclePicker` | `function cyclePicker(` |
| 7,525 | `rangeBar` | `function rangeBar(` |
| 7,537 | `trendOf` | `function trendOf(` |
| 7,582 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,592 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,613_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,614 | `yearOf` | `function yearOf(` |
| 7,615 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,616_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,646 | `totalStat` | `function totalStat(` |
| 7,652 | `atQuarter` | `function atQuarter(` |
| 7,653 | `atMonth` | `function atMonth(` |
| 7,654 | `cycleAverages` | `function cycleAverages(` |
| 7,661 | `ordinal` | `function ordinal(` |
| 7,662 | `hiCard` | `function hiCard(` |
| 7,673 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,687_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,694 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,710 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,717 | `moreRow` | `function moreRow(` |
| 7,723 | `powerPageNote` | `var powerPageNote =` |
| 7,724 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,730_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,733 | `xLabelOf` | `function xLabelOf(` |
| 7,753 | `fitGroup` | `function fitGroup(` |
| 7,775 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,834_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,858 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,868 | `vGrid` | `function vGrid(` |
| 7,893 | `COL_FILL` | `var COL_FILL =` |
| 7,926 | `colPath` | `function colPath(` |
| 7,931 | `colWidth` | `function colWidth(` |
| 7,978 | `AXIS` | `var AXIS =` |
| 7,979 | `chartAxes` | `function chartAxes(` |
| 8,039 | `divergeChart` | `function divergeChart(` |
| 8,107 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,136_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,144 | `maxIn` | `function maxIn(` |
| 8,162 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,176 | `PEEK_W` | `var PEEK_W =` |
| 8,179 | `PEEK_H` | `var PEEK_H =` |
| 8,184 | `colPeek` | `function colPeek(` |
| 8,211 | `meterPeek` | `function meterPeek(` |
| 8,228 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,233 | `pressureZone` | `function pressureZone(` |
| 8,248 | `HZN_BACK` | `var HZN_BACK =` |
| 8,249 | `hznLast` | `function hznLast(` |
| 8,250 | `hznBack` | `function hznBack(` |
| 8,251 | `horizonWord` | `function horizonWord(` |
| 8,276 | `HZN_METERS` | `var HZN_METERS =` |
| 8,284 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,308 | `_hznPanel` | `var _hznPanel =` |
| 8,309 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,329 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,330 | `levelZone` | `function levelZone(` |
| 8,342 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,347 | `RISK_RISK` | `var RISK_RISK =` |
| 8,352 | `riskCell` | `function riskCell(` |
| 8,353 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,384 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,409_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,430 | `pulseClipN` | `var pulseClipN =` |
| 8,431 | `beatPath` | `function beatPath(` |
| 8,456 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,470 | `pulsePeek` | `function pulsePeek(` |
| 8,478 | `pulseBlock` | `function pulseBlock(` |
| 8,498 | `CHEV` | `var CHEV =` |
| 8,500 | `peekCard` | `function peekCard(` |
| 8,554 | `dropSvg` | `function dropSvg(` |
| 8,566 | `volumeSvg` | `function volumeSvg(` |
| 8,573 | `gaugeSvg` | `function gaugeSvg(` |
| 8,577 | `diamondSvg` | `function diamondSvg(` |
| 8,591 | `energyFromReserve` | `function energyFromReserve(` |
| 8,603 | `sproutSvg` | `function sproutSvg(` |
| 8,614 | `markSvg` | `function markSvg(` |
| 8,620 | `hormoneSvg` | `function hormoneSvg(` |
| 8,626 | `flameSvg` | `function flameSvg(` |
| 8,630 | `gearSvg` | `function gearSvg(` |
| 8,642 | `thermoSvg` | `function thermoSvg(` |
| 8,661 | `trendUpSvg` | `function trendUpSvg(` |
| 8,663 | `ecgSvg` | `function ecgSvg(` |
| 8,677 | `circulationSvg` | `function circulationSvg(` |
| 8,678 | `weatherSvg` | `function weatherSvg(` |
| 8,699 | `moodSvg` | `function moodSvg(` |
| 8,723 | `boltSvg` | `function boltSvg(` |
| 8,726 | `houseSvg` | `function houseSvg(` |
| 8,734 | `sunriseSvg` | `function sunriseSvg(` |
| 8,749 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,760 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,777_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,798 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,799 | `dsrHistory` | `var dsrHistory =` |
| 8,800 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,801 | `savHistory` | `var savHistory =` |
| 8,806 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,816 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,817 | `dsrNow` | `var dsrNow =` |
| 8,818 | `savNow` | `var savNow =` |
| 8,819 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,824 | `householdsWord` | `function householdsWord(` |
| 8,831 | `householdsNow` | `var householdsNow =` |
| 8,838 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,839 | `dsrMeter` | `var dsrMeter =` |
| 8,842 | `savMeter` | `var savMeter =` |
| 8,845 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,862 | `savInfoHtml` | `function savInfoHtml(` |
| 8,880 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,889 | `curveNow` | `var curveNow =` |
| 8,890 | `curveTag` | `var curveTag =` |
| 8,891 | `curveSub` | `var curveSub =` |
| 8,895 | `curvePct` | `function curvePct(` |
| 8,896 | `curveNoteFull` | `var curveNoteFull =` |
| 8,911 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,919 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,960 | `marketCycles` | `var marketCycles =` |
| 8,990 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,992_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,013 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,014 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,019_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,040 | `slopeOf` | `function slopeOf(` |
| 9,051 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,057 | `readSeason` | `function readSeason(` |
| 9,082 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,084 | `qLabel` | `function qLabel(` |
| 9,108 | `regimeTrack` | `function regimeTrack(` |
| 9,131 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,133_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,140 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,141 | `seasonTitle` | `function seasonTitle(` |
| 9,142 | `monthLabel` | `function monthLabel(` |
| 9,143 | `cycleModel` | `function cycleModel(` |
| 9,195 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,203 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,210 | `nowModel` | `var nowModel =` |
| 9,211 | `readingNow` | `var readingNow =` |
| 9,212 | `cpiNow` | `var cpiNow =` |
| 9,213 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,214 | `currentSeason` | `var currentSeason =` |
| 9,215 | `seasonWhy` | `var seasonWhy =` |
| 9,232 | `seasonGroup` | `function seasonGroup(` |
| 9,246 | `arcGauge` | `function arcGauge(` |
| 9,288 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,301 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,303 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,307 | `policyFacts` | `function policyFacts(` |
| 9,319 | `allSources` | `var allSources =` |
| 9,343 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,376_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,379 | `SVG_NS` | `var SVG_NS =` |
| 9,380 | `svgEl` | `function svgEl(` |
| 9,393 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,429_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,430 | `clampPct` | `function clampPct(` |
| 9,437 | `infoIcon` | `function infoIcon(` |
| 9,446 | `detailTexts` | `var detailTexts =` |
| 9,464 | `detailSlots` | `var detailSlots =` |
| 9,465 | `detailSlot` | `function detailSlot(` |
| 9,476 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,480 | `_growthPanel` | `var _growthPanel =` |
| 9,481 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,487 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,498 | `facts` | `function facts(` |
| 9,499 | `factsFrom` | `function factsFrom(` |
| 9,503 | `expandBtn` | `function expandBtn(` |
| 9,509 | `sheetRenderers` | `var sheetRenderers =` |
| 9,526 | `pageMode` | `var pageMode =` |
| 9,533 | `pageCycles` | `var pageCycles =` |
| 9,538 | `pageRange` | `var pageRange =` |
| 9,544 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,578_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,589 | `meterHtml` | `function meterHtml(` |
| 9,617 | `srcHtml` | `function srcHtml(` |
| 9,626 | `TIMING` | `var TIMING =` |
| 9,632 | `timingMark` | `function timingMark(` |
| 9,646 | `timingPill` | `function timingPill(` |
| 9,667 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,675 | `seatPageFoot` | `function seatPageFoot(` |
| 9,698 | `timingMembers` | `var timingMembers =` |
| 9,699 | `registerTiming` | `function registerTiming(` |
| 9,705 | `headHtml` | `function headHtml(` |
| 9,723 | `heldHighlights` | `var heldHighlights =` |
| 9,724 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,782_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,783 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,182_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,183 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,406_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,407 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,439_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,445 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,529_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,530 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,548_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,551 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,574_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,586 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,649_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,650 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,770_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,773 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,971_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,983 | `totalRiseIn` | `function totalRiseIn(` |
| 10,993 | `eraInflation` | `function eraInflation(` |
| 11,004 | `eraGrowth` | `function eraGrowth(` |
| 11,020 | `fmtSigned` | `function fmtSigned(` |
| 11,025 | `regimeArrow` | `function regimeArrow(` |
| 11,031 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,032 | `growthShown` | `function growthShown(` |
| 11,033 | `growthShownCap` | `function growthShownCap(` |
| 11,034 | `regimeState` | `function regimeState(` |
| 11,038 | `phaseClass` | `function phaseClass(` |
| 11,040 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,052 | `cycleViewEl` | `var cycleViewEl =` |
| 11,056 | `tempCard` | `var tempCard =` |
| 11,057 | `placeCharts` | `function placeCharts(` |
| 11,062 | `shownEra` | `var shownEra =` |
| 11,063 | `calendarReset` | `var calendarReset =` |
| 11,064 | `metricPageReset` | `var metricPageReset =` |
| 11,065 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,068 | `topbarBack` | `var topbarBack =` |
| 11,069 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,076_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,077 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,238_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,239 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,257_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,260 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,281_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,287 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,290 | `hubSet` | `function hubSet(` |
| 11,303 | `quarterPopup` | `function quarterPopup(` |
| 11,336 | `hubShowDefault` | `function hubShowDefault(` |
| 11,345 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,351 | `hubShowYear` | `function hubShowYear(` |
| 11,366 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,458_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,461 | `tempState` | `var tempState =` |
| 11,464 | `chartLink` | `var chartLink =` |
| 11,484 | `m2Step` | `function m2Step(` |
| 11,487 | `heatStep` | `function heatStep(` |
| 11,491 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,678_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,681 | `drawGrowth` | `function drawGrowth(` |
| 11,820 | `wireResize` | `function wireResize(` |
| 11,826 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,838_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,839 | `renderCycleView` | `function renderCycleView(` |
| 11,892 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,903 | `PEER_CARET` | `var PEER_CARET =` |
| 11,904 | `peerList` | `function peerList(` |
| 11,905 | `peerChosen` | `function peerChosen(` |
| 11,906 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,910 | `renderPeerPills` | `function renderPeerPills(` |
| 11,960 | `shownEraModel` | `var shownEraModel =` |
| 11,961 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,963_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,965 | `stripGroupName` | `var stripGroupName =` |
| 11,966 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,012 | `marketStripHtml` | `function marketStripHtml(` |
| 12,075 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,076 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,106_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,107 | `renderCycleList` | `function renderCycleList(` |
| 12,197 | `renderSignsList` | `function renderSignsList(` |
| 12,475 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,730_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,731 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,793_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,794 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,827_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,828 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,999–4,002 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,257–8,270 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,091–9,104 | `seasonTrackAll` | The season, computed |
| 9,126–9,130 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,191 |
| `desire-range` | 10,107 |
| `fear-range` | 10,739 |
| `hormones-range` | 10,621 |
| `hzn-range` | 10,478 |
| `pulse-range` | 10,058 |
| `sheet-marker-deficit` | 13,188 |
| `sheet-metric-gdp` | 13,072 |
| `sheet-metric-households` | 13,222 |
| `sheet-metric-power` | 13,151 |
| `sheet-metric-temp` | 13,022 |
| `sheet-metric-valuation` | 13,264 |
| `sheet-sign-activity` | 13,133 |
| `sheet-sign-desire` | 10,108 |
| `sheet-sign-horizon` | 10,479 |
| `sheet-sign-hormones` | 10,622 |
| `sheet-sign-pulse` | 10,057 |
| `sheet-sign-sentiment` | 10,744 |
| `sheet-sign-volume` | 10,081 |
| `sheet-sign-yield` | 10,023 |
| `volume-range` | 10,082 |
| `ylm-range` | 10,025 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,197 |
| `desire-range` | 10,090 |
| `fear-range` | 10,696 |
| `hzn-range` | 10,455 |
| `pulse-range` | 10,035 |
| `sheet-metric-gdp` | 13,073 |
| `sheet-metric-power` | 13,152 |
| `sheet-metric-temp` | 13,023 |
| `sheet-metric-valuation` | 13,265 |
| `volume-range` | 10,062 |
| `ylm-range` | 10,136 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,117 |
| `sheet-metric-gdp` | 6,118 |
| `sheet-sign-activity` | 6,125 |
| `sheet-metric-power` | 6,126 |
| `sheet-metric-valuation` | 6,128 |
| `sheet-metric-households` | 6,129 |
| `deficit-range` | 6,130 |
| `volume-range` | 6,131 |
| `pulse-range` | 6,132 |
| `hzn-range` | 6,133 |
| `ylm-range` | 6,148 |
| `desire-range` | 6,149 |
| `fear-range` | 6,150 |
| `hormones-range` | 6,151 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 189 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 322 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 420 | yearly calendar — one card per year, grouped into five eras |
| 427 | season strip |
| 480 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels \u2026 so if one day |
| 639 | tab bar (app-style segmented navigation) |
| 693 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 732 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 955 | journal (editorial content tab) |
| 961 | content tab: reading companion |
| 1,019 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,491 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,525 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,535 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,546 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,579 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,755 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,932 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,425 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,473 | hero: yield curve |
| 2,569 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,648 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,747 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,772 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,787 | long cycle (structural layer) |
| 2,828 | indicator grid |
| 2,871 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,888 | info icon + popover (progressive disclosure for longer notes) |
| 2,909 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,004 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (148), which is what the renderers fill:

| Line | id |
|---|---|
| 3,036 | `topbar-back` |
| 3,039 | `topbar-title` |
| 3,040 | `menu-btn` |
| 3,057 | `main` |
| 3,064 | `cycle-view` |
| 3,072 | `cycle-kicker` |
| 3,078 | `cycle-dial` |
| 3,080 | `season-wheel-hub-date` |
| 3,081 | `season-wheel-hub-theme` |
| 3,082 | `season-wheel-hub-detail` |
| 3,090 | `temp-card` |
| 3,092 | `temp-kicker` |
| 3,093 | `temp-sub` |
| 3,096 | `temp-svg` |
| 3,097 | `temp-tooltip` |
| 3,103 | `temp-stats` |
| 3,110 | `growth-card` |
| 3,113 | `growth-kicker` |
| 3,113 | `growth-phase` |
| 3,113 | `growth-sub` |
| 3,113 | `growth-peers` |
| 3,114 | `growth-svg` |
| 3,114 | `growth-tooltip` |
| 3,119 | `growth-stats` |
| 3,128 | `today-analysis` |
| 3,132 | `peek-row` |
| 3,136 | `sheet-metric-temp` |
| 3,137 | `temp-timing` |
| 3,138 | `temp-chart` |
| 3,140 | `temp-rangebar` |
| 3,142 | `temp-head` |
| 3,143 | `slot-temp` |
| 3,144 | `temp-history` |
| 3,145 | `temp-hist-tooltip` |
| 3,148 | `temp-trend` |
| 3,152 | `temp-highlights` |
| 3,155 | `sheet-metric-gdp` |
| 3,156 | `gdp-timing` |
| 3,157 | `gdp-chart` |
| 3,158 | `gdp-rangebar` |
| 3,160 | `gdp-head` |
| 3,161 | `slot-growth` |
| 3,162 | `gdp-history` |
| 3,163 | `gdp-hist-tooltip` |
| 3,164 | `gdp-yoy` |
| 3,174 | `gdp-trend` |
| 3,176 | `gdp-panel` |
| 3,181 | `subj-ring-gdp` |
| 3,183 | `subj-label-gdp` |
| 3,184 | `subj-value-gdp` |
| 3,185 | `subj-say-gdp` |
| 3,186 | `subj-spark-gdp` |
| 3,191 | `subj-ctx-gdp` |
| 3,194 | `gdp-highlights` |
| 3,202 | `sheet-metric-power` |
| 3,203 | `power-timing` |
| 3,204 | `power-head` |
| 3,205 | `power-chart` |
| 3,209 | `subj-ring-resilience` |
| 3,212 | `subj-value-resilience` |
| 3,213 | `subj-say-resilience` |
| 3,218 | `subj-ctx-resilience` |
| 3,222 | `longcycle-title` |
| 3,224 | `longcycle-tag` |
| 3,238 | `power-highlights` |
| 3,245 | `sheet-marker-deficit` |
| 3,251 | `sheet-metric-households` |
| 3,252 | `households-timing` |
| 3,253 | `households-chart` |
| 3,254 | `households-highlights` |
| 3,258 | `sheet-metric-valuation` |
| 3,259 | `valuation-timing` |
| 3,260 | `valuation-head` |
| 3,261 | `valuation-chart` |
| 3,265 | `subj-ring-valuation` |
| 3,268 | `subj-value-valuation` |
| 3,269 | `subj-say-valuation` |
| 3,274 | `subj-ctx-valuation` |
| 3,278 | `valuation-title` |
| 3,280 | `valuation-tag` |
| 3,287 | `valuation-highlights` |
| 3,293 | `subj-ring-yield` |
| 3,296 | `subj-value-yield` |
| 3,297 | `subj-say-yield` |
| 3,298 | `subj-spark-yield` |
| 3,329 | `ylm-series` |
| 3,334 | `ylm-head` |
| 3,335 | `ylm-shell` |
| 3,336 | `ylm-svg` |
| 3,337 | `ylm-tooltip` |
| 3,340 | `ylm-trend` |
| 3,343 | `pressure-insights` |
| 3,344 | `pressure-highlights` |
| 3,370 | `subj-value-horizon` |
| 3,371 | `subj-say-horizon` |
| 3,372 | `subj-spark-horizon` |
| 3,382 | `hzn-timeline` |
| 3,384 | `hzn-head` |
| 3,385 | `spread-history-shell` |
| 3,386 | `spread-history-svg` |
| 3,387 | `spread-history-tooltip` |
| 3,390 | `hzn-trend` |
| 3,392 | `hzn-panel` |
| 3,394 | `horizon-insights` |
| 3,395 | `horizon-highlights` |
| 3,406 | `subj-value-hormones` |
| 3,407 | `subj-say-hormones` |
| 3,412 | `hormones-history` |
| 3,413 | `hormones-highlights` |
| 3,419 | `subj-ring-sentiment` |
| 3,422 | `subj-value-sentiment` |
| 3,423 | `subj-say-sentiment` |
| 3,424 | `subj-spark-sentiment` |
| 3,438 | `fear-history` |
| 3,439 | `curve-highlights` |
| 3,453 | `signs-list` |
| 3,464 | `calendar-list` |
| 3,469 | `indicators-peek` |
| 3,515 | `cycle-list` |
| 3,521 | `cycle-more` |
| 3,522 | `cycle-more-label` |
| 3,531 | `calendar-cycle` |
| 3,532 | `calendar-cycle-slot` |
| 3,583 | `seasons-kicker` |
| 3,584 | `seasons-rows` |
| 3,588 | `framework-kicker` |
| 3,590 | `framework-rows` |
| 3,597 | `more-menu` |
| 3,600 | `menu-back` |
| 3,614 | `sources-open` |
| 3,622 | `appearance-current` |
| 3,630 | `sheet-howto` |
| 3,674 | `sheet-book` |
| 3,706 | `sheet-appearance` |
| 3,714 | `theme-toggle` |
| 3,721 | `sheet-contact` |
| 3,730 | `contact-form` |
| 3,731 | `contact-title` |
| 3,732 | `contact-message` |
| 3,734 | `contact-hint` |
| 3,735 | `contact-send` |
| 3,744 | `sheet-sources` |
| 3,747 | `sources-back` |
| 3,754 | `asof-text` |
| 3,755 | `sources-groups` |
| 3,762 | `detail-backdrop` |
| 3,764 | `detail-modal-close` |
| 3,765 | `detail-modal-body` |

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

