class StoneWall {
  static firstSolution(H) {
    const n = H.length;

    if (n == 1) return 1;

    let stack = [];
    let minBlocks = 0;

    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && H[i] < stack[stack.length - 1]) stack.pop();

      if (
        stack.length == 0 ||
        (stack.length > 0 && H[i] != stack[stack.length - 1])
      )
        minBlocks++;

      stack.push(H[i]);
    }

    return minBlocks;
  }
}

module.exports = { StoneWall };
