const { MinPerimeterRectangle } = require("../src/MinPerimeterRectangle");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: [36], returns: 24 },
      { given: [1], returns: 4 },
      { given: [30], returns: 22 },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = MinPerimeterRectangle.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = MinPerimeterRectangle.secondSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = MinPerimeterRectangle.thirdSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
