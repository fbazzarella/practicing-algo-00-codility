const {
  NumberOfDiscIntersections,
} = require("../src/NumberOfDiscIntersections");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [{ given: [[1, 5, 2, 1, 4, 0]], returns: 11 }];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = NumberOfDiscIntersections.firstSolution(
        ...testCase.given
      );
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = NumberOfDiscIntersections.secondSolution(
        ...testCase.given
      );
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
