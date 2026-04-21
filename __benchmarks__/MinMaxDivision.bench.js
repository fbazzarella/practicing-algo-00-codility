const { benchmarkSuite } = require("jest-bench");
const { MinMaxDivision } = require("../src/MinMaxDivision");

const A = Array.from({ length: 500 }, () => Math.floor(Math.random() * 10));
const performanceCase = [20, 10, A];

benchmarkSuite("MinMaxDivision", {
  "first solution": () => MinMaxDivision.firstSolution(...performanceCase),
  "second solution": () => MinMaxDivision.secondSolution(...performanceCase),
  "third solution": () => MinMaxDivision.thirdSolution(...performanceCase),
});
