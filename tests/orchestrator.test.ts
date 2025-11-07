import { Orchestrator } from "../src/agents/orchestrator";

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

describe("Orchestrator", () => {
  beforeEach(() => {
    workspaceFoldersMock = undefined;
  });

  it("classifies metadata, record, and insight intents", () => {
    const orchestrator = new Orchestrator();
    expect(orchestrator.classify("Show schemas for departments").intent).toBe("metadata");
    expect(orchestrator.classify("List people with python skills").intent).toBe("records");
    expect(orchestrator.classify("Create an exploration plan").intent).toBe("insight");
  });

  it("routes metadata questions to the manager", async () => {
    const orchestrator = new Orchestrator();
    const response = await orchestrator.handle({
      topic: "departments",
      question: "Which schemas describe departments?"
    });
    expect(response.agent).toBe("relevant-data-manager");
    expect(response.intent).toBe("metadata");
    expect(response.summary).toMatch(/departments/i);
  });

  it("routes record lookups through the database agent", async () => {
    const orchestrator = new Orchestrator();
    const response = await orchestrator.handle({
      topic: "people",
      question: "List people with python skills",
      criteria: { skill: "python" }
    });
    expect(response.agent).toBe("database-agent");
    expect(response.intent).toBe("records");
    expect(response.summary).toMatch(/people/i);
  });

  it("produces exploration plans via the data agent", async () => {
    const orchestrator = new Orchestrator();
    const response = await orchestrator.handle({
      topic: "departments",
      question: "Create an exploration plan for the analytics team"
    });
    expect(response.agent).toBe("data-agent");
    expect(response.intent).toBe("insight");
    expect(response.payload).toHaveProperty("steps");
  });

  it("asks for clarification when topic is missing", async () => {
    const orchestrator = new Orchestrator();
    const response = await orchestrator.handle({
      question: "List records"
    });
    expect(response.intent).toBe("clarification");
    expect(response.agent).toBe("orchestrator");
  });
});
