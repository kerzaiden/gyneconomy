interface Window {
  claude: any;
  __GYN: any;
  __sources: any;
  __CAT_SNAP: any;
  __histRead: any;
  __paintMiss: string[];
  __actMiss: string[];
  __elMiss: Record<string, number>;
  __geomMiss: any[];
}
interface EventTarget {
  closest(selectors: string): Element | null;
  getAttribute(name: string): string | null;
  readonly classList: DOMTokenList;
}
interface Element {
  hidden: boolean;
  click(): void;
  focus(options?: FocusOptions): void;
  __mark?: any;
}
interface HTMLElement {
  value: string;
  disabled: boolean;
  __geom?: any;
}
interface Event {
  readonly key: string;
}
