import { initializeCli } from "@useoptic/optic-ci/build/initialize";
import { OperationRuleset } from "./rulesets/ruleset-operations";
import { ResponseRuleset } from "./rulesets/ruleset-responses";

const rulesets = [OperationRuleset, ResponseRuleset];

(async () => {
  const cli = await initializeCli({
    token: process.env.OPTIC_TOKEN || "",
    gitProvider: {
      token: process.env.GITHUB_TOKEN || "",
    },
    rules: rulesets,
    spectralConfig: {
      "openapi-tags": "off",
      "operation-tags": "off",
      "info-contact": "off",
      "info-description": "off",
      "info-license": "off",
      "license-url": "off",
      "oas3-unused-component": "off",
    },
  });

  cli.parse(process.argv);
})();
