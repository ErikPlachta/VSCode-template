#!/usr/bin/env python3
"""Command line interface for Copilot workspace generation and actions."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any, Dict

from copilot_workspace import WorkspaceValidationError, generate_workspace
from copilot_workspace.actions import WorkspaceContext, default_registry


def _add_generate_parser(subparsers: argparse._SubParsersAction[argparse.ArgumentParser]) -> None:
    """Register the ``generate`` subcommand for workspace creation."""

    generate_parser = subparsers.add_parser(
        "generate",
        help="Generate or refresh the Copilot workspace in the target directory.",
    )
    generate_parser.add_argument(
        "directory",
        nargs="?",
        default=Path("."),
        type=Path,
        help="Directory where the workspace should be generated.",
    )


def _add_run_parser(subparsers: argparse._SubParsersAction[argparse.ArgumentParser]) -> None:
    """Register the ``run`` subcommand for executing workspace actions."""

    run_parser = subparsers.add_parser(
        "run",
        help="Execute an action that surfaces workspace data for Copilot Chat.",
    )
    run_parser.add_argument(
        "action",
        nargs="?",
        help="Name of the registered action to execute.",
    )
    run_parser.add_argument(
        "--directory",
        default=Path("."),
        type=Path,
        help="Workspace directory to operate on (defaults to current directory).",
    )
    run_parser.add_argument(
        "--format",
        choices=("text", "json"),
        default="text",
        help="Output format for the action result.",
    )
    run_parser.add_argument(
        "--list",
        action="store_true",
        help="List all available actions instead of executing one.",
    )


def parse_args() -> argparse.Namespace:
    """Return parsed command line arguments."""

    parser = argparse.ArgumentParser(
        description="Generate the GitHub Copilot workspace and expose helper actions.",
    )
    subparsers = parser.add_subparsers(dest="command")
    _add_generate_parser(subparsers)
    _add_run_parser(subparsers)
    parser.set_defaults(command="generate")
    return parser.parse_args()


def _print_action_result(result: Dict[str, Any], fmt: str) -> None:
    """Pretty print the action result according to the requested format."""

    if fmt == "json":
        print(json.dumps(result, indent=2, sort_keys=True))
        return
    summary = result.get("summary", "")
    print(summary)
    data = result.get("data")
    if data is not None:
        print(json.dumps(data, indent=2, sort_keys=True))


def _handle_generate(directory: Path) -> None:
    """Generate the workspace at the requested directory."""

    workspace_path = generate_workspace(directory)
    print(f"✅ Copilot workspace generated at {workspace_path}")


def _handle_run(action_name: str | None, directory: Path, fmt: str, list_only: bool) -> None:
    """Execute a registered action or display the available catalogue."""

    context = WorkspaceContext(directory)
    try:
        context.ensure_workspace()
    except WorkspaceValidationError as exc:
        print("❌ Copilot workspace validation failed:")
        for message in exc.errors:
            print(f" - {message}")
        raise SystemExit(1) from exc
    registry = default_registry()
    if list_only or not action_name:
        for name, description in registry.describe().items():
            print(f"{name}: {description}")
        return
    result = registry.run(action_name, context)
    _print_action_result(result.to_dict(), fmt)


def main() -> None:
    """Entry point for the command line interface."""

    args = parse_args()
    command = args.command
    if command == "generate":
        _handle_generate(args.directory)
    elif command == "run":
        _handle_run(args.action, args.directory, args.format, args.list)
    else:  # pragma: no cover - defensive guard
        raise SystemExit(f"Unknown command: {command}")


if __name__ == "__main__":
    main()
