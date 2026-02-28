## Chart Height Fix (Homepage)

### What caused the charts to become extremely tall
- The chart components use Recharts `ResponsiveContainer` with `height="100%"`.
- After the UI refactor, the chart area lived inside a flexible card layout where height could be stretched by flex/grid (`h-full` + `flex` growth context) without a stable bounded chart height.
- In that situation, `height: 100%` can resolve against an overly large available space, producing very tall chart columns with lots of empty area.

### What was changed
- In `components/ChartCard.tsx`, chart height is now explicitly constrained for Recharts containers via Tailwind descendant selectors:
  - mobile: `h-64`
  - small screens: `h-72`
  - desktop: `h-80`
- The chart wrapper in `ChartCard` no longer relies on `flex-1`/`min-height` growth for sizing; it uses normal flow with explicit chart container height rules.
- In `components/DashboardClient.tsx`, the charts section grid now uses `items-stretch` to keep cards aligned consistently in desktop two-column layout.
- The pie chart radii were switched to percentages (`outerRadius="78%"`, `innerRadius="48%"`) so the donut scales cleanly within the new bounded responsive height.

### Scope
- No business logic or calculation/model code was changed.
- Changes are limited to chart layout/styling/responsive sizing behavior.
