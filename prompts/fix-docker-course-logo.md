# Fix the Docker course logo

## Goal

Correct the Docker Essentials course logo on the Vertex home page so it more closely matches the Docker whale/container mark shown in `design/vertex-home.png`.

## Scope

- Update the inline Docker logo markup in `app/page.tsx`.
- Update only the related Docker logo styles in `app/globals.css`.
- Preserve the card layout, course content, and all other logos.

## Requirements

- Use a self-contained inline SVG or equivalent precise CSS/SVG shape; do not add an external image dependency.
- Show the recognizable blue Docker whale with stacked blue container blocks, dark outline, and white/transparent negative space.
- Keep the logo inside the existing 74px course icon footprint.
- Maintain accessibility without adding visible text to the logo.
- Keep TypeScript strict and avoid unsafe casts.

## Acceptance criteria

- Docker Essentials displays a recognizable Docker mark matching the supplied reference more closely.
- Next.js and TypeScript course icons remain unchanged.
- `npm run lint` and `npx tsc --noEmit` pass.
