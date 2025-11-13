# Repo Ops

Purpose: manage core governance files (TODO, CONTEXT-SESSION, CHANGELOG) with a dry-run-first approach and automatic backups on write. Behavior is fully config-, data-, and type-driven.

Implemented commands:

- `session rotate` – Archives `CONTEXT-SESSION.md` and writes a fresh template (dry-run by default).
- `session lint` – Validates `CONTEXT-SESSION.md` structure (read-only; exits non-zero on issues).

Safety:

- Mutating commands support `--write` to apply changes; otherwise they run as dry-run and print plans.
- Before any write, a timestamped backup is created under the configured backup directory.

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
