const { benchmarkSuite } = require("jest-bench");
const { Brackets } = require("../src/Brackets");

const base = "{[()()]}";
const performanceCase = [base.repeat(500)];

benchmarkSuite("Brackets", {
  "first solution": () => Brackets.firstSolution(...performanceCase),
  "second solution": () => Brackets.secondSolution(...performanceCase),
  "third solution": () => Brackets.thirdSolution(...performanceCase),
});
