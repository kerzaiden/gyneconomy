# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,492 lines**, about 1103 KB, roughly **313 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `9f473ca` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,978 | the whole stylesheet, every token and rule |
| **Markup** | 2,979–3,701 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,702–13,439 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,440–13,492 | </body></html> |

Counts: **245** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,707_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,711 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,712 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,713 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,731 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,735 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,740_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,750 | `wheelMeta` | `var wheelMeta =` |
| 3,761 | `seasonOverride` | `var seasonOverride =` |
| 3,764 | `cycleNowNote` | `var cycleNowNote =` |
| 3,773 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,859 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,904 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,917_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,934 | `LIVE` | `function LIVE(` |
| 3,961 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,969 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,970 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,973_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,004 | `repaintFigureText` | `function repaintFigureText(` |
| 4,012 | `repaintTag` | `function repaintTag(` |
| 4,022 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,047 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,055 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,063 | `REPAINT` | `var REPAINT =` |
| 4,080 | `liveAsOf` | `var liveAsOf =` |
| 4,081 | `fmtAsOf` | `function fmtAsOf(` |
| 4,086 | `applyLive` | `function applyLive(` |
| 4,162 | `repaintPolicy` | `function repaintPolicy(` |
| 4,212 | `GYN` | `var GYN =` |
| 4,232 | `refreshLiveData` | `function refreshLiveData(` |
| 4,273 | `fetchSiteData` | `function fetchSiteData(` |
| 4,303 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,317_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,318 | `yieldCurve` | `var yieldCurve =` |
| 4,331 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,355 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,367 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,395_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,400 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,424 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,448 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,472 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,499 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,524_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,533 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,543 | `uninvLagToday` | `var uninvLagToday =` |
| 4,555 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,568 | `gdpPeers` | `var gdpPeers =` |
| 4,609 | `gdpSrc` | `var gdpSrc =` |
| 4,610 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,615 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,628 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,666_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,688 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,698_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,714 | `stressScoreFor` | `function stressScoreFor(` |
| 4,720 | `stressScore` | `var stressScore =` |
| 4,726 | `powerOf` | `var powerOf =` |
| 4,727 | `powerScore` | `var powerScore =` |
| 4,744 | `stressHistory` | `var stressHistory =` |
| 4,755 | `powerMeter` | `var powerMeter =` |
| 4,757 | `stressNoteFull` | `var stressNoteFull =` |
| 4,789 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,791_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,814 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,815 | `deficitHistory` | `var deficitHistory =` |
| 4,818 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,825 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,827 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,870_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,883 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,896_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,910 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,913 | `timelineSpan` | `function timelineSpan(` |
| 4,919 | `timelineFor` | `function timelineFor(` |
| 4,932 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,938_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,944 | `windowScale` | `function windowScale(` |
| 4,960 | `windowYears` | `function windowYears(` |
| 4,978 | `refName` | `function refName(` |
| 4,985 | `histReadEnsure` | `function histReadEnsure(` |
| 5,024 | `seatBandReading` | `function seatBandReading(` |
| 5,047 | `histReadFill` | `function histReadFill(` |
| 5,170 | `histAxisEnds` | `function histAxisEnds(` |
| 5,181 | `histLegend` | `function histLegend(` |
| 5,260 | `wireHistHover` | `function wireHistHover(` |
| 5,315 | `mWindowFrom` | `function mWindowFrom(` |
| 5,320 | `qWindowFrom` | `function qWindowFrom(` |
| 5,325 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,326 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,328 | `DEF_1983` | `var DEF_1983 =` |
| 5,330 | `defFrom` | `function defFrom(` |
| 5,341 | `deficitChart` | `function deficitChart(` |
| 5,431 | `deficitBlock` | `function deficitBlock(` |
| 5,493 | `buffettHistory` | `var buffettHistory =` |
| 5,523 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,524 | `hyDates` | `var hyDates =` |
| 5,525 | `hyOas` | `var hyOas =` |
| 5,526 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,533 | `hyAt` | `function hyAt(` |
| 5,537 | `hyLabel` | `function hyLabel(` |
| 5,538 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,539 | `hyNum` | `function hyNum(` |
| 5,540 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,550 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,560 | `capeHistory` | `var capeHistory =` |
| 5,562 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,580_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,586 | `sentiment` | `var sentiment =` |
| 5,604 | `valuation` | `var valuation =` |
| 5,641 | `valRow` | `function valRow(` |
| 5,649 | `coincident` | `var coincident =` |
| 5,710 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,728 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,729 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,730 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,732_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,745 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,746 | `m2vHistory` | `var m2vHistory =` |
| 5,766 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,859 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,949 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,950 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 5,990_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,996 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,997 | `DOTS` | `var DOTS =` |
| 5,999 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,024 | `histHead` | `function histHead(` |
| 6,045 | `headNoteIdx` | `var headNoteIdx =` |
| 6,046 | `headMenuHtml` | `function headMenuHtml(` |
| 6,066 | `headMenuFor` | `var headMenuFor =` |
| 6,067 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,093 | `nameWithMark` | `function nameWithMark(` |
| 6,099 | `panelRow` | `function panelRow(` |
| 6,125 | `panelFromMeter` | `function panelFromMeter(` |
| 6,139 | `meterFlagged` | `function meterFlagged(` |
| 6,150 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,178 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,192 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,211 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,230 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,244 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,269 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,300 | `desireBlock` | `function desireBlock(` |
| 6,327 | `volumeBlock` | `function volumeBlock(` |
| 6,352 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,375 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,383_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,396 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,397 | `m2Level` | `var m2Level =` |
| 6,419 | `m2Yoy` | `var m2Yoy =` |
| 6,420 | `M2_NORM` | `var M2_NORM =` |
| 6,425 | `volumeVerdict` | `function volumeVerdict(` |
| 6,462 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,463 | `unempHistory` | `var unempHistory =` |
| 6,469 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,484 | `NROU_NOW` | `var NROU_NOW =` |
| 6,485 | `unempState` | `function unempState(` |
| 6,491 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,551 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,552 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,555 | `qAtIndex` | `function qAtIndex(` |
| 6,556 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,564_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,579 | `householdsChart` | `function householdsChart(` |
| 6,652 | `lastChartAvg` | `var lastChartAvg =` |
| 6,653 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,738 | `GDP_NORM` | `var GDP_NORM =` |
| 6,744 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,745 | `gdpNowQ` | `var gdpNowQ =` |
| 6,746 | `gdpMeter` | `var gdpMeter =` |
| 6,749 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,771 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,837 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,901 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,909 | `velocityVerdict` | `function velocityVerdict(` |
| 6,917 | `derivePulseTag` | `function derivePulseTag(` |
| 6,923 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,983_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,992 | `seasonReading` | `var seasonReading =` |
| 7,041 | `frameworkRows` | `var frameworkRows =` |
| 7,051 | `vixRow` | `var vixRow =` |
| 7,059 | `vixWordOf` | `var vixWordOf =` |
| 7,063 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,078_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,082 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,091_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,092 | `calendarTodayY` | `var calendarTodayY =` |
| 7,123 | `vix3mClose` | `var vix3mClose =` |
| 7,124 | `fearCurve` | `function fearCurve(` |
| 7,131 | `curveVerdict` | `function curveVerdict(` |
| 7,138 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,143 | `valuationVerdict` | `function valuationVerdict(` |
| 7,161 | `sparkHtml` | `function sparkHtml(` |
| 7,180 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,186_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,199 | `modeBar` | `function modeBar(` |
| 7,214 | `pickerOpen` | `var pickerOpen =` |
| 7,218 | `cycleByName` | `function cycleByName(` |
| 7,222 | `openCycle` | `function openCycle(` |
| 7,228 | `cycleSlice` | `function cycleSlice(` |
| 7,237 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,245 | `cycleMonths` | `function cycleMonths(` |
| 7,264 | `histControls` | `function histControls(` |
| 7,278 | `cycLabel` | `function cycLabel(` |
| 7,294 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,303 | `cyclePicker` | `function cyclePicker(` |
| 7,327 | `seriesBar` | `function seriesBar(` |
| 7,334 | `rangeBar` | `function rangeBar(` |
| 7,346 | `trendOf` | `function trendOf(` |
| 7,391 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,401 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,416_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,417 | `yearOf` | `function yearOf(` |
| 7,418 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,419_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,449 | `totalStat` | `function totalStat(` |
| 7,455 | `atQuarter` | `function atQuarter(` |
| 7,456 | `atMonth` | `function atMonth(` |
| 7,457 | `cycleAverages` | `function cycleAverages(` |
| 7,464 | `ordinal` | `function ordinal(` |
| 7,465 | `hiCard` | `function hiCard(` |
| 7,476 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,490_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,497 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,513 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,520 | `moreRow` | `function moreRow(` |
| 7,526 | `powerPageNote` | `var powerPageNote =` |
| 7,527 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,533_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,536 | `xLabelOf` | `function xLabelOf(` |
| 7,556 | `fitGroup` | `function fitGroup(` |
| 7,578 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,637_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,661 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,671 | `vGrid` | `function vGrid(` |
| 7,696 | `COL_FILL` | `var COL_FILL =` |
| 7,728 | `AXIS` | `var AXIS =` |
| 7,729 | `chartAxes` | `function chartAxes(` |
| 7,775 | `divergeChart` | `function divergeChart(` |
| 7,836 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,865_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,873 | `maxIn` | `function maxIn(` |
| 7,886 | `reserveGauge` | `function reserveGauge(` |
| 7,907 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,921 | `PEEK_W` | `var PEEK_W =` |
| 7,924 | `PEEK_H` | `var PEEK_H =` |
| 7,925 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,930 | `colPeek` | `function colPeek(` |
| 7,957 | `meterPeek` | `function meterPeek(` |
| 7,974 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,979 | `pressureZone` | `function pressureZone(` |
| 7,994 | `HZN_BACK` | `var HZN_BACK =` |
| 7,995 | `hznLast` | `function hznLast(` |
| 7,996 | `hznBack` | `function hznBack(` |
| 7,997 | `horizonWord` | `function horizonWord(` |
| 8,022 | `HZN_METERS` | `var HZN_METERS =` |
| 8,030 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,054 | `_hznPanel` | `var _hznPanel =` |
| 8,055 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,075 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,076 | `levelZone` | `function levelZone(` |
| 8,088 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,093 | `RISK_RISK` | `var RISK_RISK =` |
| 8,098 | `riskCell` | `function riskCell(` |
| 8,099 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,130 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,155_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,174 | `pulseClipN` | `var pulseClipN =` |
| 8,175 | `beatPath` | `function beatPath(` |
| 8,200 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,214 | `pulsePeek` | `function pulsePeek(` |
| 8,222 | `pulseBlock` | `function pulseBlock(` |
| 8,242 | `CHEV` | `var CHEV =` |
| 8,244 | `peekCard` | `function peekCard(` |
| 8,295 | `dropSvg` | `function dropSvg(` |
| 8,303 | `speakerSvg` | `function speakerSvg(` |
| 8,311 | `gaugeSvg` | `function gaugeSvg(` |
| 8,315 | `diamondSvg` | `function diamondSvg(` |
| 8,327 | `energyFromReserve` | `function energyFromReserve(` |
| 8,339 | `sproutSvg` | `function sproutSvg(` |
| 8,350 | `markSvg` | `function markSvg(` |
| 8,354 | `flameSvg` | `function flameSvg(` |
| 8,358 | `gearSvg` | `function gearSvg(` |
| 8,371 | `pulseSvg` | `function pulseSvg(` |
| 8,375 | `thermoSvg` | `function thermoSvg(` |
| 8,394 | `trendUpSvg` | `function trendUpSvg(` |
| 8,396 | `ecgSvg` | `function ecgSvg(` |
| 8,410 | `circulationSvg` | `function circulationSvg(` |
| 8,411 | `weatherSvg` | `function weatherSvg(` |
| 8,432 | `moodSvg` | `function moodSvg(` |
| 8,449 | `boltSvg` | `function boltSvg(` |
| 8,452 | `houseSvg` | `function houseSvg(` |
| 8,460 | `sunriseSvg` | `function sunriseSvg(` |
| 8,470 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,482 | `signMarks` | `var signMarks =` |
| 8,489 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,506_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,527 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,528 | `dsrHistory` | `var dsrHistory =` |
| 8,529 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,530 | `savHistory` | `var savHistory =` |
| 8,535 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,545 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,546 | `dsrNow` | `var dsrNow =` |
| 8,547 | `savNow` | `var savNow =` |
| 8,548 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,553 | `householdsWord` | `function householdsWord(` |
| 8,560 | `householdsNow` | `var householdsNow =` |
| 8,567 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,568 | `dsrMeter` | `var dsrMeter =` |
| 8,571 | `savMeter` | `var savMeter =` |
| 8,574 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,591 | `savInfoHtml` | `function savInfoHtml(` |
| 8,609 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,618 | `curveNow` | `var curveNow =` |
| 8,619 | `curveTag` | `var curveTag =` |
| 8,620 | `curveSub` | `var curveSub =` |
| 8,624 | `curvePct` | `function curvePct(` |
| 8,625 | `curveNoteFull` | `var curveNoteFull =` |
| 8,640 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,648 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,689 | `marketCycles` | `var marketCycles =` |
| 8,719 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,721_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,742 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,743 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,748_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,769 | `slopeOf` | `function slopeOf(` |
| 8,780 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,786 | `readSeason` | `function readSeason(` |
| 8,811 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,813 | `qLabel` | `function qLabel(` |
| 8,837 | `regimeTrack` | `function regimeTrack(` |
| 8,860 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,862_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,869 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,870 | `seasonTitle` | `function seasonTitle(` |
| 8,871 | `monthLabel` | `function monthLabel(` |
| 8,872 | `cycleModel` | `function cycleModel(` |
| 8,924 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,932 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,939 | `nowModel` | `var nowModel =` |
| 8,940 | `readingNow` | `var readingNow =` |
| 8,941 | `cpiNow` | `var cpiNow =` |
| 8,942 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,943 | `currentSeason` | `var currentSeason =` |
| 8,944 | `seasonWhy` | `var seasonWhy =` |
| 8,961 | `seasonGroup` | `function seasonGroup(` |
| 8,975 | `arcGauge` | `function arcGauge(` |
| 9,014 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,027 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,029 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,033 | `policyFacts` | `function policyFacts(` |
| 9,045 | `allSources` | `var allSources =` |
| 9,069 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,102_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,105 | `SVG_NS` | `var SVG_NS =` |
| 9,106 | `svgEl` | `function svgEl(` |
| 9,119 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,155_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,156 | `clampPct` | `function clampPct(` |
| 9,163 | `infoIcon` | `function infoIcon(` |
| 9,172 | `detailTexts` | `var detailTexts =` |
| 9,190 | `detailSlots` | `var detailSlots =` |
| 9,191 | `detailSlot` | `function detailSlot(` |
| 9,202 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,206 | `_growthPanel` | `var _growthPanel =` |
| 9,207 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,213 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,224 | `facts` | `function facts(` |
| 9,225 | `factsFrom` | `function factsFrom(` |
| 9,229 | `expandBtn` | `function expandBtn(` |
| 9,235 | `sheetRenderers` | `var sheetRenderers =` |
| 9,252 | `pageMode` | `var pageMode =` |
| 9,259 | `pageCycles` | `var pageCycles =` |
| 9,264 | `pageRange` | `var pageRange =` |
| 9,270 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,304_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,315 | `meterHtml` | `function meterHtml(` |
| 9,343 | `srcHtml` | `function srcHtml(` |
| 9,352 | `TIMING` | `var TIMING =` |
| 9,358 | `timingMark` | `function timingMark(` |
| 9,372 | `timingPill` | `function timingPill(` |
| 9,393 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,401 | `seatPageFoot` | `function seatPageFoot(` |
| 9,424 | `timingMembers` | `var timingMembers =` |
| 9,425 | `registerTiming` | `function registerTiming(` |
| 9,431 | `headHtml` | `function headHtml(` |
| 9,449 | `heldHighlights` | `var heldHighlights =` |
| 9,450 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,508_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,509 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,882_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,883 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,105_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,106 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,138_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,144 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,228_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,229 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,247_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,250 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,273_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,274 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,325_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,328 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,521_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,533 | `totalRiseIn` | `function totalRiseIn(` |
| 10,543 | `eraInflation` | `function eraInflation(` |
| 10,554 | `eraGrowth` | `function eraGrowth(` |
| 10,570 | `fmtSigned` | `function fmtSigned(` |
| 10,575 | `regimeArrow` | `function regimeArrow(` |
| 10,581 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,582 | `growthShown` | `function growthShown(` |
| 10,583 | `growthShownCap` | `function growthShownCap(` |
| 10,584 | `regimeState` | `function regimeState(` |
| 10,588 | `phaseClass` | `function phaseClass(` |
| 10,590 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,602 | `cycleViewEl` | `var cycleViewEl =` |
| 10,606 | `tempCard` | `var tempCard =` |
| 10,607 | `placeCharts` | `function placeCharts(` |
| 10,612 | `shownEra` | `var shownEra =` |
| 10,613 | `calendarReset` | `var calendarReset =` |
| 10,614 | `metricPageReset` | `var metricPageReset =` |
| 10,615 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,618 | `topbarBack` | `var topbarBack =` |
| 10,619 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,626_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,627 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,788_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,789 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,807_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,810 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,831_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,837 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,840 | `hubSet` | `function hubSet(` |
| 10,853 | `quarterPopup` | `function quarterPopup(` |
| 10,886 | `hubShowDefault` | `function hubShowDefault(` |
| 10,895 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,901 | `hubShowYear` | `function hubShowYear(` |
| 10,916 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,008_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,011 | `tempState` | `var tempState =` |
| 11,014 | `chartLink` | `var chartLink =` |
| 11,034 | `m2Step` | `function m2Step(` |
| 11,037 | `heatStep` | `function heatStep(` |
| 11,041 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,228_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,231 | `drawGrowth` | `function drawGrowth(` |
| 11,370 | `wireResize` | `function wireResize(` |
| 11,376 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,388_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,389 | `renderCycleView` | `function renderCycleView(` |
| 11,442 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,453 | `PEER_CARET` | `var PEER_CARET =` |
| 11,454 | `peerList` | `function peerList(` |
| 11,455 | `peerChosen` | `function peerChosen(` |
| 11,456 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,460 | `renderPeerPills` | `function renderPeerPills(` |
| 11,510 | `shownEraModel` | `var shownEraModel =` |
| 11,511 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,513_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,515 | `stripGroupName` | `var stripGroupName =` |
| 11,516 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,562 | `marketStripHtml` | `function marketStripHtml(` |
| 11,625 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,626 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,656_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,657 | `renderCycleList` | `function renderCycleList(` |
| 11,747 | `renderSignsList` | `function renderSignsList(` |
| 12,003 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,238_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,239 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,301_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,302 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,335_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,336 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,930–3,933 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,003–8,016 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,820–8,833 | `seasonTrackAll` | The season, computed |
| 8,855–8,859 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,709 |
| `desire-range` | 9,828 |
| `hzn-range` | 10,177 |
| `pulse-range` | 9,779 |
| `sheet-marker-deficit` | 12,706 |
| `sheet-metric-gdp` | 12,594 |
| `sheet-metric-households` | 12,740 |
| `sheet-metric-power` | 12,673 |
| `sheet-metric-temp` | 12,544 |
| `sheet-metric-valuation` | 12,781 |
| `sheet-sign-activity` | 12,655 |
| `sheet-sign-desire` | 9,829 |
| `sheet-sign-horizon` | 10,178 |
| `sheet-sign-pulse` | 9,778 |
| `sheet-sign-volume` | 9,802 |
| `sheet-sign-yield` | 9,746 |
| `volume-range` | 9,803 |
| `ylm-range` | 9,874 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,715 |
| `desire-range` | 9,811 |
| `hzn-range` | 10,154 |
| `pulse-range` | 9,756 |
| `sheet-metric-gdp` | 12,595 |
| `sheet-metric-power` | 12,674 |
| `sheet-metric-temp` | 12,545 |
| `sheet-metric-valuation` | 12,782 |
| `volume-range` | 9,783 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,000 |
| `sheet-metric-gdp` | 6,001 |
| `sheet-sign-activity` | 6,002 |
| `sheet-metric-power` | 6,003 |
| `sheet-metric-valuation` | 6,005 |
| `sheet-metric-households` | 6,006 |
| `deficit-range` | 6,007 |
| `volume-range` | 6,008 |
| `pulse-range` | 6,009 |
| `hzn-range` | 6,010 |
| `ylm-range` | 6,021 |
| `desire-range` | 6,022 |

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
| 721 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 944 | journal (editorial content tab) |
| 950 | content tab: reading companion |
| 1,008 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,500 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,534 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,544 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,555 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,588 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,764 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,914 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,376 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,424 | hero: yield curve |
| 2,520 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,596 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,695 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,720 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,735 | long cycle (structural layer) |
| 2,776 | indicator grid |
| 2,819 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,836 | info icon + popover (progressive disclosure for longer notes) |
| 2,857 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,952 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (146), which is what the renderers fill:

| Line | id |
|---|---|
| 2,984 | `topbar-back` |
| 2,987 | `topbar-title` |
| 2,988 | `menu-btn` |
| 3,005 | `main` |
| 3,012 | `cycle-view` |
| 3,020 | `cycle-kicker` |
| 3,026 | `cycle-dial` |
| 3,028 | `season-wheel-hub-date` |
| 3,029 | `season-wheel-hub-theme` |
| 3,030 | `season-wheel-hub-detail` |
| 3,038 | `temp-card` |
| 3,040 | `temp-kicker` |
| 3,041 | `temp-sub` |
| 3,044 | `temp-svg` |
| 3,045 | `temp-tooltip` |
| 3,051 | `temp-stats` |
| 3,058 | `growth-card` |
| 3,061 | `growth-kicker` |
| 3,061 | `growth-phase` |
| 3,061 | `growth-sub` |
| 3,061 | `growth-peers` |
| 3,062 | `growth-svg` |
| 3,062 | `growth-tooltip` |
| 3,067 | `growth-stats` |
| 3,076 | `today-analysis` |
| 3,080 | `peek-row` |
| 3,084 | `sheet-metric-temp` |
| 3,085 | `temp-timing` |
| 3,086 | `temp-chart` |
| 3,088 | `temp-rangebar` |
| 3,090 | `temp-head` |
| 3,091 | `slot-temp` |
| 3,092 | `temp-history` |
| 3,093 | `temp-hist-tooltip` |
| 3,096 | `temp-trend` |
| 3,099 | `temp-panel` |
| 3,101 | `temp-highlights` |
| 3,104 | `sheet-metric-gdp` |
| 3,105 | `gdp-timing` |
| 3,106 | `gdp-chart` |
| 3,107 | `gdp-rangebar` |
| 3,109 | `gdp-head` |
| 3,110 | `slot-growth` |
| 3,111 | `gdp-history` |
| 3,112 | `gdp-hist-tooltip` |
| 3,113 | `gdp-yoy` |
| 3,123 | `gdp-trend` |
| 3,125 | `gdp-panel` |
| 3,130 | `subj-ring-gdp` |
| 3,132 | `subj-label-gdp` |
| 3,133 | `subj-value-gdp` |
| 3,134 | `subj-say-gdp` |
| 3,135 | `subj-spark-gdp` |
| 3,140 | `subj-ctx-gdp` |
| 3,143 | `gdp-highlights` |
| 3,151 | `sheet-metric-power` |
| 3,152 | `power-timing` |
| 3,153 | `power-head` |
| 3,154 | `power-chart` |
| 3,158 | `subj-ring-resilience` |
| 3,161 | `subj-value-resilience` |
| 3,162 | `subj-say-resilience` |
| 3,167 | `subj-ctx-resilience` |
| 3,171 | `longcycle-title` |
| 3,173 | `longcycle-tag` |
| 3,187 | `power-highlights` |
| 3,194 | `sheet-marker-deficit` |
| 3,200 | `sheet-metric-households` |
| 3,201 | `households-timing` |
| 3,202 | `households-chart` |
| 3,203 | `households-highlights` |
| 3,207 | `sheet-metric-valuation` |
| 3,208 | `valuation-timing` |
| 3,209 | `valuation-head` |
| 3,210 | `valuation-chart` |
| 3,214 | `subj-ring-valuation` |
| 3,217 | `subj-value-valuation` |
| 3,218 | `subj-say-valuation` |
| 3,223 | `subj-ctx-valuation` |
| 3,227 | `valuation-title` |
| 3,229 | `valuation-tag` |
| 3,236 | `valuation-highlights` |
| 3,242 | `subj-ring-yield` |
| 3,245 | `subj-value-yield` |
| 3,246 | `subj-say-yield` |
| 3,247 | `subj-spark-yield` |
| 3,278 | `ylm-series` |
| 3,283 | `ylm-head` |
| 3,284 | `ylm-shell` |
| 3,285 | `ylm-svg` |
| 3,286 | `ylm-tooltip` |
| 3,289 | `ylm-trend` |
| 3,292 | `pressure-insights` |
| 3,293 | `pressure-highlights` |
| 3,319 | `subj-value-horizon` |
| 3,320 | `subj-say-horizon` |
| 3,321 | `subj-spark-horizon` |
| 3,331 | `hzn-timeline` |
| 3,333 | `hzn-head` |
| 3,334 | `spread-history-shell` |
| 3,335 | `spread-history-svg` |
| 3,336 | `spread-history-tooltip` |
| 3,339 | `hzn-trend` |
| 3,341 | `hzn-panel` |
| 3,343 | `horizon-insights` |
| 3,344 | `horizon-highlights` |
| 3,351 | `subj-ring-sentiment` |
| 3,354 | `subj-value-sentiment` |
| 3,355 | `subj-say-sentiment` |
| 3,356 | `subj-spark-sentiment` |
| 3,368 | `curve-gauge` |
| 3,369 | `curve-vix` |
| 3,370 | `curve-highlights` |
| 3,384 | `signs-list` |
| 3,395 | `calendar-list` |
| 3,400 | `indicators-peek` |
| 3,446 | `cycle-list` |
| 3,452 | `cycle-more` |
| 3,453 | `cycle-more-label` |
| 3,462 | `calendar-cycle` |
| 3,463 | `calendar-cycle-slot` |
| 3,514 | `seasons-kicker` |
| 3,515 | `seasons-rows` |
| 3,519 | `framework-kicker` |
| 3,521 | `framework-rows` |
| 3,528 | `more-menu` |
| 3,531 | `menu-back` |
| 3,545 | `sources-open` |
| 3,553 | `appearance-current` |
| 3,561 | `sheet-howto` |
| 3,605 | `sheet-book` |
| 3,637 | `sheet-appearance` |
| 3,645 | `theme-toggle` |
| 3,652 | `sheet-contact` |
| 3,661 | `contact-form` |
| 3,662 | `contact-title` |
| 3,663 | `contact-message` |
| 3,665 | `contact-hint` |
| 3,666 | `contact-send` |
| 3,675 | `sheet-sources` |
| 3,678 | `sources-back` |
| 3,685 | `asof-text` |
| 3,686 | `sources-groups` |
| 3,693 | `detail-backdrop` |
| 3,695 | `detail-modal-close` |
| 3,696 | `detail-modal-body` |

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

