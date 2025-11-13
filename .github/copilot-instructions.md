# Copilot Chat Instructions

This repository uses `TODO.md` for outstanding tasks and `CHANGELOG.md` for history and verification. Follow these guidelines for consistent, high-quality changes.

> Note: Use american-english spelling for all artifacts, not british-english (e.g. "organization" not "organisation").

## Critical Architecture Rules

### 1. **Agent Isolation (MUST FOLLOW)**

**RULE**: Orchestrator is the ONLY agent that coordinates inter-agent communication.

- ❌ **FORBIDDEN**: Agents importing other agents (`@agent/communicationAgent`, `@agent/dataAgent`, etc.)
- ❌ **FORBIDDEN**: Agents formatting responses for users
- ❌ **FORBIDDEN**: Agents calling other agents directly

- ✅ **REQUIRED**: Agents return typed data only
- ✅ **REQUIRED**: Orchestrator coordinates all agent calls
- ✅ **REQUIRED**: CommunicationAgent handles ALL user-facing formatting

**Data Flow Pattern**:

```
User → Orchestrator → Agent (typed data) → Orchestrator → CommunicationAgent (format) → User
```

**Before ANY agent change**, verify:

- Does this agent import another agent? → **STOP, refactor to Orchestrator**
- Does this agent format responses? → **STOP, move to CommunicationAgent**
- Does this agent call another agent? → **STOP, logic belongs in Orchestrator**

### 2. **100% Data-Driven Design**

- ❌ **NEVER** hardcode business values (category names, field names, etc.)
- ✅ **ALWAYS** derive from configuration or loaded data
- ✅ **ALWAYS** use proper typed parameters (never pass bare `undefined`)

### 3. **Configuration Source of Truth**

- Use `src/config/application.config.ts` and agent.config.ts files
- **NEVER** edit or commit `src/mcp.config.json` (health check fails)
- Generated configs go in `out/` directory only

## MCP Tool Usage

When complex problem-solving or memory is needed:

### Sequential Thinking Tool

Use `mcp_sequentialthi_sequentialthinking` when:

- Breaking down multi-step problems
- Planning complex refactoring
- Analyzing architectural decisions
- Need to revise approach mid-solution

**Example**: Planning agent architecture changes, analyzing workflow logic

### Memory Tool

Use `mcp_memory` tools when:

- Tracking user preferences across sessions
- Storing project-specific patterns
- Recording architectural decisions
- Building knowledge graph of codebase relationships

**Available operations**:

- `create_entities`: Store new concepts/patterns
- `add_observations`: Add details to existing knowledge
- `create_relations`: Link related concepts
- `search_nodes`: Find relevant stored knowledge
- `read_graph`: Review all stored knowledge

**Example**: Store "Agent X should never import Agent Y" as entity with observations

## Session Workflow (detailed)

**Start of session**:

1. Read `TODO.md` → Current/Next/Backlog sections
2. Skim `CHANGELOG.md` recent logs for context and decisions
3. Update internal todo list to match priorities

**During work**:

1. Make changes
2. Add timestamped CHANGELOG entry with details (file paths, what changed, why)
3. After 3-5 edits: Add Verification block (Build/Tests/Lint/Docs/Coverage)
4. Update Outstanding Tasks (move completed, add new)

**End of session**:

1. Final Verification block with all quality gates
2. Reconcile Outstanding Tasks
3. Commit and push

## Operational Playbooks

### Which artifact to edit?

- Question: “Where should this go?”
  - If it’s a task (work to do): add/update in `TODO.md` (Current/Next/Backlog/Completed). Link to related log entry when done.
  - If it’s history/decision/result: add a `CHANGELOG.md` log entry with details and verification.
  - If it’s transient session thoughts/notes: put in `CONTEXT-SESSION.md` under Notes. Keep concise and rotate frequently.
  - If it’s long‑lived branch plan/status: use `CONTEXT-SESSION.md` (Branch Plan section).

### Before you code (fast preflight)

- Read: `TODO.md` (Current/Next), latest `CHANGELOG.md` logs
- Run quick checks:
  - `npm run compile`
  - `npm test`
  - `npm run repo:ops -- session lint`

### After you code (verification batch)

- Build/tests/lint/docs/health in one pass:
  - `npm run compile && npm test && npm run prebuild`
- Add a Verification block to `CHANGELOG.md` with results and any coverage/JSDoc notes.
- Update `TODO.md` statuses (move to Completed, carry overs stay in Current/Next).

### Rolling back safely

- If a repo-ops command wrote files: recover from the backup folder noted by the command (backups are created before writes).
- If a code change broke tests: `git restore -SW :/` the impacted files or `git checkout -p` to undo hunks.
- If documentation got out of sync: re-run `npm run prebuild` to regenerate docs/manifests.

## Failure Handling

- Build fails:
  - Check TS errors; prioritize missing imports/types and ESM path issues. Re-run `npm run compile` locally.
- Tests fail:
  - Start with the specific suite you changed. For ESM mocks, prefer `jest.unstable_mockModule`. Avoid hoisted `jest.mock` pitfalls.
- Lint fails (code or JSDoc):
  - Add precise `@param`/`@returns` types; remove placeholders; keep descriptions specific.
- Markdown/Docs fail:
  - Fix headings, code fences with languages, blank lines around fences; avoid inline HTML where lints disallow it.
- Session lint fails:
  - Ensure `CONTEXT-SESSION.md` has: `# Session Context`, `Started: <ISO 8601>`, `## Related`, `## Notes`.

## Scenario Guides

- Add a new setting
  - Define in config; validate inputs; document in README + docs reference; add to quality gates; include CHANGELOG entry.
- Add an agent
  - Create exactly two files (`agent.config.ts`, `index.ts`); no imports from other agents; return typed data only; orchestrator wires it.
- Breaking rename
  - Use alias lifecycle: Introduce → Aliased → Warn → Remove; log in CHANGELOG every phase; add migration notes.
- Remove deprecated module
  - Ensure no references; delete file/tests; run `npm test`; log the deletion with verification.

## Changelog Entry Format

**Required format**:

```markdown
#### YYYY-MM-DD HH:MM:SS type: Summary of changes

**Problem/Context**: What was wrong or needed

**Changes Made**:

1. File path (lines X-Y): What changed and why
2. File path (lines A-B): What changed and why

**Architecture Notes**: Why this approach, patterns used

**Files Changed**: List with line counts

**Testing**: Status of compilation, tests, coverage

**Impact**: What this enables/fixes
```

Timestamping entries:

- The previous ChangeLogManager CLI has been retired (2025-11-12). Add entries manually using the required format above.
- Use 24-hour timestamps in the exact format `YYYY-MM-DD HH:MM:SS`.
- Keep entries newest-first within each day.

## Quality Gates (ALL must PASS)

- ✅ **Build**: TypeScript compiles with no errors
- ✅ **Tests**: All tests pass, 100% coverage (or documented exception)
- ✅ **Lint**: No errors, complete JSDoc (no TODOs, no missing @returns)
- ✅ **Docs**: Regenerated, no orphans
- ✅ **Health**: Repository health checks pass

## JSDoc Requirements

❌ **Disallowed**:

- `TODO: describe return value`
- Missing @param or @returns
- Undocumented public functions

✅ **Required**:

- Specific descriptions ("Generates markdown classification summary" not "Returns summary")
- All parameters documented with types
- All return values documented with types

## TSDoc Default for TypeScript

- For all `.ts` files under `bin/**` and `src/**`, write documentation using TSDoc syntax and tags (e.g., `@remarks`, `@example`).
- ESLint enforces TSDoc syntax via `eslint-plugin-tsdoc` and validates tags; `eslint-plugin-jsdoc` remains in place for structural requirements (params/returns) with TSDoc tags allowed.
- Prefer “types-as-docs”: place comprehensive descriptions and examples on exported types/interfaces (e.g., `src/types/agentConfig.ts`) instead of duplicating comments in runtime configs.
- Generated or compiled outputs under `out/**` are lint-ignored; if docs are needed there, prefer a separate JSDoc task.

## Agent Folder Standard

Each agent folder has **EXACTLY 2 files**:

- `agent.config.ts` – Configuration only
- `index.ts` – Implementation (merged legacy config.ts)

Do NOT reintroduce separate `config.ts` files.

## ES Module Requirements

❌ **Wrong**: `__dirname` and `__filename` (Not available in ES modules)

✅ **Correct**:

```typescript
import { fileURLToPath } from "url";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

## Common Pitfalls

1. **Agent isolation violations** (importing/calling other agents)
2. **Hardcoded values** (not data-driven)
3. **Bare changelog entries** (missing details, file paths, testing)
4. **Coverage drops** (without remediation plan)
5. **Missing JSDoc** (incomplete documentation)
6. **Manual doc edits** (regenerate instead)
7. **Legacy mcp.config.json** (triggers health check failure)

## Making a Change Checklist

1. ✅ Implement code
2. ✅ Update tests → maintain 100% coverage
3. ✅ Update JSDoc for public APIs
4. ✅ Run: `npm run compile` to build extension
5. ✅ Run: `npm run prebuild` (lint, test, docs, health)
6. ✅ Add comprehensive CHANGELOG entry with details
7. ✅ Verify all quality gates PASS
8. ✅ Update Outstanding Tasks
9. ✅ Commit and push

**Extension Development Note**: After packaging and installing changes to the extension, you MUST reload the VS Code window for changes to take effect. The extension runs in the extension host process, which is not restarted automatically. (Ctrl+Shift+P → "Developer: Reload Window") to test extension changes refreshes vs code.

## When To Read CHANGELOG.md

**ALWAYS** read `CHANGELOG.md` before starting work:

- Understand recent changes and decisions
- Review recent architectural decisions
- Check for related recent changes
- Understand current priorities

## Key Files Reference

- `TODO.md` – Source of truth for outstanding tasks and priorities (Current/Next/Backlog)
- `CHANGELOG.md` – History and verification only (no Outstanding Tasks mirror)
- `CONTEXT-SESSION.md` – Rolling session scratchpad and branch planning (Branch Plan section). Track current focus, active branch/run state, quick notes. Rotate via repo-ops (session rotate) between sprints.
- `src/config/application.config.ts` – Application configuration
- `src/agent/*/agent.config.ts` – Agent configurations
- `src/shared/ids.ts` – Central ID derivation
- `.github/copilot-instructions.md` – This file (governance rules)

---

**Remember**: When in doubt about architecture, check agent isolation rules. When in doubt about what to work on, check `TODO.md`. When stuck on complex problems, use Sequential Thinking MCP tool.

## Core Principles

1. Single source of truth: `CHANGELOG.md` captures every non-trivial change (code, docs, config, build scripts).
2. Incremental evolution: prefer additive, non-breaking changes (aliases and transitional shims) before removals.
3. Documentation integrity: generated docs should never be manually edited—hand-written guides are clearly separated.
4. Quality gates: build, tests (100% coverage), lint (strict JSDoc), docs generation, health report all must PASS before marking work complete.
5. Migration safety: renames (e.g. `businessData` → `userContext`, `relevant-data-manager` → `user-context`) follow an alias lifecycle: Introduced → Aliased → Warn → Removed. The `relevant-data-manager` warning phase has concluded; the shim remains silently for compatibility until its scheduled removal.
6. Configuration integrity: no committed legacy JSON config (`src/mcp.config.json`). Any reintroduction is treated as a governance regression and fails the health check.
7. **Agent isolation (CRITICAL)**: Orchestrator is the ONLY agent that coordinates inter-agent communication. Agents MUST NOT import from other agents (no `@agent/communicationAgent`, `@agent/dataAgent`, etc.). Agents are black boxes: receive request from Orchestrator → process → return typed data. Orchestrator handles all formatting, error wrapping, and agent-to-agent coordination.

## Session Workflow

At the start of a session:

- Read `TODO.md` → Current/Next/Backlog and confirm which Current Tasks are active.
- Update your internal todo list to mirror `TODO.md` priorities and wording.

During changes:

- For each significant edit, add a timestamped entry under Logs with a semantic type header.
- Keep entries terse but specific: include file paths for notable code modifications.
- Record a Verification block after each batch (Build / Tests / Lint / Docs / Health / Coverage / JSDoc) and update Outstanding Tasks accordingly.

At the end of a session:

- Ensure the latest Verification block reflects PASS/FAIL for: Build / Tests / Lint / Docs / Health / Coverage / JSDoc.
- Reconcile Outstanding Tasks (move completed items out; carry over remaining; adjust priorities if requested).

## Changelog operations (Logs only)

The changelog records Logs only. Follow these rules:

1. Keep `TODO.md` organized by priority: Current, Next, Backlog, Completed. Do not track tasks in `CHANGELOG.md`.
2. Capture change history with timestamped, semantic titles and include file paths and rationale.
3. After each batch, add a Verification block (Build / Tests / Lint / Docs / Health / Coverage / JSDoc) and update `TODO.md` as needed.
4. Insert new log entries newest-first within each day; an optional daily summary heading is allowed.
5. Use `YYYY-MM-DD HH:MM:SS` timestamps in 24-hour format.

## Agent Architecture (CRITICAL)

### Core Design Principle: Orchestrator-Centric Communication

**RULE**: Orchestrator is the ONLY agent that coordinates inter-agent communication.

**Agent Isolation Requirements**:

1. **No agent-to-agent imports**: Agents MUST NOT import from other agents
   - ❌ FORBIDDEN: `import { ... } from "@agent/communicationAgent"`
   - ❌ FORBIDDEN: `import { ... } from "@agent/dataAgent"`
   - ❌ FORBIDDEN: `await import("@agent/communicationAgent")`
   - ✅ ALLOWED: Import from shared utilities (`@shared/*`), types (`@internal-types/*`), config
2. **Agents are black boxes**:

   - Receive request from Orchestrator
   - Process internally using own methods
   - Return typed data (NOT formatted responses)
   - No knowledge of other agents

3. **Orchestrator responsibilities**:

   - Route user requests to appropriate agents
   - Call agent methods and receive typed data
   - Handle errors and wrap in structured responses
   - Use CommunicationAgent for formatting
   - Coordinate multi-agent workflows

4. **Data flow pattern**:

```text
User → Orchestrator → Agent (returns typed data) → Orchestrator → CommunicationAgent (formats) → User
```

**Why This Matters**:

- **Loose coupling**: Agents can be modified without affecting others
- **Testability**: Agents tested in complete isolation
- **Clear boundaries**: Single responsibility for each component
- **No circular dependencies**: Even with dynamic imports
- **Maintainability**: Changes localized to single agent

**Verification**:

Before any agent change, check:

- Does this agent import from another agent? → Refactor to Orchestrator
- Does this agent format responses? → Move formatting to Orchestrator/CommunicationAgent
- Does this agent coordinate with others? → Logic belongs in Orchestrator

## Quality Gates

Required PASS before completion:

- Build: TypeScript compilation succeeds.
- Tests: All tests PASS; coverage is 100% lines/branches/functions or documented exception.
- Lint: No errors; JSDoc complete (no `TODO`, no missing @returns, no improper param docs).
- Docs: Regenerated (`npm run docs`) and no orphaned or duplicate pages.
- Health: Repository health report PASS (markdown front matter, schema validation, etc.).
- Coverage: 100%; if temporarily <100, MUST have explicit remediation task + rationale.
- JSDoc: No placeholder language; all public APIs documented.

## JSDoc Enforcement

Disallowed:

- `TODO: describe return value.`
- Empty @param or @returns tags.
- Undocumented public functions/classes.

Preferred:

- Specific nouns and verbs ("Generates markdown classification summary" > "Returns summary").
- Hyphenated param lines with concrete semantics (avoid repeating parameter name only).

## Migration & Alias Policy

For any rename (e.g. `relevant-data-manager` → `user-context`):

1. Introduce new name alongside old (dual export / shim).
2. Mark old name as deprecated in docs & CHANGELOG (Changed section).
3. After one release cycle, emit runtime console warning on legacy usage.
4. After second cycle, silence warnings; keep shim for one final compatibility release.
5. Remove shim and legacy exports in the following release; update tests accordingly.

Current status: `relevant-data-manager` is in the silent shim phase (warnings removed). Future PRs should plan its full removal; add a CHANGELOG Planned item before deleting.

## Configuration Source of Truth

- Use `src/config/application.config.ts` and `src/mcp/config/unifiedAgentConfig.ts` as authoritative sources.
- Do not edit or reintroduce `src/mcp.config.json`; it has been removed. If external tooling needs JSON, generate it from TS via `src/tools/generateMcpConfig.ts` (emits `out/mcp.config.json`).
- Health enforcement: the Repository Health Agent fails if any `mcp.config.json` exists outside `out/`.

## ID, provider, and path alignment

To avoid runtime vs. manifest drift, IDs and paths are centrally derived and must stay consistent across build- and run-time:

- Central derivation: use `src/shared/ids.ts` (`deriveIds`) as the single place to compute:
  - `participantId` (VS Code chat participant id), `mention` (e.g. `@usercontext`), and `commandPrefix`/`settingsPrefix` (e.g. `usercontextMCP`).
  - `extensionFullId` (`<publisher>.<name>`) for locating the installed path.
- Manifest generation: `bin/utils/updatePackageConfig.ts` consumes `deriveIds` to populate and/or modify `package.json` contributions and commands. Don’t hand-edit IDs in `package.json`.
- Activation/runtime: read `context.extension.packageJSON.contributes.chatParticipants[0]` to determine the contributed id/name. Compute the command/settings prefix from the contributed id so runtime always matches the manifest.
- Provider contribution consistency:
  - Contribute a provider id in `package.json.contributes.mcpServerDefinitionProviders[0].id` with the pattern `${baseId}-local` (lowercase, e.g. `usercontext-local`).
  - Register the provider at runtime with the exact same id; mismatches cause VS Code to warn: “providers must be registered in contributes.mcpServerDefinitionProviders …”.
- mcp.json registration ids: use `${contributedName}-mcp-server` (e.g. `usercontext-mcp-server`) for both HTTP and stdio entries.
- Build layout and server path:
  - TypeScript emits only `src` into `out/src` (tsconfig include restricted to `src`).
  - The embedded stdio server entry point is `out/src/server/index.js` (not `out/server/index.js`). Use this path in both provider definitions and mcp.json args.
- Installed vs. workspace path preference:
  - When writing `mcp.json`, prefer the installed extension path resolved from `<publisher>.<name>`; fallback to `context.extensionPath` in dev.
  - Activation includes a lightweight orphaned-registration cleanup that removes stale `mcp.json` entries pointing to non-existent or non-extension paths.

## Diagnostics and read-only settings

- A palette command surfaces id alignment at runtime: `${commandPrefix}.diagnoseIds`.
  - It prints actual vs. expected chat participant id, mention, and derived command prefix.
- Read-only settings enumerate current IDs for quick checks (e.g., `${settingsPrefix}.ids.chatParticipantId`, `${settingsPrefix}.ids.commandPrefix`, `${settingsPrefix}.ids.extensionId`). These are contributed via `updatePackageConfig.ts` and should not be edited manually.

## Prepublish and packaging safeguards

- `prepublishOnly` runs `prebuild` to regenerate the manifest and docs so packaged `.vsix` always reflects the current env/ids.
- Ensure provider and participant ids are verified by running quick tests before packaging.

## Cache Naming

- Cache folder name derives from `EXTENSION_NAME` env variable (fallback `usercontext-mcp-extension`).
- Both workspace-local and global (`%USERPROFILE%/.vscode/extensions/<EXTENSION_NAME>`) cache directories are created.
- Never hardcode `.mcp-cache`; adapt tests & scripts accordingly.

## Settings & Validation

- Settings are UI-first; chat-based mutations are secondary.
- When adding settings: include validation logic and fallback behavior; reject invalid values with a warning and revert to defaults.
- Document any added setting in README and link to docs reference page.

## Analytics & Telemetry

- Wrap agent operations with analytics tracking for execution timing and success metrics.
- Avoid persistent storage changes without updating health report tasks.

## Making a Change – Checklist

1. Implement code.
2. Update/extend tests → ensure coverage stays 100%.
3. Update JSDoc for any new public API.
4. Run: lint, test, docs, health. Ensure prebuild runs (`npm run prebuild`) so templates and generated config are up to date.
5. Update CHANGELOG (Added/Changed/Fixed/Docs + Verification + Next Focus).
6. Commit and push.
7. Confirm health check passes (no stray `mcp.config.json` outside `out/`).

## Common Pitfalls to Avoid

- Forgetting to update CHANGELOG for README or config changes.
- Allowing coverage to drop below 100% without remediation plan.
- Introducing `any` types in agent or shared modules—use precise interfaces.
- Editing generated markdown docs manually (regenerate instead).
- Forgetting to remove placeholder tokens (e.g., `<application>`) from category ids; canonical ids are required for tests.
- Reintroducing a legacy `mcp.config.json` file under `src/` or `bin/` (health check will fail).
- Leaving deprecated alias warnings in place after the silent phase begins.
- Using `__dirname` or `__filename` without ES module polyfills (see ES Module Requirements below).

## ES Module Requirements (ESM patterns)

This project uses ES modules (`"type": "module"` in `package.json`). CommonJS globals like `__dirname` and `__filename` are NOT available.

**REQUIRED pattern** when you need file path resolution:

```typescript
import { fileURLToPath } from "url";
import * as path from "path";

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

**When to use this pattern**:

- Any time you need to resolve paths relative to the current source file
- When referencing sibling directories or parent directories
- When loading resources bundled with the extension

**Examples in codebase**:

- `src/server/index.ts` (lines 18-19)
- `src/tools/generateSchemas.ts` (lines 13-14)
- `src/agent/userContextAgent/index.ts` (lines 68-70)
- `src/extension/index.ts` (lines 14-16)

**Verification**: Before committing new files that use path resolution, ensure they follow this pattern.

## Agent Folder Standard (structure rules)

- Each agent folder contains exactly two source files:
  - `agent.config.ts` – static configuration for that agent only.
  - `index.ts` – implementation plus config wrapper classes (legacy `config.ts` merged here).
- Do not reintroduce removed `config.ts` files. Transitional shims (e.g. `relevantDataManagerAgent`) must not contain business logic—only re-exports and (when in warn phase) a console warning.

Refer to `CHANGELOG.md` for historical decisions and active planned tasks before starting new work.

## Context file: role and usage

Use `CONTEXT-SESSION.md` to keep navigation fast and thinking visible without polluting the changelog:

- `CONTEXT-SESSION.md`

  - Purpose: Live session notes for the current working block and branch planning (see “Branch Plan (Active)” section). Track: active branch, focus areas, tasks/tests running, quick decisions, and immediate follow-ups.
  - When to update: At session start, after notable steps (e.g., tool runs, edits, verification), and before pausing. Rotate with repo-ops `session rotate` between sprints.
  - Structure tips: Keep it skim-friendly with headings like “current focus”, “actions taken”, “next up”. Avoid duplicating detailed history—link to CHANGELOG entries instead.

Notes:

- Tasks live in `TODO.md`. Do not introduce new tasks directly in context files; link back to `TODO.md` or reference task IDs.

---

These instructions are living; update them when governance rules or quality gates evolve. Document any health check additions (e.g., legacy JSON detection) under CHANGELOG Added.

## Automation Aids

The ChangeLogManager CLI has been retired. Continue to edit `CHANGELOG.md` directly following the required format. The repo-ops CLI remains for session workflows:

- Rotate session log (archive current, create fresh):
  - `npm run repo:ops -- session rotate [--write]`
- Lint session context:
  - `npm run repo:ops -- session lint`

## Changelog editing guidance

- Edit `CHANGELOG.md` by hand; keep markers stable:
  - `<!-- CHANGELOG:BEGIN:LOGS -->` / `<!-- CHANGELOG:END:LOGS -->`
- Use the required headings and timestamp format; include Verification blocks after meaningful batches.
- Avoid reformatting markers or headings outside spec to keep the parser stable in future automation.
