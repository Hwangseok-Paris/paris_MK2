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
- Home uses the approved type-index layout: short `Hero`, `ProjectsPreview` (three selected projects), full-list link, then the approved About introduction. Technology names appear within each project; the old SkillSet logo grid and animated background are not mounted on Home.
- About uses the approved split layout under `src/app/(pages)/about`: confirmed introduction on the left and six technology groups on the right, stacked on mobile. Repeated project highlights and the old animated technology cards are no longer mounted.
- Projects page exists under `src/app/(pages)/projects`.
- Contact under `src/app/(pages)/contact` fills the available viewport between the header and footer. The small Contact heading and email text are centered; the copy icon sits outside the email's centering width. Only `hwangseokparis@gmail.com` is exposed as a contact method. Copy success is announced only after the Clipboard API resolves; failure selects the address and shows manual-copy guidance.
- Theme behavior is managed through `ThemeProvider` and `ThemeToggle`. Both server-rendered HTML and the provider start in dark mode. Manual toggling remains available and persists during client navigation; a fresh load starts dark (no stored preference policy).
- `src/app/folio.css` scopes home/Projects; `src/app/profile.css` scopes About/Contact. A single Header and `src/app/header.css` serve every route. Its left label is Paris on Home and Projects/About/Contact on other routes (24px desktop, 22px mobile). Always-visible 홈/작업/소개/연락 links use `/`, `/projects`, `/about`, `/contact` and `aria-current`. About/Projects have their h1 in this header instead of repeated body titles; Contact retains its centered body heading. Contact has no footer social links. The root layout supplies the single main landmark.
- `src/constants/project-presentation.ts` holds display titles, requested company names, and project introductions separately from career/contribution data. Unknown IDs fall back to source title/company/summary. Content Intelligence AI is spelled out; its company is SAMSUNG ELECTRONICS, and the Osstem project uses OSSTEM IMPLANT. Samsung Securities remains separate.

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
- Successful DB queries return DB rows without merging the local data. Updating constants alone does not update a DB-backed deployment. The November 5 content implementation did not change this contract or write to the DB.

### Current Home Preview

- `src/components/sections/ProjectsPreview.tsx` loads projects through `getProjects()`.
- The preview highlights `samsung-cia`, `osstem-hybrid`, and `nh-investment`, in that order.
- Approved home summaries/roles are mapped separately in `ProjectsPreview`; `Project.summary` contains the approved detail introduction.
- Each preview detail link points to `/projects?project={projectId}` so the Projects page can open the matching detail panel.
- The preview also links to `/projects` for the full Projects list.

### Current Projects Page

- `src/app/(pages)/projects/page.tsx` renders `ProjectsContainer` in the scoped folio layout. The obsolete count-only `ProjectsHeader` has been removed.
- `ProjectsContainer` loads project data server-side through `getProjects()`.
- `ProjectsContainerClient` renders responsive text rows, newest first by default. Newest/oldest choices sort all filtered results by start date in a single group through `src/lib/project-sort.ts`. Optional representative order groups featured projects first and remaining projects once. All seven filters remain available without duplicate rows.
- Filters and the native sort selector share one row without a full-width divider; narrow screens scroll only the filters horizontally. Redundant total/result counts are removed from the controls; group-heading counts remain. An offscreen live region announces filtering/sorting results. Sort/filter state persists through panel navigation and resets on a fresh visit.
- Local data contains 13 public projects. Representative IDs are `samsung-cia`, `osstem-hybrid`, `nh-investment`, `kyobo-talktalk`, and `samsung-parser-viewer`.
- `ProjectCard` renders an accessible button row with display title, company, period, a service introduction, and up to four technologies. Role and contribution-focused summary appear only in detail. The Projects body starts with filters and sorting; the page title appears only in the shared header.
- `ProjectPanel` omits the contributions section when highlights are empty, avoiding a repeated introduction or an empty heading.
- The AI filter uses title/category/stack for the AI token so using an AI coding tool alone does not classify a project as an AI service.
- Clicking or keyboard-activating a project opens `ProjectPanel`.
- Hover and keyboard focus highlight the whole project row with the theme's hover color. A scoped Framer Motion shared layout moves the background between rows in 1 second without a start delay (instant with reduced motion); touch does not set hover. Title underlining is removed, and the existing focus outline remains.
- Project detail open state can also be represented by the `project` query parameter, for example `/projects?project=osstem-hybrid`.
- `ProjectPanel` displays details including company, title, summary, period, role, category, stack, and highlights.
- `ProjectPanel` uses a single portaled dialog, visually a mobile bottom sheet and a desktop centered panel. Existing Framer Motion supplies a short opacity/position/scale entry and exit, disabled with reduced motion. The dialog remains mounted through exit, keeping background inertness, scroll lock and focus trapping until cleanup restores focus. It retains internal scrolling and a sticky close toolbar.
- Changing the viewport while detail is open keeps the same dialog and focus behavior.
- Latest implementation/verification: `docs/projects-refinement-qa.md` (2026-11-11); original checks in `docs/type-index-implementation-qa.md`.

## Current Constraints

- Do not introduce a new Drawer, Modal, or separate detail UI unless explicitly requested and documented as a decision.
- Do not add libraries without a documented decision and explicit user approval.
- Keep Projects section changes aligned with the existing `Project` type and `getProjects()` data flow unless a future decision changes that contract.
