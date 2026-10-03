import { bootDom } from "./dom.js";
import { bootLive, forgetLive } from "./live.js";
import { bootRefreshSeason } from "./refresh-season.js";
import { bootData } from "./data.js";
import { bootModel } from "./model.js";
import { bootHistory } from "./history.js";
import { bootReadingRegistry, bootReadings } from "./readings.js";
import { bootRoster } from "./roster.js";
import { bootRenderCore } from "./render-core.js";
import { bootRenderPages } from "./render-pages.js";
import { bootDiagnosis } from "./diagnosis.js";
import { bootDialCycle } from "./dial-cycle.js";
import { bootAnalysis } from "./analysis.js";
import { bootPagesNav } from "./pages-nav.js";
import { bootTabsMenu } from "./tabs-menu.js";
import { bootRepaint } from "./repaint.js";

try {
  bootDom();
  bootRefreshSeason();
  bootLive();
  bootReadingRegistry();
  bootData();
  bootReadings();
  bootHistory();
  bootRoster();
  bootModel();
  bootRenderCore();
  bootRenderPages();
  bootDialCycle();
  bootPagesNav();
  bootDiagnosis();
  bootAnalysis();
  bootTabsMenu();
  bootRepaint();
} catch (e) {
  forgetLive(e);
}
