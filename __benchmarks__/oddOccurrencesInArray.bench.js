const { benchmarkSuite } = require("jest-bench");
const { OddOccurrencesInArray } = require("../src/oddOccurrencesInArray");

const length = 499999;
const ceil = 1000000;
const sample = Array.from(
  { length: length },
  () => Math.floor(Math.random() * ceil) + 1
);

const performanceCase = [sample.concat([ceil]).concat(sample)];

benchmarkSuite("OddOccurrencesInArray", {
  "first solution": () =>
    OddOccurrencesInArray.firstSolution(...performanceCase),
  "second solution": () =>
    OddOccurrencesInArray.secondSolution(...performanceCase),
});
