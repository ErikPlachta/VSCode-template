/**
 * @packageDocumentation Configuration ID Registry - Central registry for all agent configuration schema IDs
 *
 * This file provides a centralized registry of unique configuration IDs (UIDs) for all
 * agent configurations. Instead of using file paths in schema references, each configuration
 * type has a unique ID that can be validated and versioned independently.
 *
 * Benefits:
 * - Unique identification of configuration schemas
 * - Version tracking for configuration changes
 * - Validation and compatibility checking
 * - Decoupling from file system structure
 */

/**
 * Configuration ID format: agent.{agentType}.v{major}.{minor}.{patch}
 *
 * Examples:
 * - agent.orchestrator.v1.0.0
 * - agent.database.v1.2.0
 * - agent.clarification.v2.0.0
 */
export const CONFIG_IDS = {
  /** Orchestrator agent configuration schema */
  ORCHESTRATOR: "agent.orchestrator.v1.0.0",

  /** Database agent configuration schema */
  DATABASE_AGENT: "agent.database.v1.0.0",

  /** Data agent configuration schema */
  DATA_AGENT: "agent.data.v1.0.0",

  /** Clarification agent configuration schema */
  CLARIFICATION_AGENT: "agent.clarification.v1.0.0",

  /** Relevant data manager agent configuration schema */
  RELEVANT_DATA_MANAGER: "agent.relevant-data-manager.v1.0.0",

  /** Repository health agent configuration schema */
  REPOSITORY_HEALTH: "agent.repository-health.v1.0.0",
} as const;

/**
 * Configuration metadata for each schema ID
 */
export interface ConfigMetadata {
  /** Unique configuration ID */
  id: string;

  /** Human-readable name */
  name: string;

  /** Version information */
  version: {
    major: number;
    minor: number;
    patch: number;
  };

  /** Description of what this configuration schema covers */
  description: string;

  /** Agent type this configuration is for */
  agentType: string;

  /** Date this schema version was created */
  createdDate: string;

  /** List of breaking changes from previous versions */
  breakingChanges?: string[];

  /** Migration notes for upgrading from previous versions */
  migrationNotes?: string[];
}

/**
 * Registry of all configuration metadata
 */
export const CONFIG_REGISTRY: Record<string, ConfigMetadata> = {
  [CONFIG_IDS.ORCHESTRATOR]: {
    id: CONFIG_IDS.ORCHESTRATOR,
    name: "Orchestrator Configuration",
    version: { major: 1, minor: 0, patch: 0 },
    description:
      "Configuration schema for orchestrator agent including intent classification, routing, and text processing settings",
    agentType: "orchestrator",
    createdDate: "2025-11-07",
    breakingChanges: [],
    migrationNotes: [],
  },

  [CONFIG_IDS.DATABASE_AGENT]: {
    id: CONFIG_IDS.DATABASE_AGENT,
    name: "Database Agent Configuration",
    version: { major: 1, minor: 0, patch: 0 },
    description:
      "Configuration schema for database agent including query settings, caching, and data access patterns",
    agentType: "database-agent",
    createdDate: "2025-11-07",
    breakingChanges: [],
    migrationNotes: [],
  },

  [CONFIG_IDS.DATA_AGENT]: {
    id: CONFIG_IDS.DATA_AGENT,
    name: "Data Agent Configuration",
    version: { major: 1, minor: 0, patch: 0 },
    description:
      "Configuration schema for data agent including analysis settings, insight generation, and exploration parameters",
    agentType: "data-agent",
    createdDate: "2025-11-07",
    breakingChanges: [],
    migrationNotes: [],
  },

  [CONFIG_IDS.CLARIFICATION_AGENT]: {
    id: CONFIG_IDS.CLARIFICATION_AGENT,
    name: "Clarification Agent Configuration",
    version: { major: 1, minor: 0, patch: 0 },
    description:
      "Configuration schema for clarification agent including escalation handling and user guidance settings",
    agentType: "clarification-agent",
    createdDate: "2025-11-07",
    breakingChanges: [],
    migrationNotes: [],
  },

  [CONFIG_IDS.RELEVANT_DATA_MANAGER]: {
    id: CONFIG_IDS.RELEVANT_DATA_MANAGER,
    name: "Relevant Data Manager Configuration",
    version: { major: 1, minor: 0, patch: 0 },
    description:
      "Configuration schema for relevant data manager including metadata management and schema validation settings",
    agentType: "relevant-data-manager",
    createdDate: "2025-11-07",
    breakingChanges: [],
    migrationNotes: [],
  },

  [CONFIG_IDS.REPOSITORY_HEALTH]: {
    id: CONFIG_IDS.REPOSITORY_HEALTH,
    name: "Repository Health Agent Configuration",
    version: { major: 1, minor: 0, patch: 0 },
    description:
      "Configuration schema for repository health agent including linting, validation, and health check settings",
    agentType: "repository-health",
    createdDate: "2025-11-07",
    breakingChanges: [],
    migrationNotes: [],
  },
};

/**
 * Utility functions for working with configuration IDs
 */
export const ConfigUtils = {
  /**
   * Validate that a configuration ID exists in the registry
   */
  isValidConfigId(configId: string): boolean {
    return configId in CONFIG_REGISTRY;
  },

  /**
   * Get metadata for a configuration ID
   */
  getMetadata(configId: string): ConfigMetadata | undefined {
    return CONFIG_REGISTRY[configId];
  },

  /**
   * Parse version information from a configuration ID
   */
  parseVersion(
    configId: string
  ): { major: number; minor: number; patch: number } | undefined {
    const metadata = this.getMetadata(configId);
    return metadata?.version;
  },

  /**
   * Check if two configuration IDs are compatible (same agent type, compatible version)
   */
  areCompatible(configId1: string, configId2: string): boolean {
    const meta1 = this.getMetadata(configId1);
    const meta2 = this.getMetadata(configId2);

    if (!meta1 || !meta2) return false;
    if (meta1.agentType !== meta2.agentType) return false;

    // Simple compatibility: same major version
    return meta1.version.major === meta2.version.major;
  },

  /**
   * Get all configuration IDs for a specific agent type
   */
  getConfigsForAgent(agentType: string): string[] {
    return Object.keys(CONFIG_REGISTRY).filter(
      (id) => CONFIG_REGISTRY[id].agentType === agentType
    );
  },

  /**
   * Generate a new configuration ID for an agent type and version
   */
  generateConfigId(
    agentType: string,
    major: number,
    minor: number,
    patch: number
  ): string {
    return `agent.${agentType}.v${major}.${minor}.${patch}`;
  },
};

/**
 * Type-safe way to reference configuration IDs
 */
export type ConfigId = (typeof CONFIG_IDS)[keyof typeof CONFIG_IDS];

/**
 * Validation function for configuration objects
 *
 * @param {{ $configId?: string }} config - config parameter.
 * @returns {boolean} - TODO: describe return value.
 */
export function validateConfig(config: { $configId?: string }): boolean {
  if (!config.$configId) {
    console.error("Configuration missing $configId field");
    return false;
  }

  if (!ConfigUtils.isValidConfigId(config.$configId)) {
    console.error(`Invalid configuration ID: ${config.$configId}`);
    return false;
  }

  return true;
}
