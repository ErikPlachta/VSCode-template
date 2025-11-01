"""FastAPI application exposing my_work_assistant capabilities."""

from __future__ import annotations

from pathlib import Path
from typing import Dict, List, Any
import subprocess

from fastapi import FastAPI, HTTPException

from ..core import Initializer
from ..github_manager.validator import Validator
from ..services.bridges import BridgeBuilder
from ..utils import resolve_package_root, resolve_workspace_root

__all__ = ["app"]

app = FastAPI(title="my_work_assistant")

PACKAGE_ROOT = resolve_package_root()
WORKSPACE_ROOT = resolve_workspace_root()
PROJECT_ROOT = Path.cwd()


@app.post("/initialize")
def initialize() -> Dict[str, str]:
    initializer = Initializer(package_root=PACKAGE_ROOT, workspace_root=WORKSPACE_ROOT)
    initializer.initialize()
    return {"status": "initialized"}


@app.post("/validate")
def validate() -> Dict[str, str]:
    validator = Validator(package_root=PACKAGE_ROOT, project_root=PROJECT_ROOT)
    validator.validate_all()
    return {"status": "validated"}


@app.get("/list_models")
def list_models() -> List[str]:
    models_dir = PACKAGE_ROOT / "bin" / "defaults" / "models"
    return [path.stem for path in models_dir.glob("*.json")]


@app.get("/describe_bridge/{category_id}")
def describe_bridge(category_id: str) -> Dict[str, Any]:
    builder = BridgeBuilder(PACKAGE_ROOT / "bin" / "defaults" / "models")
    bridges = builder.build()
    if category_id not in bridges:
        raise HTTPException(status_code=404, detail="Category not found")
    return {"category": category_id, "datasets": bridges[category_id]}


@app.post("/self_test")
def self_test() -> Dict[str, str]:
    result = subprocess.run(
        ["pytest", "--maxfail=1", "--disable-warnings", "-q"],
        capture_output=True,
        text=True,
        check=False,
    )
    status = "passed" if result.returncode == 0 else "failed"
    return {"status": status, "stdout": result.stdout}
