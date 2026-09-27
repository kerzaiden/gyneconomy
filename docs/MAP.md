# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,485 lines**, about 1101 KB, roughly **313 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `3b43fc0` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,983 | the whole stylesheet, every token and rule |
| **Markup** | 2,984–3,716 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,717–13,432 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,433–13,485 | </body></html> |

Counts: **245** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,722_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,726 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,727 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,728 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,746 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,750 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,755_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,765 | `wheelMeta` | `var wheelMeta =` |
| 3,776 | `seasonOverride` | `var seasonOverride =` |
| 3,779 | `cycleNowNote` | `var cycleNowNote =` |
| 3,788 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,874 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,919 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,932_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,949 | `LIVE` | `function LIVE(` |
| 3,976 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,984 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,985 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,988_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,019 | `repaintFigureText` | `function repaintFigureText(` |
| 4,027 | `repaintTag` | `function repaintTag(` |
| 4,037 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,062 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,070 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,078 | `REPAINT` | `var REPAINT =` |
| 4,095 | `liveAsOf` | `var liveAsOf =` |
| 4,096 | `fmtAsOf` | `function fmtAsOf(` |
| 4,101 | `applyLive` | `function applyLive(` |
| 4,177 | `repaintPolicy` | `function repaintPolicy(` |
| 4,227 | `GYN` | `var GYN =` |
| 4,247 | `refreshLiveData` | `function refreshLiveData(` |
| 4,288 | `fetchSiteData` | `function fetchSiteData(` |
| 4,318 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,332_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,333 | `yieldCurve` | `var yieldCurve =` |
| 4,346 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,370 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,377 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,383 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,410 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,412_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,417 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,441 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,465 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,489 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,516 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,541_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,550 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,560 | `uninvLagToday` | `var uninvLagToday =` |
| 4,572 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,585 | `gdpPeers` | `var gdpPeers =` |
| 4,626 | `gdpSrc` | `var gdpSrc =` |
| 4,627 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,632 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,645 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,683_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,705 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,715_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,731 | `stressScoreFor` | `function stressScoreFor(` |
| 4,737 | `stressScore` | `var stressScore =` |
| 4,743 | `powerOf` | `var powerOf =` |
| 4,744 | `powerScore` | `var powerScore =` |
| 4,761 | `stressHistory` | `var stressHistory =` |
| 4,772 | `powerMeter` | `var powerMeter =` |
| 4,774 | `stressNoteFull` | `var stressNoteFull =` |
| 4,806 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,808_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,831 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,832 | `deficitHistory` | `var deficitHistory =` |
| 4,835 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,842 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,844 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,887_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,900 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,913_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,927 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,930 | `timelineSpan` | `function timelineSpan(` |
| 4,936 | `timelineFor` | `function timelineFor(` |
| 4,949 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,955_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,961 | `windowScale` | `function windowScale(` |
| 4,977 | `windowYears` | `function windowYears(` |
| 4,995 | `refName` | `function refName(` |
| 5,002 | `histReadEnsure` | `function histReadEnsure(` |
| 5,041 | `seatBandReading` | `function seatBandReading(` |
| 5,064 | `histReadFill` | `function histReadFill(` |
| 5,187 | `histAxisEnds` | `function histAxisEnds(` |
| 5,198 | `histLegend` | `function histLegend(` |
| 5,271 | `wireHistHover` | `function wireHistHover(` |
| 5,326 | `mWindowFrom` | `function mWindowFrom(` |
| 5,331 | `qWindowFrom` | `function qWindowFrom(` |
| 5,336 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,337 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,339 | `DEF_1983` | `var DEF_1983 =` |
| 5,341 | `defFrom` | `function defFrom(` |
| 5,352 | `deficitChart` | `function deficitChart(` |
| 5,442 | `deficitBlock` | `function deficitBlock(` |
| 5,504 | `buffettHistory` | `var buffettHistory =` |
| 5,534 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,535 | `hyDates` | `var hyDates =` |
| 5,536 | `hyOas` | `var hyOas =` |
| 5,537 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,544 | `hyAt` | `function hyAt(` |
| 5,548 | `hyLabel` | `function hyLabel(` |
| 5,549 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,550 | `hyNum` | `function hyNum(` |
| 5,551 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,561 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,571 | `capeHistory` | `var capeHistory =` |
| 5,573 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,591_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,597 | `sentiment` | `var sentiment =` |
| 5,615 | `valuation` | `var valuation =` |
| 5,652 | `valRow` | `function valRow(` |
| 5,660 | `coincident` | `var coincident =` |
| 5,721 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,739 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,740 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,741 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,743_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,756 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,757 | `m2vHistory` | `var m2vHistory =` |
| 5,777 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,870 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,960 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,961 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,001_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,007 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,008 | `DOTS` | `var DOTS =` |
| 6,010 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,035 | `histHead` | `function histHead(` |
| 6,056 | `headNoteIdx` | `var headNoteIdx =` |
| 6,057 | `headMenuHtml` | `function headMenuHtml(` |
| 6,077 | `headMenuFor` | `var headMenuFor =` |
| 6,078 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,104 | `nameWithMark` | `function nameWithMark(` |
| 6,110 | `panelRow` | `function panelRow(` |
| 6,136 | `panelFromMeter` | `function panelFromMeter(` |
| 6,150 | `meterFlagged` | `function meterFlagged(` |
| 6,161 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,189 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,203 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,222 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,241 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,255 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,280 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,311 | `desireBlock` | `function desireBlock(` |
| 6,338 | `volumeBlock` | `function volumeBlock(` |
| 6,363 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,386 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,394_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,407 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,408 | `m2Level` | `var m2Level =` |
| 6,430 | `m2Yoy` | `var m2Yoy =` |
| 6,431 | `M2_NORM` | `var M2_NORM =` |
| 6,436 | `volumeVerdict` | `function volumeVerdict(` |
| 6,473 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,474 | `unempHistory` | `var unempHistory =` |
| 6,480 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,495 | `NROU_NOW` | `var NROU_NOW =` |
| 6,496 | `unempState` | `function unempState(` |
| 6,502 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,562 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,563 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,566 | `qAtIndex` | `function qAtIndex(` |
| 6,567 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,575_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,590 | `householdsChart` | `function householdsChart(` |
| 6,663 | `lastChartAvg` | `var lastChartAvg =` |
| 6,664 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,749 | `GDP_NORM` | `var GDP_NORM =` |
| 6,755 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,756 | `gdpNowQ` | `var gdpNowQ =` |
| 6,757 | `gdpMeter` | `var gdpMeter =` |
| 6,760 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,782 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,848 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,912 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,920 | `velocityVerdict` | `function velocityVerdict(` |
| 6,928 | `derivePulseTag` | `function derivePulseTag(` |
| 6,934 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,994_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,003 | `seasonReading` | `var seasonReading =` |
| 7,052 | `frameworkRows` | `var frameworkRows =` |
| 7,062 | `vixRow` | `var vixRow =` |
| 7,070 | `vixWordOf` | `var vixWordOf =` |
| 7,074 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,089_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,093 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,102_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,103 | `calendarTodayY` | `var calendarTodayY =` |
| 7,134 | `vix3mClose` | `var vix3mClose =` |
| 7,135 | `fearCurve` | `function fearCurve(` |
| 7,142 | `curveVerdict` | `function curveVerdict(` |
| 7,149 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,154 | `valuationVerdict` | `function valuationVerdict(` |
| 7,172 | `sparkHtml` | `function sparkHtml(` |
| 7,191 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,197_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,210 | `modeBar` | `function modeBar(` |
| 7,225 | `pickerOpen` | `var pickerOpen =` |
| 7,229 | `cycleByName` | `function cycleByName(` |
| 7,233 | `openCycle` | `function openCycle(` |
| 7,239 | `cycleSlice` | `function cycleSlice(` |
| 7,248 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,256 | `cycleMonths` | `function cycleMonths(` |
| 7,275 | `histControls` | `function histControls(` |
| 7,289 | `cycLabel` | `function cycLabel(` |
| 7,305 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,314 | `cyclePicker` | `function cyclePicker(` |
| 7,338 | `seriesBar` | `function seriesBar(` |
| 7,345 | `rangeBar` | `function rangeBar(` |
| 7,357 | `trendOf` | `function trendOf(` |
| 7,402 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,412 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,427_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,428 | `yearOf` | `function yearOf(` |
| 7,429 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,430_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,460 | `totalStat` | `function totalStat(` |
| 7,466 | `atQuarter` | `function atQuarter(` |
| 7,467 | `atMonth` | `function atMonth(` |
| 7,468 | `cycleAverages` | `function cycleAverages(` |
| 7,475 | `ordinal` | `function ordinal(` |
| 7,476 | `hiCard` | `function hiCard(` |
| 7,487 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,501_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,508 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,524 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,531 | `moreRow` | `function moreRow(` |
| 7,537 | `powerPageNote` | `var powerPageNote =` |
| 7,538 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,544_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,547 | `xLabelOf` | `function xLabelOf(` |
| 7,567 | `fitGroup` | `function fitGroup(` |
| 7,589 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,648_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,672 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,682 | `vGrid` | `function vGrid(` |
| 7,707 | `COL_FILL` | `var COL_FILL =` |
| 7,739 | `AXIS` | `var AXIS =` |
| 7,740 | `chartAxes` | `function chartAxes(` |
| 7,786 | `divergeChart` | `function divergeChart(` |
| 7,847 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,876_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,884 | `maxIn` | `function maxIn(` |
| 7,897 | `reserveGauge` | `function reserveGauge(` |
| 7,918 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,932 | `PEEK_W` | `var PEEK_W =` |
| 7,935 | `PEEK_H` | `var PEEK_H =` |
| 7,936 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,941 | `colPeek` | `function colPeek(` |
| 7,968 | `meterPeek` | `function meterPeek(` |
| 7,985 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,990 | `pressureZone` | `function pressureZone(` |
| 8,005 | `HZN_BACK` | `var HZN_BACK =` |
| 8,006 | `hznLast` | `function hznLast(` |
| 8,007 | `hznBack` | `function hznBack(` |
| 8,008 | `horizonWord` | `function horizonWord(` |
| 8,033 | `HZN_METERS` | `var HZN_METERS =` |
| 8,041 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,065 | `_hznPanel` | `var _hznPanel =` |
| 8,066 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,086 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,087 | `levelZone` | `function levelZone(` |
| 8,099 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,104 | `RISK_RISK` | `var RISK_RISK =` |
| 8,109 | `riskCell` | `function riskCell(` |
| 8,110 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,141 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,166_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,185 | `pulseClipN` | `var pulseClipN =` |
| 8,186 | `beatPath` | `function beatPath(` |
| 8,211 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,225 | `pulsePeek` | `function pulsePeek(` |
| 8,233 | `pulseBlock` | `function pulseBlock(` |
| 8,253 | `CHEV` | `var CHEV =` |
| 8,255 | `peekCard` | `function peekCard(` |
| 8,306 | `dropSvg` | `function dropSvg(` |
| 8,314 | `speakerSvg` | `function speakerSvg(` |
| 8,322 | `gaugeSvg` | `function gaugeSvg(` |
| 8,326 | `diamondSvg` | `function diamondSvg(` |
| 8,338 | `energyFromReserve` | `function energyFromReserve(` |
| 8,350 | `sproutSvg` | `function sproutSvg(` |
| 8,361 | `markSvg` | `function markSvg(` |
| 8,365 | `flameSvg` | `function flameSvg(` |
| 8,369 | `gearSvg` | `function gearSvg(` |
| 8,382 | `pulseSvg` | `function pulseSvg(` |
| 8,386 | `thermoSvg` | `function thermoSvg(` |
| 8,405 | `trendUpSvg` | `function trendUpSvg(` |
| 8,407 | `ecgSvg` | `function ecgSvg(` |
| 8,421 | `circulationSvg` | `function circulationSvg(` |
| 8,422 | `weatherSvg` | `function weatherSvg(` |
| 8,443 | `moodSvg` | `function moodSvg(` |
| 8,460 | `boltSvg` | `function boltSvg(` |
| 8,463 | `houseSvg` | `function houseSvg(` |
| 8,471 | `sunriseSvg` | `function sunriseSvg(` |
| 8,481 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,493 | `signMarks` | `var signMarks =` |
| 8,500 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,517_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,538 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,539 | `dsrHistory` | `var dsrHistory =` |
| 8,540 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,541 | `savHistory` | `var savHistory =` |
| 8,546 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,556 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,557 | `dsrNow` | `var dsrNow =` |
| 8,558 | `savNow` | `var savNow =` |
| 8,559 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,564 | `householdsWord` | `function householdsWord(` |
| 8,571 | `householdsNow` | `var householdsNow =` |
| 8,578 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,579 | `dsrMeter` | `var dsrMeter =` |
| 8,582 | `savMeter` | `var savMeter =` |
| 8,585 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,602 | `savInfoHtml` | `function savInfoHtml(` |
| 8,620 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,629 | `curveNow` | `var curveNow =` |
| 8,630 | `curveTag` | `var curveTag =` |
| 8,631 | `curveSub` | `var curveSub =` |
| 8,635 | `curvePct` | `function curvePct(` |
| 8,636 | `curveNoteFull` | `var curveNoteFull =` |
| 8,651 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,659 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,700 | `marketCycles` | `var marketCycles =` |
| 8,730 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,732_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,753 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,754 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,759_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,780 | `slopeOf` | `function slopeOf(` |
| 8,791 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,797 | `readSeason` | `function readSeason(` |
| 8,822 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,824 | `qLabel` | `function qLabel(` |
| 8,848 | `regimeTrack` | `function regimeTrack(` |
| 8,871 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,873_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,880 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,881 | `seasonTitle` | `function seasonTitle(` |
| 8,882 | `monthLabel` | `function monthLabel(` |
| 8,883 | `cycleModel` | `function cycleModel(` |
| 8,935 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,943 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,950 | `nowModel` | `var nowModel =` |
| 8,951 | `readingNow` | `var readingNow =` |
| 8,952 | `cpiNow` | `var cpiNow =` |
| 8,953 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,954 | `currentSeason` | `var currentSeason =` |
| 8,955 | `seasonWhy` | `var seasonWhy =` |
| 8,972 | `seasonGroup` | `function seasonGroup(` |
| 8,986 | `arcGauge` | `function arcGauge(` |
| 9,025 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,038 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,040 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,044 | `policyFacts` | `function policyFacts(` |
| 9,056 | `allSources` | `var allSources =` |
| 9,080 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,113_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,116 | `SVG_NS` | `var SVG_NS =` |
| 9,117 | `svgEl` | `function svgEl(` |
| 9,130 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,166_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,167 | `clampPct` | `function clampPct(` |
| 9,174 | `infoIcon` | `function infoIcon(` |
| 9,183 | `detailTexts` | `var detailTexts =` |
| 9,201 | `detailSlots` | `var detailSlots =` |
| 9,202 | `detailSlot` | `function detailSlot(` |
| 9,213 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,217 | `_growthPanel` | `var _growthPanel =` |
| 9,218 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,224 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,235 | `facts` | `function facts(` |
| 9,236 | `factsFrom` | `function factsFrom(` |
| 9,240 | `expandBtn` | `function expandBtn(` |
| 9,246 | `sheetRenderers` | `var sheetRenderers =` |
| 9,263 | `pageMode` | `var pageMode =` |
| 9,270 | `pageCycles` | `var pageCycles =` |
| 9,275 | `pageRange` | `var pageRange =` |
| 9,281 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,315_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,326 | `meterHtml` | `function meterHtml(` |
| 9,354 | `srcHtml` | `function srcHtml(` |
| 9,363 | `TIMING` | `var TIMING =` |
| 9,369 | `timingMark` | `function timingMark(` |
| 9,383 | `timingPill` | `function timingPill(` |
| 9,404 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,412 | `seatPageFoot` | `function seatPageFoot(` |
| 9,435 | `timingMembers` | `var timingMembers =` |
| 9,436 | `registerTiming` | `function registerTiming(` |
| 9,442 | `headHtml` | `function headHtml(` |
| 9,460 | `heldHighlights` | `var heldHighlights =` |
| 9,461 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,519_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,520 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,887_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,888 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,098_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,099 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,131_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,137 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,221_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,222 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,240_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,243 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,266_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,267 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,318_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,321 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,514_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,526 | `totalRiseIn` | `function totalRiseIn(` |
| 10,536 | `eraInflation` | `function eraInflation(` |
| 10,547 | `eraGrowth` | `function eraGrowth(` |
| 10,563 | `fmtSigned` | `function fmtSigned(` |
| 10,568 | `regimeArrow` | `function regimeArrow(` |
| 10,574 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,575 | `growthShown` | `function growthShown(` |
| 10,576 | `growthShownCap` | `function growthShownCap(` |
| 10,577 | `regimeState` | `function regimeState(` |
| 10,581 | `phaseClass` | `function phaseClass(` |
| 10,583 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,595 | `cycleViewEl` | `var cycleViewEl =` |
| 10,599 | `tempCard` | `var tempCard =` |
| 10,600 | `placeCharts` | `function placeCharts(` |
| 10,605 | `shownEra` | `var shownEra =` |
| 10,606 | `calendarReset` | `var calendarReset =` |
| 10,607 | `metricPageReset` | `var metricPageReset =` |
| 10,608 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,611 | `topbarBack` | `var topbarBack =` |
| 10,612 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,619_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,620 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,781_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,782 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,800_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,803 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,824_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,830 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,833 | `hubSet` | `function hubSet(` |
| 10,846 | `quarterPopup` | `function quarterPopup(` |
| 10,879 | `hubShowDefault` | `function hubShowDefault(` |
| 10,888 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,894 | `hubShowYear` | `function hubShowYear(` |
| 10,909 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,001_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,004 | `tempState` | `var tempState =` |
| 11,007 | `chartLink` | `var chartLink =` |
| 11,027 | `m2Step` | `function m2Step(` |
| 11,030 | `heatStep` | `function heatStep(` |
| 11,034 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,221_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,224 | `drawGrowth` | `function drawGrowth(` |
| 11,363 | `wireResize` | `function wireResize(` |
| 11,369 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,381_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,382 | `renderCycleView` | `function renderCycleView(` |
| 11,435 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,446 | `PEER_CARET` | `var PEER_CARET =` |
| 11,447 | `peerList` | `function peerList(` |
| 11,448 | `peerChosen` | `function peerChosen(` |
| 11,449 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,453 | `renderPeerPills` | `function renderPeerPills(` |
| 11,503 | `shownEraModel` | `var shownEraModel =` |
| 11,504 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,506_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,508 | `stripGroupName` | `var stripGroupName =` |
| 11,509 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,555 | `marketStripHtml` | `function marketStripHtml(` |
| 11,618 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,619 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,649_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,650 | `renderCycleList` | `function renderCycleList(` |
| 11,740 | `renderSignsList` | `function renderSignsList(` |
| 11,996 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,231_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,232 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,294_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,295 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,328_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,329 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,945–3,948 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,014–8,027 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,831–8,844 | `seasonTrackAll` | The season, computed |
| 8,866–8,870 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,702 |
| `desire-range` | 9,833 |
| `hzn-range` | 10,170 |
| `pulse-range` | 9,784 |
| `sheet-marker-deficit` | 12,699 |
| `sheet-metric-gdp` | 12,587 |
| `sheet-metric-households` | 12,733 |
| `sheet-metric-power` | 12,666 |
| `sheet-metric-temp` | 12,537 |
| `sheet-metric-valuation` | 12,774 |
| `sheet-sign-activity` | 12,648 |
| `sheet-sign-desire` | 9,834 |
| `sheet-sign-horizon` | 10,171 |
| `sheet-sign-pulse` | 9,783 |
| `sheet-sign-volume` | 9,807 |
| `sheet-sign-yield` | 9,751 |
| `volume-range` | 9,808 |
| `ylm-range` | 9,879 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,708 |
| `desire-range` | 9,816 |
| `hzn-range` | 10,147 |
| `pulse-range` | 9,761 |
| `sheet-metric-gdp` | 12,588 |
| `sheet-metric-power` | 12,667 |
| `sheet-metric-temp` | 12,538 |
| `sheet-metric-valuation` | 12,775 |
| `volume-range` | 9,788 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,011 |
| `sheet-metric-gdp` | 6,012 |
| `sheet-sign-activity` | 6,013 |
| `sheet-metric-power` | 6,014 |
| `sheet-metric-valuation` | 6,016 |
| `sheet-metric-households` | 6,017 |
| `deficit-range` | 6,018 |
| `volume-range` | 6,019 |
| `pulse-range` | 6,020 |
| `hzn-range` | 6,021 |
| `ylm-range` | 6,032 |
| `desire-range` | 6,033 |

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
| 2,700 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,725 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,740 | long cycle (structural layer) |
| 2,781 | indicator grid |
| 2,824 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,841 | info icon + popover (progressive disclosure for longer notes) |
| 2,862 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,957 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (148), which is what the renderers fill:

| Line | id |
|---|---|
| 2,989 | `topbar-back` |
| 2,992 | `topbar-title` |
| 2,993 | `menu-btn` |
| 3,010 | `main` |
| 3,017 | `cycle-view` |
| 3,025 | `cycle-kicker` |
| 3,031 | `cycle-dial` |
| 3,033 | `season-wheel-hub-date` |
| 3,034 | `season-wheel-hub-theme` |
| 3,035 | `season-wheel-hub-detail` |
| 3,043 | `temp-card` |
| 3,045 | `temp-kicker` |
| 3,046 | `temp-sub` |
| 3,049 | `temp-svg` |
| 3,050 | `temp-tooltip` |
| 3,056 | `temp-stats` |
| 3,063 | `growth-card` |
| 3,066 | `growth-kicker` |
| 3,066 | `growth-phase` |
| 3,066 | `growth-sub` |
| 3,066 | `growth-peers` |
| 3,067 | `growth-svg` |
| 3,067 | `growth-tooltip` |
| 3,072 | `growth-stats` |
| 3,081 | `today-analysis` |
| 3,085 | `peek-row` |
| 3,089 | `sheet-metric-temp` |
| 3,090 | `temp-timing` |
| 3,091 | `temp-chart` |
| 3,093 | `temp-rangebar` |
| 3,095 | `temp-head` |
| 3,096 | `slot-temp` |
| 3,097 | `temp-history` |
| 3,098 | `temp-hist-tooltip` |
| 3,101 | `temp-trend` |
| 3,104 | `temp-panel` |
| 3,106 | `temp-highlights` |
| 3,109 | `sheet-metric-gdp` |
| 3,110 | `gdp-timing` |
| 3,111 | `gdp-chart` |
| 3,112 | `gdp-rangebar` |
| 3,114 | `gdp-head` |
| 3,115 | `slot-growth` |
| 3,116 | `gdp-history` |
| 3,117 | `gdp-hist-tooltip` |
| 3,118 | `gdp-yoy` |
| 3,128 | `gdp-trend` |
| 3,130 | `gdp-panel` |
| 3,135 | `subj-ring-gdp` |
| 3,137 | `subj-label-gdp` |
| 3,138 | `subj-value-gdp` |
| 3,139 | `subj-say-gdp` |
| 3,140 | `subj-spark-gdp` |
| 3,145 | `subj-ctx-gdp` |
| 3,148 | `gdp-highlights` |
| 3,156 | `sheet-metric-power` |
| 3,157 | `power-timing` |
| 3,158 | `power-head` |
| 3,159 | `power-chart` |
| 3,163 | `subj-ring-resilience` |
| 3,166 | `subj-value-resilience` |
| 3,167 | `subj-say-resilience` |
| 3,172 | `subj-ctx-resilience` |
| 3,176 | `longcycle-title` |
| 3,178 | `longcycle-tag` |
| 3,192 | `power-highlights` |
| 3,199 | `sheet-marker-deficit` |
| 3,205 | `sheet-metric-households` |
| 3,206 | `households-timing` |
| 3,207 | `households-chart` |
| 3,208 | `households-highlights` |
| 3,212 | `sheet-metric-valuation` |
| 3,213 | `valuation-timing` |
| 3,214 | `valuation-head` |
| 3,215 | `valuation-chart` |
| 3,219 | `subj-ring-valuation` |
| 3,222 | `subj-value-valuation` |
| 3,223 | `subj-say-valuation` |
| 3,228 | `subj-ctx-valuation` |
| 3,232 | `valuation-title` |
| 3,234 | `valuation-tag` |
| 3,241 | `valuation-highlights` |
| 3,247 | `subj-ring-yield` |
| 3,250 | `subj-value-yield` |
| 3,251 | `subj-say-yield` |
| 3,252 | `subj-spark-yield` |
| 3,283 | `ylm-series` |
| 3,288 | `ylm-head` |
| 3,289 | `ylm-shell` |
| 3,290 | `ylm-svg` |
| 3,291 | `ylm-tooltip` |
| 3,294 | `ylm-zone-legend` |
| 3,299 | `ylm-trend` |
| 3,302 | `pressure-insights` |
| 3,303 | `pressure-highlights` |
| 3,329 | `subj-value-horizon` |
| 3,330 | `subj-say-horizon` |
| 3,331 | `subj-spark-horizon` |
| 3,341 | `hzn-timeline` |
| 3,343 | `hzn-head` |
| 3,344 | `spread-history-shell` |
| 3,345 | `spread-history-svg` |
| 3,346 | `spread-history-tooltip` |
| 3,349 | `hzn-zone-legend` |
| 3,354 | `hzn-trend` |
| 3,356 | `hzn-panel` |
| 3,358 | `horizon-insights` |
| 3,359 | `horizon-highlights` |
| 3,366 | `subj-ring-sentiment` |
| 3,369 | `subj-value-sentiment` |
| 3,370 | `subj-say-sentiment` |
| 3,371 | `subj-spark-sentiment` |
| 3,383 | `curve-gauge` |
| 3,384 | `curve-vix` |
| 3,385 | `curve-highlights` |
| 3,399 | `signs-list` |
| 3,410 | `calendar-list` |
| 3,415 | `indicators-peek` |
| 3,461 | `cycle-list` |
| 3,467 | `cycle-more` |
| 3,468 | `cycle-more-label` |
| 3,477 | `calendar-cycle` |
| 3,478 | `calendar-cycle-slot` |
| 3,529 | `seasons-kicker` |
| 3,530 | `seasons-rows` |
| 3,534 | `framework-kicker` |
| 3,536 | `framework-rows` |
| 3,543 | `more-menu` |
| 3,546 | `menu-back` |
| 3,560 | `sources-open` |
| 3,568 | `appearance-current` |
| 3,576 | `sheet-howto` |
| 3,620 | `sheet-book` |
| 3,652 | `sheet-appearance` |
| 3,660 | `theme-toggle` |
| 3,667 | `sheet-contact` |
| 3,676 | `contact-form` |
| 3,677 | `contact-title` |
| 3,678 | `contact-message` |
| 3,680 | `contact-hint` |
| 3,681 | `contact-send` |
| 3,690 | `sheet-sources` |
| 3,693 | `sources-back` |
| 3,700 | `asof-text` |
| 3,701 | `sources-groups` |
| 3,708 | `detail-backdrop` |
| 3,710 | `detail-modal-close` |
| 3,711 | `detail-modal-body` |

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

