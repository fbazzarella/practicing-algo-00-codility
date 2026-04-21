const { benchmarkSuite } = require("jest-bench");
const { FrogRiverOne } = require("../src/FrogRiverOne");

const sample = Array.from({ length: 3000 }, (_, i) => (i % 500) + 1);
const performanceCase = [500, sample];

benchmarkSuite("FrogRiverOne", {
  "first solution": () => FrogRiverOne.firstSolution(...performanceCase),
  "second solution": () => FrogRiverOne.secondSolution(...performanceCase),
  "third solution": () => FrogRiverOne.thirdSolution(...performanceCase),
});
