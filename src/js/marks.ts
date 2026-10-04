export function debtSvg(){ return markSvg('<path d="M4 20h16M6.5 16h11M9 12h6M11 8h2" stroke-width="1.9"/>'); }
export function interestSvg(){ return markSvg('<path d="M18.5 5.5 5.5 18.5" stroke-width="1.9"/>' +
  '<circle cx="7.2" cy="7.2" r="2.3" stroke-width="1.7"/><circle cx="16.8" cy="16.8" r="2.3" stroke-width="1.7"/>'); }
export function budgetSvg(){ return markSvg('<path d="M12 4v16M8 20h8M4.5 8h15" stroke-width="1.8"/>' +
  '<path d="M4.5 8 2.5 13.5h4zM19.5 8l-2 5.5h4z" stroke-width="1.6"/>'); }
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
export function sproutSvg(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M4.6 19.7 C7.6 18.8 16.4 18.8 19.4 19.7"/>' +
    '<path d="M12 19 V12.3"/>' +
    '<path d="M12 12.3 C12.1 8 15 5 19.6 4.9 C19.7 9.3 16.7 12.2 12 12.3"/>' +
    '<path d="M12 14.3 C11.9 11.4 9.9 9.5 6.3 9.4 C6.2 12.9 8.7 14.3 12 14.3"/>' +
  '</svg>';
}
function markSvg(body: string, extra?: string){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>';
}
export function heartSvg(){ return markSvg(
  '<path d="M12 20.3 4.6 13.1C2.4 10.9 2.5 7.4 4.8 5.6c2.1-1.6 5-1.2 6.6.8l.6.8.6-.8c1.6-2 4.5-2.4 6.6-.8 2.3 1.8 2.4 5.3.2 7.5Z" stroke-width="1.8"/>'); }
export function flameSvg(){ return markSvg(
  '<path d="M12 21.6c3.5 0 6.1-2.4 6.1-5.7 0-4.2-3.3-6.6-5.2-11.1-.4 3.1-2.2 4.7-3.6 6.2-1.8 2-3.4 3.3-3.4 4.9 0 3.3 2.6 5.7 6.1 5.7Z" stroke-width="1.7"/>' +
  '<path d="M12 21.6c1.7 0 2.9-1.2 2.9-2.8 0-1.6-1.2-2.6-2.9-4.9-1.1 1.6-2.9 3-2.9 4.9 0 1.6 1.2 2.8 2.9 2.8Z" fill="currentColor" stroke="none"/>'); }
export function clockSvg(){ return markSvg('<circle cx="12" cy="12" r="8.4" stroke-width="1.8"/><path d="M12 7.4V12l3.1 2.1" stroke-width="1.8"/>'); }
export function thermoSvg(){ return markSvg(
  '<path d="M9.9 15.5V5.9a2.1 2.1 0 0 1 4.2 0v9.6" stroke-width="1.7"/><circle cx="12" cy="17.9" r="3.5" stroke-width="1.7"/>' +
  '<path d="M12 8.6v6.6" stroke-width="2.1"/><circle cx="12" cy="17.9" r="1.7" fill="currentColor" stroke="none"/>'); }
export function personSvg(){ return markSvg(
  '<circle cx="12" cy="8" r="3.9" stroke-width="1.8"/><path d="M4.4 20.4c.6-4 3.7-6.5 7.6-6.5s7 2.5 7.6 6.5" stroke-width="1.8"/>'); }
export function calendarSvg(){ return markSvg('<rect x="4" y="5.5" width="16" height="14.5" rx="2" stroke-width="1.8"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" stroke-width="1.8"/>'); }
export function bookSvg(){ return markSvg(
  '<path d="M12 6.6C10.2 5.2 7.6 4.6 3.6 4.8v13.6c4-.2 6.6.4 8.4 1.8 1.8-1.4 4.4-2 8.4-1.8V4.8c-4-.2-6.6.4-8.4 1.8Z" stroke-width="1.7"/>' +
  '<path d="M12 6.6v13.6" stroke-width="1.7"/>'); }
export function chartSvg(){ return markSvg('<rect x="5" y="4.5" width="14" height="16.5" rx="2" stroke-width="1.8"/>' +
  '<path d="M9 3.5h6v3H9zM8.5 11h7M8.5 14.5h7M8.5 18h4" stroke-width="1.8"/>'); }
export function ecgSvg(){ return markSvg(
  '<path d="M1.8 12H5.4L8.0 6.9L10.5 17.9L12.6 3.8L14.7 18.2L17.2 6.9L19.0 12H22.2" stroke-width="1.9"/>'); }
export function circulationSvg(){ return dropSvg(1.9); }
export function boltSvg(){ return markSvg('<path d="M14.2 2.4 5.2 13.6h5.9l-1.3 8 9-11.2h-5.9z" stroke-width="1.8"/>'); }
export function houseSvg(){ return markSvg(
  '<path d="M3.4 10.9 12 4.1l8.6 6.8" stroke-width="1.9"/>' +
  '<path d="M5.7 9.6v9.7h12.6V9.6" stroke-width="1.9"/>'); }
export function marketSvg(){ return markSvg(
  '<path d="M3.5 17.5 9 12l3.5 3.5L20 8" stroke-width="1.9"/>' +
  '<path d="M15 8h5v5" stroke-width="1.8"/>'); }
export function bagSvg(){ return markSvg(
  '<path d="M5.6 8.4h12.8l-1 11.2H6.6z" stroke-width="1.9"/>' +
  '<path d="M9.2 8.4V7a2.8 2.8 0 0 1 5.6 0v1.4" stroke-width="1.8"/>'); }
export function volatilitySvg(){ return markSvg(
  '<path d="M5.5 7.5v2.5M5.5 15.5v2.5M12 2.5v3M12 18.5v3M18.5 5.5v3.5M18.5 14.5v2" stroke-width="1.8"/>' +
  '<rect x="3.9" y="10" width="3.2" height="5.5" rx="0.6" stroke-width="1.8"/>' +
  '<rect x="10.4" y="5.5" width="3.2" height="13" rx="0.6" stroke-width="1.8"/>' +
  '<rect x="16.9" y="9" width="3.2" height="5.5" rx="0.6" stroke-width="1.8"/>'); }
