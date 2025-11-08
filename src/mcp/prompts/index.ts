/**
 * @packageDocumentation index implementation for prompts module
 */

// TODO: Verify why this is in a folder like this, and what it's even doing.

import type { AgentCapabilityMetadata } from "@mcp/config/agentManifest";

export interface EscalationPromptOptions {
  topic?: string;
  missingSignals?: string[];
  manifest?: AgentCapabilityMetadata | null;
  additionalGuidance?: string;
}

export function renderEscalationPrompt({
  topic,
  missingSignals,
  manifest,
  additionalGuidance,
}: EscalationPromptOptions): string {
  const lines: string[] = [];
  if (manifest) {
    lines.push(
      `The ${manifest.title} handles ${manifest.description.toLowerCase()}.`
    );
    if (manifest.escalateWhen.length) {
      lines.push(
        `It usually escalates when ${manifest.escalateWhen
          .map((entry) => entry.toLowerCase())
          .join(", ")}.`
      );
    }
  }
  if (topic) {
    lines.push(`Clarify how this relates to the **${topic}** category.`);
  }
  if (missingSignals?.length) {
    lines.push("Highlight at least one of these routing signals:");
    missingSignals.forEach((signal) => lines.push(`- ${signal}`));
  }
  if (additionalGuidance) {
    lines.push(additionalGuidance);
  }
  return lines.join("\n");
}

export interface ClarificationPromptOptions {
  question: string;
  manifest: AgentCapabilityMetadata;
  missingSignals?: string[];
  knowledgeSnippets?: Array<{ source: string; summary: string }>;
}

export function renderClarificationPrompt({
  question,
  manifest,
  missingSignals,
  knowledgeSnippets,
}: ClarificationPromptOptions): string {
  const segments: string[] = [
    `The user asked: "${question.trim()}"`,
    `${manifest.title} focuses on ${manifest.description.toLowerCase()}.`,
  ];
  if (missingSignals?.length) {
    segments.push("Ask them to cover one of these signals:");
    missingSignals.forEach((signal) => segments.push(`- ${signal}`));
  }
  if (knowledgeSnippets?.length) {
    segments.push("Helpful background:");
    knowledgeSnippets.forEach((snippet) => {
      segments.push(`- ${snippet.summary} _(source: ${snippet.source})_`);
    });
  }
  segments.push("Respond with a clarifying question that keeps scope focused.");
  return segments.join("\n");
}

export interface ClassificationSummaryOptions {
  agent: AgentCapabilityMetadata;
  matchedSignals?: string[];
}

export function renderClassificationSummary({
  agent,
  matchedSignals,
}: ClassificationSummaryOptions): string {
  const pieces = [`${agent.title}: ${agent.description}`];
  if (matchedSignals?.length) {
    pieces.push(`Matched signals: ${matchedSignals.join(", ")}`);
  }
  return pieces.join(" | ");
}
