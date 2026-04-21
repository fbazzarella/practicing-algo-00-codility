class FrogRiverOne {
  static firstSolution(X, A) {
    for (let i = 0; i < A.length; i++) {
      let allCovered = true;

      for (let pos = 1; pos <= X; pos++) {
        let found = false;

        for (let j = 0; j <= i; j++) {
          if (A[j] == pos) {
            found = true;
            break;
          }
        }

        if (!found) {
          allCovered = false;
          break;
        }
      }

      if (allCovered) return i;
    }

    return -1;
  }

  static secondSolution(X, A) {
    let seen = new Set();

    for (let i = 0; i < A.length; i++) {
      if (A[i] >= 1 && A[i] <= X) seen.add(A[i]);

      if (seen.size == X) return i;
    }

    return -1;
  }

  static thirdSolution(X, A) {
    let banks = Array(X);
    let leavesLeft = X;

    for (let i = 0; i < A.length; i++) {
      if (A[i] > X) continue;

      if (banks[A[i] - 1] === undefined) {
        banks[A[i] - 1] = true;

        if (--leavesLeft == 0) return i;
      }
    }

    return -1;
  }
}

module.exports = { FrogRiverOne };
