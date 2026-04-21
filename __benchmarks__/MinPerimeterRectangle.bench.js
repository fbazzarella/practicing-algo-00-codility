const { benchmarkSuite } = require("jest-bench");
const { MinPerimeterRectangle } = require("../src/MinPerimeterRectangle");

const performanceCase = [100000];

benchmarkSuite("MinPerimeterRectangle", {
  "first solution": () =>
    MinPerimeterRectangle.firstSolution(...performanceCase),
  "second solution": () =>
    MinPerimeterRectangle.secondSolution(...performanceCase),
  "third solution": () =>
    MinPerimeterRectangle.thirdSolution(...performanceCase),
});
