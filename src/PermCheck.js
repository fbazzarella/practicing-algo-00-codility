class PermCheck {
  static firstSolution(A) {
    let sorted = A.slice().sort((a, b) => a - b);

    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] != i + 1) return 0;
    }

    return 1;
  }

  static secondSolution(A) {
    const n = A.length;
    let seen = new Set();

    for (let i = 0; i < n; i++) {
      if (A[i] < 1 || A[i] > n || seen.has(A[i])) return 0;
      seen.add(A[i]);
    }

    return 1;
  }

  static thirdSolution(A) {
    const n = A.length;
    let counts = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      if (A[i] <= n) counts[A[i] - 1]++;
    }

    for (let i = 0; i < n; i++) {
      if (counts[i] != 1) return 0;
    }

    return 1;
  }
}

module.exports = { PermCheck };
