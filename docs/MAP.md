# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,983 lines**, about 1166 KB, roughly **331 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `f54636d` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,030 | the whole stylesheet, every token and rule |
| **Markup** | 3,031–3,771 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,772–13,930 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,931–13,983 | </body></html> |

Counts: **248** top-level functions, **178** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,777_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,781 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,782 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,783 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,801 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,805 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,810_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,820 | `wheelMeta` | `var wheelMeta =` |
| 3,831 | `seasonOverride` | `var seasonOverride =` |
| 3,834 | `cycleNowNote` | `var cycleNowNote =` |
| 3,843 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,929 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,974 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,987_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,004 | `LIVE` | `function LIVE(` |
| 4,031 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,039 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,040 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,043_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,074 | `repaintFigureText` | `function repaintFigureText(` |
| 4,082 | `repaintTag` | `function repaintTag(` |
| 4,092 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,117 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,125 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,133 | `REPAINT` | `var REPAINT =` |
| 4,150 | `liveAsOf` | `var liveAsOf =` |
| 4,151 | `fmtAsOf` | `function fmtAsOf(` |
| 4,156 | `applyLive` | `function applyLive(` |
| 4,232 | `repaintPolicy` | `function repaintPolicy(` |
| 4,282 | `GYN` | `var GYN =` |
| 4,302 | `refreshLiveData` | `function refreshLiveData(` |
| 4,343 | `fetchSiteData` | `function fetchSiteData(` |
| 4,373 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,387_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,388 | `yieldCurve` | `var yieldCurve =` |
| 4,401 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,425 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,437 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,465_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,470 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,494 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,518 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,542 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,569 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,594_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,603 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,613 | `uninvLagToday` | `var uninvLagToday =` |
| 4,625 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,638 | `gdpPeers` | `var gdpPeers =` |
| 4,679 | `gdpSrc` | `var gdpSrc =` |
| 4,680 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,685 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,698 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,736_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,758 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,768_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,784 | `stressScoreFor` | `function stressScoreFor(` |
| 4,790 | `stressScore` | `var stressScore =` |
| 4,796 | `powerOf` | `var powerOf =` |
| 4,797 | `powerScore` | `var powerScore =` |
| 4,814 | `stressHistory` | `var stressHistory =` |
| 4,825 | `powerMeter` | `var powerMeter =` |
| 4,827 | `stressNoteFull` | `var stressNoteFull =` |
| 4,859 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,861_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,884 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,885 | `deficitHistory` | `var deficitHistory =` |
| 4,888 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,895 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,897 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 4,940 | `fedFundsHistory` | `var fedFundsHistory =` |
| 4,941 | `fearCurveHistory` | `var fearCurveHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,958_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,971 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,984_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,998 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,001 | `timelineSpan` | `function timelineSpan(` |
| 5,007 | `timelineFor` | `function timelineFor(` |
| 5,020 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,026_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,032 | `windowScale` | `function windowScale(` |
| 5,048 | `windowYears` | `function windowYears(` |
| 5,066 | `refName` | `function refName(` |
| 5,073 | `histReadEnsure` | `function histReadEnsure(` |
| 5,112 | `seatBandReading` | `function seatBandReading(` |
| 5,135 | `histReadFill` | `function histReadFill(` |
| 5,263 | `histAxisEnds` | `function histAxisEnds(` |
| 5,274 | `histLegend` | `function histLegend(` |
| 5,362 | `refitHistory` | `function refitHistory(` |
| 5,374 | `wireHistHover` | `function wireHistHover(` |
| 5,433 | `mWindowFrom` | `function mWindowFrom(` |
| 5,438 | `qWindowFrom` | `function qWindowFrom(` |
| 5,443 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,444 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,446 | `DEF_1983` | `var DEF_1983 =` |
| 5,448 | `defFrom` | `function defFrom(` |
| 5,459 | `deficitChart` | `function deficitChart(` |
| 5,549 | `deficitBlock` | `function deficitBlock(` |
| 5,611 | `buffettHistory` | `var buffettHistory =` |
| 5,641 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,642 | `hyDates` | `var hyDates =` |
| 5,643 | `hyOas` | `var hyOas =` |
| 5,644 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,651 | `hyAt` | `function hyAt(` |
| 5,655 | `hyLabel` | `function hyLabel(` |
| 5,656 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,657 | `hyNum` | `function hyNum(` |
| 5,658 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,668 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,678 | `capeHistory` | `var capeHistory =` |
| 5,680 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,698_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,704 | `sentiment` | `var sentiment =` |
| 5,722 | `valuation` | `var valuation =` |
| 5,759 | `valRow` | `function valRow(` |
| 5,767 | `coincident` | `var coincident =` |
| 5,828 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,846 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,847 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,848 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,850_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,863 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,864 | `m2vHistory` | `var m2vHistory =` |
| 5,884 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,977 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,067 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,068 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,108_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,114 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,115 | `DOTS` | `var DOTS =` |
| 6,117 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,154 | `histHead` | `function histHead(` |
| 6,175 | `headNoteIdx` | `var headNoteIdx =` |
| 6,176 | `headMenuHtml` | `function headMenuHtml(` |
| 6,196 | `headMenuFor` | `var headMenuFor =` |
| 6,197 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,226 | `nameWithMark` | `function nameWithMark(` |
| 6,232 | `panelRow` | `function panelRow(` |
| 6,258 | `panelFromMeter` | `function panelFromMeter(` |
| 6,272 | `meterFlagged` | `function meterFlagged(` |
| 6,283 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,311 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,325 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,344 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,363 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,377 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,402 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,433 | `desireBlock` | `function desireBlock(` |
| 6,460 | `volumeBlock` | `function volumeBlock(` |
| 6,485 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,508 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,516_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,529 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,530 | `m2Level` | `var m2Level =` |
| 6,552 | `m2Yoy` | `var m2Yoy =` |
| 6,553 | `M2_NORM` | `var M2_NORM =` |
| 6,558 | `volumeVerdict` | `function volumeVerdict(` |
| 6,595 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,596 | `unempHistory` | `var unempHistory =` |
| 6,602 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,617 | `NROU_NOW` | `var NROU_NOW =` |
| 6,618 | `unempState` | `function unempState(` |
| 6,624 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,688_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,697 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 6,705 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,760 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,761 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,764 | `qAtIndex` | `function qAtIndex(` |
| 6,765 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,773_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,788 | `householdsChart` | `function householdsChart(` |
| 6,856 | `lastChartAvg` | `var lastChartAvg =` |
| 6,857 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,942 | `GDP_NORM` | `var GDP_NORM =` |
| 6,948 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,949 | `gdpNowQ` | `var gdpNowQ =` |
| 6,950 | `gdpMeter` | `var gdpMeter =` |
| 6,953 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,975 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,041 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,105 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,113 | `velocityVerdict` | `function velocityVerdict(` |
| 7,121 | `derivePulseTag` | `function derivePulseTag(` |
| 7,127 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,187_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,196 | `seasonReading` | `var seasonReading =` |
| 7,245 | `frameworkRows` | `var frameworkRows =` |
| 7,255 | `vixRow` | `var vixRow =` |
| 7,263 | `vixWordOf` | `var vixWordOf =` |
| 7,267 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,282_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,286 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,295_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,296 | `calendarTodayY` | `var calendarTodayY =` |
| 7,327 | `vix3mClose` | `var vix3mClose =` |
| 7,328 | `fearCurve` | `function fearCurve(` |
| 7,335 | `curveVerdict` | `function curveVerdict(` |
| 7,342 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,347 | `valuationVerdict` | `function valuationVerdict(` |
| 7,365 | `sparkHtml` | `function sparkHtml(` |
| 7,384 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,390_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,403 | `modeBar` | `function modeBar(` |
| 7,418 | `pickerOpen` | `var pickerOpen =` |
| 7,422 | `cycleByName` | `function cycleByName(` |
| 7,426 | `openCycle` | `function openCycle(` |
| 7,432 | `cycleSlice` | `function cycleSlice(` |
| 7,441 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,449 | `cycleMonths` | `function cycleMonths(` |
| 7,468 | `histControls` | `function histControls(` |
| 7,482 | `cycLabel` | `function cycLabel(` |
| 7,498 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,507 | `cyclePicker` | `function cyclePicker(` |
| 7,526 | `rangeBar` | `function rangeBar(` |
| 7,538 | `trendOf` | `function trendOf(` |
| 7,583 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,593 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,614_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,615 | `yearOf` | `function yearOf(` |
| 7,616 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,617_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,647 | `totalStat` | `function totalStat(` |
| 7,653 | `atQuarter` | `function atQuarter(` |
| 7,654 | `atMonth` | `function atMonth(` |
| 7,655 | `cycleAverages` | `function cycleAverages(` |
| 7,662 | `ordinal` | `function ordinal(` |
| 7,663 | `hiCard` | `function hiCard(` |
| 7,674 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,688_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,695 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,711 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,718 | `moreRow` | `function moreRow(` |
| 7,724 | `powerPageNote` | `var powerPageNote =` |
| 7,725 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,731_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,734 | `xLabelOf` | `function xLabelOf(` |
| 7,754 | `fitGroup` | `function fitGroup(` |
| 7,776 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,835_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,859 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,869 | `vGrid` | `function vGrid(` |
| 7,894 | `COL_FILL` | `var COL_FILL =` |
| 7,927 | `colPath` | `function colPath(` |
| 7,932 | `colWidth` | `function colWidth(` |
| 7,979 | `AXIS` | `var AXIS =` |
| 7,980 | `chartAxes` | `function chartAxes(` |
| 8,040 | `divergeChart` | `function divergeChart(` |
| 8,108 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,137_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,145 | `maxIn` | `function maxIn(` |
| 8,163 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,177 | `PEEK_W` | `var PEEK_W =` |
| 8,180 | `PEEK_H` | `var PEEK_H =` |
| 8,185 | `colPeek` | `function colPeek(` |
| 8,212 | `meterPeek` | `function meterPeek(` |
| 8,229 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,234 | `pressureZone` | `function pressureZone(` |
| 8,249 | `HZN_BACK` | `var HZN_BACK =` |
| 8,250 | `hznLast` | `function hznLast(` |
| 8,251 | `hznBack` | `function hznBack(` |
| 8,252 | `horizonWord` | `function horizonWord(` |
| 8,277 | `HZN_METERS` | `var HZN_METERS =` |
| 8,285 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,309 | `_hznPanel` | `var _hznPanel =` |
| 8,310 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,330 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,331 | `levelZone` | `function levelZone(` |
| 8,343 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,348 | `RISK_RISK` | `var RISK_RISK =` |
| 8,353 | `riskCell` | `function riskCell(` |
| 8,354 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,385 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,410_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,431 | `pulseClipN` | `var pulseClipN =` |
| 8,432 | `beatPath` | `function beatPath(` |
| 8,457 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,471 | `pulsePeek` | `function pulsePeek(` |
| 8,479 | `pulseBlock` | `function pulseBlock(` |
| 8,499 | `CHEV` | `var CHEV =` |
| 8,501 | `peekCard` | `function peekCard(` |
| 8,555 | `dropSvg` | `function dropSvg(` |
| 8,567 | `volumeSvg` | `function volumeSvg(` |
| 8,574 | `gaugeSvg` | `function gaugeSvg(` |
| 8,578 | `diamondSvg` | `function diamondSvg(` |
| 8,592 | `energyFromReserve` | `function energyFromReserve(` |
| 8,604 | `sproutSvg` | `function sproutSvg(` |
| 8,615 | `markSvg` | `function markSvg(` |
| 8,621 | `hormoneSvg` | `function hormoneSvg(` |
| 8,627 | `flameSvg` | `function flameSvg(` |
| 8,631 | `gearSvg` | `function gearSvg(` |
| 8,643 | `thermoSvg` | `function thermoSvg(` |
| 8,662 | `trendUpSvg` | `function trendUpSvg(` |
| 8,664 | `ecgSvg` | `function ecgSvg(` |
| 8,678 | `circulationSvg` | `function circulationSvg(` |
| 8,679 | `weatherSvg` | `function weatherSvg(` |
| 8,700 | `moodSvg` | `function moodSvg(` |
| 8,724 | `boltSvg` | `function boltSvg(` |
| 8,727 | `houseSvg` | `function houseSvg(` |
| 8,735 | `sunriseSvg` | `function sunriseSvg(` |
| 8,745 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,757 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,774_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,795 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,796 | `dsrHistory` | `var dsrHistory =` |
| 8,797 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,798 | `savHistory` | `var savHistory =` |
| 8,803 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,813 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,814 | `dsrNow` | `var dsrNow =` |
| 8,815 | `savNow` | `var savNow =` |
| 8,816 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,821 | `householdsWord` | `function householdsWord(` |
| 8,828 | `householdsNow` | `var householdsNow =` |
| 8,835 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,836 | `dsrMeter` | `var dsrMeter =` |
| 8,839 | `savMeter` | `var savMeter =` |
| 8,842 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,859 | `savInfoHtml` | `function savInfoHtml(` |
| 8,877 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,886 | `curveNow` | `var curveNow =` |
| 8,887 | `curveTag` | `var curveTag =` |
| 8,888 | `curveSub` | `var curveSub =` |
| 8,892 | `curvePct` | `function curvePct(` |
| 8,893 | `curveNoteFull` | `var curveNoteFull =` |
| 8,908 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,916 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,957 | `marketCycles` | `var marketCycles =` |
| 8,987 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,989_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,010 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,011 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,016_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,037 | `slopeOf` | `function slopeOf(` |
| 9,048 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,054 | `readSeason` | `function readSeason(` |
| 9,079 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,081 | `qLabel` | `function qLabel(` |
| 9,105 | `regimeTrack` | `function regimeTrack(` |
| 9,128 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,130_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,137 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,138 | `seasonTitle` | `function seasonTitle(` |
| 9,139 | `monthLabel` | `function monthLabel(` |
| 9,140 | `cycleModel` | `function cycleModel(` |
| 9,192 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,200 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,207 | `nowModel` | `var nowModel =` |
| 9,208 | `readingNow` | `var readingNow =` |
| 9,209 | `cpiNow` | `var cpiNow =` |
| 9,210 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,211 | `currentSeason` | `var currentSeason =` |
| 9,212 | `seasonWhy` | `var seasonWhy =` |
| 9,229 | `seasonGroup` | `function seasonGroup(` |
| 9,243 | `arcGauge` | `function arcGauge(` |
| 9,285 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,298 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,300 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,304 | `policyFacts` | `function policyFacts(` |
| 9,316 | `allSources` | `var allSources =` |
| 9,340 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,373_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,376 | `SVG_NS` | `var SVG_NS =` |
| 9,377 | `svgEl` | `function svgEl(` |
| 9,390 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,426_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,427 | `clampPct` | `function clampPct(` |
| 9,434 | `infoIcon` | `function infoIcon(` |
| 9,443 | `detailTexts` | `var detailTexts =` |
| 9,461 | `detailSlots` | `var detailSlots =` |
| 9,462 | `detailSlot` | `function detailSlot(` |
| 9,473 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,477 | `_growthPanel` | `var _growthPanel =` |
| 9,478 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,484 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,495 | `facts` | `function facts(` |
| 9,496 | `factsFrom` | `function factsFrom(` |
| 9,500 | `expandBtn` | `function expandBtn(` |
| 9,506 | `sheetRenderers` | `var sheetRenderers =` |
| 9,523 | `pageMode` | `var pageMode =` |
| 9,530 | `pageCycles` | `var pageCycles =` |
| 9,535 | `pageRange` | `var pageRange =` |
| 9,541 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,575_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,586 | `meterHtml` | `function meterHtml(` |
| 9,614 | `srcHtml` | `function srcHtml(` |
| 9,623 | `TIMING` | `var TIMING =` |
| 9,629 | `timingMark` | `function timingMark(` |
| 9,643 | `timingPill` | `function timingPill(` |
| 9,664 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,672 | `seatPageFoot` | `function seatPageFoot(` |
| 9,695 | `timingMembers` | `var timingMembers =` |
| 9,696 | `registerTiming` | `function registerTiming(` |
| 9,702 | `headHtml` | `function headHtml(` |
| 9,720 | `heldHighlights` | `var heldHighlights =` |
| 9,721 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,779_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,780 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,179_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,180 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,403_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,404 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,436_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,442 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,526_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,527 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,545_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,548 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,571_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,583 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,646_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,647 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,769_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,772 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,970_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,982 | `totalRiseIn` | `function totalRiseIn(` |
| 10,992 | `eraInflation` | `function eraInflation(` |
| 11,003 | `eraGrowth` | `function eraGrowth(` |
| 11,019 | `fmtSigned` | `function fmtSigned(` |
| 11,024 | `regimeArrow` | `function regimeArrow(` |
| 11,030 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,031 | `growthShown` | `function growthShown(` |
| 11,032 | `growthShownCap` | `function growthShownCap(` |
| 11,033 | `regimeState` | `function regimeState(` |
| 11,037 | `phaseClass` | `function phaseClass(` |
| 11,039 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,051 | `cycleViewEl` | `var cycleViewEl =` |
| 11,055 | `tempCard` | `var tempCard =` |
| 11,056 | `placeCharts` | `function placeCharts(` |
| 11,061 | `shownEra` | `var shownEra =` |
| 11,062 | `calendarReset` | `var calendarReset =` |
| 11,063 | `metricPageReset` | `var metricPageReset =` |
| 11,064 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,067 | `topbarBack` | `var topbarBack =` |
| 11,068 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,075_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,076 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,237_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,238 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,256_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,259 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,280_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,286 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,289 | `hubSet` | `function hubSet(` |
| 11,302 | `quarterPopup` | `function quarterPopup(` |
| 11,335 | `hubShowDefault` | `function hubShowDefault(` |
| 11,344 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,350 | `hubShowYear` | `function hubShowYear(` |
| 11,365 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,457_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,460 | `tempState` | `var tempState =` |
| 11,463 | `chartLink` | `var chartLink =` |
| 11,483 | `m2Step` | `function m2Step(` |
| 11,486 | `heatStep` | `function heatStep(` |
| 11,490 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,677_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,680 | `drawGrowth` | `function drawGrowth(` |
| 11,819 | `wireResize` | `function wireResize(` |
| 11,825 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,837_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,838 | `renderCycleView` | `function renderCycleView(` |
| 11,891 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,902 | `PEER_CARET` | `var PEER_CARET =` |
| 11,903 | `peerList` | `function peerList(` |
| 11,904 | `peerChosen` | `function peerChosen(` |
| 11,905 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,909 | `renderPeerPills` | `function renderPeerPills(` |
| 11,959 | `shownEraModel` | `var shownEraModel =` |
| 11,960 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,962_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,964 | `stripGroupName` | `var stripGroupName =` |
| 11,965 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,011 | `marketStripHtml` | `function marketStripHtml(` |
| 12,074 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,075 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,105_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,106 | `renderCycleList` | `function renderCycleList(` |
| 12,196 | `renderSignsList` | `function renderSignsList(` |
| 12,474 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,729_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,730 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,792_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,793 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,826_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,827 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,000–4,003 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,258–8,271 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,088–9,101 | `seasonTrackAll` | The season, computed |
| 9,123–9,127 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,190 |
| `desire-range` | 10,104 |
| `fear-range` | 10,743 |
| `hormones-range` | 10,618 |
| `hzn-range` | 10,475 |
| `pulse-range` | 10,055 |
| `sheet-marker-deficit` | 13,187 |
| `sheet-metric-gdp` | 13,071 |
| `sheet-metric-households` | 13,221 |
| `sheet-metric-power` | 13,150 |
| `sheet-metric-temp` | 13,021 |
| `sheet-metric-valuation` | 13,263 |
| `sheet-sign-activity` | 13,132 |
| `sheet-sign-desire` | 10,105 |
| `sheet-sign-horizon` | 10,476 |
| `sheet-sign-hormones` | 10,619 |
| `sheet-sign-pulse` | 10,054 |
| `sheet-sign-volume` | 10,078 |
| `sheet-sign-yield` | 10,020 |
| `volume-range` | 10,079 |
| `ylm-range` | 10,022 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,196 |
| `desire-range` | 10,087 |
| `fear-range` | 10,700 |
| `hzn-range` | 10,452 |
| `pulse-range` | 10,032 |
| `sheet-metric-gdp` | 13,072 |
| `sheet-metric-power` | 13,151 |
| `sheet-metric-temp` | 13,022 |
| `sheet-metric-valuation` | 13,264 |
| `volume-range` | 10,059 |
| `ylm-range` | 10,133 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,118 |
| `sheet-metric-gdp` | 6,119 |
| `sheet-sign-activity` | 6,126 |
| `sheet-metric-power` | 6,127 |
| `sheet-metric-valuation` | 6,129 |
| `sheet-metric-households` | 6,130 |
| `deficit-range` | 6,131 |
| `volume-range` | 6,132 |
| `pulse-range` | 6,133 |
| `hzn-range` | 6,134 |
| `ylm-range` | 6,149 |
| `desire-range` | 6,150 |
| `fear-range` | 6,151 |
| `hormones-range` | 6,152 |

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

Every `id` in the static DOM (149), which is what the renderers fill:

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
| 3,436 | `curve-gauge` |
| 3,439 | `fear-history` |
| 3,440 | `curve-highlights` |
| 3,454 | `signs-list` |
| 3,465 | `calendar-list` |
| 3,470 | `indicators-peek` |
| 3,516 | `cycle-list` |
| 3,522 | `cycle-more` |
| 3,523 | `cycle-more-label` |
| 3,532 | `calendar-cycle` |
| 3,533 | `calendar-cycle-slot` |
| 3,584 | `seasons-kicker` |
| 3,585 | `seasons-rows` |
| 3,589 | `framework-kicker` |
| 3,591 | `framework-rows` |
| 3,598 | `more-menu` |
| 3,601 | `menu-back` |
| 3,615 | `sources-open` |
| 3,623 | `appearance-current` |
| 3,631 | `sheet-howto` |
| 3,675 | `sheet-book` |
| 3,707 | `sheet-appearance` |
| 3,715 | `theme-toggle` |
| 3,722 | `sheet-contact` |
| 3,731 | `contact-form` |
| 3,732 | `contact-title` |
| 3,733 | `contact-message` |
| 3,735 | `contact-hint` |
| 3,736 | `contact-send` |
| 3,745 | `sheet-sources` |
| 3,748 | `sources-back` |
| 3,755 | `asof-text` |
| 3,756 | `sources-groups` |
| 3,763 | `detail-backdrop` |
| 3,765 | `detail-modal-close` |
| 3,766 | `detail-modal-body` |

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

