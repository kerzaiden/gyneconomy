import { prettyKey, withUnit } from "./format.ts";
import { keyed, ROSTER } from "./roster.ts";

export type EraPoint = { k: string; v: number };
export type EraRow = Omit<RosterRow, "pair" | "peek"> & { place(v: number): number; first: EraPoint; now: EraPoint; seen: EraPoint[]; pair?: Keyed[]; peek?: Keyed[] };
export type EraRoster = EraRow[] & { byId: Record<string, EraRow> };
export type DoorFace = { name: string | null; figure: string; unit: string; word: string };

function todayFace(item: Element): { val: Element | null; word: Element | null } {
  var t = item.__today, box = document.createElement("div");
  if (!t) return { val:item.querySelector(".ci-value"), word:item.querySelector(".ci-word") };
  box.innerHTML = '<span>' + t.value + '</span><span>' + (t.word || "") + '</span>';
  return { val:box.firstChild as Element, word:t.word == null ? null : box.lastChild as Element };
}
export function readDoor(open: string): DoorFace | null {
  var item = document.querySelector('.cat-item[data-open="' + open + '"]'); if (!item) return null;
  var face = todayFace(item), val = face.val, unit = val && val.querySelector(".ci-unit"), word = face.word;
  var figure = val ? val.cloneNode(true) as Element : null;
  if (figure) ([] as Element[]).slice.call(figure.querySelectorAll(".ci-unit, .tag")).forEach(function(n){ n.remove(); });
  return { name:item.getAttribute("data-title"), figure:figure ? figure.textContent!.trim() : "",
           unit:unit ? unit.textContent!.trim() : "", word:word ? word.textContent!.trim() : "" };
}
export function rosterRows(){ return readingRoster().byId; }
export function kT(k: string | number){
  var s = String(k), m = /-(\d\d)/.exec(s), q = /Q([1-4])/.exec(s);
  return +s.slice(0, 4) + (m ? (+m[1] - 1) / 12 : q ? (+q[1] - 1) / 4 : 0);
}
export function upTo<T extends Keyed>(list: T[], k: string): (T & { v: number })[] { var t = kT(k) + 1e-6; return list.filter(function(d): d is T & { v: number } { return d.v != null && kT(d.k) <= t; }); }
export function pairAt(r: { pair?: Keyed[] }, k: string): number | null { var p = r.pair ? upTo(r.pair, k).pop() : null; return p ? p.v : null; }
export function eraFig(today: string){
  var tok = /[+\-\u2212]?\d[\d,]*(?:\.(\d+))?/.exec(today) || ["", ""];
  var dp = tok[1] ? tok[1].length : 0, pre = today.slice(0, today.indexOf(tok[0])).replace("\u2248", "");
  var suf = (/[^\d]*$/.exec(today) || [""])[0], signed = /^[+\-\u2212]/.test(tok[0]);
  function one(x: number){ var a = Math.abs(x).toFixed(dp); return (+a === 0 ? "" : x < 0 ? "\u2212" : signed ? "+" : "") + a; }
  return function(x: number, y?: number | null){ return pre + one(x) + (y != null ? "/" + one(y) : suf); };
}
function rosterRow(R: RosterRow): EraRow {
  var r: EraRow = Object.create(R), seen = keyed(R.hist).filter(function(d): d is EraPoint { return d.v != null; });
  var sorted = seen.map(function(d){ return d.v; }).sort(function(a, b){ return a - b; });
  r.place = function(v){
    var lo = 0, hi = sorted.length;
    while (lo < hi){ var mid = (lo + hi) >> 1; if (sorted[mid] < v) lo = mid + 1; else hi = mid; }
    return sorted.length > 1 ? 100 * lo / (sorted.length - 1) : 50;
  };
  r.first = seen[0]; r.now = seen[seen.length - 1]; r.seen = seen;
  if (R.pair) r.pair = keyed(R.pair);
  if (R.peek) r.peek = r.pair;
  return r;
}
var __roster: EraRoster | null = null;
export function readingRoster(): EraRoster {
  if (__roster) return __roster;
  var all = ROSTER.filter(function(R){ return R.hist; }).map(rosterRow) as EraRoster;
  all.byId = {};
  all.forEach(function(r){ all.byId[r.id] = r; });
  return (__roster = all);
}
export function pastFigure(r: EraRow, v: number, second?: number | null){
  var card = readDoor(r.id); if (!card) throw new Error("the reading " + r.id + " has no card"); var fig = eraFig(card.figure)(r.flip ? Math.abs(v) : v, second);
  return r.flip ? fig + (v > 0 ? " surplus" : " deficit") : withUnit(fig, card.unit);
}
export function prettyK(r: { pre?: string }, k: string){ return r.pre ? r.pre + k : prettyKey(k); }
