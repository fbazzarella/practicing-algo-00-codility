const { TapeEquilibrium } = require("../src/TapeEquilibrium");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[22, 91, 84, 37, 34, -200]], returns: 24 },
      { given: [[0, 32, 83, 97, 36, 1, 91]], returns: 84 },
      { given: [[38, 96, 6, 31, 31, 46, 34]], returns: 2 },
      { given: [[43, 30, 67, 28, 73, 99, 9, 75, 84]], returns: 26 },
      { given: [[59, 28, 7, 81, 80, 26, 37, 38, 94, 72, 13, 31]], returns: 4 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = TapeEquilibrium.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
