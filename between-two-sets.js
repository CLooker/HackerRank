// https://www.hackerrank.com/challenges/between-two-sets/problem

const getTotalX = (a, b) => {
  const getPossibleFactors = (nums, denoms) => {
    const firstPossibleFactor = nums[nums.length - 1];
    const lastPossibleFactor = denoms[0];
    const possibleFactors = (() => {
      let possibleFs = [];
      for (
        let possibleFactor = firstPossibleFactor;
        possibleFactor <= lastPossibleFactor;
        possibleFactor += firstPossibleFactor
      ) {
        possibleFs.push(possibleFactor);
      }
      return possibleFs;
    })();
    return possibleFactors;
  };

  const getAFactorsOrXs = type => (nums, otherNums) => {
    const isGettingAFactors = type === 'getAFactors';

    const validNums = nums.filter(num => {
      const isNumValidForAll = otherNums.every(otherNum => {
        const numerator = isGettingAFactors ? num : otherNum;
        const denominator = isGettingAFactors ? otherNum : num;
        const isNumValid = numerator % denominator === 0;
        return isNumValid;
      });

      return isNumValidForAll;
    });

    return validNums;
  };

  const getAFactors = getAFactorsOrXs('getAFactors');
  const possibleAFactors = getPossibleFactors(a, b);
  const aFactors = getAFactors(possibleAFactors, a);

  const getXs = getAFactorsOrXs('getXs');
  const xS = getXs(aFactors, b);

  return xS.length;
};
