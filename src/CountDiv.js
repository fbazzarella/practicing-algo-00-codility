class CountDiv {
  static firstSolution(A, B, K) {
    let countDiv = 0;

    for (let i = A; i <= B; i++) if (i % K == 0) countDiv++;

    return countDiv;
  }

  static secondSolution(A, B, K) {
    if (A == B) {
      if (A == 0 || A % K == 0) return 1;

      return 0;
    }

    if (K == 1) return B - A + 1;

    let increment = 1;
    let countDiv = 0;

    for (let i = A; i <= B; i += increment) {
      if (increment == 1 && i % K == 0) {
        increment = K;
        countDiv++;
      } else if (increment != 1) countDiv++;
    }

    return countDiv;
  }
}

module.exports = { CountDiv };
