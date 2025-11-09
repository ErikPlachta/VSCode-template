# Copilot Chat Instructions

This repository uses the root `CHANGELOG.md` as the single source of truth for Copilot Chat managed work. Follow these guidelines to ensure consistent, high-quality changes aligned with the extension's design goals (customizable MCP server, User Context focus, 100% coverage, strict JSDoc).

## Core Principles

1. Single source of truth: `CHANGELOG.md` captures every non-trivial change (code, docs, config, build scripts).
2. Incremental evolution: prefer additive, non-breaking changes (aliases and transitional shims) before removals.
3. Documentation integrity: generated docs should never be manually edited—hand-written guides are clearly separated.
4. Quality gates: build, tests (100% coverage), lint (strict JSDoc), docs generation, health report all must PASS before marking work complete.
5. Migration safety: renames (e.g. `businessData` → `userContext`, `relevant-data-manager` → `user-context`) have an alias lifecycle: Introduced → Aliased → Warn → Removed.

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

1. Add new name alongside old.
2. Mark old name as deprecated in docs & CHANGELOG (Changed section).
3. After one release cycle, add warnings on usage.
4. After second cycle, remove alias and update tests.

## Configuration Source of Truth

- Use `src/config/application.config.ts` and `src/mcp/config/unifiedAgentConfig.ts` as authoritative sources.
- Do not edit or reintroduce `src/mcp.config.json`; if external tooling needs JSON, generate it from TS via `src/tools/generateMcpConfig.ts` (emits `out/mcp.config.json`).

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

## Common Pitfalls to Avoid

- Forgetting to update CHANGELOG for README or config changes.
- Allowing coverage to drop below 100% without remediation plan.
- Introducing `any` types in agent or shared modules—use precise interfaces.
- Editing generated markdown docs manually (regenerate instead).
- Forgetting to remove placeholder tokens (e.g., `<application>`) from category ids; canonical ids are required for tests.

## Agent Folder Standard

- Each agent folder contains exactly two source files:
  - `agent.config.ts` – static configuration data for that agent only.
  - `index.ts` – the agent implementation and any config wrapper classes previously in `config.ts` (merged here).
- Remove `config.ts` files and update imports to reference in‑file classes instead. Maintain deprecation shims for one cycle when renaming agents.

Refer to `CHANGELOG.md` for historical decisions and active planned tasks before starting new work.

---

These instructions are living; update them when governance rules or quality gates evolve.
