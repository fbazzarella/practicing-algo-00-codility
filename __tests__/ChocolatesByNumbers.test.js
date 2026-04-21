const { ChocolatesByNumbers } = require("../src/ChocolatesByNumbers");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [10, 4], returns: 5 },
      { given: [1, 1], returns: 1 },
      { given: [12, 4], returns: 3 },
      { given: [7, 3], returns: 7 },
      { given: [6, 6], returns: 1 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = ChocolatesByNumbers.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = ChocolatesByNumbers.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = ChocolatesByNumbers.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
