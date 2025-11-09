/**
 * @packageDocumentation Configuration-driven orchestrator implementation
 */

import {
  BaseAgentConfig,
  type AgentConfigDefinition,
  type OrchestrationConfig,
  type IntentConfig,
} from "@internal-types/agentConfig";
import {
  validateAgentConfig,
  generateValidationReport,
} from "@internal-types/configValidation";
import { orchestratorConfig } from "@agent/orchestrator/agent.config";

/** List of supported orchestration intents (from configuration). */
export type OrchestratorIntent = string;

/**
 * Classification metadata returned before executing a task.
 *
 */
export interface OrchestratorClassification {
  intent: OrchestratorIntent;
  rationale: string;
  escalationPrompt?: string;
  matchedSignals?: string[];
  missingSignals?: string[];
}

/**
 * Input supplied when asking the orchestrator to fulfil a task.
 *
 */
export interface OrchestratorInput {
  topic?: string;
  question: string;
  criteria?: Record<string, unknown>;
}

/**
 * Result of orchestrating a question across the available agents.
 *
 */
export interface OrchestratorResponse {
  intent: OrchestratorIntent;
  agent: string;
  summary: string;
  rationale: string;
  payload: unknown;
  markdown: string;
}

/**
 * Configuration-driven orchestrator that routes questions to appropriate agents
 */
export class Orchestrator {
  private config: OrchestratorConfig;
  private stopWords: Set<string>;
  private intentAgentMap: Record<string, string>;
  private scoringWeights: {
    signalMatch: number;
    focusMatch: number;
    promptStarterMatch: number;
  };
  private minimumKeywordLength: number;
  private vaguePhrases: string[];
  private messages: Required<
    NonNullable<ReturnType<OrchestratorConfig["getMessages"]>>
  >;

  /**
   * Create an orchestrator using the provided configuration (or defaults).
   *
   * @param {OrchestratorConfig} [config] - Optional pre-loaded configuration.
   */
  constructor(config?: OrchestratorConfig) {
    this.config = config || OrchestratorConfig.createDefault();
    this.stopWords = this.config.getStopWords();
    this.intentAgentMap = this.config.getIntentAgentMap();
    this.scoringWeights = this.config.getScoringWeights();
    this.minimumKeywordLength = this.config.getMinimumKeywordLength();
    this.vaguePhrases = this.config.getVaguePhrases();
    // The configuration provides defaults for all message properties; cast to required shape for convenience.
    this.messages = this.config.getMessages() as Required<
      NonNullable<ReturnType<OrchestratorConfig["getMessages"]>>
    >;
  }

  /**
   * Load configuration from disk (TypeScript or JSON fallback) and create an orchestrator.
   *
   * @param {string} [configPath] - Optional path to a JSON config; when omitted uses TS defaults.
   * @returns {Promise<Orchestrator>} Orchestrator instance.
   */
  public static async createFromConfig(
    configPath?: string
  ): Promise<Orchestrator> {
    try {
      const config = await OrchestratorConfig.loadFromFile(configPath);
      return new Orchestrator(config);
    } catch (error) {
      console.warn(
        `Failed to load orchestrator config, using defaults: ${error}`
      );
      return new Orchestrator();
    }
  }

  /**
   * Get the underlying agent configuration structure.
   *
   * @returns {Record<string, unknown>} Raw public configuration object.
   */
  public getConfig(): Record<string, unknown> {
    return this.config.getConfig();
  }

  /**
   * List all supported intents configured for routing.
   *
   * @returns {OrchestratorIntent[]} Array of configured intent identifiers.
   */
  public getSupportedIntents(): OrchestratorIntent[] {
    return this.config.getIntents();
  }

  /**
   * Extract keywords from text applying stop words and minimum length.
   *
   * @param {string} text - Source question text.
   * @returns {string[]} Filtered keyword tokens.
   */
  private extractKeywords(text: string): string[] {
    const pattern = new RegExp(
      `\\b[a-z0-9]{${this.minimumKeywordLength},}\\b`,
      "g"
    );
    const matches = text.toLowerCase().match(pattern) ?? [];
    return matches.filter((token) => !this.stopWords.has(token));
  }

  /**
   * Determine whether the input question lacks sufficient context.
   *
   * @param {string} question - User's raw question.
   * @param {string} _intent - Candidate matched intent (unused, retained for future heuristics).
   * @returns {boolean} True if clarification should be requested.
   */
  private isQuestionTooVague(question: string, _intent: string): boolean {
    const questionLower = question.toLowerCase().trim();

    // Use configured vague phrases instead of hard-coded array
    return this.vaguePhrases.some(
      (phrase) =>
        questionLower === phrase ||
        questionLower.startsWith(phrase + " ") ||
        questionLower.endsWith(" " + phrase)
    );
  }
  /**
   * Classify intent for a question (legacy string or new structured input).
   *
   * @param {string | OrchestratorInput} questionOrInput - Raw question text or structured input.
   * @param {{ topic?: string }} [context] - Legacy context object providing topic.
   * @param {string} [context.topic] - Optional topic string used for classification context.
   * @returns {OrchestratorClassification} Classification result (intent & rationale).
   */
  classify(
    questionOrInput: string | OrchestratorInput,
    context?: { topic?: string }
  ): OrchestratorClassification {
    // Handle both legacy and new calling patterns
    let input: OrchestratorInput;
    if (typeof questionOrInput === "string") {
      // Legacy signature: classify(question, context)
      input = {
        question: questionOrInput,
        topic: context?.topic,
      };
    } else {
      // New signature: classify(input)
      input = questionOrInput;
    }

    const questionTokens = new Set(this.extractKeywords(input.question));

    // Score each intent based on configuration
    const intentScores: Array<{
      intent: string;
      score: number;
      matches: string[];
      agent: string;
    }> = [];

    for (const intent of this.config.getIntents()) {
      const intentConfig = this.config.getIntentConfig(intent);
      if (!intentConfig) continue;

      // Score based on intent signals
      const signalMatches = intentConfig.signals
        ? intentConfig.signals.filter((signal) => {
            // Check if the signal keyword appears in the question text
            // Use more flexible matching to handle plurals, etc.
            const signalLower = signal.toLowerCase();
            const questionLower = input.question.toLowerCase();
            return (
              questionLower.includes(signalLower) ||
              questionTokens.has(signalLower) ||
              // Handle basic plural/singular matching
              questionTokens.has(signalLower + "s") ||
              questionTokens.has(signalLower.replace(/s$/, ""))
            );
          })
        : [];

      const signalScore =
        signalMatches.length * this.scoringWeights.signalMatch;

      if (signalScore > 0) {
        intentScores.push({
          intent,
          score: signalScore,
          matches: signalMatches,
          agent: intentConfig.targetAgent,
        });
      }
    }

    // Sort by score and select best match
    intentScores.sort((a, b) => b.score - a.score);

    const bestMatch = intentScores[0];

    if (!bestMatch || bestMatch.score === 0) {
      return {
        intent: "clarification",
        rationale: this.messages.noIntentDetected,
        escalationPrompt: this.messages.needMoreContext,
        matchedSignals: [],
        missingSignals: [],
      };
    }

    // Check if the question is too vague even if it matches an intent
    if (this.isQuestionTooVague(input.question, bestMatch.intent)) {
      return {
        intent: "clarification",
        rationale: `Question matches ${bestMatch.intent} intent but lacks sufficient context`,
        escalationPrompt: this.messages.questionTooVague,
        matchedSignals: bestMatch.matches,
        missingSignals: this.messages.missingSignalsHint,
      };
    }

    return {
      intent: bestMatch.intent,
      rationale: `Classified as ${bestMatch.intent} based on ${bestMatch.matches.length} signal matches`,
      matchedSignals: bestMatch.matches,
      missingSignals: [],
    };
  }

  /**
   * Route an input using configured intent/agent mappings.
   *
   * @param {OrchestratorInput} input - Structured user request.
   * @returns {Promise<OrchestratorResponse>} Resolved routing response.
   */
  async route(input: OrchestratorInput): Promise<OrchestratorResponse> {
    const classification = this.classify(input);

    // Create more contextual summary and payload
    const agent =
      this.intentAgentMap[classification.intent] ||
      this.config.getFallbackAgent();
    const summary = this.generateSummary(classification, input);
    const payload = this.generatePayload(classification, input);

    return {
      intent: classification.intent,
      agent,
      summary,
      rationale: classification.rationale,
      payload,
      markdown: `## ${classification.intent}\n\n${
        classification.rationale
      }\n\nMatched signals: ${
        classification.matchedSignals?.join(", ") || "none"
      }`,
    };
  }

  /**
   * Create a concise summary describing the routing decision.
   *
   * @param {OrchestratorClassification} classification - Classification result.
   * @param {OrchestratorInput} input - Original user input.
   * @returns {string} Human readable summary.
   */
  private generateSummary(
    classification: OrchestratorClassification,
    input: OrchestratorInput
  ): string {
    const rawSummaries = (this.messages.summaries ?? {}) as Record<
      string,
      unknown
    >;
    const defaultTopic =
      (rawSummaries as { defaultTopic?: string }).defaultTopic ??
      "the requested data";
    const topic = input.topic ?? defaultTopic;
    const metadata = (rawSummaries as { metadata?: string }).metadata ?? "";
    const records = (rawSummaries as { records?: string }).records ?? "";
    const insight = (rawSummaries as { insight?: string }).insight ?? "";
    const clarification =
      (rawSummaries as { clarification?: string }).clarification ?? "";

    switch (classification.intent) {
      case "metadata":
        return metadata.replace("{topic}", topic);
      case "records":
        return records.replace("{topic}", topic);
      case "insight":
        return insight.replace("{topic}", topic);
      case "clarification":
        return clarification;
      default:
        return `Routed to ${classification.intent}`;
    }
  }

  /**
   * Build structured payload tailored to the classified intent.
   *
   * @param {OrchestratorClassification} classification - Classification result.
   * @param {OrchestratorInput} input - Original user input.
   * @returns {unknown} Intent-specific payload object.
   */
  private generatePayload(
    classification: OrchestratorClassification,
    input: OrchestratorInput
  ): unknown {
    const basePayload = { classification, input };

    switch (classification.intent) {
      case "metadata":
        return {
          ...basePayload,
          guidance: this.messages.guidance.metadata,
          matchedSignals: classification.matchedSignals,
        };
      case "records":
        return {
          ...basePayload,
          connections: this.messages.guidance.recordsConnections,
          guidance: this.messages.guidance.recordsFiltering,
        };
      case "insight":
        return {
          ...basePayload,
          plan: { steps: this.messages.guidance.insightPlan },
          overview: this.messages.guidance.insightOverview,
          guidance: this.messages.guidance.insightRecommendations,
        };
      case "clarification":
        return {
          ...basePayload,
          prompt: this.messages.guidance.clarificationPrompt,
        };
      default:
        return basePayload;
    }
  }

  /**
   * High-level entry point wrapping classification + routing + formatting.
   *
   * @param {OrchestratorInput} input - Structured user request.
   * @returns {Promise<OrchestratorResponse>} Final enriched response.
   */
  async handle(input: OrchestratorInput): Promise<OrchestratorResponse> {
    try {
      // Delegate to the existing route method
      const response = await this.route(input);

      // Enhance the response with additional context for user-facing output
      return {
        ...response,
        markdown: this.formatResponseForUser(response, input),
      };
    } catch (error) {
      // Fallback error handling
      return {
        intent: "clarification",
        agent: this.config.getFallbackAgent(),
        summary: this.messages.errorOccurred,
        rationale: error instanceof Error ? error.message : "Unknown error",
        payload: { error, input },
        markdown: `## Error\n\nI encountered an issue while processing your request: ${
          error instanceof Error ? error.message : "Unknown error"
        }\n\nPlease try rephrasing your question or ask for help.`,
      };
    }
  }

  /**
   * Convert internal routing response into markdown UX output.
   *
   * @param {OrchestratorResponse} response - Routing response.
   * @param {OrchestratorInput} _input - Original user input (unused currently; reserved for future personalization).
   * @returns {string} Markdown string for chat rendering.
   */
  private formatResponseForUser(
    response: OrchestratorResponse,
    _input: OrchestratorInput
  ): string {
    const sections: string[] = [];

    // Add header with intent classification
    sections.push(
      `## ${
        response.intent.charAt(0).toUpperCase() + response.intent.slice(1)
      } Request`
    );

    // Add the main response content
    if (response.summary) {
      sections.push(`${response.summary}`);
    }

    // Add routing information if helpful
    if (response.agent !== this.config.getFallbackAgent()) {
      sections.push(`*Routing to: ${response.agent}*`);
    }

    // Add matched signals for transparency (when available)
    const payload = response.payload as unknown;
    const hasClassification =
      typeof payload === "object" &&
      payload !== null &&
      "classification" in (payload as Record<string, unknown>);
    if (
      hasClassification &&
      ((payload as { classification?: OrchestratorClassification })
        .classification?.matchedSignals?.length || 0) > 0
    ) {
      const matched = (
        payload as { classification?: OrchestratorClassification }
      ).classification?.matchedSignals as string[];
      sections.push(`**Matched keywords:** ${matched.join(", ")}`);
    }

    return sections.join("\n\n");
  }

  /**
   * Snapshot current high-level orchestrator settings for diagnostics.
   *
   * @returns {Record<string, unknown>} Diagnostic summary object.
   */
  public getCurrentConfig(): Record<string, unknown> {
    return {
      supportedIntents: this.getSupportedIntents(),
      intentAgentMap: this.intentAgentMap,
      stopWordsCount: this.stopWords.size,
      scoringWeights: this.scoringWeights,
    };
  }
}

/**
 * Orchestrator-specific configuration class (merged from config.ts)
 */
export class OrchestratorConfig extends BaseAgentConfig {
  private orchestrationConfig: OrchestrationConfig;

  /**
   * Create a config wrapper using default TS config or overrides (for tests)
   *
   * @param {AgentConfigDefinition} [config] - Optional override configuration.
   */
  constructor(config?: AgentConfigDefinition) {
    const configToUse = config || orchestratorConfig;
    const validationResult = validateAgentConfig(configToUse);
    if (!validationResult.isValid) {
      const report = generateValidationReport(validationResult);
      throw new Error(`Invalid orchestrator configuration:\n${report}`);
    }

    super(configToUse);
    this.orchestrationConfig = this.config.orchestration || {};
  }

  /**
   * List all supported intent names defined in orchestration config.
   *
   * @returns {string[]} - Array of intent identifiers.
   */
  public getIntents(): string[] {
    return Object.keys(this.orchestrationConfig.intents || {});
  }

  /**
   * Get full intent configuration block by name.
   *
   * @param {string} intent - Intent identifier to look up.
   * @returns {IntentConfig | undefined} - Intent configuration or undefined if missing.
   */
  public getIntentConfig(intent: string): IntentConfig | undefined {
    return this.orchestrationConfig.intents?.[intent];
  }

  /**
   * Resolve which agent should handle a given intent.
   *
   * @param {string} intent - Intent identifier.
   * @returns {string | undefined} - Target agent name or undefined when not configured.
   */
  public getTargetAgent(intent: string): string | undefined {
    return this.orchestrationConfig.intents?.[intent]?.targetAgent;
  }

  /**
   * Access stop words used for token filtering in keyword extraction.
   *
   * @returns {Set<string>} - Set of lowercase stop words.
   */
  public getStopWords(): Set<string> {
    const stopWords = this.orchestrationConfig.textProcessing?.stopWords || [];
    return new Set(stopWords);
  }

  /**
   * Return weighting factors used when computing intent relevance scores.
   *
   * @returns {{signalMatch:number, focusMatch:number, promptStarterMatch:number}} - Weight configuration.
   * @throws {Error} When orchestrator config lacks textProcessing.scoringWeights.
   */
  public getScoringWeights(): {
    signalMatch: number;
    focusMatch: number;
    promptStarterMatch: number;
  } {
    const weights = this.orchestrationConfig.textProcessing?.scoringWeights;
    if (!weights) {
      throw new Error(
        "Orchestrator config missing textProcessing.scoringWeights"
      );
    }
    return weights;
  }

  /**
   * Minimum keyword length threshold for token consideration.
   *
   * @returns {number} - Minimum length; defaults to 3.
   * @throws {Error} When orchestrator config lacks textProcessing.minimumKeywordLength.
   */
  public getMinimumKeywordLength(): number {
    const len = this.orchestrationConfig.textProcessing?.minimumKeywordLength;
    if (typeof len !== "number") {
      throw new Error(
        "Orchestrator config missing textProcessing.minimumKeywordLength"
      );
    }
    return len;
  }

  /**
   * Full escalation configuration controlling vague query handling and fallbacks.
   *
   * @returns {NonNullable<OrchestrationConfig["escalation"]>} - Escalation settings object.
   * @throws {Error} When orchestrator config lacks an escalation block.
   */
  public getEscalationConfig(): NonNullable<OrchestrationConfig["escalation"]> {
    const esc = this.orchestrationConfig.escalation;
    if (!esc) {
      throw new Error("Orchestrator config missing escalation block");
    }
    return esc as NonNullable<OrchestrationConfig["escalation"]>;
  }

  /**
   * Build quick lookup table of intent to target agent.
   *
   * @returns {Record<string,string>} - Mapping of intent names to agent identifiers.
   */
  public getIntentAgentMap(): Record<string, string> {
    const intents = this.orchestrationConfig.intents || {};
    const mapping: Record<string, string> = {};
    for (const [intent, config] of Object.entries(intents)) {
      mapping[intent] = (config as IntentConfig).targetAgent;
    }
    return mapping;
  }

  /**
   * Phrases considered too vague and that trigger clarification flow.
   *
   * @returns {string[]} - List of vague phrase patterns.
   */
  public getVaguePhrases(): string[] {
    return this.orchestrationConfig.escalation?.vaguePhrases ?? [];
  }

  /**
   * Determine which agent handles requests after escalation exhaustion.
   *
   * @returns {string} - Fallback agent identifier (default clarification-agent).
   */
  public getFallbackAgent(): string {
    return this.orchestrationConfig.escalation?.fallbackAgent ?? "";
  }

  /**
   * User-facing message templates consumed during orchestration.
   *
   * @returns {NonNullable<OrchestrationConfig["messages"]>} - Message configuration object.
   * @throws {Error} When orchestrator config lacks messages definition.
   */
  public getMessages(): NonNullable<OrchestrationConfig["messages"]> {
    const messages = this.orchestrationConfig.messages;
    if (!messages) {
      throw new Error("Orchestrator config missing messages block");
    }
    return messages as NonNullable<OrchestrationConfig["messages"]>;
  }

  /**
   * Load configuration from a JSON file path; falls back to internal default.
   *
   * @param {string} [configPath] - Path to JSON config file.
   * @returns {Promise<OrchestratorConfig>} - Loaded orchestrator config instance.
   */
  public static async loadFromFile(
    configPath?: string
  ): Promise<OrchestratorConfig> {
    if (!configPath) {
      return new OrchestratorConfig(orchestratorConfig);
    }
    try {
      const fs = await import("fs");
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
   * Construct a default orchestrator configuration instance.
   *
   * @returns {OrchestratorConfig} - Default configuration wrapper.
   */
  public static createDefault(): OrchestratorConfig {
    return new OrchestratorConfig(orchestratorConfig);
  }
}
