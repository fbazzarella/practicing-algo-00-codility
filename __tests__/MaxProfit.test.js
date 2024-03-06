const { MaxProfit } = require("../src/MaxProfit");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[8, 9, 3, 6, 1, 2]], returns: 3 },
      { given: [[23171, 21011, 21123, 21366, 21013, 21367]], returns: 356 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = MaxProfit.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = MaxProfit.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
