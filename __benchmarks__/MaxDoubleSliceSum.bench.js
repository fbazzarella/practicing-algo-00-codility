const { benchmarkSuite } = require("jest-bench");
const { MaxDoubleSliceSum } = require("../src/MaxDoubleSliceSum");

const sample = Array.from({ length: 300 }, () =>
  Math.floor(Math.random() * 200) - 100
);
const performanceCase = [sample];

benchmarkSuite("MaxDoubleSliceSum", {
  "first solution": () => MaxDoubleSliceSum.firstSolution(...performanceCase),
  "second solution": () => MaxDoubleSliceSum.secondSolution(...performanceCase),
  "third solution": () => MaxDoubleSliceSum.thirdSolution(...performanceCase),
});
