"""scripts.lint_all

Run formatting, typing, and linting checks.
"""
from __future__ import annotations

import subprocess

COMMANDS = [
    ["ruff", "check", "my_work_assistant"],
    ["mypy", "--strict", "my_work_assistant"],
]


def main() -> None:
    """Execute configured lint commands sequentially."""

    for command in COMMANDS:
        subprocess.run(command, check=False)


if __name__ == "__main__":
    main()
