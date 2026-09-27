# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,532 lines**, about 1107 KB, roughly **315 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `bc9687f` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,997 | the whole stylesheet, every token and rule |
| **Markup** | 2,998–3,720 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,721–13,479 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,480–13,532 | </body></html> |

Counts: **245** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,726_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,730 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,731 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,732 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,750 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,754 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,759_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,769 | `wheelMeta` | `var wheelMeta =` |
| 3,780 | `seasonOverride` | `var seasonOverride =` |
| 3,783 | `cycleNowNote` | `var cycleNowNote =` |
| 3,792 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,878 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,923 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,936_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,953 | `LIVE` | `function LIVE(` |
| 3,980 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,988 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,989 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,992_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,023 | `repaintFigureText` | `function repaintFigureText(` |
| 4,031 | `repaintTag` | `function repaintTag(` |
| 4,041 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,066 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,074 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,082 | `REPAINT` | `var REPAINT =` |
| 4,099 | `liveAsOf` | `var liveAsOf =` |
| 4,100 | `fmtAsOf` | `function fmtAsOf(` |
| 4,105 | `applyLive` | `function applyLive(` |
| 4,181 | `repaintPolicy` | `function repaintPolicy(` |
| 4,231 | `GYN` | `var GYN =` |
| 4,251 | `refreshLiveData` | `function refreshLiveData(` |
| 4,292 | `fetchSiteData` | `function fetchSiteData(` |
| 4,322 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,336_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,337 | `yieldCurve` | `var yieldCurve =` |
| 4,350 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,374 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,386 | `t10y2yHistory` | `var t10y2yHistory =` |

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
| 5,279 | `wireHistHover` | `function wireHistHover(` |
| 5,334 | `mWindowFrom` | `function mWindowFrom(` |
| 5,339 | `qWindowFrom` | `function qWindowFrom(` |
| 5,344 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,345 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,347 | `DEF_1983` | `var DEF_1983 =` |
| 5,349 | `defFrom` | `function defFrom(` |
| 5,360 | `deficitChart` | `function deficitChart(` |
| 5,450 | `deficitBlock` | `function deficitBlock(` |
| 5,512 | `buffettHistory` | `var buffettHistory =` |
| 5,542 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,543 | `hyDates` | `var hyDates =` |
| 5,544 | `hyOas` | `var hyOas =` |
| 5,545 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,552 | `hyAt` | `function hyAt(` |
| 5,556 | `hyLabel` | `function hyLabel(` |
| 5,557 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,558 | `hyNum` | `function hyNum(` |
| 5,559 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,569 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,579 | `capeHistory` | `var capeHistory =` |
| 5,581 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,599_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,605 | `sentiment` | `var sentiment =` |
| 5,623 | `valuation` | `var valuation =` |
| 5,660 | `valRow` | `function valRow(` |
| 5,668 | `coincident` | `var coincident =` |
| 5,729 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,747 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,748 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,749 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,751_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,764 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,765 | `m2vHistory` | `var m2vHistory =` |
| 5,785 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,878 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,968 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,969 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,009_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,015 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,016 | `DOTS` | `var DOTS =` |
| 6,018 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,043 | `histHead` | `function histHead(` |
| 6,064 | `headNoteIdx` | `var headNoteIdx =` |
| 6,065 | `headMenuHtml` | `function headMenuHtml(` |
| 6,085 | `headMenuFor` | `var headMenuFor =` |
| 6,086 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,112 | `nameWithMark` | `function nameWithMark(` |
| 6,118 | `panelRow` | `function panelRow(` |
| 6,144 | `panelFromMeter` | `function panelFromMeter(` |
| 6,158 | `meterFlagged` | `function meterFlagged(` |
| 6,169 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,197 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,211 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,230 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,249 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,263 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,288 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,319 | `desireBlock` | `function desireBlock(` |
| 6,346 | `volumeBlock` | `function volumeBlock(` |
| 6,371 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,394 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,402_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,415 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,416 | `m2Level` | `var m2Level =` |
| 6,438 | `m2Yoy` | `var m2Yoy =` |
| 6,439 | `M2_NORM` | `var M2_NORM =` |
| 6,444 | `volumeVerdict` | `function volumeVerdict(` |
| 6,481 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,482 | `unempHistory` | `var unempHistory =` |
| 6,488 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,503 | `NROU_NOW` | `var NROU_NOW =` |
| 6,504 | `unempState` | `function unempState(` |
| 6,510 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,575 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,576 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,579 | `qAtIndex` | `function qAtIndex(` |
| 6,580 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,588_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,603 | `householdsChart` | `function householdsChart(` |
| 6,676 | `lastChartAvg` | `var lastChartAvg =` |
| 6,677 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,762 | `GDP_NORM` | `var GDP_NORM =` |
| 6,768 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,769 | `gdpNowQ` | `var gdpNowQ =` |
| 6,770 | `gdpMeter` | `var gdpMeter =` |
| 6,773 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,795 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,861 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,925 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,933 | `velocityVerdict` | `function velocityVerdict(` |
| 6,941 | `derivePulseTag` | `function derivePulseTag(` |
| 6,947 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,007_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,016 | `seasonReading` | `var seasonReading =` |
| 7,065 | `frameworkRows` | `var frameworkRows =` |
| 7,075 | `vixRow` | `var vixRow =` |
| 7,083 | `vixWordOf` | `var vixWordOf =` |
| 7,087 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,102_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,106 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,115_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,116 | `calendarTodayY` | `var calendarTodayY =` |
| 7,147 | `vix3mClose` | `var vix3mClose =` |
| 7,148 | `fearCurve` | `function fearCurve(` |
| 7,155 | `curveVerdict` | `function curveVerdict(` |
| 7,162 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,167 | `valuationVerdict` | `function valuationVerdict(` |
| 7,185 | `sparkHtml` | `function sparkHtml(` |
| 7,204 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,210_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,223 | `modeBar` | `function modeBar(` |
| 7,238 | `pickerOpen` | `var pickerOpen =` |
| 7,242 | `cycleByName` | `function cycleByName(` |
| 7,246 | `openCycle` | `function openCycle(` |
| 7,252 | `cycleSlice` | `function cycleSlice(` |
| 7,261 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,269 | `cycleMonths` | `function cycleMonths(` |
| 7,288 | `histControls` | `function histControls(` |
| 7,302 | `cycLabel` | `function cycLabel(` |
| 7,318 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,327 | `cyclePicker` | `function cyclePicker(` |
| 7,351 | `seriesBar` | `function seriesBar(` |
| 7,358 | `rangeBar` | `function rangeBar(` |
| 7,370 | `trendOf` | `function trendOf(` |
| 7,415 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,425 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,446_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,447 | `yearOf` | `function yearOf(` |
| 7,448 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,449_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,479 | `totalStat` | `function totalStat(` |
| 7,485 | `atQuarter` | `function atQuarter(` |
| 7,486 | `atMonth` | `function atMonth(` |
| 7,487 | `cycleAverages` | `function cycleAverages(` |
| 7,494 | `ordinal` | `function ordinal(` |
| 7,495 | `hiCard` | `function hiCard(` |
| 7,506 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,520_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,527 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,543 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,550 | `moreRow` | `function moreRow(` |
| 7,556 | `powerPageNote` | `var powerPageNote =` |
| 7,557 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,563_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,566 | `xLabelOf` | `function xLabelOf(` |
| 7,586 | `fitGroup` | `function fitGroup(` |
| 7,608 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,667_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,691 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,701 | `vGrid` | `function vGrid(` |
| 7,726 | `COL_FILL` | `var COL_FILL =` |
| 7,763 | `AXIS` | `var AXIS =` |
| 7,764 | `chartAxes` | `function chartAxes(` |
| 7,814 | `divergeChart` | `function divergeChart(` |
| 7,875 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,904_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,912 | `maxIn` | `function maxIn(` |
| 7,925 | `reserveGauge` | `function reserveGauge(` |
| 7,946 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,960 | `PEEK_W` | `var PEEK_W =` |
| 7,963 | `PEEK_H` | `var PEEK_H =` |
| 7,964 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,969 | `colPeek` | `function colPeek(` |
| 7,996 | `meterPeek` | `function meterPeek(` |
| 8,013 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,018 | `pressureZone` | `function pressureZone(` |
| 8,033 | `HZN_BACK` | `var HZN_BACK =` |
| 8,034 | `hznLast` | `function hznLast(` |
| 8,035 | `hznBack` | `function hznBack(` |
| 8,036 | `horizonWord` | `function horizonWord(` |
| 8,061 | `HZN_METERS` | `var HZN_METERS =` |
| 8,069 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,093 | `_hznPanel` | `var _hznPanel =` |
| 8,094 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,114 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,115 | `levelZone` | `function levelZone(` |
| 8,127 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,132 | `RISK_RISK` | `var RISK_RISK =` |
| 8,137 | `riskCell` | `function riskCell(` |
| 8,138 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,169 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,194_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,213 | `pulseClipN` | `var pulseClipN =` |
| 8,214 | `beatPath` | `function beatPath(` |
| 8,239 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,253 | `pulsePeek` | `function pulsePeek(` |
| 8,261 | `pulseBlock` | `function pulseBlock(` |
| 8,281 | `CHEV` | `var CHEV =` |
| 8,283 | `peekCard` | `function peekCard(` |
| 8,334 | `dropSvg` | `function dropSvg(` |
| 8,342 | `speakerSvg` | `function speakerSvg(` |
| 8,350 | `gaugeSvg` | `function gaugeSvg(` |
| 8,354 | `diamondSvg` | `function diamondSvg(` |
| 8,366 | `energyFromReserve` | `function energyFromReserve(` |
| 8,378 | `sproutSvg` | `function sproutSvg(` |
| 8,389 | `markSvg` | `function markSvg(` |
| 8,393 | `flameSvg` | `function flameSvg(` |
| 8,397 | `gearSvg` | `function gearSvg(` |
| 8,410 | `pulseSvg` | `function pulseSvg(` |
| 8,414 | `thermoSvg` | `function thermoSvg(` |
| 8,433 | `trendUpSvg` | `function trendUpSvg(` |
| 8,435 | `ecgSvg` | `function ecgSvg(` |
| 8,449 | `circulationSvg` | `function circulationSvg(` |
| 8,450 | `weatherSvg` | `function weatherSvg(` |
| 8,471 | `moodSvg` | `function moodSvg(` |
| 8,488 | `boltSvg` | `function boltSvg(` |
| 8,491 | `houseSvg` | `function houseSvg(` |
| 8,499 | `sunriseSvg` | `function sunriseSvg(` |
| 8,509 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,521 | `signMarks` | `var signMarks =` |
| 8,528 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,545_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,566 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,567 | `dsrHistory` | `var dsrHistory =` |
| 8,568 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,569 | `savHistory` | `var savHistory =` |
| 8,574 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,584 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,585 | `dsrNow` | `var dsrNow =` |
| 8,586 | `savNow` | `var savNow =` |
| 8,587 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,592 | `householdsWord` | `function householdsWord(` |
| 8,599 | `householdsNow` | `var householdsNow =` |
| 8,606 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,607 | `dsrMeter` | `var dsrMeter =` |
| 8,610 | `savMeter` | `var savMeter =` |
| 8,613 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,630 | `savInfoHtml` | `function savInfoHtml(` |
| 8,648 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,657 | `curveNow` | `var curveNow =` |
| 8,658 | `curveTag` | `var curveTag =` |
| 8,659 | `curveSub` | `var curveSub =` |
| 8,663 | `curvePct` | `function curvePct(` |
| 8,664 | `curveNoteFull` | `var curveNoteFull =` |
| 8,679 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,687 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,728 | `marketCycles` | `var marketCycles =` |
| 8,758 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,760_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,781 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,782 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,787_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,808 | `slopeOf` | `function slopeOf(` |
| 8,819 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,825 | `readSeason` | `function readSeason(` |
| 8,850 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,852 | `qLabel` | `function qLabel(` |
| 8,876 | `regimeTrack` | `function regimeTrack(` |
| 8,899 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,901_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,908 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,909 | `seasonTitle` | `function seasonTitle(` |
| 8,910 | `monthLabel` | `function monthLabel(` |
| 8,911 | `cycleModel` | `function cycleModel(` |
| 8,963 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,971 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,978 | `nowModel` | `var nowModel =` |
| 8,979 | `readingNow` | `var readingNow =` |
| 8,980 | `cpiNow` | `var cpiNow =` |
| 8,981 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,982 | `currentSeason` | `var currentSeason =` |
| 8,983 | `seasonWhy` | `var seasonWhy =` |
| 9,000 | `seasonGroup` | `function seasonGroup(` |
| 9,014 | `arcGauge` | `function arcGauge(` |
| 9,053 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,066 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,068 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,072 | `policyFacts` | `function policyFacts(` |
| 9,084 | `allSources` | `var allSources =` |
| 9,108 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,141_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,144 | `SVG_NS` | `var SVG_NS =` |
| 9,145 | `svgEl` | `function svgEl(` |
| 9,158 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,194_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,195 | `clampPct` | `function clampPct(` |
| 9,202 | `infoIcon` | `function infoIcon(` |
| 9,211 | `detailTexts` | `var detailTexts =` |
| 9,229 | `detailSlots` | `var detailSlots =` |
| 9,230 | `detailSlot` | `function detailSlot(` |
| 9,241 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,245 | `_growthPanel` | `var _growthPanel =` |
| 9,246 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,252 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,263 | `facts` | `function facts(` |
| 9,264 | `factsFrom` | `function factsFrom(` |
| 9,268 | `expandBtn` | `function expandBtn(` |
| 9,274 | `sheetRenderers` | `var sheetRenderers =` |
| 9,291 | `pageMode` | `var pageMode =` |
| 9,298 | `pageCycles` | `var pageCycles =` |
| 9,303 | `pageRange` | `var pageRange =` |
| 9,309 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,343_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,354 | `meterHtml` | `function meterHtml(` |
| 9,382 | `srcHtml` | `function srcHtml(` |
| 9,391 | `TIMING` | `var TIMING =` |
| 9,397 | `timingMark` | `function timingMark(` |
| 9,411 | `timingPill` | `function timingPill(` |
| 9,432 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,440 | `seatPageFoot` | `function seatPageFoot(` |
| 9,463 | `timingMembers` | `var timingMembers =` |
| 9,464 | `registerTiming` | `function registerTiming(` |
| 9,470 | `headHtml` | `function headHtml(` |
| 9,488 | `heldHighlights` | `var heldHighlights =` |
| 9,489 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,547_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,548 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,921_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,922 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,145_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,146 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,178_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,184 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,268_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,269 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,287_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,290 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,313_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,314 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,365_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,368 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,561_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,573 | `totalRiseIn` | `function totalRiseIn(` |
| 10,583 | `eraInflation` | `function eraInflation(` |
| 10,594 | `eraGrowth` | `function eraGrowth(` |
| 10,610 | `fmtSigned` | `function fmtSigned(` |
| 10,615 | `regimeArrow` | `function regimeArrow(` |
| 10,621 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,622 | `growthShown` | `function growthShown(` |
| 10,623 | `growthShownCap` | `function growthShownCap(` |
| 10,624 | `regimeState` | `function regimeState(` |
| 10,628 | `phaseClass` | `function phaseClass(` |
| 10,630 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,642 | `cycleViewEl` | `var cycleViewEl =` |
| 10,646 | `tempCard` | `var tempCard =` |
| 10,647 | `placeCharts` | `function placeCharts(` |
| 10,652 | `shownEra` | `var shownEra =` |
| 10,653 | `calendarReset` | `var calendarReset =` |
| 10,654 | `metricPageReset` | `var metricPageReset =` |
| 10,655 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,658 | `topbarBack` | `var topbarBack =` |
| 10,659 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,666_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,667 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,828_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,829 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,847_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,850 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,871_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,877 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,880 | `hubSet` | `function hubSet(` |
| 10,893 | `quarterPopup` | `function quarterPopup(` |
| 10,926 | `hubShowDefault` | `function hubShowDefault(` |
| 10,935 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,941 | `hubShowYear` | `function hubShowYear(` |
| 10,956 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,048_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,051 | `tempState` | `var tempState =` |
| 11,054 | `chartLink` | `var chartLink =` |
| 11,074 | `m2Step` | `function m2Step(` |
| 11,077 | `heatStep` | `function heatStep(` |
| 11,081 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,268_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,271 | `drawGrowth` | `function drawGrowth(` |
| 11,410 | `wireResize` | `function wireResize(` |
| 11,416 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,428_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,429 | `renderCycleView` | `function renderCycleView(` |
| 11,482 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,493 | `PEER_CARET` | `var PEER_CARET =` |
| 11,494 | `peerList` | `function peerList(` |
| 11,495 | `peerChosen` | `function peerChosen(` |
| 11,496 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,500 | `renderPeerPills` | `function renderPeerPills(` |
| 11,550 | `shownEraModel` | `var shownEraModel =` |
| 11,551 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,553_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,555 | `stripGroupName` | `var stripGroupName =` |
| 11,556 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,602 | `marketStripHtml` | `function marketStripHtml(` |
| 11,665 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,666 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,696_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,697 | `renderCycleList` | `function renderCycleList(` |
| 11,787 | `renderSignsList` | `function renderSignsList(` |
| 12,043 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,278_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,279 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,341_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,342 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,375_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,376 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,949–3,952 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,042–8,055 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,859–8,872 | `seasonTrackAll` | The season, computed |
| 8,894–8,898 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,749 |
| `desire-range` | 9,867 |
| `hzn-range` | 10,217 |
| `pulse-range` | 9,818 |
| `sheet-marker-deficit` | 12,746 |
| `sheet-metric-gdp` | 12,634 |
| `sheet-metric-households` | 12,780 |
| `sheet-metric-power` | 12,713 |
| `sheet-metric-temp` | 12,584 |
| `sheet-metric-valuation` | 12,821 |
| `sheet-sign-activity` | 12,695 |
| `sheet-sign-desire` | 9,868 |
| `sheet-sign-horizon` | 10,218 |
| `sheet-sign-pulse` | 9,817 |
| `sheet-sign-volume` | 9,841 |
| `sheet-sign-yield` | 9,785 |
| `volume-range` | 9,842 |
| `ylm-range` | 9,913 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,755 |
| `desire-range` | 9,850 |
| `hzn-range` | 10,194 |
| `pulse-range` | 9,795 |
| `sheet-metric-gdp` | 12,635 |
| `sheet-metric-power` | 12,714 |
| `sheet-metric-temp` | 12,585 |
| `sheet-metric-valuation` | 12,822 |
| `volume-range` | 9,822 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,019 |
| `sheet-metric-gdp` | 6,020 |
| `sheet-sign-activity` | 6,021 |
| `sheet-metric-power` | 6,022 |
| `sheet-metric-valuation` | 6,024 |
| `sheet-metric-households` | 6,025 |
| `deficit-range` | 6,026 |
| `volume-range` | 6,027 |
| `pulse-range` | 6,028 |
| `hzn-range` | 6,029 |
| `ylm-range` | 6,040 |
| `desire-range` | 6,041 |

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
| 1,930 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,395 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,443 | hero: yield curve |
| 2,539 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,615 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,714 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,739 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,754 | long cycle (structural layer) |
| 2,795 | indicator grid |
| 2,838 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,855 | info icon + popover (progressive disclosure for longer notes) |
| 2,876 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,971 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (146), which is what the renderers fill:

| Line | id |
|---|---|
| 3,003 | `topbar-back` |
| 3,006 | `topbar-title` |
| 3,007 | `menu-btn` |
| 3,024 | `main` |
| 3,031 | `cycle-view` |
| 3,039 | `cycle-kicker` |
| 3,045 | `cycle-dial` |
| 3,047 | `season-wheel-hub-date` |
| 3,048 | `season-wheel-hub-theme` |
| 3,049 | `season-wheel-hub-detail` |
| 3,057 | `temp-card` |
| 3,059 | `temp-kicker` |
| 3,060 | `temp-sub` |
| 3,063 | `temp-svg` |
| 3,064 | `temp-tooltip` |
| 3,070 | `temp-stats` |
| 3,077 | `growth-card` |
| 3,080 | `growth-kicker` |
| 3,080 | `growth-phase` |
| 3,080 | `growth-sub` |
| 3,080 | `growth-peers` |
| 3,081 | `growth-svg` |
| 3,081 | `growth-tooltip` |
| 3,086 | `growth-stats` |
| 3,095 | `today-analysis` |
| 3,099 | `peek-row` |
| 3,103 | `sheet-metric-temp` |
| 3,104 | `temp-timing` |
| 3,105 | `temp-chart` |
| 3,107 | `temp-rangebar` |
| 3,109 | `temp-head` |
| 3,110 | `slot-temp` |
| 3,111 | `temp-history` |
| 3,112 | `temp-hist-tooltip` |
| 3,115 | `temp-trend` |
| 3,118 | `temp-panel` |
| 3,120 | `temp-highlights` |
| 3,123 | `sheet-metric-gdp` |
| 3,124 | `gdp-timing` |
| 3,125 | `gdp-chart` |
| 3,126 | `gdp-rangebar` |
| 3,128 | `gdp-head` |
| 3,129 | `slot-growth` |
| 3,130 | `gdp-history` |
| 3,131 | `gdp-hist-tooltip` |
| 3,132 | `gdp-yoy` |
| 3,142 | `gdp-trend` |
| 3,144 | `gdp-panel` |
| 3,149 | `subj-ring-gdp` |
| 3,151 | `subj-label-gdp` |
| 3,152 | `subj-value-gdp` |
| 3,153 | `subj-say-gdp` |
| 3,154 | `subj-spark-gdp` |
| 3,159 | `subj-ctx-gdp` |
| 3,162 | `gdp-highlights` |
| 3,170 | `sheet-metric-power` |
| 3,171 | `power-timing` |
| 3,172 | `power-head` |
| 3,173 | `power-chart` |
| 3,177 | `subj-ring-resilience` |
| 3,180 | `subj-value-resilience` |
| 3,181 | `subj-say-resilience` |
| 3,186 | `subj-ctx-resilience` |
| 3,190 | `longcycle-title` |
| 3,192 | `longcycle-tag` |
| 3,206 | `power-highlights` |
| 3,213 | `sheet-marker-deficit` |
| 3,219 | `sheet-metric-households` |
| 3,220 | `households-timing` |
| 3,221 | `households-chart` |
| 3,222 | `households-highlights` |
| 3,226 | `sheet-metric-valuation` |
| 3,227 | `valuation-timing` |
| 3,228 | `valuation-head` |
| 3,229 | `valuation-chart` |
| 3,233 | `subj-ring-valuation` |
| 3,236 | `subj-value-valuation` |
| 3,237 | `subj-say-valuation` |
| 3,242 | `subj-ctx-valuation` |
| 3,246 | `valuation-title` |
| 3,248 | `valuation-tag` |
| 3,255 | `valuation-highlights` |
| 3,261 | `subj-ring-yield` |
| 3,264 | `subj-value-yield` |
| 3,265 | `subj-say-yield` |
| 3,266 | `subj-spark-yield` |
| 3,297 | `ylm-series` |
| 3,302 | `ylm-head` |
| 3,303 | `ylm-shell` |
| 3,304 | `ylm-svg` |
| 3,305 | `ylm-tooltip` |
| 3,308 | `ylm-trend` |
| 3,311 | `pressure-insights` |
| 3,312 | `pressure-highlights` |
| 3,338 | `subj-value-horizon` |
| 3,339 | `subj-say-horizon` |
| 3,340 | `subj-spark-horizon` |
| 3,350 | `hzn-timeline` |
| 3,352 | `hzn-head` |
| 3,353 | `spread-history-shell` |
| 3,354 | `spread-history-svg` |
| 3,355 | `spread-history-tooltip` |
| 3,358 | `hzn-trend` |
| 3,360 | `hzn-panel` |
| 3,362 | `horizon-insights` |
| 3,363 | `horizon-highlights` |
| 3,370 | `subj-ring-sentiment` |
| 3,373 | `subj-value-sentiment` |
| 3,374 | `subj-say-sentiment` |
| 3,375 | `subj-spark-sentiment` |
| 3,387 | `curve-gauge` |
| 3,388 | `curve-vix` |
| 3,389 | `curve-highlights` |
| 3,403 | `signs-list` |
| 3,414 | `calendar-list` |
| 3,419 | `indicators-peek` |
| 3,465 | `cycle-list` |
| 3,471 | `cycle-more` |
| 3,472 | `cycle-more-label` |
| 3,481 | `calendar-cycle` |
| 3,482 | `calendar-cycle-slot` |
| 3,533 | `seasons-kicker` |
| 3,534 | `seasons-rows` |
| 3,538 | `framework-kicker` |
| 3,540 | `framework-rows` |
| 3,547 | `more-menu` |
| 3,550 | `menu-back` |
| 3,564 | `sources-open` |
| 3,572 | `appearance-current` |
| 3,580 | `sheet-howto` |
| 3,624 | `sheet-book` |
| 3,656 | `sheet-appearance` |
| 3,664 | `theme-toggle` |
| 3,671 | `sheet-contact` |
| 3,680 | `contact-form` |
| 3,681 | `contact-title` |
| 3,682 | `contact-message` |
| 3,684 | `contact-hint` |
| 3,685 | `contact-send` |
| 3,694 | `sheet-sources` |
| 3,697 | `sources-back` |
| 3,704 | `asof-text` |
| 3,705 | `sources-groups` |
| 3,712 | `detail-backdrop` |
| 3,714 | `detail-modal-close` |
| 3,715 | `detail-modal-body` |

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

