const { MinAvgTwoSlice } = require("../src/MinAvgTwoSlice");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [{ given: [[4, 2, 2, 5, 1, 5, 8]], returns: 1 }];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = MinAvgTwoSlice.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = MinAvgTwoSlice.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = MinAvgTwoSlice.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
