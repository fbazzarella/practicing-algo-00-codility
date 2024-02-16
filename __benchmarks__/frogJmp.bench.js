const { benchmarkSuite } = require("jest-bench");
const { FrogJmp } = require("../src/frogJmp");

const performanceCase = [10, 85, 30];

benchmarkSuite("FrogJmp", {
  "first solution": () => FrogJmp.firstSolution(...performanceCase),
});
