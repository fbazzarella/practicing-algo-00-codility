class Dominator {
  static firstSolution(A) {
    const n = A.length;

    for (let i = 0; i < n; i++) {
      let count = 0;

      for (let j = 0; j < n; j++) {
        if (A[j] == A[i]) count++;
      }

      if (count > Math.floor(n / 2)) return i;
    }

    return -1;
  }

  static secondSolution(A) {
    const n = A.length;
    const middle = Math.floor(n / 2);
    let sorted = A.slice().sort((a, b) => a - b);
    let candidate = sorted[middle];
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

  static thirdSolution(A) {
    const n = A.length;
    let candidate;
    let count = 0;

    for (let i = 0; i < n; i++) {
      if (count == 0) {
        candidate = A[i];
        count = 1;
      } else if (A[i] == candidate) {
        count++;
      } else {
        count--;
      }
    }

    let total = 0;
    let index;

    for (let i = 0; i < n; i++) {
      if (A[i] == candidate) {
        total++;
        if (index === undefined) index = i;
      }
    }

    return total > Math.floor(n / 2) ? index : -1;
  }
}

module.exports = { Dominator };
