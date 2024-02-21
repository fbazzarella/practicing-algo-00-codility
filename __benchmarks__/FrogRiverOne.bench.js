const { benchmarkSuite } = require("jest-bench");
const { FrogRiverOne } = require("../src/FrogRiverOne");

let sample = Array.from(Array(1000000).keys());
sample.shift();
sample.sort(() => Math.random() - 0.5);

const performanceCase = [5, sample];

benchmarkSuite("FrogRiverOne", {
  "first solution": () => FrogRiverOne.firstSolution(...performanceCase),
});
