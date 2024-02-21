const { benchmarkSuite } = require("jest-bench");
const { MissingInteger } = require("../src/MissingInteger");

let sample = Array.from(Array(1000000).keys());
sample.sort(() => Math.random() - 0.5);

const performanceCase = [sample];

benchmarkSuite("MissingInteger", {
  "first solution": () => MissingInteger.firstSolution(...performanceCase),
});
