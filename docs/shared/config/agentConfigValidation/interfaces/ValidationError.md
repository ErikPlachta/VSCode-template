[**UserContext-mcp-extension v1.0.0**](../../../../README.md)

***

[UserContext-mcp-extension](../../../../modules.md) / [shared/config/agentConfigValidation](../README.md) / ValidationError

# Interface: ValidationError

Defined in: [src/shared/config/agentConfigValidation.ts:27](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/config/agentConfigValidation.ts#L27)

Blocking or advisory issue detected during validation.

## Properties

### actual?

> `optional` **actual**: `unknown`

Defined in: [src/shared/config/agentConfigValidation.ts:33](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/config/agentConfigValidation.ts#L33)

***

### category

> **category**: `"schema"` \| `"type"` \| `"business_rule"` \| `"compatibility"`

Defined in: [src/shared/config/agentConfigValidation.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/config/agentConfigValidation.ts#L29)

***

### expected?

> `optional` **expected**: `unknown`

Defined in: [src/shared/config/agentConfigValidation.ts:32](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/config/agentConfigValidation.ts#L32)

***

### level

> **level**: `"warning"` \| `"error"`

Defined in: [src/shared/config/agentConfigValidation.ts:28](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/config/agentConfigValidation.ts#L28)

***

### message

> **message**: `string`

Defined in: [src/shared/config/agentConfigValidation.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/config/agentConfigValidation.ts#L31)

***

### path

> **path**: `string`

Defined in: [src/shared/config/agentConfigValidation.ts:30](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/config/agentConfigValidation.ts#L30)
