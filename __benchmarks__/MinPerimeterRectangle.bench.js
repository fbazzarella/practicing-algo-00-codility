const { benchmarkSuite } = require("jest-bench");
const { MinPerimeterRectangle } = require("../src/MinPerimeterRectangle");

const performanceCase = [1000000000];

benchmarkSuite("MinPerimeterRectangle", {
  "first solution": () =>
    MinPerimeterRectangle.firstSolution(...performanceCase),
});
