class FrogJmp {
  static firstSolution(X, Y, D) {
    let position = X;
    let jumps = 0;

    while (position < Y) {
      position += D;
      jumps++;
    }

    return jumps;
  }

  static secondSolution(X, Y, D) {
    let diff = Y - X;
    let jumps = Math.floor(diff / D);

    if (diff % D != 0) jumps++;

    return jumps;
  }

  static thirdSolution(X, Y, D) {
    return Math.ceil((Y - X) / D);
  }
}

module.exports = { FrogJmp };
