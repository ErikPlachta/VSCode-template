[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / docs/orchestration

# docs/orchestration

Orchestration Overview

Explains how intents are routed to agents and how text processing influences classification.

## Components
- Intents (purpose, signals, target agent)
- Text Processing (stop words, min keyword length, scoring weights)
- Escalation (fallback routing, vague phrases)
- Messages (user-facing strings and guidance)

## Configuration Source
TS config: src/agent/orchestrator/agent.config.ts
Manager: src/agent/orchestrator/config.ts

## Key APIs
- getIntents()
- getIntentConfig(intent)
- getTargetAgent(intent)
- getStopWords()
- getScoringWeights()
- getEscalationConfig()
- getMessages()

## Defaults
Reasonable defaults exist so orchestrator remains functional with minimal setup.
