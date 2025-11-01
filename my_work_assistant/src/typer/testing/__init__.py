"""typer.testing

Provide a minimal CliRunner compatible with tests.
"""
from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Callable

__all__ = ["CliRunner", "Result"]


@dataclass
class Result:
    """CLI invocation result."""

    exit_code: int
    stdout: str = ""


class CliRunner:
    """Execute Typer command functions directly."""

    def invoke(self, app: Any, args: list[str]) -> Result:
        command_name = args[0]
        command = app.commands[command_name]
        try:
            command()
            return Result(exit_code=0)
        except SystemExit as exc:
            return Result(exit_code=int(exc.code))
