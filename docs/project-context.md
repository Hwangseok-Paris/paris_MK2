# Project Context

Last reconciled: 2026-11-27 against the home introduction copy update; prior layout facts retain the full Tailwind migration and approved corner navigation implementation. Historical verification results are recorded in [task-log.md](task-log.md); outstanding work is tracked in [portfolio-improvement-plan.md](portfolio-improvement-plan.md).

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

- Root layout wraps all pages with `Header`, `Footer`, and `ThemeProvider`. It defines `--page-max-width: 1480px`; page/loading/footer/menu viewports share `portfolioViewport`. On desktop, the menu uses the same route-specific gutter as the content, aligning the toggle and expanded panel to its right edge. At 760px and below, the menu keeps its 44px target and 16px/safe-area right inset.
- Home uses a full-height 1.8:1 desktop split: introduction/Featured on the left, equal-height ABOUT/PROJECTS/CONTACT links on the right. The desktop introduction starts near the About label’s top, using viewport-relative top padding with a 48px minimum for short screens. The introduction wrapper uses 60px horizontal margins and 24px horizontal padding, including on mobile; Featured and the all-projects link use 13px text. Below 650px, navigation becomes a fixed three-column bottom bar with safe-area and content clearance and the introduction occupies the single column with those inner margins. Mobile and hover-unavailable devices use static navigation without color effects. No home header/footer. Neutral default; only the active right block fills (380ms), with the left sweep starting at 260ms and lasting 600ms to overlap the eased tail. HomeNavigation also supports radial. Previous color layers remain until covered; reduced-motion switches immediately. The home introduction has two experience paragraphs covering frontend structure and response integration, app/web work with AI-assisted review and verification, and development PL responsibilities, followed by a separate closing paragraph about considering users’ situations and appropriate technologies and implementation approaches to build usable, reliable services. The closing uses a line break after its first clause at widths of 1024px and above; narrower screens wrap naturally with the same typography. Home-only wording was expanded and refined on 2026-11-27: service types are examples of past projects, and the standalone entertainment-industry sentence was removed after feedback. About remains separate. Chakra Petch/Pretendard are retained. Dark is the default; theme toggle controls are removed from home and the shared header. Home styling uses component Tailwind utilities; the two clip-path keyframes are in `globals.css`.
- About uses the approved split layout under `src/app/(pages)/about`: confirmed introduction on the left and six technology groups on the right, stacked on mobile. Repeated project highlights and the old animated technology cards are no longer mounted.
- Projects page exists under `src/app/(pages)/projects`.
- Contact under `src/app/(pages)/contact` fills the available viewport above the footer, with clearance for the floating corner menu. The small Contact heading and email text are centered; the copy icon sits outside the email's centering width. Only `hwangseokparis@gmail.com` is exposed as a contact method. Copy success is announced only after the Clipboard API resolves; failure selects the address and shows manual-copy guidance.
- Server-rendered HTML and `ThemeProvider` start in dark mode. No theme toggle is mounted in home or the shared header. `ThemeToggle` and its context API remain in the repository but are not exposed by the current UI; no stored preference policy is implemented.
- All UI layout, typography, responsive and state styles use Tailwind utilities. `src/app/globals.css` contains imports, theme tokens, exact viewport/container variants, and two home keyframes. `folio.css`, `profile.css`, `header.css`, and `personal-home.css` were removed. `src/components/layout/portfolioStyles.ts` shares shell typography, gutters and focus/reduced-motion utilities; individual component layout stays in TSX. The shared `Header` provides a fixed upper-right disclosure button on non-home routes. Its 2×2 HOME/ABOUT/PROJECTS/CONTACT links use `/`, `/about`, `/projects`, `/contact` and `aria-current`. The expanded panel is 300×234px on desktop and at most 272×210px on mobile, without decorative numbering or a visible current-page label. Escape/outside click/focus leaving closes it; ArrowDown opens and focuses the first link. Closed links are inert, route changes reset the menu, and reduced motion disables transitions. About/Projects render `PageHeading` inside main, with typography, spacing and responsive styles defined directly as Tailwind utilities rather than `interior-*` CSS; Contact retains its centered body heading. Contact has no footer social links. The root layout supplies the single main landmark.
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
- Home shows only the three approved project titles; detailed roles, summaries and technologies remain in Projects. `Project.summary` contains the approved detail introduction.
- Each preview detail link points to `/projects?project={projectId}` so the Projects page can open the matching detail panel.
- The preview also links to `/projects` for the full Projects list.

### Current Projects Page

- `src/app/(pages)/projects/page.tsx` renders `ProjectsContainer` in the scoped folio layout. The obsolete count-only `ProjectsHeader` has been removed.
- `ProjectsContainer` loads project data server-side through `getProjects()`.
- `ProjectsContainerClient` renders responsive text rows, newest first by default. Newest/oldest choices sort all filtered results by start date in a single group through `src/lib/project-sort.ts`. Optional representative order groups featured projects first and remaining projects once. All seven filters remain available without duplicate rows.
- Filters and the native sort selector share one row without a full-width divider; narrow screens scroll only the filters horizontally and place sorting on the next row. Redundant total/result counts are removed from the controls; group-heading counts remain. An offscreen live region announces filtering/sorting results. Sort/filter state persists through panel navigation and resets on a fresh visit.
- Local data contains 13 public projects. Representative IDs are `samsung-cia`, `osstem-hybrid`, `nh-investment`, `kyobo-talktalk`, and `samsung-parser-viewer`.
- `ProjectCard` renders an accessible button row with display title, company, period, a service introduction, and up to four technologies. Role and contribution-focused summary appear only in detail. The Projects body starts with a Projects heading and a year range derived from loaded project periods, followed by filters and sorting. Rows place the period first, then the title/company and introduction; decorative row numbers and brand marks are removed.
- `ProjectPanel` omits the contributions section when highlights are empty, avoiding a repeated introduction or an empty heading.
- The AI filter uses title/category/stack for the AI token so using an AI coding tool alone does not classify a project as an AI service.
- Clicking or keyboard-activating a project opens `ProjectPanel`.
- Hover and keyboard focus highlight the whole project row with the theme's hover color. A scoped Framer Motion shared layout moves the background between rows in 0.6 seconds without a start delay (instant with reduced motion); touch does not set hover. Title underlining is removed, and the existing focus outline remains.
- Project detail open state can also be represented by the `project` query parameter, for example `/projects?project=osstem-hybrid`.
- `ProjectPanel` displays details including company, title, summary, period, role, category, stack, and highlights.
- `ProjectPanel` uses a single portaled dialog, visually a mobile bottom sheet and a desktop centered panel. Existing Framer Motion supplies a short opacity/position/scale entry and exit, disabled with reduced motion. The dialog remains mounted through exit, keeping background inertness, scroll lock and focus trapping until cleanup restores focus. It retains internal scrolling and a sticky close toolbar.
- Changing the viewport while detail is open keeps the same dialog and focus behavior.
- Latest navigation/layout implementation and regression verification: `docs/task-log.md` (2026-11-26). Earlier refinement verification: `docs/projects-refinement-qa.md` (2026-11-11); original checks in `docs/type-index-implementation-qa.md`.

## Current Constraints

- Do not introduce a new Drawer, Modal, or separate detail UI unless explicitly requested and documented as a decision.
- Do not add libraries without a documented decision and explicit user approval.
- Keep Projects section changes aligned with the existing `Project` type and `getProjects()` data flow unless a future decision changes that contract.
