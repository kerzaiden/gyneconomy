import { prettyKey, withUnit } from "./format.js";
import { keyed, ROSTER } from "./roster.js";

function todayFace(item){
  var t = item.__today, box = document.createElement("div");
  if (!t) return { val:item.querySelector(".ci-value"), word:item.querySelector(".ci-word") };
  box.innerHTML = '<span>' + t.value + '</span><span>' + (t.word || "") + '</span>';
  return { val:box.firstChild, word:t.word == null ? null : box.lastChild };
}
export function readDoor(open){
  var item = document.querySelector('.cat-item[data-open="' + open + '"]'); if (!item) return null;
  var face = todayFace(item), val = face.val, unit = val && val.querySelector(".ci-unit"), word = face.word;
  var figure = val ? val.cloneNode(true) : null;
  if (figure) [].slice.call(figure.querySelectorAll(".ci-unit, .tag")).forEach(function(n){ n.parentNode.removeChild(n); });
  return { name:item.getAttribute("data-title"), figure:figure ? figure.textContent.trim() : "",
           unit:unit ? unit.textContent.trim() : "", word:word ? word.textContent.trim() : "" };
}
export function rosterRows(){ return readingRoster().byId; }
export function kT(k){
  var s = String(k), m = /-(\d\d)/.exec(s), q = /Q([1-4])/.exec(s);
  return +s.slice(0, 4) + (m ? (m[1] - 1) / 12 : q ? (q[1] - 1) / 4 : 0);
}
export function upTo(list, k){ var t = kT(k) + 1e-6; return list.filter(function(d){ return d.v != null && kT(d.k) <= t; }); }
export function pairAt(r, k){ var p = r.pair ? upTo(r.pair, k).pop() : null; return p ? p.v : null; }
export function eraFig(today){
  var tok = /[+\-\u2212]?\d[\d,]*(?:\.(\d+))?/.exec(today) || ["", ""];
  var dp = tok[1] ? tok[1].length : 0, pre = today.slice(0, today.indexOf(tok[0])).replace("\u2248", "");
  var suf = (/[^\d]*$/.exec(today) || [""])[0], signed = /^[+\-\u2212]/.test(tok[0]);
  function one(x){ var a = Math.abs(x).toFixed(dp); return (+a === 0 ? "" : x < 0 ? "\u2212" : signed ? "+" : "") + a; }
  return function(x, y){ return pre + one(x) + (y != null ? "/" + one(y) : suf); };
}
function rosterRow(R){
  var r = Object.create(R), seen = keyed(R.hist).filter(function(d){ return d.v != null; });
  var sorted = seen.map(function(d){ return d.v; }).sort(function(a, b){ return a - b; });
  r.place = function(v){
    var lo = 0, hi = sorted.length;
    while (lo < hi){ var mid = (lo + hi) >> 1; if (sorted[mid] < v) lo = mid + 1; else hi = mid; }
    return sorted.length > 1 ? 100 * lo / (sorted.length - 1) : 50;
  };
  r.first = seen[0]; r.now = seen[seen.length - 1]; r.seen = seen;
  if (R.pair) r.pair = keyed(R.pair);
  if (R.peek) r.peek = R.peek === "pair" ? r.pair : keyed(R.peek);
  return r;
}
var __roster = null;
export function readingRoster(){
  if (__roster) return __roster;
  __roster = ROSTER.filter(function(R){ return R.hist; }).map(rosterRow);
  __roster.byId = {};
  __roster.forEach(function(r){ __roster.byId[r.id] = r; });
  return __roster;
}
export function pastFigure(r, v, second){
  var card = readDoor(r.id), fig = eraFig(card.figure)(r.flip ? Math.abs(v) : v, second);
  return r.flip ? fig + (v > 0 ? " surplus" : " deficit") : withUnit(fig, card.unit);
}
export function prettyK(r, k){ return r.pre ? r.pre + k : prettyKey(k); }
