---
title: TODO
summary: A centralized Task management location used by CoPilot Chat to track current progress.
roles:
  - engineering
  - documentation
associations:
  - TODO
  - TODOs
  - reference
  - documentation
---

<!-- BEGIN:COPILOT_INSTRUCTIONS -->

## Copilot Instructions

### Core Principals

1. This file is the single source of truth for all outstanding tasks. When working with Tasks/TODOs, always refer to this file exclusively.
2. It is collaboratively managed by the User and Copilot Chat.
3. All outstanding tasks must be captured here.
4. Tasks should be organized by proper sections (Current/Next/Backlog) and priorities (P1/P2/P3). (See [Guidelines](#guidelines) below)
5. Copilot Chat should proactively review and keep this file up to date, reflecting user-requested priority changes.
6. Log capture all change history, organized by date/time and semantic titles.
7. After each set of logged changes, revisit and update Outstanding Tasks accordingly.
8. You must always use [Automation Aids](#automation-aids) below to help manage and maintain this files integrity.
9. You must always use [Guidelines](#guidelines) for detailed instructions on managing tasks.
10. Changes in this file should be reflected in [CHANGELOG.md](./CHANGELOG.md), keeping both files in sync.
11. High-level goals and vision should be reflected in [CONTEXT-SESSION.md](./CONTEXT-SESSION.md), keeping alignment between tasks and overall direction.
12. Whenever you're not sure on how to handle a situation, ask the User. Don't just make an assumption.

### High Level Notes

- Maintain this file as the single source of truth for outstanding tasks.
- This file is used by `.github/copilot-instructions.md` for tracking historical decisions and active planned tasks before starting new work.
- Ensure all outstanding tasks are captured here, organized by priority.
- There are custom scripts created for interacting with this file via CLI to ensure consistency and proper formatting. (see [Automation Aids](#automation-aids) below)

### Automation Aids

The ChangeLogManager CLI has been retired. Edit `CHANGELOG.md` directly using the required format (timestamps: `YYYY-MM-DD HH:MM:SS`). For automation that remains:

- Repo-ops (session management):
  - Rotate session context: `npm run repo:ops -- session rotate [--write]`
  - Lint session context: `npm run repo:ops -- session lint`
- Note: CHANGELOG→TODO mirror and generated-actions commands have been removed. `TODO.md` is the single source of truth for tasks.

- Repo-ops (changelog entries):
  - Scaffold an entry block (copy/paste):
    - `npm run repo:ops -- changelog scaffold --type <feat|fix|docs|refactor|test|perf|ci|build|style|chore> --summary "<short summary>" [--context "<problem/context>"]`
  - Plan an insertion (dry-run; prints plan and diff snippets):
    - `npm run repo:ops -- changelog write --type <type> --summary "<short summary>" [--context "<problem/context>"]`
  - Apply insertion with backup:
    - `npm run repo:ops -- changelog write --type <type> --summary "<short summary>" [--context "<problem/context>"] --write`
  - After applying, run gates and add a Verification block manually:
    - Build/Tests: `npm run compile && npm run test`
    - Optional docs/health: `npm run prebuild`
    - Then append a heading like: `##### Verification – 2025-11-13 (Label)` with Build/Tests/Lint/Docs/Health checklist.

#### Guidelines

This file serves as the central repository for tracking all outstanding TODOs, managed collaboratively by the user and Copilot Chat.

Follow these guidelines to ensure effective task management:

1. **Comprehensive Tracking**: Ensure every outstanding task is documented here, categorized by focus (Current, Next, Backlog).
2. **Incomplete TODO Organization**: Group incomplete TODOs into three sections distinct sections for clarity and programmability.
   - **Current TODOs**: Tasks actively being worked on. Contains a single parent-level item. Represents the immediate focus.
   - **Next TODOs**: Tasks planned for the near future.
   - **Backlog TODOs**: Unplanned tasks that may be addressed later.
3. **TODO Priority**: Every TODO should have a classified priority: `P1 / Priority 1 (Critical. Blocking or  Urgent) | P2 / Priority 2 (Non-Blocking, Handle once P1 finished) | P3 / Priority 3 (Lowest Priority, handle after all P1 and P2 finished)`.
4. **TODO Hierarchy**: A TODO will likely live within a hierarchy. A TODO may have a parent, siblings, or children items.
5. **TODO Completion Tracking**: Completion of TODOs should take it's hierarchy into consideration. Completing a parent TODO should also complete all child TODOs. Completing a child TODO should not complete the parent TODO unless all siblings are also completed. A full list of TODOs is not complete until the full hierarchy is processed.
6. **Regular Updates**: Regularly update this file to reflect changes in task status and priorities:
   - Use visual indicators for status: ✅ completed | ❌ removed | ⏳ in-progress | 🚫 blocked | ‼️invalid
   - Validate integrity and modify as things change.
7. **Completion Workflow**: When a TODO is completed, and CHANGELOG entry should be made. Reference the `.github/copilot-instructions.md` and `CHANGELOG.md` for specifics.

<!-- END:COPILOT_INSTRUCTIONS -->

---

<!-- BEGIN:GENERATED-ACTION-ITEMS -->

## Generated Action Items

<!-- BEGIN:CURRENT_ACTION_ITEMS -->

### Current Action Items

- [ ] P1: Validation Runtime Extraction (Phased)

  - [x] Phase 1: Inventory & Tag – enumerated runtime validation exports (agent/category/relationship/errors/reporting); added Phase 1 @remarks tags to each exported function in `src/types/userContext.types.ts`, `src/types/configValidation.ts`, `src/types/configRegistry.ts`.
  - [x] Phase 2: Parity Test Scaffold – added `tests/validation.parity.test.ts` (locks behavior for category + config validators, 38 passed, 1 skipped total suites now 39).
  - [x] Phase 3: Shared Module Completion (Category subset) – created `src/shared/validation/categoryValidation.ts` (extracted logic; delegation deferred to preserve types-only constraint).
  - [x] Phase 3: Shared Module Completion (Config subset) – added `src/shared/validation/configValidation.ts` (duplicated logic; parity preserved).
  - [x] Phase 4: Single-Agent Import Switch – migrated `UserContextAgent` to shared validation (aliased imports); verification green.
  - [x] Phase 5: Multi-Agent Switch – migrated remaining agents to shared config validation; runtime removal deferred to Phase 6 enforcement.
  - [x] Phase 6: Enforcement Test – removed all runtime validator implementations from `src/types/**`; added `tests/types.purity.test.ts` scanning for forbidden validator names; updated affected imports to shared modules; test passing.
  - [x] Phase 7: Cleanup & Changelog – removed phased inline remarks across types; added verification changelog entry confirming tests (42 passed / 1 skipped) and purity intact.
  - [ ] Phase 8: Post-Migration Audit – confirm no hardcoded business values introduced; validate agent isolation remains intact.
  - [ ] Phase 9: Coverage Review – ensure parity tests + new shared module maintain or improve coverage metrics.

- [ ] P1: MCP Transport & Protocol Enforcement
  - [x] Ensure JSON-RPC 2.0 compliance end-to-end.
  - [x] Verify stdio is default transport; HTTP enabled only with `MCP_HTTP_ENABLED=true`.
  - [x] Consolidate JSON-RPC handlers into a single path reused across transports.
    - [x] Implement single dispatcher (initialize, tools/list, tools/call) and remove duplicates+
    - [x] Wire both stdio and HTTP to reuse the same dispatcher
  - [ ] Add tests to validate protocol and transport behavior (single-handler + negative transport cases).
    - [x] Unit: method not found / invalid params error shapes
    - [ ] Integration: stdio path happy-path tools/list + tools/call
    - [x] Integration: HTTP behind `MCP_HTTP_ENABLED=true` only; disabled by default
  - [x] Update documentation to reflect transport and protocol standards.
  - [x] Implement dynamic tools registry (deriving tool descriptors from orchestrator/config) and add integrity tests.
- [ ] P2: Agent Cleanup & Orchestrator Compliance (Stabilization)
  - [ ] Types: Complete comprehensive TSDoc for remaining configuration types (no placeholders).
  - [ ] Extract functions from `src/types/**` into `src/shared/**` (e.g., `setConfigItem`, `createDescriptorMap`, `_getConfig`, `getUserFacingConfig`).
  - [ ] CommunicationAgent: Add conditional enumeration of `availableCategories` on success when helpful (config flag).
  - [ ] ClarificationAgent: Derive examples/capabilities strictly from config/manifest (remove any residual hardcoding).
  - [ ] DatabaseAgent/DataAgent: Audit to confirm zero hardcoded business values; all derived from config/user data.
  - [ ] Add unit tests covering extracted shared helpers.
  - [ ] Update CHANGELOG with verification block after refactor.
  - [ ] Final pass: run `npm run compile && npm test && npm run prebuild` and capture outputs.

<!-- END:CURRENT_ACTION_ITEMS -->
<!-- BEGIN:NEXT_ACTION_ITEMS -->

### Next Action Items

- [ ] P3: REFACTOR: Organize tests to mirror source hierarchy (e.g., tests/src/agent/orchestrator)
  - [ ] Update import paths & adjust Jest config if needed
  - [ ] Verify suite passes post-move
- [ ] P3: REFACTOR: Rebuild and add governance to bin content
  - [ ] Convert bin/utils tools into self-contained modules
  - [ ] Migrate build logic into `bin/utils`
  - [ ] Update package.json scripts
  - [ ] Add test coverage for bin utilities
- [ ] P3: UTILITY: Changelog utility follow-ups (hardening)
  - [ ] Unit tests for task section helpers
  - [ ] Integration test for CLI flows
  - [ ] JSON export with schemaVersion
  - [ ] Auto verification `--auto-verify` flag
  - [ ] Docs & README updates
- [ ] P2: CLI: CHANGELOG - UX overhaul (dry-run/apply semantics)
  - [ ] Update `--write` to create a record.
  - [ ] Update so the only way to execute a dry run is with `--validate`.
  - [ ] Update CLI output to say `VALIDATED` for dry-run and `APPLIED` for apply, with clear plan lines
  - [ ] Update `bin/repo-ops -- help` text and examples
  - [ ] Update `CHANGELOG.md` Copilot Instructions (Scaffold vs Write & Verification) to reflect new flags
- [ ] P2: CLI: CHANGELOG - Provide richer changelog fields
  - [ ] Add `--context-file <path>` to load markdown context from file (heredoc alternative)
  - [ ] Add optional flags to populate sections directly: `--changes`, `--architecture`, `--filesChanged`, `--testing`, `--impact`
  - [ ] Add `--template minimal` to omit placeholder sections when details are provided via flags or file
  - [ ] Add `--auto-verify` to run `npm run compile && npm run test && npm run prebuild`, capture results, and append a Verification block
  - [ ] Add duplicate-entry guard (same day + identical summary) with `--force` override
- [ ] P2: CLI: Tests and docs for new flags
  - [ ] Add unit tests for write/scaffold with new flags (dry-run/apply, context-file, minimal template)
  - [ ] Add integration tests that verify generated markdown has no MD lint errors
  - [ ] Update README/docs and `CHANGELOG.md` instructions with examples for new flags
- [ ] P3: EXTENSION: Add TODO management capabilities (consider agent)
  - [ ] Evaluate agent vs direct extension implementation
  - [ ] Define minimal commands & UX
  - [ ] Integrate with CommunicationAgent formatting
- [ ] P1: Refactor shared config utilities into `src/shared`
  - [ ] Extract `BaseAgentConfig` helpers and related utilities into `src/shared/config/`
  - [ ] Candidates: `setConfigItem`, `getUserFacingConfig`, `_getConfig`, `getExecutionConfig`, descriptor helpers
  - [ ] Extract `createDescriptorMap()` into `src/shared/config/descriptors.ts`
  - [ ] Update all imports across agents and tools; run `npm run fix:imports` if needed
  - [ ] Add unit tests for shared helpers; update existing tests to new import paths
  - [ ] Update type docs to reference new shared modules; add CHANGELOG entry
- [ ] P2: DOCS: Resolve TypeDoc external link warnings
  - [ ] Add `externalSymbolLinkMappings` for `process.platform`, `os.homedir`, and `process.env.*`
  - [ ] Alternatively adjust comments to avoid unresolved links
  - [ ] Re-run `npm run docs` and confirm 0 warnings
- [ ] P2: DOCS: Add regression test for JSON-RPC page promotion
  - [ ] Test `bin/utils/postprocessDocs.ts` promotes `docs/docs/mcp/jsonRpc/README.md` → `docs/mcp/json-rpc.md`
  - [ ] Guard against path changes in TypeDoc output
- [ ] P1: Data-Driven Architecture Integrity
  - [ ] Objective: Complete workflow execution system and finalize architectural cleanup.
  - [ ] Status: ✅ Phase 4 COMPLETE - Workflow system implemented and integrated
  - [ ] Current Issue: DatabaseAgent initialization error - data sources not loading properly
  - [ ] Next Steps:
    - [x] ✅ Phase 1-4: COMPLETE (Agent isolation, response handling, testing, workflow coordination)
    - [ ] 🔄 Debug & Fix: DatabaseAgent data source initialization
    - [ ] 🔄 Phase 5: Documentation – Update migration guide with workflow patterns
    - [ ] 🔄 Phase 6: Final Verification – End-to-end testing, health check
    - [ ] 🔄 Phase 7: Legacy Cleanup – Remove relevant-data-manager references
- [ ] P2: GOV: Add "Core Principles" and "Decision Tree" sections to `.github/copilot-instructions.md`
  - [ ] Review and refine user's draft notes for Core Principles
  - [ ] Validate, restructure, and position both sections at the top
- [ ] P2: GOV: Update all sections to reference Core Principles/Decision Tree (start/end workflow)
  - [ ] Ensure every section has explicit fallback to principles/decision tree
  - [ ] Enforce completion-loop semantics so requests are only done when loop closed
  - [ ] Architecture Compliance:
    - [ ] ✅ Agent Isolation / Data-Driven / Single-Class / Types centralized / Communication formatting via CommunicationAgent
- [ ] P1: Build Utilities Evaluation and Consolidation
  - [ ] Disable JSON lint in pipelines (bash + Windows) — COMPLETE in this branch
  - [ ] Audit `@tools/repositoryHealth` usage paths
    - [ ] Decide: build-time only vs. runtime usage
    - [ ] If build-only, plan migration to `bin/utils` packaged tool (like `repo-ops`)
  - [ ] Unify scripts
    - [ ] Replace `npm run lint:json` with repo-ops subcommand or a single entry point
    - [ ] Review `lint:docs` and consider merging into the same tool for consistency
  - [ ] CI integration
    - [ ] Update build scripts and CI to call the unified tool
    - [ ] Document strict vs. non-strict modes for local vs. CI
  - [ ] Docs
    - [ ] Update README and `.github/copilot-instructions.md` to reflect the new flow
    - [ ] Add troubleshooting section for health/lint failures
- [ ] P2: BUILD: Update build Pipeline to include bundler
  - [ ] Reference: [Bundling extensions](https://code.visualstudio.com/api/working-with-extensions/bundling-extension)
  - [ ] Evaluate options for bundling the extension to reduce size and improve performance.
    - [ ] Consider using tools like Webpack, Rollup, or esbuild.
    - [ ] Update the build scripts in package.json to include the bundling step.
    - [ ] Test the bundled extension to ensure it works correctly in VS Code.
    - [ ] Update documentation to reflect the new build process.
  - [ ] P1: Lint/Docs: Adopt TSDoc in `src`, keep JSDoc for `out`
    - [ ] P2: DOCS/BUILD: Adopt TSDoc in `bin/**` (currently mixed or implicit) and add enforcement rule (eslint-plugin-tsdoc) parity with `src/**`.
  - [ ] P2: MCP Server: Rename root cache dir `usercontext-mcp-extension` to `.usercontext-mcp-extension` (leading dot), update all references and add migration cleanup script.
    - [ ] Add TSDoc module `@packageDocumentation` headers in each bin TypeScript file.
    - [ ] Add symbol-level docs for exported functions (repo-ops helpers, lock, integrity, fast map).
    - [ ] Update governance references to reflect completed adoption.
    - [ ] Add tests/lint step confirming absence of JSDoc-only patterns in `bin/**`.
    - [ ] Install `eslint-plugin-tsdoc` and update local dev (`npm i`).
    - [ ] Run `npm run lint` to validate TSDoc tags (e.g., `@remarks`) do not error.
    - [ ] Confirm TypeDoc renders `@remarks` and examples from `src` as expected.
    - [ ] Evaluate adding a `jsdoc` doc task for `out/**` (optional) and wire as `docs:jsdoc`.
    - [ ] Update governance docs to reflect “TSDoc for src / JSDoc for out” policy.
    - [ ] Verification: Run `npm run prebuild` (lint/docs/health) and capture results in CHANGELOG verification block.

<!-- END:NEXT_ACTION_ITEMS -->
<!-- BEGIN:BACKLOG_ACTION_ITEMS -->

### Backlog Action Items

- [ ] P3: Review the code base and identify british-english words `artefacts`, that should be american-english `artifacts`. Also seeing other words like 'behaviour', 'optimise', 'utilise', 'customise', 'organisation' etc.
- [ ] P3: SECURITY: Assess need for build-time obfuscation (risk vs benefit)
- [ ] P3: Evaluate the logic in `C:\repo\vscode-extension-mcp-server\src\tools`, and identify things that should exist in `C:\repo\vscode-extension-mcp-server\bin\utils\`, and update all imports, tests, documentation, etc. accordingly.
  - [ ] Specific follow-up: Move `src/tools/repositoryHealth.ts` into a `bin/utils` library and consolidate shared helpers with `bin/utils/validateMarkdown.ts` and `bin/utils/validateJson.ts`.
- [ ] P3: Rename `C:\repo\vscode-extension-mcp-server\src\tools` to `C:\repo\vscode-extension-mcp-server\src\utils`, and update all imports, tests, documentation, etc. accordingly.
- [ ] P3: Add a feature to the MCP Server for Error Event handling. Must be managed and fail gracefully.

  - [ ] An Error Event management solution needs to be created
  - [ ] All of the logic should run through it, so no matter what happens the extension doesn't break VS Code.
    - [ ] It should be connected to logging, used by Orchestrator, have safe guards to self-disable after N failure attempts, notify vscode accordingly, disable in critical failure event, and then notify user to contact developer if still issues.

<!-- END:BACKLOG_ACTION_ITEMS -->
<!-- END:GENERATED_ACTION_ITEMS -->
<!-- BEGIN:COMPLETED_ACTION_ITEMS -->

## Completed Action Items

- [x] CI: Add optional repo-ops lint step — implemented via `.github/workflows/repo-ops-lint.yml`
- [x] P1: CommunicationAgent clarification is config-driven — see CHANGELOG entry "2025-11-13 10:00:00 refactor: CommunicationAgent clarification via configuration; add types and templates"
- [x] P1: MCP Server: Resolve categoryId via aliases/names and enumerate `availableCategories` on error — see CHANGELOG entry "2025-11-13 14:28:32 fix/mcp: Resolve categoryId via aliases and names in MCP tools"
- [x] P1: Server: Add Orchestrator bridge and route MCP tools through it (Part 1) — see CHANGELOG entry "2025-11-14 09:30:00 refactor/server: Add Orchestrator bridge and route MCP tools through it (Part 1)"
- [x] ✅ P1: Replace static tools registry with orchestrator/config derived list
- [x] Objective: Remove hardcoded `tools` array in `src/server/index.ts` and generate tool descriptors from orchestrator or config sources.
- [x] P1: DOCS: Move JSON-RPC reference into `src/docs` and promote stable page
  - Completed: Added `src/docs/mcp/jsonRpc.ts` with `@packageDocumentation`
  - Completed: Promoted generated page to `docs/mcp/json-rpc.md` via postprocess
  - Verified via `npm run docs` and changelog entry (2025-11-14)
- [x] P1: repo-ops: Add fast incremental changelog map (`--fast`) and `diff` subcommand — see CHANGELOG entry "2025-11-14 14:45:00 feat: repo-ops: add fast incremental map and diff subcommand"

<!-- END:COMPLETED_ACTION_ITEMS -->
<!-- BEGIN:GENERATED-ACTION-ITEMS -->
