class TapeEquilibrium {
  static firstSolution(A) {
    const n = A.length;
    let shortestDiff = Number.POSITIVE_INFINITY;

    for (let i = 1; i < n; i++) A[i] += A[i - 1];

    for (let i = 0; i < n - 1; i++) {
      let diff = Math.abs(A[i] - (A[n - 1] - A[i]));

      if (diff < shortestDiff) shortestDiff = diff;
    }

    return shortestDiff;
  }
}

module.exports = { TapeEquilibrium };
