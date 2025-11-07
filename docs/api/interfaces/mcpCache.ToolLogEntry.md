[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [mcpCache](../modules/mcpCache.md) / ToolLogEntry

# Interface: ToolLogEntry

[mcpCache](../modules/mcpCache.md).ToolLogEntry

Structure for log entries persisted inside `.mybusinessMCP`.

## Table of contents

### Properties

- [args](mcpCache.ToolLogEntry.md#args)
- [context](mcpCache.ToolLogEntry.md#context)
- [error](mcpCache.ToolLogEntry.md#error)
- [result](mcpCache.ToolLogEntry.md#result)
- [timestamp](mcpCache.ToolLogEntry.md#timestamp)
- [toolName](mcpCache.ToolLogEntry.md#toolname)

## Properties

### args

• **args**: `Record`\<`string`, `unknown`\>

Arguments sent to the MCP tool implementation.

#### Defined in

src/extension/mcpCache.ts:41

___

### context

• **context**: `string`[]

High-level conversation context that accompanied the request.

#### Defined in

src/extension/mcpCache.ts:43

___

### error

• `Optional` **error**: `string`

Human-readable error message when an invocation fails.

#### Defined in

src/extension/mcpCache.ts:49

___

### result

• `Optional` **result**: `unknown`

Raw payload returned by the tool implementation, if any.

#### Defined in

src/extension/mcpCache.ts:47

___

### timestamp

• **timestamp**: `string`

ISO timestamp when the invocation took place.

#### Defined in

src/extension/mcpCache.ts:37

___

### toolName

• **toolName**: `string`

Tool identifier that generated the log entry.

#### Defined in

src/extension/mcpCache.ts:39
