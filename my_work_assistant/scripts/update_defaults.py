"""scripts.update_defaults

Sync workspace defaults from packaged templates.
"""
from __future__ import annotations

import shutil
from pathlib import Path


def main() -> None:
    """Copy default docs into the workspace directory."""

    project_root = Path(__file__).resolve().parents[1]
    source = project_root / "bin" / "defaults" / "docs"
    destination = Path.cwd() / ".my_work_assistant" / "docs"
    destination.mkdir(parents=True, exist_ok=True)
    for doc in source.glob("*.md"):
        shutil.copy2(doc, destination / doc.name)
    print(f"Copied docs to {destination}")


if __name__ == "__main__":
    main()
