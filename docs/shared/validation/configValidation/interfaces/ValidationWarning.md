[**UserContext-mcp-extension v1.0.0**](../../../../README.md)

***

[UserContext-mcp-extension](../../../../modules.md) / [shared/validation/configValidation](../README.md) / ValidationWarning

# Interface: ValidationWarning

Defined in: [src/shared/validation/configValidation.ts:49](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/validation/configValidation.ts#L49)

Non-blocking validation warning (advisory issue that does not fail validation).

## Extends

- `Omit`\<[`ValidationError`](ValidationError.md), `"level"`\>

## Properties

### actual?

> `optional` **actual**: `unknown`

Defined in: [src/shared/validation/configValidation.ts:43](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/validation/configValidation.ts#L43)

#### Inherited from

[`ValidationError`](ValidationError.md).[`actual`](ValidationError.md#actual)

***

### category

> **category**: `"schema"` \| `"type"` \| `"business_rule"` \| `"compatibility"`

Defined in: [src/shared/validation/configValidation.ts:39](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/validation/configValidation.ts#L39)

#### Inherited from

[`ValidationError`](ValidationError.md).[`category`](ValidationError.md#category)

***

### expected?

> `optional` **expected**: `unknown`

Defined in: [src/shared/validation/configValidation.ts:42](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/validation/configValidation.ts#L42)

#### Inherited from

[`ValidationError`](ValidationError.md).[`expected`](ValidationError.md#expected)

***

### level

> **level**: `"warning"`

Defined in: [src/shared/validation/configValidation.ts:50](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/validation/configValidation.ts#L50)

***

### message

> **message**: `string`

Defined in: [src/shared/validation/configValidation.ts:41](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/validation/configValidation.ts#L41)

#### Inherited from

[`ValidationError`](ValidationError.md).[`message`](ValidationError.md#message)

***

### path

> **path**: `string`

Defined in: [src/shared/validation/configValidation.ts:40](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/validation/configValidation.ts#L40)

#### Inherited from

[`ValidationError`](ValidationError.md).[`path`](ValidationError.md#path)
