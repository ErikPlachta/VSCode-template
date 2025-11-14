[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [mcp/schemaUtils](../README.md) / validateCategorySchemas

# Function: validateCategorySchemas()

> **validateCategorySchemas**(`categories`): [`SchemaValidationSummary`](../interfaces/SchemaValidationSummary.md)

Defined in: [src/mcp/schemaUtils.ts:93](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/mcp/schemaUtils.ts#L93)

Aggregate schema validation results for provided categories.

## Parameters

### categories

[`BusinessCategory`](../../../types/userContext.types/interfaces/BusinessCategory.md)[]

All business categories loaded.

## Returns

[`SchemaValidationSummary`](../interfaces/SchemaValidationSummary.md)

Summary containing missing relationship issues and duplicate schema names.
