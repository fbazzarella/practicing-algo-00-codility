const { benchmarkSuite } = require("jest-bench");
const { FrogJmp } = require("../src/FrogJmp");

const performanceCase = [10, 85, 30];

benchmarkSuite("FrogJmp", {
  "first solution": () => FrogJmp.firstSolution(...performanceCase),
});
