const { CountDiv } = require("../src/CountDiv");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [5, 13, 4], returns: 2 },
      { given: [0, 13, 2], returns: 7 },
      { given: [0, 14, 2], returns: 8 },
      { given: [11, 13, 2], returns: 1 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = CountDiv.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = CountDiv.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
