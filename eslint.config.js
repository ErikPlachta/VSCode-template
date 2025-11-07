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
      "jsdoc/require-file-overview": "off",
      "jsdoc/require-description": "off",
      "jsdoc/require-param": "off",
      "jsdoc/require-param-description": "off",
      "jsdoc/require-returns": "off",
      "jsdoc/require-returns-description": "off",
      "jsdoc/require-throws": "off",
      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-property-description": "off",
      "jsdoc/no-undefined-types": "off",
      "jsdoc/no-defaults": "off",
      "jsdoc/tag-lines": "off",
      "jsdoc/require-example": "off",
      "jsdoc/require-hyphen-before-param-description": "off",
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
    files: ["src/agent/**/*.ts", "src/tools/**/*.ts"],
    rules: {
      "jsdoc/require-jsdoc": "off",
    },
  },
  {
    ignores: ["out/**", "bin/**", "node_modules/**", "*.config.js"],
  },
];
