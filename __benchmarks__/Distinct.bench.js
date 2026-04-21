const { benchmarkSuite } = require("jest-bench");
const { Distinct } = require("../src/Distinct");

const sample = Array.from({ length: 5000 }, () =>
  Math.floor(Math.random() * 5000)
);
const performanceCase = [sample];

benchmarkSuite("Distinct", {
  "first solution": () => Distinct.firstSolution(...performanceCase),
  "second solution": () => Distinct.secondSolution(...performanceCase),
  "third solution": () => Distinct.thirdSolution(...performanceCase),
});
