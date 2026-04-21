class Ladder {
  static firstSolution(A, B) {
    let result = [];

    for (let i = 0; i < A.length; i++) {
      let mod = Math.pow(2, B[i]);
      let prev = 1, curr = 1;

      for (let j = 3; j <= A[i] + 1; j++) {
        let t = (prev + curr) % mod;
        prev = curr;
        curr = t;
      }

      result.push(curr % mod);
    }

    return result;
  }

  static secondSolution(A, B) {
    let maxN = 0;

    for (let i = 0; i < A.length; i++) {
      if (A[i] > maxN) maxN = A[i];
    }

    let maxMod = Math.pow(2, 30);
    let fib = new Array(maxN + 2);
    fib[1] = 1;
    fib[2] = 1;

    for (let i = 3; i <= maxN + 1; i++) {
      fib[i] = (fib[i - 1] + fib[i - 2]) % maxMod;
    }

    let result = [];

    for (let i = 0; i < A.length; i++) {
      result.push(fib[A[i] + 1] % Math.pow(2, B[i]));
    }

    return result;
  }

  static thirdSolution(A, B) {
    let maxN = 0;

    for (let i = 0; i < A.length; i++) {
      if (A[i] > maxN) maxN = A[i];
    }

    let fib = new Array(maxN + 2);
    fib[1] = 1;
    fib[2] = 1;

    for (let i = 3; i <= maxN + 1; i++) {
      fib[i] = (fib[i - 1] + fib[i - 2]) & ((1 << 30) - 1);
    }

    let result = [];

    for (let i = 0; i < A.length; i++) {
      result.push(fib[A[i] + 1] & ((1 << B[i]) - 1));
    }

    return result;
  }
}

module.exports = { Ladder };
