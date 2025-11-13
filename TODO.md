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

## Copilot Instructions

<!-- BEGIN:COPILOT_INSTRUCTIONS -->

### Core Principals

1. This file is the single source of truth for all outstanding tasks.
2. It is collaboratively managed by the User and Copilot Chat.
3. All outstanding tasks must be captured here, organized by priority.
4. Copilot Chat should proactively review and keep this file up to date, reflecting user-requested priority changes.
5. After each set of logged changes, revisit and update Outstanding Tasks accordingly.
6. Logs capture all change history, organized by date/time and semantic titles.

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
<!-- BEGIN:GENERATED_ACTION_ITEMS -->

## Generated Action Items

<!-- BEGIN:CURRENT_ACTION_ITEMS -->

### Current Action Items

- [ ] P1: Agent Cleanup & Orchestrator Compliance (Critical)
  - [ ] Objective: Ensure orchestrator follows agent isolation and data-driven design; agents return typed data only.
  - [ ] Scope:
    - [ ] Deep review each agent (5 Ws: intent, problem, why, how, when).
    - [ ] Update TSDoc for all public agent APIs; fix missing @param/@returns, @example, @remarks, etc.
    - [ ] Audit for hardcoded business data and orchestrator responsibilities; delegate to appropriate agents.
    - [ ] Verify clear separation of concerns, modular, data-driven design.
  - [x] Orchestrator remediation:
  - [x] Expand `src/agent/index.ts` with documentation-level overview of core design and infrastructure.
    - [x] Remove user-facing formatting and ad-hoc markdown; call `CommunicationAgent` for all formatting.
    - [x] Replace hardcoded `validAgents` in `validateAction` with registry-derived keys.
    - [x] Refactor `route`/`handle` to return typed data and omit `markdown` fields; assemble UX via `CommunicationAgent`.
  - [ ] Findings (seeded TODOs):
    - [x] Orchestrator: Migrate `formatRecords()`/`formatObject()` and inline markdown (e.g., table/headers) to `CommunicationAgent`.
    - [x] Orchestrator: Remove fallback hardcoded categories in `extractQueryParams` (e.g., "people", "departments"); derive solely from `UserContextAgent` category data/aliases.
    - [x] Orchestrator: Replace remaining direct markdown assembly (e.g., `### ${snapshot.name}`) with `CommunicationAgent` templates.
    - [x] CommunicationAgent: Clarification formatting is fully config-driven (no hardcoded examples/categories); uses `communication.clarification`.
    - [x] CommunicationAgent: Replace hardcoded "Available Categories" list with dynamic enumeration from `UserContextAgent` categories (via response metadata in error/clarification paths).
    - [x] CommunicationAgent: Replace example queries that hardcode category names with data-driven templates or config-provided samples (clarification path complete; other responses pending). Audit found no hardcoded category examples outside clarification; clarification already config-driven.
    - [ ] Types: Add comprehensive TSDoc for all configuration types in all type files. For example, `src/types/agentConfig.ts` (purpose, parameters, defaults) and include example snippets to power IntelliSense; prefer types-level docs over inline comments in `agent.config.ts` to avoid duplication as a code-base level rule. We may find duplication and contradictions. Use the end of the CONTEXT-SESSION for notes to stay organized and make a plan between the markers `CONTEXT-SESSION-LLM-THINKING-NOTES-AREA`.
      - [ ] agentConfig.ts
        - [x] Made initial changes to verify desire
        - [x] User updated with more complete JSDOC @property values and comments as desired.
        - [x] Verified user changes to make a plan for all other files
      - [ ] List other files here and execute same type of changes as in agentConfig.ts
        - [ ] src/types/applicationConfig.ts — add interface-level TSDoc with @remarks/@example; move any inline examples to symbol docblocks
        - [ ] src/types/configValidation.ts — document exported types/functions; ensure @param/@returns; add examples for key validators
        - [ ] src/types/configRegistry.ts — document registry types/APIs; provide usage example for registration and lookup
        - [ ] src/types/interfaces.ts — add summaries and examples for shared interfaces; ensure member docs are concise
        - [ ] src/types/communication.types.ts — document response/formatting types; examples where relevant
        - [ ] src/types/workflow.types.ts — document workflow models; include minimal end-to-end example
        - [ ] src/types/userContext.types.ts — document user context models; add examples for common shapes
        - [ ] src/types/index.ts — add module-level @packageDocumentation and re-export notes
    - [ ] Extract Functions out of `Types` and move into `Shared`
      - When reviewing `agentConfig.ts`, I noticed a handful of functions and methods that should be in the `C:\repo\vscode-extension-mcp-server\src\shared` folder.
        - example, but not limited to: `public setConfigItem`, `function createDescriptorMap`, `protected _getConfig():`, `public getUserFacingConfig()`.
        - I'm concerned this is a mistake thats true in other files, and we need to keep the architecture clean.
    - [ ] CommunicationAgent (evaluation): Identify other responses where `metadata.availableCategories` (or similar) adds value beyond error/clarification (e.g., success for `metadataRetrieved`); define config-gated enumeration and limits; open follow-ups per finding.
    - [ ] ClarificationAgent: Ensure examples and capability lists derive from manifest/config (no hardcoded business values).
    - [ ] DatabaseAgent: Confirm all field aliases live in config only; no code-level hardcoded business values.
    - [ ] DataAgent: Confirm category references are read from config; no code-level hardcoded business values.
  - [ ] Next Steps:
    - [ ] Produce per-agent review notes in CONTEXT-SESSION (Current Focus Detail) as working notes. This will require updating copilot-instructions.md and the CONTEXT-SESSION.md files with clear instructions to guide the LLM accordingly.
    - [ ] Open follow-up TODOs per finding (one line each) and link in CHANGELOG when resolved.
  - [ ] P2: Follow-up (Copilot Chat UX): Update `CommunicationAgent` to leverage additional VS Code Copilot Chat features (structured TODO blocks, interactive messages, collapsible sections/details, and richer progress/status elements) in formatted responses.

<!-- END:CURRENT_ACTION_ITEMS -->
<!-- BEGIN:NEXT_ACTION_ITEMS -->

### Next Action Items

- [ ] P1: Refactor shared config utilities into `src/shared`
  - [ ] Extract `BaseAgentConfig` helpers and related utilities into `src/shared/config/`
  - [ ] Candidates: `setConfigItem`, `getUserFacingConfig`, `_getConfig`, `getExecutionConfig`, descriptor helpers
  - [ ] Extract `createDescriptorMap()` into `src/shared/config/descriptors.ts`
  - [ ] Update all imports across agents and tools; run `npm run fix:imports` if needed
  - [ ] Add unit tests for shared helpers; update existing tests to new import paths
  - [ ] Update type docs to reference new shared modules; add CHANGELOG entry
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
    - [ ] Install `eslint-plugin-tsdoc` and update local dev (`npm i`).
    - [ ] Run `npm run lint` to validate TSDoc tags (e.g., `@remarks`) do not error.
    - [ ] Confirm TypeDoc renders `@remarks` and examples from `src` as expected.
    - [ ] Evaluate adding a `jsdoc` doc task for `out/**` (optional) and wire as `docs:jsdoc`.
    - [ ] Update governance docs to reflect “TSDoc for src / JSDoc for out” policy.

<!-- END:NEXT_ACTION_ITEMS -->
<!-- BEGIN:BACKLOG_ACTION_ITEMS -->

### Backlog Action Items

- [ ] P3: Review the code base and identify british-english words `artefacts`, that should be american-english `artifacts`. Also seeing other words like 'behaviour', 'optimise', 'utilise', 'customise', 'organisation' etc.
- [ ] P3: Evaluate the logic in `C:\repo\vscode-extension-mcp-server\src\tools`, and identify things that should exist in `C:\repo\vscode-extension-mcp-server\bin\utils\`, and update all imports, tests, documentation, etc. accordingly.
  - [ ] Specific follow-up: Move `src/tools/repositoryHealth.ts` into a `bin/utils` library and consolidate shared helpers with `bin/utils/validateMarkdown.ts` and `bin/utils/validateJson.ts`.
- [ ] P3: Rename `C:\repo\vscode-extension-mcp-server\src\tools` to `C:\repo\vscode-extension-mcp-server\src\utils`, and update all imports, tests, documentation, etc. accordingly.
- [ ] P3: Add a feature to the MCP Server for Error Event handling. Must be managed and fail gracefully.
  - [ ] An Error Event management solution needs to be created
  - [ ] All of the logic should run through it, so no matter what happens the extension doesn't break VS Code.
  - [ ] It should be connected to logging, used by Orchestrator, have safe guards to self-disable after N failure attempts, notify vscode accordingly, disable in critical failure event, and then notify user to contact developer if still issues.
  - [ ] Build with configuration in mind, so options can be modified by user accordingly later on.
- [ ] P3: REFACTOR: Organize tests to mirror source hierarchy (e.g., tests/src/agent/orchestrator).
  - [ ] Move existing test files into a parallel directory structure under `tests/src/` to match `src/`.
  - [ ] Update all import paths in test files to reflect new locations.
  - [ ] Adjust Jest configuration if necessary to ensure all tests are discovered and run correctly.
  - [ ] Verify full test suite passes after reorganization.
- [ ] P3: REFACTOR: Rebuild and add governance to bin content
  - [ ] Convert all bin/utils tools into self-contained modules (doc, JSDoc, template, package config, import fixes).
  - [ ] Move the build logic into `bin/utils`, and convert it to use the same type of design as other utilities (like `changelog`).
  - [ ] Make sure package.json is updated accordingly
  - [ ] feat: add force typing and JSDoc comments to `bin` content.
  - [ ] feat: add full test coverage to `bin` content.
- [ ] P3: UTILITY: Changelog utility follow-ups (deferred; implemented core features are stable — this tracks hardening and docs for future work)
  - [ ] Tests & Coverage
    - [ ] Unit tests for `ensureCurrentTasksSection`, `insertCurrentTask`, `pruneCompletedOutstanding`, and spacing normalization (blank line after log heading; verification heading at H5).
  - [ ] Integration test invoking CLI (`add-current`, `prune-completed`, `add-entry --details --verification`) and asserting `CHANGELOG.md` structure.
  - [ ] Pruning UX
    - [ ] Add `--prune-after` to `add-entry` to optionally prune completed Outstanding Tasks atomically after logging.
    - [ ] Prefer explicit completion marker (✅) for pruning over semantic prefixes (feat:, fix:, etc.) to avoid accidental backlog removals; deprecate broad prefix pruning later.
  - [ ] JSON export of Logs
    - [ ] Extend `exportChangelogJSON` to parse Logs (day groupings, entries, details, verification) and include a `schemaVersion`.
  - [ ] Daily summary helper
    - [ ] `add-daily-summary --summary "..."` to add/update the optional day heading summary line idempotently.
  - [ ] Auto verification block
    - [ ] `--auto-verify` flag to run compile/test/lint/docs/health and append results plus coverage and JSDoc status.
  - [ ] Current Tasks governance
    - [ ] `sync-current` command to promote Priority 1 items into `### Current Tasks` or remove the section when empty; optionally limit to <= 5.
  - [ ] Docs & instructions
    - [ ] Update `.github/copilot-instructions.md` and README with new commands (`add-current`, `prune-completed`) and verification H5 guidance.
  - [ ] Parser hardening
    - [ ] Graceful handling of malformed markers/duplicate headings; newline normalization config (CRLF/LF preservation).
  - [ ] Config flexibility
    - [ ] Optional user override (e.g., `.changelogrc.json`) to customize headings/markers while preserving governance.
  - [ ] Safety & DX
    - [ ] `--dry-run` for all mutating commands to show a diff without writing; cache parsed AST for batch operations.
- [ ] P3: UTILITY: Does it make sense to update my build into extension logic to run through an obfuscation utility?
  - [ ] I don't have anything to hide, but I am worried about security.
- [ ] P3: AGENT: I want to add an agent that can be used to learn about the user.
  - [ ] Parse through logs and identify patterns.
  - [ ] Uses metricsToTrack, define din mcp.config.json and then extracted by "C:\repo\VSCode-template\src\shared\analyticsIntegration.ts".
  - [ ] Build reports on those patterns in an easy-to-digest format.
  - [ ] Over time, should be able to categorize patterns to understand users.
  - [ ] Should also look for specific types of patterns that I can use to improve the app.
    - [ ] Identify patterns in user requests between what they asked and what they actually meant, to create user-specific keyword associations.
    - [ ] Be able to understand and identify how to better provide solutions to the user.
    - [ ] Users should be able to view these associations and manage them accordingly.
      - [ ] In the extension settings, each feature within the app should have a section for managing settings.
      - [ ] Within that section, there should be a list of "Custom Keywords", which are used to improve the user's experience by driving them towards solutions quicker.
      - [ ] We should be able to use the new logging logic results to identify how many steps it took to get to a resolution, evaluate the original step, and extrapolate patterns.
      - [ ] When patterns are defined, user should be notified and provided a link in the chat to modify the settings if they want to remove it.
- [ ] P3: EXTENSION: Add functionality within extension to work with TODOs and different functionalities within CoPilot Chat.
  - [ ] Maybe this should be an agent?
  - [ ] Want to take advantage of features that will help add clarity and keep Agent organized and focused while communicating to user with clarity.
  - [ ] I'm hoping there is a way to send a response up, so orchestrator can just pass the text block vs something really complicated.
    - [ ] If there is, probably this should be an agent.

<!-- The CI task moved to Completed after workflow addition -->

<!-- END:BACKLOG_ACTION_ITEMS -->
<!-- END:GENERATED_ACTION_ITEMS -->
<!-- BEGIN:COMPLETED_ACTION_ITEMS -->

## Completed TODOs

> This section contains all completed TODOs, maintained for historical reference. The full list of completed TODOs start with a link to the `CHANGELOG.md` entry.

- [x] REPO-OPS: Harden tests with mocked I/O and unskip — see CHANGELOG entry "2025-11-12 22:05:00 ci: Repo-ops CI, mocked tests, and branch/task alignment"
- [x] CI: Add optional repo-ops lint step — implemented via `.github/workflows/repo-ops-lint.yml`
- [x] P1: CommunicationAgent clarification is config-driven — see CHANGELOG entry "2025-11-13 10:00:00 refactor: CommunicationAgent clarification via configuration; add types and templates"

<!-- END:COMPLETED_ACTION_ITEMS -->
