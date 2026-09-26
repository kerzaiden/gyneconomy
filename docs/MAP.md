# Map of `index.html`

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

`index.html` is **13,011 lines**, about 1063 KB, roughly **302 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -n 'function moodFrom(' index.html` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `544eab7` on 2026-09-26.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,905 | the whole stylesheet, every token and rule |
| **Markup** | 2,906–3,631 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,632–12,987 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 12,988–13,011 | </body></html> |

Counts: **241** top-level functions, **178** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,637_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,641 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,642 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,643 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,661 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,665 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,670_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,680 | `wheelMeta` | `var wheelMeta =` |
| 3,691 | `seasonOverride` | `var seasonOverride =` |
| 3,694 | `cycleNowNote` | `var cycleNowNote =` |
| 3,703 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,789 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,834 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,847_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,864 | `LIVE` | `function LIVE(` |
| 3,880 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,881 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,884_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,915 | `repaintFigureText` | `function repaintFigureText(` |
| 3,923 | `repaintTag` | `function repaintTag(` |
| 3,931 | `repaintSentiment` | `function repaintSentiment(` |
| 3,942 | `repaintYieldRow` | `function repaintYieldRow(` |
| 3,950 | `repaintValuationRow` | `function repaintValuationRow(` |
| 3,958 | `REPAINT` | `var REPAINT =` |
| 3,974 | `liveAsOf` | `var liveAsOf =` |
| 3,975 | `fmtAsOf` | `function fmtAsOf(` |
| 3,980 | `applyLive` | `function applyLive(` |
| 4,026 | `repaintPolicy` | `function repaintPolicy(` |
| 4,059 | `GYN` | `var GYN =` |
| 4,078 | `refreshLiveData` | `function refreshLiveData(` |
| 4,119 | `fetchSiteData` | `function fetchSiteData(` |
| 4,149 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,163_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,164 | `yieldCurve` | `var yieldCurve =` |
| 4,177 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,201 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,208 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,214 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,241 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,243_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,248 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,272 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,296 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,320 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,347 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,372_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,381 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,391 | `uninvLagToday` | `var uninvLagToday =` |
| 4,403 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,416 | `gdpPeers` | `var gdpPeers =` |
| 4,457 | `gdpSrc` | `var gdpSrc =` |
| 4,458 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,463 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,476 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,514_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,536 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,546_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,562 | `stressScoreFor` | `function stressScoreFor(` |
| 4,568 | `stressScore` | `var stressScore =` |
| 4,574 | `powerOf` | `var powerOf =` |
| 4,575 | `powerScore` | `var powerScore =` |
| 4,592 | `stressHistory` | `var stressHistory =` |
| 4,603 | `powerMeter` | `var powerMeter =` |
| 4,605 | `stressNoteFull` | `var stressNoteFull =` |
| 4,637 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,639_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,662 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,663 | `deficitHistory` | `var deficitHistory =` |
| 4,666 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,673 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,675 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,718_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,731 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,744_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,758 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,761 | `timelineSpan` | `function timelineSpan(` |
| 4,767 | `timelineFor` | `function timelineFor(` |
| 4,780 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,786_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,792 | `windowScale` | `function windowScale(` |
| 4,808 | `windowYears` | `function windowYears(` |
| 4,826 | `refName` | `function refName(` |
| 4,833 | `histReadEnsure` | `function histReadEnsure(` |
| 4,864 | `seatBandReading` | `function seatBandReading(` |
| 4,887 | `histReadFill` | `function histReadFill(` |
| 4,923 | `wireHistHover` | `function wireHistHover(` |
| 4,982 | `mWindowFrom` | `function mWindowFrom(` |
| 4,987 | `qWindowFrom` | `function qWindowFrom(` |
| 4,992 | `VOL_STOPS` | `var VOL_STOPS =` |
| 4,993 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 4,995 | `DEF_1983` | `var DEF_1983 =` |
| 4,997 | `defFrom` | `function defFrom(` |
| 5,008 | `deficitChart` | `function deficitChart(` |
| 5,098 | `deficitBlock` | `function deficitBlock(` |
| 5,160 | `buffettHistory` | `var buffettHistory =` |
| 5,190 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,191 | `hyDates` | `var hyDates =` |
| 5,192 | `hyOas` | `var hyOas =` |
| 5,193 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,200 | `hyAt` | `function hyAt(` |
| 5,204 | `hyLabel` | `function hyLabel(` |
| 5,205 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,206 | `hyNum` | `function hyNum(` |
| 5,207 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,217 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,227 | `capeHistory` | `var capeHistory =` |
| 5,229 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,247_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,253 | `sentiment` | `var sentiment =` |
| 5,271 | `valuation` | `var valuation =` |
| 5,308 | `valRow` | `function valRow(` |
| 5,316 | `coincident` | `var coincident =` |
| 5,377 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,395 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,396 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,397 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,399_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,412 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,413 | `m2vHistory` | `var m2vHistory =` |
| 5,433 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,532 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,633 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,634 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 5,674_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,680 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,681 | `DOTS` | `var DOTS =` |
| 5,683 | `HIST_HEAD` | `var HIST_HEAD =` |
| 5,708 | `histHead` | `function histHead(` |
| 5,726 | `headNoteIdx` | `var headNoteIdx =` |
| 5,727 | `headMenuHtml` | `function headMenuHtml(` |
| 5,747 | `headMenuFor` | `var headMenuFor =` |
| 5,748 | `paintHeadMenus` | `function paintHeadMenus(` |
| 5,774 | `nameWithMark` | `function nameWithMark(` |
| 5,780 | `panelRow` | `function panelRow(` |
| 5,804 | `panelFromMeter` | `function panelFromMeter(` |
| 5,818 | `meterFlagged` | `function meterFlagged(` |
| 5,829 | `desireInfoHtml` | `function desireInfoHtml(` |
| 5,857 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 5,871 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 5,890 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 5,909 | `outputInfoHtml` | `function outputInfoHtml(` |
| 5,923 | `activityInfoHtml` | `function activityInfoHtml(` |
| 5,948 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 5,979 | `desireBlock` | `function desireBlock(` |
| 6,006 | `volumeBlock` | `function volumeBlock(` |
| 6,031 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,054 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,062_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,075 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,076 | `m2Level` | `var m2Level =` |
| 6,098 | `m2Yoy` | `var m2Yoy =` |
| 6,099 | `M2_NORM` | `var M2_NORM =` |
| 6,104 | `volumeVerdict` | `function volumeVerdict(` |
| 6,141 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,142 | `unempHistory` | `var unempHistory =` |
| 6,148 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,163 | `NROU_NOW` | `var NROU_NOW =` |
| 6,164 | `unempState` | `function unempState(` |
| 6,170 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,230 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,231 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,234 | `qAtIndex` | `function qAtIndex(` |
| 6,235 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,243_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,258 | `householdsChart` | `function householdsChart(` |
| 6,322 | `refKey` | `function refKey(` |
| 6,360 | `lastChartAvg` | `var lastChartAvg =` |
| 6,361 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,446 | `GDP_NORM` | `var GDP_NORM =` |
| 6,452 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,453 | `gdpNowQ` | `var gdpNowQ =` |
| 6,454 | `gdpMeter` | `var gdpMeter =` |
| 6,457 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,479 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,545 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,609 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,617 | `velocityVerdict` | `function velocityVerdict(` |
| 6,625 | `derivePulseTag` | `function derivePulseTag(` |
| 6,631 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,691_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,700 | `seasonReading` | `var seasonReading =` |
| 6,749 | `frameworkRows` | `var frameworkRows =` |
| 6,759 | `vixRow` | `var vixRow =` |
| 6,767 | `vixWordOf` | `var vixWordOf =` |
| 6,771 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 6,786_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,790 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 6,799_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,800 | `calendarTodayY` | `var calendarTodayY =` |
| 6,821 | `fearGreed` | `var fearGreed =` |
| 6,825 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 6,830 | `valuationVerdict` | `function valuationVerdict(` |
| 6,848 | `sparkHtml` | `function sparkHtml(` |
| 6,867 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 6,873_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,886 | `modeBar` | `function modeBar(` |
| 6,901 | `pickerOpen` | `var pickerOpen =` |
| 6,905 | `cycleByName` | `function cycleByName(` |
| 6,909 | `openCycle` | `function openCycle(` |
| 6,915 | `cycleSlice` | `function cycleSlice(` |
| 6,924 | `totalGrowthYears` | `function totalGrowthYears(` |
| 6,932 | `cycleMonths` | `function cycleMonths(` |
| 6,951 | `histControls` | `function histControls(` |
| 6,965 | `cycLabel` | `function cycLabel(` |
| 6,981 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 6,990 | `cyclePicker` | `function cyclePicker(` |
| 7,014 | `seriesBar` | `function seriesBar(` |
| 7,021 | `rangeBar` | `function rangeBar(` |
| 7,033 | `trendOf` | `function trendOf(` |
| 7,078 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,088 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,103_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,104 | `yearOf` | `function yearOf(` |
| 7,105 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,106_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,136 | `totalStat` | `function totalStat(` |
| 7,142 | `atQuarter` | `function atQuarter(` |
| 7,143 | `atMonth` | `function atMonth(` |
| 7,144 | `cycleAverages` | `function cycleAverages(` |
| 7,151 | `ordinal` | `function ordinal(` |
| 7,152 | `hiCard` | `function hiCard(` |
| 7,163 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,177_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,184 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,200 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,207 | `moreRow` | `function moreRow(` |
| 7,213 | `powerPageNote` | `var powerPageNote =` |
| 7,214 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,220_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,223 | `xLabelOf` | `function xLabelOf(` |
| 7,243 | `fitGroup` | `function fitGroup(` |
| 7,265 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,324_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,348 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,358 | `vGrid` | `function vGrid(` |
| 7,383 | `COL_FILL` | `var COL_FILL =` |
| 7,390 | `AXIS` | `var AXIS =` |
| 7,391 | `chartAxes` | `function chartAxes(` |
| 7,422 | `divergeChart` | `function divergeChart(` |
| 7,483 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,512_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,520 | `maxIn` | `function maxIn(` |
| 7,533 | `reserveGauge` | `function reserveGauge(` |
| 7,554 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,568 | `PEEK_W` | `var PEEK_W =` |
| 7,571 | `PEEK_H` | `var PEEK_H =` |
| 7,572 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,577 | `colPeek` | `function colPeek(` |
| 7,604 | `meterPeek` | `function meterPeek(` |
| 7,621 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,626 | `pressureZone` | `function pressureZone(` |
| 7,641 | `HZN_BACK` | `var HZN_BACK =` |
| 7,642 | `hznLast` | `function hznLast(` |
| 7,643 | `hznBack` | `function hznBack(` |
| 7,644 | `horizonWord` | `function horizonWord(` |
| 7,669 | `HZN_METERS` | `var HZN_METERS =` |
| 7,677 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 7,701 | `_hznPanel` | `var _hznPanel =` |
| 7,702 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 7,722 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 7,723 | `levelZone` | `function levelZone(` |
| 7,735 | `RISK_REWARD` | `var RISK_REWARD =` |
| 7,740 | `RISK_RISK` | `var RISK_RISK =` |
| 7,745 | `riskCell` | `function riskCell(` |
| 7,746 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 7,777 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 7,802_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,821 | `pulseClipN` | `var pulseClipN =` |
| 7,822 | `beatPath` | `function beatPath(` |
| 7,847 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 7,861 | `pulsePeek` | `function pulsePeek(` |
| 7,869 | `pulseBlock` | `function pulseBlock(` |
| 7,889 | `CHEV` | `var CHEV =` |
| 7,891 | `peekCard` | `function peekCard(` |
| 7,913 | `moodFrom` | `function moodFrom(` |
| 7,950 | `dropSvg` | `function dropSvg(` |
| 7,958 | `speakerSvg` | `function speakerSvg(` |
| 7,966 | `gaugeSvg` | `function gaugeSvg(` |
| 7,970 | `diamondSvg` | `function diamondSvg(` |
| 7,982 | `energyFromReserve` | `function energyFromReserve(` |
| 7,994 | `sproutSvg` | `function sproutSvg(` |
| 8,005 | `markSvg` | `function markSvg(` |
| 8,009 | `flameSvg` | `function flameSvg(` |
| 8,013 | `gearSvg` | `function gearSvg(` |
| 8,026 | `pulseSvg` | `function pulseSvg(` |
| 8,030 | `thermoSvg` | `function thermoSvg(` |
| 8,049 | `trendUpSvg` | `function trendUpSvg(` |
| 8,051 | `ecgSvg` | `function ecgSvg(` |
| 8,065 | `circulationSvg` | `function circulationSvg(` |
| 8,066 | `weatherSvg` | `function weatherSvg(` |
| 8,087 | `moodSvg` | `function moodSvg(` |
| 8,104 | `boltSvg` | `function boltSvg(` |
| 8,107 | `houseSvg` | `function houseSvg(` |
| 8,115 | `sunriseSvg` | `function sunriseSvg(` |
| 8,125 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,137 | `signMarks` | `var signMarks =` |
| 8,144 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,161_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,182 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,183 | `dsrHistory` | `var dsrHistory =` |
| 8,184 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,185 | `savHistory` | `var savHistory =` |
| 8,190 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,200 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,201 | `dsrNow` | `var dsrNow =` |
| 8,202 | `savNow` | `var savNow =` |
| 8,203 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,208 | `householdsWord` | `function householdsWord(` |
| 8,215 | `householdsNow` | `var householdsNow =` |
| 8,222 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,223 | `dsrMeter` | `var dsrMeter =` |
| 8,226 | `savMeter` | `var savMeter =` |
| 8,229 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,246 | `savInfoHtml` | `function savInfoHtml(` |
| 8,264 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,273 | `greedScore` | `var greedScore =` |
| 8,274 | `moodNow` | `var moodNow =` |
| 8,275 | `fgSub` | `var fgSub =` |
| 8,276 | `fgDetailHtml` | `function fgDetailHtml(` |
| 8,277 | `fgNoteFull` | `var fgNoteFull =` |
| 8,283 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,324 | `marketCycles` | `var marketCycles =` |
| 8,354 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,356_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,377 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,378 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,383_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,404 | `slopeOf` | `function slopeOf(` |
| 8,415 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,421 | `readSeason` | `function readSeason(` |
| 8,446 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,448 | `qLabel` | `function qLabel(` |
| 8,472 | `regimeTrack` | `function regimeTrack(` |
| 8,495 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,497_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,504 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,505 | `seasonTitle` | `function seasonTitle(` |
| 8,506 | `monthLabel` | `function monthLabel(` |
| 8,507 | `cycleModel` | `function cycleModel(` |
| 8,559 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,567 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,574 | `nowModel` | `var nowModel =` |
| 8,575 | `readingNow` | `var readingNow =` |
| 8,576 | `cpiNow` | `var cpiNow =` |
| 8,577 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,578 | `currentSeason` | `var currentSeason =` |
| 8,579 | `seasonWhy` | `var seasonWhy =` |
| 8,596 | `seasonGroup` | `function seasonGroup(` |
| 8,605 | `fearGauge` | `function fearGauge(` |
| 8,642 | `vitalRingSvg` | `function vitalRingSvg(` |
| 8,655 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 8,657 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 8,661 | `policyFacts` | `function policyFacts(` |
| 8,673 | `allSources` | `var allSources =` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 8,708_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,711 | `SVG_NS` | `var SVG_NS =` |
| 8,712 | `svgEl` | `function svgEl(` |
| 8,725 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 8,761_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,762 | `clampPct` | `function clampPct(` |
| 8,769 | `infoIcon` | `function infoIcon(` |
| 8,778 | `detailTexts` | `var detailTexts =` |
| 8,796 | `detailSlots` | `var detailSlots =` |
| 8,797 | `detailSlot` | `function detailSlot(` |
| 8,808 | `powerPanelHtml` | `var powerPanelHtml =` |
| 8,812 | `_growthPanel` | `var _growthPanel =` |
| 8,813 | `growthPanelHtml` | `function growthPanelHtml(` |
| 8,819 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 8,830 | `facts` | `function facts(` |
| 8,831 | `factsFrom` | `function factsFrom(` |
| 8,835 | `expandBtn` | `function expandBtn(` |
| 8,841 | `sheetRenderers` | `var sheetRenderers =` |
| 8,858 | `pageMode` | `var pageMode =` |
| 8,865 | `pageCycles` | `var pageCycles =` |
| 8,870 | `pageRange` | `var pageRange =` |
| 8,876 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 8,910_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,921 | `meterHtml` | `function meterHtml(` |
| 8,949 | `srcHtml` | `function srcHtml(` |
| 8,958 | `TIMING` | `var TIMING =` |
| 8,964 | `timingMark` | `function timingMark(` |
| 8,978 | `timingPill` | `function timingPill(` |
| 8,999 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,007 | `seatPageFoot` | `function seatPageFoot(` |
| 9,030 | `timingMembers` | `var timingMembers =` |
| 9,031 | `registerTiming` | `function registerTiming(` |
| 9,037 | `headHtml` | `function headHtml(` |
| 9,055 | `heldHighlights` | `var heldHighlights =` |
| 9,056 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,114_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,115 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,482_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,483 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 9,693_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,694 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 9,726_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,732 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 9,816_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,817 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 9,835_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,838 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the mood ring, then the Fear & Greed lead row and its markers

_line 9,861_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,862 | `renderPsychologyTag` | `function renderPsychologyTag(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 9,914_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,917 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,108_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,120 | `totalRiseIn` | `function totalRiseIn(` |
| 10,130 | `eraInflation` | `function eraInflation(` |
| 10,141 | `eraGrowth` | `function eraGrowth(` |
| 10,157 | `fmtSigned` | `function fmtSigned(` |
| 10,162 | `regimeArrow` | `function regimeArrow(` |
| 10,168 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,169 | `growthShown` | `function growthShown(` |
| 10,170 | `growthShownCap` | `function growthShownCap(` |
| 10,171 | `regimeState` | `function regimeState(` |
| 10,175 | `phaseClass` | `function phaseClass(` |
| 10,177 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,189 | `cycleViewEl` | `var cycleViewEl =` |
| 10,193 | `tempCard` | `var tempCard =` |
| 10,194 | `placeCharts` | `function placeCharts(` |
| 10,199 | `shownEra` | `var shownEra =` |
| 10,200 | `calendarReset` | `var calendarReset =` |
| 10,201 | `metricPageReset` | `var metricPageReset =` |
| 10,202 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,205 | `topbarBack` | `var topbarBack =` |
| 10,206 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,213_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,214 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,362_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,363 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,381_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,384 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,405_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,411 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,414 | `hubSet` | `function hubSet(` |
| 10,427 | `quarterPopup` | `function quarterPopup(` |
| 10,460 | `hubShowDefault` | `function hubShowDefault(` |
| 10,469 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,475 | `hubShowYear` | `function hubShowYear(` |
| 10,490 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 10,582_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,585 | `tempState` | `var tempState =` |
| 10,588 | `chartLink` | `var chartLink =` |
| 10,608 | `m2Step` | `function m2Step(` |
| 10,611 | `heatStep` | `function heatStep(` |
| 10,615 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 10,802_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,805 | `drawGrowth` | `function drawGrowth(` |
| 10,944 | `wireResize` | `function wireResize(` |
| 10,950 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 10,962_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,963 | `renderCycleView` | `function renderCycleView(` |
| 11,016 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,027 | `PEER_CARET` | `var PEER_CARET =` |
| 11,028 | `peerList` | `function peerList(` |
| 11,029 | `peerChosen` | `function peerChosen(` |
| 11,030 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,034 | `renderPeerPills` | `function renderPeerPills(` |
| 11,084 | `shownEraModel` | `var shownEraModel =` |
| 11,085 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,087_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,089 | `stripGroupName` | `var stripGroupName =` |
| 11,090 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,136 | `marketStripHtml` | `function marketStripHtml(` |
| 11,177 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,178 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,209_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,210 | `renderCycleList` | `function renderCycleList(` |
| 11,300 | `renderSignsList` | `function renderSignsList(` |
| 11,556 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 12,791_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,792 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 12,854_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,855 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 12,888_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,889 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`WORKING-DOC.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,860–3,863 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 7,650–7,663 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,455–8,468 | `seasonTrackAll` | The season, computed |
| 8,490–8,494 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,262 |
| `desire-range` | 9,428 |
| `hzn-range` | 9,765 |
| `pulse-range` | 9,379 |
| `sheet-marker-deficit` | 12,259 |
| `sheet-metric-gdp` | 12,147 |
| `sheet-metric-households` | 12,293 |
| `sheet-metric-power` | 12,226 |
| `sheet-metric-temp` | 12,097 |
| `sheet-metric-valuation` | 12,334 |
| `sheet-sign-activity` | 12,208 |
| `sheet-sign-desire` | 9,429 |
| `sheet-sign-horizon` | 9,766 |
| `sheet-sign-pulse` | 9,378 |
| `sheet-sign-volume` | 9,402 |
| `sheet-sign-yield` | 9,346 |
| `volume-range` | 9,403 |
| `ylm-range` | 9,474 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,268 |
| `desire-range` | 9,411 |
| `hzn-range` | 9,742 |
| `pulse-range` | 9,356 |
| `sheet-metric-gdp` | 12,148 |
| `sheet-metric-power` | 12,227 |
| `sheet-metric-temp` | 12,098 |
| `sheet-metric-valuation` | 12,335 |
| `volume-range` | 9,383 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 5,684 |
| `sheet-metric-gdp` | 5,685 |
| `sheet-sign-activity` | 5,686 |
| `sheet-metric-power` | 5,687 |
| `sheet-metric-valuation` | 5,689 |
| `sheet-metric-households` | 5,690 |
| `deficit-range` | 5,691 |
| `volume-range` | 5,692 |
| `pulse-range` | 5,693 |
| `hzn-range` | 5,694 |
| `ylm-range` | 5,705 |
| `desire-range` | 5,706 |

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
| 1,869 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,323 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,371 | hero: yield curve |
| 2,463 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,518 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,622 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,647 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,662 | long cycle (structural layer) |
| 2,703 | indicator grid |
| 2,746 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,763 | info icon + popover (progressive disclosure for longer notes) |
| 2,784 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,879 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (147), which is what the renderers fill:

| Line | id |
|---|---|
| 2,911 | `topbar-back` |
| 2,914 | `topbar-title` |
| 2,915 | `menu-btn` |
| 2,934 | `cycle-view` |
| 2,942 | `cycle-kicker` |
| 2,948 | `cycle-dial` |
| 2,950 | `season-wheel-hub-date` |
| 2,951 | `season-wheel-hub-theme` |
| 2,952 | `season-wheel-hub-detail` |
| 2,960 | `temp-card` |
| 2,962 | `temp-kicker` |
| 2,963 | `temp-sub` |
| 2,966 | `temp-svg` |
| 2,967 | `temp-tooltip` |
| 2,973 | `temp-stats` |
| 2,980 | `growth-card` |
| 2,983 | `growth-kicker` |
| 2,983 | `growth-phase` |
| 2,983 | `growth-sub` |
| 2,983 | `growth-peers` |
| 2,984 | `growth-svg` |
| 2,984 | `growth-tooltip` |
| 2,989 | `growth-stats` |
| 2,998 | `today-analysis` |
| 3,002 | `peek-row` |
| 3,006 | `sheet-metric-temp` |
| 3,007 | `temp-timing` |
| 3,008 | `temp-chart` |
| 3,010 | `temp-rangebar` |
| 3,012 | `temp-head` |
| 3,013 | `slot-temp` |
| 3,014 | `temp-history` |
| 3,015 | `temp-hist-tooltip` |
| 3,018 | `temp-trend` |
| 3,021 | `temp-panel` |
| 3,023 | `temp-highlights` |
| 3,026 | `sheet-metric-gdp` |
| 3,027 | `gdp-timing` |
| 3,028 | `gdp-chart` |
| 3,029 | `gdp-rangebar` |
| 3,031 | `gdp-head` |
| 3,032 | `slot-growth` |
| 3,033 | `gdp-history` |
| 3,034 | `gdp-hist-tooltip` |
| 3,035 | `gdp-yoy` |
| 3,045 | `gdp-trend` |
| 3,047 | `gdp-panel` |
| 3,052 | `subj-ring-gdp` |
| 3,054 | `subj-label-gdp` |
| 3,055 | `subj-value-gdp` |
| 3,056 | `subj-say-gdp` |
| 3,057 | `subj-spark-gdp` |
| 3,062 | `subj-ctx-gdp` |
| 3,065 | `gdp-highlights` |
| 3,073 | `sheet-metric-power` |
| 3,074 | `power-timing` |
| 3,075 | `power-head` |
| 3,076 | `power-chart` |
| 3,080 | `subj-ring-resilience` |
| 3,083 | `subj-value-resilience` |
| 3,084 | `subj-say-resilience` |
| 3,089 | `subj-ctx-resilience` |
| 3,093 | `longcycle-title` |
| 3,095 | `longcycle-tag` |
| 3,109 | `power-highlights` |
| 3,116 | `sheet-marker-deficit` |
| 3,122 | `sheet-metric-households` |
| 3,123 | `households-timing` |
| 3,124 | `households-chart` |
| 3,125 | `households-highlights` |
| 3,129 | `sheet-metric-valuation` |
| 3,130 | `valuation-timing` |
| 3,131 | `valuation-head` |
| 3,132 | `valuation-chart` |
| 3,136 | `subj-ring-valuation` |
| 3,139 | `subj-value-valuation` |
| 3,140 | `subj-say-valuation` |
| 3,145 | `subj-ctx-valuation` |
| 3,149 | `valuation-title` |
| 3,151 | `valuation-tag` |
| 3,158 | `valuation-highlights` |
| 3,164 | `subj-ring-yield` |
| 3,167 | `subj-value-yield` |
| 3,168 | `subj-say-yield` |
| 3,169 | `subj-spark-yield` |
| 3,200 | `ylm-series` |
| 3,205 | `ylm-head` |
| 3,206 | `ylm-shell` |
| 3,207 | `ylm-svg` |
| 3,208 | `ylm-tooltip` |
| 3,211 | `ylm-zone-legend` |
| 3,216 | `ylm-trend` |
| 3,219 | `pressure-insights` |
| 3,220 | `pressure-highlights` |
| 3,246 | `subj-value-horizon` |
| 3,247 | `subj-say-horizon` |
| 3,248 | `subj-spark-horizon` |
| 3,258 | `hzn-timeline` |
| 3,260 | `hzn-head` |
| 3,261 | `spread-history-shell` |
| 3,262 | `spread-history-svg` |
| 3,263 | `spread-history-tooltip` |
| 3,266 | `hzn-zone-legend` |
| 3,271 | `hzn-trend` |
| 3,273 | `hzn-panel` |
| 3,275 | `horizon-insights` |
| 3,276 | `horizon-highlights` |
| 3,283 | `subj-ring-sentiment` |
| 3,286 | `subj-value-sentiment` |
| 3,287 | `subj-say-sentiment` |
| 3,288 | `subj-spark-sentiment` |
| 3,300 | `fg-gauge` |
| 3,301 | `fg-vix` |
| 3,302 | `fg-highlights` |
| 3,316 | `signs-list` |
| 3,327 | `calendar-list` |
| 3,332 | `indicators-peek` |
| 3,378 | `cycle-list` |
| 3,384 | `cycle-more` |
| 3,385 | `cycle-more-label` |
| 3,394 | `calendar-cycle` |
| 3,395 | `calendar-cycle-slot` |
| 3,446 | `seasons-kicker` |
| 3,447 | `seasons-rows` |
| 3,451 | `framework-kicker` |
| 3,453 | `framework-rows` |
| 3,460 | `more-menu` |
| 3,463 | `menu-back` |
| 3,477 | `sources-open` |
| 3,485 | `appearance-current` |
| 3,493 | `sheet-howto` |
| 3,537 | `sheet-book` |
| 3,569 | `sheet-appearance` |
| 3,577 | `theme-toggle` |
| 3,584 | `sheet-contact` |
| 3,593 | `contact-form` |
| 3,594 | `contact-title` |
| 3,595 | `contact-message` |
| 3,597 | `contact-hint` |
| 3,598 | `contact-send` |
| 3,607 | `sheet-sources` |
| 3,610 | `sources-back` |
| 3,617 | `asof-text` |
| 3,618 | `sources-groups` |
| 3,623 | `detail-backdrop` |
| 3,625 | `detail-modal-close` |
| 3,626 | `detail-modal-body` |

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

