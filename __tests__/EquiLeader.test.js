const { EquiLeader } = require("../src/EquiLeader");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[4, 3, 4, 4, 4, 2]], returns: 2 },
      { given: [[4, 4, 2, 5, 3, 4, 4, 4]], returns: 3 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = EquiLeader.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = EquiLeader.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
