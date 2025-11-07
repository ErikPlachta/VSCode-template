[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / mcp/agentProfiles

# Module: mcp/agentProfiles

## Table of contents

### Interfaces

- [AgentProfile](../interfaces/mcp_agentProfiles.AgentProfile.md)

### Type Aliases

- [AgentIdentifier](mcp_agentProfiles.md#agentidentifier)
- [KnownAgentProfile](mcp_agentProfiles.md#knownagentprofile)

### Variables

- [ClarificationAgentProfile](mcp_agentProfiles.md#clarificationagentprofile)
- [DataAgentProfile](mcp_agentProfiles.md#dataagentprofile)
- [DatabaseAgentProfile](mcp_agentProfiles.md#databaseagentprofile)
- [RelevantDataManagerAgentProfile](mcp_agentProfiles.md#relevantdatamanageragentprofile)

## Type Aliases

### AgentIdentifier

Ƭ **AgentIdentifier**: ``"relevant-data-manager"`` \| ``"database-agent"`` \| ``"data-agent"`` \| ``"clarification-agent"``

#### Defined in

[src/mcp/agentProfiles.ts:1](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/mcp/agentProfiles.ts#L1)

___

### KnownAgentProfile

Ƭ **KnownAgentProfile**: typeof [`RelevantDataManagerAgentProfile`](mcp_agentProfiles.md#relevantdatamanageragentprofile) \| typeof [`DatabaseAgentProfile`](mcp_agentProfiles.md#databaseagentprofile) \| typeof [`DataAgentProfile`](mcp_agentProfiles.md#dataagentprofile) \| typeof [`ClarificationAgentProfile`](mcp_agentProfiles.md#clarificationagentprofile)

#### Defined in

[src/mcp/agentProfiles.ts:47](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/mcp/agentProfiles.ts#L47)

## Variables

### ClarificationAgentProfile

• `Const` **ClarificationAgentProfile**: [`AgentProfile`](../interfaces/mcp_agentProfiles.AgentProfile.md)

#### Defined in

[src/mcp/agentProfiles.ts:39](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/mcp/agentProfiles.ts#L39)

___

### DataAgentProfile

• `Const` **DataAgentProfile**: [`AgentProfile`](../interfaces/mcp_agentProfiles.AgentProfile.md)

#### Defined in

[src/mcp/agentProfiles.ts:31](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/mcp/agentProfiles.ts#L31)

___

### DatabaseAgentProfile

• `Const` **DatabaseAgentProfile**: [`AgentProfile`](../interfaces/mcp_agentProfiles.AgentProfile.md)

#### Defined in

[src/mcp/agentProfiles.ts:23](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/mcp/agentProfiles.ts#L23)

___

### RelevantDataManagerAgentProfile

• `Const` **RelevantDataManagerAgentProfile**: [`AgentProfile`](../interfaces/mcp_agentProfiles.AgentProfile.md)

#### Defined in

[src/mcp/agentProfiles.ts:15](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/mcp/agentProfiles.ts#L15)
