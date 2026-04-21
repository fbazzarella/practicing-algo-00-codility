const { CountNonDivisible } = require("../src/CountNonDivisible");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[3, 1, 2, 3, 6]], returns: [2, 4, 3, 2, 0] },
      { given: [[1]], returns: [0] },
      { given: [[4, 4]], returns: [0, 0] },
      { given: [[2, 3]], returns: [1, 1] },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = CountNonDivisible.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toStrictEqual(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = CountNonDivisible.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toStrictEqual(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = CountNonDivisible.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toStrictEqual(expected);
    }
  });
});
