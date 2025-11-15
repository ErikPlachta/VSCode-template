[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / [extension](../README.md) / activate

# Function: activate()

> **activate**(`context`): `Promise`\<`void`\>

Defined in: [src/extension/index.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/extension/index.ts#L31)

Activate the UserContext MCP extension.

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
