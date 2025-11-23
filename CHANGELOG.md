---
title: Changelog
summary: Central log of requests, changes, solutions, and goals managed by VS Code Copilot Chat.
roles:
  - engineering
  - documentation
associations:
  - changelog
  - history
  - reference
  - documentation
---

<!-- BEGIN:COPILOT-INSTRUCTIONS -->

## Copilot Instructions

All changelog entries MUST be created via the repo-ops CLI. Manual edits are restricted to typo fixes, merge conflict resolution (without altering timestamps/content semantics), and adding a missing Verification block if the CLI did not supply one. Any other manual modification is prohibited.

### Required Flow

Flow: Plan → Verify → Scaffold → Write → Verify Block → Reconcile.

#### Ordered Steps

- Plan in `TODO.md` (add/update task; set status).
- Verify gates:

  - `npm run compile`
  - `npm run test`
  - (Optional) `npm run prebuild`

- Scaffold (dry-run):
  - Always use the repo-ops CLI (`changelog scaffold` / `changelog write`) to generate entries; never hand‑craft headings.
  - CLI applies `America/New_York` timezone. Do not adjust timestamps to other zones in the changelog.
  - Never insert a future day header (date greater than local current date). All entries reflect actual completion time.
  - Manual edits allowed ONLY for typo fixes, merge conflict resolution, or adding a missing Verification block—NOT timestamp changes (except to correct an erroneous manual insertion).
  - If an incorrect future date is discovered, recreate the entry via CLI with the correct current timestamp or, if recreating is impractical, adjust the heading date/time and verification block date to the actual completion moment.
  - Add a follow-up task in `TODO.md` when correcting timestamps to maintain audit visibility.

### Full Payload Requirement (Authoring Guidance)

Always invoke `npm run repo:ops -- changelog write` with the full set of arguments, passing all text inline (no shell variables like `CTX`, no heredocs). This ensures consistent, complete entries with deterministic quoting across environments.

Required flags for every entry:

- `--type <feat|fix|docs|refactor|test|perf|ci|build|style|chore>`
- `--summary "<short summary>"`
- `--context '<multi-line Problem/Context markdown>'` (inline, single-quoted; may span lines)
- `--changes '<multi-line bullet list>'` (inline)
- `--architecture '<multi-line notes>'` (inline)
- `--testing '<concise line: Build/Tests/Docs/Health/Lint>'` (inline)
- `--impact '<multi-line outcomes>'` (inline)
- `--write`

Notes:

- Do not use shell variables (e.g., `CTX`) or heredocs for these fields; supply text inline within single quotes to preserve newlines exactly.
- Keep lines under ~120 characters where reasonable for clean diffs.
- Use `-` for bullets; avoid `#` in inline text to prevent confusion with entry headings.
- Do not include verification assertions inside `--context`; use a Verification block when appropriate.

#### Inline full-args example

```bash
npm run repo:ops -- changelog write \
  --type docs \
  --summary "Refocus follow-up: complete details and next objectives" \
  --context 'We finalized the planning pivot from repo-ops cleanup to agent design. Active work is consolidated into a single Current P1 in `TODO.md`, and `CONTEXT-SESSION.md` now reflects the focus, gates status, and PR context to keep execution aligned with governance.' \
  --changes '- Consolidated Current work in TODO.md to one P1 parent (Finalize Agent Design); moved types‑purity/cleanup tasks to Next
- Updated CONTEXT-SESSION Focus Summary/Detail with agent-design plan, gates PASS note, and active PR reference
- Verified gates: compile/test/prebuild all PASS; no runtime code changes' \
  --architecture '- Guardrails: agent isolation, data-driven behavior; single JSON-RPC handler
- Planning hygiene: single Current parent item; logs-only changelog entries via CLI' \
  --testing 'Build: PASS; Tests: PASS (51/53 suites; 335/337 tests; 2 skipped); Docs: PASS; Health: PASS; Lint: N/A' \
  --impact '- Clear next steps focused on DatabaseAgent init fix and E2E verification
- Aligns tasks and session context with governance; reduces planning noise' \
  --write
```

#### Troubleshooting

- Literal `\n` characters appear in output: Ensure the string is single-quoted and includes real line breaks, not escaped sequences.
- Headings render as plain text: Ensure inline content does not start with `#` (reserve headings for the entry title only).
- Backticks or `$` expand unexpectedly: Use single quotes for all multi-line values to prevent shell expansion.

All entries must be created via the CLI with inline full-argument payloads—no manual editing of Logs content afterward.

### Verification Block Format

```markdown
##### Verification – (<label>)

- Build: PASS | FAIL
- Tests: PASS | FAIL (X passed, Y skipped)
- Lint: PASS | FAIL
- Docs: PASS | FAIL
- Health: PASS | FAIL
- Coverage: <value|N/A>
```

### Allowed Manual Edits

- Typos / grammar
- Merge conflict resolution (retain timestamps)
- Add missing Verification block

All other changes must be performed via the CLI.

### Final Notes for Copilot

- Source of truth for completed changes only (entries via CLI).
- Tasks reside in `TODO.md`; session focus lives in `CONTEXT-SESSION.md`.
- Manual edits limited to Allowed Manual Edits above.

### Lock Handling (Changelog Writes)

- Repo-ops uses a filesystem lock at `out/changelog/changelog.write.lock` to guard concurrent writes.
- If a changelog write fails with a lock error, first wait a few minutes and retry; most locks are short-lived.
- If a lock becomes clearly stale (e.g., prior CLI run was interrupted), you may manually delete `out/changelog/changelog.write.lock` and rerun the CLI.
- A dedicated `repo:ops` flag to clear stale changelog locks is tracked as a TODO; once implemented, prefer that CLI over manual deletion.

<!-- END:COPILOT-INSTRUCTIONS -->
<!-- CHANGELOG:BEGIN:LOGS -->

## Logs
