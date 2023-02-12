import { ResponseRule, RuleError, Ruleset } from "@useoptic/rulesets-base";

export const preventResponseStatusCodeRemoval = new ResponseRule({
  name: "prevent response status code removal",
  rule: (responseAssertions) => {
    responseAssertions.removed((value) => {
      throw new RuleError({
        message: `must not remove response status code ${value.statusCode}. This is a breaking change.`,
      });
    });
  },
});

export const ResponseRuleset = new Ruleset({
  name: "response",
  rules: [preventResponseStatusCodeRemoval],
});
