from __future__ import annotations

from pathlib import Path
import json

from my_work_assistant.core.config import ConfigLoader


def test_config_loader_merges(tmp_path: Path) -> None:
    package_root = tmp_path / "package"
    package_root.mkdir()
    defaults = package_root / "bin" / "defaults" / "config"
    defaults.mkdir(parents=True)
    defaults_config = {"logging": {"level": "INFO"}, "watcher": {"paths": ["a"], "ignore_patterns": []}}
    (defaults / "my-work-assistant.config.json").write_text(json.dumps(defaults_config), encoding="utf-8")

    workspace_root = tmp_path / "workspace"
    workspace_root.mkdir()
    workspace_override = {"logging": {"retention_days": 10}}
    (workspace_root / "my-work-assistant.config.json").write_text(json.dumps(workspace_override), encoding="utf-8")

    loader = ConfigLoader(package_root, workspace_root)
    data = loader.load()

    assert data["logging"]["level"] == "INFO"
    assert data["logging"]["retention_days"] == 10
    assert loader.logging_directory == workspace_root / "logs"
    assert loader.docs_directory == workspace_root / "docs"
    assert loader.cache_directory == workspace_root / "cache"
