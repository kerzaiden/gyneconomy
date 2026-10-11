type HistOpts = { to?: number | null; cycle?: boolean };
import { type KeyRow, atMonth, atQuarter, fmtSigned, mean, pctl, qAtIndex } from "./format.ts";
import { avgRule, AXIS, chartAxes, colPath, colScale, colWidth, crossLine, fitGroup, fitLine, histFrame, hitRect, meanRule, publishGeom, trendOf, vGrid, vhOpen, windowYears, xLabel, yearMarks, zeroRule } from "./charts.ts";
import { fedFundsHistory, mortgageHistory } from "./history-fred.ts";
import { inflationHistory, gdpQuarterlyYoY } from "./refresh-season.ts";
import { CPI_TARGET, DEF_1983, DEF_FROM_YEAR, DEF_RECESSION_FY, deficitHistory, GDP_NORM, M2_FLOOD, M2_FROM_YEAR, M2_NORM, M2_PACE_HI, M2_PACE_LO, m2Yoy, NROU_NOW, sahmOf, TEMP_BAND_HI, TEMP_BAND_LO, unempHistory } from "./data.ts";
import { windowScale } from "./history.ts";
import { unempState } from "./readings.ts";

export function deficitChart(Wpx: number, from: number, to?: number | null){
  var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
      L = F.L, R = F.R, T = F.T, B = F.B;
  from = from || 0;
  var vals = deficitHistory.slice(from, to == null ? undefined : to), n = vals.length;
  var y0 = DEF_FROM_YEAR + from, y1 = DEF_FROM_YEAR + (to == null ? deficitHistory.length : to) - 1;
  var all = vals.concat([0, DEF_1983]);
  var lo = Math.min.apply(null, all), hi = Math.max.apply(null, all);
  var pad = Math.max(0.6, (hi - lo) * 0.10), LO = lo - pad, HI = hi + pad;
  var slot = (R - L) / Math.max(1, n);
  var X = function(i: number){ return L + slot * (i + 0.5); };
  var Y = function(v: number){ return B - (B - T) * (v - LO) / (HI - LO); };
  var f = function(v: number){ return v.toFixed(1); };
  var out: string[] = [], zero = Y(0), sw = colWidth(slot);
  var defFit = trendOf(vals, "year").fit;

  var run: number | null = null;
  for (var k = 0; k <= n; k++){
    var inRec = k < n && DEF_RECESSION_FY[y0 + k];
    if (inRec && run === null) run = k;
    if (!inRec && run !== null){
      var bx0 = X(run) - slot / 2, bx1 = X(k - 1) + slot / 2;
      out.push('<rect class="spread-history-band" x="' + f(bx0) + '" y="' + f(T) +
        '" width="' + f(Math.max(2, bx1 - bx0)) + '" height="' + f(B - T) + '"/>');
      run = null;
    }
  }
  var raw = (HI - LO) / 5, p10 = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10)), nn = raw / p10;
  var step = (nn < 1.5 ? 1 : nn < 3 ? 2 : nn < 7 ? 5 : 10) * p10;
  var defTicks: number[] = [];
  for (var g = Math.ceil(LO / step) * step; g <= HI + 1e-9; g += step)
    defTicks.push(Math.abs(g) < 1e-9 ? 0 : g);
  out.push(chartAxes({ ticks:defTicks, y:Y, x0:L, x1:R, base:Y(0), noGridAt:0, marks:[DEF_1983], markFmt:function(v: number){ return fmtSigned(v, 1) + "%"; }, top:(T - AXIS.LEG - AXIS.READ), bot:B,
    fmt:function(at: number){ return fmtSigned(at, step < 1 ? 1 : 0) + "%"; } }));
  var steps = [1, 2, 5, 10, 20, 25], yrStep = 25, si, yy, cnt;
  for (si = 0; si < steps.length; si++){
    cnt = 0;
    for (yy = y0; yy <= y1; yy++) if (yy % steps[si] === 0) cnt++;
    if (cnt <= (narrow ? 5 : 8)){ yrStep = steps[si]; break; }
  }
  for (yy = y0; yy <= y1; yy++){
    if (yy % yrStep) continue;
    out.unshift(vGrid(X(yy - y0), T, B));
    out.push(xLabel(f(X(yy - y0)), yy, H - AXIS.FOOT));
  }
  vals.forEach(function(v, i){
    out.push('<path class="def-col hcol' + (v > 0 ? " surplus" : "") + '" stroke-width="' + sw.toFixed(2) +
      '" d="' + colPath(X(i), zero, Y(v), sw) + '"/>');
  });
  out.push(zeroRule(L, R, zero));
  var y83 = Y(DEF_1983);
  out.push(meanRule(L, R, y83));
  out.push(crossLine(T, B));
  var dfAvg = vals.reduce(function(a, v){ return a + v; }, 0) / (n || 1);
  publishGeom("deficitChart", { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, at:function(d: unknown, i: number){ return "FY" + (y0 + i); },
                   fmt:function(v: number){ return fmtSigned(v, 1) + "%"; },
                   refs:[{ label:"Average", v:dfAvg },
                         { label:"1983 level", v:DEF_1983, dash:true }],
                   vals:vals.map(function(v: number){ return { v:v }; }) });
  out.push(avgRule(L, R, f(Y(dfAvg))));
  if (defFit && defFit.n > 1)
    out.push(fitGroup({ fit:defFit, fmt:function(v: number){ return fmtSigned(v, 1) + "%"; } },
                      X(0), X(n - 1), Y, R, L, 0));
  return vhOpen(W, H) +
    'aria-label="The federal deficit or surplus as a share of GDP, every fiscal year from ' + y0 + ' to ' + y1 +
    ', with the fiscal years that contained a recession shaded and the 1983 level marked">' + out.join("") + '</svg>';
}
type ColRow = { m?: string; q?: string; v: number | null };
type ColumnSpec = { geom: string; rows: ColRow[]; per: "month" | "quarter"; col: string; step?: (seen: number[]) => (d: ColRow) => string;
  ref?: { label: string; v: number }; dp: number; signed?: boolean; what: string; tail?: string };
function axisPct(g: number){ return (Math.round(g) === g ? g : g.toFixed(1)) + "%"; }
function rowYear(d: ColRow){ return parseInt(String(d.m || d.q).slice(0, 4), 10); }
function colYears(vals: ColRow[], per: string, cycle: boolean | undefined, narrow: boolean){
  var y0 = rowYear(vals[0]), y1 = rowYear(vals[vals.length - 1]), years = windowYears(y0, y1, narrow ? 4 : 5);
  if (cycle){
    var stepY = Math.max(1, Math.ceil((y1 - y0 + 1) / (narrow ? 4 : 6)));
    years = [];
    for (var cyr = y0; cyr <= y1; cyr += stepY) years.push(cyr);
  }
  var idx = per === "month"
    ? function(yr: number){ for (var k = 0; k < vals.length; k++) if (vals[k].m === yr + "-01") return k; return -1; }
    : function(yr: number){ var i = (yr - y0) * 4; return i >= 0 && i < vals.length ? i : -1; };
  return { years:years, idx:idx };
}
function columnHistory(S: ColumnSpec, Wpx: number, from: number, o?: HistOpts){
  o = o || {};
  var F = histFrame(Wpx), W = F.W, L = F.L, R = F.R, T = F.T, B = F.B;
  var vals = S.rows.slice(from || 0, o.to == null ? undefined : o.to), n = vals.length;
  if (!n) return "";
  var seen = vals.filter(function(d){ return d.v != null; }).map(function(d){ return d.v as number; });
  if (!seen.length) return "";
  var y0 = rowYear(vals[0]), y1 = rowYear(vals[n - 1]), ref = S.ref;
  var sc = windowScale(seen, ref ? [0, ref.v] : [0]);
  var LO = sc.lo, HI = sc.hi, cs = colScale(F, n, LO, HI), X = cs.X, Y = cs.Y;
  var out: string[] = [], zero = Y(0), dp = S.dp;
  var pct = function(v: number){ return v.toFixed(dp) + "%"; };
  out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:(LO <= 0 && HI >= 0 ? Y(0) : B), noGridAt:0, marks:(ref ? [ref.v] : undefined), top:(T - AXIS.LEG - AXIS.READ), bot:B, fmt:axisPct }));
  var cy = colYears(vals, S.per, o.cycle, F.narrow), ym = yearMarks(F, cy.years, cy.idx, X);
  ym.grids.forEach(function(g){ out.unshift(g); });
  out.push.apply(out, ym.labels);
  var sw = colWidth((R - L) / n), step = S.step ? S.step(seen) : null;
  vals.forEach(function(d, i){
    if (d.v == null) return;
    out.push('<path class="' + S.col + ' hcol' + (step ? " " + step(d) : "") + '" stroke-width="' + sw.toFixed(2) +
      '" d="' + colPath(X(i), zero, Y(d.v), sw) + '"/>');
  });
  var avgV = mean(seen);
  out.push(avgRule(L, R, Y(avgV).toFixed(1)));
  out.push(fitLine(seen, S.per, pct, X(0), X(n - 1), Y, R, L, 0));
  out.push(zeroRule(L, R, zero));
  if (ref) out.push(meanRule(L, R, Y(ref.v)));
  out.push(crossLine(T, B));
  out.push(hitRect(F));
  var refs: ChartRef[] = [{ label:"Average", v:avgV }];
  if (ref) refs.push({ label:ref.label, v:ref.v, dash:true });
  publishGeom(S.geom, { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, vals:vals, at:(S.per === "month" ? atMonth : atQuarter) as ChartGeom["at"], refs:refs,
                   fmt:(S.signed ? function(v: number){ return fmtSigned(v, dp) + "%"; } : pct) });
  return vhOpen(W, F.H) +
    'aria-label="' + S.what + ', every ' + S.per + ' from ' + y0 + ' to ' + y1 + (S.tail || "") + '">' + out.join("") + '</svg>';
}
export function unempHistoryChart(Wpx: number, from: number, o?: HistOpts){
  return columnHistory({ geom:"unempHistoryChart", rows:unempHistory, per:"month", col:"unemp-col", dp:1,
    step:function(){ return function(d){ return unempState(d.v as number, sahmOf(d.m as string)); }; },
    ref:{ label:"CBO estimate", v:NROU_NOW }, what:"The unemployment rate",
    tail:", against the 3.5 to 5 per cent band and CBO\u2019s estimate of the noncyclical rate" }, Wpx, from, o);
}
export function fedFundsHistoryChart(Wpx: number, from: number, o?: HistOpts){
  return columnHistory(rateSpec(fedFundsHistory, "fedFundsHistoryChart", "The effective federal funds rate"), Wpx, from, o);
}
export function mortgageHistoryChart(Wpx: number, from: number, o?: HistOpts){
  return columnHistory(rateSpec(mortgageHistory, "mortgageHistoryChart", "The 30-year fixed mortgage rate"), Wpx, from, o);
}
function rateFence(series: MonthPoint[]){
  var vs = series.map(function(d){ return d.v; }), q1 = pctl(vs, 0.25), q3 = pctl(vs, 0.75);
  return q3 + 1.5 * (q3 - q1);
}
export function rateKey(series: MonthPoint[]): KeyRow[] {
  return [["hk-ramp", "Lowest to highest of the range in view, in six equal steps"],
          ["hk-x", "Past " + rateFence(series).toFixed(2) + "%, Tukey\u2019s fence of the whole record: an outlier"]];
}
export function heatKey(): KeyRow[] {
  var top = heatEdges(), p = function(v: number){ return v.toFixed(1) + "%"; };
  return [["hk-x", "Below " + p(TEMP_BAND_LO) + ", under the range"], ["hk-0", p(TEMP_BAND_LO) + " to " + p(CPI_TARGET) + ", under the Fed\u2019s target"],
          ["hk-1", p(CPI_TARGET) + " to " + p(TEMP_BAND_HI) + ", the top of the range"], ["hk-2", p(TEMP_BAND_HI) + " to " + p(top[0]) + ", up to the record\u2019s 90th percentile"],
          ["hk-3", p(top[0]) + " to " + p(top[1]) + ", its 90th to 95th"], ["hk-4", "Above " + p(top[1]) + ", its hottest twentieth"]];
}
export function m2Key(): KeyRow[] {
  var p = function(v: number){ return v.toFixed(1) + "%"; };
  return [["hk-x", "Below 0%: the money stock shrinking"], ["hk-4", "0% to " + p(M2_PACE_LO) + ", the record\u2019s slowest tenth"],
          ["hk-3", p(M2_PACE_LO) + " to " + p(M2_NORM) + ", the long-run pace"], ["hk-2", p(M2_NORM) + " to " + p(M2_PACE_HI) + ", up to its fastest tenth"],
          ["hk-1", p(M2_PACE_HI) + " to " + p(M2_FLOOD) + ", the fastest before 2020"], ["hk-0", "Above " + p(M2_FLOOD) + ": the flood"]];
}
function rateSpec(series: MonthPoint[], geom: string, what: string): ColumnSpec {
  var fence = rateFence(series);
  return { geom:geom, rows:series, per:"month", col:"ff-col", dp:2, what:what,
    step:function(seen){
      var vLo = Math.min.apply(null, seen), vHi = Math.max.apply(null, seen);
      return function(d){
        var v = d.v as number;
        if (v > fence) return "fx";
        if (!(vHi > vLo)) return "f5";
        return "f" + Math.max(0, Math.min(5, Math.floor(6 * (v - vLo) / (vHi - vLo))));
      };
    } };
}
export function cpiHistoryChart(Wpx: number, from: number, o?: HistOpts){
  return columnHistory({ geom:"cpiHistoryChart", rows:inflationHistory, per:"month", col:"temp-col", dp:1,
    step:function(){ return function(d){ return heatStep(d.v as number); }; },
    ref:{ label:"Fed target", v:CPI_TARGET }, what:"Consumer prices year over year",
    tail:", against the 2 per cent target, shaded from cool to hot" }, Wpx, from, o);
}
export function gdpHistoryChart(Wpx: number, from: number, o?: HistOpts){
  return columnHistory({ geom:"gdpHistoryChart", rows:gdpQuarterlyYoY, per:"quarter", col:"growth-col", dp:1,
    ref:{ label:"Long-run", v:GDP_NORM }, what:"Real GDP growth year over year",
    tail:", against the long-run average of " + GDP_NORM + " per cent; quarters of expansion in gold, of contraction in periwinkle" }, Wpx, from, o);
}
export function m2GrowthChart(Wpx: number, from: number, o?: HistOpts){
  var rows = m2Yoy.slice(4).map(function(v, i){ return { q:qAtIndex(M2_FROM_YEAR + 1, i), v:v }; });
  return columnHistory({ geom:"m2GrowthChart", rows:rows, per:"quarter", col:"m2-col", dp:1, signed:true,
    step:function(){ return function(d){ return m2Step(d.v as number); }; },
    ref:{ label:"Long-run pace", v:M2_NORM }, what:"Money stock growth year over year",
    tail:", against the long-run norm of " + M2_NORM + " per cent" }, Wpx, from, o);
}
function m2Step(v: number){
  return v < 0 ? "v5" : v < M2_PACE_LO ? "v4" : v < M2_NORM ? "v3" : v < M2_PACE_HI ? "v2" : v <= M2_FLOOD ? "v1" : "v0";
}
var heatTop: number[] = [];
function heatEdges(){
  if (!heatTop.length){ var all = inflationHistory.map(function(d){ return d.v; }); heatTop = [pctl(all, 0.9), pctl(all, 0.95)]; }
  return heatTop;
}
function heatStep(v: number){
  var top = heatEdges();
  return v < TEMP_BAND_LO ? "s0" : v < CPI_TARGET ? "s1" : v < TEMP_BAND_HI ? "s2" : v < top[0] ? "s3" : v < top[1] ? "s4" : "s5";
}
