const { benchmarkSuite } = require("jest-bench");
const { TapeEquilibrium } = require("../src/TapeEquilibrium");

const sample = Array.from({ length: 5000 }, () =>
  Math.floor(Math.random() * 100)
);

benchmarkSuite("TapeEquilibrium", {
  "first solution": () => TapeEquilibrium.firstSolution(sample.slice()),
  "second solution": () => TapeEquilibrium.secondSolution(sample.slice()),
  "third solution": () => TapeEquilibrium.thirdSolution(sample.slice()),
});
