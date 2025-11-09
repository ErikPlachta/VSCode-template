[**myBusiness-mcp-extension v1.0.0**](../../README.md)

***

[myBusiness-mcp-extension](../../modules.md) / [extension](../README.md) / activate

# Function: activate()

> **activate**(`context`): `Promise`\<`void`\>

Defined in: [src/extension/index.ts:25](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/71969725308ebc3e692eaeafc61e692e33e07c8b/src/extension/index.ts#L25)

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
