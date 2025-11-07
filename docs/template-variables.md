# Template Variables Report

## Agent Definitions

| Agent | Label | Display Name | Description |
|-------|-------|--------------|-------------|
| orchestrator | Orchestrator | Orchestrator | Routes questions to appropriate agents based on intent classification |
| relevantDataManager | Relevant data manager | Relevant Data Manager | Manages category metadata, schemas, and data relationships |
| databaseAgent | Database agent | Database Agent | Executes filtered queries and searches across category records |
| dataAgent | Data agent | Data Agent | Synthesizes insights and creates exploration plans from data analysis |
| clarificationAgent | Clarification agent | Clarification Agent | Handles ambiguous requests and guides users toward actionable queries |

## Template Replacements

| Placeholder | Resolves To | Current Value |
|-------------|-------------|---------------|
| `<orchestrator-label>` | `{{agents.definitions.orchestrator.label}}` | Orchestrator |
| `<relevant-data-manager-label>` | `{{agents.definitions.relevantDataManager.label}}` | Relevant data manager |
| `<database-agent-label>` | `{{agents.definitions.databaseAgent.label}}` | Database agent |
| `<data-agent-label>` | `{{agents.definitions.dataAgent.label}}` | Data agent |
| `<clarification-agent-label>` | `{{agents.definitions.clarificationAgent.label}}` | Clarification agent |