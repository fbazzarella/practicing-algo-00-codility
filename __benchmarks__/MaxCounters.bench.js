const { benchmarkSuite } = require("jest-bench");
const { MaxCounters } = require("../src/MaxCounters");

let sample = Array.from(Array(1000000).keys());
sample.shift();
sample.sort(() => Math.random() - 0.5);

const performanceCase = [sample.length, sample];

benchmarkSuite("MaxCounters", {
  "first solution": () => MaxCounters.firstSolution(...performanceCase),
  "second solution": () => MaxCounters.secondSolution(...performanceCase),
});
