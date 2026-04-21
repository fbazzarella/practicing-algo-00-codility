const { Ladder } = require("../src/Ladder");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [[4, 4, 5, 5, 1], [3, 2, 4, 3, 1]], returns: [5, 1, 8, 0, 1] },
      { given: [[1], [1]], returns: [1] },
      { given: [[2], [30]], returns: [2] },
      { given: [[3], [30]], returns: [3] },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = Ladder.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toStrictEqual(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = Ladder.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toStrictEqual(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = Ladder.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toStrictEqual(expected);
    }
  });
});
