[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / server/orchestratorBridge

# server/orchestratorBridge

Orchestrator bridge for MCP tool calls.

Coordinates Orchestrator and agents for the MCP server. Resolves categories
via UserContextAgent, runs queries via DatabaseAgent, and delegates
user-facing formatting to CommunicationAgent to keep the server thin.

## Interfaces

- [BridgeResult](interfaces/BridgeResult.md)

## Functions

- [createAgents](functions/createAgents.md)
- [describeCategoryBridge](functions/describeCategoryBridge.md)
- [listCategorySummariesBridge](functions/listCategorySummariesBridge.md)
- [searchCategoryRecordsBridge](functions/searchCategoryRecordsBridge.md)
