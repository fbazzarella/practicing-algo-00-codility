class FrogRiverOne {
  static firstSolution(X, A) {
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
