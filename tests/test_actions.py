"""Tests for the Copilot workspace action registry."""

from __future__ import annotations

import json
import subprocess
import sys
import os
from pathlib import Path

from copilot_workspace import WorkspaceContext, default_registry, generate_workspace


def test_default_registry_lists_categories(tmp_path: Path) -> None:
    """Ensure the default actions surface category metadata."""

    generate_workspace(tmp_path)
    context = WorkspaceContext(tmp_path)
    registry = default_registry()
    result = registry.run("list_categories", context)
    payload = result.to_dict()
    assert payload["summary"].startswith("Found")
    categories = payload["data"]["categories"]
    assert any(item["name"] == "job" for item in categories)


def test_default_registry_validation(tmp_path: Path) -> None:
    """Validation action should succeed for the generated workspace."""

    generate_workspace(tmp_path)
    context = WorkspaceContext(tmp_path)
    registry = default_registry()
    result = registry.run("validate", context)
    diagnostics = result.to_dict()["data"]
    assert diagnostics == {"errors": []}


def test_cli_run_action_json_output(tmp_path: Path) -> None:
    """The CLI should execute actions and emit JSON when requested."""

    generate_workspace(tmp_path)
    script = Path(__file__).resolve().parents[1] / "install-github-copilot-instructions-work.py"
    env = {**os.environ, "PYTHONPATH": os.pathsep.join(filter(None, [os.environ.get("PYTHONPATH"), str(Path(__file__).resolve().parents[1] / "src")]))}
    completed = subprocess.run(
        [sys.executable, str(script), "run", "list_categories", "--directory", str(tmp_path), "--format", "json"],
        check=False,
        capture_output=True,
        text=True,
        env=env,
    )
    assert completed.returncode == 0, completed.stderr
    payload = json.loads(completed.stdout)
    assert payload["summary"].startswith("Found")
