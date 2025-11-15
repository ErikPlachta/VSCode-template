# Backup of Changelog Notes

This conatins the instructions that wre in the CHANGELOG.md between the markers
`<!--BEGIN: COPILIOT-INSTRUCTIONS> <!--END: COPILIOT-INSTRUCTIONS -->`. I've removed
the instructions because it's not working. Copilot Chat is having to manually update
details after the header is created 100% of the time.

## Logic with Potential Issues

The below should not be used beyond a reference of what it was before.

### Full Workflow Example (End-to-End)

This example shows a complete, compliant flow: plan task, verify gates, scaffold, write with multi-line context, then add a Verification block.

- Plan (TODO.md)
  Add a P2 item: "Docs: polish multiline context guidance".

- Verify Gates

  ```bash
  npm run compile
  npm run test
  ```

- Prepare Context (Pattern A)

  ```bash
  CTX=$(cat <<'EOF'
  Improve multi-line context authoring by:
  ## Motivation
  - Prevent ANSI C quoting misuse
  - Provide validation & troubleshooting steps

  ## Changes
  1. Added newline validator warnings to repo-ops CLI
  2. Added full workflow example section

  ## Risks
  - Minimal: docs-only plus warning messages
  EOF
  )
  ```

- Scaffold (Dry-Run)

  ```bash
  npm run repo:ops -- changelog scaffold --type docs --summary "Polish multiline context guidance" --context "$CTX"
  ```

- Write (Apply)

  ```bash
  npm run repo:ops -- changelog write --type docs --summary "Polish multiline context guidance" --context "$CTX" --write
  ```

- Add Verification Block (Manual until automated)
  Append a block directly below the new entry following the required format.

- Reconcile
  Mark the TODO item complete in `TODO.md`.

**Use this template whenever adding documentation or structural governance changes.**

### Scaffold vs Write & Verification

- `scaffold` prints the exact markdown block it would create; it does NOT modify files.
- `write` performs a dry-run by default (prints a plan and "CHANGES (dry-run)"). Add `--write` to apply.
- Success signal: look for `changelog write: APPLIED` and a plan line with the path to `CHANGELOG.md`.
- Idempotence: do not re-run `--write` for the same summary multiple times in a row; it will create duplicates.
- Windows Git Bash tip: put `--write` immediately after `write` to avoid tokenization issues.

### CLI Capabilities & Limits

- Supported fields: `--type`, `--summary`, optional `--context` (becomes the Problem/Context line).
- The CLI scaffolds placeholder sections (Changes Made, Architecture Notes, Files Changed, Testing, Impact). It does not populate them automatically.
- Best practice: include any detailed bullets you want preserved inside your `--context` block, or plan a follow-up commit to replace placeholders.
- Verification blocks are not auto-generated; append them manually under the entry.

### Changelog Mapping & Diff (Observation Tools)

Non‑mutating commands for inspection and audit:

```bash
# Full map (days + entries as JSON)
npm run repo:ops -- changelog map --pretty

# Attempt fast incremental map (uses prior out/changelog/index.json if schema v2)
npm run repo:ops -- changelog map --fast --pretty

# Diff vs prior index (added / removed / modified entries + day changes)
npm run repo:ops -- changelog diff --pretty

# Structural integrity verification
npm run repo:ops -- changelog verify
```

Guidelines:

- Run `verify` after each applied `write` for structural or high‑impact changes.
- `map --fast` transparently falls back to full parse if prior index missing/incompatible.
- `diff` requires an existing index; if missing it emits an error JSON directing a `write` first.
- Only `write` mutates `CHANGELOG.md`; mapping/diff/verify are read‑only.

### Index Auto-Regeneration & Manual Refresh

The JSON index at `out/changelog/index.json` (schema v2) is regenerated automatically ONLY after a successful `changelog write --write` operation. Observation commands (`map`, `map --fast`, `diff`, `verify`) never update the index; they read it.

Key points:

- Auto update trigger: `write --write` (after post‑validation passes).
- Contents: hash chain (previous/current), validation results, day + entry counts, and full entry metadata.
- Override caveat: If `REPO_OPS_CHANGELOG_PATH` is set (used in tests to target a synthetic changelog), the index still writes to `out/changelog/index.json`, but its `changelogPath` will point at the override file. This can make the index appear “wrong” for the real `CHANGELOG.md`.
- Read-only commands: `map`, `map --fast`, `diff`, `verify` do not refresh the index; they may report stale data if an override was previously used.

Manual refresh (adds a normal entry):

```bash
unset REPO_OPS_CHANGELOG_PATH
npm run repo:ops -- changelog write --type chore --summary "Refresh changelog index" --context "Rebuilding index after synthetic override" --write
```

Hard reset then refresh:

```bash
rm -f out/changelog/index.json
unset REPO_OPS_CHANGELOG_PATH
npm run repo:ops -- changelog write --type chore --summary "Recreate missing index" --context "Deleted stale index; forcing full regeneration." --write
```

Planned enhancement (not yet implemented): a `reindex` subcommand to rebuild the index without adding an entry, and a safeguard to skip writing the canonical index when an override path is active.

Troubleshooting:

- Index shows unexpected entries: Check `echo "$REPO_OPS_CHANGELOG_PATH"`; if non-empty, perform a manual refresh with override unset.
- `diff` reports no changes after manual file edits: Ensure a prior `write --write` created the baseline index.
- Chain hash mismatch note: Indicates direct manual edits or an override mismatch; perform a manual refresh.

### CTX vs Inline `--context`

- Use CTX (heredoc variable) for multi-line, formatted context. It preserves newlines reliably across shells.
- Inline `--context "..."` is fine for short, single-line summaries but will leave placeholders to fill manually.
- If your heredoc variable prints to console during scaffold but `CHANGELOG.md` isn’t updated, you likely skipped the `--write` apply step. Re-run with `--write` and verify `APPLIED`.

### Example Usage

#### Pattern A: Variable + Heredoc (preferred, safest)

```bash
CTX=$(cat <<'EOF'
Introduce a cache warmup step before tests to reduce first-run latency.

## Drivers
- Cold start adds ~45s to CI jobs
- Repeated dependency resolution each workflow

## Goals
1. Pre-fetch heavy metadata (schema + category descriptors)
2. Keep solution data-driven (no hardcoded paths)

## Non-Goals
- Changing validation semantics
- Altering existing test ordering
EOF
)

npm run repo:ops -- changelog scaffold \
  --type feat \
  --summary "Add pipeline cache warmup" \
  --context "$CTX"
```

#### Pattern B: Direct Heredoc Substitution (concise inline)

```bash
npm run repo:ops -- changelog write \
  --type refactor \
  --summary "Unify JSON-RPC handlers" \
  --context "$(cat <<'EOF'
Unify duplicate JSON-RPC handlers scattered across server transports.

## Motivation
- Reduce drift between stdio and (optional) HTTP path
- Centralize error normalization

## Approach
1. Create single `dispatchJsonRpc` with typed map
2. Reuse for initialize/tools/list/tools/call

### Risk Mitigation
- Keep existing tests; add parity suite for HTTP disabled mode
- No public shape changes (JSON-RPC 2.0 preserved)
EOF
)" \
  --write
```

#### Pattern C: External File (best for very large narratives)

```bash
cat > /tmp/context.md <<'EOF'
Introduce streaming verification block generation.

## Why
- Manual insertion is error-prone
- Enables consistent PASS/FAIL summaries

## Outline
* Collect build/test/lint results
* Render template under entry
* Fail gracefully when a metric is missing
EOF

npm run repo:ops -- changelog scaffold --type feat --summary "Streaming verification block" --context "$(cat /tmp/context.md)"
```
