class AbsDistinct {
  static firstSolution(A) {
    let distinct = [];

    for (let i = 0; i < A.length; i++) {
      let abs = Math.abs(A[i]);
      let found = false;

      for (let j = 0; j < distinct.length; j++) {
        if (distinct[j] == abs) {
          found = true;
          break;
        }
      }

      if (!found) distinct.push(abs);
    }

    return distinct.length;
  }

  static secondSolution(A) {
    let set = new Set();

    for (let i = 0; i < A.length; i++) {
      set.add(Math.abs(A[i]));
    }

    return set.size;
  }

  static thirdSolution(A) {
    let abs = new Array(A.length);

    for (let i = 0; i < A.length; i++) {
      abs[i] = Math.abs(A[i]);
    }

    abs.sort((a, b) => a - b);

    let count = 1;

    for (let i = 1; i < abs.length; i++) {
      if (abs[i] != abs[i - 1]) count++;
    }

    return count;
  }
}

module.exports = { AbsDistinct };
