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

- Read `CHANGELOG.md` Unreleased → Planned section, confirm which tasks are active.
- Update the todo list (internal planning) with any new user requests.

During changes:

- For each significant edit, add an entry under Unreleased (Added / Changed / Fixed / Docs / Verification / Next Focus).
- Keep entries terse but specific: include file paths for notable code modifications.
- Record verification results after each batch of changes.

At the end of a session:

- Ensure Verification block reflects latest PASS/FAIL for: Build / Tests / Lint / Docs / Health / Coverage / JSDoc.
- Add Next Focus items guiding subsequent work.

## CHANGELOG Format (Unreleased Section)

Sections used in order:

1. Planned – backlog items or in-progress efforts.
2. Added – new features, files, scripts.
3. Changed – behavior modifications, migrations, refactors.
4. Fixed – bug resolutions or incorrect logic fixed.
5. Docs – documentation-only updates.
6. Verification – PASS/FAIL summary of quality gates (include coverage % if any deviation; goal is literal 100%).
7. Next Focus – prioritized follow-up actions.

Every pull request must update at least one of these sections (unless trivial: whitespace, comment typo, etc.—still prefer inclusion for traceability).

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
