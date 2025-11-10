import { Orchestrator } from "@agent/orchestrator";
import { orchestratorConfig } from "@agent/orchestrator/agent.config";
import type { ConfigDescriptor } from "@internal-types/agentConfig";

describe("Orchestrator descriptor map", () => {
  const orchestrator = new Orchestrator(orchestratorConfig);
  const descriptors: Record<string, ConfigDescriptor> =
    orchestrator.getConfigDescriptors();

  it("should expose non-empty descriptor collection", () => {
    expect(Object.keys(descriptors).length).toBeGreaterThan(0);
  });

  it("all descriptor verify paths should resolve", () => {
    for (const [key, desc] of Object.entries(descriptors)) {
      const { passed, missing } = orchestrator.verifyDescriptor(desc);
      expect(passed).toBe(true);
      if (!passed) {
        // Provide granular debug info on failure
        // eslint-disable-next-line no-console
        console.error("Descriptor missing paths", { key, missing });
      }
    }
  });

  it("getByDescriptor should return same value as direct getConfigItem", () => {
    Object.values(descriptors).forEach((desc) => {
      const viaDescriptor = orchestrator.getByDescriptor(desc);
      const direct = orchestrator.getConfigItem(desc.path);
      expect(viaDescriptor).toEqual(direct);
    });
  });

  it("should throw when required nested leaf is missing during construction", () => {
    const cloned = JSON.parse(JSON.stringify(orchestratorConfig));
    delete cloned.orchestration.textProcessing.scoringWeights.signalMatch;
    expect(() => new Orchestrator(cloned)).toThrow(
      /scoringWeights.signalMatch/
    );
  });

  it("setByDescriptor should mutate nested object and getByDescriptor should reflect change", () => {
    const desc = descriptors.scoringWeights;
    const original =
      orchestrator.getByDescriptor<Record<string, number>>(desc)!;
    const updated = { ...original, signalMatch: original.signalMatch + 1 };
    orchestrator.setByDescriptor(desc, updated, "local");
    const roundTrip =
      orchestrator.getByDescriptor<Record<string, number>>(desc)!;
    expect(roundTrip).toEqual(updated);
    // Reset by clearing local override
    orchestrator.setByDescriptor(desc, undefined, "local");
    const reverted =
      orchestrator.getByDescriptor<Record<string, number>>(desc)!;
    expect(reverted).toEqual(original);
  });
});
