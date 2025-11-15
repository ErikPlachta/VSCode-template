[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [mcp/schemaUtils](../README.md) / validateCategorySchemas

# Function: validateCategorySchemas()

> **validateCategorySchemas**(`categories`): [`SchemaValidationSummary`](../interfaces/SchemaValidationSummary.md)

Defined in: [src/mcp/schemaUtils.ts:93](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/mcp/schemaUtils.ts#L93)

Aggregate schema validation results for provided categories.

## Parameters

### categories

[`BusinessCategory`](../../../types/userContext.types/interfaces/BusinessCategory.md)[]

All business categories loaded.

## Returns

[`SchemaValidationSummary`](../interfaces/SchemaValidationSummary.md)

Summary containing missing relationship issues and duplicate schema names.
