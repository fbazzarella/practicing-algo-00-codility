const { CountFactors } = require("../src/CountFactors");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [{ given: [24], returns: 8 }];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = CountFactors.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = CountFactors.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
