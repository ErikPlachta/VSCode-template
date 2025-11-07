import { promises as fs } from "fs";
import * as os from "os";
import * as path from "path";
import {
  createRelevantDataManagerAgent,
  RelevantDataManagerAgent,
  UnknownCategoryError
} from "../src/agents/relevantDataManagerAgent";

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

describe("RelevantDataManagerAgent", () => {
  beforeEach(() => {
    workspaceFoldersMock = undefined;
  });

  async function createManager(): Promise<{ manager: RelevantDataManagerAgent; cacheDir: string }> {
    const cacheDir = await fs.mkdtemp(path.join(os.tmpdir(), "relevant-data-manager-test-"));
    const manager = new RelevantDataManagerAgent(Promise.resolve(cacheDir));
    return { manager, cacheDir };
  }

  it("lists categories and resolves aliases", async () => {
    const { manager } = await createManager();
    const categories = manager.listCategories();
    const catalogue = manager.getDatasetCatalogue();
    expect(categories).toHaveLength(catalogue.length);
    const departments = manager.getCategory("dept");
    expect(departments.name).toBe("Departments");
  });

  it("produces cached snapshots", async () => {
    const { manager, cacheDir } = await createManager();
    const snapshot = await manager.getOrCreateSnapshot("departments");
    expect(snapshot.recordCount).toBeGreaterThan(0);

    const cachedSnapshot = await manager.getOrCreateSnapshot("departments");
    expect(cachedSnapshot.recordCount).toEqual(snapshot.recordCount);

    const expectedCacheFile = path.join(
      cacheDir,
      "shared",
      "relevant-data_departments_snapshot.json"
    );
    const cacheExists = await fs
      .stat(expectedCacheFile)
      .then(() => true)
      .catch(() => false);
    expect(cacheExists).toBe(true);
  });

  it("persists a consolidated catalogue cache", async () => {
    const { manager, cacheDir } = await createManager();
    const cataloguePath = path.join(cacheDir, "shared", "relevant-data_catalogue.json");
    for (let attempt = 0; attempt < 5; attempt += 1) {
      try {
        await fs.stat(cataloguePath);
        break;
      } catch (error) {
        if (attempt === 4) {
          throw error;
        }
        await new Promise((resolve) => setTimeout(resolve, 25));
      }
    }
    const raw = await fs.readFile(cataloguePath, "utf8");
    const entry = JSON.parse(raw);
    expect(entry.value).toBeInstanceOf(Array);
    expect(entry.value[0]).toHaveProperty("id");
    expect(entry.metadata?.fingerprint).toBeDefined();
    const datasetIds = manager.getDatasetCatalogue().map((item) => item.id);
    expect(entry.value.map((item: { id: string }) => item.id)).toEqual(datasetIds);
  });

  it("resolves entity connections", async () => {
    const { manager } = await createManager();
    const connections = manager.getEntityConnections("people", "person-001");
    const relationshipNames = connections.connections.map((entry) => entry.relationship);
    expect(relationshipNames).toEqual(expect.arrayContaining(["department", "applications", "policies"]));

    const departmentConnection = connections.connections.find((entry) => entry.relationship === "department");
    expect(departmentConnection?.records[0].id).toBe("dept-analytics");
  });

  it("searches across categories", async () => {
    const { manager } = await createManager();
    const matches = manager.searchAcrossCategories("analytics");
    expect(matches.length).toBeGreaterThan(0);
    const categories = matches.map((match) => match.categoryId);
    expect(categories).toEqual(expect.arrayContaining(["departments", "people", "companyResources"]));
  });

  it("throws when an unknown topic is requested", async () => {
    const { manager } = await createManager();
    expect(() => manager.getCategory("unknown"))
      .toThrowError(UnknownCategoryError);
  });

  it("creates default manager via factory", () => {
    const manager = createRelevantDataManagerAgent();
    expect(manager.listCategories().length).toBeGreaterThan(0);
  });
});
