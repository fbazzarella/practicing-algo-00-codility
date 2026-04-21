const { TieRopes } = require("../src/TieRopes");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [4, [1, 2, 3, 4, 1, 1, 3]], returns: 3 },
      { given: [5, [5]], returns: 1 },
      { given: [10, [1, 1, 1]], returns: 0 },
      { given: [3, [1, 1, 1, 1, 1, 1]], returns: 2 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = TieRopes.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = TieRopes.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = TieRopes.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
