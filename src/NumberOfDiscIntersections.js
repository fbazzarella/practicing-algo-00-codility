class NumberOfDiscIntersections {
  static firstSolution(A) {
    const n = A.length;
    let intersectionCount = 0;

    for (let i = 0; i < n - 1; i++)
      for (let j = i + 1; j < n; j++)
        if (i + A[i] >= j - A[j] && i - A[i] <= j + A[j])
          if (++intersectionCount > 10000000) return -1;

    return intersectionCount;
  }

  static secondSolution(A) {
    const n = A.length;

    let startingPoints = [];
    let endingPoints = [];

    for (let i = 0; i < n; i++) {
      startingPoints.push(i - A[i]);
      endingPoints.push(i + A[i]);
    }

    startingPoints.sort((a, b) => a - b);
    endingPoints.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    let intersectionCount = 0;
    let openedDiscs = 0;

    while (i < n) {
      if (startingPoints[i] <= endingPoints[j]) {
        intersectionCount += openedDiscs++;

        if (intersectionCount > 10000000) return -1;

        i++;
      } else {
        openedDiscs--;
        j++;
      }
    }

    return intersectionCount;
  }
  static thirdSolution(A) {
    const n = A.length;
    let opens = new Array(n).fill(0);
    let closes = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      let left = i - A[i] < 0 ? 0 : i - A[i];
      let right = i + A[i] >= n ? n - 1 : i + A[i];

      opens[left]++;
      closes[right]++;
    }

    let intersections = 0;
    let active = 0;

    for (let i = 0; i < n; i++) {
      intersections += active * opens[i] + (opens[i] * (opens[i] - 1)) / 2;

      if (intersections > 10000000) return -1;

      active += opens[i] - closes[i];
    }

    return intersections;
  }
}

module.exports = { NumberOfDiscIntersections };
