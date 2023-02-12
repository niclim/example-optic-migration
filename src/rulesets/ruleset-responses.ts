import { ResponseRule, RuleError, Ruleset } from "@useoptic/rulesets-base";

const rulesetName = "responses";

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

export default {
  name: rulesetName, // This is used for identifying the ruleset and determining what is the latest ruleset
  description: "Some description",
  rulesetConstructor: () =>
    new Ruleset({
      name: rulesetName,
      rules: [preventResponseStatusCodeRemoval],
    }),
};
