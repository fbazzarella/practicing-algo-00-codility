class CyclicRotation {
  static firstSolution(A, K) {
    let i = 0;

    let rotatedArray = A;
    let lastIndex = rotatedArray.length - 1;
    let lastElement;

    while(i++ < K) {
      lastElement = rotatedArray[lastIndex];

      for(let j = lastIndex; j >= 0; j--) {
        rotatedArray[j] = (j > 0 ? rotatedArray[j - 1] : lastElement);
      };
    };

    return rotatedArray;
  };
};

module.exports = { CyclicRotation };
