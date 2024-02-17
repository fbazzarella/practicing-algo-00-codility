const { CyclicRotation } = require("../src/cyclicRotation");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[], 0], returns: [] },
      { given: [[], 1], returns: [] },
      { given: [[3, 8, 9, 7, 6], 0], returns: [3, 8, 9, 7, 6] },
      { given: [[3, 8, 9, 7, 6], 1], returns: [6, 3, 8, 9, 7] },
      { given: [[3, 8, 9, 7, 6], 5], returns: [3, 8, 9, 7, 6] },
      { given: [[3, 8, 9, 7, 6], 6], returns: [6, 3, 8, 9, 7] },
      { given: [[3, 8, 9, 7, 6], 10], returns: [3, 8, 9, 7, 6] },
      { given: [[3, 8, 9, 7, 6], 11], returns: [6, 3, 8, 9, 7] },
      { given: [[3, 8, 9, 7, 6], 15], returns: [3, 8, 9, 7, 6] },
      { given: [[3, 8, 9, 7, 6], 16], returns: [6, 3, 8, 9, 7] },
      { given: [[3, 8, 9, 7, 6], 20], returns: [3, 8, 9, 7, 6] },
      { given: [[3, 8, 9, 7, 6], 21], returns: [6, 3, 8, 9, 7] },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = CyclicRotation.firstSolution(
        ...testCase.given
      ).toString();
      const expected = testCase.returns.toString();

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = CyclicRotation.secondSolution(
        ...testCase.given
      ).toString();
      const expected = testCase.returns.toString();

      expect(received).toBe(expected);
    }
  });
});
