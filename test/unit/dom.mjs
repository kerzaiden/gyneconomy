import fs from 'fs';
import { JSDOM } from 'jsdom';

const ROOT = new URL('../../', import.meta.url);
const body = fs.readFileSync(new URL('src/page-body.html', ROOT), 'utf8').replace(/^<\/style>/, '');
const dom = new JSDOM('<!doctype html><html lang="en"><head></head><body>' + body + '</body></html>',
  { url: 'https://gyneconomy.test/', pretendToBeVisual: true });
const w = dom.window;
w.matchMedia = q => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} });
w.fetch = () => Promise.reject(new Error('offline'));
w.scrollTo = () => {};
export const errors = [];
w.addEventListener('error', e => errors.push(e.message));
export const warnings = [];
console.warn = (...a) => { warnings.push(a.map(String).join(' ')); };
for (const k of ['window', 'document', 'navigator', 'localStorage', 'sessionStorage', 'location', 'history', 'getComputedStyle',
  'requestAnimationFrame', 'cancelAnimationFrame', 'matchMedia', 'fetch', 'Node', 'Element', 'HTMLElement', 'SVGElement',
  'Event', 'KeyboardEvent', 'CustomEvent', 'MutationObserver', 'DOMParser'])
  Object.defineProperty(globalThis, k, { value: w[k], configurable: true, writable: true });

w.sessionStorage.setItem('gyn.forgot', '1');
await import('../../src/js/main.ts');
export const bootWarnings = warnings.slice();
export { w as window };
