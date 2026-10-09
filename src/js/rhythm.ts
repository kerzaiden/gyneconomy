import { hiCard, pctl, qAtIndex } from "./format.ts";
import { M2V_FROM_YEAR, m2vHistory } from "./data.ts";

// ---- Rhythm: how evenly the pulse of money changes pace ----
export var RHYTHM_WINDOW = 8, RHYTHM_BEFORE = 2008, RHYTHM_PCTL = 0.9, RHYTHM_STRETCH = 4;
type Rhythm = { history: QuarterPoint[]; edge: number };
var rhythm: Rhythm | null = null;

function spread(xs: number[]){
  var m = xs.reduce(function(a, x){ return a + x; }, 0) / xs.length;
  return Math.sqrt(xs.reduce(function(a, x){ return a + (x - m) * (x - m); }, 0) / xs.length);
}
export function rhythmRecord(): Rhythm {
  if (rhythm) return rhythm;
  var moves: number[] = [], history: QuarterPoint[] = [];
  for (var i = 1; i < m2vHistory.length; i++) moves.push((m2vHistory[i] / m2vHistory[i - 1] - 1) * 100);
  for (var j = RHYTHM_WINDOW; j <= moves.length; j++) history.push({ q:qAtIndex(M2V_FROM_YEAR, j), v:spread(moves.slice(j - RHYTHM_WINDOW, j)) });
  var edge = pctl(history.filter(function(d){ return +d.q.slice(0, 4) < RHYTHM_BEFORE; }).map(function(d){ return d.v; }), RHYTHM_PCTL);
  return rhythm = { history:history, edge:edge };
}
function pts(v: number){ return v.toFixed(2) + " points"; }
function stretches(r: Rhythm){
  var runs: { a: number; b: number }[] = [];
  r.history.forEach(function(d, i){
    if (d.v <= r.edge) return;
    var last = runs[runs.length - 1];
    if (last && i - last.b <= 2) last.b = i; else runs.push({ a:i, b:i });
  });
  return runs.filter(function(s){ return s.b - s.a + 1 >= RHYTHM_STRETCH; }).map(function(s){
    return r.history[s.a].q.slice(0, 4) + "–" + r.history[s.b].q.slice(0, 4);
  });
}
function listed(xs: string[]){ return xs.length > 1 ? xs.slice(0, -1).join(", ") + " and " + xs[xs.length - 1] : xs[0] || ""; }
export function rhythmCard(){
  var r = rhythmRecord(), h = r.history, last = h[h.length - 1], odd = last.v > r.edge;
  var steadier = h.filter(function(d){ return d.v < last.v; }).length;
  return hiCard("Rhythm", odd ? "warning" : "good", (odd ? "Irregular" : "Steady") + ": " +
    (steadier ? "steadier than all but " + steadier + " of the " + h.length + " two-year stretches on record" : "the steadiest two years on record") +
    ". It last ran irregular in " + listed(stretches(r).slice(-3)) + ".");
}
export function rhythmInfo(){
  var r = rhythmRecord();
  return '<p class="caption follow"><b>Rhythm</b>: a pulse is read for its rate and its rhythm. Each quarter velocity rises or falls by some percent; the rhythm is the standard deviation of the last ' +
    RHYTHM_WINDOW + ' of those changes, two years of them. <b>The cut-off is computed, not set by convention</b>: nobody publishes a normal for it, so it is ' + pts(r.edge) +
    ', the 90th percentile of every two-year window from ' + M2V_FROM_YEAR + ' to ' + (RHYTHM_BEFORE - 1) + ', the years the rate is measured against. The eight quarters and the 90th percentile are Claude’s choice.</p>';
}
