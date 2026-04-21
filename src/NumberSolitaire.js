class NumberSolitaire {
  static firstSolution(A) {
    const n = A.length;
    let dp = new Array(n).fill(-Infinity);
    dp[0] = A[0];

    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (i - j >= 1 && i - j <= 6 && dp[j] + A[i] > dp[i]) {
          dp[i] = dp[j] + A[i];
        }
      }
    }

    return dp[n - 1];
  }

  static secondSolution(A) {
    const n = A.length;
    let dp = new Array(n).fill(-Infinity);
    dp[0] = A[0];

    for (let i = 1; i < n; i++) {
      let start = Math.max(0, i - 6);

      for (let j = start; j < i; j++) {
        if (dp[j] + A[i] > dp[i]) {
          dp[i] = dp[j] + A[i];
        }
      }
    }

    return dp[n - 1];
  }

  static thirdSolution(A) {
    const n = A.length;
    let dp = new Array(n).fill(-Infinity);
    dp[0] = A[0];
    let maxQueue = [0];

    for (let i = 1; i < n; i++) {
      while (maxQueue.length > 0 && maxQueue[0] < i - 6) {
        maxQueue.shift();
      }

      dp[i] = dp[maxQueue[0]] + A[i];

      while (maxQueue.length > 0 && dp[maxQueue[maxQueue.length - 1]] <= dp[i]) {
        maxQueue.pop();
      }

      maxQueue.push(i);
    }

    return dp[n - 1];
  }
}

module.exports = { NumberSolitaire };
