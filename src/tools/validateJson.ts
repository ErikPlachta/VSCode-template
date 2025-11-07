/**
 * @file Enforced documentation and metadata compliance.
 *
 * All source files must provide comprehensive docblocks per project standards.
 */

import process from 'node:process';
import { RepositoryHealthAgent } from '../agent/repositoryHealthAgent';

/**
 * Execute JSON schema validation using the repository health agent.
 *
 * @returns {Promise<void>} Promise that resolves when validation completes.
 * @throws {Error} When validation fails unexpectedly.
 *
 * @example
 * ```ts
 * await runJsonValidation();
 * ```
 */
async function runJsonValidation(): Promise<void> {
  const agent: RepositoryHealthAgent = await RepositoryHealthAgent.createFromDisk();
  const result = await agent.validateJsonSchemas();
  if (!result.passed) {
    for (const message of result.messages) {
       
      console.error(message);
    }
    process.exitCode = 1;
  }
}

void runJsonValidation().catch((error: unknown) => {
   
  console.error('JSON validation encountered an unrecoverable error.', error);
  process.exitCode = 1;
});
