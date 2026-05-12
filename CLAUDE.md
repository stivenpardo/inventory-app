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
