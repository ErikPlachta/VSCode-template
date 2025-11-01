"""my_work_assistant.tests.conftest

Provide fixtures and ensure stub fastapi module is importable.
"""
from __future__ import annotations

import sys
from pathlib import Path

if "fastapi" not in sys.modules:
    repo_root = Path(__file__).resolve().parents[4]
    package_root = repo_root / "my_work_assistant" / "src"
    for path in (str(repo_root), str(package_root)):
        if path not in sys.path:
            sys.path.insert(0, path)
    import fastapi  # noqa: F401
