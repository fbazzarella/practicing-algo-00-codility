const { benchmarkSuite } = require("jest-bench");
const { Dominator } = require("../src/Dominator");

const sample = Array.from({ length: 5000 }, (_, i) => i);
const performanceCase = [sample];

benchmarkSuite("Dominator", {
  "first solution": () => Dominator.firstSolution(...performanceCase),
  "second solution": () => Dominator.secondSolution(...performanceCase),
  "third solution": () => Dominator.thirdSolution(...performanceCase),
});
