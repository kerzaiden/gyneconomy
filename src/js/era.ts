import { todayFace } from "./reading.ts";

export function eraFig(today: string){
  var tok = /[+\-\u2212]?\d[\d,]*(?:\.(\d+))?/.exec(today) || ["", ""];
  var dp = tok[1] ? tok[1].length : 0, pre = today.slice(0, today.indexOf(tok[0])).replace("\u2248", "");
  var suf = (/[^\d]*$/.exec(today) || [""])[0], signed = /^[+\-\u2212]/.test(tok[0]);
  function one(x: number){ var a = Math.abs(x).toFixed(dp); return (+a === 0 ? "" : x < 0 ? "\u2212" : signed ? "+" : "") + a; }
  return function(x: number, y?: number | null){ return pre + one(x) + (y != null ? "/" + one(y) : suf); };
}
export function todayValue(R: RosterRow){
  var face = todayFace(R), m = /[+\-\u2212]?\d[\d,]*(?:\.\d+)?/.exec(face.text);
  if (!m) throw new Error("the reading " + R.id + " shows no figure");
  var v = +m[0].replace("\u2212", "-").replace(/,/g, "");
  return R.flip ? (/surplus/.test(R.cardUnit || "") ? Math.abs(v) : -Math.abs(v)) : v;
}
