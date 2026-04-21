const { benchmarkSuite } = require("jest-bench");
const { CountSemiprimes } = require("../src/CountSemiprimes");

const P = Array.from({ length: 5000 }, () => 1);
const Q = Array.from({ length: 5000 }, () => 10000);
const performanceCase = [10000, P, Q];

benchmarkSuite("CountSemiprimes", {
  "first solution": () => CountSemiprimes.firstSolution(...performanceCase),
  "second solution": () => CountSemiprimes.secondSolution(...performanceCase),
  "third solution": () => CountSemiprimes.thirdSolution(...performanceCase),
});
