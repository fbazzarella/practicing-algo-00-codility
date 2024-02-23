const { GenomicRangeQuery } = require("../src/GenomicRangeQuery");

describe("correctness", () => {
  let testCases;

  beforeEach(() => {
    testCases = [
      { given: ["CAGCCTA", [2, 5, 0], [4, 5, 6]], returns: [2, 4, 1] },
      {
        given: [
          "CAGCCTACAGCCTACAGCCTAGCCTACTGCCTACAGCCTGCCTACAGCCCAGCTGCCTACAGCCT",
          [2, 5, 0, 2, 4, 14, 18, 43],
          [4, 5, 6, 21, 7, 20, 36, 64],
        ],
        returns: [2, 4, 1, 1, 1, 1, 1, 1],
      },
    ];
  });

  test("first solution", () => {
    for (let testCase of testCases) {
      const received = GenomicRangeQuery.firstSolution(
        ...testCase.given
      ).toString();
      const expected = testCase.returns.toString();

      expect(received).toBe(expected);
    }
  });

  test("second solution", () => {
    for (let testCase of testCases) {
      const received = GenomicRangeQuery.secondSolution(
        ...testCase.given
      ).toString();
      const expected = testCase.returns.toString();

      expect(received).toBe(expected);
    }
  });

  test("third solution", () => {
    for (let testCase of testCases) {
      const received = GenomicRangeQuery.thirdSolution(
        ...testCase.given
      ).toString();
      const expected = testCase.returns.toString();

      expect(received).toBe(expected);
    }
  });
});
