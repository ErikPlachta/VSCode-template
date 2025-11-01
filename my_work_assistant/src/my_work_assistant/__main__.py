"""my_work_assistant.__main__

Typer CLI entrypoint for the MCP server package.
"""

from __future__ import annotations

import json
import subprocess

import typer

from .core.initialize import initialize_workspace
from .github_manager import builder, constants, synchronizer, watcher
from .github_manager.changelog import record_changes
from .services.summary import summarize_changes

app = typer.Typer(add_completion=False)


@app.command()
def init() -> None:
    """Initialize the workspace and render templates."""
    config = initialize_workspace()
    paths = builder.render_templates()
    record_changes(paths)
    typer.echo(
        json.dumps(
            {"config": config, "rendered": [str(path) for path in paths]}, indent=2
        )
    )


@app.command()
def validate() -> None:
    """Validate managed GitHub files."""
    paths = synchronizer.synchronize()
    typer.echo(json.dumps({"validated": [str(path) for path in paths]}, indent=2))


@app.command()
def watch() -> None:
    """Record a watcher event for managed directories."""
    directories = [constants.GITHUB_ROOT]
    watcher.watch_paths(directories)
    typer.echo(json.dumps({"watched": [str(path) for path in directories]}, indent=2))


@app.command()
def changelog() -> None:
    """Print a summary of managed file paths."""
    paths = synchronizer.synchronize()
    typer.echo(summarize_changes(paths))


@app.command("self-test")
def self_test() -> None:
    """Run pytest as a subprocess."""
    result = subprocess.run(["pytest", "-q"], check=False)
    # Pass exit code positionally to satisfy static typing
    raise typer.Exit(result.returncode)


if __name__ == "__main__":
    app()
