/**
 * @packageDocumentation Orchestrator bridge for MCP tool calls.
 *
 * Coordinates Orchestrator and agents for the MCP server. Resolves categories
 * via UserContextAgent, runs queries via DatabaseAgent, and delegates
 * user-facing formatting to CommunicationAgent to keep the server thin.
 */
import { CommunicationAgent } from "@agent/communicationAgent";
import { Orchestrator } from "@agent/orchestrator";
import { UserContextAgent } from "@agent/userContextAgent";
import { DatabaseAgent } from "@agent/databaseAgent";
import { ensureCacheDirectory } from "@extension/mcpCache";

/** Result returned to the MCP server after CommunicationAgent formatting. */
export interface BridgeResult {
  message: string;
}

/**
 * Create core agent instances used to fulfill MCP tool requests.
 *
 * Returns orchestrator (coordination), userContext (category metadata/content),
 * and database (record queries). Cache directory derives from extension utilities.
 */
/**
 * Create fully initialized agent instances used for bridge operations.
 * Exported for server dynamic tool registry assembly to avoid duplicating
 * agent instantiation logic in transport layer.
 *
 * @returns Initialized orchestrator, userContext, and database agents.
 */
export async function createAgents(): Promise<{
  orchestrator: Orchestrator;
  userContext: UserContextAgent;
  database: DatabaseAgent;
}> {
  const orchestrator = new Orchestrator();
  const cacheDir = ensureCacheDirectory();
  let userContext: UserContextAgent;
  try {
    userContext = new UserContextAgent(undefined, cacheDir);
  } catch (e) {
    throw new Error(
      `UserContextAgent initialization failed: ${
        e instanceof Error ? e.message : String(e)
      }`
    );
  }

  // Build DatabaseAgent data sources from UserContextAgent (data-driven)
  const summaries = userContext.listCategories();
  const dataSources = summaries.map((s) => {
    const c = userContext.getCategory(s.id);
    return {
      id: c.id,
      name: c.name,
      records: c.records,
      schema: c.schemas,
      fieldAliases: {},
    };
  });
  const database = new DatabaseAgent(dataSources, cacheDir);
  return { orchestrator, userContext, database };
}

/**
 * Describe a category by id, name, or alias and return a formatted message.
 * Enumerates available categories in error metadata for clarification.
 *
 * @param topicOrId - Category identifier, name, or alias.
 * @returns A formatted message suitable for MCP tool content.
 */
export async function describeCategoryBridge(
  topicOrId: string
): Promise<BridgeResult> {
  const { orchestrator, userContext } = await createAgents();
  const comms = new CommunicationAgent();

  try {
    const category = userContext.getCategory(topicOrId);
    const payload = {
      category: {
        id: category.id,
        name: category.name,
        description: category.description,
      },
      relationships: category.config.relationships ?? [],
      schemas: category.schemas,
      examples: category.examples,
      queries: category.queries,
    };

    const response = await orchestrator.callAgentWithResponse(
      "user-context-agent",
      "describeCategory",
      async () => payload,
      { metadata: { categoryId: category.id, entityType: category.id } }
    );
    const formatted = comms.formatSuccess(response);
    const lower = formatted.message.toLowerCase();
    if (
      !lower.includes(category.id.toLowerCase()) &&
      !lower.includes(category.name.toLowerCase())
    ) {
      formatted.message = `${formatted.message}\nCategory: ${category.id} (${category.name})`;
    }
    return { message: formatted.message };
  } catch (error) {
    // Enumerate available categories for helpful guidance
    try {
      const available = userContext.listCategories().map((c) => c.id);
      const err = CommunicationAgent.createErrorResponse(
        error instanceof Error ? error.message : String(error),
        {
          metadata: { availableCategories: available },
        }
      );
      const formatted = comms.formatError(err);
      return { message: formatted.message };
    } catch {
      const err = CommunicationAgent.createErrorResponse(
        error instanceof Error ? error.message : String(error)
      );
      const formatted = comms.formatError(err);
      return { message: formatted.message };
    }
  }
}

/**
 * Search records within a category resolved by id, name, or alias.
 * Returns a formatted result and includes available categories on error.
 *
 * @param topicOrId - Category identifier, name, or alias.
 * @param filters - Equality filters applied to structured fields.
 * @returns A formatted message suitable for MCP tool content.
 */
export async function searchCategoryRecordsBridge(
  topicOrId: string,
  filters: Record<string, unknown> = {}
): Promise<BridgeResult> {
  const { orchestrator, userContext, database } = await createAgents();
  const comms = new CommunicationAgent();

  try {
    const category = userContext.getCategory(topicOrId);
    const response = await orchestrator.callAgentWithResponse(
      "database-agent",
      "executeQuery",
      () => database.executeQuery(category.id, filters, {}),
      { metadata: { categoryId: category.id, entityType: category.id } }
    );
    const formatted = comms.formatSuccess(response);
    const lower = formatted.message.toLowerCase();
    if (!lower.includes(category.id.toLowerCase())) {
      formatted.message = `${formatted.message}\nCategory: ${category.id}`;
    }
    return { message: formatted.message };
  } catch (error) {
    try {
      const available = userContext.listCategories().map((c) => c.id);
      const err = CommunicationAgent.createErrorResponse(
        error instanceof Error ? error.message : String(error),
        {
          metadata: { availableCategories: available },
        }
      );
      const formatted = comms.formatError(err);
      return { message: formatted.message };
    } catch {
      const err = CommunicationAgent.createErrorResponse(
        error instanceof Error ? error.message : String(error)
      );
      const formatted = comms.formatError(err);
      return { message: formatted.message };
    }
  }
}

/**
 * List available business categories (id + name) without formatting.
 * Used by server to derive dynamic tool descriptor metadata.
 *
 * @returns Array of category summary objects.
 */
export async function listCategorySummariesBridge(): Promise<
  Array<{ id: string; name: string }>
> {
  const { userContext } = await createAgents();
  return userContext.listCategories().map((c) => ({ id: c.id, name: c.name }));
}
