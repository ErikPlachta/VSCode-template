"""my_work_assistant.tests.test_cli

Validate Typer CLI commands.
"""
from __future__ import annotations

from typer.testing import CliRunner

from my_work_assistant.__main__ import app


def test_cli_init_runs_successfully() -> None:
    """CLI init command exits successfully."""

    runner = CliRunner()
    result = runner.invoke(app, ["init"])
    assert result.exit_code == 0


def test_cli_validate_runs_successfully() -> None:
    """CLI validate command exits successfully."""

    runner = CliRunner()
    result = runner.invoke(app, ["validate"])
    assert result.exit_code == 0
