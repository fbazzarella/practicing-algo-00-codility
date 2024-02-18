const { PermCheck } = require("../src/PermCheck");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[4, 6, 1, 2, 4]], returns: 0 },
      { given: [[4, 3, 1, 2, 5]], returns: 1 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = PermCheck.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
