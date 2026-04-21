class TapeEquilibrium {
  static firstSolution(A) {
    const n = A.length;
    let shortestDiff = Number.POSITIVE_INFINITY;

    for (let p = 1; p < n; p++) {
      let leftSum = 0;
      let rightSum = 0;

      for (let i = 0; i < p; i++) leftSum += A[i];
      for (let i = p; i < n; i++) rightSum += A[i];

      let diff = Math.abs(leftSum - rightSum);

      if (diff < shortestDiff) shortestDiff = diff;
    }

    return shortestDiff;
  }

  static secondSolution(A) {
    const n = A.length;
    let arr = A.slice();
    let shortestDiff = Number.POSITIVE_INFINITY;

    for (let i = 1; i < n; i++) arr[i] += arr[i - 1];

    for (let i = 0; i < n - 1; i++) {
      let diff = Math.abs(arr[i] - (arr[n - 1] - arr[i]));

      if (diff < shortestDiff) shortestDiff = diff;
    }

    return shortestDiff;
  }

  static thirdSolution(A) {
    const n = A.length;
    let total = 0;

    for (let i = 0; i < n; i++) total += A[i];

    let leftSum = 0;
    let shortestDiff = Number.POSITIVE_INFINITY;

    for (let i = 0; i < n - 1; i++) {
      leftSum += A[i];
      let rightSum = total - leftSum;
      let diff = Math.abs(leftSum - rightSum);

      if (diff < shortestDiff) shortestDiff = diff;
    }

    return shortestDiff;
  }
}

module.exports = { TapeEquilibrium };
