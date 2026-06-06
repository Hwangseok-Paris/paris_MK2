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
