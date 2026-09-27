# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,227 lines**, about 1076 KB, roughly **306 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `7a4b727` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,928 | the whole stylesheet, every token and rule |
| **Markup** | 2,929–3,661 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,662–13,174 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,175–13,227 | </body></html> |

Counts: **244** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,667_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,671 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,672 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,673 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,691 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,695 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,700_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,710 | `wheelMeta` | `var wheelMeta =` |
| 3,721 | `seasonOverride` | `var seasonOverride =` |
| 3,724 | `cycleNowNote` | `var cycleNowNote =` |
| 3,733 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,819 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,864 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,877_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,894 | `LIVE` | `function LIVE(` |
| 3,921 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,929 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,930 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,933_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,964 | `repaintFigureText` | `function repaintFigureText(` |
| 3,972 | `repaintTag` | `function repaintTag(` |
| 3,982 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,007 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,015 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,023 | `REPAINT` | `var REPAINT =` |
| 4,040 | `liveAsOf` | `var liveAsOf =` |
| 4,041 | `fmtAsOf` | `function fmtAsOf(` |
| 4,046 | `applyLive` | `function applyLive(` |
| 4,122 | `repaintPolicy` | `function repaintPolicy(` |
| 4,172 | `GYN` | `var GYN =` |
| 4,192 | `refreshLiveData` | `function refreshLiveData(` |
| 4,233 | `fetchSiteData` | `function fetchSiteData(` |
| 4,263 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,277_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,278 | `yieldCurve` | `var yieldCurve =` |
| 4,291 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,315 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,322 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,328 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,355 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,357_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,362 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,386 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,410 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,434 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,461 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,486_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,495 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,505 | `uninvLagToday` | `var uninvLagToday =` |
| 4,517 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,530 | `gdpPeers` | `var gdpPeers =` |
| 4,571 | `gdpSrc` | `var gdpSrc =` |
| 4,572 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,577 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,590 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,628_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,650 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,660_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,676 | `stressScoreFor` | `function stressScoreFor(` |
| 4,682 | `stressScore` | `var stressScore =` |
| 4,688 | `powerOf` | `var powerOf =` |
| 4,689 | `powerScore` | `var powerScore =` |
| 4,706 | `stressHistory` | `var stressHistory =` |
| 4,717 | `powerMeter` | `var powerMeter =` |
| 4,719 | `stressNoteFull` | `var stressNoteFull =` |
| 4,751 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,753_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,776 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,777 | `deficitHistory` | `var deficitHistory =` |
| 4,780 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,787 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,789 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,832_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,845 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,858_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,872 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,875 | `timelineSpan` | `function timelineSpan(` |
| 4,881 | `timelineFor` | `function timelineFor(` |
| 4,894 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,900_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,906 | `windowScale` | `function windowScale(` |
| 4,922 | `windowYears` | `function windowYears(` |
| 4,940 | `refName` | `function refName(` |
| 4,947 | `histReadEnsure` | `function histReadEnsure(` |
| 4,978 | `seatBandReading` | `function seatBandReading(` |
| 5,001 | `histReadFill` | `function histReadFill(` |
| 5,037 | `wireHistHover` | `function wireHistHover(` |
| 5,096 | `mWindowFrom` | `function mWindowFrom(` |
| 5,101 | `qWindowFrom` | `function qWindowFrom(` |
| 5,106 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,107 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,109 | `DEF_1983` | `var DEF_1983 =` |
| 5,111 | `defFrom` | `function defFrom(` |
| 5,122 | `deficitChart` | `function deficitChart(` |
| 5,212 | `deficitBlock` | `function deficitBlock(` |
| 5,274 | `buffettHistory` | `var buffettHistory =` |
| 5,304 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,305 | `hyDates` | `var hyDates =` |
| 5,306 | `hyOas` | `var hyOas =` |
| 5,307 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,314 | `hyAt` | `function hyAt(` |
| 5,318 | `hyLabel` | `function hyLabel(` |
| 5,319 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,320 | `hyNum` | `function hyNum(` |
| 5,321 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,331 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,341 | `capeHistory` | `var capeHistory =` |
| 5,343 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,361_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,367 | `sentiment` | `var sentiment =` |
| 5,385 | `valuation` | `var valuation =` |
| 5,422 | `valRow` | `function valRow(` |
| 5,430 | `coincident` | `var coincident =` |
| 5,491 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,509 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,510 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,511 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,513_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,526 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,527 | `m2vHistory` | `var m2vHistory =` |
| 5,547 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,646 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,747 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,748 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 5,788_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,794 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,795 | `DOTS` | `var DOTS =` |
| 5,797 | `HIST_HEAD` | `var HIST_HEAD =` |
| 5,822 | `histHead` | `function histHead(` |
| 5,843 | `headNoteIdx` | `var headNoteIdx =` |
| 5,844 | `headMenuHtml` | `function headMenuHtml(` |
| 5,864 | `headMenuFor` | `var headMenuFor =` |
| 5,865 | `paintHeadMenus` | `function paintHeadMenus(` |
| 5,891 | `nameWithMark` | `function nameWithMark(` |
| 5,897 | `panelRow` | `function panelRow(` |
| 5,923 | `panelFromMeter` | `function panelFromMeter(` |
| 5,937 | `meterFlagged` | `function meterFlagged(` |
| 5,948 | `desireInfoHtml` | `function desireInfoHtml(` |
| 5,976 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 5,990 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,009 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,028 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,042 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,067 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,098 | `desireBlock` | `function desireBlock(` |
| 6,125 | `volumeBlock` | `function volumeBlock(` |
| 6,150 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,173 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,181_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,194 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,195 | `m2Level` | `var m2Level =` |
| 6,217 | `m2Yoy` | `var m2Yoy =` |
| 6,218 | `M2_NORM` | `var M2_NORM =` |
| 6,223 | `volumeVerdict` | `function volumeVerdict(` |
| 6,260 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,261 | `unempHistory` | `var unempHistory =` |
| 6,267 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,282 | `NROU_NOW` | `var NROU_NOW =` |
| 6,283 | `unempState` | `function unempState(` |
| 6,289 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,349 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,350 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,353 | `qAtIndex` | `function qAtIndex(` |
| 6,354 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,362_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,377 | `householdsChart` | `function householdsChart(` |
| 6,441 | `refKey` | `function refKey(` |
| 6,479 | `lastChartAvg` | `var lastChartAvg =` |
| 6,480 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,565 | `GDP_NORM` | `var GDP_NORM =` |
| 6,571 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,572 | `gdpNowQ` | `var gdpNowQ =` |
| 6,573 | `gdpMeter` | `var gdpMeter =` |
| 6,576 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,598 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,664 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,728 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,736 | `velocityVerdict` | `function velocityVerdict(` |
| 6,744 | `derivePulseTag` | `function derivePulseTag(` |
| 6,750 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,810_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,819 | `seasonReading` | `var seasonReading =` |
| 6,868 | `frameworkRows` | `var frameworkRows =` |
| 6,878 | `vixRow` | `var vixRow =` |
| 6,886 | `vixWordOf` | `var vixWordOf =` |
| 6,890 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 6,905_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,909 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 6,918_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,919 | `calendarTodayY` | `var calendarTodayY =` |
| 6,950 | `vix3mClose` | `var vix3mClose =` |
| 6,951 | `fearCurve` | `function fearCurve(` |
| 6,958 | `curveVerdict` | `function curveVerdict(` |
| 6,965 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 6,970 | `valuationVerdict` | `function valuationVerdict(` |
| 6,988 | `sparkHtml` | `function sparkHtml(` |
| 7,007 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,013_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,026 | `modeBar` | `function modeBar(` |
| 7,041 | `pickerOpen` | `var pickerOpen =` |
| 7,045 | `cycleByName` | `function cycleByName(` |
| 7,049 | `openCycle` | `function openCycle(` |
| 7,055 | `cycleSlice` | `function cycleSlice(` |
| 7,064 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,072 | `cycleMonths` | `function cycleMonths(` |
| 7,091 | `histControls` | `function histControls(` |
| 7,105 | `cycLabel` | `function cycLabel(` |
| 7,121 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,130 | `cyclePicker` | `function cyclePicker(` |
| 7,154 | `seriesBar` | `function seriesBar(` |
| 7,161 | `rangeBar` | `function rangeBar(` |
| 7,173 | `trendOf` | `function trendOf(` |
| 7,218 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,228 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,243_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,244 | `yearOf` | `function yearOf(` |
| 7,245 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,246_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,276 | `totalStat` | `function totalStat(` |
| 7,282 | `atQuarter` | `function atQuarter(` |
| 7,283 | `atMonth` | `function atMonth(` |
| 7,284 | `cycleAverages` | `function cycleAverages(` |
| 7,291 | `ordinal` | `function ordinal(` |
| 7,292 | `hiCard` | `function hiCard(` |
| 7,303 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,317_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,324 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,340 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,347 | `moreRow` | `function moreRow(` |
| 7,353 | `powerPageNote` | `var powerPageNote =` |
| 7,354 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,360_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,363 | `xLabelOf` | `function xLabelOf(` |
| 7,383 | `fitGroup` | `function fitGroup(` |
| 7,405 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,464_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,488 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,498 | `vGrid` | `function vGrid(` |
| 7,523 | `COL_FILL` | `var COL_FILL =` |
| 7,530 | `AXIS` | `var AXIS =` |
| 7,531 | `chartAxes` | `function chartAxes(` |
| 7,562 | `divergeChart` | `function divergeChart(` |
| 7,623 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,652_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,660 | `maxIn` | `function maxIn(` |
| 7,673 | `reserveGauge` | `function reserveGauge(` |
| 7,694 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,708 | `PEEK_W` | `var PEEK_W =` |
| 7,711 | `PEEK_H` | `var PEEK_H =` |
| 7,712 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,717 | `colPeek` | `function colPeek(` |
| 7,744 | `meterPeek` | `function meterPeek(` |
| 7,761 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,766 | `pressureZone` | `function pressureZone(` |
| 7,781 | `HZN_BACK` | `var HZN_BACK =` |
| 7,782 | `hznLast` | `function hznLast(` |
| 7,783 | `hznBack` | `function hznBack(` |
| 7,784 | `horizonWord` | `function horizonWord(` |
| 7,809 | `HZN_METERS` | `var HZN_METERS =` |
| 7,817 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 7,841 | `_hznPanel` | `var _hznPanel =` |
| 7,842 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 7,862 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 7,863 | `levelZone` | `function levelZone(` |
| 7,875 | `RISK_REWARD` | `var RISK_REWARD =` |
| 7,880 | `RISK_RISK` | `var RISK_RISK =` |
| 7,885 | `riskCell` | `function riskCell(` |
| 7,886 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 7,917 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 7,942_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,961 | `pulseClipN` | `var pulseClipN =` |
| 7,962 | `beatPath` | `function beatPath(` |
| 7,987 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,001 | `pulsePeek` | `function pulsePeek(` |
| 8,009 | `pulseBlock` | `function pulseBlock(` |
| 8,029 | `CHEV` | `var CHEV =` |
| 8,031 | `peekCard` | `function peekCard(` |
| 8,082 | `dropSvg` | `function dropSvg(` |
| 8,090 | `speakerSvg` | `function speakerSvg(` |
| 8,098 | `gaugeSvg` | `function gaugeSvg(` |
| 8,102 | `diamondSvg` | `function diamondSvg(` |
| 8,114 | `energyFromReserve` | `function energyFromReserve(` |
| 8,126 | `sproutSvg` | `function sproutSvg(` |
| 8,137 | `markSvg` | `function markSvg(` |
| 8,141 | `flameSvg` | `function flameSvg(` |
| 8,145 | `gearSvg` | `function gearSvg(` |
| 8,158 | `pulseSvg` | `function pulseSvg(` |
| 8,162 | `thermoSvg` | `function thermoSvg(` |
| 8,181 | `trendUpSvg` | `function trendUpSvg(` |
| 8,183 | `ecgSvg` | `function ecgSvg(` |
| 8,197 | `circulationSvg` | `function circulationSvg(` |
| 8,198 | `weatherSvg` | `function weatherSvg(` |
| 8,219 | `moodSvg` | `function moodSvg(` |
| 8,236 | `boltSvg` | `function boltSvg(` |
| 8,239 | `houseSvg` | `function houseSvg(` |
| 8,247 | `sunriseSvg` | `function sunriseSvg(` |
| 8,257 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,269 | `signMarks` | `var signMarks =` |
| 8,276 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,293_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,314 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,315 | `dsrHistory` | `var dsrHistory =` |
| 8,316 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,317 | `savHistory` | `var savHistory =` |
| 8,322 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,332 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,333 | `dsrNow` | `var dsrNow =` |
| 8,334 | `savNow` | `var savNow =` |
| 8,335 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,340 | `householdsWord` | `function householdsWord(` |
| 8,347 | `householdsNow` | `var householdsNow =` |
| 8,354 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,355 | `dsrMeter` | `var dsrMeter =` |
| 8,358 | `savMeter` | `var savMeter =` |
| 8,361 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,378 | `savInfoHtml` | `function savInfoHtml(` |
| 8,396 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,405 | `curveNow` | `var curveNow =` |
| 8,406 | `curveTag` | `var curveTag =` |
| 8,407 | `curveSub` | `var curveSub =` |
| 8,411 | `curvePct` | `function curvePct(` |
| 8,412 | `curveNoteFull` | `var curveNoteFull =` |
| 8,427 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,435 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,476 | `marketCycles` | `var marketCycles =` |
| 8,506 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,508_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,529 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,530 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,535_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,556 | `slopeOf` | `function slopeOf(` |
| 8,567 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,573 | `readSeason` | `function readSeason(` |
| 8,598 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,600 | `qLabel` | `function qLabel(` |
| 8,624 | `regimeTrack` | `function regimeTrack(` |
| 8,647 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,649_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,656 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,657 | `seasonTitle` | `function seasonTitle(` |
| 8,658 | `monthLabel` | `function monthLabel(` |
| 8,659 | `cycleModel` | `function cycleModel(` |
| 8,711 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,719 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,726 | `nowModel` | `var nowModel =` |
| 8,727 | `readingNow` | `var readingNow =` |
| 8,728 | `cpiNow` | `var cpiNow =` |
| 8,729 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,730 | `currentSeason` | `var currentSeason =` |
| 8,731 | `seasonWhy` | `var seasonWhy =` |
| 8,748 | `seasonGroup` | `function seasonGroup(` |
| 8,762 | `arcGauge` | `function arcGauge(` |
| 8,801 | `vitalRingSvg` | `function vitalRingSvg(` |
| 8,814 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 8,816 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 8,820 | `policyFacts` | `function policyFacts(` |
| 8,832 | `allSources` | `var allSources =` |
| 8,856 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 8,889_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,892 | `SVG_NS` | `var SVG_NS =` |
| 8,893 | `svgEl` | `function svgEl(` |
| 8,906 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 8,942_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,943 | `clampPct` | `function clampPct(` |
| 8,950 | `infoIcon` | `function infoIcon(` |
| 8,959 | `detailTexts` | `var detailTexts =` |
| 8,977 | `detailSlots` | `var detailSlots =` |
| 8,978 | `detailSlot` | `function detailSlot(` |
| 8,989 | `powerPanelHtml` | `var powerPanelHtml =` |
| 8,993 | `_growthPanel` | `var _growthPanel =` |
| 8,994 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,000 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,011 | `facts` | `function facts(` |
| 9,012 | `factsFrom` | `function factsFrom(` |
| 9,016 | `expandBtn` | `function expandBtn(` |
| 9,022 | `sheetRenderers` | `var sheetRenderers =` |
| 9,039 | `pageMode` | `var pageMode =` |
| 9,046 | `pageCycles` | `var pageCycles =` |
| 9,051 | `pageRange` | `var pageRange =` |
| 9,057 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,091_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,102 | `meterHtml` | `function meterHtml(` |
| 9,130 | `srcHtml` | `function srcHtml(` |
| 9,139 | `TIMING` | `var TIMING =` |
| 9,145 | `timingMark` | `function timingMark(` |
| 9,159 | `timingPill` | `function timingPill(` |
| 9,180 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,188 | `seatPageFoot` | `function seatPageFoot(` |
| 9,211 | `timingMembers` | `var timingMembers =` |
| 9,212 | `registerTiming` | `function registerTiming(` |
| 9,218 | `headHtml` | `function headHtml(` |
| 9,236 | `heldHighlights` | `var heldHighlights =` |
| 9,237 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,295_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,296 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,663_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,664 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 9,874_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,875 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 9,907_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,913 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 9,997_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,998 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,016_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,019 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,042_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,043 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,094_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,097 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,290_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,302 | `totalRiseIn` | `function totalRiseIn(` |
| 10,312 | `eraInflation` | `function eraInflation(` |
| 10,323 | `eraGrowth` | `function eraGrowth(` |
| 10,339 | `fmtSigned` | `function fmtSigned(` |
| 10,344 | `regimeArrow` | `function regimeArrow(` |
| 10,350 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,351 | `growthShown` | `function growthShown(` |
| 10,352 | `growthShownCap` | `function growthShownCap(` |
| 10,353 | `regimeState` | `function regimeState(` |
| 10,357 | `phaseClass` | `function phaseClass(` |
| 10,359 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,371 | `cycleViewEl` | `var cycleViewEl =` |
| 10,375 | `tempCard` | `var tempCard =` |
| 10,376 | `placeCharts` | `function placeCharts(` |
| 10,381 | `shownEra` | `var shownEra =` |
| 10,382 | `calendarReset` | `var calendarReset =` |
| 10,383 | `metricPageReset` | `var metricPageReset =` |
| 10,384 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,387 | `topbarBack` | `var topbarBack =` |
| 10,388 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,395_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,396 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,544_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,545 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,563_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,566 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,587_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,593 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,596 | `hubSet` | `function hubSet(` |
| 10,609 | `quarterPopup` | `function quarterPopup(` |
| 10,642 | `hubShowDefault` | `function hubShowDefault(` |
| 10,651 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,657 | `hubShowYear` | `function hubShowYear(` |
| 10,672 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 10,764_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,767 | `tempState` | `var tempState =` |
| 10,770 | `chartLink` | `var chartLink =` |
| 10,790 | `m2Step` | `function m2Step(` |
| 10,793 | `heatStep` | `function heatStep(` |
| 10,797 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 10,984_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,987 | `drawGrowth` | `function drawGrowth(` |
| 11,126 | `wireResize` | `function wireResize(` |
| 11,132 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,144_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,145 | `renderCycleView` | `function renderCycleView(` |
| 11,198 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,209 | `PEER_CARET` | `var PEER_CARET =` |
| 11,210 | `peerList` | `function peerList(` |
| 11,211 | `peerChosen` | `function peerChosen(` |
| 11,212 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,216 | `renderPeerPills` | `function renderPeerPills(` |
| 11,266 | `shownEraModel` | `var shownEraModel =` |
| 11,267 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,269_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,271 | `stripGroupName` | `var stripGroupName =` |
| 11,272 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,318 | `marketStripHtml` | `function marketStripHtml(` |
| 11,359 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,360 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,391_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,392 | `renderCycleList` | `function renderCycleList(` |
| 11,482 | `renderSignsList` | `function renderSignsList(` |
| 11,738 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 12,973_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,974 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,036_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,037 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,070_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,071 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,890–3,893 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 7,790–7,803 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,607–8,620 | `seasonTrackAll` | The season, computed |
| 8,642–8,646 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,444 |
| `desire-range` | 9,609 |
| `hzn-range` | 9,946 |
| `pulse-range` | 9,560 |
| `sheet-marker-deficit` | 12,441 |
| `sheet-metric-gdp` | 12,329 |
| `sheet-metric-households` | 12,475 |
| `sheet-metric-power` | 12,408 |
| `sheet-metric-temp` | 12,279 |
| `sheet-metric-valuation` | 12,516 |
| `sheet-sign-activity` | 12,390 |
| `sheet-sign-desire` | 9,610 |
| `sheet-sign-horizon` | 9,947 |
| `sheet-sign-pulse` | 9,559 |
| `sheet-sign-volume` | 9,583 |
| `sheet-sign-yield` | 9,527 |
| `volume-range` | 9,584 |
| `ylm-range` | 9,655 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,450 |
| `desire-range` | 9,592 |
| `hzn-range` | 9,923 |
| `pulse-range` | 9,537 |
| `sheet-metric-gdp` | 12,330 |
| `sheet-metric-power` | 12,409 |
| `sheet-metric-temp` | 12,280 |
| `sheet-metric-valuation` | 12,517 |
| `volume-range` | 9,564 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 5,798 |
| `sheet-metric-gdp` | 5,799 |
| `sheet-sign-activity` | 5,800 |
| `sheet-metric-power` | 5,801 |
| `sheet-metric-valuation` | 5,803 |
| `sheet-metric-households` | 5,804 |
| `deficit-range` | 5,805 |
| `volume-range` | 5,806 |
| `pulse-range` | 5,807 |
| `hzn-range` | 5,808 |
| `ylm-range` | 5,819 |
| `desire-range` | 5,820 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 189 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 322 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 399 | yearly calendar — one card per year, grouped into five eras |
| 406 | season strip |
| 459 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels \u2026 so if one day |
| 618 | tab bar (app-style segmented navigation) |
| 672 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 700 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 918 | journal (editorial content tab) |
| 924 | content tab: reading companion |
| 982 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,469 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,503 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,513 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,524 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,557 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,737 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,888 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,346 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,394 | hero: yield curve |
| 2,486 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,541 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,645 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,670 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,685 | long cycle (structural layer) |
| 2,726 | indicator grid |
| 2,769 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,786 | info icon + popover (progressive disclosure for longer notes) |
| 2,807 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,902 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (148), which is what the renderers fill:

| Line | id |
|---|---|
| 2,934 | `topbar-back` |
| 2,937 | `topbar-title` |
| 2,938 | `menu-btn` |
| 2,955 | `main` |
| 2,962 | `cycle-view` |
| 2,970 | `cycle-kicker` |
| 2,976 | `cycle-dial` |
| 2,978 | `season-wheel-hub-date` |
| 2,979 | `season-wheel-hub-theme` |
| 2,980 | `season-wheel-hub-detail` |
| 2,988 | `temp-card` |
| 2,990 | `temp-kicker` |
| 2,991 | `temp-sub` |
| 2,994 | `temp-svg` |
| 2,995 | `temp-tooltip` |
| 3,001 | `temp-stats` |
| 3,008 | `growth-card` |
| 3,011 | `growth-kicker` |
| 3,011 | `growth-phase` |
| 3,011 | `growth-sub` |
| 3,011 | `growth-peers` |
| 3,012 | `growth-svg` |
| 3,012 | `growth-tooltip` |
| 3,017 | `growth-stats` |
| 3,026 | `today-analysis` |
| 3,030 | `peek-row` |
| 3,034 | `sheet-metric-temp` |
| 3,035 | `temp-timing` |
| 3,036 | `temp-chart` |
| 3,038 | `temp-rangebar` |
| 3,040 | `temp-head` |
| 3,041 | `slot-temp` |
| 3,042 | `temp-history` |
| 3,043 | `temp-hist-tooltip` |
| 3,046 | `temp-trend` |
| 3,049 | `temp-panel` |
| 3,051 | `temp-highlights` |
| 3,054 | `sheet-metric-gdp` |
| 3,055 | `gdp-timing` |
| 3,056 | `gdp-chart` |
| 3,057 | `gdp-rangebar` |
| 3,059 | `gdp-head` |
| 3,060 | `slot-growth` |
| 3,061 | `gdp-history` |
| 3,062 | `gdp-hist-tooltip` |
| 3,063 | `gdp-yoy` |
| 3,073 | `gdp-trend` |
| 3,075 | `gdp-panel` |
| 3,080 | `subj-ring-gdp` |
| 3,082 | `subj-label-gdp` |
| 3,083 | `subj-value-gdp` |
| 3,084 | `subj-say-gdp` |
| 3,085 | `subj-spark-gdp` |
| 3,090 | `subj-ctx-gdp` |
| 3,093 | `gdp-highlights` |
| 3,101 | `sheet-metric-power` |
| 3,102 | `power-timing` |
| 3,103 | `power-head` |
| 3,104 | `power-chart` |
| 3,108 | `subj-ring-resilience` |
| 3,111 | `subj-value-resilience` |
| 3,112 | `subj-say-resilience` |
| 3,117 | `subj-ctx-resilience` |
| 3,121 | `longcycle-title` |
| 3,123 | `longcycle-tag` |
| 3,137 | `power-highlights` |
| 3,144 | `sheet-marker-deficit` |
| 3,150 | `sheet-metric-households` |
| 3,151 | `households-timing` |
| 3,152 | `households-chart` |
| 3,153 | `households-highlights` |
| 3,157 | `sheet-metric-valuation` |
| 3,158 | `valuation-timing` |
| 3,159 | `valuation-head` |
| 3,160 | `valuation-chart` |
| 3,164 | `subj-ring-valuation` |
| 3,167 | `subj-value-valuation` |
| 3,168 | `subj-say-valuation` |
| 3,173 | `subj-ctx-valuation` |
| 3,177 | `valuation-title` |
| 3,179 | `valuation-tag` |
| 3,186 | `valuation-highlights` |
| 3,192 | `subj-ring-yield` |
| 3,195 | `subj-value-yield` |
| 3,196 | `subj-say-yield` |
| 3,197 | `subj-spark-yield` |
| 3,228 | `ylm-series` |
| 3,233 | `ylm-head` |
| 3,234 | `ylm-shell` |
| 3,235 | `ylm-svg` |
| 3,236 | `ylm-tooltip` |
| 3,239 | `ylm-zone-legend` |
| 3,244 | `ylm-trend` |
| 3,247 | `pressure-insights` |
| 3,248 | `pressure-highlights` |
| 3,274 | `subj-value-horizon` |
| 3,275 | `subj-say-horizon` |
| 3,276 | `subj-spark-horizon` |
| 3,286 | `hzn-timeline` |
| 3,288 | `hzn-head` |
| 3,289 | `spread-history-shell` |
| 3,290 | `spread-history-svg` |
| 3,291 | `spread-history-tooltip` |
| 3,294 | `hzn-zone-legend` |
| 3,299 | `hzn-trend` |
| 3,301 | `hzn-panel` |
| 3,303 | `horizon-insights` |
| 3,304 | `horizon-highlights` |
| 3,311 | `subj-ring-sentiment` |
| 3,314 | `subj-value-sentiment` |
| 3,315 | `subj-say-sentiment` |
| 3,316 | `subj-spark-sentiment` |
| 3,328 | `curve-gauge` |
| 3,329 | `curve-vix` |
| 3,330 | `curve-highlights` |
| 3,344 | `signs-list` |
| 3,355 | `calendar-list` |
| 3,360 | `indicators-peek` |
| 3,406 | `cycle-list` |
| 3,412 | `cycle-more` |
| 3,413 | `cycle-more-label` |
| 3,422 | `calendar-cycle` |
| 3,423 | `calendar-cycle-slot` |
| 3,474 | `seasons-kicker` |
| 3,475 | `seasons-rows` |
| 3,479 | `framework-kicker` |
| 3,481 | `framework-rows` |
| 3,488 | `more-menu` |
| 3,491 | `menu-back` |
| 3,505 | `sources-open` |
| 3,513 | `appearance-current` |
| 3,521 | `sheet-howto` |
| 3,565 | `sheet-book` |
| 3,597 | `sheet-appearance` |
| 3,605 | `theme-toggle` |
| 3,612 | `sheet-contact` |
| 3,621 | `contact-form` |
| 3,622 | `contact-title` |
| 3,623 | `contact-message` |
| 3,625 | `contact-hint` |
| 3,626 | `contact-send` |
| 3,635 | `sheet-sources` |
| 3,638 | `sources-back` |
| 3,645 | `asof-text` |
| 3,646 | `sources-groups` |
| 3,653 | `detail-backdrop` |
| 3,655 | `detail-modal-close` |
| 3,656 | `detail-modal-body` |

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

