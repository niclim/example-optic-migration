import { OperationRule, RuleError, Ruleset } from "@useoptic/rulesets-base";

const rulesetName = "operations";

export const preventOperationRemoval = new OperationRule({
  name: "prevent operation removal",
  rule: (operationAssertions) => {
    operationAssertions.removed(() => {
      throw new RuleError({
        message: "cannot remove an operation. This is a breaking change.",
      });
    });
  },
});

export const OperationRuleset = new Ruleset({
  name: rulesetName,
  rules: [preventOperationRemoval],
});

export default {
  name: rulesetName, // This is used for identifying the ruleset and determining what is the latest ruleset
  description: "Some description",
  rulesetConstructor: () =>
    new Ruleset({
      name: rulesetName,
      rules: [preventOperationRemoval],
    }),
};
