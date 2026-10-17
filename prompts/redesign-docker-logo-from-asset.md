# Redesign Docker course logo from supplied asset

## Goal

Replace the unclear hand-drawn Docker logo in the Docker Essentials course card with a faithful simplified recreation of the supplied asset:

- `design/Docker-svgrepo-com.svg.webp`

## Scope

- Update the Docker branch of `CourseIcon` in `app/page.tsx`.
- Update only the Docker-specific sizing/style rules in `app/globals.css`.
- Do not change the other course icons, card content, layout, or page sections.

## Implementation decisions

- Use the supplied asset as the visual source of truth.
- Recreate the asset as a clean inline SVG rather than rendering the `.webp`, so the logo remains crisp at the card size and does not introduce a runtime image dependency.
- Match the asset's key visual traits: solid cyan-blue whale body, recognizable tail and eye, flat container stack above the back, no inaccurate dark contour overlay, and transparent background.
- Keep the SVG within the existing 74px course-icon footprint and preserve the `role="img"`/accessible label.

## Acceptance criteria

- The Docker mark is immediately recognizable at the home-page card size.
- The whale body, tail, eye, and six-container stack follow the supplied asset's silhouette and proportions.
- The logo does not appear clipped, visually noisy, or confused with a generic blue shape.
- Next.js and TypeScript course icons remain unchanged.
- `npm run lint` and `npx tsc --noEmit` pass.
