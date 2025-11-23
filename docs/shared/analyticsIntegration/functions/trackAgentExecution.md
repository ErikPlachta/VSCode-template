[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/analyticsIntegration](../README.md) / trackAgentExecution

# Function: trackAgentExecution()

> **trackAgentExecution**(`agentName`, `methodName?`): \<`T`\>(`target`, `propertyKey`, `descriptor`) => `void`

Defined in: [src/shared/analyticsIntegration.ts:20](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/analyticsIntegration.ts#L20)

Decorator function for automatic analytics tracking on agent methods.

## Parameters

### agentName

`string`

agentName parameter.

### methodName?

`string`

methodName parameter.

## Returns

- TODO: describe return value.

> \<`T`\>(`target`, `propertyKey`, `descriptor`): `void`

### Type Parameters

#### T

`T` *extends* (...`args`) => `Promise`\<`unknown`\>

### Parameters

#### target

`unknown`

#### propertyKey

`string`

#### descriptor

`PropertyDescriptor`

### Returns

`void`
