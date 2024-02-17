const { benchmarkSuite } = require("jest-bench");
const { PermMissingElem } = require("../src/permMissingElem");

let sample = Array.from(Array(100000).keys());
sample.shift();
sample.sort(() => Math.random() - 0.5);
sample.shift();

const performanceCase = [sample];

benchmarkSuite("PermMissingElem", {
  "first solution": () => PermMissingElem.firstSolution(...performanceCase),
  "second solution": () => PermMissingElem.secondSolution(...performanceCase),
});
