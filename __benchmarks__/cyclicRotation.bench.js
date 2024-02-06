const { benchmarkSuite } = require("jest-bench");
const { CyclicRotation } = require("../src/cyclicRotation");

const performanceCase = [Array(100).map(() => Math.random()), 1999];

benchmarkSuite("CyclicRotation", {
  "first solution": () => CyclicRotation.firstSolution(...performanceCase),
  "second solution": () => CyclicRotation.secondSolution(...performanceCase),
});
