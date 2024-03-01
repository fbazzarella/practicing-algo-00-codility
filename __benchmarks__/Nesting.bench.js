const { benchmarkSuite } = require("jest-bench");
const { Nesting } = require("../src/Nesting");

const performanceCase = ["((()()))"];

benchmarkSuite("Nesting", {
  "first solution": () => Nesting.firstSolution(...performanceCase),
});
