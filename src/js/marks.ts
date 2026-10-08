export function debtSvg(){ return markSvg('<path d="M4 20h16M6.5 16h11M9 12h6M11 8h2" stroke-width="1.9"/>'); }
export function creditSvg(){ return markSvg('<rect x="3.5" y="6" width="17" height="12" rx="2" stroke-width="1.8"/><path d="M3.5 10h17M7 14.5h4" stroke-width="1.7"/>'); }
function dropSvg(sw?: number){ return markSvg(
  '<path d="M12 3.2C12 3.2 6.5 10.8 6.5 14.9A5.5 5.5 0 0 0 17.5 14.9C17.5 10.8 12 3.2 12 3.2Z" stroke-width="' + (sw || 1.7) + '"/>'); }
export function gaugeSvg(){ return markSvg(
  '<circle cx="12" cy="11.2" r="7.6" stroke-width="1.7"/>' +
  '<path d="M12 11.2 7.9 7.1" stroke-width="1.9"/>' +
  '<path d="M10.3 18.6v2.2h3.4v-2.2" stroke-width="1.6"/>'); }
export function diamondSvg(){ return markSvg(
  '<path d="M6.2 3.9h11.6l3.9 5.3L12 20.4 2.3 9.2z" stroke-width="1.7"/>' +
  '<path d="M2.3 9.2h19.4" stroke-width="1.5"/>' +
  '<path d="M6.2 3.9 8.9 9.2M17.8 3.9 15.1 9.2" stroke-width="1.35" opacity="0.75"/>'); }
function markSvg(body: string, extra?: string){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>';
}
export function orbitSvg(){ return markSvg('<path d="M9.51 19.81A8.2 8.2 0 0 0 19.53 15.24M20.19 11.53A8.2 8.2 0 0 0 6.76 5.69M4.49 8.70A8.2 8.2 0 0 0 6.27 17.87" stroke-width="1.6"/><circle cx="12" cy="12" r="2.6" stroke-width="1.6"/><circle cx="5.45" cy="7.07" r="1.9" stroke-width="1.6"/><circle cx="20.08" cy="13.42" r="1.9" stroke-width="1.6"/><circle cx="7.78" cy="19.03" r="1.9" stroke-width="1.6"/>'); }
export function flameSvg(){ return markSvg(
  '<path d="M12 21.6c3.5 0 6.1-2.4 6.1-5.7 0-4.2-3.3-6.6-5.2-11.1-.4 3.1-2.2 4.7-3.6 6.2-1.8 2-3.4 3.3-3.4 4.9 0 3.3 2.6 5.7 6.1 5.7Z" stroke-width="1.7"/>' +
  '<path d="M12 21.6c1.7 0 2.9-1.2 2.9-2.8 0-1.6-1.2-2.6-2.9-4.9-1.1 1.6-2.9 3-2.9 4.9 0 1.6 1.2 2.8 2.9 2.8Z" fill="currentColor" stroke="none"/>'); }
export function bagSvg(){ return markSvg(
  '<path d="M5.6 8.4h12.8l-1 11.2H6.6z" stroke-width="1.9"/>' +
  '<path d="M9.2 8.4V7a2.8 2.8 0 0 1 5.6 0v1.4" stroke-width="1.8"/>'); }
export function diceSvg(){ return markSvg(
  '<rect x="4" y="4" width="16" height="16" rx="3.6" stroke-width="1.8"/>' +
  '<circle cx="8.6" cy="8.6" r="1.25" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none"/>' +
  '<circle cx="15.4" cy="15.4" r="1.25" fill="currentColor" stroke="none"/>'); }
export function clockSvg(){ return markSvg('<circle cx="12" cy="12" r="8.4" stroke-width="1.8"/><path d="M12 7.4V12l3.1 2.1" stroke-width="1.8"/>'); }
export function thermoSvg(){ return markSvg(
  '<path d="M9.9 15.5V5.9a2.1 2.1 0 0 1 4.2 0v9.6" stroke-width="1.7"/><circle cx="12" cy="17.9" r="3.5" stroke-width="1.7"/>' +
  '<path d="M12 8.6v6.6" stroke-width="2.1"/><circle cx="12" cy="17.9" r="1.7" fill="currentColor" stroke="none"/>'); }
export function personSvg(){ return markSvg(
  '<circle cx="12" cy="8" r="3.9" stroke-width="1.8"/><path d="M4.4 20.4c.6-4 3.7-6.5 7.6-6.5s7 2.5 7.6 6.5" stroke-width="1.8"/>'); }
export function calendarSvg(){ return markSvg('<rect x="4" y="5.5" width="16" height="14.5" rx="2" stroke-width="1.8"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" stroke-width="1.8"/>'); }
export function sparkleSvg(){ return markSvg('<path d="M10 3.5l1.6 4.9 4.9 1.6-4.9 1.6L10 16.5l-1.6-4.9L3.5 10l4.9-1.6z" stroke-width="1.8"/>' +
  '<path d="M18 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" stroke-width="1.7"/>'); }
export function umbrellaSvg(){ return markSvg('<path d="M3.5 12a8.5 8.5 0 0 1 17 0z" stroke-width="1.8"/>' +
  '<path d="M12 3.5V2.5M12 12v6.2a2.1 2.1 0 0 1-4.2 0" stroke-width="1.8"/>'); }
export function slidersSvg(){ return markSvg('<path d="M5 6h14M5 12h14M5 18h14" stroke-width="1.8"/>' +
  '<circle cx="9" cy="6" r="2" fill="var(--surface)" stroke-width="1.8"/><circle cx="15" cy="12" r="2" fill="var(--surface)" stroke-width="1.8"/><circle cx="8" cy="18" r="2" fill="var(--surface)" stroke-width="1.8"/>'); }
export function chartSvg(){ return markSvg('<rect x="3.5" y="4" width="17" height="16" rx="2.5" stroke-width="1.8"/>' +
  '<path d="M7 15.5l3-3.5 2.5 2.5 4.5-5.5M14.5 9H17v2.5" stroke-width="1.8"/>'); }
export function ecgSvg(){ return markSvg(
  '<path d="M1.8 12H5.4L8.0 6.9L10.5 17.9L12.6 3.8L14.7 18.2L17.2 6.9L19.0 12H22.2" stroke-width="1.9"/>'); }
export function weatherSvg(){ return markSvg('<path d="M15.8 3.4v1.3M19.3 5.1l-.95.95M20.9 8.6h-1.3M19.3 12.1l-.95-.95M12.3 5.1l.95.95" stroke-width="1.9"/>' +
  '<path d="M12.75 8.06A3.1 3.1 0 1 1 15.26 11.65" stroke-width="1.9"/><path d="M7.8 19.2h6.9a3.2 3.2 0 0 0 .25-6.4 4.8 4.8 0 0 0-9.05-.95 3.7 3.7 0 0 0 1.9 7.35z" stroke-width="1.9"/>'); }
export function moodSvg(){ return markSvg('<path d="M3.6 6.4q4.2-3.4 8.4 0t8.4 0" stroke-width="1.9"/><path d="M3.6 12q4.2-3.4 8.4 0t8.4 0" stroke-width="1.9"/><path d="M3.6 17.6q4.2-3.4 8.4 0t8.4 0" stroke-width="1.9"/>'); }
export function sproutSvg(){ return markSvg('<path d="M4.8 20.4c1.3-3.3 4-5 7.2-5s5.9 1.7 7.2 5z" stroke-width="1.8"/><path d="M12 15.4V10.6" stroke-width="1.8"/>' +
  '<path d="M12 11.8C11.6 8.4 9.1 6.4 4.9 6.5c.1 3.9 2.6 6 7.1 5.3zM12 10.6c.5-3.9 3.3-6.2 7.6-6.1-.1 4.2-2.9 6.6-7.6 6.1z" stroke-width="1.8"/>'); }
export function factorySvg(){ return markSvg('<path d="M3.8 20.2V8.8l5.2 3.3V8.8l5.2 3.3V8.8l6 3.8v7.6z" stroke-width="1.8"/><path d="M7.5 16.5h1.5M11.3 16.5h1.5M15.1 16.5h1.5" stroke-width="1.8"/>'); }
export function circulationSvg(){ return dropSvg(1.9); }
export function boltSvg(){ return markSvg('<path d="M14.2 2.4 5.2 13.6h5.9l-1.3 8 9-11.2h-5.9z" stroke-width="1.8"/>'); }
export function marketSvg(){ return markSvg(
  '<path d="M3.5 17.5 9 12l3.5 3.5L20 8" stroke-width="1.9"/>' +
  '<path d="M15 8h5v5" stroke-width="1.8"/>'); }
export function volatilitySvg(){ return markSvg(
  '<path d="M5.5 7.5v2.5M5.5 15.5v2.5M12 2.5v3M12 18.5v3M18.5 5.5v3.5M18.5 14.5v2" stroke-width="1.8"/>' +
  '<rect x="3.9" y="10" width="3.2" height="5.5" rx="0.6" stroke-width="1.8"/>' +
  '<rect x="10.4" y="5.5" width="3.2" height="13" rx="0.6" stroke-width="1.8"/>' +
  '<rect x="16.9" y="9" width="3.2" height="5.5" rx="0.6" stroke-width="1.8"/>'); }
