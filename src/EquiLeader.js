class EquiLeader {
  static firstSolution(A) {
    const n = A.length;

    if (n <= 1) return 0;

    const findTheLeader = (A) => {
      const n = A.length;
      const middle = Math.floor(n / 2);

      let sortedArray = [...A];

      sortedArray.sort((a, b) => a - b);

      const candidate = sortedArray[middle];
      let candidateCount = 0;

      for (let i = 0; i < n; i++) if (A[i] == candidate) candidateCount++;

      return candidateCount > middle ? candidate : null;
    };

    let countEquiLeaders = 0;

    for (let i = 0; i < n - 1; i++) {
      const leftLeader = findTheLeader(A.slice(0, i + 1));
      const rightLeader = findTheLeader(A.slice(i + 1, n));

      if (leftLeader != null && leftLeader == rightLeader) countEquiLeaders++;
    }

    return countEquiLeaders;
  }

  static secondSolution(A) {
    const n = A.length;

    if (n <= 1) return 0;

    const findTheLeader = (A) => {
      const middle = Math.floor(n / 2);

      let sortedArray = [...A];

      sortedArray.sort((a, b) => a - b);

      const candidate = sortedArray[middle];
      let candidateCount = 0;

      for (let i = 0; i < n; i++) if (A[i] == candidate) candidateCount++;

      return [candidate, candidateCount];
    };

    const [leader, leaderCount] = findTheLeader(A);

    let leftLeaders = 0;
    let rightLeaders = leaderCount;
    let leftCount = 0;
    let rightCount = n;
    let equiLeadersCount = 0;

    for (let i = 0; i < n; i++) {
      if (A[i] == leader) {
        leftLeaders++;
        rightLeaders--;
      }

      leftCount++;
      rightCount--;

      if (leftLeaders > leftCount / 2 && rightLeaders > rightCount / 2)
        equiLeadersCount++;
    }

    return equiLeadersCount;
  }
}

module.exports = { EquiLeader };
