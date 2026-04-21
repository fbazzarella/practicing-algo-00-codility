const { benchmarkSuite } = require("jest-bench");
const { NumberSolitaire } = require("../src/NumberSolitaire");

const sample = Array.from({ length: 5000 }, () =>
  Math.floor(Math.random() * 20001) - 10000
);
const performanceCase = [sample];

benchmarkSuite("NumberSolitaire", {
  "first solution": () => NumberSolitaire.firstSolution(...performanceCase),
  "second solution": () => NumberSolitaire.secondSolution(...performanceCase),
  "third solution": () => NumberSolitaire.thirdSolution(...performanceCase),
});
