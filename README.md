# My Business MCP Extension

## Features
- Dynamically exposes bundled MCP tools with enriched metadata and schema validation.
- Registers `/commands`, `@mentions`, and the **My Business MCP: Invoke Tool** automation command in VS Code.
- Maintains conversational context for multi-turn orchestration, automatically persisting a rolling history per tool.
- Renders MCP responses as rich markdown within Copilot Chat, including structured JSON when appropriate.
- Captures invocation logs inside a local `.mybusinessMCP` directory to keep diagnostics client-side.
- Ships with a modular mock orchestration sandbox (`src/agents/`) featuring dedicated data, database, and relevant-data manager agents backed by rich local dummy datasets.
- Persists cross-tool shared cache artefacts so generated context can be re-used between agents without remaining in memory.
- Fully unit-tested, documented, and CI-integrated.
- Enforces repository-wide documentation standards through a modular health check agent and GitHub Actions pipeline.

## Architecture overview

| Component | Location | Purpose |
| --- | --- | --- |
| **VSIX extension** | `src/extension/` | Ships the VS Code client that registers commands, implements the MCP tools locally, and renders responses in Copilot Chat. |
| **Agents** | `src/agents/` | Provide orchestration logic and reusable domain behaviours that power tool responses regardless of the transport. |
| **Local tool registry** | `src/mcp/localToolRegistry.ts` | Loads datasets from `data/` and executes MCP tools directly within the extension runtime. |

The extension bundles a lightweight MCP runtime. Installing the VSIX is sufficient—no additional MCP server process or settings are required.

## Local cache directory

The extension creates a `.mybusinessMCP` directory in the root of your workspace. It stores invocation logs, cross-tool cache entries, and any additional local artefacts required by the built-in agents. Use the `mybusinessMCP.cacheRetention` setting to control how many days of history are preserved before old entries are pruned.

## Compliance and Documentation Tooling

The repository now includes a **Repository Health Agent** (`src/agent/repositoryHealthAgent.ts`) that coordinates linting, schema validation, and documentation audits. Its behaviour is defined by [`agent.config.json`](agent.config.json) and supporting schemas under [`schemas/`](schemas/).

- `npm run lint` ensures every TypeScript file includes exhaustive docblocks, examples, and error documentation.
- `npm run lint:json` validates dataset records, relationships, and category metadata against centrally managed JSON Schemas.
- `npm run lint:docs` audits Markdown content for mandatory front matter and hierarchical sections.
- `npm run health:report` executes the full suite and writes an aggregated report to [`docs/reports/health-report.md`](docs/reports/health-report.md).

Refer to [`docs/compliance/enforcement-pipeline.md`](docs/compliance/enforcement-pipeline.md) for pipeline details and [`docs/agents/repository-health-agent.md`](docs/agents/repository-health-agent.md) for agent behaviour.

## Commands

- `/getBusinessMetric`
- `@listProjects`
- Command Palette → **My Business MCP: Invoke Tool**

See [`docs/orchestration.md`](docs/orchestration.md) for a deep dive into the orchestration lifecycle, cache layout, and extension architecture.

## Scripts
```bash
npm run compile     # build TypeScript
npm test            # run Jest tests
npm run docs        # generate Typedoc markdown docs
npm run lint        # enforce TypeScript documentation coverage
npm run lint:json   # validate dataset schemas
npm run lint:docs   # enforce Markdown metadata rules
npm run health:report # execute the full repository health check and write reports
npm run package     # build VSIX package
```

## Continuous Integration

- `.github/workflows/test.yml` → validates build & tests.
- `.github/workflows/docs.yml` → publishes typedoc output to GitHub Pages.
- `.github/workflows/compliance.yml` → runs linting, schema validation, markdown audits, and generates the compliance report on every push and pull request.

---

## ✅ **Expected Outcome**
- A complete, buildable VS Code MCP extension repository.
- Unit tests run with Jest via `npm test`.
- Typedoc generates Markdown docs into `/docs`.
- GitHub Actions:
  - Runs tests on each push.
  - Publishes `/docs` to GitHub Pages automatically.
  - Blocks merges when documentation, schema, or metadata requirements fail.
- JSDoc present across all files for maintainability.

---

**End of Prompt — `mybusiness-mcp-extension`**
