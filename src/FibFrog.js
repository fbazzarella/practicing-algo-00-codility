class FibFrog {
  static firstSolution(A) {
    const n = A.length;
    let fibs = new Set();
    let a = 0, b = 1;

    while (b <= n + 1) {
      fibs.add(b);
      let t = a + b;
      a = b;
      b = t;
    }

    let jumps = new Array(n + 1).fill(Infinity);

    for (let i = 0; i <= n; i++) {
      if (i < n && A[i] == 0) continue;

      if (fibs.has(i + 1)) jumps[i] = 1;

      for (let j = 0; j < i; j++) {
        if (j < n && A[j] == 0) continue;
        if (jumps[j] == Infinity) continue;

        if (fibs.has(i - j) && jumps[j] + 1 < jumps[i]) {
          jumps[i] = jumps[j] + 1;
        }
      }
    }

    return jumps[n] == Infinity ? -1 : jumps[n];
  }

  static secondSolution(A) {
    const n = A.length;
    let fibs = [];
    let a = 0, b = 1;

    while (b <= n + 1) {
      fibs.push(b);
      let t = a + b;
      a = b;
      b = t;
    }

    let jumps = new Array(n + 1).fill(-1);

    for (let i = 0; i <= n; i++) {
      if (i < n && A[i] == 0) continue;

      for (let f = 0; f < fibs.length; f++) {
        let prev = i - fibs[f];

        if (prev < -1) break;

        if (prev == -1) {
          jumps[i] = 1;
          break;
        }

        if (jumps[prev] != -1) {
          if (jumps[i] == -1 || jumps[prev] + 1 < jumps[i]) {
            jumps[i] = jumps[prev] + 1;
          }
        }
      }
    }

    return jumps[n];
  }

  static thirdSolution(A) {
    const n = A.length;
    let fibs = [];
    let a = 0, b = 1;

    while (b <= n + 1) {
      fibs.push(b);
      let t = a + b;
      a = b;
      b = t;
    }

    let visited = new Array(n + 1).fill(false);
    let queue = [-1];
    let jumps = 0;

    while (queue.length > 0) {
      jumps++;
      let next = [];

      for (let q = 0; q < queue.length; q++) {
        for (let f = 0; f < fibs.length; f++) {
          let to = queue[q] + fibs[f];

          if (to == n) return jumps;
          if (to > n || to < 0) continue;
          if (A[to] == 0 || visited[to]) continue;

          visited[to] = true;
          next.push(to);
        }
      }

      queue = next;
    }

    return -1;
  }
}

module.exports = { FibFrog };
