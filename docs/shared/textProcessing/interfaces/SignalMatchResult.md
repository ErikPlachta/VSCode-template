[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/textProcessing](../README.md) / SignalMatchResult

# Interface: SignalMatchResult

Defined in: [src/shared/textProcessing.ts:25](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/shared/textProcessing.ts#L25)

Result of a signal matching operation.

## Properties

### matched

> **matched**: `string`[]

Defined in: [src/shared/textProcessing.ts:27](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/shared/textProcessing.ts#L27)

Signals that matched the input text

***

### score

> **score**: `number`

Defined in: [src/shared/textProcessing.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/shared/textProcessing.ts#L31)

Total match score based on weights

***

### unmatched

> **unmatched**: `string`[]

Defined in: [src/shared/textProcessing.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/shared/textProcessing.ts#L29)

Signals that did not match
