const {
  MaxNonoverlappingSegments,
} = require("../src/MaxNonoverlappingSegments");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[1, 3, 7, 9, 9], [5, 6, 8, 9, 10]], returns: 3 },
      { given: [[], []], returns: 0 },
      { given: [[1], [5]], returns: 1 },
      { given: [[1, 1], [3, 3]], returns: 1 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = MaxNonoverlappingSegments.firstSolution(
        ...testCase.given
      );
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = MaxNonoverlappingSegments.secondSolution(
        ...testCase.given
      );
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = MaxNonoverlappingSegments.thirdSolution(
        ...testCase.given
      );
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
