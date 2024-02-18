const { benchmarkSuite } = require("jest-bench");
const { PermCheck } = require("../src/PermCheck");

let sample = Array.from(Array(100000).keys());
sample.shift();
sample.sort(() => Math.random() - 0.5);

const performanceCase = [sample];

benchmarkSuite("PermCheck", {
  "first solution": () => PermCheck.firstSolution(...performanceCase),
});
