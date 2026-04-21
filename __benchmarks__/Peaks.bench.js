const { benchmarkSuite } = require("jest-bench");
const { Peaks } = require("../src/Peaks");

let sample = [];
for (let i = 0; i < 5000; i++) {
  sample.push(i % 2 == 0 ? 1 : 5);
}
const performanceCase = [sample];

benchmarkSuite("Peaks", {
  "first solution": () => Peaks.firstSolution(...performanceCase),
  "second solution": () => Peaks.secondSolution(...performanceCase),
  "third solution": () => Peaks.thirdSolution(...performanceCase),
});
