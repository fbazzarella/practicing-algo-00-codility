const { benchmarkSuite } = require("jest-bench");
const { StoneWall } = require("../src/StoneWall");

const performanceCase = [[8, 8, 5, 7, 9, 8, 7, 4, 8]];

benchmarkSuite("StoneWall", {
  "first solution": () => StoneWall.firstSolution(...performanceCase),
});
