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
