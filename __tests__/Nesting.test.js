const { Nesting } = require("../src/Nesting");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [""], returns: 1 },
      { given: ["()"], returns: 1 },
      { given: ["()()"], returns: 1 },
      { given: [")()"], returns: 0 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = Nesting.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
