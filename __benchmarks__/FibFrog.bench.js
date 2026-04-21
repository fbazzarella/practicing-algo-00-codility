const { benchmarkSuite } = require("jest-bench");
const { FibFrog } = require("../src/FibFrog");

const performanceCase = [Array.from({ length: 5000 }, () =>
  Math.round(Math.random())
)];

benchmarkSuite("FibFrog", {
  "first solution": () => FibFrog.firstSolution(...performanceCase),
  "second solution": () => FibFrog.secondSolution(...performanceCase),
  "third solution": () => FibFrog.thirdSolution(...performanceCase),
});
