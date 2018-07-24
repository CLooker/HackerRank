// https://www.hackerrank.com/challenges/between-two-sets/problem

const getTotalX = (a, b) => {
  // every element of a
  // divides evenly into every element of aFactors
  const aFactors = (() => {
    let arr = [];
    const firstBNum = b[0];

    for (
      let possibleFactor = 1;
      possibleFactor <= firstBNum;
      possibleFactor++
    ) {
      let isFactor = true;

      for (const aNum of a) {
        const isNotFactor = possibleFactor % aNum !== 0;
        if (isNotFactor) {
          isFactor = false;
          break;
        }
      }

      if (isFactor) arr.push(possibleFactor);
    }

    return arr;
  })();

  // every element of a
  // divides evenly into every element of allXs
  // every element of allXs
  // divides evenly into every element of b
  const allXs = (() => {
    let arr = [];

    for (const aFactor of aFactors) {
      let isX = true;
      for (const bNum of b) {
        const isNotX = bNum % aFactor !== 0;
        if (isNotX) {
          isX = false;
          break;
        }
      }
      if (isX) arr.push(aFactor);
    }

    return arr;
  })();

  return allXs.length;
};
