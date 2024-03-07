const { benchmarkSuite } = require("jest-bench");
const { MaxSliceSum } = require("../src/MaxSliceSum");

const sample = Array.from(
  { length: 1000 },
  () => Math.floor(Math.random() * 2001) - 1000
);

const performanceCase = [sample];

benchmarkSuite("MaxSliceSum", {
  "first solution": () => MaxSliceSum.firstSolution(...performanceCase),
  "second solution": () => MaxSliceSum.secondSolution(...performanceCase),
});
