"""fastapi.testclient

Test client stub to invoke FastAPI routes synchronously.
"""
from __future__ import annotations

from dataclasses import dataclass
from typing import Any

from .. import FastAPI

__all__ = ["TestClient"]


@dataclass
class Response:
    """Minimal response object for tests."""

    status_code: int
    _json: Any

    def json(self) -> Any:
        return self._json


class TestClient:
    """Simple test client executing handlers directly."""

    __test__ = False

    def __init__(self, app: FastAPI) -> None:
        self.app = app

    def post(self, path: str, json: Any | None = None) -> Response:
        status, data = self.app._call("POST", path, json)
        return Response(status_code=status, _json=data)

    def get(self, path: str) -> Response:
        status, data = self.app._call("GET", path)
        return Response(status_code=status, _json=data)
