const { Brackets } = require("../src/Brackets");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [""], returns: 1 },
      { given: ["()"], returns: 1 },
      { given: ["[]"], returns: 1 },
      { given: ["{}"], returns: 1 },
      { given: ["{[()()]}"], returns: 1 },
      { given: ["([)()]"], returns: 0 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = Brackets.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = Brackets.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = Brackets.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
