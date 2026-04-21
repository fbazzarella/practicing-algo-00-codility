const { benchmarkSuite } = require("jest-bench");
const { Ladder } = require("../src/Ladder");

const A = Array.from({ length: 5000 }, () =>
  Math.floor(Math.random() * 5000) + 1
);
const B = Array.from({ length: 5000 }, () =>
  Math.floor(Math.random() * 30) + 1
);
const performanceCase = [A, B];

benchmarkSuite("Ladder", {
  "first solution": () => Ladder.firstSolution(...performanceCase),
  "second solution": () => Ladder.secondSolution(...performanceCase),
  "third solution": () => Ladder.thirdSolution(...performanceCase),
});
