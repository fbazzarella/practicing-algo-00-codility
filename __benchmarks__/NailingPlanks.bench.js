const { benchmarkSuite } = require("jest-bench");
const { NailingPlanks } = require("../src/NailingPlanks");

const n = 300;
const m = 300;
const A = Array.from({ length: n }, () =>
  Math.floor(Math.random() * (2 * m)) + 1
);
const B = A.map((a) => a + Math.floor(Math.random() * 2));
const C = Array.from({ length: m }, () =>
  Math.floor(Math.random() * (2 * m)) + 1
);
const performanceCase = [A, B, C];

benchmarkSuite("NailingPlanks", {
  "first solution": () => NailingPlanks.firstSolution(...performanceCase),
  "second solution": () => NailingPlanks.secondSolution(...performanceCase),
  "third solution": () => NailingPlanks.thirdSolution(...performanceCase),
});
