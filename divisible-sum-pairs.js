// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

const divisibleSumPairs = (_, divisor, nums) => {
  let total = 0;

  nums.forEach((num, i) => {
    const nextNums = nums.slice(i + 1);
    nextNums.forEach(nextNum => {
      const sumPair = num + nextNum;
      const isDivisibleSumPair = sumPair % divisor === 0;
      if (isDivisibleSumPair) total++;
    });
  });

  return total;
};
