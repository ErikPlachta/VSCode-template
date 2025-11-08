/**
 * @packageDocumentation Orchestrator configuration management using TypeScript-based config
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

  /**
 * constructor function.
 *
 * @param {AgentConfigDefinition} config - config parameter.
 * @returns {unknown} - TODO: describe return value.
 * @throws {Error} - May throw an error.
 */
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
 *
 * @returns {string[]} - TODO: describe return value.
 */
public getIntents(): string[] {
    return Object.keys(this.orchestrationConfig.intents || {});
  }

    /**
 * Get intent configuration by name
 *
 * @param {string} intent - intent parameter.
 * @returns {unknown} - TODO: describe return value.
 */
public getIntentConfig(intent: string) {
    return this.orchestrationConfig.intents?.[intent];
  }

    /**
 * Get target agent for an intent
 *
 * @param {string} intent - intent parameter.
 * @returns {string | undefined} - TODO: describe return value.
 */
public getTargetAgent(intent: string): string | undefined {
    return this.orchestrationConfig.intents?.[intent]?.targetAgent;
  }

    /**
 * Get stop words for text processing
 *
 * @returns {Set<string>} - TODO: describe return value.
 */
public getStopWords(): Set<string> {
    const stopWords = this.orchestrationConfig.textProcessing?.stopWords || [];
    return new Set(stopWords);
  }

    /**
 * Get scoring weights
 *
 * @returns {unknown} - TODO: describe return value.
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
 *
 * @returns {number} - TODO: describe return value.
 */
public getMinimumKeywordLength(): number {
    return this.orchestrationConfig.textProcessing?.minimumKeywordLength || 3;
  }

    /**
 * Get escalation configuration
 *
 * @returns {unknown} - TODO: describe return value.
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
 *
 * @returns {Record<string, string>} - TODO: describe return value.
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
 *
 * @returns {string[]} - TODO: describe return value.
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
 *
 * @returns {string} - TODO: describe return value.
 */
public getFallbackAgent(): string {
    return (
      this.orchestrationConfig.escalation?.fallbackAgent ||
      "clarification-agent"
    );
  }

    /**
 * Get configurable user-facing messages
 *
 * @returns {unknown} - TODO: describe return value.
 */
public getMessages() {
    return (
      this.orchestrationConfig.messages || {
        noIntentDetected: "No clear intent detected from the question",
        needMoreContext:
          "I need more context to help you properly. Could you provide more details about what you're looking for?",
        questionTooVague:
          "Your question is quite general. Could you provide more specific details about what you're looking for?",
        missingSignalsHint: ["specific context", "topic details"],
        errorOccurred: "An error occurred while processing your request",
        summaries: {
          metadata: "Providing metadata information about {topic}",
          records: "Searching for {topic} records matching your criteria",
          insight: "Analyzing {topic} data to generate insights",
          clarification: "I need more information to help you properly",
          defaultTopic: "the requested data",
        },
        guidance: {
          metadata: "Retrieving category schemas and structure information",
          recordsConnections: "Preparing to search across related categories",
          recordsFiltering: "Filtering records based on your criteria",
          insightPlan: ["Analyze data patterns", "Generate insights"],
          insightOverview: "Creating data exploration strategy",
          insightRecommendations: "Developing analytical recommendations",
          clarificationPrompt:
            "Please clarify what specific information you're looking for",
        },
      }
    );
  }

    /**
 * Load configuration from TypeScript config (preferred) or JSON fallback
 *
 * @param {string} configPath - configPath parameter.
 * @returns {Promise<OrchestratorConfig>} - TODO: describe return value.
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
 *
 * @returns {OrchestratorConfig} - TODO: describe return value.
 */
public static createDefault(): OrchestratorConfig {
    return new OrchestratorConfig(orchestratorConfig);
  }
}
