class Nesting {
  static firstSolution(S) {
    const n = S.length;

    if (n == 0) return 1;

    let opened = [];

    for (let i = 0; i < n; i++) {
      if (S[i] == "(") opened.push(S[i]);
      else {
        const o = opened.length - 1;

        if (opened[o] == "(" && S[i] == ")") opened.pop();
        else return 0;
      }
    }

    return opened.length == 0 ? 1 : 0;
  }
}

module.exports = { Nesting };
