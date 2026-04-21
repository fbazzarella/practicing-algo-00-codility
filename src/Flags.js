class Flags {
  static firstSolution(A) {
    let peaks = [];

    for (let i = 1; i < A.length - 1; i++)
      if (A[i] > A[i - 1] && A[i] > A[i + 1]) peaks.push(i);

    const o = peaks.length;

    if (o <= 1) return o;

    let maxFlags = 0;

    for (let flags = 1; flags <= o; flags++) {
      let placed = 1;
      let lastPos = peaks[0];

      for (let j = 1; j < o; j++) {
        if (peaks[j] - lastPos >= flags) {
          placed++;
          lastPos = peaks[j];
        }

        if (placed == flags) break;
      }

      if (placed == flags) maxFlags = flags;
    }

    return maxFlags;
  }

  static secondSolution(A) {
    let peaks = [];

    for (let i = 1; i < A.length - 1; i++)
      if (A[i] > A[i - 1] && A[i] > A[i + 1]) peaks.push(i);

    const o = peaks.length;

    if (o <= 1) return o;

    let lo = 1;
    let hi = o;
    let maxFlags = 1;

    while (lo <= hi) {
      let mid = Math.floor((lo + hi) / 2);
      let placed = 1;
      let lastPos = peaks[0];

      for (let j = 1; j < o; j++) {
        if (peaks[j] - lastPos >= mid) {
          placed++;
          lastPos = peaks[j];
        }

        if (placed == mid) break;
      }

      if (placed >= mid) {
        maxFlags = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }

    return maxFlags;
  }

  static thirdSolution(A) {
    let peaks = [];

    for (let i = 1; i < A.length - 1; i++)
      if (A[i] > A[i - 1] && A[i] > A[i + 1]) peaks.push(i);

    const o = peaks.length;

    if (o <= 1) return o;

    const maxFlags = Math.ceil(Math.sqrt(peaks[o - 1] - peaks[0]));

    for (let flags = maxFlags; flags > 1; flags--) {
      let startIndex = 0;
      let endIndex = o - 1;
      let startFlag = peaks[startIndex];
      let endFlag = peaks[endIndex];
      let flagsPlaced = 2;

      while (startIndex < endIndex) {
        startIndex++;
        endIndex--;

        if (
          peaks[startIndex] >= startFlag + flags &&
          peaks[startIndex] <= endFlag - flags
        ) {
          flagsPlaced++;
          startFlag = peaks[startIndex];
        }

        if (
          peaks[endIndex] >= startFlag + flags &&
          peaks[endIndex] <= endFlag - flags
        ) {
          flagsPlaced++;
          endFlag = peaks[endIndex];
        }

        if (flagsPlaced == flags) return flags;
      }
    }

    return 0;
  }
}

module.exports = { Flags };
