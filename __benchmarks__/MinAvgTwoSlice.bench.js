const { benchmarkSuite } = require("jest-bench");
const { MinAvgTwoSlice } = require("../src/MinAvgTwoSlice");

let sample = Array.from(
  { length: 1000 },
  () => Math.floor(Math.random() * 20001) - 10000
);

const performanceCase = [sample];

benchmarkSuite("MinAvgTwoSlice", {
  "first solution": () => MinAvgTwoSlice.firstSolution(...performanceCase),
  "second solution": () => MinAvgTwoSlice.secondSolution(...performanceCase),
  "third solution": () => MinAvgTwoSlice.thirdSolution(...performanceCase),
});
