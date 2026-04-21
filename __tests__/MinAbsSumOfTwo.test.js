const { MinAbsSumOfTwo } = require("../src/MinAbsSumOfTwo");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[1, 4, -3]], returns: 1 },
      { given: [[-8, 4, 5, -10, 3]], returns: 3 },
      { given: [[0]], returns: 0 },
      { given: [[-5, -3]], returns: 6 },
      { given: [[3, 5]], returns: 6 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = MinAbsSumOfTwo.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = MinAbsSumOfTwo.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = MinAbsSumOfTwo.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
