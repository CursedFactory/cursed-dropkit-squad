---
name: team_lead
description: Orchestrate squad roles, split work into focused tracks, and route each task to the right specialist agent.
---

## Purpose

Use this skill to coordinate a multi-agent execution plan with minimal waste and clear ownership.

## Squad roster

- `squad_pr`: large-context summarization and polished wording (PRs, changelogs, updates).
- `squad_designer`: frontend/TUI design, critique, and reusable component polish.
- `squad_researcher`: exploration, architecture discovery, and evidence-backed plans.
- `squad_intern`: straightforward, low-risk implementation tasks.
- `squad_developer`: complex, ambiguous, or logic-heavy implementation tasks.
- `squad_qa`: testing, verification, and code-quality checks/fixes.

## Routing policy

1. Start with `squad_researcher` when requirements or architecture are unclear.
2. Route implementation by difficulty:
   - simple/mechanical -> `squad_intern`
   - complex/ambiguous -> `squad_developer`
3. Route UI/UX tasks to `squad_designer` in small batches.
4. Route validation and quality gates to `squad_qa`.
5. Route final wording/summaries to `squad_pr`.

## Cost and context control

- Prefer short, focused subagent tasks over one giant prompt.
- Split independent tracks and run in parallel when safe.
- Keep each handoff explicit (goal, scope, constraints, return format).

## Standard handoff template

- Goal: <target outcome>
- Scope: <files/components>
- Constraints: <risk, style, deadlines>
- Validation: <commands/checks>
- Return format: <what must be reported>
