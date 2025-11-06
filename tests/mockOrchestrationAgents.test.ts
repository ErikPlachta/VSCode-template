import { promises as fs } from "fs";
import * as os from "os";
import * as path from "path";
import { ensureCacheDirectory } from "../src/mcpCache";
import {
  DocumentGenerationRequest,
  DocumentSearchCriteria,
  GuidanceRequest,
  MockMcpOrchestrator,
  PeopleLookupFilters
} from "../src/mockOrchestrationAgents";

let workspaceFoldersMock: any[] | undefined;

jest.mock("vscode", () => ({
  workspace: {
    get workspaceFolders() {
      return workspaceFoldersMock;
    }
  }
}), { virtual: true });

describe("MockMcpOrchestrator", () => {
  let cacheDir: string;
  let tempDir: string;
  let orchestrator: MockMcpOrchestrator;

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "mock-orchestrator-"));
    workspaceFoldersMock = [{ uri: { fsPath: tempDir } }];
    cacheDir = await ensureCacheDirectory();
    orchestrator = new MockMcpOrchestrator(cacheDir);
  });

  afterEach(async () => {
    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it("filters people by skill and project while caching the result", async () => {
    const filters: PeopleLookupFilters = { skill: "analytics", projectId: "proj-churn" };
    const { people, cacheEntry } = await orchestrator.listPeople(filters);
    expect(people).not.toHaveLength(0);
    expect(people.every((person) => person.projects.includes("proj-churn"))).toBe(true);
    expect(cacheEntry.key).toMatch(/^peopleLookup:/);

    const cached = await orchestrator.getCachedValue<typeof people>(cacheEntry.key);
    expect(cached?.map((person) => person.id)).toEqual(people.map((person) => person.id));
  });

  it("returns linked project context and surfaces a shared cache entry", async () => {
    const { project, contributors, documents, cacheEntry } =
      await orchestrator.lookupProjectRelationships("proj-gateway");
    expect(project?.name).toContain("Gateway");
    expect(contributors.length).toBeGreaterThan(0);
    expect(documents.some((doc) => doc.category === "runbook")).toBe(true);
    expect(cacheEntry.metadata?.projectStatus).toBe("green");
  });

  it("performs document search and update flows", async () => {
    const criteria: DocumentSearchCriteria = { tag: "analytics" };
    const { documents, cacheEntry } = await orchestrator.findDocuments(criteria);
    expect(documents).toHaveLength(1);
    expect(cacheEntry.metadata?.total).toBe(1);

    const { document: updated } = await orchestrator.updateDocument(documents[0].id, {
      body: `${documents[0].body}\nUpdated for quarterly review.`,
      tags: [...documents[0].tags, "quarterly"]
    });
    expect(updated?.body).toContain("quarterly review");
    expect(updated?.tags).toContain("quarterly");
  });

  it("generates guidance plans with dynamic context", async () => {
    const request: GuidanceRequest = {
      goal: "Stabilise production incidents",
      urgency: "high",
      blockers: ["Missing runbooks"],
      preferredCollaborationStyle: "async"
    };
    const { plan, cacheEntry } = await orchestrator.requestGuidance(request);
    expect(plan.goal).toBe(request.goal);
    expect(plan.steps[0].description).toContain("Resolve blockers");
    expect(cacheEntry.metadata?.urgency).toBe("high");
  });

  it("produces templated documents and caches them for reuse", async () => {
    const request: DocumentGenerationRequest = {
      template: "status-update",
      audience: "executive",
      summary: "The programme remains on track with key risks mitigated.",
      highlights: ["Released beta to 20 customers", "De-risked data migration"]
    };
    const { document, cacheEntry } = await orchestrator.generateDocument(request);
    expect(document.title).toContain("Executive Status Update");
    expect(document.body).toContain("Key highlights");
    expect(cacheEntry.metadata?.highlightCount).toBe(2);
  });
});
