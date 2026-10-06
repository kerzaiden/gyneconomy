import { metered } from "./format.ts";
import { byId } from "./dom.ts";
import { gdpQuarterlyYoY } from "./refresh-season.ts";
import { fileRow, syncCapeHistory } from "./data.ts";
import { nowModel } from "./model.ts";
import { ROSTER } from "./roster.ts";
import { needInd } from "./render-core.ts";
import { mountSplits } from "./indicators.ts";
// ---- THE CYCLE TAB: the readings' pages ----
function wearCategories(){
  ROSTER.forEach(function(R){ var page = byId(R.id); if (page) page.classList.add("cat-" + R.cat); });
}
export function renderReadingPages(){
  var tempInd = needInd("sheet-metric-temp");
  var r = nowModel.reading, era = nowModel.era;
  var gq = gdpQuarterlyYoY.filter(function(d){ return parseInt(d.q.slice(0, 4), 10) >= era.from; });
  var capeNow = metered(fileRow("cape").meter), buffNow = fileRow("buffett").meter.value;
  syncCapeHistory();
  mountSplits();
  wearCategories();
  return { tempInd:tempInd, r:r, gq:gq, capeNow:capeNow, buffNow:buffNow };
}
