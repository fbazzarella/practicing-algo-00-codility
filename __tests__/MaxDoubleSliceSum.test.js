const { MaxDoubleSliceSum } = require("../src/MaxDoubleSliceSum");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [{ given: [[3, 2, 6, -1, 4, 5, -1, 2]], returns: 17 }];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = MaxDoubleSliceSum.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
