"""Run formatting, linting, and typing checks."""

from __future__ import annotations

import subprocess
import sys

COMMANDS = [
    ["black", "--check", "my_work_assistant"],
    ["ruff", "check", "my_work_assistant"],
    ["mypy", "my_work_assistant/src/my_work_assistant"],
]


def main() -> None:
    for command in COMMANDS:
        result = subprocess.run(command, check=False)
        if result.returncode != 0:
            sys.exit(result.returncode)


if __name__ == "__main__":
    main()
