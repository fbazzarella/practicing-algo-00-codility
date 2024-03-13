class Peaks {
  static firstSolution(A) {
    const n = A.length;

    if (n <= 2) return 0;

    let i = 2;
    let possibleBlocks = new Set([1]);

    for (; i * i < n; i++) {
      if (n % i == 0) {
        possibleBlocks.add(i);
        possibleBlocks.add(n / i);
      }

      if (n % (i * i) == 0) {
        possibleBlocks.add(i * i);
        possibleBlocks.add(n / (i * i));
      }
    }

    if (i * i == n) possibleBlocks.add(i);

    let maxBlocksWithPeaks = 0;

    for (let blockCount of possibleBlocks) {
      const blockSize = n / blockCount;
      let endIndex = blockSize - 1;
      let currentBlock = 0;
      let hasPeaks = Array(blockCount);
      let hasPeak = false;

      for (let i = 1; i < n; i++) {
        if (i < n - 1 && A[i] > A[i - 1] && A[i] > A[i + 1]) hasPeak = true;

        if (i == endIndex) {
          endIndex += blockSize;
          hasPeaks[currentBlock++] = hasPeak;
          hasPeak = false;
        }
      }

      if (hasPeaks.every((v) => v) && blockCount > maxBlocksWithPeaks)
        maxBlocksWithPeaks = blockCount;
    }

    return maxBlocksWithPeaks;
  }
}

module.exports = { Peaks };
