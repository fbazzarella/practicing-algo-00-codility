class MinPerimeterRectangle {
  static firstSolution(N) {
    const sqrt = Math.sqrt(N);

    if (Number.isInteger(sqrt)) return sqrt * 4;

    let minPerimeter = (N + 1) * 2;

    for (let i = 2; i * i < N; i++) {
      if (N % i == 0) {
        let perimeter = (i + N / i) * 2;

        if (perimeter < minPerimeter) minPerimeter = perimeter;
      }

      if (N % (i * i) == 0) {
        let perimeter = (i * i + N / (i * i)) * 2;

        if (perimeter < minPerimeter) minPerimeter = perimeter;
      }
    }

    return minPerimeter;
  }
}

module.exports = { MinPerimeterRectangle };
