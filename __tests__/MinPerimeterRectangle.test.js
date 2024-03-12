const { MinPerimeterRectangle } = require("../src/MinPerimeterRectangle");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [{ given: [36], returns: 24 }];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = MinPerimeterRectangle.firstSolution(...testCase.given);
      const expected = testCase.returns;

      expect(received).toBe(expected);
    }
  });
});
