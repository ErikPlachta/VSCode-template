[**mybusiness-mcp-extension v1.0.0**](../../README.md)

***

[mybusiness-mcp-extension](../../modules.md) / [extension](../README.md) / activate

# Function: activate()

> **activate**(`context`): `Promise`\<`void`\>

Defined in: [src/extension/index.ts:30](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/extension/index.ts#L30)

Activate the MyBusiness MCP extension.

Responsibilities:
- Optionally start the embedded MCP server (when no external serverUrl is configured).
- Register the MCP provider for server discovery.
- Register the chat participant that routes user prompts through the orchestrator.
- Expose a command for manual tool invocation.

## Parameters

### context

`ExtensionContext`

VS Code extension lifecycle context used for disposables.

## Returns

`Promise`\<`void`\>

Resolves when activation sequence has completed (server started, participant registered).
