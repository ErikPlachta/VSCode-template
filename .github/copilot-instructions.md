# Copilot instructions for this repo

These notes teach AI coding agents how to work productively in this workspace. Keep guidance concrete and tied to files, patterns, and commands found here.

## Big picture architecture

- VS Code extension client lives in `src/extension/` and registers a chat participant (id: `MybusinessMCP`, mention: `@mybusiness`) that talks to an MCP server. Entry: `src/extension/index.ts`.
- Agents live under `src/agent/**` (singular):
  - `orchestrator/` is config‑driven and routes by keyword signals. See `src/agent/orchestrator/config.ts` and `src/agent/orchestrator/index.ts`.
  - `relevantDataManagerAgent/` loads and validates business datasets and builds cached snapshots/catalogues.
  - `databaseAgent/` performs generic filtering over arbitrary records with a stable, sorted cache key.
  - `clarificationAgent/` handles vague queries.
- MCP mock server (`src/server/index.ts`) exposes JSON‑RPC: `initialize`, `listTools`, and `tools/call` for:
  - `relevant-data.describeCategory`
  - `relevant-data.searchRecords`
    The extension can auto‑start an embedded server via `startMCPServer` from `src/server/embedded.ts` and registers it using `mcpServerDefinitionProviders`.
- Shared utilities:
  - `src/extension/mcpCache.ts` (on‑disk `.mcp-cache` + shared cache + invocation logs)
  - `src/mcp/**` (agent profiles/manifest, prompts, schema utils, telemetry)

## Core workflows

- Build: `npm run compile` (TypeScript -> `out/`).
- Tests: `npm test` (Jest; specs in `tests/**`).
- Docs: `npm run docs` (Typedoc -> `docs/**`).
- Lint & health:
  - TS lint: `npm run lint`
  - JSON schema validation: `npm run lint:json`
  - Markdown governance: `npm run lint:docs`
  - Full compliance report: `npm run health:report` -> `docs/reports/health-report.md`
- Local MCP server: `npm run server` (HTTP JSON‑RPC). Configure settings `mybusinessMCP.*`. Package VSIX: `npm run package`.
- CI/pipeline helpers (bash): `npm run build:full`, `npm run build:quick`, Windows batch: `npm run build:pipeline:win`.

## Data model & orchestration

- Source datasets live in `src/businessData/{applications,companyPolicies,companyResources,departments,people}`:
  - `category.json` (metadata + `config.orchestration` signals)
  - `records.json` (entities), `relationships.json` (cross-category links)
  - `schemas/*.json`, `types/*.json`, `examples/*.json`, `queries/*.json`
- The embedded MCP server serves from `bin/data/**` by default; override with env `VSCODE_TEMPLATE_DATA_ROOT` to point at source during dev.
- `RelevantDataManagerAgent` compiles a catalogue & snapshots (cached under `.mcp-cache`).
- `Orchestrator` (`src/agent/orchestrator/index.ts`) is config‑driven: classifies by signals declared in `config.ts` and category `orchestration.agents.*.signals`:
  - metadata -> relevant‑data‑manager
  - records -> database‑agent
  - insight -> data‑agent
  - fallback -> clarification‑agent
- Profiles/manifest/prompts: `src/mcp/agentProfiles.ts`, `src/mcp/agentManifest.ts`, `src/mcp/prompts/index.ts`.

## Conventions that matter

- Markdown (excluding `docs/**`) must include required front matter and sections; enforced by the Repository Health tool `src/tools/repositoryHealth.ts` and JSON schemas in `src/schemas/**`.
- All `.ts` files need comprehensive docblocks (ESLint fails otherwise) — see `eslint.config.js` and `@typescript-eslint` + `jsdoc` rules.
- Cache shared artifacts with `storeSharedCacheEntry()` / `readSharedCacheEntry()` in `src/extension/mcpCache.ts`; use stable keys (DatabaseAgent sorts criteria in its cache key).
- Keep transport‑neutral agent logic in `src/agent/**`; VS Code specifics in `src/extension/**`.
- Path aliases (`@agent`, `@extension`, `@mcp`, `@shared`) are configured in TS config; node scripts use `tsconfig-paths/register`.

## Integration points

- Extension settings (`package.json` contributes.configuration): `mybusinessMCP.serverUrl`, `token`, `port`, `includeAuthHeader`, `registerServerId`, `autoRegister`.
- Chat participant contribution: id `MybusinessMCP`, name `mybusiness` (mention `@mybusiness`). Command: `mybusinessMCP.invokeTool`.
- MCP server definition is provided via `mcpServerDefinitionProviders`; the extension calls `registerMcpProvider()` at activation.
- MCP tools: `relevant-data.describeCategory(categoryId)`, `relevant-data.searchRecords(categoryId, filters)`.
- Tests exercise agents, extension & server (`tests/*.test.ts`).

## Adding or changing a category (example)

1. Create/modify `src/businessData/<category>/category.json` (include `config.orchestration` signals & promptStarters); add records, relationships, schemas, types, examples, queries.
2. Run `npm run lint:json` + `npm run health:report`; fix issues in `docs/reports/health-report.md`.
3. Adjust signals/promptStarters if `Orchestrator.classify()` misroutes.

## Useful agent calls

- Quick metadata: `RelevantDataManagerAgent.getOrCreateSnapshot(topic)`.
- Query records: `DatabaseAgent.executeQuery(categoryId, criteria, { useCache: true })`.
- Shared cache: `ensureCacheDirectory()` + `storeSharedCacheEntry/readSharedCacheEntry` in `src/extension/mcpCache.ts`.

Reference: `docs/orchestration.md`, `docs/extension/README.md`, `docs/agent/**`, generated API in `docs/`.
