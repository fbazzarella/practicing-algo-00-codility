const { benchmarkSuite } = require("jest-bench");
const { Flags } = require("../src/Flags");

const performanceCase = [[1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]];

benchmarkSuite("Flags", {
  "first solution": () => Flags.firstSolution(...performanceCase),
});
