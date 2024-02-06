class CyclicRotation {
  static firstSolution(A, K) {
    const n = A.length;

    let i = 0;
    let lastElement;

    while (i++ < K) {
      lastElement = A[n - 1];

      for (let j = n - 1; j >= 0; j--) A[j] = j > 0 ? A[j - 1] : lastElement;
    }

    return A;
  }

  static secondSolution(A, K) {
    const n = A.length;

    if (n == K || n == 0 || K == 0 || K % n == 0) return A;

    K %= n;

    let i = 0;
    let lastElement;

    while (i++ < K) {
      lastElement = A[n - 1];

      for (let j = n - 1; j >= 0; j--) A[j] = j > 0 ? A[j - 1] : lastElement;
    }

    return A;
  }
}

module.exports = { CyclicRotation };
