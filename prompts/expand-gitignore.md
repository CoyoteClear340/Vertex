# Expand Vertex Git Ignore Rules

## Goal

Expand the existing root `.gitignore` into a standard full-stack Next.js ignore file that excludes generated files, dependencies, secrets, local tooling state, IDE metadata, logs, caches, and the repository’s agent skill/reference content.

## Existing code inspected

- `.gitignore`: already ignores `node_modules`, `.next`, `out`, build output, env files, logs, Vercel state, TypeScript build info, and `next-env.d.ts`.
- `package.json`: Next.js 16, React, Tailwind, TypeScript, ESLint.
- Repository contents include `.agents/skills`, `.next`, `node_modules`, `tsconfig.tsbuildinfo`, and design assets.

## Decisions

- Ignore `.agents/` entirely because it contains local agent skills and reference/template content that should not be committed as application source.
- Ignore common agent/tooling directories (`.claude/`, `.copilot/`, `.cursor/`) when present, while leaving normal project configuration such as `.github/` trackable.
- Keep `design/`, `app/`, `public/`, `prompts/`, package manifests, lockfiles, and source configuration files trackable.
- Use standard root-anchored patterns for generated project directories and broad patterns for secrets, logs, OS files, and local IDE state.
- Do not delete any files; only update `.gitignore`.

## Expected file

- `.gitignore`

## Requirements

Add or preserve rules for:

1. Dependencies and package-manager artifacts.
2. Next.js, build, coverage, cache, and generated TypeScript files.
3. Environment files and local secrets.
4. Debug logs and temporary files.
5. OS/editor metadata.
6. Vercel and other local deployment/tool state.
7. `.agents/` skills and references plus optional local AI-agent directories.

## Acceptance criteria

- `.gitignore` remains valid Git ignore syntax.
- Existing useful rules are preserved.
- `.agents/` and generated artifacts are ignored.
- Source, design, prompt, and lockfiles are not accidentally ignored.
- No package or application source files are changed.
