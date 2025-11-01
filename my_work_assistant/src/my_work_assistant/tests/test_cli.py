from __future__ import annotations
import typer

from pathlib import Path
from typing import List

from typer.testing import CliRunner

from my_work_assistant.__main__ import app, main
from my_work_assistant.github_manager.validator import Validator


def test_cli_commands(tmp_path: Path, monkeypatch) -> None:  # type: ignore[no-untyped-def]
    runner = CliRunner()

    def fake_resolve_package_root() -> Path:
        return tmp_path

    def fake_resolve_workspace_root() -> Path:
        return tmp_path / "workspace"

    monkeypatch.setattr("my_work_assistant.__main__.resolve_package_root", fake_resolve_package_root)
    monkeypatch.setattr("my_work_assistant.__main__.resolve_workspace_root", fake_resolve_workspace_root)
    monkeypatch.setattr(Validator, "validate_all", lambda self: None)
    monkeypatch.setattr("my_work_assistant.__main__.Synchronizer.sync", lambda self: None)
    result = runner.invoke(app, ["init"])
    assert result.exit_code == 0
    result = runner.invoke(app, ["validate"])
    assert result.exit_code == 0
    result = runner.invoke(app, ["watch"])
    assert result.exit_code == 0
    result = runner.invoke(app, ["changelog"])
    assert result.exit_code == 0
    monkeypatch.setattr("subprocess.run", lambda *args, **kwargs: type("R", (), {"returncode": 0})())
    result = runner.invoke(app, ["self-test"])
    assert result.exit_code == 0
    monkeypatch.setattr("typer.main.get_command", lambda *_: typer.Typer())
    monkeypatch.setattr("typer.Typer.__call__", lambda self, *a, **k: None)
    main()


def test_main_entrypoint(monkeypatch) -> None:

    calls = {}

    monkeypatch.setattr("typer.Typer.__call__", lambda self, *a, **k: calls.setdefault("called", True))

    monkeypatch.setattr("subprocess.run", lambda *args, **kwargs: type("R", (), {"returncode": 0})())

    import runpy

    runpy.run_module("my_work_assistant.__main__", run_name="__main__")

    assert calls.get("called") is True
