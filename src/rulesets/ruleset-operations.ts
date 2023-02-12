import { OperationRule, RuleError, Ruleset } from "@useoptic/rulesets-base";

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
  name: "operations",
  rules: [preventOperationRemoval],
});
