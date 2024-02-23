class MinAvgTwoSlice {
  static firstSolution(A) {
    const n = A.length;
    let minSliceAverage = Number.POSITIVE_INFINITY;
    let sliceInit;

    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        let sliceSum = 0;

        for (let k = i; k <= j; k++) sliceSum += A[k];

        const sliceAverage = sliceSum / (j - i + 1);

        if (sliceAverage < minSliceAverage) {
          minSliceAverage = sliceAverage;
          sliceInit = i;
        }
      }
    }

    return sliceInit;
  }

  static secondSolution(A) {
    const n = A.length;
    let prefixSum = [A[0]];
    let minSliceAverage = Number.POSITIVE_INFINITY;
    let sliceInit;

    for (let i = 1; i < n; i++) prefixSum[i] = prefixSum[i - 1] + A[i];

    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        let sliceSum = prefixSum[j];

        if (i > 0) sliceSum -= prefixSum[i - 1];

        const sliceAverage = sliceSum / (j - i + 1);

        if (sliceAverage < minSliceAverage) {
          minSliceAverage = sliceAverage;
          sliceInit = i;
        }
      }
    }

    return sliceInit;
  }

  static thirdSolution(A) {
    const n = A.length;
    let minSliceAverage = Number.POSITIVE_INFINITY;
    let sliceInit;

    for (let i = 0; i < n - 1; i++) {
      const avgTwoSlice = (A[i] + A[i + 1]) / 2;
      let avgThreeSlice = Number.POSITIVE_INFINITY;

      if (i < n - 2) avgThreeSlice = (A[i] + A[i + 1] + A[i + 2]) / 3;

      const sliceAverage =
        avgTwoSlice < avgThreeSlice ? avgTwoSlice : avgThreeSlice;

      if (sliceAverage < minSliceAverage) {
        minSliceAverage = sliceAverage;
        sliceInit = i;
      }
    }

    return sliceInit;
  }
}

module.exports = { MinAvgTwoSlice };
