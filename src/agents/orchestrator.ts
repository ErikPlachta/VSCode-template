/**
 * @fileoverview Runtime orchestrator responsible for routing questions to the
 * appropriate relevant-data agent.
 */

import { DataAgent } from "./dataAgent";
import { DatabaseAgent } from "./databaseAgent";
import { CategorySummary, DatasetCatalogueEntry, RelevantDataManagerAgent } from "./relevantDataManagerAgent";

/** List of supported orchestration intents. */
export type OrchestratorIntent = "metadata" | "records" | "insight" | "clarification";

/** Classification metadata returned before executing a task. */
export interface OrchestratorClassification {
  intent: OrchestratorIntent;
  rationale: string;
  escalationPrompt?: string;
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
  agent: "relevant-data-manager" | "database-agent" | "data-agent" | "orchestrator";
  summary: string;
  rationale: string;
  payload: unknown;
  markdown: string;
}

/**
 * Multi-agent orchestrator that decides which agent to invoke based on the
 * user's intent and available context.
 */
export class Orchestrator {
  private readonly manager: RelevantDataManagerAgent;
  private readonly database: DatabaseAgent;
  private readonly dataAgent: DataAgent;

  constructor(
    manager: RelevantDataManagerAgent = new RelevantDataManagerAgent(),
    databaseAgent?: DatabaseAgent,
    dataAgent?: DataAgent
  ) {
    this.manager = manager;
    this.database = databaseAgent ?? new DatabaseAgent(this.manager);
    this.dataAgent = dataAgent ?? new DataAgent(this.manager, this.database);
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
  classify(question: string): OrchestratorClassification {
    const trimmed = question.trim();
    if (!trimmed) {
      return {
        intent: "clarification",
        rationale: "Empty question",
        escalationPrompt: "Please describe the problem you want to solve."
      };
    }

    const lower = trimmed.toLowerCase();
    const metadataKeywords = ["schema", "schemas", "relationship", "relationships", "metadata", "types", "folder"];
    const recordKeywords = ["list", "find", "show", "fetch", "query", "records", "where", "filter"];
    const insightKeywords = ["plan", "overview", "summary", "explain", "connections", "insight", "narrative"];

    const score = (keywords: string[]) => keywords.reduce((acc, keyword) => (lower.includes(keyword) ? acc + 1 : acc), 0);

    const metadataScore = score(metadataKeywords);
    const recordScore = score(recordKeywords);
    const insightScore = score(insightKeywords);

    const topScore = Math.max(metadataScore, recordScore, insightScore);
    if (topScore === 0) {
      return {
        intent: "clarification",
        rationale: "Unable to map question to an agent",
        escalationPrompt:
          "Could you clarify whether you need metadata, specific records, or a narrative insight?"
      };
    }

    if (topScore === metadataScore && metadataScore > 0) {
      return {
        intent: "metadata",
        rationale: "Detected metadata keywords"
      };
    }

    if (topScore === recordScore && recordScore > 0) {
      return {
        intent: "records",
        rationale: "Detected record-level lookup keywords"
      };
    }

    return {
      intent: "insight",
      rationale: "Detected synthesis and planning keywords"
    };
  }

  /** Execute the orchestration flow for the supplied input. */
  async handle(input: OrchestratorInput): Promise<OrchestratorResponse> {
    const classification = this.classify(input.question);
    if (classification.intent === "clarification") {
      return {
        intent: "clarification",
        agent: "orchestrator",
        summary: classification.escalationPrompt ?? "Clarification required",
        rationale: classification.rationale,
        payload: { prompt: classification.escalationPrompt },
        markdown: `> ${classification.escalationPrompt ?? "Please clarify your request."}`
      };
    }

    const topic = input.topic;
    if (!topic) {
      return {
        intent: "clarification",
        agent: "orchestrator",
        summary: "Topic required",
        rationale: "Missing topic",
        payload: { prompt: "Specify which category the question refers to." },
        markdown: "> Please specify the relevant category (for example, `people` or `departments`)."
      };
    }

    switch (classification.intent) {
      case "metadata":
        return this.handleMetadata(topic, classification.rationale);
      case "records":
        return this.handleRecords(topic, input.criteria, classification.rationale);
      case "insight":
        return this.handleInsights(topic, input.question, classification.rationale);
      default:
        return {
          intent: "clarification",
          agent: "orchestrator",
          summary: "Unsupported intent",
          rationale: classification.rationale,
          payload: { prompt: "Unsupported intent" },
          markdown: "> The orchestrator could not route this request."
        };
    }
  }

  private async handleMetadata(topic: string, rationale: string): Promise<OrchestratorResponse> {
    const snapshot = await this.manager.getOrCreateSnapshot(topic);
    const config = this.manager.getCategoryConfig(topic);
    const relationships = config.relationships.map((relationship) => `- ${relationship.name} → ${relationship.targetCategory}`);
    const markdownLines = [
      `### ${snapshot.name} snapshot`,
      `*Records*: ${snapshot.recordCount}`,
      `*Schemas*: ${snapshot.schemaNames.join(", ") || "None"}`,
      `*Queries*: ${snapshot.queryNames.join(", ") || "None"}`
    ];
    if (relationships.length > 0) {
      markdownLines.push("\n**Relationships**", ...relationships);
    }
    return {
      intent: "metadata",
      agent: "relevant-data-manager",
      summary: `${snapshot.name} snapshot with ${snapshot.recordCount} records`,
      rationale,
      payload: { snapshot, relationships: config.relationships },
      markdown: markdownLines.join("\n")
    };
  }

  private async handleRecords(
    topic: string,
    criteria: Record<string, unknown> | undefined,
    rationale: string
  ): Promise<OrchestratorResponse> {
    const category = this.manager.getCategory(topic);
    const records = await this.database.queryCategory(category.id, criteria ?? {});
    const sample = records.slice(0, 5);
    const markdownLines = [
      `### ${category.name} records (${sample.length} shown of ${records.length})`,
      "",
      "```json",
      JSON.stringify(sample, null, 2),
      "```"
    ];
    return {
      intent: "records",
      agent: "database-agent",
      summary: `Returned ${records.length} records from ${category.name}`,
      rationale,
      payload: { records, criteria },
      markdown: markdownLines.join("\n")
    };
  }

  private async handleInsights(topic: string, question: string, rationale: string): Promise<OrchestratorResponse> {
    const plan = await this.dataAgent.buildExplorationPlan(topic, question);
    const markdownLines = [
      `### Exploration plan for ${plan.topic}`,
      `**Question:** ${plan.question}`,
      "",
      "**Steps**"
    ];
    plan.steps.forEach((step, index) => {
      markdownLines.push(` ${index + 1}. **${step.title}** — ${step.description}`);
      if (step.hints.length) {
        markdownLines.push(`    - Hints: ${step.hints.join("; ")}`);
      }
    });
    if (plan.recommendedQueries.length) {
      markdownLines.push("\n**Recommended queries**", `- ${plan.recommendedQueries.join("\n- ")}`);
    }
    return {
      intent: "insight",
      agent: "data-agent",
      summary: `Exploration plan for ${plan.topic}`,
      rationale,
      payload: plan,
      markdown: markdownLines.join("\n")
    };
  }
}
