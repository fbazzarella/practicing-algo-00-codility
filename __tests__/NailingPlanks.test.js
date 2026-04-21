const { NailingPlanks } = require("../src/NailingPlanks");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]], returns: 4 },
      { given: [[1], [2], [3]], returns: -1 },
      { given: [[1], [5], [3]], returns: 1 },
      { given: [[1, 1], [5, 5], [3, 3]], returns: 1 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = NailingPlanks.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = NailingPlanks.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = NailingPlanks.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
