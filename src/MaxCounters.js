class MaxCounters {
  static firstSolution(N, A) {
    let counters = Array(N).fill(0);
    let startingLine = 0;
    let maxCounter = 0;

    for (let i = 0; i < A.length; i++) {
      if (A[i] <= N) {
        let counterIndex = A[i] - 1;

        if (counters[counterIndex] < startingLine)
          counters[counterIndex] = startingLine;

        let currentCounter = ++counters[counterIndex];

        if (currentCounter > maxCounter) maxCounter = currentCounter;
      } else if (A[i] == N + 1) startingLine = maxCounter;
    }

    for (let i = 0; i < N; i++)
      if (counters[i] < startingLine) counters[i] = startingLine;

    return counters;
  }

  static secondSolution(N, A) {
    let counters = Array(N).fill(0);
    let maxCounter = 0;

    for (let i = 0; i < A.length; i++) {
      if (A[i] <= N) {
        let currentCounter = ++counters[A[i] - 1];

        if (currentCounter > maxCounter) maxCounter = currentCounter;
      } else if (A[i] == N + 1)
        for (let j = 0; j < N; j++) counters[j] = maxCounter;
    }

    return counters;
  }

  static thirdSolution(N, A) {
    let counters = new Int32Array(N);
    let base = 0;
    let maxVal = 0;

    for (let i = 0; i < A.length; i++) {
      if (A[i] <= N) {
        let idx = A[i] - 1;

        if (counters[idx] < base) counters[idx] = base;

        counters[idx]++;

        if (counters[idx] > maxVal) maxVal = counters[idx];
      } else {
        base = maxVal;
      }
    }

    let result = new Array(N);

    for (let i = 0; i < N; i++) {
      result[i] = counters[i] < base ? base : counters[i];
    }

    return result;
  }
}

module.exports = { MaxCounters };
