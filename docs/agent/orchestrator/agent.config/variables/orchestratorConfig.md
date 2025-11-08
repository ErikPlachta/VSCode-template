[**mybusiness-mcp-extension v1.0.0**](../../../../README.md)

***

[mybusiness-mcp-extension](../../../../modules.md) / [agent/orchestrator/agent.config](../README.md) / orchestratorConfig

# Variable: orchestratorConfig

> `const` **orchestratorConfig**: [`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

Defined in: [src/agent/orchestrator/agent.config.ts:27](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/orchestrator/agent.config.ts#L27)

Complete configuration for the Orchestrator agent.

The orchestrator's primary responsibility is intent classification and routing.
It analyzes incoming user questions to determine which specialized agent
should handle the request.
