# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,529 lines**, about 1108 KB, roughly **315 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `2944a02` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,000 | the whole stylesheet, every token and rule |
| **Markup** | 3,001–3,723 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,724–13,476 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,477–13,529 | </body></html> |

Counts: **245** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,729_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,733 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,734 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,735 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,753 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,757 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,762_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,772 | `wheelMeta` | `var wheelMeta =` |
| 3,783 | `seasonOverride` | `var seasonOverride =` |
| 3,786 | `cycleNowNote` | `var cycleNowNote =` |
| 3,795 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,881 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,926 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,939_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,956 | `LIVE` | `function LIVE(` |
| 3,983 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,991 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,992 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,995_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,026 | `repaintFigureText` | `function repaintFigureText(` |
| 4,034 | `repaintTag` | `function repaintTag(` |
| 4,044 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,069 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,077 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,085 | `REPAINT` | `var REPAINT =` |
| 4,102 | `liveAsOf` | `var liveAsOf =` |
| 4,103 | `fmtAsOf` | `function fmtAsOf(` |
| 4,108 | `applyLive` | `function applyLive(` |
| 4,184 | `repaintPolicy` | `function repaintPolicy(` |
| 4,234 | `GYN` | `var GYN =` |
| 4,254 | `refreshLiveData` | `function refreshLiveData(` |
| 4,295 | `fetchSiteData` | `function fetchSiteData(` |
| 4,325 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,339_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,340 | `yieldCurve` | `var yieldCurve =` |
| 4,353 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,377 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,389 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,417_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,422 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,446 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,470 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,494 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,521 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,546_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,555 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,565 | `uninvLagToday` | `var uninvLagToday =` |
| 4,577 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,590 | `gdpPeers` | `var gdpPeers =` |
| 4,631 | `gdpSrc` | `var gdpSrc =` |
| 4,632 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,637 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,650 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,688_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,710 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,720_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,736 | `stressScoreFor` | `function stressScoreFor(` |
| 4,742 | `stressScore` | `var stressScore =` |
| 4,748 | `powerOf` | `var powerOf =` |
| 4,749 | `powerScore` | `var powerScore =` |
| 4,766 | `stressHistory` | `var stressHistory =` |
| 4,777 | `powerMeter` | `var powerMeter =` |
| 4,779 | `stressNoteFull` | `var stressNoteFull =` |
| 4,811 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,813_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,836 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,837 | `deficitHistory` | `var deficitHistory =` |
| 4,840 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,847 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,849 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,892_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,905 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,918_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,932 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,935 | `timelineSpan` | `function timelineSpan(` |
| 4,941 | `timelineFor` | `function timelineFor(` |
| 4,954 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,960_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,966 | `windowScale` | `function windowScale(` |
| 4,982 | `windowYears` | `function windowYears(` |
| 5,000 | `refName` | `function refName(` |
| 5,007 | `histReadEnsure` | `function histReadEnsure(` |
| 5,046 | `seatBandReading` | `function seatBandReading(` |
| 5,069 | `histReadFill` | `function histReadFill(` |
| 5,183 | `histAxisEnds` | `function histAxisEnds(` |
| 5,194 | `histLegend` | `function histLegend(` |
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
| 5,872 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,962 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,963 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,003_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,009 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,010 | `DOTS` | `var DOTS =` |
| 6,012 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,037 | `histHead` | `function histHead(` |
| 6,058 | `headNoteIdx` | `var headNoteIdx =` |
| 6,059 | `headMenuHtml` | `function headMenuHtml(` |
| 6,079 | `headMenuFor` | `var headMenuFor =` |
| 6,080 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,106 | `nameWithMark` | `function nameWithMark(` |
| 6,112 | `panelRow` | `function panelRow(` |
| 6,138 | `panelFromMeter` | `function panelFromMeter(` |
| 6,152 | `meterFlagged` | `function meterFlagged(` |
| 6,163 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,191 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,205 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,224 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,243 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,257 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,282 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,313 | `desireBlock` | `function desireBlock(` |
| 6,340 | `volumeBlock` | `function volumeBlock(` |
| 6,365 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,388 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,396_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,409 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,410 | `m2Level` | `var m2Level =` |
| 6,432 | `m2Yoy` | `var m2Yoy =` |
| 6,433 | `M2_NORM` | `var M2_NORM =` |
| 6,438 | `volumeVerdict` | `function volumeVerdict(` |
| 6,475 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,476 | `unempHistory` | `var unempHistory =` |
| 6,482 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,497 | `NROU_NOW` | `var NROU_NOW =` |
| 6,498 | `unempState` | `function unempState(` |
| 6,504 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,569 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,570 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,573 | `qAtIndex` | `function qAtIndex(` |
| 6,574 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,582_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,597 | `householdsChart` | `function householdsChart(` |
| 6,667 | `lastChartAvg` | `var lastChartAvg =` |
| 6,668 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,753 | `GDP_NORM` | `var GDP_NORM =` |
| 6,759 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,760 | `gdpNowQ` | `var gdpNowQ =` |
| 6,761 | `gdpMeter` | `var gdpMeter =` |
| 6,764 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,786 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,852 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,916 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,924 | `velocityVerdict` | `function velocityVerdict(` |
| 6,932 | `derivePulseTag` | `function derivePulseTag(` |
| 6,938 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,998_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,007 | `seasonReading` | `var seasonReading =` |
| 7,056 | `frameworkRows` | `var frameworkRows =` |
| 7,066 | `vixRow` | `var vixRow =` |
| 7,074 | `vixWordOf` | `var vixWordOf =` |
| 7,078 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,093_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,097 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,106_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,107 | `calendarTodayY` | `var calendarTodayY =` |
| 7,138 | `vix3mClose` | `var vix3mClose =` |
| 7,139 | `fearCurve` | `function fearCurve(` |
| 7,146 | `curveVerdict` | `function curveVerdict(` |
| 7,153 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,158 | `valuationVerdict` | `function valuationVerdict(` |
| 7,176 | `sparkHtml` | `function sparkHtml(` |
| 7,195 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,201_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,214 | `modeBar` | `function modeBar(` |
| 7,229 | `pickerOpen` | `var pickerOpen =` |
| 7,233 | `cycleByName` | `function cycleByName(` |
| 7,237 | `openCycle` | `function openCycle(` |
| 7,243 | `cycleSlice` | `function cycleSlice(` |
| 7,252 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,260 | `cycleMonths` | `function cycleMonths(` |
| 7,279 | `histControls` | `function histControls(` |
| 7,293 | `cycLabel` | `function cycLabel(` |
| 7,309 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,318 | `cyclePicker` | `function cyclePicker(` |
| 7,342 | `seriesBar` | `function seriesBar(` |
| 7,349 | `rangeBar` | `function rangeBar(` |
| 7,361 | `trendOf` | `function trendOf(` |
| 7,406 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,416 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,437_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,438 | `yearOf` | `function yearOf(` |
| 7,439 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,440_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,470 | `totalStat` | `function totalStat(` |
| 7,476 | `atQuarter` | `function atQuarter(` |
| 7,477 | `atMonth` | `function atMonth(` |
| 7,478 | `cycleAverages` | `function cycleAverages(` |
| 7,485 | `ordinal` | `function ordinal(` |
| 7,486 | `hiCard` | `function hiCard(` |
| 7,497 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,511_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,518 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,534 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,541 | `moreRow` | `function moreRow(` |
| 7,547 | `powerPageNote` | `var powerPageNote =` |
| 7,548 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,554_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,557 | `xLabelOf` | `function xLabelOf(` |
| 7,577 | `fitGroup` | `function fitGroup(` |
| 7,599 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,658_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,682 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,692 | `vGrid` | `function vGrid(` |
| 7,717 | `COL_FILL` | `var COL_FILL =` |
| 7,760 | `AXIS` | `var AXIS =` |
| 7,761 | `chartAxes` | `function chartAxes(` |
| 7,811 | `divergeChart` | `function divergeChart(` |
| 7,872 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,901_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,909 | `maxIn` | `function maxIn(` |
| 7,922 | `reserveGauge` | `function reserveGauge(` |
| 7,943 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,957 | `PEEK_W` | `var PEEK_W =` |
| 7,960 | `PEEK_H` | `var PEEK_H =` |
| 7,961 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,966 | `colPeek` | `function colPeek(` |
| 7,993 | `meterPeek` | `function meterPeek(` |
| 8,010 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,015 | `pressureZone` | `function pressureZone(` |
| 8,030 | `HZN_BACK` | `var HZN_BACK =` |
| 8,031 | `hznLast` | `function hznLast(` |
| 8,032 | `hznBack` | `function hznBack(` |
| 8,033 | `horizonWord` | `function horizonWord(` |
| 8,058 | `HZN_METERS` | `var HZN_METERS =` |
| 8,066 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,090 | `_hznPanel` | `var _hznPanel =` |
| 8,091 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,111 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,112 | `levelZone` | `function levelZone(` |
| 8,124 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,129 | `RISK_RISK` | `var RISK_RISK =` |
| 8,134 | `riskCell` | `function riskCell(` |
| 8,135 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,166 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,191_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,210 | `pulseClipN` | `var pulseClipN =` |
| 8,211 | `beatPath` | `function beatPath(` |
| 8,236 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,250 | `pulsePeek` | `function pulsePeek(` |
| 8,258 | `pulseBlock` | `function pulseBlock(` |
| 8,278 | `CHEV` | `var CHEV =` |
| 8,280 | `peekCard` | `function peekCard(` |
| 8,331 | `dropSvg` | `function dropSvg(` |
| 8,339 | `speakerSvg` | `function speakerSvg(` |
| 8,347 | `gaugeSvg` | `function gaugeSvg(` |
| 8,351 | `diamondSvg` | `function diamondSvg(` |
| 8,363 | `energyFromReserve` | `function energyFromReserve(` |
| 8,375 | `sproutSvg` | `function sproutSvg(` |
| 8,386 | `markSvg` | `function markSvg(` |
| 8,390 | `flameSvg` | `function flameSvg(` |
| 8,394 | `gearSvg` | `function gearSvg(` |
| 8,407 | `pulseSvg` | `function pulseSvg(` |
| 8,411 | `thermoSvg` | `function thermoSvg(` |
| 8,430 | `trendUpSvg` | `function trendUpSvg(` |
| 8,432 | `ecgSvg` | `function ecgSvg(` |
| 8,446 | `circulationSvg` | `function circulationSvg(` |
| 8,447 | `weatherSvg` | `function weatherSvg(` |
| 8,468 | `moodSvg` | `function moodSvg(` |
| 8,485 | `boltSvg` | `function boltSvg(` |
| 8,488 | `houseSvg` | `function houseSvg(` |
| 8,496 | `sunriseSvg` | `function sunriseSvg(` |
| 8,506 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,518 | `signMarks` | `var signMarks =` |
| 8,525 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,542_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,563 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,564 | `dsrHistory` | `var dsrHistory =` |
| 8,565 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,566 | `savHistory` | `var savHistory =` |
| 8,571 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,581 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,582 | `dsrNow` | `var dsrNow =` |
| 8,583 | `savNow` | `var savNow =` |
| 8,584 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,589 | `householdsWord` | `function householdsWord(` |
| 8,596 | `householdsNow` | `var householdsNow =` |
| 8,603 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,604 | `dsrMeter` | `var dsrMeter =` |
| 8,607 | `savMeter` | `var savMeter =` |
| 8,610 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,627 | `savInfoHtml` | `function savInfoHtml(` |
| 8,645 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,654 | `curveNow` | `var curveNow =` |
| 8,655 | `curveTag` | `var curveTag =` |
| 8,656 | `curveSub` | `var curveSub =` |
| 8,660 | `curvePct` | `function curvePct(` |
| 8,661 | `curveNoteFull` | `var curveNoteFull =` |
| 8,676 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,684 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,725 | `marketCycles` | `var marketCycles =` |
| 8,755 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,757_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,778 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,779 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,784_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,805 | `slopeOf` | `function slopeOf(` |
| 8,816 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,822 | `readSeason` | `function readSeason(` |
| 8,847 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,849 | `qLabel` | `function qLabel(` |
| 8,873 | `regimeTrack` | `function regimeTrack(` |
| 8,896 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,898_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,905 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,906 | `seasonTitle` | `function seasonTitle(` |
| 8,907 | `monthLabel` | `function monthLabel(` |
| 8,908 | `cycleModel` | `function cycleModel(` |
| 8,960 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,968 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,975 | `nowModel` | `var nowModel =` |
| 8,976 | `readingNow` | `var readingNow =` |
| 8,977 | `cpiNow` | `var cpiNow =` |
| 8,978 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,979 | `currentSeason` | `var currentSeason =` |
| 8,980 | `seasonWhy` | `var seasonWhy =` |
| 8,997 | `seasonGroup` | `function seasonGroup(` |
| 9,011 | `arcGauge` | `function arcGauge(` |
| 9,050 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,063 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,065 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,069 | `policyFacts` | `function policyFacts(` |
| 9,081 | `allSources` | `var allSources =` |
| 9,105 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,138_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,141 | `SVG_NS` | `var SVG_NS =` |
| 9,142 | `svgEl` | `function svgEl(` |
| 9,155 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,191_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,192 | `clampPct` | `function clampPct(` |
| 9,199 | `infoIcon` | `function infoIcon(` |
| 9,208 | `detailTexts` | `var detailTexts =` |
| 9,226 | `detailSlots` | `var detailSlots =` |
| 9,227 | `detailSlot` | `function detailSlot(` |
| 9,238 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,242 | `_growthPanel` | `var _growthPanel =` |
| 9,243 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,249 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,260 | `facts` | `function facts(` |
| 9,261 | `factsFrom` | `function factsFrom(` |
| 9,265 | `expandBtn` | `function expandBtn(` |
| 9,271 | `sheetRenderers` | `var sheetRenderers =` |
| 9,288 | `pageMode` | `var pageMode =` |
| 9,295 | `pageCycles` | `var pageCycles =` |
| 9,300 | `pageRange` | `var pageRange =` |
| 9,306 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,340_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,351 | `meterHtml` | `function meterHtml(` |
| 9,379 | `srcHtml` | `function srcHtml(` |
| 9,388 | `TIMING` | `var TIMING =` |
| 9,394 | `timingMark` | `function timingMark(` |
| 9,408 | `timingPill` | `function timingPill(` |
| 9,429 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,437 | `seatPageFoot` | `function seatPageFoot(` |
| 9,460 | `timingMembers` | `var timingMembers =` |
| 9,461 | `registerTiming` | `function registerTiming(` |
| 9,467 | `headHtml` | `function headHtml(` |
| 9,485 | `heldHighlights` | `var heldHighlights =` |
| 9,486 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,544_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,545 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,918_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,919 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,142_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,143 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,175_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,181 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,265_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,266 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,284_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,287 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,310_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,311 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,362_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,365 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,558_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,570 | `totalRiseIn` | `function totalRiseIn(` |
| 10,580 | `eraInflation` | `function eraInflation(` |
| 10,591 | `eraGrowth` | `function eraGrowth(` |
| 10,607 | `fmtSigned` | `function fmtSigned(` |
| 10,612 | `regimeArrow` | `function regimeArrow(` |
| 10,618 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,619 | `growthShown` | `function growthShown(` |
| 10,620 | `growthShownCap` | `function growthShownCap(` |
| 10,621 | `regimeState` | `function regimeState(` |
| 10,625 | `phaseClass` | `function phaseClass(` |
| 10,627 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,639 | `cycleViewEl` | `var cycleViewEl =` |
| 10,643 | `tempCard` | `var tempCard =` |
| 10,644 | `placeCharts` | `function placeCharts(` |
| 10,649 | `shownEra` | `var shownEra =` |
| 10,650 | `calendarReset` | `var calendarReset =` |
| 10,651 | `metricPageReset` | `var metricPageReset =` |
| 10,652 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,655 | `topbarBack` | `var topbarBack =` |
| 10,656 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,663_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,664 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,825_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,826 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,844_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,847 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,868_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,874 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,877 | `hubSet` | `function hubSet(` |
| 10,890 | `quarterPopup` | `function quarterPopup(` |
| 10,923 | `hubShowDefault` | `function hubShowDefault(` |
| 10,932 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,938 | `hubShowYear` | `function hubShowYear(` |
| 10,953 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,045_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,048 | `tempState` | `var tempState =` |
| 11,051 | `chartLink` | `var chartLink =` |
| 11,071 | `m2Step` | `function m2Step(` |
| 11,074 | `heatStep` | `function heatStep(` |
| 11,078 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,265_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,268 | `drawGrowth` | `function drawGrowth(` |
| 11,407 | `wireResize` | `function wireResize(` |
| 11,413 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,425_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,426 | `renderCycleView` | `function renderCycleView(` |
| 11,479 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,490 | `PEER_CARET` | `var PEER_CARET =` |
| 11,491 | `peerList` | `function peerList(` |
| 11,492 | `peerChosen` | `function peerChosen(` |
| 11,493 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,497 | `renderPeerPills` | `function renderPeerPills(` |
| 11,547 | `shownEraModel` | `var shownEraModel =` |
| 11,548 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,550_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,552 | `stripGroupName` | `var stripGroupName =` |
| 11,553 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,599 | `marketStripHtml` | `function marketStripHtml(` |
| 11,662 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,663 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,693_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,694 | `renderCycleList` | `function renderCycleList(` |
| 11,784 | `renderSignsList` | `function renderSignsList(` |
| 12,040 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,275_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,276 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,338_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,339 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,372_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,373 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,952–3,955 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,039–8,052 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,856–8,869 | `seasonTrackAll` | The season, computed |
| 8,891–8,895 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,746 |
| `desire-range` | 9,864 |
| `hzn-range` | 10,214 |
| `pulse-range` | 9,815 |
| `sheet-marker-deficit` | 12,743 |
| `sheet-metric-gdp` | 12,631 |
| `sheet-metric-households` | 12,777 |
| `sheet-metric-power` | 12,710 |
| `sheet-metric-temp` | 12,581 |
| `sheet-metric-valuation` | 12,818 |
| `sheet-sign-activity` | 12,692 |
| `sheet-sign-desire` | 9,865 |
| `sheet-sign-horizon` | 10,215 |
| `sheet-sign-pulse` | 9,814 |
| `sheet-sign-volume` | 9,838 |
| `sheet-sign-yield` | 9,782 |
| `volume-range` | 9,839 |
| `ylm-range` | 9,910 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,752 |
| `desire-range` | 9,847 |
| `hzn-range` | 10,191 |
| `pulse-range` | 9,792 |
| `sheet-metric-gdp` | 12,632 |
| `sheet-metric-power` | 12,711 |
| `sheet-metric-temp` | 12,582 |
| `sheet-metric-valuation` | 12,819 |
| `volume-range` | 9,819 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,013 |
| `sheet-metric-gdp` | 6,014 |
| `sheet-sign-activity` | 6,015 |
| `sheet-metric-power` | 6,016 |
| `sheet-metric-valuation` | 6,018 |
| `sheet-metric-households` | 6,019 |
| `deficit-range` | 6,020 |
| `volume-range` | 6,021 |
| `pulse-range` | 6,022 |
| `hzn-range` | 6,023 |
| `ylm-range` | 6,034 |
| `desire-range` | 6,035 |

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
| 2,618 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,717 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,742 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,757 | long cycle (structural layer) |
| 2,798 | indicator grid |
| 2,841 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,858 | info icon + popover (progressive disclosure for longer notes) |
| 2,879 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,974 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (146), which is what the renderers fill:

| Line | id |
|---|---|
| 3,006 | `topbar-back` |
| 3,009 | `topbar-title` |
| 3,010 | `menu-btn` |
| 3,027 | `main` |
| 3,034 | `cycle-view` |
| 3,042 | `cycle-kicker` |
| 3,048 | `cycle-dial` |
| 3,050 | `season-wheel-hub-date` |
| 3,051 | `season-wheel-hub-theme` |
| 3,052 | `season-wheel-hub-detail` |
| 3,060 | `temp-card` |
| 3,062 | `temp-kicker` |
| 3,063 | `temp-sub` |
| 3,066 | `temp-svg` |
| 3,067 | `temp-tooltip` |
| 3,073 | `temp-stats` |
| 3,080 | `growth-card` |
| 3,083 | `growth-kicker` |
| 3,083 | `growth-phase` |
| 3,083 | `growth-sub` |
| 3,083 | `growth-peers` |
| 3,084 | `growth-svg` |
| 3,084 | `growth-tooltip` |
| 3,089 | `growth-stats` |
| 3,098 | `today-analysis` |
| 3,102 | `peek-row` |
| 3,106 | `sheet-metric-temp` |
| 3,107 | `temp-timing` |
| 3,108 | `temp-chart` |
| 3,110 | `temp-rangebar` |
| 3,112 | `temp-head` |
| 3,113 | `slot-temp` |
| 3,114 | `temp-history` |
| 3,115 | `temp-hist-tooltip` |
| 3,118 | `temp-trend` |
| 3,121 | `temp-panel` |
| 3,123 | `temp-highlights` |
| 3,126 | `sheet-metric-gdp` |
| 3,127 | `gdp-timing` |
| 3,128 | `gdp-chart` |
| 3,129 | `gdp-rangebar` |
| 3,131 | `gdp-head` |
| 3,132 | `slot-growth` |
| 3,133 | `gdp-history` |
| 3,134 | `gdp-hist-tooltip` |
| 3,135 | `gdp-yoy` |
| 3,145 | `gdp-trend` |
| 3,147 | `gdp-panel` |
| 3,152 | `subj-ring-gdp` |
| 3,154 | `subj-label-gdp` |
| 3,155 | `subj-value-gdp` |
| 3,156 | `subj-say-gdp` |
| 3,157 | `subj-spark-gdp` |
| 3,162 | `subj-ctx-gdp` |
| 3,165 | `gdp-highlights` |
| 3,173 | `sheet-metric-power` |
| 3,174 | `power-timing` |
| 3,175 | `power-head` |
| 3,176 | `power-chart` |
| 3,180 | `subj-ring-resilience` |
| 3,183 | `subj-value-resilience` |
| 3,184 | `subj-say-resilience` |
| 3,189 | `subj-ctx-resilience` |
| 3,193 | `longcycle-title` |
| 3,195 | `longcycle-tag` |
| 3,209 | `power-highlights` |
| 3,216 | `sheet-marker-deficit` |
| 3,222 | `sheet-metric-households` |
| 3,223 | `households-timing` |
| 3,224 | `households-chart` |
| 3,225 | `households-highlights` |
| 3,229 | `sheet-metric-valuation` |
| 3,230 | `valuation-timing` |
| 3,231 | `valuation-head` |
| 3,232 | `valuation-chart` |
| 3,236 | `subj-ring-valuation` |
| 3,239 | `subj-value-valuation` |
| 3,240 | `subj-say-valuation` |
| 3,245 | `subj-ctx-valuation` |
| 3,249 | `valuation-title` |
| 3,251 | `valuation-tag` |
| 3,258 | `valuation-highlights` |
| 3,264 | `subj-ring-yield` |
| 3,267 | `subj-value-yield` |
| 3,268 | `subj-say-yield` |
| 3,269 | `subj-spark-yield` |
| 3,300 | `ylm-series` |
| 3,305 | `ylm-head` |
| 3,306 | `ylm-shell` |
| 3,307 | `ylm-svg` |
| 3,308 | `ylm-tooltip` |
| 3,311 | `ylm-trend` |
| 3,314 | `pressure-insights` |
| 3,315 | `pressure-highlights` |
| 3,341 | `subj-value-horizon` |
| 3,342 | `subj-say-horizon` |
| 3,343 | `subj-spark-horizon` |
| 3,353 | `hzn-timeline` |
| 3,355 | `hzn-head` |
| 3,356 | `spread-history-shell` |
| 3,357 | `spread-history-svg` |
| 3,358 | `spread-history-tooltip` |
| 3,361 | `hzn-trend` |
| 3,363 | `hzn-panel` |
| 3,365 | `horizon-insights` |
| 3,366 | `horizon-highlights` |
| 3,373 | `subj-ring-sentiment` |
| 3,376 | `subj-value-sentiment` |
| 3,377 | `subj-say-sentiment` |
| 3,378 | `subj-spark-sentiment` |
| 3,390 | `curve-gauge` |
| 3,391 | `curve-vix` |
| 3,392 | `curve-highlights` |
| 3,406 | `signs-list` |
| 3,417 | `calendar-list` |
| 3,422 | `indicators-peek` |
| 3,468 | `cycle-list` |
| 3,474 | `cycle-more` |
| 3,475 | `cycle-more-label` |
| 3,484 | `calendar-cycle` |
| 3,485 | `calendar-cycle-slot` |
| 3,536 | `seasons-kicker` |
| 3,537 | `seasons-rows` |
| 3,541 | `framework-kicker` |
| 3,543 | `framework-rows` |
| 3,550 | `more-menu` |
| 3,553 | `menu-back` |
| 3,567 | `sources-open` |
| 3,575 | `appearance-current` |
| 3,583 | `sheet-howto` |
| 3,627 | `sheet-book` |
| 3,659 | `sheet-appearance` |
| 3,667 | `theme-toggle` |
| 3,674 | `sheet-contact` |
| 3,683 | `contact-form` |
| 3,684 | `contact-title` |
| 3,685 | `contact-message` |
| 3,687 | `contact-hint` |
| 3,688 | `contact-send` |
| 3,697 | `sheet-sources` |
| 3,700 | `sources-back` |
| 3,707 | `asof-text` |
| 3,708 | `sources-groups` |
| 3,715 | `detail-backdrop` |
| 3,717 | `detail-modal-close` |
| 3,718 | `detail-modal-body` |

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

