[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/configValidation](../README.md) / ValidationWarning

# Interface: ValidationWarning

Defined in: [src/types/configValidation.ts:54](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/configValidation.ts#L54)

Validation warning (non-blocking issue)

## Extends

- `Omit`\<[`ValidationError`](ValidationError.md), `"level"`\>

## Properties

### actual?

> `optional` **actual**: `unknown`

Defined in: [src/types/configValidation.ts:47](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/configValidation.ts#L47)

Actual value found

#### Inherited from

[`ValidationError`](ValidationError.md).[`actual`](ValidationError.md#actual)

***

### category

> **category**: `"schema"` \| `"type"` \| `"business_rule"` \| `"compatibility"`

Defined in: [src/types/configValidation.ts:35](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/configValidation.ts#L35)

Error category

#### Inherited from

[`ValidationError`](ValidationError.md).[`category`](ValidationError.md#category)

***

### expected?

> `optional` **expected**: `unknown`

Defined in: [src/types/configValidation.ts:44](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/configValidation.ts#L44)

Expected value or format

#### Inherited from

[`ValidationError`](ValidationError.md).[`expected`](ValidationError.md#expected)

***

### level

> **level**: `"warning"`

Defined in: [src/types/configValidation.ts:55](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/configValidation.ts#L55)

***

### message

> **message**: `string`

Defined in: [src/types/configValidation.ts:41](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/configValidation.ts#L41)

Human-readable error message

#### Inherited from

[`ValidationError`](ValidationError.md).[`message`](ValidationError.md#message)

***

### path

> **path**: `string`

Defined in: [src/types/configValidation.ts:38](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/configValidation.ts#L38)

JSON path to the problematic field

#### Inherited from

[`ValidationError`](ValidationError.md).[`path`](ValidationError.md#path)
