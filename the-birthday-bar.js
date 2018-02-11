// https://www.hackerrank.com/challenges/the-birthday-bar/problem

const solve = (n, s, d, m) => (
  s.reduce(({ result, tempSum }, item, i) => {
    for (let j = i; j < i + m; j++) {
      tempSum += s[j];
    }
    return tempSum === d ? {result: ++result, tempSum: 0} : {result, tempSum: 0};
  }, {result: 0, tempSum: 0}).result
)

// imperative
function solve(n, s, d, m) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let tempSum = 0;
    for (let j = i; j < i + m; j++) {
      tempSum += s[j];
    }
    if (tempSum === d) {
      ++result;
    }
  }
  return result;
}
