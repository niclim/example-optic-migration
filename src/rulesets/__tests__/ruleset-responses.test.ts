import { test, expect, describe } from "@jest/globals";
import { OpenAPIV3 } from "@useoptic/openapi-utilities";
import { TestHelpers } from "@useoptic/rulesets-base";
import { ResponseRuleset } from "../ruleset-responses";

describe("ruleset response", () => {
  test("status code removal", async () => {
    const beforeJson: OpenAPIV3.Document = {
      ...TestHelpers.createEmptySpec(),
      paths: {
        "/api/users": {
          get: {
            responses: {
              "200": {
                description: "",
              },
            },
          },
        },
      },
    };
    const afterJson: OpenAPIV3.Document = {
      ...TestHelpers.createEmptySpec(),
      paths: {
        "/api/users": {
          get: {
            responses: {},
          },
        },
      },
    };
    const results = await TestHelpers.runRulesWithInputs(
      [ResponseRuleset],
      beforeJson,
      afterJson
    );
    expect(results.length > 0).toBe(true);
    expect(results).toMatchSnapshot();
    expect(results.some((result) => !result.passed)).toBe(true);
  });
});
