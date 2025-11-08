[**myBusiness-mcp-extension v1.0.0**](../../README.md)

***

[myBusiness-mcp-extension](../../modules.md) / tools/enhanceJSDoc

# tools/enhanceJSDoc

Enhanced JSDoc coverage generator.

Scans TypeScript source files and ensures every function, method and exported arrow
function has a complete JSDoc block with `@param` / `@returns` tags. Existing blocks
are regenerated (preserving the first summary line when present) to guarantee
consistent formatting required by strict ESLint JSDoc rules.

This is intentionally conservative: it only touches `.ts` source under `src/**` and
skips `.d.ts` declaration files. It relies on the TypeScript compiler API for
accurate parameter and return type detection.
