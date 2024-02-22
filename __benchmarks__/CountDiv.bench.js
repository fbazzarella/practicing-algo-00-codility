const { benchmarkSuite } = require("jest-bench");
const { CountDiv } = require("../src/CountDiv");

const performanceCase = [0, 100000000, 2];

benchmarkSuite("CountDiv", {
  "first solution": () => CountDiv.firstSolution(...performanceCase),
  "second solution": () => CountDiv.secondSolution(...performanceCase),
  "third solution": () => CountDiv.thirdSolution(...performanceCase),
});
