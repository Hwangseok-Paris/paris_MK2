# Project Context

Last reconciled: 2026-11-28 against the approved home scroll separation. At 650px and above, the home fills the viewport with a hidden-scrollbar introduction pane and a fixed right navigation column. Existing mobile document scrolling and the bottom navigation remain unchanged. Prior dependency/font/theme cleanup remains intact. Historical verification results are recorded in [task-log.md](task-log.md); outstanding work is tracked in [portfolio-improvement-plan.md](portfolio-improvement-plan.md).

## Project Purpose

This repository is a personal portfolio for Paris, a frontend developer. It presents career experience, technical stack, selected projects, and contact information through a Next.js web application.

## Technology Stack

- Framework: Next.js App Router
- Language: TypeScript
- UI: React
- Styling: Tailwind CSS
- Animation and interaction: Framer Motion and Tailwind/CSS keyframes. Unused GSAP was removed after the legacy History component cleanup.
- Icons: Lucide React
- Data access: PostgreSQL via `pg`, with local project data fallback
- Testing: Jest, Testing Library

The CSS pipeline uses `@tailwindcss/postcss`; the standalone Tailwind CLI and Autoprefixer are not installed. Jest uses `next/jest` with SWC and `ts-node` for its TypeScript config, not ts-jest. The unused bundle analyzer was removed. `baseline-browser-mapping` remains directly tracked under the existing build-data decision, and Testing Library's DOM peer remains installed. Remaining dependency versions were preserved.

## Current Repository Shape

- `src/app`: App Router pages, root layout, global CSS, and API route.
- `src/components`: Shared Header/Footer and layout helpers, plus home, about, projects and contact components. HomeNavigation, Hero, ProjectsPreview and its loading skeleton are together under `home/`. The home-specific `useHomeScroll` hook manages internal-scroll focus and reading-position restoration separately from navigation color motion. About uses AboutIntro, AboutCareer and AboutTechStack. The old `sections/` and `common/` component files and unused backup implementations were removed.
- `src/constants/projects.ts`: Local fallback data and `Project` type for project entries.
- `src/constants/project-presentation.ts`: Project display titles, company labels, service introductions and contribution headings. Display and accessibility titles use the same `projectDisplayTitle` function.
- `src/lib/db.ts`: Project data loader. Uses PostgreSQL when available and falls back to local project constants.
- `src/lib/project-filter.ts` and `project-sort.ts`: Pure classification and sorting policies. Client selection, URL and interaction state stay in ProjectsContainerClient.
- `public`: Static assets, favicons, icons, and logos.
- `output`: Local review prototypes and one-off QA artifacts, ignored by Git. Temporary verification PNGs are deleted after review at the user's request; HTML, scripts and JSON results remain locally. Historical PNG paths in task logs do not imply retained files. These are not service assets. Verification summaries and durable decisions stay in `docs/`.

## Current UX Structure

- Root layout wraps all pages with `Header`, `Footer`, and `ThemeProvider`. It defines `--page-max-width: 1480px`; page/loading/footer/menu viewports share `portfolioViewport`. On desktop, the menu uses the same route-specific gutter as the content, aligning the toggle and expanded panel to its right edge. At 760px and below, the menu keeps its 44px target and 16px/safe-area right inset.
- Browser, Open Graph and Twitter metadata identify the portfolio as `김황석 | 프론트엔드 개발자`, with a description of verified AI screen, document review, web/app integration and consultation-service experience. This is site-level metadata; project-specific social titles/images remain a separate candidate.
- Home uses a full-height 1.8:1 desktop split: introduction/Featured on the left, equal-height ABOUT/PROJECTS/CONTACT links on the right. At650px and above, both columns are constrained to100dvh: only the left content scrolls, its scrollbar is hidden, and the color layers stay fixed behind it. A named focusable region supports native keyboard scrolling. `useHomeScroll` saves the reading position in sessionStorage and restores it on return/reload, waits for delayed content height when necessary, and gives user input priority. It removes the tab stop below650px. The root scrollbar gutter is auto only on desktop home; other pages and mobile retain stable. Desktop menu links have no vertical padding, keeping all three labels inside short viewports. The desktop introduction starts near the About label’s top, using viewport-relative top padding with a 48px minimum for short screens. The introduction wrapper keeps desktop60px horizontal margins and24px padding. Below650px the margins become zero while24px padding stays, yielding327px/257px reading widths at390px/320px with the stable scrollbar gutter. Featured and all-projects labels use13px; project titles use15px/13px on mobile, followed by12px role summaries with8px between list items. Below650px, navigation becomes a fixed three-column bottom bar with safe-area and content clearance. Mobile and hover-unavailable devices use static navigation without color effects. No home header/footer. Neutral default; only the active right block fills (380ms), with the left sweep starting at260ms and lasting600ms to overlap the eased tail. HomeNavigation also supports radial. Previous color layers remain until covered; reduced-motion switches immediately. The home introduction keeps two experience paragraphs covering frontend structure and response integration, app/web work with AI-assisted review and verification, and development PL responsibilities, followed by a separate closing paragraph about considering users’ situations and appropriate technologies and implementation approaches. The closing uses a line break after its first clause at widths of1024px and above; narrower screens wrap naturally. The approved11/27 wording is unchanged by the11/28 visual improvements; About remains separate. Chakra Petch/Pretendard are retained. Dark is the default; theme toggle controls are removed from home and the shared header. Home styling uses component Tailwind utilities; the two clip-path keyframes are in `globals.css`.
- About uses a responsive layout under `src/app/(pages)/about`. At a named profile-container width of at least 1280px, the existing 1480px shell/gutters contain a 1:1 (50:50) grid with a 64px column gap: name/job and development-only introduction on the left, Experience followed by Tech Stack on the right, with aligned section tops. The two right sections are 56px apart; Experience fills the right column. Below that threshold, DOM/visual order remains introduction → Experience → Tech Stack with 96px section gaps, reduced to 64px at profile-sm (page-container width 760px and below). The introduction retains a 650px maximum width, two paragraphs/four sentences and a 16px paragraph gap; the wide layout now gives it about564–650px after the user requested a wider introduction column. The name uses 32px/28px and the job16px/15px; the secondary English name remains18px/16px. Introduction copy covers frontend screen/function design, planning/design/backend collaboration, web/app integration checks and team coordination, with no entertainment narrative. Experience lists 코드클릭 (2021.11 – 현재; 프론트엔드 개발) and 해피로봇레코드 (2016.02 – 2019.04; A&R · 음반·공연 제작). The user-corrected2016.02 start supersedes the reference PDF’s2016.04. Company roles use14px; dates wrap below the company/role group below420px of career-container width. Experience has a visible22px Chakra Petch heading, thin top rule and20px row gaps. Tech Stack uses the same heading style and retains a900px maximum width: two technology columns, one below460px of its own container width. Its six Korean categories, technology names and usage notes are unchanged; sizes are14px/17px/13px respectively. Global menu, footer, PageHeading and existing Tailwind styling conventions remain intact; duplicate bottom links, repeated project highlights and old animated technology cards are not mounted.
- Projects page exists under `src/app/(pages)/projects`.
- Contact under `src/app/(pages)/contact` fills the available viewport above the footer, with clearance for the floating corner menu. The small Contact heading and email text are centered; the copy icon sits outside the email's centering width. Only `hwangseokparis@gmail.com` is exposed as a contact method. Copy success is announced only after the Clipboard API resolves; failure selects the address and shows manual-copy guidance.
- Server-rendered HTML and `ThemeProvider` start in dark mode. No theme toggle is mounted in home or the shared header. The unused ThemeToggle component and its dedicated test were removed; ThemeProvider and its context API are unchanged. No stored preference policy is implemented.
- All UI layout, typography, responsive and state styles use Tailwind utilities. `src/app/globals.css` contains imports, theme tokens, exact viewport/container variants, and two home keyframes. `folio.css`, `profile.css`, `header.css`, and `personal-home.css` were removed. `src/components/layout/portfolioStyles.ts` shares shell typography, gutters and focus/reduced-motion utilities; individual component layout stays in TSX. The shared `Header` provides a fixed upper-right disclosure button on non-home routes. Its 2×2 HOME/ABOUT/PROJECTS/CONTACT links use `/`, `/about`, `/projects`, `/contact` and `aria-current`. The expanded panel is 300×234px on desktop and at most 272×210px on mobile, without decorative numbering or a visible current-page label. Escape/outside click/focus leaving closes it; ArrowDown opens and focuses the first link. Closed links are inert, route changes reset the menu, and reduced motion disables transitions. About/Projects render `PageHeading` inside main, with typography, spacing and responsive styles defined directly as Tailwind utilities rather than `interior-*` CSS; Contact retains its centered body heading. Contact has no footer social links. The root layout supplies the single main landmark.
- Project headings use the recorded `Project.title` consistently across home, list and detail. Design-only English aliases were removed after user feedback on2026-11-28; actual names such as Content Intelligence AI, Festival Life and Connect Always remain. `project-presentation.ts` supplies service introductions, contribution headings and company display helpers. Company names use source data, with a Korean Amorepacific display label. Title language follows its text, and the detail no longer repeats the same title as a subtitle.
- List and detail omit a separate company label when the title already identifies it. `projectCompanyLabel` compares normalized full names and confirmed aliases (오스템, 교보, Festival Life). This hides 11 duplicate labels and retains 코드클릭 on the voice/chat PoC and 카카오 i Connect Always entries. Company data is preserved; omitted elements leave no company-specific margin.
- Project titles on home, list and detail all use `font-project-title` (Chakra Petch for Latin, Pretendard for Hangul). Home's previous inherited Pretendard and detail's Arial title were replaced on2026-11-28. Sizes, weights and spacing remain contextual; role text, descriptions and technology lists retain their body font.
- Geist is no longer loaded or preloaded: its former body class only declared an unused variable. The old `--font-panel` token and unused `folio-md`/`folio-tablet`/`folio-sm` variants were removed. Chakra Petch/Pretendard imports, all five consumed font tokens including `font-index`, current breakpoints and home keyframes remain unchanged. The root retains its existing font inheritance, including the default 404 page.
- `tailwind.config.mjs` now only specifies source content paths and class-based dark mode. Unused legacy color overrides and wiggle definitions were removed. Consumed color/font tokens remain in globals; `--color-tint` was removed, while the separate `--home-tint` values and both home keyframes remain in use. The `@config` connection is retained.
- Home and Projects body copy uses Pretendard; About/Contact now also use Pretendard first through `font-profile`. Contact's small heading uses Chakra Petch without changing its24px/22px size or centered layout. Explicit English heading/date font choices are retained.
- `PageHeading` wraps its title/period group with an8px row gap and keeps the title on one line: at320/360px Projects moves the period underneath, while375/390px retains the horizontal layout. List/detail project titles use word-level Korean wrapping with emergency overflow protection. A period's trailing parenthetical note and its date are separate unbroken spans, preserving the original string. Home keeps `백엔드·Agent` together without altering its wording.

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

- `src/components/home/ProjectsPreview.tsx` loads projects through `getProjects()`.
- The preview highlights `samsung-cia`, `osstem-hybrid`, and `nh-investment`, in that order.
- Home shows the three approved project titles plus short verified roles: CIA frontend sole development/response contract, Osstem Android·iOS sole development/web integration, and NH development PL/main logic/architecture reconstruction. The full roles, summaries and technologies remain in Projects. `Project.summary` contains the approved detail introduction.
- Each preview detail link points to `/projects?project={projectId}` so the Projects page can open the matching detail panel.
- Preview titles are derived from the same loaded project records as Projects, while the approved short role lines remain fixed; no separate title alias list is maintained.
- The preview also links to `/projects` for the full Projects list.

### Current Projects Page

- `src/app/(pages)/projects/page.tsx` renders `ProjectsContainer` in the scoped folio layout. The obsolete count-only `ProjectsHeader` has been removed.
- `ProjectsContainer` loads project data server-side through `getProjects()`.
- `ProjectsContainerClient` renders responsive text rows, newest first by default. Newest/oldest choices sort all filtered results by start date in a single group through `src/lib/project-sort.ts`. Optional representative order groups featured projects first and remaining projects once. All seven filters remain available without duplicate rows.
- Filters and the native sort selector share one row without a full-width divider; narrow screens scroll only the filters horizontally and place sorting on the next row. Redundant total/result counts are removed from the controls; group-heading counts remain. An offscreen live region announces filtering/sorting results. Sort/filter state persists through panel navigation and resets on a fresh visit.
- Local data contains 13 public projects. Representative IDs are `samsung-cia`, `osstem-hybrid`, `nh-investment`, `kyobo-talktalk`, and `samsung-parser-viewer`.
- Local project dates were aligned with the latest resume on2026-11-28: NH2022.02~2022.10, Hana2023.02~2023.07 and Connect Always2023.07~2023.10. Detail copy includes Samsung Securities' AI-assisted Vitest regression-test work and separation of API/type/view responsibilities; Festival Life's outside-work participation and data/API response-format design; Osstem's shared-UI maintenance purpose; CIA's SSE and partial-error behavior; and Kyobo TalkTalk's direct chat/API/state implementation. These `summary`/`highlights` updates preserve list introductions, project IDs, featured order, roles and stacks. Home reads project titles and uses separate approved short roles; detail summaries do not appear there or in About.
- `ProjectCard` renders an accessible button row with display title, company, period, a service introduction, and up to four technologies. Role and contribution-focused summary appear only in detail. The Projects body starts with a Projects heading and a year range derived from loaded project periods, followed by filters and sorting. Rows place the period first, then the title/company and introduction; decorative row numbers and brand marks are removed.
- `ProjectPanel` omits the contributions section when highlights are empty, avoiding a repeated introduction or an empty heading.
- All seven filter definitions and matching rules live in `src/lib/project-filter.ts`. The AI filter uses title/category/stack for the AI token so using an AI coding tool alone does not classify a project as an AI service. Regression tests preserve the current public-project groups and AI token boundaries; the cleanup does not change any classification rule.
- Clicking or keyboard-activating a project opens `ProjectPanel`.
- Hover and keyboard focus highlight the whole project row with the theme's hover color. A scoped Framer Motion shared layout moves the background between rows in 0.6 seconds without a start delay (instant with reduced motion); touch does not set hover. Title underlining is removed, and the existing focus outline remains.
- Project detail open state can also be represented by the `project` query parameter, for example `/projects?project=osstem-hybrid`.
- `ProjectPanel` displays details including company, title, summary, period, role, category, stack, and highlights.
- Contributions use short headings beside the original16px text on desktop (150px title column), and above it on narrow screens. `projectContributionTitle()` in presentation data maps20 exact approved sentences across6projects; unmatched/older DB text retains its original paragraph without an invented heading. The Project type and API contract remain unchanged.
- The detail footer contains only a left-aligned `목록으로` button that invokes the existing close callback. Project-link copying, its status text and manual URL input were removed at the user's request. The close toolbar, focus trap/return and direct project URLs remain supported; closing preserves the list's filter/sort state. Contact email copying remains separate.
- `ProjectPanel` uses a single portaled dialog, visually a mobile bottom sheet and a desktop centered panel. Existing Framer Motion supplies a short opacity/position/scale entry and exit, disabled with reduced motion. The dialog remains mounted through exit, keeping background inertness, scroll lock and focus trapping until cleanup restores focus. It retains internal scrolling and a sticky close toolbar.
- Changing the viewport while detail is open keeps the same dialog and focus behavior.
- Latest navigation/layout implementation and regression verification: `docs/task-log.md` (2026-11-26). Earlier refinement verification: `docs/projects-refinement-qa.md` (2026-11-11); original checks in `docs/type-index-implementation-qa.md`.

## Current Constraints

- Do not introduce a new Drawer, Modal, or separate detail UI unless explicitly requested and documented as a decision.
- Do not add libraries without a documented decision and explicit user approval.
- Keep Projects section changes aligned with the existing `Project` type and `getProjects()` data flow unless a future decision changes that contract.
