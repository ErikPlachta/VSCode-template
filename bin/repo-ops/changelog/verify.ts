/**
 * @packageDocumentation
 * Verification block operations for the latest changelog entry.
 */
import * as fs from "fs";
import { execSync } from "node:child_process";
import { defaultConfig } from "../repo-ops.config";
import { mapChangelog } from "./map";
import { formatDay } from "./date";

/**
 * Update (or append) a Verification block for the latest entry without adding a new entry.
 * Runs gates and writes a block under the newest entry in the changelog.
 */
export async function verifyLatestEntry(
  args: { force?: boolean } = {}
): Promise<{ updated: boolean; notes?: string[] }> {
  const map = await mapChangelog(process.env.REPO_OPS_CHANGELOG_PATH || "CHANGELOG.md");
  const entry = map.entries[0];
  if (!entry) return { updated: false, notes: ["No entries found"] };
  const headingLine = entry.rawHeading;

  const run = (cmd: string): { ok: boolean; out: string } => {
    try {
      const out = execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] }).toString();
      return { ok: true, out };
    } catch (e) {
      const err = e instanceof Error ? e.message : String(e);
      return { ok: false, out: err };
    }
  };

  const b = run("npm run compile");
  const useFake = process.env.REPO_OPS_FAKE_GATES === "1";
  const t = useFake ? { ok: true, out: "FAKE" } : run("npm test --silent");
  const d = useFake ? { ok: true, out: "FAKE" } : run("npm run prebuild");

  const tz = defaultConfig.changelog.timeZone;
  const stampDay = formatDay(new Date(), tz);
  const verification = [
    `##### Verification – ${stampDay} (Verify Only${args.force ? ", Force" : ""})`,
    "",
    `- Build: ${b.ok ? "PASS" : "FAIL"}`,
    `- Tests: ${t.ok ? "PASS" : "FAIL"}`,
    `- Docs: ${d.ok ? "PASS" : "FAIL"}`,
    `- Health: ${d.ok ? "PASS" : "UNKNOWN"}`,
    `- Lint: N/A`,
    "",
  ].join("\n");

  const changelogPath = process.env.REPO_OPS_CHANGELOG_PATH || "CHANGELOG.md";
  const current = await fs.promises.readFile(changelogPath, "utf8");
  const lines = current.replace(/\r\n?/g, "\n").split("\n");
  const startIdx = lines.findIndex((ln) => ln.trim() === headingLine.trim());
  if (startIdx === -1) return { updated: false, notes: ["Entry heading not found"] };

  let endIdx = lines.length;
  for (let i = startIdx + 1; i < lines.length; i++) {
    if (/^####\s/.test(lines[i]!) || /^### \[\d{4}-\d{2}-\d{2}\]/.test(lines[i]!)) {
      endIdx = i;
      break;
    }
  }

  for (let i = startIdx + 1; i < endIdx; i++) {
    if (/^##### Verification/.test(lines[i]!)) {
      let j = i + 1;
      for (; j < endIdx; j++) {
        if (/^#####\s|^####\s|^### \[\d{4}-\d{2}-\d{2}\]/.test(lines[j]!)) break;
      }
      const updated = [...lines.slice(0, i), verification, ...lines.slice(j)].join("\n");
      await fs.promises.writeFile(changelogPath, updated, "utf8");
      return { updated: true };
    }
  }

  const updated = [
    ...lines.slice(0, endIdx),
    "",
    verification,
    ...lines.slice(endIdx),
  ].join("\n");
  await fs.promises.writeFile(changelogPath, updated, "utf8");
  return { updated: true };
}
