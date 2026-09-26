# Map of `index.html`

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

`index.html` is **13,181 lines**, about 1074 KB, roughly **305 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -n 'function moodFrom(' index.html` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `1aeb308` on 2026-09-26.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,911 | the whole stylesheet, every token and rule |
| **Markup** | 2,912–3,644 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,645–13,157 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,158–13,181 | </body></html> |

Counts: **244** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,650_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,654 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,655 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,656 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,674 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,678 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,683_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,693 | `wheelMeta` | `var wheelMeta =` |
| 3,704 | `seasonOverride` | `var seasonOverride =` |
| 3,707 | `cycleNowNote` | `var cycleNowNote =` |
| 3,716 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,802 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,847 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,860_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,877 | `LIVE` | `function LIVE(` |
| 3,904 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,912 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,913 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,916_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,947 | `repaintFigureText` | `function repaintFigureText(` |
| 3,955 | `repaintTag` | `function repaintTag(` |
| 3,965 | `repaintFearCurve` | `function repaintFearCurve(` |
| 3,990 | `repaintYieldRow` | `function repaintYieldRow(` |
| 3,998 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,006 | `REPAINT` | `var REPAINT =` |
| 4,023 | `liveAsOf` | `var liveAsOf =` |
| 4,024 | `fmtAsOf` | `function fmtAsOf(` |
| 4,029 | `applyLive` | `function applyLive(` |
| 4,105 | `repaintPolicy` | `function repaintPolicy(` |
| 4,155 | `GYN` | `var GYN =` |
| 4,175 | `refreshLiveData` | `function refreshLiveData(` |
| 4,216 | `fetchSiteData` | `function fetchSiteData(` |
| 4,246 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,260_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,261 | `yieldCurve` | `var yieldCurve =` |
| 4,274 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,298 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,305 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,311 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,338 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,340_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,345 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,369 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,393 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,417 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,444 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,469_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,478 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,488 | `uninvLagToday` | `var uninvLagToday =` |
| 4,500 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,513 | `gdpPeers` | `var gdpPeers =` |
| 4,554 | `gdpSrc` | `var gdpSrc =` |
| 4,555 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,560 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,573 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,611_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,633 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,643_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,659 | `stressScoreFor` | `function stressScoreFor(` |
| 4,665 | `stressScore` | `var stressScore =` |
| 4,671 | `powerOf` | `var powerOf =` |
| 4,672 | `powerScore` | `var powerScore =` |
| 4,689 | `stressHistory` | `var stressHistory =` |
| 4,700 | `powerMeter` | `var powerMeter =` |
| 4,702 | `stressNoteFull` | `var stressNoteFull =` |
| 4,734 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,736_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,759 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,760 | `deficitHistory` | `var deficitHistory =` |
| 4,763 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,770 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,772 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,815_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,828 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,841_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,855 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,858 | `timelineSpan` | `function timelineSpan(` |
| 4,864 | `timelineFor` | `function timelineFor(` |
| 4,877 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,883_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,889 | `windowScale` | `function windowScale(` |
| 4,905 | `windowYears` | `function windowYears(` |
| 4,923 | `refName` | `function refName(` |
| 4,930 | `histReadEnsure` | `function histReadEnsure(` |
| 4,961 | `seatBandReading` | `function seatBandReading(` |
| 4,984 | `histReadFill` | `function histReadFill(` |
| 5,020 | `wireHistHover` | `function wireHistHover(` |
| 5,079 | `mWindowFrom` | `function mWindowFrom(` |
| 5,084 | `qWindowFrom` | `function qWindowFrom(` |
| 5,089 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,090 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,092 | `DEF_1983` | `var DEF_1983 =` |
| 5,094 | `defFrom` | `function defFrom(` |
| 5,105 | `deficitChart` | `function deficitChart(` |
| 5,195 | `deficitBlock` | `function deficitBlock(` |
| 5,257 | `buffettHistory` | `var buffettHistory =` |
| 5,287 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,288 | `hyDates` | `var hyDates =` |
| 5,289 | `hyOas` | `var hyOas =` |
| 5,290 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,297 | `hyAt` | `function hyAt(` |
| 5,301 | `hyLabel` | `function hyLabel(` |
| 5,302 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,303 | `hyNum` | `function hyNum(` |
| 5,304 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,314 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,324 | `capeHistory` | `var capeHistory =` |
| 5,326 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,344_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,350 | `sentiment` | `var sentiment =` |
| 5,368 | `valuation` | `var valuation =` |
| 5,405 | `valRow` | `function valRow(` |
| 5,413 | `coincident` | `var coincident =` |
| 5,474 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,492 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,493 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,494 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,496_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,509 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,510 | `m2vHistory` | `var m2vHistory =` |
| 5,530 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,629 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,730 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,731 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 5,771_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,777 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,778 | `DOTS` | `var DOTS =` |
| 5,780 | `HIST_HEAD` | `var HIST_HEAD =` |
| 5,805 | `histHead` | `function histHead(` |
| 5,826 | `headNoteIdx` | `var headNoteIdx =` |
| 5,827 | `headMenuHtml` | `function headMenuHtml(` |
| 5,847 | `headMenuFor` | `var headMenuFor =` |
| 5,848 | `paintHeadMenus` | `function paintHeadMenus(` |
| 5,874 | `nameWithMark` | `function nameWithMark(` |
| 5,880 | `panelRow` | `function panelRow(` |
| 5,906 | `panelFromMeter` | `function panelFromMeter(` |
| 5,920 | `meterFlagged` | `function meterFlagged(` |
| 5,931 | `desireInfoHtml` | `function desireInfoHtml(` |
| 5,959 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 5,973 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 5,992 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,011 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,025 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,050 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,081 | `desireBlock` | `function desireBlock(` |
| 6,108 | `volumeBlock` | `function volumeBlock(` |
| 6,133 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,156 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,164_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,177 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,178 | `m2Level` | `var m2Level =` |
| 6,200 | `m2Yoy` | `var m2Yoy =` |
| 6,201 | `M2_NORM` | `var M2_NORM =` |
| 6,206 | `volumeVerdict` | `function volumeVerdict(` |
| 6,243 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,244 | `unempHistory` | `var unempHistory =` |
| 6,250 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,265 | `NROU_NOW` | `var NROU_NOW =` |
| 6,266 | `unempState` | `function unempState(` |
| 6,272 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,332 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,333 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,336 | `qAtIndex` | `function qAtIndex(` |
| 6,337 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,345_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,360 | `householdsChart` | `function householdsChart(` |
| 6,424 | `refKey` | `function refKey(` |
| 6,462 | `lastChartAvg` | `var lastChartAvg =` |
| 6,463 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,548 | `GDP_NORM` | `var GDP_NORM =` |
| 6,554 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,555 | `gdpNowQ` | `var gdpNowQ =` |
| 6,556 | `gdpMeter` | `var gdpMeter =` |
| 6,559 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,581 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,647 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,711 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,719 | `velocityVerdict` | `function velocityVerdict(` |
| 6,727 | `derivePulseTag` | `function derivePulseTag(` |
| 6,733 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,793_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,802 | `seasonReading` | `var seasonReading =` |
| 6,851 | `frameworkRows` | `var frameworkRows =` |
| 6,861 | `vixRow` | `var vixRow =` |
| 6,869 | `vixWordOf` | `var vixWordOf =` |
| 6,873 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 6,888_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,892 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 6,901_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,902 | `calendarTodayY` | `var calendarTodayY =` |
| 6,933 | `vix3mClose` | `var vix3mClose =` |
| 6,934 | `fearCurve` | `function fearCurve(` |
| 6,941 | `curveVerdict` | `function curveVerdict(` |
| 6,948 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 6,953 | `valuationVerdict` | `function valuationVerdict(` |
| 6,971 | `sparkHtml` | `function sparkHtml(` |
| 6,990 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 6,996_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,009 | `modeBar` | `function modeBar(` |
| 7,024 | `pickerOpen` | `var pickerOpen =` |
| 7,028 | `cycleByName` | `function cycleByName(` |
| 7,032 | `openCycle` | `function openCycle(` |
| 7,038 | `cycleSlice` | `function cycleSlice(` |
| 7,047 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,055 | `cycleMonths` | `function cycleMonths(` |
| 7,074 | `histControls` | `function histControls(` |
| 7,088 | `cycLabel` | `function cycLabel(` |
| 7,104 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,113 | `cyclePicker` | `function cyclePicker(` |
| 7,137 | `seriesBar` | `function seriesBar(` |
| 7,144 | `rangeBar` | `function rangeBar(` |
| 7,156 | `trendOf` | `function trendOf(` |
| 7,201 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,211 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,226_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,227 | `yearOf` | `function yearOf(` |
| 7,228 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,229_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,259 | `totalStat` | `function totalStat(` |
| 7,265 | `atQuarter` | `function atQuarter(` |
| 7,266 | `atMonth` | `function atMonth(` |
| 7,267 | `cycleAverages` | `function cycleAverages(` |
| 7,274 | `ordinal` | `function ordinal(` |
| 7,275 | `hiCard` | `function hiCard(` |
| 7,286 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,300_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,307 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,323 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,330 | `moreRow` | `function moreRow(` |
| 7,336 | `powerPageNote` | `var powerPageNote =` |
| 7,337 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,343_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,346 | `xLabelOf` | `function xLabelOf(` |
| 7,366 | `fitGroup` | `function fitGroup(` |
| 7,388 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,447_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,471 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,481 | `vGrid` | `function vGrid(` |
| 7,506 | `COL_FILL` | `var COL_FILL =` |
| 7,513 | `AXIS` | `var AXIS =` |
| 7,514 | `chartAxes` | `function chartAxes(` |
| 7,545 | `divergeChart` | `function divergeChart(` |
| 7,606 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,635_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,643 | `maxIn` | `function maxIn(` |
| 7,656 | `reserveGauge` | `function reserveGauge(` |
| 7,677 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,691 | `PEEK_W` | `var PEEK_W =` |
| 7,694 | `PEEK_H` | `var PEEK_H =` |
| 7,695 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,700 | `colPeek` | `function colPeek(` |
| 7,727 | `meterPeek` | `function meterPeek(` |
| 7,744 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,749 | `pressureZone` | `function pressureZone(` |
| 7,764 | `HZN_BACK` | `var HZN_BACK =` |
| 7,765 | `hznLast` | `function hznLast(` |
| 7,766 | `hznBack` | `function hznBack(` |
| 7,767 | `horizonWord` | `function horizonWord(` |
| 7,792 | `HZN_METERS` | `var HZN_METERS =` |
| 7,800 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 7,824 | `_hznPanel` | `var _hznPanel =` |
| 7,825 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 7,845 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 7,846 | `levelZone` | `function levelZone(` |
| 7,858 | `RISK_REWARD` | `var RISK_REWARD =` |
| 7,863 | `RISK_RISK` | `var RISK_RISK =` |
| 7,868 | `riskCell` | `function riskCell(` |
| 7,869 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 7,900 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 7,925_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,944 | `pulseClipN` | `var pulseClipN =` |
| 7,945 | `beatPath` | `function beatPath(` |
| 7,970 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 7,984 | `pulsePeek` | `function pulsePeek(` |
| 7,992 | `pulseBlock` | `function pulseBlock(` |
| 8,012 | `CHEV` | `var CHEV =` |
| 8,014 | `peekCard` | `function peekCard(` |
| 8,065 | `dropSvg` | `function dropSvg(` |
| 8,073 | `speakerSvg` | `function speakerSvg(` |
| 8,081 | `gaugeSvg` | `function gaugeSvg(` |
| 8,085 | `diamondSvg` | `function diamondSvg(` |
| 8,097 | `energyFromReserve` | `function energyFromReserve(` |
| 8,109 | `sproutSvg` | `function sproutSvg(` |
| 8,120 | `markSvg` | `function markSvg(` |
| 8,124 | `flameSvg` | `function flameSvg(` |
| 8,128 | `gearSvg` | `function gearSvg(` |
| 8,141 | `pulseSvg` | `function pulseSvg(` |
| 8,145 | `thermoSvg` | `function thermoSvg(` |
| 8,164 | `trendUpSvg` | `function trendUpSvg(` |
| 8,166 | `ecgSvg` | `function ecgSvg(` |
| 8,180 | `circulationSvg` | `function circulationSvg(` |
| 8,181 | `weatherSvg` | `function weatherSvg(` |
| 8,202 | `moodSvg` | `function moodSvg(` |
| 8,219 | `boltSvg` | `function boltSvg(` |
| 8,222 | `houseSvg` | `function houseSvg(` |
| 8,230 | `sunriseSvg` | `function sunriseSvg(` |
| 8,240 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,252 | `signMarks` | `var signMarks =` |
| 8,259 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,276_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,297 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,298 | `dsrHistory` | `var dsrHistory =` |
| 8,299 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,300 | `savHistory` | `var savHistory =` |
| 8,305 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,315 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,316 | `dsrNow` | `var dsrNow =` |
| 8,317 | `savNow` | `var savNow =` |
| 8,318 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,323 | `householdsWord` | `function householdsWord(` |
| 8,330 | `householdsNow` | `var householdsNow =` |
| 8,337 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,338 | `dsrMeter` | `var dsrMeter =` |
| 8,341 | `savMeter` | `var savMeter =` |
| 8,344 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,361 | `savInfoHtml` | `function savInfoHtml(` |
| 8,379 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,388 | `curveNow` | `var curveNow =` |
| 8,389 | `curveTag` | `var curveTag =` |
| 8,390 | `curveSub` | `var curveSub =` |
| 8,394 | `curvePct` | `function curvePct(` |
| 8,395 | `curveNoteFull` | `var curveNoteFull =` |
| 8,410 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,418 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,459 | `marketCycles` | `var marketCycles =` |
| 8,489 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,491_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,512 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,513 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,518_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,539 | `slopeOf` | `function slopeOf(` |
| 8,550 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,556 | `readSeason` | `function readSeason(` |
| 8,581 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,583 | `qLabel` | `function qLabel(` |
| 8,607 | `regimeTrack` | `function regimeTrack(` |
| 8,630 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,632_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,639 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,640 | `seasonTitle` | `function seasonTitle(` |
| 8,641 | `monthLabel` | `function monthLabel(` |
| 8,642 | `cycleModel` | `function cycleModel(` |
| 8,694 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,702 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,709 | `nowModel` | `var nowModel =` |
| 8,710 | `readingNow` | `var readingNow =` |
| 8,711 | `cpiNow` | `var cpiNow =` |
| 8,712 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,713 | `currentSeason` | `var currentSeason =` |
| 8,714 | `seasonWhy` | `var seasonWhy =` |
| 8,731 | `seasonGroup` | `function seasonGroup(` |
| 8,745 | `arcGauge` | `function arcGauge(` |
| 8,784 | `vitalRingSvg` | `function vitalRingSvg(` |
| 8,797 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 8,799 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 8,803 | `policyFacts` | `function policyFacts(` |
| 8,815 | `allSources` | `var allSources =` |
| 8,839 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 8,872_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,875 | `SVG_NS` | `var SVG_NS =` |
| 8,876 | `svgEl` | `function svgEl(` |
| 8,889 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 8,925_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,926 | `clampPct` | `function clampPct(` |
| 8,933 | `infoIcon` | `function infoIcon(` |
| 8,942 | `detailTexts` | `var detailTexts =` |
| 8,960 | `detailSlots` | `var detailSlots =` |
| 8,961 | `detailSlot` | `function detailSlot(` |
| 8,972 | `powerPanelHtml` | `var powerPanelHtml =` |
| 8,976 | `_growthPanel` | `var _growthPanel =` |
| 8,977 | `growthPanelHtml` | `function growthPanelHtml(` |
| 8,983 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 8,994 | `facts` | `function facts(` |
| 8,995 | `factsFrom` | `function factsFrom(` |
| 8,999 | `expandBtn` | `function expandBtn(` |
| 9,005 | `sheetRenderers` | `var sheetRenderers =` |
| 9,022 | `pageMode` | `var pageMode =` |
| 9,029 | `pageCycles` | `var pageCycles =` |
| 9,034 | `pageRange` | `var pageRange =` |
| 9,040 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,074_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,085 | `meterHtml` | `function meterHtml(` |
| 9,113 | `srcHtml` | `function srcHtml(` |
| 9,122 | `TIMING` | `var TIMING =` |
| 9,128 | `timingMark` | `function timingMark(` |
| 9,142 | `timingPill` | `function timingPill(` |
| 9,163 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,171 | `seatPageFoot` | `function seatPageFoot(` |
| 9,194 | `timingMembers` | `var timingMembers =` |
| 9,195 | `registerTiming` | `function registerTiming(` |
| 9,201 | `headHtml` | `function headHtml(` |
| 9,219 | `heldHighlights` | `var heldHighlights =` |
| 9,220 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,278_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,279 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,646_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,647 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 9,857_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,858 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 9,890_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,896 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 9,980_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,981 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 9,999_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,002 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,025_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,026 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,077_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,080 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,273_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,285 | `totalRiseIn` | `function totalRiseIn(` |
| 10,295 | `eraInflation` | `function eraInflation(` |
| 10,306 | `eraGrowth` | `function eraGrowth(` |
| 10,322 | `fmtSigned` | `function fmtSigned(` |
| 10,327 | `regimeArrow` | `function regimeArrow(` |
| 10,333 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,334 | `growthShown` | `function growthShown(` |
| 10,335 | `growthShownCap` | `function growthShownCap(` |
| 10,336 | `regimeState` | `function regimeState(` |
| 10,340 | `phaseClass` | `function phaseClass(` |
| 10,342 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,354 | `cycleViewEl` | `var cycleViewEl =` |
| 10,358 | `tempCard` | `var tempCard =` |
| 10,359 | `placeCharts` | `function placeCharts(` |
| 10,364 | `shownEra` | `var shownEra =` |
| 10,365 | `calendarReset` | `var calendarReset =` |
| 10,366 | `metricPageReset` | `var metricPageReset =` |
| 10,367 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,370 | `topbarBack` | `var topbarBack =` |
| 10,371 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,378_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,379 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,527_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,528 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,546_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,549 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,570_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,576 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,579 | `hubSet` | `function hubSet(` |
| 10,592 | `quarterPopup` | `function quarterPopup(` |
| 10,625 | `hubShowDefault` | `function hubShowDefault(` |
| 10,634 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,640 | `hubShowYear` | `function hubShowYear(` |
| 10,655 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 10,747_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,750 | `tempState` | `var tempState =` |
| 10,753 | `chartLink` | `var chartLink =` |
| 10,773 | `m2Step` | `function m2Step(` |
| 10,776 | `heatStep` | `function heatStep(` |
| 10,780 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 10,967_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,970 | `drawGrowth` | `function drawGrowth(` |
| 11,109 | `wireResize` | `function wireResize(` |
| 11,115 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,127_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,128 | `renderCycleView` | `function renderCycleView(` |
| 11,181 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,192 | `PEER_CARET` | `var PEER_CARET =` |
| 11,193 | `peerList` | `function peerList(` |
| 11,194 | `peerChosen` | `function peerChosen(` |
| 11,195 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,199 | `renderPeerPills` | `function renderPeerPills(` |
| 11,249 | `shownEraModel` | `var shownEraModel =` |
| 11,250 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,252_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,254 | `stripGroupName` | `var stripGroupName =` |
| 11,255 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,301 | `marketStripHtml` | `function marketStripHtml(` |
| 11,342 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,343 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,374_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,375 | `renderCycleList` | `function renderCycleList(` |
| 11,465 | `renderSignsList` | `function renderSignsList(` |
| 11,721 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 12,956_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,957 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,019_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,020 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,053_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,054 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,873–3,876 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 7,773–7,786 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,590–8,603 | `seasonTrackAll` | The season, computed |
| 8,625–8,629 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,427 |
| `desire-range` | 9,592 |
| `hzn-range` | 9,929 |
| `pulse-range` | 9,543 |
| `sheet-marker-deficit` | 12,424 |
| `sheet-metric-gdp` | 12,312 |
| `sheet-metric-households` | 12,458 |
| `sheet-metric-power` | 12,391 |
| `sheet-metric-temp` | 12,262 |
| `sheet-metric-valuation` | 12,499 |
| `sheet-sign-activity` | 12,373 |
| `sheet-sign-desire` | 9,593 |
| `sheet-sign-horizon` | 9,930 |
| `sheet-sign-pulse` | 9,542 |
| `sheet-sign-volume` | 9,566 |
| `sheet-sign-yield` | 9,510 |
| `volume-range` | 9,567 |
| `ylm-range` | 9,638 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,433 |
| `desire-range` | 9,575 |
| `hzn-range` | 9,906 |
| `pulse-range` | 9,520 |
| `sheet-metric-gdp` | 12,313 |
| `sheet-metric-power` | 12,392 |
| `sheet-metric-temp` | 12,263 |
| `sheet-metric-valuation` | 12,500 |
| `volume-range` | 9,547 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 5,781 |
| `sheet-metric-gdp` | 5,782 |
| `sheet-sign-activity` | 5,783 |
| `sheet-metric-power` | 5,784 |
| `sheet-metric-valuation` | 5,786 |
| `sheet-metric-households` | 5,787 |
| `deficit-range` | 5,788 |
| `volume-range` | 5,789 |
| `pulse-range` | 5,790 |
| `hzn-range` | 5,791 |
| `ylm-range` | 5,802 |
| `desire-range` | 5,803 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 189 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 322 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 399 | yearly calendar — one card per year, grouped into five eras |
| 406 | season strip |
| 459 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels \u2026 so if one day |
| 618 | tab bar (app-style segmented navigation) |
| 655 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 683 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 901 | journal (editorial content tab) |
| 907 | content tab: reading companion |
| 965 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,452 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,486 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,496 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,507 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,540 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,720 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,871 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,329 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,377 | hero: yield curve |
| 2,469 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,524 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,628 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,653 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,668 | long cycle (structural layer) |
| 2,709 | indicator grid |
| 2,752 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,769 | info icon + popover (progressive disclosure for longer notes) |
| 2,790 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,885 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (148), which is what the renderers fill:

| Line | id |
|---|---|
| 2,917 | `topbar-back` |
| 2,920 | `topbar-title` |
| 2,921 | `menu-btn` |
| 2,938 | `main` |
| 2,945 | `cycle-view` |
| 2,953 | `cycle-kicker` |
| 2,959 | `cycle-dial` |
| 2,961 | `season-wheel-hub-date` |
| 2,962 | `season-wheel-hub-theme` |
| 2,963 | `season-wheel-hub-detail` |
| 2,971 | `temp-card` |
| 2,973 | `temp-kicker` |
| 2,974 | `temp-sub` |
| 2,977 | `temp-svg` |
| 2,978 | `temp-tooltip` |
| 2,984 | `temp-stats` |
| 2,991 | `growth-card` |
| 2,994 | `growth-kicker` |
| 2,994 | `growth-phase` |
| 2,994 | `growth-sub` |
| 2,994 | `growth-peers` |
| 2,995 | `growth-svg` |
| 2,995 | `growth-tooltip` |
| 3,000 | `growth-stats` |
| 3,009 | `today-analysis` |
| 3,013 | `peek-row` |
| 3,017 | `sheet-metric-temp` |
| 3,018 | `temp-timing` |
| 3,019 | `temp-chart` |
| 3,021 | `temp-rangebar` |
| 3,023 | `temp-head` |
| 3,024 | `slot-temp` |
| 3,025 | `temp-history` |
| 3,026 | `temp-hist-tooltip` |
| 3,029 | `temp-trend` |
| 3,032 | `temp-panel` |
| 3,034 | `temp-highlights` |
| 3,037 | `sheet-metric-gdp` |
| 3,038 | `gdp-timing` |
| 3,039 | `gdp-chart` |
| 3,040 | `gdp-rangebar` |
| 3,042 | `gdp-head` |
| 3,043 | `slot-growth` |
| 3,044 | `gdp-history` |
| 3,045 | `gdp-hist-tooltip` |
| 3,046 | `gdp-yoy` |
| 3,056 | `gdp-trend` |
| 3,058 | `gdp-panel` |
| 3,063 | `subj-ring-gdp` |
| 3,065 | `subj-label-gdp` |
| 3,066 | `subj-value-gdp` |
| 3,067 | `subj-say-gdp` |
| 3,068 | `subj-spark-gdp` |
| 3,073 | `subj-ctx-gdp` |
| 3,076 | `gdp-highlights` |
| 3,084 | `sheet-metric-power` |
| 3,085 | `power-timing` |
| 3,086 | `power-head` |
| 3,087 | `power-chart` |
| 3,091 | `subj-ring-resilience` |
| 3,094 | `subj-value-resilience` |
| 3,095 | `subj-say-resilience` |
| 3,100 | `subj-ctx-resilience` |
| 3,104 | `longcycle-title` |
| 3,106 | `longcycle-tag` |
| 3,120 | `power-highlights` |
| 3,127 | `sheet-marker-deficit` |
| 3,133 | `sheet-metric-households` |
| 3,134 | `households-timing` |
| 3,135 | `households-chart` |
| 3,136 | `households-highlights` |
| 3,140 | `sheet-metric-valuation` |
| 3,141 | `valuation-timing` |
| 3,142 | `valuation-head` |
| 3,143 | `valuation-chart` |
| 3,147 | `subj-ring-valuation` |
| 3,150 | `subj-value-valuation` |
| 3,151 | `subj-say-valuation` |
| 3,156 | `subj-ctx-valuation` |
| 3,160 | `valuation-title` |
| 3,162 | `valuation-tag` |
| 3,169 | `valuation-highlights` |
| 3,175 | `subj-ring-yield` |
| 3,178 | `subj-value-yield` |
| 3,179 | `subj-say-yield` |
| 3,180 | `subj-spark-yield` |
| 3,211 | `ylm-series` |
| 3,216 | `ylm-head` |
| 3,217 | `ylm-shell` |
| 3,218 | `ylm-svg` |
| 3,219 | `ylm-tooltip` |
| 3,222 | `ylm-zone-legend` |
| 3,227 | `ylm-trend` |
| 3,230 | `pressure-insights` |
| 3,231 | `pressure-highlights` |
| 3,257 | `subj-value-horizon` |
| 3,258 | `subj-say-horizon` |
| 3,259 | `subj-spark-horizon` |
| 3,269 | `hzn-timeline` |
| 3,271 | `hzn-head` |
| 3,272 | `spread-history-shell` |
| 3,273 | `spread-history-svg` |
| 3,274 | `spread-history-tooltip` |
| 3,277 | `hzn-zone-legend` |
| 3,282 | `hzn-trend` |
| 3,284 | `hzn-panel` |
| 3,286 | `horizon-insights` |
| 3,287 | `horizon-highlights` |
| 3,294 | `subj-ring-sentiment` |
| 3,297 | `subj-value-sentiment` |
| 3,298 | `subj-say-sentiment` |
| 3,299 | `subj-spark-sentiment` |
| 3,311 | `curve-gauge` |
| 3,312 | `curve-vix` |
| 3,313 | `curve-highlights` |
| 3,327 | `signs-list` |
| 3,338 | `calendar-list` |
| 3,343 | `indicators-peek` |
| 3,389 | `cycle-list` |
| 3,395 | `cycle-more` |
| 3,396 | `cycle-more-label` |
| 3,405 | `calendar-cycle` |
| 3,406 | `calendar-cycle-slot` |
| 3,457 | `seasons-kicker` |
| 3,458 | `seasons-rows` |
| 3,462 | `framework-kicker` |
| 3,464 | `framework-rows` |
| 3,471 | `more-menu` |
| 3,474 | `menu-back` |
| 3,488 | `sources-open` |
| 3,496 | `appearance-current` |
| 3,504 | `sheet-howto` |
| 3,548 | `sheet-book` |
| 3,580 | `sheet-appearance` |
| 3,588 | `theme-toggle` |
| 3,595 | `sheet-contact` |
| 3,604 | `contact-form` |
| 3,605 | `contact-title` |
| 3,606 | `contact-message` |
| 3,608 | `contact-hint` |
| 3,609 | `contact-send` |
| 3,618 | `sheet-sources` |
| 3,621 | `sources-back` |
| 3,628 | `asof-text` |
| 3,629 | `sources-groups` |
| 3,636 | `detail-backdrop` |
| 3,638 | `detail-modal-close` |
| 3,639 | `detail-modal-body` |

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

