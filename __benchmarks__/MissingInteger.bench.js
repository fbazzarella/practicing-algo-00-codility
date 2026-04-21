const { benchmarkSuite } = require("jest-bench");
const { MissingInteger } = require("../src/MissingInteger");

const sample = Array.from({ length: 5000 }, (_, i) => i);
sample.sort(() => Math.random() - 0.5);

benchmarkSuite("MissingInteger", {
  "first solution": () => MissingInteger.firstSolution(sample.slice()),
  "second solution": () => MissingInteger.secondSolution(sample.slice()),
  "third solution": () => MissingInteger.thirdSolution(sample.slice()),
});
