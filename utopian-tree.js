// https://www.hackerrank.com/challenges/utopian-tree/problem

function utopianTree(n) {
  let height = 1;
  let spring = (h) => h * 2;
  let summer = (h) => h + 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      height = summer(height);
    } else {
      height = spring(height);
    }
  }
  return height;
}
