/**
 * @packageDocumentation
 * Data loader utilities for UserContext JSON data files with TypeScript validation.
 *
 * This module provides runtime validation of JSON data against TypeScript interfaces,
 * ensuring type safety while maintaining user configurability.
 */

import * as fs from "fs";
import * as path from "path";
import {
  CategoryConfig,
  BaseRecord,
  PersonRecord,
  isCategoryConfig,
  isRecordArray,
} from "@internal-types/userContext.types";

/**
 * Error thrown when data loading or validation fails
 */
export class DataLoaderError extends Error {
  /**
   * Create a new DataLoaderError
   *
   * @param {string} message - Error description
   * @param {string} [filePath] - Optional file path where error occurred
   */
  constructor(message: string, public readonly filePath?: string) {
    super(message);
    this.name = "DataLoaderError";
  }
}

/**
 * Load and validate category configuration from JSON file
 *
 * @param {string} filePath - Absolute path to the category JSON file
 * @returns {CategoryConfig} Validated CategoryConfig object
 * @throws {DataLoaderError} DataLoaderError if file cannot be read or validation fails
 */
export function loadCategoryConfig(filePath: string): CategoryConfig {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(content);

    if (!isCategoryConfig(data)) {
      throw new DataLoaderError(
        `Invalid category configuration: missing required fields or incorrect types`,
        filePath
      );
    }

    return data;
  } catch (error) {
    if (error instanceof DataLoaderError) {
      throw error;
    }

    if (error instanceof SyntaxError) {
      throw new DataLoaderError(
        `Invalid JSON syntax in category file: ${error.message}`,
        filePath
      );
    }

    throw new DataLoaderError(
      `Failed to read category file: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      filePath
    );
  }
}

/**
 * Load and validate records array from JSON file
 *
 * @param {string} filePath - Absolute path to the records JSON file
 * @returns {BaseRecord[]} Array of validated BaseRecord objects
 * @throws {DataLoaderError} DataLoaderError if file cannot be read or validation fails
 */
export function loadRecords(filePath: string): BaseRecord[] {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(content);

    if (!Array.isArray(data)) {
      throw new DataLoaderError(
        `Records file must contain an array, got ${typeof data}`,
        filePath
      );
    }

    if (!isRecordArray(data)) {
      throw new DataLoaderError(
        `Invalid record format: one or more records missing required fields`,
        filePath
      );
    }

    return data;
  } catch (error) {
    if (error instanceof DataLoaderError) {
      throw error;
    }

    if (error instanceof SyntaxError) {
      throw new DataLoaderError(
        `Invalid JSON syntax in records file: ${error.message}`,
        filePath
      );
    }

    throw new DataLoaderError(
      `Failed to read records file: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      filePath
    );
  }
}

/**
 * Load and validate person records from JSON file
 *
 * @param {string} filePath - Absolute path to the person records JSON file
 * @returns {PersonRecord[]} Array of validated PersonRecord objects
 * @throws {DataLoaderError} DataLoaderError if file cannot be read or validation fails
 */
export function loadPersonRecords(filePath: string): PersonRecord[] {
  const records = loadRecords(filePath);

  // Additional validation for PersonRecord-specific fields
  for (const record of records) {
    if (!record.email || !record.departmentId || !record.role) {
      throw new DataLoaderError(
        `Person record "${record.id}" missing required fields: email, departmentId, or role`,
        filePath
      );
    }
  }

  return records as PersonRecord[];
}

/**
 * Discover and load all UserContext categories from a directory
 *
 * @param {string} baseDir - Base directory containing UserContext category folders
 * @returns {Map<string, { config: CategoryConfig; records: BaseRecord[] }>} Map of category ID to loaded category data
 * @throws {DataLoaderError} DataLoaderError if directory access fails or any category is invalid
 */
export function loadUserContextCategories(
  baseDir: string
): Map<string, { config: CategoryConfig; records: BaseRecord[] }> {
  const categories = new Map();

  try {
    const entries = fs.readdirSync(baseDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const categoryDir = path.join(baseDir, entry.name);
        const categoryFile = path.join(categoryDir, "category.json");
        const recordsFile = path.join(categoryDir, "records.json");

        // Check if both required files exist
        if (fs.existsSync(categoryFile) && fs.existsSync(recordsFile)) {
          try {
            const config = loadCategoryConfig(categoryFile);
            const records = loadRecords(recordsFile);

            categories.set(config.id, { config, records });
          } catch (error) {
            console.warn(
              `Failed to load category "${entry.name}":`,
              error instanceof Error ? error.message : error
            );
          }
        }
      }
    }

    return categories;
  } catch (error) {
    throw new DataLoaderError(
      `Failed to read UserContext directory: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      baseDir
    );
  }
}

/**
 * Resolve data file path with fallback to examples
 *
 * @param {string} categoryDir - Category directory path
 * @param {string} filename - Data file name (e.g., 'category.json', 'records.json')
 * @param {string} [examplesDir] - Examples directory for fallback data
 * @returns {string} Absolute path to the data file
 * @throws {DataLoaderError} DataLoaderError if file cannot be found
 */
export function resolveDataPath(
  categoryDir: string,
  filename: string,
  examplesDir?: string
): string {
  const primaryPath = path.join(categoryDir, filename);

  if (fs.existsSync(primaryPath)) {
    return primaryPath;
  }

  if (examplesDir) {
    const categoryName = path.basename(categoryDir);
    const fallbackPath = path.join(
      examplesDir,
      "userContext",
      categoryName,
      filename
    );

    if (fs.existsSync(fallbackPath)) {
      return fallbackPath;
    }
  }

  throw new DataLoaderError(
    `Data file not found: ${filename} (checked: ${primaryPath}${
      examplesDir
        ? `, ${path.join(
            examplesDir,
            "userContext",
            path.basename(categoryDir),
            filename
          )}`
        : ""
    })`,
    categoryDir
  );
}
