# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,506 lines**, about 1102 KB, roughly **313 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `1de48d4` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,985 | the whole stylesheet, every token and rule |
| **Markup** | 2,986–3,718 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,719–13,453 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,454–13,506 | </body></html> |

Counts: **245** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,724_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,728 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,729 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,730 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,748 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,752 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,757_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,767 | `wheelMeta` | `var wheelMeta =` |
| 3,778 | `seasonOverride` | `var seasonOverride =` |
| 3,781 | `cycleNowNote` | `var cycleNowNote =` |
| 3,790 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,876 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,921 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,934_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,951 | `LIVE` | `function LIVE(` |
| 3,978 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,986 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,987 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,990_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,021 | `repaintFigureText` | `function repaintFigureText(` |
| 4,029 | `repaintTag` | `function repaintTag(` |
| 4,039 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,064 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,072 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,080 | `REPAINT` | `var REPAINT =` |
| 4,097 | `liveAsOf` | `var liveAsOf =` |
| 4,098 | `fmtAsOf` | `function fmtAsOf(` |
| 4,103 | `applyLive` | `function applyLive(` |
| 4,179 | `repaintPolicy` | `function repaintPolicy(` |
| 4,229 | `GYN` | `var GYN =` |
| 4,249 | `refreshLiveData` | `function refreshLiveData(` |
| 4,290 | `fetchSiteData` | `function fetchSiteData(` |
| 4,320 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,334_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,335 | `yieldCurve` | `var yieldCurve =` |
| 4,348 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,372 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,379 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,385 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,412 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,414_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,419 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,443 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,467 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,491 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,518 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,543_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,552 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,562 | `uninvLagToday` | `var uninvLagToday =` |
| 4,574 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,587 | `gdpPeers` | `var gdpPeers =` |
| 4,628 | `gdpSrc` | `var gdpSrc =` |
| 4,629 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,634 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,647 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,685_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,707 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,717_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,733 | `stressScoreFor` | `function stressScoreFor(` |
| 4,739 | `stressScore` | `var stressScore =` |
| 4,745 | `powerOf` | `var powerOf =` |
| 4,746 | `powerScore` | `var powerScore =` |
| 4,763 | `stressHistory` | `var stressHistory =` |
| 4,774 | `powerMeter` | `var powerMeter =` |
| 4,776 | `stressNoteFull` | `var stressNoteFull =` |
| 4,808 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,810_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,833 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,834 | `deficitHistory` | `var deficitHistory =` |
| 4,837 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,844 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,846 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,889_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,902 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,915_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,929 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,932 | `timelineSpan` | `function timelineSpan(` |
| 4,938 | `timelineFor` | `function timelineFor(` |
| 4,951 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,957_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,963 | `windowScale` | `function windowScale(` |
| 4,979 | `windowYears` | `function windowYears(` |
| 4,997 | `refName` | `function refName(` |
| 5,004 | `histReadEnsure` | `function histReadEnsure(` |
| 5,043 | `seatBandReading` | `function seatBandReading(` |
| 5,066 | `histReadFill` | `function histReadFill(` |
| 5,189 | `histAxisEnds` | `function histAxisEnds(` |
| 5,200 | `histLegend` | `function histLegend(` |
| 5,273 | `wireHistHover` | `function wireHistHover(` |
| 5,328 | `mWindowFrom` | `function mWindowFrom(` |
| 5,333 | `qWindowFrom` | `function qWindowFrom(` |
| 5,338 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,339 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,341 | `DEF_1983` | `var DEF_1983 =` |
| 5,343 | `defFrom` | `function defFrom(` |
| 5,354 | `deficitChart` | `function deficitChart(` |
| 5,444 | `deficitBlock` | `function deficitBlock(` |
| 5,506 | `buffettHistory` | `var buffettHistory =` |
| 5,536 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,537 | `hyDates` | `var hyDates =` |
| 5,538 | `hyOas` | `var hyOas =` |
| 5,539 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,546 | `hyAt` | `function hyAt(` |
| 5,550 | `hyLabel` | `function hyLabel(` |
| 5,551 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,552 | `hyNum` | `function hyNum(` |
| 5,553 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,563 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,573 | `capeHistory` | `var capeHistory =` |
| 5,575 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,593_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,599 | `sentiment` | `var sentiment =` |
| 5,617 | `valuation` | `var valuation =` |
| 5,654 | `valRow` | `function valRow(` |
| 5,662 | `coincident` | `var coincident =` |
| 5,723 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,741 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,742 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,743 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,745_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,758 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,759 | `m2vHistory` | `var m2vHistory =` |
| 5,779 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,879 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,981 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,982 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,022_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,028 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,029 | `DOTS` | `var DOTS =` |
| 6,031 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,056 | `histHead` | `function histHead(` |
| 6,077 | `headNoteIdx` | `var headNoteIdx =` |
| 6,078 | `headMenuHtml` | `function headMenuHtml(` |
| 6,098 | `headMenuFor` | `var headMenuFor =` |
| 6,099 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,125 | `nameWithMark` | `function nameWithMark(` |
| 6,131 | `panelRow` | `function panelRow(` |
| 6,157 | `panelFromMeter` | `function panelFromMeter(` |
| 6,171 | `meterFlagged` | `function meterFlagged(` |
| 6,182 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,210 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,224 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,243 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,262 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,276 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,301 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,332 | `desireBlock` | `function desireBlock(` |
| 6,359 | `volumeBlock` | `function volumeBlock(` |
| 6,384 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,407 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,415_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,428 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,429 | `m2Level` | `var m2Level =` |
| 6,451 | `m2Yoy` | `var m2Yoy =` |
| 6,452 | `M2_NORM` | `var M2_NORM =` |
| 6,457 | `volumeVerdict` | `function volumeVerdict(` |
| 6,494 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,495 | `unempHistory` | `var unempHistory =` |
| 6,501 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,516 | `NROU_NOW` | `var NROU_NOW =` |
| 6,517 | `unempState` | `function unempState(` |
| 6,523 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,583 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,584 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,587 | `qAtIndex` | `function qAtIndex(` |
| 6,588 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,596_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,611 | `householdsChart` | `function householdsChart(` |
| 6,684 | `lastChartAvg` | `var lastChartAvg =` |
| 6,685 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,770 | `GDP_NORM` | `var GDP_NORM =` |
| 6,776 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,777 | `gdpNowQ` | `var gdpNowQ =` |
| 6,778 | `gdpMeter` | `var gdpMeter =` |
| 6,781 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,803 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,869 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,933 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,941 | `velocityVerdict` | `function velocityVerdict(` |
| 6,949 | `derivePulseTag` | `function derivePulseTag(` |
| 6,955 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,015_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,024 | `seasonReading` | `var seasonReading =` |
| 7,073 | `frameworkRows` | `var frameworkRows =` |
| 7,083 | `vixRow` | `var vixRow =` |
| 7,091 | `vixWordOf` | `var vixWordOf =` |
| 7,095 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,110_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,114 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,123_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,124 | `calendarTodayY` | `var calendarTodayY =` |
| 7,155 | `vix3mClose` | `var vix3mClose =` |
| 7,156 | `fearCurve` | `function fearCurve(` |
| 7,163 | `curveVerdict` | `function curveVerdict(` |
| 7,170 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,175 | `valuationVerdict` | `function valuationVerdict(` |
| 7,193 | `sparkHtml` | `function sparkHtml(` |
| 7,212 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,218_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,231 | `modeBar` | `function modeBar(` |
| 7,246 | `pickerOpen` | `var pickerOpen =` |
| 7,250 | `cycleByName` | `function cycleByName(` |
| 7,254 | `openCycle` | `function openCycle(` |
| 7,260 | `cycleSlice` | `function cycleSlice(` |
| 7,269 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,277 | `cycleMonths` | `function cycleMonths(` |
| 7,296 | `histControls` | `function histControls(` |
| 7,310 | `cycLabel` | `function cycLabel(` |
| 7,326 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,335 | `cyclePicker` | `function cyclePicker(` |
| 7,359 | `seriesBar` | `function seriesBar(` |
| 7,366 | `rangeBar` | `function rangeBar(` |
| 7,378 | `trendOf` | `function trendOf(` |
| 7,423 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,433 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,448_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,449 | `yearOf` | `function yearOf(` |
| 7,450 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,451_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,481 | `totalStat` | `function totalStat(` |
| 7,487 | `atQuarter` | `function atQuarter(` |
| 7,488 | `atMonth` | `function atMonth(` |
| 7,489 | `cycleAverages` | `function cycleAverages(` |
| 7,496 | `ordinal` | `function ordinal(` |
| 7,497 | `hiCard` | `function hiCard(` |
| 7,508 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,522_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,529 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,545 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,552 | `moreRow` | `function moreRow(` |
| 7,558 | `powerPageNote` | `var powerPageNote =` |
| 7,559 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,565_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,568 | `xLabelOf` | `function xLabelOf(` |
| 7,588 | `fitGroup` | `function fitGroup(` |
| 7,610 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,669_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,693 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,703 | `vGrid` | `function vGrid(` |
| 7,728 | `COL_FILL` | `var COL_FILL =` |
| 7,760 | `AXIS` | `var AXIS =` |
| 7,761 | `chartAxes` | `function chartAxes(` |
| 7,807 | `divergeChart` | `function divergeChart(` |
| 7,868 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,897_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,905 | `maxIn` | `function maxIn(` |
| 7,918 | `reserveGauge` | `function reserveGauge(` |
| 7,939 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,953 | `PEEK_W` | `var PEEK_W =` |
| 7,956 | `PEEK_H` | `var PEEK_H =` |
| 7,957 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,962 | `colPeek` | `function colPeek(` |
| 7,989 | `meterPeek` | `function meterPeek(` |
| 8,006 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,011 | `pressureZone` | `function pressureZone(` |
| 8,026 | `HZN_BACK` | `var HZN_BACK =` |
| 8,027 | `hznLast` | `function hznLast(` |
| 8,028 | `hznBack` | `function hznBack(` |
| 8,029 | `horizonWord` | `function horizonWord(` |
| 8,054 | `HZN_METERS` | `var HZN_METERS =` |
| 8,062 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,086 | `_hznPanel` | `var _hznPanel =` |
| 8,087 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,107 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,108 | `levelZone` | `function levelZone(` |
| 8,120 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,125 | `RISK_RISK` | `var RISK_RISK =` |
| 8,130 | `riskCell` | `function riskCell(` |
| 8,131 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,162 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,187_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,206 | `pulseClipN` | `var pulseClipN =` |
| 8,207 | `beatPath` | `function beatPath(` |
| 8,232 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,246 | `pulsePeek` | `function pulsePeek(` |
| 8,254 | `pulseBlock` | `function pulseBlock(` |
| 8,274 | `CHEV` | `var CHEV =` |
| 8,276 | `peekCard` | `function peekCard(` |
| 8,327 | `dropSvg` | `function dropSvg(` |
| 8,335 | `speakerSvg` | `function speakerSvg(` |
| 8,343 | `gaugeSvg` | `function gaugeSvg(` |
| 8,347 | `diamondSvg` | `function diamondSvg(` |
| 8,359 | `energyFromReserve` | `function energyFromReserve(` |
| 8,371 | `sproutSvg` | `function sproutSvg(` |
| 8,382 | `markSvg` | `function markSvg(` |
| 8,386 | `flameSvg` | `function flameSvg(` |
| 8,390 | `gearSvg` | `function gearSvg(` |
| 8,403 | `pulseSvg` | `function pulseSvg(` |
| 8,407 | `thermoSvg` | `function thermoSvg(` |
| 8,426 | `trendUpSvg` | `function trendUpSvg(` |
| 8,428 | `ecgSvg` | `function ecgSvg(` |
| 8,442 | `circulationSvg` | `function circulationSvg(` |
| 8,443 | `weatherSvg` | `function weatherSvg(` |
| 8,464 | `moodSvg` | `function moodSvg(` |
| 8,481 | `boltSvg` | `function boltSvg(` |
| 8,484 | `houseSvg` | `function houseSvg(` |
| 8,492 | `sunriseSvg` | `function sunriseSvg(` |
| 8,502 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,514 | `signMarks` | `var signMarks =` |
| 8,521 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,538_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,559 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,560 | `dsrHistory` | `var dsrHistory =` |
| 8,561 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,562 | `savHistory` | `var savHistory =` |
| 8,567 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,577 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,578 | `dsrNow` | `var dsrNow =` |
| 8,579 | `savNow` | `var savNow =` |
| 8,580 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,585 | `householdsWord` | `function householdsWord(` |
| 8,592 | `householdsNow` | `var householdsNow =` |
| 8,599 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,600 | `dsrMeter` | `var dsrMeter =` |
| 8,603 | `savMeter` | `var savMeter =` |
| 8,606 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,623 | `savInfoHtml` | `function savInfoHtml(` |
| 8,641 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,650 | `curveNow` | `var curveNow =` |
| 8,651 | `curveTag` | `var curveTag =` |
| 8,652 | `curveSub` | `var curveSub =` |
| 8,656 | `curvePct` | `function curvePct(` |
| 8,657 | `curveNoteFull` | `var curveNoteFull =` |
| 8,672 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,680 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,721 | `marketCycles` | `var marketCycles =` |
| 8,751 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,753_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,774 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,775 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,780_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,801 | `slopeOf` | `function slopeOf(` |
| 8,812 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,818 | `readSeason` | `function readSeason(` |
| 8,843 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,845 | `qLabel` | `function qLabel(` |
| 8,869 | `regimeTrack` | `function regimeTrack(` |
| 8,892 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,894_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,901 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,902 | `seasonTitle` | `function seasonTitle(` |
| 8,903 | `monthLabel` | `function monthLabel(` |
| 8,904 | `cycleModel` | `function cycleModel(` |
| 8,956 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,964 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,971 | `nowModel` | `var nowModel =` |
| 8,972 | `readingNow` | `var readingNow =` |
| 8,973 | `cpiNow` | `var cpiNow =` |
| 8,974 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,975 | `currentSeason` | `var currentSeason =` |
| 8,976 | `seasonWhy` | `var seasonWhy =` |
| 8,993 | `seasonGroup` | `function seasonGroup(` |
| 9,007 | `arcGauge` | `function arcGauge(` |
| 9,046 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,059 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,061 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,065 | `policyFacts` | `function policyFacts(` |
| 9,077 | `allSources` | `var allSources =` |
| 9,101 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,134_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,137 | `SVG_NS` | `var SVG_NS =` |
| 9,138 | `svgEl` | `function svgEl(` |
| 9,151 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,187_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,188 | `clampPct` | `function clampPct(` |
| 9,195 | `infoIcon` | `function infoIcon(` |
| 9,204 | `detailTexts` | `var detailTexts =` |
| 9,222 | `detailSlots` | `var detailSlots =` |
| 9,223 | `detailSlot` | `function detailSlot(` |
| 9,234 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,238 | `_growthPanel` | `var _growthPanel =` |
| 9,239 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,245 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,256 | `facts` | `function facts(` |
| 9,257 | `factsFrom` | `function factsFrom(` |
| 9,261 | `expandBtn` | `function expandBtn(` |
| 9,267 | `sheetRenderers` | `var sheetRenderers =` |
| 9,284 | `pageMode` | `var pageMode =` |
| 9,291 | `pageCycles` | `var pageCycles =` |
| 9,296 | `pageRange` | `var pageRange =` |
| 9,302 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,336_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,347 | `meterHtml` | `function meterHtml(` |
| 9,375 | `srcHtml` | `function srcHtml(` |
| 9,384 | `TIMING` | `var TIMING =` |
| 9,390 | `timingMark` | `function timingMark(` |
| 9,404 | `timingPill` | `function timingPill(` |
| 9,425 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,433 | `seatPageFoot` | `function seatPageFoot(` |
| 9,456 | `timingMembers` | `var timingMembers =` |
| 9,457 | `registerTiming` | `function registerTiming(` |
| 9,463 | `headHtml` | `function headHtml(` |
| 9,481 | `heldHighlights` | `var heldHighlights =` |
| 9,482 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,540_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,541 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,908_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,909 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,119_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,120 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,152_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,158 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,242_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,243 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,261_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,264 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,287_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,288 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,339_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,342 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,535_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,547 | `totalRiseIn` | `function totalRiseIn(` |
| 10,557 | `eraInflation` | `function eraInflation(` |
| 10,568 | `eraGrowth` | `function eraGrowth(` |
| 10,584 | `fmtSigned` | `function fmtSigned(` |
| 10,589 | `regimeArrow` | `function regimeArrow(` |
| 10,595 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,596 | `growthShown` | `function growthShown(` |
| 10,597 | `growthShownCap` | `function growthShownCap(` |
| 10,598 | `regimeState` | `function regimeState(` |
| 10,602 | `phaseClass` | `function phaseClass(` |
| 10,604 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,616 | `cycleViewEl` | `var cycleViewEl =` |
| 10,620 | `tempCard` | `var tempCard =` |
| 10,621 | `placeCharts` | `function placeCharts(` |
| 10,626 | `shownEra` | `var shownEra =` |
| 10,627 | `calendarReset` | `var calendarReset =` |
| 10,628 | `metricPageReset` | `var metricPageReset =` |
| 10,629 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,632 | `topbarBack` | `var topbarBack =` |
| 10,633 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,640_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,641 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,802_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,803 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,821_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,824 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,845_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,851 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,854 | `hubSet` | `function hubSet(` |
| 10,867 | `quarterPopup` | `function quarterPopup(` |
| 10,900 | `hubShowDefault` | `function hubShowDefault(` |
| 10,909 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,915 | `hubShowYear` | `function hubShowYear(` |
| 10,930 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,022_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,025 | `tempState` | `var tempState =` |
| 11,028 | `chartLink` | `var chartLink =` |
| 11,048 | `m2Step` | `function m2Step(` |
| 11,051 | `heatStep` | `function heatStep(` |
| 11,055 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,242_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,245 | `drawGrowth` | `function drawGrowth(` |
| 11,384 | `wireResize` | `function wireResize(` |
| 11,390 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,402_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,403 | `renderCycleView` | `function renderCycleView(` |
| 11,456 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,467 | `PEER_CARET` | `var PEER_CARET =` |
| 11,468 | `peerList` | `function peerList(` |
| 11,469 | `peerChosen` | `function peerChosen(` |
| 11,470 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,474 | `renderPeerPills` | `function renderPeerPills(` |
| 11,524 | `shownEraModel` | `var shownEraModel =` |
| 11,525 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,527_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,529 | `stripGroupName` | `var stripGroupName =` |
| 11,530 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,576 | `marketStripHtml` | `function marketStripHtml(` |
| 11,639 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,640 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,670_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,671 | `renderCycleList` | `function renderCycleList(` |
| 11,761 | `renderSignsList` | `function renderSignsList(` |
| 12,017 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,252_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,253 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,315_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,316 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,349_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,350 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,947–3,950 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,035–8,048 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,852–8,865 | `seasonTrackAll` | The season, computed |
| 8,887–8,891 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,723 |
| `desire-range` | 9,854 |
| `hzn-range` | 10,191 |
| `pulse-range` | 9,805 |
| `sheet-marker-deficit` | 12,720 |
| `sheet-metric-gdp` | 12,608 |
| `sheet-metric-households` | 12,754 |
| `sheet-metric-power` | 12,687 |
| `sheet-metric-temp` | 12,558 |
| `sheet-metric-valuation` | 12,795 |
| `sheet-sign-activity` | 12,669 |
| `sheet-sign-desire` | 9,855 |
| `sheet-sign-horizon` | 10,192 |
| `sheet-sign-pulse` | 9,804 |
| `sheet-sign-volume` | 9,828 |
| `sheet-sign-yield` | 9,772 |
| `volume-range` | 9,829 |
| `ylm-range` | 9,900 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,729 |
| `desire-range` | 9,837 |
| `hzn-range` | 10,168 |
| `pulse-range` | 9,782 |
| `sheet-metric-gdp` | 12,609 |
| `sheet-metric-power` | 12,688 |
| `sheet-metric-temp` | 12,559 |
| `sheet-metric-valuation` | 12,796 |
| `volume-range` | 9,809 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,032 |
| `sheet-metric-gdp` | 6,033 |
| `sheet-sign-activity` | 6,034 |
| `sheet-metric-power` | 6,035 |
| `sheet-metric-valuation` | 6,037 |
| `sheet-metric-households` | 6,038 |
| `deficit-range` | 6,039 |
| `volume-range` | 6,040 |
| `pulse-range` | 6,041 |
| `hzn-range` | 6,042 |
| `ylm-range` | 6,053 |
| `desire-range` | 6,054 |

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
| 1,501 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,535 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,545 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,556 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,589 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,769 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,920 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,378 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,426 | hero: yield curve |
| 2,522 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,598 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,702 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,727 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,742 | long cycle (structural layer) |
| 2,783 | indicator grid |
| 2,826 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,843 | info icon + popover (progressive disclosure for longer notes) |
| 2,864 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,959 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (148), which is what the renderers fill:

| Line | id |
|---|---|
| 2,991 | `topbar-back` |
| 2,994 | `topbar-title` |
| 2,995 | `menu-btn` |
| 3,012 | `main` |
| 3,019 | `cycle-view` |
| 3,027 | `cycle-kicker` |
| 3,033 | `cycle-dial` |
| 3,035 | `season-wheel-hub-date` |
| 3,036 | `season-wheel-hub-theme` |
| 3,037 | `season-wheel-hub-detail` |
| 3,045 | `temp-card` |
| 3,047 | `temp-kicker` |
| 3,048 | `temp-sub` |
| 3,051 | `temp-svg` |
| 3,052 | `temp-tooltip` |
| 3,058 | `temp-stats` |
| 3,065 | `growth-card` |
| 3,068 | `growth-kicker` |
| 3,068 | `growth-phase` |
| 3,068 | `growth-sub` |
| 3,068 | `growth-peers` |
| 3,069 | `growth-svg` |
| 3,069 | `growth-tooltip` |
| 3,074 | `growth-stats` |
| 3,083 | `today-analysis` |
| 3,087 | `peek-row` |
| 3,091 | `sheet-metric-temp` |
| 3,092 | `temp-timing` |
| 3,093 | `temp-chart` |
| 3,095 | `temp-rangebar` |
| 3,097 | `temp-head` |
| 3,098 | `slot-temp` |
| 3,099 | `temp-history` |
| 3,100 | `temp-hist-tooltip` |
| 3,103 | `temp-trend` |
| 3,106 | `temp-panel` |
| 3,108 | `temp-highlights` |
| 3,111 | `sheet-metric-gdp` |
| 3,112 | `gdp-timing` |
| 3,113 | `gdp-chart` |
| 3,114 | `gdp-rangebar` |
| 3,116 | `gdp-head` |
| 3,117 | `slot-growth` |
| 3,118 | `gdp-history` |
| 3,119 | `gdp-hist-tooltip` |
| 3,120 | `gdp-yoy` |
| 3,130 | `gdp-trend` |
| 3,132 | `gdp-panel` |
| 3,137 | `subj-ring-gdp` |
| 3,139 | `subj-label-gdp` |
| 3,140 | `subj-value-gdp` |
| 3,141 | `subj-say-gdp` |
| 3,142 | `subj-spark-gdp` |
| 3,147 | `subj-ctx-gdp` |
| 3,150 | `gdp-highlights` |
| 3,158 | `sheet-metric-power` |
| 3,159 | `power-timing` |
| 3,160 | `power-head` |
| 3,161 | `power-chart` |
| 3,165 | `subj-ring-resilience` |
| 3,168 | `subj-value-resilience` |
| 3,169 | `subj-say-resilience` |
| 3,174 | `subj-ctx-resilience` |
| 3,178 | `longcycle-title` |
| 3,180 | `longcycle-tag` |
| 3,194 | `power-highlights` |
| 3,201 | `sheet-marker-deficit` |
| 3,207 | `sheet-metric-households` |
| 3,208 | `households-timing` |
| 3,209 | `households-chart` |
| 3,210 | `households-highlights` |
| 3,214 | `sheet-metric-valuation` |
| 3,215 | `valuation-timing` |
| 3,216 | `valuation-head` |
| 3,217 | `valuation-chart` |
| 3,221 | `subj-ring-valuation` |
| 3,224 | `subj-value-valuation` |
| 3,225 | `subj-say-valuation` |
| 3,230 | `subj-ctx-valuation` |
| 3,234 | `valuation-title` |
| 3,236 | `valuation-tag` |
| 3,243 | `valuation-highlights` |
| 3,249 | `subj-ring-yield` |
| 3,252 | `subj-value-yield` |
| 3,253 | `subj-say-yield` |
| 3,254 | `subj-spark-yield` |
| 3,285 | `ylm-series` |
| 3,290 | `ylm-head` |
| 3,291 | `ylm-shell` |
| 3,292 | `ylm-svg` |
| 3,293 | `ylm-tooltip` |
| 3,296 | `ylm-zone-legend` |
| 3,301 | `ylm-trend` |
| 3,304 | `pressure-insights` |
| 3,305 | `pressure-highlights` |
| 3,331 | `subj-value-horizon` |
| 3,332 | `subj-say-horizon` |
| 3,333 | `subj-spark-horizon` |
| 3,343 | `hzn-timeline` |
| 3,345 | `hzn-head` |
| 3,346 | `spread-history-shell` |
| 3,347 | `spread-history-svg` |
| 3,348 | `spread-history-tooltip` |
| 3,351 | `hzn-zone-legend` |
| 3,356 | `hzn-trend` |
| 3,358 | `hzn-panel` |
| 3,360 | `horizon-insights` |
| 3,361 | `horizon-highlights` |
| 3,368 | `subj-ring-sentiment` |
| 3,371 | `subj-value-sentiment` |
| 3,372 | `subj-say-sentiment` |
| 3,373 | `subj-spark-sentiment` |
| 3,385 | `curve-gauge` |
| 3,386 | `curve-vix` |
| 3,387 | `curve-highlights` |
| 3,401 | `signs-list` |
| 3,412 | `calendar-list` |
| 3,417 | `indicators-peek` |
| 3,463 | `cycle-list` |
| 3,469 | `cycle-more` |
| 3,470 | `cycle-more-label` |
| 3,479 | `calendar-cycle` |
| 3,480 | `calendar-cycle-slot` |
| 3,531 | `seasons-kicker` |
| 3,532 | `seasons-rows` |
| 3,536 | `framework-kicker` |
| 3,538 | `framework-rows` |
| 3,545 | `more-menu` |
| 3,548 | `menu-back` |
| 3,562 | `sources-open` |
| 3,570 | `appearance-current` |
| 3,578 | `sheet-howto` |
| 3,622 | `sheet-book` |
| 3,654 | `sheet-appearance` |
| 3,662 | `theme-toggle` |
| 3,669 | `sheet-contact` |
| 3,678 | `contact-form` |
| 3,679 | `contact-title` |
| 3,680 | `contact-message` |
| 3,682 | `contact-hint` |
| 3,683 | `contact-send` |
| 3,692 | `sheet-sources` |
| 3,695 | `sources-back` |
| 3,702 | `asof-text` |
| 3,703 | `sources-groups` |
| 3,710 | `detail-backdrop` |
| 3,712 | `detail-modal-close` |
| 3,713 | `detail-modal-body` |

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

