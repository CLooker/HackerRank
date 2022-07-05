const pickingNumbers = nums => {
  const validNumSeqs = nums.map((num, numIdx) => {
    const validNumSeq = [num];

    nums.forEach((otherNum, otherNumIdx) => {
      if (numIdx === otherNumIdx) return;

      const isValidNum = validNumSeq.every(validNum => {
        const difference = Math.abs(validNum - otherNum);
        return difference <= 1;
      });

      if (isValidNum) validNumSeq.push(otherNum);
    });

    return validNumSeq;
  });

  const longest = validNumSeqs.reduce((longest, validNumSeq) => {
    const { length } = validNumSeq;
    const isLongest = length > longest;
    return isLongest ? length : longest;
  }, 0);

  return longest;
};
