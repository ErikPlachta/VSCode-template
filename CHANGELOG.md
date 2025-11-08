---
title: Changelog
summary: Central log of requests, changes, solutions, and goals managed by VS Code Copilot Chat.
roles:
  - engineering
  - documentation
associations:
  - changelog
  - governance
  - automation
   - Full migration from `businessData` to `userContext` with backward-compatible layer (in progress).
   - Replace remaining `relevantDataManagerAgent` imports with `userContextAgent` (pending final sweep and eventual deprecation removal).
   - Resolve TypeDoc generation missing file warnings by adding referenced docs (`docs/build-pipeline.md`, `docs/agents/repository-health-agent.md`, `docs/orchestration.md`).
   - Lint remediation: address 130+ outstanding ESLint errors (return types, JSDoc alignment, unused vars) – phase 1 targeting agent config getters.
   - Health report integration improvements and repository health agent alias resolution.
   - Enforce path alias imports (no relative paths) across codebase (rule + conversion complete).
   - Consolidate developer-only scripts into `bin/utils` (completed) and remove `bin/tools` after CI update.
   - Rename `@types/*` alias to `@internal-types/*` to resolve TypeDoc TS6137 errors (completed).
   - Add docs post-processing (LF normalization + trailing newline) and `.gitattributes` for consistent EOL (completed; pending repository-wide renormalization commit).
   - Source-based script execution using `tsx` (completed).
## Changelog

All notable changes, requests, solutions, and goals driven via VS Code Copilot Chat are tracked here.

This file follows the Keep a Changelog format and uses semantic groupings under each release. Items that are planned or in progress live under Unreleased. When items complete, move them to a dated release section.

## How to use this file with Copilot Chat
  - Added ESLint `no-restricted-imports` rule banning relative import paths.
  - Implemented automated import conversion script and refactored configuration into constants.
  - Added docs postprocessing script ensuring LF line endings & trailing newline across generated markdown.
  - Introduced `.gitattributes` enforcing LF for source & docs.
  - Added `tsx` dev dependency and updated package scripts to execute directly from source.
  - Converted `@types/*` alias to `@internal-types/*` to unblock Typedoc.
  - Moved dev-only tooling (`addFileTags`, `fixJSDoc`, `processTemplates`, `updatePackageConfig`, import utilities) into `bin/utils`.
  - Generated documentation successfully post-alias rename (warnings limited to missing referenced markdown assets).

- At the start of a session, read the Unreleased section and ask whether to resume from the top items or re-prioritize.
- When creating a new task, add it to Unreleased under Planned.
- When making changes, add entries under Added/Changed/Fixed/Docs as appropriate and reference the files you touched.
  - Docs: PASS (Typedoc runs; 6 warnings for missing referenced docs remain).
- Keep entries concise, action-oriented, and link to code paths (e.g., `src/agent/...`).

## [Unreleased]

### Planned

- Finish clarification agent config typing: add explicit return type for `getResponseStyle()` in `src/agent/clarificationAgent/config.ts`.
- Orchestrator config & index: add return types, replace `any`, improve JSDoc; underscore unused variables in `src/agent/orchestrator/config.ts` and `src/agent/orchestrator/index.ts`.
- Other agent configs: add explicit return types and refine JSDoc summaries.
   - Address outstanding ESLint errors in agent config files (add explicit return types) – prioritize getter functions flagged.
   - Create missing referenced docs to remove TypeDoc warnings.
   - Perform final sweep to replace legacy agent imports and plan deprecation removal.
   - Add health report markdown assets to reduce warnings and update reporting script if needed.
   - Run repository-wide EOL normalization commit.
- Draft legacy config removal plan & deprecation warnings (`mcp.config.json`, loader).
- Param name normalization scan & adjustments.
- Final lint/compile/test sweep and repository health report.
- Fix path alias resolution for health tooling: resolve missing module `@agent/repositoryHealthAgent` impacting `npm run lint:json` and `npm run lint:docs` scripts.
- Bulk ESLint remediation pass: add explicit return types + JSDoc blocks across agent configs and shared analytics; reduce 136 errors → target zero.
- Introduce analytics option interfaces to eliminate pervasive `any` types (`src/shared/analyticsIntegration.ts`, `src/shared/agentAnalytics.ts`).
- Complete migration from `businessData` to `userContext` folder structure once alias patterns validated.
- Replace legacy agent id `relevant-data-manager` with `user-context` across configs & orchestrator after compatibility window.

### Changed

- Migrated progress tracking from `docs/PROGRESS.md` to the root `CHANGELOG.md` to avoid conflicts with docs governance.
- Added transitional User Context Agent (`src/agent/userContextAgent`) aliasing legacy Relevant Data Manager for incremental rename.
- Extended JSON schema patterns to support both `businessData` and `userContext` directories.

### Docs

- Introduced this changelog as the single source of truth for Copilot Chat–managed work. Updated `.github/copilot-instructions.md` to reference this flow and resume prompts.

---

## [2025-11-08] Initialization and documentation hardening

### Added

- Repository-wide `@packageDocumentation` headers for missing files.

### Fixed

- JSDoc tag-line issues in `src/agent/interfaces.ts` and `src/extension/mcpCache.ts`.
- Initial pass adding explicit return types for clarification agent config getters.
- Auto-fix run reduced numerous JSDoc alignment warnings.

### Notes

- Current lint focus areas include remaining missing return types, `any` usage, parameter doc completeness, unused variables, malformed JSDoc types/namepaths.
- See Unreleased for structured follow-ups and technical-debt items.
- Verification (2025-11-08): Build & tests PASS. ESLint FAIL (136 errors). Health report shows JSON schema + markdown metadata PASS but alias resolution failure for direct lint scripts. Added planned remediation items above.
- Started rename migration: added UserContext agent/profile alias and broadened schema patterns; legacy paths still active.
