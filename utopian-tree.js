// https://www.hackerrank.com/challenges/utopian-tree/problem

// declarative, immutable, implicit return
const utopianTree = n =>
  n > 0
    ? Array.from(Array(n))
        .map((_, i) => ++i)
        .reduce((h, i) => (i % 2 === 0 ? ++h : h * 2), 1)
    : 1;

// imperative, mutable, explicit return
function utopianTree(n) {
  let height = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      ++height;
    } else {
      height = height * 2;
    }
  }
  return height;
}
