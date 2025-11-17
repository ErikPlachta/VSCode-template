[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [mcp/schemaUtils](../README.md) / NormalizeSchemaName

# Function: NormalizeSchemaName()

> **NormalizeSchemaName**(`name`): `string`

Defined in: [src/mcp/schemaUtils.ts:37](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/mcp/schemaUtils.ts#L37)

Normalize a schema name by trimming whitespace and lowercasing.

## Parameters

### name

`string`

Raw schema name.

## Returns

`string`

Normalized lowercase name suitable for duplicate detection.
