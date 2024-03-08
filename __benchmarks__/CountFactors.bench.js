const { benchmarkSuite } = require("jest-bench");
const { CountFactors } = require("../src/CountFactors");

const performanceCase = [1000000];

benchmarkSuite("CountFactors", {
  "first solution": () => CountFactors.firstSolution(...performanceCase),
  "second solution": () => CountFactors.secondSolution(...performanceCase),
});
