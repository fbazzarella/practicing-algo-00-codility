const { benchmarkSuite } = require("jest-bench");
const { CountTriangles } = require("../src/CountTriangles");

const sample = Array.from({ length: 500 }, () =>
  Math.floor(Math.random() * 1000) + 1
);
const performanceCase = [sample];

benchmarkSuite("CountTriangles", {
  "first solution": () => CountTriangles.firstSolution(...performanceCase),
  "second solution": () => CountTriangles.secondSolution(...performanceCase),
  "third solution": () => CountTriangles.thirdSolution(...performanceCase),
});
