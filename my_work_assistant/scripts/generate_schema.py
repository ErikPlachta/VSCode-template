"""scripts.generate_schema

Utility script stub for regenerating schemas.
"""
from __future__ import annotations

from pathlib import Path


def main() -> None:
    """Display target schema directory."""
    root = Path(__file__).resolve().parents[1] / "bin" / "schemas"
    print(f"Schemas located at: {root}")


if __name__ == "__main__":
    main()
