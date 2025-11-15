[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [extension/mcpRegistration](../README.md) / McpConfigPathOptions

# Interface: McpConfigPathOptions

Defined in: [src/extension/mcpRegistration.ts:65](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/extension/mcpRegistration.ts#L65)

Options used to resolve the VS Code MCP configuration path (primarily for testing).

## Properties

### appDataDir?

> `optional` **appDataDir**: `string`

Defined in: [src/extension/mcpRegistration.ts:71](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/extension/mcpRegistration.ts#L71)

Explicit APPDATA-style directory for Windows (defaults to process.env.APPDATA).

***

### appIdentifier?

> `optional` **appIdentifier**: `string`

Defined in: [src/extension/mcpRegistration.ts:75](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/extension/mcpRegistration.ts#L75)

Explicit app identifier (e.g. `code-insiders`) to infer user data folder.

***

### appName?

> `optional` **appName**: `string`

Defined in: [src/extension/mcpRegistration.ts:73](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/extension/mcpRegistration.ts#L73)

Explicit app name to infer user data folder (defaults to VS Code environment heuristics).

***

### homeDir?

> `optional` **homeDir**: `string`

Defined in: [src/extension/mcpRegistration.ts:69](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/extension/mcpRegistration.ts#L69)

Home directory override (defaults to [os.homedir](#)).

***

### platform?

> `optional` **platform**: `Platform`

Defined in: [src/extension/mcpRegistration.ts:67](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/extension/mcpRegistration.ts#L67)

Platform override (defaults to [process.platform](#)).

***

### portableDir?

> `optional` **portableDir**: `string`

Defined in: [src/extension/mcpRegistration.ts:77](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/extension/mcpRegistration.ts#L77)

Override for portable installations (defaults to process.env.VSCODE\_PORTABLE).
