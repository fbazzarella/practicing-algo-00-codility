class PermCheck {
  static firstSolution(A) {
    const n = A.length;
    let counts = Array(n).fill(0);

    for (let i = 0; i < n; i++) if (A[i] <= n) counts[A[i] - 1]++;

    for (let i = 0; i < n; i++) if (counts[i] != 1) return 0;

    return 1;
  }
}

module.exports = { PermCheck };
