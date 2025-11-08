/**
 * @packageDocumentation Centralized exports for all agent implementations.
 *
 * This file exports properly isolated agents that follow single responsibility principle.
 * Each agent has a distinct purpose and does not depend on other agents.
 * The Orchestrator coordinates all inter-agent communication.
 */

// Clean interface definitions for orchestrator coordination
export * from "./interfaces";

// Core agent implementations - each properly isolated
export { ClarificationAgent } from "./clarificationAgent/";
export { DataAgent } from "./dataAgent/";
export { DatabaseAgent } from "./databaseAgent/";
export { Orchestrator } from "./orchestrator/";
export { RelevantDataManagerAgent } from "./relevantDataManagerAgent/";

// Health and maintenance agents
export { RepositoryHealthAgent } from "../tools/repositoryHealth";

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
