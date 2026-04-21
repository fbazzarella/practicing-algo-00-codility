class ChocolatesByNumbers {
  static firstSolution(N, M) {
    let visited = new Set();
    let current = 0;

    while (!visited.has(current)) {
      visited.add(current);
      current = (current + M) % N;
    }

    return visited.size;
  }

  static secondSolution(N, M) {
    let gcd = (a, b) => b == 0 ? a : gcd(b, a % b);

    return N / gcd(N, M);
  }

  static thirdSolution(N, M) {
    let a = N;
    let b = M;

    while (b != 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }

    return N / a;
  }
}

module.exports = { ChocolatesByNumbers };
