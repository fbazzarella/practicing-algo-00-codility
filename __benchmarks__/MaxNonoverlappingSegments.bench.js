const { benchmarkSuite } = require("jest-bench");
const {
  MaxNonoverlappingSegments,
} = require("../src/MaxNonoverlappingSegments");

const n = 20;
const A = Array.from({ length: n }, (_, i) => i * 3);
const B = A.map((a) => a + Math.floor(Math.random() * 4) + 1);
const performanceCase = [A, B];

benchmarkSuite("MaxNonoverlappingSegments", {
  "first solution": () =>
    MaxNonoverlappingSegments.firstSolution(...performanceCase),
  "second solution": () =>
    MaxNonoverlappingSegments.secondSolution(...performanceCase),
  "third solution": () =>
    MaxNonoverlappingSegments.thirdSolution(...performanceCase),
});
