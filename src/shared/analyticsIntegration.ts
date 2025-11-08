/**
 * @packageDocumentation Integration utilities for adding analytics tracking to existing agents.
 */

import { getAnalytics, type AgentUsageAnalytics } from "./agentAnalytics";
import { loadApplicationConfig } from "./configurationLoader";

/**
 * Decorator function for automatic analytics tracking on agent methods.
 *
 * @param {string} agentName - agentName parameter.
 * @param {string} methodName - methodName parameter.
 * @returns {unknown} - TODO: describe return value.
 */
export function trackAgentExecution(agentName: string, methodName?: string) {
  return function <T extends (...args: any[]) => Promise<any>>(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): void {
    const originalMethod = descriptor.value as T;
    const actualMethodName = methodName || propertyKey;

    descriptor.value = async function (...args: any[]): Promise<any> {
      const analytics = getAnalytics();

      return analytics.trackExecution(
        agentName,
        actualMethodName,
        () => originalMethod.apply(this, args),
        {
          metadata: {
            className: target.constructor.name,
            argumentCount: args.length,
          },
        }
      );
    };
  };
}

/**
 * Base class with built-in analytics tracking for agent implementations.
 */
export abstract class TrackedAgent {
  private analytics: AgentUsageAnalytics;
  protected agentName: string;

    /**
 * Creates a new tracked agent instance.
 *
 * @param {string} agentName - agentName parameter.
 * @returns {unknown} - TODO: describe return value.
 */
constructor(agentName: string) {
    this.agentName = agentName;
    this.analytics = getAnalytics();
  }

    /**
 * Executes a tracked operation with automatic analytics recording.
 *
 * @template T
 *
 * @param {string} operationName - operationName parameter.
 * @param {() => Promise<T>} operation - operation parameter.
 * @param {{
      userId?: string;
      metadata?: Record<string, any>;
    }} options - options parameter.
 * @returns {Promise<T>} - TODO: describe return value.
 */
protected async executeTracked<T>(
    operationName: string,
    operation: () => Promise<T>,
    options: {
      userId?: string;
      metadata?: Record<string, any>;
    } = {}
  ): Promise<T> {
    return this.analytics.trackExecution(
      this.agentName,
      operationName,
      operation,
      options
    );
  }

    /**
 * Records a custom analytics event.
 *
 * @param {string} method - method parameter.
 * @param {Record<string, any>} eventData - eventData parameter.
 */
protected recordEvent(
    method: string,
    eventData: Record<string, any> = {}
  ): void {
    this.analytics.recordEvent({
      agentName: this.agentName,
      method,
      ...eventData,
    });
  }

    /**
 * Gets analytics statistics for this agent.
 *
 * @param {Date} since - since parameter.
 * @returns {any | null} - TODO: describe return value.
 */
getStats(since?: Date): any | null {
    return this.analytics.getAgentStats(this.agentName, since);
  }
}

/**
 * Analytics middleware for MCP method invocations.
 *
 * @template T
 *
 * @param {string} agentName - agentName parameter.
 * @param {string} methodName - methodName parameter.
 * @param {T} handler - handler parameter.
 * @returns {T} - TODO: describe return value.
 */
export function withAnalytics<T extends (...args: any[]) => Promise<any>>(
  agentName: string,
  methodName: string,
  handler: T
): T {
  const analytics = getAnalytics();

  return (async (...args: any[]) => {
    return analytics.trackExecution(
      agentName,
      methodName,
      () => handler(...args),
      {
        metadata: {
          argumentTypes: args.map((arg) => typeof arg),
          timestamp: new Date().toISOString(),
        },
      }
    );
  }) as T;
}

/**
 * Performance monitoring utility for critical operations.
 */
export class PerformanceMonitor {
  private analytics: AgentUsageAnalytics;

    /**
 * Creates a new performance monitor instance.
 *
 * @returns {unknown} - TODO: describe return value.
 */
constructor() {
    this.analytics = getAnalytics();
  }

    /**
 * Monitors the performance of a database query operation.
 *
 * @template T
 *
 * @param {string} queryType - queryType parameter.
 * @param {() => Promise<T>} query - query parameter.
 * @param {{
      category?: string;
      filters?: Record<string, any>;
    }} options - options parameter.
 * @returns {Promise<T>} - TODO: describe return value.
 */
async monitorDatabaseQuery<T>(
    queryType: string,
    query: () => Promise<T>,
    options: {
      category?: string;
      filters?: Record<string, any>;
    } = {}
  ): Promise<T> {
    return this.analytics.trackExecution("DatabaseAgent", queryType, query, {
      metadata: {
        queryType,
        category: options.category,
        filterCount: options.filters ? Object.keys(options.filters).length : 0,
        performanceMarker: "database-query",
      },
    });
  }

    /**
 * Monitors data processing operations.
 *
 * @template T
 *
 * @param {string} operationType - operationType parameter.
 * @param {() => Promise<T>} processor - processor parameter.
 * @param {{
      inputSize?: number;
      category?: string;
    }} options - options parameter.
 * @returns {Promise<T>} - TODO: describe return value.
 */
async monitorDataProcessing<T>(
    operationType: string,
    processor: () => Promise<T>,
    options: {
      inputSize?: number;
      category?: string;
    } = {}
  ): Promise<T> {
    return this.analytics.trackExecution(
      "DataAgent",
      operationType,
      processor,
      {
        metadata: {
          operationType,
          inputSize: options.inputSize,
          category: options.category,
          performanceMarker: "data-processing",
        },
      }
    );
  }

    /**
 * Monitors orchestration decisions and routing.
 *
 * @template T
 *
 * @param {string} decision - decision parameter.
 * @param {() => Promise<T>} orchestration - orchestration parameter.
 * @param {{
      intent?: string;
      agentCount?: number;
    }} options - options parameter.
 * @returns {Promise<T>} - TODO: describe return value.
 */
async monitorOrchestration<T>(
    decision: string,
    orchestration: () => Promise<T>,
    options: {
      intent?: string;
      agentCount?: number;
    } = {}
  ): Promise<T> {
    return this.analytics.trackExecution(
      "Orchestrator",
      decision,
      orchestration,
      {
        metadata: {
          decision,
          intent: options.intent,
          agentCount: options.agentCount,
          performanceMarker: "orchestration",
        },
      }
    );
  }
}

/**
 * Initializes analytics for the application based on configuration.
 *
 * @returns {Promise<AgentUsageAnalytics>} - TODO: describe return value.
 */
export async function initializeAnalytics(): Promise<AgentUsageAnalytics> {
  try {
    const config = await loadApplicationConfig();

    const analyticsConfig = {
      enabled: config.agents?.global?.enableTelemetry ?? true,
      sampleRate: config.performance?.monitoring?.sampleRate ?? 1.0,
      maxEvents: 10000,
      retentionPeriod: 7 * 24 * 60 * 60 * 1000, // 7 days
      batchSize: 100,
      persistentStorage: false,
    };

    return getAnalytics(analyticsConfig);
  } catch (error) {
    // Fallback to default analytics if config loading fails
    console.warn(
      "Failed to load analytics configuration, using defaults:",
      error
    );
    return getAnalytics();
  }
}

/**
 * Creates a scheduled analytics report generator.
 *
 * @param {number} intervalMs - intervalMs parameter.
 * @param {string} outputPath - outputPath parameter.
 * @returns {NodeJS.Timeout} - TODO: describe return value.
 */
export function scheduleAnalyticsReports(
  intervalMs: number = 24 * 60 * 60 * 1000, // Daily by default
  outputPath: string = "logs/analytics-report.md"
): NodeJS.Timeout {
  const { createStandardReport } = require("./analyticsDashboard");

  return setInterval(async () => {
    try {
      const analytics = getAnalytics();
      const endDate = new Date();
      const startDate = new Date(endDate.getTime() - intervalMs);

      const summary = analytics.generateSummary(startDate);
      const report = createStandardReport(summary, startDate, endDate);

      // Write report to file (placeholder implementation)
      console.log("Analytics report generated:", {
        period: { start: startDate, end: endDate },
        totalEvents: summary.totalEvents,
        outputPath,
      });

      // In a real implementation, you would write to file system here
      // await fs.promises.writeFile(outputPath, report, 'utf-8');
    } catch (error) {
      console.error("Failed to generate analytics report:", error);
    }
  }, intervalMs);
}

/**
 * Global performance monitor instance.
 */
export const performanceMonitor = new PerformanceMonitor();
