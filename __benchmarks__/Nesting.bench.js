const { benchmarkSuite } = require("jest-bench");
const { Nesting } = require("../src/Nesting");

const performanceCase = ["(".repeat(2000) + ")".repeat(2000)];

benchmarkSuite("Nesting", {
  "first solution": () => Nesting.firstSolution(...performanceCase),
  "second solution": () => Nesting.secondSolution(...performanceCase),
  "third solution": () => Nesting.thirdSolution(...performanceCase),
});
