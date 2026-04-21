const { Distinct } = require("../src/Distinct");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[4, 9, 7, 1, 11, 10, 5, 12, 6, 2, 3, 8]], returns: 12 },
      { given: [[1, 1, 1]], returns: 1 },
      { given: [[]], returns: 0 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = Distinct.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = Distinct.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = Distinct.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
