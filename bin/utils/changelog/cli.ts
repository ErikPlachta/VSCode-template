#!/usr/bin/env tsx
/**
 * ChangeLogManager CLI
 *
 * Commands:
 *   tsx bin/utils/changelog/cli.ts insert-markers [--file CHANGELOG.md]
 *   tsx bin/utils/changelog/cli.ts add-entry --type docs --summary "Some summary" [--file CHANGELOG.md]
 *   tsx bin/utils/changelog/cli.ts add-outstanding --priority 3 --text "Document future work"
 */

import fs from "node:fs";
import process from "node:process";
import path from "node:path";
import { ChangeLogManager } from "./manager";

function parseArgs(argv: string[]) {
  const args: Record<string, string | boolean | undefined> = {};
  const positional: string[] = [];
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const val =
        argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : "true";
      args[key] = val;
    } else {
      positional.push(a);
    }
  }
  return { cmd: positional[0], args };
}

export function runCli(argv: string[] = process.argv) {
  const { cmd, args } = parseArgs(argv);
  const file = (args.file as string) || "CHANGELOG.md";
  const mgr = new ChangeLogManager({
    filePath: path.isAbsolute(file) ? file : path.join(process.cwd(), file),
  });

  if (cmd === "insert-markers") {
    mgr.ensureMarkers();
    console.log("Markers ensured.");
    return;
  }
  if (cmd === "add-entry") {
    const type = args.type as string;
    const summary = args.summary as string;
    const detailsRaw = (args.details as string) || "";
    const details = detailsRaw
      .split("||")
      .map((d) => d.trim())
      .filter(Boolean);
    const verifyRaw = (args.verification as string) || "";
    const verifyParts = verifyRaw
      .split("||")
      .map((p) => p.trim())
      .filter(Boolean);
    const verification = verifyParts.length
      ? { summary: verifyParts[0]!, lines: verifyParts.slice(1) }
      : undefined;
    if (!type || !summary) {
      console.error(
        'Usage: add-entry --type <type> --summary "Summary" [--details "Bullet A||Bullet B"] [--verification "Heading summary||Build: PASS||Tests: PASS"]'
      );
      process.exit(1);
    }
    mgr.addEntry(
      type,
      summary,
      details.length ? details : undefined,
      verification
    );
    console.log(
      `Entry added${
        details.length ? ` with ${details.length} detail line(s)` : ""
      }${verification ? " and verification block" : ""}.`
    );
    return;
  }
  if (cmd === "add-outstanding") {
    const priority = Number(args.priority);
    const text = args.text as string;
    const subRaw = (args.sub as string) || "";
    const subTasks = subRaw
      .split("||")
      .map((s) => s.trim())
      .filter(Boolean);
    if (![1, 2, 3].includes(priority) || !text) {
      console.error(
        'Usage: add-outstanding --priority <1|2|3> --text "Task description" [--sub "Sub task A||Sub task B"]'
      );
      process.exit(1);
    }
    mgr.addOutstanding(
      priority as 1 | 2 | 3,
      text,
      subTasks.length ? subTasks : undefined
    );
    console.log(
      `Outstanding task added under Priority ${priority}${
        subTasks.length ? ` with ${subTasks.length} sub-task(s).` : "."
      }`
    );
    return;
  }
  if (cmd === "add-current") {
    const text = args.text as string;
    const subRaw = (args.sub as string) || "";
    const subTasks = subRaw
      .split("||")
      .map((s) => s.trim())
      .filter(Boolean);
    if (!text) {
      console.error(
        'Usage: add-current --text "Task description" [--sub "Sub task A||Sub task B"]'
      );
      process.exit(1);
    }
    mgr.addCurrent(text, subTasks.length ? subTasks : undefined);
    console.log(
      `Current task added${
        subTasks.length ? ` with ${subTasks.length} sub-task(s).` : "."
      }`
    );
    return;
  }
  if (cmd === "export-json") {
    const json = mgr.exportJSON();
    const outPath = (args.out as string) || "";
    if (outPath) {
      fs.writeFileSync(outPath, json, "utf8");
      console.log(`Exported JSON to ${outPath}`);
    } else {
      console.log(json);
    }
    return;
  }

  if (cmd === "prune-completed") {
    const { pruned, removed } = mgr.pruneCompleted();
    if (pruned > 0) {
      console.log(`Pruned ${pruned} completed item(s) from Outstanding Tasks.`);
      if (args.verbose === "true") {
        for (const r of removed) console.log(`- ${r}`);
      }
    } else {
      console.log("No completed items found to prune.");
    }
    return;
  }

  console.error(
    "Unknown command. Use: insert-markers | add-entry | add-outstanding | add-current | export-json [--out <file>] | prune-completed [--verbose]"
  );
  process.exit(1);
}
// Only auto-run if executed directly
if (process.argv[1] && /changelog[\\/](cli|index)\.ts$/.test(process.argv[1])) {
  runCli();
}
