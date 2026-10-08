type Src = { t: string; u: string };
type State = "good" | "warning" | "serious" | "critical" | "norm" | "na";
type Tone = State | "" | "tight" | "phase-up" | "phase-down" | `s${0 | 1 | 2 | 3 | 4 | 5}`;
type Tag = { text: string; state?: Tone };
type Band = ({ lte: number } | { gte: number } | { from: number; to: number }) & { label: string };
type Meter = {
  min: number;
  max: number;
  value: number | null;
  optimal?: Band;
  ends?: { zone?: string; high?: string; low?: string; negative?: string };
};
type Row = {
  key?: string;
  marker?: string;
  sub: string;
  meter: Meter;
  shortNote: string;
  note: string;
  noteTpl?: string;
  direction?: string;
  flagValue: string;
  flagState: State;
  id?: string;
};
type Panel = {
  kicker: string;
  hint: string;
  tag: Tag | null;
  rows: Row[];
  shortImpression: string;
  impression: string;
  src: Src[];
};
type FedFunds = {
  lo: number;
  hi: number;
  lastMove: string;
  lastMoveLabel?: string;
  asOf: string;
  vote?: string;
  next?: string;
  turnLabel?: string;
  turnValue?: string;
};
type CurvePoint = { m: string; y: number | null };
type MonthPoint = { m: string; v: number };
type QuarterPoint = { q: string; v: number };
type YearPoint = { y: number; v: number };
type Point = { y?: number; m?: string; q?: string; v: number | null };
type Cycle = { from: number; name: string; story: string; blurb: string } & ({ ongoing: true; to: null } | { ongoing?: false; to: number });
type Season = "summer" | "autumn" | "lateautumn" | "winter" | "springdeflation" | "spring";
type ChartRef = { label: string; v?: number | null; dash?: boolean; cls?: string; swatch?: string };
type ChartGeom = {
  src?: string;
  L: number;
  R: number;
  T: number;
  B: number;
  W: number;
  n: number;
  vals: ({ v: number | null; [k: string]: unknown } | null)[];
  at: (d: any, i: number) => string;
  fmt?: (v: number) => string;
  refs?: ChartRef[];
  [k: string]: unknown;
};
type AuxFact = { label: string; value: string; wordy?: boolean };
type IndicatorPage = {
  deferHighlights?: boolean;
  after?: (ind: Indicator) => string;
  chart?: (ind: Indicator) => string;
  seat?: (ind: Indicator, d: HTMLElement) => void;
};
type Indicator = {
  bodyTerm: string;
  econTerm: string;
  page?: IndicatorPage;
  tag: Tag | null;
  metric: string;
  metricSub: string;
  meter: Meter;
  shortCaption?: string;
  caption?: string;
  lead?: string;
  facts?: AuxFact[];
  aux?: AuxFact | AuxFact[];
  peek?: string;
  info?: () => string;
  src?: Src[];
  key?: string;
};
type LiveDoc = { kind?: unknown; asOf?: string; value?: unknown; rows?: unknown; [k: string]: unknown };
type LiveReadingCommon = { onOpen?: boolean; fileAsOf?: () => string };
type LiveReading =
  | (LiveReadingCommon & { kind: "scalar"; band: [number, number]; set(v: number): void; ok?: undefined })
  | (LiveReadingCommon & { kind: "series"; band?: undefined; set(v: unknown[]): void; ok?(v: unknown[]): boolean })
  | (LiveReadingCommon & { kind: "object"; band?: undefined; set(v: Record<string, unknown>): void; ok?(v: Record<string, unknown>): boolean });
type Keyed = { k: string; v: number | null };
type HistSpec =
  | { s: readonly (number | null)[]; k: "qi" | "yi"; y0: number }
  | { s: readonly Point[]; k: "y" | "m" | "q"; y0?: undefined };
type RosterTiming = "structural" | "leading" | "coincident" | "lagging";
type RosterRow = {
  id: string;
  name: string;
  cat: string;
  good?: "up" | "down";
  timing: RosterTiming;
  door: "peek" | "row" | "subject" | "pair" | "split";
  head: string;
  hist: HistSpec;
  slot?: string;
  term?: string;
  hk?: string;
  group?: string;
  sub: string;
  cardUnit?: string;
  normal?: { lo: number; hi: number; why: string };
  live?: string[];
  stops?: string[];
  mid?: number;
  flip?: boolean;
  pair?: HistSpec;
};
type PeekCardOpts = { value?: string; word?: string; state?: Tone; cols?: (number | null)[]; colClass?: (v: number, i: number) => string; colBase?: number; colRule?: boolean; target?: string; title?: string; kicker?: string; mark?: string; unit?: string };
type CreditPoint = { m?: string; q?: string; d?: string; v: number };
type CreditWord = { state: State; text: string; says: string };
type CreditSpec = {
  id: string; goodAbove?: boolean; term: string; econ: string; unit: string; series: CreditPoint[]; mid: number; line: string; optimal?: Band; ends?: Meter["ends"];
  fmt: (v: number) => string; word: (v: number) => CreditWord; about: string; band: string; lede: string; src: Src[];
};
