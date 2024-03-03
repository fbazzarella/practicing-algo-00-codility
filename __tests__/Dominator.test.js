const { Dominator } = require("../src/Dominator");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [{ given: [[3, 4, 3, 2, 3, -1, 3, 3]], returns: 0 }];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = Dominator.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
