const { benchmarkSuite } = require("jest-bench");
const { MinAbsSum } = require("../src/MinAbsSum");

const sample = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 201) - 100
);
const performanceCase = [sample];

benchmarkSuite("MinAbsSum", {
  "first solution": () => MinAbsSum.firstSolution(...performanceCase),
  "second solution": () => MinAbsSum.secondSolution(...performanceCase),
  "third solution": () => MinAbsSum.thirdSolution(...performanceCase),
});
