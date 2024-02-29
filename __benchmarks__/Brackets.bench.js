const { benchmarkSuite } = require("jest-bench");
const { Brackets } = require("../src/Brackets");

const performanceCase = ["{[()()]}"];

benchmarkSuite("Brackets", {
  "first solution": () => Brackets.firstSolution(...performanceCase),
});
