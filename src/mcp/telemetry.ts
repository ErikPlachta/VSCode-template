/**
 * @file telemetry implementation for mcp module
 */

export interface InvocationEvent {
  agent: string;
  operation: string;
  status: "success" | "error";
  startedAt: number;
  finishedAt: number;
  durationMs: number;
  metadata?: Record<string, unknown>;
  error?: { name: string; message: string };
}

export interface InvocationLogger {
  log(event: InvocationEvent): void;
}

class ConsoleInvocationLogger implements InvocationLogger {
  log(event: InvocationEvent): void {
    if (process.env.JEST_WORKER_ID) {
      return;
    }
    const label = `[telemetry] ${event.agent}:${event.operation}`;
    if (event.status === "error") {
      console.error(label, { ...event, error: event.error });
    } else {
      console.info(label, event);
    }
  }
}

export interface InvocationWrapper {
  <T>(operation: string, fn: () => Promise<T>, metadata?: Record<string, unknown>): Promise<T>;
}

/**
 * Create a helper that wraps asynchronous operations and emits telemetry events.
 */
export function createInvocationLogger(agent: string, logger: InvocationLogger = new ConsoleInvocationLogger()): InvocationWrapper {
  return async <T>(operation: string, fn: () => Promise<T>, metadata?: Record<string, unknown>): Promise<T> => {
    const startedAt = Date.now();
    try {
      const result = await fn();
      const finishedAt = Date.now();
      logger.log({
        agent,
        operation,
        status: "success",
        startedAt,
        finishedAt,
        durationMs: finishedAt - startedAt,
        metadata
      });
      return result;
    } catch (error) {
      const finishedAt = Date.now();
      const normalisedError = error instanceof Error ? error : new Error(String(error));
      logger.log({
        agent,
        operation,
        status: "error",
        startedAt,
        finishedAt,
        durationMs: finishedAt - startedAt,
        metadata,
        error: {
          name: normalisedError.name,
          message: normalisedError.message
        }
      });
      throw normalisedError;
    }
  };
}

