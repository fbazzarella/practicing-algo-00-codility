class PermMissingElem {
  static firstSolution(A) {
    const n = A.length;
    let rightPlaces = [];

    for (let i = 0; i < n; i++) rightPlaces[A[i]] = true;

    for (let i = 1; i < rightPlaces.length; i++) if (!rightPlaces[i]) return i;

    return n + 1;
  }

  static secondSolution(A) {
    const n = A.length;
    let missingElement;
    let tempElement;

    for (let i = 0; i < n; i++) {
      loop2: while (A[i] != i + 1) {
        if (A[i] > n || A[i] === undefined) {
          missingElement = i + 1;
          A[i] = undefined;
          break loop2;
        }

        tempElement = A[A[i] - 1];
        A[A[i] - 1] = A[i];
        A[i] = tempElement;
      }
    }

    return missingElement ?? n + 1;
  }
}

module.exports = { PermMissingElem };
