[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [agent/interfaces](../README.md) / ClarificationAgentInterface

# Interface: ClarificationAgentInterface

Defined in: [src/agent/interfaces.ts:237](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/interfaces.ts#L237)

Interface for agents that handle clarification of ambiguous user requests.

## Methods

### clarify()

> **clarify**(`input`): `Promise`\<[`ClarificationResponse`](ClarificationResponse.md)\>

Defined in: [src/agent/interfaces.ts:238](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/interfaces.ts#L238)

#### Parameters

##### input

[`ClarificationInput`](ClarificationInput.md)

#### Returns

`Promise`\<[`ClarificationResponse`](ClarificationResponse.md)\>
