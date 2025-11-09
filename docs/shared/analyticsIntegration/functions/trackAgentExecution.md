[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/analyticsIntegration](../README.md) / trackAgentExecution

# Function: trackAgentExecution()

> **trackAgentExecution**(`agentName`, `methodName?`): \<`T`\>(`target`, `propertyKey`, `descriptor`) => `void`

Defined in: [src/shared/analyticsIntegration.ts:20](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/71969725308ebc3e692eaeafc61e692e33e07c8b/src/shared/analyticsIntegration.ts#L20)

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
