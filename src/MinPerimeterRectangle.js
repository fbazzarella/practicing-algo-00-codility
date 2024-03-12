class MinPerimeterRectangle {
  static firstSolution(N) {
    const sqrt = Math.sqrt(N);

    if (Number.isInteger(sqrt)) return sqrt * 4;

    let minPerimeter = (N + 1) * 2;
    let i = 2;

    while (i * i < N) {
      if (N % i == 0) {
        let perimeter = (i + N / i) * 2;

        if (perimeter < minPerimeter) minPerimeter = perimeter;
      }

      if (N % (i * i) == 0) {
        let perimeter = (i * i + N / (i * i)) * 2;

        if (perimeter < minPerimeter) minPerimeter = perimeter;
      }

      i++;
    }

    return minPerimeter;
  }
}

module.exports = { MinPerimeterRectangle };
