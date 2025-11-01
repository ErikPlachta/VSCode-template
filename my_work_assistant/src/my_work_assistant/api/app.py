"""my_work_assistant.api.app

FastAPI application exposing MCP server functionality.
"""

from __future__ import annotations

import json
import subprocess
from pathlib import Path
from typing import Any

from fastapi import FastAPI, HTTPException

from ..core.exceptions import APIError, MCPError
from ..core.initialize import initialize_workspace
from ..github_manager import builder, synchronizer
from ..models import DataSet, Group, Person, Platform
from ..services import bridges

__all__ = ["create_app"]

MODELS_ROOT = (
    Path(__file__).resolve().parent.parent.parent / "bin" / "defaults" / "models"
)
PROMPTS_ROOT = Path(".github") / "prompts"


def create_app() -> FastAPI:
    """Create and configure the FastAPI application.

    Returns:
        Configured FastAPI instance.

    Example:
        >>> app = create_app()
        >>> isinstance(app, FastAPI)
        True

    """
    app = FastAPI(title="My Work Assistant")

    @app.exception_handler(MCPError)
    async def handle_mcp_error(_: Any, exc: Exception) -> Any:
        raise HTTPException(
            status_code=400,
            detail={"type": exc.__class__.__name__, "message": str(exc)},
        )

    @app.post("/initialize")
    async def initialize() -> dict[str, Any]:
        config = initialize_workspace()
        builder.render_templates()
        return _success({"config": config})

    @app.post("/validate")
    async def validate() -> dict[str, Any]:
        paths = synchronizer.synchronize()
        return _success({"validated": [str(path) for path in paths]})

    @app.get("/list_models")
    async def list_models() -> dict[str, Any]:
        data = _load_models()
        return _success(data)

    @app.get("/list_prompts")
    async def list_prompts() -> dict[str, Any]:
        prompts = sorted(path.stem for path in PROMPTS_ROOT.glob("*.prompt.md"))
        return _success({"prompts": prompts})

    @app.get("/describe_bridge")
    async def describe_bridge() -> dict[str, Any]:
        models = _load_models()
        membership = bridges.group_membership(
            [Group(**item) for item in models["groups"]],
            [Person(**item) for item in models["people"]],
        )
        dataset_map = bridges.platform_datasets(
            [Platform(**item) for item in models["platforms"]],
            [DataSet(**item) for item in models["datasets"]],
        )
        return _success({"groups": membership, "platforms": dataset_map})

    @app.post("/self_test")
    async def self_test() -> dict[str, Any]:
        result = subprocess.run(
            ["pytest", "-q"], capture_output=True, text=True, check=False
        )
        if result.returncode != 0:
            raise APIError(
                "Self test failed", {"stdout": result.stdout, "stderr": result.stderr}
            )
        return _success({"stdout": result.stdout})

    return app


def _load_models() -> dict[str, list[dict[str, Any]]]:
    """Load default model definitions from disk."""
    data: dict[str, list[dict[str, Any]]] = {}
    for path in MODELS_ROOT.glob("*.json"):
        payload = json.loads(path.read_text(encoding="utf-8"))
        data[path.stem] = payload
    return data


def _success(payload: dict[str, Any]) -> dict[str, Any]:
    """Return a standardized success response."""
    return {"success": True, "data": payload}
