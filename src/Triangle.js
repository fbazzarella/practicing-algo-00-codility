class Triangle {
  static firstSolution(A) {
    const n = A.length;

    if (n < 3) return 0;

    A.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
          if (A[i] + A[j] > A[k] && A[j] + A[k] > A[i] && A[k] + A[i] > A[j])
            return 1;
        }
      }
    }

    return 0;
  }

  static secondSolution(A) {
    const n = A.length;

    if (n < 3) return 0;

    A.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
      if (
        A[i] + A[i + 1] > A[i + 2] &&
        A[i + 1] + A[i + 2] > A[i] &&
        A[i + 2] + A[i] > A[i + 1]
      )
        return 1;
    }

    return 0;
  }
}

module.exports = { Triangle };
