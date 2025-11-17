# Repo-Ops Changelog Write Investigation (Phase 7 Entry Missing)

## Summary

`changelog write --write` reports `APPLIED` but new entries ("Phase 7: Types cleanup & parity verification" and "CLI debug insertion test") do NOT appear in `CHANGELOG.md`. File byte size increases (~500 bytes) without visible new entry lines. Grep queries for summary/context substrings return no matches.

## Observations

- CLI output: `changelog write: APPLIED` with plan referencing `CHANGELOG.md` path.
- After each APPLIED, file size grows (306117 → 306679 → 307190 bytes).
- New headings not present: count of `#### 2025-11-14` entries remains 4.
- Grep for summary (`Types cleanup`, `CLI debug insertion test`) yields no results.
- Grep for context substrings ("Phase 8: Scan", "validation runtime extraction") also returns no results.
- Existing entries show expected pattern: `#### <timestamp> <type>: <summary>`.

## Code Review Findings (`bin/repo-ops/changelog.ts`)

- `writeEntry()` always sets `changed: true` when `insertEntryIntoChangelog` returns `inserted: true`.
- `insertEntryIntoChangelog()`:
  - Normalizes newlines via `nl()` (CRLF → LF).
  - Locates day header `### [YYYY-MM-DD]` after `## Logs`.
  - When header exists, computes `insertPos` at end of header line and constructs `insertion` containing `entryBlock`.
- `scaffoldEntry()` builds an entry beginning with `#### <timestamp> <type>: <summary>`; summary is direct string (no transformation beyond trim).

## Hypotheses

1. CRLF Normalization Only: Size change caused solely by converting existing CRLF to LF (reduces bytes) but simultaneous insertion expected to increase; mismatch indicates partial rewrite or dual effects.
2. Hidden Unicode / Encoding: Entry content written but contains characters causing grep failure. Unlikely (summary plain ASCII). Size delta (~500 bytes) consistent with expected entry length.
3. Multiple CHANGELOG Files: Write path correct; no duplicate file found. (Needs explicit directory listing confirm.)
4. Insertion Logic Bug: `insertPos` may be miscomputed (e.g., capturing full day block) and insertion may be overwritten by subsequent slice concatenation; yet that should still inject entry.
5. Editor/Tool Caching: `read_file`/`grep_search` tools may be returning stale content after rapid writes. (Need forced re-read or verification via independent scan.)
6. Post-Write Hook Reverting Entry: No code path indicates subsequent mutation; tests do not auto-rewrite entries.

## Next Diagnostic Steps

1. Force raw read of full file after write (not just ranges) to confirm presence of hidden content. (Potential large output; may target mid-file region where insertion expected.)
2. Add temporary debug logging in `writeEntry()` to emit the first line of `entryBlock` prior to write.
3. Create a synthetic minimal CHANGELOG with only markers and day header; run write to see if entry appears (isolates newline normalization variable).
4. Compute diff (pre vs post) at insertion region to inspect whether entry exists with unexpected characters.
5. Verify if Windows Git Bash command line quoting truncates arguments (e.g., summary or context splitting) leading to empty `entryBlock` (would yield header only? but still searchable by timestamp).

## Potential Root Cause Candidates

- Tool caching (most plausible given byte size growth yet unavailable content).
- Newline normalization combined with line ending mismatch in read tool (lf vs crlf) affecting grep pattern matching (needs test by reading raw bytes or searching with regex for partial tokens).
- Race condition reading file before FS flush (unlikely with synchronous writeFileUtf8).

## Immediate Work Plan

- Implement Step 1 & 3 (raw re-read and synthetic file reproduction) before modifying CLI code.
- If reproduction succeeds in synthetic file, isolate difference (line endings, markers, day header formatting).

## Notes

- Allowed entry types exclude "test"; type auto-coerced to `chore` for debug insertion (consistent with code).
- Write operation sets `changed: true` only if `inserted === true` indicating insertion branch executed.

---

Generated: 2025-11-14 Investigation Pass 1
