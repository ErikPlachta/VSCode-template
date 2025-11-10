# Copilot Chat Instructions

This repository uses the root `CHANGELOG.md` as the single source of truth for Copilot Chat managed work. Follow these guidelines to ensure consistent, high-quality changes aligned with the extension's design goals (customizable MCP server, User Context focus, 100% coverage, strict JSDoc).

## Core Principles

1. Single source of truth: `CHANGELOG.md` captures every non-trivial change (code, docs, config, build scripts).
2. Incremental evolution: prefer additive, non-breaking changes (aliases and transitional shims) before removals.
3. Documentation integrity: generated docs should never be manually edited—hand-written guides are clearly separated.
4. Quality gates: build, tests (100% coverage), lint (strict JSDoc), docs generation, health report all must PASS before marking work complete.
5. Migration safety: renames (e.g. `businessData` → `userContext`, `relevant-data-manager` → `user-context`) follow an alias lifecycle: Introduced → Aliased → Warn → Removed. The `relevant-data-manager` warning phase has concluded; the shim remains silently for compatibility until its scheduled removal.
6. Configuration integrity: no committed legacy JSON config (`src/mcp.config.json`). Any reintroduction is treated as a governance regression and fails the health check.

## Session Workflow

At the start of a session:

- Read `CHANGELOG.md` → Outstanding Tasks and confirm which Current Tasks are active.
- Update the internal todo list to mirror Outstanding Tasks (preserve priorities and wording).

During changes:

- For each significant edit, add a timestamped entry under Logs with a semantic type header.
- Keep entries terse but specific: include file paths for notable code modifications.
- Record a Verification block after each batch (Build / Tests / Lint / Docs / Health / Coverage / JSDoc) and update Outstanding Tasks accordingly.

At the end of a session:

- Ensure the latest Verification block reflects PASS/FAIL for: Build / Tests / Lint / Docs / Health / Coverage / JSDoc.
- Reconcile Outstanding Tasks (move completed items out; carry over remaining; adjust priorities if requested).

## Changelog operations (Outstanding Tasks + Logs)

The changelog is organized around two sections: Outstanding Tasks and Logs. Follow these rules (synced from `CHANGELOG.md` → Notes for Copilot):

1. Outstanding Tasks captures all incomplete work. It is organized by priority and jointly maintained by the user and Copilot Chat.
2. Every incomplete task should appear here, grouped by priority: Current Tasks (immediate focus), Priority 1 (Next), Priority 2 (Later), Priority 3 (Backlog).
3. Copilot should proactively review and keep this section up to date, reflecting user-requested priority changes.
4. After each set of logged changes, revisit and update Outstanding Tasks accordingly.
5. Logs capture all change history, organized by date/time and semantic titles.
6. Each day may include a summary line in the form: `### [YYYY-MM-DD] SUMMARY_OF_CHANGES`. Example: `### [2025-11-09] Refactored Agents. Testing Coverage Up to 90%.`
7. Use semantic titles for log entries: `#### YYYY-MM-DD HH:MM:SS fix | feat | chore | docs | refactor | test | perf | ci | build | style: SUMMARY_OF_CHANGES`, followed by a detailed description with sub-points. Entries MUST include specific details, file paths, and implementation notes - never just the summary line alone.
8. Include file paths for meaningful changes and provide sub-points explaining what was actually changed.
9. Update Verification after edits (Build / Tests / Lint / Docs / Health). Mark resolved items with ✅ and unresolved with ❌. Move outstanding items into Outstanding Tasks.

Practical cadence:

- Insert new log entries newest-first within the current day; add the optional daily summary headline once per day if helpful.
- After 3–5 edits or when creating/editing >~3 files in a burst, add/update a Verification block and reconcile Outstanding Tasks.
- **Timestamp format**: Use `YYYY-MM-DD HH:MM:SS` (24-hour time with spaces) for log entry headers. The ChangeLogManager CLI handles this automatically.

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
  - `participantId` (VS Code chat participant id), `mention` (e.g. `@mybusiness`), and `commandPrefix`/`settingsPrefix` (e.g. `mybusinessMCP`).
  - `extensionFullId` (`<publisher>.<name>`) for locating the installed path.
- Manifest generation: `bin/utils/updatePackageConfig.ts` consumes `deriveIds` to populate `package.json` contributions and commands. Don’t hand-edit IDs in `package.json`.
- Activation/runtime: read `context.extension.packageJSON.contributes.chatParticipants[0]` to determine the contributed id/name. Compute the command/settings prefix from the contributed id so runtime always matches the manifest.
- Provider contribution consistency:
  - Contribute a provider id in `package.json.contributes.mcpServerDefinitionProviders[0].id` with the pattern `${baseId}-local` (lowercase, e.g. `mybusiness-local`).
  - Register the provider at runtime with the exact same id; mismatches cause VS Code to warn: “providers must be registered in contributes.mcpServerDefinitionProviders …”.
- mcp.json registration ids: use `${contributedName}-mcp-server` (e.g. `mybusiness-mcp-server`) for both HTTP and stdio entries.
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

- Cache folder name derives from `EXTENSION_NAME` env variable (fallback `myBusiness-mcp-extension`).
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

## Agent Folder Standard

- Each agent folder contains exactly two source files:
  - `agent.config.ts` – static configuration for that agent only.
  - `index.ts` – implementation plus config wrapper classes (legacy `config.ts` merged here).
- Do not reintroduce removed `config.ts` files. Transitional shims (e.g. `relevantDataManagerAgent`) must not contain business logic—only re-exports and (when in warn phase) a console warning.

Refer to `CHANGELOG.md` for historical decisions and active planned tasks before starting new work.

---

These instructions are living; update them when governance rules or quality gates evolve. Document any health check additions (e.g., legacy JSON detection) under CHANGELOG Added.

## Automation Aids

To guarantee accurate current timestamps and consistent formatting for new log entries, prefer the ChangeLogManager CLI:

- Quick add entry: `npm run changelog:manage -- add-entry --type docs --summary "Your summary"`
- Ensure markers: `npm run changelog:manage -- insert-markers`
- Add a Current Task: `npm run changelog:manage -- add-current --text "Task description"`
- Prune completed items: `npm run changelog:manage -- prune-completed`
- Valid types: fix | feat | chore | docs | refactor | test | perf | ci | build | style.

Notes:

- Copilot Chat can execute these for you (it will run the npm script with the proper arguments) or paste the exact command for your confirmation.
- After 3–5 entries or >~3 file edits, add a Verification block and reconcile Outstanding Tasks.

## ChangeLogManager Module

Use the `ChangeLogManager` utilities instead of manual editing whenever possible:

- Add entries: `npm run changelog:manage -- add-entry --type feat --summary "Something"`.
- Add Outstanding Tasks: `npm run changelog:manage -- add-outstanding --priority 3 --text "Task description"`.
- Add Current Tasks: `npm run changelog:manage -- add-current --text "Task description"`.
- Prune completed Outstanding Tasks: `npm run changelog:manage -- prune-completed` (recognizes ✅ and configurable prefixes).
- Ensure markers: `npm run changelog:manage -- insert-markers` (auto-inserts section boundary comments if missing).
- Markers: `<!-- CHANGELOG:BEGIN:OUTSTANDING_TASKS -->` / `<!-- CHANGELOG:END:OUTSTANDING_TASKS -->`, `<!-- CHANGELOG:BEGIN:LOGS -->` / `<!-- CHANGELOG:END:LOGS -->`.
- Heading formats remain: Day `### [YYYY-MM-DD] Summary` (optional summary) and Entry `#### YYYY-MM-DD HH:MM:SS type: Summary`. When adding a Verification block, use `##### Verification – SUMMARY` followed by bullet lines.

Planned extensions (parser awareness): structured Outstanding Tasks extraction, automatic verification block generation, JSON export for UI dashboards.

Copilot Chat should:

1. Prefer CLI for new entries to guarantee timestamp fidelity.
2. Reconcile Outstanding Tasks after each batch by reading between boundary markers.
3. Avoid reformatting markers or headings outside spec to keep parser stable.
