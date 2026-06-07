# Decisions

Use this file to record durable project decisions. Add the newest decision at the top.

## Template

```md
## YYYY-MM-DD - Decision Title

Status: Proposed | Accepted | Rejected | Superseded

Context:
- What problem or opportunity led to this decision?

Decision:
- What was decided?

Rationale:
- Why is this the right choice for now?

Impact:
- What files, UX areas, workflows, or constraints are affected?

Follow-up:
- What should be checked or done later?
```

## Decision Log

## 2026-06-07 - Build Warning Configuration Cleanup

Status: Accepted

Context:
- `npm run build` emitted warnings for Next.js workspace root inference, stale `baseline-browser-mapping` data, and Tailwind config module type detection.
- The warnings did not break the build, but they made verification output noisy and could hide future build issues.

Decision:
- Set `turbopack.root` explicitly in `next.config.ts`.
- Track `baseline-browser-mapping` directly as a dev dependency so the Baseline browser data can be kept current.
- Rename the Tailwind config from `tailwind.config.ts` to `tailwind.config.mjs` instead of adding `"type": "module"` to the whole package.

Rationale:
- Explicit Turbopack root keeps Next.js from selecting the wrong parent directory when multiple lockfiles exist nearby.
- Directly tracking `baseline-browser-mapping` resolves the stale-data warning without changing runtime application code.
- Using `.mjs` scopes ESM treatment to the Tailwind config and avoids broader side effects on scripts such as the standalone start command and Jest's Next config loading.

Impact:
- Affects build configuration, lint target configuration, Tailwind config loading, and package metadata.
- Does not change portfolio UI, project data, routing, or service behavior.

Follow-up:
- Keep `baseline-browser-mapping` updated during dependency maintenance.
- Re-check build output after future Next.js or Tailwind upgrades.

## 2026-06-06 - Korean Commit Messages with Body

Status: Accepted

Context:
- The portfolio repository should keep commit history readable for the user.
- Short English-only commit messages can hide useful implementation context.

Decision:
- Codex should write commit messages in Korean by default.
- Commits should preferably include a concise Korean title and a body that summarizes the important changes, reasons, verification, or follow-up notes.
- Unrelated local metadata changes such as `.DS_Store` should not be included unless explicitly requested.

Rationale:
- Korean commit messages fit the user's working style and make repository history easier to review.
- A body with meaningful content preserves the reasoning behind portfolio changes without requiring the user to inspect every diff.

Impact:
- Applies to future commits in this repository.
- Affects Codex git workflow and final reports.

Follow-up:
- Keep commit messages scoped to the actual staged changes.

## 2026-06-06 - PM Approval Gate and Follow-up Tracking

Status: Accepted

Context:
- Portfolio improvement work can involve several UX, accessibility, structure, performance, and maintainability issues at once.
- If Codex starts implementation too early, it may miss decisions the user has not made yet or leave lower-priority items invisible after completing only the first set of fixes.

Decision:
- Codex must run the PM step before implementation work: clarify the goal, verify the current implementation, identify missing decisions, and ask the user enough questions to catch likely omissions.
- Codex must wait for explicit user approval before starting Developer work.
- When only part of a larger issue list is implemented, Codex must keep the unresolved items visible as follow-up candidates and mention them again during the next related planning step.

Rationale:
- This keeps main portfolio work intentional, avoids accidental scope expansion, and helps the user make decisions with enough context.
- Follow-up tracking prevents important but deferred work from being forgotten across sessions.

Impact:
- Affects `AGENTS.md`, PM planning behavior, task summaries, and follow-up recommendations.
- Applies to Projects section work and general portfolio improvements.

Follow-up:
- Use `docs/task-log.md` to record completed work and remaining candidates after each implementation cycle.
