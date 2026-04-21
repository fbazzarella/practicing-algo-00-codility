const { AbsDistinct } = require("../src/AbsDistinct");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[-5, -3, -1, 0, 3, 6]], returns: 5 },
      { given: [[1]], returns: 1 },
      { given: [[-1, 1]], returns: 1 },
      { given: [[-3, -2, -1, 0, 1, 2, 3]], returns: 4 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = AbsDistinct.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = AbsDistinct.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = AbsDistinct.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
