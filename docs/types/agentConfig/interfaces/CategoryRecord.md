[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / CategoryRecord

# Interface: CategoryRecord

Defined in: [src/types/agentConfig.ts:807](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L807)

Generic record model allowing arbitrary fields.
Represents a minimal record from any business data category.

## Param

Unique identifier for the record (required)

## Param

Optional human-readable name

## Param

Optional alternative to name (some records use title instead)

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### id

> **id**: `string`

Defined in: [src/types/agentConfig.ts:808](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L808)

***

### name?

> `optional` **name**: `string`

Defined in: [src/types/agentConfig.ts:809](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L809)

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/agentConfig.ts:810](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L810)
