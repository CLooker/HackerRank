// https://www.hackerrank.com/challenges/find-digits/problem

const findDigits = n =>
  n
    .toString()
    .split("")
    .map(digit => (n % digit === 0 ? 1 : 0))
    .reduce((sum, item) => (sum += item));
