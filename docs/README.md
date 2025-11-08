**myBusiness-mcp-extension v1.0.0**

***

# My Business MCP Extension

Simple, chat-first access to your business tools inside VS Code Copilot Chat.

## Quick start

1. Install the VSIX (or add from Marketplace when published).

1. Configure the server URL:

- VS Code Settings → “My Business MCP Extension” → set “Server URL” to your MCP endpoint.
- Leave token empty unless your server requires it.

1. Open a chat and try:

- Type `@myBusiness` to mention the participant and use available commands.
- Or run the Command Palette action: “My Business MCP: Invoke Tool”.

## What you can do

- Discover and invoke all tools exposed by your MCP server.
- Keep multi-turn context for richer follow-ups.
- See responses rendered as rich markdown (and JSON when useful).
- Review local invocation logs under `.mcp-cache/` for troubleshooting.

## Commands

- `/getBusinessMetric`
- `@listProjects`
- Command Palette → “My Business MCP: Invoke Tool”

## Configure

Settings → Extensions → “My Business MCP Extension”

- Server URL: `http(s)://your-mcp-server`
- Token: optional bearer token
- Auto-register: whether to write an entry into your global `mcp.json`

## Documentation

- User & architecture docs live in the repository’s docs folder:
  - Build Pipeline (guide):
    [docs/guides/build-pipeline.md](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/develop/docs/guides/build-pipeline.md)
  - Repository Health Agent (reference):
    [docs/reference/tools/repository-health-agent.md](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/develop/docs/reference/tools/repository-health-agent.md)
  - Orchestration (concept):
    [docs/concepts/orchestration.md](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/develop/docs/concepts/orchestration.md)

Looking to contribute or run from source? See the Development Workflow guide:
[docs/guides/development-workflow.md](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/develop/docs/guides/development-workflow.md)

---

Made with ❤️ to streamline MCP tooling in Copilot Chat.
