from __future__ import annotations

from pathlib import Path

from fastapi.testclient import TestClient

from my_work_assistant.api.app import app
from my_work_assistant.github_manager.validator import Validator


def test_api_endpoints(monkeypatch, tmp_path: Path) -> None:  # type: ignore[no-untyped-def]
    module = __import__("my_work_assistant.api.app", fromlist=["dummy"])
    monkeypatch.setattr(module, "PACKAGE_ROOT", tmp_path, raising=False)
    monkeypatch.setattr(module, "WORKSPACE_ROOT", tmp_path / "workspace", raising=False)
    monkeypatch.setattr(module, "PROJECT_ROOT", tmp_path / "project", raising=False)
    monkeypatch.setattr(Validator, "validate_all", lambda self: None)
    client = TestClient(app)
    assert client.post("/initialize").json()["status"] == "initialized"
    assert client.post("/validate").json()["status"] == "validated"
    assert isinstance(client.get("/list_models").json(), list)
    monkeypatch.setattr("my_work_assistant.services.bridges.BridgeBuilder.build", lambda self: {"cat": ["ds"]})
    assert client.get("/describe_bridge/cat").json()["datasets"] == ["ds"]

    response = client.get("/describe_bridge/unknown")
    assert response.status_code == 404
    monkeypatch.setattr("subprocess.run", lambda *a, **k: type("R", (), {"returncode": 0, "stdout": "ok"})())
    assert client.post("/self_test").json()["status"] == "passed"
