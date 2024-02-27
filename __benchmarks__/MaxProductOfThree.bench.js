const { benchmarkSuite } = require("jest-bench");
const { MaxProductOfThree } = require("../src/MaxProductOfThree");

let sample = Array.from(
  { length: 10000 },
  () => Math.floor(Math.random() * 2001) - 1000
);

const performanceCase = [sample];

benchmarkSuite("MaxProductOfThree", {
  "first solution": () => MaxProductOfThree.firstSolution(...performanceCase),
  "second solution": () => MaxProductOfThree.secondSolution(...performanceCase),
  "third solution": () => MaxProductOfThree.thirdSolution(...performanceCase),
});
