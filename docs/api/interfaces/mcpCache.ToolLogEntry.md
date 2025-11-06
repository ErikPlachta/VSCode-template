[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [mcpCache](../modules/mcpCache.md) / ToolLogEntry

# Interface: ToolLogEntry

[mcpCache](../modules/mcpCache.md).ToolLogEntry

Structure for log entries persisted inside `.mcp-cache`.

## Table of contents

### Properties

- [args](mcpCache.ToolLogEntry.md#args)
- [context](mcpCache.ToolLogEntry.md#context)
- [error](mcpCache.ToolLogEntry.md#error)
- [response](mcpCache.ToolLogEntry.md#response)
- [timestamp](mcpCache.ToolLogEntry.md#timestamp)
- [toolName](mcpCache.ToolLogEntry.md#toolname)

## Properties

### args

• **args**: `Record`\<`string`, `unknown`\>

Arguments sent to the MCP server.

#### Defined in

src/mcpCache.ts:19

___

### context

• **context**: `string`[]

High-level conversation context that accompanied the request.

#### Defined in

src/mcpCache.ts:21

___

### error

• `Optional` **error**: `string`

Human-readable error message when an invocation fails.

#### Defined in

src/mcpCache.ts:25

___

### response

• `Optional` **response**: `unknown`

Raw payload returned by the server, if any.

#### Defined in

src/mcpCache.ts:23

___

### timestamp

• **timestamp**: `string`

ISO timestamp when the invocation took place.

#### Defined in

src/mcpCache.ts:15

___

### toolName

• **toolName**: `string`

Tool identifier that generated the log entry.

#### Defined in

src/mcpCache.ts:17
