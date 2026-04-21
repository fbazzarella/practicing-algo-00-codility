class MaxNonoverlappingSegments {
  static firstSolution(A, B) {
    const n = A.length;

    if (n == 0) return 0;

    let max = 0;

    for (let mask = 1; mask < (1 << n); mask++) {
      let selected = [];

      for (let i = 0; i < n; i++) {
        if (mask & (1 << i)) selected.push(i);
      }

      let valid = true;

      for (let i = 0; i < selected.length; i++) {
        for (let j = i + 1; j < selected.length; j++) {
          let a = selected[i], b = selected[j];

          if (A[a] <= B[b] && A[b] <= B[a]) {
            valid = false;
            break;
          }
        }

        if (!valid) break;
      }

      if (valid && selected.length > max) max = selected.length;
    }

    return max;
  }

  static secondSolution(A, B) {
    const n = A.length;

    if (n == 0) return 0;

    let dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (B[j] < A[i] && dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
        }
      }

      if (dp[i - 1] > dp[i]) dp[i] = dp[i - 1];
    }

    return dp[n - 1];
  }

  static thirdSolution(A, B) {
    const n = A.length;

    if (n == 0) return 0;

    let count = 1;
    let lastEnd = B[0];

    for (let i = 1; i < n; i++) {
      if (A[i] > lastEnd) {
        count++;
        lastEnd = B[i];
      }
    }

    return count;
  }
}

module.exports = { MaxNonoverlappingSegments };
