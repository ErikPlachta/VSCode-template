/**
 * @packageDocumentation
 * Write operations for CHANGELOG entries, including dry-run planning,
 * backups, structural validation, and optional verification block append.
 */
import * as fs from "fs";
import * as path from "path";
import { backupFile, ensureDir, readFileUtf8, writeFileUtf8 } from "../fs";
import { defaultConfig } from "../repo-ops.config";
import type { ApplyPlan, RepoPaths } from "../types";
import { runGates } from "../exec";
import { deriveFilesChangedList, getNumstat } from "../git";
import { validateChangelog, computeChainHash } from "../changelogIntegrity";
import { acquireLock, releaseLock } from "../lock";
import { scaffoldEntry } from "./scaffold";
import { formatDay, nl } from "./date";
import { mapChangelog } from "./map";

/** Arguments to write a CHANGELOG entry. */
export interface WriteEntryArgs {
  type: string;
  summary: string;
  context?: string;
  changesMade?: string;
  architectureNotes?: string;
  filesChanged?: string;
  includeFiles?: boolean;
  testingDetails?: string;
  impact?: string;
  write?: boolean;
  autoVerify?: boolean;
  autoVerifyForce?: boolean;
  verifyBlock?: boolean;
  filesIncludePrefixes?: string[];
  filesExcludePrefixes?: string[];
}

/** Insert a new entry block into CHANGELOG.md under the Logs section. */
function insertEntryIntoChangelog(
  content: string,
  entryBlock: string
): { next: string; inserted: boolean } {
  const src = nl(content);
  const beginMarker = "<!-- CHANGELOG:BEGIN:LOGS -->";
  const beginIdx = src.indexOf(beginMarker);
  if (beginIdx === -1) return { next: content, inserted: false };

  const today = formatDay(new Date(), defaultConfig.changelog.timeZone);
  const dayHeader = `### [${today}]`;

  const logsHeader = "## Logs";
  const logsIdx = src.indexOf(logsHeader, beginIdx);
  if (logsIdx === -1) return { next: content, inserted: false };
  const logsLineEnd = src.indexOf("\n", logsIdx + logsHeader.length);
  const logsInsertBase = logsLineEnd === -1 ? src.length : logsLineEnd + 1;

  const dayIdx = src.indexOf(dayHeader, logsInsertBase);
  if (dayIdx !== -1) {
    const dayLineEnd = src.indexOf("\n", dayIdx + dayHeader.length);
    const insertPos = dayLineEnd === -1 ? src.length : dayLineEnd + 1;
    const before = src.slice(0, insertPos);
    const after = src.slice(insertPos);
    const insertion =
      (before.endsWith("\n\n") ? "" : before.endsWith("\n") ? "\n" : "\n\n") +
      entryBlock +
      "\n\n";
    return { next: before + insertion + after, inserted: true };
  }

  const before = src.slice(0, logsInsertBase);
  const after = src.slice(logsInsertBase);
  const block = `\n${dayHeader}\n\n${entryBlock}\n\n`;
  return { next: before + block + after, inserted: true };
}

/**
 * Capture a concise list of changed files with added/removed counts.
 */
function gitChangedFilesList(
  cwd: string,
  options?: { includePrefixes?: string[]; excludePrefixes?: string[] }
): string | undefined {
  const numstat = getNumstat(cwd);
  if (!numstat) return undefined;
  const cfg = defaultConfig.changelog.filesChangedDefaults || {};
  const excludePrefixes = [
    ...(cfg.excludePrefixes || []),
    ...((options?.excludePrefixes as string[]) || []),
  ];
  const includePrefixes = [
    ...((cfg.includePrefixes as string[]) || []),
    ...((options?.includePrefixes as string[]) || []),
  ];
  return deriveFilesChangedList(numstat, { includePrefixes, excludePrefixes });
}

/**
 * Write a logs-only entry into CHANGELOG.md under the Logs section.
 */
export async function writeEntry(args: WriteEntryArgs): Promise<{
  changed: boolean;
  plans: ApplyPlan[];
  dryRun: boolean;
  notes?: string[];
}> {
  const repo: RepoPaths = defaultConfig.resolveRepoPaths(process.cwd());
  const allowed = new Set(defaultConfig.changelog.entryTypes);
  const type = allowed.has(args.type) ? args.type : "chore";

  const autoFiles =
    args.filesChanged !== undefined
      ? args.filesChanged
      : args.includeFiles
      ? gitChangedFilesList(repo.root, {
          includePrefixes: args.filesIncludePrefixes,
          excludePrefixes: args.filesExcludePrefixes,
        })
      : undefined;

  const shouldAutoVerify = (args.write ?? false) && args.autoVerify !== false;

  let b: { ok: boolean; out: string } | undefined;
  let t: { ok: boolean; out: string } | undefined;
  let d: { ok: boolean; out: string } | undefined;
  if (shouldAutoVerify) {
    const r = runGates({ fake: process.env.REPO_OPS_FAKE_GATES === "1" });
    b = { ok: r.buildOk, out: "" };
    t = { ok: r.testsOk, out: "" };
    d = { ok: r.docsOk, out: "" };
  }

  const extras = {
    changesMade: args.changesMade,
    architectureNotes: args.architectureNotes,
    filesChanged: autoFiles,
    testingDetails: shouldAutoVerify
      ? `Build: ${b!.ok ? "PASS" : "FAIL"}; Tests: ${
          t!.ok ? "PASS" : "FAIL"
        }; Docs: ${d!.ok ? "PASS" : "FAIL"}; Health: ${
          d!.ok ? "PASS" : "UNKNOWN"
        }; Lint: N/A`
      : args.testingDetails,
    impact: args.impact,
  };
  const block = scaffoldEntry(type, args.summary, args.context, extras);
  const content = await readFileUtf8(repo.changelog);

  // Acquire a filesystem lock only for actual write operations.
  // Dry-run validations must not hold or create locks.
  const willWrite = args.write ?? false;
  const lock = willWrite ? acquireLock(repo.root, "changelog") : undefined;
  let notes: string[] = [];
  if (willWrite && lock && !lock.acquired) {
    notes.push(
      "Could not acquire changelog write lock: " + lock.notes.join("; ")
    );
    return { changed: false, plans: [], dryRun: true, notes };
  } else if (lock && lock.notes.length) {
    notes.push(...lock.notes);
  }

  const preValidation = await validateChangelog(repo.changelog);
  const originalHash = preValidation.fileHash;
  if (preValidation.errors.length) {
    notes.push(
      "Pre-write validation failed; aborting write: " +
        preValidation.errors.join("; ")
    );
    if (lock) {
      releaseLock(lock.lockPath);
    }
    return { changed: false, plans: [], dryRun: true, notes };
  }

  const { next, inserted } = insertEntryIntoChangelog(content, block);
  if (!inserted) {
    return {
      changed: false,
      plans: [],
      dryRun: !willWrite,
      notes: ["Could not locate Logs section markers in CHANGELOG.md."],
    };
  }

  const plan: ApplyPlan = {
    filePath: repo.changelog,
    description: "Insert logs-only changelog entry",
    beforeSnippet: content.slice(0, 400),
    afterSnippet: next.slice(0, 400),
    wouldWriteBytes: Buffer.byteLength(next, "utf8"),
  };

  if (!willWrite)
    return {
      changed: true,
      plans: [plan],
      dryRun: true,
      notes: ["Dry-run: no files written", ...notes],
    };

  const backupRoot = path.join(repo.root, defaultConfig.backupDirName);
  await ensureDir(backupRoot);
  await backupFile(repo.changelog, backupRoot);

  const tmpPath = repo.changelog + ".tmp";
  await fs.promises.writeFile(tmpPath, next, "utf8");
  await fs.promises.rename(tmpPath, repo.changelog);

  const postValidation = await validateChangelog(repo.changelog);
  if (postValidation.errors.length) {
    notes.push(
      "Post-write validation failed; restoring backup. Errors: " +
        postValidation.errors.join("; ")
    );
    try {
      await writeFileUtf8(repo.changelog, content);
      notes.push("Rollback to pre-write state completed.");
    } catch (e) {
      notes.push(
        "Rollback failed: " + (e instanceof Error ? e.message : String(e))
      );
    }
    if (lock) {
      releaseLock(lock.lockPath);
    }
    return { changed: false, plans: [plan], dryRun: false, notes };
  }

  let finalContent = next;
  if (shouldAutoVerify) {
    const headingLine = block.split("\n", 1)[0] ?? "";
    const tz = defaultConfig.changelog.timeZone;
    const stampDay = formatDay(new Date(), tz);
    const verification = [
      `##### Verification – ${stampDay} (Auto Verify${
        args.autoVerifyForce ? ", Force" : ""
      })`,
      "",
      `- Build: ${b!.ok ? "PASS" : "FAIL"}`,
      `- Tests: ${t!.ok ? "PASS" : "FAIL"}`,
      `- Docs: ${d!.ok ? "PASS" : "FAIL"}`,
      `- Health: ${d!.ok ? "PASS" : "UNKNOWN"}`,
      `- Lint: N/A`,
      "",
    ].join("\n");
    const current = await fs.promises.readFile(repo.changelog, "utf8");
    const lines = current.replace(/\r\n?/g, "\n").split("\n");
    const startIdx = lines.findIndex((ln) => ln.trim() === headingLine.trim());
    if (startIdx !== -1) {
      let endIdx = lines.length;
      for (let i = startIdx + 1; i < lines.length; i++) {
        if (
          /^####\s/.test(lines[i]!) ||
          /^### \[\d{4}-\d{2}-\d{2}\]/.test(lines[i]!)
        ) {
          endIdx = i;
          break;
        }
      }
      if (args.verifyBlock) {
        let replaced = false;
        for (let i = startIdx + 1; i < endIdx; i++) {
          if (/^##### Verification/.test(lines[i]!)) {
            let j = i + 1;
            for (; j < endIdx; j++) {
              if (
                /^#####\s/.test(lines[j]!) ||
                /^####\s/.test(lines[j]!) ||
                /^### \[\d{4}-\d{2}-\d{2}\]/.test(lines[j]!)
              )
                break;
            }
            const updated = [
              ...lines.slice(0, i),
              verification,
              ...lines.slice(j),
            ].join("\n");
            const tmp2 = repo.changelog + ".tmp";
            await fs.promises.writeFile(tmp2, updated, "utf8");
            await fs.promises.rename(tmp2, repo.changelog);
            finalContent = updated;
            replaced = true;
            break;
          }
        }
        if (!replaced) {
          const updated = [
            ...lines.slice(0, endIdx),
            "",
            verification,
            ...lines.slice(endIdx),
          ].join("\n");
          const tmp2 = repo.changelog + ".tmp";
          await fs.promises.writeFile(tmp2, updated, "utf8");
          await fs.promises.rename(tmp2, repo.changelog);
          finalContent = updated;
        }
      }
    }
  }

  const outDir = path.join(repo.root, "out", "changelog");
  await ensureDir(outDir);
  const indexPath = path.join(outDir, "index.json");
  const hasConflictMarkers = /<<<<<<<|=======|>>>>>>>/.test(finalContent);
  if (hasConflictMarkers) {
    notes.push(
      "Detected unresolved merge conflict markers in CHANGELOG.md; resolve and rewrite."
    );
  }
  let prior: ChangelogJsonIndexV2 | undefined;
  if (fs.existsSync(indexPath)) {
    try {
      prior = JSON.parse(await fs.promises.readFile(indexPath, "utf8"));
      if (prior?.fileHash && prior.fileHash !== originalHash) {
        notes.push(
          "Changelog file modified outside repo-ops since last index update (hash mismatch before write)."
        );
      }
    } catch {
      notes.push("Failed to parse existing changelog index.json; recreating.");
    }
  }
  const parsed = await mapChangelog(repo.changelog);
  const latestValidation = await validateChangelog(repo.changelog);
  const newHash = latestValidation.fileHash;
  const chainHash = computeChainHash(prior?.chainHash, newHash);
  const index: ChangelogJsonIndexV2 = {
    schemaVersion: 2,
    generatedAt: new Date().toISOString(),
    changelogPath: repo.changelog,
    previousFileHash: prior?.fileHash,
    fileHash: newHash,
    previousChainHash: prior?.chainHash,
    chainHash,
    lastWriteTimestamp: parsed.generatedAt,
    validationWarnings: postValidation.warnings,
    validationErrors: postValidation.errors,
    entries: parsed.entries,
    entryCount: parsed.entries.length,
    days: parsed.days.map((d) => ({
      day: d.day,
      entryCount: d.entries.length,
    })),
    dayCount: parsed.days.length,
    warnings: notes.length ? notes : undefined,
  };
  try {
    await fs.promises.writeFile(
      indexPath,
      JSON.stringify(index, null, 2),
      "utf8"
    );
  } catch (e) {
    notes.push("Failed to write changelog index.json: " + (e as Error).message);
  }
  if (lock) {
    releaseLock(lock.lockPath);
  }
  return { changed: true, plans: [plan], dryRun: false, notes };
}

/** JSON index v2 structure with hash chain & validation metadata. */
interface ChangelogJsonIndexV2 {
  schemaVersion: number;
  generatedAt: string;
  changelogPath: string;
  previousFileHash?: string;
  fileHash: string;
  previousChainHash?: string;
  chainHash: string;
  lastWriteTimestamp?: string;
  validationWarnings: string[];
  validationErrors: string[];
  entries: ReturnType<typeof mapChangelog> extends Promise<infer R>
    ? R extends { entries: infer E }
      ? E
      : never
    : never;
  entryCount: number;
  days: Array<{ day: string; entryCount: number }>;
  dayCount: number;
  warnings?: string[];
}
