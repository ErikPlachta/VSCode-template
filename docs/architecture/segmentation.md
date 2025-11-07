---
title: Architecture Segmentation
summary: Layered overview of the extension, orchestration agents, and local MCP runtime that power the workflow.
roles:
  - platform-engineering
  - extension-maintainers
associations:
  - src/extension
  - src/agents
  - src/mcp
  - src/shared
hierarchy:
  - architecture
  - segmentation
---

## Summary

The repository separates Model Context Protocol (MCP) functionality into collaborative layers so contributors can update the VS Code extension, orchestration agents, or local tool registry without crossing concerns. The VSIX client hosts the activation and caching logic, agents provide reusable business behaviours, the tool registry exposes MCP definitions backed by bundled datasets, and shared utilities enforce consistent typing.

## Responsibilities

- Keep the VSIX extension under `src/extension/` focused on activation, Copilot Chat messaging, and filesystem caching.
- Implement cross-domain orchestration and domain heuristics inside `src/agents/` so both the extension and the local runtime reuse identical behaviours.
- Provide an embedded MCP runtime under `src/mcp/` that surfaces tool definitions directly within the extension.
- Centralise shared typings and helpers in `src/shared/` to reduce duplication across runtimes.
- Document packaging and execution flows so contributors know which directory to modify for a given change.

## Inputs

- VS Code APIs consumed by `src/extension/index.ts` during activation and tool discovery.
- Dataset files under `data/` that seed the agents and the local runtime responses.
- TypeScript source files compiled by `npm run compile` into the `out/` directory prior to packaging.

## Outputs

- Packaged extension artefacts in `out/extension/` referenced by `package.json#main` for VSIX creation.
- JSON-formatted tool catalogues and responses loaded directly from the local runtime during extension activation.
- Shared type declarations consumed by tests and production builds to guarantee schema compatibility.
- Architecture documentation that clarifies which layer to adjust for new datasets or capabilities.

## Error Handling

- The extension logs activation failures and caches sync issues while surfacing actionable messages to Copilot Chat.
- Agents validate dataset availability and throw structured domain errors that the extension translates into user guidance.
- The embedded runtime raises structured `LocalToolError` exceptions so the client can distinguish retryable faults from misconfiguration.
- Shared utilities provide defensive parsing and typing to prevent malformed payloads from propagating between layers.

## Examples

- Package the client by running `npm run package`, which compiles `src/extension/` and bundles the VSIX with the agent logic.
- Update an orchestration heuristic in `src/agents/relevantDataManagerAgent.ts` and watch both the extension and tool registry adopt the change.
- Add a new shared type in `src/shared/mcpTypes.ts` and import it from both the extension activation logic and runtime handlers.

## Maintenance

- Review directory boundaries quarterly to ensure new features continue to respect the segmented architecture.
- Expand documentation when introducing additional runtimes or deployment targets that rely on the shared agents.
- Keep `package.json` scripts aligned with the folder layout so build and lint tasks continue to succeed in CI.
- Regenerate tests and examples whenever datasets or agent responsibilities evolve.
