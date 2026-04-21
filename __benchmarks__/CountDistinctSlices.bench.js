const { benchmarkSuite } = require("jest-bench");
const { CountDistinctSlices } = require("../src/CountDistinctSlices");

const sample = Array.from({ length: 500 }, () =>
  Math.floor(Math.random() * 500)
);
const performanceCase = [500, sample];

benchmarkSuite("CountDistinctSlices", {
  "first solution": () =>
    CountDistinctSlices.firstSolution(...performanceCase),
  "second solution": () =>
    CountDistinctSlices.secondSolution(...performanceCase),
  "third solution": () =>
    CountDistinctSlices.thirdSolution(...performanceCase),
});
