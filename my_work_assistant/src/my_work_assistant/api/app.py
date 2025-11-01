"""my_work_assistant.api.app.

FastAPI application exposing MCP server functionality.

This module wires HTTP endpoints for initializing the workspace, validating
managed assets, inspecting models, and retrieving a transparent manifest of
discovered GitHub-managed files. The behavior of prompt discovery is
configuration-driven via the ``github_manager.github_root`` setting.

All public functions include detailed docstrings with types and semantics to
support maintainability and IDE assistance.
"""

from __future__ import annotations

import json
import subprocess
from pathlib import Path
from typing import Any

from fastapi import FastAPI, HTTPException

from ..core.config import load_config
from ..core.exceptions import APIError, MCPError
from ..core.initialize import initialize_workspace
from ..github_manager import builder, constants, synchronizer
from ..models import DataSet, Group, Person, Platform
from ..services import bridges

__all__ = ["create_app"]

MODELS_ROOT = (
    Path(__file__).resolve().parent.parent.parent / "bin" / "defaults" / "models"
)


def _prompts_root() -> Path:
    """Resolve the prompts directory from configuration.

    Returns:
        Path: Directory where prompt files are written.
    """
    cfg = load_config().get("github_manager", {})
    github_root = Path(cfg.get("github_root", ".github"))
    return github_root / "prompts"


def create_app() -> FastAPI:
    """Create and configure the FastAPI application.

    Returns:
        FastAPI: Configured FastAPI instance.

    Example:
        >>> app = create_app()
        >>> isinstance(app, FastAPI)
        True
    """
    app = FastAPI(title="My Work Assistant")

    @app.exception_handler(MCPError)
    async def handle_mcp_error(_: Any, exc: Exception) -> Any:
        """Convert MCP exceptions into HTTP 400 responses.

        Args:
            _ (Any): Unused FastAPI request object.
            exc (Exception): The raised exception.

        Returns:
            Any: Raises an HTTPException with 400 status.
        """
        raise HTTPException(
            status_code=400,
            detail={"type": exc.__class__.__name__, "message": str(exc)},
        )

    @app.post("/initialize")
    async def initialize() -> dict[str, Any]:
        """Initialize the workspace and render managed templates.

        Returns:
            dict[str, Any]: JSON payload containing merged config and rendered paths.
        """
        config = initialize_workspace()
        builder.render_templates()
        return _success({"config": config})

    @app.post("/validate")
    async def validate() -> dict[str, Any]:
        """Validate all managed GitHub files against schemas and strict checks.

        Returns:
            dict[str, Any]: JSON payload containing the validated file paths.
        """
        paths = synchronizer.synchronize()
        return _success({"validated": [str(path) for path in paths]})

    @app.get("/list_models")
    async def list_models() -> dict[str, Any]:
        """List default model definitions bundled with the package.

        Returns:
            dict[str, Any]: Keys correspond to model categories (people, roles, etc.).
        """
        data = _load_models()
        return _success(data)

    @app.get("/list_prompts")
    async def list_prompts() -> dict[str, Any]:
        """List discovered prompt files under the configured GitHub root.

        Returns:
            dict[str, Any]: Prompt names derived from filenames (without extensions).
        """
        prompts_root = _prompts_root()
        prompts = sorted(path.stem for path in prompts_root.glob("*.prompt.mwa.md"))
        return _success({"prompts": prompts})

    @app.get("/manifest")
    async def manifest() -> dict[str, Any]:
        return _success(constants.build_manifest())

    @app.get("/describe_bridge")
    async def describe_bridge() -> dict[str, Any]:
        """Compute derived relationships for demo purposes.

        Returns:
            dict[str, Any]: Group membership and platform-to-dataset mapping.
        """
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
        """Run the unit tests and return their output.

        Returns:
            dict[str, Any]: Captured stdout from the pytest run.

        Raises:
            APIError: If tests fail.
        """
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
    """Load default model definitions from disk.

    Returns:
        dict[str, list[dict[str, Any]]]: Mapping of category to list of entries.
    """
    data: dict[str, list[dict[str, Any]]] = {}
    for path in MODELS_ROOT.glob("*.json"):
        payload = json.loads(path.read_text(encoding="utf-8"))
        data[path.stem] = payload
    return data


def _success(payload: dict[str, Any]) -> dict[str, Any]:
    """Return a standardized success response.

    Args:
        payload (dict[str, Any]): Data payload to return under the "data" key.

    Returns:
        dict[str, Any]: A response object with a success flag and data payload.
    """
    return {"success": True, "data": payload}
