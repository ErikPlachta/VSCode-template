/**
 * @file schemaUtils implementation for mcp module
 */

import type {
  BusinessCategory,
  CategoryId,
  RelationshipDescription,
  CategorySchema,
} from "@agent/relevantDataManagerAgent";

export interface RelationshipIntegrityIssue {
  categoryId: CategoryId;
  relationship: RelationshipDescription;
  reason: string;
}

export interface SchemaValidationSummary {
  missingRelationships: RelationshipIntegrityIssue[];
  duplicateSchemaNames: string[];
}

export function normaliseSchemaName(name: string): string {
  return name.trim().toLowerCase();
}

export function detectDuplicateSchemas(schemas: CategorySchema[]): string[] {
  const seen = new Map<string, number>();
  const duplicates: string[] = [];
  schemas.forEach((schema) => {
    const normalised = normaliseSchemaName(schema.name);
    const count = (seen.get(normalised) ?? 0) + 1;
    seen.set(normalised, count);
    if (count > 1) {
      duplicates.push(schema.name);
    }
  });
  return duplicates;
}

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

export function validateCategorySchemas(
  categories: BusinessCategory[]
): SchemaValidationSummary {
  const missingRelationships = validateRelationships(categories);
  const duplicateSchemaNames = categories
    .flatMap((category) => detectDuplicateSchemas(category.schemas))
    .filter((value, index, array) => array.indexOf(value) === index);
  return { missingRelationships, duplicateSchemaNames };
}
