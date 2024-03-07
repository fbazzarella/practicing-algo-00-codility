const { benchmarkSuite } = require("jest-bench");
const { MaxDoubleSliceSum } = require("../src/MaxDoubleSliceSum");

const performanceCase = [[3, 2, 6, -1, 4, 5, -1, 2]];

benchmarkSuite("MaxDoubleSliceSum", {
  "first solution": () => MaxDoubleSliceSum.firstSolution(...performanceCase),
});
