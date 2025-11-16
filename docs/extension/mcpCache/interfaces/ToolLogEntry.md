[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / ToolLogEntry

# Interface: ToolLogEntry

Defined in: [src/extension/mcpCache.ts:48](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/extension/mcpCache.ts#L48)

Structure for log entries persisted inside `.mcp-cache`.

## Properties

### args

> **args**: `Record`\<`string`, `unknown`\>

Defined in: [src/extension/mcpCache.ts:54](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/extension/mcpCache.ts#L54)

Arguments sent to the MCP server.

***

### context

> **context**: `string`[]

Defined in: [src/extension/mcpCache.ts:56](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/extension/mcpCache.ts#L56)

High-level conversation context that accompanied the request.

***

### error?

> `optional` **error**: `string`

Defined in: [src/extension/mcpCache.ts:60](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/extension/mcpCache.ts#L60)

Human-readable error message when an invocation fails.

***

### response?

> `optional` **response**: `unknown`

Defined in: [src/extension/mcpCache.ts:58](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/extension/mcpCache.ts#L58)

Raw payload returned by the server, if any.

***

### timestamp

> **timestamp**: `string`

Defined in: [src/extension/mcpCache.ts:50](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/extension/mcpCache.ts#L50)

ISO timestamp when the invocation took place.

***

### toolName

> **toolName**: `string`

Defined in: [src/extension/mcpCache.ts:52](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/extension/mcpCache.ts#L52)

Tool identifier that generated the log entry.
