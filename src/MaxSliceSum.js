class MaxSliceSum {
  static firstSolution(A) {
    const n = A.length;

    if (n == 1) return A[0];

    let prefixSum = [A[0]];
    let maxSliceSum = A[0];

    for (let i = 1; i < n; i++) {
      prefixSum[i] = prefixSum[i - 1] + A[i];

      if (A[i] > maxSliceSum) maxSliceSum = A[i];
    }

    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        let sliceSum = prefixSum[j];

        if (i > 0) sliceSum -= prefixSum[i - 1];

        if (sliceSum > maxSliceSum) maxSliceSum = sliceSum;
      }
    }

    return maxSliceSum;
  }

  static secondSolution(A) {
    const n = A.length;

    let maxEnding = Number.MIN_SAFE_INTEGER;
    let maxSlice = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
      maxEnding = maxEnding + A[i] > A[i] ? maxEnding + A[i] : A[i];
      maxSlice = maxSlice > maxEnding ? maxSlice : maxEnding;
    }

    return maxSlice;
  }
}

module.exports = { MaxSliceSum };
