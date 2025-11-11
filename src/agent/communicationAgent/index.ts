/**
 * @packageDocumentation Communication Agent - Unified response formatting for all agents
 *
 * The Communication Agent is responsible for transforming structured data from specialized
 * agents into consistent, user-friendly messages. It handles success messages, error reporting,
 * progress updates, and validation results with configurable formatting and tone.
 *
 * Key responsibilities:
 * - Format success responses with appropriate templates and tone
 * - Transform error messages with helpful recovery suggestions
 * - Provide progress updates for long-running operations
 * - Format validation results with clear error messages
 * - Maintain consistent communication style across all agent interactions
 *
 * This agent extends BaseAgentConfig and uses configuration-driven formatting to ensure
 * all responses maintain consistent quality and user experience standards.
 */

import { BaseAgentConfig } from "@internal-types/agentConfig";
import type { AgentConfigDefinition } from "@internal-types/agentConfig";
import { communicationAgentConfig } from "@agent/communicationAgent/agent.config";
import {
  validateAgentConfig,
  generateValidationReport,
} from "@internal-types/configValidation";

/**
 * Response type enumeration for categorizing agent responses
 */
export type ResponseType =
  | "success"
  | "error"
  | "progress"
  | "validation"
  | "info";

/**
 * Severity levels for error and warning messages
 */
export type SeverityLevel = "low" | "medium" | "high" | "critical";

/**
 * Structured response from an agent before formatting
 */
export interface AgentResponse<T = unknown> {
  /** Type of response */
  type: ResponseType;

  /** Status of the operation */
  status: "success" | "error" | "in-progress" | "partial";

  /** Main response data */
  data?: T;

  /** Human-readable message (optional, will be generated if not provided) */
  message?: string;

  /** Additional metadata about the response */
  metadata?: {
    /** Agent that generated this response */
    agentId?: string;

    /** Operation that was performed */
    operation?: string;

    /** Timestamp of the response */
    timestamp?: number;

    /** Duration of the operation in milliseconds */
    duration?: number;

    /** Count of items (for data retrieval) */
    count?: number;

    /** Entity type being operated on */
    entityType?: string;

    /** Additional context-specific fields */
    [key: string]: unknown;
  };

  /** Errors that occurred (for error responses) */
  errors?: Array<{
    /** Error code for programmatic handling */
    code?: string;

    /** Human-readable error message */
    message: string;

    /** Field or path where error occurred */
    path?: string;

    /** Severity of the error */
    severity?: SeverityLevel;

    /** Suggested recovery actions */
    suggestions?: string[];
  }>;

  /** Progress information (for in-progress responses) */
  progress?: {
    /** Current progress (0-100) */
    percentage?: number;

    /** Current step in the process */
    currentStep?: string;

    /** Total number of steps */
    totalSteps?: number;

    /** Elapsed time in milliseconds */
    elapsedTime?: number;

    /** Estimated time remaining in milliseconds */
    estimatedTimeRemaining?: number;
  };
}

/**
 * Formatted response ready for display to user
 */
export interface FormattedResponse {
  /** Formatted message text */
  message: string;

  /** Format of the response */
  format: "markdown" | "plaintext" | "html";

  /** Severity level (for errors) */
  severity?: SeverityLevel;

  /** Whether this response is final or will be updated */
  isFinal: boolean;

  /** Original response data (for programmatic access) */
  raw?: AgentResponse;
}

/**
 * Communication Agent implementation
 *
 * Formats responses from all agents into consistent, user-friendly messages.
 * Handles template processing, error formatting, progress tracking, and tone management.
 */
export class CommunicationAgent extends BaseAgentConfig {
  /**
   * Create a new Communication Agent instance
   *
   * @param {AgentConfigDefinition} [config] - Optional configuration override.
   *   If not provided, uses default communicationAgentConfig.
   * @throws {Error} If configuration validation fails.
   */
  constructor(config?: AgentConfigDefinition) {
    const finalConfig = config ?? communicationAgentConfig;

    // Validate configuration before initialization
    const validationResult = validateAgentConfig(finalConfig);
    if (!validationResult.isValid) {
      const report = generateValidationReport(validationResult);
      throw new Error(
        `CommunicationAgent configuration validation failed:\n${report}`
      );
    }

    super(finalConfig);
    this._validateRequiredSections();
  }

  /**
   * Validate that required configuration sections are present
   *
   * @throws {Error} If required sections are missing.
   * @private
   */
  private _validateRequiredSections(): void {
    const requiredSections = [
      "communication.formatting",
      "communication.errorHandling",
    ];
    const missingSections: string[] = [];

    for (const section of requiredSections) {
      const value = this.getConfigItem<unknown>(section);
      if (!value) {
        missingSections.push(section);
      }
    }

    if (missingSections.length > 0) {
      throw new Error(
        `CommunicationAgent missing required configuration sections: ${missingSections.join(
          ", "
        )}`
      );
    }
  }

  /**
   * Format a success response
   *
   * Transforms a successful operation response into a user-friendly message using
   * configured templates and tone settings.
   *
   * @param {AgentResponse<T>} response - The response to format.
   * @returns {FormattedResponse} Formatted success message.
   * @template T Type of response data.
   */
  formatSuccess<T>(response: AgentResponse<T>): FormattedResponse {
    const format = this.getConfigItem<string>(
      "communication.formatting.defaultFormat"
    ) as "markdown" | "plaintext" | "html";

    // Use provided message or generate from template
    let message = response.message;
    if (!message && response.metadata?.operation) {
      const templates = this.getConfigItem<Record<string, string>>(
        "communication.successTemplates"
      );
      const template =
        templates?.[response.metadata.operation] ||
        "Operation completed successfully.";
      message = this._processTemplate(template, response.metadata);
    }

    message = message || "Operation completed successfully.";

    // Apply formatting based on output format
    const formatted = this._applyFormatting(message, response, format);

    return {
      message: formatted,
      format,
      isFinal: true,
      raw: response,
    };
  }

  /**
   * Format an error response
   *
   * Transforms error information into a helpful, actionable message with recovery
   * suggestions when available.
   *
   * @param {AgentResponse} response - The error response to format.
   * @returns {FormattedResponse} Formatted error message with suggestions.
   */
  formatError(response: AgentResponse): FormattedResponse {
    const format = this.getConfigItem<string>(
      "communication.formatting.defaultFormat"
    ) as "markdown" | "plaintext" | "html";
    const includeRecovery =
      this.getConfigItem<boolean>(
        "communication.errorHandling.suggestRecoveryActions"
      ) ?? true;
    const maxSuggestions =
      this.getConfigItem<number>(
        "communication.errorHandling.maxRecoverySuggestions"
      ) ?? 3;

    let message = response.message || "An error occurred.";

    // Add error details if available
    if (response.errors && response.errors.length > 0) {
      const errorDetails = response.errors
        .map((err) => {
          let detail = err.message;
          if (err.path) {
            detail = `${err.path}: ${detail}`;
          }
          return detail;
        })
        .join("\n");

      if (format === "markdown") {
        message += `\n\n**Error Details:**\n${errorDetails}`;
      } else {
        message += `\n\nError Details:\n${errorDetails}`;
      }
    }

    // Add recovery suggestions
    if (includeRecovery && response.errors && response.errors.length > 0) {
      const suggestions = this._getRecoverySuggestions(
        response.errors[0],
        maxSuggestions
      );
      if (suggestions.length > 0) {
        if (format === "markdown") {
          message += `\n\n**Suggestions:**\n${suggestions
            .map((s) => `- ${s}`)
            .join("\n")}`;
        } else {
          message += `\n\nSuggestions:\n${suggestions
            .map((s) => `• ${s}`)
            .join("\n")}`;
        }
      }
    }

    // Determine severity
    const severity = response.errors?.[0]?.severity || "medium";

    return {
      message,
      format,
      severity,
      isFinal: true,
      raw: response,
    };
  }

  /**
   * Format a progress update
   *
   * Creates progress messages for long-running operations with optional percentage
   * and timing information.
   *
   * @param {AgentResponse} response - The progress response to format.
   * @returns {FormattedResponse} Formatted progress message.
   */
  formatProgress(response: AgentResponse): FormattedResponse {
    const format = this.getConfigItem<string>(
      "communication.formatting.defaultFormat"
    ) as "markdown" | "plaintext" | "html";
    const showPercentage =
      this.getConfigItem<boolean>(
        "communication.progressTracking.showPercentage"
      ) ?? true;
    const showElapsed =
      this.getConfigItem<boolean>(
        "communication.progressTracking.showElapsedTime"
      ) ?? false;

    let message = response.message || "Operation in progress...";

    // Add percentage if available and enabled
    if (showPercentage && response.progress?.percentage !== undefined) {
      message = `${message} (${response.progress.percentage}% complete)`;
    }

    // Add current step if available
    if (response.progress?.currentStep) {
      message += `\n${response.progress.currentStep}`;
    }

    // Add elapsed time if enabled
    if (showElapsed && response.progress?.elapsedTime) {
      const seconds = Math.floor(response.progress.elapsedTime / 1000);
      message += ` [${seconds}s elapsed]`;
    }

    return {
      message,
      format,
      isFinal: false,
      raw: response,
    };
  }

  /**
   * Format a validation result
   *
   * Transforms validation results into clear, structured messages showing what
   * passed, what failed, and specific error details.
   *
   * @param {AgentResponse} response - The validation response to format.
   * @returns {FormattedResponse} Formatted validation message.
   */
  formatValidation(response: AgentResponse): FormattedResponse {
    const format = this.getConfigItem<string>(
      "communication.formatting.defaultFormat"
    ) as "markdown" | "plaintext" | "html";
    const showFieldPaths =
      this.getConfigItem<boolean>("communication.validation.showFieldPaths") ??
      true;
    const maxErrorsPerEntity =
      this.getConfigItem<number>(
        "communication.validation.maxErrorsPerEntity"
      ) ?? 5;

    let message = response.message || "Validation completed.";

    // Add summary if metadata available
    if (response.metadata) {
      const passed = (response.metadata.passedCount as number) || 0;
      const failed = (response.metadata.failedCount as number) || 0;
      const total = passed + failed;

      if (format === "markdown") {
        message += `\n\n**Summary:** ${passed}/${total} passed`;
      } else {
        message += `\n\nSummary: ${passed}/${total} passed`;
      }
    }

    // Add error details if available
    if (response.errors && response.errors.length > 0) {
      const errorList = response.errors.slice(0, maxErrorsPerEntity);
      const errorDetails = errorList.map((err) => {
        if (showFieldPaths && err.path) {
          return `${err.path}: ${err.message}`;
        }
        return err.message;
      });

      if (format === "markdown") {
        message += `\n\n**Issues Found:**\n${errorDetails
          .map((e) => `- ${e}`)
          .join("\n")}`;
      } else {
        message += `\n\nIssues Found:\n${errorDetails
          .map((e) => `• ${e}`)
          .join("\n")}`;
      }

      if (response.errors.length > maxErrorsPerEntity) {
        const remaining = response.errors.length - maxErrorsPerEntity;
        message += `\n... and ${remaining} more issue(s)`;
      }
    }

    return {
      message,
      format,
      isFinal: true,
      raw: response,
    };
  }

  /**
   * Process a template string with variable substitution
   *
   * Replaces {{variable}} placeholders with values from metadata object.
   *
   * @param {string} template - Template string with {{placeholders}}.
   * @param {Record<string, unknown>} metadata - Values to substitute.
   * @returns {string} Processed template string.
   * @private
   */
  private _processTemplate(
    template: string,
    metadata: Record<string, unknown>
  ): string {
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      const value = metadata[key];
      return value !== undefined ? String(value) : match;
    });
  }

  /**
   * Apply formatting enhancements based on output format
   *
   * Adds markdown formatting, HTML tags, or plaintext emphasis as appropriate.
   *
   * @param {string} message - Base message to format.
   * @param {AgentResponse} response - Original response for context.
   * @param {string} format - Output format ("markdown" | "plaintext" | "html").
   * @returns {string} Formatted message.
   * @private
   */
  private _applyFormatting(
    message: string,
    response: AgentResponse,
    format: "markdown" | "plaintext" | "html"
  ): string {
    const highlightKeyInfo =
      this.getConfigItem<boolean>(
        "communication.formatting.highlightKeyInfo"
      ) ?? true;

    if (!highlightKeyInfo) {
      return message;
    }

    // Apply format-specific enhancements
    if (format === "markdown") {
      // Already markdown-friendly, just ensure proper spacing
      return message;
    } else if (format === "html") {
      // Convert basic markdown to HTML
      return message
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
        .replace(/\n/g, "<br>");
    }

    // Plaintext - remove markdown
    return message.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1");
  }

  /**
   * Get recovery suggestions for an error
   *
   * Retrieves configured recovery actions based on error code or type.
   *
   * @param {object} error - Error object.
   * @param {string} [error.code] - Optional error code for categorization.
   * @param {string} error.message - Human-readable error message.
   * @param {number} maxSuggestions - Maximum number of suggestions to return.
   * @returns {string[]} Array of recovery suggestion strings.
   * @private
   */
  private _getRecoverySuggestions(
    error: { code?: string; message: string },
    maxSuggestions: number
  ): string[] {
    const recoveryActions = this.getConfigItem<Record<string, string[]>>(
      "communication.errorHandling.recoveryActions"
    );

    if (!recoveryActions || !error.code) {
      return [];
    }

    const suggestions = recoveryActions[error.code] || [];
    return suggestions.slice(0, maxSuggestions);
  }
}

/**
 * Response Builder Utilities
 *
 * Helper functions for creating consistent AgentResponse objects across all agents.
 */

/**
 * Create a success response
 *
 * @template T Type of response data
 * @param {T} data - The response data.
 * @param {Partial<AgentResponse<T>>} [options] - Optional fields to override defaults.
 * @returns {AgentResponse<T>} Structured success response.
 */
export function createSuccessResponse<T>(
  data: T,
  options?: Partial<AgentResponse<T>>
): AgentResponse<T> {
  return {
    type: "success",
    status: "success",
    data,
    message: options?.message,
    metadata: {
      timestamp: Date.now(),
      ...options?.metadata,
    },
  };
}

/**
 * Create an error response
 *
 * @template T Type of response data (usually undefined for errors)
 * @param {string} message - Error message.
 * @param {Partial<AgentResponse<T>>} [options] - Optional fields including errors array.
 * @returns {AgentResponse<T>} Structured error response.
 */
export function createErrorResponse<T = undefined>(
  message: string,
  options?: Partial<AgentResponse<T>>
): AgentResponse<T> {
  return {
    type: "error",
    status: "error",
    message,
    metadata: {
      timestamp: Date.now(),
      ...options?.metadata,
    },
    errors: options?.errors || [
      {
        message,
        severity: "medium",
      },
    ],
    ...options,
  };
}

/**
 * Create a progress response
 *
 * @template T Type of response data
 * @param {number} percentage - Progress percentage (0-100).
 * @param {string} currentStep - Description of current step.
 * @param {Partial<AgentResponse<T>>} [options] - Optional fields including progress details.
 * @returns {AgentResponse<T>} Structured progress response.
 */
export function createProgressResponse<T>(
  percentage: number,
  currentStep: string,
  options?: Partial<AgentResponse<T>>
): AgentResponse<T> {
  return {
    type: "progress",
    status: "in-progress",
    message: options?.message || `${currentStep} (${percentage}%)`,
    metadata: {
      timestamp: Date.now(),
      ...options?.metadata,
    },
    data: options?.data,
    progress: {
      percentage,
      currentStep,
      ...options?.progress,
    },
  };
}
/**
 * Create a partial success response (some items succeeded, some failed)
 *
 * @template T Type of response data
 * @param {T} data - The response data (successful items).
 * @param {Array<{ message: string; code?: string; severity?: SeverityLevel }>} errors - Errors that occurred.
 * @param {Partial<AgentResponse<T>>} [options] - Optional fields to override defaults.
 * @returns {AgentResponse<T>} Structured partial success response.
 */
export function createPartialResponse<T>(
  data: T,
  errors: Array<{ message: string; code?: string; severity?: SeverityLevel }>,
  options?: Partial<AgentResponse<T>>
): AgentResponse<T> {
  return {
    type: "success",
    status: "partial",
    data,
    message:
      options?.message ||
      `Operation partially completed with ${errors.length} errors`,
    metadata: {
      timestamp: Date.now(),
      ...options?.metadata,
    },
    errors,
    ...options,
  };
}
