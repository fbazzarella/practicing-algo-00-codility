const { benchmarkSuite } = require("jest-bench");
const { AbsDistinct } = require("../src/AbsDistinct");

const sample = Array.from({ length: 5000 }, (_, i) => i - 2500).sort(
  (a, b) => a - b
);
const performanceCase = [sample];

benchmarkSuite("AbsDistinct", {
  "first solution": () => AbsDistinct.firstSolution(...performanceCase),
  "second solution": () => AbsDistinct.secondSolution(...performanceCase),
  "third solution": () => AbsDistinct.thirdSolution(...performanceCase),
});
