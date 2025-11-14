# Copilot Chat Governance (Overhaul)

- This document codifies the operational rules, architecture guardrails, and day-to-day workflows for developing and maintaining this VS Code extension with embedded MCP server.
- It is designed for LLM-friendly consumption with explicit constraints to prevent drift.
- This governance overhaul was approved and implemented on 2025-11-13 to enhance clarity, consistency, and maintainability across the codebase and development processes.

---

## CoPilot Chat Communication Protocols

This section represents how the user wants CoPilot Chat and all Agents work to handle communication during active sessions. As such, all agents must adhere to these protocols when interacting with the user via CoPilot Chat.

- The goal of this directive is to supplement, not override or replace.
- As an Agent is working through tasks and executing work, it must always prioritize clear, concise, and contextually relevant communication with the user.
- After agent thinks and then verifies an action, agent will provide concise summary. Details related to how decision was made should remain in chat in a collapsible box.
- Agent should avoid unnecessary repetition of information already provided in the chat history. The goal is to provide small and concise updates as you're moving through actions, so User can clearly understand decisions being made.

### Communication Patterns (Micro‑updates)

- Default cadence: Post short micro‑updates during active work, including when no TODO list is in use.
- Preambles: Start each tool/action with an 8–12 word sentence explaining why, what, and expected outcome.
- Headers: When running multi‑step tasks, include a short Markdown header to anchor context (e.g., "Preparing Changelog Entry").
- Tie to focus: Reference the active TODO when present, e.g., "Starting: add Phase 7 changelog entry (2/9)".
- No repetition: Do not restate unchanged plans; report deltas and results only.
- Result echo: After each action, report a one‑line outcome (SUCCESS/FAIL with minimal details).

### Tool & CLI Narration (Standard)

When invoking CLI or multi‑step tools, narrate with this four‑step pattern:

1. Preparing: What and why you are doing a dry‑run/scaffold.
2. Result: Outcome of the dry‑run (success/failure + next action).
3. Writing: What and why you are committing/applying the change.
4. Result: Outcome of the write (success/failure + follow‑up).

Example (changelog):

```text
## Preparing Changelog Entry
Preparing: Executing scaffold (dry‑run) to validate content and placement…
SUCCESS: Scaffold validated. No errors; ready to commit.

## Writing Changelog Entry
Writing: Executing commit to apply entry via repo‑ops CLI…
SUCCESS: Changelog entry applied.
```

### Formatting & Tone

- Brevity first: Prefer one‑sentence updates; avoid verbose rationales in-line.
- Collapsible details: Keep extended reasoning in a collapsible details block when necessary.
- American English: Use American spellings and consistent terminology from the codebase.
- Momentum: Build on prior context ("Next, I'll…") rather than re‑explaining.

### Good vs. Improve Examples

- Good: "Starting: add Phase 7 changelog entry via CLI (2/9)."
- Improve: Add a brief header and purpose, then result lines as shown above.
- Bad: Running 2+ CLI commands without purpose; always state why and expected outcome first.

### Revision Policy

- Iterative guidance: This section evolves. Capture refinement tasks in `TODO.md` under "Next" or "Backlog".
- Governance alignment: Keep changes consistent with Critical Operating Rules and Default Behaviors.
- Verification: After updating this section, add a `docs` changelog entry and run `npm run prebuild`.

---

## Critical Operating Rules

- Use American English throughout.
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
