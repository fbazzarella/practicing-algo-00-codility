const { FibFrog } = require("../src/FibFrog");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]], returns: 3 },
      { given: [[]], returns: 1 },
      { given: [[0, 0, 0]], returns: -1 },
      { given: [[1]], returns: 1 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = FibFrog.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = FibFrog.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = FibFrog.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
