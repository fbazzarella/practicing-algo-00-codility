const { benchmarkSuite } = require("jest-bench");
const { PassingCars } = require("../src/PassingCars");

const sample = Array.from({ length: 3000 }, () =>
  Math.round(Math.random())
);
const performanceCase = [sample];

benchmarkSuite("PassingCars", {
  "first solution": () => PassingCars.firstSolution(...performanceCase),
  "second solution": () => PassingCars.secondSolution(...performanceCase),
  "third solution": () => PassingCars.thirdSolution(...performanceCase),
});
