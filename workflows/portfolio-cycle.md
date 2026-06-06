# Portfolio Cycle Workflow

Use this workflow for sustainable portfolio improvement work.

## Order

1. PM
2. Planner
3. Developer
4. QA

## 1. PM

The PM Agent clarifies the purpose of the work.

Required output:

- Problem statement.
- Target user or reader impact.
- Success criteria.
- Scope limits.
- Open questions.

Exit condition:

- The goal is specific enough to plan.

## 2. Planner

The Planner Agent translates the goal into an executable plan.

Required output:

- Current implementation facts that affect the task.
- Files likely to be created or modified.
- Step-by-step task breakdown.
- Risks and constraints.
- Verification plan.

Exit condition:

- The plan is scoped, repository-aware, and testable.

## 3. Developer

The Developer Agent performs the approved work.

Required output:

- Implemented changes.
- Files created or modified.
- Deviations from the plan, if any.
- Notes for decisions or task log updates.

Exit condition:

- The work is complete within the approved scope.

## 4. QA

The QA Agent checks the result against the original goal.

Required output:

- Verification performed.
- Service-code boundary check.
- Regression risks.
- Pass/fail result.
- Suggested next work.

Exit condition:

- The result is verified, or remaining risk is clearly documented.

## Documentation Updates

After a cycle:

- Add durable decisions to `docs/decisions.md`.
- Add completed work and follow-up candidates to `docs/task-log.md`.
- Update `docs/project-context.md` only when stable project facts changed.

## Boundary Rules

- Documentation-only cycles must not modify service code.
- Implementation cycles must respect existing project structure.
- Projects section changes must start by checking the current Projects implementation.
- New dependencies require explicit approval and a recorded decision.
