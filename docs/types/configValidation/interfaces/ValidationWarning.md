[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/configValidation](../README.md) / ValidationWarning

# Interface: ValidationWarning

Defined in: [src/types/configValidation.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configValidation.ts#L19)

Validation warning (non-blocking issue).

## Extends

- `Omit`\<[`ValidationError`](ValidationError.md), `"level"`\>

## Properties

### actual?

> `optional` **actual**: `unknown`

Defined in: [src/types/configValidation.ts:15](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configValidation.ts#L15)

#### Inherited from

[`ValidationError`](ValidationError.md).[`actual`](ValidationError.md#actual)

***

### category

> **category**: `"schema"` \| `"type"` \| `"business_rule"` \| `"compatibility"`

Defined in: [src/types/configValidation.ts:11](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configValidation.ts#L11)

#### Inherited from

[`ValidationError`](ValidationError.md).[`category`](ValidationError.md#category)

***

### expected?

> `optional` **expected**: `unknown`

Defined in: [src/types/configValidation.ts:14](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configValidation.ts#L14)

#### Inherited from

[`ValidationError`](ValidationError.md).[`expected`](ValidationError.md#expected)

***

### level

> **level**: `"warning"`

Defined in: [src/types/configValidation.ts:20](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configValidation.ts#L20)

***

### message

> **message**: `string`

Defined in: [src/types/configValidation.ts:13](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configValidation.ts#L13)

#### Inherited from

[`ValidationError`](ValidationError.md).[`message`](ValidationError.md#message)

***

### path

> **path**: `string`

Defined in: [src/types/configValidation.ts:12](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configValidation.ts#L12)

#### Inherited from

[`ValidationError`](ValidationError.md).[`path`](ValidationError.md#path)
