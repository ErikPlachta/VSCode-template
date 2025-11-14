[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / ValidationResult

# Interface: ValidationResult

Defined in: [src/types/userContext.types.ts:625](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L625)

Validation result with detailed errors.

## Properties

### errors

> **errors**: [`ValidationError`](ValidationError.md)[]

Defined in: [src/types/userContext.types.ts:629](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L629)

List of validation errors (empty if valid)

***

### valid

> **valid**: `boolean`

Defined in: [src/types/userContext.types.ts:627](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L627)

Whether validation passed
