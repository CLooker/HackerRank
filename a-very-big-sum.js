// https://www.hackerrank.com/challenges/a-very-big-sum/problem

// declarative, immutable, implicit return
const aVeryBigSum = (n, ar) => ar.reduce((total, number) => total + number);

// imperative, mutable, explicit return
function aVeryBigSum(n, ar) {
  let total = 0;
  for (let i = 0; i < ar.length; i++) {
    total += ar[i];
  }
  return total;
}

