const { benchmarkSuite } = require("jest-bench");
const { MinAbsSumOfTwo } = require("../src/MinAbsSumOfTwo");

const sample = Array.from({ length: 5000 }, () =>
  Math.floor(Math.random() * 2000000) - 1000000
);
const performanceCase = [sample];

benchmarkSuite("MinAbsSumOfTwo", {
  "first solution": () => MinAbsSumOfTwo.firstSolution(...performanceCase),
  "second solution": () => MinAbsSumOfTwo.secondSolution(...performanceCase),
  "third solution": () => MinAbsSumOfTwo.thirdSolution(...performanceCase),
});
