[**myBusiness-mcp-extension v1.0.0**](../../../../README.md)

***

[myBusiness-mcp-extension](../../../../modules.md) / [agent/orchestrator/agent.config](../README.md) / orchestratorConfig

# Variable: orchestratorConfig

> `const` **orchestratorConfig**: [`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

Defined in: [src/agent/orchestrator/agent.config.ts:27](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/agent.config.ts#L27)

Complete configuration for the Orchestrator agent.

The orchestrator's primary responsibility is intent classification and routing.
It analyzes incoming user questions to determine which specialized agent
should handle the request.
