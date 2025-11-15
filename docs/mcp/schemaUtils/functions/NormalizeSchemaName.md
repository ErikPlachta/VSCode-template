[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [mcp/schemaUtils](../README.md) / NormalizeSchemaName

# Function: NormalizeSchemaName()

> **NormalizeSchemaName**(`name`): `string`

Defined in: [src/mcp/schemaUtils.ts:37](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/mcp/schemaUtils.ts#L37)

Normalize a schema name by trimming whitespace and lowercasing.

## Parameters

### name

`string`

Raw schema name.

## Returns

`string`

Normalized lowercase name suitable for duplicate detection.
