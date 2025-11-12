[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/configValidation](../README.md) / ValidationResult

# Interface: ValidationResult

Defined in: [src/types/configValidation.ts:15](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configValidation.ts#L15)

Validation result with detailed error information

## Properties

### errors

> **errors**: [`ValidationError`](ValidationError.md)[]

Defined in: [src/types/configValidation.ts:20](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configValidation.ts#L20)

List of validation errors found

***

### isValid

> **isValid**: `boolean`

Defined in: [src/types/configValidation.ts:17](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configValidation.ts#L17)

Whether validation passed

***

### warnings

> **warnings**: [`ValidationWarning`](ValidationWarning.md)[]

Defined in: [src/types/configValidation.ts:23](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configValidation.ts#L23)

List of validation warnings (non-blocking issues)
