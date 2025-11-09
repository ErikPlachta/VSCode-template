/**
 * @packageDocumentation Configuration-driven orchestrator implementation
 */

import {
  BaseAgentConfig,
  type AgentConfigDefinition,
  type OrchestrationConfig,
  type IntentConfig,
  createDescriptorMap,
  type ConfigDescriptor,
} from "@internal-types/agentConfig";
import {
  validateAgentConfig,
  generateValidationReport,
} from "@internal-types/configValidation";
import { orchestratorConfig } from "@agent/orchestrator/agent.config";
import type {
  OrchestratorIntent,
  OrchestratorClassification,
  OrchestratorInput,
  OrchestratorResponse,
} from "@internal-types/agentConfig";

/**
 * Configuration-driven orchestrator that routes questions to appropriate agents
 */
export class Orchestrator extends BaseAgentConfig {
  private stopWords: Set<string>;
  private intentAgentMap: Record<string, string>;
  private scoringWeights: {
    signalMatch: number;
    focusMatch: number;
    promptStarterMatch: number;
  };
  private minimumKeywordLength: number;
  private vaguePhrases: string[];
  private messages: Required<NonNullable<OrchestrationConfig["messages"]>>;

  /**
   * Create an orchestrator using the provided configuration (or defaults).
   *
   * @param {AgentConfigDefinition} [config] - Optional pre-loaded configuration.
   */
  constructor(config?: AgentConfigDefinition) {
    const configToUse = config || orchestratorConfig;
    const validationResult = validateAgentConfig(configToUse);
    if (!validationResult.isValid) {
      const report = generateValidationReport(validationResult);
      throw new Error(`Invalid orchestrator configuration:\n${report}`);
    }

    super(configToUse);
    this._validateRequiredSections();

    // Resolve and cache common config items for performance
    const stop = this.getConfigItem<string[]>(
      "orchestration.textProcessing.stopWords"
    );
    if (!Array.isArray(stop)) {
      throw new Error("Orchestrator config missing textProcessing.stopWords");
    }
    this.stopWords = new Set(stop);

    const weights = this.getConfigItem<{
      signalMatch: number;
      focusMatch: number;
      promptStarterMatch: number;
    }>("orchestration.textProcessing.scoringWeights");
    if (!weights) {
      throw new Error(
        "Orchestrator config missing textProcessing.scoringWeights"
      );
    }
    this.scoringWeights = weights;

    const minLen = this.getConfigItem<number>(
      "orchestration.textProcessing.minimumKeywordLength"
    );
    if (typeof minLen !== "number") {
      throw new Error(
        "Orchestrator config missing textProcessing.minimumKeywordLength"
      );
    }
    this.minimumKeywordLength = minLen;

    this.vaguePhrases =
      this.getConfigItem<string[]>("orchestration.escalation.vaguePhrases") ??
      [];

    const intents = this.getConfigItem<Record<string, IntentConfig>>(
      "orchestration.intents"
    );
    if (!intents || Object.keys(intents).length === 0) {
      throw new Error("Orchestrator config missing intents block");
    }
    this.intentAgentMap = {};
    for (const [intent, cfg] of Object.entries(intents)) {
      this.intentAgentMap[intent] = cfg.targetAgent;
    }

    const msgs = this.getConfigItem<
      NonNullable<OrchestrationConfig["messages"]>
    >("orchestration.messages");
    if (!msgs) {
      throw new Error("Orchestrator config missing messages block");
    }
    this.messages = msgs as Required<
      NonNullable<OrchestrationConfig["messages"]>
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
      if (!configPath) return new Orchestrator(orchestratorConfig);
      const fs = await import("fs");
      const configData = fs.readFileSync(configPath, "utf-8");
      const parsed = JSON.parse(configData) as AgentConfigDefinition;
      return new Orchestrator(parsed);
    } catch (error) {
      console.warn(
        `Failed to load orchestrator config, using defaults: ${error}`
      );
      return new Orchestrator(orchestratorConfig);
    }
  }

  /**
   * Get the underlying agent configuration structure.
   *
   * @returns {Record<string, unknown>} Raw public configuration object.
   */
  public getConfig(): Record<string, unknown> {
    return super.getConfig();
  }

  /**
   * List all supported intents configured for routing.
   *
   * @returns {OrchestratorIntent[]} Array of configured intent identifiers.
   */
  public getSupportedIntents(): OrchestratorIntent[] {
    const intents = this.getConfigItem<Record<string, IntentConfig>>(
      "orchestration.intents"
    );
    if (!intents) return [];
    return Object.keys(intents);
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

    const intents =
      this.getConfigItem<Record<string, IntentConfig>>(
        "orchestration.intents"
      ) || {};
    for (const intent of Object.keys(intents)) {
      const intentConfig = intents[intent];
      if (!intentConfig) continue;

      // Score based on intent signals
      const signalMatches = intentConfig.signals
        ? intentConfig.signals.filter((signal: string) => {
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
      this.intentAgentMap[classification.intent] || this._getFallbackAgent();
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
        agent: this._getFallbackAgent(),
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
    if (response.agent !== this._getFallbackAgent()) {
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

  // -------------------------
  // Validation & helper accessors
  // -------------------------

  /**
   * Validate required configuration paths.
   *
   * @throws {Error} When any required path missing.
   */
  private _validateRequiredSections(): void {
    const required: readonly string[] = [
      "orchestration.intents",
      "orchestration.textProcessing.stopWords",
      "orchestration.textProcessing.minimumKeywordLength",
      "orchestration.textProcessing.scoringWeights.signalMatch",
      "orchestration.textProcessing.scoringWeights.focusMatch",
      "orchestration.textProcessing.scoringWeights.promptStarterMatch",
      "orchestration.escalation.fallbackAgent",
      "orchestration.messages.noIntentDetected",
      "orchestration.messages.needMoreContext",
      "orchestration.messages.questionTooVague",
      "orchestration.messages.missingSignalsHint",
      "orchestration.messages.errorOccurred",
      "orchestration.messages.summaries.defaultTopic",
      "orchestration.messages.guidance.clarificationPrompt",
    ];
    const { passed, missing } = this.confirmConfigItems(required);
    if (!passed) {
      throw new Error(
        `Orchestrator configuration missing required items: ${missing.join(
          ", "
        )}`
      );
    }
  }

  /**
   * Get configured fallback agent.
   *
   * @returns {string} Fallback agent id.
   * @throws {Error} When not configured.
   */
  private _getFallbackAgent(): string {
    const agent = this.getConfigItem<string>(
      "orchestration.escalation.fallbackAgent"
    );
    if (!agent) {
      throw new Error("Orchestrator config missing escalation.fallbackAgent");
    }
    return agent;
  }

  /**
   * Descriptor map for dynamic configuration access.
   *
   * @returns {Record<string, {name:string; path:string; type:string; visibility:"public"|"private"; verifyPaths?: string[]}>} Descriptor definitions.
   */
  public getConfigDescriptors(): Record<string, ConfigDescriptor> {
    return createDescriptorMap([
      [
        "vaguePhrases",
        {
          name: "Vague Phrases",
          path: "orchestration.escalation.vaguePhrases",
          type: "string[]",
          visibility: "public",
          verifyPaths: ["orchestration.escalation.vaguePhrases"],
        },
      ],
      [
        "fallbackAgent",
        {
          name: "Fallback Agent",
          path: "orchestration.escalation.fallbackAgent",
          type: "string",
          visibility: "public",
          verifyPaths: ["orchestration.escalation.fallbackAgent"],
        },
      ],
      [
        "stopWords",
        {
          name: "Stop Words",
          path: "orchestration.textProcessing.stopWords",
          type: "string[]",
          visibility: "public",
          verifyPaths: ["orchestration.textProcessing.stopWords"],
        },
      ],
      [
        "minimumKeywordLength",
        {
          name: "Minimum Keyword Length",
          path: "orchestration.textProcessing.minimumKeywordLength",
          type: "number",
          visibility: "public",
          verifyPaths: ["orchestration.textProcessing.minimumKeywordLength"],
        },
      ],
      [
        "scoringWeights",
        {
          name: "Scoring Weights",
          path: "orchestration.textProcessing.scoringWeights",
          type: "{ signalMatch:number; focusMatch:number; promptStarterMatch:number }",
          visibility: "private",
          verifyPaths: [
            "orchestration.textProcessing.scoringWeights.signalMatch",
            "orchestration.textProcessing.scoringWeights.focusMatch",
            "orchestration.textProcessing.scoringWeights.promptStarterMatch",
          ],
        },
      ],
      [
        "intents",
        {
          name: "Intents",
          path: "orchestration.intents",
          type: "Record<string, IntentConfig>",
          visibility: "private",
          verifyPaths: ["orchestration.intents"],
        },
      ],
      [
        "messages",
        {
          name: "Messages",
          path: "orchestration.messages",
          type: "OrchestrationConfig['messages']",
          visibility: "public",
          verifyPaths: ["orchestration.messages"],
        },
      ],
    ]);
  }

  /**
   * Create default orchestrator using embedded TS config.
   *
   * @returns {Orchestrator} Orchestrator instance.
   */
  public static createDefault(): Orchestrator {
    return new Orchestrator(orchestratorConfig);
  }
}
