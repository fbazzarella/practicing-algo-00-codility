class Distinct {
  static firstSolution(A) {
    const quickSort = (A) => {
      const n = A.length;

      if (n <= 1) return A;

      const pivot = A[0];
      let left = [];
      let right = [];

      for (let i = 1; i < n; i++)
        A[i] < pivot ? left.push(A[i]) : right.push(A[i]);

      return [...quickSort(left), pivot, ...quickSort(right)];
    };

    const sortedArray = quickSort(A);

    let distinctCount = 0;
    let lastElement;

    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] != lastElement) {
        distinctCount++;
        lastElement = sortedArray[i];
      }
    }

    return distinctCount;
  }
}

module.exports = { Distinct };
