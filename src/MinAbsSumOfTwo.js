class MinAbsSumOfTwo {
  static firstSolution(A) {
    const n = A.length;
    let min = Infinity;

    for (let p = 0; p < n; p++) {
      for (let q = p; q < n; q++) {
        let abs = Math.abs(A[p] + A[q]);

        if (abs < min) min = abs;
      }
    }

    return min;
  }

  static secondSolution(A) {
    let sorted = A.slice().sort((a, b) => a - b);
    const n = sorted.length;
    let min = Infinity;

    for (let i = 0; i < n; i++) {
      let lo = i, hi = n - 1;

      while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        let sum = sorted[i] + sorted[mid];
        let abs = Math.abs(sum);

        if (abs < min) min = abs;

        if (sum < 0) {
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }
    }

    return min;
  }

  static thirdSolution(A) {
    let sorted = A.slice().sort((a, b) => a - b);
    let lo = 0, hi = sorted.length - 1;
    let min = Infinity;

    while (lo <= hi) {
      let sum = sorted[lo] + sorted[hi];
      let abs = Math.abs(sum);

      if (abs < min) min = abs;

      if (sum < 0) {
        lo++;
      } else {
        hi--;
      }
    }

    return min;
  }
}

module.exports = { MinAbsSumOfTwo };
