/**
 * @fileoverview Mock MCP orchestration helpers that simulate multi-agent
 * collaborations using local dummy data. The utilities expose higher level
 * operations (people lookup, document search, guidance generation, etc.) so
 * the VS Code extension can exercise complex orchestration flows without a
 * live backend.
 */

import * as crypto from "crypto";
import {
  readSharedCacheEntry,
  SharedCacheEntry,
  storeSharedCacheEntry
} from "./mcpCache";

/** Sample person record used by the mock database lookup tool. */
export interface Person {
  id: string;
  name: string;
  role: string;
  location: string;
  skills: string[];
  projects: string[];
  managerId?: string;
}

/** Minimal representation of a project inside the mock workspace. */
export interface Project {
  id: string;
  name: string;
  status: "green" | "amber" | "red";
  summary: string;
  documentIds: string[];
}

/** Knowledge base artefact surfaced by the document tools. */
export interface KnowledgeDocument {
  id: string;
  title: string;
  category: "runbook" | "proposal" | "decision" | "brief";
  tags: string[];
  ownerId: string;
  lastUpdated: string;
  body: string;
}

/** Guidance response that outlines a recommended plan of action. */
export interface GuidancePlan {
  goal: string;
  context: string[];
  steps: Array<{ description: string; owner: string; dependsOn?: string[] }>;
  recommendedTools: string[];
}

/** Template-driven document generation result. */
export interface GeneratedDocument {
  title: string;
  body: string;
  metadata: Record<string, string>;
}

/** Parameters accepted by the people lookup helper. */
export interface PeopleLookupFilters {
  location?: string;
  role?: string;
  skill?: string;
  projectId?: string;
  managerId?: string;
}

/** Parameters accepted by the document finder helper. */
export interface DocumentSearchCriteria {
  tag?: string;
  category?: KnowledgeDocument["category"];
  ownerId?: string;
  text?: string;
}

/** Parameters for updating an existing document. */
export interface DocumentUpdatePayload {
  title?: string;
  tags?: string[];
  body?: string;
  ownerId?: string;
}

/** Parameters for the problem solving guidance helper. */
export interface GuidanceRequest {
  goal: string;
  urgency?: "low" | "medium" | "high";
  blockers?: string[];
  preferredCollaborationStyle?: "async" | "sync";
}

/** Parameters used to generate new documentation artefacts. */
export interface DocumentGenerationRequest {
  template: "status-update" | "handover" | "kickoff";
  audience: "executive" | "team" | "stakeholder";
  summary: string;
  highlights: string[];
}

/** Local dataset that mimics a people directory. */
const PEOPLE: Person[] = [
  {
    id: "p-001",
    name: "Ava Chen",
    role: "Lead Data Scientist",
    location: "New York",
    skills: ["python", "mlops", "sql"],
    projects: ["proj-analytics", "proj-churn"],
    managerId: "p-005"
  },
  {
    id: "p-002",
    name: "Miguel Ortega",
    role: "Senior Backend Engineer",
    location: "Austin",
    skills: ["node", "graphql", "observability"],
    projects: ["proj-gateway"],
    managerId: "p-006"
  },
  {
    id: "p-003",
    name: "Priya Nair",
    role: "Product Manager",
    location: "Remote - UK",
    skills: ["roadmapping", "facilitation", "analytics"],
    projects: ["proj-churn"],
    managerId: "p-007"
  },
  {
    id: "p-004",
    name: "Noah Patel",
    role: "Solutions Architect",
    location: "Toronto",
    skills: ["cloud", "compliance", "presentations"],
    projects: ["proj-modernisation", "proj-gateway"],
    managerId: "p-006"
  },
  {
    id: "p-005",
    name: "Samira Ali",
    role: "Director of Data",
    location: "New York",
    skills: ["strategy", "leadership", "analytics"],
    projects: ["proj-analytics", "proj-churn"],
    managerId: undefined
  },
  {
    id: "p-006",
    name: "Julian Ross",
    role: "Head of Platform",
    location: "Austin",
    skills: ["platform", "architecture", "mentoring"],
    projects: ["proj-gateway", "proj-modernisation"],
    managerId: undefined
  },
  {
    id: "p-007",
    name: "Elena Fischer",
    role: "VP of Product",
    location: "Remote - EU",
    skills: ["portfolio", "alignment", "analytics"],
    projects: ["proj-churn", "proj-modernisation"],
    managerId: undefined
  }
];

/** Local dataset that models strategic projects. */
const PROJECTS: Project[] = [
  {
    id: "proj-analytics",
    name: "Customer Analytics Platform",
    status: "amber",
    summary:
      "Replatforming fragmented analytics workloads into a governed lakehouse with self-serve dashboards.",
    documentIds: ["doc-analytics-brief", "doc-data-quality-plan"]
  },
  {
    id: "proj-gateway",
    name: "Unified API Gateway",
    status: "green",
    summary: "Modernising the gateway with GraphQL federation and service meshes.",
    documentIds: ["doc-api-slo", "doc-gateway-runbook"]
  },
  {
    id: "proj-modernisation",
    name: "Legacy Modernisation",
    status: "red",
    summary: "Sequencing a phased retirement of the legacy monolith into targeted services.",
    documentIds: ["doc-modernisation-plan"]
  },
  {
    id: "proj-churn",
    name: "Churn Prediction Initiative",
    status: "green",
    summary: "Rolling out predictive churn scoring across customer success workflows.",
    documentIds: ["doc-churn-model", "doc-success-playbook"]
  }
];

/** Local dataset representing the document corpus. */
const DOCUMENTS: KnowledgeDocument[] = [
  {
    id: "doc-analytics-brief",
    title: "Analytics Platform North Star",
    category: "brief",
    tags: ["analytics", "strategy"],
    ownerId: "p-005",
    lastUpdated: "2024-05-12",
    body: "Defines the strategic guardrails for the analytics platform refresh."
  },
  {
    id: "doc-data-quality-plan",
    title: "Data Quality Hardening Plan",
    category: "proposal",
    tags: ["quality", "data"],
    ownerId: "p-001",
    lastUpdated: "2024-03-28",
    body: "Roadmap of quality gates and observability roll-out for pipelines."
  },
  {
    id: "doc-api-slo",
    title: "API Gateway SLO Charter",
    category: "decision",
    tags: ["slo", "api"],
    ownerId: "p-002",
    lastUpdated: "2024-04-18",
    body: "Documented latency/error budgets and escalation paths for the gateway."
  },
  {
    id: "doc-gateway-runbook",
    title: "Gateway Incident Runbook",
    category: "runbook",
    tags: ["incident", "operations"],
    ownerId: "p-004",
    lastUpdated: "2024-02-02",
    body: "Step-by-step mitigation guide for common production incidents."
  },
  {
    id: "doc-modernisation-plan",
    title: "Legacy Modernisation Phasing",
    category: "proposal",
    tags: ["modernisation", "architecture"],
    ownerId: "p-004",
    lastUpdated: "2024-06-07",
    body: "Prioritised sequence of domains slated for modernisation."
  },
  {
    id: "doc-churn-model",
    title: "Churn Model Technical Deep Dive",
    category: "brief",
    tags: ["ml", "customer"],
    ownerId: "p-001",
    lastUpdated: "2024-01-14",
    body: "Feature engineering rationale and validation metrics for churn scores."
  },
  {
    id: "doc-success-playbook",
    title: "Customer Success Adoption Playbook",
    category: "runbook",
    tags: ["success", "go-to-market"],
    ownerId: "p-003",
    lastUpdated: "2024-05-01",
    body: "Enablement collateral for rolling out success motions informed by churn scoring."
  }
];

/**
 * Mock MCP server that can service requests for orchestration scenarios. The
 * helper persists its output through the shared cache helpers so results can be
 * re-used across multiple tool invocations.
 */
export class MockMcpOrchestrator {
  constructor(private readonly cacheDir: string) {}

  /** Fetch a filtered list of people matching the provided criteria. */
  async listPeople(
    filters: PeopleLookupFilters
  ): Promise<{ people: Person[]; cacheEntry: SharedCacheEntry<Person[]> }> {
    let results = PEOPLE;
    if (filters.location) {
      results = results.filter((person) =>
        person.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }
    if (filters.role) {
      results = results.filter((person) =>
        person.role.toLowerCase().includes(filters.role!.toLowerCase())
      );
    }
    if (filters.skill) {
      const soughtSkill = filters.skill.toLowerCase();
      results = results.filter((person) =>
        person.skills.some((skill) => skill.toLowerCase() === soughtSkill)
      );
    }
    if (filters.projectId) {
      results = results.filter((person) => person.projects.includes(filters.projectId!));
    }
    if (filters.managerId) {
      results = results.filter((person) => person.managerId === filters.managerId);
    }

    const entry = await this.persistSharedResult("peopleLookup", filters, results, {
      total: results.length
    });
    return { people: results, cacheEntry: entry };
  }

  /** Gather related context for a project, including contributors and docs. */
  async lookupProjectRelationships(projectId: string): Promise<{
    project: Project | undefined;
    contributors: Person[];
    documents: KnowledgeDocument[];
    cacheEntry: SharedCacheEntry<unknown>;
  }> {
    const project = PROJECTS.find((item) => item.id === projectId);
    const contributors = PEOPLE.filter((person) => person.projects.includes(projectId));
    const documents = DOCUMENTS.filter((doc) => project?.documentIds.includes(doc.id) ?? false);
    const payload = { project, contributors, documents };
    const entry = await this.persistSharedResult("projectRelationships", { projectId }, payload, {
      projectStatus: project?.status ?? "unknown"
    });
    return { project, contributors, documents, cacheEntry: entry };
  }

  /** Search for documents using free-text or tag-based criteria. */
  async findDocuments(
    criteria: DocumentSearchCriteria
  ): Promise<{ documents: KnowledgeDocument[]; cacheEntry: SharedCacheEntry<KnowledgeDocument[]> }> {
    let results = DOCUMENTS;
    if (criteria.category) {
      results = results.filter((doc) => doc.category === criteria.category);
    }
    if (criteria.tag) {
      const target = criteria.tag.toLowerCase();
      results = results.filter((doc) => doc.tags.some((tag) => tag.toLowerCase() === target));
    }
    if (criteria.ownerId) {
      results = results.filter((doc) => doc.ownerId === criteria.ownerId);
    }
    if (criteria.text) {
      const text = criteria.text.toLowerCase();
      results = results.filter((doc) =>
        `${doc.title} ${doc.body}`.toLowerCase().includes(text)
      );
    }
    const entry = await this.persistSharedResult("documentSearch", criteria, results, {
      total: results.length
    });
    return { documents: results, cacheEntry: entry };
  }

  /** Update a document and return the modified version for downstream tools. */
  async updateDocument(
    documentId: string,
    update: DocumentUpdatePayload
  ): Promise<{ document?: KnowledgeDocument; cacheEntry: SharedCacheEntry<KnowledgeDocument | undefined> }> {
    const existing = DOCUMENTS.find((doc) => doc.id === documentId);
    if (!existing) {
      const entry = await this.persistSharedResult("documentUpdate", { documentId }, undefined, {
        status: "not-found"
      });
      return { document: undefined, cacheEntry: entry };
    }

    const updated: KnowledgeDocument = {
      ...existing,
      ...update,
      tags: update.tags ?? existing.tags,
      lastUpdated: new Date().toISOString().slice(0, 10)
    };
    const index = DOCUMENTS.findIndex((doc) => doc.id === documentId);
    DOCUMENTS.splice(index, 1, updated);

    const entry = await this.persistSharedResult("documentUpdate", { documentId, update }, updated, {
      status: "updated"
    });
    return { document: updated, cacheEntry: entry };
  }

  /** Provide a structured problem solving plan for the provided goal. */
  async requestGuidance(request: GuidanceRequest): Promise<{
    plan: GuidancePlan;
    cacheEntry: SharedCacheEntry<GuidancePlan>;
  }> {
    const owners = this.pickGuidanceOwners(request);
    const steps = [
      {
        description: `Clarify scope and success metrics for "${request.goal}"`,
        owner: owners.primary,
        dependsOn: request.blockers?.length ? ["Resolve blockers"] : undefined
      },
      {
        description: "Assemble cross-functional working group with domain specialists",
        owner: owners.facilitator
      },
      {
        description: "Prototype solution path and validate against existing runbooks",
        owner: owners.executor
      }
    ];
    if (request.blockers?.length) {
      steps.unshift({
        description: `Resolve blockers: ${request.blockers.join(", ")}`,
        owner: owners.facilitator
      });
    }

    const plan: GuidancePlan = {
      goal: request.goal,
      context: [
        `Urgency: ${request.urgency ?? "medium"}`,
        `Preferred collaboration: ${request.preferredCollaborationStyle ?? "sync"}`
      ],
      steps,
      recommendedTools: [
        "peopleLookup",
        "documentSearch",
        request.blockers?.length ? "riskRegister" : "deliveryChecklist"
      ].filter(Boolean) as string[]
    };

    const entry = await this.persistSharedResult("guidance", request, plan, {
      urgency: request.urgency ?? "medium"
    });
    return { plan, cacheEntry: entry };
  }

  /**
   * Generate a document using lightweight templates that downstream tools can
   * further refine.
   */
  async generateDocument(
    request: DocumentGenerationRequest
  ): Promise<{ document: GeneratedDocument; cacheEntry: SharedCacheEntry<GeneratedDocument> }> {
    const title = this.buildGeneratedTitle(request);
    const intro =
      request.template === "status-update"
        ? `Status update for ${request.audience} stakeholders.`
        : request.template === "handover"
          ? `Operational handover for ${request.audience} audiences.`
          : `Kickoff briefing tailored for ${request.audience} collaborators.`;
    const body = [intro, "", request.summary, "", "Key highlights:"]
      .concat(request.highlights.map((item, index) => `${index + 1}. ${item}`))
      .join("\n");
    const document: GeneratedDocument = {
      title,
      body,
      metadata: {
        template: request.template,
        audience: request.audience,
        generatedAt: new Date().toISOString()
      }
    };

    const entry = await this.persistSharedResult("documentGeneration", request, document, {
      highlightCount: request.highlights.length
    });
    return { document, cacheEntry: entry };
  }

  /** Retrieve a cached artefact if it exists on disk. */
  async getCachedValue<T>(key: string): Promise<T | undefined> {
    const entry = await readSharedCacheEntry<T>(this.cacheDir, key);
    return entry?.value;
  }

  /** Persist the payload using the shared cache helpers. */
  private async persistSharedResult<T>(
    toolName: string,
    payload: unknown,
    value: T,
    metadata?: Record<string, unknown>
  ): Promise<SharedCacheEntry<T>> {
    const key = this.buildCacheKey(toolName, payload);
    const entry: SharedCacheEntry<T> = {
      key,
      toolName,
      timestamp: new Date().toISOString(),
      value,
      metadata
    };
    await storeSharedCacheEntry(this.cacheDir, entry);
    return entry;
  }

  /** Hash the payload so cache keys remain compact yet deterministic. */
  private buildCacheKey(toolName: string, payload: unknown): string {
    const hash = crypto.createHash("sha1").update(JSON.stringify(payload)).digest("hex");
    return `${toolName}:${hash.slice(0, 12)}`;
  }

  /** Pick owners for the guidance workflow based on available roles. */
  private pickGuidanceOwners(request: GuidanceRequest): {
    primary: string;
    facilitator: string;
    executor: string;
  } {
    const productLead = PEOPLE.find((person) => person.role.includes("Product"))?.name ?? "Product Lead";
    const architect = PEOPLE.find((person) => person.role.includes("Architect"))?.name ?? "Architect";
    const delivery = PEOPLE.find((person) => person.role.includes("Engineer"))?.name ?? "Engineering Lead";
    if (request.urgency === "high") {
      return { primary: architect, facilitator: productLead, executor: delivery };
    }
    return { primary: productLead, facilitator: architect, executor: delivery };
  }

  /** Compose a descriptive title for generated documents. */
  private buildGeneratedTitle(request: DocumentGenerationRequest): string {
    const audience = request.audience === "executive" ? "Executive" : request.audience === "team" ? "Team" : "Stakeholder";
    if (request.template === "status-update") {
      return `${audience} Status Update`;
    }
    if (request.template === "handover") {
      return `${audience} Handover Notes`;
    }
    return `${audience} Kickoff Briefing`;
  }
}
