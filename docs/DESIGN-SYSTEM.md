# Design system

The design system lives in one place, the design-system artifact:
https://claude.ai/artifact/SJtyaefrGJLftH7j45P9aX. It holds the tokens, type, colour, icons and components, with previews.

In the code, every token is a custom property in `src/styles.css` (light `:root`, then dark), and the shared
components are listed in `docs/COMPONENTS.md`. A change to a token or a component updates the artifact in the same
release. Why each rule holds is in `docs/DECISIONS.md`.
