class MinMaxDivision {
  static firstSolution(K, M, A) {
    const n = A.length;
    let prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
      prefix[i + 1] = prefix[i] + A[i];
    }

    let dp = [];

    for (let k = 0; k <= K; k++) {
      dp[k] = new Array(n + 1).fill(Infinity);
      dp[k][0] = 0;
    }

    for (let k = 1; k <= K; k++) {
      for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
          let blockSum = prefix[i] - prefix[j];
          let val = Math.max(dp[k - 1][j], blockSum);

          if (val < dp[k][i]) dp[k][i] = val;
        }
      }
    }

    return dp[K][n];
  }

  static secondSolution(K, M, A) {
    let maxVal = 0, sum = 0;

    for (let i = 0; i < A.length; i++) {
      if (A[i] > maxVal) maxVal = A[i];
      sum += A[i];
    }

    for (let mid = maxVal; mid <= sum; mid++) {
      let blocks = 1, blockSum = 0;

      for (let i = 0; i < A.length; i++) {
        if (blockSum + A[i] > mid) {
          blocks++;
          blockSum = A[i];
        } else {
          blockSum += A[i];
        }
      }

      if (blocks <= K) return mid;
    }

    return sum;
  }

  static thirdSolution(K, M, A) {
    let lo = 0, hi = 0;

    for (let i = 0; i < A.length; i++) {
      if (A[i] > lo) lo = A[i];
      hi += A[i];
    }

    while (lo <= hi) {
      let mid = Math.floor((lo + hi) / 2);
      let blocks = 1, blockSum = 0;

      for (let i = 0; i < A.length; i++) {
        if (blockSum + A[i] > mid) {
          blocks++;
          blockSum = A[i];
        } else {
          blockSum += A[i];
        }
      }

      if (blocks <= K) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }

    return lo;
  }
}

module.exports = { MinMaxDivision };
