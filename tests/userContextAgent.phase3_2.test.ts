import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import { UserContextAgent } from "@agent/userContextAgent";
import { IDS } from "@shared/ids";

function makeTempDir(prefix: string): string {
  const base = fs.mkdtempSync(path.join(os.tmpdir(), `${prefix}-`));
  return base;
}

describe("Phase 3.2 – External user data directory", () => {
  const origEnv: Record<string, string | undefined> = {};

  beforeAll(() => {
    origEnv.VSCODE_TEMPLATE_DATA_ROOT = process.env.VSCODE_TEMPLATE_DATA_ROOT;
    origEnv.HOME = process.env.HOME;
    origEnv.USERPROFILE = process.env.USERPROFILE;
  });

  afterAll(() => {
    if (origEnv.VSCODE_TEMPLATE_DATA_ROOT !== undefined) {
      process.env.VSCODE_TEMPLATE_DATA_ROOT = origEnv.VSCODE_TEMPLATE_DATA_ROOT;
    } else {
      delete process.env.VSCODE_TEMPLATE_DATA_ROOT;
    }
    if (origEnv.HOME !== undefined) {
      process.env.HOME = origEnv.HOME;
    } else {
      delete process.env.HOME;
    }
    if (origEnv.USERPROFILE !== undefined) {
      process.env.USERPROFILE = origEnv.USERPROFILE;
    } else {
      delete process.env.USERPROFILE;
    }
  });

  it("exports the current dataset to a destination folder", () => {
    const agent = new UserContextAgent();
    const dest = makeTempDir("uc-export");
    try {
      const exported = agent.exportUserData(dest);
      expect(Array.isArray(exported)).toBe(true);
      expect(exported.length).toBeGreaterThan(0);
      // Validate at least the first category has a category.json
      const first = exported[0];
      const categoryJson = path.join(dest, first, "category.json");
      expect(fs.existsSync(categoryJson)).toBe(true);
    } finally {
      // Cleanup
      fs.rmSync(dest, { recursive: true, force: true });
    }
  });

  it("imports user data into external userData root and toggles usingExternal", () => {
    // Redirect homedir to a temp sandbox so we don't touch the real profile
    const fakeHome = makeTempDir("uc-home");
    process.env.HOME = fakeHome; // POSIX
    process.env.USERPROFILE = fakeHome; // Windows

    const agent = new UserContextAgent();

    // Prepare a source directory with a minimal valid category folder
    const source = makeTempDir("uc-import-src");
    const categoryName = "demo";
    const catDir = path.join(source, categoryName);
    fs.mkdirSync(catDir, { recursive: true });
    fs.writeFileSync(
      path.join(catDir, "category.json"),
      JSON.stringify({
        id: "demo",
        name: "Demo",
        description: "Demo",
        config: {
          primaryKeys: ["id"],
          purpose: "demo",
          updateCadence: "manual",
          access: "public",
          requirements: {},
          orchestration: {
            summary: "demo",
            signals: ["demo"],
            agents: {
              relevantDataManager: {
                focus: "x",
                signals: ["x"],
                promptStarters: ["x"],
              },
              databaseAgent: {
                focus: "y",
                signals: ["y"],
                promptStarters: ["y"],
              },
              dataAgent: { focus: "z", signals: ["z"], promptStarters: ["z"] },
            },
          },
        },
      }),
      "utf8"
    );
    // optional files copied if present
    fs.writeFileSync(
      path.join(catDir, "records.json"),
      JSON.stringify([]),
      "utf8"
    );
    fs.writeFileSync(
      path.join(catDir, "relationships.json"),
      JSON.stringify([]),
      "utf8"
    );

    const imported = agent.importUserData(source);
    expect(imported).toContain("demo");

    const externalRoot = path.join(
      fakeHome,
      ".vscode",
      "extensions",
      IDS.extensionFullId,
      "userData"
    );
    const importedCategoryJson = path.join(
      externalRoot,
      categoryName,
      "category.json"
    );
    expect(fs.existsSync(importedCategoryJson)).toBe(true);

    const roots = agent.getActiveDataRoot();
    expect(roots.usingExternal).toBe(true);

    // Cleanup
    fs.rmSync(source, { recursive: true, force: true });
    fs.rmSync(fakeHome, { recursive: true, force: true });
  });
});
