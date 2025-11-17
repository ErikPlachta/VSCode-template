# Repo Ops

Purpose: manage core governance files (TODO, CONTEXT-SESSION, CHANGELOG) with a dry-run-first approach and automatic backups on write. Behavior is fully config-, data-, and type-driven.

Implemented commands:

- `session rotate` – Archives `CONTEXT-SESSION.md` and writes a fresh template (dry-run by default).
- `session lint` – Validates `CONTEXT-SESSION.md` structure (read-only; exits non-zero on issues).

Safety:

- Mutating commands support `--write` to apply changes; otherwise they run as dry-run and print plans.
- Before any write, a timestamped backup is created under the configured backup directory.

Backups and temporary files:

- Persistent backups live under the configured backup directory (default: `.repo-ops-backups/changelog-backup/`).
- Each changelog write produces a timestamped `.bak` archive in that folder via the shared `backupFile` helper.
- A single temporary file (`CHANGELOG.next.tmp`) is used during atomic writes and kept inside the same backup directory.
- No `test_tmp` folders are used; all changelog backup artifacts live under the backup directory for easy discovery and cleanup.

Usage examples:

- Show help: `npm run repo:ops -- help`
- Rotate session file (dry-run): `npm run repo:ops -- session rotate`
- Rotate session file (apply): `npm run repo:ops -- session rotate --write`
- Lint current session file: `npm run repo:ops -- session lint`

Configuration (central, typed):

Repo-ops uses a single source of truth at `bin/repo-ops/repo-ops.config.ts`.

- Path resolver: computes absolute repo paths for `CHANGELOG.md` and `TODO.md`.
- Backup directory name: where timestamped backups are written.
- Session template: default content for a fresh `CONTEXT-SESSION.md`.

Reference:

```typescript
import { defaultConfig } from "./repo-ops.config";

// Example reads
const repo = defaultConfig.resolveRepoPaths(process.cwd());
const backupDir = defaultConfig.backupDirName;
const sessionTemplate = defaultConfig.sessionTemplate();
```

Design principles:

- No hardcoded governance strings in modules; all derived from config.
- Dry-run by default; every mutation creates a backup before writing.
- Small, testable helpers (parse/IO/markers) wired via types.

## Changelog Integrity (Schema v2)

The changelog pipeline enforces a multi-stage integrity workflow to prevent data loss and surface anomalies:

1. Pre-Validation: structural scan (markers, conflict markers, timestamp uniqueness, day ordering).
2. In-Memory Plan: entry insertion grouped under current day header (newest-first).
3. Atomic Write: backup original; write temp file `<CHANGELOG>.tmp`; rename for atomic replacement.
4. Post-Validation: re-scan; rollback on error (restore backup) with diagnostic notes.
5. Index Update: `out/changelog/index.json` (schemaVersion: 2) includes hash chain, validation results, counts.

Hash Chain: `chainHash = sha256(previousChainHash + fileHash)`; detects manual edits outside CLI (hash mismatch prior to write).

### Commands

- `changelog scaffold` – Emit scaffold block (no mutation).
- `changelog write --type <type> --summary "..." [--context "..."] [--write|--validate]` – Insert logs-only entry (use `--write` to apply, `--validate` for dry-run).
- `changelog map [--filter-day YYYY-MM-DD] [--filter-type <type>] [--pretty]` – Emit derived navigation map.
- `changelog verify` – Validate structure; exits non-zero on errors.

### JSON Index Fields (schemaVersion: 2)

`schemaVersion`, `generatedAt`, `changelogPath`, `previousFileHash`, `fileHash`, `previousChainHash`, `chainHash`, `lastWriteTimestamp`, `validationWarnings`, `validationErrors`, `entries`, `entryCount`, `days`, `dayCount`, `warnings`.

### Validation Rules

- Required markers: `<!-- CHANGELOG:BEGIN:LOGS -->`, `## Logs`.
- Timestamp uniqueness: duplicates are errors.
- Day ordering: newest-first; deviations warn.
- Conflict markers: produce errors; abort or rollback.
- Orphan entry headings (before any day header): warning.

### Rollback

Post-write validation failure triggers rollback to pre-write content; a note confirms success. If rollback fails, the CLI surfaces the failure reason.

### Future Enhancements (Planned)

- Lock file for concurrent write protection.
- Incremental parsing for very large files.
- Diff subcommand summarizing changes between writes.
- Shrink guard requiring `--force` if file size drops >10%.
