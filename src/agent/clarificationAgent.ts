/**
 * @file Clarification agent for handling ambiguous user requests and guiding users toward actionable queries.
 */

import { getAgentMetadata } from "@mcp/config/agentManifest";
import { KnowledgeBase, KnowledgeHit } from "@mcp/knowledgeBase";
import { renderClarificationPrompt } from "@mcp/prompts";
import { createInvocationLogger } from "@mcp/telemetry";
import { ClarificationAgentProfile } from "@mcp/config/agentProfiles";

/**
 * Input parameters for the clarification agent.
 */
export interface ClarificationAgentInput {
  /** The user's question that needs clarification. */
  question: string;
  /** Optional topic context for the question. */
  topic?: string;
  /** Signals that were missing from the original query. */
  missingSignals?: string[];
  /** List of candidate agents that could handle the query. */
  candidateAgents: string[];
}

/**
 * Response from the clarification agent containing guidance and context.
 */
export interface ClarificationResponse {
  /** The clarification prompt to guide the user. */
  prompt: string;
  /** Relevant knowledge snippets to provide context. */
  knowledgeSnippets: KnowledgeHit[];
}

export { ClarificationAgentProfile };

/**
 * Agent responsible for handling ambiguous user requests and providing clarification guidance.
 */
export class ClarificationAgent {
  /** The knowledge base for finding relevant context. */
  private readonly knowledgeBase: KnowledgeBase;
  /** Telemetry logger for tracking agent invocations. */
  private readonly telemetry = createInvocationLogger(
    ClarificationAgentProfile.id
  );

  /**
   * Creates a new clarification agent instance.
   *
   * @param knowledgeBase - Optional knowledge base instance, creates new one if not provided.
   */
  constructor(knowledgeBase?: KnowledgeBase) {
    this.knowledgeBase = knowledgeBase ?? new KnowledgeBase();
  }

  /**
   * Loads documents into the knowledge base for context retrieval.
   *
   * @param documents - The documents to index in the knowledge base.
   */
  loadKnowledge(
    documents: Parameters<KnowledgeBase["indexDocuments"]>[0]
  ): void {
    this.knowledgeBase.indexDocuments(documents);
  }

  /**
   * Generates clarification guidance for ambiguous user requests.
   *
   * @param input - The clarification request containing question and context.
   * @returns Promise resolving to clarification response with guidance and context.
   */
  async clarify(
    input: ClarificationAgentInput
  ): Promise<ClarificationResponse> {
    return this.telemetry("clarify", async () => {
      const knowledgeSnippets = this.knowledgeBase.query(input.question, 2);
      const focusAgentId = (input.candidateAgents[0] ??
        ClarificationAgentProfile.id) as never;
      const manifest = getAgentMetadata(focusAgentId);
      const prompt = renderClarificationPrompt({
        question: input.question,
        manifest,
        missingSignals: input.missingSignals,
        knowledgeSnippets: knowledgeSnippets.map((hit) => ({
          source: hit.title,
          summary: hit.summary,
        })),
      });
      return { prompt, knowledgeSnippets };
    });
  }
}
