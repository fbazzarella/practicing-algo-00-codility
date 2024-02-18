const { benchmarkSuite } = require("jest-bench");
const { OddOccurrencesInArray } = require("../src/OddOccurrencesInArray");

const sample = Array.from(
  { length: 499999 },
  () => Math.floor(Math.random() * 1000000) + 1
);

const performanceCase = [sample.concat([1000000]).concat(sample)];

benchmarkSuite("OddOccurrencesInArray", {
  "first solution": () =>
    OddOccurrencesInArray.firstSolution(...performanceCase),
  "second solution": () =>
    OddOccurrencesInArray.secondSolution(...performanceCase),
});
