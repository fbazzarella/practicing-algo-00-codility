class Distinct {
  static firstSolution(A) {
    const n = A.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
      let unique = true;

      for (let j = 0; j < i; j++) {
        if (A[j] == A[i]) {
          unique = false;
          break;
        }
      }

      if (unique) count++;
    }

    return count;
  }

  static secondSolution(A) {
    let sorted = A.slice().sort((a, b) => a - b);
    let count = 0;
    let last;

    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] != last) {
        count++;
        last = sorted[i];
      }
    }

    return count;
  }

  static thirdSolution(A) {
    return new Set(A).size;
  }
}

module.exports = { Distinct };
