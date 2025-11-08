/**
 * @packageDocumentation Configuration-driven orchestrator implementation
 */

import { OrchestratorConfig } from "./config";

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
  private scoringWeights: any;
  private minimumKeywordLength: number;
  private vaguePhrases: string[];
  private messages: any;

  /**
 * constructor function.
 *
 * @param {OrchestratorConfig} config - config parameter.
 * @returns {unknown} - TODO: describe return value.
 */
constructor(config?: OrchestratorConfig) {
    this.config = config || OrchestratorConfig.createDefault();
    this.stopWords = this.config.getStopWords();
    this.intentAgentMap = this.config.getIntentAgentMap();
    this.scoringWeights = this.config.getScoringWeights();
    this.minimumKeywordLength = this.config.getMinimumKeywordLength();
    this.vaguePhrases = this.config.getVaguePhrases();
    this.messages = this.config.getMessages();
  }

    /**
 * Create orchestrator instance with configuration loaded from file
 *
 * @param {string} configPath - configPath parameter.
 * @returns {Promise<Orchestrator>} - TODO: describe return value.
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
 * Get public configuration
 *
 * @returns {unknown} - TODO: describe return value.
 */
public getConfig() {
    return this.config.getConfig();
  }

    /**
 * Get supported intents
 *
 * @returns {OrchestratorIntent[]} - TODO: describe return value.
 */
public getSupportedIntents(): OrchestratorIntent[] {
    return this.config.getIntents();
  }

    /**
 * Extract keywords from text using configuration
 *
 * @param {string} text - text parameter.
 * @returns {string[]} - TODO: describe return value.
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
 * Check if a question is too vague even if it matches an intent.
 *
 * @param {string} question - question parameter.
 * @param {string} intent - intent parameter.
 * @returns {boolean} - TODO: describe return value.
 */
private isQuestionTooVague(question: string, intent: string): boolean {
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
 * Classify intent using configuration-driven approach.
 *
 * @param {string | OrchestratorInput} questionOrInput - questionOrInput parameter.
 * @param {{ topic?: string }} context - context parameter.
 * @returns {OrchestratorClassification} - TODO: describe return value.
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
 * Route request using configuration (simplified for now - delegates to original implementation)
 *
 * @param {OrchestratorInput} input - input parameter.
 * @returns {Promise<OrchestratorResponse>} - TODO: describe return value.
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
 * Generate contextual summary for the response.
 *
 * @param {OrchestratorClassification} classification - classification parameter.
 * @param {OrchestratorInput} input - input parameter.
 * @returns {string} - TODO: describe return value.
 */
private generateSummary(
    classification: OrchestratorClassification,
    input: OrchestratorInput
  ): string {
    const topic = input.topic || this.messages.summaries.defaultTopic;

    switch (classification.intent) {
      case "metadata":
        return this.messages.summaries.metadata.replace("{topic}", topic);
      case "records":
        return this.messages.summaries.records.replace("{topic}", topic);
      case "insight":
        return this.messages.summaries.insight.replace("{topic}", topic);
      case "clarification":
        return this.messages.summaries.clarification;
      default:
        return `Routed to ${classification.intent}`;
    }
  }

    /**
 * Generate appropriate payload for the response.
 *
 * @param {OrchestratorClassification} classification - classification parameter.
 * @param {OrchestratorInput} input - input parameter.
 * @returns {unknown} - TODO: describe return value.
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
 * Handle user requests by classifying intent and routing to appropriate agents.
 *
 * @param {OrchestratorInput} input - input parameter.
 * @returns {Promise<OrchestratorResponse>} - TODO: describe return value.
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
 * Format the orchestrator response for user-friendly display.
 *
 * @param {OrchestratorResponse} response - response parameter.
 * @param {OrchestratorInput} input - input parameter.
 * @returns {string} - TODO: describe return value.
 */
private formatResponseForUser(
    response: OrchestratorResponse,
    input: OrchestratorInput
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

    // Add matched signals for transparency
    const payload = response.payload as any;
    if (payload?.classification?.matchedSignals?.length > 0) {
      sections.push(
        `**Matched keywords:** ${payload.classification.matchedSignals.join(
          ", "
        )}`
      );
    }

    return sections.join("\n\n");
  }

    /**
 * Get current configuration
 *
 * @returns {Record<string, unknown>} - TODO: describe return value.
 */
public getCurrentConfig(): Record<string, unknown>  {
    return {
      supportedIntents: this.getSupportedIntents(),
      intentAgentMap: this.intentAgentMap,
      stopWordsCount: this.stopWords.size,
      scoringWeights: this.scoringWeights,
    };
  }
}
