class CommonPrimeDivisors {
  static firstSolution(A, B) {
    let count = 0;

    for (let i = 0; i < A.length; i++) {
      let primesA = [];
      let a = A[i];

      for (let d = 2; d <= a; d++) {
        if (a % d == 0) {
          primesA.push(d);
          while (a % d == 0) a = a / d;
        }
      }

      if (a > 1) primesA.push(a);

      let primesB = [];
      let b = B[i];

      for (let d = 2; d <= b; d++) {
        if (b % d == 0) {
          primesB.push(d);
          while (b % d == 0) b = b / d;
        }
      }

      if (b > 1) primesB.push(b);

      if (primesA.length != primesB.length) continue;

      let same = true;

      for (let j = 0; j < primesA.length; j++) {
        if (primesA[j] != primesB[j]) {
          same = false;
          break;
        }
      }

      if (same) count++;
    }

    return count;
  }

  static secondSolution(A, B) {
    let count = 0;

    for (let i = 0; i < A.length; i++) {
      let primesA = [];
      let a = A[i];

      for (let d = 2; d * d <= a; d++) {
        if (a % d == 0) {
          primesA.push(d);
          while (a % d == 0) a = a / d;
        }
      }

      if (a > 1) primesA.push(a);

      let primesB = [];
      let b = B[i];

      for (let d = 2; d * d <= b; d++) {
        if (b % d == 0) {
          primesB.push(d);
          while (b % d == 0) b = b / d;
        }
      }

      if (b > 1) primesB.push(b);

      if (primesA.length != primesB.length) continue;

      let same = true;

      for (let j = 0; j < primesA.length; j++) {
        if (primesA[j] != primesB[j]) {
          same = false;
          break;
        }
      }

      if (same) count++;
    }

    return count;
  }

  static thirdSolution(A, B) {
    let gcd = (a, b) => {
      while (b != 0) {
        let t = b;
        b = a % b;
        a = t;
      }
      return a;
    };

    let hasSamePrimes = (a, b) => {
      let g = gcd(a, b);

      while (a != 1) {
        let gA = gcd(a, g);
        if (gA == 1) return false;
        a = a / gA;
      }

      while (b != 1) {
        let gB = gcd(b, g);
        if (gB == 1) return false;
        b = b / gB;
      }

      return true;
    };

    let count = 0;

    for (let i = 0; i < A.length; i++) {
      if (hasSamePrimes(A[i], B[i])) count++;
    }

    return count;
  }
}

module.exports = { CommonPrimeDivisors };
