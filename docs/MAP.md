# Map of `index.html`

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

`index.html` is **12,733 lines**, about 1047 KB, roughly **298 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -n 'function moodFrom(' index.html` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `31591fd` on 2026-09-26.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,905 | the whole stylesheet, every token and rule |
| **Markup** | 2,906–3,631 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,632–12,709 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 12,710–12,733 | </body></html> |

Counts: **204** top-level functions, **174** top-level vars, **32** top-level IIFEs in the script.

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

_line 3,884_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,901 | `repaintPolicy` | `function repaintPolicy(` |
| 3,933 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 3,947_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,948 | `yieldCurve` | `var yieldCurve =` |
| 3,961 | `t10y3mHistory` | `var t10y3mHistory =` |
| 3,985 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 3,992 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 3,998 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,025 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,027_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,032 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,056 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,080 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,104 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,131 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,156_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,165 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,175 | `uninvLagToday` | `var uninvLagToday =` |
| 4,187 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,200 | `gdpPeers` | `var gdpPeers =` |
| 4,241 | `gdpSrc` | `var gdpSrc =` |
| 4,242 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,247 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,260 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,298_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,320 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,330_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,346 | `stressScoreFor` | `function stressScoreFor(` |
| 4,352 | `stressScore` | `var stressScore =` |
| 4,358 | `powerOf` | `var powerOf =` |
| 4,359 | `powerScore` | `var powerScore =` |
| 4,376 | `stressHistory` | `var stressHistory =` |
| 4,387 | `powerMeter` | `var powerMeter =` |
| 4,389 | `stressNoteFull` | `var stressNoteFull =` |
| 4,421 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,423_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,446 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,447 | `deficitHistory` | `var deficitHistory =` |
| 4,450 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,457 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,501_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,514 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,527_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,541 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,544 | `timelineSpan` | `function timelineSpan(` |
| 4,550 | `timelineFor` | `function timelineFor(` |
| 4,563 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,569_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,575 | `windowScale` | `function windowScale(` |
| 4,591 | `windowYears` | `function windowYears(` |
| 4,609 | `refName` | `function refName(` |
| 4,616 | `histReadEnsure` | `function histReadEnsure(` |
| 4,647 | `seatBandReading` | `function seatBandReading(` |
| 4,670 | `histReadFill` | `function histReadFill(` |
| 4,706 | `wireHistHover` | `function wireHistHover(` |
| 4,765 | `mWindowFrom` | `function mWindowFrom(` |
| 4,770 | `qWindowFrom` | `function qWindowFrom(` |
| 4,775 | `VOL_STOPS` | `var VOL_STOPS =` |
| 4,776 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 4,778 | `DEF_1983` | `var DEF_1983 =` |
| 4,780 | `defFrom` | `function defFrom(` |
| 4,791 | `deficitChart` | `function deficitChart(` |
| 4,881 | `deficitBlock` | `function deficitBlock(` |
| 4,943 | `buffettHistory` | `var buffettHistory =` |
| 4,973 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 4,974 | `hyDates` | `var hyDates =` |
| 4,975 | `hyOas` | `var hyOas =` |
| 4,982 | `hyAt` | `function hyAt(` |
| 4,986 | `hyLabel` | `function hyLabel(` |
| 4,987 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 4,988 | `hyNum` | `function hyNum(` |
| 4,989 | `hyWindowFrom` | `function hyWindowFrom(` |
| 4,999 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,009 | `capeHistory` | `var capeHistory =` |
| 5,011 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,029_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,035 | `sentiment` | `var sentiment =` |
| 5,053 | `valuation` | `var valuation =` |
| 5,090 | `valRow` | `function valRow(` |
| 5,098 | `coincident` | `var coincident =` |
| 5,176 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,177 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,178 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,180_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,193 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,194 | `m2vHistory` | `var m2vHistory =` |
| 5,214 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,313 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,414 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,415 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 5,455_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,461 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,462 | `DOTS` | `var DOTS =` |
| 5,464 | `HIST_HEAD` | `var HIST_HEAD =` |
| 5,489 | `histHead` | `function histHead(` |
| 5,507 | `headNoteIdx` | `var headNoteIdx =` |
| 5,508 | `headMenuHtml` | `function headMenuHtml(` |
| 5,528 | `headMenuFor` | `var headMenuFor =` |
| 5,529 | `paintHeadMenus` | `function paintHeadMenus(` |
| 5,555 | `nameWithMark` | `function nameWithMark(` |
| 5,561 | `panelRow` | `function panelRow(` |
| 5,585 | `panelFromMeter` | `function panelFromMeter(` |
| 5,599 | `meterFlagged` | `function meterFlagged(` |
| 5,610 | `desireInfoHtml` | `function desireInfoHtml(` |
| 5,638 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 5,652 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 5,671 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 5,690 | `outputInfoHtml` | `function outputInfoHtml(` |
| 5,704 | `activityInfoHtml` | `function activityInfoHtml(` |
| 5,729 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 5,760 | `desireBlock` | `function desireBlock(` |
| 5,787 | `volumeBlock` | `function volumeBlock(` |
| 5,812 | `velocityRecordBlock` | `function velocityRecordBlock(` |

### Volume: how much blood there is (Version 306)

_line 5,842_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,855 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 5,856 | `m2Level` | `var m2Level =` |
| 5,878 | `m2Yoy` | `var m2Yoy =` |
| 5,879 | `M2_NORM` | `var M2_NORM =` |
| 5,884 | `volumeVerdict` | `function volumeVerdict(` |
| 5,921 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 5,922 | `unempHistory` | `var unempHistory =` |
| 5,942 | `NROU_NOW` | `var NROU_NOW =` |
| 5,943 | `unempState` | `function unempState(` |
| 5,949 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,009 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,010 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,013 | `qAtIndex` | `function qAtIndex(` |
| 6,014 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,022_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,037 | `householdsChart` | `function householdsChart(` |
| 6,101 | `refKey` | `function refKey(` |
| 6,139 | `lastChartAvg` | `var lastChartAvg =` |
| 6,140 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,225 | `GDP_NORM` | `var GDP_NORM =` |
| 6,231 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,232 | `gdpNowQ` | `var gdpNowQ =` |
| 6,233 | `gdpMeter` | `var gdpMeter =` |
| 6,236 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,258 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,324 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,395 | `velocityVerdict` | `function velocityVerdict(` |
| 6,408 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,468_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,477 | `seasonReading` | `var seasonReading =` |
| 6,526 | `frameworkRows` | `var frameworkRows =` |
| 6,536 | `vixRow` | `var vixRow =` |
| 6,544 | `vixWordOf` | `var vixWordOf =` |
| 6,548 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 6,563_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,567 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 6,576_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,577 | `calendarTodayY` | `var calendarTodayY =` |
| 6,598 | `fearGreed` | `var fearGreed =` |
| 6,602 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 6,607 | `valuationVerdict` | `function valuationVerdict(` |
| 6,625 | `sparkHtml` | `function sparkHtml(` |
| 6,644 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 6,650_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,663 | `modeBar` | `function modeBar(` |
| 6,678 | `pickerOpen` | `var pickerOpen =` |
| 6,682 | `cycleByName` | `function cycleByName(` |
| 6,686 | `openCycle` | `function openCycle(` |
| 6,692 | `cycleSlice` | `function cycleSlice(` |
| 6,701 | `totalGrowthYears` | `function totalGrowthYears(` |
| 6,709 | `cycleMonths` | `function cycleMonths(` |
| 6,728 | `histControls` | `function histControls(` |
| 6,742 | `cycLabel` | `function cycLabel(` |
| 6,758 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 6,767 | `cyclePicker` | `function cyclePicker(` |
| 6,791 | `seriesBar` | `function seriesBar(` |
| 6,798 | `rangeBar` | `function rangeBar(` |
| 6,810 | `trendOf` | `function trendOf(` |
| 6,855 | `TREND_ARROW` | `var TREND_ARROW =` |
| 6,865 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 6,880_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,881 | `yearOf` | `function yearOf(` |
| 6,882 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 6,883_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,913 | `totalStat` | `function totalStat(` |
| 6,919 | `atQuarter` | `function atQuarter(` |
| 6,920 | `atMonth` | `function atMonth(` |
| 6,921 | `cycleAverages` | `function cycleAverages(` |
| 6,928 | `ordinal` | `function ordinal(` |
| 6,929 | `hiCard` | `function hiCard(` |
| 6,940 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 6,954_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,961 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 6,977 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 6,984 | `moreRow` | `function moreRow(` |
| 6,990 | `powerPageNote` | `var powerPageNote =` |
| 6,991 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 6,997_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,000 | `xLabelOf` | `function xLabelOf(` |
| 7,020 | `fitGroup` | `function fitGroup(` |
| 7,042 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,101_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,125 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,135 | `vGrid` | `function vGrid(` |
| 7,160 | `COL_FILL` | `var COL_FILL =` |
| 7,167 | `AXIS` | `var AXIS =` |
| 7,168 | `chartAxes` | `function chartAxes(` |
| 7,199 | `divergeChart` | `function divergeChart(` |
| 7,260 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,289_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,297 | `maxIn` | `function maxIn(` |
| 7,310 | `reserveGauge` | `function reserveGauge(` |
| 7,331 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,345 | `PEEK_W` | `var PEEK_W =` |
| 7,348 | `PEEK_H` | `var PEEK_H =` |
| 7,349 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,354 | `colPeek` | `function colPeek(` |
| 7,381 | `meterPeek` | `function meterPeek(` |
| 7,398 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,403 | `pressureZone` | `function pressureZone(` |
| 7,418 | `HZN_BACK` | `var HZN_BACK =` |
| 7,419 | `hznLast` | `function hznLast(` |
| 7,420 | `hznBack` | `function hznBack(` |
| 7,421 | `horizonWord` | `function horizonWord(` |
| 7,446 | `HZN_METERS` | `var HZN_METERS =` |
| 7,454 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 7,478 | `_hznPanel` | `var _hznPanel =` |
| 7,479 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 7,499 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 7,500 | `levelZone` | `function levelZone(` |
| 7,512 | `RISK_REWARD` | `var RISK_REWARD =` |
| 7,517 | `RISK_RISK` | `var RISK_RISK =` |
| 7,522 | `riskCell` | `function riskCell(` |
| 7,523 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 7,554 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 7,579_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,598 | `pulseClipN` | `var pulseClipN =` |
| 7,599 | `beatPath` | `function beatPath(` |
| 7,624 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 7,638 | `pulsePeek` | `function pulsePeek(` |
| 7,646 | `pulseBlock` | `function pulseBlock(` |
| 7,666 | `CHEV` | `var CHEV =` |
| 7,668 | `peekCard` | `function peekCard(` |
| 7,690 | `moodFrom` | `function moodFrom(` |
| 7,727 | `dropSvg` | `function dropSvg(` |
| 7,735 | `speakerSvg` | `function speakerSvg(` |
| 7,743 | `gaugeSvg` | `function gaugeSvg(` |
| 7,747 | `diamondSvg` | `function diamondSvg(` |
| 7,759 | `energyFromReserve` | `function energyFromReserve(` |
| 7,771 | `sproutSvg` | `function sproutSvg(` |
| 7,782 | `markSvg` | `function markSvg(` |
| 7,786 | `flameSvg` | `function flameSvg(` |
| 7,790 | `gearSvg` | `function gearSvg(` |
| 7,803 | `pulseSvg` | `function pulseSvg(` |
| 7,807 | `thermoSvg` | `function thermoSvg(` |
| 7,826 | `trendUpSvg` | `function trendUpSvg(` |
| 7,828 | `ecgSvg` | `function ecgSvg(` |
| 7,842 | `circulationSvg` | `function circulationSvg(` |
| 7,843 | `weatherSvg` | `function weatherSvg(` |
| 7,864 | `moodSvg` | `function moodSvg(` |
| 7,881 | `boltSvg` | `function boltSvg(` |
| 7,884 | `houseSvg` | `function houseSvg(` |
| 7,892 | `sunriseSvg` | `function sunriseSvg(` |
| 7,902 | `umbrellaSvg` | `function umbrellaSvg(` |
| 7,914 | `signMarks` | `var signMarks =` |
| 7,921 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 7,938_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,959 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 7,960 | `dsrHistory` | `var dsrHistory =` |
| 7,961 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 7,962 | `savHistory` | `var savHistory =` |
| 7,976 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 7,977 | `dsrNow` | `var dsrNow =` |
| 7,978 | `savNow` | `var savNow =` |
| 7,979 | `DSR_MEAN` | `var DSR_MEAN =` |
| 7,984 | `householdsWord` | `function householdsWord(` |
| 7,991 | `householdsNow` | `var householdsNow =` |
| 7,998 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 7,999 | `dsrMeter` | `var dsrMeter =` |
| 8,002 | `savMeter` | `var savMeter =` |
| 8,005 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,022 | `savInfoHtml` | `function savInfoHtml(` |
| 8,040 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,049 | `greedScore` | `var greedScore =` |
| 8,050 | `moodNow` | `var moodNow =` |
| 8,051 | `fgSub` | `var fgSub =` |
| 8,052 | `fgDetailHtml` | `function fgDetailHtml(` |
| 8,053 | `fgNoteFull` | `var fgNoteFull =` |
| 8,059 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,100 | `marketCycles` | `var marketCycles =` |
| 8,130 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,132_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,153 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,154 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,159_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,180 | `slopeOf` | `function slopeOf(` |
| 8,191 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,197 | `readSeason` | `function readSeason(` |
| 8,222 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,224 | `qLabel` | `function qLabel(` |
| 8,248 | `regimeTrack` | `function regimeTrack(` |
| 8,271 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,273_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,280 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,281 | `seasonTitle` | `function seasonTitle(` |
| 8,282 | `monthLabel` | `function monthLabel(` |
| 8,283 | `cycleModel` | `function cycleModel(` |
| 8,335 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,343 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,350 | `nowModel` | `var nowModel =` |
| 8,351 | `readingNow` | `var readingNow =` |
| 8,352 | `cpiNow` | `var cpiNow =` |
| 8,353 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,354 | `currentSeason` | `var currentSeason =` |
| 8,355 | `seasonWhy` | `var seasonWhy =` |
| 8,372 | `seasonGroup` | `function seasonGroup(` |
| 8,381 | `fearGauge` | `function fearGauge(` |
| 8,418 | `vitalRingSvg` | `function vitalRingSvg(` |
| 8,431 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 8,433 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 8,437 | `policyFacts` | `function policyFacts(` |
| 8,449 | `allSources` | `var allSources =` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 8,484_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,487 | `SVG_NS` | `var SVG_NS =` |
| 8,488 | `svgEl` | `function svgEl(` |
| 8,501 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 8,537_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,538 | `clampPct` | `function clampPct(` |
| 8,545 | `infoIcon` | `function infoIcon(` |
| 8,554 | `detailTexts` | `var detailTexts =` |
| 8,556 | `powerPanelHtml` | `var powerPanelHtml =` |
| 8,560 | `_growthPanel` | `var _growthPanel =` |
| 8,561 | `growthPanelHtml` | `function growthPanelHtml(` |
| 8,567 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 8,578 | `facts` | `function facts(` |
| 8,579 | `factsFrom` | `function factsFrom(` |
| 8,583 | `expandBtn` | `function expandBtn(` |
| 8,590 | `sheetRenderers` | `var sheetRenderers =` |
| 8,607 | `pageMode` | `var pageMode =` |
| 8,614 | `pageCycles` | `var pageCycles =` |
| 8,619 | `pageRange` | `var pageRange =` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 8,658_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,669 | `meterHtml` | `function meterHtml(` |
| 8,697 | `srcHtml` | `function srcHtml(` |
| 8,706 | `TIMING` | `var TIMING =` |
| 8,712 | `timingMark` | `function timingMark(` |
| 8,726 | `timingPill` | `function timingPill(` |
| 8,747 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 8,755 | `seatPageFoot` | `function seatPageFoot(` |
| 8,778 | `timingMembers` | `var timingMembers =` |
| 8,779 | `registerTiming` | `function registerTiming(` |
| 8,785 | `headHtml` | `function headHtml(` |
| 8,803 | `heldHighlights` | `var heldHighlights =` |
| 8,804 | `cardDetailHtml` | `function cardDetailHtml(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 9,848_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,860 | `totalRiseIn` | `function totalRiseIn(` |
| 9,870 | `eraInflation` | `function eraInflation(` |
| 9,881 | `eraGrowth` | `function eraGrowth(` |
| 9,897 | `fmtSigned` | `function fmtSigned(` |
| 9,902 | `regimeArrow` | `function regimeArrow(` |
| 9,908 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 9,909 | `growthShown` | `function growthShown(` |
| 9,910 | `growthShownCap` | `function growthShownCap(` |
| 9,911 | `regimeState` | `function regimeState(` |
| 9,915 | `phaseClass` | `function phaseClass(` |
| 9,917 | `eraMarketTotal` | `function eraMarketTotal(` |
| 9,929 | `cycleViewEl` | `var cycleViewEl =` |
| 9,933 | `tempCard` | `var tempCard =` |
| 9,934 | `placeCharts` | `function placeCharts(` |
| 9,939 | `shownEra` | `var shownEra =` |
| 9,940 | `calendarReset` | `var calendarReset =` |
| 9,941 | `metricPageReset` | `var metricPageReset =` |
| 9,942 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 9,945 | `topbarBack` | `var topbarBack =` |
| 9,946 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 9,953_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,954 | `drawDial` | `function drawDial(` |

### the hub: the reading inside the circle

_line 10,143_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,149 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,152 | `hubSet` | `function hubSet(` |
| 10,165 | `quarterPopup` | `function quarterPopup(` |
| 10,198 | `hubShowDefault` | `function hubShowDefault(` |
| 10,207 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,213 | `hubShowYear` | `function hubShowYear(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 10,319_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,322 | `tempState` | `var tempState =` |
| 10,325 | `chartLink` | `var chartLink =` |
| 10,345 | `m2Step` | `function m2Step(` |
| 10,348 | `heatStep` | `function heatStep(` |
| 10,352 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 10,539_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,542 | `drawGrowth` | `function drawGrowth(` |
| 10,686 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 10,698_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,699 | `renderCycleView` | `function renderCycleView(` |
| 10,752 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 10,763 | `PEER_CARET` | `var PEER_CARET =` |
| 10,764 | `peerList` | `function peerList(` |
| 10,765 | `peerChosen` | `function peerChosen(` |
| 10,766 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 10,770 | `renderPeerPills` | `function renderPeerPills(` |
| 10,820 | `shownEraModel` | `var shownEraModel =` |
| 10,821 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 10,823_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,825 | `stripGroupName` | `var stripGroupName =` |
| 10,826 | `seasonStripHtml` | `function seasonStripHtml(` |
| 10,872 | `marketStripHtml` | `function marketStripHtml(` |
| 10,913 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 10,914 | `settleStrips` | `function settleStrips(` |

## The top-level IIFEs

**28 render at load** (side effect only) and **4 compute a value**, 32 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`WORKING-DOC.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,860–3,863 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 3,910–3,932 | _(side effect only)_ | Version 525: the first series to come from outside the file |
| 4,459–4,463 | _(side effect only)_ | The deficit, year by year (Version 358) |
| 4,976–4,981 | _(side effect only)_ | What a windowed record chart needs, once (Version 367) |
| 5,159–5,162 | _(side effect only)_ | Sentiment (fast) and Valuation (slow) — split in Version 231 |
| 5,835–5,839 | _(side effect only)_ | Version 518: the history card's head |
| 5,928–5,935 | _(side effect only)_ | Volume: how much blood there is (Version 306) |
| 6,388–6,393 | _(side effect only)_ | Version 431: the reference key, shared (the rollout, stage one) |
| 6,403–6,406 | _(side effect only)_ | Version 431: the reference key, shared (the rollout, stage one) |
| 7,427–7,440 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 7,967–7,974 | _(side effect only)_ | Load: what households owe, and what they keep (Version 460, Keren) |
| 8,231–8,244 | `seasonTrackAll` | The season, computed |
| 8,266–8,270 | `regimeByQ` | The season, computed |
| 8,625–8,655 | _(side effect only)_ | RENDER: range bars + card helpers |
| 8,863–9,227 | _(side effect only)_ | RENDER: yield-by-maturity comparison chart (multiselect by maturity) |
| 9,230–9,437 | _(side effect only)_ | RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y |
| 9,440–9,469 | _(side effect only)_ | RENDER: un-inversion-to-recession historical lag panel |
| 9,477–9,558 | _(side effect only)_ | RENDER: Horizon — the spread's own page (Version 473) |
| 9,561–9,576 | _(side effect only)_ | RENDER: Valuation (slow) — split off Sentiment in Version 231 |
| 9,581–9,601 | _(side effect only)_ | RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row |
| 9,604–9,652 | _(side effect only)_ | RENDER: Sentiment (fast) — the mood ring, then the Fear & Greed lead row and its markers |
| 9,658–9,846 | _(side effect only)_ | RENDER: Analysis subjects — one headline figure per collapsible section |
| 10,103–10,119 | _(side effect only)_ | the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice |
| 10,123–10,142 | _(side effect only)_ | the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours |
| 10,228–10,317 | _(side effect only)_ | the hub: the reading inside the circle |
| 10,681–10,684 | _(side effect only)_ | the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align) |
| 10,946–11,026 | _(side effect only)_ | RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it |
| 11,035–11,276 | _(side effect only)_ | RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it |
| 11,282–12,510 | _(side effect only)_ | RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it |
| 12,517–12,576 | _(side effect only)_ | RENDER: Content tab — reading companion (season reading · flagged now · framework) |
| 12,579–12,609 | _(side effect only)_ | TAB NAVIGATION (Cycle / Calendar / Analysis / Content) |
| 12,612–12,707 | _(side effect only)_ | MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 11,988 |
| `desire-range` | 9,176 |
| `hzn-range` | 9,510 |
| `pulse-range` | 9,127 |
| `sheet-marker-deficit` | 11,985 |
| `sheet-metric-gdp` | 11,873 |
| `sheet-metric-households` | 12,019 |
| `sheet-metric-power` | 11,952 |
| `sheet-metric-temp` | 11,823 |
| `sheet-metric-valuation` | 12,060 |
| `sheet-sign-activity` | 11,934 |
| `sheet-sign-desire` | 9,177 |
| `sheet-sign-horizon` | 9,511 |
| `sheet-sign-pulse` | 9,126 |
| `sheet-sign-volume` | 9,150 |
| `sheet-sign-yield` | 9,094 |
| `volume-range` | 9,151 |
| `ylm-range` | 9,222 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 11,994 |
| `desire-range` | 9,159 |
| `hzn-range` | 9,487 |
| `pulse-range` | 9,104 |
| `sheet-metric-gdp` | 11,874 |
| `sheet-metric-power` | 11,953 |
| `sheet-metric-temp` | 11,824 |
| `sheet-metric-valuation` | 12,061 |
| `volume-range` | 9,131 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 5,465 |
| `sheet-metric-gdp` | 5,466 |
| `sheet-sign-activity` | 5,467 |
| `sheet-metric-power` | 5,468 |
| `sheet-metric-valuation` | 5,470 |
| `sheet-metric-households` | 5,471 |
| `deficit-range` | 5,472 |
| `volume-range` | 5,473 |
| `pulse-range` | 5,474 |
| `hzn-range` | 5,475 |
| `ylm-range` | 5,486 |
| `desire-range` | 5,487 |

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

