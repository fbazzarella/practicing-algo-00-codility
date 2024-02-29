const { benchmarkSuite } = require("jest-bench");
const { Fish } = require("../src/Fish");

const length = 100000;

let sampleA = Array.from(Array(length).keys());
sampleA.sort(() => Math.random() - 0.5);

const sampleB = Array.from({ length: length }, () => Math.round(Math.random()));

const performanceCase = [sampleA, sampleB];

benchmarkSuite("Fish", {
  "first solution": () => Fish.firstSolution(...performanceCase),
  "second solution": () => Fish.secondSolution(...performanceCase),
});
