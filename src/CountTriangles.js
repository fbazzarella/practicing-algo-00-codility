class CountTriangles {
  static firstSolution(A) {
    const n = A.length;
    let count = 0;

    for (let p = 0; p < n; p++) {
      for (let q = p + 1; q < n; q++) {
        for (let r = q + 1; r < n; r++) {
          if (
            A[p] + A[q] > A[r] &&
            A[q] + A[r] > A[p] &&
            A[r] + A[p] > A[q]
          ) {
            count++;
          }
        }
      }
    }

    return count;
  }

  static secondSolution(A) {
    const n = A.length;
    let sorted = A.slice().sort((a, b) => a - b);
    let count = 0;

    for (let p = 0; p < n; p++) {
      for (let q = p + 1; q < n; q++) {
        for (let r = q + 1; r < n; r++) {
          if (sorted[p] + sorted[q] > sorted[r]) {
            count++;
          } else {
            break;
          }
        }
      }
    }

    return count;
  }

  static thirdSolution(A) {
    const n = A.length;
    let sorted = A.slice().sort((a, b) => a - b);
    let count = 0;

    for (let p = 0; p < n - 2; p++) {
      let r = p + 2;

      for (let q = p + 1; q < n - 1; q++) {
        while (r < n && sorted[p] + sorted[q] > sorted[r]) {
          r++;
        }

        count += r - q - 1;
      }
    }

    return count;
  }
}

module.exports = { CountTriangles };
