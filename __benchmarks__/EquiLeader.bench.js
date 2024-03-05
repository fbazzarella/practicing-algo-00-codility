const { benchmarkSuite } = require("jest-bench");
const { EquiLeader } = require("../src/EquiLeader");

const length = 100;
let sample = Array.from({ length: length }, () =>
  Math.floor(Math.random() * length)
).concat(Array(length).fill(1));
sample.sort(() => Math.random() - 0.5);

const performanceCase = [sample];

benchmarkSuite("EquiLeader", {
  "first solution": () => EquiLeader.firstSolution(...performanceCase),
  "second solution": () => EquiLeader.secondSolution(...performanceCase),
});
