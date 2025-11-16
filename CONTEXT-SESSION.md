# Session Context

Started: 2025-11-12T17:30:00Z

## Related

- [CHANGELOG.md](CHANGELOG.md)
- [TODO.md](TODO.md)

<!-- BEGIN:COPILOT_INSTRUCTIONS -->

## Copilot Instructions

Purpose and Scope

- Use this file as the active session hub: capture current focus, short-term plans, quick notes, and links. Keep it skim-friendly and up to date.
- Do not duplicate tasks or logs here. Tasks live in `TODO.md`. Logs and verification live in `CHANGELOG.md`.

Authoritative Relationships

- Source of truth for tasks: `TODO.md` (Current/Next/Backlog/Completed). Reflect changing priorities here, not in this file.
- Source of truth for history and verification: `CHANGELOG.md`. Every meaningful change should be logged with a Verification block.
- Transient thinking and branch plans belong in this file under the Notes area, and should be cleaned up regularly.

Editing Rules

- Maintain these markers: `<!-- BEGIN:CURRENT-FOCUS-SUMMARY -->`, `<!-- BEGIN:CURRENT-FOCUS-DETAIL -->`, and `<!-- BEGIN:CONTEXT-SESSION-LLM-THINKING-NOTES-AREA -->`.
- Update the Focus Summary first; keep it concise (3–5 bullets). Use the Focus Detail section for phases, risks, constraints, and immediate actions.
- When plans change, update `TODO.md` first, then reflect the change here. Add a corresponding CHANGELOG entry after verification.
- Rotate/trim Notes frequently. Leave breadcrumbs that link to relevant CHANGELOG entries or TODO items.

Workflow Expectations

- Start of session: Read `TODO.md` (Current/Next), skim latest day in `CHANGELOG.md`, update Focus Summary/Detail.
- Implementation cadence: Make minimal, focused edits. Run `npm run compile && npm test`. If touching docs or governance, consider `npm run prebuild`.
- After changes: Add a CHANGELOG entry with Problem/Context, Changes Made, Testing, Impact, and a Verification block.
- Hygiene: Prefer American English; avoid “above/below” references; wrap file paths and commands in backticks.

Formatting Conventions

- Section titles in Title Case. Bullets should be short, action-oriented, and grouped by theme.
- Use fenced code blocks with language tags for commands and examples.
- Do not embed long code or logs here—link to files/tests and summarize outcomes.

<!-- END:COPILOT_INSTRUCTIONS -->
<!-- BEGIN:CURRENT-FOCUS-SUMMARY -->

## Current Focus Summary

- Focus: types purity refactor in `src/types/**` as the first step of the integrity review.
- Goal: fully enforce types-only behavior and shared-runtime boundaries before deeper server/agent review.
- Scope (immediate): `src/types/**`, `src/shared/**` helpers, and associated tests/docs.
- Scope (next): broader `src/**` integrity review and MCP server checklist already documented below.
- Status: repo-ops/changelog stabilization merged; TODOs reshuffled so Types Purity is Current P1 and integrity review is the next P1.

<!-- END:CURRENT-FOCUS-SUMMARY -->
<!-- BEGIN:CURRENT-FOCUS-DETAIL -->

## Current Focus Detail

### Integrity Review – `src/**` and MCP Server

Objective: Perform a structured integrity review of the core MCP server and agent infrastructure under `src/**` before further feature work.

Key Constraints

- Agent isolation: orchestrator coordinates; agents return typed data only; formatting stays in `CommunicationAgent`.
- Data-driven behavior: no hardcoded business values; derive categories, IDs, and examples from config/runtime data.
- Single JSON-RPC dispatcher reused across transports; stdio default, HTTP guarded by env.
- TypeScript-only code for agents, server, and validation harnesses.

Initial Pass Targets (Granular Checklist)

1. Server (`src/server/**`)

- JSON-RPC dispatcher integrity:
  - Confirm a single dispatcher handles `initialize`, `tools/list`, and `tools/call` for both stdio and HTTP.
  - Verify error shapes match JSON-RPC 2.0 (codes, messages, `data` usage) and are stable across transports.
  - Check that unsupported methods and invalid params never leak stack traces or internal details.
- Transport guards and configuration:
  - Ensure stdio is the default transport; HTTP only enabled behind `MCP_HTTP_ENABLED`.
  - Confirm there is no per-transport divergence in logic (only path/wiring differences).
- Dynamic tools registry:
  - Verify `getTools` resolves tool descriptors exclusively from orchestrator/config, with no hardcoded arrays or business IDs.
  - Confirm tools reported in `tools/list` have consistent schemas and names with orchestrator definitions.
- Logging and failure modes:
  - Check server logging is structured and not excessively noisy under normal operation.
  - Confirm catastrophic errors fail gracefully and do not wedge the process.

1. Agents (`src/agent/**`)

- Isolation and responsibilities:
  - Confirm no agent imports another agent directly; all coordination flows through the orchestrator.
  - Ensure `CommunicationAgent` is formatting-only, with no hidden data access or config writes.
  - Verify `ClarificationAgent`, `DatabaseAgent`, `DataAgent`, and `UserContextAgent` consume only typed config/manifest data.
- Config-driven behavior (no hardcoding):
  - Audit for hardcoded category IDs, names, or business strings; ensure they all come from configuration or descriptors.
  - Confirm `ClarificationAgent` examples/capabilities are derived from config/manifest only.
  - Validate `DatabaseAgent` operators and queries rely on schema and config metadata, not inline business assumptions.
- Error handling and telemetry:
  - Verify agents do not throw unhandled errors for expected edge cases (missing categories, malformed records, etc.).
  - Check telemetry/logging paths for sensitive data and volume; ensure they align with governance.
- UserContextAgent data roots:
  - Confirm data-root detection and external override behavior are deterministic, documented, and safe when directories are missing.
  - Review cache/snapshot behavior so corruption and partial failures are handled via warnings, not crashes.

1. Shared helpers (`src/shared/**`)

- Config and validation modules:
  - Confirm `shared/config/**` and `shared/validation/**` contain all runtime logic previously extracted from `src/types/**`.
  - Cross-check descriptor maps, runtime config helpers, and validator implementations for no hardcoded business IDs or category names.
  - Ensure error reporting and result shapes are consistent and documented.
- Environment and IDs:
  - Verify `env.ts` derives names and cache directories consistently and matches docs/README.
  - Confirm `ids.ts` remains the single source of truth for IDs shared between manifest/config and extension contributions.
- Analytics and logging utilities:
  - Audit analytics and workflow logging helpers for respect of configuration toggles.
  - Ensure safe behavior when telemetry sinks fail or are unavailable.
  - Check there are no circular dependencies with agents or server.

1. Types (`src/types/**`)

- Types-only enforcement:
  - Confirm no runtime logic remains in `src/types/**` beyond explicitly allowed patterns.
  - Ensure `types.purity.test.ts` covers the current set of forbidden patterns and matches shared validation moves.
- TSDoc and clarity:
  - Spot-check high-traffic type surfaces (agentConfig, applicationConfig, userContext.types, workflow.types) for clear, accurate TSDoc.
  - Verify there are no stale references to pre-refactor locations (e.g., validators now in `src/shared/**`).

1. MCP config and docs (`src/mcp/**`, `src/docs/**`)

- Schema and validation:
  - Confirm `schemaUtils` checks align with the latest category/relationship definitions and errors are actionable.
  - Ensure knowledge base utilities do not assume specific categories or datasets.
- Prompts and manifest:
  - Verify prompt generators use manifest data and do not embed hardcoded business examples.
  - Check that manifest metadata for each agent is consistent with orchestrator/agent behavior and the dynamic tools registry.

1. Extension integration (`src/extension/**`)

- MCP registration:
  - Confirm MCP registration logic points to the correct config locations on all platforms (including Insiders/OSS variants).
  - Ensure registration removal/refresh paths do not leave stale entries.
- Cache and logs:
  - Verify extension-level cache behavior matches the hidden cache directory pattern and cannot corrupt user data.
  - Check that log volume and locations are reasonable for typical VS Code usage.

1. Tests as guardrails (`tests/**`)

- Coverage and gaps:
  - Map each of the above areas to existing tests (server/orchestrator, agents, shared/config/validation).
  - Identify critical paths in `src/server/**` or `src/agent/**` that currently lack direct test coverage.
- Repo-ops and governance:
  - Use `repoOps.*.test.ts` and `sessionLint` tests to keep governance tooling aligned, while keeping the primary focus on `src/**` integrity.

<!-- END:CURRENT-FOCUS-DETAIL -->
<!-- BEGIN:CONTEXT-SESSION-LLM-THINKING-NOTES-AREA -->

### Notes – Integrity Review Context (2025-11-15)

- Branch state: `feat/changelog-repo-ops-stabilization` merged into `develop`; repo-ops changelog semantics and backups stabilized.
- Current priority has shifted from repo-ops internals to a `src/**` integrity review, with Types Purity refactor in `src/types/**` designated as the first concrete step.
- The checklist in the Focus Detail section is the authoritative high-level reference for what the integrity review should cover; the Types Purity work burns down the `src/types/**` and shared-runtime pieces first.
- `TODO.md` has been reshuffled so Types Purity is the Current P1 and the broader MCP Server & `src/**` integrity review is the next P1, preserving the detailed checklist for that phase.

<!-- END:CONTEXT-SESSION-LLM-THINKING-NOTES-AREA -->
