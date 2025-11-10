/**
 * @packageDocumentation schemaUtils implementation for mcp module
 */

import { CategoryId } from "@internal-types/agentConfig";
import type {
  BusinessCategory,
  RelationshipDescription,
  CategorySchema,
} from "@agent/userContextAgent";

/**
 * RelationshipIntegrityIssue interface.
 *
 */
export interface RelationshipIntegrityIssue {
  categoryId: CategoryId;
  relationship: RelationshipDescription;
  reason: string;
}

/**
 * SchemaValidationSummary interface.
 *
 */
export interface SchemaValidationSummary {
  missingRelationships: RelationshipIntegrityIssue[];
  duplicateSchemaNames: string[];
}

/**
 * NormalizeSchemaName function.
 *
 * @param {string} name - name parameter.
 * @returns {string} - TODO: describe return value.
 */
export function NormalizeSchemaName(name: string): string {
  return name.trim().toLowerCase();
}

/**
 * detectDuplicateSchemas function.
 *
 * @param {CategorySchema[]} schemas - schemas parameter.
 * @returns {string[]} - TODO: describe return value.
 */
export function detectDuplicateSchemas(schemas: CategorySchema[]): string[] {
  const seen = new Map<string, number>();
  const duplicates: string[] = [];
  schemas.forEach((schema) => {
    const Normalized = NormalizeSchemaName(schema.name);
    const count = (seen.get(Normalized) ?? 0) + 1;
    seen.set(Normalized, count);
    if (count > 1) {
      duplicates.push(schema.name);
    }
  });
  return duplicates;
}

/**
 * validateRelationships function.
 *
 * @param {BusinessCategory[]} categories - categories parameter.
 * @returns {RelationshipIntegrityIssue[]} - TODO: describe return value.
 */
export function validateRelationships(
  categories: BusinessCategory[]
): RelationshipIntegrityIssue[] {
  const index = new Map<CategoryId, BusinessCategory>();
  categories.forEach((category) => index.set(category.id, category));
  const issues: RelationshipIntegrityIssue[] = [];
  categories.forEach((category) => {
    category.config.relationships.forEach((relationship) => {
      if (!index.has(relationship.targetCategory)) {
        issues.push({
          categoryId: category.id,
          relationship,
          reason: `Missing target category '${relationship.targetCategory}'`,
        });
      }
    });
  });
  return issues;
}

/**
 * validateCategorySchemas function.
 *
 * @param {BusinessCategory[]} categories - categories parameter.
 * @returns {SchemaValidationSummary} - TODO: describe return value.
 */
export function validateCategorySchemas(
  categories: BusinessCategory[]
): SchemaValidationSummary {
  const missingRelationships = validateRelationships(categories);
  const duplicateSchemaNames = categories
    .flatMap((category) => detectDuplicateSchemas(category.schemas))
    .filter((value, index, array) => array.indexOf(value) === index);
  return { missingRelationships, duplicateSchemaNames };
}
