# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: Next.js 16 — Read the Bundled Docs

This project uses **Next.js 16.2.6** which has breaking changes from earlier versions. Before writing or modifying any Next.js code, consult the relevant guide in `node_modules/next/dist/docs/` — do not rely on training data for APIs, conventions, or file structure. Heed deprecation notices.

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — ESLint (flat config, eslint 9)

## Architecture

- **Framework:** Next.js 16 App Router (no Pages Router usage)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss`
- **Fonts:** Geist and Geist Mono loaded via `next/font/google`
- **Path alias:** `@/*` maps to project root

## Agent Team

Six specialized subagents govern all work. **No agent writes source code without an approved proposal upstream.**

| Agent | Trigger phrase | Writes to |
|---|---|---|
| `spec-writer` | "write user stories for...", "convert requirements" | `docs/requirements/` |
| `architecture-reviewer` | "evaluate this design", "review this decision" | `docs/architecture/` |
| `coordinator` | "coordinate: implement US-XXX-000" | `docs/proposals/` + dispatches all downstream agents |
| `backend-engineer` | "implement NestJS module for..." | `apps/api/src/` |
| `frontend-engineer` | "implement Next.js page for..." | `apps/web/` |
| `test-engineer` | "write tests for...", "audit test coverage" | co-located `*.test.tsx` / `*.spec.ts` |
| `devops-engineer` | "set up CI", "configure deploy" | `.github/`, `turbo.json` |

### Workflow: Propose → Review → Apply
1. `spec-writer` → `docs/requirements/` → **user approves**
2. `architecture-reviewer` → `docs/architecture/` → **user approves**
3. `coordinator` → `docs/proposals/` → dispatches `backend-engineer` + `frontend-engineer` in parallel
4. `test-engineer` maps tests to acceptance criteria
5. `devops-engineer` wires pipeline

### Key directories
```
docs/
  requirements/   ← user stories (spec-writer output)
  architecture/   ← ADRs (architecture-reviewer output)
  proposals/      ← sprint task proposals awaiting approval
  sprints/        ← sprint planning docs
```

## Project Structure

```
app/
  layout.tsx   — Root layout (html/body, fonts, global CSS)
  page.tsx     — Home page
  globals.css  — Tailwind imports and global styles
```

This is the App Router — all routing lives under `app/`. Components are Server Components by default; add `"use client"` only when needed.

## ESLint

Uses flat config (`eslint.config.mjs`) with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
