[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / AgentIdentity

# Interface: AgentIdentity

Defined in: [src/types/agentConfig.ts:47](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L47)

Basic identity and human-readable metadata for an agent.

## Example

```ts
const identity: AgentIdentity = {
  id: "communication-agent",
  name: "Communication Agent",
  version: "1.0.0",
  description: "Formats responses from agents into user-friendly messages",
};
```

## Properties

### description

> **description**: `string`

Defined in: [src/types/agentConfig.ts:66](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L66)

Comprehensive description of the agent's purpose and capabilities.

***

### id

> **id**: `string`

Defined in: [src/types/agentConfig.ts:51](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L51)

Unique agent identifier used in routing and logging.

***

### name

> **name**: `string`

Defined in: [src/types/agentConfig.ts:56](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L56)

Human-readable name of the agent.

***

### version

> **version**: `string`

Defined in: [src/types/agentConfig.ts:61](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L61)

Semantic version of the agent configuration.
