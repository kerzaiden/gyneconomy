import { calendarTodayY } from "./refresh-season.ts";
import { sp500AnnualReturns } from "./data.ts";
import { seasonGroup } from "./model.ts";
import type { CycleModel, TrackSeg } from "./model.ts";

export type DialQuarter = { seg: TrackSeg; a0: number; a1: number; mid: number };

// ---- the ring: a cycle's seasons as moons, its bull and bear years inside, the dots of a typical cycle ahead ----
export function dialRing(m: CycleModel){
  var era = m.era;
  function polar(r: number, deg: number){ var a = (deg - 90) * Math.PI / 180; return [(r * Math.cos(a)).toFixed(2), (r * Math.sin(a)).toFixed(2)]; }
  function arcPath(r: number, a0: number, a1: number){
    if (a1 - a0 >= 359.9) a1 = a0 + 359.9;
    var p0 = polar(r, a0), p1 = polar(r, a1), large = (a1 - a0) > 180 ? 1 : 0;
    return "M" + p0[0] + " " + p0[1] + " A" + r + " " + r + " 0 " + large + " 1 " + p1[0] + " " + p1[1];
  }
  var R = 90;
  var START = 2.5, LEAD = 3, GAP = 5, ORIGIN = START - 1.2, SEAM_END = 360 + START - GAP;
  var MARGIN = 1.2, MIN_CORE = 0.6;
  var ARC = SEAM_END - ORIGIN + MARGIN - LEAD, degPerYear = ARC / m.dialYears;
  var quarterDeg = degPerYear / 4;
  var MOON_W = 7;
  var moonW = Math.max(5.5, Math.min(MOON_W, R * (quarterDeg - 2 * MARGIN - MIN_CORE) * Math.PI / 180));
  var trackW = moonW + 5, capDegT = (trackW / 2) / R * 180 / Math.PI;
  var capDegM = (moonW / 2) / R * 180 / Math.PI;
  var parts = ['<path class="dial-track" d="' + arcPath(R, START - LEAD + capDegT, SEAM_END - capDegT) + '"></path>'];
  var quarters: DialQuarter[] = [];

  var segs = m.track.filter(function(seg){ return !seg.isNow && seg.to > seg.from; });
  var insetDeg = capDegM + MARGIN, runs: { seg: TrackSeg; a0: number; a1: number }[][] = [];
  segs.forEach(function(seg){
    var last = runs[runs.length - 1];
    if (!last || seasonGroup(last[last.length - 1].seg.season) !== seasonGroup(seg.season)) runs.push(last = []);
    last.push({ seg:seg, a0:ORIGIN + seg.from * degPerYear, a1:ORIGIN + seg.to * degPerYear });
  });
  runs.forEach(function(run){
    var r0 = run[0].a0, r1 = run[run.length - 1].a1;
    var v0 = r0 + insetDeg, v1 = r1 - insetDeg;
    if (v1 - v0 < MIN_CORE){ var mid = (r0 + r1) / 2; v0 = mid - MIN_CORE / 2; v1 = mid + MIN_CORE / 2; }
    run.forEach(function(q, k){
      var s0 = v0 + (v1 - v0) * k / run.length, s1 = v0 + (v1 - v0) * (k + 1) / run.length;
      var step = seasonGroup(q.seg.season), i = quarters.length, last = k === run.length - 1;
      quarters.push({ seg:q.seg, a0:q.a0, a1:q.a1, mid:(q.a0 + q.a1) / 2 });
      if (k === 0) parts.push('<path class="dial-moon cap ' + step + '" data-cap="' + i + '" d="' + arcPath(R, v0, v0 + 0.5) + '"></path>');
      if (last) parts.push('<path class="dial-moon cap ' + step + '" data-cap="' + i + '" d="' + arcPath(R, v1 - 0.5, v1) + '"></path>');
      parts.push('<path class="dial-moon ' + step + '" data-q="' + i + '" d="' + arcPath(R, s0, last ? s1 : s1 + 0.35) + '"></path>');
    });
  });
  var RM = 75, peakMark = "";
  for (var y = era.from; y <= m.endYear; y++){
    var isYtd = m.ongoing && y === calendarTodayY, ret = sp500AnnualReturns[y];
    if (ret == null) continue;
    var capDeg = 3 / RM * 180 / Math.PI + 1.2;
    var a0 = ORIGIN + (y - era.from) * degPerYear + capDeg;
    var a1 = ORIGIN + (isYtd ? m.elapsedYears : (y - era.from + 1)) * degPerYear - capDeg;
    if (a1 <= a0) continue;
    parts.push('<path class="dial-mkt ' + (ret >= 0 ? "up" : "down") + (isYtd ? " ytd" : "") + '" data-year="' + y + '" d="' + arcPath(RM, a0, a1) + '"></path>');
    if (y === m.peakYear){
      var pk = polar(RM, (a0 + a1) / 2);
      peakMark = '<g class="dial-peak ' + (ret >= 0 ? "up" : "down") + '" data-year="' + y + '" transform="translate(' + pk[0] + ' ' + pk[1] + ')"><circle class="disc" r="5.2"></circle><circle class="dot" r="1.9"></circle></g>';
    }
  }
  if (peakMark) parts.push(peakMark);
  var lastMoonEnd = ORIGIN + m.track.filter(function(x){ return !x.isNow; }).reduce(function(mx, x){ return Math.max(mx, x.to); }, 0) * degPerYear;
  if (m.ongoing){
    var degPerQ = degPerYear / 4;
    var dotFrom = ORIGIN + m.elapsedYears * degPerYear;
    var dotTo = SEAM_END - 1;
    var dotN = Math.round((dotTo - dotFrom) / degPerQ);
    for (var q = 0; q < dotN; q++){
      var qp = polar(RM, dotFrom + (dotTo - dotFrom) * (q + 0.5) / dotN);
      parts.push('<circle class="dial-dot" cx="' + qp[0] + '" cy="' + qp[1] + '" r="1.7"></circle>');
    }
  }
  return { parts:parts, quarters:quarters, polar:polar, R:R, SEAM_END:SEAM_END, lastMoonEnd:lastMoonEnd, moonW:moonW, trackW:trackW };
}
var MINI_BOLD = 1.7;
export function miniRing(m: CycleModel){
  var g = dialRing(m);
  return '<svg class="cycle-dial mini-ring" viewBox="-108 -108 216 216" aria-hidden="true" style="--moon-w:' + (g.moonW * MINI_BOLD).toFixed(2) + ';--track-w:' + (g.trackW * MINI_BOLD).toFixed(2) + '">' + g.parts.join("").replace(/ data-(q|cap|year)="[^"]*"/g, "") + '</svg>';
}
