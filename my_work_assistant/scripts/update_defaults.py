"""Copy bin defaults into the workspace."""

from __future__ import annotations

from pathlib import Path
import shutil

from my_work_assistant.utils import resolve_package_root, resolve_workspace_root


def main() -> None:
    package_root = resolve_package_root()
    workspace_root = resolve_workspace_root()
    defaults = package_root / "bin" / "defaults"
    workspace_root.mkdir(parents=True, exist_ok=True)
    for path in defaults.rglob("*"):
        relative = path.relative_to(defaults)
        target = workspace_root / relative
        if path.is_dir():
            target.mkdir(parents=True, exist_ok=True)
        else:
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(path, target)
    print("Defaults updated.")


if __name__ == "__main__":
    main()
