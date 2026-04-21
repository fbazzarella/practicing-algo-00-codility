class CountDistinctSlices {
  static firstSolution(M, A) {
    const n = A.length;
    let count = 0;

    for (let p = 0; p < n; p++) {
      for (let q = p; q < n; q++) {
        let distinct = true;

        for (let i = p; i < q; i++) {
          for (let j = i + 1; j <= q; j++) {
            if (A[i] == A[j]) {
              distinct = false;
              break;
            }
          }

          if (!distinct) break;
        }

        if (distinct) {
          count++;
          if (count >= 1000000000) return 1000000000;
        }
      }
    }

    return count;
  }

  static secondSolution(M, A) {
    const n = A.length;
    let count = 0;

    for (let p = 0; p < n; p++) {
      let seen = new Set();

      for (let q = p; q < n; q++) {
        if (seen.has(A[q])) break;

        seen.add(A[q]);
        count++;

        if (count >= 1000000000) return 1000000000;
      }
    }

    return count;
  }

  static thirdSolution(M, A) {
    const n = A.length;
    let seen = new Array(M + 1).fill(false);
    let count = 0;
    let back = 0;

    for (let front = 0; front < n; front++) {
      while (back < n && !seen[A[back]]) {
        seen[A[back]] = true;
        back++;
      }

      count += back - front;

      if (count >= 1000000000) return 1000000000;

      seen[A[front]] = false;
    }

    return count;
  }
}

module.exports = { CountDistinctSlices };
