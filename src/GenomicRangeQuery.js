class GenomicRangeQuery {
  static firstSolution(S, P, Q) {
    let minFactors = [];

    for (let i = 0; i < P.length; i++) {
      let minFactor = 4;

      for (let j = P[i]; j <= Q[i]; j++) {
        let factor;

        switch (S[j]) {
          case "A":
            factor = 1;
            break;
          case "C":
            factor = 2;
            break;
          case "G":
            factor = 3;
            break;
          case "T":
            factor = 4;
            break;
        }

        if (factor < minFactor) minFactor = factor;
      }

      minFactors.push(minFactor);
    }

    return minFactors;
  }

  static secondSolution(S, P, Q) {
    let positions = { A: [], C: [], G: [], T: [] };
    let minFactors = [];

    for (let i = 0; i < S.length; i++) positions[S[i]].push(i);

    loop1: for (let i = 0; i < P.length; i++) {
      for (let j = 0; j < positions.A.length; j++) {
        if (P[i] <= positions.A[j] && positions.A[j] <= Q[i]) {
          minFactors[i] = 1;
          continue loop1;
        }
      }

      for (let j = 0; j < positions.C.length; j++) {
        if (P[i] <= positions.C[j] && positions.C[j] <= Q[i]) {
          minFactors[i] = 2;
          continue loop1;
        }
      }

      for (let j = 0; j < positions.G.length; j++) {
        if (P[i] <= positions.G[j] && positions.G[j] <= Q[i]) {
          minFactors[i] = 3;
          continue loop1;
        }
      }

      for (let j = 0; j < positions.T.length; j++) {
        if (P[i] <= positions.T[j] && positions.T[j] <= Q[i]) {
          minFactors[i] = 4;
          continue loop1;
        }
      }
    }

    return minFactors;
  }

  static thirdSolution(S, P, Q) {
    let verifyFactor = (positions, P, Q, minFactors, question, factor) => {
      for (let position of positions) {
        if (P <= position && position <= Q) {
          minFactors[question] = factor;
          return true;
        }
      }

      return false;
    };

    let bases = { A: 1, C: 2, G: 3, T: 4 };
    let positions = { A: [], C: [], G: [], T: [] };
    let minFactors = [];

    for (let i = 0; i < S.length; i++) positions[S[i]].push(i);

    loop1: for (let i = 0; i < P.length; i++) {
      for (let [base, factor] of Object.entries(bases)) {
        if (verifyFactor(positions[base], P[i], Q[i], minFactors, i, factor))
          continue loop1;
      }
    }

    return minFactors;
  }
}

module.exports = { GenomicRangeQuery };
