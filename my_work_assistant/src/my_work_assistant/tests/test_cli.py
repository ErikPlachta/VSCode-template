"""my_work_assistant.tests.test_cli

Validate Typer CLI commands.

This suite covers initialization, validation, docs/export, manifest listing,
serving via Uvicorn, file watching, changelog, and self-test flows.
"""

from __future__ import annotations

import json
import subprocess
from pathlib import Path

import pytest
import uvicorn
from my_work_assistant.__main__ import app
from typer.testing import CliRunner


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


def test_cli_docs_writes_to_out(tmp_path: Path) -> None:
    """CLI docs command writes api reference to specified directory."""
    runner = CliRunner()
    result = runner.invoke(app, ["docs", "--out", str(tmp_path)])
    assert result.exit_code == 0
    # Output JSON contains the path
    data = json.loads(result.stdout)
    assert (tmp_path / "api_reference.md").exists()
    assert data["docs"].endswith("api_reference.md")


def test_cli_openapi_writes_schema(tmp_path: Path) -> None:
    """CLI openapi command writes schema JSON to provided path."""
    out_path = tmp_path / "openapi.json"
    runner = CliRunner()
    result = runner.invoke(app, ["openapi", "--out", str(out_path)])
    assert result.exit_code == 0
    data = json.loads(result.stdout)
    assert out_path.exists()
    assert data["openapi"].endswith("openapi.json")


def test_cli_manifest_outputs_json() -> None:
    """CLI manifest command returns a JSON object with manifest key."""
    runner = CliRunner()
    result = runner.invoke(app, ["manifest"])
    assert result.exit_code == 0
    data = json.loads(result.stdout)
    assert "manifest" in data


def test_cli_serve_invokes_uvicorn_run(monkeypatch: pytest.MonkeyPatch) -> None:
    """CLI serve command calls uvicorn.run with expected arguments."""
    called: dict[str, object] = {}

    def fake_run(
        app_ref: object, host: str, port: int, reload: bool, factory: bool
    ) -> None:
        called["app_ref"] = app_ref
        called["host"] = host
        called["port"] = port
        called["reload"] = reload
        called["factory"] = factory

    monkeypatch.setattr(uvicorn, "run", fake_run)
    runner = CliRunner()
    result = runner.invoke(
        app, ["serve", "--host", "127.0.0.1", "--port", "0", "--reload"]
    )
    assert result.exit_code == 0
    assert called.get("factory") is True
    assert called.get("host") == "127.0.0.1"


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


def test_cli_self_test_success(monkeypatch: pytest.MonkeyPatch) -> None:
    """self-test command exits 0 on successful pytest run."""

    class Result:
        returncode = 0

    def fake_run(*args: object, **kwargs: object) -> "Result":  # noqa: D401
        return Result()

    monkeypatch.setattr(subprocess, "run", fake_run)
    runner = CliRunner()
    result = runner.invoke(app, ["self-test"])
    assert result.exit_code == 0


def test_cli_self_test_failure(monkeypatch: pytest.MonkeyPatch) -> None:
    """self-test command propagates pytest return code."""

    class Result:
        returncode = 3

    def fake_run(*args: object, **kwargs: object) -> "Result":  # noqa: D401
        return Result()

    monkeypatch.setattr(subprocess, "run", fake_run)
    runner = CliRunner()
    result = runner.invoke(app, ["self-test"])
    assert result.exit_code == 3
