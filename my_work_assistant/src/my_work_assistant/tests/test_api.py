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
