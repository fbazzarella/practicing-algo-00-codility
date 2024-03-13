const { benchmarkSuite } = require("jest-bench");
const { Peaks } = require("../src/Peaks");

const performanceCase = [[1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]];

benchmarkSuite("Peaks", {
  "first solution": () => Peaks.firstSolution(...performanceCase),
});
