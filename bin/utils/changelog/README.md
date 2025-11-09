# ChangeLogManager

Utility for structured management of `CHANGELOG.md`.

## Goals

- Preserve human readability while enabling automated updates.
- Maintain newest-first log entries per day.
- Guarantee accurate timestamps.
- Avoid brittle regex-only parsing: uses HTML markers.

## Markers

Inserted automatically if absent:

- `<!-- CHANGELOG:BEGIN:OUTSTANDING_TASKS -->` / `<!-- CHANGELOG:END:OUTSTANDING_TASKS -->`
- `<!-- CHANGELOG:BEGIN:LOGS -->` / `<!-- CHANGELOG:END:LOGS -->`

## Heading Conventions

- Day heading: `### [YYYY-MM-DD] Optional summary`
- Log entry: `#### YYYY-MM-DD HH:MM:SS type: Summary`

## Commands

```bash
tsx bin/utils/changelog/cli.ts insert-markers
tsx bin/utils/changelog/cli.ts add-entry --type feat --summary "Introduce ChangeLogManager"
tsx bin/utils/changelog/cli.ts add-outstanding --priority 3 --text "Backlog item"
tsx bin/utils/changelog/cli.ts export-json --out changelog.json
tsx bin/utils/changelog -- add-entry --type docs --summary "Call via index entry"
```

## Programmatic Use

```ts
import { ChangeLogManager } from "./bin/utils/changelog/manager";
const mgr = new ChangeLogManager();
mgr.addEntry("docs", "Explain manager usage");
```

## Future Extensions (Planned)

- Generating verification blocks automatically.
- Exporting JSON for UI integration.
- Validation of required quality gate lines.

## Notes

- Keep markers and headings stable to avoid parser churn.
- Changes to format must update this README and copilot instructions.
