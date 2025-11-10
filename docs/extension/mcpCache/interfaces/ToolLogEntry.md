[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / ToolLogEntry

# Interface: ToolLogEntry

Defined in: [src/extension/mcpCache.ts:46](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpCache.ts#L46)

Structure for log entries persisted inside `.mcp-cache`.

## Properties

### args

> **args**: `Record`\<`string`, `unknown`\>

Defined in: [src/extension/mcpCache.ts:52](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpCache.ts#L52)

Arguments sent to the MCP server.

***

### context

> **context**: `string`[]

Defined in: [src/extension/mcpCache.ts:54](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpCache.ts#L54)

High-level conversation context that accompanied the request.

***

### error?

> `optional` **error**: `string`

Defined in: [src/extension/mcpCache.ts:58](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpCache.ts#L58)

Human-readable error message when an invocation fails.

***

### response?

> `optional` **response**: `unknown`

Defined in: [src/extension/mcpCache.ts:56](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpCache.ts#L56)

Raw payload returned by the server, if any.

***

### timestamp

> **timestamp**: `string`

Defined in: [src/extension/mcpCache.ts:48](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpCache.ts#L48)

ISO timestamp when the invocation took place.

***

### toolName

> **toolName**: `string`

Defined in: [src/extension/mcpCache.ts:50](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpCache.ts#L50)

Tool identifier that generated the log entry.
