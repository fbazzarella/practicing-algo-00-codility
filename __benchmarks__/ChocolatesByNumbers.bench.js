const { benchmarkSuite } = require("jest-bench");
const { ChocolatesByNumbers } = require("../src/ChocolatesByNumbers");

const performanceCase = [1000000, 3];

benchmarkSuite("ChocolatesByNumbers", {
  "first solution": () => ChocolatesByNumbers.firstSolution(...performanceCase),
  "second solution": () => ChocolatesByNumbers.secondSolution(...performanceCase),
  "third solution": () => ChocolatesByNumbers.thirdSolution(...performanceCase),
});
