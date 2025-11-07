import { getAgentMetadata } from "../mcp/agentManifest";
import { KnowledgeBase, KnowledgeHit } from "../mcp/knowledgeBase";
import { renderClarificationPrompt } from "../mcp/prompts";
import { createInvocationLogger } from "../mcp/telemetry";
import { ClarificationAgentProfile } from "../mcp/agentProfiles";

export interface ClarificationAgentInput {
  question: string;
  topic?: string;
  missingSignals?: string[];
  candidateAgents: string[];
}

export interface ClarificationResponse {
  prompt: string;
  knowledgeSnippets: KnowledgeHit[];
}

export { ClarificationAgentProfile };

export class ClarificationAgent {
  private readonly knowledgeBase: KnowledgeBase;
  private readonly telemetry = createInvocationLogger(ClarificationAgentProfile.id);

  constructor(knowledgeBase?: KnowledgeBase) {
    this.knowledgeBase = knowledgeBase ?? new KnowledgeBase();
  }

  loadKnowledge(documents: Parameters<KnowledgeBase["indexDocuments"]>[0]): void {
    this.knowledgeBase.indexDocuments(documents);
  }

  async clarify(input: ClarificationAgentInput): Promise<ClarificationResponse> {
    return this.telemetry("clarify", async () => {
      const knowledgeSnippets = this.knowledgeBase.query(input.question, 2);
      const focusAgentId = (input.candidateAgents[0] ?? ClarificationAgentProfile.id) as never;
      const manifest = getAgentMetadata(focusAgentId);
      const prompt = renderClarificationPrompt({
        question: input.question,
        manifest,
        missingSignals: input.missingSignals,
        knowledgeSnippets: knowledgeSnippets.map((hit) => ({ source: hit.title, summary: hit.summary }))
      });
      return { prompt, knowledgeSnippets };
    });
  }
}

