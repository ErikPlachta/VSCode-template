[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/configValidation](../README.md) / ValidationError

# Interface: ValidationError

Defined in: [src/types/configValidation.ts:30](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/configValidation.ts#L30)

Detailed validation error information

## Properties

### actual?

> `optional` **actual**: `unknown`

Defined in: [src/types/configValidation.ts:47](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/configValidation.ts#L47)

Actual value found

***

### category

> **category**: `"schema"` \| `"type"` \| `"business_rule"` \| `"compatibility"`

Defined in: [src/types/configValidation.ts:35](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/configValidation.ts#L35)

Error category

***

### expected?

> `optional` **expected**: `unknown`

Defined in: [src/types/configValidation.ts:44](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/configValidation.ts#L44)

Expected value or format

***

### level

> **level**: `"error"` \| `"warning"`

Defined in: [src/types/configValidation.ts:32](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/configValidation.ts#L32)

Error severity level

***

### message

> **message**: `string`

Defined in: [src/types/configValidation.ts:41](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/configValidation.ts#L41)

Human-readable error message

***

### path

> **path**: `string`

Defined in: [src/types/configValidation.ts:38](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/configValidation.ts#L38)

JSON path to the problematic field
