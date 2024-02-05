const { CyclicRotation } = require("../src/cyclicRotation");

const testCases = [
  {"given": [[3, 8, 9, 7, 6], 0], "returns": [3, 8, 9, 7, 6]},
  {"given": [[3, 8, 9, 7, 6], 3], "returns": [9, 7, 6, 3, 8]},
  {"given": [[3, 8, 9, 7, 6], 5], "returns": [3, 8, 9, 7, 6]},
];

describe("correctness", () => {
  test("first solution", () => {
    for(let testCase of testCases) {
      const returned = CyclicRotation.firstSolution(...testCase["given"]).toString();
      const expected = testCase["returns"].toString();

      expect(returned).toBe(expected);
    };
  });
});
