const { MinAbsSum } = require("../src/MinAbsSum");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[1, 5, 2, -2]], returns: 0 },
      { given: [[]], returns: 0 },
      { given: [[1]], returns: 1 },
      { given: [[3, 3, 3, 3, 3]], returns: 3 },
      { given: [[1, 2, 3]], returns: 0 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = MinAbsSum.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = MinAbsSum.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = MinAbsSum.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
