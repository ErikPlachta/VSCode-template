/**
 * @fileoverview Integration utilities for adding analytics tracking to existing agents.
 */

import { getAnalytics, type AgentUsageAnalytics } from "./agentAnalytics";
import { loadApplicationConfig } from "./configurationLoader";

/**
 * Decorator function for automatic analytics tracking on agent methods.
 *
 * @param agentName-  - Name of the agent class.
 * @param methodName-  - Name of the method being tracked.
 * @returns - Method decorator function.
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
   * @param agentName-  - Name of the agent for analytics tracking.
   */
  constructor(agentName: string) {
    this.agentName = agentName;
    this.analytics = getAnalytics();
  }

  /**
   * Executes a tracked operation with automatic analytics recording.
   *
   * @param operationName-  - Name of the operation being performed.
   * @param operation-  - Operation function to execute.
   * @param options-  - Additional tracking options.
   * @returns - Promise resolving to operation result.
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
   * @param method-  - Method name for the event.
   * @param eventData-  - Additional event data.
   * @returns - */
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
   * @param since-  - Optional start date for filtering.
   * @returns - Agent statistics or null if no data.
   */
  getStats(since?: Date): any | null {
    return this.analytics.getAgentStats(this.agentName, since);
  }
}

/**
 * Analytics middleware for MCP method invocations.
 *
 * @param agentName-  - Name of the agent.
 * @param methodName-  - Name of the MCP method.
 * @param handler-  - Original method handler.
 * @returns - Wrapped handler with analytics tracking.
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
   */
  constructor() {
    this.analytics = getAnalytics();
  }

  /**
   * Monitors the performance of a database query operation.
   *
   * @param queryType-  - Type of database query.
   * @param query-  - Query function to execute.
   * @param options-  - Monitoring options.
   * @returns - Promise resolving to query result.
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
   * @param operationType-  - Type of data processing operation.
   * @param processor-  - Processing function to execute.
   * @param options-  - Monitoring options.
   * @returns - Promise resolving to processing result.
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
   * @param decision-  - Type of orchestration decision.
   * @param orchestration-  - Orchestration function to execute.
   * @param options-  - Monitoring options.
   * @returns - Promise resolving to orchestration result.
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
 * @returns - Promise resolving to configured analytics instance.
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
 * @param intervalMs-  - Interval in milliseconds between reports.
 * @param outputPath-  - File path for report output.
 * @returns - Timer for the scheduled reports.
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
