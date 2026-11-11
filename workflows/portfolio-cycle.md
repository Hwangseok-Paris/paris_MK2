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
- Keep `docs/portfolio-improvement-plan.md` aligned with approved scope and remaining work. Do not mark a stage complete merely because its task was registered.

## Notion Task Tracking

### Destination

- Database: [Tasks](https://app.notion.com/p/a62b464b03884628bcb00e93ab79530b).
- Database ID: `a62b464b-0388-4628-bcb0-0e93ab79530b`.
- Data source: `collection://e0b0e9ee-1282-4e6c-8c2f-dbd8722d48fa`.
- Project property: `프로젝트` (select), value: `포트폴리오`. This option was added and verified on 2026-11-04; preserve other project options.
- Fetch the current schema before writes. Do not recreate the database or use `기타` when the dedicated classification is available.

### Task Registration

When the user requests registration:

1. Check for existing portfolio tasks covering the same scope.
2. Start from the eight stages in `docs/portfolio-improvement-plan.md`. Use an independently verifiable deliverable as the task boundary; keep smaller steps as checklists and split a stage if needed at execution time.
3. Set `프로젝트` to `포트폴리오`. Use `제안됨` for proposed, unapproved work under the current schema; a registration request alone does not make work approved or complete.
4. Include objective, scope, known facts, unresolved decisions, prerequisite tasks, relevant files, completion criteria, and verification in the task content. Use dependency links after task URLs exist; do not invent relation properties.
5. Record repository path `/Users/paris/Documents/Dev/paris_MK2` in `리포 경로`, relevant paths in `관련 파일`, and the source plan in `참고 문서`. A local file path is a reference for the local workspace, not a remotely accessible Notion attachment.
6. Leave deadlines, assignees, and completion dates unset unless established by the user or actual completion. Use existing type/priority options only when supported by the task's scope and agreed priority.
7. Verify the returned task properties/content and record the resulting task IDs or URLs with the corresponding plan stage or work-log entry.

Use confirmed planning information and relevant local references in the task content. Confirm missing career facts when the corresponding content task starts.

### Progress and Source of Truth

- Repository plan: work order, implementation boundaries, acceptance criteria, and known career inputs.
- `docs/decisions.md`: accepted decisions and rationale. Keep proposals visibly labeled as proposals.
- `docs/task-log.md`: work performed, verification results, unresolved items, and Notion task references.
- Notion Tasks: current task status, dependencies, concise outcome, and follow-up items.
- Before a related task, read its current Notion record when available and the matching repository documents. If scopes or statuses conflict, reconcile the evidence and ask only about decisions that actually block the work.
- Update Notion at meaningful transitions when tracking that task is authorized. Do not mark work `완료` before its completion criteria and verification are met; use the database's actual option names.
- If Notion is unavailable, continue already-authorized independent local work, keep the local record, and report the unsynced update. Do not claim the remote record changed.

### Current Registration State (2026-11-04)

- The `포트폴리오` classification exists.
- Eight portfolio Task records have been created and verified: `TASK-255` through `TASK-262`. Their links are listed in `docs/portfolio-improvement-plan.md`.
- All eight were registered as `제안됨`; registration does not mark any implementation stage complete. Check the actual Notion record for subsequent status changes.
- New career details are intentionally deferred until the related content work. Four project outlines are already recorded in the plan; do not ask for that list again.

## Boundary Rules

- Documentation-only cycles must not modify service code.
- Implementation cycles must respect existing project structure.
- Projects section changes must start by checking the current Projects implementation.
- New dependencies require explicit approval and a recorded decision.
