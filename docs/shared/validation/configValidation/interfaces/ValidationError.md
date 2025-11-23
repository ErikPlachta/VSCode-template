[**UserContext-mcp-extension v1.0.0**](../../../../README.md)

***

[UserContext-mcp-extension](../../../../modules.md) / [shared/validation/configValidation](../README.md) / ValidationError

# Interface: ValidationError

Defined in: [src/shared/validation/configValidation.ts:37](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/validation/configValidation.ts#L37)

Structured validation error entry.

## Remarks

Errors are blocking; warnings are non-blocking (see [ValidationWarning](ValidationWarning.md)).

## Properties

### actual?

> `optional` **actual**: `unknown`

Defined in: [src/shared/validation/configValidation.ts:43](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/validation/configValidation.ts#L43)

***

### category

> **category**: `"schema"` \| `"type"` \| `"business_rule"` \| `"compatibility"`

Defined in: [src/shared/validation/configValidation.ts:39](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/validation/configValidation.ts#L39)

***

### expected?

> `optional` **expected**: `unknown`

Defined in: [src/shared/validation/configValidation.ts:42](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/validation/configValidation.ts#L42)

***

### level

> **level**: `"warning"` \| `"error"`

Defined in: [src/shared/validation/configValidation.ts:38](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/validation/configValidation.ts#L38)

***

### message

> **message**: `string`

Defined in: [src/shared/validation/configValidation.ts:41](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/validation/configValidation.ts#L41)

***

### path

> **path**: `string`

Defined in: [src/shared/validation/configValidation.ts:40](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/validation/configValidation.ts#L40)
