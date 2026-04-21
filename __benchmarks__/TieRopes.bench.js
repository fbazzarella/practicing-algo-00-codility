const { benchmarkSuite } = require("jest-bench");
const { TieRopes } = require("../src/TieRopes");

const sample = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 10) + 1
);
const performanceCase = [15, sample];

benchmarkSuite("TieRopes", {
  "first solution": () => TieRopes.firstSolution(...performanceCase),
  "second solution": () => TieRopes.secondSolution(...performanceCase),
  "third solution": () => TieRopes.thirdSolution(...performanceCase),
});
