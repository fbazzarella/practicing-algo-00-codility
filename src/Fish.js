class Fish {
  static firstSolution(A, B) {
    let n = A.length;

    if (n == 1) return 1;

    for (let i = 0; i < n; i++) {
      if (A[i] == 0) A[i] = 0.5;
      if (B[i] == 0) A[i] = -A[i];
    }

    let i = 0;

    while (i < n - 1) {
      if (A[i] > 0 && A[i + 1] < 0) {
        if (A[i] < Math.abs(A[i + 1])) {
          A.splice(i, 1);

          if (A[i - 1] > 0) i--;
        } else A.splice(i + 1, 1);

        n--;
        continue;
      }

      i++;
    }

    return n;
  }

  static secondSolution(A, B) {
    const n = A.length;

    if (n == 1) return 1;

    let eatingStack = [];
    let fishAlive = 0;

    for (let i = 0; i < n; i++) {
      let size = A[i];
      let direction = B[i];

      if (direction == 1) {
        eatingStack.push(size);
        continue;
      } else {
        if (eatingStack.length == 0) {
          fishAlive++;
          continue;
        } else {
          let eatingFish = eatingStack.pop();

          if (eatingFish > size) {
            eatingStack.push(eatingFish);
            continue;
          }

          while (eatingFish < size && eatingStack.length > 0)
            eatingFish = eatingStack.pop();

          eatingFish < size ? fishAlive++ : eatingStack.push(eatingFish);
        }
      }
    }

    return eatingStack.length + fishAlive;
  }
}

module.exports = { Fish };
