"""my_work_assistant.tests.test_cli

Validate Typer CLI commands.
"""

from __future__ import annotations

import json

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


def test_cli_docs_writes_to_out(tmp_path) -> None:
    """CLI docs command writes api reference to specified directory."""
    runner = CliRunner()
    result = runner.invoke(app, ["docs", "--out", str(tmp_path)])
    assert result.exit_code == 0
    # Output JSON contains the path
    data = json.loads(result.stdout)
    assert (tmp_path / "api_reference.md").exists()
    assert data["docs"].endswith("api_reference.md")


def test_cli_openapi_writes_schema(tmp_path) -> None:
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
