# Implement the Vertex home page

## Goal

Replace the current design-system route with the Vertex learning-platform home page shown in `design/vertex-home.png`. The page should match the supplied desktop reference in layout, spacing, typography, color, borders, controls, and decorative details, while adapting sensibly to narrow screens.

## Skills and guidance read

- Repository guidance in `AGENTS.md`.
- Next.js App Router guidance in `node_modules/next/dist/docs/01-app/index.md`.
- Next.js 16 agent-rules guidance in `node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/agentRules.md`.

No Sanity, Clerk, or other supporting skill is required for this presentational-only home page.

## Code and assets inspected

- `app/page.tsx`: current route is a design-system showcase with reusable inline SVG/icon patterns.
- `app/globals.css`: current global theme, font variables, and design-system styles.
- `app/layout.tsx`: existing `Inter` and `Playfair Display` font setup and metadata.
- `package.json`: Next.js 16.4, React 19.3, Tailwind CSS 4, ESLint.
- `design/vertex-home.png`: source-of-truth desktop visual reference.
- `AGENTS.md`: requires approval before implementation and responsive behavior for UI work.

## Decisions and assumptions

- Keep the existing root App Router structure; implement the page in `app/page.tsx` and its styles in `app/globals.css`.
- Keep `Inter` for UI/body text and `Playfair Display` for the large hero and section headings.
- Use inline SVG for the logo and small interface icons, avoiding a new dependency for a static page.
- Use local illustrative course icons made with CSS/text so the page does not depend on unavailable remote image URLs.
- Make the header sticky only if it does not change the reference flow; otherwise keep it static as shown.
- The search field is presentational for this task, but should be keyboard-focusable and the CTA/navigation controls should be real links/buttons.
- Preserve the existing project’s Tailwind import and Next.js font configuration rather than introducing a component library.

## Expected files

- `app/page.tsx`: replace the design-system content with semantic home-page sections and small presentational components.
- `app/globals.css`: replace design-system-only styles with the home-page layout, responsive rules, striped page frame, card treatments, and decorative gradient bars.
- `app/layout.tsx`: update metadata from “Design System” to the Vertex home page title/description if needed.

## Requirements

1. Reproduce the reference’s page frame with the warm off-white background, subtle diagonal side pattern, centered content column, and thin separators.
2. Build the top navigation with the Vertex mark, Courses, My Learning, notification icon, and circular learner avatar treatment.
3. Build the hero with the “INTELLIGENT LEARNING” label, two-line Playfair headline, supporting copy, orange “Explore Courses” CTA, and large search field with search icon and `⌘ K` hint.
4. Build the “All Courses” section with the right-aligned “View all courses” link and three cards:
   - Next.js for Production
   - Docker Essentials
   - TypeScript Deep Dive
   Each card needs its icon, title, description, divider, and metadata row.
5. Build the lower announcement row with the star icon, “New courses and lessons added every week.” copy, divider lines, and the soft orange equalizer/bar decoration visible at the bottom of the reference.
6. Use semantic headings, navigation, links, button/input labels, and accessible SVG titles/aria attributes where appropriate.
7. Preserve the visual hierarchy at desktop widths close to the reference and stack/reflow the navigation, hero, search, cards, and decorative area cleanly on mobile.
8. Do not add Sanity data fetching, authentication, analytics, search API behavior, or unrelated platform features.

## Security and reliability

- No secrets, tokens, external API calls, or user data are needed.
- Avoid raw HTML injection and avoid non-semantic clickable `div` elements.
- Keep TypeScript strictness intact and avoid unsafe casts.

## Acceptance criteria

- `/` renders the Vertex home page rather than the design-system page.
- Desktop rendering is visually consistent with `design/vertex-home.png`, including the measured proportions and spacing.
- The page remains usable at mobile widths without horizontal overflow.
- Navigation/CTA/search controls have accessible names and visible focus styles.
- Metadata describes Vertex rather than the design system.
- `npm run lint` passes.
- `npx tsc --noEmit` passes.
- `npm run build` passes because the route and metadata changed.

## Checks

Run from `G:\vertex`:

1. `npm run lint`
2. `npx tsc --noEmit`
3. `npm run build`
4. `npm run dev`

## Manual test steps

1. Open `http://localhost:3000/`.
2. Compare the desktop page against `design/vertex-home.png` at approximately 1024px wide.
3. Confirm the logo, nav labels, notification/avatar treatment, hero copy, CTA, search field, three course cards, announcement row, and bottom bars are all visible and aligned.
4. Tab through the page and confirm links, the search input, and the CTA receive visible focus.
5. Resize to a narrow mobile viewport and confirm the page stacks without horizontal scrolling and the course cards remain readable.
