class NailingPlanks {
  static firstSolution(A, B, C) {
    const n = A.length;
    const m = C.length;

    for (let j = 1; j <= m; j++) {
      let allNailed = true;

      for (let k = 0; k < n; k++) {
        let nailed = false;

        for (let i = 0; i < j; i++) {
          if (C[i] >= A[k] && C[i] <= B[k]) {
            nailed = true;
            break;
          }
        }

        if (!nailed) {
          allNailed = false;
          break;
        }
      }

      if (allNailed) return j;
    }

    return -1;
  }

  static secondSolution(A, B, C) {
    const n = A.length;
    const m = C.length;
    let maxPos = 0;

    for (let k = 0; k < n; k++) {
      if (B[k] > maxPos) maxPos = B[k];
    }

    for (let i = 0; i < m; i++) {
      if (C[i] > maxPos) maxPos = C[i];
    }

    let lo = 1, hi = m, result = -1;

    while (lo <= hi) {
      let mid = Math.floor((lo + hi) / 2);
      let prefix = new Array(maxPos + 2).fill(0);

      for (let i = 0; i < mid; i++) {
        prefix[C[i]]++;
      }

      for (let i = 1; i <= maxPos; i++) {
        prefix[i] += prefix[i - 1];
      }

      let allNailed = true;

      for (let k = 0; k < n; k++) {
        if (prefix[B[k]] - prefix[A[k] - 1] == 0) {
          allNailed = false;
          break;
        }
      }

      if (allNailed) {
        result = mid;
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }

    return result;
  }

  static thirdSolution(A, B, C) {
    const n = A.length;
    const m = C.length;
    let result = 0;

    for (let k = 0; k < n; k++) {
      let minNail = -1;

      for (let i = 0; i < m; i++) {
        if (C[i] >= A[k] && C[i] <= B[k]) {
          minNail = i;
          break;
        }
      }

      if (minNail == -1) return -1;
      if (minNail + 1 > result) result = minNail + 1;
    }

    return result;
  }
}

module.exports = { NailingPlanks };
