const { benchmarkSuite } = require("jest-bench");
const { StoneWall } = require("../src/StoneWall");

const sample = Array.from({ length: 5000 }, () =>
  Math.floor(Math.random() * 100) + 1
);
const performanceCase = [sample];

benchmarkSuite("StoneWall", {
  "first solution": () => StoneWall.firstSolution(...performanceCase),
  "second solution": () => StoneWall.secondSolution(...performanceCase),
  "third solution": () => StoneWall.thirdSolution(...performanceCase),
});
