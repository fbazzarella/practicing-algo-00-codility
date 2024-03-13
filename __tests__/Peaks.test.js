const { Peaks } = require("../src/Peaks");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]], returns: 3 },
      { given: [[0, 1, 0, 0, 1, 0, 0, 1, 0]], returns: 3 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = Peaks.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
