class MinAbsSum {
  static firstSolution(A) {
    const n = A.length;

    if (n == 0) return 0;

    let min = Infinity;

    for (let mask = 0; mask < (1 << n); mask++) {
      let sum = 0;

      for (let i = 0; i < n; i++) {
        if (mask & (1 << i)) {
          sum += A[i];
        } else {
          sum -= A[i];
        }
      }

      let abs = Math.abs(sum);

      if (abs < min) min = abs;
    }

    return min;
  }

  static secondSolution(A) {
    const n = A.length;

    if (n == 0) return 0;

    let abs = new Array(n);
    let total = 0;

    for (let i = 0; i < n; i++) {
      abs[i] = Math.abs(A[i]);
      total += abs[i];
    }

    let dp = new Array(total + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < n; i++) {
      for (let j = total; j >= abs[i]; j--) {
        if (dp[j - abs[i]]) dp[j] = true;
      }
    }

    let min = total;

    for (let j = 0; j <= total; j++) {
      if (dp[j]) {
        let diff = Math.abs(total - 2 * j);

        if (diff < min) min = diff;
      }
    }

    return min;
  }

  static thirdSolution(A) {
    const n = A.length;

    if (n == 0) return 0;

    let maxVal = 0;
    let total = 0;

    for (let i = 0; i < n; i++) {
      A[i] = Math.abs(A[i]);
      if (A[i] > maxVal) maxVal = A[i];
      total += A[i];
    }

    let count = new Array(maxVal + 1).fill(0);

    for (let i = 0; i < n; i++) {
      count[A[i]]++;
    }

    let dp = new Array(total + 1).fill(-1);
    dp[0] = 0;

    for (let val = 1; val <= maxVal; val++) {
      if (count[val] == 0) continue;

      for (let j = 0; j <= total; j++) {
        if (dp[j] >= 0) {
          dp[j] = count[val];
        } else if (j >= val && dp[j - val] > 0) {
          dp[j] = dp[j - val] - 1;
        }
      }
    }

    let min = total;

    for (let j = 0; j <= Math.floor(total / 2); j++) {
      if (dp[j] >= 0) {
        let diff = total - 2 * j;

        if (diff < min) min = diff;
      }
    }

    return min;
  }
}

module.exports = { MinAbsSum };
