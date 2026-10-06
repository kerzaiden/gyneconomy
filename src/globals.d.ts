interface Window {
  claude?: { use(name: string): Promise<any> };
  __GYN: unknown;
  __actMiss: string[];
  __elMiss: Record<string, number>;
  __geomMiss: string[];
}
interface Element {
  __geom?: ChartGeom | null;
  __readEl?: HTMLElement;
  __placed?: boolean;
  __hovWired?: boolean;
  __onCol?: Element | null;
  __keyI?: number | null;
  __cancelOut?: (() => void) | null;
}
