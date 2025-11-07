/**
 * @fileoverview Tests covering the {@link DataAgent} high-level behaviours.
 *
 * @module tests/dataAgent.test
 */

import { promises as fs } from "fs";
import * as os from "os";
import * as path from "path";
import { DataAgent } from "../src/agents/dataAgent";
import { DatabaseAgent } from "../src/agents/databaseAgent";
import { RelevantDataManagerAgent } from "../src/agents/relevantDataManagerAgent";

let workspaceFoldersMock: any[] | undefined;

jest.mock(
  "vscode",
  () => ({
    workspace: {
      get workspaceFolders() {
        return workspaceFoldersMock;
      }
    }
  }),
  { virtual: true }
);

/** Test suite verifying data agent orchestration helpers. */
describe("DataAgent", () => {
  beforeEach(() => {
    workspaceFoldersMock = undefined;
  });

  /**
   * Construct an agent with isolated cache directories for testing.
   *
   * @returns {Promise<{ agent: DataAgent; manager: RelevantDataManagerAgent; database: DatabaseAgent }>} Aggregated dependencies.
   * @example
   * const { agent } = await createAgent();
   */
  async function createAgent(): Promise<{ agent: DataAgent; manager: RelevantDataManagerAgent; database: DatabaseAgent }> {
    const cacheDir = await fs.mkdtemp(path.join(os.tmpdir(), "data-agent-test-"));
    const manager = new RelevantDataManagerAgent(Promise.resolve(cacheDir));
    const database = new DatabaseAgent(manager, Promise.resolve(cacheDir));
    const agent = new DataAgent(manager, database);
    return { agent, manager, database };
  }

  it("summarises topics with highlights", async () => {
    const { agent } = await createAgent();
    const overview = await agent.getTopicOverview("people");
    expect(overview.snapshot.id).toBe("people");
    expect(overview.highlightRecords.length).toBeGreaterThan(0);
    expect(overview.relationships.map((rel) => rel.targetCategory)).toEqual(
      expect.arrayContaining(["departments", "applications"])
    );
  });

  it("maps connections for a department", async () => {
    const { agent } = await createAgent();
    const connections = await agent.mapTopicConnections("departments", "dept-analytics");
    expect(connections.connections.length).toBeGreaterThan(0);
    expect(connections.narrative.join(" ")).toContain("Insight & Analytics");
  });

  it("builds exploration plans with recommended queries", async () => {
    const { agent } = await createAgent();
    const plan = await agent.buildExplorationPlan("applications", "How do we prepare for audits?");
    expect(plan.steps.length).toBeGreaterThan(1);
    expect(plan.recommendedQueries).toContain("Fetch critical applications");
    const resourceCategories = plan.supportingResources.map((entry) => entry.categoryId);
    expect(resourceCategories).toEqual(expect.arrayContaining(["applications", "departments"]));
  });

  it("finds cross-topic connections", async () => {
    const { agent } = await createAgent();
    const connection = await agent.findCrossTopicConnection("people", "person-001", "applications");
    expect(connection?.relatedRecords.map((record) => record.id)).toEqual(expect.arrayContaining(["app-aurora"]));
  });

  it("searches across categories", async () => {
    const { agent } = await createAgent();
    const results = agent.search("runbook");
    expect(results.length).toBeGreaterThan(0);
    const categories = results.map((result) => result.categoryId);
    expect(categories).toEqual(expect.arrayContaining(["companyResources"]));
  });

  it("exposes the underlying database agent", async () => {
    const { agent, database } = await createAgent();
    expect(agent.getDatabaseAgent()).toBe(database);
  });

  it("returns a toolkit bundle for a category", async () => {
    const { agent } = await createAgent();
    const toolkit = agent.getCategoryToolkit("departments");
    expect(toolkit.folder.root).toBe("relevant-data/departments");
    expect(toolkit.schemas.length).toBeGreaterThan(0);
    expect(toolkit.tests.map((test) => test.name)).toContain("Validate department schema");
    expect(toolkit.queries.map((query) => query.name)).toContain("List departments");
  });
});
