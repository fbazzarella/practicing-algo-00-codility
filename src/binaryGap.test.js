const { benchmarkSuite } = require("jest-bench");
const { BinaryGap } = require("./binaryGap");

const testCases = [
  {"given": [1], "returns": 0},
  {"given": [9], "returns": 2},
  {"given": [15], "returns": 0},
  {"given": [20], "returns": 1},
  {"given": [32], "returns": 0},
  {"given": [529], "returns": 4},
  {"given": [2147483647], "returns": 0},
];

describe("correctness", () => {
  test("first solution", () => {
    for(let testCase of testCases) {
      const returned = BinaryGap.firstSolution(...testCase["given"]);
      const expected = testCase["returns"];

      expect(returned).toBe(expected);
    };
  });
  
  test("second solution", () => {
    for(let testCase of testCases) {
      const returned = BinaryGap.secondSolution(...testCase["given"]);
      const expected = testCase["returns"];

      expect(returned).toBe(expected);
    };
  });
});

const performanceCase = [2147483647];

benchmarkSuite("BinaryGap", {
  "first solution": () => BinaryGap.firstSolution(...performanceCase),
  "second solution": () => BinaryGap.secondSolution(...performanceCase),
});
