[**UserContext-mcp-extension v1.0.0**](../../../../README.md)

***

[UserContext-mcp-extension](../../../../modules.md) / [shared/config/agentConfigValidation](../README.md) / ValidationWarning

# Interface: ValidationWarning

Defined in: [src/shared/config/agentConfigValidation.ts:39](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/config/agentConfigValidation.ts#L39)

Non-blocking validation warning (subset of ValidationError fields).

## Extends

- `Omit`\<[`ValidationError`](ValidationError.md), `"level"`\>

## Properties

### actual?

> `optional` **actual**: `unknown`

Defined in: [src/shared/config/agentConfigValidation.ts:33](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/config/agentConfigValidation.ts#L33)

#### Inherited from

[`ValidationError`](ValidationError.md).[`actual`](ValidationError.md#actual)

***

### category

> **category**: `"schema"` \| `"type"` \| `"business_rule"` \| `"compatibility"`

Defined in: [src/shared/config/agentConfigValidation.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/config/agentConfigValidation.ts#L29)

#### Inherited from

[`ValidationError`](ValidationError.md).[`category`](ValidationError.md#category)

***

### expected?

> `optional` **expected**: `unknown`

Defined in: [src/shared/config/agentConfigValidation.ts:32](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/config/agentConfigValidation.ts#L32)

#### Inherited from

[`ValidationError`](ValidationError.md).[`expected`](ValidationError.md#expected)

***

### level

> **level**: `"warning"`

Defined in: [src/shared/config/agentConfigValidation.ts:40](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/config/agentConfigValidation.ts#L40)

***

### message

> **message**: `string`

Defined in: [src/shared/config/agentConfigValidation.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/config/agentConfigValidation.ts#L31)

#### Inherited from

[`ValidationError`](ValidationError.md).[`message`](ValidationError.md#message)

***

### path

> **path**: `string`

Defined in: [src/shared/config/agentConfigValidation.ts:30](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/config/agentConfigValidation.ts#L30)

#### Inherited from

[`ValidationError`](ValidationError.md).[`path`](ValidationError.md#path)
