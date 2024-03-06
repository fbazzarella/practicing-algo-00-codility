const { benchmarkSuite } = require("jest-bench");
const { MaxProfit } = require("../src/MaxProfit");

const sample = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 1000)
);

const performanceCase = [sample];

benchmarkSuite("MaxProfit", {
  "first solution": () => MaxProfit.firstSolution(...performanceCase),
  "second solution": () => MaxProfit.secondSolution(...performanceCase),
});
