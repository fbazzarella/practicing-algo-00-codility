class CountSemiprimes {
  static firstSolution(N, P, Q) {
    const result = [];

    for (let i = 0; i < P.length; i++) {
      let count = 0;

      for (let num = P[i]; num <= Q[i]; num++) {
        let temp = num;
        let factors = 0;

        for (let d = 2; d * d <= temp; d++) {
          while (temp % d == 0) {
            factors++;
            temp = temp / d;
          }
        }

        if (temp > 1) factors++;
        if (factors == 2) count++;
      }

      result.push(count);
    }

    return result;
  }

  static secondSolution(N, P, Q) {
    let semiprimes = [];

    for (let num = 4; num <= N; num++) {
      let temp = num;
      let factors = 0;

      for (let d = 2; d * d <= temp; d++) {
        while (temp % d == 0) {
          factors++;
          temp = temp / d;
        }
      }

      if (temp > 1) factors++;
      if (factors == 2) semiprimes.push(num);
    }

    const result = [];

    for (let i = 0; i < P.length; i++) {
      let count = 0;

      for (let j = 0; j < semiprimes.length; j++) {
        if (semiprimes[j] >= P[i] && semiprimes[j] <= Q[i]) count++;
      }

      result.push(count);
    }

    return result;
  }

  static thirdSolution(N, P, Q) {
    let sieve = new Array(N + 1).fill(0);

    for (let i = 2; i * i <= N; i++) {
      if (sieve[i] == 0) {
        for (let j = i * i; j <= N; j += i) {
          if (sieve[j] == 0) sieve[j] = i;
        }
      }
    }

    let prefix = new Array(N + 1).fill(0);

    for (let i = 4; i <= N; i++) {
      if (sieve[i] != 0) {
        let other = i / sieve[i];
        if (sieve[other] == 0 && other > 1) prefix[i] = 1;
      }

      prefix[i] += prefix[i - 1];
    }

    const result = [];

    for (let i = 0; i < P.length; i++) {
      result.push(prefix[Q[i]] - prefix[P[i] - 1]);
    }

    return result;
  }
}

module.exports = { CountSemiprimes };
