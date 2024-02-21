class PassingCars {
  static firstSolution(A) {
    const n = A.length;
    let prefixSums = [A[0]].concat(Array(n - 1));
    let passingCars = 0;

    for (let i = 1; i < n; i++) prefixSums[i] = prefixSums[i - 1] + A[i];

    for (let i = 0; i < n; i++) {
      if (A[i] == 0) {
        passingCars += prefixSums[n - 1];

        if (i > 0) passingCars -= prefixSums[i - 1];
      }
    }

    return passingCars <= 1000000000 ? passingCars : -1;
  }
}

module.exports = { PassingCars };
