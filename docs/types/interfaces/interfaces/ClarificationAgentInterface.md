[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/interfaces](../README.md) / ClarificationAgentInterface

# Interface: ClarificationAgentInterface

Defined in: [src/types/interfaces.ts:285](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L285)

Interface for agents that generate clarification prompts.

## Methods

### clarify()

> **clarify**(`input`): `Promise`\<[`ClarificationResponse`](ClarificationResponse.md)\>

Defined in: [src/types/interfaces.ts:286](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L286)

#### Parameters

##### input

[`ClarificationInput`](ClarificationInput.md)

#### Returns

`Promise`\<[`ClarificationResponse`](ClarificationResponse.md)\>
