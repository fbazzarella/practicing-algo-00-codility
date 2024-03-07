const { MaxSliceSum } = require("../src/MaxSliceSum");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [{ given: [[-3, -2, -6, -4, 0]], returns: 0 }];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = MaxSliceSum.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = MaxSliceSum.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
