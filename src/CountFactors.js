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
}

module.exports = { CountFactors };
