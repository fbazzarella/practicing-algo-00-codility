const { NumberSolitaire } = require("../src/NumberSolitaire");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[1, -2, 0, 9, -1, -2]], returns: 8 },
      { given: [[1, 1]], returns: 2 },
      { given: [[-1, -2, -3, -4, -5, -6, -7, -8]], returns: -11 },
      { given: [[0, 0, 0, 0, 0]], returns: 0 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = NumberSolitaire.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = NumberSolitaire.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = NumberSolitaire.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
