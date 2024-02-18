const { benchmarkSuite } = require("jest-bench");
const { BinaryGap } = require("../src/BinaryGap");

const performanceCase = [2147483647];

benchmarkSuite("BinaryGap", {
  "first solution": () => BinaryGap.firstSolution(...performanceCase),
  "second solution": () => BinaryGap.secondSolution(...performanceCase),
});
