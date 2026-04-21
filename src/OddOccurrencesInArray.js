class OddOccurrencesInArray {
  static firstSolution(A) {
    let occurrences = {};

    for (let element of A) {
      if (element in occurrences) delete occurrences[element];
      else occurrences[element] = 1;
    }

    return parseInt(Object.keys(occurrences)[0]);
  }

  static secondSolution(A) {
    let occurrences = [];

    for (let i = 0; i < A.length; i++) {
      if (occurrences[A[i]] === undefined) occurrences[A[i]] = 1;
      else occurrences[A[i]]++;
    }

    for (let i = 0; i < occurrences.length; i++)
      if (occurrences[i] % 2 == 1) return i;
  }

  static thirdSolution(A) {
    let result = 0;

    for (let i = 0; i < A.length; i++) result ^= A[i];

    return result;
  }
}

module.exports = { OddOccurrencesInArray };
