const { MissingInteger } = require("../src/MissingInteger");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[2, 3, -5, 6, 4, 1, 2, -1]], returns: 5 },
      { given: [[-1, -3]], returns: 1 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = MissingInteger.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
