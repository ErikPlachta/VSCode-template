"""Typer CLI entry point."""

from __future__ import annotations

from pathlib import Path
import subprocess

import typer

from .core import Initializer
from .github_manager.validator import Validator
from .github_manager.synchronizer import Synchronizer
from .services.summary import SummaryGenerator
from .utils import resolve_package_root, resolve_workspace_root

app = typer.Typer(name="my-work-assistant")


@app.command()
def init() -> None:
    """Initialize the workspace and copy defaults."""

    initializer = Initializer(resolve_package_root(), resolve_workspace_root())
    initializer.initialize()
    typer.echo("Workspace initialized.")


@app.command()
def validate() -> None:
    """Validate .github assets."""

    validator = Validator(resolve_package_root(), Path.cwd())
    validator.validate_all()
    typer.echo("Validation successful.")


@app.command()
def watch() -> None:
    """Synchronize .github files into the cache once."""

    synchronizer = Synchronizer(Path.cwd(), resolve_workspace_root() / "cache")
    synchronizer.sync()
    typer.echo("Synchronization complete.")


@app.command()
def changelog() -> None:
    """Print the changelog summary."""

    summary = SummaryGenerator(resolve_workspace_root() / "logs" / "ChangeLog.md")
    typer.echo(summary.summarize())


@app.command()
def self_test() -> None:
    """Run the test suite."""

    result = subprocess.run(
        ["pytest", "--cov=my_work_assistant", "--cov-report=term-missing", "--cov-fail-under=100"],
        check=False,
    )
    raise typer.Exit(code=result.returncode)


def main() -> None:
    """Invoke the Typer application."""

    app()


if __name__ == "__main__":
    main()
