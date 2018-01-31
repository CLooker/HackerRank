// https://www.hackerrank.com/challenges/a-very-big-sum/problem

const aVeryBigSum = (n, ar) => (
  ar.reduce((total, number) => total += number)
)
