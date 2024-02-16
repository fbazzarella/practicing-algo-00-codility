const { OddOccurrencesInArray } = require("../src/oddOccurrencesInArray");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[0]], returns: 0 },
      { given: [[0, 0, 1]], returns: 1 },
      { given: [[0, 0, 1, 2, 2]], returns: 1 },
      { given: [[9, 3, 9, 3, 9, 7, 9]], returns: 7 },
      { given: [[9, 3, 60, 9, 3, 9, 9]], returns: 60 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = OddOccurrencesInArray.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = OddOccurrencesInArray.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
