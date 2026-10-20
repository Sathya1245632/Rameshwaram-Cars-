## 2026-03-31 - Interactive Estimator & Toggle Option Accessibility
**Learning:** Custom button grid selectors (such as vehicle selection cards) require explicit `aria-pressed` attributes and `focus-visible` ring indicators, along with `role="group"` and `aria-labelledby`, so screen readers and keyboard users can easily identify and toggle option states.
**Action:** Always link form labels to controls via `htmlFor`/`id` and ensure custom toggle button groups provide ARIA selection state and focus indicators.
