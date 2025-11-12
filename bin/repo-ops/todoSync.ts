/**
 * @packageDocumentation
 * Sync logic to mirror CHANGELOG Outstanding Tasks into TODO.md as a
 * read-only block. Default behavior is dry-run; `--write` applies with backup.
 */
import * as path from "path";
import { readFileUtf8, writeFileUtf8, backupFile, ensureDir } from "./fs";
import { defaultMarkers } from "./markers";
import { resolveRepoPaths, extractOutstandingTasks } from "./changelogExtract";
import { buildImportedBlock, upsertTodoMirror } from "./todoMirror";
import type { MarkerSet, SyncOptions, SyncResult, ApplyPlan } from "./types";

// Repo path resolution moved to changelogExtract.ts

/**
 * Construct a read-only mirror block, wrapped by TODO mirror markers.
 * The incoming markdown is expected to already include the changelog markers
 * so context is preserved.
 *
 * @param {string} markdown - Extracted outstanding-tasks section from CHANGELOG.
 * @param {MarkerSet} markers - Marker set to use for the TODO mirror block.
 * @returns {string} - Marker-inclusive block to upsert into TODO.md.
 */
// mirror block construction moved to todoMirror.ts

/**
 * Mirror Outstanding Tasks from CHANGELOG into TODO.md in a read-only block.
 *
 * @param {Partial<SyncOptions>} options - Optional overrides for markers, repo paths, and write mode.
 * @returns {Promise<SyncResult>} - Detailed result with plans and notes. Default is dry-run.
 */
export async function syncFromChangelog(
  options?: Partial<SyncOptions>
): Promise<SyncResult> {
  const repo = options?.repo ?? resolveRepoPaths(process.cwd());
  const markers: MarkerSet = options?.markers ?? defaultMarkers;
  const write = options?.write ?? false; // default dry-run

  const changelogContent = await readFileUtf8(repo.changelog);
  const todoContent = await readFileUtf8(repo.todo);

  const extracted = extractOutstandingTasks(changelogContent, markers);
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

  const importedBlock = buildImportedBlock(extracted.content, markers);
  const { next, replaced } = upsertTodoMirror(
    todoContent,
    importedBlock,
    markers
  );

  if (next === todoContent) {
    return {
      changed: false,
      plans: [],
      dryRun: !write,
      notes: ["No changes needed – TODO mirror already up to date."],
    };
  }

  const plan: ApplyPlan = {
    filePath: repo.todo,
    description: replaced
      ? "Replace imported-from-changelog section"
      : "Insert imported-from-changelog section",
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

  // Mutating path: back up then write
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
