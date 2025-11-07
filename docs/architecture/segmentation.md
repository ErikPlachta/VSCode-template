---
title: Architecture Segmentation
summary: Layered overview of the extension, orchestration agents, and mock server boundaries that power the MCP workflow.
roles:
  - platform-engineering
  - extension-maintainers
associations:
  - src/extension
  - src/agents
  - src/server
  - src/shared
hierarchy:
  - architecture
  - segmentation
---

## Summary

The repository separates Model Context Protocol (MCP) functionality into four collaborative layers so contributors can update the VS Code extension, orchestration agents, or mock server without crossing concerns. The VSIX client hosts the activation and caching logic, agents provide reusable business behaviours, the mock server exposes tools over JSON-RPC, and shared utilities enforce consistent typing.

## Responsibilities

- Keep the VSIX extension under `src/extension/` focused on activation, Copilot Chat messaging, and filesystem caching.
- Implement cross-domain orchestration and domain heuristics inside `src/agents/` so both client and server reuse identical behaviours.
- Provide a locally runnable MCP backend from `src/server/` that brokers JSON-RPC calls for development and testing.
- Centralise shared typings and helpers in `src/shared/` to reduce duplication across runtimes.
- Document packaging and execution flows so contributors know which directory to modify for a given change.

## Inputs

- VS Code APIs consumed by `src/extension/index.ts` during activation and tool discovery.
- Dataset files under `data/` that seed the agents and the mock server responses.
- TypeScript source files compiled by `npm run compile` into the `out/` directory prior to packaging.
- User-provided settings such as `mybusinessMCP.serverUrl` and optional authentication tokens.

## Outputs

- Packaged extension artefacts in `out/extension/` referenced by `package.json#main` for VSIX creation.
- JSON-RPC tool catalogues and responses served from the mock backend on `http://localhost:3030` when running `npm run server`.
- Shared type declarations consumed by tests and production builds to guarantee schema compatibility.
- Architecture documentation that clarifies which layer to adjust for new datasets or capabilities.

## Error Handling

- The extension logs activation failures and caches sync issues while surfacing actionable messages to Copilot Chat.
- Agents validate dataset availability and throw structured domain errors that the extension and server translate into user guidance.
- The mock server normalises JSON-RPC exceptions so the client can distinguish retryable faults from misconfiguration.
- Shared utilities provide defensive parsing and typing to prevent malformed payloads from propagating between layers.

## Examples

- Package the client by running `npm run package`, which compiles `src/extension/` and bundles the VSIX with the agent logic.
- Start the local backend with `npm run server`, point the extension settings to `http://localhost:3030`, and observe tools loading in Copilot Chat.
- Update an orchestration heuristic in `src/agents/relevantDataManagerAgent.ts` and watch both the extension and server adopt the change.
- Add a new shared type in `src/shared/mcpTypes.ts` and import it from both the extension sync logic and server handlers.

## Maintenance

- Review directory boundaries quarterly to ensure new features continue to respect the segmented architecture.
- Expand documentation when introducing additional runtimes or deployment targets that rely on the shared agents.
- Keep `package.json` scripts aligned with the folder layout so build and lint tasks continue to succeed in CI.
- Regenerate tests and examples whenever datasets or agent responsibilities evolve.
