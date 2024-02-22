const { benchmarkSuite } = require("jest-bench");
const { GenomicRangeQuery } = require("../src/GenomicRangeQuery");

const performanceCase = [
  "CAGCCTACAGCCTACAGCCTAGCCTACTGCCTACAGCCTGCCTACAGCCCAGCTGCCTACAGCCT",
  [2, 5, 0, 2, 4, 14, 18, 43],
  [4, 5, 6, 21, 7, 20, 36, 64],
];

benchmarkSuite("GenomicRangeQuery", {
  "first solution": () => GenomicRangeQuery.firstSolution(...performanceCase),
  "second solution": () => GenomicRangeQuery.secondSolution(...performanceCase),
});
