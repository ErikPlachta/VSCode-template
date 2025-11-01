"""Deprecated: merged into test_api.py.

This file is retained temporarily to ease review but is skipped.
"""

from __future__ import annotations

import pytest

# Skip this module entirely; tests have been consolidated into test_api.py
pytestmark = pytest.mark.skip(reason="Merged into test_api.py")

import subprocess
from typing import Any

import json
from pathlib import Path

from fastapi.testclient import TestClient

from my_work_assistant.api import create_app


def test_validate_endpoint() -> None:
    """POST /validate returns a list of validated paths."""
    client = TestClient(create_app())
    response = client.post("/validate")
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "validated" in data["data"]


def test_list_models_endpoint(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
    """GET /list_models returns default models mapping.

    Use a temporary models directory to avoid relying on packaged files.
    """
    # Prepare a temp models root with one model file
    (tmp_path / "people.json").write_text("[]", encoding="utf-8")
    monkeypatch.setattr("my_work_assistant.api.app.MODELS_ROOT", tmp_path)
    client = TestClient(create_app())
    response = client.get("/list_models")
    assert response.status_code == 200
    data = response.json()["data"]
    # Should return a mapping of model categories -> lists of entries
    assert isinstance(data, dict)
    assert data != {}


def test_describe_bridge_endpoint(
    tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    """GET /describe_bridge returns derived structures.

    Seed a temporary models directory to ensure deterministic behavior.
    """
    # Minimal seed data for required models
    (tmp_path / "groups.json").write_text(
        json.dumps([{"id": "grp", "name": "Group", "members": ["p1"]}]),
        encoding="utf-8",
    )
    (tmp_path / "people.json").write_text(
        json.dumps(
            [
                {
                    "id": "p1",
                    "full_name": "Person One",
                    "role_ids": [],
                    "group_ids": ["grp"],
                }
            ]
        ),
        encoding="utf-8",
    )
    (tmp_path / "platforms.json").write_text(
        json.dumps(
            [
                {
                    "id": "plat",
                    "name": "Platform",
                    "related_platform_ids": [],
                    "datasets": ["ds1"],
                }
            ]
        ),
        encoding="utf-8",
    )
    (tmp_path / "datasets.json").write_text(
        json.dumps([{"id": "ds1", "name": "Dataset One", "platform_id": "plat"}]),
        encoding="utf-8",
    )
    monkeypatch.setattr("my_work_assistant.api.app.MODELS_ROOT", tmp_path)
    client = TestClient(create_app())
    response = client.get("/describe_bridge")
    assert response.status_code == 200
    data = response.json()["data"]
    assert "groups" in data and "platforms" in data


def test_self_test_success(monkeypatch: pytest.MonkeyPatch) -> None:
    """POST /self_test returns pytest output when returncode=0."""
    client = TestClient(create_app())

    class Result:
        returncode = 0
        stdout = "ok"
        stderr = ""

    def fake_run(
        cmd: list[str], capture_output: bool, text: bool, check: bool
    ) -> Any:  # noqa: D401
        return Result()

    monkeypatch.setattr(subprocess, "run", fake_run)
    response = client.post("/self_test")
    assert response.status_code == 200
    assert "stdout" in response.json()["data"]


def test_self_test_failure(monkeypatch: pytest.MonkeyPatch) -> None:
    """POST /self_test raises APIError when returncode!=0."""
    client = TestClient(create_app())

    class Result:
        returncode = 1
        stdout = "fail"
        stderr = "trace"

    def fake_run(
        cmd: list[str], capture_output: bool, text: bool, check: bool
    ) -> Any:  # noqa: D401
        return Result()

    monkeypatch.setattr(subprocess, "run", fake_run)
    response = client.post("/self_test")
    # FastAPI error handler returns HTTP 400 for MCPError subclasses
    assert response.status_code == 400
