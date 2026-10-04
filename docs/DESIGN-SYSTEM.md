# Design system

Generated from `src/styles.css` and `src/page-head.html` by `npm run map`; `npm run check` fails when it is stale.
Never edit it by hand: change the tokens, then run `npm run map`. Why each rule holds is in `docs/DECISIONS.md`.

- **Living reference:** the design-system artifact, https://claude.ai/artifact/SJtyaefrGJLftH7j45P9aX (tokens, components, previews).
- **The app itself:** https://claude.ai/artifact/2xTPnvFGpfjNxPnjqHVEZF.
- **Where it came from (0.6.2–0.6.3):** Keren's plum health-app reference (dark plum, light pink, apricot to marigold) and the Clair hormone app (Cormorant titles, grey-and-white segmented bar). White containers on an apricot-and-blush splash; plum for brand and ink.

## Type

Fonts: **Cormorant Garamond**, **Public Sans**, **IBM Plex Mono**. Cormorant Garamond 500 upright sets titles and page names; Public Sans sets everything else; IBM Plex Mono sets figures in charts.

| Token | Size |
|---|---|
| `--type-label` | `11px` |
| `--type-meta` | `12.5px` |
| `--type-interface` | `14px` |
| `--type-reading` | `15px` |
| `--type-row` | `17px` |
| `--type-section` | `20px` |
| `--type-reading-head` | `26px` |
| `--type-page-title` | `30px` |
| `--type-display` | `40px` |

## Spacing and shape

`--pad` is the space inside a container and `--gap` the space between containers; a new container takes `margin-top:var(--gap)`.

| Token | Value |
|---|---|
| `--mini-w` | `80px` |
| `--mini-h` | `42px` |
| `--pad` | `10px` |
| `--gap` | `10px` |
| `--gap-top` | `20px` |
| `--topbar-gap` | `calc(var(--gap-top) - 2px)` |
| `--radius` | `16px` |
| `--radius-inner` | `13px` |

## Colour

Light and dark values of every colour token. Dark applies under `prefers-color-scheme: dark` and under `data-theme="dark"`.

| Token | Light | Dark |
|---|---|---|
| `--page` | `#ffffff` | `#170d13` |
| `--surface` | `#ffffff` | `#22141c` |
| `--surface-2` | `#fdf3ed` | `#2b1a24` |
| `--border` | `rgba(92,21,48,0.10)` | `rgba(255,230,240,0.09)` |
| `--border-strong` | `rgba(92,21,48,0.18)` | `rgba(255,230,240,0.17)` |
| `--grid` | `rgba(92,21,48,0.11)` | `rgba(255,230,240,0.13)` |
| `--text-primary` | `#2b1520` | `#f8eef1` |
| `--text-secondary` | `#5e4450` | `#d4c2c9` |
| `--text-muted` | `#7a6370` | `#a48e98` |
| `--placeholder` | `#b4aeb1` | `#6e6469` |
| `--accent` | `#7c2844` | `#eba3b9` |
| `--accent-ink` | `#5c1530` | `#f5c6d3` |
| `--blush` | `#f6c4be` | — |
| `--accent-wash` | `color-mix(in srgb, var(--blush) 40%, var(--surface))` | `color-mix(in srgb, var(--accent) 14%, var(--surface))` |
| `--on-accent` | `#ffffff` | `#170d13` |
| `--overlay` | `rgba(43,21,32,0.38)` | — |
| `--track` | `#f3e3dd` | `#3a2530` |
| `--mark-wash` | `#ead2ca` | `#4a3040` |
| `--good` | `#2a9488` | `#4cc2b4` |
| `--good-ink` | `#16675f` | `#6fd6ca` |
| `--good-wash` | `color-mix(in srgb, var(--good) 14%, var(--surface))` | `color-mix(in srgb, var(--good) 16%, var(--surface))` |
| `--warning` | `color-mix(in srgb, var(--critical) 55%, var(--surface))` | `#eda100` |
| `--warning-ink` | `var(--critical-ink)` | `#f2c24d` |
| `--warning-wash` | `color-mix(in srgb, var(--critical) 8%, var(--surface))` | `rgba(237,161,0,0.16)` |
| `--cold` | `var(--season-winter)` | `var(--season-winter)` |
| `--cold-ink` | `#4a54a6` | `#b4bdeb` |
| `--phase-up-ink` | `#7a5709` | `#f2c24d` |
| `--phase-up-wash` | `color-mix(in srgb, var(--season-autumn) 16%, var(--surface))` | `color-mix(in srgb, var(--season-autumn) 20%, var(--surface))` |
| `--phase-down-ink` | `var(--cold-ink)` | `var(--cold-ink)` |
| `--phase-down-wash` | `color-mix(in srgb, var(--season-winter) 16%, var(--surface))` | `color-mix(in srgb, var(--season-winter) 20%, var(--surface))` |
| `--serious` | `color-mix(in srgb, var(--critical) 78%, var(--surface))` | `#ec835a` |
| `--serious-ink` | `var(--critical-ink)` | `#f5a385` |
| `--serious-wash` | `var(--critical-wash)` | `rgba(236,131,90,0.16)` |
| `--critical` | `#d0383b` | `#f05a55` |
| `--m2-deep` | `#4a0f0a` | `#ffd2c8` |
| `--ff-blue` | `#4f6fb0` | `#86a3e0` |
| `--ff-deep` | `#0b2340` | — |
| `--critical-ink` | `#a8292f` | `#f6897f` |
| `--critical-wash` | `color-mix(in srgb, var(--critical) 12%, var(--surface))` | `color-mix(in srgb, var(--critical) 18%, var(--surface))` |
| `--bleed-mid` | `#d0383b` | `#f05a55` |
| `--ovulate` | `#2a9488` | `#4cc2b4` |
| `--bull-ink` | `#16675f` | `#4cc2b4` |
| `--bull-wash` | `color-mix(in srgb, var(--ovulate) 18%, var(--surface))` | `color-mix(in srgb, var(--ovulate) 22%, var(--surface))` |
| `--bear-ink` | `#a8292f` | `#f6897f` |
| `--bear-wash` | `color-mix(in srgb, var(--bleed-mid) 18%, var(--surface))` | `color-mix(in srgb, var(--bleed-mid) 22%, var(--surface))` |
| `--shadow` | `none` | `none` |
| `--ylm-3m` | `#baa8e8` | `#e0d8f7` |
| `--ylm-2y` | `#9683d5` | `#c8b8f0` |
| `--ylm-5y` | `#7258ba` | `#ab90e8` |
| `--ylm-30y` | `#3a2a7a` | `#7458c8` |
| `--tm-lead-wash` | `color-mix(in srgb, var(--ylm-3m) 20%, var(--surface))` | `color-mix(in srgb, var(--ylm-3m) 16%, var(--surface))` |
| `--tm-coin-wash` | `color-mix(in srgb, var(--ylm-5y) 34%, var(--surface))` | `color-mix(in srgb, var(--ylm-2y) 34%, var(--surface))` |
| `--tm-lag-wash` | `color-mix(in srgb, var(--ylm-30y) 50%, var(--surface))` | `color-mix(in srgb, var(--ylm-5y) 56%, var(--surface))` |
| `--normal` | `#f8b379` | `#fbc195` |
| `--seg-track` | `#efecec` | `#2b1d25` |
| `--seg-on` | `#ffffff` | `#4a3540` |

## Seasons

| Token | Light | Dark |
|---|---|---|
| `--season-winter` | `#6a74c2` | `#8f9be6` |
| `--season-spring` | `#aab0d8` | `#b4bdeb` |
| `--season-summer` | `#d96d3e` | `#f29a6e` |
| `--season-autumn` | `#f0b04a` | `#fcc94d` |

## Splash

Two fixed layers behind every page (`body::before` apricot `--splash-a`, `body::after` blush `--splash-b`), three soft blobs each. They breathe slowly and, where scroll-driven animation exists, flow apart as the page scrolls; with reduced motion they hold still.

## Components

The shared components and the classes they own are listed in `docs/COMPONENTS.md`; the source map is `docs/MAP.md`.
