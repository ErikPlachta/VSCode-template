[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [mcp/schemaUtils](../README.md) / detectDuplicateSchemas

# Function: detectDuplicateSchemas()

> **detectDuplicateSchemas**(`schemas`): `string`[]

Defined in: [src/mcp/schemaUtils.ts:47](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/mcp/schemaUtils.ts#L47)

Detect duplicate schema names (case-insensitive) within a category.

## Parameters

### schemas

[`CategorySchema`](../../../types/userContext.types/interfaces/CategorySchema.md)[]

List of schema descriptors.

## Returns

`string`[]

Array of original schema names that appear more than once when normalized.
