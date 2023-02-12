import { test, expect, describe } from "@jest/globals";
import { OpenAPIV3 } from "@useoptic/openapi-utilities";
import { TestHelpers } from "@useoptic/rulesets-base";
import { OperationRuleset } from "../ruleset-operations";

describe("ruleset operation", () => {
  test("operation removal", async () => {
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
      paths: {},
    };
    const results = await TestHelpers.runRulesWithInputs(
      [OperationRuleset],
      beforeJson,
      afterJson
    );
    expect(results.length > 0).toBe(true);
    expect(results).toMatchSnapshot();
    expect(results.some((result) => !result.passed)).toBe(true);
  });
});
