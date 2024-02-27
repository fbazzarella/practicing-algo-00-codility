class MaxProductOfThree {
  static firstSolution(A) {
    const n = A.length;

    if (n == 3) return A[0] * A[1] * A[2];

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

    A = quickSort(A);

    const productOfThree = A[n - 1] * A[n - 2] * A[n - 3];
    const productWithTwoNegatives = A[0] * A[1] * A[n - 1];

    return productOfThree > productWithTwoNegatives
      ? productOfThree
      : productWithTwoNegatives;
  }

  static secondSolution(A) {
    const n = A.length;

    if (n == 3) return A[0] * A[1] * A[2];

    const quickSortUsingPartitions = (A, left = 0, right = A.length - 1) => {
      if (left < right) {
        const pivotIndex = partition(A, left, right);

        quickSortUsingPartitions(A, left, pivotIndex - 1);
        quickSortUsingPartitions(A, pivotIndex + 1, right);
      }

      return A;
    };

    const partition = (A, left, right) => {
      const pivot = A[right];
      let i = left - 1;

      for (let j = left; j < right; j++) {
        if (A[j] < pivot) {
          i++;

          const tempElement = A[i];
          A[i] = A[j];
          A[j] = tempElement;
        }
      }

      const tempElement = A[i + 1];
      A[i + 1] = A[right];
      A[right] = tempElement;

      return i + 1;
    };

    A = quickSortUsingPartitions(A);

    const productOfThree = A[n - 1] * A[n - 2] * A[n - 3];
    const productWithTwoNegatives = A[0] * A[1] * A[n - 1];

    return productOfThree > productWithTwoNegatives
      ? productOfThree
      : productWithTwoNegatives;
  }

  static thirdSolution(A) {
    const n = A.length;

    if (n == 3) return A[0] * A[1] * A[2];

    const mergeSort = (A) => {
      const n = A.length;

      if (n <= 1) return A;

      const middle = Math.floor(n / 2);
      const left = A.slice(0, middle);
      const right = A.slice(middle);

      return merge(mergeSort(left), mergeSort(right));
    };

    const merge = (left, right) => {
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) result.push(left[leftIndex++]);
        else result.push(right[rightIndex++]);
      }

      return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
    };

    A = mergeSort(A);

    const productOfThree = A[n - 1] * A[n - 2] * A[n - 3];
    const productWithTwoNegatives = A[0] * A[1] * A[n - 1];

    return productOfThree > productWithTwoNegatives
      ? productOfThree
      : productWithTwoNegatives;
  }
}

module.exports = { MaxProductOfThree };
