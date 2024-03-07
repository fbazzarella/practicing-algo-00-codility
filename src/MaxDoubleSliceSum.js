class MaxDoubleSliceSum {
  static firstSolution(A) {
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
