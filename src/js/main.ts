import { bootDom } from "./dom.ts";
import { bootLive, forgetLive } from "./live.ts";
import { bootRefreshSeason } from "./refresh-season.ts";
import { bootData } from "./data.ts";
import { bootModel } from "./model.ts";
import { bootHistory } from "./history.ts";
import { bootReadingRegistry, bootReadings } from "./readings.ts";
import { bootRoster } from "./roster.ts";
import { bootRenderCore } from "./render-core.ts";
import { bootRenderPages } from "./render-pages.ts";
import { bootDiagnosis } from "./diagnosis.ts";
import { bootDialCycle } from "./dial-cycle.ts";
import { bootAnalysis } from "./analysis.ts";
import { bootPagesNav } from "./pages-nav.ts";
import { bootTabsMenu } from "./tabs-menu.ts";
import { bootRepaint } from "./repaint.ts";

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
