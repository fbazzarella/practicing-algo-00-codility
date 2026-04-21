const { FrogJmp } = require("../src/FrogJmp");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [10, 85, 30], returns: 3 },
      { given: [1, 1, 1], returns: 0 },
      { given: [0, 10, 3], returns: 4 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = FrogJmp.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = FrogJmp.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = FrogJmp.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
