const { CountSemiprimes } = require("../src/CountSemiprimes");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [26, [1, 4, 16], [26, 10, 20]], returns: [10, 4, 0] },
      { given: [4, [1], [4]], returns: [1] },
      { given: [1, [1], [1]], returns: [0] },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = CountSemiprimes.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toStrictEqual(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = CountSemiprimes.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toStrictEqual(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = CountSemiprimes.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toStrictEqual(expected);
    }
  });
});
