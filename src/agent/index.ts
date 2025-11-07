/**
 * @file Centralized exports for all agent implementations.
 */

// Core agent implementations
export {
  ClarificationAgent,
  ClarificationAgentInput,
  ClarificationResponse,
} from "./clarificationAgent";
export {
  DataAgent,
  TopicOverview,
  TopicConnections,
  ExplorationPlan,
  ExplorationStep,
  TopicSearchResult,
  CrossTopicConnection,
  CategoryToolkit,
  createDataAgent,
} from "./dataAgent";
export {
  DatabaseAgent,
  QueryOptions,
  PeopleQuery,
  DepartmentQuery,
  ApplicationQuery,
  PolicyQuery,
  ResourceQuery,
  SavedQueryResult,
} from "./databaseAgent";
export {
  Orchestrator,
  OrchestratorInput,
  OrchestratorResponse,
  OrchestratorClassification,
  OrchestratorIntent,
} from "./orchestrator";
export { RelevantDataManagerAgent } from "./relevantDataManagerAgent";

// Health and maintenance agents
export { RepositoryHealthAgent } from "./repositoryHealthAgent";

// Re-export agent profiles for convenience
export {
  OrchestratorProfile,
  ClarificationAgentProfile,
  DataAgentProfile,
  DatabaseAgentProfile,
  RelevantDataManagerAgentProfile,
  type AgentIdentifier,
  type AgentProfile,
  type KnownAgentProfile,
} from "@mcp/config/agentProfiles";

// Agent configuration service
export {
  AgentConfigurationService,
  getAgentConfigurationService,
} from "@shared/agentConfigurationService";
