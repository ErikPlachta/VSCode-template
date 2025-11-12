/**
 * @packageDocumentation
 * Generate actionable TODO checklist items from CHANGELOG Outstanding Tasks.
 *
 * Dry-run by default; preserves the imported mirror block and writes a separate
 * generated block scoped by distinct markers to avoid collisions.
 */
import * as path from "path";
import { readFileUtf8, writeFileUtf8, backupFile, ensureDir } from "./fs";
import { extractOutstandingTasks, resolveRepoPaths } from "./changelogExtract";
import { normalizeNewlines, upsertSection } from "./parse";
import type {
  MarkerBounds,
  MarkerSet,
  RepoPaths,
  SyncOptions,
  SyncResult,
  ApplyPlan,
} from "./types";

/**
 * Marker bounds used for the generated action items block in TODO.md.
 */
const ACTIONS_MARKERS: MarkerBounds = {
  begin: "<!-- TODO:BEGIN:GENERATED_ACTION_ITEMS -->",
  end: "<!-- TODO:END:GENERATED_ACTION_ITEMS -->",
};

/**
 * Convert the marker-inclusive Outstanding Tasks section into a simple
 * checklist block. This is intentionally conservative and treats any
 * Markdown list item (e.g., "- text") as an actionable item.
 *
 * @param {string} outstandingSection - Marker-inclusive Outstanding Tasks from CHANGELOG.
 * @returns {string} - Markdown content for action items (without outer markers).
 */
export function transformOutstandingToActions(
  outstandingSection: string
): string {
  const src = normalizeNewlines(outstandingSection);
  const lines = src.split("\n");
  const body: string[] = [];
  let inBody = false;
  for (const line of lines) {
    if (line.includes("CHANGELOG:BEGIN:OUTSTANDING_TASKS")) {
      inBody = true;
      body.push(
        "### Action Items (generated from CHANGELOG Outstanding Tasks)"
      );
      body.push("");
      continue;
    }
    if (line.includes("CHANGELOG:END:OUTSTANDING_TASKS")) {
      break;
    }
    if (!inBody) continue;
    // Convert list items to checkboxes; keep headings as-is for context
    if (/^\s*[-*]\s+/.test(line)) {
      const checkbox = line.replace(/^\s*[-*]\s+/, "- [ ] ");
      body.push(checkbox);
    } else if (/^\s*#{2,6}\s+/.test(line)) {
      body.push(line);
    } else if (line.trim().length === 0) {
      body.push("");
    } else {
      // Preserve other context lines with a small indent
      body.push(`  ${line}`);
    }
  }
  return body.join("\n").trimEnd();
}

/**
 * Construct the complete marker-inclusive actions block for TODO.md.
 *
 * @param {string} actions - The actions markdown (no outer markers).
 * @returns {string} - Marker-inclusive actions block.
 */
export function buildActionsBlock(actions: string): string {
  return [
    ACTIONS_MARKERS.begin,
    "",
    actions.trimEnd(),
    "",
    ACTIONS_MARKERS.end,
  ].join("\n");
}

/**
 * Upsert the generated actions block into the TODO.md content.
 *
 * @param {string} todoContent - Existing TODO.md content.
 * @param {string} actionsBlock - Marker-inclusive actions block.
 * @returns {{ next: string; replaced: boolean }} - The next content and replacement flag.
 */
export function upsertActionsBlock(
  todoContent: string,
  actionsBlock: string
): { next: string; replaced: boolean } {
  return upsertSection(todoContent, actionsBlock, ACTIONS_MARKERS);
}

/**
 * Read CHANGELOG Outstanding Tasks, transform into action items, and upsert into TODO.md.
 *
 * @param {Partial<SyncOptions>} options - Optional overrides (write, markers, repo paths).
 * @returns {Promise<SyncResult>} - Operation result with plan details.
 */
export async function generateActionsFromChangelog(
  options?: Partial<SyncOptions>
): Promise<SyncResult> {
  const repo: RepoPaths = options?.repo ?? resolveRepoPaths(process.cwd());
  // markers optional for symmetry with other ops (unused here)
  const write = options?.write ?? false;

  const changelogContent = await readFileUtf8(repo.changelog);
  const todoContent = await readFileUtf8(repo.todo);

  const extracted = extractOutstandingTasks(changelogContent, {
    changelogOutstanding: {
      begin: "<!-- CHANGELOG:BEGIN:OUTSTANDING_TASKS -->",
      end: "<!-- CHANGELOG:END:OUTSTANDING_TASKS -->",
    },
    // dummy to satisfy type, not used here
    todoImportedMirror: { begin: "", end: "" },
  } as unknown as MarkerSet);
  if (!extracted.ok) {
    return {
      changed: false,
      plans: [],
      dryRun: !write,
      notes: [
        extracted.message ??
          "Failed to extract outstanding tasks from changelog",
      ],
    };
  }

  const actions = transformOutstandingToActions(extracted.content);
  const block = buildActionsBlock(actions);
  const { next, replaced } = upsertActionsBlock(todoContent, block);

  if (next === todoContent) {
    return {
      changed: false,
      plans: [],
      dryRun: !write,
      notes: ["No changes needed – actions block already up to date."],
    };
  }

  const plan: ApplyPlan = {
    filePath: repo.todo,
    description: replaced
      ? "Replace generated action items section"
      : "Insert generated action items section",
    beforeSnippet: todoContent.slice(0, 400),
    afterSnippet: next.slice(0, 400),
    wouldWriteBytes: Buffer.byteLength(next, "utf8"),
  };

  if (!write) {
    return {
      changed: true,
      plans: [plan],
      dryRun: true,
      notes: ["Dry-run: no files written"],
    };
  }

  const backupRoot = path.join(repo.root, ".repo-ops-backups");
  await ensureDir(backupRoot);
  await backupFile(repo.todo, backupRoot);
  await writeFileUtf8(repo.todo, next);
  return {
    changed: true,
    plans: [plan],
    dryRun: false,
    notes: ["Applied changes with backup created."],
  };
}
