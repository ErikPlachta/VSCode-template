[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / CONFIG\_IDS

# Variable: CONFIG\_IDS

> `const` **CONFIG\_IDS**: `object`

Defined in: [src/types/configRegistry.ts:22](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/configRegistry.ts#L22)

Configuration ID format: agent.{agentType}.v{major}.{minor}.{patch}

Examples:
- agent.orchestrator.v1.0.0
- agent.database.v1.2.0
- agent.clarification.v2.0.0

## Type Declaration

### CLARIFICATION\_AGENT

> `readonly` **CLARIFICATION\_AGENT**: `"agent.clarification.v1.0.0"` = `"agent.clarification.v1.0.0"`

Clarification agent configuration schema

### COMMUNICATION\_AGENT

> `readonly` **COMMUNICATION\_AGENT**: `"agent.communication.v1.0.0"` = `"agent.communication.v1.0.0"`

Communication agent configuration schema

### DATA\_AGENT

> `readonly` **DATA\_AGENT**: `"agent.data.v1.0.0"` = `"agent.data.v1.0.0"`

Data agent configuration schema

### DATA\_LOADER\_AGENT

> `readonly` **DATA\_LOADER\_AGENT**: `"agent.data-loader.v1.0.0"` = `"agent.data-loader.v1.0.0"`

DataLoader agent configuration schema

### DATABASE\_AGENT

> `readonly` **DATABASE\_AGENT**: `"agent.database.v1.0.0"` = `"agent.database.v1.0.0"`

Database agent configuration schema

### ORCHESTRATOR

> `readonly` **ORCHESTRATOR**: `"agent.orchestrator.v1.0.0"` = `"agent.orchestrator.v1.0.0"`

Orchestrator agent configuration schema

### RELEVANT\_DATA\_MANAGER

> `readonly` **RELEVANT\_DATA\_MANAGER**: `"agent.relevant-data-manager.v1.0.0"` = `"agent.relevant-data-manager.v1.0.0"`

Relevant data manager agent configuration schema

### REPOSITORY\_HEALTH

> `readonly` **REPOSITORY\_HEALTH**: `"agent.repository-health.v1.0.0"` = `"agent.repository-health.v1.0.0"`

Repository health agent configuration schema

### USER\_CONTEXT

> `readonly` **USER\_CONTEXT**: `"agent.user-context.v1.0.0"` = `"agent.user-context.v1.0.0"`

User Context (renamed) agent configuration schema - alias of relevant-data-manager
