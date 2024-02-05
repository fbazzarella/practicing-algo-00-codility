const { benchmarkSuite } = require("jest-bench");
const { CyclicRotation } = require("../src/cyclicRotation");

const performanceCase = [[3, 8, 9, 7, 6], 3];

benchmarkSuite("CyclicRotation", {
  "first solution": () => CyclicRotation.firstSolution(...performanceCase),
});
