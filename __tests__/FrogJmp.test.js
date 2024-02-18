const { FrogJmp } = require("../src/FrogJmp");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [{ given: [10, 85, 30], returns: 3 }];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = FrogJmp.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
