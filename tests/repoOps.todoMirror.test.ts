import { defaultMarkers } from "../bin/../bin/repo-ops/markers";
import {
  buildImportedBlock,
  upsertTodoMirror,
} from "../bin/../bin/repo-ops/todoMirror";

const TODO_BEGIN = defaultMarkers.todoImportedMirror.begin;
const TODO_END = defaultMarkers.todoImportedMirror.end;
const CL_BEGIN = defaultMarkers.changelogOutstanding.begin;
const CL_END = defaultMarkers.changelogOutstanding.end;

function sampleOutstanding(): string {
  return [CL_BEGIN, "- P1: Task A", "- P2: Task B", CL_END].join("\n");
}

describe("todoMirror", () => {
  test("buildImportedBlock wraps with TODO mirror markers and advisory", () => {
    const imported = buildImportedBlock(sampleOutstanding(), defaultMarkers);
    expect(imported.startsWith(TODO_BEGIN)).toBe(true);
    expect(imported.endsWith(TODO_END)).toBe(true);
    expect(imported).toContain(
      "READ-ONLY MIRROR – This section is imported from CHANGELOG Outstanding Tasks"
    );
    expect(imported).toContain(CL_BEGIN);
    expect(imported).toContain(CL_END);
  });

  test("upsertTodoMirror inserts when absent", () => {
    const imported = buildImportedBlock(sampleOutstanding(), defaultMarkers);
    const todo = ["# TODO", "", "Some intro"].join("\n");
    const { next, replaced } = upsertTodoMirror(todo, imported, defaultMarkers);
    expect(replaced).toBe(false);
    expect(next).toContain(TODO_BEGIN);
    expect(next).toContain(TODO_END);
  });

  test("upsertTodoMirror replaces existing mirror", () => {
    const oldBlock = buildImportedBlock(
      [CL_BEGIN, "- Old", CL_END].join("\n"),
      defaultMarkers
    );
    const newBlock = buildImportedBlock(sampleOutstanding(), defaultMarkers);
    const todo = ["# TODO", "", oldBlock, "", "Footer"].join("\n");
    const { next, replaced } = upsertTodoMirror(todo, newBlock, defaultMarkers);
    expect(replaced).toBe(true);
    // only one block present and contains new content
    expect((next.match(new RegExp(TODO_BEGIN, "g")) || []).length).toBe(1);
    expect(next).toContain("Task A");
    expect(next).not.toContain("Old");
  });
});
