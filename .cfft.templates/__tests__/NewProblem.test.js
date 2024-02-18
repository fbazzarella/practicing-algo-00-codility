const { NewProblem } = require("../src/NewProblem");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [], returns: undefined },
      { given: [], returns: undefined },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = NewProblem.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
