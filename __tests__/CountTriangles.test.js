const { CountTriangles } = require("../src/CountTriangles");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[10, 2, 5, 1, 8, 12]], returns: 4 },
      { given: [[]], returns: 0 },
      { given: [[1, 1, 1]], returns: 1 },
      { given: [[5, 3, 3]], returns: 1 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = CountTriangles.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = CountTriangles.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = CountTriangles.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
