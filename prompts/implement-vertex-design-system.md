# Implement Vertex Design System

## Goal

Replace the default Next.js starter screen with a responsive, production-quality implementation of the Vertex Design System reference at `design/vertex-designsystem.png`.

## Skills and guidance read

- Next.js App Router page/layout guidance from `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`.
- Next.js CSS guidance from `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md`.
- Next.js font guidance from `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md`.
- Existing Tailwind v4 setup in `app/globals.css`.

## Existing code inspected

- `app/page.tsx`: default create-next-app starter content.
- `app/globals.css`: Tailwind import plus starter theme variables and dark-mode styles.
- `app/layout.tsx`: Geist fonts and starter metadata.
- `package.json`: Next.js 16.4, React 19.3, Tailwind 4, TypeScript, ESLint; no icon library.
- `design/vertex-designsystem.png`: the visual source of truth.

## Decisions and assumptions

- The requested design-system image is the complete page to implement at `/`.
- Use CSS custom properties for the documented Vertex tokens and Tailwind utilities for layout.
- Use Playfair Display for display typography and Inter for UI/body typography through `next/font/google`; retain system fallbacks.
- Use inline SVGs for the logo and sample icons so no dependency or network-backed icon package is needed.
- Use accessible semantic headings, labels, buttons, inputs, and visible focus styles.
- Make the desktop composition match the reference closely while allowing the dense grid to stack and scroll safely on narrow screens.
- The visual examples are static documentation specimens; controls may be non-functional unless interaction is needed for accessibility.

## Expected files

- `app/page.tsx`: complete design-system specimen page and small reusable local render helpers/components.
- `app/globals.css`: Vertex color, typography, spacing, radius, shadow, background, and responsive styling.
- `app/layout.tsx`: Vertex metadata and font setup.

## Requirements

1. Build the full page shown in the reference:
   - Intro/brand panel with Vertex mark, title, description, and version.
   - Color palette with primary and neutral swatches and labels/hex values.
   - Typography specimen for Playfair Display and Inter.
   - Type scale table.
   - Spacing system samples from 4px through 64px.
   - Radius and shadow specimens.
   - Outline and filled icon samples with icon specifications.
   - Button matrix showing primary, secondary, tertiary, and text variants across default, hover-like, and disabled rows.
   - Search/text input and select specimens with field specifications.
   - Badges/tags, statuses/indicators, progress bar, cards, navigation, and principles sections.
2. Match the reference’s visual language:
   - Warm off-white page background.
   - White translucent cards with subtle warm borders.
   - Orange primary accent around `#F97316`.
   - Dark navy/charcoal neutral palette.
   - Small uppercase section labels with orange numeric indices.
   - Rounded 8–16px cards and restrained shadows.
   - Tight editorial spacing and dense specimen layouts.
3. Keep the page responsive:
   - Preserve the multi-column desktop layout.
   - Collapse sections to one column at smaller widths.
   - Keep swatch, button, input, card, and navigation specimens readable without horizontal page overflow.
4. Do not add Sanity, Clerk, PostHog, search, or application data functionality; this request is only the design-system page.
5. Update metadata from the create-next-app defaults to Vertex-specific values.
6. Avoid unrelated changes and do not add packages.

## Security and reliability considerations

- No user-controlled data, server writes, secrets, or external API calls are introduced.
- Use native form controls and labels for the static input specimens.
- Keep SVGs inline and non-interactive unless they represent a button with an accessible label.
- Avoid invalid nested interactive elements.

## Acceptance criteria

- `/` renders the complete Vertex Design System page rather than the Next.js starter.
- The page visibly contains all 14 numbered reference sections and the section content described above.
- Desktop layout resembles the supplied reference in hierarchy, spacing, colors, typography, borders, and density.
- Narrow viewport rendering is readable and does not introduce horizontal overflow.
- TypeScript, ESLint, and a production build pass.
- No new dependency is required.

## Checks to run

From `G:\vertex`:

1. `npx tsc --noEmit`
2. `npm run lint`
3. `npm run build`
4. `npm run dev`

## Manual test steps

1. Open `http://localhost:3000`.
2. Confirm the page title, Vertex mark, intro panel, and all numbered sections are present.
3. Compare the page at desktop width against `design/vertex-designsystem.png`.
4. Resize to a narrow mobile width and confirm sections stack, controls remain readable, and no horizontal scrollbar appears.
5. Tab through inputs and buttons to confirm visible focus behavior and accessible labels.
