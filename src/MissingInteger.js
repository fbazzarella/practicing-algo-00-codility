class MissingInteger {
  static firstSolution(A) {
    const n = A.length;

    for (let candidate = 1; candidate <= n + 1; candidate++) {
      let found = false;

      for (let j = 0; j < n; j++) {
        if (A[j] == candidate) {
          found = true;
          break;
        }
      }

      if (!found) return candidate;
    }

    return 1;
  }

  static secondSolution(A) {
    let sorted = A.slice().sort((a, b) => a - b);
    let candidate = 1;

    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] <= 0) continue;

      if (sorted[i] == candidate) {
        candidate++;
      } else if (sorted[i] > candidate) {
        return candidate;
      }
    }

    return candidate;
  }

  static thirdSolution(A) {
    const n = A.length;
    let arr = A.slice();

    for (let i = 0; i < n; ) {
      if (arr[i] > 0 && arr[i] <= n && arr[i] != arr[arr[i] - 1]) {
        let temp = arr[arr[i] - 1];
        arr[arr[i] - 1] = arr[i];
        arr[i] = temp;
        continue;
      }

      i++;
    }

    for (let i = 0; i < n; i++) {
      if (arr[i] != i + 1) return i + 1;
    }

    return n + 1;
  }
}

module.exports = { MissingInteger };
