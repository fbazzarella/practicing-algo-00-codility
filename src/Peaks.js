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

  static secondSolution(A) {
    const n = A.length;

    if (n <= 2) return 0;

    let peakCount = Array(n).fill(0);

    for (let i = 1; i < n - 1; i++) {
      peakCount[i] = peakCount[i - 1];

      if (A[i] > A[i - 1] && A[i] > A[i + 1]) peakCount[i]++;
    }

    peakCount[n - 1] = peakCount[n - 2];

    if (peakCount[n - 1] == 0) return 0;

    let maxBlocks = 0;

    for (let blocks = 1; blocks <= n; blocks++) {
      if (n % blocks != 0) continue;

      let blockSize = n / blocks;
      let allBlocksHavePeak = true;

      for (let b = 0; b < blocks; b++) {
        let start = b * blockSize;
        let end = start + blockSize - 1;
        let peaksBefore = start > 0 ? peakCount[start - 1] : 0;
        let peaksInBlock = peakCount[end] - peaksBefore;

        if (peaksInBlock == 0) {
          allBlocksHavePeak = false;
          break;
        }
      }

      if (allBlocksHavePeak) maxBlocks = blocks;
    }

    return maxBlocks;
  }

  static thirdSolution(A) {
    const n = A.length;

    if (n <= 2) return 0;

    let maxBlocks = 0;

    for (let blocks = 1; blocks <= n; blocks++) {
      if (n % blocks != 0) continue;

      let blockSize = n / blocks;
      let allBlocksHavePeak = true;

      for (let b = 0; b < blocks; b++) {
        let start = b * blockSize;
        let end = start + blockSize;
        let hasPeak = false;

        for (let i = start; i < end; i++) {
          if (i > 0 && i < n - 1 && A[i] > A[i - 1] && A[i] > A[i + 1]) {
            hasPeak = true;
            break;
          }
        }

        if (!hasPeak) {
          allBlocksHavePeak = false;
          break;
        }
      }

      if (allBlocksHavePeak) maxBlocks = blocks;
    }

    return maxBlocks;
  }
}

module.exports = { Peaks };
