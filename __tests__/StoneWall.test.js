const { StoneWall } = require("../src/StoneWall");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[1, 2, 3, 3, 2, 1]], returns: 3 },
      { given: [[8, 8, 5, 7, 9, 8, 7, 4, 8]], returns: 7 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = StoneWall.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
