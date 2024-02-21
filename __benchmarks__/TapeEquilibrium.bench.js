const { benchmarkSuite } = require("jest-bench");
const { TapeEquilibrium } = require("../src/TapeEquilibrium");

const sample = Array.from({ length: 1000000 }, () =>
  Math.floor(Math.random() * 100)
);

const performanceCase = [sample];

benchmarkSuite("TapeEquilibrium", {
  "first solution": () => TapeEquilibrium.firstSolution(...performanceCase),
});
