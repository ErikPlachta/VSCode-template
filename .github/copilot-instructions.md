# Copilot Chat Governance (Overhaul)

<!-- Replaced with the approved governance overhaul on 2025-11-13 -->

This document codifies the operational rules, architecture guardrails, and day-to-day workflows for developing and maintaining this VS Code extension with embedded MCP server. It is designed for LLM-friendly consumption with explicit constraints to prevent drift.

Use American English throughout.

---

## Critical Operating Rules

- Agent isolation: Only the Orchestrator coordinates agents; agents return typed data only. All user-facing formatting is owned by CommunicationAgent.
- Data-driven by default: No hardcoded business values. Derive categories, fields, and examples from configuration or loaded data.
- Configuration is source of truth: Never commit `src/mcp.config.json`. Generated artifacts live under `out/` only.
- Types-only in `src/types/**`: No runtime functions in types. Shared helpers live under `src/shared/**`.
- Two-file agent standard: Each agent folder contains `agent.config.ts` and `index.ts` only.
- ESM pathing: Use `fileURLToPath` + `path.dirname` instead of `__dirname`/`__filename`.

Data flow pattern:

```text
User → Orchestrator → Agent (typed data) → Orchestrator → CommunicationAgent (format) → User
```

---

## Default Behaviors & Interaction

- Tasks: Track all outstanding work exclusively in `TODO.md` (Current/Next/Backlog/Completed).
- Logs: Record history and verification only in `CHANGELOG.md`; add a Verification block after batches.
- Session notes: Keep transient thinking and branch planning in `CONTEXT-SESSION.md`. Rotate with repo-ops and keep skim-friendly.
- Verification cadence: Prefer `npm run compile && npm test && npm run prebuild` for a full pass.

Repo-ops CLI essentials:

- Rotate session: `npm run repo:ops -- session rotate [--write]`
- Lint session: `npm run repo:ops -- session lint`

---

## Development Best Practices

- Typed params only: Do not pass bare `undefined`; model all inputs with explicit types.
- No hardcoded categories: Detect categories/aliases from `UserContextAgent` runtime data.
- Formatting centralization: Orchestrator returns typed data; CommunicationAgent performs all formatting, including clarification and optional category enumeration via metadata.
- TSDoc over JSDoc in `src/**`: Validate with `eslint-plugin-tsdoc`; keep examples on symbol-level docblocks.
- TSDoc enforcement: All new or modified TypeScript files must include:
  - A top-of-file `@packageDocumentation` block describing module purpose and constraints
  - Symbol-level TSDoc for all exported types, classes, functions, and interfaces
  - Precise `@param`/`@returns` descriptions (no placeholders like “TODO: describe return value”)
  - Build/Lint gates: `tsdoc/syntax` + strict JSDoc rules are errors; PRs must pass `npm run compile && npm test` and lint checks

---

## Design Patterns

- Orchestrator-centric workflows: Classification → Planning → Execution → Formatting with validated state transitions and timeouts.
- Metadata-driven UX: Provide `metadata.availableCategories` to enable CommunicationAgent to enumerate options when helpful.
- Registry-based agents: Resolve agent instances from a typed registry; never import agents into other agents.

---

## Tools & Integrations

- ESM path pattern:

```ts
import { fileURLToPath } from "url";
import * as path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

- Generated config: `src/tools/generateMcpConfig.ts` emits `out/mcp.config.json`; health fails if JSON exists outside `out/`.
- ID derivation: Use `src/shared/ids.ts` to keep `package.json` contributions and runtime aligned.

### MCP Transport & Protocol

- Protocol: Use JSON-RPC 2.0 end-to-end; do not invent custom shapes.
- Transport: Use stdio by default. Enable HTTP only with `MCP_HTTP_ENABLED=true` for local debugging; never in CI.
- Single handler: Keep one JSON-RPC path (`initialize`, `tools/list`, `tools/call`) and reuse it across transports to avoid drift. Remove duplicate handlers when discovered.
- Entrypoint: Default startup runs stdio; pass `--stdio` to force. HTTP startup is guarded by `MCP_HTTP_ENABLED`.

---

## Session Workflow

1. Start: Read `TODO.md` (Current/Next), skim latest `CHANGELOG.md` Logs, run `npm run compile` and `npm test`.
2. Implement: Follow Critical Operating Rules; keep agents isolated and data-driven.
3. Verify: Run `npm run compile && npm test && npm run prebuild`.
4. Record: Add a timestamped log entry with a Verification block; reconcile `TODO.md`.

---

## Language & Style

- American English; concise, specific TSDoc with real return descriptions.
- Avoid `*/` sequences inside TSDoc; fence examples with language tags; prefer `@see` for long samples.

---

## Common Pitfalls + Quick Checks

- Agents importing agents? Move coordination to Orchestrator.
- Hardcoded categories/aliases? Replace with runtime category/alias data from `UserContextAgent`.
- `src/mcp.config.json` present? Remove; generate to `out/` only.
- Types exporting functions? Move to `src/shared/**`.
- ESM path misuse? Replace with `fileURLToPath` pattern.

---

## Merge Process

1. Back up the prior instructions (done via a timestamped copy in `.github`).
2. Replace content with this governance overhaul.
3. Run verification gates.
4. Log the change in `CHANGELOG.md` with a Verification block.

---

## References

- `TODO.md` – tasks and priorities
- `CHANGELOG.md` – logs and verification only
- `CONTEXT-SESSION.md` – session notes and branch planning
- `src/shared/ids.ts` – ID derivation
- `src/agent/communicationAgent/` – formatting owner
- `src/agent/orchestrator/` – typed-only coordination
  - If it’s long‑lived branch plan/status: use `CONTEXT-SESSION.md` (Branch Plan section).
