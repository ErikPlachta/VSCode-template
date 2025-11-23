[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [mcp/schemaUtils](../README.md) / NormalizeSchemaName

# Function: NormalizeSchemaName()

> **NormalizeSchemaName**(`name`): `string`

Defined in: [src/mcp/schemaUtils.ts:37](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/mcp/schemaUtils.ts#L37)

Normalize a schema name by trimming whitespace and lowercasing.

## Parameters

### name

`string`

Raw schema name.

## Returns

`string`

Normalized lowercase name suitable for duplicate detection.
