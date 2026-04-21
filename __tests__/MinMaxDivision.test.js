const { MinMaxDivision } = require("../src/MinMaxDivision");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [3, 5, [2, 1, 5, 1, 2, 2, 2]], returns: 6 },
      { given: [1, 5, [2, 1, 5, 1, 2, 2, 2]], returns: 15 },
      { given: [7, 5, [2, 1, 5, 1, 2, 2, 2]], returns: 5 },
      { given: [1, 1, [1]], returns: 1 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = MinMaxDivision.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = MinMaxDivision.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = MinMaxDivision.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
