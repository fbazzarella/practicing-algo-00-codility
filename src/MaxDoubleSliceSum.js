class MaxDoubleSliceSum {
  static firstSolution(A) {
    const n = A.length;
    let maxSum = 0;

    for (let x = 0; x < n - 2; x++) {
      for (let z = x + 2; z < n; z++) {
        let sum = 0;

        for (let k = x + 1; k < z; k++) sum += A[k];

        let minInSlice = A[x + 1];

        for (let k = x + 1; k < z; k++) {
          if (A[k] < minInSlice) minInSlice = A[k];
        }

        let sliceSum = sum - minInSlice;

        if (sliceSum > maxSum) maxSum = sliceSum;
      }
    }

    return maxSum;
  }

  static secondSolution(A) {
    const n = A.length;
    let prefixSum = Array(n).fill(0);
    let maxSum = 0;

    for (let i = 1; i < n; i++) prefixSum[i] = prefixSum[i - 1] + A[i];

    for (let y = 1; y < n - 1; y++) {
      let bestLeft = 0;

      for (let x = 0; x < y; x++) {
        let leftSum = prefixSum[y - 1] - prefixSum[x];

        if (leftSum > bestLeft) bestLeft = leftSum;
      }

      let bestRight = 0;

      for (let z = y + 1; z < n; z++) {
        let rightSum = prefixSum[z - 1] - prefixSum[y];

        if (rightSum > bestRight) bestRight = rightSum;
      }

      if (bestLeft + bestRight > maxSum) maxSum = bestLeft + bestRight;
    }

    return maxSum;
  }

  static thirdSolution(A) {
    const n = A.length;
    let prefixSum = Array(n).fill(0);
    let suffixSum = Array(n).fill(0);

    for (let i = 1; i < n - 1; i++) {
      prefixSum[i] =
        A[i] > prefixSum[i - 1] + A[i] ? A[i] : prefixSum[i - 1] + A[i];

      if (prefixSum[i] < 0) prefixSum[i] = 0;
    }

    for (let i = n - 2; i > 0; i--) {
      suffixSum[i] =
        A[i] > suffixSum[i + 1] + A[i] ? A[i] : suffixSum[i + 1] + A[i];

      if (suffixSum[i] < 0) suffixSum[i] = 0;
    }

    let maxSlice = 0;

    for (let i = 1; i < n - 1; i++)
      maxSlice =
        maxSlice > prefixSum[i - 1] + suffixSum[i + 1]
          ? maxSlice
          : prefixSum[i - 1] + suffixSum[i + 1];

    return maxSlice;
  }
}

module.exports = { MaxDoubleSliceSum };
