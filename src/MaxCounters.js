class MaxCounters {
  static firstSolution(N, A) {
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

  static secondSolution(N, A) {
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
}

module.exports = { MaxCounters };
