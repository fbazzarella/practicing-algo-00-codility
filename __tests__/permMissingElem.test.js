const { PermMissingElem } = require("../src/permMissingElem");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[]], returns: 1 },
      { given: [[2]], returns: 1 },
      { given: [[1]], returns: 2 },
      { given: [[3, 1]], returns: 2 },
      { given: [[2, 3, 1, 5]], returns: 4 },
      { given: [[5, 1, 4, 7, 3, 2]], returns: 6 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = PermMissingElem.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = PermMissingElem.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
