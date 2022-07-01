const divisibleSumPairs = (_, divisor, nums) =>
  nums.reduce(
    (total, num, i) =>
      total +
      nums.slice(i + 1).filter(nextNum => (num + nextNum) % divisor === 0)
        .length,
    0
  );
