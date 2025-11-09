---
title: Changelog
summary: Central log of requests, changes, solutions, and goals managed by VS Code Copilot Chat.
roles:
  - engineering
  - documentation
associations:
  - changelog
---

<!-- Title provided via front matter; omit duplicate H1 to satisfy markdownlint MD025 -->

## Notes for Copilot

Maintain this file as the single source of truth for non-trivial changes.

Guidelines:

1. Use the Unreleased section for current work: Planned / Added / Changed / Fixed / Docs / Verification / Next Focus.
2. Include file paths for meaningful changes.
3. Update Verification after edits (Build / Tests / Lint / Docs / Health).
4. Add migration/deprecation guidance under Changed with a brief note.

## [Unreleased]

### Added (2025-11-09 – Centralized runtime agent types & descriptor helper)

- Consolidated all runtime agent types (orchestrator, clarification, data, database) into `src/types/agentConfig.ts` exporting: `OrchestratorIntent`, `OrchestratorClassification`, `OrchestratorInput`, `OrchestratorResponse`, `ClarificationAgentInput`, `ClarificationResponse`, `CategoryRecord`, `AnalysisInput`, `DataInsight`, `ExplorationPlan`, `ExplorationStep`, `TopicSearchResult`, `CrossCategoryConnection`, `DataSource`, `QueryResult`, `QueryOptions`.
- Introduced shared `ConfigDescriptor` interface and `createDescriptorMap()` helper in `agentConfig.ts` for unified descriptor creation across agents.
- Refactored orchestrator `getConfigDescriptors()` in `src/agent/orchestrator/index.ts` to use `createDescriptorMap()`.

### Changed (2025-11-09 – Removed local runtime type duplicates)

- Deleted per-agent inline runtime type/interface declarations from:
  - `src/agent/orchestrator/index.ts`
  - `src/agent/clarificationAgent/index.ts`
  - `src/agent/dataAgent/index.ts`
  - `src/agent/databaseAgent/index.ts`
- All agents now import shared runtime types from `@internal-types/agentConfig`, reducing duplication and easing future migrations.

### Verification (post type centralization & descriptor helper 2025-11-09)

- Build: PASS (compile succeeded after refactor)
- Tests: PASS (full Jest suite green; no runtime regressions)
- Lint: PASS (added JSDoc for new interfaces; removed unused imports)
- Docs: PENDING (next run will reflect consolidated types; no breaking API changes)
- Health: PASS (no legacy config artifacts; centralized types accepted)
- Coverage: STABLE (type relocation does not affect executable code paths)

### Next Focus (after centralization batch)

- Added descriptor-based access helpers (`getByDescriptor`, `setByDescriptor`, `verifyDescriptor`) to `BaseAgentConfig` in `src/types/agentConfig.ts` and descriptor verification tests `tests/orchestrator.descriptors.test.ts`.
- Verification update (descriptor tests): Build PASS, Tests PASS, Lint PASS, Health PASS, Coverage STABLE.

- Add descriptor verification tests (e.g. ensure required orchestrator paths exist) using `confirmConfigItems`.
- Collapse Clarification, Data, Database agents to extend `BaseAgentConfig` directly (remove bespoke config wrapper classes) and adopt descriptor maps.
- Expand descriptor helper usage to remaining agents for consistent UI metadata.
- Re-run docs generation to ensure no stale per-agent type pages remain; update any cross-references.
- After collapses: update Verification with coverage % and begin planning removal of silent relevant data manager shim.

### Added (2025-11-09 – Orchestrator config helper validation)

- Introduced strict path validation for orchestrator configuration via `validateRequiredSections()` in `src/agent/orchestrator/index.ts` using new `BaseAgentConfig.confirmConfigItems` helper.

### Changed (2025-11-09 – Orchestrator refactor to generic helpers)

- Eliminated per-agent wrapper class for orchestrator: merged configuration access directly into `Orchestrator` by extending `BaseAgentConfig` and removing the bespoke `OrchestratorConfig` class.
- Refactored configuration access to use `getConfigItem` for `stopWords`, `scoringWeights`, `minimumKeywordLength`, `intents`, `messages`, and `escalation` paths, removing direct object traversal and silent fallbacks.
- Added explicit `@throws` JSDoc annotations and alignment fixes for methods that can fail (e.g., fallback agent lookup).
- Removed implicit defaults for `fallbackAgent` and maintained optional handling for `vaguePhrases`; required sections are strictly validated at construction using `confirmConfigItems`.
- Introduced `getConfigDescriptors()` in orchestrator returning path/type/visibility to support UI-driven configuration without inlining per-item getters.
- JSDoc cleanup in `BaseAgentConfig` (removed placeholder return descriptions) in `src/types/agentConfig.ts`.

### Verification (post orchestrator helper refactor 2025-11-09)

- Build: PASS (tsc)
- Tests: PASS (jest suite green; orchestrator tests unchanged still pass)
- Lint: PASS (added @throws + alignment corrections; no placeholder JSDoc)
- Docs: PASS (no public API surface change beyond improved comments)
- Health: PASS (no legacy config artifacts; governance checks green)
- Coverage: STABLE (orchestrator paths continue covered; getters now throw deterministically)

### Next Focus (after orchestrator helper adoption)

- Apply helper-based strict path validation to Clarification, Data, and Database agent configs (replace bespoke traversal with `getConfigItem` + `confirmConfigItems`).
- Introduce shared descriptor maps per agent to enumerate required and optional config paths for future dynamic settings UI.
- Remove silent shim for `relevantDataManagerAgent` in planned removal phase (document in Planned section before deletion).

### Verification (post defaults cleanup 2025-11-09)

- Build: PASS
- Tests: PASS
- Lint: PASS (agent index refactors JSDoc-complete; added @throws annotations)
- Docs: PASS (typedoc + postprocess pipeline completed without errors)
- Health: PASS
- Coverage: STABLE (see coverage report; target remains 100%)

### Changed (2025-11-09 – DatabaseAgent strict getters)

- Tightened `DatabaseAgentConfig` to eliminate embedded fallback objects and enforce config-defined values only in `src/agent/databaseAgent/index.ts`.
- Added `validateRequiredSections()` to assert presence of `database.performance`, `database.validation`, and `database.operations` (including nested blocks) at construction.
- Updated getters to throw clear errors when required sections are missing; completed strict JSDoc with `@throws` annotations.

### Verification (post DatabaseAgent strict getters 2025-11-09)

- Build: PASS (tsc compile)
- Tests: PASS (jest suite green)
- Lint: PASS (jsdoc alignment + throws annotations satisfied)
- Docs: PASS (typedoc OK)
- Health: PASS

### Changed (2025-11-09 – Legacy JSON removal + alias warning cleanup)

- Windows build pipeline now validates/generated `out/mcp.config.json` instead of legacy `src/mcp.config.json` in `bin/build.bat`.
- Legacy Relevant Data Manager shim no longer emits a deprecation warning (alias window closed) – `src/agent/relevantDataManagerAgent/index.ts`.
- Plan: remove legacy JSON files from the repo; all code paths already use TS → `out/mcp.config.json`.

### Added (2025-11-09 – Health check for legacy JSON reintroduction)

- Repository Health Agent now includes a check that FAILS if any `mcp.config.json` exists outside `out/`.
- Added test `tests/repositoryHealth.legacyConfig.test.ts` covering pass (only out/ file) and fail (stray src/ file) scenarios.

### Verification (post legacy JSON changes 2025-11-09)

- Build: PASS
- Tests: PASS
- Lint: PASS
- Docs: PASS
- Health: PASS

### Changed (2025-11-09 – Remove deprecated agent config.ts files)

- Deleted legacy per-agent config wrappers now that configuration classes are merged into their respective `index.ts` files:
  - `src/agent/orchestrator/config.ts`
  - `src/agent/dataAgent/config.ts`
  - `src/agent/clarificationAgent/config.ts`
  - `src/agent/databaseAgent/config.ts`
  - `src/agent/relevantDataManagerAgent/config.ts`
  - `src/agent/userContextAgent/config.ts`
- Confirmed no remaining imports reference these paths; exports are provided via each agent's `index.ts` and `agent.config.ts` as per the two-file standard.

### Verification (post config.ts removals 2025-11-09)

- Build: PASS (tsc compile)
- Tests: PASS (jest suite green)
- Lint: PASS (strict JSDoc, no unused imports)
- Docs: PASS (typedoc ran and docs post-processing succeeded)
- Health: PASS (repository health report clean)

### Next Focus (post-removal)

- Finish eliminating any remaining fallback defaults in DatabaseAgent getters if discovered in future diffs; ensure all required values are sourced from `agent.config.ts` and throw when missing.
- Keep CHANGELOG as single source of truth; begin alias deprecation warning cycle for `relevant-data-manager` → `user-context` per policy.

### Planned

- Deprecate `src/mcp.config.json` in favor of build-generated JSON derived from TS sources:

  - Source of truth remains TypeScript configs (`src/config/application.config.ts`, `src/mcp/config/unifiedAgentConfig.ts`).
  - Add generator script (e.g., `src/tools/generateMcpConfig.ts`) that produces a runtime `mcp.config.json` at build time.
  - Wire generator into `npm run prebuild` so the file is created automatically; do not commit generated JSON.
  - Update `.gitignore` and health checks to ensure generated file isn’t treated as source.
  - Add tests that snapshot generator output and assert schema/fields stability.
  - Document migration: projects should not import `src/mcp.config.json`; tools expecting JSON should read the generated artifact.
  - Final step: remove `src/mcp.config.json` after one release cycle with deprecation notice in release notes.

- Replace `any` types in analytics modules (`src/shared/analyticsIntegration.ts`, `src/shared/agentAnalytics.ts`) with structured interfaces.
- Create/update remaining docs assets (if any new references appear) and keep health report green.
- Perform final sweep to replace legacy agent imports and plan deprecation removal of `relevant-data-manager` alias.
- Run repository-wide EOL normalization commit.
- Remove legacy `src/mcp.config.json` and update all scripts to consume `src/config/application.config.ts` (emit JSON only if external tooling strictly requires it). Add drift check to prevent divergence.
- Param name normalization scan & adjustments.
- Final lint/compile/test sweep and repository health report.

### Added (2025-11-08 – README overhaul & configuration direction)

- README updated to reflect:
  - User Context as the primary feature with global + local scopes and cache locations.
  - Settings are UI-first with chat-based adjustments planned.
  - Configuration source of truth is TypeScript (`src/config/application.config.ts` + `unifiedAgentConfig.ts`).
  - Quality gates elevated to a literal 100% coverage requirement.

### Changed (2025-11-08 – Config and cache clarifications)

- Documented the removal path for `src/mcp.config.json`. Transitional scripts will be updated to read TS config directly; emitting JSON is optional and generated to prevent drift.
- Clarified global cache location: `%USERPROFILE%/.vscode/extensions/.mcp-cache` on Windows (workspace cache remains `<repo>/.mcp-cache`).

### Added (2025-11-08 – Return type & docs remediation)

- Explicit return types added across agent config getters (clarification, data, database, orchestrator, relevantDataManager/userContext).
- Normalized fallback objects to ensure required fields present (e.g. `getResponseStyle`).
- Added missing documentation pages: structured IA pages `docs/guides/build-pipeline.md`, `docs/reference/tools/repository-health-agent.md`, `docs/concepts/orchestration.md` (root duplicates removed).
- Updated `.github/copilot-instructions.md` to mandate CHANGELOG updates for all non-trivial changes.

### Verification (latest session 2025-11-08)

### Fixed (2025-11-08 – DatabaseAgent JSDoc + operators tests)

- `src/agent/databaseAgent/index.ts` JSDoc completed with precise param/returns/throws across public and private methods (removed TODO placeholders).
- Added `tests/databaseAgent.operators.test.ts` to exercise operator handling ($eq, $ne, $gt/$gte/$lt/$lte, $in/$nin, $regex, $exists), alias mapping, cache behavior, helpers, and unknown category error.
- Lint and health remain PASS; tests PASS.

### Added (2025-11-08 – Coverage expansion batch)

- Added `tests/relevantDataManagerAgent.edges.test.ts` to cover empty search cases, missing record lookups, and dataset fingerprint/hash stability checks.
- Added `tests/mcpCache.extra.test.ts` to exercise shared cache store/read/list/delete flows and invocation logging, including missing-entry handling.
- Extended `$regex` coverage in `tests/databaseAgent.operators.test.ts` to include non-string field behavior.
- Added `tests/databaseAgent.cache-errors.test.ts` to cover cache read error path, cache write failure path, and useCache=false branch.
- All tests, lint, and health reports PASS; coverage trending upward (still shy of 100%).

- Build: PASS
- Tests: PASS
- Lint: PASS – no errors; previous MODULE_TYPELESS_PACKAGE_JSON warning resolved by adding `"type": "module"` to `package.json`.
- Health report: PASS (ESLint pattern tolerance added to avoid AllFilesIgnoredError).
- Docs: PASS – IA restructuring complete (no root duplicates); previous TypeDoc symbol warnings resolved by exporting `Priority` and re-exporting `AddFormats`.

### Verification (orchestrator cleanup follow-up 2025-11-08)

- Build: PASS
- Tests: PASS
- Lint: PARTIAL – 67 errors, 31 warnings remain (analytics integration/dashboard, dataAgent hasOwnProperty, extension JSDoc, configRegistry/configValidation unused params & JSDoc). Orchestrator now clean.
- Docs: PASS (unchanged)
- Health report: PASS (unchanged)

### Next Focus

- Replace `any` types in analytics and re-run lint to reach zero errors. (Completed for `analyticsIntegration`; `agentAnalytics` remains planned-only, no changes needed today.)
- Document analytics interfaces (new page if substantial) and update health verification.
- Implement settings validation layer with structured warnings and safe fallback; expose agent-level settings via Settings UI first.
- Update template processing to consume TS config; remove legacy JSON file from repo and add generation step if needed for external consumers.

### Changed

Begin migration from legacy `RelevantDataManagerAgent` to `UserContextAgent`:

- Tests now import from `src/agent/userContextAgent` (aliased where practical to reduce churn).
- `userContextAgent` re-exports `UnknownCategoryError` and legacy types to preserve public API during transition.
- Follow-up: invert dependency so legacy path re-exports from `userContextAgent`, then remove legacy folder in a subsequent release.

- Migrated progress tracking from `docs/PROGRESS.md` to the root `CHANGELOG.md` to avoid conflicts with docs governance.
- Refactored `bin/utils/postprocessDocs.ts` to promote generated pages directly into structured Diátaxis folders (guides/, concepts/, reference/) and remove obsolete root duplicates & nested subtree.
- Enhanced telemetry docs (`src/mcp/telemetry.ts`) with clearer cross-references and `@inheritDoc`, removing unsupported tags after lint feedback.
- Exported `Priority` type and re-exported `AddFormats` to resolve TypeDoc reference warnings.
- Added transitional User Context Agent (`src/agent/userContextAgent`) aliasing legacy Relevant Data Manager for incremental rename.
- Extended JSON schema patterns to support both `businessData` and `userContext` directories.

### Changed (2025-11-08 – Dependency inversion for User Context Agent)

- Inverted implementation ownership: moved the full agent logic under `src/agent/userContextAgent/index.ts` and converted `src/agent/relevantDataManagerAgent/index.ts` into a thin shim that extends `UserContextAgent`.
- Added a one-time deprecation warning when instantiating the legacy `RelevantDataManagerAgent` to guide consumers to `@agent/userContextAgent`.
- Preserved cache keys and profile ids for backwards compatibility (catalogue cache key remains `relevant-data:catalogue`).
- Kept config exports under both paths; `userContextAgent/config` wraps legacy config as per migration policy.

### Verification (post dependency inversion 2025-11-08)

- Added build-time MCP config generator and tests

### Added (2025-11-08 – Build-generated MCP config)

- Implemented `src/tools/generateMcpConfig.ts` to produce `out/mcp.config.json` from TS sources (`@config/application.config`, `@mcp/config/unifiedAgentConfig`).
- Wired generator into `prebuild` via new `mcp:gen` script; ensured generated file is `.gitignore`d.
- Added `tests/generateMcpConfig.test.ts` validating agent ids and application fields; asserts file is written.
- This begins deprecating `src/mcp.config.json` per plan; removal will follow after one cycle.
- Updated defaults across loaders (`ConfigurationLoader`, `AgentConfigResolver`, `RepositoryHealthAgent`, `TemplateProcessor`) to prefer generated `out/mcp.config.json` instead of legacy `src/mcp.config.json`.
- Adjusted build pipeline (`bin/build.sh`) validation stage to generate & validate `out/mcp.config.json` when TS config fallback triggers.
- Reordered `prebuild` script to run config generation before template processing so templates consume canonical generated JSON.

### Verification (config generator 2025-11-08)

- Build: PASS
- Tests: PASS (generator tests included; config path migration applied)
- Lint: PASS (generator annotated and uses path aliases)
- Docs: PENDING (will update README/docs next; template processor now reads generated JSON)
- Health: PASS
- Coverage: Maintained target; generator covered by tests

### Changed (2025-11-09 – Generated config path adoption)

- Default config consumers now point to generated `out/mcp.config.json` (ConfigurationLoader, AgentConfigResolver, RepositoryHealthAgent, TemplateProcessor).
- Build pipeline validation stage updated to generate/validate `out/mcp.config.json` when TS config fallback triggers.
- Prebuild script order adjusted: generate MCP config before template processing.
- Added `tsconfig.typedoc.json` and wired TypeDoc to avoid compiling legacy bin test harness (prevents stale API signature errors during docs generation).
- Legacy `src/mcp.config.json` scheduled for removal; still present until docs sweep completes.
- Test workflow now preprocesses templates before Jest to ensure placeholder category IDs (`<application>` etc.) are resolved for dataset-dependent assertions.
- Template processor default dataset directory switched to `src/userContext` (was `src/businessData`).

### Next Focus (follow-up after path migration)

- Remove `src/mcp.config.json` file and legacy `relevantDataManagerAgent` shim directory once docs references cleaned.
- Update README and docs to reflect new default JSON location and removal timeline.
- Run full health + lint sweep post removal to confirm zero stale references.

- Build: PASS
- Tests: PASS (no regressions after inversion; suite still green)
- Lint: PASS (addressed JSDoc throws alignment in new `userContextAgent`)
- Docs: UNCHANGED (to be updated next)
- Health: PASS
- Coverage: UNCHANGED (target remains 100%)

### Changed (2025-11-09 – Generator ESM alignment & category ID canonicalization)

### Changed (2025-11-09 – Agent folder simplification & user-context migration)

- Adopted two-file agent standard (`agent.config.ts` + `index.ts`) and deleted redundant `config.ts` in `src/agent/userContextAgent` and legacy shim path.
- Inlined `UserContextAgentConfig` wrapper into `src/agent/userContextAgent/index.ts`; updated legacy shim exports in `src/agent/relevantDataManagerAgent/index.ts` to re-export new `userContextAgentConfig`.
- Updated README to document configuration generation, canonical category IDs, quality gate details, troubleshooting matrix, and contributing rules.
- Refreshed `.github/copilot-instructions.md` with new alias lifecycle (including `relevant-data-manager` → `user-context`) and agent folder standard.
- Began removal sequence for legacy agent: shim remains; full directory removal scheduled post alias window.

### Changed (2025-11-09 – Remove hard-coded defaults in agents)

- Removed hard-coded business category defaults and config objects from `src/agent/dataAgent/index.ts` (all analysis/exploration/quality/performance/search/synthesis accessors now config-only; explorationPriorities purely config-driven).
- Removed hard-coded fallbacks for `guidanceTypes` and `knowledgeSources` plus remaining guidance/escalation/knowledgeBase/routing/contextAnalysis/performance fallback objects in `src/agent/clarificationAgent/index.ts`; values must come from `agent.config.ts`.
- Consolidated former `src/agent/orchestrator/config.ts` logic into `src/agent/orchestrator/index.ts` and removed all embedded fallback message/weights/phrases defaults; strict errors thrown if required config blocks missing (prepares for deleting legacy file after verification).

### Verification (post defaults cleanup 2025-11-09) (superseded by later PASS verification)

- Build: PASS
- Tests: PASS
- Lint: PASS (agent index refactors JSDoc-complete; added @throws annotations)
- Docs: PASS
- Health: PASS
- Coverage: STABLE

### Docs (2025-11-09 – README & governance updates)

- Expanded configuration model section (generator, JSON artifact lifecycle) and clarified User Context canonical IDs.
- Added quality gates breakdown and troubleshooting table.
- Added agent folder standard and migration rules to Copilot instructions.

### Verification (post agent folder updates 2025-11-09)

- Build: PASS
- Tests: PENDING (run after remaining agent config merges—current changes limited to userContext + shim)
- Lint: PASS (no new JSDoc placeholders introduced)
- Docs: UNCHANGED (README/manual instructions updated; generated docs unaffected yet)
- Health: PASS (no structural violations)
- Coverage: STABLE (files removed were thin wrappers; logic now consolidated)

### Next Focus (after initial folder consolidation)

- Merge remaining agent `config.ts` logic (database, data, clarification, orchestrator) into their respective `index.ts` and delete those files.
- Update any imports referencing `/config` paths; expose config wrappers from `index.ts`.
- Re-run full test + coverage; confirm 100% after refactor.
- Remove legacy shim directory entirely once downstream references & docs updated.

- Updated `tsconfig.json` module target to `ES2022` to align with package `"type": "module"` and enable `import.meta` usage, eliminating prior runtime `require` errors during `mcp:gen`.
- Refactored `src/tools/generateMcpConfig.ts` execution guard to ESM-compatible `runIfDirect` with JSDoc and explicit `Promise<void>` return type (removed unused eslint-disable directive).
- Ensured alias appears distinctly: generator now emits both `relevant-data-manager` (canonical) and `user-context` (migration alias) without duplication by using loop id instead of orchestration id.
- Canonicalized category IDs in `src/userContext/*/category.json` replacing placeholders (`<application>`, `<department>`, `<people>`, `<companyPolicy>`, `<companyResource>`) with stable slugs (`applications`, `departments`, `people`, `companyPolicies`, `companyResources`) removing dependency on template replacement for tests.
- Added precise JSDoc return descriptions in `src/mcp/config/unifiedAgentConfig.ts` (removed placeholder `TODO: describe return value.` lines) to satisfy strict lint rules.

### Verification (post generator & category updates 2025-11-09)

- Build: PASS (ES2022 module compilation succeeds)
- Tests: PASS (suite green after category ID canonicalization; generator output validated manually)
- Lint: PASS (no JSDoc placeholder warnings; import.meta accepted under ES2022)
- Docs: UNCHANGED (pending README/doc updates for alias lifecycle clarity)
- Health: PASS (no new validation warnings)
- Coverage: PENDING explicit measurement (expected unchanged; follow-up will assert 100% or schedule remediation)

### Fixed (2025-11-08 – Analytics integration and config JSDoc sweep)

### Fixed (2025-11-08 – RelevantDataManagerAgent JSDoc + error-path tests)

- Replaced remaining `TODO: describe return value.` in `src/agent/relevantDataManagerAgent/index.ts` with precise return descriptions and corrected JSDoc alignment to satisfy strict lint rules.
- Added error-path tests for the agent:
  - `tests/relevantDataManagerAgent.errorPaths.test.ts` (empty data directory; missing `category.json`).
  - `tests/relevantDataManagerAgent.entityConnectionsErrors.test.ts` (missing record for `getEntityConnections`).
- Added snapshot invalidation test to cover `getOrCreateSnapshot` cache recordHash behavior:
  - `tests/relevantDataManagerAgent.snapshotCacheInvalidation.test.ts` ensures record changes update snapshot and recordHash metadata.

### Verification (post resilience improvements 2025-11-08)

- Build: PASS
- Tests: PASS
- Lint: PASS (no JSDoc placeholder lines; alignment OK)
- Docs: PASS (unchanged)
- Health: PASS
- Coverage: IMPROVED (snapshot cache + error paths + fingerprint divergence)

- `src/shared/analyticsIntegration.ts`
  - Removed remaining `any` usages; replaced with `unknown` and precise assertions.
  - Imported and returned `AgentUsageStats` for `getStats`; removed duplicate/placeholder JSDoc blocks and alignment issues.
  - Replaced dynamic require with static import for `createStandardReport`; used report preview to avoid unused var.
- `src/types/configRegistry.ts`
  - Completed JSDoc for util functions with hyphenated params and explicit `@returns` details.
- `src/types/configValidation.ts`
  - Removed unused import; underscored unused params in placeholder validators; updated JSDoc param names accordingly.
- `src/shared/agentConfigurationService.ts`
  - Normalized JSDoc alignment; simplified overly complex `@returns` types to valid forms.
- `src/mcp/prompts/index.ts`
  - Rewrote JSDoc to avoid destructured param namepaths; added nested option property docs for clarity.

### Fixed (2025-11-08 – Module type declaration)

- `package.json`
  - Added `"type": "module"` to eliminate Node `MODULE_TYPELESS_PACKAGE_JSON` warning during lint runs.
  - Confirmed subsequent lint invocation no longer emits the warning.

### Docs

### Fixed (2025-11-08 – Dataset root alignment & extension test updates)

- `src/agent/relevantDataManagerAgent/index.ts` updated `DEFAULT_DATA_ROOT` from deprecated `bin/data` to new `src/userContext` directory; added test overrides via `VSCODE_TEMPLATE_DATA_ROOT` to remove hardcoded path assumption and unblock agent/database/data test suites.
- Tests (`tests/relevantDataManagerAgent.test.ts`, `tests/databaseAgent.test.ts`, `tests/dataAgent.test.ts`) now set env var before creation to ensure consistent dataset loading; prevents cascading failures in dependent agents.
- `tests/extension.test.ts` refactored to match current activation flow using `vscode.chat.createChatParticipant` (removed legacy slash command/mention expectations); updated info message assertion to new phrasing.
- Replaced disallowed JSDoc `TODO: describe return value` placeholders in relevant data manager agent with concrete return descriptions to satisfy lint rules.

### Verification Update (post dataset root fix 2025-11-08)

- Build: PASS
- Tests: PASS
- Lint: PASS
- Docs: PASS
- Health report: PASS
- Coverage: IMPROVED (follow-up to reach 100%)
- JSDoc: IMPROVED

### Added (2025-11-08 – Consolidated index cache behaviour tests)

- Added `tests/relevantDataManagerAgent.catalogueCacheHit.test.ts` to ensure the consolidated index (dataset catalogue) is only persisted once when the dataset fingerprint matches an existing shared cache entry, exercising the early return branch in `persistConsolidatedIndex`.
- Added `tests/relevantDataManagerAgent.catalogueCacheDivergence.test.ts` to modify dataset records and assert that a changed fingerprint triggers a subsequent persist to the shared cache (cache miss path).

### Verification (after cache-hit + divergence tests 2025-11-08)

- Build: PASS
- Tests: PASS (cache-hit and divergence scenarios validated; full suite green)
- Lint: PASS (no new JSDoc regressions introduced by test)
- Docs: UNCHANGED (PASS)
- Health: PASS
- Coverage: IMPROVED (both fingerprint branches covered)
- JSDoc: UNCHANGED (PASS)

- Introduced this changelog as the single source of truth for Copilot Chat–managed work. Updated `.github/copilot-instructions.md` to reference this flow and resume prompts.
- Added build pipeline, orchestration overview, and repository health agent documentation.
- Added JSDoc & TypeDoc Style Guide at `docs/guides/jsdoc-style-guide.md`; updated `mcpCache` and `telemetry` as exemplars for cross-linking and clearer contracts.
- Rewrote root `README.md` to be user-focused (install, configure, commands). Moved developer content to `docs/guides/development-workflow.md`. Updated links to structured docs to avoid TypeDoc copy warnings.

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

### Fixed (2025-11-08 – Orchestrator typing & JSDoc cleanup)

- Refactored `src/agent/orchestrator/index.ts` to remove `any` usage in payload formatting, strengthen `messages` typing, and normalize JSDoc blocks (hyphenated params, blank lines, nested `context.topic`).
- Added safer summary generation with fallback strings to eliminate optional chaining replace errors.

### Changed (2025-11-08 – Orchestrator diagnostics)

- Updated orchestrator configuration access patterns to cast messages to required shapes locally, improving type safety without widening global config types.

### Verification Update (post-orchestrator cleanup 2025-11-08)

- Build: PENDING (to be re-run after batch of lint fixes).
- Tests: PENDING.
- Lint: IMPROVED – Orchestrator file now passes with zero errors; remaining analytics/type config JSDoc items outstanding.
- Docs: UNCHANGED (PASS).
- Health report: UNCHANGED (PASS).
