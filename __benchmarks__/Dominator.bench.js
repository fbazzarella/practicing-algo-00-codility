const { benchmarkSuite } = require("jest-bench");
const { Dominator } = require("../src/Dominator");

const performanceCase = [[3, 4, 3, 2, 3, -1, 3, 3]];

benchmarkSuite("Dominator", {
  "first solution": () => Dominator.firstSolution(...performanceCase),
});
