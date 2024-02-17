const { benchmarkSuite } = require("jest-bench");
const { TapeEquilibrium } = require("../src/tapeEquilibrium");

const sample = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 100)
);

const performanceCase = [sample];

benchmarkSuite("TapeEquilibrium", {
  "first solution": () => TapeEquilibrium.firstSolution(...performanceCase),
});
