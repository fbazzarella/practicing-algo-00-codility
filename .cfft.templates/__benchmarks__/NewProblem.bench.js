const { benchmarkSuite } = require("jest-bench");
const { NewProblem } = require("../src/NewProblem");

const performanceCase = [];

benchmarkSuite("NewProblem", {
  "first solution": () => NewProblem.firstSolution(...performanceCase),
});
