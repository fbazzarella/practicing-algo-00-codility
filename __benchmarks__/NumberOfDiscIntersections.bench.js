const { benchmarkSuite } = require("jest-bench");
const {
  NumberOfDiscIntersections,
} = require("../src/NumberOfDiscIntersections");

const sample = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 100)
);

const performanceCase = [sample];

benchmarkSuite("NumberOfDiscIntersections", {
  "first solution": () =>
    NumberOfDiscIntersections.firstSolution(...performanceCase),
  "second solution": () =>
    NumberOfDiscIntersections.secondSolution(...performanceCase),
});
