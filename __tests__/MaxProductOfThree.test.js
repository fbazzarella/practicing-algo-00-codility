const { MaxProductOfThree } = require("../src/MaxProductOfThree");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[-3, 1, 2, -2, 5, 6]], returns: 60 },
      { given: [[-5, 5, -5, 4]], returns: 125 },
      { given: [[-5, -5, -5, 4, 1, 5, 3]], returns: 125 },
      { given: [[-5, -4, -1, -5, -3]], returns: -12 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = MaxProductOfThree.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = MaxProductOfThree.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = MaxProductOfThree.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
