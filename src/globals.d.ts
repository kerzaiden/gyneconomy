interface Window {
  claude?: { use(name: string): Promise<any> };
  __GYN: unknown;
  __paintMiss: string[];
  __actMiss: string[];
  __elMiss: Record<string, number>;
  __geomMiss: string[];
}
type TodaySnapshot = { value: string; text: string | null; word: string | null; when: string; mini: string };
interface Element {
  __today?: TodaySnapshot | null;
  __mark?: () => string;
  __geom?: ChartGeom | null;
  __readEl?: HTMLElement;
  __placed?: boolean;
  __hovWired?: boolean;
  __onCol?: Element | null;
  __keyI?: number | null;
  __cancelOut?: (() => void) | null;
}
