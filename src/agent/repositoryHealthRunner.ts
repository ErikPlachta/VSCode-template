/**
 * @file Enforced documentation and metadata compliance.
 *
 * All source files must provide comprehensive docblocks per project standards.
 */

import process from 'node:process';
import { RepositoryHealthAgent } from './repositoryHealthAgent';

/**
 * Execute the repository health agent and optionally persist a Markdown report.
 *
 * @returns - Promise that resolves when execution completes.
 * @throws - When the agent encounters an unexpected failure.
 *
 * @example
 * ```ts
 * await runHealthCheck();
 * ```
 */
async function runHealthCheck(): Promise<void> {
  const agent: RepositoryHealthAgent = await RepositoryHealthAgent.createFromDisk();
  const report = await agent.runAllChecks();

  for (const check of report.checks) {
    const status: string = check.passed ? 'PASSED' : 'FAILED';
     
    console.log(`[${status}] ${check.name}`);
    for (const message of check.messages) {
       
      console.log(`  - ${message}`);
    }
  }

  await agent.writeReport(report);

  if (!report.passed) {
    process.exitCode = 1;
  }
}

void runHealthCheck().catch((error: unknown) => {
   
  console.error('Repository health check encountered an unrecoverable error.', error);
  process.exitCode = 1;
});
