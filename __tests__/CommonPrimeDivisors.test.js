const { CommonPrimeDivisors } = require("../src/CommonPrimeDivisors");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[15, 10, 3], [75, 30, 5]], returns: 1 },
      { given: [[6], [12]], returns: 1 },
      { given: [[2], [3]], returns: 0 },
      { given: [[1], [1]], returns: 1 },
      { given: [[9], [5]], returns: 0 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = CommonPrimeDivisors.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = CommonPrimeDivisors.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = CommonPrimeDivisors.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
