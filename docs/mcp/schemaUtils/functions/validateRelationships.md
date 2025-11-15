[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [mcp/schemaUtils](../README.md) / validateRelationships

# Function: validateRelationships()

> **validateRelationships**(`categories`): [`RelationshipIntegrityIssue`](../interfaces/RelationshipIntegrityIssue.md)[]

Defined in: [src/mcp/schemaUtils.ts:67](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/mcp/schemaUtils.ts#L67)

Validate that all declared relationships target existing categories.

## Parameters

### categories

[`BusinessCategory`](../../../types/userContext.types/interfaces/BusinessCategory.md)[]

All business categories loaded.

## Returns

[`RelationshipIntegrityIssue`](../interfaces/RelationshipIntegrityIssue.md)[]

Issues for each relationship referencing a missing target category.
