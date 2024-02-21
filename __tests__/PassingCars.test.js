const { PassingCars } = require("../src/PassingCars");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[0]], returns: 0 },
      { given: [[0, 1, 0, 1, 1]], returns: 5 },
      { given: [[0, 1, 0, 1, 1, 1, 1, 1, 1, 1]], returns: 15 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = PassingCars.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
