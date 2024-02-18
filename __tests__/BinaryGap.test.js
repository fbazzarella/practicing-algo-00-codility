const { BinaryGap } = require("../src/BinaryGap");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [1], returns: 0 },
      { given: [9], returns: 2 },
      { given: [15], returns: 0 },
      { given: [20], returns: 1 },
      { given: [32], returns: 0 },
      { given: [529], returns: 4 },
      { given: [2147483647], returns: 0 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = BinaryGap.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = BinaryGap.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
