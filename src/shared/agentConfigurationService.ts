/**
 * @file Enhanced agent configuration service for loading and managing agent definitions.
 */

import { loadApplicationConfig } from "@shared/configurationLoader";
import type {
  AgentDefinition,
  ApplicationConfig,
} from "../types/applicationConfig";
import type { AgentIdentifier } from "@mcp/agentProfiles";

/**
 * Service for managing agent configurations and metadata.
 */
export class AgentConfigurationService {
  private config: ApplicationConfig | null = null;
  private static instance: AgentConfigurationService | null = null;

  /**
   * Private constructor for singleton pattern.
   */
  private constructor() {}

  /**
   * Gets the singleton instance of the agent configuration service.
   *
   * @returns The singleton instance.
   */
  public static getInstance(): AgentConfigurationService {
    if (!this.instance) {
      this.instance = new AgentConfigurationService();
    }
    return this.instance;
  }

  /**
   * Loads the application configuration if not already loaded.
   *
   * @returns Promise resolving to the application configuration.
   */
  private async ensureConfigLoaded(): Promise<ApplicationConfig> {
    if (!this.config) {
      this.config = await loadApplicationConfig();
    }
    return this.config;
  }

  /**
   * Gets the agent definition for the specified agent.
   *
   * @param agentId - The agent identifier.
   * @returns The agent definition.
   * @throws Error if agent not found.
   */
  public async getAgentDefinition(
    agentId: AgentIdentifier
  ): Promise<AgentDefinition> {
    const config = await this.ensureConfigLoaded();

    // Map agent identifiers to config keys
    let definition: AgentDefinition;

    switch (agentId) {
      case "orchestrator":
        definition = config.agents.definitions.orchestrator;
        break;
      case "relevant-data-manager":
        definition = config.agents.definitions.relevantDataManager;
        break;
      case "database-agent":
        definition = config.agents.definitions.databaseAgent;
        break;
      case "data-agent":
        definition = config.agents.definitions.dataAgent;
        break;
      case "clarification-agent":
        definition = config.agents.definitions.clarificationAgent;
        break;
      default:
        throw new Error(`Unknown agent identifier: ${agentId}`);
    }

    if (!definition) {
      throw new Error(`Agent definition not found for: ${agentId}`);
    }

    return definition;
  }

  /**
   * Gets all agent definitions.
   *
   * @returns Promise resolving to map of agent definitions.
   */
  public async getAllAgentDefinitions(): Promise<
    Record<string, AgentDefinition>
  > {
    const config = await this.ensureConfigLoaded();

    return {
      orchestrator: config.agents.definitions.orchestrator,
      "relevant-data-manager": config.agents.definitions.relevantDataManager,
      "database-agent": config.agents.definitions.databaseAgent,
      "data-agent": config.agents.definitions.dataAgent,
      "clarification-agent": config.agents.definitions.clarificationAgent,
    };
  }

  /**
   * Gets user-facing information for an agent.
   *
   * @param agentId - The agent identifier.
   * @returns User-facing metadata or null if not available.
   */
  public async getUserFacingInfo(
    agentId: AgentIdentifier
  ): Promise<AgentDefinition["userFacing"] | null> {
    const definition = await this.getAgentDefinition(agentId);
    return definition.userFacing || null;
  }

  /**
   * Gets application-facing information for an agent.
   *
   * @param agentId - The agent identifier.
   * @returns Application-facing metadata or null if not available.
   */
  public async getApplicationFacingInfo(
    agentId: AgentIdentifier
  ): Promise<AgentDefinition["applicationFacing"] | null> {
    const definition = await this.getAgentDefinition(agentId);
    return definition.applicationFacing || null;
  }

  /**
   * Gets the display name for an agent.
   *
   * @param agentId - The agent identifier.
   * @returns The display name.
   */
  public async getAgentDisplayName(agentId: AgentIdentifier): Promise<string> {
    const definition = await this.getAgentDefinition(agentId);
    return definition.displayName;
  }

  /**
   * Gets the capabilities for an agent.
   *
   * @param agentId - The agent identifier.
   * @returns Array of capability strings.
   */
  public async getAgentCapabilities(
    agentId: AgentIdentifier
  ): Promise<string[]> {
    const definition = await this.getAgentDefinition(agentId);
    return definition.capabilities;
  }

  /**
   * Checks if an agent has a specific capability.
   *
   * @param agentId - The agent identifier.
   * @param capability - The capability to check.
   * @returns Promise resolving to true if agent has the capability.
   */
  public async hasCapability(
    agentId: AgentIdentifier,
    capability: string
  ): Promise<boolean> {
    const capabilities = await this.getAgentCapabilities(agentId);
    return capabilities.includes(capability);
  }

  /**
   * Gets agents that have a specific capability.
   *
   * @param capability - The capability to search for.
   * @returns Promise resolving to array of agent identifiers.
   */
  public async getAgentsWithCapability(
    capability: string
  ): Promise<AgentIdentifier[]> {
    const allDefinitions = await this.getAllAgentDefinitions();
    const agents: AgentIdentifier[] = [];

    for (const [agentId, definition] of Object.entries(allDefinitions) as Array<
      [AgentIdentifier, AgentDefinition]
    >) {
      if (definition.capabilities.includes(capability)) {
        agents.push(agentId);
      }
    }

    return agents;
  }

  /**
   * Gets friendly description for user interfaces.
   *
   * @param agentId - The agent identifier.
   * @returns User-friendly description or fallback to technical description.
   */
  public async getFriendlyDescription(
    agentId: AgentIdentifier
  ): Promise<string> {
    const definition = await this.getAgentDefinition(agentId);
    return definition.userFacing?.friendlyDescription || definition.description;
  }

  /**
   * Gets example queries for an agent.
   *
   * @param agentId - The agent identifier.
   * @returns Array of example query strings.
   */
  public async getExampleQueries(agentId: AgentIdentifier): Promise<string[]> {
    const definition = await this.getAgentDefinition(agentId);
    return definition.userFacing?.exampleQueries || [];
  }

  /**
   * Gets monitoring configuration for an agent.
   *
   * @param agentId - The agent identifier.
   * @returns Monitoring configuration or null if not available.
   */
  public async getMonitoringConfig(
    agentId: AgentIdentifier
  ): Promise<
    NonNullable<AgentDefinition["applicationFacing"]>["monitoring"] | null
  > {
    const appFacing = await this.getApplicationFacingInfo(agentId);
    return appFacing?.monitoring || null;
  }

  /**
   * Gets performance characteristics for an agent.
   *
   * @param agentId - The agent identifier.
   * @returns Performance configuration or null if not available.
   */
  public async getPerformanceConfig(
    agentId: AgentIdentifier
  ): Promise<
    NonNullable<AgentDefinition["applicationFacing"]>["performance"] | null
  > {
    const appFacing = await this.getApplicationFacingInfo(agentId);
    return appFacing?.performance || null;
  }

  /**
   * Gets error handling configuration for an agent.
   *
   * @param agentId - The agent identifier.
   * @returns Error handling configuration or null if not available.
   */
  public async getErrorHandlingConfig(
    agentId: AgentIdentifier
  ): Promise<
    NonNullable<AgentDefinition["applicationFacing"]>["errorHandling"] | null
  > {
    const appFacing = await this.getApplicationFacingInfo(agentId);
    return appFacing?.errorHandling || null;
  }

  /**
   * Reloads the configuration from disk.
   */
  public async reloadConfiguration(): Promise<void> {
    this.config = null;
    await this.ensureConfigLoaded();
  }
}

/**
 * Gets the global agent configuration service instance.
 *
 * @returns The agent configuration service.
 */
export function getAgentConfigurationService(): AgentConfigurationService {
  return AgentConfigurationService.getInstance();
}
