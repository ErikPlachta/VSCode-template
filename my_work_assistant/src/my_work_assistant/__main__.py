"""my_work_assistant.__main__

Typer CLI entrypoint for the MCP server package.
"""

from __future__ import annotations

import json
import subprocess
from pathlib import Path

import typer
import uvicorn

from .api.app import create_app
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


@app.command()
def manifest() -> None:
    """Dump discovered managed assets manifest as JSON."""
    data = constants.build_manifest()
    typer.echo(json.dumps({"manifest": data}, indent=2))


@app.command()
def serve(
    host: str = typer.Option("127.0.0.1", help="Host interface to bind"),
    port: int = typer.Option(8000, help="Port to listen on"),
    reload: bool = typer.Option(False, help="Enable autoreload for development"),
) -> None:
    """Run the FastAPI server with interactive docs.

    Serves the app from ``my_work_assistant.api.app:create_app`` with factory mode,
    exposing Swagger UI at /docs and ReDoc at /redoc.
    """
    uvicorn.run(
        "my_work_assistant.api.app:create_app",
        host=host,
        port=port,
        reload=reload,
        factory=True,
    )


@app.command()
def docs(
    out: str = typer.Option(
        None,
        help="Optional output directory for docs (defaults to .my_work_assistant/docs)",
    )
) -> None:
    """Generate API reference docs from module docstrings.

    When --out is provided, docs are written there (e.g., my_work_assistant/docs for CI).
    Returns the path to the generated file.
    """
    from .docs import generate_docs

    target = generate_docs(out_dir=Path(out) if out else None)
    typer.echo(json.dumps({"docs": str(target)}, indent=2))


@app.command()
def openapi(
    out: str = typer.Option(
        "my_work_assistant/docs/openapi.json",
        help="Path to write the OpenAPI JSON",
    )
) -> None:
    """Write the FastAPI OpenAPI schema to a JSON file for tooling/CI."""
    app = create_app()
    schema = app.openapi()
    path = Path(out)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(schema, indent=2), encoding="utf-8")
    typer.echo(json.dumps({"openapi": str(path)}, indent=2))


if __name__ == "__main__":
    app()
