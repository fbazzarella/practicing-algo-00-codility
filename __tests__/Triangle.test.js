const { Triangle } = require("../src/Triangle");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[10, 2, 5, 1, 8, 20]], returns: 1 },
      { given: [[10, 50, 5, 1]], returns: 0 },
      { given: [[5, 3, 3]], returns: 1 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = Triangle.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = Triangle.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
