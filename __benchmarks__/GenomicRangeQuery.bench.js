const { benchmarkSuite } = require("jest-bench");
const { GenomicRangeQuery } = require("../src/GenomicRangeQuery");

const length = 20000;

const A = "A".repeat(Math.floor(Math.random() * length));
const C = "C".repeat(Math.floor(Math.random() * length));
const G = "G".repeat(Math.floor(Math.random() * length));
const T = "T".repeat(Math.floor(Math.random() * length));

let nucleotide = Array.from(A.concat(C).concat(G).concat(T));
nucleotide.sort(() => Math.random() - 0.5);
nucleotide = nucleotide.join("");
if (nucleotide.length > length) nucleotide = nucleotide.substring(0, length);

const M = Math.floor((Math.random() * length) / 2);

let P = [];
let Q = [];

for (let i = 0; i < M; i++) {
  let question = [
    Math.floor(Math.random() * length - 1),
    Math.floor(Math.random() * length - 1),
  ];
  question.sort();

  P[i] = question[0];
  Q[i] = question[1];
}

const performanceCase = [nucleotide, P, Q];

benchmarkSuite("GenomicRangeQuery", {
  "first solution": () => GenomicRangeQuery.firstSolution(...performanceCase),
  "second solution": () => GenomicRangeQuery.secondSolution(...performanceCase),
  "third solution": () => GenomicRangeQuery.thirdSolution(...performanceCase),
});
