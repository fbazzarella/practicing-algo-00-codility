class MaxProfit {
  static firstSolution(A) {
    const n = A.length;

    if (n <= 1) return 0;

    let maxProfit = 0;

    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        const diff = A[j] - A[i];

        if (diff > maxProfit) maxProfit = diff;
      }
    }

    return maxProfit;
  }

  static secondSolution(A) {
    const n = A.length;

    if (n <= 1) return 0;

    let minPrice = A[0];
    let maxProfit = Number.NEGATIVE_INFINITY;

    for (let i = 1; i < n; i++) {
      if (A[i] > A[i - 1]) {
        const diff = A[i] - minPrice;

        if (diff > maxProfit) maxProfit = diff;
      } else if (A[i] < minPrice) minPrice = A[i];
    }

    return maxProfit > 0 ? maxProfit : 0;
  }
}

module.exports = { MaxProfit };
