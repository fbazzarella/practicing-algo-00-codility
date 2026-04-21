class Brackets {
  static firstSolution(S) {
    const n = S.length;

    if (n == 0) return 1;

    let opened = [];
    let map = { "}": "{", "]": "[", ")": "(" };

    for (let i = 0; i < n; i++) {
      if (!map[S[i]]) {
        opened.push(S[i]);
      } else {
        if (opened.length == 0 || opened[opened.length - 1] != map[S[i]]) {
          return 0;
        }
        opened.pop();
      }
    }

    return opened.length == 0 ? 1 : 0;
  }

  static secondSolution(S) {
    let str = S;
    let changed = true;

    while (changed) {
      changed = false;
      let next = "";
      let i = 0;

      while (i < str.length - 1) {
        if (
          (str[i] == "(" && str[i + 1] == ")") ||
          (str[i] == "[" && str[i + 1] == "]") ||
          (str[i] == "{" && str[i + 1] == "}")
        ) {
          changed = true;
          i += 2;
        } else {
          next += str[i];
          i++;
        }
      }

      if (i < str.length) next += str[i];
      str = next;
    }

    return str.length == 0 ? 1 : 0;
  }

  static thirdSolution(S) {
    const n = S.length;

    if (n == 0) return 1;

    let opened = [];

    for (let i = 0; i < n; i++) {
      if (S[i] == "{" || S[i] == "[" || S[i] == "(") opened.push(S[i]);
      else {
        const o = opened.length - 1;

        if (opened[o] == "{" && S[i] == "}") opened.pop();
        else if (opened[o] == "[" && S[i] == "]") opened.pop();
        else if (opened[o] == "(" && S[i] == ")") opened.pop();
        else return 0;
      }
    }

    return opened.length == 0 ? 1 : 0;
  }
}

module.exports = { Brackets };
