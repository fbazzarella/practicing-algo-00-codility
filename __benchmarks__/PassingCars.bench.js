const { benchmarkSuite } = require("jest-bench");
const { PassingCars } = require("../src/PassingCars");

let sample = Array(1000000).fill(1);
sample.unshift(0);

const performanceCase = [sample];

benchmarkSuite("PassingCars", {
  "first solution": () => PassingCars.firstSolution(...performanceCase),
});
