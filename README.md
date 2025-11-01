# My Work Assistant

My Work Assistant is a reference MCP server that provisions GitHub Copilot Chat
instructional assets and maintains a local knowledge base for collaborative
workflows. The project is intentionally data driven and ships with repeatable
scripts, templates, and automated documentation tooling.

This repository was created to help me learn MCP server development and experiment
with different approaches to building and deploying these systems. VS Code is my
primary IDE, and I use GitHub Copilot extensively to assist with coding tasks.

> My hope is that I'll eventually use what I've learned here to build my own
> custom MCP Server solutions to serve as agents that bootstrap my productivity
> and help me manage complex projects with the advantage of customizing CoPilot
> to my specific needs.

## Getting Started

### Prerequisites

- Python 3.12 or higher
- Git

### Setting Up Your Development Environment

This project uses a `pyproject.toml` file for dependency management and configuration. Here's how to get started:

#### 1. Create and Activate a Virtual Environment

A virtual environment keeps your project dependencies isolated from your system Python installation.

```bash
# Create a virtual environment
python -m venv .venv

# Activate the virtual environment
# On macOS/Linux:
source .venv/bin/activate

# On Windows:
.venv\Scripts\activate

# You should see (.venv) in your terminal prompt when activated
```

#### 2. Install the Project

The `pyproject.toml` file defines all dependencies and project metadata. Install the project in development mode:

```bash
# Install ALL packages, including the development dependencies
pip install -e ".[dev]"

# Note: The quotes around ".[dev]" are required for zsh shell (default on macOS)
# to prevent glob expansion. In bash, you can use either quoted or unquoted.

# This installs:
# - Main dependencies: fastapi, typer, pydantic, jinja2, jsonschema, watchdog, uvicorn
# - Development dependencies: pytest, pytest-cov, mypy, ruff
```

#### 3. Initialize My Work Assistant

This is a one-time setup step to create necessary configuration files and directories.

> It uses the mcp library code to build local files, including logs and caching data,
> based on the default templates provided in the repository, and is required for
> CoPilot Chat to function correctly with this MCP server at this time.

```bash
# Initialize the work assistant
python -m my_work_assistant init
```

### Working with pyproject.toml

The `pyproject.toml` file is the modern Python standard for project configuration. Here's what each section does:

- **`[project]`**: Defines project metadata (name, version, dependencies)
- **`[project.optional-dependencies]`**: Groups optional dependencies (like `dev` for development tools)
- **`[build-system]`**: Specifies how to build the package
- **`[tool.*]`**: Configuration for development tools (pytest, mypy, ruff)

#### Adding New Dependencies

```bash
# For runtime dependencies, edit pyproject.toml [project] dependencies array
# For development dependencies, edit [project.optional-dependencies] dev array
# Then reinstall:
pip install -e ".[dev]"
```

#### Virtual Environment Management

```bash
# Deactivate virtual environment
deactivate

# Reactivate later
source .venv/bin/activate  # macOS/Linux
# or
.venv\Scripts\activate     # Windows

# Remove virtual environment (if needed)
deactivate
rm -rf .venv  # macOS/Linux
# or
rmdir /s .venv  # Windows
```

## Development

This project includes several development tools configured via `pyproject.toml`:

### Running Tests

```bash
# Run all tests
pytest

# Run tests with coverage report
pytest --cov=my_work_assistant

# The pytest configuration is in pyproject.toml [tool.pytest.ini_options]
```

### Code Quality Tools

```bash
# Type checking with mypy
mypy --strict my_work_assistant

# Linting and formatting with ruff
ruff check .                    # Check for issues
ruff format .                   # Format code
ruff check --fix .              # Auto-fix issues where possible
```

### Self-Testing

```bash
# Run the built-in self-test
python -m my_work_assistant self-test
```

### Development Workflow

1. **Make changes to your code**
2. **Run tests**: `pytest --cov=my_work_assistant`
3. **Check types**: `mypy --strict my_work_assistant`
4. **Format code**: `ruff format .`
5. **Fix linting issues**: `ruff check --fix .`

### Understanding the Development Dependencies

The `[project.optional-dependencies]` section in `pyproject.toml` includes:

- **pytest**: Testing framework
- **pytest-cov**: Coverage reporting for tests
- **mypy**: Static type checker
- **ruff**: Fast Python linter and formatter (replaces flake8, black, isort)

## Troubleshooting

### Shell-Specific Issues

```bash
# If you get "zsh: no matches found: .[dev]" error on macOS/zsh:
pip install -e ".[dev]"  # Use quotes around .[dev]

# This is because zsh treats [ ] as glob patterns
# The quotes prevent shell expansion
```

### Virtual Environment Issues

```bash
# If you're having import issues, make sure your virtual environment is activated
which python  # Should point to .venv/bin/python

# If packages seem missing, reinstall in development mode
pip install -e ".[dev]"

# If you see "No module named 'my_work_assistant'", you might need to install in editable mode
pip install -e .
```

### Common Commands Reference

```bash
# Check what's installed
pip list

# Check project info
pip show my_work_assistant

# Verify Python version
python --version  # Should be 3.12+

# Check if virtual environment is active
echo $VIRTUAL_ENV  # Should show path to .venv
```

## Best Practices

1. **Always activate your virtual environment** before working on the project
2. **Use `pip install -e ".[dev]"`** instead of managing separate requirements files
3. **Run the development tools** (pytest, mypy, ruff) before committing changes
4. **Keep your `pyproject.toml`** updated when adding new dependencies
5. **Don't commit your `.venv` folder** - it should be in `.gitignore`
