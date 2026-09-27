# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,806 lines**, about 1154 KB, roughly **328 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `7762b3f` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,026 | the whole stylesheet, every token and rule |
| **Markup** | 3,027–3,751 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,752–13,753 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,754–13,806 | </body></html> |

Counts: **244** top-level functions, **178** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,757_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,761 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,762 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,763 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,781 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,785 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,790_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,800 | `wheelMeta` | `var wheelMeta =` |
| 3,811 | `seasonOverride` | `var seasonOverride =` |
| 3,814 | `cycleNowNote` | `var cycleNowNote =` |
| 3,823 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,909 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,954 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,967_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,984 | `LIVE` | `function LIVE(` |
| 4,011 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,019 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,020 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,023_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,054 | `repaintFigureText` | `function repaintFigureText(` |
| 4,062 | `repaintTag` | `function repaintTag(` |
| 4,072 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,097 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,105 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,113 | `REPAINT` | `var REPAINT =` |
| 4,130 | `liveAsOf` | `var liveAsOf =` |
| 4,131 | `fmtAsOf` | `function fmtAsOf(` |
| 4,136 | `applyLive` | `function applyLive(` |
| 4,212 | `repaintPolicy` | `function repaintPolicy(` |
| 4,262 | `GYN` | `var GYN =` |
| 4,282 | `refreshLiveData` | `function refreshLiveData(` |
| 4,323 | `fetchSiteData` | `function fetchSiteData(` |
| 4,353 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,367_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,368 | `yieldCurve` | `var yieldCurve =` |
| 4,381 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,405 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,417 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,445_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,450 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,474 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,498 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,522 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,549 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,574_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,583 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,593 | `uninvLagToday` | `var uninvLagToday =` |
| 4,605 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,618 | `gdpPeers` | `var gdpPeers =` |
| 4,659 | `gdpSrc` | `var gdpSrc =` |
| 4,660 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,665 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,678 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,716_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,738 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,748_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,764 | `stressScoreFor` | `function stressScoreFor(` |
| 4,770 | `stressScore` | `var stressScore =` |
| 4,776 | `powerOf` | `var powerOf =` |
| 4,777 | `powerScore` | `var powerScore =` |
| 4,794 | `stressHistory` | `var stressHistory =` |
| 4,805 | `powerMeter` | `var powerMeter =` |
| 4,807 | `stressNoteFull` | `var stressNoteFull =` |
| 4,839 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,841_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,864 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,865 | `deficitHistory` | `var deficitHistory =` |
| 4,868 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,875 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,877 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 4,920 | `fedFundsHistory` | `var fedFundsHistory =` |
| 4,921 | `fearCurveHistory` | `var fearCurveHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,938_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,951 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,964_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,978 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,981 | `timelineSpan` | `function timelineSpan(` |
| 4,987 | `timelineFor` | `function timelineFor(` |
| 5,000 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,006_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,012 | `windowScale` | `function windowScale(` |
| 5,028 | `windowYears` | `function windowYears(` |
| 5,046 | `refName` | `function refName(` |
| 5,053 | `histReadEnsure` | `function histReadEnsure(` |
| 5,092 | `seatBandReading` | `function seatBandReading(` |
| 5,115 | `histReadFill` | `function histReadFill(` |
| 5,243 | `histAxisEnds` | `function histAxisEnds(` |
| 5,254 | `histLegend` | `function histLegend(` |
| 5,342 | `refitHistory` | `function refitHistory(` |
| 5,354 | `wireHistHover` | `function wireHistHover(` |
| 5,413 | `mWindowFrom` | `function mWindowFrom(` |
| 5,418 | `qWindowFrom` | `function qWindowFrom(` |
| 5,423 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,424 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,426 | `DEF_1983` | `var DEF_1983 =` |
| 5,428 | `defFrom` | `function defFrom(` |
| 5,439 | `deficitChart` | `function deficitChart(` |
| 5,529 | `deficitBlock` | `function deficitBlock(` |
| 5,591 | `buffettHistory` | `var buffettHistory =` |
| 5,621 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,622 | `hyDates` | `var hyDates =` |
| 5,623 | `hyOas` | `var hyOas =` |
| 5,624 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,631 | `hyAt` | `function hyAt(` |
| 5,635 | `hyLabel` | `function hyLabel(` |
| 5,636 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,637 | `hyNum` | `function hyNum(` |
| 5,638 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,648 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,658 | `capeHistory` | `var capeHistory =` |
| 5,660 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,678_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,684 | `sentiment` | `var sentiment =` |
| 5,702 | `valuation` | `var valuation =` |
| 5,739 | `valRow` | `function valRow(` |
| 5,747 | `coincident` | `var coincident =` |
| 5,808 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,826 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,827 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,828 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,830_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,843 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,844 | `m2vHistory` | `var m2vHistory =` |
| 5,864 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,957 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,047 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,048 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,088_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,094 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,095 | `DOTS` | `var DOTS =` |
| 6,097 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,133 | `histHead` | `function histHead(` |
| 6,154 | `headNoteIdx` | `var headNoteIdx =` |
| 6,155 | `headMenuHtml` | `function headMenuHtml(` |
| 6,175 | `headMenuFor` | `var headMenuFor =` |
| 6,176 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,205 | `nameWithMark` | `function nameWithMark(` |
| 6,211 | `panelRow` | `function panelRow(` |
| 6,237 | `panelFromMeter` | `function panelFromMeter(` |
| 6,251 | `meterFlagged` | `function meterFlagged(` |
| 6,262 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,290 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,304 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,323 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,342 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,356 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,381 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,412 | `desireBlock` | `function desireBlock(` |
| 6,439 | `volumeBlock` | `function volumeBlock(` |
| 6,464 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,487 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,495_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,508 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,509 | `m2Level` | `var m2Level =` |
| 6,531 | `m2Yoy` | `var m2Yoy =` |
| 6,532 | `M2_NORM` | `var M2_NORM =` |
| 6,537 | `volumeVerdict` | `function volumeVerdict(` |
| 6,574 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,575 | `unempHistory` | `var unempHistory =` |
| 6,581 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,596 | `NROU_NOW` | `var NROU_NOW =` |
| 6,597 | `unempState` | `function unempState(` |
| 6,603 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,668 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,669 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,672 | `qAtIndex` | `function qAtIndex(` |
| 6,673 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,681_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,696 | `householdsChart` | `function householdsChart(` |
| 6,764 | `lastChartAvg` | `var lastChartAvg =` |
| 6,765 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,850 | `GDP_NORM` | `var GDP_NORM =` |
| 6,856 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,857 | `gdpNowQ` | `var gdpNowQ =` |
| 6,858 | `gdpMeter` | `var gdpMeter =` |
| 6,861 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,883 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,949 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,013 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,021 | `velocityVerdict` | `function velocityVerdict(` |
| 7,029 | `derivePulseTag` | `function derivePulseTag(` |
| 7,035 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,095_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,104 | `seasonReading` | `var seasonReading =` |
| 7,153 | `frameworkRows` | `var frameworkRows =` |
| 7,163 | `vixRow` | `var vixRow =` |
| 7,171 | `vixWordOf` | `var vixWordOf =` |
| 7,175 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,190_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,194 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,203_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,204 | `calendarTodayY` | `var calendarTodayY =` |
| 7,235 | `vix3mClose` | `var vix3mClose =` |
| 7,236 | `fearCurve` | `function fearCurve(` |
| 7,243 | `curveVerdict` | `function curveVerdict(` |
| 7,250 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,255 | `valuationVerdict` | `function valuationVerdict(` |
| 7,273 | `sparkHtml` | `function sparkHtml(` |
| 7,292 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,298_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,311 | `modeBar` | `function modeBar(` |
| 7,326 | `pickerOpen` | `var pickerOpen =` |
| 7,330 | `cycleByName` | `function cycleByName(` |
| 7,334 | `openCycle` | `function openCycle(` |
| 7,340 | `cycleSlice` | `function cycleSlice(` |
| 7,349 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,357 | `cycleMonths` | `function cycleMonths(` |
| 7,376 | `histControls` | `function histControls(` |
| 7,390 | `cycLabel` | `function cycLabel(` |
| 7,406 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,415 | `cyclePicker` | `function cyclePicker(` |
| 7,434 | `rangeBar` | `function rangeBar(` |
| 7,446 | `trendOf` | `function trendOf(` |
| 7,491 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,501 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,522_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,523 | `yearOf` | `function yearOf(` |
| 7,524 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,525_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,555 | `totalStat` | `function totalStat(` |
| 7,561 | `atQuarter` | `function atQuarter(` |
| 7,562 | `atMonth` | `function atMonth(` |
| 7,563 | `cycleAverages` | `function cycleAverages(` |
| 7,570 | `ordinal` | `function ordinal(` |
| 7,571 | `hiCard` | `function hiCard(` |
| 7,582 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,596_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,603 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,619 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,626 | `moreRow` | `function moreRow(` |
| 7,632 | `powerPageNote` | `var powerPageNote =` |
| 7,633 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,639_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,642 | `xLabelOf` | `function xLabelOf(` |
| 7,662 | `fitGroup` | `function fitGroup(` |
| 7,684 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,743_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,767 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,777 | `vGrid` | `function vGrid(` |
| 7,802 | `COL_FILL` | `var COL_FILL =` |
| 7,835 | `colPath` | `function colPath(` |
| 7,840 | `colWidth` | `function colWidth(` |
| 7,887 | `AXIS` | `var AXIS =` |
| 7,888 | `chartAxes` | `function chartAxes(` |
| 7,948 | `divergeChart` | `function divergeChart(` |
| 8,016 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,045_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,053 | `maxIn` | `function maxIn(` |
| 8,071 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,085 | `PEEK_W` | `var PEEK_W =` |
| 8,088 | `PEEK_H` | `var PEEK_H =` |
| 8,093 | `colPeek` | `function colPeek(` |
| 8,120 | `meterPeek` | `function meterPeek(` |
| 8,137 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,142 | `pressureZone` | `function pressureZone(` |
| 8,157 | `HZN_BACK` | `var HZN_BACK =` |
| 8,158 | `hznLast` | `function hznLast(` |
| 8,159 | `hznBack` | `function hznBack(` |
| 8,160 | `horizonWord` | `function horizonWord(` |
| 8,185 | `HZN_METERS` | `var HZN_METERS =` |
| 8,193 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,217 | `_hznPanel` | `var _hznPanel =` |
| 8,218 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,238 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,239 | `levelZone` | `function levelZone(` |
| 8,251 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,256 | `RISK_RISK` | `var RISK_RISK =` |
| 8,261 | `riskCell` | `function riskCell(` |
| 8,262 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,293 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,318_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,339 | `pulseClipN` | `var pulseClipN =` |
| 8,340 | `beatPath` | `function beatPath(` |
| 8,365 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,379 | `pulsePeek` | `function pulsePeek(` |
| 8,387 | `pulseBlock` | `function pulseBlock(` |
| 8,407 | `CHEV` | `var CHEV =` |
| 8,409 | `peekCard` | `function peekCard(` |
| 8,463 | `dropSvg` | `function dropSvg(` |
| 8,475 | `volumeSvg` | `function volumeSvg(` |
| 8,482 | `gaugeSvg` | `function gaugeSvg(` |
| 8,486 | `diamondSvg` | `function diamondSvg(` |
| 8,500 | `energyFromReserve` | `function energyFromReserve(` |
| 8,512 | `sproutSvg` | `function sproutSvg(` |
| 8,523 | `markSvg` | `function markSvg(` |
| 8,527 | `flameSvg` | `function flameSvg(` |
| 8,531 | `gearSvg` | `function gearSvg(` |
| 8,543 | `thermoSvg` | `function thermoSvg(` |
| 8,562 | `trendUpSvg` | `function trendUpSvg(` |
| 8,564 | `ecgSvg` | `function ecgSvg(` |
| 8,578 | `circulationSvg` | `function circulationSvg(` |
| 8,579 | `weatherSvg` | `function weatherSvg(` |
| 8,600 | `moodSvg` | `function moodSvg(` |
| 8,624 | `boltSvg` | `function boltSvg(` |
| 8,627 | `houseSvg` | `function houseSvg(` |
| 8,635 | `sunriseSvg` | `function sunriseSvg(` |
| 8,645 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,657 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,674_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,695 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,696 | `dsrHistory` | `var dsrHistory =` |
| 8,697 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,698 | `savHistory` | `var savHistory =` |
| 8,703 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,713 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,714 | `dsrNow` | `var dsrNow =` |
| 8,715 | `savNow` | `var savNow =` |
| 8,716 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,721 | `householdsWord` | `function householdsWord(` |
| 8,728 | `householdsNow` | `var householdsNow =` |
| 8,735 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,736 | `dsrMeter` | `var dsrMeter =` |
| 8,739 | `savMeter` | `var savMeter =` |
| 8,742 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,759 | `savInfoHtml` | `function savInfoHtml(` |
| 8,777 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,786 | `curveNow` | `var curveNow =` |
| 8,787 | `curveTag` | `var curveTag =` |
| 8,788 | `curveSub` | `var curveSub =` |
| 8,792 | `curvePct` | `function curvePct(` |
| 8,793 | `curveNoteFull` | `var curveNoteFull =` |
| 8,808 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,816 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,857 | `marketCycles` | `var marketCycles =` |
| 8,887 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,889_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,910 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,911 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,916_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,937 | `slopeOf` | `function slopeOf(` |
| 8,948 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,954 | `readSeason` | `function readSeason(` |
| 8,979 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,981 | `qLabel` | `function qLabel(` |
| 9,005 | `regimeTrack` | `function regimeTrack(` |
| 9,028 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,030_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,037 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,038 | `seasonTitle` | `function seasonTitle(` |
| 9,039 | `monthLabel` | `function monthLabel(` |
| 9,040 | `cycleModel` | `function cycleModel(` |
| 9,092 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,100 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,107 | `nowModel` | `var nowModel =` |
| 9,108 | `readingNow` | `var readingNow =` |
| 9,109 | `cpiNow` | `var cpiNow =` |
| 9,110 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,111 | `currentSeason` | `var currentSeason =` |
| 9,112 | `seasonWhy` | `var seasonWhy =` |
| 9,129 | `seasonGroup` | `function seasonGroup(` |
| 9,143 | `arcGauge` | `function arcGauge(` |
| 9,185 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,198 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,200 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,204 | `policyFacts` | `function policyFacts(` |
| 9,216 | `allSources` | `var allSources =` |
| 9,240 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,273_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,276 | `SVG_NS` | `var SVG_NS =` |
| 9,277 | `svgEl` | `function svgEl(` |
| 9,290 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,326_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,327 | `clampPct` | `function clampPct(` |
| 9,334 | `infoIcon` | `function infoIcon(` |
| 9,343 | `detailTexts` | `var detailTexts =` |
| 9,361 | `detailSlots` | `var detailSlots =` |
| 9,362 | `detailSlot` | `function detailSlot(` |
| 9,373 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,377 | `_growthPanel` | `var _growthPanel =` |
| 9,378 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,384 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,395 | `facts` | `function facts(` |
| 9,396 | `factsFrom` | `function factsFrom(` |
| 9,400 | `expandBtn` | `function expandBtn(` |
| 9,406 | `sheetRenderers` | `var sheetRenderers =` |
| 9,423 | `pageMode` | `var pageMode =` |
| 9,430 | `pageCycles` | `var pageCycles =` |
| 9,435 | `pageRange` | `var pageRange =` |
| 9,441 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,475_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,486 | `meterHtml` | `function meterHtml(` |
| 9,514 | `srcHtml` | `function srcHtml(` |
| 9,523 | `TIMING` | `var TIMING =` |
| 9,529 | `timingMark` | `function timingMark(` |
| 9,543 | `timingPill` | `function timingPill(` |
| 9,564 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,572 | `seatPageFoot` | `function seatPageFoot(` |
| 9,595 | `timingMembers` | `var timingMembers =` |
| 9,596 | `registerTiming` | `function registerTiming(` |
| 9,602 | `headHtml` | `function headHtml(` |
| 9,620 | `heldHighlights` | `var heldHighlights =` |
| 9,621 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,679_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,680 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,079_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,080 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,303_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,304 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,336_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,342 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,426_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,427 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,445_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,448 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,471_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,472 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,600_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,603 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,801_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,813 | `totalRiseIn` | `function totalRiseIn(` |
| 10,823 | `eraInflation` | `function eraInflation(` |
| 10,834 | `eraGrowth` | `function eraGrowth(` |
| 10,850 | `fmtSigned` | `function fmtSigned(` |
| 10,855 | `regimeArrow` | `function regimeArrow(` |
| 10,861 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,862 | `growthShown` | `function growthShown(` |
| 10,863 | `growthShownCap` | `function growthShownCap(` |
| 10,864 | `regimeState` | `function regimeState(` |
| 10,868 | `phaseClass` | `function phaseClass(` |
| 10,870 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,882 | `cycleViewEl` | `var cycleViewEl =` |
| 10,886 | `tempCard` | `var tempCard =` |
| 10,887 | `placeCharts` | `function placeCharts(` |
| 10,892 | `shownEra` | `var shownEra =` |
| 10,893 | `calendarReset` | `var calendarReset =` |
| 10,894 | `metricPageReset` | `var metricPageReset =` |
| 10,895 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,898 | `topbarBack` | `var topbarBack =` |
| 10,899 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,906_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,907 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,068_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,069 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,087_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,090 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,111_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,117 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,120 | `hubSet` | `function hubSet(` |
| 11,133 | `quarterPopup` | `function quarterPopup(` |
| 11,166 | `hubShowDefault` | `function hubShowDefault(` |
| 11,175 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,181 | `hubShowYear` | `function hubShowYear(` |
| 11,196 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,288_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,291 | `tempState` | `var tempState =` |
| 11,294 | `chartLink` | `var chartLink =` |
| 11,314 | `m2Step` | `function m2Step(` |
| 11,317 | `heatStep` | `function heatStep(` |
| 11,321 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,508_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,511 | `drawGrowth` | `function drawGrowth(` |
| 11,650 | `wireResize` | `function wireResize(` |
| 11,656 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,668_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,669 | `renderCycleView` | `function renderCycleView(` |
| 11,722 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,733 | `PEER_CARET` | `var PEER_CARET =` |
| 11,734 | `peerList` | `function peerList(` |
| 11,735 | `peerChosen` | `function peerChosen(` |
| 11,736 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,740 | `renderPeerPills` | `function renderPeerPills(` |
| 11,790 | `shownEraModel` | `var shownEraModel =` |
| 11,791 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,793_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,795 | `stripGroupName` | `var stripGroupName =` |
| 11,796 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,842 | `marketStripHtml` | `function marketStripHtml(` |
| 11,905 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,906 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,936_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,937 | `renderCycleList` | `function renderCycleList(` |
| 12,027 | `renderSignsList` | `function renderSignsList(` |
| 12,303 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,552_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,553 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,615_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,616 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,649_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,650 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,980–3,983 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,166–8,179 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,988–9,001 | `seasonTrackAll` | The season, computed |
| 9,023–9,027 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,013 |
| `desire-range` | 10,004 |
| `fear-range` | 10,564 |
| `hzn-range` | 10,375 |
| `pulse-range` | 9,955 |
| `sheet-marker-deficit` | 13,010 |
| `sheet-metric-gdp` | 12,894 |
| `sheet-metric-households` | 13,044 |
| `sheet-metric-power` | 12,973 |
| `sheet-metric-temp` | 12,844 |
| `sheet-metric-valuation` | 13,086 |
| `sheet-sign-activity` | 12,955 |
| `sheet-sign-desire` | 10,005 |
| `sheet-sign-horizon` | 10,376 |
| `sheet-sign-pulse` | 9,954 |
| `sheet-sign-volume` | 9,978 |
| `sheet-sign-yield` | 9,920 |
| `volume-range` | 9,979 |
| `ylm-range` | 9,922 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,019 |
| `desire-range` | 9,987 |
| `fear-range` | 10,526 |
| `hzn-range` | 10,352 |
| `pulse-range` | 9,932 |
| `sheet-metric-gdp` | 12,895 |
| `sheet-metric-power` | 12,974 |
| `sheet-metric-temp` | 12,845 |
| `sheet-metric-valuation` | 13,087 |
| `volume-range` | 9,959 |
| `ylm-range` | 10,033 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,098 |
| `sheet-metric-gdp` | 6,099 |
| `sheet-sign-activity` | 6,106 |
| `sheet-metric-power` | 6,107 |
| `sheet-metric-valuation` | 6,109 |
| `sheet-metric-households` | 6,110 |
| `deficit-range` | 6,111 |
| `volume-range` | 6,112 |
| `pulse-range` | 6,113 |
| `hzn-range` | 6,114 |
| `ylm-range` | 6,129 |
| `desire-range` | 6,130 |
| `fear-range` | 6,131 |

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
| 2,421 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,469 | hero: yield curve |
| 2,565 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,644 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,743 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,768 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,783 | long cycle (structural layer) |
| 2,824 | indicator grid |
| 2,867 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,884 | info icon + popover (progressive disclosure for longer notes) |
| 2,905 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,000 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (146), which is what the renderers fill:

| Line | id |
|---|---|
| 3,032 | `topbar-back` |
| 3,035 | `topbar-title` |
| 3,036 | `menu-btn` |
| 3,053 | `main` |
| 3,060 | `cycle-view` |
| 3,068 | `cycle-kicker` |
| 3,074 | `cycle-dial` |
| 3,076 | `season-wheel-hub-date` |
| 3,077 | `season-wheel-hub-theme` |
| 3,078 | `season-wheel-hub-detail` |
| 3,086 | `temp-card` |
| 3,088 | `temp-kicker` |
| 3,089 | `temp-sub` |
| 3,092 | `temp-svg` |
| 3,093 | `temp-tooltip` |
| 3,099 | `temp-stats` |
| 3,106 | `growth-card` |
| 3,109 | `growth-kicker` |
| 3,109 | `growth-phase` |
| 3,109 | `growth-sub` |
| 3,109 | `growth-peers` |
| 3,110 | `growth-svg` |
| 3,110 | `growth-tooltip` |
| 3,115 | `growth-stats` |
| 3,124 | `today-analysis` |
| 3,128 | `peek-row` |
| 3,132 | `sheet-metric-temp` |
| 3,133 | `temp-timing` |
| 3,134 | `temp-chart` |
| 3,136 | `temp-rangebar` |
| 3,138 | `temp-head` |
| 3,139 | `slot-temp` |
| 3,140 | `temp-history` |
| 3,141 | `temp-hist-tooltip` |
| 3,144 | `temp-trend` |
| 3,148 | `temp-highlights` |
| 3,151 | `sheet-metric-gdp` |
| 3,152 | `gdp-timing` |
| 3,153 | `gdp-chart` |
| 3,154 | `gdp-rangebar` |
| 3,156 | `gdp-head` |
| 3,157 | `slot-growth` |
| 3,158 | `gdp-history` |
| 3,159 | `gdp-hist-tooltip` |
| 3,160 | `gdp-yoy` |
| 3,170 | `gdp-trend` |
| 3,172 | `gdp-panel` |
| 3,177 | `subj-ring-gdp` |
| 3,179 | `subj-label-gdp` |
| 3,180 | `subj-value-gdp` |
| 3,181 | `subj-say-gdp` |
| 3,182 | `subj-spark-gdp` |
| 3,187 | `subj-ctx-gdp` |
| 3,190 | `gdp-highlights` |
| 3,198 | `sheet-metric-power` |
| 3,199 | `power-timing` |
| 3,200 | `power-head` |
| 3,201 | `power-chart` |
| 3,205 | `subj-ring-resilience` |
| 3,208 | `subj-value-resilience` |
| 3,209 | `subj-say-resilience` |
| 3,214 | `subj-ctx-resilience` |
| 3,218 | `longcycle-title` |
| 3,220 | `longcycle-tag` |
| 3,234 | `power-highlights` |
| 3,241 | `sheet-marker-deficit` |
| 3,247 | `sheet-metric-households` |
| 3,248 | `households-timing` |
| 3,249 | `households-chart` |
| 3,250 | `households-highlights` |
| 3,254 | `sheet-metric-valuation` |
| 3,255 | `valuation-timing` |
| 3,256 | `valuation-head` |
| 3,257 | `valuation-chart` |
| 3,261 | `subj-ring-valuation` |
| 3,264 | `subj-value-valuation` |
| 3,265 | `subj-say-valuation` |
| 3,270 | `subj-ctx-valuation` |
| 3,274 | `valuation-title` |
| 3,276 | `valuation-tag` |
| 3,283 | `valuation-highlights` |
| 3,289 | `subj-ring-yield` |
| 3,292 | `subj-value-yield` |
| 3,293 | `subj-say-yield` |
| 3,294 | `subj-spark-yield` |
| 3,325 | `ylm-series` |
| 3,330 | `ylm-head` |
| 3,331 | `ylm-shell` |
| 3,332 | `ylm-svg` |
| 3,333 | `ylm-tooltip` |
| 3,336 | `ylm-trend` |
| 3,339 | `pressure-insights` |
| 3,340 | `pressure-highlights` |
| 3,366 | `subj-value-horizon` |
| 3,367 | `subj-say-horizon` |
| 3,368 | `subj-spark-horizon` |
| 3,378 | `hzn-timeline` |
| 3,380 | `hzn-head` |
| 3,381 | `spread-history-shell` |
| 3,382 | `spread-history-svg` |
| 3,383 | `spread-history-tooltip` |
| 3,386 | `hzn-trend` |
| 3,388 | `hzn-panel` |
| 3,390 | `horizon-insights` |
| 3,391 | `horizon-highlights` |
| 3,398 | `subj-ring-sentiment` |
| 3,401 | `subj-value-sentiment` |
| 3,402 | `subj-say-sentiment` |
| 3,403 | `subj-spark-sentiment` |
| 3,415 | `curve-gauge` |
| 3,418 | `fear-history` |
| 3,419 | `curve-vix` |
| 3,420 | `curve-highlights` |
| 3,434 | `signs-list` |
| 3,445 | `calendar-list` |
| 3,450 | `indicators-peek` |
| 3,496 | `cycle-list` |
| 3,502 | `cycle-more` |
| 3,503 | `cycle-more-label` |
| 3,512 | `calendar-cycle` |
| 3,513 | `calendar-cycle-slot` |
| 3,564 | `seasons-kicker` |
| 3,565 | `seasons-rows` |
| 3,569 | `framework-kicker` |
| 3,571 | `framework-rows` |
| 3,578 | `more-menu` |
| 3,581 | `menu-back` |
| 3,595 | `sources-open` |
| 3,603 | `appearance-current` |
| 3,611 | `sheet-howto` |
| 3,655 | `sheet-book` |
| 3,687 | `sheet-appearance` |
| 3,695 | `theme-toggle` |
| 3,702 | `sheet-contact` |
| 3,711 | `contact-form` |
| 3,712 | `contact-title` |
| 3,713 | `contact-message` |
| 3,715 | `contact-hint` |
| 3,716 | `contact-send` |
| 3,725 | `sheet-sources` |
| 3,728 | `sources-back` |
| 3,735 | `asof-text` |
| 3,736 | `sources-groups` |
| 3,743 | `detail-backdrop` |
| 3,745 | `detail-modal-close` |
| 3,746 | `detail-modal-body` |

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

