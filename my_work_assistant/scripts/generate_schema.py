"""Regenerate JSON schemas from defaults."""

from __future__ import annotations

from pathlib import Path
import json

from my_work_assistant.utils import resolve_package_root


def main() -> None:
    package_root = resolve_package_root()
    models_dir = package_root / "bin" / "defaults" / "models"
    schema_path = package_root / "bin" / "schemas" / "models" / "categories.schema.json"
    categories = json.loads((models_dir / "categories.json").read_text(encoding="utf-8"))
    schema = {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "id": {"type": "string"},
                "name": {"type": "string"},
            },
            "required": ["id", "name"],
        },
    }
    schema_path.parent.mkdir(parents=True, exist_ok=True)
    schema_path.write_text(json.dumps(schema, indent=2), encoding="utf-8")
    print(f"Generated schema with {len(categories)} categories")


if __name__ == "__main__":
    main()
