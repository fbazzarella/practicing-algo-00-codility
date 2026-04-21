class CountNonDivisible {
  static firstSolution(A) {
    const n = A.length;
    const result = new Array(n);

    for (let i = 0; i < n; i++) {
      const val = A[i];
      let divisors = 0;

      for (let d = 1; d <= val; d++) {
        if (val % d == 0) {
          for (let j = 0; j < n; j++) {
            if (A[j] == d) divisors++;
          }
        }
      }

      result[i] = n - divisors;
    }

    return result;
  }

  static secondSolution(A) {
    const n = A.length;
    const result = new Array(n);

    for (let i = 0; i < n; i++) {
      let nonDivisors = 0;

      for (let j = 0; j < n; j++) {
        if (A[i] % A[j] != 0) nonDivisors++;
      }

      result[i] = nonDivisors;
    }

    return result;
  }

  static thirdSolution(A) {
    const n = A.length;
    const max = 2 * n;
    const count = new Array(max + 1).fill(0);

    for (let i = 0; i < n; i++) count[A[i]]++;

    const result = new Array(n);

    for (let i = 0; i < n; i++) {
      const val = A[i];
      let divisors = 0;

      for (let d = 1; d * d <= val; d++) {
        if (val % d == 0) {
          divisors += count[d];
          if (d != val / d) divisors += count[val / d];
        }
      }

      result[i] = n - divisors;
    }

    return result;
  }
}

module.exports = { CountNonDivisible };
