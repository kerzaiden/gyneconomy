import { fmtSigned, monthLabel, popHead, qLabel } from "./format.ts";
import { elFrom, moreRow } from "./dom.ts";
import { asOfLabel, gdpQuarterlyYoY, wheelMeta } from "./refresh-season.ts";
import { seasonReading } from "./data.ts";
import { QUARTER_END_MONTH } from "./model.ts";
import { catCard, catList, gdpPeek, marketPeek, tempPeek } from "./render-core.ts";
import type { CycleModel, TrackSeg } from "./model.ts";
import type { SeasonReading } from "./data.ts";

type QuarterSeg = Pick<TrackSeg, "q" | "from" | "season" | "reading">;

// ---- A quarter's sheet: its Temperature, Growth and S&P 500 at the quarter, then the season's prose ----
function quarterCards(m: CycleModel, seg: QuarterSeg){
  var r = seg.reading, y = parseInt(seg.q, 10), qEnd = y + "-" + (r.annual ? "12" : QUARTER_END_MONTH[String(seg.q).slice(5)]);
  var gq = gdpQuarterlyYoY.filter(function(d){ return parseInt(d.q, 10) >= m.era.from && d.q <= seg.q; });
  var cards: [string | null, string][] = [
    [tempPeek(r, fmtSigned(r.cpiNow, 1).replace("+", "") + "%", m.cpi.filter(function(c){ return c.m <= qEnd; })), monthLabel(qEnd)],
    [gdpPeek(r, gq), r.annual ? String(r.gdpLatest.q) : qLabel(r.gdpLatest.q)],
    [marketPeek(y, m.era.from), String(y)]
  ];
  return '<div class="cat-sheet cat-weather">' +
    catList(cards.map(function(c){ return c[0] ? catCard(peekEl(c[0]), c[1]).outerHTML : ""; }).join("")) + '</div>';
}
export function quarterSheet(m: CycleModel, seg: QuarterSeg, isPresent: boolean){
  var meta = wheelMeta[seg.season], about = meta.name + (meta.theme ? ", " + meta.theme : "");
  return popHead(meta.name + (meta.theme ? ' \u00b7 ' + meta.theme : ''), qLabel(seg.q) + ' \u00b7 year ' + (Math.floor(seg.from) + 1) + ' of the ' + m.era.name) +
    quarterCards(m, seg) + moreRow(quarterPopup(m, seg, isPresent), "About " + about);
}
function quarterPopup(m: CycleModel, seg: QuarterSeg, isPresent: boolean){
  var meta = wheelMeta[seg.season], era = m.era;
  var yearN = Math.floor(seg.from) + 1;
  var when = isPresent ? (m.ongoing ? asOfLabel() : "The cycle's close, " + monthLabel(m.endMonth)) : qLabel(seg.q);
  var head = popHead(when + ' · ' + (meta.theme || meta.name), meta.name + (meta.altName ? ' · ' + meta.altName : '') +
    ' · year ' + yearN + ' of the ' + era.name + (m.ongoing ? ", since " + era.from : ", " + era.from + "–" + era.to));
  var reading: Partial<SeasonReading> = seasonReading[seg.season] || {};
  return head +
    (isPresent ? '<p class="caption era-blurb">' + era.blurb + '</p>' : '') +
    (reading.economy ? '<div class="reading-block"><h5>In the economy</h5><p>' + reading.economy + '</p></div>' : '') +
    (reading.body ? '<div class="reading-block"><h5>In the body</h5><p>' + reading.body + '</p></div>' : '') +
    (reading.next ? '<div class="reading-block"><h5>What usually comes next</h5><p>' + reading.next + '</p></div>' : '') +
    (reading.watch && reading.watch.length
      ? '<div class="reading-block"><h5>What to watch for the turn</h5><ul class="reading-watch">' +
          reading.watch.map(function(w){ return '<li>' + w + '</li>'; }).join("") + '</ul></div>' : '') +
    (reading.fromTheBook && reading.fromTheBook.length
      ? '<div class="reading-book"><h5>From the book</h5>' +
          reading.fromTheBook.map(function(x){
            return '<blockquote>' + x.text +
              (x.title ? '<br><span class="marker-sub">\u2014 ' + x.title + '</span>' : '') + '</blockquote>';
          }).join("") + '</div>' : '');
}
function peekEl(html: string): Element { var n = elFrom(html); if (!n) throw new Error("a peek drew nothing"); return n; }
