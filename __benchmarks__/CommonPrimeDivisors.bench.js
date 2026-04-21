const { benchmarkSuite } = require("jest-bench");
const { CommonPrimeDivisors } = require("../src/CommonPrimeDivisors");

const A = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100000) + 1
);
const B = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100000) + 1
);
const performanceCase = [A, B];

benchmarkSuite("CommonPrimeDivisors", {
  "first solution": () => CommonPrimeDivisors.firstSolution(...performanceCase),
  "second solution": () =>
    CommonPrimeDivisors.secondSolution(...performanceCase),
  "third solution": () =>
    CommonPrimeDivisors.thirdSolution(...performanceCase),
});
