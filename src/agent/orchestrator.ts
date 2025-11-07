/**
 * @fileoverview Runtime orchestrator responsible for routing questions to the
 * appropriate relevant-data agent.
 */

import { DataAgent } from "@agent/dataAgent";
import { DatabaseAgent } from "@agent/databaseAgent";
import { ClarificationAgent } from "@agent/clarificationAgent";
import { RelevantDataManagerAgent } from "@agent/relevantDataManagerAgent";
import {
  ClarificationAgentProfile,
  DataAgentProfile,
  DatabaseAgentProfile,
  RelevantDataManagerAgentProfile,
} from "@mcp/agentProfiles";
import { agentManifest, getAgentMetadata } from "@mcp/agentManifest";
import {
  renderClassificationSummary,
  renderEscalationPrompt,
} from "@mcp/prompts";
import type {
  AgentOrchestrationGuidance,
  CategoryOrchestrationConfig,
  CategorySummary,
  DatasetCatalogueEntry,
} from "@agent/relevantDataManagerAgent";

/** List of supported orchestration intents. */
export type OrchestratorIntent =
  | "metadata"
  | "records"
  | "insight"
  | "clarification";

/** Classification metadata returned before executing a task. */
export interface OrchestratorClassification {
  intent: OrchestratorIntent;
  rationale: string;
  escalationPrompt?: string;
  matchedSignals?: string[];
  missingSignals?: string[];
}

/** Input supplied when asking the orchestrator to fulfil a task. */
export interface OrchestratorInput {
  topic?: string;
  question: string;
  criteria?: Record<string, unknown>;
}

/**
 * Result of orchestrating a question across the available agents.
 */
export interface OrchestratorResponse {
  intent: OrchestratorIntent;
  agent:
    | "relevant-data-manager"
    | "database-agent"
    | "data-agent"
    | "clarification-agent"
    | "orchestrator";
  summary: string;
  rationale: string;
  payload: unknown;
  markdown: string;
}

const STOP_WORDS = new Set([
  "the",
  "and",
  "that",
  "this",
  "with",
  "into",
  "from",
  "will",
  "they",
  "their",
  "them",
  "what",
  "when",
  "have",
  "such",
  "like",
  "your",
  "more",
  "also",
  "than",
  "should",
  "before",
  "after",
  "each",
  "within",
  "without",
  "about",
  "using",
  "based",
]);

const INTENT_AGENT_MAP = {
  metadata: RelevantDataManagerAgentProfile.id,
  records: DatabaseAgentProfile.id,
  insight: DataAgentProfile.id,
  clarification: ClarificationAgentProfile.id,
} as const;

function extractKeywords(text: string): string[] {
  const matches = text.toLowerCase().match(/\b[a-z0-9]{3,}\b/g) ?? [];
  return matches.filter((token) => !STOP_WORDS.has(token));
}

function scoreGuidance(
  questionTokens: Set<string>,
  guidance?: AgentOrchestrationGuidance
): { score: number; matches: string[] } {
  if (!guidance) {
    return { score: 0, matches: [] };
  }
  const texts = [
    guidance.focus,
    ...(guidance.signals ?? []),
    ...(guidance.promptStarters ?? []),
  ];
  const matches: string[] = [];
  let score = 0;
  for (const text of texts) {
    const keywords = extractKeywords(text);
    const overlap = keywords.filter((keyword) => questionTokens.has(keyword));
    if (overlap.length > 0) {
      score += overlap.length * 2;
      matches.push(text);
    }
  }
  return { score, matches };
}

function findMissingSignals(
  questionTokens: Set<string>,
  signals: string[]
): string[] {
  return signals.filter((signal) => {
    const keywords = extractKeywords(signal);
    return (
      keywords.length > 0 &&
      !keywords.some((keyword) => questionTokens.has(keyword))
    );
  });
}

/**
 * Multi-agent orchestrator that decides which agent to invoke based on the
 * user's intent and available context.
 */
export class Orchestrator {
  private readonly manager: RelevantDataManagerAgent;
  private readonly database: DatabaseAgent;
  private readonly dataAgent: DataAgent;
  private readonly clarificationAgent: ClarificationAgent;

  constructor(
    manager: RelevantDataManagerAgent = new RelevantDataManagerAgent(),
    databaseAgent?: DatabaseAgent,
    dataAgent?: DataAgent,
    clarificationAgent?: ClarificationAgent
  ) {
    this.manager = manager;
    this.database = databaseAgent ?? new DatabaseAgent(this.manager);
    this.dataAgent = dataAgent ?? new DataAgent(this.manager, this.database);
    this.clarificationAgent = clarificationAgent ?? new ClarificationAgent();
    if (!clarificationAgent) {
      this.clarificationAgent.loadKnowledge(
        Object.values(agentManifest).map((entry) => ({
          id: entry.id,
          title: entry.title,
          content: [
            entry.description,
            `Signals: ${entry.primarySignals.join(", ")}`,
            `Escalate when: ${entry.escalateWhen.join(", ") || "n/a"}`,
          ].join("\n"),
        }))
      );
    }
  }

  /** List the categories known to the orchestrator. */
  listCategories(): CategorySummary[] {
    return this.manager.listCategories();
  }

  /** Return the consolidated dataset catalogue. */
  listCatalogue(): DatasetCatalogueEntry[] {
    return this.manager.getDatasetCatalogue();
  }

  /** Determine which agent should receive the question. */
  classify(
    question: string,
    context: {
      topic?: string;
      orchestration?: CategoryOrchestrationConfig;
    } = {}
  ): OrchestratorClassification {
    const trimmed = question.trim();
    const orchestration =
      context.orchestration ??
      (context.topic ? this.resolveOrchestration(context.topic) : undefined);
    if (!trimmed) {
      const manifest = getAgentMetadata(ClarificationAgentProfile.id);
      return {
        intent: "clarification",
        rationale: "Empty question",
        escalationPrompt: renderEscalationPrompt({
          topic: context.topic,
          missingSignals: orchestration?.signals,
          manifest,
          additionalGuidance: orchestration?.escalateWhen?.length
            ? `Share the scenario so we can check for:\n- ${orchestration.escalateWhen.join(
                "\n- "
              )}`
            : undefined,
        }),
        missingSignals: orchestration ? orchestration.signals : undefined,
      };
    }

    const tokens = new Set(extractKeywords(trimmed));
    const metadataKeywords = [
      "schema",
      "schemas",
      "relationship",
      "relationships",
      "metadata",
      "types",
      "folder",
    ];
    const recordKeywords = [
      "list",
      "find",
      "show",
      "fetch",
      "query",
      "records",
      "where",
      "filter",
    ];
    const insightKeywords = [
      "plan",
      "overview",
      "summary",
      "explain",
      "connections",
      "insight",
      "narrative",
    ];

    const evaluateIntent = (
      baseKeywords: string[],
      guidance?: AgentOrchestrationGuidance
    ): {
      score: number;
      keywordMatches: string[];
      guidanceMatches: string[];
    } => {
      const keywordMatches = baseKeywords.filter((keyword) =>
        tokens.has(keyword)
      );
      const { score: guidanceScore, matches: guidanceMatches } = scoreGuidance(
        tokens,
        guidance
      );
      return {
        score: keywordMatches.length + guidanceScore,
        keywordMatches,
        guidanceMatches,
      };
    };

    const metadataResult = evaluateIntent(
      metadataKeywords,
      orchestration?.agents.relevantDataManager
    );
    const recordsResult = evaluateIntent(
      recordKeywords,
      orchestration?.agents.databaseAgent
    );
    const insightResult = evaluateIntent(
      insightKeywords,
      orchestration?.agents.dataAgent
    );

    const intents: Array<{
      intent: OrchestratorIntent;
      result: ReturnType<typeof evaluateIntent>;
    }> = [
      { intent: "metadata", result: metadataResult },
      { intent: "records", result: recordsResult },
      { intent: "insight", result: insightResult },
    ];

    const top = intents.reduce((best, current) => {
      if (!best || current.result.score > best.result.score) {
        return current;
      }
      return best;
    }, undefined as (typeof intents)[number] | undefined);

    if (!top || top.result.score === 0) {
      const missingSignals = orchestration
        ? findMissingSignals(tokens, orchestration.signals)
        : undefined;
      return {
        intent: "clarification",
        rationale: "Unable to map question to an agent",
        escalationPrompt: this.buildEscalationPrompt(
          context.topic,
          orchestration,
          missingSignals
        ),
        missingSignals,
      };
    }

    const agentMetadata = getAgentMetadata(INTENT_AGENT_MAP[top.intent]);
    const rationale = renderClassificationSummary({
      agent: agentMetadata,
      matchedSignals: top.result.guidanceMatches,
    });

    return {
      intent: top.intent,
      rationale,
      matchedSignals: top.result.guidanceMatches,
    };
  }

  private resolveOrchestration(
    topic?: string
  ): CategoryOrchestrationConfig | undefined {
    if (!topic) {
      return undefined;
    }
    try {
      return this.manager.getCategoryConfig(topic).orchestration;
    } catch {
      return undefined;
    }
  }

  private buildEscalationPrompt(
    topic: string | undefined,
    orchestration: CategoryOrchestrationConfig | undefined,
    missingSignals?: string[]
  ): string | undefined {
    const manifest = getAgentMetadata(ClarificationAgentProfile.id);
    const prompt = renderEscalationPrompt({
      topic,
      manifest,
      missingSignals: missingSignals ?? orchestration?.signals,
      additionalGuidance: orchestration?.escalateWhen?.length
        ? `Typical escalation triggers:\n- ${orchestration.escalateWhen.join(
            "\n- "
          )}`
        : undefined,
    });
    return (
      prompt ||
      "Could you clarify whether you need metadata, specific records, or a narrative insight?"
    );
  }

  private async handleClarification(
    input: OrchestratorInput,
    classification: OrchestratorClassification,
    topic: string | undefined,
    categoryConfig:
      | ReturnType<RelevantDataManagerAgent["getCategoryConfig"]>
      | undefined
  ): Promise<OrchestratorResponse> {
    const candidateAgents = categoryConfig
      ? [
          RelevantDataManagerAgentProfile.id,
          DatabaseAgentProfile.id,
          DataAgentProfile.id,
        ]
      : Object.values(agentManifest).map((entry) => entry.id);
    const clarification = await this.clarificationAgent.clarify({
      question: input.question,
      topic,
      missingSignals:
        classification.missingSignals ?? categoryConfig?.orchestration?.signals,
      candidateAgents,
    });
    const summary =
      classification.escalationPrompt ??
      clarification.prompt.split("\n")[0] ??
      "Clarification required";
    const markdown = [
      `> ${clarification.prompt}`,
      clarification.knowledgeSnippets.length
        ? [
            "",
            "**Helpful context**",
            ...clarification.knowledgeSnippets.map(
              (hit) => `- ${hit.title}: ${hit.summary}`
            ),
          ].join("\n")
        : undefined,
    ]
      .filter((line): line is string => Boolean(line))
      .join("\n");
    return {
      intent: "clarification",
      agent: ClarificationAgentProfile.id,
      summary,
      rationale: classification.rationale,
      payload: {
        prompt: clarification.prompt,
        knowledgeSnippets: clarification.knowledgeSnippets,
        missingSignals:
          classification.missingSignals ??
          categoryConfig?.orchestration?.signals,
      },
      markdown,
    };
  }

  /** Execute the orchestration flow for the supplied input. */
  async handle(input: OrchestratorInput): Promise<OrchestratorResponse> {
    const topic = input.topic;
    let categoryConfig = undefined as
      | ReturnType<RelevantDataManagerAgent["getCategoryConfig"]>
      | undefined;
    let categoryLookupFailed = false;
    if (topic) {
      try {
        categoryConfig = this.manager.getCategoryConfig(topic);
      } catch {
        categoryLookupFailed = true;
      }
    }
    const classification = this.classify(input.question, {
      topic,
      orchestration: categoryConfig?.orchestration,
    });
    if (classification.intent === "clarification") {
      return this.handleClarification(
        input,
        classification,
        topic,
        categoryConfig
      );
    }

    if (!topic) {
      const prompt = "Please specify which category the question refers to.";
      return this.handleClarification(
        input,
        {
          intent: "clarification",
          rationale: "Missing topic",
          escalationPrompt: prompt,
        },
        topic,
        categoryConfig
      );
    }

    if (!categoryConfig || categoryLookupFailed) {
      return {
        intent: "clarification",
        agent: "orchestrator",
        summary: `Unknown category: ${topic}`,
        rationale: "Category not recognised",
        payload: {
          prompt: `The category '${topic}' is not recognised. Choose one of: ${this.manager
            .listCategories()
            .map((entry) => entry.id)
            .join(", ")}.`,
        },
        markdown: `> The category '${topic}' is not recognised. Use listCategories() to discover available options.`,
      };
    }

    switch (classification.intent) {
      case "metadata":
        return this.handleMetadata(topic, categoryConfig, classification);
      case "records":
        return this.handleRecords(
          topic,
          categoryConfig,
          input.criteria,
          classification
        );
      case "insight":
        return this.handleInsights(
          topic,
          categoryConfig,
          input.question,
          classification
        );
      default:
        return {
          intent: "clarification",
          agent: "orchestrator",
          summary: "Unsupported intent",
          rationale: classification.rationale,
          payload: { prompt: "Unsupported intent" },
          markdown: "> The orchestrator could not route this request.",
        };
    }
  }

  private async handleMetadata(
    topic: string,
    config: ReturnType<RelevantDataManagerAgent["getCategoryConfig"]>,
    classification: OrchestratorClassification
  ): Promise<OrchestratorResponse> {
    const snapshot = await this.manager.getOrCreateSnapshot(topic);
    const relationships = config.relationships.map(
      (relationship) =>
        `- ${relationship.name} → ${relationship.targetCategory}`
    );
    const guidance = config.orchestration.agents.relevantDataManager;
    const markdownLines = [
      `### ${snapshot.name} snapshot`,
      `*Records*: ${snapshot.recordCount}`,
      `*Schemas*: ${snapshot.schemaNames.join(", ") || "None"}`,
      `*Queries*: ${snapshot.queryNames.join(", ") || "None"}`,
    ];
    if (relationships.length > 0) {
      markdownLines.push("\n**Relationships**", ...relationships);
    }
    markdownLines.push("\n**Orchestration focus**", `- ${guidance.focus}`);
    if (guidance.promptStarters.length) {
      markdownLines.push(
        "\n**Prompt starters**",
        ...guidance.promptStarters.map((starter) => `- ${starter}`)
      );
    }
    if (classification.matchedSignals?.length) {
      markdownLines.push(
        "\n**Matched signals**",
        ...classification.matchedSignals.map((signal) => `- ${signal}`)
      );
    }
    return {
      intent: "metadata",
      agent: "relevant-data-manager",
      summary: `${snapshot.name} snapshot with ${snapshot.recordCount} records`,
      rationale: classification.rationale,
      payload: {
        snapshot,
        relationships: config.relationships,
        guidance,
        matchedSignals: classification.matchedSignals ?? [],
      },
      markdown: markdownLines.join("\n"),
    };
  }

  private async handleRecords(
    topic: string,
    config: ReturnType<RelevantDataManagerAgent["getCategoryConfig"]>,
    criteria: Record<string, unknown> | undefined,
    classification: OrchestratorClassification
  ): Promise<OrchestratorResponse> {
    const category = this.manager.getCategory(topic);
    const records = await this.database.queryCategory(
      category.id,
      criteria ?? {}
    );
    const sample = records.slice(0, 5);
    const overview = await this.dataAgent.getTopicOverview(category.id);
    let connectionsMarkdown: string[] = [];
    let connectionsPayload: unknown;
    try {
      if (records.length > 0) {
        const connections = await this.dataAgent.mapTopicConnections(
          category.id,
          records[0].id
        );
        connectionsPayload = connections;
        if (connections.narrative.length) {
          connectionsMarkdown = [
            "\n**Connection narrative**",
            ...connections.narrative.map((line) => `- ${line}`),
          ];
        }
      }
    } catch {
      connectionsPayload = undefined;
    }
    const guidance = config.orchestration.agents.databaseAgent;
    const markdownLines = [
      `### ${category.name} records (${sample.length} shown of ${records.length})`,
      "",
      "**Dataset snapshot**",
      `- Records available: ${overview.snapshot.recordCount}`,
      `- Schemas: ${overview.snapshot.schemaNames.join(", ") || "None"}`,
      `- Queries: ${overview.snapshot.queryNames.join(", ") || "None"}`,
      "",
      "**Sample records**",
      "```json",
      JSON.stringify(sample, null, 2),
      "```",
    ];
    markdownLines.push(...connectionsMarkdown);
    markdownLines.push("\n**Next steps guidance**", `- ${guidance.focus}`);
    if (guidance.promptStarters.length) {
      markdownLines.push(
        "\n**Prompt starters**",
        ...guidance.promptStarters.map((starter) => `- ${starter}`)
      );
    }
    if (classification.matchedSignals?.length) {
      markdownLines.push(
        "\n**Matched signals**",
        ...classification.matchedSignals.map((signal) => `- ${signal}`)
      );
    }
    return {
      intent: "records",
      agent: "database-agent",
      summary: `Returned ${records.length} records from ${category.name}`,
      rationale: classification.rationale,
      payload: {
        records,
        criteria,
        snapshot: overview.snapshot,
        relationships: overview.relationships,
        connections: connectionsPayload,
        guidance,
        matchedSignals: classification.matchedSignals ?? [],
      },
      markdown: markdownLines.join("\n"),
    };
  }

  private async handleInsights(
    topic: string,
    config: ReturnType<RelevantDataManagerAgent["getCategoryConfig"]>,
    question: string,
    classification: OrchestratorClassification
  ): Promise<OrchestratorResponse> {
    const plan = await this.dataAgent.buildExplorationPlan(topic, question);
    const overview = await this.dataAgent.getTopicOverview(topic);
    let connectionsMarkdown: string[] = [];
    let connectionsPayload: unknown;
    try {
      const connections = await this.dataAgent.mapTopicConnections(topic);
      connectionsPayload = connections;
      if (connections.narrative.length) {
        connectionsMarkdown = [
          "\n**Relationship narrative**",
          ...connections.narrative.map((line) => `- ${line}`),
        ];
      }
    } catch {
      connectionsPayload = undefined;
    }
    const supportingRecords = plan.supportingResources.map((resource) => ({
      categoryId: resource.categoryId,
      records: resource.ids
        .map((id) => this.manager.getRecord(resource.categoryId, id))
        .filter((record): record is NonNullable<typeof record> =>
          Boolean(record)
        ),
    }));
    const guidance = config.orchestration.agents.dataAgent;
    const markdownLines = [
      `### Exploration plan for ${plan.topic}`,
      `**Question:** ${plan.question}`,
      "",
      "**Steps**",
    ];
    plan.steps.forEach((step, index) => {
      markdownLines.push(
        ` ${index + 1}. **${step.title}** — ${step.description}`
      );
      if (step.hints.length) {
        markdownLines.push(`    - Hints: ${step.hints.join("; ")}`);
      }
    });
    if (plan.recommendedQueries.length) {
      markdownLines.push(
        "\n**Recommended queries**",
        `- ${plan.recommendedQueries.join("\n- ")}`
      );
    }
    markdownLines.push(...connectionsMarkdown);
    markdownLines.push("\n**Guidance focus**", `- ${guidance.focus}`);
    if (guidance.promptStarters.length) {
      markdownLines.push(
        "\n**Prompt starters**",
        ...guidance.promptStarters.map((starter) => `- ${starter}`)
      );
    }
    if (classification.matchedSignals?.length) {
      markdownLines.push(
        "\n**Matched signals**",
        ...classification.matchedSignals.map((signal) => `- ${signal}`)
      );
    }
    return {
      intent: "insight",
      agent: "data-agent",
      summary: `Exploration plan for ${plan.topic}`,
      rationale: classification.rationale,
      payload: {
        plan,
        overview,
        connections: connectionsPayload,
        supportingRecords,
        guidance,
        matchedSignals: classification.matchedSignals ?? [],
      },
      markdown: markdownLines.join("\n"),
    };
  }
}
