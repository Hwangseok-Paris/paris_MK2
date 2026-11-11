# AGENTS.md

This document defines the working rules Codex must follow in this portfolio repository.

## Startup Checklist

Before doing portfolio repository work, Codex must read these files first:

- `AGENTS.md`
- `docs/project-context.md`
- `agents/pm-agent.md`
- `agents/planner-agent.md`
- `agents/developer-agent.md`
- `agents/qa-agent.md`
- `workflows/portfolio-cycle.md`

After reading them, Codex should follow the documented PM, Planner, Developer, and QA responsibilities according to the requested scope.

The user does not need to repeat this checklist in every request. Treat it as the default workflow for this repository.

For portfolio improvement tasks, also read `docs/portfolio-improvement-plan.md`, relevant decisions in `docs/decisions.md`, and the latest related entries in `docs/task-log.md`. Resume from the recorded progress and deferred items instead of restarting the review.

## Project Rules

- Treat this repository as a Next.js, TypeScript, Tailwind portfolio project.
- Read the current repository structure before proposing or implementing changes.
- Before implementation work, run the PM step first: clarify the goal, verify current behavior, identify missing decisions, and ask the user enough questions to avoid preventable omissions.
- Do not start implementation just because the user describes a desired change. Start Developer work only after the user explicitly approves the planned work or says to start.
- When a task has multiple discovered issues or improvement candidates, the PM must keep track of unresolved items. If only the highest-priority items are implemented, report the remaining items as follow-up candidates in the current result and bring them up again when planning the next related task.
- Prefer existing code patterns, component boundaries, routing structure, and styling conventions.
- Do not add libraries unless the user explicitly asks for it and the reason is documented.
- If a new library may be needed, present candidate libraries first with each library's purpose, main features, pros, cons, and fit for this project.
- Wait for the user's explicit decision before installing, adding, or importing any new library.
- Do not modify service code when the task is documentation-only.
- Do not modify `src`, `app`, `components`, `styles`, `public`, `package.json`, or lockfiles unless the user explicitly requests implementation work.
- Do not invent UI structures that are not present in the repository.
- For Projects section work, confirm the current implementation before writing requirements or decisions.
- Keep documentation practical and easy to update over time.
- Record durable decisions in `docs/decisions.md`.
- Record completed work and follow-up candidates in `docs/task-log.md`.

## Content and Design Guidelines

- Write public copy in plain, specific language based on the user's actual work. Avoid abstract slogans, generic promises, and unnecessary English capability labels. Review final wording in the user's voice.
- Do not reuse wording the user has rejected. The rejected introduction and its context are recorded in `docs/decisions.md`.
- Do not invent project dates, responsibilities, achievements, metrics, or public-release permissions. Distinguish the user's contribution from the team's work and initial setup from full implementation.
- The user will provide detailed career information when the relevant content task starts. Use the known project list in `docs/portfolio-improvement-plan.md`; do not repeatedly request all missing details during unrelated work.
- Do not present work with no actual contribution as a performed project or achievement. Keep the Roche participation note and the proposal to defer public inclusion separate from approved public content.
- Design around content hierarchy, typography, reading width, spacing, and actual work evidence. Avoid using the same rounded card, badge collection, gradient, glow, or entrance animation as the default treatment for every section.
- Use cards where grouping or comparison helps the reader. Use motion to clarify actions and state changes; account for reduced-motion preferences. Visual variety must support the reading order.
- Validate proposed design changes with real content in desktop and mobile views before implementing the agreed scope. Recommendations and review comments are not approved designs by themselves.
- Preserve project filters, deep links, the existing detail panel, and keyboard behavior unless an approved task explicitly changes them.

## Notion Task Tracking

- Use the existing Notion `Tasks` database and its `프로젝트` classification `포트폴리오` for this repository's tasks. Connection details and task conventions are in `workflows/portfolio-cycle.md`.
- When task registration is requested, check for duplicates and the current database schema first. Keep each task's objective, scope, dependencies, relevant files, and completion criteria traceable to the repository plan.
- Use repository documents for implementation scope and durable decisions, and Notion for task progress. Keep both aligned at meaningful work milestones; do not claim automatic synchronization.
- Task registration, classification creation, and planning do not authorize service implementation. Follow the user's actual approval and existing scope; do not request the same approval again when it has already been given.
- Do not invent deadlines, assignees, approval states, or completed work. Report Notion writes as successful only after checking the tool result.

## Multi-Agent Roles

Use the following role documents when planning portfolio improvements:

- PM: `agents/pm-agent.md`
- Planner: `agents/planner-agent.md`
- Developer: `agents/developer-agent.md`
- QA: `agents/qa-agent.md`

The normal workflow is defined in `workflows/portfolio-cycle.md`.

## Documentation Boundaries

- `docs/project-context.md` stores stable project context and current implementation facts.
- `docs/decisions.md` stores decisions that should survive across sessions.
- `docs/task-log.md` stores work history, outcomes, and suggested next steps.
- `docs/portfolio-improvement-plan.md` stores the staged improvement plan, known career inputs, prerequisites, and completion criteria. Proposed work must remain distinct from approved or completed work.
- `workflows/portfolio-cycle.md` stores the working sequence and Notion Task tracking conventions.
- Agent files define role responsibilities, inputs, outputs, and prohibitions.

## Git and Commit Rules

- Write commit messages in Korean by default.
- Prefer a concise Korean title plus a commit body that explains the main changes.
- Keep the commit body practical: mention what changed, why it changed, and important verification or follow-up notes when relevant.
- Do not include unrelated local metadata changes such as `.DS_Store` unless the user explicitly asks.

## Output Expectations

When Codex finishes a repository task, it should report:

- Files created or modified.
- Whether service code changed.
- What verification was performed.
- Suggested next steps, without starting extra work unless requested.
