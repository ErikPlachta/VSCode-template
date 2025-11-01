"""my_work_assistant.tests.test_api

Exercise the FastAPI application endpoints.
"""

from __future__ import annotations

from fastapi.testclient import TestClient
from my_work_assistant.api import create_app


def test_initialize_endpoint() -> None:
    """POST /initialize returns success payload."""
    client = TestClient(create_app())
    response = client.post("/initialize")
    assert response.status_code == 200
    assert response.json()["success"] is True


def test_list_prompts_endpoint() -> None:
    """GET /list_prompts exposes default prompt names."""
    client = TestClient(create_app())
    response = client.get("/list_prompts")
    data = response.json()["data"]
    assert "prompts" in data


def test_manifest_endpoint() -> None:
    """GET /manifest returns manifest with expected keys."""
    client = TestClient(create_app())
    response = client.get("/manifest")
    assert response.status_code == 200
    data = response.json()
    assert data.get("success") is True
    manifest = data["data"]
    assert isinstance(manifest, dict)
    # Assert presence of expected keys
    assert "instructions" in manifest
    assert "prompts" in manifest
    assert "chatmodes" in manifest


def test_openapi_endpoint() -> None:
    """GET /openapi.json returns an OpenAPI document."""
    client = TestClient(create_app())
    response = client.get("/openapi.json")
    assert response.status_code == 200
    schema = response.json()
    assert "openapi" in schema
    assert "paths" in schema
    # API schema drift guard: ensure key public endpoints remain present.
    paths = schema.get("paths", {})
    for key in [
        "/initialize",
        "/list_prompts",
        "/manifest",
    ]:
        assert key in paths
