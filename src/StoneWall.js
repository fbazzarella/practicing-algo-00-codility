class StoneWall {
  static firstSolution(H) {
    const n = H.length;
    let blocks = 0;
    let heights = [];

    for (let i = 0; i < n; i++) {
      let found = false;

      for (let j = heights.length - 1; j >= 0; j--) {
        if (heights[j] == H[i]) {
          found = true;
          heights.length = j + 1;
          break;
        } else if (heights[j] > H[i]) {
          continue;
        } else {
          break;
        }
      }

      if (!found) {
        let k = heights.length - 1;
        while (k >= 0 && heights[k] > H[i]) k--;
        heights.length = k + 1;
        heights.push(H[i]);
        blocks++;
      }
    }

    return blocks;
  }

  static secondSolution(H) {
    const n = H.length;

    if (n == 1) return 1;

    let stack = [];
    let minBlocks = 0;

    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && H[i] < stack[stack.length - 1]) stack.pop();

      if (stack.length == 0 || H[i] != stack[stack.length - 1]) {
        minBlocks++;
        stack.push(H[i]);
      } else {
        stack.push(H[i]);
      }
    }

    return minBlocks;
  }

  static thirdSolution(H) {
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
