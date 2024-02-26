const { benchmarkSuite } = require("jest-bench");
const { Distinct } = require("../src/Distinct");

let sample = Array.from(Array(1000000).keys());
sample.sort(() => Math.random() - 0.5);

const performanceCase = [sample];

benchmarkSuite("Distinct", {
  "first solution": () => Distinct.firstSolution(...performanceCase),
});
