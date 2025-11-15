[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/configValidation](../README.md) / ValidationError

# Interface: ValidationError

Defined in: [src/types/configValidation.ts:9](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/configValidation.ts#L9)

Detailed validation error information (runtime logic lives in shared module).

## Properties

### actual?

> `optional` **actual**: `unknown`

Defined in: [src/types/configValidation.ts:15](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/configValidation.ts#L15)

***

### category

> **category**: `"schema"` \| `"type"` \| `"business_rule"` \| `"compatibility"`

Defined in: [src/types/configValidation.ts:11](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/configValidation.ts#L11)

***

### expected?

> `optional` **expected**: `unknown`

Defined in: [src/types/configValidation.ts:14](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/configValidation.ts#L14)

***

### level

> **level**: `"warning"` \| `"error"`

Defined in: [src/types/configValidation.ts:10](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/configValidation.ts#L10)

***

### message

> **message**: `string`

Defined in: [src/types/configValidation.ts:13](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/configValidation.ts#L13)

***

### path

> **path**: `string`

Defined in: [src/types/configValidation.ts:12](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/configValidation.ts#L12)
