[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/analyticsIntegration](../README.md) / TrackedAgent

# Abstract Class: TrackedAgent

Defined in: [src/shared/analyticsIntegration.ts:49](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/shared/analyticsIntegration.ts#L49)

Base class with built-in analytics tracking for agent implementations.

## Constructors

### Constructor

> **new TrackedAgent**(`agentName`): `TrackedAgent`

Defined in: [src/shared/analyticsIntegration.ts:59](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/shared/analyticsIntegration.ts#L59)

Creates a new tracked agent instance.

#### Parameters

##### agentName

`string`

agentName parameter.

#### Returns

`TrackedAgent`

- TODO: describe return value.

## Methods

### getStats()

> **getStats**(`since?`): `any`

Defined in: [src/shared/analyticsIntegration.ts:118](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/shared/analyticsIntegration.ts#L118)

Gets analytics statistics for this agent.

#### Parameters

##### since?

`Date`

since parameter.

#### Returns

`any`

- TODO: describe return value.
