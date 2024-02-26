const { Distinct } = require("../src/Distinct");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[4, 9, 7, 1, 11, 10, 5, 12, 6, 2, 3, 8]], returns: 12 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = Distinct.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
