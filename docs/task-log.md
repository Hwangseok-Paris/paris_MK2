# Task Log

Use this file to record completed work and future follow-up candidates. Add the newest entry at the top.

## Template

```md
## YYYY-MM-DD - Task Title

Role Flow:
- PM:
- Planner:
- Developer:
- QA:

Summary:
- What changed?

Files:
- Created:
- Modified:
- Not touched:

Verification:
- What was checked?

Open Questions:
- What remains unclear?

Next Candidates:
- What should be considered next?
```

## Log

## 2026-06-07 - Add Project Detail Deep Links

Role Flow:
- PM: Confirmed the desired user flow: home project highlights should preserve project-specific intent instead of linking only to the generic Projects page.
- Planner: Scoped the work to URL-query detail links, existing ProjectPanel reuse, home preview copy/card updates, and documentation.
- Developer: Connected `project` query state to the Projects detail panel, updated Projects card clicks to write project IDs into the URL, and expanded home highlights to three representative project cards.
- QA: Verified static checks plus browser flows for home-to-detail, close behavior, internal Projects card clicks, and invalid project IDs.

Summary:
- Home `Career Highlights` now shows Osstem, Kyobo TalkTalk, and Festivallife representative projects.
- Home project cards link to `/projects?project={projectId}`.
- Projects page opens `ProjectPanel` automatically when the `project` query matches an existing project ID.
- Projects page card clicks update the URL to the selected project deep link.
- Closing the panel removes the `project` query and returns to `/projects`.

Files:
- Created: None.
- Modified: `src/components/sections/ProjectsPreview.tsx`, `src/components/sections/ProjectCards.tsx`, `src/components/projects/ProjectsContainerClient.tsx`, `docs/project-context.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: Project data, routes, package files, lockfiles, public assets.

Verification:
- `npx tsc --noEmit`
- `npm run lint`
- `npm test -- --runInBand`
- `npm run build`
- Browser QA on `http://localhost:3000/`: confirmed three home highlight links and Osstem card opens `/projects?project=osstem-hybrid`.
- Browser QA on `http://localhost:3000/projects`: confirmed closing detail returns to `/projects`, internal Kyobo card click opens `/projects?project=kyobo-talktalk`, and invalid project ID shows the list without a dialog.

Open Questions:
- Whether non-Osstem project copy should be refined before expanding detail-panel structure.

Next Candidates:
- Refine non-Osstem project copy after the separate agent provides updated project data.
- Consider detail-panel IA improvements only after copy quality is strong enough to support problem, contribution, and result sections.

## 2026-06-07 - Clean Build Warnings

Role Flow:
- PM: Confirmed the next maintenance scope should address the existing Next workspace-root, baseline-browser-mapping, and Tailwind module-type build warnings.
- Planner: Scoped the work to build configuration, package metadata, Tailwind config loading, and documentation updates without changing UI, routes, project data, or service behavior.
- Developer: Set an explicit Turbopack root, updated Baseline browser data handling, renamed the Tailwind config to `.mjs`, and updated lint/CSS config references.
- QA: Verified TypeScript, lint, Jest, and production build output.

Summary:
- Added `turbopack.root` to `next.config.ts` so Next.js no longer infers the wrong workspace root from nearby lockfiles.
- Added `baseline-browser-mapping` as a dev dependency and updated it to `2.10.34`.
- Renamed `tailwind.config.ts` to `tailwind.config.mjs` and updated `globals.css` plus the lint script to use the new path.
- Recorded the durable build-warning cleanup decision.

Files:
- Created: `tailwind.config.mjs`.
- Modified: `next.config.ts`, `package.json`, `package-lock.json`, `src/app/globals.css`, `docs/decisions.md`, `docs/task-log.md`.
- Removed: `tailwind.config.ts`.
- Not touched: Project data, Projects UI, routes, service code, public assets.

Verification:
- `npm run dev`, then requested `/` and `/projects`; both returned `200 OK` after clearing stale `.next/dev` cache from the earlier `.mts` attempt.
- `npx tsc --noEmit`
- `npm run lint`
- `npm test -- --runInBand`
- `npm run build` succeeds without the previous Next workspace-root, baseline-browser-mapping, or Tailwind module-type warnings.

Open Questions:
- None for this scope.

Next Candidates:
- Refine non-Osstem project copy after the separate agent provides updated project data.
- Consider dependency audit remediation separately from this warning-cleanup scope.

## 2026-06-07 - Clean Existing Lint Warnings

Role Flow:
- PM: Confirmed Projects copy work is deferred and selected the existing lint warnings as the next maintenance task.
- Planner: Scoped the work to warning cleanup without changing project data, UI structure, package files, or adding libraries.
- Developer: Removed unused imports/state/parameters, removed an obsolete eslint-disable comment, and moved BackgroundCanvas constants/helpers outside the component to satisfy hook dependency rules.
- QA: Verified lint, TypeScript, tests, and production build.

Summary:
- Removed the unused `History` import from the About page.
- Removed unused local theme state from `ThemeToggle`.
- Removed unused `idx` callback parameters from the home `History` animation logic.
- Stabilized `BackgroundCanvas` effect dependencies by moving static tunables, color palettes, and helpers to module scope.
- Removed an obsolete eslint-disable comment from `src/lib/db.ts`.

Files:
- Created: None.
- Modified: `src/app/(pages)/about/page.tsx`, `src/components/common/ThemeToggle.tsx`, `src/components/home/History.tsx`, `src/components/sections/BackgroundCanvas.tsx`, `src/lib/db.ts`, `docs/task-log.md`.
- Not touched: Project data, Projects UI, routes, package files, lockfiles, public assets.

Verification:
- `npm run lint` passes with 0 warnings.
- `npx tsc --noEmit`
- `npm test -- --runInBand`
- `npm run build` succeeds with existing Next workspace-root, baseline-browser-mapping, and Tailwind module-type warnings.

Open Questions:
- None for this scope.

Next Candidates:
- Resolve the existing Next workspace root inference warning caused by multiple lockfiles.
- Decide whether to address baseline-browser-mapping and Tailwind module-type build warnings separately.
- Refine non-Osstem project copy after the separate agent provides updated project data.

## 2026-06-07 - Projects Responsive QA and Visual Fixes

Role Flow:
- PM: Confirmed that non-Osstem project copy refinement is deferred until separate project data is provided, and scoped this cycle to Projects responsive QA.
- Planner: Focused verification on `/projects` desktop, tablet, and mobile behavior without changing the data model, filters, or adding libraries.
- Developer: Fixed the missing light-mode page background/text baseline, improved Projects card surface visibility, and constrained ProjectPanel content scrolling on mobile.
- QA: Verified responsive layouts, filter behavior, dialog focus/close behavior, mobile bottom-sheet scrolling, static checks, tests, and build.

Summary:
- Added explicit light-mode `body` background and text color so Projects content does not render as black text over a transparent/dark browser background.
- Added a visible light-mode gradient surface to project cards while keeping the existing dark-mode style.
- Removed excessive mobile bottom-sheet padding and applied max-height directly to ProjectPanel content so long project details scroll internally.
- Confirmed mobile Stack content is reachable by scrolling inside the bottom sheet.

Files:
- Created: None.
- Modified: `src/app/layout.tsx`, `src/components/projects/ProjectCard.tsx`, `src/components/projects/ProjectPanel.tsx`, `docs/task-log.md`.
- Not touched: `src/constants/projects.ts`, project copy for non-Osstem entries, filters, routes, package files, lockfiles, public assets.

Verification:
- Browser QA on `/projects` at 1440x900, 768x1024, and 375x812.
- Checked no horizontal overflow in desktop, tablet, and mobile viewports.
- Checked Featured card layout, filter wrapping, filter active state, desktop dialog open/close, body scroll lock, close-button focus, and focus restoration.
- Checked mobile bottom-sheet open/close and internal scroll to the Stack section.
- `npx tsc --noEmit`
- `npm run lint` passes with 12 existing warnings.
- `npm test -- --runInBand`
- `npm run build` succeeds with existing Next workspace-root, baseline-browser-mapping, and Tailwind module-type warnings.

Open Questions:
- None for this QA scope.

Next Candidates:
- Refine non-Osstem project copy after the separate agent provides updated project data.
- Clean existing lint warnings in About, ThemeToggle, History, BackgroundCanvas, and `src/lib/db.ts`.
- Resolve the existing Next workspace root inference warning caused by multiple lockfiles.
- Consider structured project metadata later only if component-level filtering and copy management become hard to maintain.

## 2026-06-06 - Improve Projects Information Architecture

Role Flow:
- PM: Confirmed the first information-architecture scope: featured projects, career-axis filters, frontend positioning, and no project data model change today.
- Planner: Kept the existing `Project` data shape and scoped the implementation to component-internal constants plus display order changes.
- Developer: Added a role-focused Projects header, Featured Projects section, filter controls, and reordered project cards/details for recruiter scanning.
- QA: Verified static checks, tests, build, and browser behavior for the Projects page.

Summary:
- Added career-positioning copy and focus chips to the Projects header.
- Added Featured Projects for Osstem, Festivallife, Kyobo TalkTalk, and NH Investment.
- Added filters: All, representative, ownership/solo work, realtime consulting, finance/insurance, hybrid/app, and AI/Voice.
- Reordered cards and detail panels so company/category, title, role, summary, contributions, stack, and period are easier to scan.
- Kept the existing project data model and avoided new libraries.

Files:
- Created: None.
- Modified: `src/components/projects/ProjectsHeader.tsx`, `src/components/projects/ProjectsContainerClient.tsx`, `src/components/projects/ProjectCard.tsx`, `src/components/projects/ProjectPanel.tsx`, `docs/task-log.md`.
- Not touched: `src/constants/projects.ts`, routes, package files, lockfiles, public assets.

Verification:
- `npx tsc --noEmit`
- `npm run lint`
- `npm test -- --runInBand`
- `npm run build`
- Browser QA on `/projects` for featured projects, filters, dialog open/close, focus restoration, and desktop overflow.
- Reviewed responsive Tailwind classes for wrapping filters and one-column mobile grids; direct mobile viewport QA was not available in the current in-app browser session.

Open Questions:
- Whether each project should later expose structured fields such as problem, role, contribution, result, ownership level, and impact.

Next Candidates:
- Add richer project metadata only when the current component-level filtering becomes hard to maintain.
- Refine copy for non-Osstem projects so each card has a sharper problem, role, contribution, and result narrative.
- Run direct mobile viewport QA in a resizable browser or device preview before finalizing visual polish.
- Review Projects visual density after real browser QA and decide whether Featured should be 2-column or 4-column on wide screens.

## 2026-06-06 - Record Korean Commit Message Rule

Role Flow:
- PM: Confirmed that commit messages should be Korean and include useful content where possible.
- Planner: Scoped the change to repository workflow documentation.
- Developer: Added commit message guidance to `AGENTS.md` and recorded the durable decision.
- QA: Checked that this is documentation-only and should not affect service code.

Summary:
- Future commits should use Korean commit messages by default.
- Commit bodies should summarize important changes, reasons, verification, or follow-up notes when relevant.
- Unrelated `.DS_Store` changes should stay out of commits unless explicitly requested.

Files:
- Created: None.
- Modified: `AGENTS.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: `src`, `app`, `components`, `styles`, `public`, lockfiles.

Verification:
- Documentation review only.

Open Questions:
- None.

Next Candidates:
- Apply this commit style to the current Projects quick fixes commit.

## 2026-06-06 - Refine Osstem Project Career Data

Role Flow:
- PM: Confirmed that career data should be clarified before changing the Projects information architecture.
- Planner: Scoped the change to the existing `Project` data shape without adding new fields or changing UI structure.
- Developer: Updated the Osstem hybrid app project copy to reflect solo ownership of the Android/iOS app and mobile web integration scope, bridge work, deployment support, and handoff documentation.
- QA: Checked that the content stays within the existing project data contract.

Summary:
- Repositioned the Osstem project as an existing Full WebView app refactor into a Partial Hybrid structure.
- Refined the public project title to `오스템 모바일 앱 프레임워크 구축`.
- Added Kotlin, Swift, SwiftUI, WKWebView, WebView Bridge, and TestFlight to the displayed stack.
- Clarified that the work included sole responsibility for the Android/iOS app and mobile web integration scope, from requirements through design, implementation, verification, deployment support, web channel guide support, and AOS/iOS handoff documentation.

Files:
- Created: None.
- Modified: `src/constants/projects.ts`, `docs/task-log.md`.
- Not touched: UI components, routes, `getProjects()` data flow, package files, lockfiles.

Verification:
- Confirmed the iOS source evidence from `/Users/paris/Documents/Codeclick/osstem/osstem-app_ios` before writing the portfolio copy.

Open Questions:
- Whether to explicitly mention AI-assisted iOS workflow in the public portfolio copy. Current copy omits it to avoid distracting from the accountable work scope.

Next Candidates:
- Restructure Projects page around career data: featured projects, role/impact-first cards, and detailed sections for problem, role, contribution, and result.
- Add richer project fields later only if the UI needs them, such as `impact`, `problem`, `contribution`, `result`, and `featured`.

## 2026-06-06 - Projects Quick Accessibility Fixes

Role Flow:
- PM: Confirmed the first implementation scope: remove `/privacy`, keep the current ProjectPanel structure, include home featured card linking, and fix validation scripts.
- Planner: Scoped changes to existing Projects, home preview, Footer, package scripts, and Jest configuration without adding libraries.
- Developer: Removed nested project card controls, improved ProjectPanel dialog behavior, linked the featured project card, removed the missing privacy link, and fixed lint/test generated-file scanning.
- QA: Ran static checks, tests, build, and browser checks for desktop and mobile Projects interactions.

Summary:
- Projects cards now use one native button per project instead of a `role="button"` wrapper around another button.
- ProjectPanel now renders only while open, has dialog labels, focuses the close button on open, traps Tab within the active dialog, locks body scroll, and restores focus to the triggering card on close.
- Home featured project cards now link to `/projects` when a `path` is provided.
- Footer no longer links to the missing `/privacy` route.
- `npm run lint` now runs ESLint against source/config files instead of generated `.next` output.
- Jest now ignores `.next` output to avoid haste-map package collisions after builds.

Files:
- Created: None.
- Modified: `src/components/projects/ProjectsContainerClient.tsx`, `src/components/projects/ProjectCard.tsx`, `src/components/projects/ProjectPanel.tsx`, `src/components/sections/ProjectCards.tsx`, `src/components/Footer.tsx`, `package.json`, `jest.config.ts`, `docs/task-log.md`.
- Not touched: Project data model, `getProjects()` data flow, routes, lockfiles, public assets.

Verification:
- `npx tsc --noEmit`
- `npm run lint` passes with 12 existing warnings.
- `npm test -- --runInBand`
- `npm run build`
- Browser QA on `/projects`: no nested project buttons, no closed dialog in DOM, dialog label exists, focus moves to close button, Escape close restores focus to the triggering card.
- Browser QA on mobile `/projects`: no horizontal overflow at 375px, one visible bottom-sheet dialog, close restores focus.
- Browser QA on `/`: featured project card links to `/projects`; no `/privacy` links remain.

Open Questions:
- None for this scope.

Next Candidates:
- Decide and implement Projects information architecture improvements: representative project emphasis, category/stack filtering, current-project signaling, and stronger outcome summaries.
- Clean existing lint warnings in About, ThemeToggle, History, BackgroundCanvas, and `src/lib/db.ts`.
- Address performance/accessibility risks in `BackgroundCanvas`, especially `prefers-reduced-motion` and resize handling.
- Resolve build warning about Next workspace root inference caused by multiple lockfiles.
- Review About/Contact semantic structure, including `ul` child structure and nested `main`.

## 2026-06-06 - Document PM Approval and Follow-up Workflow

Role Flow:
- PM: Confirmed that future work should start with stronger PM questioning, current-state verification, and unresolved-item tracking.
- Planner: Scoped the change to repository workflow documentation only.
- Developer: Updated `AGENTS.md` and recorded the durable workflow decision.
- QA: Verified the change is documentation-only and does not touch service code.

Summary:
- Added a rule that implementation starts only after explicit user approval.
- Added a rule that PM must keep track of deferred issues and raise them again in the next related planning step.

Files:
- Created: None.
- Modified: `AGENTS.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: `src`, `app`, `components`, `styles`, `public`, `package.json`, lockfiles.

Verification:
- Reviewed the edited documentation for scope and consistency with the existing portfolio cycle.

Open Questions:
- None.

Next Candidates:
- Use this workflow when planning the Projects quick fixes branch.
