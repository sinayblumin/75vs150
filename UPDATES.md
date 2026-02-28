# Updates - Dashboard UI/UX Overhaul

This document summarizes the user experience, visual design, and structural improvements made to the dashboard comparing the $75 vs. $150 personal import VAT exemption scenarios.

## 1. Overall Layout & Hierarchy
- **Width constraints**: Applied `max-w-6xl` to main wrappers for comfortable reading widths.
- **Sticky Navigation**: Added a sticky header with a frosted glass effect (`backdrop-blur-md`) giving constant access to the main sections (ראשי, מתודולוגיה).
- **Whitespace**: Substantially increased padding/margins between logical sections (using `space-y-12` and `gap` utilities).
- **Footer**: Simplified the footer to a single line with understated styling.

## 2. Visual Design System
- **Colors**: Defined an explicit, purposeful semantic color palette in `tailwind.config.ts`:
  - `primary`: Blue scales (`#3b82f6` base) representing the State/Baseline.
  - `accent`: Orange/Amber for emphasis and warnings.
  - Success/Savings: Emerald green (`#10b981`).
  - Loss/Domestic: Red (`#ef4444`).
- **Typography**: 
  - Integrated `Alef` for continuous text (sans) and `Rubik` for strong, modern headings (heading) to elevate the typographic hierarchy.
  - Implemented bold, structured sizing for numbers and KPI titles.
- **Micro-animations**: Added subtle `duration-300`, hover states, and standard shadcn entrance animations (`animate-in fade-in`).

## 3. Scenario Toggle & KPI Section
- **Segmented Control**: The old buttons were replaced with the `ScenarioToggle` component. The components act as a dual-pane toggle switch providing active/inactive states with an explicit animation indicator for the $150 scenario. 
- **KPI Cards**:
  - Re-implemented with the new `KpiCard` component.
  - **Tooltips**: Integrated accessible tooltips (using `@radix-ui/react-tooltip` and shadcn primitives) on hover over the KPI titles to clarify each metric without overwhelming the UI.
  - **Color Coding**: KPIs dynamically colour-code based on the active state (Green for active consumer savings vs. grey when $0).
- **Dynamic Summary**: Added a context-aware strip directly beneath the KPIs that translates the numbers into a readable sentence.

## 4. Charts
- Now encapsulated in the reusable `ChartCard` component for structural consistency.
- **Bar Chart**: Removed the Y-axis line for a cleaner "data ink ratio", rounded the tops of the bars (`radius={[6,6,0,0]}`), and improved the legend tooltip display.
- **Pie Chart**: Repositioned labels directly onto the slices of the pie chart for instant visual association, and updated tooltip formatting.

## 5. Responsiveness
- Guaranteed legibility down to narrow mobile screens using grid flow (`grid-cols-1 md:grid-cols-3` etc.).
- The header collapses gracefully with a horizontally scrollable navigation on tiny screens.
- Chart heights explicitly managed to avoid collapsing on Safari/iOS.

## 6. Methodology & Data Sources Page (`/methodology`)
- **Structure**: Broke wall-of-text elements into discrete sections utilizing the `SectionHeading` component.
- **Data Sources**: Evolved from a simple bulleted list to a grid of "cards" featuring semantic icons from `lucide-react` (Database, FileText, etc.) and native-looking link styling.
- **Assumptions Table**: 
  - Added subtle striped backgrounds, explicit borders, and tooltips dynamically explaining key model variables directly beside their labels.
  - Formatted the substitution rate uniquely (blue/accent colors) to highlight it as the primary modeling mechanism.
- **Warnings**: Extracted limitations into a visually distinct warning block (amber themed) so it's impossible to miss.

## 7. Component Architecture
Extracted previously monolithic blocks into atomic, reusable pieces:
- `KpiCard.tsx`
- `SectionHeading.tsx`
- `ChartCard.tsx`
- `ScenarioToggle.tsx`
- Standardized utility (`lib/utils.ts` `cn()`) to handle complex class merges utilizing `clsx` and `tailwind-merge`.

## How to adjust in the future:
1. **Colors/Typography:** Modify the `theme.extend.colors` and `theme.extend.fontFamily` in `tailwind.config.ts`.
2. **Assumptions:** Simply edit `data/assumptions.json` — the Methodology page table will render the fresh numbers dynamically.
3. **Copy:** The core text lives directly inside `app/page.tsx`, `app/methodology/page.tsx` and the `DashboardClient.tsx`. To edit chart labels, find `barChartData` and `pieData` objects within the Dashboard component.
