[**mybusiness-mcp-extension v1.0.0**](../../README.md)

***

[mybusiness-mcp-extension](../../modules.md) / tools/convertRelativeImports

# tools/convertRelativeImports

Replace relative imports with path aliases.

Walks TypeScript files and rewrites import/export specifiers that begin with
'./' or '../' to the appropriate tsconfig path alias (e.g., `@agent/*`).
