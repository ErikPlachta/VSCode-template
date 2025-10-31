#!/usr/bin/env python3
"""Command line interface for generating the Copilot workspace using Python."""

from __future__ import annotations

import argparse
from pathlib import Path

from copilot_workspace import generate_workspace


def parse_args() -> argparse.Namespace:
    """Return parsed command line arguments."""
    parser = argparse.ArgumentParser(
        description="Generate the GitHub Copilot instructions workspace using Python tooling.",
    )
    parser.add_argument(
        "directory",
        nargs="?",
        default=Path("."),
        type=Path,
        help="Directory where the workspace should be generated.",
    )
    return parser.parse_args()


def main() -> None:
    """Generate the workspace at the requested directory."""
    args = parse_args()
    workspace_path = generate_workspace(args.directory)
    print(f"✅ Copilot workspace generated at {workspace_path}")


if __name__ == "__main__":
    main()
