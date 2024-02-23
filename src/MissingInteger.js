class MissingInteger {
  static firstSolution(A) {
    const n = A.length;

    for (let i = 0; i < n; ) {
      if (A[i] > 0 && A[i] <= n && A[i] != A[A[i] - 1]) {
        let tempElement = A[A[i] - 1];
        A[A[i] - 1] = A[i];
        A[i] = tempElement;
        continue;
      }

      i++;
    }

    for (let i = 0; i < n; i++) if (A[i] != i + 1) return i + 1;

    return n + 1;
  }
}

module.exports = { MissingInteger };
