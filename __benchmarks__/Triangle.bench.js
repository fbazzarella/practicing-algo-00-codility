const { benchmarkSuite } = require("jest-bench");
const { Triangle } = require("../src/Triangle");

let sample = [
  ...new Set(
    Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10001) - 5000)
  ),
];
sample.sort(() => Math.random() - 0.5);

const performanceCase = [sample];

benchmarkSuite("Triangle", {
  "first solution": () => Triangle.firstSolution(...performanceCase),
  "second solution": () => Triangle.secondSolution(...performanceCase),
});
