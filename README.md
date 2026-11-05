# Inventory App — Spec-Driven Development Guide

## How to Work With the Agent Team

You never talk to agents directly. You always talk to Claude (the main session), and Claude routes to the correct agent based on what you say.

---

## The Full Gate Flow

Every feature follows this sequence. **No gate can be skipped.**

```
1. You describe a requirement
        ↓
2. spec-writer      → docs/requirements/SPEC.md        (you approve)
        ↓
3. architecture-reviewer → docs/architecture/ADR-xxx.md  (you approve)
        ↓
4. coordinator      → docs/proposals/US-xxx.md         (dispatches engineers)
        ↓
5. backend-engineer + frontend-engineer                (run in parallel)
        ↓
6. test-engineer    → tests mapped to acceptance criteria
        ↓
7. devops-engineer  → CI/CD, deploy config
```

---

## Agent Trigger Phrases

Say these to Claude to invoke the right agent:

| What you say | Agent dispatched | Writes to |
|---|---|---|
| `"write user stories for..."` | `spec-writer` | `docs/requirements/` |
| `"convert requirements: ..."` | `spec-writer` | `docs/requirements/` |
| `"evaluate this design..."` | `architecture-reviewer` | `docs/architecture/` |
| `"review this decision..."` | `architecture-reviewer` | `docs/architecture/` |
| `"coordinate: implement US-XXX-000"` | `coordinator` | dispatches all downstream agents |
| `"implement Next.js page for..."` | `frontend-engineer` | `apps/web/` |
| `"implement NestJS module for..."` | `backend-engineer` | `apps/api/src/` |
| `"write tests for..."` | `test-engineer` | co-located `*.test.tsx` / `*.spec.ts` |
| `"set up CI..."` | `devops-engineer` | `.github/`, `turbo.json` |

---

## Example: Your First Requirement

The store owner tells you: *"I need to add products with a name, price, category, and stock quantity."*

**You say to Claude:**
```
Write user stories for the following client requirement:
the store owner needs to add a new product with name, price, category, and stock quantity.
```

Claude dispatches `spec-writer`. It outputs a structured user story to `docs/requirements/`.

You review it, then say:
```
Evaluate the design for US-PRD-001
```

Claude dispatches `architecture-reviewer`. It outputs an ADR to `docs/architecture/`.

You approve, then say:
```
coordinate: implement US-PRD-001
```

The coordinator handles the rest — proposals, parallel implementation, tests.

---

## User Story ID Format

```
US-[DOMAIN]-[NUMBER]

US-PRD  → Product catalog
US-INV  → Inventory / stock management
US-POS  → Point of Sale / billing
US-AUT  → Authentication / access control
US-RPT  → Reports / analytics
```

---

## Key Directories

```
docs/
  requirements/   ← user stories (spec-writer output)
  architecture/   ← ADRs (architecture-reviewer output)
  proposals/      ← sprint task proposals (coordinator output)
  sprints/        ← sprint planning docs
.claude/
  agents/         ← agent definition files
```

---

## Dev Commands

```bash
npm run dev     # Start dev server → http://localhost:3000
npm run build   # Production build
npm run lint    # ESLint
```

---

## Tech Stack

- **Frontend:** Next.js 16.2.6 — App Router, TypeScript strict, Tailwind CSS v4
- **Backend:** NestJS — REST API, Swagger, class-validator
- **Database:** MongoDB Atlas + Prisma
- **Monorepo:** Turborepo (`apps/web`, `apps/api`, `packages/types`)
- **Tests:** Vitest + Testing Library (frontend), Jest (backend)
