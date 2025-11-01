"""my_work_assistant.tests.test_cli_more

Expand CLI coverage for commands not covered elsewhere.
"""

from __future__ import annotations

import json
import subprocess

from my_work_assistant.__main__ import app
from typer.testing import CliRunner


def test_cli_watch_outputs_json() -> None:
    """watch command writes watched directories JSON."""
    runner = CliRunner()
    result = runner.invoke(app, ["watch"])
    assert result.exit_code == 0
    data = json.loads(result.stdout)
    assert "watched" in data


def test_cli_changelog_runs_successfully() -> None:
    """changelog command runs and prints a summary string."""
    runner = CliRunner()
    result = runner.invoke(app, ["changelog"])
    assert result.exit_code == 0
    assert isinstance(result.stdout, str)


def test_cli_self_test_success(monkeypatch) -> None:
    """self-test command exits 0 on successful pytest run."""

    class Result:
        returncode = 0

    def fake_run(*args, **kwargs):  # noqa: D401
        return Result()

    monkeypatch.setattr(subprocess, "run", fake_run)
    runner = CliRunner()
    result = runner.invoke(app, ["self-test"])
    assert result.exit_code == 0


def test_cli_self_test_failure(monkeypatch) -> None:
    """self-test command propagates pytest return code."""

    class Result:
        returncode = 3

    def fake_run(*args, **kwargs):  # noqa: D401
        return Result()

    monkeypatch.setattr(subprocess, "run", fake_run)
    runner = CliRunner()
    result = runner.invoke(app, ["self-test"])
    assert result.exit_code == 3
