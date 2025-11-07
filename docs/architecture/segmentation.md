# Architecture segmentation

This repository now organises the Model Context Protocol (MCP) assets into
three clear layers so you can reason about the responsibilities of each part.

## VSIX extension (`src/extension/`)
- Entry point: `src/extension/index.ts`
- Depends on the VS Code extension host and Copilot Chat APIs.
- Responsible for discovering MCP tools, rendering responses, and persisting
  local cache files in `.mcp-cache`.
- Compiled output lives in `out/extension/` and is referenced from
  `package.json#main` when packaging the VSIX.

## Agents (`src/agents/`)
- Pure TypeScript modules that model the business domain and orchestration
  heuristics.
- Shared by both the VSIX extension and the mock server to keep behaviour
  consistent across transports.
- Consume resources under `data/` and documentation in `docs/`.

## Mock MCP server (`src/server/`)
- JSON-RPC service that exposes the datasets to Copilot Chat.
- Uses the shared MCP type definitions in `src/shared/mcpTypes.ts`.
- Intended for local development so you can run the extension without hosting
  infrastructure. Start it with `npm run server` and point the extension to
  `http://localhost:3030`.

## Shared utilities (`src/shared/`)
- Cross-cutting TypeScript helpers and types that must be usable by both the
  VSIX extension and the server runtime.
- Currently contains MCP type definitions consumed by `mcpSync.ts` and the
  server implementation.

## Configuration summary
- `package.json` `main` field now points to `out/extension/index.js` so the new
  folder structure is respected when packaging.
- `npm run server` compiles the TypeScript sources and launches the mock MCP
  server on port 3030.
- Tests in `tests/server.test.ts` provide coverage for the exported server tool
  definitions to ensure the client and server stay in sync.
