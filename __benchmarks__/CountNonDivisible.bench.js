const { benchmarkSuite } = require("jest-bench");
const { CountNonDivisible } = require("../src/CountNonDivisible");

const performanceCase = [Array.from({ length: 10000 }, (_, i) => i + 1)];

benchmarkSuite("CountNonDivisible", {
  "first solution": () => CountNonDivisible.firstSolution(...performanceCase),
  "second solution": () => CountNonDivisible.secondSolution(...performanceCase),
  "third solution": () => CountNonDivisible.thirdSolution(...performanceCase),
});
