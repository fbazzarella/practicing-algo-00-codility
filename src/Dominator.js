class Dominator {
  static firstSolution(A) {
    const n = A.length;
    const middle = Math.floor(n / 2);

    let sortedArray = [...A];

    sortedArray.sort((a, b) => a - b);

    const candidate = sortedArray[middle];
    let candidateIndex;
    let candidateCount = 0;

    for (let i = 0; i < n; i++) {
      if (A[i] == candidate) {
        if (candidateIndex === undefined) candidateIndex = i;

        candidateCount++;
      }
    }

    return candidateCount > middle ? candidateIndex : -1;
  }
}

module.exports = { Dominator };
