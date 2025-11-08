**myBusiness-mcp-extension v1.0.0**

***

# My Business MCP Extension

Customizable MCP server experience inside VS Code Copilot Chat — with User Context as the core feature.

## Overview

This extension embeds (or connects to) an MCP server and a small set of agents (orchestrator, data, database, clarification, and user-context). It focuses on:

- User Context: local and global domain knowledge that the agents use to answer questions and take actions.
- Customization: settings via VS Code Settings UI first, and via chat as a secondary path.
- Quality gates: 100% test coverage, strict JSDoc, generated docs.
- Migration safety: backwards-compatible aliases when we rename concepts (e.g., businessData → userContext).

## Installation and first-run

1. Install the VSIX (or from Marketplace when available).

2. Open Settings → Extensions → “My Business MCP Extension” and review:

- Server URL (leave blank to use the embedded server)
- Token (optional bearer token)
- Auto-register (adds/removes an entry in your global `mcp.json`)

3. First-run setup (performed automatically):

- Creates `.mcp-cache` in two places:
  - Workspace-local: `<your workspace>/.mcp-cache`
  - Global: `%USERPROFILE%/.vscode/extensions/.mcp-cache` (Windows example: `C:\Users\plach\.vscode\extensions\.mcp-cache`)
- Processes your User Context datasets and builds an index (catalogue) used by the agents.
- Starts the embedded MCP server (if no external Server URL is configured) and registers the chat participant `@myBusiness`.

4. Try it:

- In Copilot Chat, type `@myBusiness` and ask a question.
- Or run the command palette action: “My Business MCP: Invoke Tool”.

## Core concepts

- Orchestrator: classifies intent and routes to the right agent(s). Falls back to Clarification when requests are vague.
- User Context (primary feature): structured, user-specific domain data. Can be global or workspace-local.
- Data / Database Agents: query records, analyze relationships, and generate insights or exploration plans.
- Clarification Agent: asks for missing details when a request is ambiguous or incomplete.

## Configuration model (source of truth)

- Application configuration lives in TypeScript at `src/config/application.config.ts`.
- Agent definitions live in `src/mcp/config/unifiedAgentConfig.ts`.
- The legacy `src/mcp.config.json` is being removed. Build/dev utilities are being updated to read the TS config directly.

Template processing and docs generation use the TS configuration as the single source of truth to avoid drift.

## Settings: UI first, chat second

You can configure the extension in two ways:

1. VS Code Settings UI (preferred): “My Business MCP Extension”

   - Server URL, Token, Auto-register, Port, etc.
   - Future: agent-level knobs (timeouts, keywords, priorities) exposed in organized sections with help links.

2. Chat commands (secondary):
   - Planned commands to list, get, and set settings with validation and safe fallback.

Settings validation will prevent invalid values from taking effect; invalid overrides will be rejected with a helpful warning.

## User Context: global and local

- Global context is stored in your VS Code extensions directory (Windows example): `C:\Users\plach\.vscode\extensions` under a `.mcp-cache` folder.
- Local context is stored in your workspace under `.mcp-cache`.
- The extension guides you through adding or editing User Context via templates, then validates and indexes it.

## Development

Requirements:

- Node 18+
- VS Code 1.95+

Useful scripts:

- Build: `npm run compile` (prebuild scripts keep templates and docs in sync)
- Test (100% coverage target): `npm test`
- Lint: `npm run lint`
- Docs: `npm run docs`

Quality gates (enforced before merge):

- 100% coverage (literal)
- Lint clean (including strict JSDoc)
- Build passes
- Docs and health report up-to-date

## Troubleshooting

- If you’re using the embedded server, ensure no conflicting process is running on the configured port.
- To inspect what was replaced in templates, see `docs/template-variables.md` and the build logs.
- For User Context problems, check both `.mcp-cache` locations and ensure your JSON files validate against the provided schemas.

## Contributing

See the development workflow guide and the CHANGELOG for planned tasks and verification results. We maintain backward-compatible aliases for one release when renaming/migrating components.

---

Made with ❤️ to streamline customizable MCP tooling in Copilot Chat.
