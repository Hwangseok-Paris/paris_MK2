# Project Context

## Project Purpose

This repository is a personal portfolio for Paris, a frontend developer. It presents career experience, technical stack, selected projects, and contact information through a Next.js web application.

## Technology Stack

- Framework: Next.js App Router
- Language: TypeScript
- UI: React
- Styling: Tailwind CSS
- Animation and interaction: Framer Motion, GSAP
- Icons: Lucide React
- Data access: PostgreSQL via `pg`, with local project data fallback
- Testing: Jest, Testing Library

## Current Repository Shape

- `src/app`: App Router pages, root layout, global CSS, and API route.
- `src/components`: Shared layout, home, about, projects, contact, and common UI components.
- `src/constants/projects.ts`: Local fallback data and `Project` type for project entries.
- `src/lib/db.ts`: Project data loader. Uses PostgreSQL when available and falls back to local project constants.
- `public`: Static assets, favicons, icons, and logos.

## Current UX Structure

- Root layout wraps all pages with `Header`, `Footer`, and `ThemeProvider`.
- Home page renders `Hero`, `SkillSet`, and `ProjectsPreview`.
- About page exists under `src/app/(pages)/about`.
- Projects page exists under `src/app/(pages)/projects`.
- Contact page exists under `src/app/(pages)/contact`.
- Theme behavior is managed through `ThemeProvider` and `ThemeToggle`.

## Projects Section 기준

The Projects section must be documented and changed based only on the current implementation.

### Current Data Model

Project entries use the `Project` type in `src/constants/projects.ts`:

- `id`
- `title`
- `company`
- `period`
- `role`
- `category`
- `stack`
- `summary`
- `highlights`

### Current Data Source

- `getProjects()` in `src/lib/db.ts` is the source used by the Projects page and home preview.
- If `USE_DB` is not `false` and `DATABASE_URL` exists, it attempts to load projects from PostgreSQL.
- If the database is unavailable, it falls back to `projects` from `src/constants/projects.ts`.

### Current Home Preview

- `src/components/sections/ProjectsPreview.tsx` loads projects through `getProjects()`.
- The preview currently highlights `osstem-hybrid`, `kyobo-talktalk`, and `festivallife-admin`.
- Each preview card links to `/projects?project={projectId}` so the Projects page can open the matching detail panel.
- The preview also links to `/projects` for the full Projects list.

### Current Projects Page

- `src/app/(pages)/projects/page.tsx` renders `ProjectsHeader` and `ProjectsContainer`.
- `ProjectsContainer` loads project data server-side through `getProjects()`.
- `ProjectsContainerClient` renders a responsive grid of project cards.
- `ProjectCard` displays period, company, title, summary, category, and part of the stack.
- Clicking or keyboard-activating a project opens `ProjectPanel`.
- Project detail open state can also be represented by the `project` query parameter, for example `/projects?project=osstem-hybrid`.
- `ProjectPanel` displays details including company, title, summary, period, role, category, stack, and highlights.
- `ProjectPanel` currently behaves as a mobile bottom sheet and a desktop centered dialog-style panel.

## Current Constraints

- Do not introduce a new Drawer, Modal, or separate detail UI unless explicitly requested and documented as a decision.
- Do not add libraries without a documented decision and explicit user approval.
- Keep Projects section changes aligned with the existing `Project` type and `getProjects()` data flow unless a future decision changes that contract.
