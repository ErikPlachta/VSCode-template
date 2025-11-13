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

!! WARNING: THIS IS NOT YET BEING USED AND IS JUST A PROOF_OF_CONCEPT> NEED TO BUILD IT OUT THE REST OF THE WAY.

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

- Sync TODO from changelog (dry-run by default): `npm run repo:ops -- todo sync-from-changelog [--write]`
- Generate actionable TODO checklist from Outstanding Tasks: `npm run repo:ops -- todo generate-actions [--write]`
- Rotate session context: `npm run repo:ops -- session rotate [--write]`

#### Guidelines

This file serves as the central repository for tracking all outstanding TODOs, managed collaboratively by the user and Copilot Chat.

Follow these guidelines to ensure effective task management:

1. **Comprehensive Tracking**: Ensure every outstanding task is documented here, categorized by priority (Current, Next, Backlog).
2. **Incomplete TODO Organization**: Group incomplete TODOs into three sections distinct sections for clarity and programmability.
   - **Current TODOs**: Tasks actively being worked on. Contains a single parent-level item. Represents the immediate focus.
   - **Next TODOs**: Tasks planned for the near future.
   - **Backlog TODOs**: Unplanned tasks that may be addressed later.
3. **TODO Priority**: Every TODO should have a classified priority: `Priority 1 (Critical. Blocking or  Urgent) | Priority 2 (Next) | Priority 3 (Backlog)`.
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

- Data-Driven Architecture Integrity (Critical)
  - **Objective**: Complete workflow execution system and finalize architectural cleanup.
  - **ACTIVE: Workflow Execution System** (~95% complete, 30 min remaining)
  - **Status**: ✅ Phase 4 COMPLETE - Workflow system implemented and integrated
  - **Current Issue**: DatabaseAgent initialization error - data sources not loading properly
  - **Next Steps**:
    - ✅ Phase 1-4: COMPLETE (Agent isolation, response handling, testing, workflow coordination)
    - 🔄 **Debug & Fix**: DatabaseAgent data source initialization (CURRENT PRIORITY)
    - 🔄 Phase 5: Documentation (30 min) - Update migration guide with workflow patterns
    - 🔄 Phase 6: Final Verification (15 min) - End-to-end testing, health check
    - 🔄 Phase 7: Legacy Cleanup (15 min) - Remove relevant-data-manager references
  - **Test Status**: 264/265 tests passing (100% pass rate for active tests)
  - **Architecture Compliance**:
    - ✅ Agent Isolation: Orchestrator is ONLY coordinator
    - ✅ Data-Driven: No hardcoded business logic
    - ✅ Single-Class: All agents follow 2-file pattern
    - ✅ Type Centralization: Types in types/ folder
    - ✅ Communication: CommunicationAgent handles ALL formatting
  - Completed This Session
    - (2025-11-12)
      - ✅ **Chat UX Improvements**: Clarification with contextual examples, collapsible workflow details
      - ✅ **copilot-instructions.md**: Streamlined 291→193 lines, added MCP tool guidance, added reload reminder
      - 🔄 **DatabaseAgent Fix**: Attempted data source initialization from UserContextAgent (needs debugging)
    - (2025-11-11)
      - ✅ **Data-driven architecture cleanup**: All 7 agents now compliant (2-file, data-driven, importing-types)
      - ✅ **Workflow execution system**: Complete lifecycle with logging, performance tracking, diagnostics
      - ✅ **Extension integration**: Chat handler uses executeWorkflow(), displays actual data

<!-- END:CURRENT_ACTION_ITEMS -->
<!-- BEGIN:NEXT_ACTION_ITEMS -->

### Next Action Items

- AGENT: Updates
  - feat: agent specific config need focus, signal, prompt starters, etc
    - Review all agents to make sure they have the appropriate config options.
      - Just like in the UserContext, agent configs should have base Signal, Focus, and PromptStarter definitions.
      - User context values for these should also be passed in to relative agents on run time, to append the list with additional options.
- BUILD: Update build Pipeline to include bundler
  - https://code.visualstudio.com/api/working-with-extensions/bundling-extension
  - Evaluate options for bundling the extension to reduce size and improve performance.
    - Consider using tools like Webpack, Rollup, or esbuild.
    - Update the build scripts in package.json to include the bundling step.
    - Test the bundled extension to ensure it works correctly in VS Code.
    - Update documentation to reflect the new build process.

<!-- END:NEXT_ACTION_ITEMS -->
<!-- BEGIN:BACKLOG_ACTION_ITEMS -->

### Backlog Action Items

- Review the code base and identify british-english words `artefacts`, that should be american-english `artifacts`. Also seeing other words like 'behaviour', 'optimise', 'utilise', 'customise', 'organisation' etc.
- Evaluate the logic in `C:\repo\vscode-extension-mcp-server\src\tools`, and identify things that should exist in `C:\repo\vscode-extension-mcp-server\bin\utils\`, and update all imports, tests, documentation, etc. accordingly.
  - Specific follow-up: Move `src/tools/repositoryHealth.ts` into a `bin/utils` library and consolidate shared helpers with `bin/utils/validateMarkdown.ts` and `bin/utils/validateJson.ts`.
- Rename `C:\repo\vscode-extension-mcp-server\src\tools` to `C:\repo\vscode-extension-mcp-server\src\utils`, and update all imports, tests, documentation, etc. accordingly.
- Add a feature to the MCP Server for Error Event handling. Must be managed and fail gracefully.
  - An Error Event management solution needs to be created
  - All of the logic should run through it, so no matter what happens the extension doesn't break VS Code.
  - It should be connected to logging, used by Orchestrator, have safe guards to self-disable after N failure attempts, notify vscode accordingly, disable in critical failure event, and then notify user to contact developer if still issues.
  - Build with configuration in mind, so options can be modified by user accordingly later on.
- REFACTOR: Organize tests to mirror source hierarchy (e.g., tests/src/agent/orchestrator).
  - Move existing test files into a parallel directory structure under `tests/src/` to match `src/`.
  - Update all import paths in test files to reflect new locations.
  - Adjust Jest configuration if necessary to ensure all tests are discovered and run correctly.
  - Verify full test suite passes after reorganization.
- REFACTOR: Rebuild and add governance to bin content
  - Convert all bin/utils tools into self-contained modules (doc, JSDoc, template, package config, import fixes).
  - Move the build logic into `bin/utils`, and convert it to use the same type of design as other utilities (like `changelog`).
  - Make sure package.json is updated accordingly
  - feat: add force typing and JSDoc comments to `bin` content.
  - feat: add full test coverage to `bin` content.
- UTILITY: Changelog utility follow-ups (deferred; implemented core features are stable — this tracks hardening and docs for future work)
  - Tests & Coverage
    - Unit tests for `ensureCurrentTasksSection`, `insertCurrentTask`, `pruneCompletedOutstanding`, and spacing normalization (blank line after log heading; verification heading at H5).
  - Integration test invoking CLI (`add-current`, `prune-completed`, `add-entry --details --verification`) and asserting `CHANGELOG.md` structure.
  - Pruning UX
    - Add `--prune-after` to `add-entry` to optionally prune completed Outstanding Tasks atomically after logging.
    - Prefer explicit completion marker (✅) for pruning over semantic prefixes (feat:, fix:, etc.) to avoid accidental backlog removals; deprecate broad prefix pruning later.
  - JSON export of Logs
    - Extend `exportChangelogJSON` to parse Logs (day groupings, entries, details, verification) and include a `schemaVersion`.
  - Daily summary helper
    - `add-daily-summary --summary "..."` to add/update the optional day heading summary line idempotently.
  - Auto verification block
    - `--auto-verify` flag to run compile/test/lint/docs/health and append results plus coverage and JSDoc status.
  - Current Tasks governance
    - `sync-current` command to promote Priority 1 items into `### Current Tasks` or remove the section when empty; optionally limit to <= 5.
  - Docs & instructions
    - Update `.github/copilot-instructions.md` and README with new commands (`add-current`, `prune-completed`) and verification H5 guidance.
  - Parser hardening
    - Graceful handling of malformed markers/duplicate headings; newline normalization config (CRLF/LF preservation).
  - Config flexibility
    - Optional user override (e.g., `.changelogrc.json`) to customize headings/markers while preserving governance.
  - Safety & DX
    - `--dry-run` for all mutating commands to show a diff without writing; cache parsed AST for batch operations.
- UTILITY: Does it make sense to update my build into extension logic to run through an obfuscation utility?
  - I don't have anything to hide, but I am worried about security.
- AGENT: I want to add an agent that can be used to learn about the user.
  - Parse through logs and identify patterns.
  - Uses metricsToTrack, define din mcp.config.json and then extracted by "C:\repo\VSCode-template\src\shared\analyticsIntegration.ts".
  - Build reports on those patterns in an easy-to-digest format.
  - Over time, should be able to categorize patterns to understand users.
  - Should also look for specific types of patterns that I can use to improve the app.
    - Identify patterns in user requests between what they asked and what they actually meant, to create user-specific keyword associations.
    - Be able to understand and identify how to better provide solutions to the user.
    - Users should be able to view these associations and manage them accordingly.
      - In the extension settings, each feature within the app should have a section for managing settings.
      - Within that section, there should be a list of "Custom Keywords", which are used to improve the user's experience by driving them towards solutions quicker.
      - We should be able to use the new logging logic results to identify how many steps it took to get to a resolution, evaluate the original step, and extrapolate patterns.
      - When patterns are defined, user should be notified and provided a link in the chat to modify the settings if they want to remove it.
- EXTENSION: Add functionality within extension to work with TODOs and different functionalities within CoPilot Chat.
  - Maybe this should be an agent?
  - Want to take advantage of features that will help add clarity and keep Agent organized and focused while communicating to user with clarity.
  - I'm hoping there is a way to send a response up, so orchestrator can just pass the text block vs something really complicated.
    - If there is, probably this should be an agent.

<!-- END:BACKLOG_ACTION_ITEMS -->
<!-- END:GENERATED_ACTION_ITEMS -->

<!-- TODO:END:IMPORTED_FROM_CHANGELOG -->

> This section contains all active TODOs, managed by the User and CoPilot Chat collaboratively. Should only contain a single parent level item.

### Current TODOs

> This section contains the active TODOs being worked on.

<!-- BEGIN:CURRENT_TODOS_PROCESSING -->

<!-- END:CURRENT_TODOS_PROCESSING -->

### Next TODOs

> This section contains the next TODOs to be worked on.

<!-- BEGIN:NEXT_TODOS_TO_PROCESS -->

<!-- END:NEXT_TODOS_TO_PROCESS -->

### Backlog TODOs

> This section contains unplanned TODOs that may be addressed later.

<!-- BEGIN:UNPLANNED_TODOS_TO_PROCESS -->

- [ ] Review test organization approach
  - Evaluate colocated tests (e.g., `thing.test.ts` adjacent to source) versus a centralized `tests/` folder.
  - Document pros/cons: DX discoverability, path/alias simplicity, coverage mapping, watch-mode performance, repo navigation.
  - Assess tooling impacts (Jest config, ts-jest/esm setup, coverage reporters, CI patterns).
  - Recommend a standard for this repo and outline a migration plan if a change is warranted.

<!-- END:UNPLANNED_TODOS_TO_PROCESS -->

<!-- END:INCOMPLETE_TODOs -->

## Completed TODOs

> This section contains all completed TODOs, maintained for historical reference. The full list of completed TODOs start with a link to the `CHANGELOG.md` entry.

<!--TODO:BEGIN:COMPLETED_TODOS -->

<!--TODO:END:COMPLETED_TODOS -->
