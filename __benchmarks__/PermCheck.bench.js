const { benchmarkSuite } = require("jest-bench");
const { PermCheck } = require("../src/PermCheck");

const sample = Array.from({ length: 10000 }, (_, i) => i + 1);
sample.sort(() => Math.random() - 0.5);
const performanceCase = [sample];

benchmarkSuite("PermCheck", {
  "first solution": () => PermCheck.firstSolution(...performanceCase),
  "second solution": () => PermCheck.secondSolution(...performanceCase),
  "third solution": () => PermCheck.thirdSolution(...performanceCase),
});
