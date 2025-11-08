/**
 * @packageDocumentation Configuration loader and validator for application settings.
 */

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
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
   * @param {string} configPath - configPath parameter.
   * @returns {unknown} - TODO: describe return value.
   */
constructor(configPath: string = "src/mcp.config.json") {
    this.configPath = path.resolve(configPath);
  }

    /**
 * Loads and validates the application configuration.
 *
 * @returns {Promise<ApplicationConfig>} - TODO: describe return value.
 * @throws {Error} - May throw an error.
 */
async loadConfig(): Promise<ApplicationConfig> {
    if (this.config) {
      return this.config;
    }

    try {
      // 1) Prefer compiled TS application config (out/src/config/application.config.js)
      const tsConfig = await this.tryLoadTsConfig();
      if (tsConfig) {
        this.config = this.mergeWithDefaults(tsConfig);
        return this.config;
      }

      // 2) Fallback to legacy JSON with deprecation warning
      // eslint-disable-next-line no-console
      console.warn(
        `[config] Falling back to legacy JSON at ${this.configPath}. This path is deprecated; migrate to src/config/application.config.ts`
      );
      const configContent = await fs.promises.readFile(
        this.configPath,
        "utf-8"
      );
      const parsedConfig = JSON.parse(configContent) as ApplicationConfig;

      this.config = this.mergeWithDefaults(parsedConfig);
      return this.config;
    } catch (error) {
      throw new Error(
        `Failed to load configuration from ${this.configPath}: ${error}`
      );
    }
  }

    /**
 * Attempts to load the compiled JS for TS application config.
 *
 * @returns {Promise<ApplicationConfig | null>} - TODO: describe return value.
 */
private async tryLoadTsConfig(): Promise<ApplicationConfig | null> {
    try {
      const compiledPath = path.resolve(
        __dirname,
        "../config/application.config.js"
      );
      const url = pathToFileURL(compiledPath).href;
      const mod = await import(url);
      const cfg: unknown = mod?.default ?? mod?.applicationConfig ?? null;
      if (cfg && typeof cfg === "object") {
        // Minimal runtime shape check
        const app = cfg as ApplicationConfig;
        if (app.application && app.mcp) {
          return app;
        }
      }
      return null;
    } catch {
      return null;
    }
  }

    /**
 * Gets configuration for the current environment.
 *
 * @param {string} environment - environment parameter.
 * @returns {Promise<EnvironmentConfig>} - TODO: describe return value.
 * @throws {Error} - May throw an error.
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
 * @param {string} agentName - agentName parameter.
 * @returns {Promise<any>} - TODO: describe return value.
 * @throws {Error} - May throw an error.
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
 * @returns {Promise<ApplicationConfig>} - TODO: describe return value.
 */
async reloadConfig(): Promise<ApplicationConfig> {
    this.config = null;
    return this.loadConfig();
  }

    /**
 * Merges loaded configuration with default values.
 *
 * @param {ApplicationConfig} loadedConfig - loadedConfig parameter.
 * @returns {ApplicationConfig} - TODO: describe return value.
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
 * @param {ApplicationConfig} config - config parameter.
 * @returns {boolean} - TODO: describe return value.
 * @throws {Error} - May throw an error.
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
 * @param {string} configPath - configPath parameter.
 * @returns {ConfigurationLoader} - TODO: describe return value.
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
 * @param {string} configPath - configPath parameter.
 * @returns {Promise<ApplicationConfig>} - TODO: describe return value.
 */
export async function loadApplicationConfig(
  configPath?: string
): Promise<ApplicationConfig> {
  const loader = getConfigurationLoader(configPath);
  return loader.loadConfig();
}
