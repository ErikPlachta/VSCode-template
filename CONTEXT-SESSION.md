# Context summary for new chat

> Related: [Branch Focus](CONTEXT-BRANCH.md) • [Copilot Instructions](.github/copilot-instructions.md) • [Changelog](CHANGELOG.md) • [TODOs](TODO.md)

<!-- BEGIN:SESSION-CONTEXT-MD-OVERVIEW -->

## SESSION-CONTEXT.md Overview

This is a new file I've created to be used by CoPilot Chat as a `current chat's context helper`.

- This file provides a summary of the current chat's context.
- It supplements the instructions in `.github/copilot-instructions.md`.
- It serves as a precise reference for the MCP Server's architecture, key files, important concepts, and current focus.

<!-- END:SESSION-CONTEXT-MD-OVERVIEW -->
<!-- BEGIN:REPO-OVERVIEW -->

## Repo Overview

<!-- BEGIN:WHAT-IS-THIS-REPO -->

### What is this repo?

- VS Code extension MCP Server development environment.
- User is learning about MCPs and multi-agent architecture.
- Contains a collection of build scripts and application code.
- For more information on the Application itself, see the [Application Overview](#application-overview) section below.
- For more details on see the [Architecture Overview](#architecture-overview) section below.

<!--END:WHAT-IS-THIS-REPO -->
<!-- BEGIN:CURRENT-BRANCH-PR -->

### Current branch

- Branch: `feat/update-repo-auotmation`
- Current focus: Governance automation and migration (use TODO.md for tasks; CHANGELOG.md for history)

<!--END:CURRENT-BRANCH-PR -->

<!--BEGIN:KEY-FILES -->

### Key Files

- `TODO.md` — single source of truth for outstanding tasks.
- `CHANGELOG.md` — single source of truth for change history and verification logs.
- `.github/copilot-instructions.md` — governance: agent isolation, quality gates, reload note.
- `CONTEXT-SESSION.md` — current chat's context summary, to serve as a more precise reference to supplement the instructions in `copilot-instructions.md`.

<!--END:KEY-FILES -->

<!--END:REPO-OVERVIEW -->
<!-- BEGIN:WHAT-IS-THIS-APPLICATION -->

## Application Overview

- At the core, this application is a VS Code extension that runs an MCP server designed to work with CoPilot chat.
- It employs a multi-agent
  architecture. It provides user-specific context and functionality to CoPilot chat through a set of specialized agents coordinated by an Orchestrator.

<!--END:APPLICATION-OVERVIEW -->
<!--BEGIN:CRITICAL-DESIGN-CONCEPTS-THAT-MUST-BE-FOLLOWED-100%-OF-THE-TIME -->

## Critical Design Concepts That MUST Be Followed 100% of the Time

- Data Driven Design — all business logic is driven by configuration and loaded data; no hardcoded values.
- Typed Inputs/Outputs — agents communicate using strictly typed data structures; no freeform text between agents.
- Orchestrator-Centric — all inter-agent communication is routed through the Orchestrator; agents do not call each other directly.
- UserContext — User Specific Data loaded by UserContextAgent; includes categories, records, and aliases. User will be able to modify this data in future.

<!--END:CRITICAL-DESIGN-CONCEPTS-THAT-MUST-BE-FOLLOWED-100%-OF-THE-TIME -->
<!--BEGIN:GUIDELINES-AND-INTEGRITY-REFERENCE -->

## Guidelines and Integrity Reference

> General guidelines for development and how to ensure stability.

### How to validate MCP Server Changes and Stability

- After installing the VSIX, reload VS Code:
  - Ctrl+Shift+P → “Developer: Reload Window”
- Try prompts:
  - “@usercontext list people”
  - “@usercontext list departments”
  - “@usercontext list applications”
  - “@usercontext list apps used by engineering”
- Check Developer Tools console:
  - Expect: “Loaded N data sources for DatabaseAgent”
  - No “[object Object]” or “Data source not found: undefined” errors.

<!--BEGIN:CURRENT-BRANCH-PR -->

### Quick next steps (if needed)

> Instructions and guidelines when you're stuck.

- If queries still look sparse: verify `records.json` under `src/userContext/<category>/`.
- If build fails: add missing JSDoc param/return types in Orchestrator and clean up CHANGELOG markdown lint warnings.
- If runtime mismatch: confirm the installed extension’s `out/src` has the updated orchestrator JS and reload the window.

<!--END:GUIDELINES-AND-INTEGRITY-REFERENCE -->

<!--END:IMPORTANT-CONCEPTS -->
<!--BEGIN:ARCHITECTURE-OVERVIEW -->

## Architecture Overview

- Multi‑agent architecture with Orchestrator as the central coordinator.
- Agents have clear responsibilities and communicate only via the Orchestrator.

<!-- BEGIN:AGENT-DETAILS -->

### Agents Details

- Orchestrator — Central coordinator; plans workflows, marshals parameters, routes calls; aggregates typed results from agents.
- UserContextAgent — Loads user context data (categories, records, aliases) and exposes category id/name/alias metadata.
- DatabaseAgent — Executes queries over user-context datasets using categoryId, criteria, and options; returns typed rows.
- CommunicationAgent — Formats typed data into user-facing messages/markdown; owns all presentation.
- RepositoryHealthAgent — Enforces repository health checks (docs generation, linting, changelog markers, legacy config detection).
- RelevantDataManagerAgent (shim) — Legacy compatibility re-export; no business logic; slated for removal per migration policy.

<!-- END:AGENT-DETAILS -->

### Key Application Files

- `src/agent/orchestrator/index.ts` — workflow planning, parameter marshalling, data‑driven extraction, agent registry.
- `src/agent/databaseAgent/index.ts` — `executeQuery(categoryId, criteria, options)`.
- `src/userContext/*` — category configs, records, aliases (Applications, Company Policies, Company Resources, Departments, People).

### Rules to not break

- No agent‑to‑agent imports/calls; only the Orchestrator coordinates.
- Agents should behave as a black box with typed inputs/outputs.
- No hardcoded business values; derive from config or loaded data.
- Do not commit `src/mcp.config.json` (generated JSON must live under `out/`).
- Use a Data Driven Design 100% of the time.
- All Type Definitions should exist in the Types folder.
- JSDoc comments must be complete for all functions and methods.

<!-- END:ARCHITECTURE-OVERVIEW -->
<!-- BEGIN:CURRENT-FOCUS-REFERENCE -->

## Current Focus Reference

### Recent problems and fixes (runtime behavior)

- Symptoms:
  - “list people” and “list departments” sometimes returned sparse/empty data.
  - “List all applications used by engineering” errored with “Data source not found”.
- Root cause 1:
  - Orchestrator passed the entire QueryParams object to `DatabaseAgent.executeQuery`, so `categoryId` became "[object Object]".
- Fix 1:
  - In `Orchestrator.callAgentMethod`, destructure QueryParams into positional args:
    - `categoryId`, `criteria`, `options`.
- Root cause 2:
  - Query extraction was hardcoded to limited categories (people, projects, departments).
- Fix 2:
  - Replace with data‑driven extraction using `UserContextAgent` categories (id, name, aliases) and add simple “engineering” filter support.
- Data sources:
  - Orchestrator builds `DatabaseAgent` dataSources from `UserContextAgent` categories at init.

### What works now

- Help/clarification flows (e.g., “@usercontext help”, “database info”).
- Parameter marshalling from Orchestrator → DatabaseAgent is fixed.
- Category detection recognizes aliases (e.g., “apps”, “software” map to “applications”).
- VSIX packaging works; remember to reload the VS Code window after install.

### What still needs attention

- Strict quality gates:
  - Type/JSDoc: Missing `@param`/`@returns` types in `src/agent/orchestrator/index.ts` can fail the build.
  - Markdown lint: `CHANGELOG.md` has formatting nits (lists/spacing/fences) flagged by health checks.
- Performance: vsce warns the extension should be bundled (not currently bundled).

### Governance updates (today)

- Tasks migrated to `TODO.md`:
  - Ran repo-ops: `todo sync-from-changelog --write` and `todo generate-actions --write`.
  - Inserted migration banner at top of CHANGELOG Outstanding Tasks (temporary read-only mirror).
- Changelog CLI retired fully:
  - Removed repo-ops and legacy changelog CLIs and scripts; docs updated.
- Session workflow:

  - `session rotate` implemented and verified; `session lint` planned.

  <!-- END:CURRENT-FOCUS -->
