These are instructions I have started for the next branch, so that I can work through and clean up the Agents more.

It's rough draft and needs review.

If CoPilot Chat sees this file, do not change it and do not modify it.

Context below to make a plan for next steps:

1. Firstly, the change made to the orchestrator logic did resolve the error I was seeing. That being said, we've broken one of the core application rules:

   > - Data driven design.
   > - Segmentation of responsibilities.
   >
   > **There are two violations that I see**:
   >
   > 1.1. Orchestrator has hard-coded data, instead of using a data driven design.
   > 1.2. Orchestrator should be using another agent to handle the data processing.
   >
   > At this point, I'm concerned there is more.
   >
   > Furthermore, we need to figure out why you keep making this mistake when developing solutions

2. DO a deep review on agents, verify you understand the existing features, outlining the 5 Ws for each.
   > - What is the agent's design intention?
   > - What problem does it solve?
   > - Why does it solve that problem?
   > - How does it solve problem(s)?
   > - When does it solve problems?
   > - etc,etc,etc.
3. During this process, please update the JSDocs within each agent.
   > - Don't assume anything existing is accurate.
4. I want `C:\repo\vscode-extension-mcp-server\src\agent\index.ts` to be updated to contain more details.
   > It should contain documentation level details, overviewing the applications core design and infrastructure.
5. During this process, also look for any concerns where core application design goals are not being followed.
   > - If you do, update the current tasks in the change log so that it's clear what needs to be resolved.
