# Repo Ops (scaffolding)

Purpose: non-breaking CLI scaffolding to manage core governance files with dry-run+backup discipline.

Scope (planned):

- todo: add | complete | move | export-json | sync-from-changelog
- session: note | rotate --archive | lint
- changelog: reuse existing manager + helpers
- shared: markers | IO | backups | diff

Safety:

- All mutating commands support --dry-run (no writes) and auto-backup before write.
- Default behavior is read-only until specific subcommands are implemented.

Usage examples:

- Show help
  - `npm run repo:ops -- help`
- Sync TODOs from CHANGELOG Outstanding Tasks (dry-run, no writes)
  - `npm run repo:ops -- todo sync-from-changelog`
- Apply changes with backup
  - `npm run repo:ops -- todo sync-from-changelog --write`

Status: initial scaffolding only (no behavior yet).
