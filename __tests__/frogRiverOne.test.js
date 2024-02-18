const { FrogRiverOne } = require("../src/frogRiverOne");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [2, [1, 2]], returns: 1 },
      { given: [5, [1, 3, 1, 4, 2, 3, 5, 4]], returns: 6 },
      { given: [3, [2, 3, 1, 4, 2, 3, 5, 4, 3, 1]], returns: 2 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = FrogRiverOne.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
