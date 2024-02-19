const { MaxCounters } = require("../src/MaxCounters");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [5, [3, 4, 4, 6, 1, 4, 4]], returns: [3, 2, 2, 4, 2] },
      { given: [3, [3, 4, 1]], returns: [2, 1, 1] },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = MaxCounters.firstSolution(...testCase.given).toString();
      const expected = testCase.returns.toString();

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = MaxCounters.secondSolution(...testCase.given).toString();
      const expected = testCase.returns.toString();

      expect(received).toBe(expected);
    }
  });
});
