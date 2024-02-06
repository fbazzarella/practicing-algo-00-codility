class BinaryGap {
  static firstSolution(N) {
    const binaryRepr = N.toString(2);

    let longestGap = 0;
    let currentGap = 0;
  
    for(let bit of binaryRepr) {
      if(bit == '0') currentGap++;
      else {
        if(currentGap > longestGap) longestGap = currentGap;
        currentGap = 0;
      };
    };

    return longestGap;
  };

  static secondSolution(N) {
    const binaryRepr = N.toString(2);
    const gaps = binaryRepr.match(/(?<=1)0+(?=1)/g);

    return (gaps ? Math.max(...gaps.map(e => e.length)) : 0);
  };
};

module.exports = { BinaryGap };
