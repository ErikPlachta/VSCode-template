/**
 * @file Orchestrator configuration management using TypeScript-based config
 */

import {
  BaseAgentConfig,
  AgentConfigDefinition,
  OrchestrationConfig,
} from "../../types/agentConfig";
import {
  validateAgentConfig,
  generateValidationReport,
} from "../../types/configValidation";
import { orchestratorConfig } from "./agent.config";

/**
 * Orchestrator-specific configuration class
 */
export class OrchestratorConfig extends BaseAgentConfig {
  private orchestrationConfig: OrchestrationConfig;

  constructor(config?: AgentConfigDefinition) {
    // Use the TypeScript config as default, allow override for testing
    const configToUse = config || orchestratorConfig;

    // Validate configuration before using it
    const validationResult = validateAgentConfig(configToUse);
    if (!validationResult.isValid) {
      const report = generateValidationReport(validationResult);
      throw new Error(`Invalid orchestrator configuration:\n${report}`);
    }

    super(configToUse);
    this.orchestrationConfig = this.config.orchestration || {};
  }

  /**
   * Get supported intents
   */
  public getIntents(): string[] {
    return Object.keys(this.orchestrationConfig.intents || {});
  }

  /**
   * Get intent configuration by name
   */
  public getIntentConfig(intent: string) {
    return this.orchestrationConfig.intents?.[intent];
  }

  /**
   * Get target agent for an intent
   */
  public getTargetAgent(intent: string): string | undefined {
    return this.orchestrationConfig.intents?.[intent]?.targetAgent;
  }

  /**
   * Get stop words for text processing
   */
  public getStopWords(): Set<string> {
    const stopWords = this.orchestrationConfig.textProcessing?.stopWords || [];
    return new Set(stopWords);
  }

  /**
   * Get scoring weights
   */
  public getScoringWeights() {
    return (
      this.orchestrationConfig.textProcessing?.scoringWeights || {
        signalMatch: 2,
        focusMatch: 3,
        promptStarterMatch: 1,
      }
    );
  }

  /**
   * Get minimum keyword length
   */
  public getMinimumKeywordLength(): number {
    return this.orchestrationConfig.textProcessing?.minimumKeywordLength || 3;
  }

  /**
   * Get escalation configuration
   */
  public getEscalationConfig() {
    return (
      this.orchestrationConfig.escalation || {
        conditions: [],
        fallbackAgent: "clarification-agent",
        maxRetries: 2,
      }
    );
  }

  /**
   * Get intent to agent mapping
   */
  public getIntentAgentMap(): Record<string, string> {
    const intents = this.orchestrationConfig.intents || {};
    const mapping: Record<string, string> = {};

    for (const [intent, config] of Object.entries(intents)) {
      mapping[intent] = config.targetAgent;
    }

    return mapping;
  }

  /**
   * Get vague phrases that should trigger clarification
   */
  public getVaguePhrases(): string[] {
    return (
      this.orchestrationConfig.escalation?.vaguePhrases || [
        "list records",
        "show records",
        "get records",
        "find records",
        "show data",
        "get data",
        "list data",
      ]
    );
  }

  /**
   * Get fallback agent name
   */
  public getFallbackAgent(): string {
    return (
      this.orchestrationConfig.escalation?.fallbackAgent ||
      "clarification-agent"
    );
  }

  /**
   * Load configuration from TypeScript config (preferred) or JSON fallback
   */
  public static async loadFromFile(
    configPath?: string
  ): Promise<OrchestratorConfig> {
    // TypeScript config is the primary approach
    if (!configPath) {
      return new OrchestratorConfig(orchestratorConfig);
    }

    // For backward compatibility, support JSON configs
    try {
      const fs = await import("fs");
      const path = await import("path");
      const configData = fs.readFileSync(configPath, "utf-8");
      const config = JSON.parse(configData);
      return new OrchestratorConfig(config);
    } catch (error) {
      console.warn(
        `Failed to load config from ${configPath}, using default:`,
        error
      );
      return new OrchestratorConfig(orchestratorConfig);
    }
  }

  /**
   * Create orchestrator configuration with defaults (uses TypeScript config)
   */
  public static createDefault(): OrchestratorConfig {
    return new OrchestratorConfig(orchestratorConfig);
  }
}
