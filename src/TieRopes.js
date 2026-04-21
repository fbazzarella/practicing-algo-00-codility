class TieRopes {
  static firstSolution(K, A) {
    const n = A.length;
    let max = 0;

    for (let mask = 0; mask < (1 << (n - 1)); mask++) {
      let count = 0;
      let sum = A[0];

      for (let i = 1; i < n; i++) {
        if (mask & (1 << (i - 1))) {
          sum += A[i];
        } else {
          if (sum >= K) count++;
          sum = A[i];
        }
      }

      if (sum >= K) count++;
      if (count > max) max = count;
    }

    return max;
  }

  static secondSolution(K, A) {
    const n = A.length;
    let dp = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
      let sum = 0;

      for (let j = i; j >= 0; j--) {
        sum += A[j];

        if (sum >= K && dp[j] + 1 > dp[i + 1]) {
          dp[i + 1] = dp[j] + 1;
        }
      }

      if (dp[i] > dp[i + 1]) dp[i + 1] = dp[i];
    }

    return dp[n];
  }

  static thirdSolution(K, A) {
    let count = 0;
    let sum = 0;

    for (let i = 0; i < A.length; i++) {
      sum += A[i];

      if (sum >= K) {
        count++;
        sum = 0;
      }
    }

    return count;
  }
}

module.exports = { TieRopes };
