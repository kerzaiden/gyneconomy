# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,764 lines**, about 1226 KB, roughly **348 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `abee809` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,136 | the whole stylesheet, every token and rule |
| **Markup** | 3,137–3,913 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,914–14,711 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,712–14,764 | </body></html> |

Counts: **263** top-level functions, **181** top-level vars, **4** top-level IIFEs in the script.

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
| 5,742 | `deficitBlock` | `function deficitBlock(` |
| 5,804 | `buffettHistory` | `var buffettHistory =` |
| 5,834 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,835 | `hyDates` | `var hyDates =` |
| 5,836 | `hyOas` | `var hyOas =` |
| 5,837 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,844 | `hyAt` | `function hyAt(` |
| 5,848 | `hyLabel` | `function hyLabel(` |
| 5,849 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,850 | `hyNum` | `function hyNum(` |
| 5,851 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,861 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,871 | `capeHistory` | `var capeHistory =` |
| 5,873 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,891_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,897 | `sentiment` | `var sentiment =` |
| 5,915 | `valuation` | `var valuation =` |
| 5,952 | `valRow` | `function valRow(` |
| 5,960 | `coincident` | `var coincident =` |
| 6,021 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 6,039 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 6,040 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 6,041 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 6,043_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,056 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 6,057 | `m2vHistory` | `var m2vHistory =` |
| 6,077 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,169 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,258 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,259 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,299_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,305 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,306 | `DOTS` | `var DOTS =` |
| 6,313 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,347 | `histHead` | `function histHead(` |
| 6,371 | `headNoteIdx` | `var headNoteIdx =` |
| 6,372 | `headMenuHtml` | `function headMenuHtml(` |
| 6,430 | `headMenuFor` | `var headMenuFor =` |
| 6,432 | `headSubFor` | `var headSubFor =` |
| 6,433 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,482 | `nameWithMark` | `function nameWithMark(` |
| 6,488 | `panelRow` | `function panelRow(` |
| 6,521 | `panelFromMeter` | `function panelFromMeter(` |
| 6,535 | `meterFlagged` | `function meterFlagged(` |
| 6,546 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,574 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,588 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,607 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,626 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,640 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,665 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,696 | `desireBlock` | `function desireBlock(` |
| 6,723 | `volumeBlock` | `function volumeBlock(` |
| 6,748 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,771 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,779_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,792 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,793 | `m2Level` | `var m2Level =` |
| 6,815 | `m2Yoy` | `var m2Yoy =` |
| 6,816 | `M2_NORM` | `var M2_NORM =` |
| 6,821 | `volumeVerdict` | `function volumeVerdict(` |
| 6,858 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,859 | `unempHistory` | `var unempHistory =` |
| 6,865 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,880 | `NROU_NOW` | `var NROU_NOW =` |
| 6,881 | `unempState` | `function unempState(` |
| 6,887 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,950_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,959 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,968_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,981 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,994 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 7,049 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,117 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,118 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,121 | `qAtIndex` | `function qAtIndex(` |
| 7,122 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,130_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,145 | `householdsChart` | `function householdsChart(` |
| 7,212 | `lastChartAvg` | `var lastChartAvg =` |
| 7,213 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,297 | `GDP_NORM` | `var GDP_NORM =` |
| 7,303 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,304 | `gdpNowQ` | `var gdpNowQ =` |
| 7,305 | `gdpMeter` | `var gdpMeter =` |
| 7,308 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,330 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,395 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,458 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,466 | `velocityVerdict` | `function velocityVerdict(` |
| 7,474 | `derivePulseTag` | `function derivePulseTag(` |
| 7,480 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,540_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,549 | `seasonReading` | `var seasonReading =` |
| 7,598 | `frameworkRows` | `var frameworkRows =` |
| 7,608 | `vixRow` | `var vixRow =` |
| 7,616 | `vixWordOf` | `var vixWordOf =` |
| 7,620 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,635_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,639 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,648_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,649 | `calendarTodayY` | `var calendarTodayY =` |
| 7,680 | `vix3mClose` | `var vix3mClose =` |
| 7,681 | `fearCurve` | `function fearCurve(` |
| 7,688 | `curveVerdict` | `function curveVerdict(` |
| 7,695 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,700 | `valuationVerdict` | `function valuationVerdict(` |
| 7,718 | `sparkHtml` | `function sparkHtml(` |
| 7,737 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,743_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,756 | `modeBar` | `function modeBar(` |
| 7,771 | `pickerOpen` | `var pickerOpen =` |
| 7,775 | `cycleByName` | `function cycleByName(` |
| 7,779 | `openCycle` | `function openCycle(` |
| 7,785 | `cycleSlice` | `function cycleSlice(` |
| 7,794 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,802 | `cycleMonths` | `function cycleMonths(` |
| 7,821 | `histControls` | `function histControls(` |
| 7,835 | `cycLabel` | `function cycLabel(` |
| 7,851 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,860 | `cyclePicker` | `function cyclePicker(` |
| 7,879 | `rangeBar` | `function rangeBar(` |
| 7,891 | `trendOf` | `function trendOf(` |
| 7,936 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,946 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,967_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,968 | `yearOf` | `function yearOf(` |
| 7,969 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,970_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,008 | `headSigma` | `function headSigma(` |
| 8,016 | `atQuarter` | `function atQuarter(` |
| 8,017 | `atMonth` | `function atMonth(` |
| 8,018 | `cycleAverages` | `function cycleAverages(` |
| 8,025 | `ordinal` | `function ordinal(` |
| 8,026 | `hiCard` | `function hiCard(` |
| 8,037 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 8,051_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,058 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,074 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,081 | `moreRow` | `function moreRow(` |
| 8,087 | `powerPageNote` | `var powerPageNote =` |
| 8,088 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,100_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,103 | `xLabelOf` | `function xLabelOf(` |
| 8,123 | `fitGroup` | `function fitGroup(` |
| 8,145 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,204_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,228 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,238 | `vGrid` | `function vGrid(` |
| 8,263 | `COL_FILL` | `var COL_FILL =` |
| 8,296 | `colPath` | `function colPath(` |
| 8,301 | `colWidth` | `function colWidth(` |
| 8,348 | `AXIS` | `var AXIS =` |
| 8,364 | `histFrame` | `function histFrame(` |
| 8,376 | `xLabel` | `function xLabel(` |
| 8,380 | `crossLine` | `function crossLine(` |
| 8,385 | `zeroRule` | `function zeroRule(` |
| 8,388 | `meanRule` | `function meanRule(` |
| 8,389 | `vhOpen` | `function vhOpen(` |
| 8,390 | `chartAxes` | `function chartAxes(` |
| 8,450 | `divergeChart` | `function divergeChart(` |
| 8,518 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,547_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,555 | `maxIn` | `function maxIn(` |
| 8,573 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,587 | `PEEK_W` | `var PEEK_W =` |
| 8,590 | `PEEK_H` | `var PEEK_H =` |
| 8,595 | `colPeek` | `function colPeek(` |
| 8,622 | `meterPeek` | `function meterPeek(` |
| 8,639 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,644 | `pressureZone` | `function pressureZone(` |
| 8,659 | `HZN_BACK` | `var HZN_BACK =` |
| 8,660 | `hznLast` | `function hznLast(` |
| 8,661 | `hznBack` | `function hznBack(` |
| 8,662 | `horizonWord` | `function horizonWord(` |
| 8,687 | `HZN_METERS` | `var HZN_METERS =` |
| 8,695 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,736 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,741 | `RISK_RISK` | `var RISK_RISK =` |
| 8,746 | `riskCell` | `function riskCell(` |
| 8,747 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,778 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,803_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,824 | `pulseClipN` | `var pulseClipN =` |
| 8,825 | `beatPath` | `function beatPath(` |
| 8,850 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,864 | `pulsePeek` | `function pulsePeek(` |
| 8,872 | `pulseBlock` | `function pulseBlock(` |
| 8,892 | `CHEV` | `var CHEV =` |
| 8,894 | `peekCard` | `function peekCard(` |
| 8,948 | `dropSvg` | `function dropSvg(` |
| 8,960 | `volumeSvg` | `function volumeSvg(` |
| 8,967 | `gaugeSvg` | `function gaugeSvg(` |
| 8,971 | `diamondSvg` | `function diamondSvg(` |
| 8,985 | `energyFromReserve` | `function energyFromReserve(` |
| 8,997 | `sproutSvg` | `function sproutSvg(` |
| 9,008 | `markSvg` | `function markSvg(` |
| 9,017 | `pressureSvg` | `function pressureSvg(` |
| 9,021 | `hormoneSvg` | `function hormoneSvg(` |
| 9,027 | `flameSvg` | `function flameSvg(` |
| 9,031 | `gearSvg` | `function gearSvg(` |
| 9,043 | `thermoSvg` | `function thermoSvg(` |
| 9,062 | `trendUpSvg` | `function trendUpSvg(` |
| 9,064 | `ecgSvg` | `function ecgSvg(` |
| 9,078 | `circulationSvg` | `function circulationSvg(` |
| 9,079 | `weatherSvg` | `function weatherSvg(` |
| 9,100 | `moodSvg` | `function moodSvg(` |
| 9,124 | `boltSvg` | `function boltSvg(` |
| 9,127 | `houseSvg` | `function houseSvg(` |
| 9,135 | `sunriseSvg` | `function sunriseSvg(` |
| 9,150 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,161 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,178_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,199 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,200 | `dsrHistory` | `var dsrHistory =` |
| 9,201 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,202 | `savHistory` | `var savHistory =` |
| 9,207 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,217 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,218 | `dsrNow` | `var dsrNow =` |
| 9,219 | `savNow` | `var savNow =` |
| 9,220 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,225 | `householdsWord` | `function householdsWord(` |
| 9,232 | `householdsNow` | `var householdsNow =` |
| 9,239 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,240 | `dsrMeter` | `var dsrMeter =` |
| 9,243 | `savMeter` | `var savMeter =` |
| 9,246 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,263 | `savInfoHtml` | `function savInfoHtml(` |
| 9,281 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,290 | `curveNow` | `var curveNow =` |
| 9,291 | `curveTag` | `var curveTag =` |
| 9,292 | `curveSub` | `var curveSub =` |
| 9,296 | `curvePct` | `function curvePct(` |
| 9,297 | `curveNoteFull` | `var curveNoteFull =` |
| 9,312 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,320 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,361 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside (Version 610, rebuilt in Version 612)

_line 9,389_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,403 | `marketTops` | `var marketTops =` |
| 9,413 | `marketTopsSrc` | `var marketTopsSrc =` |
| 9,418 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,420_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,441 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,442 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,447_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,468 | `slopeOf` | `function slopeOf(` |
| 9,479 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,485 | `readSeason` | `function readSeason(` |
| 9,510 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,512 | `qLabel` | `function qLabel(` |
| 9,536 | `regimeTrack` | `function regimeTrack(` |
| 9,559 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,561_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,568 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,569 | `seasonTitle` | `function seasonTitle(` |
| 9,570 | `monthLabel` | `function monthLabel(` |
| 9,571 | `cycleModel` | `function cycleModel(` |
| 9,623 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,631 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,638 | `nowModel` | `var nowModel =` |
| 9,639 | `readingNow` | `var readingNow =` |
| 9,640 | `cpiNow` | `var cpiNow =` |
| 9,641 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,642 | `currentSeason` | `var currentSeason =` |
| 9,643 | `seasonWhy` | `var seasonWhy =` |
| 9,660 | `seasonGroup` | `function seasonGroup(` |
| 9,674 | `arcGauge` | `function arcGauge(` |
| 9,716 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,729 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,736 | `tsyView` | `var tsyView =` |
| 9,738 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,740 | `spreadLabel` | `function spreadLabel(` |
| 9,747 | `policyFacts` | `function policyFacts(` |
| 9,761 | `policyFactRows` | `function policyFactRows(` |
| 9,767 | `allSources` | `var allSources =` |
| 9,791 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,824_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,827 | `SVG_NS` | `var SVG_NS =` |
| 9,828 | `svgEl` | `function svgEl(` |
| 9,841 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,877_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,878 | `clampPct` | `function clampPct(` |
| 9,885 | `infoIcon` | `function infoIcon(` |
| 9,894 | `detailTexts` | `var detailTexts =` |
| 9,912 | `detailSlots` | `var detailSlots =` |
| 9,913 | `detailSlot` | `function detailSlot(` |
| 9,924 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,928 | `_growthPanel` | `var _growthPanel =` |
| 9,929 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,935 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,946 | `facts` | `function facts(` |
| 9,947 | `factsFrom` | `function factsFrom(` |
| 9,951 | `expandBtn` | `function expandBtn(` |
| 9,957 | `sheetRenderers` | `var sheetRenderers =` |
| 9,974 | `pageMode` | `var pageMode =` |
| 9,981 | `pageCycles` | `var pageCycles =` |
| 9,986 | `pageRange` | `var pageRange =` |
| 9,992 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 10,026_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,037 | `meterHtml` | `function meterHtml(` |
| 10,065 | `srcHtml` | `function srcHtml(` |
| 10,074 | `TIMING` | `var TIMING =` |
| 10,080 | `timingMark` | `function timingMark(` |
| 10,094 | `timingPill` | `function timingPill(` |
| 10,115 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 10,123 | `seatPageFoot` | `function seatPageFoot(` |
| 10,146 | `timingMembers` | `var timingMembers =` |
| 10,147 | `registerTiming` | `function registerTiming(` |
| 10,153 | `headHtml` | `function headHtml(` |
| 10,171 | `heldHighlights` | `var heldHighlights =` |
| 10,172 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,230_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,231 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,664_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,665 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,887_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,888 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,920_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,926 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 11,010_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,011 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 11,029_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,032 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 11,055_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,067 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,198_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,207 | `lendingWord` | `function lendingWord(` |
| 11,215 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,275_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,276 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,400_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,403 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,525_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,537 | `totalRiseIn` | `function totalRiseIn(` |
| 11,547 | `eraInflation` | `function eraInflation(` |
| 11,558 | `eraGrowth` | `function eraGrowth(` |
| 11,578 | `fmtSigned` | `function fmtSigned(` |
| 11,583 | `regimeArrow` | `function regimeArrow(` |
| 11,589 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,590 | `growthShown` | `function growthShown(` |
| 11,591 | `growthShownCap` | `function growthShownCap(` |
| 11,592 | `regimeState` | `function regimeState(` |
| 11,596 | `phaseClass` | `function phaseClass(` |
| 11,598 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,610 | `cycleViewEl` | `var cycleViewEl =` |
| 11,614 | `tempCard` | `var tempCard =` |
| 11,615 | `placeCharts` | `function placeCharts(` |
| 11,620 | `shownEra` | `var shownEra =` |
| 11,621 | `calendarReset` | `var calendarReset =` |
| 11,622 | `metricPageReset` | `var metricPageReset =` |
| 11,623 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,626 | `topbarBack` | `var topbarBack =` |
| 11,627 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,634_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,635 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,796_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,797 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,815_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,818 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,839_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,845 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,848 | `hubSet` | `function hubSet(` |
| 11,861 | `quarterPopup` | `function quarterPopup(` |
| 11,894 | `hubShowDefault` | `function hubShowDefault(` |
| 11,903 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,909 | `hubShowYear` | `function hubShowYear(` |
| 11,924 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 12,016_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,019 | `tempState` | `var tempState =` |
| 12,022 | `chartLink` | `var chartLink =` |
| 12,042 | `m2Step` | `function m2Step(` |
| 12,045 | `heatStep` | `function heatStep(` |
| 12,049 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,236_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,239 | `drawGrowth` | `function drawGrowth(` |
| 12,378 | `wireResize` | `function wireResize(` |
| 12,384 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,396_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,397 | `renderCycleView` | `function renderCycleView(` |
| 12,449 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws (Version 210, moved into the head menu in V613)

_line 12,457_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,468 | `peerChosen` | `function peerChosen(` |
| 12,469 | `peerReaches` | `function peerReaches(` |
| 12,500 | `shownEraModel` | `var shownEraModel =` |
| 12,501 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,503_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,505 | `stripGroupName` | `var stripGroupName =` |
| 12,506 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,552 | `marketStripHtml` | `function marketStripHtml(` |
| 12,615 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,616 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,646_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,647 | `renderCycleList` | `function renderCycleList(` |
| 12,738 | `renderSignsList` | `function renderSignsList(` |
| 13,023 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: a closed cycle's four categories (Version 613)

_line 14,300_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,312 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES (Version 613)

_line 14,345_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 14,353 | `__roster` | `var __roster =` |
| 14,354 | `readingRoster` | `function readingRoster(` |
| 14,409 | `readFig` | `function readFig(` |
| 14,417 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes \u2014 today beside a past top (Version 610, rebuilt in Version 612)

_line 14,424_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,452 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,510_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,511 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,573_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,574 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,607_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,608 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,142–4,145 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,668–8,681 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,519–9,532 | `seasonTrackAll` | The season, computed |
| 9,554–9,558 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,764 |
| `desire-range` | 10,553 |
| `fear-range` | 11,365 |
| `hormones-range` | 11,102 |
| `hzn-range` | 10,657 |
| `hzn-spread` | 10,651 |
| `pressure-range` | 11,242 |
| `pulse-range` | 10,504 |
| `sheet-marker-deficit` | 13,761 |
| `sheet-metric-gdp` | 13,645 |
| `sheet-metric-households` | 13,795 |
| `sheet-metric-power` | 13,724 |
| `sheet-metric-temp` | 13,595 |
| `sheet-metric-valuation` | 13,840 |
| `sheet-sign-activity` | 13,706 |
| `sheet-sign-desire` | 10,554 |
| `sheet-sign-horizon` | 10,658 |
| `sheet-sign-hormones` | 11,105 |
| `sheet-sign-pressure` | 11,243 |
| `sheet-sign-pulse` | 10,503 |
| `sheet-sign-sentiment` | 11,370 |
| `sheet-sign-volume` | 10,527 |
| `volume-range` | 10,528 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,770 |
| `desire-range` | 10,536 |
| `fear-range` | 11,322 |
| `hzn-range` | 10,582 |
| `pulse-range` | 10,481 |
| `sheet-metric-gdp` | 13,646 |
| `sheet-metric-power` | 13,725 |
| `sheet-metric-temp` | 13,596 |
| `sheet-metric-valuation` | 13,841 |
| `volume-range` | 10,508 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,320 |
| `sheet-metric-gdp` | 6,321 |
| `sheet-sign-activity` | 6,328 |
| `sheet-metric-power` | 6,329 |
| `sheet-metric-valuation` | 6,331 |
| `sheet-metric-households` | 6,332 |
| `deficit-range` | 6,333 |
| `volume-range` | 6,334 |
| `pulse-range` | 6,335 |
| `hzn-range` | 6,341 |
| `desire-range` | 6,342 |
| `fear-range` | 6,343 |
| `hormones-range` | 6,344 |
| `pressure-range` | 6,345 |

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

