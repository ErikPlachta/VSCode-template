import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import jsdoc from "eslint-plugin-jsdoc";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        sourceType: "module",
        project: ["./tsconfig.json"],
      },
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        global: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
        NodeJS: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      jsdoc: jsdoc,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...jsdoc.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { allowExpressions: false },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "jsdoc/require-file-overview": "error",
      "jsdoc/require-description": ["error", { descriptionStyle: "body" }],
      "jsdoc/require-param": "error",
      "jsdoc/require-param-description": "error",
      "jsdoc/require-returns": ["error", { forceReturnsWithAsync: true }],
      "jsdoc/require-returns-description": "error",
      "jsdoc/require-throws": "error",
      "jsdoc/require-jsdoc": [
        "error",
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: true,
            FunctionExpression: true,
          },
          contexts: [
            'ExportNamedDeclaration[declaration.type="TSInterfaceDeclaration"]',
            'ExportNamedDeclaration[declaration.type="TSTypeAliasDeclaration"]',
          ],
        },
      ],
      "jsdoc/require-property-description": "error",
      "jsdoc/no-undefined-types": ["error", { definedTypes: ["NodeJS"] }],
      "jsdoc/no-defaults": "off",
      "jsdoc/tag-lines": ["error", "any", { startLines: 1 }],
      "jsdoc/require-example": "off",
      "jsdoc/require-hyphen-before-param-description": "error",
    },
    settings: {
      jsdoc: {
        mode: "typescript",
        tagNamePreference: {
          file: "file",
          fileoverview: "fileoverview",
        },
      },
    },
  },
  {
    ignores: ["out/**", "bin/**", "node_modules/**", "*.config.js"],
  },
];
