const { CountDistinctSlices } = require("../src/CountDistinctSlices");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [6, [3, 4, 5, 5, 2]], returns: 9 },
      { given: [1, [0]], returns: 1 },
      { given: [1, [0, 0, 0]], returns: 3 },
      { given: [2, [0, 1, 2]], returns: 6 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = CountDistinctSlices.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = CountDistinctSlices.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = CountDistinctSlices.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
