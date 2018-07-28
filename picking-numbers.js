// https://www.hackerrank.com/challenges/picking-numbers/problem

const pickingNumbers = integers => {
  let validSeqs = [];

  for (const [intIdx, integer] of integers.entries()) {
    let validSeq = [integer];

    for (const [otherIntIdx, otherInteger] of integers.entries()) {
      const isSameIndex = intIdx === otherIntIdx;
      if (isSameIndex) continue;

      const isValidOtherInteger = validSeq.every(integer => {
        const difference = Math.abs(integer - otherInteger);
        const isValidDifference = difference <= 1;
        return isValidDifference;
      });
      if (isValidOtherInteger) validSeq.push(otherInteger);
    }

    validSeqs.push(validSeq);
  }

  const longestValidSeq = validSeqs.reduce((longest, validSeq) => {
    const { length } = validSeq;
    const isLongest = length > longest;
    return isLongest ? length : longest;
  }, 0);

  return longestValidSeq;
};
