# TSDoc Reference Guide

A comprehensive guide for adopting and maintaining TSDoc standards in a TypeScript codebase. Use this as a foundational reference to enforce consistent, well-documented, and IntelliSense-friendly TypeScript code.

---

## 📘 What is TSDoc?

TSDoc is a standard for documenting TypeScript code, similar to JSDoc but explicitly tailored for TypeScript syntax and use cases. It is compatible with tooling like TypeScript's IntelliSense, TypeDoc, API Extractor, and LLMs that consume documentation comments.

> Official site: [https://tsdoc.org](https://tsdoc.org)

---

## 📐 Syntax Basics

Use multi-line doc comments with double asterisks:

```ts
/**
 * A short description.
 */
const x = 42;
```

### 🧾 Structure

````ts
/**
 * Summary line (one sentence)
 *
 * More detailed description.
 *
 * @remarks
 * Additional notes or implementation details.
 *
 * @example
 * Here's how you use it:
 * ```ts
 * const result = doSomething();
 * ```
 */
````

---

## 🔖 Supported Tags

### `@param` — Document function parameters

```ts
/**
 * Adds two numbers.
 *
 * @param a - The first number.
 * @param b - The second number.
 */
function add(a: number, b: number): number {}
```

### `@returns` — Describe the return value

```ts
/**
 * @returns The sum of `a` and `b`.
 */
```

### `@remarks` — Long-form commentary

```ts
/**
 * @remarks
 * This method is performance-critical and avoids allocations.
 */
```

### `@example` — Inline usage example

````ts
/**
 * @example
 * ```ts
 * const result = add(2, 3); // 5
 * ```
 */
````

### `@deprecated` — Marks APIs as deprecated

```ts
/**
 * @deprecated Use `newMethod()` instead.
 */
```

### `@see` — Reference another symbol or URL

```ts
/**
 * @see {@link OtherType}
 * @see https://example.com/docs
 */
```

### `@throws` — Document exceptions

```ts
/**
 * @throws {TypeError} If the argument is null.
 */
```

### `@typeParam` — For generic type parameters

```ts
/**
 * @typeParam T - The element type.
 */
class Box<T> {}
```

---

## 🧱 Interface/Type Member Documentation

Place TSDoc comments directly above each field for full IntelliSense:

```ts
/**
 * Represents an agent identity.
 */
interface AgentIdentity {
  /** Unique ID for the agent */
  id: string;

  /** Human-readable name */
  name: string;

  /** Semantic version */
  version: string;

  /** Description of capabilities */
  description: string;
}
```

---

## ✅ Best Practices

- Use `/** */` for all public interfaces, functions, classes, enums.
- Always describe `@param`, `@returns`, and include `@example` where meaningful.
- Avoid repeating type information in comments (TypeScript already knows types).
- Use `@remarks` for long-form docs instead of bloating the summary.
- Use `@deprecated` with actionable advice.

---

## 📦 Use Cases

| Use Case                 | Example                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| Library/Public API       | Exported interfaces, functions, types                                                    |
| Internal API             | Complex modules, team-shared components                                                  |
| Documentation generation | Paired with [TypeDoc](https://typedoc.org) or [API Extractor](https://api-extractor.com) |
| LLM context consumption  | Feed clean docs for accurate summarization and refactoring assistance                    |

---

## 🧰 Tooling Support

- [TypeDoc](https://typedoc.org) — Converts TSDoc to static HTML docs
- [API Extractor](https://api-extractor.com) — Used in large monorepos to extract and validate API signatures
- [tsdoc](https://tsdoc.org) — Specification and parser
- [ESLint plugins](https://github.com/gajus/eslint-plugin-jsdoc) — Linting and style enforcement (limited TSDoc support)

---

## 📚 References

- Official TSDoc: [https://tsdoc.org](https://tsdoc.org)
- TypeScript Handbook: [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- MDN JS Doc Reference (legacy but relevant): [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- TypeDoc: [https://typedoc.org](https://typedoc.org)
- API Extractor: [https://api-extractor.com](https://api-extractor.com)
