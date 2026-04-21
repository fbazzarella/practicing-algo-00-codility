const { benchmarkSuite } = require("jest-bench");
const { FrogJmp } = require("../src/FrogJmp");

const performanceCase = [10, 1000000000, 3];

benchmarkSuite("FrogJmp", {
  "first solution": () => FrogJmp.firstSolution(...performanceCase),
  "second solution": () => FrogJmp.secondSolution(...performanceCase),
  "third solution": () => FrogJmp.thirdSolution(...performanceCase),
});
