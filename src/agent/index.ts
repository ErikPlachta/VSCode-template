/**
 * @packageDocumentation Centralized exports for all agent implementations.
 *
 * This file exports properly isolated agents that follow single responsibility principle.
 * Each agent has a distinct purpose and does not depend on other agents.
 * The Orchestrator coordinates all inter-agent communication.
 */

// Clean interface definitions for orchestrator coordination (moved to types)
export * from "@internal-types/interfaces";

// Core agent implementations - each properly isolated
export { ClarificationAgent } from "@agent/clarificationAgent";
export { DataAgent } from "@agent/dataAgent";
export { DatabaseAgent } from "@agent/databaseAgent";
export { Orchestrator } from "@agent/orchestrator";
// Deprecated legacy agent removed; use UserContextAgent instead
export { UserContextAgent } from "@agent/userContextAgent";

// Health and maintenance agents
export { RepositoryHealthAgent } from "@tools/repositoryHealth";

// Re-export agent profiles for convenience
export {
  OrchestratorProfile,
  ClarificationAgentProfile,
  DataAgentProfile,
  DatabaseAgentProfile,
  UserContextAgentProfile,
  type AgentIdentifier,
  type AgentProfile,
  type KnownAgentProfile,
} from "@mcp/config/agentProfiles";

// Agent configuration service
export {
  AgentConfigurationService,
  getAgentConfigurationService,
} from "@shared/agentConfigurationService";
