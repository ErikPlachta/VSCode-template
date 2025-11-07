/**
 * @fileoverview Configuration loader and validator for application settings.
 */

import fs from "node:fs";
import path from "node:path";
import type {
  ApplicationConfig,
  EnvironmentConfig,
} from "../types/applicationConfig";

/**
 * Default configuration values for fallback scenarios.
 */
const DEFAULT_CONFIG: Partial<ApplicationConfig> = {
  application: {
    name: "VSCode MCP Extension",
    version: "1.0.0",
    description: "MCP-enabled VS Code extension",
    environments: {
      development: {
        debug: true,
        logLevel: "verbose",
        hotReload: true,
        mockData: true,
      },
      staging: {
        debug: false,
        logLevel: "info",
        hotReload: false,
        mockData: false,
      },
      production: {
        debug: false,
        logLevel: "warn",
        hotReload: false,
        mockData: false,
      },
    },
  },
  mcp: {
    server: {
      protocol: "http",
      defaultPort: 39200,
      timeout: 30000,
      retries: 3,
      embedded: {
        enabled: true,
        autoStart: true,
      },
    },
    client: {
      maxConcurrentRequests: 10,
      requestTimeout: 15000,
      retryDelay: 1000,
    },
  },
};

/**
 * Configuration loader class for managing application settings.
 */
export class ConfigurationLoader {
  private config: ApplicationConfig | null = null;
  private configPath: string;

  /**
   * Creates a new configuration loader instance.
   *
   * @param {string} configPath - Path to the configuration file.
   */
  constructor(configPath: string = "bin/agent.config.json") {
    this.configPath = path.resolve(configPath);
  }

  /**
   * Loads and validates the application configuration.
   *
   * @returns {Promise<ApplicationConfig>} Promise resolving to the loaded configuration.
   * @throws {Error} When configuration file cannot be loaded or is invalid.
   */
  async loadConfig(): Promise<ApplicationConfig> {
    if (this.config) {
      return this.config;
    }

    try {
      const configContent = await fs.promises.readFile(
        this.configPath,
        "utf-8"
      );
      const parsedConfig = JSON.parse(configContent) as ApplicationConfig;

      // Validate and merge with defaults
      this.config = this.mergeWithDefaults(parsedConfig);

      return this.config;
    } catch (error) {
      throw new Error(
        `Failed to load configuration from ${this.configPath}: ${error}`
      );
    }
  }

  /**
   * Gets configuration for the current environment.
   *
   * @param {string} environment - Environment name (development, staging, production).
   * @returns {Promise<EnvironmentConfig>} Promise resolving to environment-specific configuration.
   * @throws {Error} When environment is not found or configuration cannot be loaded.
   */
  async getEnvironmentConfig(
    environment: string = "development"
  ): Promise<EnvironmentConfig> {
    const config = await this.loadConfig();

    const envConfig =
      config.application.environments[
        environment as keyof typeof config.application.environments
      ];
    if (!envConfig) {
      throw new Error(
        `Environment '${environment}' not found in configuration`
      );
    }

    return envConfig;
  }

  /**
   * Gets agent-specific configuration.
   *
   * @param {string} agentName - Name of the agent.
   * @returns {Promise<any>} Promise resolving to agent configuration.
   * @throws {Error} When agent configuration cannot be found.
   */
  async getAgentConfig(agentName: string): Promise<any> {
    const config = await this.loadConfig();

    const agentConfig =
      config.agents.profiles[agentName as keyof typeof config.agents.profiles];
    if (!agentConfig) {
      throw new Error(`Agent '${agentName}' configuration not found`);
    }

    return {
      ...config.agents.global,
      ...agentConfig,
    };
  }

  /**
   * Reloads configuration from disk.
   *
   * @returns {Promise<ApplicationConfig>} Promise resolving to reloaded configuration.
   */
  async reloadConfig(): Promise<ApplicationConfig> {
    this.config = null;
    return this.loadConfig();
  }

  /**
   * Merges loaded configuration with default values.
   *
   * @param {ApplicationConfig} loadedConfig - Configuration loaded from file.
   * @returns {ApplicationConfig} Merged configuration with defaults applied.
   */
  private mergeWithDefaults(
    loadedConfig: ApplicationConfig
  ): ApplicationConfig {
    // Deep merge logic - for now, we'll use a simple approach
    return {
      ...DEFAULT_CONFIG,
      ...loadedConfig,
      application: {
        ...DEFAULT_CONFIG.application,
        ...loadedConfig.application,
      },
      mcp: {
        ...DEFAULT_CONFIG.mcp,
        ...loadedConfig.mcp,
      },
    } as ApplicationConfig;
  }

  /**
   * Validates configuration structure and required fields.
   *
   * @param {ApplicationConfig} config - Configuration to validate.
   * @returns {boolean} True if configuration is valid.
   * @throws {Error} When configuration is invalid.
   */
  private validateConfig(config: ApplicationConfig): boolean {
    // Basic validation - could be enhanced with JSON schema validation
    if (!config.application?.name) {
      throw new Error("Application name is required in configuration");
    }

    if (!config.mcp?.server?.defaultPort) {
      throw new Error("MCP server default port is required in configuration");
    }

    return true;
  }
}

/**
 * Global configuration instance.
 */
let globalConfig: ConfigurationLoader | null = null;

/**
 * Gets the global configuration loader instance.
 *
 * @param {string} configPath - Optional path to configuration file.
 * @returns {ConfigurationLoader} Configuration loader instance.
 */
export function getConfigurationLoader(
  configPath?: string
): ConfigurationLoader {
  if (!globalConfig) {
    globalConfig = new ConfigurationLoader(configPath);
  }
  return globalConfig;
}

/**
 * Convenience function to load application configuration.
 *
 * @param {string} configPath - Optional path to configuration file.
 * @returns {Promise<ApplicationConfig>} Promise resolving to application configuration.
 */
export async function loadApplicationConfig(
  configPath?: string
): Promise<ApplicationConfig> {
  const loader = getConfigurationLoader(configPath);
  return loader.loadConfig();
}
