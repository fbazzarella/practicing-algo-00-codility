const { Fish } = require("../src/Fish");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      {
        given: [
          [4, 3, 2, 1, 5],
          [0, 1, 0, 0, 0],
        ],
        returns: 2,
      },
      {
        given: [
          [4, 3, 18, 0, 2, 12, 16, 1, 5, 8, 17, 6, 9, 10, 7, 11, 15, 13, 14],
          [0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
        ],
        returns: 6,
      },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = Fish.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = Fish.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
