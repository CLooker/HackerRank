// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function solve(n, s, d, m) {
  return s.reduce((result, item, index) => {
    let tempSum = 0;
    for (let i = index; i < index + m; i++) {
      tempSum = tempSum + s[i];
    }
    return tempSum === d ? result = result + 1 : result;
  }, 0);
}
