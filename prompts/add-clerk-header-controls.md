# Add Clerk authentication controls to the Vertex header

## Goal

Finish the Clerk setup in the existing Next.js App Router app by adding visible signed-out and signed-in controls to the Vertex home-page header.

## Existing Clerk setup

The Clerk initializer has already:

- Added `@clerk/nextjs` current SDK (`^7.9.17`).
- Wrapped the app in `ClerkProvider` in `app/layout.tsx`.
- Added `proxy.ts` with `clerkMiddleware()`.
- Added `app/sign-in/[[...sign-in]]/page.tsx`.
- Added `app/sign-up/[[...sign-up]]/page.tsx`.
- Added development environment configuration through the CLI without exposing its contents.

## Requirements

- Update the existing header in `app/page.tsx` with Clerk controls.
- For signed-out visitors, show accessible `Sign in` and `Sign up` actions linking to the existing Clerk routes.
- For signed-in users, show Clerk’s `UserButton` in place of the static profile avatar.
- Preserve the current Vertex visual layout and notification control.
- Use current Clerk SDK patterns for `@clerk/nextjs` v7.
- Keep public browsing available; do not protect the home page.
- Do not expose or print secret keys.
- Avoid adding duplicate auth controls or custom auth state logic.

## Acceptance criteria

- Signed-out state exposes working sign-in and sign-up actions.
- Signed-in state renders `UserButton`.
- Header remains responsive and visually aligned with the existing page.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.
- `npx -y clerk@latest doctor --json` reports no setup failures.
- The app starts and `/`, `/sign-in`, and `/sign-up` respond successfully.
