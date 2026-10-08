type HistOpts = { to?: number | null; cycle?: boolean };
import { atMonth, atQuarter, fmtSigned, pctl, qAtIndex } from "./format.ts";
import { type HistFrame, avgRule, AXIS, chartAxes, colPath, colWidth, crossLine, fitGroup, fitLine, histFrame, meanRule, publishGeom, trendOf, vGrid, vhOpen, windowYears, xLabel, zeroRule } from "./charts.ts";
import { fedFundsHistory } from "./history-fred.ts";
import { inflationHistory, gdpQuarterlyYoY } from "./refresh-season.ts";
import { CPI_TARGET, DEF_1983, DEF_FROM_YEAR, DEF_RECESSION_FY, deficitHistory, DSR_FROM_YEAR, dsrHistory, GDP_NORM, M2_FLOOD, M2_FROM_YEAR, M2_NORM, M2_PACE_HI, M2_PACE_LO, M2V_FROM_YEAR, m2vHistory, m2Yoy, NROU_NOW, PULSE_PRE2008, SAV_OFFSET, savHistory, sahmOf, TEMP_BAND_HI, TEMP_BAND_LO, unempHistory } from "./data.ts";
import { quarterRegime } from "./model.ts";
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
  var out: string[] = [], zero = Y(0), sw = Math.max(1.5, Math.min(26, slot * 0.6));
  var defFit = trendOf(vals, "points", "year").fit;

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
  out.push(chartAxes({ ticks:defTicks, y:Y, x0:L, x1:R, base:Y(0), noGridAt:0, top:(T - AXIS.LEG - AXIS.READ), bot:B,
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
    out.push(xLabel(f(X(yy - y0)), yy, B + 17));
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
function colScale(F: HistFrame, n: number, lo: number, hi: number){
  var h = (F.R - F.L) / (2 * Math.max(1, n));
  return { X:function(i: number){ return F.L + h + (F.R - F.L - 2 * h) * i / Math.max(1, n - 1); },
           Y:function(v: number){ return F.B - (F.B - F.T) * (v - lo) / (hi - lo); } };
}
export function velocityHistoryChart(Wpx: number, from: number, to?: number | null){
  var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
      L = F.L, R = F.R, T = F.T, B = F.B;
  from = from || 0;
  var ser = m2vHistory.slice(from, to == null ? undefined : to), n = ser.length;
  var sc = windowScale(ser, [PULSE_PRE2008]);
  var LO = sc.lo, HI = sc.hi, cs = colScale(F, n, LO, HI), X = cs.X, Y = cs.Y;
  var f = function(v: number){ return v.toFixed(1); };
  var out: string[] = [];
  var y0 = M2V_FROM_YEAR + Math.floor(from / 4);
  var y1 = M2V_FROM_YEAR + Math.floor((from + n - 1) / 4);

  out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:B, top:(T - AXIS.LEG - AXIS.READ), bot:B,
    fmt:function(g: number){ return g.toFixed(1) + "\u00d7"; } }));
  windowYears(y0, y1, narrow ? 4 : 5).forEach(function(yr){
    var i = (yr - M2V_FROM_YEAR) * 4 - from; if (i < 0 || i >= n) return;
    out.unshift(vGrid(X(i), T, B));
    out.push(xLabel(f(X(i)), yr, B + 17));
  });

  var iEnd = (2008 - M2V_FROM_YEAR) * 4 - 1 - from;
  var meanTo = iEnd > 0 ? X(Math.min(iEnd, n - 1)) : R;
  out.push('<path class="vh-mean" d="M' + f(X(0)) + ',' + f(Y(PULSE_PRE2008)) + 'H' + f(meanTo) + '"/>');
  out.push(crossLine(T, B));
  var pAvg = ser.reduce(function(a, v){ return a + v; }, 0) / (n || 1);
  publishGeom("velocityHistoryChart", { L:L, R:R, T:T, B:B, W:W, n:n, at:function(d: unknown, i: number){ return qAtIndex(M2V_FROM_YEAR, from + i); },
                   fmt:function(v: number){ return v.toFixed(3) + "\u00d7"; },
                   refs:[{ label:"Average", v:pAvg },
                         { label:"Pre-2008 mean", v:PULSE_PRE2008, dash:true }],
                   vals:ser.map(function(v: number){ return { v:v }; }) });
  out.push(avgRule(f(X(0)), f(X(n - 1)), f(Y(pAvg))));

  var pSlot = (R - L) / Math.max(1, n), pSw = colWidth(pSlot);
  var pMidY = Y(PULSE_PRE2008);
  ser.forEach(function(v, i){
    var y1 = Y(v);
    if (Math.abs(y1 - pMidY) < 0.6) y1 = pMidY + (v >= PULSE_PRE2008 ? -0.6 : 0.6);
    out.push('<path class="pv-col hcol ' + (v >= PULSE_PRE2008 ? "over" : "under") + '" stroke-width="' +
      pSw.toFixed(2) + '" d="' + colPath(X(i), pMidY, y1, pSw) + '"/>');
  });

  out.push(fitLine(ser, "quarter", function(v: number){ return v.toFixed(2) + "\u00d7"; }, X(0), X(n - 1), Y, R, L, 0));

  return vhOpen(W, H) +
    'aria-label="Velocity of M2, every quarter from ' + y0 + ' to ' + y1 +
    ', against the 1959 to 2007 average of ' + PULSE_PRE2008.toFixed(2) + ' times">' +
    out.join("") + '</svg>';
}
function yearTicks(out: string[], vals: { m: string }[], w: { y0: number; y1: number; cycle?: boolean; narrow: boolean }, X: (i: number) => number, T: number, B: number, f: (v: number) => string){
  var years = windowYears(w.y0, w.y1, w.narrow ? 4 : 5);
  if (w.cycle){
    var stepY = Math.max(1, Math.ceil((w.y1 - w.y0 + 1) / (w.narrow ? 4 : 6)));
    years = [];
    for (var cyr = w.y0; cyr <= w.y1; cyr += stepY) years.push(cyr);
  }
  years.forEach(function(yr){
    var i = -1;
    for (var k = 0; k < vals.length && i < 0; k++) if (vals[k].m === yr + "-01") i = k;
    if (i < 0) return;
    out.unshift(vGrid(X(i), T, B));
    out.push(xLabel(f(X(i)), yr, B + 17));
  });
}
export function unempHistoryChart(Wpx: number, from: number, o?: HistOpts){
  o = o || {};
  var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
      L = F.L, R = F.R, T = F.T, B = F.B;
  from = from || 0;
  var vals = unempHistory.slice(from, o.to == null ? undefined : o.to), n = vals.length;
  if (!n) return "";
  var seen = vals.filter(function(d){ return d.v != null; });
  if (!seen.length) return "";
  var y0 = parseInt(vals[0].m.slice(0, 4), 10), y1 = parseInt(vals[n - 1].m.slice(0, 4), 10);
  var sc = windowScale(seen.map(function(d){ return d.v; }), [0, NROU_NOW]);
  var LO = sc.lo, HI = sc.hi, cs = colScale(F, n, LO, HI), X = cs.X, Y = cs.Y;
  var f = function(v: number){ return v.toFixed(1); };
  var out: string[] = [], zero = Y(0);
  out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:(LO <= 0 && HI >= 0 ? Y(0) : B), noGridAt:0, top:(T - AXIS.LEG - AXIS.READ), bot:B,
    fmt:function(g: number){ return (Math.round(g) === g ? g : g.toFixed(1)) + "%"; } }));
  yearTicks(out, vals, { y0:y0, y1:y1, cycle:o.cycle, narrow:narrow }, X, T, B, f);
  var sw = colWidth((R - L) / n);
  vals.forEach(function(d, i){
    if (d.v == null) return;
    out.push('<path class="unemp-col hcol ' + unempState(d.v, sahmOf(d.m)) + '" stroke-width="' + sw.toFixed(2) +
      '" d="' + colPath(X(i), zero, Y(d.v), sw) + '"/>');
  });
  var avgV = seen.reduce(function(a, d){ return a + d.v!; }, 0) / seen.length;
  out.push(avgRule(L, R, f(Y(avgV))));
  out.push(fitLine(seen.map(function(d){ return d.v; }), "month", function(v: number){ return v.toFixed(1) + "%"; }, X(0), X(n - 1), Y, R, L, 0));
  out.push(zeroRule(L, R, zero));
  out.push(meanRule(L, R, Y(NROU_NOW)));
  out.push(crossLine(T, B));
  out.push('<rect class="temp-hist-hit" x="' + L + '" y="' + T + '" width="' + (R - L) + '" height="' + (B - T) + '" fill="transparent"/>');
  publishGeom("unempHistoryChart", { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, vals:vals, at:atMonth,
                   refs:[{ label:"Average", v:avgV },
                         { label:"CBO estimate", v:NROU_NOW, dash:true }],
                   fmt:function(v: number){ return v.toFixed(1) + "%"; } });
  return vhOpen(W, H) +
    'aria-label="The unemployment rate, every month from ' + y0 + ' to ' + y1 +
    ', against the 3.5 to 5 per cent band and CBO\u2019s estimate of the noncyclical rate">' + out.join("") + '</svg>';
}
export function fedFundsHistoryChart(Wpx: number, from: number, o?: HistOpts){
  o = o || {};
  var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
      L = F.L, R = F.R, T = F.T, B = F.B;
  from = from || 0;
  var vals = fedFundsHistory.slice(from, o.to == null ? undefined : o.to), n = vals.length;
  if (!n) return "";
  var seen = vals.filter(function(d){ return d.v != null; });
  if (!seen.length) return "";
  var y0 = parseInt(vals[0].m.slice(0, 4), 10), y1 = parseInt(vals[n - 1].m.slice(0, 4), 10);
  var sc = windowScale(seen.map(function(d){ return d.v; }), [0]);
  var LO = sc.lo, HI = sc.hi, cs = colScale(F, n, LO, HI), X = cs.X, Y = cs.Y;
  var f = function(v: number){ return v.toFixed(1); };
  var out: string[] = [], zero = Y(0);
  out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:zero, noGridAt:0,
    top:(T - AXIS.LEG - AXIS.READ), bot:B,
    fmt:function(g: number){ return (Math.round(g) === g ? g : g.toFixed(1)) + "%"; } }));
  yearTicks(out, vals, { y0:y0, y1:y1, cycle:o.cycle, narrow:narrow }, X, T, B, f);
  var sw = colWidth((R - L) / n);
  var seenV = seen.map(function(d){ return d.v; });
  var vLo = Math.min.apply(null, seenV), vHi = Math.max.apply(null, seenV);
  var step = function(v: number){
    if (!(vHi > vLo)) return 5;
    return Math.max(0, Math.min(5, Math.floor(6 * (v - vLo) / (vHi - vLo))));
  };
  vals.forEach(function(d, i){
    if (d.v == null) return;
    out.push('<path class="ff-col hcol f' + step(d.v) + '" stroke-width="' + sw.toFixed(2) +
      '" d="' + colPath(X(i), zero, Y(d.v), sw) + '"/>');
  });
  var avgV = seen.reduce(function(a, d){ return a + d.v; }, 0) / seen.length;
  out.push(avgRule(L, R, f(Y(avgV))));
  out.push(fitLine(seen.map(function(d){ return d.v; }), "month", function(v: number){ return v.toFixed(2) + "%"; }, X(0), X(n - 1), Y, R, L, 0));
  out.push(zeroRule(L, R, zero));
  out.push(crossLine(T, B));
  out.push('<rect class="temp-hist-hit" x="' + L + '" y="' + T + '" width="' + (R - L) + '" height="' + (B - T) + '" fill="transparent"/>');
  publishGeom("fedFundsHistoryChart", { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, vals:vals, at:atMonth,
                   refs:[{ label:"Average", v:avgV }],
                   fmt:function(v: number){ return v.toFixed(2) + "%"; } });
  return vhOpen(W, H) +
    'aria-label="The effective federal funds rate, every month from ' + y0 + ' to ' + y1 + '">' + out.join("") + '</svg>';
}
export function householdsChart(Wpx: number, from: number, to?: number | null){
  var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
      L = F.L, R = F.R, T = F.T, B = F.B;
  from = from || 0;
  var hi = to == null ? dsrHistory.length : to;
  var bill = dsrHistory.slice(from, hi);
  var kept = savHistory.slice(SAV_OFFSET + from, SAV_OFFSET + hi);
  var n = bill.length;
  var sc = windowScale(bill.concat(kept), [0]);
  var LO = sc.lo, HI = sc.hi, cs = colScale(F, n, LO, HI), X = cs.X, Y = cs.Y;
  var f = function(v: number){ return v.toFixed(1); };
  var out: string[] = [];
  var y0 = DSR_FROM_YEAR + Math.floor(from / 4);
  var y1 = DSR_FROM_YEAR + Math.floor((hi - 1) / 4);
  out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:B, top:(T - AXIS.LEG - AXIS.READ), bot:B,
    fmt:function(g: number){ return g.toFixed(0) + "%"; } }));
  windowYears(y0, y1, narrow ? 4 : 5).forEach(function(yr){
    var i = (yr - DSR_FROM_YEAR) * 4 - from; if (i < 0 || i >= n) return;
    out.unshift(vGrid(X(i), T, B));
    out.push(xLabel(f(X(i)), yr, B + 17));
  });
  out.push(crossLine(T, B));
  var hhSlot = (R - L) / Math.max(1, n);
  var hhSw = colWidth(hhSlot / 2), hhOff = Math.max(0.7, hhSw * 0.62);
  bill.forEach(function(v, i){
    var cx = X(i);
    out.push('<g class="hcol">' +
      '<path class="hh-col bill" stroke-width="' + hhSw.toFixed(2) + '" d="' + colPath(cx - hhOff, Y(0), Y(v), hhSw) + '"/>' +
      '<path class="hh-col kept" stroke-width="' + hhSw.toFixed(2) + '" d="' + colPath(cx + hhOff, Y(0), Y(kept[i]), hhSw) + '"/>' +
    '</g>');
  });
  out.push(fitLine(kept, "quarter", function(v: number){ return v.toFixed(1) + "%"; }, X(0), X(n - 1), Y, R, L, 0));
  var hovAt = 0;
  publishGeom("householdsChart", { L:L, R:R, T:T, B:B, W:W, n:n,
    refs:[{ label:"Paid out on debt", cls:"hh-bill" }, { label:"Kept as saving", cls:"hh-kept" }],
    at:function(d: unknown, i: number){ hovAt = i; return qAtIndex(DSR_FROM_YEAR, from + i); },
    fmt:function(v: number){ return v.toFixed(1) + "% out \u00b7 " + kept[hovAt].toFixed(1) + "% kept"; },
    vals:bill.map(function(v: number){ return { v:v }; }) });
  return '<svg class="hist-svg vh-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" ' +
    'aria-label="Household debt service and the personal saving rate, both as a share of disposable ' +
    'income, every quarter from ' + y0 + ' to ' + y1 + '">' + out.join("") + '</svg>';
}
export function cpiHistoryChart(Wpx: number, from: number, o?: HistOpts){
  o = o || {};
  var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
      L = F.L, R = F.R, T = F.T, B = F.B;
  from = from || 0;
  var vals = inflationHistory.slice(from, o.to == null ? undefined : o.to), n = vals.length;
  if (!n) return "";
  var y0 = parseInt(vals[0].m.slice(0, 4), 10), y1 = parseInt(vals[n - 1].m.slice(0, 4), 10);
  var sc = windowScale(vals.map(function(d){ return d.v; }), [0, CPI_TARGET]);
  var LO = sc.lo, HI = sc.hi, cs = colScale(F, n, LO, HI), X = cs.X, Y = cs.Y;
  var f = function(v: number){ return v.toFixed(1); };
  var out: string[] = [], zero = Y(0), avgShown = null;
  out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:(LO <= 0 && HI >= 0 ? Y(0) : B), noGridAt:0, top:(T - AXIS.LEG - AXIS.READ), bot:B,
    fmt:function(g: number){ return (Math.round(g) === g ? g : g.toFixed(1)) + "%"; } }));
  yearTicks(out, vals, { y0:y0, y1:y1, cycle:o.cycle, narrow:narrow }, X, T, B, f);
  var sw = colWidth((R - L) / n);
  vals.forEach(function(d, i){
    out.push('<path class="temp-col hcol ' + heatStep(d.v) + '" stroke-width="' + sw.toFixed(2) +
      '" d="' + colPath(X(i), zero, Y(d.v), sw) + '"/>');
  });
  if (n){
    var avgV = vals.reduce(function(a, d){ return a + d.v; }, 0) / n, avgY = Y(avgV);
    out.push(avgRule(L, R, f(avgY)));
    avgShown = avgV;
  }
  out.push(fitLine(vals.map(function(d){ return d.v; }), "month", function(v: number){ return v.toFixed(1) + "%"; }, X(0), X(n - 1), Y, R, L, 0));
  out.push(zeroRule(L, R, zero));
  out.push(meanRule(L, R, Y(CPI_TARGET)));
  out.push(crossLine(T, B));
  out.push('<rect class="temp-hist-hit" x="' + L + '" y="' + T + '" width="' + (R - L) + '" height="' + (B - T) + '" fill="transparent"/>');
  publishGeom("cpiHistoryChart", { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, vals:vals, at:atMonth,
                   refs:[{ label:"Average", v:avgShown },
                         { label:"Fed target", v:CPI_TARGET, dash:true }],
                   fmt:function(v: number){ return v.toFixed(1) + "%"; } });
  return vhOpen(W, H) +
    'aria-label="Consumer prices year over year, every month from ' + y0 + ' to ' + y1 +
    ', against the 2 per cent target, shaded from cool to hot">' + out.join("") + '</svg>';
}
export function gdpHistoryChart(Wpx: number, from: number, o?: HistOpts){
  o = o || {};
  var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
      L = F.L, R = F.R, T = F.T, B = F.B;
  from = from || 0;
  var vals = gdpQuarterlyYoY.slice(from, o.to == null ? undefined : o.to), n = vals.length;
  if (!n) return "";
  var y0 = parseInt(vals[0].q.slice(0, 4), 10), y1 = parseInt(vals[n - 1].q.slice(0, 4), 10);
  var sc = windowScale(vals.map(function(d){ return d.v; }), [0, GDP_NORM]);
  var LO = sc.lo, HI = sc.hi, cs = colScale(F, n, LO, HI), X = cs.X, Y = cs.Y;
  var f = function(v: number){ return v.toFixed(1); };
  var out: string[] = [], zero = Y(0);
  out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:(LO <= 0 && HI >= 0 ? Y(0) : B), noGridAt:0, top:(T - AXIS.LEG - AXIS.READ), bot:B,
    fmt:function(g: number){ return (Math.round(g) === g ? g : g.toFixed(1)) + "%"; } }));
  if (o.cycle){
    var spanY = y1 - y0 + 1, stepY = Math.max(1, Math.ceil(spanY / (narrow ? 4 : 6)));
    for (var cyr = y0; cyr <= y1; cyr += stepY){
      var cix = (cyr - y0) * 4; if (cix >= n) break;
      out.unshift(vGrid(X(cix), T, B));
      out.push(xLabel(f(X(cix)), cyr, B + 17));
    }
  } else windowYears(y0, y1, narrow ? 4 : 5).forEach(function(yr){
    var i = (yr - y0) * 4; if (i < 0 || i >= n) return;
    out.unshift(vGrid(X(i), T, B));
    out.push(xLabel(f(X(i)), yr, B + 17));
  });
  var sw = colWidth((R - L) / n);
  vals.forEach(function(d, i){
    out.push('<path class="growth-col hcol' + (quarterRegime(d) === "contraction" ? " down" : "") + '" stroke-width="' + sw.toFixed(2) +
      '" d="' + colPath(X(i), zero, Y(d.v), sw) + '"/>');
  });
  var gAvg = vals.reduce(function(a, d){ return a + d.v; }, 0) / n;
  out.push(avgRule(L, R, f(Y(gAvg))));
  out.push(fitLine(vals.map(function(d){ return d.v; }), "quarter", function(v: number){ return v.toFixed(1) + "%"; }, X(0), X(n - 1), Y, R, L, 0));
  out.push(zeroRule(L, R, zero));
  out.push(meanRule(L, R, Y(GDP_NORM)));
  out.push(crossLine(T, B));
  out.push('<rect class="temp-hist-hit" x="' + L + '" y="' + T + '" width="' + (R - L) + '" height="' + (B - T) + '" fill="transparent"/>');
  publishGeom("gdpHistoryChart", { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, vals:vals, at:atQuarter,
                   refs:[{ label:"Average", v:gAvg },
                         { label:"Long-run", v:GDP_NORM, dash:true }],
                   fmt:function(v: number){ return v.toFixed(1) + "%"; } });
  return vhOpen(W, H) +
    'aria-label="Real GDP growth year over year, every quarter from ' + y0 + ' to ' + y1 +
    ', against the long-run average of ' + GDP_NORM + ' per cent; quarters above potential in gold, below it in periwinkle">' +
    out.join("") + '</svg>';
}
export function m2GrowthChart(Wpx: number, from: number, to?: number | null){
  var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
      L = F.L, R = F.R, T = F.T, B = F.B;
  from = from || 0;
  var all = m2Yoy.slice(4), vals = all.slice(from, to == null ? undefined : to), n = vals.length;
  var y0 = M2_FROM_YEAR + 1 + Math.floor(from / 4);
  var y1 = M2_FROM_YEAR + 1 + Math.floor(((to == null ? all.length : to) - 1) / 4);
  var sc = windowScale(vals, [0, M2_NORM]);
  var LO = sc.lo, HI = sc.hi, cs = colScale(F, n, LO, HI), X = cs.X, Y = cs.Y;
  var f = function(v: number){ return v.toFixed(1); };
  var out: string[] = [], zero = Y(0);
  out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:(LO <= 0 && HI >= 0 ? Y(0) : B), noGridAt:0, top:(T - AXIS.LEG - AXIS.READ), bot:B,
    fmt:function(g: number){ return (Math.round(g) === g ? g : g.toFixed(1)) + "%"; } }));
  windowYears(y0, y1, narrow ? 4 : 5).forEach(function(yr){
    var i = (yr - y0) * 4; if (i < 0 || i >= n) return;
    out.unshift(vGrid(X(i), T, B));
    out.push(xLabel(f(X(i)), yr, B + 17));
  });
  var sw = colWidth((R - L) / n);
  vals.forEach(function(v, i){
    if (v == null) return;
    out.push('<path class="m2-col hcol ' + m2Step(v) + '" stroke-width="' + sw.toFixed(2) +
      '" d="' + colPath(X(i), zero, Y(v), sw) + '"/>');
  });
  var vAvg = vals.filter(function(v){ return v != null; }).reduce(function(a, v){ return a + v; }, 0) /
             (vals.filter(function(v){ return v != null; }).length || 1);
  out.push(meanRule(L, R, Y(M2_NORM)));
  out.push(avgRule(L, R, f(Y(vAvg))));
  out.push(zeroRule(L, R, zero));
  out.push(crossLine(T, B));
  publishGeom("m2GrowthChart", { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, at:function(d: unknown, i: number){ return qAtIndex(M2_FROM_YEAR + 1, from + i); },
                   fmt:function(v: number){ return fmtSigned(v, 1) + "%"; },
                   refs:[{ label:"Average", v:vAvg }, { label:"Long-run pace", v:M2_NORM, dash:true }],
                   vals:vals.map(function(v){ return v == null ? null : { v:v }; }) });
  out.push(fitLine(vals.filter(function(v){ return v != null; }), "quarter", function(v: number){ return v.toFixed(1) + "%"; }, X(0), X(n - 1), Y, R, L, 0));
  out.push(meanRule(L, R, Y(M2_NORM)));
  return vhOpen(W, H) +
    'aria-label="Money stock growth year over year, every quarter from ' + y0 + ' to ' + y1 +
    ', against the long-run norm of ' + M2_NORM + ' per cent">' +
    out.join("") + '</svg>';
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
