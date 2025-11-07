# Copilot instructions for this repo

These notes teach AI coding agents how to work productively in this workspace. Keep guidance concrete and tied to files, patterns, and commands found here.

## Big picture architecture

- VS Code extension client lives in `src/extension/` and exposes a chat participant (`MyBusinessMCP`) that talks to an MCP server. Entry: `src/extension/index.ts`.
- Agents in `src/agents/` implement orchestration and domain logic:
  - `Orchestrator` routes intents to agents based on signals and category orchestration config.
  - `RelevantDataManagerAgent` loads the local dataset from `data/**` and validates it; it’s the source of truth for categories, schemas, examples, queries, and relationships.
  - `DatabaseAgent` provides query-like filtering with a shared on-disk cache (`.mcp-cache/shared`).
  - `DataAgent` synthesizes insights, exploration plans, and cross-category connections.
- MCP mock server (`src/server/index.ts`) serves JSON-RPC methods `listTools` & `invokeTool`; extension can auto-start embedded server via `startMCPServer` in `src/server/embedded.ts`.
- Shared MCP utilities: `src/mcp/` (agent profiles/manifest, prompts, schema utils, telemetry) and `src/extension/mcpCache.ts` (cache + invocation logs).

## Core workflows

- Build: `npm run compile` (TypeScript -> `out/`).
- Tests: `npm test` (Jest; specs in `tests/**`).
- Docs: `npm run docs` (Typedoc -> `docs/api/**`).
- Lint & health:
  - TS lint: `npm run lint`
  - JSON schema validation: `npm run lint:json`
  - Markdown governance: `npm run lint:docs`
  - Full compliance report: `npm run health:report` -> `docs/reports/health-report.md`
- Local MCP server: `npm run server` (HTTP JSON-RPC), configure settings `mybusinessMCP.*`. Package VSIX: `npm run package`.

## Data model & orchestration

- Category folders: `data/{applications,companyPolicies,companyResources,departments,people}` contain:
  - `category.json` (metadata + `config.orchestration` signals)
  - `records.json` (entities), `relationships.json` (cross-category links)
  - `schemas/*.json`, `types/*.json`, `examples/*.json`, `queries/*.json`
- `RelevantDataManagerAgent` builds a catalogue & snapshots (cached under `.mcp-cache`).
- `Orchestrator` (`src/agents/orchestrator.ts`) classifies intent by keyword overlap with category `orchestration.agents.*.signals`:
  - metadata -> relevant-data-manager
  - records -> database-agent
  - insight -> data-agent
  - fallback -> clarification-agent
- Profiles/manifest/prompts: `src/mcp/agentProfiles.ts`, `src/mcp/agentManifest.ts`, `src/mcp/prompts/index.ts`.

## Conventions that matter

- Markdown (excluding `docs/api/**`) must have front matter keys: `title, summary, roles, associations, hierarchy` and sections: Summary, Responsibilities, Inputs, Outputs, Error Handling, Examples, Maintenance. Enforced by `agent.config.json` + `RepositoryHealthAgent` (`src/agent/repositoryHealthAgent.ts`).
- All `.ts` files need comprehensive docblocks (ESLint fails otherwise).
- Cache shared artefacts with `storeSharedCacheEntry()` / `readSharedCacheEntry()`; use stable keys (`DatabaseAgent.buildCacheKey()` sorts criteria).
- Keep transport-neutral logic in `src/agents/**`; VS Code specific in `src/extension/**`.

## Integration points

- Extension settings (`package.json` contributes.configuration): `mybusinessMCP.serverUrl`, `token`, `port`, `includeAuthHeader`, `registerServerId`, `autoRegister`.
- MCP tools offered by server: `relevant-data.describeCategory(categoryId)`, `relevant-data.searchRecords(categoryId, filters)`.
- Tests exercise agents, extension & server (`tests/*.test.ts`).

## Adding or changing a category (example)

1. Create/modify `data/<category>/category.json` (include `config.orchestration` signals & promptStarters); add records, relationships, schemas, types, examples, queries.
2. Run `npm run lint:json` + `npm run health:report`; fix issues in `docs/reports/health-report.md`.
3. Adjust signals/promptStarters if `Orchestrator.classify()` misroutes.

## Useful agent calls

- Quick metadata: `RelevantDataManagerAgent.getOrCreateSnapshot(topic)`.
- Query records: `DatabaseAgent.queryCategory(topic, criteria, { useCache: true })`.
- Build insight plan: `DataAgent.buildExplorationPlan(topic, question)`.
- Relationship narrative: `DataAgent.mapTopicConnections(topic[, recordId])`.

Reference docs: `docs/orchestration.md`, `docs/architecture/segmentation.md`, `docs/agents/repository-health-agent.md`, generated API in `docs/api/`.
