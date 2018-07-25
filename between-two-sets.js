// https://www.hackerrank.com/challenges/between-two-sets/problem

const getTotalX = (a, b) => {
  const getAFactorsOrXs = ({ nums, otherNums, getAFactors = false }) => {
    let arr = [];

    for (const num of nums) {
      let isValidForAll = true;

      for (const otherNum of otherNums) {
        const numerator = getAFactors ? num : otherNum;
        const denominator = getAFactors ? otherNum : num;
        const isValid = numerator % denominator === 0;
        if (!isValid) {
          isValidForAll = false;
          break;
        }
      }

      if (isValidForAll) arr.push(num);
    }

    return arr;
  };

  const lastPossibleAFactor = b[0];
  const possibleAFactors = Array.from(Array(lastPossibleAFactor)).map(
    (_, i) => ++i
  );

  // every element of `a`
  // divides evenly into every element of `aFactors`
  const aFactors = getAFactorsOrXs({
    nums: possibleAFactors,
    otherNums: a,
    getAFactors: true
  });

  // every element of `a`
  // divides evenly into every element of `allXs`
  // every element of `allXs`
  // divides evenly into every element of `b`
  const allXs = getAFactorsOrXs({ nums: aFactors, otherNums: b });

  return allXs.length;
};
