/**
 * @packageDocumentation agentProfiles implementation for mcp module
 * @deprecated This file is deprecated. Use unifiedAgentConfig.ts instead.
 * Kept for backward compatibility during transition period.
 */

// Re-export everything from the unified configuration
export {
  type AgentIdentifier,
  type AgentProfile,
  type KnownAgentProfile,
  OrchestratorProfile,
  RelevantDataManagerAgentProfile,
  DatabaseAgentProfile,
  DataAgentProfile,
  ClarificationAgentProfile,
} from "./unifiedAgentConfig";
