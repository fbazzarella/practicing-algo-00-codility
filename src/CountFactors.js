class CountFactors {
  static firstSolution(N) {
    let factorsCount = 0;

    for (let i = N; i >= 1; i--) if (N % i == 0) factorsCount++;

    return factorsCount;
  }

  static secondSolution(N) {
    let i = 1;
    let factorsCount = 0;

    for (; i * i < N; i++) if (N % i == 0) factorsCount += 2;

    if (i * i == N) factorsCount++;

    return factorsCount;
  }
  static thirdSolution(N) {
    let count = 1;
    let temp = N;

    for (let d = 2; d * d <= temp; d++) {
      let exp = 0;

      while (temp % d == 0) {
        exp++;
        temp = temp / d;
      }

      count *= exp + 1;
    }

    if (temp > 1) count *= 2;

    return count;
  }
}

module.exports = { CountFactors };
