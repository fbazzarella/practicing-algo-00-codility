const { benchmarkSuite } = require("jest-bench");
const { Flags } = require("../src/Flags");

let sample = [1];
for (let i = 1; i <= 2000; i++) {
  sample.push(i % 2 == 0 ? 1 : 5);
}
sample.push(1);

const performanceCase = [sample];

benchmarkSuite("Flags", {
  "first solution": () => Flags.firstSolution(...performanceCase),
  "second solution": () => Flags.secondSolution(...performanceCase),
  "third solution": () => Flags.thirdSolution(...performanceCase),
});
